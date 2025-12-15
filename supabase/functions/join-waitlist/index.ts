import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')

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
    const { data: existing } = await supabaseClient
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

    // Send emails via Resend
    if (RESEND_API_KEY) {
      try {
        // Send confirmation to user
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${RESEND_API_KEY}`
          },
          body: JSON.stringify({
            from: 'noreply@thespiceapp.com',
            to: email,
            subject: 'Welcome to the SPICE Waitlist! 🌶️',
            html: `
              <h1>Welcome to SPICE!</h1>
              <p>Hi ${name || 'there'},</p>
              <p>Thank you for joining the SPICE waitlist! We're excited to have you on board.</p>
              <p>You'll be among the first to know when we launch. Get ready for something special! ✨</p>
              <br>
              <p>Best regards,<br>The SPICE Team</p>
            `
          })
        })

        // Send notification to support
        await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${RESEND_API_KEY}`
          },
          body: JSON.stringify({
            from: 'noreply@thespiceapp.com',
            to: 'support@thespiceapp.com',
            subject: `New Waitlist Signup: ${email}`,
            html: `
              <h2>New Waitlist Signup</h2>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Name:</strong> ${name || 'Not provided'}</p>
              <p><strong>Source:</strong> ${source}</p>
              <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
            `
          })
        })
      } catch (emailError) {
        console.error('Email error (non-blocking):', emailError)
        // Don't fail the request if email fails
      }
    }

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
