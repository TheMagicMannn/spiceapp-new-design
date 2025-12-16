import { Link } from "react-router-dom";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEO from "@/components/SEO";
import { Users, Heart, Flame, Link as LinkIcon, ArrowRight } from "lucide-react";

const communities = [
  {
    id: "enm",
    name: "Ethical Non-Monogamy (ENM)",
    icon: Heart,
    description: "Explore relationships beyond traditional monogamy with honesty, consent, and respect.",
    color: "from-pink-500/20 to-rose-500/20",
    articles: [
      {
        slug: "what-is-ethical-non-monogamy",
        title: "What is Ethical Non-Monogamy?",
        excerpt: "An introduction to ENM principles and different relationship structures.",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=400&h=250&fit=crop",
      },
      {
        slug: "enm-vs-cheating-understanding-difference",
        title: "ENM vs Cheating: Understanding the Difference",
        excerpt: "Why consent and communication make all the difference.",
        readTime: "4 min read",
        image: "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?w=400&h=250&fit=crop",
      },
      {
        slug: "coming-out-enm-friends-family",
        title: "Coming Out as ENM to Friends & Family",
        excerpt: "Navigating conversations about your relationship choices.",
        readTime: "7 min read",
        image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=250&fit=crop",
      },
    ],
  },
  {
    id: "bdsm",
    name: "BDSM & Kink",
    icon: Flame,
    description: "A safe space to explore bondage, discipline, dominance, submission, and more.",
    color: "from-purple-500/20 to-violet-500/20",
    articles: [
      {
        slug: "finding-your-bdsm-role-dom-sub-switch",
        title: "Finding Your BDSM Role: Dom, Sub, or Switch?",
        excerpt: "Discover your natural BDSM role through self-reflection, exploration, and experimentation.",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?w=400&h=250&fit=crop",
      },
      {
        slug: "understanding-bdsm-quiz-results",
        title: "Understanding Your BDSM Quiz Results",
        excerpt: "Decode your BDSM compatibility quiz results and learn what your scores mean for your kink identity.",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop",
      },
      {
        slug: "bdsm-terminology-complete-glossary",
        title: "BDSM Terminology: Complete Glossary",
        excerpt: "Master BDSM language with this comprehensive glossary of terms from basic to advanced concepts.",
        readTime: "12 min read",
        image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=400&h=250&fit=crop",
      },
      {
        slug: "bdsm-101-understanding-basics",
        title: "BDSM 101: Understanding the Basics",
        excerpt: "An introduction to kink culture, terminology, and practices.",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?w=400&h=250&fit=crop",
      },
      {
        slug: "importance-of-aftercare",
        title: "The Importance of Aftercare",
        excerpt: "Why aftercare is essential for healthy BDSM experiences.",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?w=400&h=250&fit=crop",
      },
    ],
  },
  {
    id: "swingers",
    name: "Swingers",
    icon: Users,
    description: "Couples and singles who enjoy consensual partner sharing and lifestyle events.",
    color: "from-orange-500/20 to-amber-500/20",
    articles: [
      {
        slug: "10-signs-ready-try-swinging",
        title: "10 Signs You're Ready to Try Swinging",
        excerpt: "Thinking about entering the swinging lifestyle? Here are 10 clear indicators that you and your partner might be ready.",
        readTime: "7 min read",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop",
      },
      {
        slug: "how-to-start-swinging-couples-communication",
        title: "Swinging 101: Getting Started",
        excerpt: "Everything couples need to know before entering the swinging lifestyle.",
        readTime: "7 min read",
        image: "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?w=400&h=250&fit=crop",
      },
      {
        slug: "how-to-navigate-first-play-party",
        title: "Swinger Etiquette: The Unwritten Rules",
        excerpt: "How to navigate clubs, parties, and online communities respectfully.",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=250&fit=crop",
      },
      {
        slug: "how-to-set-boundaries-open-relationships",
        title: "Soft Swap vs Full Swap: What's Right for You?",
        excerpt: "Understanding different levels of participation in swinging.",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1543807535-eceef0bc6599?w=400&h=250&fit=crop",
      },
    ],
  },
  {
    id: "poly",
    name: "Polyamory",
    icon: LinkIcon,
    description: "Building multiple loving, committed relationships with the knowledge and consent of everyone involved.",
    color: "from-blue-500/20 to-cyan-500/20",
    articles: [
      {
        slug: "is-polyamory-right-for-you",
        title: "What is Polyamory?",
        excerpt: "Understanding the philosophy and practice of ethical multi-partner relationships.",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1522098635833-216c03d81fbe?w=400&h=250&fit=crop",
      },
      {
        slug: "managing-jealousy-couples-guide",
        title: "Polyamory Relationship Structures",
        excerpt: "From triads to polycules: different ways to structure poly relationships.",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1516589091380-5d8e87df6999?w=400&h=250&fit=crop",
      },
      {
        slug: "how-to-practice-compersion",
        title: "Managing Time and Energy in Polyamory",
        excerpt: "Practical tips for balancing multiple relationships.",
        readTime: "7 min read",
        image: "https://images.unsplash.com/photo-1522075782449-e45a34f1ddfb?w=400&h=250&fit=crop",
      },
    ],
  },
];

const CommunityLifestyles = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Lifestyle Community Guides",
    "description": "Explore ENM, BDSM, Swinging, and Polyamory communities with comprehensive guides and resources",
    "hasPart": communities.map(community => ({
      "@type": "WebPage",
      "name": community.name,
      "description": community.description,
      "url": `https://thespiceapp.com/guide/community#${community.id}`
    }))
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Lifestyle Communities — ENM, BDSM, Swinging & Polyamory Guides"
        description="Explore diverse lifestyle communities including Ethical Non-Monogamy (ENM), BDSM & Kink, Swingers, and Polyamory. Find articles, guides, and resources for each community on SPICE."
        keywords="ENM community, BDSM community, swinger community, polyamory community, ethical non-monogamy, kink community, lifestyle communities, alternative relationships, sex-positive community, LGBTQ+ lifestyle, consensual non-monogamy, lifestyle dating communities"
        canonical="https://thespiceapp.com/guide/community"
        ogType="website"
        ogImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=630&fit=crop"
        structuredData={structuredData}
      />
      
      <Header />
      <Breadcrumbs />
      
      <main className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-gradient mb-6">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">SPICE Guide</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6">
              <span className="text-gradient">Community</span>
              <br />
              <span className="text-foreground">& Lifestyles</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the diverse communities within the lifestyle world. 
              Each has its own culture, practices, and ways of connecting.
            </p>
          </div>

          {/* Community Sections */}
          <div className="space-y-16">
            {communities.map((community) => (
              <section key={community.id} className="scroll-mt-24" id={community.id}>
                {/* Community Header */}
                <div className={`glass-card rounded-2xl p-8 border-gradient mb-8 bg-gradient-to-br ${community.color}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                      <community.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold">{community.name}</h2>
                  </div>
                  <p className="text-muted-foreground text-lg max-w-2xl">
                    {community.description}
                  </p>
                </div>

                {/* Articles Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                  {community.articles.map((article, idx) => (
                    <Link 
                      key={idx}
                      to={`/guide/article/${article.slug}`}
                      className="glass-card rounded-xl overflow-hidden border-gradient feature-card group cursor-pointer block"
                    >
                      <article>
                        <div className="relative h-36 overflow-hidden">
                          <img 
                            src={article.image} 
                            alt={article.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                          <div className="absolute top-3 left-3">
                            <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/90 text-primary-foreground">
                              {community.name.split(' ')[0]}
                            </span>
                          </div>
                        </div>
                        <div className="p-5">
                          <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                            {article.title}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                            {article.excerpt}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground">{article.readTime}</span>
                            <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </div>
                      </article>
                    </Link>
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
                {communities.map((community) => (
                  <a
                    key={community.id}
                    href={`#${community.id}`}
                    className="flex items-center gap-2 px-4 py-2 rounded-full glass-card hover:bg-primary/20 transition-colors"
                  >
                    <community.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm">{community.name}</span>
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

export default CommunityLifestyles;
