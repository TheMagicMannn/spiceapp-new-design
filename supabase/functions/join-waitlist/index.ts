import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface WaitlistRequest {
  email: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email }: WaitlistRequest = await req.json();

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

    // Send confirmation email via Resend API
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "SPICE <onboarding@resend.dev>",
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
      }),
    });

    const emailData = await emailResponse.json();
    console.log("Email response:", emailData);

    if (!emailResponse.ok) {
      console.error("Email error:", emailData);
      // Don't throw - email might fail but signup succeeded
    }

    return new Response(
      JSON.stringify({ success: true, message: "You're on the waitlist!" }),
      { status: 200, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  } catch (error: any) {
    console.error("Error in join-waitlist function:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Something went wrong" }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
