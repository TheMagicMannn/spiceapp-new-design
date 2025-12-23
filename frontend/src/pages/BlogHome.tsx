import { BookOpen, TrendingUp, Clock, Heart } from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";

const BlogHome = () => {
  const categories = [
    { name: "Swingers", path: "/blog/swingers", description: "Swinging lifestyle tips and stories", count: 1 },
    { name: "Hotwifing", path: "/blog/hotwifing", description: "Hotwife and stag/vixen guides", count: 10 },
    { name: "BDSM & Kink", path: "/blog/bdsm", description: "Kink education and safety", count: 1 },
    { name: "ENM & Poly", path: "/blog/enm", description: "Non-monogamy insights", count: 0 },
    { name: "Consent & Safety", path: "/blog/consent", description: "Safe practices and boundaries", count: 0 },
    { name: "Travel Stories", path: "/blog/travel", description: "Lifestyle destinations", count: 0 },
    { name: "Relationships", path: "/blog/relationships", description: "Communication and intimacy", count: 1 },
  ];

  const featuredPosts = [
    {
      title: "10 Signs You're Ready to Try the Lifestyle",
      category: "Start Here",
      excerpt: "Curious about swinging, hotwifing, or ENM? Here are 10 signs you and your partner might be ready to explore the lifestyle together.",
      path: "/blog/10-signs-ready-lifestyle",
      readTime: "8 min read"
    },
    {
      title: "How to Talk to Your Partner About Opening Your Relationship",
      category: "Relationships",
      excerpt: "A step-by-step guide to having 'the talk' with your partner about ENM, polyamory, or swinging. Communication strategies that work.",
      path: "/blog/talk-partner-opening-relationship",
      readTime: "12 min read"
    },
    {
      title: "Your First Swinger Party: What to Expect",
      category: "Swingers",
      excerpt: "Complete guide to your first lifestyle party. From what to wear to how to navigate the social dynamics, we've got you covered.",
      path: "/blog/first-swinger-party-guide",
      readTime: "10 min read"
    },
  ];

  return (
    <>
      <SEO
        title="SPICE Blog: Lifestyle Dating, Swinging, BDSM & ENM Articles"
        description="Expert articles on swingers lifestyle, hotwifing, BDSM, polyamory, ENM, consent, and relationship communication. Educational content for lifestyle couples and singles."
        keywords="lifestyle blog, swingers blog, hotwifing articles, BDSM guides, ENM blog, polyamory articles, swinger advice, lifestyle dating tips"
        canonical="https://thespiceapp.com/blog"
      />

      <div className="relative min-h-screen">
        <ParticlesBackground />
        <Header />
        <Breadcrumbs />
        
        <main className="relative z-10 pt-32 pb-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                SPICE Lifestyle Blog
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Expert guides, real stories, and practical advice for swingers, hotwife couples, BDSM enthusiasts, and ENM practitioners.
              </p>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Featured Articles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {featuredPosts.map((post, index) => (
                  <a
                    key={index}
                    href={post.path}
                    className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:scale-105"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                    <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                  </a>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Browse by Category</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((category, index) => (
                  <a
                    key={index}
                    href={category.path}
                    className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-primary">{category.name}</h3>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {category.count} articles
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
                    <span className="text-primary text-sm font-semibold">Explore {category.name} →</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl p-8 md:p-12 border border-primary/30 text-center">
              <h2 className="text-3xl font-bold mb-4">Join the Conversation</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Download SPICE to connect with writers, share your stories, and engage with the lifestyle community.
              </p>
              <a href="/download" className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all">
                Download SPICE Free
              </a>
            </div>
          </div>
        </main>

        <FooterSection />
      </div>
    </>
  );
};

export default BlogHome;