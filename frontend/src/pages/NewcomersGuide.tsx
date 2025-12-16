import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Heart, Users, Sparkles, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    slug: "first-steps-lifestyle-beginners-guide",
    category: "Getting Started",
    title: "Your First Steps Into the Lifestyle: A Beginner's Complete Guide",
    excerpt: "Everything you need to know before taking your first steps into ethical non-monogamy, from communication basics to setting boundaries.",
    image: "https://images.unsplash.com/photo-1543807535-eceef0bc6599?w=600&h=400&fit=crop",
    author: "SPICE Team",
    readTime: "8 min read",
    forCouples: true,
    forSingles: true,
  },
  {
    id: 2,
    slug: "how-to-start-swinging-couples-communication",
    category: "For Couples",
    title: "How to Start Swinging as a Couple: Communication First",
    excerpt: "Learn how to have the crucial conversations with your partner before exploring the swinging lifestyle together.",
    image: "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?w=600&h=400&fit=crop",
    author: "SPICE Team",
    readTime: "6 min read",
    forCouples: true,
    forSingles: false,
  },
  {
    id: 3,
    slug: "navigating-lifestyle-single-person",
    category: "For Singles",
    title: "Navigating the Lifestyle as a Single Person",
    excerpt: "Tips and etiquette for singles entering ENM communities, whether you identify as a unicorn, solo poly, or are just exploring.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&h=400&fit=crop",
    author: "SPICE Team",
    readTime: "7 min read",
    forCouples: false,
    forSingles: true,
  },
  {
    id: 4,
    slug: "kink-101-bdsm-beginners",
    category: "BDSM Basics",
    title: "Kink 101: Understanding BDSM for Beginners",
    excerpt: "A safe and welcoming introduction to BDSM, covering consent, negotiation, and exploring your interests.",
    image: "https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?w=600&h=400&fit=crop",
    author: "SPICE Team",
    readTime: "10 min read",
    forCouples: true,
    forSingles: true,
  },
  {
    id: 5,
    slug: "is-polyamory-right-for-you",
    category: "Polyamory",
    title: "Is Polyamory Right for You? Self-Reflection Questions",
    excerpt: "Explore whether ethical non-monogamy aligns with your values, needs, and relationship goals.",
    image: "https://images.unsplash.com/photo-1522098635833-216c03d81fbe?w=600&h=400&fit=crop",
    author: "SPICE Team",
    readTime: "5 min read",
    forCouples: true,
    forSingles: true,
  },
  {
    id: 6,
    slug: "managing-jealousy-couples-guide",
    category: "For Couples",
    title: "Managing Jealousy: A Couple's Guide",
    excerpt: "Practical strategies for couples to work through jealousy and strengthen their connection while exploring.",
    image: "https://images.unsplash.com/photo-1516589091380-5d8e87df6999?w=600&h=400&fit=crop",
    author: "SPICE Team",
    readTime: "8 min read",
    forCouples: true,
    forSingles: false,
  },
];

const NewcomersGuide = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>For the Interested & Curious | SPICE Guide</title>
        <meta name="description" content="New to the lifestyle? Explore our beginner guides for couples and singles entering ENM, swinging, BDSM, and polyamory communities." />
        <link rel="canonical" href="https://thespiceapp.com/guide/newcomers" />
      </Helmet>
      
      <Header />
      <Breadcrumbs />
      
      <main className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-gradient mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">SPICE Guide</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6">
              <span className="text-gradient">For the Interested</span>
              <br />
              <span className="text-foreground">& Curious</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether you're a couple exploring together or a single person curious about the lifestyle, 
              we've got you covered with everything you need to know.
            </p>
          </div>

          {/* Filter Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-card">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm">For Couples</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-card">
              <Heart className="w-4 h-4 text-primary" />
              <span className="text-sm">For Singles</span>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link 
                key={post.id} 
                to={`/guide/article/${post.slug}`}
                className="glass-card rounded-2xl overflow-hidden border-gradient feature-card group cursor-pointer block"
              >
                <article>
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs font-medium rounded-full bg-primary/90 text-primary-foreground">
                        {post.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 flex gap-2">
                      {post.forCouples && (
                        <span className="px-2 py-1 text-xs rounded-full bg-background/80 backdrop-blur-sm">
                          <Users className="w-3 h-3 inline" />
                        </span>
                      )}
                      {post.forSingles && (
                        <span className="px-2 py-1 text-xs rounded-full bg-background/80 backdrop-blur-sm">
                          <Heart className="w-3 h-3 inline" />
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{post.author}</span>
                      <div className="flex items-center gap-2">
                        <span>{post.readTime}</span>
                        <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="glass-card rounded-2xl p-8 border-gradient max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Ready to explore?</h3>
              <p className="text-muted-foreground mb-6">
                Take our compatibility quiz to discover more about yourself and find like-minded connections.
              </p>
              <Link 
                to="/quiz"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                Take the BDSM Quiz
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

export default NewcomersGuide;
