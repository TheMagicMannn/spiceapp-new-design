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
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    console.log('Analyzing quiz responses:', JSON.stringify(responses));

    const systemPrompt = `You are an expert relationship and intimacy counselor specializing in BDSM dynamics and alternative lifestyles. 
Your role is to analyze quiz responses and provide thoughtful, non-judgmental insights about someone's preferences and compatibility profile.

Based on the quiz responses provided, generate:
1. A brief personality summary (2-3 sentences) describing their intimacy style
2. Key traits (list 4-6 traits with brief descriptions)
3. Compatibility insights (what they might look for in a partner)
4. Growth areas (gentle suggestions for exploration)
5. A compatibility score breakdown in categories: Dominance/Submission spectrum (0-100), Communication style, Experience level, Openness to exploration

Format your response as valid JSON with this structure:
{
  "personalitySummary": "string",
  "keyTraits": [{"trait": "string", "description": "string"}],
  "compatibilityInsights": "string",
  "growthAreas": ["string"],
  "scores": {
    "dominanceSubmission": number (0=full sub, 50=switch, 100=full dom),
    "communicationStyle": "string",
    "experienceLevel": "string",
    "opennessToExploration": number (0-100)
  },
  "archetype": "string" (a creative name for their profile type)
}

Be sex-positive, inclusive, and respectful. Focus on emotional intelligence and consent.`;

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: `Please analyze these quiz responses and generate insights:\n\n${JSON.stringify(responses, null, 2)}` }
        ],
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
