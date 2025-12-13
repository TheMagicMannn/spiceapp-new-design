import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Shield, Lock, Eye, AlertTriangle, ArrowRight } from "lucide-react";

const safetyCategories = [
  {
    id: "online",
    title: "Online Safety",
    icon: Lock,
    description: "Protect yourself in the digital world",
    articles: [
      {
        title: "Protecting Your Privacy on Dating Apps",
        excerpt: "Essential tips for maintaining your privacy and security while using lifestyle apps and websites.",
        readTime: "6 min read",
      },
      {
        title: "Spotting Fake Profiles and Catfishing",
        excerpt: "Red flags to watch for and verification strategies to ensure you're talking to real people.",
        readTime: "5 min read",
      },
      {
        title: "Secure Communication Practices",
        excerpt: "How to keep your conversations private and protect sensitive information.",
        readTime: "4 min read",
      },
    ],
  },
  {
    id: "dating",
    title: "Dating Safety",
    icon: Eye,
    description: "Stay safe when meeting new people",
    articles: [
      {
        title: "First Meet Safety Guidelines",
        excerpt: "A comprehensive checklist for meeting someone from the lifestyle community for the first time.",
        readTime: "7 min read",
      },
      {
        title: "The Buddy System: Keeping Friends Informed",
        excerpt: "How to set up a safety network when meeting new connections.",
        readTime: "4 min read",
      },
      {
        title: "Trusting Your Instincts",
        excerpt: "Recognizing and acting on red flags during dates and meetups.",
        readTime: "5 min read",
      },
    ],
  },
  {
    id: "consent",
    title: "Consent & Boundaries",
    icon: Shield,
    description: "Understanding and practicing enthusiastic consent",
    articles: [
      {
        title: "Enthusiastic Consent 101",
        excerpt: "What consent really means and how to practice it in every interaction.",
        readTime: "6 min read",
      },
      {
        title: "Setting and Communicating Boundaries",
        excerpt: "How to clearly express your limits and respect those of others.",
        readTime: "5 min read",
      },
      {
        title: "What to Do If Consent Is Violated",
        excerpt: "Resources and steps for handling consent violations in the lifestyle community.",
        readTime: "8 min read",
      },
    ],
  },
  {
    id: "health",
    title: "Sexual Health",
    icon: AlertTriangle,
    description: "Protecting yourself and your partners",
    articles: [
      {
        title: "STI Testing: What, When, and How Often",
        excerpt: "A guide to regular testing and what to get tested for as an active member of the lifestyle.",
        readTime: "7 min read",
      },
      {
        title: "Safer Sex Practices for ENM",
        excerpt: "Barrier methods, risk reduction, and communication about sexual health.",
        readTime: "6 min read",
      },
      {
        title: "PrEP and PEP: What You Need to Know",
        excerpt: "Understanding HIV prevention medications and whether they're right for you.",
        readTime: "5 min read",
      },
    ],
  },
];

const Safety = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Safety Resources | SPICE Guide</title>
        <meta name="description" content="Stay safe in the lifestyle with our comprehensive safety guides. Learn about online safety, dating safety, consent, and sexual health." />
        <link rel="canonical" href="https://thespiceapp.com/guide/safety" />
      </Helmet>
      
      <Header />
      <Breadcrumbs />
      
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-gradient mb-6">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">SPICE Guide</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6">
              <span className="text-gradient">Safety</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your safety is our priority. Learn how to protect yourself online, in person, 
              and in your intimate experiences.
            </p>
          </div>

          {/* Safety Alert Banner */}
          <div className="glass-card rounded-2xl p-6 border-gradient bg-destructive/10 mb-12">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-destructive shrink-0 mt-1" />
              <div>
                <h2 className="text-lg font-bold mb-2">Emergency Resources</h2>
                <p className="text-muted-foreground mb-4">
                  If you're in immediate danger, please contact emergency services. For non-emergency support:
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="text-foreground">RAINN Hotline: 1-800-656-4673</span>
                  <span className="text-muted-foreground">|</span>
                  <span className="text-foreground">National DV Hotline: 1-800-799-7233</span>
                </div>
              </div>
            </div>
          </div>

          {/* Safety Categories */}
          <div className="space-y-16">
            {safetyCategories.map((category) => (
              <section key={category.id} className="scroll-mt-24" id={category.id}>
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{category.title}</h2>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>
                </div>

                {/* Articles Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                  {category.articles.map((article, idx) => (
                    <article 
                      key={idx}
                      className="glass-card rounded-xl p-6 border-gradient feature-card group cursor-pointer"
                    >
                      <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{article.readTime}</span>
                        <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Quick Navigation */}
          <div className="mt-16">
            <div className="glass-card rounded-2xl p-6 border-gradient">
              <h3 className="text-lg font-bold mb-4 text-center">Quick Navigation</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {safetyCategories.map((category) => (
                  <a
                    key={category.id}
                    href={`#${category.id}`}
                    className="flex items-center gap-2 px-4 py-2 rounded-full glass-card hover:bg-primary/20 transition-colors"
                  >
                    <category.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm">{category.title}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

export default Safety;
