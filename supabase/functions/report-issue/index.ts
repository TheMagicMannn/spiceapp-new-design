// Supabase Edge Function: report-issue
// Location: supabase/functions/report-issue/index.ts

import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface ReportIssueRequest {
  report_type: string;
  subject: string;
  details: string;
  email: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Parse request body
    const { report_type, subject, details, email }: ReportIssueRequest = await req.json()

    // Validate required fields
    if (!report_type || !subject || !details || !email) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Validate email format
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email address format' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Validate report type
    const validTypes = ['safety', 'user', 'bug', 'content', 'feedback']
    if (!validTypes.includes(report_type)) {
      return new Response(
        JSON.stringify({ error: `Invalid report type. Must be one of: ${validTypes.join(', ')}` }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Initialize Supabase client
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Generate report ID
    const reportId = crypto.randomUUID()

    // Save to database
    const { data: reportData, error: dbError } = await supabaseClient
      .from('issue_reports')
      .insert({
        id: reportId,
        report_type,
        subject,
        details,
        email: email.toLowerCase(),
        status: 'new',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      })
      .select()
      .single()

    // Log database error but continue with email
    if (dbError) {
      console.warn('Database error (continuing with email):', dbError)
    }

    // Send email via Resend
    const resendApiKey = Deno.env.get('RESEND_API_KEY')
    const senderEmail = Deno.env.get('SENDER_EMAIL') || 'noreply@thespiceapp.com'
    const supportEmail = Deno.env.get('SUPPORT_EMAIL') || 'support@thespiceapp.com'

    if (resendApiKey) {
      try {
        // Report type labels and styling
        const reportLabels: Record<string, string> = {
          safety: '🚨 Safety Concern',
          user: '👤 Report a User',
          bug: '🐛 Technical Bug',
          content: '🚩 Content Violation',
          feedback: '💬 General Feedback'
        }

        const reportLabel = reportLabels[report_type] || '📝 Issue Report'
        const isUrgent = report_type === 'safety'

        // HTML email template
        const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.6;
      color: #333;
      margin: 0;
      padding: 0;
      background-color: #f4f4f4;
    }
    .container {
      max-width: 600px;
      margin: 20px auto;
      background: #ffffff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .header {
      background: linear-gradient(135deg, #e63946 0%, #ff6b6b 100%);
      color: white;
      padding: 30px 20px;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
      font-weight: 600;
    }
    .content {
      padding: 30px 20px;
    }
    .badge {
      display: inline-block;
      background: #e63946;
      color: white;
      padding: 6px 12px;
      border-radius: 20px;
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 20px;
    }
    .field {
      margin-bottom: 20px;
    }
    .label {
      font-weight: 600;
      color: #555;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 5px;
    }
    .value {
      color: #333;
      font-size: 16px;
      padding: 10px;
      background: #f8f9fa;
      border-radius: 4px;
      border-left: 3px solid #e63946;
    }
    .details {
      white-space: pre-wrap;
      word-wrap: break-word;
    }
    .footer {
      background: #f8f9fa;
      padding: 20px;
      text-align: center;
      color: #666;
      font-size: 12px;
      border-top: 1px solid #e0e0e0;
    }
    .urgent {
      background: #dc3545;
      color: white;
      padding: 15px;
      border-radius: 4px;
      margin-bottom: 20px;
      font-weight: 600;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Issue Report</h1>
      <p style="margin: 5px 0 0 0; opacity: 0.9;">SPICE App Support</p>
    </div>
    <div class="content">
      <div class="badge">${reportLabel}</div>
      
      ${isUrgent ? '<div class="urgent">⚠️ PRIORITY: This is a safety concern that requires immediate attention!</div>' : ''}
      
      <div class="field">
        <div class="label">Report ID</div>
        <div class="value">${reportId}</div>
      </div>
      
      <div class="field">
        <div class="label">Subject</div>
        <div class="value">${subject}</div>
      </div>
      
      <div class="field">
        <div class="label">Details</div>
        <div class="value details">${details}</div>
      </div>
      
      <div class="field">
        <div class="label">Reporter Email</div>
        <div class="value">${email}</div>
      </div>
      
      <div class="field">
        <div class="label">Submitted At</div>
        <div class="value">${new Date().toUTCString()}</div>
      </div>
    </div>
    <div class="footer">
      <p>This report was submitted through the SPICE App issue reporting system.</p>
      <p>Please respond within 24-48 hours to maintain user trust and safety.</p>
    </div>
  </div>
</body>
</html>
        `

        // Send email via Resend
        const emailResponse = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${resendApiKey}`
          },
          body: JSON.stringify({
            from: senderEmail,
            to: [supportEmail],
            subject: `[${reportLabel}] ${subject}`,
            html: htmlContent
          })
        })

        const emailResult = await emailResponse.json()

        if (!emailResponse.ok) {
          console.error('Resend API error:', emailResult)
        } else {
          console.log('Email sent successfully. Email ID:', emailResult.id)
        }
      } catch (emailError) {
        console.error('Failed to send email:', emailError)
        // Don't fail the request if email fails
      }
    }

    // Return success response
    return new Response(
      JSON.stringify({
        success: true,
        message: "Your report has been submitted successfully. Our team will review it within 24-48 hours.",
        report_id: reportId
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )

  } catch (error) {
    console.error('Error processing report:', error)
    return new Response(
      JSON.stringify({ error: error.message || 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})
