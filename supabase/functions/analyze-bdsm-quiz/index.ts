import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const EMERGENT_LLM_KEY = Deno.env.get('EMERGENT_LLM_KEY')
const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions'

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { responses } = await req.json()

    if (!responses || !Array.isArray(responses)) {
      return new Response(
        JSON.stringify({ error: 'Responses array is required' }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 400 
        }
      )
    }

    if (!EMERGENT_LLM_KEY) {
      return new Response(
        JSON.stringify({ error: 'API key not configured' }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 500 
        }
      )
    }

    // Format responses for AI
    const formattedResponses = responses.map(r => ({
      question_id: r.questionId,
      answer: r.answer
    }))

    // Create comprehensive prompt for AI analysis
    const analysisPrompt = `You are an expert BDSM/kink relationship psychologist and compatibility analyst. Analyze the following quiz responses and provide a comprehensive personality profile.

Quiz Responses:
${JSON.stringify(formattedResponses, null, 2)}

Based on these responses, provide a detailed analysis in JSON format with the following structure:

{
  "personalitySummary": "2-3 paragraph comprehensive summary of the person's BDSM identity, preferences, and approach",
  "keyTraits": [
    {"trait": "Trait Name", "description": "Detailed description"},
    // 3-4 key traits
  ],
  "compatibilityInsights": "Detailed paragraph about ideal partner compatibility",
  "growthAreas": ["Area 1", "Area 2", "Area 3", "Area 4"],
  "scores": {
    "dominanceSubmission": 0-100,
    "communicationStyle": "Direct & Clear",
    "experienceLevel": "Beginner/Intermediate/Experienced",
    "opennessToExploration": 0-100
  },
  "archetype": "Primary Role - Style",
  "lifestyle": {
    "primary": "Lifestyle Type",
    "secondary": ["Secondary trait 1", "Secondary trait 2"],
    "description": "Detailed lifestyle description"
  },
  "bdsmRole": {
    "primary": "Primary Role",
    "secondary": ["Secondary role if applicable"],
    "style": ["Style 1", "Style 2"],
    "description": "Detailed role description"
  },
  "topKinks": [
    {
      "name": "Kink Name",
      "interest": "high/medium/low",
      "description": "Why this interests them"
    },
    // Top 5-8 kinks
  ],
  "hardLimits": ["Limit 1", "Limit 2"],
  "idealPartner": "Detailed 2-3 sentence description of ideal partner"
}

Be specific, insightful, and non-judgmental. Focus on understanding their unique preferences and providing actionable compatibility insights. Return ONLY valid JSON, no markdown.`

    // Call OpenAI API with Emergent key
    const aiResponse = await fetch(OPENAI_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${EMERGENT_LLM_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-5.1',
        messages: [
          {
            role: 'system',
            content: 'You are an expert BDSM/kink relationship psychologist. Provide detailed, non-judgmental, accurate analysis in valid JSON format only. No markdown, no code blocks, just pure JSON.'
          },
          {
            role: 'user',
            content: analysisPrompt
          }
        ],
        temperature: 0.7,
        max_tokens: 2000
      })
    })

    if (!aiResponse.ok) {
      const errorText = await aiResponse.text()
      console.error('OpenAI API error:', errorText)
      throw new Error(`AI API failed: ${aiResponse.status}`)
    }

    const aiData = await aiResponse.json()
    const content = aiData.choices[0]?.message?.content

    if (!content) {
      throw new Error('No content in AI response')
    }

    // Parse and clean JSON
    let insights
    try {
      let cleanedContent = content.trim()
      
      // Remove markdown code blocks if present
      if (cleanedContent.startsWith('```')) {
        cleanedContent = cleanedContent
          .replace(/```json\n?/g, '')
          .replace(/```\n?/g, '')
          .trim()
      }
      
      insights = JSON.parse(cleanedContent)
    } catch (parseError) {
      console.error('JSON parse error:', parseError)
      console.error('Content:', content)
      throw new Error('Failed to parse AI response as JSON')
    }

    // Validate structure
    const requiredKeys = [
      'personalitySummary', 'keyTraits', 'compatibilityInsights',
      'growthAreas', 'scores', 'archetype', 'lifestyle', 'bdsmRole',
      'topKinks', 'hardLimits', 'idealPartner'
    ]

    for (const key of requiredKeys) {
      if (!(key in insights)) {
        throw new Error(`Invalid response structure: missing ${key}`)
      }
    }

    return new Response(
      JSON.stringify({ 
        success: true,
        insights 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    )
  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ error: error.message || 'Internal server error' }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    )
  }
})
