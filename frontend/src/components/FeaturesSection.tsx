import { useState } from "react";
import { Bot, Shield, Calendar, Users, Brain, Zap, Eye, Lock, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Bot,
    title: "AI-Powered Matching",
    description: "Advanced algorithms find your perfect match based on desires, compatibility, and chemistry.",
    highlights: [
      { title: "Smart Compatibility Scoring", desc: "Our AI analyzes 200+ data points to calculate compatibility scores and surface the best matches for you." },
      { title: "Hidden Gems Discovery", desc: "AI surfaces highly compatible profiles you might have missed, revealing unexpected perfect matches." },
      { title: "Adaptive Learning", desc: "The system learns from your interactions to continuously improve match quality over time." },
    ],
  },
  {
    icon: Shield,
    title: "Verified & Safe Community",
    description: "Every member is thoroughly verified. No bots, no spam, no fake profiles.",
    highlights: [
      { title: "Rigorous Verification", desc: "Photo ID verification and profile review ensure every member is authentic and genuine." },
      { title: "24/7 Moderation", desc: "AI and human moderators work around the clock to maintain a safe, respectful environment." },
      { title: "Zero Tolerance Policy", desc: "Advanced detection systems immediately remove bad actors, ensuring your safety and privacy." },
    ],
  },
  {
    icon: Calendar,
    title: "Events & Community",
    description: "Connect online and offline through curated events and community features.",
    highlights: [
      { title: "Exclusive Local Events", desc: "Discover lifestyle parties, mixers, and social gatherings happening in your area." },
      { title: "Community Forums", desc: "Share experiences, ask questions, and engage with verified members in moderated spaces." },
      { title: "Host Your Own Events", desc: "VIP members can create and host their own events for the community." },
    ],
  },
];

const miniFeatures = [
  { icon: Users, title: "Couples Dashboard", desc: "Optional read-only dashboard for couples who like to share transparency. View each other's profile activities, matches, and interactions in a secure space designed for trust and openness." },
  { icon: Brain, title: "Built-in BDSM Quiz", desc: "Comprehensive quiz that automatically posts to your profile (if you choose) and refines your matches based on compatibility." },
  { icon: Zap, title: "Learning Journeys", desc: "Curious but don't know where to start? Explore guided learning paths for different interests to better understand yourself." },
  { icon: Lock, title: "Consent & Verification", desc: "Blockchain-powered consent agreements and verified meet validations with user feedback." },
];

const FeaturesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % features.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + features.length) % features.length);

  const activeFeature = features[activeIndex];

  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main features carousel */}
        <div className="mb-24">
          <div className="glass-card rounded-3xl p-8 md:p-12 border-gradient relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
            
            <div className="relative z-10">
              {/* Header with navigation */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <div className="p-4 rounded-2xl bg-primary/20 text-primary">
                    <activeFeature.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold">{activeFeature.title}</h3>
                    <p className="text-muted-foreground mt-1">{activeFeature.description}</p>
                  </div>
                </div>
                
                <div className="hidden md:flex items-center gap-2">
                  <Button variant="glass" size="icon" onClick={prevSlide}>
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                  <Button variant="glass" size="icon" onClick={nextSlide}>
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              {/* Feature highlights */}
              <div className="grid md:grid-cols-3 gap-6">
                {activeFeature.highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="glass-card rounded-2xl p-6 feature-card border-primary/10 hover:border-primary/30"
                  >
                    <h4 className="font-semibold text-lg text-primary mb-3">{highlight.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{highlight.desc}</p>
                  </div>
                ))}
              </div>

              {/* Dots indicator */}
              <div className="flex justify-center gap-2 mt-8">
                {features.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === activeIndex 
                        ? "bg-primary w-8" 
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              {/* Mobile navigation */}
              <div className="flex md:hidden items-center justify-center gap-4 mt-6">
                <Button variant="glass" size="icon" onClick={prevSlide}>
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button variant="glass" size="icon" onClick={nextSlide}>
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Mini features grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {miniFeatures.map((feature, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 feature-card border-gradient group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors shrink-0">
                  <feature.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">{feature.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
