import { Shield, Users, Heart, Lock, CheckCircle, Award } from "lucide-react";

const TrustBadgesSection = () => {
  const badges = [
    {
      icon: Shield,
      title: "STI Testing Badges",
      description: "Optional STI test verification for peace of mind",
      stat: "Verified",
      statLabel: "Health Status"
    },
    {
      icon: Users,
      title: "Member Validation",
      description: "Photo verification & community feedback system",
      stat: "Multi-Layer",
      statLabel: "Verification"
    },
    {
      icon: Lock,
      title: "Private & Secure",
      description: "End-to-end encrypted messaging & discrete profiles",
      stat: "256-bit",
      statLabel: "Encryption"
    },
    {
      icon: Heart,
      title: "E-Learning Modules",
      description: "Educational content on consent, safety & lifestyle",
      stat: "Guided",
      statLabel: "Learning Paths"
    },
    {
      icon: CheckCircle,
      title: "Consent Focused",
      description: "Built-in consent verification & agreement tools",
      stat: "100%",
      statLabel: "Consent Priority"
    },
    {
      icon: Award,
      title: "Feedback System",
      description: "Member reviews & ratings for safe connections",
      stat: "Community",
      statLabel: "Accountability"
    }
  ];

  const communityImages: any[] = [];

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
            Built for Safety & Trust
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Premium features designed for couples and singles exploring swingers, ENM, polyamory, 
            BDSM, and kink in a safe, verified, and judgment-free environment
          </p>
        </div>

        {/* Trust Badges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 border-gradient hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/20 rounded-xl text-primary group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">{badge.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{badge.description}</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-primary">{badge.stat}</span>
                      <span className="text-xs text-muted-foreground">{badge.statLabel}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Features Bar */}
        <div className="mt-16 glass-card rounded-2xl p-8 border-gradient">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">STI</div>
              <div className="text-sm text-muted-foreground">Test Verification</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">Learning</div>
              <div className="text-sm text-muted-foreground">Education Modules</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-sm text-muted-foreground">Desire Tags</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">Reviews</div>
              <div className="text-sm text-muted-foreground">Member Feedback</div>
            </div>
          </div>
        </div>

        {/* Feature Highlight */}
        <div className="mt-16 max-w-4xl mx-auto text-center bg-gradient-to-r from-primary/10 via-purple-500/10 to-primary/10 rounded-2xl p-8 border border-primary/30">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Safety-First Platform Design
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            SPICE prioritizes your safety with multi-layer verification, optional STI testing badges, 
            comprehensive e-learning modules on consent and safety, and a community-driven feedback system. 
            Explore the lifestyle with confidence knowing every member is verified and accountable.
          </p>
          <div className="mt-6 flex items-center justify-center gap-4 flex-wrap">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-background/50 rounded-full border border-border">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Photo Verified</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-background/50 rounded-full border border-border">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">STI Test Option</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-background/50 rounded-full border border-border">
              <Heart className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Consent Education</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-background/50 rounded-full border border-border">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Member Reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadgesSection;
