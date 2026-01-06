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
    
    console.log('Analyzing quiz responses via backend API');
    console.log('Number of responses:', responses.length);

    // Call the backend API which has Emergent integration properly set up
    const BACKEND_URL = Deno.env.get('BACKEND_URL') || 'https://spice-navigator.preview.emergentagent.com';
    
    const response = await fetch(`${BACKEND_URL}/api/analyze-quiz`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ responses }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Backend API error:', response.status, errorText);
      throw new Error(`Backend API error: ${response.status}`);
    }

    const data = await response.json();
    
    if (!data.success || !data.insights) {
      console.error('Invalid response from backend:', data);
      throw new Error('Invalid response structure from backend');
    }
    
    console.log('Successfully received insights from backend');

    return new Response(JSON.stringify({ success: true, insights: data.insights }), {
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
