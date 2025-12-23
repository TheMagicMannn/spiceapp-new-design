import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";
import { 
  Compass, 
  BookOpen, 
  Shield, 
  Heart, 
  HelpCircle, 
  Users,
  ChevronRight,
  Sparkles,
  GraduationCap,
  FileText,
  CheckCircle,
  AlertCircle,
  MessageCircle,
  Brain
} from "lucide-react";

const StartHere = () => {
  const mainSections = [
    {
      icon: BookOpen,
      title: "Beginner's Guide",
      description: "New to the lifestyle? Start here with our comprehensive introduction to swinging, ENM, and alternative relationships.",
      link: "/guide/newcomers",
      color: "blue"
    },
    {
      icon: AlertCircle,
      title: "Common Myths Debunked",
      description: "Separate fact from fiction. We bust the most common misconceptions about lifestyle dating with research and reality.",
      link: "/start/myths",
      color: "red"
    },
    {
      icon: Users,
      title: "Lifestyle Etiquette",
      description: "Learn the unwritten rules and social norms that will help you navigate any lifestyle situation with confidence.",
      link: "/start/etiquette",
      color: "purple"
    },
    {
      icon: Shield,
      title: "Consent Basics",
      description: "Understand the foundation of all lifestyle interactions. How to give, receive, and recognize enthusiastic consent.",
      link: "/start/consent-basics",
      color: "green"
    },
    {
      icon: HelpCircle,
      title: "Beginner FAQ",
      description: "Answers to the most common questions newcomers ask about swinging, clubs, online dating, and more.",
      link: "/faq",
      color: "amber"
    }
  ];

  const additionalResources = [
    {
      icon: Brain,
      title: "BDSM Quiz",
      description: "Discover your kink preferences with our fun, detailed quiz",
      link: "/quiz",
      badge: "Popular"
    },
    {
      icon: FileText,
      title: "Lifestyle Glossary",
      description: "Learn the terminology - from 'soft swap' to 'compersion'",
      link: "/guide/glossary",
      badge: null
    },
    {
      icon: GraduationCap,
      title: "SPICE Academy",
      description: "In-depth courses and educational content for all levels",
      link: "/academy",
      badge: "Coming Soon"
    },
    {
      icon: Compass,
      title: "Explore Lifestyles",
      description: "Understand different lifestyle paths - swinging, poly, hotwifing & more",
      link: "/guide/community",
      badge: null
    },
    {
      icon: Heart,
      title: "Self-Care Resources",
      description: "Mental health and emotional wellness in the lifestyle",
      link: "/guide/self-care",
      badge: null
    },
    {
      icon: MessageCircle,
      title: "How to Talk to Your Partner",
      description: "Scripts and strategies for starting the conversation",
      link: "/guide/how-to",
      badge: null
    }
  ];

  const quickStartSteps = [
    {
      step: 1,
      title: "Educate Yourself",
      description: "Read our beginner's guide and FAQ to understand what the lifestyle is really about."
    },
    {
      step: 2,
      title: "Communicate",
      description: "Have honest conversations with your partner about interests, boundaries, and expectations."
    },
    {
      step: 3,
      title: "Start Slow",
      description: "There's no rush. Many couples start with just socializing before any physical involvement."
    },
    {
      step: 4,
      title: "Join the Community",
      description: "Download SPICE to connect with verified, like-minded individuals in a safe environment."
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; text: string; icon: string }> = {
      blue: { bg: "bg-blue-500/10", border: "border-blue-500/30", text: "text-blue-400", icon: "text-blue-500" },
      green: { bg: "bg-green-500/10", border: "border-green-500/30", text: "text-green-400", icon: "text-green-500" },
      purple: { bg: "bg-purple-500/10", border: "border-purple-500/30", text: "text-purple-400", icon: "text-purple-500" },
      amber: { bg: "bg-amber-500/10", border: "border-amber-500/30", text: "text-amber-400", icon: "text-amber-500" },
      red: { bg: "bg-red-500/10", border: "border-red-500/30", text: "text-red-400", icon: "text-red-500" },
    };
    return colors[color] || colors.blue;
  };

  return (
    <>
      <SEO
        title="Start Here: Beginner's Guide to Lifestyle Dating | SPICE"
        description="New to swinging, ENM, or lifestyle dating? Start here with beginner guides, common myths debunked, etiquette tips, consent basics, and FAQs."
        keywords="lifestyle beginner guide, swinging for beginners, new to ENM, lifestyle dating tips, swinger etiquette, consent basics"
        canonical="https://thespiceapp.com/start"
      />

      <div className="relative min-h-screen">
        <ParticlesBackground />
        <Header />
        <Breadcrumbs />

        <main className="relative z-10 pt-32 pb-12">
          <div className="container mx-auto px-4">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
                <Compass className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Start Here</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Welcome to Your Journey
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Curious about the lifestyle? You're in the right place. We'll guide you through everything you need to know—at your own pace, judgment-free.
              </p>
            </div>

            {/* Quick Start Steps */}
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-2xl font-bold text-white text-center mb-8">Your First Steps</h2>
              <div className="grid md:grid-cols-4 gap-4">
                {quickStartSteps.map((item) => (
                  <div key={item.step} className="bg-card/50 border border-border rounded-xl p-4 text-center">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                      <span className="text-primary font-bold">{item.step}</span>
                    </div>
                    <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Main Sections */}
            <div className="max-w-5xl mx-auto mb-16">
              <h2 className="text-2xl font-bold text-white text-center mb-8">Essential Reading</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {mainSections.map((section) => {
                  const Icon = section.icon;
                  const colors = getColorClasses(section.color);
                  
                  return (
                    <Link
                      key={section.title}
                      to={section.link}
                      className={`${colors.bg} border ${colors.border} rounded-xl p-6 hover:scale-[1.02] transition-transform`}
                    >
                      <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-4`}>
                        <Icon className={`w-6 h-6 ${colors.icon}`} />
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{section.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{section.description}</p>
                      <span className={`inline-flex items-center gap-1 ${colors.text} text-sm font-medium`}>
                        Read More <ChevronRight className="w-4 h-4" />
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Additional Resources */}
            <div className="max-w-5xl mx-auto mb-16">
              <h2 className="text-2xl font-bold text-white text-center mb-8">More Resources for Beginners</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {additionalResources.map((resource) => {
                  const Icon = resource.icon;
                  
                  return (
                    <Link
                      key={resource.title}
                      to={resource.link}
                      className="flex items-start gap-4 bg-card/50 border border-border rounded-xl p-4 hover:border-primary/50 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-white">{resource.title}</h3>
                          {resource.badge && (
                            <span className={`text-xs px-2 py-0.5 rounded ${
                              resource.badge === "Popular" 
                                ? "bg-green-500/20 text-green-400" 
                                : "bg-muted text-muted-foreground"
                            }`}>
                              {resource.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{resource.description}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Blog Articles for Beginners */}
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-2xl font-bold text-white text-center mb-8">Recommended Reading</h2>
              <div className="space-y-3">
                <Link 
                  to="/blog/exploring" 
                  className="flex items-center justify-between bg-card/50 border border-border rounded-xl p-4 hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-purple-500" />
                    <span className="text-white">Exploring/Curious Articles</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </Link>
                <Link 
                  to="/blog/howto" 
                  className="flex items-center justify-between bg-card/50 border border-border rounded-xl p-4 hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-white">How-To Guides</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </Link>
                <Link 
                  to="/blog/consent" 
                  className="flex items-center justify-between bg-card/50 border border-border rounded-xl p-4 hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-blue-500" />
                    <span className="text-white">Consent & Safety Articles</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </Link>
              </div>
            </div>

            {/* CTA Section */}
            <div className="max-w-3xl mx-auto">
              <div className="bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-pink-500/20 border border-pink-500/30 rounded-2xl p-8 md:p-12 text-center">
                <h2 className="text-3xl font-bold text-white mb-4">Ready to Connect?</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Join thousands of verified members exploring the lifestyle safely and respectfully on SPICE.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/download"
                    className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-semibold transition-colors"
                  >
                    Download SPICE Free
                  </Link>
                  <Link
                    to="/about"
                    className="inline-flex items-center justify-center gap-2 bg-card border border-border hover:border-primary/50 text-white px-8 py-3 rounded-full font-semibold transition-colors"
                  >
                    Learn About SPICE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>

        <FooterSection />
      </div>
    </>
  );
};

export default StartHere;
