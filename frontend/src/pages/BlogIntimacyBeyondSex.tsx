import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Heart, MessageCircle, Users, CheckCircle, BookOpen, Sparkles, Coffee, Music, Palette, Moon, Sun, Gift, PenLine, Gamepad2, Utensils, Mountain } from "lucide-react";

const BlogIntimacyBeyondSex = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Intimacy Beyond Sex: Deepening Emotional Connections in Multi-Partner Relationships",
    "description": "Ideas for love languages, vulnerability dates, group bonding activities, and nurturing romance long-term in polyamorous relationships.",
    "author": { "@type": "Organization", "name": "SPICE" },
    "datePublished": "2025-12-28",
    "dateModified": "2025-12-28"
  };

  const loveLanguages = [
    {
      language: "Words of Affirmation",
      description: "Verbal expressions of love, appreciation, and encouragement",
      polyTips: [
        "Learn each partners specific compliment style—some love public praise, others prefer private words",
        "Send voice memos to partners you cannot see that day",
        "Create a shared document of things you love about each other",
        "Be specific: 'I love how you handled that conflict' means more than 'You are great'"
      ],
      dateIdea: "Write love letters to each partner, then read them aloud over a candlelit dinner"
    },
    {
      language: "Quality Time",
      description: "Undivided attention and presence",
      polyTips: [
        "Quality matters more than quantity—two focused hours beats six distracted ones",
        "Create phone-free zones during dates",
        "Develop unique activities for each relationship",
        "Schedule recurring anchor dates that are protected time"
      ],
      dateIdea: "Take a class together that neither of you has tried—pottery, cooking, dance"
    },
    {
      language: "Acts of Service",
      description: "Doing helpful things that ease your partners burden",
      polyTips: [
        "Learn what tasks actually help each partner (do not assume)",
        "Coordinate with metamours to support a shared partner during hard times",
        "Small consistent acts often mean more than grand gestures",
        "Remember: their tasks, not yours—do not impose your priorities"
      ],
      dateIdea: "Tackle a partners project together—organize their closet, build that furniture, plan their event"
    },
    {
      language: "Physical Touch",
      description: "Non-sexual and sexual physical connection",
      polyTips: [
        "Learn each partners touch preferences—some need space, some need constant contact",
        "Do not reserve physical affection only for one partner",
        "Non-sexual touch (holding hands, cuddling, head scratches) is just as important",
        "Discuss physical affection boundaries in polycule settings"
      ],
      dateIdea: "Couples massage exchange—take turns giving full massages with no expectation of sex"
    },
    {
      language: "Receiving Gifts",
      description: "Thoughtful presents that show you were thinking of them",
      polyTips: [
        "Keep running lists of things each partner mentions wanting",
        "Small 'thought of you' gifts often matter more than expensive ones",
        "Be mindful of fairness—if one partner gets lavish gifts, others may feel undervalued",
        "Gifts of experience (concert tickets, trip planning) can be especially meaningful"
      ],
      dateIdea: "Scavenger hunt date with small meaningful gifts hidden at each location"
    }
  ];

  const vulnerabilityDates = [
    {
      name: "36 Questions Date",
      description: "The famous 'questions that lead to love' study questions, adapted for existing relationships.",
      howTo: "Set aside 90 minutes with no distractions. Take turns asking and answering the 36 questions. End with four minutes of silent eye contact.",
      bestFor: "Deepening existing relationships, reconnecting after distance"
    },
    {
      name: "Fear and Dream Sharing",
      description: "Share your three biggest fears and three biggest dreams.",
      howTo: "Each person shares one fear, then one dream, alternating. Listener only asks clarifying questions—no problem-solving or judgment.",
      bestFor: "Building deep trust, understanding partners inner world"
    },
    {
      name: "Relationship Autopsy",
      description: "Examine past relationship patterns together (your own, not each others).",
      howTo: "Each share a past relationship, what went wrong, and what you learned. Focus on your own patterns, not blaming exes.",
      bestFor: "Understanding attachment styles, preventing repeat patterns"
    },
    {
      name: "The Appreciation Flood",
      description: "Five minutes of uninterrupted appreciation from one partner to the other.",
      howTo: "Set a timer. One partner shares every appreciation they can think of. The other simply receives—no deflecting or minimizing. Then switch.",
      bestFor: "When partners feel undervalued, after conflict, regular relationship maintenance"
    },
    {
      name: "Future Visioning",
      description: "Collaboratively imagine your relationship in 5, 10, 20 years.",
      howTo: "Take turns sharing visions of the future. Where do you live? How do you spend time? What does this relationship look like? Find overlaps and discuss differences.",
      bestFor: "Aligning long-term expectations, checking compatibility"
    }
  ];

  const groupBonding = [
    {
      activity: "Polycule Game Night",
      description: "Regular game nights where the whole polycule plays together.",
      tips: ["Rotate who picks the game", "Include cooperative games, not just competitive", "Make it recurring for consistency"]
    },
    {
      activity: "Cooking Together",
      description: "Collaborative meal preparation with multiple partners.",
      tips: ["Assign roles based on skill", "Try cuisines none of you know", "Make it a weekly ritual"]
    },
    {
      activity: "Adventure Days",
      description: "Group outings to new places or experiences.",
      tips: ["Rotate planning responsibility", "Include everyone's interests over time", "Build shared memories"]
    },
    {
      activity: "Creative Projects",
      description: "Art, music, or creative endeavors as a group.",
      tips: ["No skill required—focus on fun", "Collaborative murals, playlists, or stories", "Display or share the results"]
    },
    {
      activity: "Retreat Weekends",
      description: "Intentional time away focused on connection.",
      tips: ["Mix couple time with group time", "Include relationship discussions", "Create traditions specific to retreats"]
    },
    {
      activity: "Book/Show Club",
      description: "Read the same book or watch the same show and discuss.",
      tips: ["Include poly-relevant content sometimes", "Everyone gets to pick eventually", "Discussion deepens shared understanding"]
    }
  ];

  const longTermRomance = [
    {
      tip: "Never Stop Dating",
      explanation: "No matter how long you have been together, continue planning intentional dates. Complacency kills romance."
    },
    {
      tip: "Maintain Mystery",
      explanation: "You do not have to know everything about each other. Pursue individual interests that give you new things to share."
    },
    {
      tip: "Celebrate Relationship Milestones",
      explanation: "Anniversaries, first date memories, meaningful moments—mark them intentionally for each relationship."
    },
    {
      tip: "Physical Affection Without Agenda",
      explanation: "Touch that is not leading to sex maintains physical connection and prevents intimacy from feeling transactional."
    },
    {
      tip: "Express Gratitude Daily",
      explanation: "Tell partners specifically what you appreciate about them. Do not assume they know."
    },
    {
      tip: "Keep Growing Together",
      explanation: "Take classes, travel, try new things. Stagnation in the relationship comes from stagnation in life."
    },
    {
      tip: "Protect Your Relationship Stories",
      explanation: "The narrative you tell about your relationship matters. Keep it positive. Remember why you chose each other."
    },
    {
      tip: "Reconnect After Conflict",
      explanation: "Do not let fights linger. Process, repair, and actively reconnect physically and emotionally."
    }
  ];

  const intimacyBuilders = [
    { icon: Coffee, name: "Morning coffee together", description: "Start the day connected before life takes over" },
    { icon: Moon, name: "Bedtime rituals", description: "End each shared night with intentional closeness" },
    { icon: PenLine, name: "Shared journaling", description: "Write to each other in a shared notebook" },
    { icon: Music, name: "'Our song' playlists", description: "Curate music that represents each relationship" },
    { icon: Utensils, name: "Cooking their favorite meal", description: "Food is love made edible" },
    { icon: Mountain, name: "Nature time", description: "Get outside together—hikes, beaches, parks" },
    { icon: Gamepad2, name: "Play together", description: "Video games, board games, silly fun" },
    { icon: Gift, name: "Surprise gestures", description: "Unexpected small kindnesses" }
  ];

  return (
    <>
      <SEO
        title="Intimacy Beyond Sex: Deepening Emotional Connections in Polyamory | SPICE"
        description="Ideas for love languages across multiple partners, vulnerability dates, group bonding activities, and nurturing long-term romance in polyamorous relationships."
        keywords="polyamory intimacy, emotional intimacy poly, love languages polyamory, poly date ideas, polyamory romance, deepening poly connections, group bonding polycule, vulnerability in relationships, non-sexual intimacy, poly relationship maintenance"
        canonical="https://thespiceapp.com/blog/intimacy-beyond-sex"
        structuredData={structuredData}
      />

      <div className="relative min-h-screen">
        <ParticlesBackground />
        <Header />
        <Breadcrumbs />
        
        <main className="relative z-10 pt-32 pb-12">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Article Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">ENM & POLYAMORY</span>
                <span className="text-xs text-muted-foreground">16 min read</span>
                <span className="text-xs text-muted-foreground">December 2025</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                Intimacy Beyond Sex
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Deepening emotional connections in multi-partner relationships through love languages, vulnerability dates, group bonding, and nurturing romance long-term.
              </p>
            </div>

            {/* Featured Image */}
            <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl p-12 mb-12 text-center border border-primary/30">
              <Heart className="w-16 h-16 text-primary mx-auto mb-4" />
              <p className="text-muted-foreground">Connection That Goes Deeper</p>
            </div>

            {/* Table of Contents */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 mb-12">
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                In This Guide
              </h2>
              <ul className="space-y-2 text-sm">
                <li><a href="#love-languages" className="text-primary hover:underline">→ Love Languages Across Partners</a></li>
                <li><a href="#vulnerability" className="text-primary hover:underline">→ Vulnerability Date Ideas</a></li>
                <li><a href="#group" className="text-primary hover:underline">→ Group Bonding Activities</a></li>
                <li><a href="#long-term" className="text-primary hover:underline">→ Nurturing Long-Term Romance</a></li>
                <li><a href="#daily" className="text-primary hover:underline">→ Daily Intimacy Builders</a></li>
              </ul>
            </div>

            {/* Article Content */}
            <article className="prose prose-invert max-w-none">
              <section className="mb-12">
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Sex is wonderful, but it is only one thread in the tapestry of intimacy. For polyamorous relationships to thrive long-term, emotional intimacy—the feeling of being deeply known, valued, and connected—must be intentionally cultivated with each partner.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    This guide offers practical tools for building that deeper connection: understanding how each partner gives and receives love, creating space for vulnerability, bonding as a polycule, and keeping romance alive through the years.
                  </p>
                </div>
              </section>

              <section id="love-languages" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <MessageCircle className="w-7 h-7 text-primary" />
                  Love Languages Across Partners
                </h2>
                <p className="text-muted-foreground mb-6">
                  Each partner may have different love languages. Learning to speak each partners language fluently is key to making them feel loved.
                </p>
                <div className="space-y-6">
                  {loveLanguages.map((lang, idx) => (
                    <div key={idx} className="bg-card/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden">
                      <div className="bg-primary/10 p-4 border-b border-border">
                        <h3 className="text-lg font-bold text-white">{lang.language}</h3>
                        <p className="text-muted-foreground text-sm">{lang.description}</p>
                      </div>
                      <div className="p-5">
                        <h4 className="font-bold text-white mb-3">Poly-Specific Tips:</h4>
                        <ul className="space-y-2 mb-4">
                          {lang.polyTips.map((tip, tIdx) => (
                            <li key={tIdx} className="text-sm text-muted-foreground flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                              {tip}
                            </li>
                          ))}
                        </ul>
                        <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-3">
                          <p className="text-sm text-muted-foreground">
                            <strong className="text-purple-400">Date Idea:</strong> {lang.dateIdea}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="vulnerability" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Heart className="w-7 h-7 text-primary" />
                  Vulnerability Date Ideas
                </h2>
                <p className="text-muted-foreground mb-6">
                  These structured dates create safe containers for deeper sharing and connection:
                </p>
                <div className="space-y-4">
                  {vulnerabilityDates.map((date, idx) => (
                    <div key={idx} className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-5">
                      <h3 className="font-bold text-primary mb-2">{date.name}</h3>
                      <p className="text-muted-foreground text-sm mb-3">{date.description}</p>
                      <div className="bg-background/50 rounded-lg p-3 mb-2">
                        <p className="text-sm text-muted-foreground">
                          <strong className="text-white">How To:</strong> {date.howTo}
                        </p>
                      </div>
                      <p className="text-xs text-primary">
                        <strong>Best For:</strong> {date.bestFor}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="group" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Users className="w-7 h-7 text-primary" />
                  Group Bonding Activities
                </h2>
                <p className="text-muted-foreground mb-6">
                  For kitchen table polycules or those who want to build metamour connections:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {groupBonding.map((item, idx) => (
                    <div key={idx} className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-5">
                      <h3 className="font-bold text-white mb-2">{item.activity}</h3>
                      <p className="text-muted-foreground text-sm mb-3">{item.description}</p>
                      <ul className="space-y-1">
                        {item.tips.map((tip, tIdx) => (
                          <li key={tIdx} className="text-xs text-muted-foreground flex items-start gap-2">
                            <span className="text-primary">•</span>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              <section id="long-term" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Sun className="w-7 h-7 text-primary" />
                  Nurturing Long-Term Romance
                </h2>
                <div className="space-y-4">
                  {longTermRomance.map((item, idx) => (
                    <div key={idx} className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-5 flex items-start gap-4">
                      <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold flex-shrink-0">
                        {idx + 1}
                      </span>
                      <div>
                        <h3 className="font-bold text-white mb-1">{item.tip}</h3>
                        <p className="text-sm text-muted-foreground">{item.explanation}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="daily" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Sparkles className="w-7 h-7 text-primary" />
                  Daily Intimacy Builders
                </h2>
                <p className="text-muted-foreground mb-6">
                  Small daily practices that maintain connection:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {intimacyBuilders.map((item, idx) => (
                    <div key={idx} className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-4 flex items-center gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-sm">{item.name}</h3>
                        <p className="text-xs text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Related Resources */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Related Guides</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link to="/lifestyle/relationships-communication" className="bg-card/50 border border-border rounded-xl p-4 hover:border-primary/50 transition-all group">
                    <h3 className="font-bold text-white group-hover:text-primary transition-colors">Communication Guide</h3>
                    <p className="text-sm text-muted-foreground">Deepen connection through better communication</p>
                  </Link>
                  <Link to="/blog/compersion-exercises" className="bg-card/50 border border-border rounded-xl p-4 hover:border-primary/50 transition-all group">
                    <h3 className="font-bold text-white group-hover:text-primary transition-colors">Compersion Exercises</h3>
                    <p className="text-sm text-muted-foreground">Feel joy for your partners other loves</p>
                  </Link>
                </div>
              </section>
            </article>

            {/* CTA */}
            <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl p-8 md:p-12 border border-primary/30 text-center">
              <Sparkles className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Find Deeper Connections</h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                SPICE connects you with people who value emotional intimacy as much as physical connection.
              </p>
              <Link to="/download" className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all gap-2">
                <Heart className="w-5 h-5" />
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

export default BlogIntimacyBeyondSex;