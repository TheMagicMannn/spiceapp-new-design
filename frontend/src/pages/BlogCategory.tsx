import { Link, useParams } from "react-router-dom";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Clock, ArrowLeft } from "lucide-react";

// Define all blog posts with their categories
const allBlogPosts = [
  // Hotwifing Articles
  {
    title: "Beginner's Guide to Hotwifing: Starting the Conversation",
    category: "hotwifing",
    categoryDisplay: "Hotwifing",
    excerpt: "Complete beginner's guide to hotwifing. Learn how to introduce the hotwife lifestyle to your partner, discuss boundaries, build trust, and start your journey safely.",
    path: "/blog/hotwifing-beginners-guide",
    readTime: "15 min read"
  },
  {
    title: "Overcoming Jealousy: Real Strategies for Couples",
    category: "hotwifing",
    categoryDisplay: "Hotwifing",
    excerpt: "Learn proven strategies for managing jealousy in the hotwife lifestyle. Turn jealousy into compersion and strengthen your relationship.",
    path: "/blog/hotwifing-jealousy",
    readTime: "12 min read"
  },
  {
    title: "My First Hotwife Date: What Went Right (and Wrong)",
    category: "hotwifing",
    categoryDisplay: "Hotwifing",
    excerpt: "A candid, detailed account of our first hotwife experience—the nerves, the excitement, the mistakes, and the unexpected lessons.",
    path: "/blog/hotwifing-first-date",
    readTime: "10 min read"
  },
  {
    title: "Finding the Perfect Bull: Tips for Safe Encounters",
    category: "hotwifing",
    categoryDisplay: "Hotwifing",
    excerpt: "Complete guide to finding the right bull for your hotwife adventures. Learn vetting strategies, red flags, and how to ensure safe encounters.",
    path: "/blog/hotwifing-finding-bull",
    readTime: "14 min read"
  },
  {
    title: "Reclamation Sex: Why It's the Hottest Part of Coming Home",
    category: "hotwifing",
    categoryDisplay: "Hotwifing",
    excerpt: "Discover why reclamation sex is the most intense, intimate part of the hotwife experience and how to maximize reconnection.",
    path: "/blog/hotwifing-reclamation-sex",
    readTime: "11 min read"
  },
  {
    title: "Hotwife Fantasies vs. Reality: Debunking Common Myths",
    category: "hotwifing",
    categoryDisplay: "Hotwifing",
    excerpt: "Separate hotwife fantasy from reality. We debunk common myths about the hotwife lifestyle including infidelity fears and relationship damage.",
    path: "/blog/hotwifing-fantasy-reality",
    readTime: "13 min read"
  },
  {
    title: "Creative Date Ideas to Keep the Hotwife Spark Alive",
    category: "hotwifing",
    categoryDisplay: "Hotwifing",
    excerpt: "Exciting date ideas for hotwife couples. From role-playing strangers to public flirting and surprise encounters.",
    path: "/blog/hotwifing-creative-dates",
    readTime: "9 min read"
  },
  {
    title: "The Emotional Highs and Lows of Hotwifing: A Year in Review",
    category: "hotwifing",
    categoryDisplay: "Hotwifing",
    excerpt: "An intimate, honest reflection on our first year in the hotwife lifestyle—the growth, challenges, surprises, and transformation.",
    path: "/blog/hotwifing-year-review",
    readTime: "14 min read"
  },
  {
    title: "Incorporating Toys and Kink: Elevating Hotwife Experiences",
    category: "hotwifing",
    categoryDisplay: "Hotwifing",
    excerpt: "Enhance your hotwife dynamic with toys, BDSM elements, and kink. Ideas for chastity, bondage, role-play, and more.",
    path: "/blog/hotwifing-toys-kink",
    readTime: "12 min read"
  },
  {
    title: "Hotwifing and Communication: How It Transformed Our Marriage",
    category: "hotwifing",
    categoryDisplay: "Hotwifing",
    excerpt: "Discover how the hotwife lifestyle transformed one couple's marriage through radical honesty, deeper trust, and unprecedented communication.",
    path: "/blog/hotwifing-communication-marriage",
    readTime: "13 min read"
  },
  // Swingers Articles
  {
    title: "10 Signs You're Ready to Try the Lifestyle",
    category: "swingers",
    categoryDisplay: "Swingers",
    excerpt: "Curious about swinging, hotwifing, or ENM? Here are 10 signs you and your partner might be ready to explore the lifestyle together.",
    path: "/blog/10-signs-ready-lifestyle",
    readTime: "8 min read"
  },
  {
    title: "Swinging 101: A Step-by-Step Guide for Curious Couples",
    category: "swingers",
    categoryDisplay: "Swingers",
    excerpt: "Complete beginner's guide to swinging. Learn how to start the conversation, set rules, find swinger clubs and events, and prepare for your first experience.",
    path: "/blog/swinging-101-beginners-guide",
    readTime: "18 min read"
  },
  {
    title: "The Biggest Mistakes New Swinging Couples Make",
    category: "swingers",
    categoryDisplay: "Swingers",
    excerpt: "Real-talk lessons from experienced couples on common pitfalls like poor communication, rushing into play, ignoring jealousy triggers, and choosing the wrong first partners.",
    path: "/blog/swinging-mistakes-avoid",
    readTime: "14 min read"
  },
  {
    title: "How Swinging Strengthened Our Marriage: Real Stories",
    category: "swingers",
    categoryDisplay: "Swingers",
    excerpt: "Heartfelt testimonials and insights on how the lifestyle improved trust, communication, sexual satisfaction, and emotional intimacy.",
    path: "/blog/swinging-strengthened-marriage",
    readTime: "12 min read"
  },
  {
    title: "Finding Your Perfect Match: Best Ways to Meet Swingers in 2025",
    category: "swingers",
    categoryDisplay: "Swingers",
    excerpt: "An up-to-date comparison of clubs, lifestyle resorts, apps, websites, house parties, and events—plus tips for creating a standout profile.",
    path: "/blog/swinging-finding-couples",
    readTime: "15 min read"
  },
  {
    title: "Jealousy in the Lifestyle: Proven Tools to Turn It Into Excitement",
    category: "swingers",
    categoryDisplay: "Swingers",
    excerpt: "Practical strategies including pre-play check-ins, aftercare rituals, reclamation techniques, and how to use compersion as a superpower.",
    path: "/blog/swinging-jealousy-tools",
    readTime: "13 min read"
  },
  {
    title: "Soft Swap vs. Full Swap: How to Decide What's Right for You",
    category: "swingers",
    categoryDisplay: "Swingers",
    excerpt: "A non-judgmental breakdown of the differences, pros/cons, how to communicate preferences, and signs you're ready to level up.",
    path: "/blog/swinging-soft-full-swap",
    readTime: "11 min read"
  },
  {
    title: "Swinging Etiquette: The Unwritten Rules Every Couple Needs to Know",
    category: "swingers",
    categoryDisplay: "Swingers",
    excerpt: "Essential dos and don'ts at clubs, parties, and dates—covering consent, rejection, hygiene, phone use, and being a good guest.",
    path: "/blog/swinging-etiquette-rules",
    readTime: "13 min read"
  },
  {
    title: "Planning the Ultimate Swinger Vacation: Top Resorts & Cruises 2025-2026",
    category: "swingers",
    categoryDisplay: "Swingers",
    excerpt: "Reviews and insider tips on places like Desire, Hedonism II, Bliss Cruise, and emerging hotspots, plus budgeting and booking advice.",
    path: "/blog/swinging-vacation-guide",
    readTime: "20 min read"
  },
  {
    title: "Health, Safety & Consent: Non-Negotiables for Responsible Swinging",
    category: "swingers",
    categoryDisplay: "Swingers",
    excerpt: "In-depth guide on STI testing protocols, safer sex practices, boundary setting, sober consent, and how to handle 'no' gracefully.",
    path: "/blog/swinging-health-safety",
    readTime: "16 min read"
  },
  {
    title: "Keeping the Spark Alive: Advanced Tips from Veteran Swingers",
    category: "swingers",
    categoryDisplay: "Swingers",
    excerpt: "Ideas for long-term couples to avoid burnout—new fantasies, role-playing within the lifestyle, solo dates, themed events, and balancing swinging with vanilla life.",
    path: "/blog/swinging-keeping-spark",
    readTime: "15 min read"
  },
  // Relationships Articles
  {
    title: "How to Talk to Your Partner About Opening Your Relationship",
    category: "relationships",
    categoryDisplay: "Relationships",
    excerpt: "A step-by-step guide to having 'the talk' with your partner about ENM, polyamory, or swinging. Communication strategies that work.",
    path: "/blog/talk-partner-opening-relationship",
    readTime: "12 min read"
  },
  // BDSM Articles
  {
    title: "BDSM Safety Checklist: Essential Practices for Safe Play",
    category: "bdsm",
    categoryDisplay: "BDSM & Kink",
    excerpt: "Comprehensive safety guide for BDSM practitioners. Essential practices, aftercare tips, and safety protocols for kink exploration.",
    path: "/blog/bdsm-safety-checklist",
    readTime: "10 min read"
  },
  // Consent & Safety Articles
  {
    title: "The Golden Rules of Consent: How to Ask, Give, and Revoke It Gracefully",
    category: "consent",
    categoryDisplay: "Consent & Safety",
    excerpt: "A practical guide to enthusiastic consent, verbal/non-verbal cues, and why 'yes' should always feel exciting, never pressured.",
    path: "/blog/consent-golden-rules",
    readTime: "14 min read"
  },
  {
    title: "Red Flags vs. Green Flags: Spotting Safe Partners Before You Meet",
    category: "consent",
    categoryDisplay: "Consent & Safety",
    excerpt: "Real examples of warning signs in profiles, messages, and first conversations—plus the positive traits that signal a respectful playmate.",
    path: "/blog/red-flags-green-flags",
    readTime: "12 min read"
  },
  {
    title: "Safer Sex in the Lifestyle: 2026 Guide to STI Testing, Barriers & Honest Conversations",
    category: "consent",
    categoryDisplay: "Consent & Safety",
    excerpt: "Updated protocols, best testing services, how to share results without awkwardness, and protecting everyone involved.",
    path: "/blog/safer-sex-guide-2026",
    readTime: "15 min read"
  },
  {
    title: "Solo Dates Done Right: Personal Safety Tips for First Meets",
    category: "consent",
    categoryDisplay: "Consent & Safety",
    excerpt: "Step-by-step checklist: location sharing, public meetups, check-in systems, sober consent, and emergency plans for swinging and ENM.",
    path: "/blog/solo-dates-safety",
    readTime: "11 min read"
  },
  {
    title: "When 'No' Gets Ignored: How to Handle Consent Violations",
    category: "consent",
    categoryDisplay: "Consent & Safety",
    excerpt: "Empowering advice on immediate responses, aftermath support, reporting in communities, and healing as a couple or individual.",
    path: "/blog/consent-violations",
    readTime: "13 min read"
  },
  {
    title: "Consent Check-Ins: Sexy Phrases and Techniques to Keep Things Hot and Safe",
    category: "consent",
    categoryDisplay: "Consent & Safety",
    excerpt: "Fun, flirty ways to pause and confirm comfort mid-scene without killing the mood—includes scripts for beginners.",
    path: "/blog/consent-check-ins-sexy",
    readTime: "10 min read"
  },
  {
    title: "Alcohol, Substances, and Consent: Why a Clear Head Makes Everything Better",
    category: "consent",
    categoryDisplay: "Consent & Safety",
    excerpt: "Exploring how intoxication affects decision-making, setting personal limits, and creating group agreements for parties or dates.",
    path: "/blog/alcohol-substances-consent",
    readTime: "12 min read"
  },
  {
    title: "Digital Safety First: Protecting Your Privacy in Apps, Chats & Communities",
    category: "consent",
    categoryDisplay: "Consent & Safety",
    excerpt: "Tips on anonymous profiles, secure messaging, avoiding revenge porn, and what to do if photos get shared without permission.",
    path: "/blog/digital-safety-first",
    readTime: "15 min read"
  },
  {
    title: "Aftercare and Emotional Safety: Why Reconnection Matters Just as Much as Protection",
    category: "consent",
    categoryDisplay: "Consent & Safety",
    excerpt: "How to debrief, provide reassurance, and handle unexpected feelings after play—essential for long-term enjoyment and trust.",
    path: "/blog/aftercare-emotional-safety",
    readTime: "13 min read"
  },
  {
    title: "Teaching Consent to the Next Generation: Raising Kids Who Understand Boundaries",
    category: "consent",
    categoryDisplay: "Consent & Safety",
    excerpt: "Age-appropriate ways to model healthy consent, respect, and communication for parents in open or lifestyle relationships.",
    path: "/blog/teaching-consent-next-generation",
    readTime: "14 min read"
  },
];

// Category metadata
const categoryMeta: Record<string, { title: string; description: string; keywords: string }> = {
  hotwifing: {
    title: "Hotwifing Articles & Guides | SPICE Blog",
    description: "Expert hotwifing guides, tips, and real stories. Learn about starting conversations, finding bulls, managing jealousy, and building stronger relationships through the hotwife lifestyle.",
    keywords: "hotwifing articles, hotwife guides, hotwife tips, stag vixen blog, hotwife lifestyle, hotwifing advice"
  },
  swingers: {
    title: "Swinging Lifestyle Articles & Guides | SPICE Blog",
    description: "Expert swinging guides, tips, and real stories. Learn about swinger parties, lifestyle clubs, communication, and building stronger relationships.",
    keywords: "swinger articles, swinging guides, lifestyle tips, swinger blog, swinging lifestyle, swinger advice"
  },
  bdsm: {
    title: "BDSM & Kink Articles & Guides | SPICE Blog",
    description: "Expert BDSM guides, safety tips, and educational content. Learn about kink exploration, consent, aftercare, and safe practices.",
    keywords: "BDSM articles, kink guides, BDSM safety, kink blog, BDSM education, kink advice"
  },
  enm: {
    title: "ENM & Polyamory Articles & Guides | SPICE Blog",
    description: "Expert ethical non-monogamy and polyamory guides. Learn about communication, jealousy management, and building healthy open relationships.",
    keywords: "ENM articles, polyamory guides, ethical non-monogamy, poly blog, ENM lifestyle, polyamory advice"
  },
  consent: {
    title: "Consent & Safety Articles | SPICE Blog",
    description: "Essential guides on consent, boundaries, and safe practices in alternative lifestyles. Educational content for healthy relationships.",
    keywords: "consent articles, safety guides, boundaries, consent education, safe practices, lifestyle safety"
  },
  travel: {
    title: "Lifestyle Travel Stories & Guides | SPICE Blog",
    description: "Destination guides for lifestyle travelers. Best clubs, resorts, and events for swingers, hotwife couples, and ENM practitioners.",
    keywords: "lifestyle travel, swinger destinations, lifestyle clubs, adult resorts, lifestyle events, travel guides"
  },
  relationships: {
    title: "Relationship & Communication Articles | SPICE Blog",
    description: "Expert relationship advice for lifestyle couples. Communication strategies, intimacy tips, and guidance for stronger connections.",
    keywords: "relationship articles, communication guides, intimacy tips, couples advice, relationship blog, lifestyle relationships"
  },
  exploring: {
    title: "Exploring & Curious | SPICE Blog",
    description: "New to the lifestyle? Explore articles for curious minds. Learn about different lifestyles, what to expect, and how to start your journey.",
    keywords: "lifestyle curious, exploring swinging, new to lifestyle, lifestyle beginners, curious about ENM, lifestyle exploration"
  },
  howto: {
    title: "How-To Guides | SPICE Blog",
    description: "Step-by-step guides and practical tutorials for the lifestyle. From profile tips to event preparation, learn how to navigate every situation.",
    keywords: "lifestyle how to, swinger guides, lifestyle tutorials, how to swing, lifestyle tips, practical guides"
  },
  stories: {
    title: "SPICE User Stories | SPICE Blog",
    description: "Real stories from the SPICE community. Read about experiences, journeys, and lessons learned from couples and individuals in the lifestyle.",
    keywords: "lifestyle stories, swinger experiences, real stories, community stories, lifestyle journeys, user experiences"
  }
};

// Category display names
const categoryDisplayNames: Record<string, string> = {
  hotwifing: "Hotwifing",
  swingers: "Swingers",
  bdsm: "BDSM & Kink",
  enm: "ENM & Poly",
  consent: "Consent & Safety",
  travel: "Travel Stories",
  relationships: "Relationships",
  exploring: "Exploring/Curious",
  howto: "How-To",
  stories: "User Stories"
};

const BlogCategory = () => {
  const { category } = useParams<{ category: string }>();
  const normalizedCategory = category?.toLowerCase() || "";
  
  // Filter posts by category
  const categoryPosts = allBlogPosts.filter(post => post.category === normalizedCategory);
  
  // Get category metadata
  const meta = categoryMeta[normalizedCategory] || {
    title: `${categoryDisplayNames[normalizedCategory] || "Blog"} Articles | SPICE Blog`,
    description: `Articles and guides about ${categoryDisplayNames[normalizedCategory] || "lifestyle topics"}.`,
    keywords: `${normalizedCategory} articles, ${normalizedCategory} guides, lifestyle blog`
  };

  const displayName = categoryDisplayNames[normalizedCategory] || "Articles";

  return (
    <>
      <SEO
        title={meta.title}
        description={meta.description}
        keywords={meta.keywords}
        canonical={`https://thespiceapp.com/blog/${normalizedCategory}`}
      />

      <div className="relative min-h-screen">
        <ParticlesBackground />
        <Header />
        <Breadcrumbs />
        
        <main className="relative z-10 pt-32 pb-12">
          <div className="container mx-auto px-4 max-w-6xl">
            {/* Back Link */}
            <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <span className="text-sm font-medium text-primary">{categoryPosts.length} Articles</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                {displayName}
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {meta.description}
              </p>
            </div>

            {/* Articles Grid */}
            {categoryPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {categoryPosts.map((post, index) => (
                  <Link
                    key={index}
                    to={post.path}
                    className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:scale-[1.02] group"
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
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </p>
                    <span className="inline-block mt-4 text-primary text-sm font-semibold">
                      Read Article →
                    </span>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg mb-4">
                  No articles found in this category yet.
                </p>
                <Link to="/blog" className="text-primary hover:underline">
                  Browse all articles →
                </Link>
              </div>
            )}

            {/* Other Categories */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8">
              <h2 className="text-xl font-bold mb-6">Explore Other Categories</h2>
              <div className="flex flex-wrap gap-3">
                {Object.entries(categoryDisplayNames)
                  .filter(([key]) => key !== normalizedCategory)
                  .map(([key, name]) => (
                    <Link
                      key={key}
                      to={`/blog/${key}`}
                      className="px-4 py-2 bg-background/50 border border-border rounded-full text-sm hover:border-primary/50 hover:text-primary transition-all"
                    >
                      {name}
                    </Link>
                  ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl p-8 border border-primary/30 text-center mt-12">
              <h2 className="text-2xl font-bold mb-4">Ready to Explore?</h2>
              <p className="text-muted-foreground mb-6">
                Join SPICE to connect with others who share your interests.
              </p>
              <Link to="/download" className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all">
                Join SPICE Free
              </Link>
            </div>
          </div>
        </main>

        <FooterSection />
      </div>
    </>
  );
};

export default BlogCategory;
