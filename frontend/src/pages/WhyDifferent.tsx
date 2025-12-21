import { Crown, Target, Sparkles, Shield, TrendingUp, Heart, Users, Calendar, BookOpen, CheckCircle } from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";

const WhyDifferent = () => {
  const uniqueFeatures = [
    { icon: Sparkles, title: "BDSM Compatibility Quiz", desc: "50+ question AI-powered quiz analyzing your kink preferences, boundaries, and dynamics. Matches you with compatible partners. NO other lifestyle app has this comprehensive tool.", competitors: "Feeld: No quiz | 3Fun: No quiz | SDC: No quiz" },
    { icon: Shield, title: "Dual Verification Required", desc: "Photo + ID verification mandatory for all members. Most apps only verify photos - we verify identity too. Reduces fake profiles by 99%.", competitors: "Feeld: Photo only | 3Fun: Photo only | SDC: Basic verification" },
    { icon: Calendar, title: "Local Events Calendar", desc: "Discover lifestyle parties, munches, workshops, and meetups in your city. Built-in event management and RSVP system.", competitors: "Feeld: No events | 3Fun: No events | SDC: Event listings only" },
    { icon: BookOpen, title: "60+ Educational Guides", desc: "Comprehensive articles on swinging, hotwifing, BDSM, ENM, polyamory, consent, communication, and safety. Most extensive educational library in lifestyle dating.", competitors: "Feeld: Blog only | 3Fun: Minimal content | SDC: Forums only" },
  ];

  const advantages = [
    { title: "Better Value", desc: "$14.99/month vs Feeld ($19.99) and SDC ($49.99). Save hundreds per year.", icon: TrendingUp },
    { title: "Lifestyle-Focused", desc: "Built FOR swingers, BDSM, and ENM - not generic dating.", icon: Target },
    { title: "Active Community", desc: "30,000+ verified members, 2,500+ active weekly.", icon: Users },
    { title: "Safety First", desc: "24/7 moderation, strict consent policies, verified profiles only.", icon: Shield },
  ];

  return (
    <>
      <SEO
        title="Why SPICE is Different: Best Lifestyle Dating App Features 2025"
        description="Discover what makes SPICE unique: BDSM compatibility quiz, dual verification, events calendar, 60+ guides. Why 30,000+ members chose SPICE over Feeld, 3Fun, SDC."
        keywords="SPICE unique features, best lifestyle app, why choose SPICE, SPICE advantages, lifestyle app comparison, BDSM dating app features"
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
                We're not just another dating app. SPICE was built from the ground up for the lifestyle community with features you won't find anywhere else.
              </p>
            </div>

            <div className="mb-16">
              <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl p-8 border border-primary/30 text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Crown className="w-10 h-10 text-yellow-500" />
                  <h2 className="text-2xl md:text-3xl font-bold">4 Features NO Competitor Has</h2>
                </div>
                <p className="text-lg text-muted-foreground">
                  BDSM Quiz • Dual Verification • Events Calendar • 60+ Guides
                </p>
              </div>
            </div>

            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Unique SPICE Features</h2>
              <div className="space-y-6">
                {uniqueFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div key={index} className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8">
                      <div className="mb-4">
                        <span className="text-xs font-bold bg-yellow-500/20 text-yellow-500 px-3 py-1 rounded-full">
                          ⭐ EXCLUSIVE TO SPICE
                        </span>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl md:text-2xl font-bold mb-3">{feature.title}</h3>
                          <p className="text-muted-foreground mb-4 leading-relaxed">{feature.desc}</p>
                          <div className="bg-background/50 border border-border/50 rounded-lg p-4">
                            <p className="text-xs font-semibold text-muted-foreground mb-2">Competitors:</p>
                            <p className="text-sm text-red-400">{feature.competitors}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Additional Advantages</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {advantages.map((adv, index) => {
                  const Icon = adv.icon;
                  return (
                    <div key={index} className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="font-bold text-lg">{adv.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground">{adv.desc}</p>
                    </div>
                  );
                })}
              </div>
            </section>

            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 md:p-12 mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">See the Difference Yourself</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <a href="/vs/feeld" className="bg-background/50 border border-primary/30 rounded-lg p-6 hover:border-primary/50 transition-all hover:scale-105">
                  <h3 className="font-bold text-primary mb-2">vs Feeld</h3>
                  <p className="text-sm text-muted-foreground mb-3">See how SPICE compares</p>
                  <span className="text-primary text-sm font-semibold">Read Comparison →</span>
                </a>
                <a href="/vs/3fun" className="bg-background/50 border border-primary/30 rounded-lg p-6 hover:border-primary/50 transition-all hover:scale-105">
                  <h3 className="font-bold text-primary mb-2">vs 3Fun</h3>
                  <p className="text-sm text-muted-foreground mb-3">Safety comparison</p>
                  <span className="text-primary text-sm font-semibold">Read Comparison →</span>
                </a>
                <a href="/vs/sdc" className="bg-background/50 border border-primary/30 rounded-lg p-6 hover:border-primary/50 transition-all hover:scale-105">
                  <h3 className="font-bold text-primary mb-2">vs SDC</h3>
                  <p className="text-sm text-muted-foreground mb-3">Value comparison</p>
                  <span className="text-primary text-sm font-semibold">Read Comparison →</span>
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl p-8 md:p-12 border border-primary/30 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Join 30,000+ Who Chose SPICE</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Experience the only lifestyle app with BDSM quiz, dual verification, events calendar, and 60+ educational guides.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/download" className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all">
                  Download SPICE Free
                </a>
                <a href="/quiz" className="inline-flex items-center justify-center px-8 py-3 bg-background border-2 border-primary hover:bg-primary/10 font-semibold rounded-full transition-all">
                  Try BDSM Quiz
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

export default WhyDifferent;