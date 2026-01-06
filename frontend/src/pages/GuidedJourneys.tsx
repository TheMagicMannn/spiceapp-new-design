import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";
import { 
  Users, Heart, Flame, Sparkles, CheckCircle, ArrowRight, Target, BookOpen, 
  Brain, Shield, MessageCircle, Lock, ChevronDown, ChevronUp, Info, 
  Clock, Star, Award, HelpCircle, Lightbulb, AlertCircle, FileText,
  Video, ExternalLink, CheckSquare, Square, Trophy
} from "lucide-react";

// Glossary definitions for tooltips
const glossary: { [key: string]: string } = {
  "swinging": "A lifestyle where committed couples engage in sexual activities with other couples or singles, typically with full knowledge and consent.",
  "soft swap": "Sexual play that doesn't include penetrative intercourse - typically includes kissing, touching, and oral sex.",
  "full swap": "Complete sexual activity including penetrative intercourse with other partners.",
  "unicorn": "A single bisexual woman who joins a couple (often hard to find, hence the mythical reference).",
  "bull": "A single man who engages with a couple, particularly in hotwifing scenarios.",
  "BDSM": "Bondage & Discipline, Dominance & Submission, Sadism & Masochism - consensual power exchange and sensation play.",
  "safeword": "A pre-agreed word that immediately stops all activity when spoken, ensuring safety and consent.",
  "aftercare": "The time after a scene or sexual activity dedicated to emotional and physical comfort and reconnection.",
  "scene": "A planned BDSM play session with negotiated activities and boundaries.",
  "dominant": "The partner who takes control in a power exchange dynamic (also called Dom/Domme).",
  "submissive": "The partner who consensually gives up control in a power exchange dynamic (also called sub).",
  "switch": "Someone who enjoys both dominant and submissive roles at different times.",
  "ENM": "Ethical Non-Monogamy - consensual non-exclusive relationships with honesty and communication.",
  "polyamory": "Having multiple romantic relationships simultaneously with the knowledge and consent of all involved.",
  "metamour": "Your partner's other partner (not a direct relationship with you).",
  "compersion": "Feeling joy from your partner's happiness with another person - the opposite of jealousy.",
  "hotwifing": "A relationship dynamic where the wife has sexual experiences with other men, typically with the husband's encouragement.",
  "hierarchical polyamory": "A polyamory structure with primary/secondary relationship rankings.",
  "relationship anarchy": "Rejecting traditional relationship hierarchies and rules, treating each connection uniquely.",
  "munch": "A casual social gathering for people in alternative lifestyles, typically in a vanilla (non-sexual) setting like a restaurant.",
  "lifestyle": "General term for alternative relationship structures including swinging, BDSM, ENM, etc.",
  "vanilla": "Traditional monogamous relationships or non-kinky sexual activities.",
  "fetlife": "A social networking site for the BDSM and fetish community.",
  "negotiation": "The process of discussing boundaries, desires, and limits before engaging in play or new experiences.",
  "consent": "Freely given, enthusiastic agreement to participate in activities. Can be withdrawn at any time.",
  "boundaries": "Personal limits and rules about what you're comfortable with in relationships and activities.",
  "NRE": "New Relationship Energy - the exciting, intoxicating feeling at the start of a new relationship.",
  "veto power": "The ability for one partner to end another partner's relationship (controversial in polyamory)."
};

const GuidedJourneys = () => {
  const [selectedLifestyle, setSelectedLifestyle] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<"couples" | "singles" | null>(null);
  const [expandedPhases, setExpandedPhases] = useState<number[]>([0]); // First phase expanded by default
  const [completedSteps, setCompletedSteps] = useState<{ [key: string]: boolean }>({});
  const [showGlossary, setShowGlossary] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  // Load progress from localStorage
  useEffect(() => {
    if (selectedLifestyle && selectedType) {
      const key = `journey-progress-${selectedLifestyle}-${selectedType}`;
      const saved = localStorage.getItem(key);
      if (saved) {
        try {
          setCompletedSteps(JSON.parse(saved));
        } catch (e) {
          console.error("Failed to load progress:", e);
        }
      }
    }
  }, [selectedLifestyle, selectedType]);

  // Save progress to localStorage
  useEffect(() => {
    if (selectedLifestyle && selectedType && Object.keys(completedSteps).length > 0) {
      const key = `journey-progress-${selectedLifestyle}-${selectedType}`;
      localStorage.setItem(key, JSON.stringify(completedSteps));
    }
  }, [completedSteps, selectedLifestyle, selectedType]);

  const togglePhase = (index: number) => {
    setExpandedPhases(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const toggleStep = (stepId: string) => {
    setCompletedSteps(prev => ({
      ...prev,
      [stepId]: !prev[stepId]
    }));
  };

  const resetProgress = () => {
    if (window.confirm("Are you sure you want to reset your progress? This cannot be undone.")) {
      setCompletedSteps({});
      if (selectedLifestyle && selectedType) {
        const key = `journey-progress-${selectedLifestyle}-${selectedType}`;
        localStorage.removeItem(key);
      }
    }
  };

  const getProgressPercentage = (journey: any) => {
    if (!journey || !journey.phases) return 0;
    const totalSteps = journey.phases.reduce((acc: number, phase: any) => acc + phase.steps.length, 0);
    const completed = Object.values(completedSteps).filter(Boolean).length;
    return totalSteps > 0 ? Math.round((completed / totalSteps) * 100) : 0;
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "SPICE Guided Journeys",
    "description": "Comprehensive guided learning paths for couples and singles exploring swinging, BDSM, ENM, polyamory, and hotwifing lifestyles.",
    "url": "https://thespiceapp.com/academy/journeys"
  };

  const lifestyles = [
    {
      id: "swinging",
      name: "Swinging",
      icon: Users,
      color: "from-pink-500 to-red-500",
      bgColor: "bg-pink-500/10",
      borderColor: "border-pink-500/30",
      description: "Recreational sexual experiences with other couples",
      forCouples: true,
      forSingles: true
    },
    {
      id: "bdsm",
      name: "BDSM & Kink",
      icon: Flame,
      color: "from-red-500 to-orange-500",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/30",
      description: "Power exchange, sensation play, and kink exploration",
      forCouples: true,
      forSingles: true
    },
    {
      id: "hotwifing",
      name: "Hotwifing",
      icon: Heart,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
      description: "Wife's pleasure with other men, husband's involvement",
      forCouples: true,
      forSingles: false
    },
    {
      id: "enm",
      name: "ENM & Polyamory",
      icon: Sparkles,
      color: "from-blue-500 to-purple-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      description: "Multiple romantic or sexual relationships",
      forCouples: true,
      forSingles: true
    }
  ];

  const couplesJourneys = {
    swinging: {
      phases: [
        {
          title: "Phase 1: Discovery & Discussion",
          duration: "2-4 weeks",
          difficulty: "beginner",
          whatToExpect: "This phase is all about opening conversations and learning together. You'll explore if swinging is right for you without any pressure to act. Many couples spend weeks or months here - that's perfectly normal!",
          commonQuestions: [
            { q: "Is it normal to feel nervous?", a: "Absolutely! Most couples feel a mix of excitement and nervousness. Open communication about these feelings is key." },
            { q: "What if we disagree?", a: "Disagreement is common. Use this time to understand each other's perspectives without judgment. No one should feel pressured." }
          ],
          steps: [
            {
              title: "Initial Conversation",
              description: "Bring up swinging gently. Share articles, discuss fantasies, gauge interest without pressure.",
              timeEstimate: "Multiple conversations over 1-2 weeks",
              difficulty: "easy",
              resources: [
                { 
                  title: "Swinging 101: Beginner's Guide", 
                  path: "/blog/swinging-101-beginners-guide",
                  type: "article",
                  description: "Complete introduction to what swinging is, common myths, and what to expect"
                },
                { 
                  title: "How to Talk to Your Partner", 
                  path: "/guide/how-to",
                  type: "guide",
                  description: "Communication strategies for bringing up alternative lifestyles"
                },
                { 
                  title: "Consent & Communication Basics", 
                  path: "/start/consent-basics",
                  type: "guide",
                  description: "Foundation of healthy communication in any lifestyle exploration"
                }
              ],
              action: "Have 3-5 open conversations about curiosity and desires",
              tips: [
                "Choose a relaxed time when you're both in a good mood",
                "Frame it as curiosity and fantasy exploration, not a demand",
                "Listen more than you speak",
                "Give your partner time to process - don't expect immediate answers"
              ]
            },
            {
              title: "Take the Quiz Together",
              description: "Complete the Swinging Readiness Quiz to assess your relationship foundation.",
              timeEstimate: "30-45 minutes",
              difficulty: "easy",
              resources: [
                { 
                  title: "Swinging Readiness Quiz", 
                  path: "/quiz/swinging",
                  type: "quiz",
                  description: "Interactive quiz to assess your readiness and identify areas to work on"
                },
                { 
                  title: "Understanding Your Results", 
                  path: "/start/beginner-faq#swinging",
                  type: "faq",
                  description: "FAQ section explaining quiz results and next steps"
                }
              ],
              action: "Discuss quiz results and identify areas to strengthen",
              tips: [
                "Answer honestly - this is for your benefit, not to impress anyone",
                "Don't panic if your scores differ - use it as a conversation starter",
                "Focus on strengths first, then gently discuss areas for improvement"
              ]
            },
            {
              title: "Educational Deep Dive",
              description: "Read books, watch documentaries, join online communities to learn about the lifestyle.",
              timeEstimate: "1-2 weeks of reading/watching",
              difficulty: "easy",
              resources: [
                { 
                  title: "Complete Swingers Guide", 
                  path: "/lifestyle/swingers-guide",
                  type: "guide",
                  description: "Comprehensive guide covering all aspects of the swinging lifestyle"
                },
                { 
                  title: "Common Mistakes to Avoid", 
                  path: "/blog/swinging-mistakes-avoid",
                  type: "article",
                  description: "Learn from others' experiences and avoid common pitfalls"
                },
                { 
                  title: "Real Couples' Stories", 
                  path: "/blog/swinging-strengthened-marriage",
                  type: "article",
                  description: "How other couples navigated their swinging journey"
                }
              ],
              action: "Read 2-3 books or comprehensive guides together",
              tips: [
                "Read the same material and discuss each chapter",
                "Take notes on what resonates and what concerns you",
                "Join online forums (anonymously) to see real discussions",
                "Remember: education doesn't mean commitment"
              ]
            }
          ]
        },
        {
          title: "Phase 2: Boundary Setting & Planning",
          duration: "2-3 weeks",
          steps: [
            {
              title: "Create Your Boundaries Agreement",
              description: "Discuss and write down hard limits, soft limits, and what you're comfortable exploring.",
              resources: [
                { title: "Consent Basics", path: "/start/consent-basics" }
              ],
              action: "Create a written yes/no/maybe list together"
            },
            {
              title: "Establish Communication Protocols",
              description: "Decide on safe words, check-in frequency, and how you'll communicate during experiences.",
              resources: [
                { title: "How Swinging Strengthened Our Marriage", path: "/blog/swinging-strengthened-marriage" }
              ],
              action: "Choose safe words and practice using them in vanilla scenarios"
            },
            {
              title: "Profile Creation",
              description: "Join SPICE and create an honest, clear profile together that reflects your interests and boundaries.",
              resources: [
                { title: "Join SPICE", path: "/download" },
                { title: "Finding Couples", path: "/blog/swinging-finding-couples" }
              ],
              action: "Create profile and browse without messaging yet"
            }
          ]
        },
        {
          title: "Phase 3: Social Exploration",
          duration: "4-8 weeks",
          steps: [
            {
              title: "Attend a Munch or Meet-and-Greet",
              description: "Go to a non-sexual social event for lifestyle people. Just observe and socialize.",
              resources: [
                { title: "Lifestyle Etiquette", path: "/start/etiquette" }
              ],
              action: "Attend 2-3 social events with no pressure to play"
            },
            {
              title: "Virtual Connections",
              description: "Start chatting with other couples online. Video verify and have drinks virtually.",
              resources: [
                { title: "Swinging Etiquette", path: "/blog/swinging-etiquette-rules" }
              ],
              action: "Connect with 3-5 couples, have virtual drinks with 2"
            },
            {
              title: "Visit a Club (Observation Only)",
              description: "Tour a lifestyle club together with agreement to only watch and stay together.",
              resources: [
                { title: "Swingers Guide - Clubs", path: "/lifestyle/swingers-guide#clubs" }
              ],
              action: "Visit a club on a quiet night, no play pressure"
            }
          ]
        },
        {
          title: "Phase 4: First Experiences",
          duration: "Ongoing",
          steps: [
            {
              title: "First Date with Another Couple",
              description: "Meet for drinks/dinner in public. If chemistry exists, decide together on next steps.",
              resources: [
                { title: "Soft vs Full Swap", path: "/blog/swinging-soft-full-swap" }
              ],
              action: "Plan first date, meet in public, go slow"
            },
            {
              title: "First Play Experience",
              description: "Start with soft swap (no intercourse) or same-room play. Use safe words freely.",
              resources: [
                { title: "Managing Jealousy", path: "/blog/swinging-jealousy-tools" }
              ],
              action: "Have first experience, use safe words if needed"
            },
            {
              title: "Debrief & Adjust",
              description: "After every experience, discuss what felt good and what didn't. Adjust boundaries as needed.",
              resources: [
                { title: "Health & Safety", path: "/blog/swinging-health-safety" }
              ],
              action: "Have thorough debrief within 24 hours of each experience"
            }
          ]
        }
      ]
    },
    bdsm: {
      phases: [
        {
          title: "Phase 1: Self-Discovery & Education",
          duration: "4-6 weeks",
          steps: [
            {
              title: "Individual Exploration",
              description: "Each partner explores their own interests, fantasies, and curiosities about BDSM independently.",
              resources: [
                { title: "BDSM Quiz", path: "/quiz/bdsm" },
                { title: "BDSM for Beginners", path: "/blog/bdsm-beginners-guide" }
              ],
              action: "Take quiz separately, read beginner resources"
            },
            {
              title: "Share & Discuss",
              description: "Share quiz results and interests with each other. Discuss without judgment or pressure.",
              resources: [
                { title: "Complete BDSM Guide", path: "/lifestyle/bdsm-guide" }
              ],
              action: "Have 3-5 open conversations about BDSM interests"
            },
            {
              title: "Educational Foundation",
              description: "Read books together, watch educational videos, learn about safety and consent.",
              resources: [
                { title: "BDSM Safety", path: "/blog/bdsm-safety-checklist" }
              ],
              action: "Read 2 books from recommended list together"
            }
          ]
        },
        {
          title: "Phase 2: Negotiation & Preparation",
          duration: "2-3 weeks",
          steps: [
            {
              title: "Create a BDSM Checklist",
              description: "Go through activities marking yes/no/maybe for each. Compare lists to find overlaps.",
              resources: [
                { title: "Negotiation Checklist", path: "/blog/bdsm-negotiation-checklist" }
              ],
              action: "Complete and compare detailed BDSM checklists"
            },
            {
              title: "Establish Safewords & Protocols",
              description: "Choose safewords (red/yellow/green), discuss check-in frequency, and emergency protocols.",
              resources: [
                { title: "Consent & Negotiation", path: "/lifestyle/bdsm-guide#consent" }
              ],
              action: "Practice using safewords in vanilla scenarios"
            },
            {
              title: "Gather Basic Supplies",
              description: "Start with beginner-friendly items: silk scarves, blindfolds, massage oils, safety scissors.",
              resources: [
                { title: "Kink on a Budget", path: "/blog/kink-on-budget" }
              ],
              action: "Purchase or DIY 5-7 beginner items"
            }
          ]
        },
        {
          title: "Phase 3: First Experiences",
          duration: "4-8 weeks",
          steps: [
            {
              title: "Low-Risk Activities First",
              description: "Start with sensation play: blindfolds, ice, feathers, light spanking. Build confidence gradually.",
              resources: [
                { title: "Beginner-Friendly Kinks", path: "/blog/beginner-friendly-kinks" }
              ],
              action: "Try 3-5 beginner activities, one per week"
            },
            {
              title: "Practice Aftercare",
              description: "After each scene, spend time on physical and emotional aftercare for both partners.",
              resources: [
                { title: "Aftercare Guide", path: "/blog/bdsm-aftercare-guide" }
              ],
              action: "Establish aftercare routines that work for you both"
            },
            {
              title: "Debrief & Adjust",
              description: "Discuss what worked, what didn't, and how you both felt. Adjust boundaries and intensity.",
              resources: [
                { title: "Communication Skills", path: "/lifestyle/bdsm-guide#communication" }
              ],
              action: "Journal about each experience, discuss together"
            }
          ]
        },
        {
          title: "Phase 4: Community & Advancement",
          duration: "Ongoing",
          steps: [
            {
              title: "Attend Workshops",
              description: "Take classes on rope bondage, impact play, or other interests. Learn proper techniques.",
              resources: [
                { title: "Finding Kink Community", path: "/blog/finding-kink-community" }
              ],
              action: "Attend 2-3 workshops together"
            },
            {
              title: "Join the Community",
              description: "Attend munches, join FetLife groups, connect with experienced practitioners.",
              resources: [
                { title: "The Kink Community", path: "/lifestyle/bdsm-guide#community" }
              ],
              action: "Attend first munch, make 2-3 community connections"
            },
            {
              title: "Explore Advanced Interests",
              description: "As skills develop, explore more advanced activities with proper training and safety.",
              resources: [
                { title: "BDSM Relationships", path: "/lifestyle/bdsm-guide#relationships" }
              ],
              action: "Progress to new activities only after mastering basics"
            }
          ]
        }
      ]
    },
    hotwifing: {
      phases: [
        {
          title: "Phase 1: Exploration & Communication",
          duration: "4-8 weeks",
          steps: [
            {
              title: "Husband Brings Up Interest",
              description: "Frame as celebration of wife's desirability, not rejection. Share articles and resources.",
              resources: [
                { title: "Hotwifing Guide", path: "/lifestyle/hotwifing-guide" }
              ],
              action: "Have initial conversation, give wife time to process"
            },
            {
              title: "Wife's Reflection & Response",
              description: "Wife considers feelings about the idea. Explores fears, excitement, boundaries independently.",
              resources: [
                { title: "Hotwifing Quiz", path: "/quiz/hotwifing" }
              ],
              action: "Wife takes quiz, journals about feelings and concerns"
            },
            {
              title: "Detailed Discussions",
              description: "Multiple conversations about motivations, fears, boundaries, and what this means for the relationship.",
              resources: [
                { title: "Hotwifing for Couples FAQ", path: "/start/beginner-faq#hotwifing" }
              ],
              action: "Have 5-7 deep conversations over several weeks"
            }
          ]
        },
        {
          title: "Phase 2: Boundary Setting & Fantasy",
          duration: "2-4 weeks",
          steps: [
            {
              title: "Create Detailed Boundaries",
              description: "Discuss: Where can wife meet men? What acts are okay? How much detail does husband want? Ongoing or one-time?",
              resources: [
                { title: "Consent Basics", path: "/start/consent-basics" }
              ],
              action: "Write down comprehensive boundaries agreement"
            },
            {
              title: "Fantasy Play & Dirty Talk",
              description: "During intimacy, talk about the fantasy. Gauge emotional reactions before making it reality.",
              resources: [
                { title: "Communication", path: "/guide/how-to" }
              ],
              action: "Incorporate hotwife fantasy into intimate time for 2-3 weeks"
            },
            {
              title: "Establish Check-In Protocols",
              description: "How often will you check in? What are signs to pause or stop? How to handle jealousy?",
              resources: [
                { title: "Managing Jealousy", path: "/lifestyle/jealousy-management" }
              ],
              action: "Create safe words and check-in system"
            }
          ]
        },
        {
          title: "Phase 3: Finding the Right Bull",
          duration: "4-12 weeks",
          steps: [
            {
              title: "Create Profile Together",
              description: "Join SPICE and clearly state what you're looking for in a respectful bull.",
              resources: [
                { title: "Join SPICE", path: "/download" }
              ],
              action: "Create profile, outline expectations clearly"
            },
            {
              title: "Screen Candidates Carefully",
              description: "Look for respectful, experienced men who understand the dynamic and respect boundaries.",
              resources: [
                { title: "Hotwifing Guide", path: "/lifestyle/hotwifing-guide" }
              ],
              action: "Video verify candidates, meet in public first"
            },
            {
              title: "First Meeting (No Play)",
              description: "Meet potential bull for drinks/dinner. Both partners present. Assess chemistry and respect.",
              resources: [
                { title: "Safety Resources", path: "/guide/safety" }
              ],
              action: "Meet 2-3 candidates before deciding on one"
            }
          ]
        },
        {
          title: "Phase 4: First Experiences",
          duration: "Ongoing",
          steps: [
            {
              title: "Start Slowly",
              description: "First experience might be soft (kissing, touching) with husband present watching or participating.",
              resources: [
                { title: "Hotwifing Tips", path: "/lifestyle/hotwifing-guide" }
              ],
              action: "Start with lower-intensity activities"
            },
            {
              title: "Debrief Immediately After",
              description: "Talk about feelings, what was hot, what felt weird. Have reconnection sex (reclaiming).",
              resources: [
                { title: "Aftercare", path: "/lifestyle/hotwifing-guide" }
              ],
              action: "Debrief within hours, reconnect intimately"
            },
            {
              title: "Adjust & Continue",
              description: "Based on experience, adjust boundaries. Decide if you want to continue, pause, or stop.",
              resources: [
                { title: "Relationship Maintenance", path: "/lifestyle/relationships-communication" }
              ],
              action: "Check in regularly, adjust boundaries as needed"
            }
          ]
        }
      ]
    },
    enm: {
      phases: [
        {
          title: "Phase 1: Education & Exploration",
          duration: "6-12 weeks",
          steps: [
            {
              title: "Read Foundational Books",
              description: "Both partners read: The Ethical Slut, Opening Up, More Than Two. Discuss each chapter.",
              resources: [
                { title: "ENM Guide", path: "/lifestyle/enm-polyamory-guide" }
              ],
              action: "Read and discuss 2-3 foundational books together"
            },
            {
              title: "Identify Your Why",
              description: "Discuss why you're interested in ENM. What are you hoping to gain? What are your motivations?",
              resources: [
                { title: "ENM FAQ", path: "/start/beginner-faq#enm" }
              ],
              action: "Journal individually, then share and discuss"
            },
            {
              title: "Explore Relationship Structures",
              description: "Learn about hierarchical vs. non-hierarchical polyamory, relationship anarchy, open relationships.",
              resources: [
                { title: "Relationship Structures", path: "/lifestyle/enm-polyamory-guide" }
              ],
              action: "Discuss which structures resonate with each of you"
            }
          ]
        },
        {
          title: "Phase 2: Agreements & Boundaries",
          duration: "4-6 weeks",
          steps: [
            {
              title: "Create Relationship Agreements",
              description: "Discuss and document: safer sex practices, time allocation, financial boundaries, emotional boundaries.",
              resources: [
                { title: "Consent Basics", path: "/start/consent-basics" }
              ],
              action: "Create comprehensive written agreements"
            },
            {
              title: "Establish Check-In Rhythms",
              description: "How often will you check in about the relationship? Weekly date nights? Monthly state-of-union?",
              resources: [
                { title: "Communication", path: "/lifestyle/relationships-communication" }
              ],
              action: "Schedule regular relationship maintenance meetings"
            },
            {
              title: "Discuss Metamour Relationships",
              description: "How much do you want to know about each other's partners? Meet them? Friendly? Parallel poly?",
              resources: [
                { title: "ENM Structures", path: "/lifestyle/enm-polyamory-guide" }
              ],
              action: "Decide on metamour relationship preferences"
            }
          ]
        },
        {
          title: "Phase 3: Soft Opening",
          duration: "8-16 weeks",
          steps: [
            {
              title: "Start with Dating (No Sex)",
              description: "Begin going on dates with others but hold off on sexual activity. Focus on building connections.",
              resources: [
                { title: "Opening Up Guide", path: "/lifestyle/enm-polyamory-guide" }
              ],
              action: "Each partner go on 2-3 dates, no sex yet"
            },
            {
              title: "Process Emotions Together",
              description: "Discuss feelings of jealousy, compersion, insecurity. Support each other through challenges.",
              resources: [
                { title: "Managing Jealousy", path: "/lifestyle/jealousy-management" }
              ],
              action: "Daily check-ins during this phase"
            },
            {
              title: "Address Imbalances",
              description: "If one partner is having more success dating, address feelings and adjust expectations.",
              resources: [
                { title: "ENM Challenges", path: "/lifestyle/enm-polyamory-guide" }
              ],
              action: "Discuss and problem-solve any imbalances"
            }
          ]
        },
        {
          title: "Phase 4: Full Opening & Integration",
          duration: "Ongoing",
          steps: [
            {
              title: "Sexual Relationships Begin",
              description: "After emotional comfort is established, move into sexual relationships with others.",
              resources: [
                { title: "Safety & Testing", path: "/guide/safety" }
              ],
              action: "Follow safer sex protocols, regular STI testing"
            },
            {
              title: "Integrate New Partners",
              description: "Introduce metamours if desired, navigate scheduling, maintain primary relationship.",
              resources: [
                { title: "Relationship Maintenance", path: "/lifestyle/relationships-communication" }
              ],
              action: "Balance time and energy across relationships"
            },
            {
              title: "Ongoing Relationship Maintenance",
              description: "Continue regular check-ins, adjust agreements as needed, address issues as they arise.",
              resources: [
                { title: "ENM Long-Term", path: "/lifestyle/enm-polyamory-guide" }
              ],
              action: "Weekly check-ins, quarterly relationship reviews"
            }
          ]
        }
      ]
    }
  };

  const singlesJourneys = {
    swinging: {
      phases: [
        {
          title: "Phase 1: Education & Self-Discovery",
          duration: "2-4 weeks",
          steps: [
            {
              title: "Learn About the Lifestyle",
              description: "Understand what swinging is, etiquette, and what to expect as a single person.",
              resources: [
                { title: "Swingers Guide", path: "/lifestyle/swingers-guide" },
                { title: "Singles in Swinging", path: "/lifestyle/swingers-guide#for-singles" }
              ],
              action: "Read comprehensive guides about the lifestyle"
            },
            {
              title: "Understand Your Role",
              description: "Learn the dynamics: single women ('unicorns') vs. single men ('bulls'), what couples seek.",
              resources: [
                { title: "Swinging FAQ", path: "/start/beginner-faq#swinging" }
              ],
              action: "Research expectations and realities for singles"
            },
            {
              title: "Define Your Boundaries",
              description: "What are you comfortable with? What are your hard limits? What kind of connections do you seek?",
              resources: [
                { title: "Consent Basics", path: "/start/consent-basics" }
              ],
              action: "Create personal yes/no/maybe list"
            }
          ]
        },
        {
          title: "Phase 2: Profile & Presentation",
          duration: "1-2 weeks",
          steps: [
            {
              title: "Create Honest Profile",
              description: "Join SPICE with clear photos, honest description, and explicit boundaries/interests.",
              resources: [
                { title: "Join SPICE", path: "/download" }
              ],
              action: "Create compelling, honest profile"
            },
            {
              title: "Learn Lifestyle Etiquette",
              description: "Understand how to approach couples, respect boundaries, accept rejection gracefully.",
              resources: [
                { title: "Lifestyle Etiquette", path: "/start/etiquette" },
                { title: "Swinging Etiquette", path: "/blog/swinging-etiquette-rules" }
              ],
              action: "Memorize key etiquette rules"
            }
          ]
        },
        {
          title: "Phase 3: Community Integration",
          duration: "4-8 weeks",
          steps: [
            {
              title: "Attend Munches & Meet-and-Greets",
              description: "Go to social events to meet couples in low-pressure settings. Build reputation as respectful.",
              resources: [
                { title: "Community Events", path: "/lifestyle/swingers-guide#parties" }
              ],
              action: "Attend 3-5 social events, focus on making friends"
            },
            {
              title: "Build Connections Online",
              description: "Message couples respectfully, have video calls, build rapport before meeting in person.",
              resources: [
                { title: "Finding Couples", path: "/blog/swinging-finding-couples" }
              ],
              action: "Connect with 5-10 couples, video verify"
            },
            {
              title: "Visit Clubs (Observe First)",
              description: "Tour lifestyle clubs, understand the environment, socialize without pressure to play.",
              resources: [
                { title: "Club Etiquette", path: "/lifestyle/swingers-guide#clubs" }
              ],
              action: "Visit 2-3 clubs on different nights"
            }
          ]
        },
        {
          title: "Phase 4: First Experiences",
          duration: "Ongoing",
          steps: [
            {
              title: "First Date with a Couple",
              description: "Meet in public, build chemistry, discuss boundaries before any play.",
              resources: [
                { title: "Safety Tips", path: "/guide/safety" }
              ],
              action: "Meet in public first, establish trust"
            },
            {
              title: "First Play Experience",
              description: "Start slowly, use safe words, respect couple's dynamic and relationship.",
              resources: [
                { title: "Singles in Lifestyle", path: "/lifestyle/swingers-guide#for-singles" }
              ],
              action: "Honor boundaries, focus on pleasure for all"
            },
            {
              title: "Build Reputation",
              description: "Be respectful, drama-free, and reliable. Word spreads in the lifestyle community.",
              resources: [
                { title: "Common Mistakes", path: "/blog/swinging-mistakes-avoid" }
              ],
              action: "Be known as respectful and trustworthy"
            }
          ]
        }
      ]
    },
    bdsm: {
      phases: [
        {
          title: "Phase 1: Self-Discovery",
          duration: "4-8 weeks",
          steps: [
            {
              title: "Explore Your Interests",
              description: "Take quizzes, read erotica, watch educational content. What excites you? What role(s) appeal?",
              resources: [
                { title: "BDSM Quiz", path: "/quiz/bdsm" },
                { title: "BDSM for Beginners", path: "/blog/bdsm-beginners-guide" }
              ],
              action: "Take quiz, read 2-3 beginner guides"
            },
            {
              title: "Educate Yourself",
              description: "Learn about safety, consent, different practices, and community norms.",
              resources: [
                { title: "Complete BDSM Guide", path: "/lifestyle/bdsm-guide" },
                { title: "BDSM Safety", path: "/blog/bdsm-safety-checklist" }
              ],
              action: "Read comprehensive BDSM guide cover to cover"
            },
            {
              title: "Identify Your Role",
              description: "Are you dominant, submissive, switch? Service-oriented? What dynamics appeal to you?",
              resources: [
                { title: "Roles & Dynamics", path: "/lifestyle/bdsm-guide#roles" }
              ],
              action: "Reflect on and define your preferences"
            }
          ]
        },
        {
          title: "Phase 2: Community Connection",
          duration: "4-8 weeks",
          steps: [
            {
              title: "Join FetLife & SPICE",
              description: "Create profiles on kink-friendly platforms. Join local groups, read discussions.",
              resources: [
                { title: "Join SPICE", path: "/download" },
                { title: "Finding Community", path: "/blog/finding-kink-community" }
              ],
              action: "Create profiles, join 3-5 online groups"
            },
            {
              title: "Attend Your First Munch",
              description: "Go to a casual social gathering for kinksters. Meet people in a vanilla setting.",
              resources: [
                { title: "The Kink Community", path: "/lifestyle/bdsm-guide#community" }
              ],
              action: "Attend 2-3 munches, introduce yourself"
            },
            {
              title: "Take Workshops",
              description: "Attend beginner workshops on rope, impact play, or negotiation. Learn proper techniques.",
              resources: [
                { title: "Community Events", path: "/lifestyle/bdsm-guide#community" }
              ],
              action: "Take at least 2 beginner workshops"
            }
          ]
        },
        {
          title: "Phase 3: Finding Partners",
          duration: "Ongoing",
          steps: [
            {
              title: "Create Clear Kink Profile",
              description: "Be explicit about role, interests, experience level, and what you're seeking.",
              resources: [
                { title: "Finding Partners", path: "/lifestyle/bdsm-guide#finding-partners" }
              ],
              action: "Create detailed, honest kink profiles"
            },
            {
              title: "Build Connections Slowly",
              description: "Message people whose interests align, have coffee dates, build trust before play.",
              resources: [
                { title: "Red Flags", path: "/lifestyle/bdsm-guide#finding-partners" }
              ],
              action: "Meet 3-5 people for coffee, assess compatibility"
            },
            {
              title: "Start with Casual Play Partners",
              description: "Scene-only partners let you explore without relationship pressure. Negotiate thoroughly.",
              resources: [
                { title: "Negotiation", path: "/blog/bdsm-negotiation-checklist" }
              ],
              action: "Find 1-2 compatible play partners"
            }
          ]
        },
        {
          title: "Phase 4: Skill Development",
          duration: "Ongoing",
          steps: [
            {
              title: "Practice Beginner Activities",
              description: "Start with low-risk activities: light bondage, sensation play, basic impact.",
              resources: [
                { title: "Beginner Kinks", path: "/blog/beginner-friendly-kinks" }
              ],
              action: "Try 5-7 different beginner activities"
            },
            {
              title: "Learn Advanced Techniques",
              description: "Take advanced workshops, practice with experienced mentors, build expertise gradually.",
              resources: [
                { title: "Safety Protocols", path: "/blog/bdsm-safety-checklist" }
              ],
              action: "Take advanced classes before trying complex activities"
            },
            {
              title: "Give Back to Community",
              description: "Once experienced, mentor newcomers, help with events, share knowledge respectfully.",
              resources: [
                { title: "Community Involvement", path: "/lifestyle/bdsm-guide#community" }
              ],
              action: "Volunteer at events, mentor beginners"
            }
          ]
        }
      ]
    },
    enm: {
      phases: [
        {
          title: "Phase 1: Self-Education",
          duration: "4-8 weeks",
          steps: [
            {
              title: "Read Foundational Books",
              description: "The Ethical Slut, Opening Up, Polysecure. Understand ENM principles and styles.",
              resources: [
                { title: "ENM Guide", path: "/lifestyle/enm-polyamory-guide" }
              ],
              action: "Read 2-3 foundational books on ENM/polyamory"
            },
            {
              title: "Understand Your Preferences",
              description: "Do you want multiple romantic relationships? Casual partners? What relationship structure appeals?",
              resources: [
                { title: "ENM FAQ", path: "/start/beginner-faq#enm" }
              ],
              action: "Journal about your ideal relationship structure"
            },
            {
              title: "Define Your Boundaries",
              description: "What are your deal-breakers? What kind of partners are you seeking? Time availability?",
              resources: [
                { title: "Consent Basics", path: "/start/consent-basics" }
              ],
              action: "Create personal boundaries and expectations list"
            }
          ]
        },
        {
          title: "Phase 2: Dating Preparation",
          duration: "2-4 weeks",
          steps: [
            {
              title: "Create Honest Profile",
              description: "Be clear about being solo poly, what you're offering, and what you're seeking.",
              resources: [
                { title: "Join SPICE", path: "/download" }
              ],
              action: "Create clear, detailed ENM dating profile"
            },
            {
              title: "Learn to Navigate Existing Relationships",
              description: "Understand hierarchical vs. non-hierarchical poly, couple privilege, and how to date partnered people.",
              resources: [
                { title: "ENM Structures", path: "/lifestyle/enm-polyamory-guide" }
              ],
              action: "Research different poly structures and expectations"
            },
            {
              title: "Join ENM Communities",
              description: "Find local poly meetups, join online forums, connect with experienced ENM practitioners.",
              resources: [
                { title: "Finding Community", path: "/lifestyle/enm-polyamory-guide" }
              ],
              action: "Join 2-3 local/online ENM communities"
            }
          ]
        },
        {
          title: "Phase 3: Dating & Relationships",
          duration: "Ongoing",
          steps: [
            {
              title: "Start Dating Intentionally",
              description: "Be upfront about ENM from the first date. Discuss relationship expectations early.",
              resources: [
                { title: "ENM Dating", path: "/lifestyle/enm-polyamory-guide" }
              ],
              action: "Go on dates, be transparent about ENM"
            },
            {
              title: "Navigate Metamour Relationships",
              description: "If dating someone with other partners, decide how you'll interact with their metamours.",
              resources: [
                { title: "Metamour Dynamics", path: "/lifestyle/enm-polyamory-guide" }
              ],
              action: "Discuss and establish metamour preferences"
            },
            {
              title: "Build Your Relationship Network",
              description: "Cultivate multiple meaningful connections. Balance time and emotional energy.",
              resources: [
                { title: "Relationship Management", path: "/lifestyle/relationships-communication" }
              ],
              action: "Use calendar tools, communicate needs clearly"
            }
          ]
        },
        {
          title: "Phase 4: Long-Term Sustainability",
          duration: "Ongoing",
          steps: [
            {
              title: "Maintain Individual Identity",
              description: "Don't lose yourself in relationships. Prioritize self-care and personal goals.",
              resources: [
                { title: "Self-Care", path: "/guide/self-care" }
              ],
              action: "Schedule regular alone time, pursue hobbies"
            },
            {
              title: "Handle Relationship Changes",
              description: "Relationships evolve or end. Navigate breakups while maintaining other connections.",
              resources: [
                { title: "ENM Challenges", path: "/lifestyle/enm-polyamory-guide" }
              ],
              action: "Develop resilience and communication skills"
            },
            {
              title: "Give Back to Community",
              description: "Share experiences, mentor newcomers, help normalize ENM in your circles.",
              resources: [
                { title: "Community Building", path: "/lifestyle/enm-polyamory-guide" }
              ],
              action: "Volunteer, mentor, share your story"
            }
          ]
        }
      ]
    }
  };

  const getResourceIcon = (type?: string) => {
    switch (type) {
      case 'quiz': return <Brain className="w-3 h-3" />;
      case 'guide': return <BookOpen className="w-3 h-3" />;
      case 'article': return <FileText className="w-3 h-3" />;
      case 'faq': return <HelpCircle className="w-3 h-3" />;
      case 'video': return <Video className="w-3 h-3" />;
      default: return <BookOpen className="w-3 h-3" />;
    }
  };

  const getDifficultyBadge = (difficulty?: string) => {
    const colors = {
      'easy': 'bg-green-500/10 text-green-500 border-green-500/30',
      'moderate': 'bg-yellow-500/10 text-yellow-500 border-yellow-500/30',
      'challenging': 'bg-red-500/10 text-red-500 border-red-500/30'
    };
    const color = colors[difficulty as keyof typeof colors] || colors.easy;
    
    return difficulty ? (
      <span className={`px-2 py-1 rounded-full text-xs border ${color}`}>
        {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
      </span>
    ) : null;
  };

  const renderJourney = (journey: any, type: "couples" | "singles") => {
    const totalSteps = journey.phases.reduce((acc: number, phase: any) => acc + phase.steps.length, 0);
    const completedCount = Object.values(completedSteps).filter(Boolean).length;
    
    return (
      <div className="space-y-6 mt-8">
        {/* Progress Overview */}
        <div className="bg-gradient-to-r from-primary/10 via-purple-500/10 to-primary/10 border border-primary/30 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold flex items-center gap-2">
              <Trophy className="w-5 h-5 text-primary" />
              Your Progress
            </h3>
            <button
              onClick={resetProgress}
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Reset Progress
            </button>
          </div>
          <div className="w-full bg-background/50 rounded-full h-3 mb-2">
            <div 
              className="bg-gradient-to-r from-primary to-purple-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${getProgressPercentage(journey)}%` }}
            />
          </div>
          <p className="text-sm text-muted-foreground">
            {completedCount} of {totalSteps} steps completed ({getProgressPercentage(journey)}%)
          </p>
        </div>

        {/* Timeline visualization */}
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary/20" />
          
          {journey.phases.map((phase: any, phaseIndex: number) => {
            const isExpanded = expandedPhases.includes(phaseIndex);
            const phaseSteps = phase.steps || [];
            const phaseCompleted = phaseSteps.every((_: any, stepIndex: number) => 
              completedSteps[`${phaseIndex}-${stepIndex}`]
            );
            
            return (
              <div key={phaseIndex} className="relative mb-6">
                {/* Phase Header */}
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl overflow-hidden">
                  <button
                    onClick={() => togglePhase(phaseIndex)}
                    className="w-full p-6 text-left hover:bg-primary/5 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl ${
                        phaseCompleted ? 'bg-gradient-to-br from-green-500 to-emerald-500' : 'bg-gradient-to-br from-primary to-purple-500'
                      }`}>
                        {phaseCompleted ? <CheckCircle className="w-6 h-6" /> : phaseIndex + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2 flex-wrap">
                          <h3 className="text-2xl font-bold">{phase.title}</h3>
                          {getDifficultyBadge(phase.difficulty)}
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground flex-wrap">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {phase.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <CheckCircle className="w-4 h-4" />
                            {phaseSteps.filter((_: any, idx: number) => completedSteps[`${phaseIndex}-${idx}`]).length}/{phaseSteps.length} steps
                          </span>
                        </div>
                        {phase.whatToExpect && !isExpanded && (
                          <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{phase.whatToExpect}</p>
                        )}
                      </div>
                      <div>
                        {isExpanded ? <ChevronUp className="w-6 h-6 text-primary" /> : <ChevronDown className="w-6 h-6 text-muted-foreground" />}
                      </div>
                    </div>
                  </button>

                  {/* Phase Content */}
                  {isExpanded && (
                    <div className="border-t border-border p-6 bg-background/30">
                      {/* What to Expect */}
                      {phase.whatToExpect && (
                        <div className="mb-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl">
                          <div className="flex items-start gap-2">
                            <Lightbulb className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                            <div>
                              <h4 className="font-semibold text-blue-500 mb-1">What to Expect</h4>
                              <p className="text-sm text-foreground">{phase.whatToExpect}</p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Common Questions */}
                      {phase.commonQuestions && phase.commonQuestions.length > 0 && (
                        <div className="mb-6 p-4 bg-purple-500/10 border border-purple-500/30 rounded-xl">
                          <h4 className="font-semibold text-purple-500 mb-3 flex items-center gap-2">
                            <HelpCircle className="w-5 h-5" />
                            Common Questions
                          </h4>
                          <div className="space-y-3">
                            {phase.commonQuestions.map((qa: any, qaIndex: number) => (
                              <div key={qaIndex}>
                                <p className="text-sm font-medium text-foreground mb-1">{qa.q}</p>
                                <p className="text-sm text-muted-foreground">{qa.a}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Steps */}
                      <div className="space-y-4">
                        {phaseSteps.map((step: any, stepIndex: number) => {
                          const stepId = `${phaseIndex}-${stepIndex}`;
                          const isCompleted = completedSteps[stepId];
                          
                          return (
                            <div 
                              key={stepIndex} 
                              className={`rounded-xl p-5 border-2 transition-all ${
                                isCompleted 
                                  ? 'bg-green-500/5 border-green-500/30' 
                                  : 'bg-background/50 border-border hover:border-primary/50'
                              }`}
                            >
                              {/* Step Header */}
                              <div className="flex items-start gap-3 mb-3">
                                <button
                                  onClick={() => toggleStep(stepId)}
                                  className="flex-shrink-0 mt-1 hover:scale-110 transition-transform"
                                >
                                  {isCompleted ? (
                                    <CheckSquare className="w-6 h-6 text-green-500" />
                                  ) : (
                                    <Square className="w-6 h-6 text-muted-foreground" />
                                  )}
                                </button>
                                <div className="flex-1">
                                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                                    <h4 className="text-lg font-semibold">{step.title}</h4>
                                    {getDifficultyBadge(step.difficulty)}
                                  </div>
                                  {step.timeEstimate && (
                                    <p className="text-xs text-muted-foreground flex items-center gap-1 mb-2">
                                      <Clock className="w-3 h-3" />
                                      {step.timeEstimate}
                                    </p>
                                  )}
                                  <p className="text-sm text-muted-foreground mb-3">{step.description}</p>

                                  {/* Resources */}
                                  {step.resources && step.resources.length > 0 && (
                                    <div className="mb-3">
                                      <p className="text-xs font-semibold text-foreground mb-2 flex items-center gap-1">
                                        <BookOpen className="w-4 h-4" />
                                        Learning Resources:
                                      </p>
                                      <div className="space-y-2">
                                        {step.resources.map((resource: any, resIndex: number) => (
                                          <Link
                                            key={resIndex}
                                            to={resource.path}
                                            className="flex items-start gap-2 p-3 bg-primary/5 hover:bg-primary/10 border border-primary/20 hover:border-primary/40 rounded-lg transition-all group"
                                          >
                                            <div className="flex-shrink-0 mt-0.5">
                                              {getResourceIcon(resource.type)}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                              <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                                                {resource.title}
                                              </p>
                                              {resource.description && (
                                                <p className="text-xs text-muted-foreground mt-0.5">{resource.description}</p>
                                              )}
                                            </div>
                                            <ExternalLink className="w-4 h-4 text-primary flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                                          </Link>
                                        ))}
                                      </div>
                                    </div>
                                  )}

                                  {/* Action Step */}
                                  <div className="bg-primary/10 border-l-4 border-primary pl-4 py-3 rounded-r-lg mb-3">
                                    <p className="text-xs font-semibold text-primary mb-1 flex items-center gap-1">
                                      <Target className="w-3 h-3" />
                                      Action Step:
                                    </p>
                                    <p className="text-sm font-medium">{step.action}</p>
                                  </div>

                                  {/* Tips */}
                                  {step.tips && step.tips.length > 0 && (
                                    <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-3">
                                      <p className="text-xs font-semibold text-amber-500 mb-2 flex items-center gap-1">
                                        <Lightbulb className="w-4 h-4" />
                                        Helpful Tips:
                                      </p>
                                      <ul className="space-y-1">
                                        {step.tips.map((tip: string, tipIndex: number) => (
                                          <li key={tipIndex} className="text-xs text-foreground flex items-start gap-2">
                                            <span className="text-amber-500 flex-shrink-0">•</span>
                                            <span>{tip}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <>
      <SEO
        title="Guided Lifestyle Journeys - Complete Learning Paths | SPICE"
        description="Comprehensive guided learning paths for couples and singles exploring swinging, BDSM, ENM, polyamory, and hotwifing. Step-by-step journeys from beginner to experienced."
        keywords="lifestyle journeys, swinging guide for couples, BDSM learning path, polyamory journey, hotwifing guide, lifestyle education, beginner to advanced"
        canonical="https://thespiceapp.com/academy/journeys"
        structuredData={structuredData}
      />

      <div className="relative min-h-screen">
        <ParticlesBackground />
        <Header />
        <Breadcrumbs />

        <main className="relative z-10 pt-32 pb-12">
          <div className="container mx-auto px-4 max-w-6xl">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Target className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Guided Learning Paths</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                Guided Lifestyle Journeys
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Step-by-step learning paths for couples and singles exploring alternative lifestyles. From discovery to mastery, we'll guide you every step of the way.
              </p>
            </div>

            {!selectedLifestyle ? (
              <>
                {/* Lifestyle Selection */}
                <div className="mb-12">
                  <h2 className="text-3xl font-bold mb-8 text-center">Choose Your Journey</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {lifestyles.map((lifestyle) => {
                      const Icon = lifestyle.icon;
                      return (
                        <button
                          key={lifestyle.id}
                          onClick={() => setSelectedLifestyle(lifestyle.id)}
                          className={`${lifestyle.bgColor} border ${lifestyle.borderColor} rounded-2xl p-8 text-left hover:scale-105 transition-all group`}
                        >
                          <div className="flex items-start gap-4 mb-4">
                            <div className={`bg-gradient-to-br ${lifestyle.color} p-3 rounded-xl`}>
                              <Icon className="w-8 h-8 text-white" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{lifestyle.name}</h3>
                              <p className="text-sm text-muted-foreground">{lifestyle.description}</p>
                            </div>
                          </div>
                          <div className="flex gap-2 mt-4">
                            {lifestyle.forCouples && (
                              <span className="px-3 py-1 bg-background/50 border border-border rounded-full text-xs">
                                For Couples
                              </span>
                            )}
                            {lifestyle.forSingles && (
                              <span className="px-3 py-1 bg-background/50 border border-border rounded-full text-xs">
                                For Singles
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-2 mt-4 text-primary group-hover:gap-3 transition-all">
                            <span className="text-sm font-semibold">Start Journey</span>
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Back Button */}
                <button
                  onClick={() => {
                    setSelectedLifestyle(null);
                    setSelectedType(null);
                  }}
                  className="mb-8 inline-flex items-center gap-2 text-primary hover:underline"
                >
                  ← Back to All Journeys
                </button>

                {!selectedType ? (
                  <>
                    {/* Type Selection */}
                    <div className="mb-12">
                      <h2 className="text-3xl font-bold mb-4">
                        {lifestyles.find(l => l.id === selectedLifestyle)?.name} Journey
                      </h2>
                      <p className="text-muted-foreground mb-8">
                        Choose your path based on your relationship status:
                      </p>
                      <div className="grid md:grid-cols-2 gap-6">
                        {lifestyles.find(l => l.id === selectedLifestyle)?.forCouples && (
                          <button
                            onClick={() => setSelectedType("couples")}
                            className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 text-left hover:border-primary/50 transition-all group"
                          >
                            <Users className="w-12 h-12 text-primary mb-4" />
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">Couples Journey</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                              Comprehensive guide for couples exploring this lifestyle together
                            </p>
                            <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all">
                              <span className="text-sm font-semibold">View Couples Path</span>
                              <ArrowRight className="w-4 h-4" />
                            </div>
                          </button>
                        )}
                        {lifestyles.find(l => l.id === selectedLifestyle)?.forSingles && (
                          <button
                            onClick={() => setSelectedType("singles")}
                            className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 text-left hover:border-primary/50 transition-all group"
                          >
                            <Heart className="w-12 h-12 text-primary mb-4" />
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">Singles Journey</h3>
                            <p className="text-sm text-muted-foreground mb-4">
                              Tailored guidance for individuals exploring this lifestyle
                            </p>
                            <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all">
                              <span className="text-sm font-semibold">View Singles Path</span>
                              <ArrowRight className="w-4 h-4" />
                            </div>
                          </button>
                        )}
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Journey Content */}
                    <div className="mb-12">
                      <button
                        onClick={() => setSelectedType(null)}
                        className="mb-6 inline-flex items-center gap-2 text-primary hover:underline"
                      >
                        ← Back to Type Selection
                      </button>

                      <div className="bg-gradient-to-br from-primary/10 to-purple-500/10 border border-primary/30 rounded-2xl p-8 mb-8">
                        <h2 className="text-3xl font-bold mb-4">
                          {lifestyles.find(l => l.id === selectedLifestyle)?.name} - {selectedType === "couples" ? "Couples" : "Singles"} Journey
                        </h2>
                        <p className="text-muted-foreground mb-6">
                          This guided journey will take you from complete beginner to confident practitioner. Each phase builds on the previous one, so don't skip ahead. Take your time and move at your own pace.
                        </p>
                        <div className="flex flex-wrap gap-3">
                          <div className="flex items-center gap-2 px-4 py-2 bg-background/50 rounded-full">
                            <Shield className="w-4 h-4 text-primary" />
                            <span className="text-sm">Safety First</span>
                          </div>
                          <div className="flex items-center gap-2 px-4 py-2 bg-background/50 rounded-full">
                            <MessageCircle className="w-4 h-4 text-primary" />
                            <span className="text-sm">Communication Focus</span>
                          </div>
                          <div className="flex items-center gap-2 px-4 py-2 bg-background/50 rounded-full">
                            <Target className="w-4 h-4 text-primary" />
                            <span className="text-sm">Step-by-Step</span>
                          </div>
                        </div>
                      </div>

                      {/* Main Content with Sidebar Layout */}
                      <div className="grid lg:grid-cols-3 gap-8">
                        {/* Main Journey Content */}
                        <div className="lg:col-span-2">
                          {selectedType === "couples" && couplesJourneys[selectedLifestyle as keyof typeof couplesJourneys] && 
                            renderJourney(couplesJourneys[selectedLifestyle as keyof typeof couplesJourneys], "couples")
                          }
                          {selectedType === "singles" && singlesJourneys[selectedLifestyle as keyof typeof singlesJourneys] && 
                            renderJourney(singlesJourneys[selectedLifestyle as keyof typeof singlesJourneys], "singles")
                          }
                        </div>

                        {/* Sidebar with Resources and Glossary */}
                        <div className="lg:col-span-1 space-y-6">
                          {/* New to this lifestyle? */}
                          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-2xl p-6 sticky top-24">
                            <div className="flex items-center gap-2 mb-4">
                              <AlertCircle className="w-5 h-5 text-blue-500" />
                              <h3 className="text-lg font-bold text-blue-500">New to This Lifestyle?</h3>
                            </div>
                            <p className="text-sm text-muted-foreground mb-4">
                              Start with these essential resources to build your foundation.
                            </p>
                            
                            {/* Essential Resources */}
                            <div className="space-y-2 mb-6">
                              {selectedLifestyle === "swinging" && (
                                <>
                                  <Link to="/blog/swinging-101-beginners-guide" className="flex items-center gap-2 p-3 bg-background/50 hover:bg-background rounded-lg transition-all group">
                                    <BookOpen className="w-4 h-4 text-blue-500 flex-shrink-0" />
                                    <span className="text-sm group-hover:text-primary transition-colors">What is Swinging?</span>
                                  </Link>
                                  <Link to="/guide/how-to" className="flex items-center gap-2 p-3 bg-background/50 hover:bg-background rounded-lg transition-all group">
                                    <MessageCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                                    <span className="text-sm group-hover:text-primary transition-colors">Communication Guide</span>
                                  </Link>
                                  <Link to="/guide/safety" className="flex items-center gap-2 p-3 bg-background/50 hover:bg-background rounded-lg transition-all group">
                                    <Shield className="w-4 h-4 text-blue-500 flex-shrink-0" />
                                    <span className="text-sm group-hover:text-primary transition-colors">Safety First</span>
                                  </Link>
                                  <Link to="/start/consent-basics" className="flex items-center gap-2 p-3 bg-background/50 hover:bg-background rounded-lg transition-all group">
                                    <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                                    <span className="text-sm group-hover:text-primary transition-colors">Consent Basics</span>
                                  </Link>
                                  <Link to="/start/beginner-faq#swinging" className="flex items-center gap-2 p-3 bg-background/50 hover:bg-background rounded-lg transition-all group">
                                    <HelpCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                                    <span className="text-sm group-hover:text-primary transition-colors">Common Myths</span>
                                  </Link>
                                </>
                              )}
                              {selectedLifestyle === "bdsm" && (
                                <>
                                  <Link to="/blog/bdsm-beginners-guide" className="flex items-center gap-2 p-3 bg-background/50 hover:bg-background rounded-lg transition-all group">
                                    <BookOpen className="w-4 h-4 text-blue-500 flex-shrink-0" />
                                    <span className="text-sm group-hover:text-primary transition-colors">BDSM for Beginners</span>
                                  </Link>
                                  <Link to="/blog/bdsm-safety-checklist" className="flex items-center gap-2 p-3 bg-background/50 hover:bg-background rounded-lg transition-all group">
                                    <Shield className="w-4 h-4 text-blue-500 flex-shrink-0" />
                                    <span className="text-sm group-hover:text-primary transition-colors">Safety Checklist</span>
                                  </Link>
                                  <Link to="/lifestyle/bdsm-guide#roles" className="flex items-center gap-2 p-3 bg-background/50 hover:bg-background rounded-lg transition-all group">
                                    <Users className="w-4 h-4 text-blue-500 flex-shrink-0" />
                                    <span className="text-sm group-hover:text-primary transition-colors">Understanding Roles</span>
                                  </Link>
                                  <Link to="/blog/bdsm-negotiation-checklist" className="flex items-center gap-2 p-3 bg-background/50 hover:bg-background rounded-lg transition-all group">
                                    <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                                    <span className="text-sm group-hover:text-primary transition-colors">Consent & Negotiation</span>
                                  </Link>
                                  <Link to="/lifestyle/bdsm-guide" className="flex items-center gap-2 p-3 bg-background/50 hover:bg-background rounded-lg transition-all group">
                                    <HelpCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                                    <span className="text-sm group-hover:text-primary transition-colors">Common Questions</span>
                                  </Link>
                                </>
                              )}
                              {selectedLifestyle === "hotwifing" && (
                                <>
                                  <Link to="/lifestyle/hotwifing-guide" className="flex items-center gap-2 p-3 bg-background/50 hover:bg-background rounded-lg transition-all group">
                                    <BookOpen className="w-4 h-4 text-blue-500 flex-shrink-0" />
                                    <span className="text-sm group-hover:text-primary transition-colors">Hotwifing 101</span>
                                  </Link>
                                  <Link to="/guide/how-to" className="flex items-center gap-2 p-3 bg-background/50 hover:bg-background rounded-lg transition-all group">
                                    <MessageCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                                    <span className="text-sm group-hover:text-primary transition-colors">Communication Guide</span>
                                  </Link>
                                  <Link to="/lifestyle/jealousy-management" className="flex items-center gap-2 p-3 bg-background/50 hover:bg-background rounded-lg transition-all group">
                                    <Heart className="w-4 h-4 text-blue-500 flex-shrink-0" />
                                    <span className="text-sm group-hover:text-primary transition-colors">Managing Jealousy</span>
                                  </Link>
                                  <Link to="/guide/safety" className="flex items-center gap-2 p-3 bg-background/50 hover:bg-background rounded-lg transition-all group">
                                    <Shield className="w-4 h-4 text-blue-500 flex-shrink-0" />
                                    <span className="text-sm group-hover:text-primary transition-colors">Safety Guidelines</span>
                                  </Link>
                                  <Link to="/start/beginner-faq#hotwifing" className="flex items-center gap-2 p-3 bg-background/50 hover:bg-background rounded-lg transition-all group">
                                    <HelpCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                                    <span className="text-sm group-hover:text-primary transition-colors">FAQs</span>
                                  </Link>
                                </>
                              )}
                              {selectedLifestyle === "enm" && (
                                <>
                                  <Link to="/lifestyle/enm-polyamory-guide" className="flex items-center gap-2 p-3 bg-background/50 hover:bg-background rounded-lg transition-all group">
                                    <BookOpen className="w-4 h-4 text-blue-500 flex-shrink-0" />
                                    <span className="text-sm group-hover:text-primary transition-colors">What is ENM?</span>
                                  </Link>
                                  <Link to="/lifestyle/enm-polyamory-guide" className="flex items-center gap-2 p-3 bg-background/50 hover:bg-background rounded-lg transition-all group">
                                    <Users className="w-4 h-4 text-blue-500 flex-shrink-0" />
                                    <span className="text-sm group-hover:text-primary transition-colors">Relationship Structures</span>
                                  </Link>
                                  <Link to="/lifestyle/jealousy-management" className="flex items-center gap-2 p-3 bg-background/50 hover:bg-background rounded-lg transition-all group">
                                    <Heart className="w-4 h-4 text-blue-500 flex-shrink-0" />
                                    <span className="text-sm group-hover:text-primary transition-colors">Managing Jealousy</span>
                                  </Link>
                                  <Link to="/lifestyle/relationships-communication" className="flex items-center gap-2 p-3 bg-background/50 hover:bg-background rounded-lg transition-all group">
                                    <MessageCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                                    <span className="text-sm group-hover:text-primary transition-colors">Communication Skills</span>
                                  </Link>
                                  <Link to="/start/beginner-faq#enm" className="flex items-center gap-2 p-3 bg-background/50 hover:bg-background rounded-lg transition-all group">
                                    <HelpCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                                    <span className="text-sm group-hover:text-primary transition-colors">ENM FAQ</span>
                                  </Link>
                                </>
                              )}
                            </div>

                            {/* Quick Glossary Toggle */}
                            <button
                              onClick={() => setShowGlossary(!showGlossary)}
                              className="w-full flex items-center justify-between p-3 bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-lg transition-all"
                            >
                              <span className="text-sm font-medium">Quick Glossary</span>
                              {showGlossary ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                            </button>

                            {/* Glossary Terms */}
                            {showGlossary && (
                              <div className="mt-4 space-y-3 max-h-96 overflow-y-auto">
                                {Object.entries(glossary)
                                  .filter(([term]) => {
                                    // Filter relevant terms based on lifestyle
                                    if (selectedLifestyle === "swinging") {
                                      return ["swinging", "soft swap", "full swap", "unicorn", "bull", "lifestyle", "vanilla", "munch"].includes(term);
                                    } else if (selectedLifestyle === "bdsm") {
                                      return ["BDSM", "safeword", "aftercare", "scene", "dominant", "submissive", "switch", "fetlife", "munch", "negotiation", "consent"].includes(term);
                                    } else if (selectedLifestyle === "hotwifing") {
                                      return ["hotwifing", "bull", "boundaries", "consent", "compersion"].includes(term);
                                    } else if (selectedLifestyle === "enm") {
                                      return ["ENM", "polyamory", "metamour", "compersion", "hierarchical polyamory", "relationship anarchy", "NRE", "veto power", "boundaries"].includes(term);
                                    }
                                    return true;
                                  })
                                  .map(([term, definition]) => (
                                    <div key={term} className="p-3 bg-background/50 rounded-lg">
                                      <p className="text-sm font-semibold text-primary mb-1 capitalize">{term}</p>
                                      <p className="text-xs text-muted-foreground">{definition}</p>
                                    </div>
                                  ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl p-8 border border-primary/30 text-center">
                      <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
                      <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                        Join SPICE to connect with others on the same path, access exclusive resources, and build your lifestyle community.
                      </p>
                      <Link
                        to="/download"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all"
                      >
                        <Users className="w-5 h-5" />
                        Join SPICE Free
                      </Link>
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </main>

        <FooterSection />
      </div>
    </>
  );
};

export default GuidedJourneys;
