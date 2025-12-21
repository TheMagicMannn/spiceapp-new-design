import { Crown, CheckCircle, Sparkles, Shield, Users, Heart, TrendingUp, Target } from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";

const SafetyVerification = () => {
  const features = [
    { icon: Sparkles, title: "BDSM Compatibility Quiz", desc: "50+ question quiz to discover your kink profile and find compatible partners. NO other lifestyle app has this!", unique: true },
    { icon: Shield, title: "Dual Verification System", desc: "Photo + ID verification required. Most apps only do photos. We eliminate 99% of fakes.", unique: true },
    { icon: Users, title: "Local Events Calendar", desc: "Find lifestyle parties, meetups, and events in your city. Built-in event discovery.", unique: true },
    { icon: Heart, title: "Educational Resources", desc: "60+ comprehensive guides on swinging, BDSM, ENM, polyamory, safety, and communication.", unique: true },
    { icon: Target, title: "Lifestyle-Specific Matching", desc: "Filters for soft swap, full swap, BDSM roles, poly structures - not generic dating filters.", unique: false },
    { icon: TrendingUp, title: "Better Value", desc: "$14.99/month vs competitors charging $19.99-$49.99. Same features, better price.", unique: false },
  ];

  return (
    <>
      <SEO
        title="Why SPICE is Different: What Makes Us the Best Lifestyle Dating App"
        description="Discover what sets SPICE apart: BDSM quiz, dual verification, local events, 60+ guides, better value. See why 30,000+ members chose SPICE over Feeld, 3Fun, and SDC."
        keywords="SPICE unique features, best lifestyle app, why choose SPICE, SPICE vs competitors, lifestyle app comparison"
        canonical="https://thespiceapp.com/about/why-different"
      />

      <div className="relative min-h-screen">
        <ParticlesBackground />
        <Header />
        <Breadcrumbs />
        
        <main className="relative z-10 pt-32 pb-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                Why SPICE is Different
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                We're not just another dating app. SPICE was built specifically for the lifestyle community with features you won't find anywhere else.
              </p>
            </div>

            <div className="mb-16">
              <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl p-8 border border-primary/30 text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Crown className="w-10 h-10 text-yellow-500" />
                  <h2 className="text-2xl font-bold">4 Features NO Competitor Has</h2>
                </div>
                <p className="text-lg text-muted-foreground">
                  BDSM Quiz • Dual Verification • Events Calendar • 60+ Educational Guides
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-16">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                    {feature.unique && (
                      <div className="mb-3">
                        <span className="text-xs font-bold bg-primary/20 text-primary px-3 py-1 rounded-full">
                          ⭐ UNIQUE TO SPICE
                        </span>
                      </div>
                    )}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold">{feature.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{feature.desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 md:p-12 mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Compare SPICE to Competitors</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <a href="/vs/feeld" className="bg-background/50 border border-border/50 rounded-lg p-6 hover:border-primary/50 transition-all">
                  <h3 className="font-bold text-primary mb-2">SPICE vs Feeld</h3>
                  <p className="text-sm text-muted-foreground mb-3">Better verification, BDSM quiz, 25% cheaper</p>
                  <span className="text-primary text-sm font-semibold">Read Comparison →</span>
                </a>
                <a href="/vs/3fun" className="bg-background/50 border border-border/50 rounded-lg p-6 hover:border-primary/50 transition-all">
                  <h3 className="font-bold text-primary mb-2">SPICE vs 3Fun</h3>
                  <p className="text-sm text-muted-foreground mb-3">ID verification, safer community, events</p>
                  <span className="text-primary text-sm font-semibold">Read Comparison →</span>
                </a>
                <a href="/vs/sdc" className="bg-background/50 border border-border/50 rounded-lg p-6 hover:border-primary/50 transition-all">
                  <h3 className="font-bold text-primary mb-2">SPICE vs SDC</h3>
                  <p className="text-sm text-muted-foreground mb-3">70% cheaper, modern app, better UX</p>
                  <span className="text-primary text-sm font-semibold">Read Comparison →</span>
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl p-8 md:p-12 border border-primary/30 text-center">
              <h2 className="text-3xl font-bold mb-4">Experience the SPICE Difference</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Join 30,000+ members who chose the safer, smarter lifestyle dating app
              </p>
              <a href="/download" className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all">
                Download SPICE Free
              </a>
            </div>
          </div>
        </main>

        <FooterSection />
      </div>
    </>
  );
};

export default SafetyVerification;