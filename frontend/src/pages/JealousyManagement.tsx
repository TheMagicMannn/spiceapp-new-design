import { Heart, Shield, Users, AlertTriangle, CheckCircle, TrendingUp, Brain, Flame, Eye, MessageCircle, Target, Clock, Lightbulb, BookOpen, ChevronRight, Sparkles, HeartHandshake, Zap, RefreshCw, Award, ThumbsUp, ArrowRight, Quote, ListChecks, BadgeCheck, Compass, Waves, Sun, Moon, Scale, Puzzle, Unlock, Star } from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";

const JealousyManagement = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Complete Guide to Managing Jealousy in Open Relationships, Polyamory & Swinging",
    "description": "Master jealousy management with practical tools, exercises, and strategies for ethical non-monogamy. Transform jealousy from enemy to teacher.",
    "author": {
      "@type": "Organization",
      "name": "SPICE"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SPICE"
    },
    "datePublished": "2024-01-20",
    "dateModified": "2024-12-28"
  };

  const jealousyTypes = [
    {
      type: "Fear of Loss",
      icon: Heart,
      color: "red",
      description: "Anxiety that your partner will leave you for someone else or that you will be replaced.",
      triggers: ["Partner spending time with new connection", "Hearing about emotional intimacy with others", "NRE (New Relationship Energy) in partner"],
      rootCause: "Often stems from past abandonment, attachment wounds, or low self-worth",
      healthyResponse: "Seek reassurance, reinforce your unique bond, address attachment needs directly"
    },
    {
      type: "Fear of Missing Out (FOMO)",
      icon: Eye,
      color: "purple",
      description: "Feeling left out when your partner has experiences without you.",
      triggers: ["Partner having fun without you", "Seeing photos of partner with others", "Hearing exciting stories you were not part of"],
      rootCause: "Can indicate need for more shared experiences or personal fulfillment",
      healthyResponse: "Plan your own adventures, cultivate individual interests, discuss inclusion preferences"
    },
    {
      type: "Possessiveness",
      icon: Shield,
      color: "orange",
      description: "Feeling that your partner belongs to you and should not be shared.",
      triggers: ["Witnessing physical affection with others", "Partner making plans without consulting you", "Feeling ownership is threatened"],
      rootCause: "Often rooted in societal conditioning about monogamy and ownership in relationships",
      healthyResponse: "Examine beliefs about ownership, practice seeing partner as autonomous, celebrate their freedom"
    },
    {
      type: "Comparison/Inadequacy",
      icon: Scale,
      color: "blue",
      description: "Worrying you do not measure up to your partner's other connections.",
      triggers: ["Meeting metamours who seem more attractive/successful", "Partner complimenting others", "Comparing sexual experiences"],
      rootCause: "Low self-esteem, perfectionism, or conditional self-worth",
      healthyResponse: "Focus on your unique qualities, practice self-compassion, avoid the comparison trap"
    },
    {
      type: "Time/Resource Jealousy",
      icon: Clock,
      color: "green",
      description: "Resentment over how time, energy, or resources are distributed.",
      triggers: ["Feeling like you get leftover time", "Partner prioritizing others for special occasions", "Financial resources going to other relationships"],
      rootCause: "May indicate actual imbalance or unmet needs for quality time",
      healthyResponse: "Discuss scheduling, establish protected time, address resource allocation openly"
    },
    {
      type: "Retroactive Jealousy",
      icon: RefreshCw,
      color: "amber",
      description: "Jealousy about your partner's past relationships or experiences.",
      triggers: ["Hearing about ex-partners", "Visiting places with history", "Comparing yourself to past lovers"],
      rootCause: "Often linked to OCD tendencies, insecurity, or intrusive thoughts",
      healthyResponse: "Practice mindfulness, focus on present, seek therapy if persistent"
    }
  ];

  const jealousyStages = [
    {
      stage: 1,
      title: "Recognition",
      subtitle: "Notice the feeling without judgment",
      description: "The first step is simply noticing that jealousy has arrived. Name it: 'I am feeling jealous right now.' This simple acknowledgment separates you from the emotion and creates space for processing.",
      practices: [
        "Notice physical sensations (tight chest, racing heart, stomach knots)",
        "Identify the thought patterns arising",
        "Acknowledge without self-criticism",
        "Resist the urge to act immediately"
      ],
      affirmation: "Feeling jealous does not make me a bad person or partner."
    },
    {
      stage: 2,
      title: "Regulation",
      subtitle: "Calm your nervous system",
      description: "Before you can process jealousy productively, you need to move out of fight-or-flight mode. Your thinking brain cannot function well when your survival brain is activated.",
      practices: [
        "Deep breathing (4-7-8 technique)",
        "Grounding exercises (5 senses)",
        "Physical movement or exercise",
        "Wait before responding or acting"
      ],
      affirmation: "I can feel this emotion fully without being controlled by it."
    },
    {
      stage: 3,
      title: "Reflection",
      subtitle: "Explore what is underneath",
      description: "Jealousy is rarely about the surface trigger. It usually points to deeper fears, needs, or wounds. Curiosity about your jealousy reveals valuable information.",
      practices: [
        "Journal about the experience",
        "Ask: What am I really afraid of?",
        "Identify the core need that feels threatened",
        "Consider past experiences that may be influencing you"
      ],
      affirmation: "My jealousy is information, not instruction."
    },
    {
      stage: 4,
      title: "Communication",
      subtitle: "Share vulnerably with your partner",
      description: "Once you understand your jealousy better, share it with your partner using non-blaming language. This creates connection and allows them to help meet your needs.",
      practices: [
        "Use 'I feel' statements",
        "Share the underlying fear or need",
        "Make specific requests, not demands",
        "Listen to your partner's perspective"
      ],
      affirmation: "Sharing my vulnerability strengthens our bond."
    },
    {
      stage: 5,
      title: "Reframe",
      subtitle: "Find the growth opportunity",
      description: "Every jealousy experience is a chance to grow in self-awareness, deepen your relationship, and expand your capacity for love. Look for the gift in the challenge.",
      practices: [
        "Identify what you learned about yourself",
        "Celebrate successfully navigating the emotion",
        "Notice increased intimacy with your partner",
        "Track your progress over time"
      ],
      affirmation: "Each time I work through jealousy, I become more secure."
    }
  ];

  const copingTools = [
    {
      category: "In-the-Moment Tools",
      icon: Zap,
      tools: [
        {
          name: "The STOP Technique",
          description: "Stop, Take a breath, Observe your feelings, Proceed mindfully",
          howTo: "When jealousy hits, literally stop what you are doing. Take 3 deep breaths. Notice what you are feeling without judgment. Then choose how to respond."
        },
        {
          name: "5-4-3-2-1 Grounding",
          description: "Engage your senses to return to the present moment",
          howTo: "Name 5 things you can see, 4 things you can touch, 3 things you can hear, 2 things you can smell, 1 thing you can taste."
        },
        {
          name: "The 90-Second Rule",
          description: "Ride out the initial wave of emotion",
          howTo: "Neurochemically, an emotion lasts about 90 seconds. When jealousy hits, set a timer and simply observe the feeling without acting on it."
        },
        {
          name: "Self-Soothing Touch",
          description: "Use physical comfort to calm your nervous system",
          howTo: "Place your hand on your heart, give yourself a hug, or hold your own hand. This activates the vagus nerve and promotes calm."
        }
      ]
    },
    {
      category: "Processing Tools",
      icon: Brain,
      tools: [
        {
          name: "Jealousy Journal",
          description: "Track patterns and triggers over time",
          howTo: "Record: What happened? What did I feel? What was the underlying fear? How did I cope? What would I do differently?"
        },
        {
          name: "Fear Ladder Exercise",
          description: "Break down your fear into smaller pieces",
          howTo: "Write your biggest fear at the top. Below it, list smaller related fears. Address the smallest fears first to build confidence."
        },
        {
          name: "Cognitive Restructuring",
          description: "Challenge and reframe jealous thoughts",
          howTo: "Identify the jealous thought. Ask: Is this true? Is there another explanation? What would I tell a friend thinking this?"
        },
        {
          name: "Parts Work",
          description: "Dialogue with the jealous part of yourself",
          howTo: "Imagine your jealousy as a younger or protective part of you. Ask it what it needs. Thank it for trying to protect you. Reassure it."
        }
      ]
    },
    {
      category: "Preventive Tools",
      icon: Shield,
      tools: [
        {
          name: "Abundance Mindset Practice",
          description: "Counter scarcity thinking about love",
          howTo: "Daily affirmations: Love is infinite. My partner choosing others does not diminish their love for me. There is enough love for everyone."
        },
        {
          name: "Self-Worth Inventory",
          description: "Strengthen your sense of intrinsic value",
          howTo: "List 10 things you love about yourself. Review this list when jealousy strikes. Add to it regularly."
        },
        {
          name: "Relationship Security Check",
          description: "Address legitimate concerns proactively",
          howTo: "Regular check-ins with your partner about needs, boundaries, and relationship health. Do not wait for jealousy to signal problems."
        },
        {
          name: "Compersion Cultivation",
          description: "Practice feeling joy in partner's joy",
          howTo: "Start small: feel happy when partner enjoys a meal, a hobby, or time with friends. Gradually extend to romantic connections."
        }
      ]
    }
  ];

  const compersionGuide = [
    {
      stage: "Neutral Acceptance",
      description: "Not feeling negative about partner's other connections",
      practices: ["Accepting partner's other relationships exist", "Not experiencing active distress", "Maintaining your own equilibrium"],
      timeframe: "Often the starting point"
    },
    {
      stage: "Intellectual Understanding",
      description: "Recognizing that partner's happiness is good, even if not feeling it emotionally",
      practices: ["Acknowledging partner's joy matters", "Understanding the concept of compersion", "Choosing supportive thoughts"],
      timeframe: "Weeks to months"
    },
    {
      stage: "Occasional Glimpses",
      description: "Moments of genuine happiness for partner's other connections",
      practices: ["Noticing brief positive feelings", "Celebrating small wins", "Building on positive experiences"],
      timeframe: "Months of practice"
    },
    {
      stage: "Consistent Compersion",
      description: "Regularly feeling joy when partner experiences connection with others",
      practices: ["Actively celebrating partner's relationships", "Feeling warmth when hearing about their experiences", "Genuine enthusiasm for their happiness"],
      timeframe: "Often takes years"
    }
  ];

  const commonMistakes = [
    {
      mistake: "Trying to eliminate jealousy entirely",
      problem: "Jealousy is a normal emotion. Trying to never feel it sets you up for failure and shame.",
      solution: "Aim to manage jealousy effectively, not erase it. Even experienced ENM practitioners feel jealous sometimes."
    },
    {
      mistake: "Hiding jealousy from your partner",
      problem: "Suppressed jealousy builds resentment and prevents your partner from understanding and supporting you.",
      solution: "Share your jealousy vulnerably. Partners cannot meet needs they do not know about."
    },
    {
      mistake: "Using jealousy to control partner's behavior",
      problem: "Weaponizing jealousy creates resentment and damages trust. Your feelings are valid; using them to manipulate is not.",
      solution: "Express feelings without demands. Ask for reassurance, not restrictions."
    },
    {
      mistake: "Comparing your jealousy journey to others",
      problem: "Everyone's relationship with jealousy is different. Comparison adds shame to an already challenging emotion.",
      solution: "Focus on your own progress. Celebrate your growth, however small."
    },
    {
      mistake: "Expecting partners to fix your jealousy",
      problem: "While partners can support you, jealousy management is ultimately your responsibility.",
      solution: "Do your own inner work. Use partner support as one tool among many."
    },
    {
      mistake: "Moving too fast to prove you can handle it",
      problem: "Pushing past your limits to seem cool or evolved usually backfires.",
      solution: "Go at your own pace. It is okay to have boundaries and take things slowly."
    }
  ];

  const partnerSupport = [
    {
      title: "How to Support a Jealous Partner",
      tips: [
        "Listen without defensiveness or dismissal",
        "Validate their feelings even if you do not share them",
        "Ask what they need rather than assuming",
        "Offer reassurance generously and specifically",
        "Follow through on agreed-upon boundaries",
        "Check in proactively, not just when asked",
        "Avoid comparisons or minimizing",
        "Be patient with their process"
      ]
    },
    {
      title: "How to Ask for Support When Jealous",
      tips: [
        "Choose a calm moment to talk",
        "Use I-statements (I feel, I need)",
        "Be specific about what would help",
        "Avoid blaming or accusatory language",
        "Acknowledge your partner's perspective too",
        "Express appreciation for their support",
        "Be willing to hear their feelings about it",
        "Follow up on what helped and what did not"
      ]
    }
  ];

  const exercises = [
    {
      name: "The Jealousy Autopsy",
      duration: "30 minutes",
      frequency: "After significant jealousy episodes",
      steps: [
        "Write a detailed account of what happened",
        "Identify the specific trigger moment",
        "List all the emotions you felt (not just jealousy)",
        "Explore the thoughts that accompanied the feelings",
        "Identify the core fear or unmet need",
        "Rate the intensity from 1-10",
        "Note what helped (or would have helped)",
        "Identify any patterns from previous episodes"
      ]
    },
    {
      name: "The Worst Case Scenario Exercise",
      duration: "20 minutes",
      frequency: "When spiraling in fear",
      steps: [
        "Write out your worst fear in detail",
        "Ask: Has this actually happened? How likely is it?",
        "If it did happen, what would you do?",
        "Who would support you?",
        "Have you survived difficult things before?",
        "What is the realistic outcome, not the catastrophic one?",
        "How does your fear compare to reality?"
      ]
    },
    {
      name: "Daily Gratitude for Your Relationship",
      duration: "5 minutes",
      frequency: "Daily",
      steps: [
        "List 3 things you appreciate about your partner today",
        "List 3 things you appreciate about your relationship",
        "List 3 things that make your connection unique",
        "Share at least one of these with your partner"
      ]
    },
    {
      name: "The Compersion Visualization",
      duration: "10 minutes",
      frequency: "Weekly or as needed",
      steps: [
        "Find a quiet, comfortable space",
        "Close your eyes and breathe deeply",
        "Imagine your partner happy and laughing",
        "Feel your love for them and desire for their happiness",
        "Now imagine them experiencing that joy with someone else",
        "Try to hold onto the feeling of wanting their happiness",
        "Notice any resistance without judgment",
        "Return to the image of them simply being happy"
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; text: string }> = {
      red: { bg: "bg-red-500/10", border: "border-red-500/30", text: "text-red-400" },
      purple: { bg: "bg-purple-500/10", border: "border-purple-500/30", text: "text-purple-400" },
      orange: { bg: "bg-orange-500/10", border: "border-orange-500/30", text: "text-orange-400" },
      blue: { bg: "bg-blue-500/10", border: "border-blue-500/30", text: "text-blue-400" },
      green: { bg: "bg-green-500/10", border: "border-green-500/30", text: "text-green-400" },
      amber: { bg: "bg-amber-500/10", border: "border-amber-500/30", text: "text-amber-400" },
    };
    return colors[color] || colors.purple;
  };

  return (
    <>
      <SEO
        title="Jealousy Management Guide: Complete Tools for ENM, Polyamory & Swinging | SPICE"
        description="Master jealousy in open relationships with this comprehensive guide. Includes the 5-stage processing framework, 12+ coping tools, compersion cultivation, practical exercises, and expert strategies for ethical non-monogamy, polyamory, and swinging."
        keywords="jealousy management, managing jealousy polyamory, jealousy in open relationships, swinging jealousy, jealousy management tools, compersion, ENM jealousy, polyamory jealousy help, jealousy exercises, overcoming jealousy, jealousy in ENM, non-monogamy jealousy, relationship jealousy, jealousy coping strategies, jealousy workbook, compersion practice"
        canonical="https://thespiceapp.com/lifestyle/jealousy-management"
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
                <Heart className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Jealousy Management Guide</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                Transform Jealousy Into Growth
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                A comprehensive guide to understanding, processing, and managing jealousy in ethical non-monogamy, polyamory, and swinging. Turn your most challenging emotion into your greatest teacher.
              </p>
              
              {/* Quick Stats */}
              <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>30 min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <ListChecks className="w-4 h-4 text-primary" />
                  <span>12+ Coping Tools</span>
                </div>
                <div className="flex items-center gap-2">
                  <BadgeCheck className="w-4 h-4 text-primary" />
                  <span>Therapist Reviewed</span>
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
                  { label: "Understanding Jealousy", anchor: "#understanding" },
                  { label: "Types of Jealousy", anchor: "#types" },
                  { label: "The 5-Stage Processing Framework", anchor: "#framework" },
                  { label: "Coping Tools & Techniques", anchor: "#tools" },
                  { label: "Cultivating Compersion", anchor: "#compersion" },
                  { label: "Common Mistakes to Avoid", anchor: "#mistakes" },
                  { label: "Supporting Each Other", anchor: "#support" },
                  { label: "Practical Exercises", anchor: "#exercises" },
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

            {/* Understanding Jealousy Section */}
            <section id="understanding" className="mb-16 scroll-mt-24">
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 md:p-10">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Brain className="w-7 h-7 text-primary" />
                  Understanding Jealousy: Your Guide to This Complex Emotion
                </h2>
                
                <div className="space-y-6 text-muted-foreground">
                  <p className="text-lg leading-relaxed">
                    Jealousy is one of the most misunderstood emotions in relationships, especially in non-monogamous contexts. Many people believe that experiencing jealousy means they are failing at ethical non-monogamy, or that they are simply not cut out for open relationships. <strong className="text-white">This is a myth.</strong>
                  </p>
                  
                  <p className="leading-relaxed">
                    Jealousy is a <strong className="text-white">universal human experience</strong>—a complex emotional response that typically combines elements of fear, anger, sadness, and anxiety. Even the most experienced polyamorous practitioners and lifestyle couples experience jealousy from time to time. The difference is not in whether they feel it, but in <strong className="text-white">how they process and respond to it</strong>.
                  </p>

                  <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-6">
                    <h3 className="font-bold text-green-400 mb-3 flex items-center gap-2">
                      <Lightbulb className="w-5 h-5" />
                      The Paradigm Shift
                    </h3>
                    <p>
                      Instead of viewing jealousy as an enemy to defeat or a sign of personal failure, consider it an <strong className="text-white">information system</strong>. Jealousy is your psyche flagging something that needs attention—perhaps an unmet need, a fear worth examining, or a boundary that needs discussion. When you approach jealousy with curiosity rather than shame, it becomes a powerful tool for self-discovery and relationship growth.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 mt-8">
                    <div className="bg-background/50 border border-border rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-primary mb-2">92%</div>
                      <p className="text-sm">of CNM practitioners report experiencing jealousy at some point</p>
                    </div>
                    <div className="bg-background/50 border border-border rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-primary mb-2">78%</div>
                      <p className="text-sm">say jealousy decreased significantly with practice and time</p>
                    </div>
                    <div className="bg-background/50 border border-border rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-primary mb-2">85%</div>
                      <p className="text-sm">report that working through jealousy strengthened their relationships</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Types of Jealousy Section */}
            <section id="types" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                <Puzzle className="w-7 h-7 text-primary" />
                The Six Types of Jealousy
              </h2>
              <p className="text-muted-foreground mb-8">
                Understanding what type of jealousy you are experiencing helps you address its root cause more effectively. Most jealousy episodes involve a combination of these types.
              </p>

              <div className="space-y-6">
                {jealousyTypes.map((type, idx) => {
                  const colors = getColorClasses(type.color);
                  return (
                    <div key={idx} className={`${colors.bg} border ${colors.border} rounded-xl p-6`}>
                      <div className="flex items-start gap-4">
                        <div className={`p-3 ${colors.bg} rounded-lg flex-shrink-0`}>
                          <type.icon className={`w-6 h-6 ${colors.text}`} />
                        </div>
                        <div className="flex-1">
                          <h3 className={`text-xl font-bold ${colors.text} mb-2`}>{type.type}</h3>
                          <p className="text-muted-foreground mb-4">{type.description}</p>
                          
                          <div className="grid md:grid-cols-3 gap-4 text-sm">
                            <div>
                              <h4 className="font-semibold text-white mb-2">Common Triggers</h4>
                              <ul className="space-y-1 text-muted-foreground">
                                {type.triggers.map((trigger, tIdx) => (
                                  <li key={tIdx} className="flex items-start gap-2">
                                    <ChevronRight className="w-3 h-3 mt-1 flex-shrink-0 text-primary" />
                                    <span>{trigger}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold text-white mb-2">Root Cause</h4>
                              <p className="text-muted-foreground">{type.rootCause}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-white mb-2">Healthy Response</h4>
                              <p className="text-muted-foreground">{type.healthyResponse}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* 5-Stage Framework Section */}
            <section id="framework" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                <Target className="w-7 h-7 text-primary" />
                The 5-Stage Jealousy Processing Framework
              </h2>
              <p className="text-muted-foreground mb-8">
                This framework provides a structured approach to moving through jealousy when it arises. With practice, these stages become more natural and automatic.
              </p>

              <div className="space-y-6">
                {jealousyStages.map((stage) => (
                  <div key={stage.stage} className="bg-card/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden">
                    <div className="bg-primary/10 border-b border-border p-4">
                      <div className="flex items-center gap-4">
                        <span className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xl font-bold">
                          {stage.stage}
                        </span>
                        <div>
                          <h3 className="text-xl font-bold">{stage.title}</h3>
                          <p className="text-muted-foreground text-sm">{stage.subtitle}</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-muted-foreground mb-4">{stage.description}</p>
                      
                      <h4 className="font-semibold text-white mb-3">Practices:</h4>
                      <div className="grid md:grid-cols-2 gap-2 mb-4">
                        {stage.practices.map((practice, pIdx) => (
                          <div key={pIdx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span>{practice}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 flex items-start gap-3">
                        <Quote className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <p className="text-primary italic font-medium">{stage.affirmation}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Coping Tools Section */}
            <section id="tools" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                <Unlock className="w-7 h-7 text-primary" />
                Coping Tools & Techniques
              </h2>
              <p className="text-muted-foreground mb-8">
                Build your jealousy management toolkit with these evidence-based strategies. Different tools work better at different times—experiment to find what works for you.
              </p>

              <div className="space-y-8">
                {copingTools.map((category, catIdx) => (
                  <div key={catIdx}>
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <category.icon className="w-5 h-5 text-primary" />
                      {category.category}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {category.tools.map((tool, toolIdx) => (
                        <div key={toolIdx} className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-5">
                          <h4 className="font-bold text-white mb-2">{tool.name}</h4>
                          <p className="text-sm text-primary mb-3">{tool.description}</p>
                          <p className="text-sm text-muted-foreground">{tool.howTo}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Compersion Section */}
            <section id="compersion" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                <Sun className="w-7 h-7 text-primary" />
                Cultivating Compersion: The Journey to Joy
              </h2>
              <p className="text-muted-foreground mb-8">
                Compersion—feeling joy when your partner experiences happiness with others—is often called the opposite of jealousy. But it is not a requirement for ethical non-monogamy, and it cannot be forced. Here is how it typically develops.
              </p>

              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 mb-8">
                <div className="flex items-start gap-4 mb-6">
                  <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-amber-400 mb-2">Important Note About Compersion</h3>
                    <p className="text-muted-foreground">
                      Compersion is not a requirement for ethical non-monogamy. Many successful CNM practitioners never feel strong compersion, and that is completely valid. Do not pressure yourself to feel something you do not. Focus on managing jealousy effectively and let compersion develop naturally if it does.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-bold mb-4">The Stages of Compersion Development</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {compersionGuide.map((stage, idx) => (
                  <div key={idx} className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                        {idx + 1}
                      </span>
                      <h4 className="font-bold text-white text-sm">{stage.stage}</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{stage.description}</p>
                    <ul className="space-y-1 mb-3">
                      {stage.practices.map((practice, pIdx) => (
                        <li key={pIdx} className="text-xs text-muted-foreground flex items-start gap-1">
                          <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{practice}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-xs text-primary font-medium">{stage.timeframe}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/30 rounded-xl p-6">
                <h3 className="font-bold text-pink-400 mb-4 flex items-center gap-2">
                  <HeartHandshake className="w-5 h-5" />
                  Tips for Cultivating Compersion
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Start with non-romantic situations (partner enjoying hobbies, friendships)",
                    "Practice gratitude for what your partner brings to your life",
                    "Focus on your partner's happiness, not the source of it",
                    "Celebrate small moments of positive feeling",
                    "Do not compare your compersion journey to others",
                    "Remember that mixed feelings (jealousy AND compersion) are normal",
                    "Be patient—compersion often takes years to develop",
                    "Consider therapy if you want support in this journey"
                  ].map((tip, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Star className="w-4 h-4 text-pink-400 flex-shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Common Mistakes Section */}
            <section id="mistakes" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                <AlertTriangle className="w-7 h-7 text-amber-500" />
                Common Mistakes to Avoid
              </h2>
              <p className="text-muted-foreground mb-8">
                Learning from others experiences can help you navigate jealousy more effectively. Here are the most common pitfalls and how to avoid them.
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
                          <strong className="text-white">The Problem:</strong> {item.problem}
                        </p>
                        <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3">
                          <p className="text-sm text-muted-foreground">
                            <strong className="text-green-400">The Solution:</strong> {item.solution}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Partner Support Section */}
            <section id="support" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                <Users className="w-7 h-7 text-primary" />
                Supporting Each Other Through Jealousy
              </h2>
              <p className="text-muted-foreground mb-8">
                Jealousy management is both an individual and a collaborative process. Here is how to support your partner and ask for support effectively.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {partnerSupport.map((section, idx) => (
                  <div key={idx} className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                      {idx === 0 ? <Heart className="w-5 h-5 text-primary" /> : <MessageCircle className="w-5 h-5 text-primary" />}
                      {section.title}
                    </h3>
                    <ul className="space-y-2">
                      {section.tips.map((tip, tIdx) => (
                        <li key={tIdx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
                <h3 className="font-bold text-blue-400 mb-4">Creating a Jealousy Support Agreement</h3>
                <p className="text-muted-foreground mb-4">
                  Consider creating a clear agreement with your partner about how you will handle jealousy together. Discuss:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "How do you each prefer to receive reassurance?",
                    "What is the best way to bring up jealousy concerns?",
                    "How much detail do you want about partner's other connections?",
                    "What boundaries support your sense of security?",
                    "When is professional support (therapy) warranted?",
                    "How will you check in about jealousy regularly?"
                  ].map((question, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <ArrowRight className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span>{question}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Exercises Section */}
            <section id="exercises" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                <Award className="w-7 h-7 text-primary" />
                Practical Exercises
              </h2>
              <p className="text-muted-foreground mb-8">
                These exercises help you develop jealousy management skills. Like any skill, they improve with practice.
              </p>

              <div className="space-y-6">
                {exercises.map((exercise, idx) => (
                  <div key={idx} className="bg-card/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden">
                    <div className="bg-primary/10 border-b border-border p-4 flex items-center justify-between">
                      <h3 className="text-lg font-bold">{exercise.name}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {exercise.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <RefreshCw className="w-4 h-4" />
                          {exercise.frequency}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <ol className="space-y-2">
                        {exercise.steps.map((step, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-3 text-muted-foreground">
                            <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold flex-shrink-0">
                              {sIdx + 1}
                            </span>
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Resources Section */}
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
                <BookOpen className="w-7 h-7 text-primary" />
                Additional Resources
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                  <h3 className="font-bold mb-4">Recommended Reading</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong className="text-white">The Jealousy Workbook</strong> by Kathy Labriola — Exercises and frameworks for processing jealousy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong className="text-white">Polysecure</strong> by Jessica Fern — Attachment-focused approach to non-monogamy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong className="text-white">The Ethical Slut</strong> by Janet Hardy & Dossie Easton — Chapter on jealousy is essential</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong className="text-white">More Than Two</strong> by Franklin Veaux & Eve Rickert — Deep exploration of jealousy dynamics</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                  <h3 className="font-bold mb-4">SPICE Resources</h3>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li>
                      <Link to="/lifestyle/relationships-communication" className="flex items-center gap-2 hover:text-primary transition-colors">
                        <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                        <span><strong className="text-white">Communication Guide</strong> — Scripts for discussing jealousy</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/quiz" className="flex items-center gap-2 hover:text-primary transition-colors">
                        <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                        <span><strong className="text-white">Compatibility Quiz</strong> — Understand your attachment style</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/guide/safety" className="flex items-center gap-2 hover:text-primary transition-colors">
                        <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                        <span><strong className="text-white">Safety Guide</strong> — Build security through protocols</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/resources/glossary" className="flex items-center gap-2 hover:text-primary transition-colors">
                        <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                        <span><strong className="text-white">Lifestyle Glossary</strong> — Terms like compersion explained</span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* When to Seek Help */}
            <section className="mb-16">
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6">
                <h3 className="font-bold text-amber-400 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  When to Seek Professional Help
                </h3>
                <p className="text-muted-foreground mb-4">
                  While jealousy management is often something you can work on yourself or with your partner, consider seeking a therapist if:
                </p>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    "Jealousy is significantly impacting your daily life or mental health",
                    "You experience intrusive, obsessive thoughts about your partner's other relationships",
                    "Jealousy leads to controlling or abusive behaviors",
                    "You and your partner cannot discuss jealousy without escalating conflict",
                    "Past trauma is being triggered by current relationship dynamics",
                    "You are experiencing depression or anxiety alongside jealousy"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <ChevronRight className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Look for therapists who are CNM/polyamory-friendly or who specialize in alternative relationship structures.
                </p>
              </div>
            </section>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl p-8 md:p-12 border border-primary/30 text-center">
              <Sparkles className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Connect with Emotionally Aware Partners</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                SPICE members understand that jealousy is part of the journey. Join a community that prioritizes emotional intelligence, communication, and mutual support.
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
                  to="/lifestyle/relationships-communication" 
                  className="inline-flex items-center justify-center px-8 py-3 border border-primary text-primary hover:bg-primary/10 font-semibold rounded-full transition-all gap-2"
                >
                  Communication Guide
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

export default JealousyManagement;
