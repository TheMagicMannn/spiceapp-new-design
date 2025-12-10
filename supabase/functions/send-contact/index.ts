import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, subject, message }: ContactRequest = await req.json();

    if (!name || !email || !subject || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    if (!email.includes("@")) {
      return new Response(
        JSON.stringify({ error: "Invalid email address" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Send notification email to SPICE team
    const notificationResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "SPICE Contact <onboarding@resend.dev>",
        to: ["kwitter1982@gmail.com"],
        reply_to: email,
        subject: `[Contact Form] ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); color: #ffffff;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="font-size: 48px; margin: 0; background: linear-gradient(135deg, #ff6b9d, #c44569); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">SPICE</h1>
            </div>
            <h2 style="color: #ff6b9d; text-align: center;">New Contact Form Submission 📩</h2>
            <div style="background: rgba(255,255,255,0.05); border-radius: 10px; padding: 20px; margin: 20px 0;">
              <p style="color: #cccccc; margin: 10px 0;"><strong style="color: #ff6b9d;">From:</strong> ${name}</p>
              <p style="color: #cccccc; margin: 10px 0;"><strong style="color: #ff6b9d;">Email:</strong> ${email}</p>
              <p style="color: #cccccc; margin: 10px 0;"><strong style="color: #ff6b9d;">Subject:</strong> ${subject}</p>
            </div>
            <div style="background: rgba(255,255,255,0.05); border-radius: 10px; padding: 20px; margin: 20px 0;">
              <p style="color: #ff6b9d; margin: 0 0 10px 0;"><strong>Message:</strong></p>
              <p style="color: #cccccc; white-space: pre-wrap; margin: 0;">${message}</p>
            </div>
            <p style="color: #888888; font-size: 12px; text-align: center;">
              Submitted at: ${new Date().toLocaleString()}
            </p>
          </div>
        `,
      }),
    });

    const notificationData = await notificationResponse.json();
    console.log("Notification email response:", notificationData);

    // Send confirmation email to user
    const confirmationResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "SPICE <noreply@thespiceapp.com>",
        to: [email],
        subject: "We received your message! 💌",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); color: #ffffff;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="font-size: 48px; margin: 0; background: linear-gradient(135deg, #ff6b9d, #c44569); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">SPICE</h1>
            </div>
            <h2 style="color: #ff6b9d; text-align: center;">Thanks for reaching out, ${name}! 💌</h2>
            <p style="color: #cccccc; line-height: 1.8; text-align: center;">
              We've received your message and will get back to you as soon as possible.
            </p>
            <div style="background: rgba(255,255,255,0.05); border-radius: 10px; padding: 20px; margin: 20px 0;">
              <p style="color: #888888; font-size: 14px; margin: 0 0 10px 0;"><strong style="color: #ff6b9d;">Your message:</strong></p>
              <p style="color: #cccccc; font-size: 14px; white-space: pre-wrap; margin: 0;">${message}</p>
            </div>
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #333;">
              <p style="color: #888888; font-size: 12px;">
                © ${new Date().getFullYear()} SPICE. All rights reserved.
              </p>
            </div>
          </div>
        `,
      }),
    });

    const confirmationData = await confirmationResponse.json();
    console.log("Confirmation email response:", confirmationData);

    return new Response(
      JSON.stringify({ success: true, message: "Message sent successfully!" }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Something went wrong";
    console.error("Error in send-contact function:", error);
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
