import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { responses } = await req.json();
    const EMERGENT_LLM_KEY = Deno.env.get('EMERGENT_LLM_KEY');
    
    if (!EMERGENT_LLM_KEY) {
      throw new Error('EMERGENT_LLM_KEY is not configured');
    }

    console.log('Analyzing quiz responses:', JSON.stringify(responses));

    const systemPrompt = `You are an expert BDSM/kink relationship psychologist and compatibility analyst. Analyze the quiz responses and provide a comprehensive personality profile.

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

Be specific, insightful, and non-judgmental. Focus on understanding their unique preferences and providing actionable compatibility insights.`;

    const response = await fetch('https://api.emergent.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${EMERGENT_LLM_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gemini/gemini-2.5-flash',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: `Please analyze these quiz responses and generate insights:\n\n${JSON.stringify(responses, null, 2)}` }
        ],
        temperature: 0.7,
        max_tokens: 2500
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('AI gateway error:', response.status, errorText);
      
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: 'Rate limit exceeded. Please try again in a moment.' }), {
          status: 429,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: 'Service temporarily unavailable.' }), {
          status: 402,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
      
      throw new Error(`AI gateway error: ${response.status}`);
    }

    const data = await response.json();
    const aiResponse = data.choices?.[0]?.message?.content;
    
    console.log('AI response:', aiResponse);

    // Parse the JSON from the AI response
    let insights;
    try {
      // Extract JSON from the response (it might be wrapped in markdown code blocks)
      const jsonMatch = aiResponse.match(/```json\n?([\s\S]*?)\n?```/) || 
                        aiResponse.match(/\{[\s\S]*\}/);
      const jsonStr = jsonMatch ? (jsonMatch[1] || jsonMatch[0]) : aiResponse;
      insights = JSON.parse(jsonStr);
    } catch (parseError) {
      console.error('Failed to parse AI response as JSON:', parseError);
      insights = {
        personalitySummary: aiResponse,
        keyTraits: [],
        compatibilityInsights: '',
        growthAreas: [],
        scores: {
          dominanceSubmission: 50,
          communicationStyle: 'Balanced',
          experienceLevel: 'Curious',
          opennessToExploration: 70
        },
        archetype: 'Explorer'
      };
    }

    return new Response(JSON.stringify({ insights }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in analyze-bdsm-quiz:', error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
