import { Crown, Target, Sparkles, Shield, TrendingUp, Heart, Users, Calendar, BookOpen, CheckCircle, ChevronRight } from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";

const WhyDifferent = () => {
  const uniqueFeatures = [
    { icon: Users, title: "Polycule/Constellation Profiles", desc: "Unlimited linked profiles forming visible relationship maps (primaries, metamours, etc.)", competitors: "Feeld: ✗ | SDC: ✗ | Kasidie: ✗ | SLS: ✗" },
    { icon: Target, title: "Solo ↔ Partnered Profile Toggle", desc: "Seamless switching between modes with separate desire visibility", competitors: "Feeld: ✗ | SDC: ✗ | Kasidie: ✗ | SLS: ✗" },
    { icon: TrendingUp, title: "Ultra-Granular Physical Filters", desc: "Hair color/length, eye color, height (inch-by-inch), body type, ethnicity, tattoos/piercings, grooming, endowment preferences with savable presets", competitors: "Feeld: ✗ | SDC: ✓ | Kasidie: ✓ | SLS: ✓" },
    { icon: Sparkles, title: "AI-Powered Learning Algorithm", desc: "Learns from swipes, messages, blocks, certifications; provides explained compatibility scores", competitors: "Feeld: ✗ | SDC: ✗ | Kasidie: ✗ | SLS: ✗" },
    { icon: Users, title: "Group/Multi-Person Matching", desc: "Pre-match group chats and polycule/group swiping", competitors: "Feeld: ✗ | SDC: ✗ | Kasidie: ✗ | SLS: ✗" },
    { icon: Shield, title: "ID Verification (Optional)", desc: "Government ID verification for enhanced trust", competitors: "Feeld: ✗ | SDC: ✓ | Kasidie: ✓ | SLS: ✗" },
    { icon: Shield, title: "Dual Verification for Couples", desc: "Both partners must complete separate photo verification. Prevents fake couple accounts.", competitors: "Feeld: ✗ | SDC: ✗ | Kasidie: ✗ | SLS: ✗" },
    { icon: Shield, title: "24/7 Professional Moderation", desc: "Round-the-clock human moderation with kink-aware moderators. Transparent stats published in-app.", competitors: "Feeld: ✓ | SDC: ✓ | Kasidie: ✓ | SLS: ✓" },
    { icon: Shield, title: "Advanced Anti-Fake System", desc: "Activity scoring, AI detection, and human review to eliminate fakes", competitors: "Feeld: ✗ | SDC: ✗ | Kasidie: ✗ | SLS: ✗" },
    { icon: Shield, title: "Linked Couple Read-Only Activity View", desc: "Both partners can view all shared profile activity (likes, messages, matches) for full transparency", competitors: "Feeld: ✗ | SDC: ✗ | Kasidie: ✗ | SLS: ✗" },
    { icon: Shield, title: "Partner Approval Workflow", desc: "Optional: require partner approval before sending messages or likes", competitors: "Feeld: ✗ | SDC: ✗ | Kasidie: ✗ | SLS: ✗" },
    { icon: Sparkles, title: "Comprehensive BDSM/Kink Quiz", desc: "50+ questions covering roles, experience, interests, limits, safe words, aftercare, dynamics. Generates detailed compatibility scores.", competitors: "Feeld: ✗ | SDC: ✗ | Kasidie: ✗ | SLS: ✗" },
    { icon: Heart, title: "Boundary & Consent Tools", desc: "Shared checklists, negotiation templates, AI-assisted consent reminders in chats", competitors: "Feeld: ✗ | SDC: ✗ | Kasidie: ✗ | SLS: ✗" },
    { icon: Heart, title: "STI/Health Status Sharing", desc: "Secure, voluntary upload of anonymized test results with visible badges", competitors: "Feeld: ✗ | SDC: ✗ | Kasidie: ✗ | SLS: ✗" },
    { icon: Users, title: "ISO (In Search Of) Posts Feed", desc: "Dedicated personal ads section with rich text, photos, tags, browsing, and direct messaging", competitors: "Feeld: ✗ | SDC: ✓ | Kasidie: ✓ | SLS: ✓" },
    { icon: CheckCircle, title: "Certifications & Validations", desc: "Moderated post-meetup reviews confirming real connections and boundary respect", competitors: "Feeld: ✗ | SDC: ✓ | Kasidie: ✓ | SLS: ✓" },
    { icon: Calendar, title: "Integrated Event Calendar", desc: "RSVP to munches, parties, workshops. User-submitted and verified events + private invites.", competitors: "Feeld: ✗ | SDC: ✓ | Kasidie: ✓ | SLS: ✓" },
    { icon: TrendingUp, title: "Fair Visibility Algorithm", desc: "Rewards profile completeness and activity, not payment. Everyone gets seen.", competitors: "Feeld: ✗ | SDC: ✗ | Kasidie: ✗ | SLS: ✗" },
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
        title="Why SPICE is Different: 18 Unique Features | Best Lifestyle Dating App 2025"
        description="Discover SPICE's 18 unique features: polycule profiles, BDSM quiz, AI matching, dual verification, STI sharing, consent tools. Compare with Feeld, SDC, Kasidie, SLS, 3Fun."
        keywords="SPICE unique features, best lifestyle app, why choose SPICE, SPICE advantages, lifestyle app comparison, BDSM dating app features, polycule profiles, AI matching"
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
                  <h2 className="text-2xl md:text-3xl font-bold">18 Features NO Competitor Has</h2>
                </div>
                <p className="text-lg text-muted-foreground">
                  From polycule profiles and AI matching to comprehensive BDSM quiz and STI status sharing
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
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">See the Difference Yourself</h2>
              <p className="text-center text-muted-foreground mb-8">
                Compare SPICE with the leading lifestyle dating apps
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <a href="/vs/feeld" className="bg-background/50 border border-primary/30 rounded-lg p-6 hover:border-primary/50 transition-all hover:scale-105 group">
                  <h3 className="font-bold text-primary mb-2 text-lg">SPICE vs Feeld</h3>
                  <p className="text-sm text-muted-foreground mb-3">Compare features, pricing, and community focus</p>
                  <span className="text-primary text-sm font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                    Read Comparison 
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </a>
                <a href="/vs/3fun" className="bg-background/50 border border-primary/30 rounded-lg p-6 hover:border-primary/50 transition-all hover:scale-105 group">
                  <h3 className="font-bold text-primary mb-2 text-lg">SPICE vs 3Fun</h3>
                  <p className="text-sm text-muted-foreground mb-3">Safety, verification, and user experience</p>
                  <span className="text-primary text-sm font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                    Read Comparison 
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </a>
                <a href="/vs/sdc" className="bg-background/50 border border-primary/30 rounded-lg p-6 hover:border-primary/50 transition-all hover:scale-105 group">
                  <h3 className="font-bold text-primary mb-2 text-lg">SPICE vs SDC</h3>
                  <p className="text-sm text-muted-foreground mb-3">Modern features vs traditional swinger site</p>
                  <span className="text-primary text-sm font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                    Read Comparison 
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </a>
                <a href="/vs/kasidie" className="bg-background/50 border border-primary/30 rounded-lg p-6 hover:border-primary/50 transition-all hover:scale-105 group">
                  <h3 className="font-bold text-primary mb-2 text-lg">SPICE vs Kasidie</h3>
                  <p className="text-sm text-muted-foreground mb-3">Compare event calendars and community features</p>
                  <span className="text-primary text-sm font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                    Read Comparison 
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </a>
                <a href="/vs/sls" className="bg-background/50 border border-primary/30 rounded-lg p-6 hover:border-primary/50 transition-all hover:scale-105 group">
                  <h3 className="font-bold text-primary mb-2 text-lg">SPICE vs SLS</h3>
                  <p className="text-sm text-muted-foreground mb-3">Modern UI and AI matching vs legacy platform</p>
                  <span className="text-primary text-sm font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                    Read Comparison 
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </a>
                <a href="/tools/feature-comparison" className="bg-gradient-to-br from-primary/20 to-purple-500/20 border-2 border-primary/50 rounded-lg p-6 hover:border-primary transition-all hover:scale-105 group">
                  <h3 className="font-bold text-primary mb-2 text-lg">Full Feature Table</h3>
                  <p className="text-sm text-muted-foreground mb-3">View detailed side-by-side comparison</p>
                  <span className="text-primary text-sm font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                    See All Features 
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl p-8 md:p-12 border border-primary/30 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Join 30,000+ Who Chose SPICE</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Experience the only lifestyle app with 18 unique features including polycule profiles, BDSM quiz, AI matching, dual verification, and comprehensive safety tools.
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