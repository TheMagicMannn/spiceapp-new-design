import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CountdownTimer from "./CountdownTimer";
import { Sparkles, Heart, ArrowDown, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import confetti from "canvas-confetti";

const triggerConfetti = () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#FF4D6D', '#FF758F', '#FFB3C1', '#C9184A', '#FF8FA3']
  });
};

const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    
    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL || process.env.REACT_APP_BACKEND_URL || 'http://localhost:8001';
      
      const response = await fetch(`${backendUrl}/api/waitlist`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email,
          source: 'hero'
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to join waitlist');
      }

      const data = await response.json();
      
      if (data?.alreadyExists) {
        toast.info("You're already part of the Spice family! 💕 Sit tight — we'll let you know as soon as we launch.", {
          duration: 5000,
        });
        setEmail("");
      } else {
        triggerConfetti();
        setShowSuccess(true);
        toast.success("Welcome to the Spice family! 🎉 Check your inbox for a confirmation email and get ready for something special.", {
          duration: 5000,
        });
        setEmail("");
        setTimeout(() => setShowSuccess(false), 3000);
      }
    } catch (error: any) {
      console.error("Error joining waitlist:", error);
      const errorMessage = error?.message || "";
      if (errorMessage.includes("already on the waitlist")) {
        toast.info("You're already part of the Spice family! 💕 Sit tight — we'll let you know as soon as we launch.", {
          duration: 5000,
        });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 pb-12 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-glow-purple/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 right-10 md:right-20 float">
        <Sparkles className="w-8 h-8 text-primary/40" />
      </div>
      <div className="absolute bottom-40 left-10 md:left-20 float-delayed">
        <Heart className="w-6 h-6 text-primary/30" />
      </div>
      
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        {/* Countdown */}
        <div className="fade-in-up mb-12">
          <CountdownTimer />
        </div>

        {/* Logo/Brand */}
        <div className="fade-in-up-delayed" style={{ animationDelay: "0.2s" }}>
          <h1 className="text-7xl md:text-9xl font-black text-gradient glow-text tracking-tight font-outfit">
            SPICE
          </h1>
          <p className="sr-only">SPICE - The Premier Dating App for Swingers, BDSM & ENM Community</p>
          <div className="h-1.5 w-40 mx-auto mt-4 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
        </div>

        {/* Tagline */}
        <div className="space-y-4 fade-in-up-delayed" style={{ animationDelay: "0.4s" }}>
          <h2 className="text-2xl md:text-4xl font-semibold text-foreground">
            Premium Dating for Adventurous Adults
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Join thousands of adventurous singles and couples exploring swingers, BDSM, and ENM connections 
            in a safe, premium lifestyle community.
          </p>
        </div>

        {/* CTA Section with Email Capture */}
        <div className="pt-8 space-y-6 fade-in-up-delayed" style={{ animationDelay: "0.6s" }}>
          <div 
            className={`glass-card rounded-2xl p-8 max-w-md mx-auto border-gradient transition-all duration-500 ${
              showSuccess 
                ? 'ring-2 ring-green-500/50 shadow-[0_0_30px_rgba(34,197,94,0.3)] scale-[1.02]' 
                : ''
            }`}
          >
            <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${showSuccess ? 'text-green-500' : 'text-primary'}`}>
              {showSuccess ? '🎉 You\'re In!' : 'Join the Waitlist'}
            </h3>
            <p className="text-muted-foreground text-sm mb-6">
              {showSuccess ? 'Welcome to the Spice family!' : 'Get 2 months free VIP access when we launch'}
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-background/50 border-border/50 focus:border-primary h-12 text-center"
                disabled={isLoading}
              />
              <Button 
                type="submit" 
                variant="hero" 
                size="xl" 
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Sparkles className="w-5 h-5" />
                )}
                {isLoading ? "Joining..." : "Join Waitlist"}
              </Button>
            </form>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="pt-12 fade-in-up-delayed" style={{ animationDelay: "0.8s" }}>
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-xs text-muted-foreground uppercase tracking-widest">Discover More</span>
            <ArrowDown className="w-5 h-5 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
