import { Shield, Users, Heart, Lock, CheckCircle, Award } from "lucide-react";

const TrustBadgesSection = () => {
  const badges = [
    {
      icon: Shield,
      title: "100% Verified",
      description: "Every profile is verified for authenticity",
      stat: "10,000+",
      statLabel: "Verified Members"
    },
    {
      icon: Users,
      title: "LGBTQ+ Inclusive",
      description: "Welcoming community for all identities",
      stat: "40%",
      statLabel: "LGBTQ+ Members"
    },
    {
      icon: Lock,
      title: "Private & Secure",
      description: "End-to-end encrypted messaging",
      stat: "256-bit",
      statLabel: "Encryption"
    },
    {
      icon: Heart,
      title: "Sex-Positive",
      description: "Judgment-free lifestyle exploration",
      stat: "4.8/5",
      statLabel: "Community Rating"
    },
    {
      icon: CheckCircle,
      title: "Consent Focused",
      description: "Built-in consent verification tools",
      stat: "100%",
      statLabel: "Consent Priority"
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Curated community of adventurous adults",
      stat: "Top Rated",
      statLabel: "Lifestyle App 2025"
    }
  ];

  const communityImages = [
    {
      url: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846",
      alt: "Diverse community of SPICE members celebrating together"
    },
    {
      url: "https://images.unsplash.com/photo-1527525443983-6e60c75fff46",
      alt: "SPICE community members building connections and trust"
    },
    {
      url: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg",
      alt: "Inclusive LGBTQ+ lifestyle community gathering"
    }
  ];

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
            Trusted by the Lifestyle Community
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of verified couples and singles exploring connections in a safe, 
            inclusive, and sex-positive environment
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

        {/* Community Images Section */}
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
            A Community That Celebrates Diversity
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {communityImages.map((image, index) => (
              <div
                key={index}
                className="relative rounded-2xl overflow-hidden group aspect-[4/3] border-2 border-border/50 hover:border-primary/50 transition-all duration-300"
              >
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Statistics Bar */}
        <div className="mt-16 glass-card rounded-2xl p-8 border-gradient">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-sm text-muted-foreground">Active Members</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Countries Worldwide</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">200+</div>
              <div className="text-sm text-muted-foreground">Desire Tags</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Verified Profiles</div>
            </div>
          </div>
        </div>

        {/* Testimonial Quote */}
        <div className="mt-16 max-w-4xl mx-auto text-center">
          <blockquote className="text-xl md:text-2xl font-medium text-muted-foreground italic">
            "SPICE has created the most welcoming and authentic platform for the lifestyle community. 
            As a queer polyamorous couple, we finally found a space where we truly belong."
          </blockquote>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-purple-400 border-2 border-background" />
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-2 border-background" />
            </div>
            <div className="text-left">
              <div className="font-semibold">Alex & Jordan</div>
              <div className="text-sm text-muted-foreground">SPICE Members since 2024</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadgesSection;
