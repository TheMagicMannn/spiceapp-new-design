from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List, Dict, Any, Optional
import uuid
from datetime import datetime
import json
import asyncio
from emergentintegrations.llm.chat import LlmChat, UserMessage


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    _ = await db.status_checks.insert_one(status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]


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

# Contact Form Endpoint
@api_router.post("/contact")
async def submit_contact(request: ContactRequest):
    try:
        # Save to database
        contact_doc = {
            "name": request.name,
            "email": request.email.lower(),
            "subject": request.subject,
            "message": request.message,
            "status": "new",
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        }
        
        result = await db.contact_messages.insert_one(contact_doc)
        
        logger.info(f"Contact form submitted: {request.email}")
        
        return {
            "success": True,
            "message": "Message sent successfully!",
            "id": str(result.inserted_id)
        }
    except Exception as e:
        logger.error(f"Contact form error: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

# Waitlist Endpoint
@api_router.post("/waitlist")
async def join_waitlist(request: WaitlistRequest):
    try:
        # Check if email already exists
        existing = await db.waitlist.find_one({"email": request.email.lower()})
        
        if existing:
            return {
                "success": True,
                "message": "You're already on the waitlist!",
                "alreadyExists": True
            }
        
        # Add to waitlist
        waitlist_doc = {
            "email": request.email.lower(),
            "name": request.name,
            "source": request.source,
            "created_at": datetime.utcnow(),
            "updated_at": datetime.utcnow()
        }
        
        result = await db.waitlist.insert_one(waitlist_doc)
        
        logger.info(f"Added to waitlist: {request.email}")
        
        return {
            "success": True,
            "message": "Successfully joined the waitlist!",
            "id": str(result.inserted_id)
        }
    except Exception as e:
        logger.error(f"Waitlist error: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

# AI-Powered Quiz Analysis Endpoint
@api_router.post("/analyze-quiz")
async def analyze_quiz(request: QuizAnalysisRequest):
    try:
        # Get Emergent LLM key
        api_key = os.environ.get('EMERGENT_LLM_KEY')
        if not api_key:
            raise HTTPException(status_code=500, detail="API key not configured")
        
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

        # Initialize LLM chat
        chat = LlmChat(
            api_key=api_key,
            session_id=f"quiz-analysis-{uuid.uuid4()}",
            system_message="You are an expert BDSM/kink relationship psychologist. Provide detailed, non-judgmental, accurate analysis in valid JSON format only. No markdown, no code blocks, just pure JSON."
        ).with_model("openai", "gpt-5.1")
        
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

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
