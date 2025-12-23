import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, Clock, Filter, X } from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// All blog posts data - single source of truth
const allBlogPosts = [
  // Hotwifing Articles (10)
  {
    title: "Beginner's Guide to Hotwifing: Starting the Conversation",
    category: "hotwifing",
    categoryDisplay: "Hotwifing",
    excerpt: "Complete beginner's guide to hotwifing. Learn how to introduce the hotwife lifestyle to your partner, discuss boundaries, build trust, and start your journey safely.",
    path: "/blog/hotwifing-beginners-guide",
    readTime: "15 min read",
    date: "2025-01-15"
  },
  {
    title: "Overcoming Jealousy: Real Strategies for Hotwife Couples",
    category: "hotwifing",
    categoryDisplay: "Hotwifing",
    excerpt: "Learn proven strategies for managing jealousy in the hotwife lifestyle. Turn jealousy into compersion and strengthen your relationship.",
    path: "/blog/hotwifing-jealousy",
    readTime: "12 min read",
    date: "2025-01-14"
  },
  {
    title: "My First Hotwife Date: What Went Right (and Wrong)",
    category: "hotwifing",
    categoryDisplay: "Hotwifing",
    excerpt: "A candid, detailed account of our first hotwife experience—the nerves, the excitement, the mistakes, and the unexpected lessons.",
    path: "/blog/hotwifing-first-date",
    readTime: "10 min read",
    date: "2025-01-13"
  },
  {
    title: "Finding the Perfect Bull: Tips for Safe Encounters",
    category: "hotwifing",
    categoryDisplay: "Hotwifing",
    excerpt: "Complete guide to finding the right bull for your hotwife adventures. Learn vetting strategies, red flags, and how to ensure safe encounters.",
    path: "/blog/hotwifing-finding-bull",
    readTime: "14 min read",
    date: "2025-01-12"
  },
  {
    title: "Reclamation Sex: Why It's the Hottest Part of Coming Home",
    category: "hotwifing",
    categoryDisplay: "Hotwifing",
    excerpt: "Discover why reclamation sex is the most intense, intimate part of the hotwife experience and how to maximize reconnection.",
    path: "/blog/hotwifing-reclamation-sex",
    readTime: "11 min read",
    date: "2025-01-11"
  },
  {
    title: "Hotwife Fantasies vs. Reality: Debunking Common Myths",
    category: "hotwifing",
    categoryDisplay: "Hotwifing",
    excerpt: "Separate hotwife fantasy from reality. We debunk common myths about the hotwife lifestyle including infidelity fears and relationship damage.",
    path: "/blog/hotwifing-fantasy-reality",
    readTime: "13 min read",
    date: "2025-01-10"
  },
  {
    title: "Creative Date Ideas to Keep the Hotwife Spark Alive",
    category: "hotwifing",
    categoryDisplay: "Hotwifing",
    excerpt: "Exciting date ideas for hotwife couples. From role-playing strangers to public flirting and surprise encounters.",
    path: "/blog/hotwifing-creative-dates",
    readTime: "9 min read",
    date: "2025-01-09"
  },
  {
    title: "The Emotional Highs and Lows of Hotwifing: A Year in Review",
    category: "hotwifing",
    categoryDisplay: "Hotwifing",
    excerpt: "An intimate, honest reflection on our first year in the hotwife lifestyle—the growth, challenges, surprises, and transformation.",
    path: "/blog/hotwifing-year-review",
    readTime: "14 min read",
    date: "2025-01-08"
  },
  {
    title: "Incorporating Toys and Kink: Elevating Hotwife Experiences",
    category: "hotwifing",
    categoryDisplay: "Hotwifing",
    excerpt: "Enhance your hotwife dynamic with toys, BDSM elements, and kink. Ideas for chastity, bondage, role-play, and more.",
    path: "/blog/hotwifing-toys-kink",
    readTime: "12 min read",
    date: "2025-01-07"
  },
  {
    title: "Hotwifing and Communication: How It Transformed Our Marriage",
    category: "hotwifing",
    categoryDisplay: "Hotwifing",
    excerpt: "Discover how the hotwife lifestyle transformed one couple's marriage through radical honesty, deeper trust, and unprecedented communication.",
    path: "/blog/hotwifing-communication-marriage",
    readTime: "13 min read",
    date: "2025-01-06"
  },
  // Swingers Articles (11)
  {
    title: "10 Signs You're Ready to Try the Lifestyle",
    category: "swingers",
    categoryDisplay: "Swingers",
    excerpt: "Curious about swinging, hotwifing, or ENM? Here are 10 signs you and your partner might be ready to explore the lifestyle together.",
    path: "/blog/10-signs-ready-lifestyle",
    readTime: "8 min read",
    date: "2025-01-20"
  },
  {
    title: "Swinging 101: A Step-by-Step Guide for Curious Couples",
    category: "swingers",
    categoryDisplay: "Swingers",
    excerpt: "Complete beginner's guide to swinging. Learn how to start the conversation, set rules, find swinger clubs and events, and prepare for your first experience.",
    path: "/blog/swinging-101-beginners-guide",
    readTime: "18 min read",
    date: "2025-01-19"
  },
  {
    title: "The Biggest Mistakes New Swinging Couples Make",
    category: "swingers",
    categoryDisplay: "Swingers",
    excerpt: "Real-talk lessons from experienced couples on common pitfalls like poor communication, rushing into play, ignoring jealousy triggers, and choosing the wrong first partners.",
    path: "/blog/swinging-mistakes-avoid",
    readTime: "14 min read",
    date: "2025-01-18"
  },
  {
    title: "How Swinging Strengthened Our Marriage: Real Stories",
    category: "swingers",
    categoryDisplay: "Swingers",
    excerpt: "Heartfelt testimonials and insights on how the lifestyle improved trust, communication, sexual satisfaction, and emotional intimacy.",
    path: "/blog/swinging-strengthened-marriage",
    readTime: "12 min read",
    date: "2025-01-17"
  },
  {
    title: "Finding Your Perfect Match: Best Ways to Meet Swingers in 2025",
    category: "swingers",
    categoryDisplay: "Swingers",
    excerpt: "An up-to-date comparison of clubs, lifestyle resorts, apps, websites, house parties, and events—plus tips for creating a standout profile.",
    path: "/blog/swinging-finding-couples",
    readTime: "15 min read",
    date: "2025-01-16"
  },
  {
    title: "Jealousy in the Lifestyle: Proven Tools to Turn It Into Excitement",
    category: "swingers",
    categoryDisplay: "Swingers",
    excerpt: "Practical strategies including pre-play check-ins, aftercare rituals, reclamation techniques, and how to use compersion as a superpower.",
    path: "/blog/swinging-jealousy-tools",
    readTime: "13 min read",
    date: "2025-01-05"
  },
  {
    title: "Soft Swap vs. Full Swap: How to Decide What's Right for You",
    category: "swingers",
    categoryDisplay: "Swingers",
    excerpt: "A non-judgmental breakdown of the differences, pros/cons, how to communicate preferences, and signs you're ready to level up.",
    path: "/blog/swinging-soft-full-swap",
    readTime: "11 min read",
    date: "2025-01-04"
  },
  {
    title: "Swinging Etiquette: The Unwritten Rules Every Couple Needs to Know",
    category: "swingers",
    categoryDisplay: "Swingers",
    excerpt: "Essential dos and don'ts at clubs, parties, and dates—covering consent, rejection, hygiene, phone use, and being a good guest.",
    path: "/blog/swinging-etiquette-rules",
    readTime: "13 min read",
    date: "2025-01-03"
  },
  {
    title: "Planning the Ultimate Swinger Vacation: Top Resorts & Cruises 2025-2026",
    category: "swingers",
    categoryDisplay: "Swingers",
    excerpt: "Reviews and insider tips on places like Desire, Hedonism II, Bliss Cruise, and emerging hotspots, plus budgeting and booking advice.",
    path: "/blog/swinging-vacation-guide",
    readTime: "20 min read",
    date: "2025-01-02"
  },
  {
    title: "Health, Safety & Consent: Non-Negotiables for Responsible Swinging",
    category: "swingers",
    categoryDisplay: "Swingers",
    excerpt: "In-depth guide on STI testing protocols, safer sex practices, boundary setting, sober consent, and how to handle 'no' gracefully.",
    path: "/blog/swinging-health-safety",
    readTime: "16 min read",
    date: "2025-01-01"
  },
  {
    title: "Keeping the Spark Alive: Advanced Tips from Veteran Swingers",
    category: "swingers",
    categoryDisplay: "Swingers",
    excerpt: "Ideas for long-term couples to avoid burnout—new fantasies, role-playing within the lifestyle, solo dates, themed events, and balancing swinging with vanilla life.",
    path: "/blog/swinging-keeping-spark",
    readTime: "15 min read",
    date: "2024-12-30"
  },
  // Relationships Articles (1)
  {
    title: "How to Talk to Your Partner About Opening Your Relationship",
    category: "relationships",
    categoryDisplay: "Relationships",
    excerpt: "A step-by-step guide to having 'the talk' with your partner about ENM, polyamory, or swinging. Communication strategies that work.",
    path: "/blog/talk-partner-opening-relationship",
    readTime: "12 min read",
    date: "2024-12-28"
  },
  // BDSM Articles (1)
  {
    title: "BDSM Safety Checklist: Essential Practices for Safe Play",
    category: "bdsm",
    categoryDisplay: "BDSM & Kink",
    excerpt: "Comprehensive safety guide for BDSM practitioners. Essential practices, aftercare tips, and safety protocols for kink exploration.",
    path: "/blog/bdsm-safety-checklist",
    readTime: "10 min read",
    date: "2024-12-25"
  },
  // Consent & Safety Articles (10)
  {
    title: "The Golden Rules of Consent: How to Ask, Give, and Revoke It Gracefully",
    category: "consent",
    categoryDisplay: "Consent & Safety",
    excerpt: "A practical guide to enthusiastic consent, verbal/non-verbal cues, and why 'yes' should always feel exciting, never pressured.",
    path: "/blog/consent-golden-rules",
    readTime: "14 min read",
    date: "2025-01-20"
  },
  {
    title: "Red Flags vs. Green Flags: Spotting Safe Partners Before You Meet",
    category: "consent",
    categoryDisplay: "Consent & Safety",
    excerpt: "Real examples of warning signs in profiles, messages, and first conversations—plus the positive traits that signal a respectful playmate.",
    path: "/blog/red-flags-green-flags",
    readTime: "12 min read",
    date: "2025-01-19"
  },
  {
    title: "Safer Sex in the Lifestyle: 2026 Guide to STI Testing, Barriers & Honest Conversations",
    category: "consent",
    categoryDisplay: "Consent & Safety",
    excerpt: "Updated protocols, best testing services, how to share results without awkwardness, and protecting everyone involved.",
    path: "/blog/safer-sex-guide-2026",
    readTime: "15 min read",
    date: "2025-01-18"
  },
  {
    title: "Solo Dates Done Right: Personal Safety Tips for First Meets",
    category: "consent",
    categoryDisplay: "Consent & Safety",
    excerpt: "Step-by-step checklist: location sharing, public meetups, check-in systems, sober consent, and emergency plans for swinging and ENM.",
    path: "/blog/solo-dates-safety",
    readTime: "11 min read",
    date: "2025-01-17"
  },
  {
    title: "When 'No' Gets Ignored: How to Handle Consent Violations",
    category: "consent",
    categoryDisplay: "Consent & Safety",
    excerpt: "Empowering advice on immediate responses, aftermath support, reporting in communities, and healing as a couple or individual.",
    path: "/blog/consent-violations",
    readTime: "13 min read",
    date: "2025-01-16"
  },
  {
    title: "Consent Check-Ins: Sexy Phrases and Techniques to Keep Things Hot and Safe",
    category: "consent",
    categoryDisplay: "Consent & Safety",
    excerpt: "Fun, flirty ways to pause and confirm comfort mid-scene without killing the mood—includes scripts for beginners.",
    path: "/blog/consent-check-ins-sexy",
    readTime: "10 min read",
    date: "2025-01-15"
  },
  {
    title: "Alcohol, Substances, and Consent: Why a Clear Head Makes Everything Better",
    category: "consent",
    categoryDisplay: "Consent & Safety",
    excerpt: "Exploring how intoxication affects decision-making, setting personal limits, and creating group agreements for parties or dates.",
    path: "/blog/alcohol-substances-consent",
    readTime: "12 min read",
    date: "2025-01-14"
  },
  {
    title: "Digital Safety First: Protecting Your Privacy in Apps, Chats & Communities",
    category: "consent",
    categoryDisplay: "Consent & Safety",
    excerpt: "Tips on anonymous profiles, secure messaging, avoiding revenge porn, and what to do if photos get shared without permission.",
    path: "/blog/digital-safety-first",
    readTime: "15 min read",
    date: "2025-01-13"
  },
  {
    title: "Aftercare and Emotional Safety: Why Reconnection Matters Just as Much as Protection",
    category: "consent",
    categoryDisplay: "Consent & Safety",
    excerpt: "How to debrief, provide reassurance, and handle unexpected feelings after play—essential for long-term enjoyment and trust.",
    path: "/blog/aftercare-emotional-safety",
    readTime: "13 min read",
    date: "2025-01-12"
  },
  {
    title: "Teaching Consent to the Next Generation: Raising Kids Who Understand Boundaries",
    category: "consent",
    categoryDisplay: "Consent & Safety",
    excerpt: "Age-appropriate ways to model healthy consent, respect, and communication for parents in open or lifestyle relationships.",
    path: "/blog/teaching-consent-next-generation",
    readTime: "14 min read",
    date: "2025-01-11"
  },
];

// Category configuration
const categories = [
  { id: "all", name: "All Articles", description: "Browse all lifestyle articles" },
  { id: "exploring", name: "Exploring/Curious", description: "New to the lifestyle?" },
  { id: "howto", name: "How-To", description: "Step-by-step guides" },
  { id: "stories", name: "User Stories", description: "Real SPICE experiences" },
  { id: "swingers", name: "Swingers", description: "Swinging lifestyle tips and stories" },
  { id: "hotwifing", name: "Hotwifing", description: "Hotwife and stag/vixen guides" },
  { id: "bdsm", name: "BDSM & Kink", description: "Kink education and safety" },
  { id: "enm", name: "ENM & Poly", description: "Non-monogamy insights" },
  { id: "consent", name: "Consent & Safety", description: "Safe practices and boundaries" },
  { id: "travel", name: "Travel Stories", description: "Lifestyle destinations" },
  { id: "relationships", name: "Relationships", description: "Communication and intimacy" },
];

const BlogHome = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showFilters, setShowFilters] = useState(false);

  // Calculate article counts per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: allBlogPosts.length };
    allBlogPosts.forEach(post => {
      counts[post.category] = (counts[post.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filter articles based on search and category
  const filteredPosts = useMemo(() => {
    return allBlogPosts.filter(post => {
      const matchesSearch = searchQuery === "" || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.categoryDisplay.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // Get latest articles (sorted by date, top 6)
  const latestPosts = useMemo(() => {
    return [...allBlogPosts]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 6);
  }, []);

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("all");
  };

  const hasActiveFilters = searchQuery !== "" || selectedCategory !== "all";

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
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                SPICE Lifestyle Blog
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Expert guides, real stories, and practical advice for swingers, hotwife couples, BDSM enthusiasts, and ENM practitioners.
              </p>
            </div>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-6 text-lg bg-card/50 border-border rounded-full"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery("")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-white"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>

            {/* Category Filter Toggle */}
            <div className="flex justify-center mb-6">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2"
              >
                <Filter className="w-4 h-4" />
                {showFilters ? "Hide Categories" : "Filter by Category"}
                {selectedCategory !== "all" && (
                  <span className="ml-2 bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded-full">
                    1
                  </span>
                )}
              </Button>
              {hasActiveFilters && (
                <Button
                  variant="ghost"
                  onClick={clearFilters}
                  className="ml-2 text-muted-foreground hover:text-white"
                >
                  Clear filters
                </Button>
              )}
            </div>

            {/* Category Filter Pills */}
            {showFilters && (
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedCategory === category.id
                        ? "bg-primary text-primary-foreground"
                        : "bg-card/50 border border-border text-muted-foreground hover:border-primary/50 hover:text-white"
                    }`}
                  >
                    {category.name}
                    <span className="ml-2 opacity-70">
                      ({categoryCounts[category.id] || 0})
                    </span>
                  </button>
                ))}
              </div>
            )}

            {/* Search Results or Default View */}
            {hasActiveFilters ? (
              // Filtered Results
              <div className="mb-16">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold">
                    {filteredPosts.length} {filteredPosts.length === 1 ? "Result" : "Results"}
                    {searchQuery && <span className="text-muted-foreground"> for "{searchQuery}"</span>}
                    {selectedCategory !== "all" && (
                      <span className="text-muted-foreground">
                        {" "}in {categories.find(c => c.id === selectedCategory)?.name}
                      </span>
                    )}
                  </h2>
                </div>
                
                {filteredPosts.length > 0 ? (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredPosts.map((post, index) => (
                      <Link
                        key={index}
                        to={post.path}
                        className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:scale-[1.02]"
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                            {post.categoryDisplay}
                          </span>
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold mb-3 line-clamp-2">{post.title}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground mb-4">No articles found matching your criteria.</p>
                    <Button variant="outline" onClick={clearFilters}>
                      Clear filters
                    </Button>
                  </div>
                )}
              </div>
            ) : (
              // Default View: Latest Articles + Categories
              <>
                {/* Latest Articles */}
                <div className="mb-16">
                  <h2 className="text-2xl md:text-3xl font-bold mb-8">Latest Articles</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {latestPosts.map((post, index) => (
                      <Link
                        key={index}
                        to={post.path}
                        className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:scale-[1.02]"
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                            {post.categoryDisplay}
                          </span>
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold mb-3 line-clamp-2">{post.title}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Browse by Category */}
                <div className="mb-16">
                  <h2 className="text-2xl md:text-3xl font-bold mb-8">Browse by Category</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.filter(c => c.id !== "all").map((category, index) => (
                      <Link
                        key={index}
                        to={`/blog/${category.id}`}
                        className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all group"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-xl font-bold text-primary">{category.name}</h3>
                          <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                            {categoryCounts[category.id] || 0} {(categoryCounts[category.id] || 0) === 1 ? "article" : "articles"}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
                        <span className="text-primary text-sm font-semibold group-hover:underline">
                          Explore {category.name} →
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl p-8 md:p-12 border border-primary/30 text-center">
              <h2 className="text-3xl font-bold mb-4">Join the Conversation</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Download SPICE to connect with writers, share your stories, and engage with the lifestyle community.
              </p>
              <Link 
                to="/download" 
                className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all"
              >
                Download SPICE Free
              </Link>
            </div>
          </div>
        </main>

        <FooterSection />
      </div>
    </>
  );
};

export default BlogHome;
