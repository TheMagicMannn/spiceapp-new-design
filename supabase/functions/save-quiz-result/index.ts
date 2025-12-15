import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

function generateShareToken(): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let token = '';
  for (let i = 0; i < 12; i++) {
    token += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return token;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      {
        global: {
          headers: { Authorization: req.headers.get('Authorization')! },
        },
      }
    )

    const { responses, insights, email, isPublic = false } = await req.json()

    // Validate required fields
    if (!responses || !insights) {
      return new Response(
        JSON.stringify({ error: 'Responses and insights are required' }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 400 
        }
      )
    }

    // Get user ID if authenticated
    const { data: { user } } = await supabaseClient.auth.getUser()

    // Generate share token
    const shareToken = generateShareToken()

    // Insert quiz result
    const { data, error } = await supabaseClient
      .from('quiz_results')
      .insert({
        user_id: user?.id || null,
        email: email || null,
        responses,
        insights,
        share_token: shareToken,
        is_public: isPublic,
        view_count: 0
      })
      .select()
      .single()

    if (error) {
      console.error('Database error:', error)
      throw error
    }

    return new Response(
      JSON.stringify({ 
        success: true,
        message: 'Quiz results saved successfully!',
        data,
        shareUrl: `${req.headers.get('origin')}/quiz/results/${shareToken}`
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 201 
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
