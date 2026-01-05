import { useState, useMemo, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import html2canvas from 'html2canvas';
import { Heart, Shield, MessageCircle, Users, ChevronRight, ChevronLeft, CheckCircle, AlertTriangle, BookOpen, ArrowRight, Sparkles, Target, Clock, Flame, RefreshCw, Download, Share2, Twitter, Facebook, Linkedin, Copy } from "lucide-react";

interface Question {
  id: number;
  category: "communication" | "trust" | "jealousy" | "readiness" | "boundaries" | "motivation";
  question: string;
  options: {
    text: string;
    score: number;
    flag?: "red" | "yellow" | "green";
  }[];
}

const questions: Question[] = [
  // Communication Questions (1-3)
  {
    id: 1,
    category: "communication",
    question: "How would you describe your ability to discuss sexual fantasies and desires with your partner?",
    options: [
      { text: "We openly discuss everything sexual without hesitation or judgment", score: 4, flag: "green" },
      { text: "We can discuss most things, but some topics still feel uncomfortable", score: 3 },
      { text: "We discuss basics, but detailed sexual fantasies feel too vulnerable to share", score: 2, flag: "yellow" },
      { text: "We rarely discuss sexual fantasies—it feels awkward or risky", score: 1, flag: "red" }
    ]
  },
  {
    id: 2,
    category: "communication",
    question: "When one of you feels uncomfortable or wants to change something about your intimate life, how is it typically handled?",
    options: [
      { text: "We address it immediately with compassion and work together to find solutions", score: 4, flag: "green" },
      { text: "We eventually discuss it, though one of us might need time to process first", score: 3 },
      { text: "One or both of us tends to avoid the conversation or minimize the concern", score: 2, flag: "yellow" },
      { text: "These conversations often lead to arguments or one person shutting down", score: 1, flag: "red" }
    ]
  },
  {
    id: 3,
    category: "communication",
    question: "Have you specifically discussed hotwifing together—what it means, what appeals to you, and what concerns you have?",
    options: [
      { text: "Yes, we've had multiple in-depth conversations and both understand each other's perspectives", score: 4, flag: "green" },
      { text: "We've talked about it a few times, but there's more to explore", score: 3 },
      { text: "We've mentioned it, but haven't had a real conversation about details", score: 2, flag: "yellow" },
      { text: "Not really—one of us brought it up but we haven't discussed it seriously", score: 1, flag: "red" }
    ]
  },
  // Trust Questions (4-6)
  {
    id: 4,
    category: "trust",
    question: "Do you trust your partner to be completely honest about their feelings, even if those feelings might be difficult for you to hear?",
    options: [
      { text: "Absolutely—we've built a foundation where honesty is always safe", score: 4, flag: "green" },
      { text: "Mostly yes, though we're still working on making all topics feel safe", score: 3 },
      { text: "Sometimes one of us holds back to avoid conflict or hurting the other", score: 2, flag: "yellow" },
      { text: "Trust is something we're actively struggling with in our relationship", score: 1, flag: "red" }
    ]
  },
  {
    id: 5,
    category: "trust",
    question: "If your partner were to have a sexual experience without you (with your consent), how confident are you that they would respect all agreed-upon boundaries?",
    options: [
      { text: "100% confident—boundaries are sacred in our relationship", score: 4, flag: "green" },
      { text: "Very confident, though we'd want clear check-ins during/after", score: 3 },
      { text: "Somewhat confident, but I'd worry about 'heat of the moment' decisions", score: 2, flag: "yellow" },
      { text: "I'm not sure I could fully trust that boundaries would be respected", score: 1, flag: "red" }
    ]
  },
  {
    id: 6,
    category: "trust",
    question: "Has there been infidelity or a significant breach of trust in your current relationship?",
    options: [
      { text: "No, we've maintained trust throughout our relationship", score: 4, flag: "green" },
      { text: "There was an issue in the past, but we've fully worked through it and healed", score: 3 },
      { text: "There was an issue and we're still processing/healing from it", score: 1, flag: "red" },
      { text: "Yes, and it's still affecting our relationship today", score: 0, flag: "red" }
    ]
  },
  // Jealousy Questions (7-9)
  {
    id: 7,
    category: "jealousy",
    question: "How do you honestly feel when you imagine your partner being sexually intimate with another person?",
    options: [
      { text: "Genuinely aroused and excited by the thought", score: 4, flag: "green" },
      { text: "A mix of excitement and some nervous butterflies—more positive than negative", score: 3 },
      { text: "Conflicted—the idea is intriguing but triggers uncomfortable feelings", score: 2, flag: "yellow" },
      { text: "Primarily anxious, jealous, or upset by the thought", score: 1, flag: "red" }
    ]
  },
  {
    id: 8,
    category: "jealousy",
    question: "When jealousy arises in your relationship (about anything—not just sex), how do you typically handle it?",
    options: [
      { text: "We acknowledge it openly, explore the root cause, and work through it together", score: 4, flag: "green" },
      { text: "We discuss it eventually, though it can take time to open up", score: 3 },
      { text: "One or both of us tends to suppress jealousy or pretend it's not there", score: 2, flag: "yellow" },
      { text: "Jealousy often causes significant conflict or emotional distance between us", score: 1, flag: "red" }
    ]
  },
  {
    id: 9,
    category: "jealousy",
    question: "Have you experienced 'compersion' (feeling joy from your partner's pleasure with others)?",
    options: [
      { text: "Yes, we've experienced it and it feels natural to us", score: 4, flag: "green" },
      { text: "We think we could experience it, though we haven't had the opportunity yet", score: 3 },
      { text: "The concept makes sense intellectually, but we're not sure we'd feel it", score: 2 },
      { text: "Compersion feels foreign or impossible to imagine feeling", score: 1, flag: "yellow" }
    ]
  },
  // Readiness Questions (10-13)
  {
    id: 10,
    category: "readiness",
    question: "What's your current experience with ethical non-monogamy or the lifestyle?",
    options: [
      { text: "We're experienced—we've practiced some form of ENM successfully", score: 4, flag: "green" },
      { text: "We've dipped our toes in (soft swap, same-room play, flirting with others)", score: 3 },
      { text: "We're completely new but have done extensive research together", score: 2 },
      { text: "This is all new territory—we're just starting to learn", score: 1 }
    ]
  },
  {
    id: 11,
    category: "readiness",
    question: "How long have you been together as a couple?",
    options: [
      { text: "5+ years with a strong, stable foundation", score: 4, flag: "green" },
      { text: "2-5 years with good relationship health", score: 3 },
      { text: "1-2 years—still building our foundation", score: 2, flag: "yellow" },
      { text: "Less than 1 year", score: 1, flag: "red" }
    ]
  },
  {
    id: 12,
    category: "readiness",
    question: "How would you rate the overall health and satisfaction of your relationship right now?",
    options: [
      { text: "Excellent—we're in a great place emotionally, sexually, and as partners", score: 4, flag: "green" },
      { text: "Good—we have minor issues but overall feel solid", score: 3 },
      { text: "Fair—we have some significant challenges we're working through", score: 2, flag: "yellow" },
      { text: "Struggling—we're dealing with major relationship issues", score: 1, flag: "red" }
    ]
  },
  {
    id: 13,
    category: "readiness",
    question: "Are both partners equally enthusiastic about exploring hotwifing?",
    options: [
      { text: "Yes, we're both genuinely excited and interested", score: 4, flag: "green" },
      { text: "One is more excited, but the other is genuinely curious and open", score: 3 },
      { text: "One partner is very interested, the other is hesitant but willing to try", score: 2, flag: "yellow" },
      { text: "One partner wants this; the other is going along to please them", score: 1, flag: "red" }
    ]
  },
  // Boundaries Questions (14-16)
  {
    id: 14,
    category: "boundaries",
    question: "Have you discussed and agreed upon specific boundaries for hotwifing (e.g., who finds partners, what acts are allowed, use of protection, communication during encounters)?",
    options: [
      { text: "Yes, we've thoroughly discussed and agreed on detailed boundaries", score: 4, flag: "green" },
      { text: "We've discussed some basics but need to get more specific", score: 3 },
      { text: "We've touched on it but don't have clear agreements yet", score: 2, flag: "yellow" },
      { text: "We haven't really discussed specific boundaries", score: 1, flag: "red" }
    ]
  },
  {
    id: 15,
    category: "boundaries",
    question: "How do you plan to handle situations where the hotwife develops emotional connection with a play partner?",
    options: [
      { text: "We've discussed this scenario and have agreements about emotional boundaries", score: 4, flag: "green" },
      { text: "We've acknowledged this could happen and would address it together", score: 3 },
      { text: "We haven't really thought about or discussed emotional attachments", score: 2, flag: "yellow" },
      { text: "This possibility makes one or both of us very uncomfortable", score: 1, flag: "red" }
    ]
  },
  {
    id: 16,
    category: "boundaries",
    question: "What's your plan if one of you wants to stop or slow down hotwifing after you've started?",
    options: [
      { text: "We've agreed that either partner can pause or stop at any time, no questions asked", score: 4, flag: "green" },
      { text: "We'd discuss it and find a compromise that works for both", score: 3 },
      { text: "We haven't discussed what 'stopping' would look like", score: 2, flag: "yellow" },
      { text: "One of us would likely feel pressure to continue even if uncomfortable", score: 1, flag: "red" }
    ]
  },
  // Motivation Questions (17-18)
  {
    id: 17,
    category: "motivation",
    question: "What's your PRIMARY motivation for exploring hotwifing?",
    options: [
      { text: "Mutual sexual excitement and adding adventure to our already strong relationship", score: 4, flag: "green" },
      { text: "Exploring fantasies together and deepening our connection", score: 4, flag: "green" },
      { text: "Curiosity about the lifestyle and wanting to experiment", score: 3 },
      { text: "Hoping it will improve our sex life or save a struggling relationship", score: 1, flag: "red" }
    ]
  },
  {
    id: 18,
    category: "motivation",
    question: "How do you envision hotwifing fitting into your relationship long-term?",
    options: [
      { text: "As an occasional adventure that enhances our primary bond", score: 4, flag: "green" },
      { text: "We're open to seeing where it goes—could be regular or occasional", score: 3 },
      { text: "We're not sure—we want to try it first and see how we feel", score: 2 },
      { text: "One of us sees it as a major lifestyle change; the other isn't sure", score: 1, flag: "yellow" }
    ]
  }
];

interface CategoryScore {
  category: string;
  score: number;
  maxScore: number;
  percentage: number;
  label: string;
}

interface ResultLevel {
  level: "green" | "yellow" | "red";
  title: string;
  summary: string;
  details: string[];
}

const HotwifingQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, { score: number; optionIndex: number }>>({});
  const [selectedFlags, setSelectedFlags] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  // Scroll to top when quiz starts, question changes, or results shown
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [quizStarted, currentQuestion, showResults]);

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = (questionId: number, score: number, optionIndex: number, flag?: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: { score, optionIndex } }));
    if (flag) {
      setSelectedFlags(prev => ({ ...prev, [questionId]: flag }));
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setSelectedFlags({});
    setShowResults(false);
    setQuizStarted(false);
  };

  const categoryLabels: Record<string, string> = {
    communication: "Communication",
    trust: "Trust & Security",
    jealousy: "Jealousy Management",
    readiness: "Relationship Readiness",
    boundaries: "Boundaries & Agreements",
    motivation: "Motivations & Expectations"
  };

  const results = useMemo(() => {
    if (!showResults) return null;

    // Calculate total score
    const totalScore = Object.values(answers).reduce((sum, answer) => sum + answer.score, 0);
    const maxScore = questions.length * 4;
    const percentage = Math.round((totalScore / maxScore) * 100);

    // Calculate category scores
    const categoryScores: CategoryScore[] = [];
    const categories = ["communication", "trust", "jealousy", "readiness", "boundaries", "motivation"];
    
    categories.forEach(cat => {
      const catQuestions = questions.filter(q => q.category === cat);
      const catScore = catQuestions.reduce((sum, q) => sum + (answers[q.id]?.score || 0), 0);
      const catMax = catQuestions.length * 4;
      categoryScores.push({
        category: cat,
        score: catScore,
        maxScore: catMax,
        percentage: Math.round((catScore / catMax) * 100),
        label: categoryLabels[cat]
      });
    });

    // Count red and yellow flags
    const redFlags = Object.values(selectedFlags).filter(f => f === "red").length;
    const yellowFlags = Object.values(selectedFlags).filter(f => f === "yellow").length;

    // Determine result level
    let resultLevel: ResultLevel;
    
    if (percentage >= 75 && redFlags === 0) {
      resultLevel = {
        level: "green",
        title: "You're Ready to Explore! 🎉",
        summary: "Based on your responses, your relationship shows strong indicators of readiness for hotwifing.",
        details: [
          "You demonstrate excellent communication skills and openness about sexual topics.",
          "Trust and security appear well-established in your relationship.",
          "You've done meaningful preparation work and have discussed key aspects together.",
          "Your motivations are healthy and aligned with relationship enhancement."
        ]
      };
    } else if (percentage >= 55 && redFlags <= 2) {
      resultLevel = {
        level: "yellow",
        title: "Almost Ready – Some Preparation Needed 🌟",
        summary: "You're on the right track, but there are some areas to strengthen before diving into hotwifing.",
        details: [
          "You have a good foundation but some aspects need more attention.",
          "Consider having deeper conversations in the areas that scored lower.",
          "Take time to address any concerns or hesitations either partner has.",
          "Building more trust and clearer boundaries will set you up for success."
        ]
      };
    } else {
      resultLevel = {
        level: "red",
        title: "Not Quite Ready Yet – Focus on Foundation First ⚠️",
        summary: "Your responses indicate some important areas need attention before exploring hotwifing.",
        details: [
          "Several key relationship foundations need strengthening first.",
          "Hotwifing works best when built on a rock-solid relationship.",
          "This isn't a 'no'—it's a 'not yet.' Focus on the areas below.",
          "Consider working with a couples therapist or ENM-aware counselor."
        ]
      };
    }

    // Find weak areas (categories under 60%)
    const weakAreas = categoryScores.filter(c => c.percentage < 60);
    
    // Find strong areas (categories 75%+)
    const strongAreas = categoryScores.filter(c => c.percentage >= 75);

    return {
      totalScore,
      maxScore,
      percentage,
      categoryScores,
      resultLevel,
      redFlags,
      yellowFlags,
      weakAreas,
      strongAreas
    };
  }, [showResults, answers, selectedFlags]);

  const currentQ = questions[currentQuestion];
  const isAnswered = answers[currentQ?.id] !== undefined;

  // Intro Screen
  if (!quizStarted) {
    return (
      <>
        <SEO
          title="Are You Ready for Hotwifing? Couples Quiz | SPICE"
          description="Take our comprehensive 18-question hotwifing readiness quiz with your partner. Get personalized analysis, relationship insights, and expert recommendations."
          keywords="hotwifing quiz, hotwife readiness test, couples quiz, stag vixen quiz, relationship readiness, ENM quiz, hotwifing assessment"
          canonical="https://thespiceapp.com/quiz/hotwifing"
        />

        <div className="relative min-h-screen">
          <ParticlesBackground />
          <Header />
          <Breadcrumbs />
          
          <main className="relative z-10 pt-32 pb-12">
            <div className="container mx-auto px-4 max-w-4xl">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 mb-6">
                  <Heart className="w-4 h-4 text-pink-500" />
                  <span className="text-sm font-medium text-pink-500">Couples Quiz</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                  Are You Ready for Hotwifing?
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                  This comprehensive 18-question assessment helps couples evaluate their readiness 
                  for the hotwifing lifestyle. Answer honestly together to get personalized insights 
                  and recommendations.
                </p>
              </div>

              {/* Quiz Info Cards */}
              <div className="grid md:grid-cols-3 gap-4 mb-12">
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
                  <Clock className="w-8 h-8 text-pink-500 mx-auto mb-3" />
                  <h3 className="font-bold mb-1">10-15 Minutes</h3>
                  <p className="text-sm text-muted-foreground">Take your time together</p>
                </div>
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
                  <Target className="w-8 h-8 text-pink-500 mx-auto mb-3" />
                  <h3 className="font-bold mb-1">18 Questions</h3>
                  <p className="text-sm text-muted-foreground">6 key relationship areas</p>
                </div>
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
                  <Sparkles className="w-8 h-8 text-pink-500 mx-auto mb-3" />
                  <h3 className="font-bold mb-1">Detailed Results</h3>
                  <p className="text-sm text-muted-foreground">Personalized analysis</p>
                </div>
              </div>

              {/* What You'll Learn */}
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 mb-12">
                <h2 className="text-xl font-bold mb-6">This Quiz Assesses:</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <MessageCircle className="w-5 h-5 text-pink-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Communication</h4>
                      <p className="text-sm text-muted-foreground">Your ability to discuss desires and concerns openly</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-pink-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Trust & Security</h4>
                      <p className="text-sm text-muted-foreground">The foundation of honesty in your relationship</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-pink-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Jealousy Management</h4>
                      <p className="text-sm text-muted-foreground">How you handle and process jealous feelings</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-pink-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Relationship Readiness</h4>
                      <p className="text-sm text-muted-foreground">Your overall relationship health and stability</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-pink-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Boundaries & Agreements</h4>
                      <p className="text-sm text-muted-foreground">How prepared you are with rules and limits</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Flame className="w-5 h-5 text-pink-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold">Motivations</h4>
                      <p className="text-sm text-muted-foreground">Why you want to explore and what you expect</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Glossary */}
              <div className="bg-pink-900/20 border border-pink-500/30 rounded-xl p-6 mb-12">
                <h3 className="font-bold mb-4">Quick Glossary</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong className="text-pink-400">Hotwife:</strong>
                    <span className="text-muted-foreground"> A woman in a committed relationship who has sexual encounters with other men, with her partner's knowledge and encouragement.</span>
                  </div>
                  <div>
                    <strong className="text-pink-400">Stag:</strong>
                    <span className="text-muted-foreground"> The husband/partner of a hotwife who enjoys and encourages her adventures.</span>
                  </div>
                  <div>
                    <strong className="text-pink-400">Vixen:</strong>
                    <span className="text-muted-foreground"> Another term for hotwife, often used in stag/vixen dynamics.</span>
                  </div>
                  <div>
                    <strong className="text-pink-400">Bull:</strong>
                    <span className="text-muted-foreground"> A man who has sexual encounters with a hotwife.</span>
                  </div>
                </div>
              </div>

              {/* Start Button */}
              <div className="text-center">
                <Button 
                  onClick={() => setQuizStarted(true)}
                  size="lg"
                  className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white px-12 py-6 text-lg rounded-full"
                >
                  Start Quiz Together
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  Best taken together as a couple. Answer honestly for accurate results.
                </p>
              </div>
            </div>
          </main>

          <FooterSection />
        </div>
      </>
    );
  }

  // Results Screen
  if (showResults && results) {
    const levelColors = {
      green: "from-green-500/20 to-emerald-500/20 border-green-500/30",
      yellow: "from-yellow-500/20 to-amber-500/20 border-yellow-500/30",
      red: "from-red-500/20 to-orange-500/20 border-red-500/30"
    };

    const levelIcons = {
      green: <CheckCircle className="w-12 h-12 text-green-500" />,
      yellow: <AlertTriangle className="w-12 h-12 text-yellow-500" />,
      red: <Shield className="w-12 h-12 text-red-500" />
    };

    return (
      <>
        <SEO
          title="Your Hotwifing Readiness Results | SPICE"
          description="Your personalized hotwifing readiness assessment results with detailed analysis and recommendations."
        />

        <div className="relative min-h-screen">
          <ParticlesBackground />
          <Header />
          <Breadcrumbs />
          
          <main className="relative z-10 pt-32 pb-12">
            <div className="container mx-auto px-4 max-w-4xl">
              {/* Overall Result */}
              <div className={`bg-gradient-to-br ${levelColors[results.resultLevel.level]} border rounded-2xl p-8 mb-8 text-center`}>
                <div className="flex justify-center mb-4">
                  {levelIcons[results.resultLevel.level]}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{results.resultLevel.title}</h1>
                <p className="text-lg text-muted-foreground mb-6">{results.resultLevel.summary}</p>
                
                {/* Score Display */}
                <div className="inline-flex items-center gap-4 bg-background/50 backdrop-blur-sm rounded-full px-8 py-4">
                  <span className="text-4xl font-bold">{results.percentage}%</span>
                  <span className="text-muted-foreground">Overall Readiness Score</span>
                </div>
              </div>

              {/* Key Points */}
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 mb-8">
                <h2 className="text-xl font-bold mb-4">What This Means</h2>
                <ul className="space-y-3">
                  {results.resultLevel.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Category Breakdown */}
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 mb-8">
                <h2 className="text-xl font-bold mb-6">Category Breakdown</h2>
                <div className="space-y-6">
                  {results.categoryScores.map((cat) => (
                    <div key={cat.category}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{cat.label}</span>
                        <span className={`font-bold ${
                          cat.percentage >= 75 ? "text-green-500" : 
                          cat.percentage >= 50 ? "text-yellow-500" : "text-red-500"
                        }`}>
                          {cat.percentage}%
                        </span>
                      </div>
                      <Progress 
                        value={cat.percentage} 
                        className="h-3"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Areas to Strengthen */}
              {results.weakAreas.length > 0 && (
                <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-6 mb-8">
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-500" />
                    Areas to Strengthen
                  </h2>
                  <div className="space-y-4">
                    {results.weakAreas.map((area) => (
                      <div key={area.category} className="bg-background/30 rounded-lg p-4">
                        <h3 className="font-semibold text-yellow-400 mb-2">{area.label}</h3>
                        <p className="text-sm text-muted-foreground">
                          {area.category === "communication" && "Focus on creating safe spaces for vulnerable conversations. Practice sharing fantasies without judgment. Consider starting with low-stakes discussions before diving into deeper topics."}
                          {area.category === "trust" && "Trust is foundational for hotwifing. Work on building transparency in your daily relationship first. Address any past wounds before adding new complexity."}
                          {area.category === "jealousy" && "Jealousy is normal, but needs healthy management. Practice identifying triggers, sitting with uncomfortable feelings, and processing them together before exploring ENM."}
                          {area.category === "readiness" && "Your relationship may benefit from more time to strengthen its foundation. Focus on connection, intimacy, and partnership before adding hotwifing to the mix."}
                          {area.category === "boundaries" && "Clear boundaries are essential for safe exploration. Have detailed conversations about limits, safe words, and agreements before any hotwifing activities."}
                          {area.category === "motivation" && "Examine your 'why' together. Hotwifing works best when it enhances an already strong relationship, not as a fix for problems."}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Your Strengths */}
              {results.strongAreas.length > 0 && (
                <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6 mb-8">
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    Your Relationship Strengths
                  </h2>
                  <div className="flex flex-wrap gap-3">
                    {results.strongAreas.map((area) => (
                      <span key={area.category} className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                        {area.label}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Next Steps */}
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 mb-8">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <ArrowRight className="w-5 h-5 text-primary" />
                  Recommended Next Steps
                </h2>
                
                {results.resultLevel.level === "green" && (
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary text-sm font-bold flex-shrink-0">1</span>
                      <div>
                        <h4 className="font-semibold">Finalize Your Boundaries Document</h4>
                        <p className="text-sm text-muted-foreground">Write down your agreements about who finds partners, what's allowed, protection requirements, and communication rules.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary text-sm font-bold flex-shrink-0">2</span>
                      <div>
                        <h4 className="font-semibold">Start Small</h4>
                        <p className="text-sm text-muted-foreground">Consider starting with lighter activities like flirting, going to a club, or soft interactions before full hotwifing.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary text-sm font-bold flex-shrink-0">3</span>
                      <div>
                        <h4 className="font-semibold">Create Your Bull Criteria</h4>
                        <p className="text-sm text-muted-foreground">Discuss what qualities you're looking for, how you'll vet candidates, and what vetting process you'll use.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary text-sm font-bold flex-shrink-0">4</span>
                      <div>
                        <h4 className="font-semibold">Plan Your Aftercare</h4>
                        <p className="text-sm text-muted-foreground">Decide how you'll reconnect after experiences. Reclamation sex? Deep talks? Time together?</p>
                      </div>
                    </div>
                  </div>
                )}

                {results.resultLevel.level === "yellow" && (
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-yellow-500/20 text-yellow-400 text-sm font-bold flex-shrink-0">1</span>
                      <div>
                        <h4 className="font-semibold">Have the Deep Conversations</h4>
                        <p className="text-sm text-muted-foreground">Use the weak areas above as conversation starters. Go deep on each topic before moving forward.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-yellow-500/20 text-yellow-400 text-sm font-bold flex-shrink-0">2</span>
                      <div>
                        <h4 className="font-semibold">Try Lower-Stakes Exploration First</h4>
                        <p className="text-sm text-muted-foreground">Consider activities like dirty talk about the fantasy, watching hotwife content together, or role-playing scenarios before real-life exploration.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-yellow-500/20 text-yellow-400 text-sm font-bold flex-shrink-0">3</span>
                      <div>
                        <h4 className="font-semibold">Retake This Quiz in 1-3 Months</h4>
                        <p className="text-sm text-muted-foreground">After working on the weak areas, take the quiz again to track your progress.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-yellow-500/20 text-yellow-400 text-sm font-bold flex-shrink-0">4</span>
                      <div>
                        <h4 className="font-semibold">Consider a Couples Workshop</h4>
                        <p className="text-sm text-muted-foreground">ENM-focused workshops or couples therapy can accelerate your preparation.</p>
                      </div>
                    </div>
                  </div>
                )}

                {results.resultLevel.level === "red" && (
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-red-500/20 text-red-400 text-sm font-bold flex-shrink-0">1</span>
                      <div>
                        <h4 className="font-semibold">Focus on Relationship Foundation First</h4>
                        <p className="text-sm text-muted-foreground">Before exploring hotwifing, address the core relationship areas that scored low. This isn't a rejection—it's protection.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-red-500/20 text-red-400 text-sm font-bold flex-shrink-0">2</span>
                      <div>
                        <h4 className="font-semibold">Consider Professional Support</h4>
                        <p className="text-sm text-muted-foreground">A couples therapist (ideally one familiar with ENM) can help you build the foundation needed for any lifestyle exploration.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-red-500/20 text-red-400 text-sm font-bold flex-shrink-0">3</span>
                      <div>
                        <h4 className="font-semibold">Keep the Fantasy Alive</h4>
                        <p className="text-sm text-muted-foreground">You can still enjoy hotwifing as a fantasy through dirty talk and role-play while you build your foundation for real-life exploration.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-red-500/20 text-red-400 text-sm font-bold flex-shrink-0">4</span>
                      <div>
                        <h4 className="font-semibold">Revisit in 6-12 Months</h4>
                        <p className="text-sm text-muted-foreground">After dedicated work on your relationship, take this quiz again. Many couples who weren't ready become ready with time and effort.</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Recommended Resources */}
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 mb-8">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  Recommended Resources
                </h2>

                <h3 className="font-semibold text-primary mb-3">📚 Articles on SPICE</h3>
                <div className="grid md:grid-cols-2 gap-3 mb-6">
                  <Link to="/blog/hotwifing-beginners-guide" className="flex items-center gap-2 p-3 bg-background/50 rounded-lg hover:bg-background/80 transition-colors">
                    <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm">Beginner's Guide to Hotwifing</span>
                  </Link>
                  <Link to="/blog/hotwifing-jealousy" className="flex items-center gap-2 p-3 bg-background/50 rounded-lg hover:bg-background/80 transition-colors">
                    <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm">Overcoming Jealousy: Real Strategies</span>
                  </Link>
                  <Link to="/blog/hotwifing-finding-bull" className="flex items-center gap-2 p-3 bg-background/50 rounded-lg hover:bg-background/80 transition-colors">
                    <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm">Finding the Perfect Bull</span>
                  </Link>
                  <Link to="/blog/hotwifing-first-date" className="flex items-center gap-2 p-3 bg-background/50 rounded-lg hover:bg-background/80 transition-colors">
                    <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm">My First Hotwife Date</span>
                  </Link>
                  <Link to="/blog/hotwifing-communication-marriage" className="flex items-center gap-2 p-3 bg-background/50 rounded-lg hover:bg-background/80 transition-colors">
                    <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm">How Hotwifing Transformed Our Marriage</span>
                  </Link>
                  <Link to="/lifestyle/hotwifing-guide" className="flex items-center gap-2 p-3 bg-background/50 rounded-lg hover:bg-background/80 transition-colors">
                    <ArrowRight className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm">Complete Hotwifing Guide</span>
                  </Link>
                </div>

                <h3 className="font-semibold text-primary mb-3">📖 Recommended Books</h3>
                <div className="space-y-3 mb-6">
                  <div className="p-3 bg-background/50 rounded-lg">
                    <p className="font-medium">"The Ethical Slut" by Janet Hardy & Dossie Easton</p>
                    <p className="text-sm text-muted-foreground">The classic guide to ethical non-monogamy and open relationships.</p>
                  </div>
                  <div className="p-3 bg-background/50 rounded-lg">
                    <p className="font-medium">"Opening Up" by Tristan Taormino</p>
                    <p className="text-sm text-muted-foreground">A practical guide to creating and sustaining open relationships.</p>
                  </div>
                  <div className="p-3 bg-background/50 rounded-lg">
                    <p className="font-medium">"Designer Relationships" by Mark Michaels & Patricia Johnson</p>
                    <p className="text-sm text-muted-foreground">How to create your own unique relationship structure.</p>
                  </div>
                  <div className="p-3 bg-background/50 rounded-lg">
                    <p className="font-medium">"Jealousy Workbook" by Kathy Labriola</p>
                    <p className="text-sm text-muted-foreground">Exercises for working through jealousy in open relationships.</p>
                  </div>
                </div>

                <h3 className="font-semibold text-primary mb-3">🎧 Podcasts</h3>
                <div className="space-y-3">
                  <div className="p-3 bg-background/50 rounded-lg">
                    <p className="font-medium">We Gotta Thing</p>
                    <p className="text-sm text-muted-foreground">A podcast about swinging and ENM lifestyles for couples.</p>
                  </div>
                  <div className="p-3 bg-background/50 rounded-lg">
                    <p className="font-medium">Normalizing Non-Monogamy</p>
                    <p className="text-sm text-muted-foreground">Stories and advice from the ENM community.</p>
                  </div>
                  <div className="p-3 bg-background/50 rounded-lg">
                    <p className="font-medium">Keys and Anklets</p>
                    <p className="text-sm text-muted-foreground">Dedicated to the hotwife and stag/vixen lifestyle.</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={handleRestart}
                  variant="outline"
                  size="lg"
                  className="rounded-full"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Retake Quiz
                </Button>
                <Link to="/download">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white rounded-full w-full sm:w-auto"
                  >
                    Join SPICE Community
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </main>

          <FooterSection />
        </div>
      </>
    );
  }

  // Quiz Questions Screen
  return (
    <>
      <SEO
        title={`Question ${currentQuestion + 1} of ${questions.length} | Hotwifing Quiz | SPICE`}
        description="Take our comprehensive hotwifing readiness quiz with your partner."
      />

      <div className="relative min-h-screen">
        <ParticlesBackground />
        <Header />
        <Breadcrumbs />
        
        <main className="relative z-10 pt-32 pb-12">
          <div className="container mx-auto px-4 max-w-3xl">
            {/* Progress */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-muted-foreground">
                  Question {currentQuestion + 1} of {questions.length}
                </span>
                <span className="text-sm font-medium text-primary">
                  {categoryLabels[currentQ.category]}
                </span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            {/* Question */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 mb-8">
              <h2 className="text-xl md:text-2xl font-bold mb-8 leading-relaxed">
                {currentQ.question}
              </h2>

              <div className="space-y-4">
                {currentQ.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(currentQ.id, option.score, index, option.flag)}
                    className={`w-full text-left p-4 rounded-xl border transition-all ${
                      answers[currentQ.id]?.optionIndex === index
                        ? "bg-primary/20 border-primary"
                        : "bg-background/50 border-border hover:border-primary/50"
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <span className={`flex items-center justify-center w-6 h-6 rounded-full text-sm font-bold flex-shrink-0 ${
                        answers[currentQ.id]?.optionIndex === index
                          ? "bg-primary text-white"
                          : "bg-muted text-muted-foreground"
                      }`}>
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span className={answers[currentQ.id]?.optionIndex === index ? "text-foreground" : "text-muted-foreground"}>
                        {option.text}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between">
              <Button
                onClick={handlePrevious}
                variant="outline"
                disabled={currentQuestion === 0}
                className="rounded-full"
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Previous
              </Button>

              <Button
                onClick={handleNext}
                disabled={!isAnswered}
                className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white rounded-full"
              >
                {currentQuestion === questions.length - 1 ? "See Results" : "Next"}
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </main>

        <FooterSection />
      </div>
    </>
  );
};

export default HotwifingQuiz;
