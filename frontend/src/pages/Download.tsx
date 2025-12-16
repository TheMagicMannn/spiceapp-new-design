import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Smartphone, Apple, Play, Sparkles, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import confetti from "canvas-confetti";
import { trackWaitlistSignup, trackDownloadClick } from "@/lib/gtag";

const features = [
  "Verified adult community",
  "Advanced matching algorithms",
  "Secure and private messaging",
  "Event discovery nearby",
  "Compatibility quizzes",
  "Community forums",
];

const triggerConfetti = () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#FF4D6D', '#FF758F', '#FFB3C1', '#C9184A', '#FF8FA3']
  });
};

const Download = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleJoinWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    
    try {
      const { data, error } = await supabase.functions.invoke("join-waitlist", {
        body: { email, source: 'download' },
      });

      if (error) {
        const errorMessage = error.message || "Something went wrong. Please try again.";
        if (errorMessage.includes("already on the waitlist")) {
          toast.info("You're already on the waitlist! We'll notify you when we launch.");
        } else {
          toast.error(errorMessage);
        }
        return;
      }
      
      if (data?.alreadyExists) {
        toast.info("You're already part of the Spice family! 💕 Sit tight — we'll let you know as soon as we launch.", {
          duration: 5000,
        });
        setEmail("");
      } else {
        triggerConfetti();
        setShowSuccess(true);
        trackWaitlistSignup('download');
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
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Download SPICE App | iOS & Android</title>
        <meta name="description" content="Download the SPICE app for iPhone and Android. Join the premier adult dating community for swingers, BDSM enthusiasts, and ENM lifestyles." />
        <link rel="canonical" href="https://thespiceapp.com/download" />
      </Helmet>
      
      <Header />
      <Breadcrumbs />
      
      <main className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-gradient mb-6">
              <Smartphone className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Mobile App</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6">
              <span className="text-gradient">Download SPICE</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Take your connections on the go. The SPICE app puts the entire lifestyle community 
              in your pocket.
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  trackDownloadClick('iOS');
                }}
                className="flex items-center gap-3 px-6 py-4 rounded-xl glass-card border-gradient hover:bg-primary/10 transition-colors group w-full sm:w-auto"
              >
                <Apple className="w-8 h-8 text-foreground" />
                <div className="text-left">
                  <div className="text-xs text-muted-foreground">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </a>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  trackDownloadClick('Android');
                }}
                className="flex items-center gap-3 px-6 py-4 rounded-xl glass-card border-gradient hover:bg-primary/10 transition-colors group w-full sm:w-auto"
              >
                <Play className="w-8 h-8 text-foreground" />
                <div className="text-left">
                  <div className="text-xs text-muted-foreground">Get it on</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </a>
            </div>

            {/* Join Waitlist Section */}
            <div 
              className={`glass-card rounded-2xl p-8 border-gradient max-w-lg mx-auto transition-all duration-500 ${
                showSuccess 
                  ? 'ring-2 ring-green-500/50 shadow-[0_0_30px_rgba(34,197,94,0.3)] scale-[1.02] bg-green-500/10' 
                  : 'bg-primary/10'
              }`}
            >
              <Sparkles className={`w-8 h-8 mx-auto mb-4 ${showSuccess ? 'text-green-500' : 'text-primary'}`} />
              <h2 className={`text-xl font-bold mb-2 ${showSuccess ? 'text-green-500' : ''}`}>
                {showSuccess ? '🎉 You\'re In!' : 'Coming Soon!'}
              </h2>
              <p className="text-muted-foreground text-sm mb-6">
                {showSuccess 
                  ? 'Welcome to the Spice family!' 
                  : 'Our mobile app is currently in development. Join the waitlist and get 2 months FREE VIP access when we launch.'}
              </p>
              <form onSubmit={handleJoinWaitlist} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-background/50 border-border/50 focus:border-primary h-12 text-center"
                  disabled={isLoading}
                  required
                />
                <Button 
                  type="submit" 
                  className="w-full h-12"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                  ) : (
                    <Sparkles className="w-5 h-5 mr-2" />
                  )}
                  {isLoading ? "Joining..." : "Join the Waitlist"}
                </Button>
              </form>
            </div>
          </div>

          {/* Features */}
          <div className="glass-card rounded-2xl p-8 border-gradient mb-12">
            <h2 className="text-2xl font-bold text-center mb-8">What You'll Get</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Phone Mockup Placeholder */}
          <div className="relative">
            <div className="glass-card rounded-3xl p-8 border-gradient text-center">
              <div className="w-64 h-[500px] mx-auto bg-gradient-to-b from-primary/20 to-secondary/20 rounded-[3rem] flex items-center justify-center border-4 border-border">
                <div className="text-center">
                  <Smartphone className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">App Preview</p>
                  <p className="text-sm text-muted-foreground/60">Coming Soon</p>
                </div>
              </div>
            </div>
          </div>

          {/* QR Code Section */}
          <div className="mt-12 text-center">
            <div className="glass-card rounded-2xl p-8 border-gradient max-w-md mx-auto">
              <h3 className="text-xl font-bold mb-4">Scan to Download</h3>
              <div className="w-32 h-32 mx-auto bg-muted rounded-lg flex items-center justify-center mb-4">
                <span className="text-muted-foreground text-xs">QR Code</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Scan with your phone's camera to go directly to the app store.
              </p>
            </div>
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

export default Download;
