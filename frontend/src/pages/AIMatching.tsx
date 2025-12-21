import { Brain, Sparkles, Target, Users, Heart, TrendingUp, CheckCircle } from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";

const AIMatching = () => {
  return (
    <>
      <SEO
        title="AI Matching Explained: How SPICE Finds Your Perfect Lifestyle Match"
        description="Discover how SPICE's AI-powered matching algorithm uses BDSM quiz results, preferences, behavior, and compatibility to find highly compatible lifestyle partners."
        keywords="AI matching, dating app algorithm, compatibility matching, SPICE AI, smart matchmaking, BDSM compatibility, lifestyle matching"
        canonical="https://thespiceapp.com/about/ai-matching"
      />

      <div className="relative min-h-screen">
        <ParticlesBackground />
        <Header />
        <Breadcrumbs />
        
        <main className="relative z-10 pt-32 pb-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-primary/20 rounded-full">
                  <Brain className="w-16 h-16 text-primary" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                AI Matching Explained
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                How SPICE's intelligent algorithm finds your most compatible lifestyle matches using BDSM quiz data, preferences, and behavioral patterns.
              </p>
            </div>

            <section className="mb-16">
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">How Our AI Works</h2>
                
                <div className="space-y-6 text-muted-foreground">
                  <p className="text-lg leading-relaxed">
                    SPICE's AI matching goes far beyond simple location and age filters. We analyze <strong className="text-foreground">BDSM compatibility, communication styles, relationship preferences, and behavioral patterns</strong> to suggest highly compatible matches.
                  </p>

                  <div className="grid md:grid-cols-3 gap-6">
                    {[
                      { icon: Target, title: "BDSM Quiz Analysis", desc: "50+ questions analyzed for kink compatibility, power dynamics, experience levels" },
                      { icon: Heart, title: "Relationship Goals", desc: "Swinging, hotwifing, polyamory, BDSM - match relationship style preferences" },
                      { icon: Users, title: "Behavioral Patterns", desc: "How you interact, message, and connect predicts compatibility" },
                    ].map((item, index) => {
                      const Icon = item.icon;
                      return (
                        <div key={index} className="bg-background/50 border border-primary/30 rounded-lg p-6">
                          <div className="p-2 bg-primary/10 rounded-lg w-fit mb-4">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <h3 className="font-bold mb-2">{item.title}</h3>
                          <p className="text-sm">{item.desc}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">What Makes Our AI Unique</h2>
                
                <div className="space-y-4">
                  {[
                    { title: "BDSM Compatibility Scoring", desc: "Analyzes dominant/submissive compatibility, kink alignment, and experience level matching. If you're a Dom seeking a sub, we find complementary dynamics." },
                    { title: "Lifestyle-Specific Filters", desc: "Unlike generic dating apps, we match on soft swap vs full swap, same room vs separate room, BDSM roles, poly structures - criteria that actually matter for lifestyle compatibility." },
                    { title: "Couples Matching", desc: "Our AI understands couple dynamics. We match couples with couples or singles based on what each partner is seeking, ensuring all four people are compatible." },
                    { title: "Learning Algorithm", desc: "The more you use SPICE (who you message, match with, meet), the smarter your recommendations become. The AI learns YOUR specific preferences." },
                  ].map((item, index) => (
                    <div key={index} className="border border-border/50 rounded-lg p-6 bg-background/50">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl p-8 md:p-12 border border-primary/30 text-center">
              <h2 className="text-3xl font-bold mb-4">Experience AI-Powered Matching</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Take the BDSM quiz and let our AI find your most compatible lifestyle partners
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/quiz" className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all">
                  Take BDSM Quiz
                </a>
                <a href="/download" className="inline-flex items-center justify-center px-8 py-3 bg-background border-2 border-primary hover:bg-primary/10 font-semibold rounded-full transition-all">
                  Download SPICE
                </a>
              </div>
            </div>
          </div>
        </main>

        <FooterSection />
      </div>
    </>
  );
};

export default AIMatching;