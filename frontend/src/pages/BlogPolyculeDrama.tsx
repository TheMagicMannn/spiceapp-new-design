import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Heart, Users, AlertTriangle, CheckCircle, BookOpen, Clock, Sparkles, MessageCircle, Shield, Eye, Zap, Target, RefreshCw, Scale, Quote } from "lucide-react";

const BlogPolyculeDrama = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Polycule Drama: How to Spot It Early and Keep Your Relationships Drama-Free",
    "description": "Learn to identify and prevent common polycule drama including triangulation, hierarchy fights, and unspoken expectations.",
    "author": { "@type": "Organization", "name": "SPICE" },
    "datePublished": "2025-12-28",
    "dateModified": "2025-12-28"
  };

  const dramaPatterns = [
    {
      name: "Triangulation",
      icon: Users,
      description: "When one person communicates through another instead of directly, or plays partners against each other.",
      signs: [
        "Partner A complains about Partner B to Partner C instead of addressing it directly",
        "Someone frequently says 'Well, [other partner] thinks...' in disagreements",
        "You learn important information about your relationship from a metamour",
        "One person becomes the messenger or mediator for all conflicts"
      ],
      prevention: [
        "Establish direct communication as a polycule value",
        "Refuse to be the middle person in others' conflicts",
        "When someone triangulates, gently redirect: 'That sounds like something to discuss with them directly'",
        "Regular check-ins between all relevant dyads"
      ]
    },
    {
      name: "Hierarchy Wars",
      icon: Scale,
      description: "Conflicts over who gets priority, whose needs matter more, or resentment about relationship tiers.",
      signs: [
        "Frequent arguments about time allocation",
        "Secondary partners feeling perpetually deprioritized",
        "Using hierarchy as a weapon: 'I'm primary, so I decide'",
        "Metamours competing for relationship privileges"
      ],
      prevention: [
        "Be explicit about your hierarchy model (or lack thereof) from the start",
        "Ensure all partners understand and consent to the structure",
        "Revisit hierarchy agreements as relationships evolve",
        "Treat all partners with respect regardless of position"
      ]
    },
    {
      name: "Cowboy/Cowgirl Dynamics",
      icon: Target,
      description: "When a new partner tries to pull someone away from their existing relationships.",
      signs: [
        "New partner dismisses or disrespects existing relationships",
        "Pressure to spend less time with other partners",
        "Subtle (or not subtle) pushes toward monogamy",
        "Creating situations where you must choose them over others"
      ],
      prevention: [
        "Vet new partners for genuine poly compatibility",
        "Be clear about your commitment to existing partners",
        "Address concerning behavior immediately, not later",
        "Trust your existing partners when they raise concerns"
      ]
    },
    {
      name: "Unspoken Expectations",
      icon: Eye,
      description: "Assumptions about how things 'should' work that were never actually discussed or agreed upon.",
      signs: [
        "Someone is upset about something you did not know was a boundary",
        "Different partners have conflicting assumptions about the same topic",
        "Surprise when relationships evolve in ways one person did not expect",
        "'I thought we agreed...' when you never explicitly agreed"
      ],
      prevention: [
        "Over-communicate in the early stages of relationships",
        "Write down agreements and revisit them regularly",
        "Ask clarifying questions rather than assuming",
        "Create space for people to voice expectations without judgment"
      ]
    },
    {
      name: "New Relationship Energy (NRE) Imbalance",
      icon: Zap,
      description: "When the excitement of a new connection leads to neglecting established relationships.",
      signs: [
        "Canceling plans with existing partners for new partners",
        "Constantly talking about the new person to the exclusion of others",
        "Existing partners feel like afterthoughts",
        "Making major decisions while in the NRE fog"
      ],
      prevention: [
        "Acknowledge NRE is temporary and can cloud judgment",
        "Maintain committed time with existing partners",
        "Delay major relationship decisions until NRE settles",
        "Ask existing partners to flag NRE-driven behavior"
      ]
    },
    {
      name: "Veto Power Abuse",
      icon: Shield,
      description: "Using veto power inappropriately or as a control mechanism rather than genuine protection.",
      signs: [
        "Vetoes used frequently or without clear reasoning",
        "Veto threats used to control partner's behavior",
        "Vetoes based on insecurity rather than genuine concerns",
        "One partner wielding disproportionate veto power"
      ],
      prevention: [
        "Discuss veto power policies before it becomes an issue",
        "Limit vetoes to genuine safety or dealbreaker concerns",
        "Require clear reasoning for any veto",
        "Consider alternatives like slow-down requests"
      ]
    }
  ];

  const harmonyTools = [
    {
      tool: "Regular Polycule Meetings",
      description: "Monthly or quarterly gatherings where everyone can discuss dynamics, concerns, and celebrations.",
      tips: [
        "Create an agenda so everyone can add topics",
        "Start with positives before addressing issues",
        "Use a talking stick or similar to ensure everyone speaks",
        "End with action items and check-in dates"
      ]
    },
    {
      tool: "Shared Calendar Systems",
      description: "Transparent scheduling that reduces conflict over time and prevents accidental double-booking.",
      tips: [
        "Use apps like Google Calendar or Calendly with sharing",
        "Block out protected time for each relationship",
        "Include buffer time for transitions between partners",
        "Mark special dates and anniversaries"
      ]
    },
    {
      tool: "Written Agreements",
      description: "Documenting boundaries, expectations, and agreements so nothing is left to memory or assumption.",
      tips: [
        "Cover basics: safer sex, disclosure, time, hierarchy",
        "Include what happens when agreements are broken",
        "Review and update agreements regularly",
        "Make sure everyone has access to the document"
      ]
    },
    {
      tool: "Individual Therapy",
      description: "Personal work that prevents you from bringing unprocessed issues into your relationships.",
      tips: [
        "Find a poly-friendly therapist",
        "Work on attachment patterns and triggers",
        "Develop emotional regulation skills",
        "Process jealousy and insecurity in a safe space"
      ]
    },
    {
      tool: "Relationship Therapy",
      description: "Professional support for specific dyads or the whole polycule when needed.",
      tips: [
        "Do not wait until crisis to seek help",
        "Poly-aware therapists understand your dynamics",
        "Can help mediate entrenched conflicts",
        "Useful for major transitions or additions"
      ]
    }
  ];

  const redFlags = [
    "Someone refuses to meet or acknowledge metamours",
    "A partner insists on secret-keeping between relationships",
    "Control disguised as boundaries: 'You cannot see them more than once a week'",
    "One person making rules that only apply to others",
    "Punishing partners for exercising agreed-upon freedoms",
    "Constantly moving goalposts on agreements",
    "Using other relationships as threats or leverage",
    "Refusing to do any personal growth work"
  ];

  return (
    <>
      <SEO
        title="Polycule Drama: How to Spot It Early and Keep Relationships Drama-Free | SPICE"
        description="Identify and prevent common polycule drama patterns including triangulation, hierarchy conflicts, NRE imbalance, and unspoken expectations. Practical tools for polyamorous harmony."
        keywords="polycule drama, polyamory conflicts, triangulation in polyamory, hierarchy fights poly, NRE new relationship energy, poly relationship problems, polycule communication, metamour conflicts, poly red flags, polyamory tips"
        canonical="https://thespiceapp.com/blog/polycule-drama"
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
                Polycule Drama: How to Spot It Early and Keep Your Relationships Drama-Free
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Common pitfalls like triangulation, hierarchy fights, and unspoken expectations—plus proactive tools to foster harmony in your polycule.
              </p>
            </div>

            {/* Featured Image */}
            <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl p-12 mb-12 text-center border border-primary/30">
              <Shield className="w-16 h-16 text-primary mx-auto mb-4" />
              <p className="text-muted-foreground">Building Peaceful Poly Relationships</p>
            </div>

            {/* Table of Contents */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 mb-12">
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                In This Guide
              </h2>
              <ul className="space-y-2 text-sm">
                <li><a href="#drama-patterns" className="text-primary hover:underline">→ 6 Common Drama Patterns</a></li>
                <li><a href="#harmony-tools" className="text-primary hover:underline">→ Tools for Polycule Harmony</a></li>
                <li><a href="#red-flags" className="text-primary hover:underline">→ Red Flags That Cannot Be Ignored</a></li>
                <li><a href="#when-drama-happens" className="text-primary hover:underline">→ When Drama Happens Anyway</a></li>
              </ul>
            </div>

            {/* Article Content */}
            <article className="prose prose-invert max-w-none">
              <section className="mb-12">
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Let us be honest: polycules are complicated. You are not just managing one relationship—you are navigating a web of connections, each with its own needs, boundaries, and potential friction points. Drama is not inevitable, but it is common when structures are unclear or communication breaks down.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    The good news? Most polycule drama follows predictable patterns. When you know what to watch for, you can intervene early—or prevent issues from arising in the first place.
                  </p>
                </div>
              </section>

              <section id="drama-patterns" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <AlertTriangle className="w-7 h-7 text-amber-500" />
                  6 Common Drama Patterns
                </h2>
                <div className="space-y-8">
                  {dramaPatterns.map((pattern, idx) => (
                    <div key={idx} className="bg-card/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden">
                      <div className="bg-amber-500/10 p-4 border-b border-border">
                        <div className="flex items-center gap-3">
                          <pattern.icon className="w-6 h-6 text-amber-400" />
                          <h3 className="text-xl font-bold text-white">{pattern.name}</h3>
                        </div>
                        <p className="text-muted-foreground mt-2">{pattern.description}</p>
                      </div>
                      <div className="p-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-bold text-red-400 mb-3 flex items-center gap-2">
                              <Eye className="w-4 h-4" /> Warning Signs
                            </h4>
                            <ul className="space-y-2">
                              {pattern.signs.map((sign, sIdx) => (
                                <li key={sIdx} className="text-sm text-muted-foreground flex items-start gap-2">
                                  <span className="text-red-400 mt-1">•</span>
                                  {sign}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-bold text-green-400 mb-3 flex items-center gap-2">
                              <Shield className="w-4 h-4" /> Prevention
                            </h4>
                            <ul className="space-y-2">
                              {pattern.prevention.map((prev, pIdx) => (
                                <li key={pIdx} className="text-sm text-muted-foreground flex items-start gap-2">
                                  <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0 mt-1" />
                                  {prev}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="harmony-tools" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Heart className="w-7 h-7 text-primary" />
                  Tools for Polycule Harmony
                </h2>
                <p className="text-muted-foreground mb-6">
                  Proactive structures prevent most drama before it starts. Here are tools that successful polycules use:
                </p>
                <div className="space-y-6">
                  {harmonyTools.map((item, idx) => (
                    <div key={idx} className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                      <h3 className="text-lg font-bold text-primary mb-2">{item.tool}</h3>
                      <p className="text-muted-foreground mb-4">{item.description}</p>
                      <div className="grid md:grid-cols-2 gap-2">
                        {item.tips.map((tip, tIdx) => (
                          <div key={tIdx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{tip}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="red-flags" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <AlertTriangle className="w-7 h-7 text-red-500" />
                  Red Flags That Cannot Be Ignored
                </h2>
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                  <p className="text-muted-foreground mb-4">
                    Some behaviors go beyond normal growing pains. These red flags indicate deeper issues that need immediate attention:
                  </p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {redFlags.map((flag, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-muted-foreground">
                        <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0 mt-1" />
                        <span className="text-sm">{flag}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section id="when-drama-happens" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <RefreshCw className="w-7 h-7 text-primary" />
                  When Drama Happens Anyway
                </h2>
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                  <p className="text-muted-foreground mb-4">
                    Even with the best prevention, conflict will happen. Here is how to navigate it:
                  </p>
                  <div className="space-y-4">
                    {[
                      { title: "Pause Before Reacting", desc: "Take time to regulate your emotions before responding. Heated reactions escalate drama." },
                      { title: "Address Issues Directly", desc: "Go to the source. Do not vent to uninvolved parties or let issues fester." },
                      { title: "Listen to Understand", desc: "Try to genuinely understand each perspective before defending your own." },
                      { title: "Focus on Solutions", desc: "What needs to change going forward? Dwelling on who was wrong prolongs conflict." },
                      { title: "Know When to Get Help", desc: "A poly-aware therapist can mediate when you are stuck." },
                      { title: "Learn and Document", desc: "After resolution, discuss what led to the issue and how to prevent recurrence." }
                    ].map((step, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold flex-shrink-0">
                          {idx + 1}
                        </span>
                        <div>
                          <h4 className="font-bold text-white">{step.title}</h4>
                          <p className="text-sm text-muted-foreground">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Related Resources */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Continue Learning</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link to="/lifestyle/relationships-communication" className="bg-card/50 border border-border rounded-xl p-4 hover:border-primary/50 transition-all group">
                    <h3 className="font-bold text-white group-hover:text-primary transition-colors">Communication Guide</h3>
                    <p className="text-sm text-muted-foreground">Scripts and frameworks for difficult conversations</p>
                  </Link>
                  <Link to="/lifestyle/jealousy-management" className="bg-card/50 border border-border rounded-xl p-4 hover:border-primary/50 transition-all group">
                    <h3 className="font-bold text-white group-hover:text-primary transition-colors">Jealousy Management</h3>
                    <p className="text-sm text-muted-foreground">Tools for processing jealousy healthily</p>
                  </Link>
                </div>
              </section>
            </article>

            {/* CTA */}
            <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl p-8 md:p-12 border border-primary/30 text-center">
              <Sparkles className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Find Your Polycule</h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Connect with emotionally intelligent poly folks on SPICE—where communication and consent come first.
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

export default BlogPolyculeDrama;