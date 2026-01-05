import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useToast } from "@/hooks/use-toast";
import html2canvas from 'html2canvas';
import { ArrowRight, ArrowLeft, RefreshCw, Heart, Users, Shield, MessageCircle, Sparkles, CheckCircle, BookOpen, ExternalLink, Download, Share2, Twitter, Facebook, Linkedin, Copy } from "lucide-react";

interface Question {
  id: number;
  category: string;
  question: string;
  options: Array<{
    text: string;
    score: number;
  }>;
}

interface CategoryScore {
  name: string;
  score: number;
  maxScore: number;
  percentage: number;
}

const SwingingQuiz = () => {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: { score: number; optionIndex: number } }>({});
  const [showResults, setShowResults] = useState(false);
  
  const { toast } = useToast();
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);

  // Scroll to top when quiz starts, question changes, or results shown
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [started, currentQuestion, showResults]);

  const questions: Question[] = [
    // Communication (4 questions)
    {
      id: 1,
      category: "Communication",
      question: "How openly can you and your partner discuss sexual fantasies and desires?",
      options: [
        { text: "We can talk about anything without judgment or discomfort", score: 5 },
        { text: "We discuss most things, but some topics are still a bit awkward", score: 4 },
        { text: "We can talk about basics, but detailed fantasies feel uncomfortable", score: 2 },
        { text: "We rarely or never discuss sexual fantasies openly", score: 0 }
      ]
    },
    {
      id: 2,
      category: "Communication",
      question: "How do you and your partner handle disagreements or conflicts?",
      options: [
        { text: "We discuss calmly, listen to each other, and find solutions together", score: 5 },
        { text: "We usually work through it, though it can get heated sometimes", score: 3 },
        { text: "We avoid conflict or one person usually gives in to keep the peace", score: 1 },
        { text: "Conflicts often escalate or go unresolved for extended periods", score: 0 }
      ]
    },
    {
      id: 3,
      category: "Communication",
      question: "Can you tell your partner to stop during an intimate encounter without fear of judgment?",
      options: [
        { text: "Absolutely, we have safe words/signals and respect them immediately", score: 5 },
        { text: "Yes, though it might require some explanation afterward", score: 4 },
        { text: "I think so, but we haven't really tested this", score: 2 },
        { text: "I'm not sure or I worry about disappointing them", score: 0 }
      ]
    },
    {
      id: 4,
      category: "Communication",
      question: "How comfortable are you discussing boundaries and limits before a swinging experience?",
      options: [
        { text: "Very comfortable - we create detailed agreements together", score: 5 },
        { text: "Comfortable with discussing main boundaries", score: 4 },
        { text: "Somewhat comfortable but haven't discussed in detail", score: 2 },
        { text: "Uncomfortable or haven't discussed this at all", score: 0 }
      ]
    },

    // Trust & Security (4 questions)
    {
      id: 5,
      category: "Trust & Security",
      question: "How would you rate the overall trust level in your relationship?",
      options: [
        { text: "Complete trust - no doubts or insecurities", score: 5 },
        { text: "Strong trust with occasional minor insecurities", score: 4 },
        { text: "Moderate trust - working through some trust issues", score: 2 },
        { text: "Trust issues exist or we're rebuilding trust", score: 0 }
      ]
    },
    {
      id: 6,
      category: "Trust & Security",
      question: "How secure do you feel in your relationship?",
      options: [
        { text: "Completely secure - no fear of losing my partner", score: 5 },
        { text: "Generally secure with occasional moments of doubt", score: 3 },
        { text: "Sometimes insecure about the relationship's stability", score: 1 },
        { text: "Often insecure or worried about the relationship", score: 0 }
      ]
    },
    {
      id: 7,
      category: "Trust & Security",
      question: "If your partner enjoyed someone else physically, how would you likely feel?",
      options: [
        { text: "Happy for them and secure in our relationship", score: 5 },
        { text: "Mixed feelings but ultimately okay with it", score: 4 },
        { text: "Uncertain - might trigger insecurity or jealousy", score: 2 },
        { text: "Very uncomfortable or threatened by this idea", score: 0 }
      ]
    },
    {
      id: 8,
      category: "Trust & Security",
      question: "Do you believe swinging could strengthen your relationship?",
      options: [
        { text: "Yes, as an adventure we'd experience together", score: 5 },
        { text: "Possibly, if we approach it carefully and communicate well", score: 4 },
        { text: "Unsure - I see both potential benefits and risks", score: 2 },
        { text: "No, or I'm concerned it might create problems", score: 0 }
      ]
    },

    // Jealousy Management (3 questions)
    {
      id: 9,
      category: "Jealousy Management",
      question: "How do you typically react when your partner finds someone else attractive?",
      options: [
        { text: "I'm fine with it and we can talk about attractions openly", score: 5 },
        { text: "It's okay as long as it's just looking/admiring", score: 4 },
        { text: "I feel a little uncomfortable but try to hide it", score: 2 },
        { text: "I feel jealous or threatened by this", score: 0 }
      ]
    },
    {
      id: 10,
      category: "Jealousy Management",
      question: "Imagine watching your partner kiss someone else at a lifestyle event. How would you feel?",
      options: [
        { text: "Excited or turned on by it", score: 5 },
        { text: "Nervous but okay, especially if we discussed it beforehand", score: 4 },
        { text: "Very uncomfortable and would probably want to stop", score: 1 },
        { text: "Devastated or betrayed", score: 0 }
      ]
    },
    {
      id: 11,
      category: "Jealousy Management",
      question: "When you've felt jealous in the past, how have you handled it?",
      options: [
        { text: "I communicate my feelings calmly and work through them", score: 5 },
        { text: "I process internally first, then discuss when I'm calmer", score: 4 },
        { text: "I struggle to express it or it comes out as anger", score: 2 },
        { text: "I shut down, avoid the topic, or let it fester", score: 0 }
      ]
    },

    // Relationship Foundation (3 questions)
    {
      id: 12,
      category: "Relationship Foundation",
      question: "How long have you been in your current committed relationship?",
      options: [
        { text: "3+ years with a very strong foundation", score: 5 },
        { text: "1-3 years and feeling stable", score: 4 },
        { text: "6 months to 1 year", score: 2 },
        { text: "Less than 6 months", score: 0 }
      ]
    },
    {
      id: 13,
      category: "Relationship Foundation",
      question: "Why are you interested in exploring swinging?",
      options: [
        { text: "To add excitement and grow together as a couple", score: 5 },
        { text: "Curious about new experiences while staying connected", score: 4 },
        { text: "To fix problems or add missing excitement to our relationship", score: 1 },
        { text: "Mostly one partner's idea and the other is unsure", score: 0 }
      ]
    },
    {
      id: 14,
      category: "Relationship Foundation",
      question: "How satisfied are you with your current sex life together?",
      options: [
        { text: "Very satisfied - this would just add to an already great sex life", score: 5 },
        { text: "Satisfied overall with room to explore more", score: 4 },
        { text: "Somewhat dissatisfied - hoping this helps", score: 1 },
        { text: "Very dissatisfied or disconnected sexually", score: 0 }
      ]
    },

    // Boundaries & Comfort (3 questions)
    {
      id: 15,
      category: "Boundaries & Comfort",
      question: "Have you and your partner discussed specific boundaries for swinging?",
      options: [
        { text: "Yes, extensively - we have clear agreements", score: 5 },
        { text: "Yes, we've covered the main points", score: 4 },
        { text: "We've talked about it generally but not in detail", score: 2 },
        { text: "No, we haven't discussed boundaries yet", score: 0 }
      ]
    },
    {
      id: 16,
      category: "Boundaries & Comfort",
      question: "What level of sexual activity would you be comfortable starting with?",
      options: [
        { text: "We've discussed starting slow (same room, soft swap, or just socializing)", score: 5 },
        { text: "Soft swap (kissing, touching, oral) to start", score: 4 },
        { text: "Open to full swap from the beginning", score: 3 },
        { text: "Not sure what we're comfortable with yet", score: 1 }
      ]
    },
    {
      id: 17,
      category: "Boundaries & Comfort",
      question: "How would you feel about your partner playing separately (without you present)?",
      options: [
        { text: "We want to experience everything together, at least initially", score: 5 },
        { text: "Maybe eventually, but not at first", score: 4 },
        { text: "I'd consider it if boundaries are very clear", score: 2 },
        { text: "I'm very uncomfortable with separate play", score: 3 }
      ]
    },

    // Understanding & Readiness (3 questions)
    {
      id: 18,
      category: "Understanding & Readiness",
      question: "How much have you learned about swinging lifestyle etiquette and norms?",
      options: [
        { text: "We've done extensive research together", score: 5 },
        { text: "We've read several articles and discussed them", score: 4 },
        { text: "One or both of us have done some reading", score: 2 },
        { text: "We haven't researched much yet", score: 0 }
      ]
    },
    {
      id: 19,
      category: "Understanding & Readiness",
      question: "What is your understanding of consent in the lifestyle?",
      options: [
        { text: "Explicit, enthusiastic consent is required and can be withdrawn anytime", score: 5 },
        { text: "Both people need to agree before anything happens", score: 4 },
        { text: "I have a basic understanding but could learn more", score: 2 },
        { text: "I'm not sure - haven't thought about it much", score: 0 }
      ]
    },
    {
      id: 20,
      category: "Understanding & Readiness",
      question: "How do you feel about taking this journey slowly?",
      options: [
        { text: "We're committed to going at a pace that works for both of us", score: 5 },
        { text: "Yes, we plan to take it slow but are open to opportunities", score: 4 },
        { text: "We want to dive in and see what happens", score: 2 },
        { text: "One of us wants to rush while the other wants to go slow", score: 0 }
      ]
    }
  ];

  const handleAnswer = (score: number, optionIndex: number) => {
    setAnswers({ ...answers, [currentQuestion]: { score, optionIndex } });
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const retakeQuiz = () => {
    setAnswers({});
    setCurrentQuestion(0);
    setShowResults(false);
    setStarted(false);
  };

  const calculateResults = () => {
    const categoryScores: { [key: string]: { total: number; max: number } } = {};

    questions.forEach((q, index) => {
      if (!categoryScores[q.category]) {
        categoryScores[q.category] = { total: 0, max: 0 };
      }
      const maxScore = Math.max(...q.options.map(opt => opt.score));
      categoryScores[q.category].max += maxScore;
      if (answers[index]) {
        categoryScores[q.category].total += answers[index].score;
      }
    });

    const results: CategoryScore[] = Object.keys(categoryScores).map(category => ({
      name: category,
      score: categoryScores[category].total,
      maxScore: categoryScores[category].max,
      percentage: Math.round((categoryScores[category].total / categoryScores[category].max) * 100)
    }));

    const totalScore = Object.values(categoryScores).reduce((sum, cat) => sum + cat.total, 0);
    const maxTotalScore = Object.values(categoryScores).reduce((sum, cat) => sum + cat.max, 0);
    const overallPercentage = Math.round((totalScore / maxTotalScore) * 100);

    return { results, totalScore, maxTotalScore, overallPercentage };
  };

  const getReadinessLevel = (percentage: number) => {
    if (percentage >= 80) return { level: "Highly Ready", color: "text-green-500", bgColor: "bg-green-500/20" };
    if (percentage >= 60) return { level: "Ready with Some Preparation", color: "text-blue-500", bgColor: "bg-blue-500/20" };
    if (percentage >= 40) return { level: "Consider More Preparation", color: "text-yellow-500", bgColor: "bg-yellow-500/20" };
    return { level: "Significant Preparation Needed", color: "text-orange-500", bgColor: "bg-orange-500/20" };
  };

  const getRecommendations = (percentage: number, categoryResults: CategoryScore[]) => {
    const recommendations = [];
    
    // Overall readiness recommendations
    if (percentage >= 80) {
      recommendations.push({
        title: "You're Well-Prepared!",
        description: "Your relationship shows strong readiness for exploring swinging. Consider starting with lifestyle meet-and-greets or clubs to ease into the experience."
      });
    } else if (percentage >= 60) {
      recommendations.push({
        title: "Solid Foundation with Room to Strengthen",
        description: "You have a good foundation. Focus on the areas scored lower and continue building communication and trust before taking physical steps."
      });
    } else if (percentage >= 40) {
      recommendations.push({
        title: "Work on Key Areas First",
        description: "Your relationship could benefit from more preparation. Focus on communication, trust, and understanding lifestyle dynamics before proceeding."
      });
    } else {
      recommendations.push({
        title: "Take Time to Build Your Foundation",
        description: "Consider pausing on swinging plans and strengthening your relationship foundation first. This isn't a rejection of swinging—it's about timing."
      });
    }

    // Category-specific recommendations
    categoryResults.forEach(category => {
      if (category.percentage < 60) {
        if (category.name === "Communication") {
          recommendations.push({
            title: `Strengthen ${category.name}`,
            description: "Practice having vulnerable conversations about desires, boundaries, and fears. Consider couples therapy to improve communication skills."
          });
        } else if (category.name === "Trust & Security") {
          recommendations.push({
            title: `Build ${category.name}`,
            description: "Work on relationship security before adding complexity. Consider therapy if trust issues exist. Swinging requires rock-solid trust."
          });
        } else if (category.name === "Jealousy Management") {
          recommendations.push({
            title: `Address ${category.name}`,
            description: "Learn jealousy management techniques. Read 'The Jealousy Workbook' and practice handling smaller triggers before lifestyle experiences."
          });
        } else if (category.name === "Relationship Foundation") {
          recommendations.push({
            title: `Strengthen ${category.name}`,
            description: "Focus on deepening your connection and satisfaction together. Swinging enhances good relationships but doesn't fix struggling ones."
          });
        } else if (category.name === "Boundaries & Comfort") {
          recommendations.push({
            title: `Define ${category.name}`,
            description: "Have detailed conversations about boundaries, limits, and comfort zones. Create written agreements and revisit them regularly."
          });
        } else if (category.name === "Understanding & Readiness") {
          recommendations.push({
            title: `Increase ${category.name}`,
            description: "Read lifestyle guides, join online communities, and attend educational meet-and-greets before physical play."
          });
        }
      }
    });

    return recommendations;
  };

  const getBlogRecommendations = (percentage: number, categoryResults: CategoryScore[]) => {
    const blogs = [];

    // Always recommend these
    blogs.push({
      title: "Swinging 101: The Complete Beginner's Guide",
      path: "/blog/swinging-101",
      reason: "Essential reading for understanding the lifestyle basics"
    });

    // Based on overall readiness
    if (percentage >= 70) {
      blogs.push({
        title: "How to Find Other Swinging Couples",
        path: "/blog/swinging-finding-couples",
        reason: "You're ready to start connecting with others"
      });
      blogs.push({
        title: "Swinging Etiquette: Do's and Don'ts",
        path: "/blog/swinging-etiquette",
        reason: "Learn the unwritten rules before your first experience"
      });
    }

    if (percentage < 70) {
      blogs.push({
        title: "Common Mistakes New Swingers Make",
        path: "/blog/swinging-mistakes",
        reason: "Learn from others' experiences before starting"
      });
    }

    // Based on category scores
    const jealousyScore = categoryResults.find(c => c.name === "Jealousy Management");
    if (jealousyScore && jealousyScore.percentage < 70) {
      blogs.push({
        title: "Managing Jealousy in the Swinging Lifestyle",
        path: "/blog/swinging-jealousy",
        reason: "Strategies for handling jealousy effectively"
      });
    }

    const communicationScore = categoryResults.find(c => c.name === "Communication");
    if (communicationScore && communicationScore.percentage < 70) {
      blogs.push({
        title: "How Swinging Strengthened Our Marriage",
        path: "/blog/swinging-marriage",
        reason: "Learn how communication is key to lifestyle success"
      });
    }

    const boundariesScore = categoryResults.find(c => c.name === "Boundaries & Comfort");
    if (boundariesScore && boundariesScore.percentage < 70) {
      blogs.push({
        title: "Soft Swap vs Full Swap: What's Right for You?",
        path: "/blog/swinging-soft-full-swap",
        reason: "Understanding different comfort levels and boundaries"
      });
    }

    const foundationScore = categoryResults.find(c => c.name === "Relationship Foundation");
    if (foundationScore && foundationScore.percentage < 70) {
      blogs.push({
        title: "Keeping the Spark Alive in Your Swinging Journey",
        path: "/blog/swinging-keeping-spark",
        reason: "Ensure your primary relationship stays strong"
      });
    }

    // Safety is important for everyone
    blogs.push({
      title: "Swinging Health & Safety Guide",
      path: "/blog/swinging-health-safety",
      reason: "Essential safety practices for the lifestyle"
    });

    return blogs.slice(0, 6); // Limit to 6 recommendations
  };

  const getBookRecommendations = (percentage: number) => {
    const books = [
      {
        title: "The Ethical Slut",
        author: "Dossie Easton & Janet Hardy",
        description: "The classic guide to non-monogamy, jealousy management, and communication."
      },
      {
        title: "Opening Up",
        author: "Tristan Taormino",
        description: "Comprehensive guide to creating and sustaining open relationships."
      },
      {
        title: "The Lifestyle: A Look at the Erotic Rites of Swingers",
        author: "Terry Gould",
        description: "Deep dive into swinging culture, history, and modern practice."
      }
    ];

    if (percentage < 60) {
      books.push({
        title: "The Jealousy Workbook",
        author: "Kathy Labriola",
        description: "Practical exercises for understanding and managing jealousy."
      });
      books.push({
        title: "Mating in Captivity",
        author: "Esther Perel",
        description: "Reconciling domesticity and sexual desire in long-term relationships."
      });
    }

    return books;
  };

  if (!started) {
    return (
      <>
        <SEO
          title="Swinging Readiness Quiz for Couples | SPICE"
          description="Assess your relationship's readiness for the swinging lifestyle. Take our comprehensive 20-question quiz for couples to evaluate communication, trust, boundaries, and more."
          keywords="swinging quiz, lifestyle readiness, couple quiz, swinging preparation, lifestyle assessment"
          canonical="https://thespiceapp.com/quiz/swinging"
        />

        <div className="relative min-h-screen">
          <ParticlesBackground />
          <Header />
          <Breadcrumbs />

          <main className="relative z-10 pt-32 pb-12">
            <div className="container mx-auto px-4 max-w-4xl">
              {/* Hero Section */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 mb-6">
                  <Users className="w-4 h-4 text-pink-500" />
                  <span className="text-sm font-medium text-pink-500">Couples Assessment</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
                  Are You Ready for Swinging?
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Take this comprehensive 20-question assessment to evaluate your relationship's readiness for the swinging lifestyle. Get personalized recommendations and resources.
                </p>
              </div>

              {/* Info Cards */}
              <div className="grid md:grid-cols-3 gap-4 mb-12">
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
                  <MessageCircle className="w-8 h-8 text-pink-500 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">20 Questions</h3>
                  <p className="text-sm text-muted-foreground">Comprehensive assessment of readiness</p>
                </div>
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
                  <Sparkles className="w-8 h-8 text-pink-500 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">15-20 Minutes</h3>
                  <p className="text-sm text-muted-foreground">Take your time answering honestly</p>
                </div>
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
                  <BookOpen className="w-8 h-8 text-pink-500 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Detailed Results</h3>
                  <p className="text-sm text-muted-foreground">Personalized insights & resources</p>
                </div>
              </div>

              {/* Assessment Categories */}
              <div className="bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-pink-500/10 border border-pink-500/30 rounded-2xl p-8 mb-12">
                <h2 className="text-2xl font-bold mb-6 text-center">What This Quiz Assesses</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <MessageCircle className="w-5 h-5 text-pink-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Communication</h3>
                      <p className="text-sm text-muted-foreground">Your ability to discuss desires, boundaries, and concerns openly</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-pink-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Trust & Security</h3>
                      <p className="text-sm text-muted-foreground">The foundation of trust and emotional security in your relationship</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-pink-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Jealousy Management</h3>
                      <p className="text-sm text-muted-foreground">How you handle jealousy and seeing partners with others</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-pink-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Relationship Foundation</h3>
                      <p className="text-sm text-muted-foreground">The strength and stability of your partnership</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-pink-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Boundaries & Comfort</h3>
                      <p className="text-sm text-muted-foreground">Your clarity on limits and comfort levels</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-pink-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Understanding & Readiness</h3>
                      <p className="text-sm text-muted-foreground">Your knowledge of the lifestyle and realistic expectations</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Start Button */}
              <div className="text-center">
                <button
                  onClick={() => setStarted(true)}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-semibold rounded-full transition-all shadow-lg hover:shadow-xl"
                >
                  Start Quiz Together
                  <ArrowRight className="w-5 h-5" />
                </button>
                <p className="text-sm text-muted-foreground mt-4">
                  Best taken together as a couple for honest discussion
                </p>
              </div>
            </div>
          </main>

          <FooterSection />
        </div>
      </>
    );
  }

  if (showResults) {
    const { results, totalScore, maxTotalScore, overallPercentage } = calculateResults();
    const readiness = getReadinessLevel(overallPercentage);
    const recommendations = getRecommendations(overallPercentage, results);
    const blogPosts = getBlogRecommendations(overallPercentage, results);
    const books = getBookRecommendations(overallPercentage);

    return (
      <>
        <SEO
          title="Your Swinging Readiness Results | SPICE"
          description="View your personalized swinging readiness assessment results with recommendations and resources."
          canonical="https://thespiceapp.com/quiz/swinging/results"
        />

        <div className="relative min-h-screen">
          <ParticlesBackground />
          <Header />
          <Breadcrumbs />

          <main className="relative z-10 pt-32 pb-12">
            <div className="container mx-auto px-4 max-w-4xl">
              {/* Results Header */}
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">Your Swinging Readiness Results</h1>
                <p className="text-muted-foreground">Based on your answers, here's your comprehensive assessment</p>
              </div>

              {/* Overall Score */}
              <div className={`${readiness.bgColor} border border-pink-500/30 rounded-2xl p-8 mb-8 text-center`}>
                <div className="text-6xl font-bold mb-2 bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">
                  {overallPercentage}%
                </div>
                <div className={`text-2xl font-semibold ${readiness.color} mb-2`}>
                  {readiness.level}
                </div>
                <p className="text-muted-foreground">
                  You scored {totalScore} out of {maxTotalScore} points
                </p>
              </div>

              {/* Category Breakdown */}
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6">Category Breakdown</h2>
                <div className="space-y-6">
                  {results.map((category) => (
                    <div key={category.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold">{category.name}</span>
                        <span className="text-sm text-muted-foreground">
                          {category.score}/{category.maxScore} ({category.percentage}%)
                        </span>
                      </div>
                      <div className="w-full bg-muted/30 rounded-full h-3 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-pink-500 to-red-500 rounded-full transition-all duration-500"
                          style={{ width: `${category.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommendations */}
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6">Personalized Recommendations</h2>
                <div className="space-y-4">
                  {recommendations.map((rec, index) => (
                    <div key={index} className="bg-background/50 rounded-xl p-6">
                      <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-pink-500" />
                        {rec.title}
                      </h3>
                      <p className="text-muted-foreground">{rec.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Next Steps */}
              <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/30 rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6">Your Next Steps</h2>
                <div className="space-y-4">
                  {overallPercentage >= 70 ? (
                    <>
                      <div className="flex items-start gap-3">
                        <div className="bg-pink-500/20 rounded-full p-2 flex-shrink-0">
                          <span className="text-pink-500 font-bold">1</span>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Join SPICE Community</h3>
                          <p className="text-sm text-muted-foreground">Connect with experienced lifestyle couples and singles in a safe, verified environment</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-pink-500/20 rounded-full p-2 flex-shrink-0">
                          <span className="text-pink-500 font-bold">2</span>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Attend a Meet-and-Greet</h3>
                          <p className="text-sm text-muted-foreground">Start with no-pressure social events to meet others in the lifestyle</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-pink-500/20 rounded-full p-2 flex-shrink-0">
                          <span className="text-pink-500 font-bold">3</span>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Start Slow</h3>
                          <p className="text-sm text-muted-foreground">Consider soft swap or same-room play before full swap experiences</p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-start gap-3">
                        <div className="bg-pink-500/20 rounded-full p-2 flex-shrink-0">
                          <span className="text-pink-500 font-bold">1</span>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Continue Education</h3>
                          <p className="text-sm text-muted-foreground">Read the recommended books and articles below to deepen your understanding</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-pink-500/20 rounded-full p-2 flex-shrink-0">
                          <span className="text-pink-500 font-bold">2</span>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Strengthen Your Foundation</h3>
                          <p className="text-sm text-muted-foreground">Work on the areas where you scored lower - especially communication and trust</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-pink-500/20 rounded-full p-2 flex-shrink-0">
                          <span className="text-pink-500 font-bold">3</span>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Retake This Quiz in 3-6 Months</h3>
                          <p className="text-sm text-muted-foreground">After working on your relationship, reassess your readiness</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Recommended Blog Posts */}
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6">Recommended Reading from SPICE Blog</h2>
                <div className="space-y-3">
                  {blogPosts.map((post, index) => (
                    <Link
                      key={index}
                      to={post.path}
                      className="flex items-center justify-between p-4 bg-background/50 hover:bg-background/80 rounded-xl transition-colors group"
                    >
                      <div className="flex-1">
                        <h3 className="font-semibold group-hover:text-pink-500 transition-colors">{post.title}</h3>
                        <p className="text-sm text-muted-foreground">{post.reason}</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-pink-500 transition-colors flex-shrink-0 ml-4" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Book Recommendations */}
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6">Essential Books</h2>
                <div className="space-y-4">
                  {books.map((book, index) => (
                    <div key={index} className="bg-background/50 rounded-xl p-6">
                      <h3 className="font-semibold text-lg mb-1">{book.title}</h3>
                      <p className="text-sm text-pink-500 mb-2">by {book.author}</p>
                      <p className="text-sm text-muted-foreground">{book.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={retakeQuiz}
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-background/50 hover:bg-background/80 border border-border font-semibold rounded-full transition-all"
                >
                  <RefreshCw className="w-5 h-5" />
                  Retake Quiz
                </button>
                <Link
                  to="/download"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-semibold rounded-full transition-all"
                >
                  Join SPICE Community
                </Link>
              </div>
            </div>
          </main>

          <FooterSection />
        </div>
      </>
    );
  }

  // Quiz Question View
  const currentQ = questions[currentQuestion];
  const selectedAnswer = answers[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <>
      <SEO
        title="Swinging Readiness Quiz - Question {currentQuestion + 1} | SPICE"
        description="Answer questions about your relationship readiness for the swinging lifestyle."
        canonical="https://thespiceapp.com/quiz/swinging"
      />

      <div className="relative min-h-screen">
        <ParticlesBackground />
        <Header />
        <Breadcrumbs />

        <main className="relative z-10 pt-32 pb-12">
          <div className="container mx-auto px-4 max-w-3xl">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-muted-foreground">Question {currentQuestion + 1} of {questions.length}</span>
                <span className="text-sm text-muted-foreground">{Math.round(progress)}% Complete</span>
              </div>
              <div className="w-full bg-muted/30 rounded-full h-2 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-pink-500 to-red-500 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Category Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 mb-6">
              <span className="text-sm font-medium text-pink-500">{currentQ.category}</span>
            </div>

            {/* Question */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 mb-8">
              <h2 className="text-2xl font-bold mb-8">{currentQ.question}</h2>

              {/* Options */}
              <div className="space-y-3">
                {currentQ.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(option.score, index)}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                      selectedAnswer?.optionIndex === index
                        ? "border-pink-500 bg-pink-500/10"
                        : "border-border hover:border-pink-500/50 bg-background/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                        selectedAnswer?.optionIndex === index
                          ? "border-pink-500 bg-pink-500"
                          : "border-border"
                      }`}>
                        {selectedAnswer?.optionIndex === index && (
                          <div className="w-2 h-2 bg-white rounded-full" />
                        )}
                      </div>
                      <span>{option.text}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <button
                onClick={previousQuestion}
                disabled={currentQuestion === 0}
                className="inline-flex items-center gap-2 px-6 py-3 bg-background/50 hover:bg-background/80 border border-border font-semibold rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ArrowLeft className="w-4 h-4" />
                Previous
              </button>

              <button
                onClick={nextQuestion}
                disabled={!selectedAnswer}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-semibold rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {currentQuestion === questions.length - 1 ? "See Results" : "Next"}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </main>

        <FooterSection />
      </div>
    </>
  );
};

export default SwingingQuiz;
