import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BookOpen, Users, Heart, Shield, Sparkles, HelpCircle, ArrowRight, Compass, MessageCircle, Brain } from "lucide-react";

const guideCategories = [
  {
    title: "For the Interested/Curious",
    description: "New to the lifestyle? Start here with beginner-friendly guides on swinging, ENM, BDSM, and polyamory.",
    icon: Compass,
    path: "/guide/newcomers",
    color: "from-pink-500/20 to-purple-500/20",
    borderColor: "border-pink-500/30",
    iconColor: "text-pink-500"
  },
  {
    title: "How To Guides",
    description: "Step-by-step tutorials on everything from having the first conversation to attending your first event.",
    icon: BookOpen,
    path: "/guide/how-to",
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "border-blue-500/30",
    iconColor: "text-blue-500"
  },
  {
    title: "Community & Lifestyles",
    description: "Explore different lifestyle communities, relationship structures, and find where you belong.",
    icon: Users,
    path: "/guide/community",
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "border-purple-500/30",
    iconColor: "text-purple-500"
  },
  {
    title: "Safety & Consent",
    description: "Essential resources on staying safe, practicing consent, and protecting yourself and partners.",
    icon: Shield,
    path: "/guide/safety",
    color: "from-green-500/20 to-emerald-500/20",
    borderColor: "border-green-500/30",
    iconColor: "text-green-500"
  },
  {
    title: "Self Care Resources",
    description: "Mental health, emotional well-being, and aftercare guides for a healthy lifestyle journey.",
    icon: Heart,
    path: "/guide/self-care",
    color: "from-red-500/20 to-orange-500/20",
    borderColor: "border-red-500/30",
    iconColor: "text-red-500"
  },
  {
    title: "Glossary",
    description: "Learn the terminology and language used in lifestyle, kink, and ENM communities.",
    icon: HelpCircle,
    path: "/guide/glossary",
    color: "from-yellow-500/20 to-amber-500/20",
    borderColor: "border-yellow-500/30",
    iconColor: "text-yellow-500"
  },
];

const quickLinks = [
  { title: "Start Here", description: "Brand new? Begin your journey", path: "/start", icon: Sparkles },
  { title: "Lifestyle Quizzes", description: "Discover your preferences", path: "/quiz", icon: Brain },
  { title: "Blog", description: "In-depth articles & stories", path: "/blog", icon: MessageCircle },
];

const SpiceGuide = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "SPICE Guide - Lifestyle Education Hub",
    "description": "Comprehensive guides and resources for exploring swinging, BDSM, ENM, polyamory, and kink lifestyles safely.",
    "url": "https://thespiceapp.com/guide",
    "hasPart": guideCategories.map(category => ({
      "@type": "WebPage",
      "name": category.title,
      "description": category.description,
      "url": `https://thespiceapp.com${category.path}`
    }))
  };

  return (
    <>
      <SEO
        title="SPICE Guide - Lifestyle Education Hub | Swinging, BDSM, ENM & Kink Resources"
        description="Your comprehensive guide to exploring the lifestyle. Learn about swinging, BDSM, ENM, polyamory, and kink with expert resources, safety guides, and community insights."
        keywords="lifestyle guide, swinging guide, BDSM education, ENM resources, polyamory guide, kink education, lifestyle beginners, swinger community, consent guide, lifestyle safety"
        canonical="https://thespiceapp.com/guide"
        structuredData={structuredData}
      />

      <div className="relative min-h-screen">
        <ParticlesBackground />
        <Header />
        <Breadcrumbs />
        
        <main className="relative z-10 pt-32 pb-12">
          <div className="container mx-auto px-4 max-w-6xl">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <BookOpen className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Education Hub</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                SPICE Guide
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Your comprehensive resource for exploring the lifestyle safely and confidently. 
                Whether you're curious about swinging, BDSM, ENM, or polyamory, we've got you covered.
              </p>
            </div>

            {/* Quick Links */}
            <div className="mb-16">
              <div className="grid md:grid-cols-3 gap-4">
                {quickLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="flex items-center gap-4 p-4 bg-card/50 backdrop-blur-sm border border-border rounded-xl hover:border-primary/50 transition-all group"
                    >
                      <div className="p-3 rounded-lg bg-primary/10">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold group-hover:text-primary transition-colors">{link.title}</h3>
                        <p className="text-sm text-muted-foreground">{link.description}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Guide Categories Grid */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8 text-center">Explore by Category</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {guideCategories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <Link
                      key={category.path}
                      to={category.path}
                      className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${category.color} border ${category.borderColor} p-6 hover:scale-[1.02] transition-all duration-300`}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl bg-background/50 backdrop-blur-sm ${category.iconColor}`}>
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                            {category.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {category.description}
                          </p>
                        </div>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Featured Topics */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 mb-16">
              <h2 className="text-2xl font-bold mb-6">Popular Topics</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link to="/lifestyle/swingers-guide" className="p-4 bg-background/50 rounded-xl hover:bg-background/80 transition-colors text-center">
                  <span className="text-2xl mb-2 block">🔄</span>
                  <span className="font-medium">Swinging Guide</span>
                </Link>
                <Link to="/lifestyle/hotwifing-guide" className="p-4 bg-background/50 rounded-xl hover:bg-background/80 transition-colors text-center">
                  <span className="text-2xl mb-2 block">💑</span>
                  <span className="font-medium">Hotwifing Guide</span>
                </Link>
                <Link to="/lifestyle/enm-polyamory-guide" className="p-4 bg-background/50 rounded-xl hover:bg-background/80 transition-colors text-center">
                  <span className="text-2xl mb-2 block">💕</span>
                  <span className="font-medium">ENM & Polyamory</span>
                </Link>
                <Link to="/blog/bdsm" className="p-4 bg-background/50 rounded-xl hover:bg-background/80 transition-colors text-center">
                  <span className="text-2xl mb-2 block">⛓️</span>
                  <span className="font-medium">BDSM & Kink</span>
                </Link>
                <Link to="/start/consent-basics" className="p-4 bg-background/50 rounded-xl hover:bg-background/80 transition-colors text-center">
                  <span className="text-2xl mb-2 block">✅</span>
                  <span className="font-medium">Consent Basics</span>
                </Link>
                <Link to="/start/etiquette" className="p-4 bg-background/50 rounded-xl hover:bg-background/80 transition-colors text-center">
                  <span className="text-2xl mb-2 block">🎩</span>
                  <span className="font-medium">Lifestyle Etiquette</span>
                </Link>
                <Link to="/lifestyle/jealousy-management" className="p-4 bg-background/50 rounded-xl hover:bg-background/80 transition-colors text-center">
                  <span className="text-2xl mb-2 block">💚</span>
                  <span className="font-medium">Managing Jealousy</span>
                </Link>
                <Link to="/start/myths" className="p-4 bg-background/50 rounded-xl hover:bg-background/80 transition-colors text-center">
                  <span className="text-2xl mb-2 block">🚫</span>
                  <span className="font-medium">Common Myths</span>
                </Link>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl p-8 border border-primary/30 text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Connect?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Put your knowledge into practice. Join SPICE to meet like-minded individuals and couples 
                in a safe, verified community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/download" 
                  className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all"
                >
                  Join SPICE Free
                </Link>
                <Link 
                  to="/quiz" 
                  className="inline-flex items-center justify-center px-8 py-3 bg-background/50 hover:bg-background/80 border border-border font-semibold rounded-full transition-all"
                >
                  Explore Lifestyle Quizzes
                </Link>
              </div>
            </div>
          </div>
        </main>

        <FooterSection />
      </div>
    </>
  );
};

export default SpiceGuide;
