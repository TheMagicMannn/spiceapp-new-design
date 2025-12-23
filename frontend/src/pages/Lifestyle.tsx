import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Heart, Users, MessageCircle, Flame, Shield, Sparkles, ChevronRight, BookOpen } from "lucide-react";

const Lifestyle = () => {
  const lifestyleGuides = [
    {
      title: "BDSM & Kink Guide",
      description: "Comprehensive guide to BDSM, kink, and power exchange. Learn about safety, consent, practices, finding community, and exploring your desires with confidence.",
      icon: Flame,
      link: "/lifestyle/bdsm-guide",
      tag: "New Guide"
    },
    {
      title: "Swingers Guide",
      description: "Everything you need to know about the swinging lifestyle. From first-time tips to etiquette, communication strategies, and finding the right partners.",
      icon: Users,
      link: "/lifestyle/swingers-guide",
      tag: "Most Popular"
    },
    {
      title: "ENM & Polyamory Guide",
      description: "Navigate ethical non-monogamy and polyamorous relationships. Learn about different structures, communication frameworks, and managing multiple connections.",
      icon: Heart,
      link: "/lifestyle/enm-polyamory-guide",
      tag: "Essential Reading"
    },
    {
      title: "Hotwifing Guide",
      description: "A comprehensive guide to the hotwifing lifestyle. Understanding dynamics, setting boundaries, communication tips, and building trust with your partner.",
      icon: Flame,
      link: "/lifestyle/hotwifing-guide",
      tag: null
    },
    {
      title: "Relationships & Communication",
      description: "Master the art of communication in alternative relationships. Scripts for difficult conversations, conflict resolution, and deepening intimacy.",
      icon: MessageCircle,
      link: "/lifestyle/relationships-communication",
      tag: null
    },
    {
      title: "Jealousy Management",
      description: "Understand, process, and work through jealousy in open relationships. Practical tools and exercises for turning jealousy into compersion.",
      icon: Shield,
      link: "/lifestyle/jealousy-management",
      tag: null
    }
  ];

  const relatedResources = [
    {
      title: "Newcomers Guide",
      description: "Just getting started? Begin here.",
      link: "/guide/newcomers",
      icon: BookOpen
    },
    {
      title: "Consent Basics",
      description: "The foundation of all healthy connections.",
      link: "/start/consent-basics",
      icon: Shield
    },
    {
      title: "Lifestyle Etiquette",
      description: "Do's and don'ts for the lifestyle community.",
      link: "/start/etiquette",
      icon: Users
    },
    {
      title: "BDSM Quiz",
      description: "Discover your kink profile.",
      link: "/quiz",
      icon: Sparkles
    }
  ];

  return (
    <>
      <SEO
        title="Lifestyle Guides | SPICE Dating App"
        description="Comprehensive guides for swingers, ENM, polyamory, hotwifing, and alternative lifestyles. Expert advice on communication, boundaries, and building fulfilling connections."
        keywords="swingers guide, ENM guide, polyamory guide, hotwifing, lifestyle dating, open relationships, ethical non-monogamy"
        canonical="https://thespiceapp.com/lifestyle"
      />

      <div className="relative min-h-screen">
        <ParticlesBackground />
        <Header />
        <Breadcrumbs />
        
        <main className="relative z-10 pt-32 pb-12">
          <div className="container mx-auto px-4 max-w-5xl">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Heart className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Lifestyle Education</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                Lifestyle Guides
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Expert guides for navigating swinging, ENM, polyamory, and alternative lifestyles. 
                Learn from experienced community members and build healthier, more fulfilling connections.
              </p>
            </div>

            {/* Main Guides Grid */}
            <div className="space-y-4 mb-12">
              {lifestyleGuides.map((guide, index) => {
                const Icon = guide.icon;
                return (
                  <Link
                    key={index}
                    to={guide.link}
                    className="group flex items-center gap-6 bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 hover:bg-card/70 transition-all duration-300"
                  >
                    <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors flex-shrink-0">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <h2 className="text-xl font-bold group-hover:text-primary transition-colors">
                          {guide.title}
                        </h2>
                        {guide.tag && (
                          <span className="text-xs font-semibold bg-primary/20 text-primary px-2 py-1 rounded-full">
                            {guide.tag}
                          </span>
                        )}
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {guide.description}
                      </p>
                    </div>
                    <ChevronRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </Link>
                );
              })}
            </div>

            {/* Related Resources */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 mb-8">
              <h2 className="text-xl font-bold mb-6">Related Resources</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {relatedResources.map((resource, index) => {
                  const Icon = resource.icon;
                  return (
                    <Link
                      key={index}
                      to={resource.link}
                      className="group p-4 bg-background/50 border border-border/50 rounded-lg hover:border-primary/50 transition-all"
                    >
                      <Icon className="w-6 h-6 text-primary mb-3" />
                      <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {resource.description}
                      </p>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Topics Covered */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 mb-8">
              <h2 className="text-xl font-bold mb-6">Topics We Cover</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="font-semibold text-primary mb-3">Getting Started</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>→ First conversations with your partner</li>
                    <li>→ Defining your boundaries</li>
                    <li>→ Finding compatible partners</li>
                    <li>→ Attending your first event</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-3">Relationship Skills</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>→ Effective communication techniques</li>
                    <li>→ Managing jealousy & insecurity</li>
                    <li>→ Building trust over time</li>
                    <li>→ Navigating NRE (new relationship energy)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-3">Safety & Health</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>→ Safe sex practices</li>
                    <li>→ STI testing schedules</li>
                    <li>→ Emotional safety considerations</li>
                    <li>→ Vetting potential partners</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Blog Posts */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold">Latest Lifestyle Articles</h2>
                <Link to="/blog" className="text-primary hover:underline text-sm">
                  View all articles →
                </Link>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <Link to="/blog/10-signs-ready-lifestyle" className="p-4 bg-background/50 border border-border/50 rounded-lg hover:border-primary/50 transition-all">
                  <span className="text-xs text-primary font-semibold">LIFESTYLE</span>
                  <h3 className="font-semibold mt-2 mb-1">10 Signs You're Ready for the Lifestyle</h3>
                  <p className="text-sm text-muted-foreground">How to know if you and your partner are prepared...</p>
                </Link>
                <Link to="/blog/talk-partner-opening-relationship" className="p-4 bg-background/50 border border-border/50 rounded-lg hover:border-primary/50 transition-all">
                  <span className="text-xs text-primary font-semibold">RELATIONSHIPS</span>
                  <h3 className="font-semibold mt-2 mb-1">How to Talk to Your Partner</h3>
                  <p className="text-sm text-muted-foreground">Starting the conversation about opening up...</p>
                </Link>
                <Link to="/blog/bdsm-safety-checklist" className="p-4 bg-background/50 border border-border/50 rounded-lg hover:border-primary/50 transition-all">
                  <span className="text-xs text-primary font-semibold">BDSM</span>
                  <h3 className="font-semibold mt-2 mb-1">BDSM Safety Checklist</h3>
                  <p className="text-sm text-muted-foreground">Essential safety practices for kink exploration...</p>
                </Link>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl p-8 border border-primary/30 text-center">
              <Sparkles className="w-10 h-10 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Ready to Explore?</h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Join thousands of couples and singles on SPICE who are discovering new dimensions of their relationships.
              </p>
              <Link 
                to="/download"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all"
              >
                Join SPICE Free
              </Link>
            </div>
          </div>
        </main>

        <FooterSection />
      </div>
    </>
  );
};

export default Lifestyle;
