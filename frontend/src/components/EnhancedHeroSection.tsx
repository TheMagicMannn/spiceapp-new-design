import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import CountdownTimer from "./CountdownTimer";
import { Sparkles, Heart, ArrowDown, Loader2, ChevronLeft, ChevronRight } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import confetti from "canvas-confetti";
import { trackWaitlistSignup } from "@/lib/gtag";

const triggerConfetti = () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#FF4D6D', '#FF758F', '#FFB3C1', '#C9184A', '#FF8FA3']
  });
};

const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1481497265154-2000ecf45246",
    alt: "Intimate couple embracing - sophisticated lifestyle dating",
    gradient: "from-purple-900/80 via-black/60 to-transparent"
  },
  {
    url: "https://images.pexels.com/photos/7278845/pexels-photo-7278845.jpeg",
    alt: "Premium lifestyle dating - purple intimate lighting aesthetic",
    gradient: "from-violet-900/80 via-black/60 to-transparent"
  },
  {
    url: "https://images.pexels.com/photos/30475855/pexels-photo-30475855.jpeg",
    alt: "Romantic purple hearts theme - SPICE dating app lifestyle",
    gradient: "from-fuchsia-900/80 via-black/60 to-transparent"
  }
];

const EnhancedHeroSection = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        setIsTransitioning(false);
      }, 300);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePrevImage = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length);
      setIsTransitioning(false);
    }, 300);
  };

  const handleNextImage = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
      setIsTransitioning(false);
    }, 300);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsLoading(true);
    
    try {
      const { data, error } = await supabase.functions.invoke("join-waitlist", {
        body: { email, source: 'hero' },
      });

      if (error) {
        console.error('Waitlist error:', error);
        const errorMessage = error.message || "Something went wrong. Please try again.";
        
        if (errorMessage.includes("already on the waitlist")) {
          toast.info("You're already on the waitlist! We'll notify you when we launch.");
        } else if (errorMessage.includes("Failed to send") || errorMessage.includes("Edge Function")) {
          toast.error("⚙️ Configuration Error: Please check browser console for details", {
            duration: 5000
          });
          console.error('🔴 Supabase configuration issue detected!');
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
        trackWaitlistSignup('hero');
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

  const currentImage = heroImages[currentImageIndex];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div 
          className={`absolute inset-0 transition-opacity duration-500 ${
            isTransitioning ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <img
            src={currentImage.url}
            alt={currentImage.alt}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className={`absolute inset-0 bg-gradient-to-b ${currentImage.gradient}`} />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      </div>

      {/* Image Navigation Controls */}
      <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between px-4 md:px-8 z-20 pointer-events-none">
        <Button
          variant="ghost"
          size="icon"
          onClick={handlePrevImage}
          className="pointer-events-auto bg-black/30 hover:bg-black/50 text-white backdrop-blur-sm rounded-full"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleNextImage}
          className="pointer-events-auto bg-black/30 hover:bg-black/50 text-white backdrop-blur-sm rounded-full"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsTransitioning(true);
              setTimeout(() => {
                setCurrentImageIndex(index);
                setIsTransitioning(false);
              }, 300);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-primary w-8' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`View hero image ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 right-10 md:right-20 float z-10">
        <Sparkles className="w-8 h-8 text-primary/60" />
      </div>
      <div className="absolute bottom-40 left-10 md:left-20 float-delayed z-10">
        <Heart className="w-6 h-6 text-primary/50" />
      </div>
      
      <div className="relative z-30 max-w-5xl mx-auto text-center space-y-8 px-4 pt-20 pb-12">
        {/* Countdown */}
        <div className="fade-in-up mb-12">
          <CountdownTimer />
        </div>

        {/* Logo/Brand */}
        <div className="fade-in-up-delayed" style={{ animationDelay: "0.2s" }}>
          <h1 className="text-7xl md:text-9xl font-black text-white drop-shadow-2xl tracking-tight font-outfit">
            SPICE
          </h1>
          <div className="h-1.5 w-40 mx-auto mt-4 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full" />
        </div>

        {/* Tagline */}
        <div className="space-y-4 fade-in-up-delayed" style={{ animationDelay: "0.4s" }}>
          <h2 className="text-2xl md:text-4xl font-semibold text-white drop-shadow-lg">
            Premium Dating for Adventurous Adults
          </h2>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Join thousands of adventurous singles and couples exploring swingers, BDSM, ENM, polyamory, and kink connections 
            in a safe, judgment-free lifestyle community.
          </p>
        </div>

        {/* CTA Section with Email Capture */}
        <div className="pt-8 space-y-6 fade-in-up-delayed" style={{ animationDelay: "0.6s" }}>
          <div 
            className={`glass-card rounded-2xl p-8 max-w-md mx-auto border-gradient backdrop-blur-xl bg-black/40 transition-all duration-500 ${
              showSuccess 
                ? 'ring-2 ring-green-500/50 shadow-[0_0_30px_rgba(34,197,94,0.3)] scale-[1.02]' 
                : ''
            }`}
          >
            <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${showSuccess ? 'text-green-400' : 'text-white'}`}>
              {showSuccess ? '🎉 You\'re In!' : 'Join the Waitlist'}
            </h3>
            <p className="text-white/80 text-sm mb-6">
              {showSuccess ? 'Welcome to the Spice family!' : 'Get 2 months free VIP access when we launch'}
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 focus:border-primary h-12 text-center text-white placeholder:text-white/50 backdrop-blur-sm"
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
            <span className="text-xs text-white/80 uppercase tracking-widest">Discover More</span>
            <ArrowDown className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedHeroSection;
