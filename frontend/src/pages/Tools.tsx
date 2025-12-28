import { Wrench, BarChart3, Shield, BookOpen, Calculator, Heart, Users, Sparkles, ChevronRight, Star, MessageSquare, Scale, FileText, Lightbulb } from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";

const Tools = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Lifestyle Tools & Resources - SPICE",
    "description": "Free tools for swingers, BDSM, ENM and polyamorous communities. App comparisons, compatibility quizzes, STI resources, and educational guides."
  };

  const mainTools = [
    {
      title: "App Comparisons",
      description: "Compare SPICE with Feeld, 3Fun, SDC, Kasidie, SLS and more. Features, pricing, safety ratings.",
      icon: BarChart3,
      path: "/tools/app-comparisons",
      color: "from-blue-500 to-cyan-500",
      badge: "Popular",
      stats: "6 apps compared"
    },
    {
      title: "BDSM Compatibility Quiz",
      description: "Discover your kinks, limits, and find compatible partners. 50+ questions covering all aspects of BDSM.",
      icon: Heart,
      path: "/quiz",
      color: "from-pink-500 to-rose-500",
      badge: "Most Used",
      stats: "10K+ taken"
    },
    {
      title: "STI Resources",
      description: "Testing locations, prevention guides, and health resources for sexually active adults.",
      icon: Shield,
      path: "/tools/sti-resources",
      color: "from-green-500 to-emerald-500",
      badge: null,
      stats: "Updated monthly"
    },
    {
      title: "Feature Comparison",
      description: "Side-by-side comparison of dating app features for the lifestyle community.",
      icon: Scale,
      path: "/tools/feature-comparison",
      color: "from-purple-500 to-violet-500",
      badge: null,
      stats: "23 features"
    }
  ];

  const comparisons = [
    { name: "SPICE vs Feeld", path: "/vs/feeld", score: "92 vs 78", emoji: "🌿" },
    { name: "SPICE vs 3Fun", path: "/vs/3fun", score: "90 vs 65", emoji: "🔥" },
    { name: "SPICE vs SDC", path: "/vs/sdc", score: "88 vs 72", emoji: "💎" },
    { name: "SPICE vs Kasidie", path: "/vs/kasidie", score: "87 vs 74", emoji: "👑" },
    { name: "SPICE vs SLS", path: "/vs/sls", score: "86 vs 68", emoji: "🎭" },
  ];

  const guides = [
    {
      title: "Lifestyle Glossary",
      description: "200+ terms explained for swingers, BDSM, and ENM communities",
      icon: BookOpen,
      path: "/resources/glossary"
    },
    {
      title: "First Time Guide",
      description: "Everything you need to know before your first lifestyle experience",
      icon: Lightbulb,
      path: "/resources/first-time"
    },
    {
      title: "Communication Scripts",
      description: "Templates for discussing lifestyle with partners",
      icon: MessageSquare,
      path: "/lifestyle/relationships-communication"
    },
    {
      title: "Safety Checklist",
      description: "Pre-meet safety protocols and verification tips",
      icon: Shield,
      path: "/guide/safety"
    }
  ];

  return (
    <>
      <SEO
        title="Lifestyle Tools & Resources | SPICE"
        description="Free tools for swingers, BDSM, ENM and polyamorous communities. App comparisons, BDSM quiz, STI resources, and educational guides."
        keywords="lifestyle tools, swingers resources, BDSM quiz, dating app comparison, STI testing, ENM resources, polyamory guides"
        canonical="https://thespiceapp.com/tools"
        structuredData={structuredData}
      />

      <div className="relative min-h-screen">
        <ParticlesBackground />
        <Header />
        <Breadcrumbs />
        
        <main className="relative z-10 pt-32 pb-12">
          <div className="container mx-auto px-4">
            
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Wrench className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                Tools & Resources
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Free tools to help you navigate the lifestyle. Compare apps, discover your preferences, find health resources, and learn from our guides.
              </p>
            </div>

            {/* Main Tools Grid */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <Star className="w-6 h-6 text-primary" />
                Popular Tools
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {mainTools.map((tool, index) => (
                  <Link
                    key={index}
                    to={tool.path}
                    className="group bg-card/60 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/10"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-4 rounded-xl bg-gradient-to-br ${tool.color} bg-opacity-20`}>
                        <tool.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                            {tool.title}
                          </h3>
                          {tool.badge && (
                            <span className="px-2 py-0.5 bg-primary/20 text-primary text-xs font-medium rounded-full">
                              {tool.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-muted-foreground mb-3">{tool.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">{tool.stats}</span>
                          <span className="text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                            Open Tool <ChevronRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* Quick Comparisons */}
            <section className="mb-16">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold flex items-center gap-3">
                  <BarChart3 className="w-6 h-6 text-primary" />
                  Quick Comparisons
                </h2>
                <Link to="/tools/app-comparisons" className="text-primary hover:underline flex items-center gap-1">
                  View All <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {comparisons.map((comp, index) => (
                  <Link
                    key={index}
                    to={comp.path}
                    className="group bg-card/50 backdrop-blur-sm border border-border rounded-xl p-4 hover:border-primary/50 transition-all text-center"
                  >
                    <span className="text-3xl mb-2 block">{comp.emoji}</span>
                    <h3 className="font-bold text-sm group-hover:text-primary transition-colors mb-1">
                      {comp.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">{comp.score}</p>
                  </Link>
                ))}
              </div>
            </section>

            {/* Educational Resources */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-primary" />
                Educational Resources
              </h2>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {guides.map((guide, index) => (
                  <Link
                    key={index}
                    to={guide.path}
                    className="group bg-card/50 backdrop-blur-sm border border-border rounded-xl p-5 hover:border-primary/50 transition-all"
                  >
                    <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                      <guide.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">
                      {guide.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{guide.description}</p>
                  </Link>
                ))}
              </div>
            </section>

            {/* Stats Section */}
            <section className="mb-16">
              <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-pink-500/20 border border-primary/30 rounded-2xl p-8 md:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Trusted by the Lifestyle Community</h2>
                  <p className="text-muted-foreground">Our tools help thousands make informed decisions</p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">10K+</div>
                    <div className="text-sm text-muted-foreground">Quizzes Taken</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">6</div>
                    <div className="text-sm text-muted-foreground">Apps Compared</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">200+</div>
                    <div className="text-sm text-muted-foreground">Glossary Terms</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary mb-2">50K+</div>
                    <div className="text-sm text-muted-foreground">Monthly Users</div>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section>
              <div className="bg-card/60 backdrop-blur-sm border border-border rounded-2xl p-8 text-center">
                <Sparkles className="w-12 h-12 text-primary mx-auto mb-6" />
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Find Your Match?</h2>
                <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                  Take our BDSM compatibility quiz to discover your preferences and find partners who match your desires.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link 
                    to="/quiz" 
                    className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all gap-2"
                  >
                    <Heart className="w-5 h-5" />
                    Take the Quiz
                  </Link>
                  <Link 
                    to="/download" 
                    className="inline-flex items-center justify-center px-8 py-3 border border-primary text-primary hover:bg-primary/10 font-semibold rounded-full transition-all gap-2"
                  >
                    Download SPICE
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </section>

          </div>
        </main>

        <FooterSection />
      </div>
    </>
  );
};

export default Tools;
