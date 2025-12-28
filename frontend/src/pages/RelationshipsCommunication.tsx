import { MessageCircle, Heart, Users, Shield, CheckCircle, BookOpen, AlertTriangle, Sparkles, ChevronRight, Quote, Target, Clock, Lightbulb, HeartHandshake, MessageSquare, BadgeCheck, ListChecks, Brain, Flame, Lock, Eye, ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";

const RelationshipsCommunication = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Complete Guide to Relationship Communication for Open Relationships, Swinging & ENM",
    "description": "Master essential communication skills for ethical non-monogamy, swinging, polyamory, and open relationships. Learn conversation scripts, boundary setting, and conflict resolution.",
    "author": {
      "@type": "Organization",
      "name": "SPICE"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SPICE",
      "logo": {
        "@type": "ImageObject",
        "url": "https://thespiceapp.com/logo.png"
      }
    },
    "datePublished": "2024-01-15",
    "dateModified": "2024-12-28"
  };

  const conversationScripts = [
    {
      title: "Opening the Initial Conversation",
      scenario: "You want to discuss non-monogamy for the first time",
      script: `"I've been thinking about our relationship and how much I love what we have. I want to share something with you that's been on my mind. I've been curious about [swinging/ENM/polyamory] and I'd love to explore what you think about it. This isn't about anything missing—it's about exploring together. Can we talk about this openly?"`,
      tips: ["Choose a calm, private moment", "Avoid bringing it up during or after sex", "Be prepared for any reaction", "Give them time to process"]
    },
    {
      title: "Discussing Boundaries",
      scenario: "Setting clear rules and limits together",
      script: `"I think it's important we establish what we're both comfortable with. Let's each share our hard limits—things that are absolutely off the table—and our soft limits—things we might consider with more discussion. For me, my hard limits are [X, Y, Z]. What are yours?"`,
      tips: ["Write boundaries down together", "Revisit boundaries regularly", "Respect 'no' without negotiation", "Understand boundaries can evolve"]
    },
    {
      title: "Handling Jealousy",
      scenario: "When jealousy arises and needs addressing",
      script: `"I'm feeling some jealousy about [specific situation], and I want to talk about it. I'm not blaming you—I'm trying to understand my feelings. Can we discuss what triggered this and how we can work through it together? I need [reassurance/time/space] right now."`,
      tips: ["Name the emotion without accusation", "Identify the trigger specifically", "Ask for what you need", "Listen without defensiveness"]
    },
    {
      title: "Checking In After Experiences",
      scenario: "Debriefing after a lifestyle encounter",
      script: `"I'd like to talk about [last night/our recent experience]. How are you feeling about it? What worked well for you? Was there anything that felt uncomfortable? I felt [emotion] when [specific moment]. Let's share our highs and lows."`,
      tips: ["Wait until you're both rested", "Start with positives", "Be honest about discomfort", "Plan adjustments together"]
    },
    {
      title: "Pausing or Slowing Down",
      scenario: "When you need to take a break from the lifestyle",
      script: `"I've been reflecting on our experiences and I think I need us to slow down/take a break. This isn't about ending anything permanently—I just need time to process and reconnect with us. Can we focus on our foundation for a while?"`,
      tips: ["It's okay to pause anytime", "Reconnection strengthens bonds", "No need to justify extensively", "Set a check-in date"]
    },
    {
      title: "Addressing Rule Violations",
      scenario: "When a boundary has been crossed",
      script: `"Something happened that concerns me. We agreed on [specific rule], but [what happened] felt like that boundary was crossed. I need to understand what happened from your perspective. This is important to me because trust is the foundation of what we're doing."`,
      tips: ["Stay calm and factual", "Seek to understand first", "Focus on repair, not punishment", "Decide together how to move forward"]
    }
  ];

  const communicationPillars = [
    {
      icon: Heart,
      title: "Honesty & Transparency",
      description: "Complete openness about feelings, desires, and concerns",
      practices: [
        "Share feelings in real-time, not weeks later",
        "Disclose attractions and interests proactively",
        "Admit mistakes immediately",
        "Be truthful even when it's uncomfortable"
      ]
    },
    {
      icon: Shield,
      title: "Emotional Safety",
      description: "Creating space where vulnerability is welcomed",
      practices: [
        "Never mock or dismiss partner's feelings",
        "Respond with curiosity, not judgment",
        "Maintain confidentiality about sensitive topics",
        "Validate emotions before problem-solving"
      ]
    },
    {
      icon: Target,
      title: "Active Listening",
      description: "Truly hearing and understanding your partner",
      practices: [
        "Put away phones and distractions",
        "Repeat back what you heard for clarity",
        "Ask follow-up questions",
        "Listen to understand, not to respond"
      ]
    },
    {
      icon: HeartHandshake,
      title: "Mutual Respect",
      description: "Honoring each other's autonomy and boundaries",
      practices: [
        "Accept 'no' without pressure or guilt",
        "Respect differing comfort levels",
        "Avoid ultimatums and manipulation",
        "Celebrate each other's growth"
      ]
    }
  ];

  const commonMistakes = [
    {
      mistake: "Springing the conversation during sex or intimacy",
      why: "Your partner may feel blindsided or pressured, associating the topic with sexual coercion rather than genuine connection.",
      instead: "Choose a neutral time when you're both relaxed and have privacy—perhaps during a walk or quiet evening at home."
    },
    {
      mistake: "Using porn or other couples as 'proof' it works",
      why: "This can feel like manipulation or minimizing your partner's valid concerns about non-monogamy.",
      instead: "Focus on your own feelings and desires. Share resources only if they ask for them."
    },
    {
      mistake: "Presenting it as a done decision rather than a discussion",
      why: "This removes your partner's agency and can feel like coercion.",
      instead: "Frame it as exploration: 'I've been curious about...' not 'I want us to start...'"
    },
    {
      mistake: "Comparing your partner to others unfavorably",
      why: "This creates insecurity and competition rather than collaboration.",
      instead: "Emphasize that opening up is about addition, not replacement. Your partner is irreplaceable."
    },
    {
      mistake: "Rushing through boundary discussions",
      why: "Unclear boundaries lead to hurt feelings, broken trust, and potential relationship damage.",
      instead: "Take multiple conversations. Write things down. Revisit regularly as you both evolve."
    },
    {
      mistake: "Dismissing jealousy as 'irrational'",
      why: "Jealousy is a normal human emotion that signals something needs attention.",
      instead: "Treat jealousy as information. Explore its roots together with compassion."
    }
  ];

  const boundaryCategories = [
    {
      category: "Physical Boundaries",
      icon: Users,
      examples: [
        "What sexual activities are okay with others?",
        "Are certain acts reserved for primary partners only?",
        "Protection/safer sex requirements",
        "Physical locations (your home, hotels, etc.)",
        "Who initiates physical contact?"
      ]
    },
    {
      category: "Emotional Boundaries",
      icon: Heart,
      examples: [
        "How much emotional intimacy with others is okay?",
        "Overnight stays and cuddling after",
        "Saying 'I love you' to others",
        "Dating vs. purely physical connections",
        "Meeting each other's metamours"
      ]
    },
    {
      category: "Time Boundaries",
      icon: Clock,
      examples: [
        "How often can you see other partners?",
        "Protected date nights for primary relationship",
        "Communication expectations when apart",
        "Advance notice requirements for dates",
        "Holidays and special occasions"
      ]
    },
    {
      category: "Communication Boundaries",
      icon: MessageSquare,
      examples: [
        "What details do you share? (DADT vs. full disclosure)",
        "When and how to disclose new connections",
        "Reading each other's messages—yes or no?",
        "Social media and public acknowledgment",
        "Veto power discussions"
      ]
    },
    {
      category: "Social Boundaries",
      icon: Eye,
      examples: [
        "Who knows about your lifestyle?",
        "Involvement with mutual friends",
        "Workplace connections",
        "Family and children considerations",
        "Community involvement and events"
      ]
    },
    {
      category: "Safety Boundaries",
      icon: Lock,
      examples: [
        "STI testing frequency and requirements",
        "Sharing test results",
        "Emergency contacts and check-ins",
        "Vetting new partners together",
        "Alcohol and substance use limits"
      ]
    }
  ];

  const jealousyWorksheet = [
    {
      step: 1,
      title: "Identify the Trigger",
      questions: [
        "What specifically triggered this feeling?",
        "When did the feeling start?",
        "Is this about a specific person or situation?"
      ]
    },
    {
      step: 2,
      title: "Name the Underlying Fear",
      questions: [
        "Am I afraid of being replaced?",
        "Am I worried about not being enough?",
        "Is this about abandonment or loss?",
        "Do I feel left out or excluded?"
      ]
    },
    {
      step: 3,
      title: "Reality Check",
      questions: [
        "Is my fear based on evidence or assumption?",
        "Has my partner given me reason to doubt their commitment?",
        "Am I projecting past experiences onto this situation?"
      ]
    },
    {
      step: 4,
      title: "Identify Your Needs",
      questions: [
        "What do I need to feel more secure?",
        "What reassurance would help?",
        "Is there a boundary that needs adjusting?",
        "Do I need more quality time with my partner?"
      ]
    },
    {
      step: 5,
      title: "Communicate & Request",
      questions: [
        "How can I express this without blame?",
        "What specific request can I make?",
        "Am I willing to hear my partner's perspective?",
        "What compromise might work for us both?"
      ]
    }
  ];

  return (
    <>
      <SEO
        title="Relationship Communication Guide: Scripts for Open Relationships, Swinging & ENM | SPICE"
        description="Complete guide to relationship communication for ethical non-monogamy, swinging, polyamory, and open relationships. Includes conversation scripts, boundary-setting templates, jealousy management tools, and expert advice for couples."
        keywords="relationship communication, open relationship communication, swinging communication guide, ENM communication, polyamory communication, how to talk about open relationship, setting boundaries in relationships, jealousy in open relationships, ethical non-monogamy guide, couples communication, lifestyle communication, swinger communication tips, poly communication, relationship scripts, boundary setting template, jealousy worksheet, opening up conversation"
        canonical="https://thespiceapp.com/lifestyle/relationships-communication"
        structuredData={structuredData}
      />

      <div className="relative min-h-screen">
        <ParticlesBackground />
        <Header />
        <Breadcrumbs />
        
        <main className="relative z-10 pt-32 pb-12">
          <div className="container mx-auto px-4 max-w-5xl">
            
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
                <MessageCircle className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Communication Guide</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                Relationships & Communication
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Master the art of open, honest communication for swinging, ethical non-monogamy, polyamory, and alternative relationships. Complete with conversation scripts, boundary templates, and jealousy management tools.
              </p>
              
              {/* Quick Stats */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>25 min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <ListChecks className="w-4 h-4 text-primary" />
                  <span>6 Conversation Scripts</span>
                </div>
                <div className="flex items-center gap-2">
                  <BadgeCheck className="w-4 h-4 text-primary" />
                  <span>Expert Reviewed</span>
                </div>
              </div>
            </div>

            {/* Table of Contents */}
            <nav className="mb-16 bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                In This Guide
              </h2>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  { label: "The Four Pillars of Communication", anchor: "#pillars" },
                  { label: "Conversation Scripts & Templates", anchor: "#scripts" },
                  { label: "Setting Boundaries Together", anchor: "#boundaries" },
                  { label: "Managing Jealousy Effectively", anchor: "#jealousy" },
                  { label: "Common Mistakes to Avoid", anchor: "#mistakes" },
                  { label: "Ongoing Communication Practices", anchor: "#ongoing" },
                ].map((item, idx) => (
                  <a 
                    key={idx} 
                    href={item.anchor}
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ChevronRight className="w-4 h-4" />
                    {item.label}
                  </a>
                ))}
              </div>
            </nav>

            {/* Introduction */}
            <section className="mb-16">
              <div className="prose prose-invert max-w-none">
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 md:p-10">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                    <Sparkles className="w-7 h-7 text-primary" />
                    Why Communication Makes or Breaks Open Relationships
                  </h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p className="text-lg leading-relaxed">
                      Whether you're curious about swinging, exploring ethical non-monogamy (ENM), practicing polyamory, or deepening your existing open relationship, <strong className="text-white">communication is the single most important skill you'll develop</strong>.
                    </p>
                    <p className="leading-relaxed">
                      Research consistently shows that successful non-monogamous relationships don't work because the people in them don't experience jealousy or challenges—they work because those couples have developed sophisticated communication tools to navigate those challenges together.
                    </p>
                    <p className="leading-relaxed">
                      This comprehensive guide provides you with practical scripts, frameworks, and exercises used by relationship therapists and experienced lifestyle couples. You'll learn how to have difficult conversations with compassion, set boundaries that protect your relationship, and transform jealousy from a threat into an opportunity for deeper connection.
                    </p>
                  </div>
                  
                  {/* Key Insight Box */}
                  <div className="mt-8 bg-primary/10 border border-primary/30 rounded-lg p-6">
                    <div className="flex items-start gap-4">
                      <Lightbulb className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-white mb-2">Key Insight</h3>
                        <p className="text-muted-foreground">
                          Studies show that couples in consensual non-monogamous relationships report <strong className="text-white">higher levels of trust, communication satisfaction, and lower jealousy</strong> than their monogamous counterparts—not because CNM is inherently better, but because these relationships require developing advanced communication skills that benefit all aspects of the partnership.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Four Pillars Section */}
            <section id="pillars" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
                <Target className="w-7 h-7 text-primary" />
                The Four Pillars of Relationship Communication
              </h2>
              <p className="text-muted-foreground mb-8">
                Before diving into specific conversations, understand the foundational principles that make communication work in any relationship structure.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                {communicationPillars.map((pillar, idx) => (
                  <div key={idx} className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <pillar.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold">{pillar.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">{pillar.description}</p>
                    <ul className="space-y-2">
                      {pillar.practices.map((practice, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{practice}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Conversation Scripts Section */}
            <section id="scripts" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                <MessageSquare className="w-7 h-7 text-primary" />
                Conversation Scripts & Templates
              </h2>
              <p className="text-muted-foreground mb-8">
                Use these proven scripts as starting points for important conversations. Adapt them to your voice and situation—authenticity matters more than perfect wording.
              </p>
              
              <div className="space-y-6">
                {conversationScripts.map((script, idx) => (
                  <div key={idx} className="bg-card/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden">
                    <div className="bg-primary/10 border-b border-border p-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold flex items-center gap-2">
                          <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">
                            {idx + 1}
                          </span>
                          {script.title}
                        </h3>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        <strong>Scenario:</strong> {script.scenario}
                      </p>
                    </div>
                    <div className="p-6">
                      <div className="bg-background/50 border border-border rounded-lg p-4 mb-4">
                        <div className="flex items-start gap-3">
                          <Quote className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <p className="text-muted-foreground italic leading-relaxed">
                            {script.script}
                          </p>
                        </div>
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                          <Lightbulb className="w-4 h-4 text-primary" />
                          Tips for This Conversation
                        </h4>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {script.tips.map((tip, tIdx) => (
                            <div key={tIdx} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                              <span>{tip}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Boundaries Section */}
            <section id="boundaries" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                <Shield className="w-7 h-7 text-primary" />
                Setting Boundaries Together
              </h2>
              <p className="text-muted-foreground mb-8">
                Boundaries are the guardrails that keep your relationship safe while you explore. They're not restrictions—they're agreements that create freedom within structure.
              </p>

              {/* Boundary Types Explanation */}
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 mb-8">
                <h3 className="text-lg font-bold mb-4">Understanding Boundary Types</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                    <h4 className="font-bold text-red-400 mb-2">Hard Limits</h4>
                    <p className="text-sm text-muted-foreground">
                      Non-negotiable boundaries that are absolute. These don't change without extensive discussion and usually reflect core values or deal-breakers. Examples: "No unprotected sex with others" or "No involving coworkers."
                    </p>
                  </div>
                  <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
                    <h4 className="font-bold text-amber-400 mb-2">Soft Limits</h4>
                    <p className="text-sm text-muted-foreground">
                      Flexible boundaries that might change with time, trust, or circumstances. These are "not right now" rather than "never." Examples: "I'm not comfortable with overnight stays yet" or "Let's start with same-room only."
                    </p>
                  </div>
                </div>
              </div>

              {/* Boundary Categories */}
              <h3 className="text-xl font-bold mb-6">Boundary Categories to Discuss</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {boundaryCategories.map((cat, idx) => (
                  <div key={idx} className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <cat.icon className="w-5 h-5 text-primary" />
                      <h4 className="font-bold">{cat.category}</h4>
                    </div>
                    <ul className="space-y-2">
                      {cat.examples.map((example, eIdx) => (
                        <li key={eIdx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <ChevronRight className="w-3 h-3 text-primary flex-shrink-0 mt-1" />
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Boundary Review Schedule */}
              <div className="bg-gradient-to-r from-purple-500/10 to-primary/10 border border-purple-500/30 rounded-xl p-6">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Recommended Boundary Review Schedule
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-background/30 rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">Weekly</div>
                    <p className="text-sm text-muted-foreground">Check-ins when actively dating or after new experiences</p>
                  </div>
                  <div className="text-center p-4 bg-background/30 rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">Monthly</div>
                    <p className="text-sm text-muted-foreground">Regular review of what's working and what needs adjustment</p>
                  </div>
                  <div className="text-center p-4 bg-background/30 rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">Quarterly</div>
                    <p className="text-sm text-muted-foreground">Deep dive into relationship satisfaction and long-term goals</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Jealousy Section */}
            <section id="jealousy" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                <Brain className="w-7 h-7 text-primary" />
                Managing Jealousy Effectively
              </h2>
              <p className="text-muted-foreground mb-8">
                Jealousy isn't a sign that you're "not cut out" for non-monogamy—it's a normal human emotion that provides valuable information about your needs and fears. Here's how to work with it.
              </p>

              {/* Jealousy Reframe */}
              <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6 mb-8">
                <h3 className="text-lg font-bold text-green-400 mb-4 flex items-center gap-2">
                  <Flame className="w-5 h-5" />
                  Reframing Jealousy: From Enemy to Ally
                </h3>
                <p className="text-muted-foreground mb-4">
                  Instead of seeing jealousy as proof you can't do this, view it as your psyche's way of flagging something important. Jealousy often points to:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Unmet needs in your relationship",
                    "Fears that deserve compassionate attention",
                    "Boundaries that need clarification",
                    "Areas where you need more reassurance",
                    "Personal insecurities worth exploring",
                    "Mismatched expectations to discuss"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Jealousy Worksheet */}
              <h3 className="text-xl font-bold mb-6">The 5-Step Jealousy Processing Worksheet</h3>
              <div className="space-y-4 mb-8">
                {jealousyWorksheet.map((step) => (
                  <div key={step.step} className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-5">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                        {step.step}
                      </span>
                      <h4 className="text-lg font-bold">{step.title}</h4>
                    </div>
                    <div className="grid md:grid-cols-2 gap-3">
                      {step.questions.map((question, qIdx) => (
                        <div key={qIdx} className="flex items-start gap-2 text-sm text-muted-foreground bg-background/30 rounded-lg p-3">
                          <MessageCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{question}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Compersion Note */}
              <div className="bg-pink-500/10 border border-pink-500/30 rounded-xl p-6">
                <h3 className="text-lg font-bold text-pink-400 mb-3">A Note on Compersion</h3>
                <p className="text-muted-foreground">
                  <strong className="text-white">Compersion</strong>—feeling joy from your partner's joy with others—is often called the "opposite of jealousy." But it's not a requirement for ethical non-monogamy, and it's not something you can force. Many experienced lifestyle couples feel both jealousy AND compersion, sometimes about the same situation. Don't pressure yourself to feel compersion. Focus instead on managing jealousy healthily and letting positive feelings develop naturally over time.
                </p>
              </div>
            </section>

            {/* Common Mistakes Section */}
            <section id="mistakes" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                <AlertTriangle className="w-7 h-7 text-amber-500" />
                Common Communication Mistakes to Avoid
              </h2>
              <p className="text-muted-foreground mb-8">
                Learn from others' experiences. These are the most common pitfalls that can derail important conversations.
              </p>

              <div className="space-y-4">
                {commonMistakes.map((item, idx) => (
                  <div key={idx} className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-red-400 font-bold text-sm">✗</span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-red-400 mb-2">{item.mistake}</h3>
                        <p className="text-sm text-muted-foreground mb-3">
                          <strong className="text-white">Why it's problematic:</strong> {item.why}
                        </p>
                        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                          <p className="text-sm text-muted-foreground">
                            <strong className="text-green-400">Instead:</strong> {item.instead}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Ongoing Communication Section */}
            <section id="ongoing" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                <Users className="w-7 h-7 text-primary" />
                Ongoing Communication Practices
              </h2>
              <p className="text-muted-foreground mb-8">
                Communication isn't a one-time conversation—it's an ongoing practice. Here are rituals that successful open relationship couples use.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-primary" />
                    Weekly Check-Ins
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Schedule a regular time (Sunday evenings work well) to connect without distractions.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Share highs and lows from the week</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Discuss upcoming dates or events</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Address any concerns before they grow</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Express appreciation and gratitude</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-primary" />
                    RADAR Framework
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    A popular structured check-in format for non-monogamous relationships:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li><strong className="text-primary">R</strong>eview: What happened since last check-in?</li>
                    <li><strong className="text-primary">A</strong>gree: What's on the calendar?</li>
                    <li><strong className="text-primary">D</strong>iscuss: Any issues to address?</li>
                    <li><strong className="text-primary">A</strong>dmire: What do you appreciate about each other?</li>
                    <li><strong className="text-primary">R</strong>equest: Any needs or asks?</li>
                  </ul>
                </div>

                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-primary" />
                    State of the Union
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Monthly or quarterly deep dives into your relationship's health:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Are our boundaries still working?</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>What's been great about our dynamic?</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>What could be better?</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Long-term relationship goals</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Flame className="w-5 h-5 text-primary" />
                    After-Event Debriefs
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Always process lifestyle experiences together:
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Wait until you're both rested</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Share what felt good</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Address any discomfort honestly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Plan adjustments for next time</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Resources Section */}
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
                <BookOpen className="w-7 h-7 text-primary" />
                Recommended Resources
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                  <h3 className="font-bold mb-4">Books</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong className="text-white">"The Ethical Slut"</strong> by Janet Hardy & Dossie Easton — The classic guide to consensual non-monogamy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong className="text-white">"More Than Two"</strong> by Franklin Veaux & Eve Rickert — Deep dive into polyamorous relationships</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong className="text-white">"Opening Up"</strong> by Tristan Taormino — Practical guide to creating and sustaining open relationships</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong className="text-white">"Polysecure"</strong> by Jessica Fern — Attachment theory applied to non-monogamy</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                  <h3 className="font-bold mb-4">SPICE Resources</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li>
                      <Link to="/quiz" className="flex items-center gap-2 hover:text-primary transition-colors">
                        <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                        <span><strong className="text-white">BDSM Compatibility Quiz</strong> — Discover your preferences</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/guide/safety" className="flex items-center gap-2 hover:text-primary transition-colors">
                        <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                        <span><strong className="text-white">Safety Guide</strong> — Pre-meet protocols and verification</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/guide/glossary" className="flex items-center gap-2 hover:text-primary transition-colors">
                        <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                        <span><strong className="text-white">Lifestyle Glossary</strong> — 200+ terms explained</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/lifestyle/jealousy-management" className="flex items-center gap-2 hover:text-primary transition-colors">
                        <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                        <span><strong className="text-white">Jealousy Management Guide</strong> — Deeper dive into compersion</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl p-8 md:p-12 border border-primary/30 text-center">
              <Sparkles className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Connect with Like-Minded Couples</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join SPICE to connect with thousands of couples and individuals who prioritize open, honest communication in their lifestyle exploration.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  to="/download" 
                  className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all gap-2"
                >
                  <Heart className="w-5 h-5" />
                  Download SPICE Free
                </Link>
                <Link 
                  to="/quiz" 
                  className="inline-flex items-center justify-center px-8 py-3 border border-primary text-primary hover:bg-primary/10 font-semibold rounded-full transition-all gap-2"
                >
                  Take Compatibility Quiz
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </main>

        <FooterSection />
      </div>
    </>
  );
};

export default RelationshipsCommunication;
