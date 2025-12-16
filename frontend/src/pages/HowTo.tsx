import { Link } from "react-router-dom";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEO from "@/components/SEO";
import { Lightbulb, ArrowRight } from "lucide-react";

const howToArticles = [
  {
    id: 1,
    slug: "how-to-talk-to-partner-about-enm",
    title: "How to Talk to Your Partner About ENM",
    excerpt: "A compassionate, step-by-step guide to opening the conversation about ethical non-monogamy with your partner.",
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=400&fit=crop",
    author: "SPICE Team",
    readTime: "9 min read",
  },
  {
    id: 2,
    slug: "lifestyle-dating-etiquette-dos-donts",
    title: "Lifestyle Dating Etiquette: Do's and Don'ts",
    excerpt: "Master the unwritten rules of lifestyle dating. Learn proper etiquette for couples and singles navigating ENM, swinging, and BDSM communities.",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop",
    author: "SPICE Team",
    readTime: "8 min read",
  },
  {
    id: 3,
    slug: "creating-couples-profile-tips-success",
    title: "Creating a Couples Profile: Tips for Success",
    excerpt: "Build an attractive, authentic couples profile for lifestyle dating apps. Learn what to include, what to avoid, and how to stand out.",
    image: "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?w=600&h=400&fit=crop",
    author: "SPICE Team",
    readTime: "7 min read",
  },
  {
    id: 4,
    slug: "jealousy-management-open-relationships",
    title: "Jealousy Management in Open Relationships",
    excerpt: "Practical strategies for recognizing, processing, and working through jealousy in ENM relationships.",
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=600&h=400&fit=crop",
    author: "SPICE Team",
    readTime: "9 min read",
  },
  {
    id: 5,
    slug: "how-to-set-boundaries-open-relationships",
    title: "How to Set Boundaries in Open Relationships",
    excerpt: "Clear communication and defined boundaries are the foundation of healthy ENM relationships.",
    image: "https://images.unsplash.com/photo-1586380951230-e6703d9f6833?w=600&h=400&fit=crop",
    author: "SPICE Team",
    readTime: "6 min read",
  },
  {
    id: 6,
    slug: "how-to-have-the-talk-partner",
    title: "How to Have 'The Talk' With Your Partner",
    excerpt: "A step-by-step guide to opening up the conversation about exploring ethical non-monogamy.",
    image: "https://images.unsplash.com/photo-1543807535-eceef0bc6599?w=600&h=400&fit=crop",
    author: "SPICE Team",
    readTime: "8 min read",
  },
  {
    id: 7,
    slug: "how-to-navigate-first-play-party",
    title: "How to Navigate Your First Play Party",
    excerpt: "Everything you need to know before attending your first lifestyle event or play party.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop",
    author: "SPICE Team",
    readTime: "10 min read",
  },
  {
    id: 8,
    slug: "how-to-practice-safe-kink",
    title: "How to Practice Safe Kink",
    excerpt: "Essential safety practices for BDSM play, from negotiation to aftercare.",
    image: "https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?w=600&h=400&fit=crop",
    author: "SPICE Team",
    readTime: "7 min read",
  },
  {
    id: 9,
    slug: "how-to-create-dating-profile-stands-out",
    title: "How to Create a Dating Profile That Stands Out",
    excerpt: "Tips for crafting an authentic and attractive profile on lifestyle dating apps.",
    image: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=600&h=400&fit=crop",
    author: "SPICE Team",
    readTime: "5 min read",
  },
  {
    id: 10,
    slug: "how-to-handle-jealousy-enm",
    title: "How to Handle Jealousy in ENM",
    excerpt: "Practical strategies for recognizing, processing, and working through jealousy.",
    image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=600&h=400&fit=crop",
    author: "SPICE Team",
    readTime: "9 min read",
  },
  {
    id: 11,
    slug: "how-to-find-local-community",
    title: "How to Find Your Local Community",
    excerpt: "Discover how to connect with lifestyle communities in your area safely and authentically.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop",
    author: "SPICE Team",
    readTime: "6 min read",
  },
  {
    id: 12,
    slug: "how-to-negotiate-scene",
    title: "How to Negotiate a Scene",
    excerpt: "A comprehensive guide to BDSM scene negotiation for beginners and experienced players.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop",
    author: "SPICE Team",
    readTime: "8 min read",
  },
  {
    id: 13,
    slug: "how-to-practice-compersion",
    title: "How to Practice Compersion",
    excerpt: "Learn to experience joy when your partner finds happiness with others.",
    image: "https://images.unsplash.com/photo-1522098635833-216c03d81fbe?w=600&h=400&fit=crop",
    author: "SPICE Team",
    readTime: "7 min read",
  },
];

const HowTo = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Lifestyle How-To Guides",
    "description": "Practical guides for navigating relationships, communication, and lifestyle exploration",
    "itemListElement": howToArticles.map((article, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "HowTo",
        "name": article.title,
        "description": article.excerpt,
        "url": `https://thespiceapp.com/guide/article/${article.slug}`
      }
    }))
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Lifestyle How-To Guides — ENM, BDSM & Relationship Communication Tips"
        description="Step-by-step guides for navigating ENM relationships, BDSM exploration, setting boundaries, handling jealousy, and building healthy communication in alternative lifestyles."
        keywords="lifestyle how-to guides, ENM communication tips, BDSM for beginners, how to handle jealousy ENM, setting boundaries open relationships, poly relationship advice, swinger lifestyle tips, kink negotiation guide, compersion practice, lifestyle dating tips"
        canonical="https://thespiceapp.com/guide/how-to"
        ogType="website"
        ogImage="https://images.unsplash.com/photo-1586380951230-e6703d9f6833?w=1200&h=630&fit=crop"
        structuredData={structuredData}
      />
      
      <Header />
      <Breadcrumbs />
      
      <main className="pt-32 pb-16 px-4">
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
              <Link 
                key={article.id} 
                to={`/guide/article/${article.slug}`}
                className="glass-card rounded-2xl overflow-hidden border-gradient feature-card group cursor-pointer block"
              >
                <article>
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
              </Link>
            ))}
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

export default HowTo;
