import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Lightbulb, ArrowRight } from "lucide-react";

const howToArticles = [
  {
    id: 1,
    title: "How to Set Boundaries in Open Relationships",
    excerpt: "Clear communication and defined boundaries are the foundation of healthy ENM relationships.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop",
    author: "SPICE Team",
    readTime: "6 min read",
  },
  {
    id: 2,
    title: "How to Have 'The Talk' With Your Partner",
    excerpt: "A step-by-step guide to opening up the conversation about exploring ethical non-monogamy.",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=400&fit=crop",
    author: "SPICE Team",
    readTime: "8 min read",
  },
  {
    id: 3,
    title: "How to Navigate Your First Play Party",
    excerpt: "Everything you need to know before attending your first lifestyle event or play party.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop",
    author: "SPICE Team",
    readTime: "10 min read",
  },
  {
    id: 4,
    title: "How to Practice Safe Kink",
    excerpt: "Essential safety practices for BDSM play, from negotiation to aftercare.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
    author: "SPICE Team",
    readTime: "7 min read",
  },
  {
    id: 5,
    title: "How to Create a Dating Profile That Stands Out",
    excerpt: "Tips for crafting an authentic and attractive profile on lifestyle dating apps.",
    image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=400&fit=crop",
    author: "SPICE Team",
    readTime: "5 min read",
  },
  {
    id: 6,
    title: "How to Handle Jealousy in ENM",
    excerpt: "Practical strategies for recognizing, processing, and working through jealousy.",
    image: "https://images.unsplash.com/photo-1516589091380-5d8e87df6999?w=600&h=400&fit=crop",
    author: "SPICE Team",
    readTime: "9 min read",
  },
  {
    id: 7,
    title: "How to Find Your Local Community",
    excerpt: "Discover how to connect with lifestyle communities in your area safely and authentically.",
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=600&h=400&fit=crop",
    author: "SPICE Team",
    readTime: "6 min read",
  },
  {
    id: 8,
    title: "How to Negotiate a Scene",
    excerpt: "A comprehensive guide to BDSM scene negotiation for beginners and experienced players.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=400&fit=crop",
    author: "SPICE Team",
    readTime: "8 min read",
  },
  {
    id: 9,
    title: "How to Practice Compersion",
    excerpt: "Learn to experience joy when your partner finds happiness with others.",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=400&fit=crop",
    author: "SPICE Team",
    readTime: "7 min read",
  },
];

const HowTo = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>How To Guides | SPICE Guide</title>
        <meta name="description" content="Learn how to navigate relationships, communicate effectively, and explore the lifestyle with our comprehensive how-to guides." />
        <link rel="canonical" href="https://thespiceapp.com/guide/how-to" />
      </Helmet>
      
      <Header />
      <Breadcrumbs />
      
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-gradient mb-6">
              <Lightbulb className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">How To</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6">
              <span className="text-gradient">How To</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Practical guides and step-by-step advice for navigating relationships, 
              communication, and exploration in the lifestyle.
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {howToArticles.map((article) => (
              <article 
                key={article.id} 
                className="glass-card rounded-2xl overflow-hidden border-gradient feature-card group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/90 text-primary-foreground">
                      How To
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{article.author}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

export default HowTo;
