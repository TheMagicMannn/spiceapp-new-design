import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Heart, Clock, Calendar, CheckCircle, BookOpen, Sparkles, Battery, Target, RefreshCw, Users, Coffee, Moon, Sun, Zap, Shield } from "lucide-react";

const BlogTimeManagement = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Time Management Mastery: Thriving in Multiple Relationships Without Burning Out",
    "description": "Practical systems, apps, and strategies for balancing multiple relationships with work and self-care.",
    "author": { "@type": "Organization", "name": "SPICE" },
    "datePublished": "2025-12-28",
    "dateModified": "2025-12-28"
  };

  const timeStrategies = [
    {
      name: "The Anchor Date System",
      icon: Target,
      description: "Establish consistent, recurring time with each partner that rarely gets moved.",
      implementation: [
        "Each partner gets a protected anchor date (e.g., Tuesday evenings, Sunday mornings)",
        "These dates are treated as unmovable commitments",
        "Additional time is scheduled around anchor dates",
        "Partners know they have guaranteed quality time"
      ],
      benefit: "Creates security and reduces scheduling anxiety for all partners"
    },
    {
      name: "The Calendar Transparency Method",
      icon: Calendar,
      description: "Shared visibility into your schedule so partners can see availability without asking.",
      implementation: [
        "Use Google Calendar or similar with sharing enabled",
        "Color-code by partner (with their consent)",
        "Include buffer/transition time between dates",
        "Mark solo time and work commitments clearly"
      ],
      benefit: "Reduces communication overhead and prevents double-booking"
    },
    {
      name: "The Energy Budget Framework",
      icon: Battery,
      description: "Acknowledge that time is not the only limited resource—energy matters too.",
      implementation: [
        "Rate your energy levels honestly (1-10) throughout the week",
        "Schedule high-energy activities (new partner dates, events) when you are fresh",
        "Reserve low-energy times for cozy established partner time",
        "Build in recovery time after intensive social periods"
      ],
      benefit: "Prevents burnout and ensures quality presence, not just physical presence"
    },
    {
      name: "The Metamour Coordination Approach",
      icon: Users,
      description: "Work with metamours to optimize everyone's time, not just your own.",
      implementation: [
        "Share scheduling constraints openly with metamours",
        "Look for creative solutions (parallel play dates, group activities)",
        "Be willing to swap days when it helps the polycule",
        "Consider a polycule calendar everyone can access"
      ],
      benefit: "Maximizes everyone's time and builds polycule cooperation"
    }
  ];

  const apps = [
    {
      name: "Google Calendar",
      use: "Shared scheduling with multiple calendars",
      polyTip: "Create a calendar per partner, use color coding, share selectively"
    },
    {
      name: "Calendly",
      use: "Let partners book available time slots",
      polyTip: "Set different availability windows for different partners"
    },
    {
      name: "Notion",
      use: "Relationship dashboards and shared docs",
      polyTip: "Create a relationship wiki with important dates, boundaries, and agreements"
    },
    {
      name: "Todoist",
      use: "Task management with partner labels",
      polyTip: "Track relationship maintenance tasks (gifts, planning, check-ins)"
    },
    {
      name: "Cozi",
      use: "Family scheduling app",
      polyTip: "Great for kitchen table polycules or those with shared households"
    }
  ];

  const rituals = [
    {
      ritual: "Sunday Planning Sessions",
      description: "Weekly ritual to review the upcoming week with all partners.",
      howTo: "Look at the week ahead. Confirm dates. Address conflicts. Express needs."
    },
    {
      ritual: "Morning Check-Ins",
      description: "Brief daily touchpoints that maintain connection without requiring time.",
      howTo: "A good morning text, a shared song, or a quick voice memo—takes 2 minutes but shows care."
    },
    {
      ritual: "Transition Rituals",
      description: "Intentional practices when moving between partners or returning home.",
      howTo: "Ten minutes of quiet before switching contexts. A specific greeting ritual. Changing clothes."
    },
    {
      ritual: "Monthly State of the Union",
      description: "Deeper check-in on relationship health beyond just scheduling.",
      howTo: "How are we doing? What is working? What needs attention? What do we want next month?"
    }
  ];

  const boundaries = [
    {
      boundary: "Work Hours Are Sacred",
      explanation: "Poly life cannot compromise your career. Set clear work hours and stick to them."
    },
    {
      boundary: "Solo Time Is Non-Negotiable",
      explanation: "You cannot pour from an empty cup. Schedule alone time like you schedule dates."
    },
    {
      boundary: "Sleep Is Not Optional",
      explanation: "Sacrificing sleep for relationships leads to burnout. Protect your rest."
    },
    {
      boundary: "Quality Over Quantity",
      explanation: "Three hours of present, engaged time beats six hours of distracted togetherness."
    },
    {
      boundary: "Emergency Buffer",
      explanation: "Keep some unscheduled time for unexpected needs, crises, or spontaneous connection."
    }
  ];

  const burnoutSigns = [
    "Dreading dates you used to enjoy",
    "Constantly feeling behind or overwhelmed",
    "Resentment toward partners for taking your time",
    "Physical exhaustion or frequent illness",
    "Emotional numbness or disconnection during dates",
    "Neglecting basic self-care (meals, exercise, sleep)",
    "Difficulty being present with any partner",
    "Fantasizing about canceling everything"
  ];

  return (
    <>
      <SEO
        title="Time Management for Multiple Relationships: Poly Scheduling Guide | SPICE"
        description="Master time management for polyamory and ENM. Practical systems, apps, rituals, and boundary-setting strategies for balancing multiple partners without burnout."
        keywords="polyamory time management, poly scheduling, multiple relationships schedule, ENM time management, polyamory burnout, poly calendar, managing multiple partners, relationship time management, poly work life balance"
        canonical="https://thespiceapp.com/blog/poly-time-management"
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
                <span className="text-xs text-muted-foreground">15 min read</span>
                <span className="text-xs text-muted-foreground">December 2025</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                Time Management Mastery: Thriving in Multiple Relationships
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Practical systems, apps, rituals, and boundary-setting strategies for balancing dates, partners, work, and self-care without burning out.
              </p>
            </div>

            {/* Featured Image */}
            <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl p-12 mb-12 text-center border border-primary/30">
              <Clock className="w-16 h-16 text-primary mx-auto mb-4" />
              <p className="text-muted-foreground">Making Time for All Your Loves</p>
            </div>

            {/* Table of Contents */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 mb-12">
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                In This Guide
              </h2>
              <ul className="space-y-2 text-sm">
                <li><a href="#reality" className="text-primary hover:underline">→ The Time Reality of Polyamory</a></li>
                <li><a href="#strategies" className="text-primary hover:underline">→ 4 Core Time Management Strategies</a></li>
                <li><a href="#apps" className="text-primary hover:underline">→ Apps and Tools That Help</a></li>
                <li><a href="#rituals" className="text-primary hover:underline">→ Connection Rituals</a></li>
                <li><a href="#boundaries" className="text-primary hover:underline">→ Essential Time Boundaries</a></li>
                <li><a href="#burnout" className="text-primary hover:underline">→ Recognizing and Preventing Burnout</a></li>
              </ul>
            </div>

            {/* Article Content */}
            <article className="prose prose-invert max-w-none">
              <section id="reality" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Clock className="w-7 h-7 text-primary" />
                  The Time Reality of Polyamory
                </h2>
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 mb-6">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Here is the truth nobody tells you at the start: <strong className="text-white">polyamory is a part-time job</strong>. Actually, with multiple partners, it can feel like several part-time jobs. Between dates, texting, processing, planning, and the emotional labor of maintaining multiple deep connections, the hours add up fast.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The math is simple but sobering:
                  </p>
                  <div className="bg-background/50 rounded-lg p-4 mb-4">
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• One partner: 10-15 hours/week for quality relationship time</li>
                      <li>• Two partners: 20-30 hours/week</li>
                      <li>• Three partners: 30-45 hours/week</li>
                      <li>• Add: Work (40+ hours), sleep (56 hours), self-care, friends, hobbies...</li>
                    </ul>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    This is why time management in polyamory is not optional—it is essential for survival. The good news: with intentional systems, you can have rich, fulfilling relationships with multiple people without sacrificing your health or sanity.
                  </p>
                </div>
              </section>

              <section id="strategies" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Target className="w-7 h-7 text-primary" />
                  4 Core Time Management Strategies
                </h2>
                <div className="space-y-6">
                  {timeStrategies.map((strategy, idx) => (
                    <div key={idx} className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <strategy.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold text-white">{strategy.name}</h3>
                      </div>
                      <p className="text-muted-foreground mb-4">{strategy.description}</p>
                      <div className="bg-background/50 rounded-lg p-4 mb-4">
                        <h4 className="font-bold text-white mb-2">How to Implement:</h4>
                        <ul className="space-y-2">
                          {strategy.implementation.map((step, sIdx) => (
                            <li key={sIdx} className="text-sm text-muted-foreground flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                              {step}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                        <p className="text-sm text-muted-foreground">
                          <strong className="text-green-400">Key Benefit:</strong> {strategy.benefit}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="apps" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Zap className="w-7 h-7 text-primary" />
                  Apps and Tools That Help
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {apps.map((app, idx) => (
                    <div key={idx} className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-5">
                      <h3 className="font-bold text-white mb-1">{app.name}</h3>
                      <p className="text-sm text-primary mb-2">{app.use}</p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Poly Tip:</strong> {app.polyTip}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="rituals" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <RefreshCw className="w-7 h-7 text-primary" />
                  Connection Rituals
                </h2>
                <p className="text-muted-foreground mb-6">
                  Not all connection requires hours of time. These rituals maintain bonds efficiently:
                </p>
                <div className="space-y-4">
                  {rituals.map((item, idx) => (
                    <div key={idx} className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-5">
                      <h3 className="font-bold text-primary mb-2">{item.ritual}</h3>
                      <p className="text-muted-foreground mb-2">{item.description}</p>
                      <p className="text-sm text-muted-foreground bg-background/50 rounded-lg p-3">
                        <strong className="text-white">How:</strong> {item.howTo}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              <section id="boundaries" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Shield className="w-7 h-7 text-primary" />
                  Essential Time Boundaries
                </h2>
                <div className="space-y-4">
                  {boundaries.map((item, idx) => (
                    <div key={idx} className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-5 flex items-start gap-4">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-white mb-1">{item.boundary}</h3>
                        <p className="text-sm text-muted-foreground">{item.explanation}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section id="burnout" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Battery className="w-7 h-7 text-amber-500" />
                  Recognizing and Preventing Burnout
                </h2>
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6 mb-6">
                  <h3 className="font-bold text-amber-400 mb-4">Warning Signs of Poly Burnout</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {burnoutSigns.map((sign, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-muted-foreground text-sm">
                        <span className="text-amber-400">⚠</span>
                        {sign}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
                  <h3 className="font-bold text-green-400 mb-4">If You Are Burning Out</h3>
                  <ul className="space-y-2">
                    {[
                      "Communicate honestly with all partners about your state",
                      "Temporarily reduce commitments—it is okay to scale back",
                      "Prioritize sleep, nutrition, and basic self-care",
                      "Consider whether your current relationship configuration is sustainable",
                      "Seek support from a poly-friendly therapist"
                    ].map((tip, idx) => (
                      <li key={idx} className="text-muted-foreground flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-1" />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Related Resources */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Related Guides</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link to="/lifestyle/relationships-communication" className="bg-card/50 border border-border rounded-xl p-4 hover:border-primary/50 transition-all group">
                    <h3 className="font-bold text-white group-hover:text-primary transition-colors">Communication Guide</h3>
                    <p className="text-sm text-muted-foreground">Scripts for scheduling conversations</p>
                  </Link>
                  <Link to="/blog/polycule-drama" className="bg-card/50 border border-border rounded-xl p-4 hover:border-primary/50 transition-all group">
                    <h3 className="font-bold text-white group-hover:text-primary transition-colors">Polycule Drama Prevention</h3>
                    <p className="text-sm text-muted-foreground">Avoid time-related conflicts</p>
                  </Link>
                </div>
              </section>
            </article>

            {/* CTA */}
            <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl p-8 md:p-12 border border-primary/30 text-center">
              <Sparkles className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Find Partners Who Respect Your Time</h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                SPICE connects you with emotionally intelligent poly folks who understand the importance of scheduling and boundaries.
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

export default BlogTimeManagement;