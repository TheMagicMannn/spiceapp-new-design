import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
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

    const { email, name, source = 'unknown', metadata = {} } = await req.json()

    // Validate email
    if (!email || !email.includes('@')) {
      return new Response(
        JSON.stringify({ error: 'Valid email is required' }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 400 
        }
      )
    }

    // Check if email already exists
    const { data: existing, error: checkError } = await supabaseClient
      .from('waitlist')
      .select('email')
      .eq('email', email.toLowerCase())
      .single()

    if (existing) {
      return new Response(
        JSON.stringify({ 
          message: 'You are already on the waitlist!',
          alreadyExists: true 
        }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200 
        }
      )
    }

    // Insert into waitlist
    const { data, error } = await supabaseClient
      .from('waitlist')
      .insert({
        email: email.toLowerCase(),
        name: name || null,
        source,
        metadata: {
          ...metadata,
          user_agent: req.headers.get('user-agent'),
          timestamp: new Date().toISOString()
        }
      })
      .select()
      .single()

    if (error) {
      console.error('Database error:', error)
      throw error
    }

    // TODO: Send welcome email via Resend or SendGrid
    // await sendWelcomeEmail(email, name)

    return new Response(
      JSON.stringify({ 
        success: true,
        message: 'Successfully joined the waitlist!',
        data 
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
