import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface WaitlistRequest {
  email: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.text();
    if (!body) {
      return new Response(
        JSON.stringify({ error: "Request body is required" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }
    
    const { email }: WaitlistRequest = JSON.parse(body);

    if (!email || !email.includes("@")) {
      return new Response(
        JSON.stringify({ error: "Invalid email address" }),
        { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
      );
    }

    // Create Supabase client
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    // Insert email into waitlist
    const { error: dbError } = await supabase
      .from("waitlist")
      .insert({ email: email.toLowerCase().trim() });

    if (dbError) {
      if (dbError.code === "23505") {
        return new Response(
          JSON.stringify({ error: "You're already on the waitlist!" }),
          { status: 400, headers: { "Content-Type": "application/json", ...corsHeaders } }
        );
      }
      console.error("Database error:", dbError);
      throw new Error("Failed to save to waitlist");
    }

    // Send internal notification email to team
    const notificationResponse = await resend.emails.send({
      from: "SPICE <onboarding@resend.dev>",
      to: ["kwitter1982@gmail.com"],
      subject: "🔥 New Waitlist Signup!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); color: #ffffff;">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="font-size: 48px; margin: 0; background: linear-gradient(135deg, #ff6b9d, #c44569); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">SPICE</h1>
          </div>
          <h2 style="color: #ff6b9d; text-align: center;">New Waitlist Signup! 🎉</h2>
          <p style="color: #cccccc; line-height: 1.8; text-align: center;">
            A new user has joined the SPICE waitlist:
          </p>
          <p style="color: #ff6b9d; font-size: 20px; text-align: center; font-weight: bold;">
            ${email}
          </p>
          <p style="color: #cccccc; line-height: 1.8; text-align: center;">
            Signed up at: ${new Date().toLocaleString()}
          </p>
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #333;">
            <p style="color: #888888; font-size: 12px;">
              © ${new Date().getFullYear()} SPICE. All rights reserved.
            </p>
          </div>
        </div>
      `,
    });

    console.log("Notification email response:", notificationResponse);

    // Send confirmation email to user (may fail if domain not verified)
    try {
      const confirmationResponse = await resend.emails.send({
        from: "SPICE <noreply@thespiceapp.com>",
        to: [email],
        subject: "🔥 You're on the SPICE Waitlist!",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); color: #ffffff;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="font-size: 48px; margin: 0; background: linear-gradient(135deg, #ff6b9d, #c44569); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">SPICE</h1>
            </div>
            <h2 style="color: #ff6b9d; text-align: center;">Welcome to the Waitlist! 🎉</h2>
            <p style="color: #cccccc; line-height: 1.8; text-align: center;">
              You're officially on the list! When we launch, you'll get <strong style="color: #ff6b9d;">2 months of FREE VIP access</strong>.
            </p>
            <p style="color: #cccccc; line-height: 1.8; text-align: center;">
              Get ready for a premium dating experience designed for adventurous adults.
            </p>
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #333;">
              <p style="color: #888888; font-size: 12px;">
                © ${new Date().getFullYear()} SPICE. All rights reserved.
              </p>
            </div>
          </div>
        `,
      });
      console.log("Confirmation email response:", confirmationResponse);
    } catch (emailError) {
      console.log("User confirmation email skipped (domain not verified):", emailError);
    }

    return new Response(
      JSON.stringify({ success: true, message: "You're on the waitlist!" }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error: unknown) {
    console.error("Error in join-waitlist function:", error);
    const errorMessage = error instanceof Error ? error.message : "Something went wrong";
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
