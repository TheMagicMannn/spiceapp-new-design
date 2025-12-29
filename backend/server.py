from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from supabase import create_client, Client
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List, Dict, Any, Optional
import uuid
from datetime import datetime, timezone
import json
from emergentintegrations.llm.chat import LlmChat, UserMessage
import resend
import asyncio


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Supabase connection
supabase_url = os.environ.get('SUPABASE_URL')
supabase_key = os.environ.get('SUPABASE_SERVICE_ROLE_KEY')

if not supabase_url or not supabase_key:
    raise ValueError("SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set in environment variables")

supabase: Client = create_client(supabase_url, supabase_key)

# Resend API configuration
resend_api_key = os.environ.get('RESEND_API_KEY')
sender_email = os.environ.get('SENDER_EMAIL', 'onboarding@resend.dev')
support_email = os.environ.get('SUPPORT_EMAIL', 'support@thespiceapp.com')

if resend_api_key:
    resend.api_key = resend_api_key

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_obj = StatusCheck(client_name=input.client_name)
    
    # Insert into Supabase
    data = {
        "id": status_obj.id,
        "client_name": status_obj.client_name,
        "timestamp": status_obj.timestamp.isoformat()
    }
    
    result = supabase.table("status_checks").insert(data).execute()
    
    if not result.data:
        raise HTTPException(status_code=500, detail="Failed to insert status check")
    
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    result = supabase.table("status_checks").select("*").execute()
    
    status_checks = []
    for record in result.data:
        status_checks.append(StatusCheck(
            id=record["id"],
            client_name=record["client_name"],
            timestamp=datetime.fromisoformat(record["timestamp"].replace("Z", "+00:00"))
        ))
    
    return status_checks


# BDSM Quiz Models
class QuizResponse(BaseModel):
    questionId: str
    answer: Any  # Can be string, number, or list

class QuizAnalysisRequest(BaseModel):
    responses: List[QuizResponse]

class QuizInsights(BaseModel):
    personalitySummary: str
    keyTraits: List[Dict[str, str]]
    compatibilityInsights: str
    growthAreas: List[str]
    scores: Dict[str, Any]
    archetype: str
    lifestyle: Dict[str, Any]
    bdsmRole: Dict[str, Any]
    topKinks: List[Dict[str, Any]]
    hardLimits: List[str]
    idealPartner: str

# Contact Form Models
class ContactRequest(BaseModel):
    name: str
    email: str
    subject: str
    message: str

class WaitlistRequest(BaseModel):
    email: str
    name: Optional[str] = None
    source: Optional[str] = "unknown"

class ReportIssueRequest(BaseModel):
    report_type: str
    subject: str
    details: str
    email: EmailStr

# Contact Form Endpoint
@api_router.post("/contact")
async def submit_contact(request: ContactRequest):
    try:
        # Save to Supabase
        contact_doc = {
            "id": str(uuid.uuid4()),
            "name": request.name,
            "email": request.email.lower(),
            "subject": request.subject,
            "message": request.message,
            "status": "new",
            "created_at": datetime.now(timezone.utc).isoformat(),
            "updated_at": datetime.now(timezone.utc).isoformat()
        }
        
        result = supabase.table("contact_messages").insert(contact_doc).execute()
        
        if not result.data:
            raise HTTPException(status_code=500, detail="Failed to save contact message")
        
        logger.info(f"Contact form submitted: {request.email}")
        
        return {
            "success": True,
            "message": "Message sent successfully!",
            "id": contact_doc["id"]
        }
    except Exception as e:
        logger.error(f"Contact form error: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

# Waitlist Endpoint
@api_router.post("/waitlist")
async def join_waitlist(request: WaitlistRequest):
    try:
        # Check if email already exists
        existing = supabase.table("waitlist").select("*").eq("email", request.email.lower()).execute()
        
        if existing.data and len(existing.data) > 0:
            return {
                "success": True,
                "message": "You're already on the waitlist!",
                "alreadyExists": True
            }
        
        # Add to waitlist
        waitlist_doc = {
            "id": str(uuid.uuid4()),
            "email": request.email.lower(),
            "name": request.name,
            "source": request.source,
            "created_at": datetime.now(timezone.utc).isoformat(),
            "updated_at": datetime.now(timezone.utc).isoformat()
        }
        
        result = supabase.table("waitlist").insert(waitlist_doc).execute()
        
        if not result.data:
            raise HTTPException(status_code=500, detail="Failed to add to waitlist")
        
        logger.info(f"Added to waitlist: {request.email}")
        
        return {
            "success": True,
            "message": "Successfully joined the waitlist!",
            "id": waitlist_doc["id"]
        }
    except Exception as e:
        logger.error(f"Waitlist error: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

# AI-Powered Quiz Analysis Endpoint
@api_router.post("/analyze-quiz")
async def analyze_quiz(request: QuizAnalysisRequest):
    try:
        # Get Emergent LLM key from environment
        api_key = os.environ.get('EMERGENT_LLM_KEY')
        if not api_key:
            raise HTTPException(status_code=500, detail="Emergent LLM key not configured")
        
        # Format responses for AI analysis
        formatted_responses = []
        for resp in request.responses:
            formatted_responses.append({
                "question_id": resp.questionId,
                "answer": resp.answer
            })
        
        # Create comprehensive prompt for AI analysis
        analysis_prompt = f"""You are an expert BDSM/kink relationship psychologist and compatibility analyst. Analyze the following quiz responses and provide a comprehensive personality profile.

Quiz Responses:
{json.dumps(formatted_responses, indent=2)}

Based on these responses, provide a detailed analysis in JSON format with the following structure:

{{
  "personalitySummary": "2-3 paragraph comprehensive summary of the person's BDSM identity, preferences, and approach",
  "keyTraits": [
    {{"trait": "Trait Name", "description": "Detailed description"}},
    // 3-4 key traits
  ],
  "compatibilityInsights": "Detailed paragraph about ideal partner compatibility",
  "growthAreas": ["Area 1", "Area 2", "Area 3", "Area 4"],
  "scores": {{
    "dominanceSubmission": 0-100,
    "communicationStyle": "Direct & Clear",
    "experienceLevel": "Beginner/Intermediate/Experienced",
    "opennessToExploration": 0-100
  }},
  "archetype": "Primary Role - Style",
  "lifestyle": {{
    "primary": "Lifestyle Type",
    "secondary": ["Secondary trait 1", "Secondary trait 2"],
    "description": "Detailed lifestyle description"
  }},
  "bdsmRole": {{
    "primary": "Primary Role",
    "secondary": ["Secondary role if applicable"],
    "style": ["Style 1", "Style 2"],
    "description": "Detailed role description"
  }},
  "topKinks": [
    {{
      "name": "Kink Name",
      "interest": "high/medium/low",
      "description": "Why this interests them"
    }},
    // Top 5-8 kinks
  ],
  "hardLimits": ["Limit 1", "Limit 2"],
  "idealPartner": "Detailed 2-3 sentence description of ideal partner"
}}

Be specific, insightful, and non-judgmental. Focus on understanding their unique preferences and providing actionable compatibility insights."""

        # Use Emergent LLM integration with Gemini
        chat = LlmChat(
            api_key=api_key,
            session_id=f"quiz-analysis-{uuid.uuid4()}",
            system_message="You are an expert BDSM/kink relationship psychologist. Provide detailed, non-judgmental, accurate analysis in valid JSON format only. No markdown, no code blocks, just pure JSON."
        ).with_model("gemini", "gemini-2.5-flash")
        
        # Send message and get analysis
        user_message = UserMessage(text=analysis_prompt)
        response_text = await chat.send_message(user_message)
        
        # Parse JSON response
        try:
            # Clean response (remove markdown if present)
            cleaned_response = response_text.strip()
            if cleaned_response.startswith("```"):
                # Remove markdown code blocks
                lines = cleaned_response.split('\n')
                cleaned_response = '\n'.join(lines[1:-1]) if len(lines) > 2 else cleaned_response
                cleaned_response = cleaned_response.replace("```json", "").replace("```", "").strip()
            
            insights = json.loads(cleaned_response)
            
            # Validate the structure
            required_keys = ["personalitySummary", "keyTraits", "compatibilityInsights", 
                           "growthAreas", "scores", "archetype", "lifestyle", "bdsmRole", 
                           "topKinks", "hardLimits", "idealPartner"]
            
            for key in required_keys:
                if key not in insights:
                    logger.error(f"Missing key in AI response: {key}")
                    raise ValueError(f"Invalid response structure: missing {key}")
            
            return {"success": True, "insights": insights}
            
        except json.JSONDecodeError as e:
            logger.error(f"JSON parsing error: {e}")
            logger.error(f"Response text: {response_text}")
            raise HTTPException(status_code=500, detail=f"Failed to parse AI response: {str(e)}")
        
    except Exception as e:
        logger.error(f"Quiz analysis error: {str(e)}")
        raise HTTPException(status_code=500, detail=f"Analysis failed: {str(e)}")

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)
