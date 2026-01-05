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

const ENMQuiz = () => {
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
    // Communication & Honesty (4 questions)
    {
      id: 1,
      category: "Communication & Honesty",
      question: "How comfortable are you discussing your feelings and needs openly with partners?",
      options: [
        { text: "Very comfortable - I can express anything without hesitation", score: 5 },
        { text: "Comfortable with most topics, some things are harder to share", score: 4 },
        { text: "Somewhat comfortable - I struggle with vulnerability sometimes", score: 2 },
        { text: "Uncomfortable - I tend to keep feelings to myself", score: 0 }
      ]
    },
    {
      id: 2,
      category: "Communication & Honesty",
      question: "How do you feel about your partner(s) having deep emotional connections with others?",
      options: [
        { text: "Excited - I love when my partners experience joy with others", score: 5 },
        { text: "Okay with it, though it might trigger occasional insecurity", score: 4 },
        { text: "Uncertain - I'd need to work through complex feelings", score: 2 },
        { text: "Very uncomfortable - I prefer emotional exclusivity", score: 0 }
      ]
    },
    {
      id: 3,
      category: "Communication & Honesty",
      question: "Can you be honest about your feelings even when they might be uncomfortable for others to hear?",
      options: [
        { text: "Yes, I believe honesty is essential even when it's hard", score: 5 },
        { text: "Usually, though I might soften difficult truths sometimes", score: 4 },
        { text: "Sometimes I hold back to avoid conflict or hurt feelings", score: 2 },
        { text: "I often avoid difficult conversations to keep the peace", score: 0 }
      ]
    },
    {
      id: 4,
      category: "Communication & Honesty",
      question: "How would you handle learning your partner wants to pursue someone new?",
      options: [
        { text: "I'd be happy for them and curious to learn about this person", score: 5 },
        { text: "I'd be okay with it after discussing boundaries and reassurance", score: 4 },
        { text: "I'd feel anxious and need a lot of processing time", score: 2 },
        { text: "I'd feel threatened and want them to reconsider", score: 0 }
      ]
    },

    // Jealousy & Security (4 questions)
    {
      id: 5,
      category: "Jealousy & Security",
      question: "When you imagine your partner being intimate with someone else, how do you feel?",
      options: [
        { text: "Compersion - genuine happiness for their joy and pleasure", score: 5 },
        { text: "Mixed feelings - some jealousy but also excitement or curiosity", score: 4 },
        { text: "Significant jealousy and insecurity", score: 2 },
        { text: "Deep discomfort or pain - this isn't for me", score: 0 }
      ]
    },
    {
      id: 6,
      category: "Jealousy & Security",
      question: "How secure do you feel in your relationships?",
      options: [
        { text: "Very secure - I don't fear losing partners to others", score: 5 },
        { text: "Generally secure with occasional moments of doubt", score: 4 },
        { text: "Somewhat insecure - I worry about being replaced", score: 2 },
        { text: "Very insecure - I need constant reassurance", score: 0 }
      ]
    },
    {
      id: 7,
      category: "Jealousy & Security",
      question: "When you feel jealous, how do you typically respond?",
      options: [
        { text: "I examine the feeling, communicate it, and work through it", score: 5 },
        { text: "I feel it but can usually rationalize and manage it", score: 4 },
        { text: "It overwhelms me and affects my behavior negatively", score: 2 },
        { text: "I suppress it or become withdrawn/passive-aggressive", score: 0 }
      ]
    },
    {
      id: 8,
      category: "Jealousy & Security",
      question: "How much reassurance do you need from partners about your importance to them?",
      options: [
        { text: "Minimal - I'm confident in my value to them", score: 5 },
        { text: "Occasional reassurance is nice but not necessary", score: 4 },
        { text: "Regular reassurance helps me feel secure", score: 2 },
        { text: "I need frequent validation to feel okay", score: 0 }
      ]
    },

    // Independence & Autonomy (3 questions)
    {
      id: 9,
      category: "Independence & Autonomy",
      question: "How do you feel about spending time apart from your partner(s)?",
      options: [
        { text: "I enjoy it - I value alone time and independence", score: 5 },
        { text: "I'm comfortable with it and use the time for self-care or friends", score: 4 },
        { text: "I tolerate it but prefer being together", score: 2 },
        { text: "I struggle with separation and feel lonely", score: 0 }
      ]
    },
    {
      id: 10,
      category: "Independence & Autonomy",
      question: "How important is it that your partner(s) fulfill all your emotional and social needs?",
      options: [
        { text: "Not important - I have diverse relationships and support systems", score: 5 },
        { text: "Somewhat important but I have other close connections too", score: 4 },
        { text: "Pretty important - my partner is my main emotional support", score: 2 },
        { text: "Very important - I expect my partner to be my everything", score: 0 }
      ]
    },
    {
      id: 11,
      category: "Independence & Autonomy",
      question: "How do you feel about your partner making major decisions without consulting you?",
      options: [
        { text: "Fine, as long as it's about their own life and choices", score: 5 },
        { text: "Okay with most things, prefer heads-up on major changes", score: 4 },
        { text: "Uncomfortable - I want to be involved in their decisions", score: 2 },
        { text: "Not okay - we should decide everything together", score: 0 }
      ]
    },

    // Time Management & Flexibility (3 questions)
    {
      id: 12,
      category: "Time Management & Flexibility",
      question: "How do you handle last-minute changes to plans?",
      options: [
        { text: "Very flexible - I adapt easily to changes", score: 5 },
        { text: "Generally okay with changes, prefer advance notice when possible", score: 4 },
        { text: "I find changes stressful but can manage", score: 2 },
        { text: "I really dislike changes to planned commitments", score: 0 }
      ]
    },
    {
      id: 13,
      category: "Time Management & Flexibility",
      question: "How do you feel about sharing calendar/scheduling details with multiple partners?",
      options: [
        { text: "Totally fine - transparency and coordination are important", score: 5 },
        { text: "Okay with it, though it requires organization", score: 4 },
        { text: "Seems complicated but I'd try", score: 2 },
        { text: "Uncomfortable - I prefer spontaneity and privacy", score: 0 }
      ]
    },
    {
      id: 14,
      category: "Time Management & Flexibility",
      question: "How important is it to have regular, predictable time with your partner(s)?",
      options: [
        { text: "Not critical - quality matters more than quantity or routine", score: 5 },
        { text: "Somewhat important but I'm flexible", score: 4 },
        { text: "Very important - I need consistency and routine", score: 2 },
        { text: "Essential - I need guaranteed time commitments", score: 1 }
      ]
    },

    // Boundaries & Agreements (3 questions)
    {
      id: 15,
      category: "Boundaries & Agreements",
      question: "How comfortable are you negotiating and renegotiating relationship agreements?",
      options: [
        { text: "Very comfortable - I see it as healthy evolution", score: 5 },
        { text: "Comfortable, though it takes effort", score: 4 },
        { text: "Somewhat uncomfortable - I prefer established rules", score: 2 },
        { text: "Uncomfortable - changes feel destabilizing", score: 0 }
      ]
    },
    {
      id: 16,
      category: "Boundaries & Agreements",
      question: "What's your ideal approach to relationship rules and structures?",
      options: [
        { text: "Minimal rules, lots of communication and trust", score: 5 },
        { text: "Some basic agreements but room for flexibility", score: 4 },
        { text: "Clear, detailed rules for most situations", score: 3 },
        { text: "Comprehensive rules that cover all scenarios", score: 2 }
      ]
    },
    {
      id: 17,
      category: "Boundaries & Agreements",
      question: "How do you feel about your partner having relationships you know little about?",
      options: [
        { text: "Fine - parallel poly works for me, they can have privacy", score: 5 },
        { text: "Okay if we check in periodically", score: 4 },
        { text: "Uncomfortable - I want to know details", score: 2 },
        { text: "Not okay - I need to be informed about everything", score: 0 }
      ]
    },

    // Self-Awareness & Growth (3 questions)
    {
      id: 18,
      category: "Self-Awareness & Growth",
      question: "How willing are you to do personal growth work (therapy, self-reflection, etc.)?",
      options: [
        { text: "Very willing - I actively pursue personal development", score: 5 },
        { text: "Willing when needed", score: 4 },
        { text: "Somewhat resistant but I'll do it if necessary", score: 2 },
        { text: "Resistant - I don't think I need to change", score: 0 }
      ]
    },
    {
      id: 19,
      category: "Self-Awareness & Growth",
      question: "How well do you understand your own needs, desires, and triggers?",
      options: [
        { text: "Very well - I've done significant self-exploration", score: 5 },
        { text: "Pretty well - I'm generally self-aware", score: 4 },
        { text: "Somewhat - I'm still learning about myself", score: 2 },
        { text: "Not well - I struggle to identify my own needs", score: 0 }
      ]
    },
    {
      id: 20,
      category: "Self-Awareness & Growth",
      question: "Why are you interested in ENM/polyamory?",
      options: [
        { text: "It aligns with my values about love, freedom, and authenticity", score: 5 },
        { text: "I'm curious and think it might suit my needs", score: 4 },
        { text: "My partner wants it and I'm trying to be open-minded", score: 1 },
        { text: "I'm hoping it will fix problems in my current relationship", score: 0 }
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

  const getCompatibilityLevel = (percentage: number) => {
    if (percentage >= 80) return { level: "Highly Compatible", color: "text-green-500", bgColor: "bg-green-500/20", description: "ENM/polyamory aligns very well with your values, skills, and emotional readiness." };
    if (percentage >= 60) return { level: "Compatible with Preparation", color: "text-blue-500", bgColor: "bg-blue-500/20", description: "You have a solid foundation but would benefit from strengthening certain areas before diving in." };
    if (percentage >= 40) return { level: "Significant Preparation Needed", color: "text-yellow-500", bgColor: "bg-yellow-500/20", description: "ENM is possible for you but requires considerable personal growth and skill development first." };
    return { level: "Not Currently Compatible", color: "text-orange-500", bgColor: "bg-orange-500/20", description: "Based on your responses, ENM may not be the right fit at this time. Consider other relationship structures." };
  };

  const getRecommendations = (percentage: number, categoryResults: CategoryScore[]) => {
    const recommendations = [];
    
    // Overall recommendations
    if (percentage >= 80) {
      recommendations.push({
        title: "You're Well-Suited for ENM!",
        description: "Your communication skills, emotional security, and values align well with ethical non-monogamy. Consider starting slowly with clear agreements and regular check-ins."
      });
    } else if (percentage >= 60) {
      recommendations.push({
        title: "Strong Foundation with Room to Grow",
        description: "You have good potential for ENM success. Focus on strengthening the areas where you scored lower before opening your relationship(s)."
      });
    } else if (percentage >= 40) {
      recommendations.push({
        title: "Significant Work Needed First",
        description: "ENM requires skills and emotional readiness you're still developing. Consider therapy, reading, and personal growth before pursuing non-monogamy."
      });
    } else {
      recommendations.push({
        title: "Reconsider Your Motivations",
        description: "Your results suggest ENM may not align with your needs, values, or current emotional state. Explore why you're drawn to it and whether it's truly right for you."
      });
    }

    // Category-specific recommendations
    categoryResults.forEach(category => {
      if (category.percentage < 60) {
        if (category.name === "Communication & Honesty") {
          recommendations.push({
            title: `Strengthen ${category.name}`,
            description: "Practice vulnerable communication. Consider couples therapy to build skills in expressing needs and hearing difficult truths."
          });
        } else if (category.name === "Jealousy & Security") {
          recommendations.push({
            title: `Work on ${category.name}`,
            description: "Explore the root causes of jealousy. Read 'The Jealousy Workbook' and practice self-soothing techniques. ENM amplifies jealousy issues."
          });
        } else if (category.name === "Independence & Autonomy") {
          recommendations.push({
            title: `Develop ${category.name}`,
            description: "Build a support system outside your romantic relationship. Cultivate friendships, hobbies, and a strong sense of self separate from partners."
          });
        } else if (category.name === "Time Management & Flexibility") {
          recommendations.push({
            title: `Improve ${category.name}`,
            description: "Practice using shared calendars and being flexible with plans. ENM requires excellent time management and adaptability."
          });
        } else if (category.name === "Boundaries & Agreements") {
          recommendations.push({
            title: `Clarify ${category.name}`,
            description: "Learn to set and communicate clear boundaries. Practice negotiating agreements and being okay with ongoing discussions."
          });
        } else if (category.name === "Self-Awareness & Growth") {
          recommendations.push({
            title: `Deepen ${category.name}`,
            description: "Engage in therapy or coaching. Journal regularly about your feelings and needs. ENM requires high self-awareness."
          });
        }
      }
    });

    return recommendations;
  };

  const getBlogRecommendations = (percentage: number, categoryResults: CategoryScore[]) => {
    const blogs = [];

    // Always recommend foundational content
    blogs.push({
      title: "ENM & Polyamory Complete Guide",
      path: "/lifestyle/enm-polyamory-guide",
      reason: "Essential reading for understanding ENM structures and practices"
    });

    // Based on overall readiness
    if (percentage >= 70) {
      blogs.push({
        title: "Opening Your Relationship Successfully",
        path: "/blog/opening-relationship",
        reason: "You're ready to learn practical steps for transitioning"
      });
      blogs.push({
        title: "Finding ENM Partners",
        path: "/blog/finding-enm-partners",
        reason: "Guidance on meeting compatible people in the community"
      });
    }

    if (percentage < 70) {
      blogs.push({
        title: "Is ENM Right for You?",
        path: "/blog/is-enm-right",
        reason: "Assess whether this relationship style truly fits your needs"
      });
    }

    // Based on category scores
    const jealousyScore = categoryResults.find(c => c.name === "Jealousy & Security");
    if (jealousyScore && jealousyScore.percentage < 70) {
      blogs.push({
        title: "Managing Jealousy in ENM",
        path: "/lifestyle/jealousy-management",
        reason: "Tools and strategies for working through jealousy"
      });
    }

    const commScore = categoryResults.find(c => c.name === "Communication & Honesty");
    if (commScore && commScore.percentage < 70) {
      blogs.push({
        title: "Communication in Open Relationships",
        path: "/lifestyle/relationships-communication",
        reason: "Learn essential communication skills for ENM success"
      });
    }

    const independenceScore = categoryResults.find(c => c.name === "Independence & Autonomy");
    if (independenceScore && independenceScore.percentage < 70) {
      blogs.push({
        title: "Building Independence in Relationships",
        path: "/blog/relationship-independence",
        reason: "Develop a strong sense of self outside your partnerships"
      });
    }

    const boundariesScore = categoryResults.find(c => c.name === "Boundaries & Agreements");
    if (boundariesScore && boundariesScore.percentage < 70) {
      blogs.push({
        title: "Setting Boundaries in ENM",
        path: "/start/consent-basics",
        reason: "Master the art of boundary-setting and negotiation"
      });
    }

    // Add beginner resources
    blogs.push({
      title: "Beginner Lifestyle FAQ",
      path: "/start/beginner-faq",
      reason: "Answers to common questions about alternative relationships"
    });

    return blogs.slice(0, 6); // Limit to 6 recommendations
  };

  const getBookRecommendations = (percentage: number) => {
    const books = [
      {
        title: "The Ethical Slut (3rd Edition)",
        author: "Dossie Easton & Janet Hardy",
        description: "The classic guide to polyamory, open relationships, and other freedoms in sex and love."
      },
      {
        title: "Opening Up",
        author: "Tristan Taormino",
        description: "Comprehensive guide to creating and sustaining open relationships with detailed advice."
      },
      {
        title: "Polysecure",
        author: "Jessica Fern",
        description: "Attachment theory applied to non-monogamous relationships. Essential for understanding security."
      },
      {
        title: "More Than Two",
        author: "Franklin Veaux & Eve Rickert",
        description: "Practical guide to ethical polyamory with focus on communication and boundaries."
      }
    ];

    if (percentage < 60) {
      books.push({
        title: "The Jealousy Workbook",
        author: "Kathy Labriola",
        description: "Practical exercises for understanding and managing jealousy in open relationships."
      });
    }

    return books;
  };

  const handleDownloadImage = async () => {
    if (!resultsRef.current) return;
    
    setIsDownloading(true);
    
    try {
      const canvas = await html2canvas(resultsRef.current, {
        backgroundColor: '#1a1625',
        scale: 2,
        logging: false,
        useCORS: true,
      });
      
      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = `SPICE-ENM-Quiz-Results-${Date.now()}.png`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(url);
          
          toast({
            title: "Downloaded!",
            description: "Your results have been saved as an image",
          });
        }
      }, 'image/png');
    } catch (error) {
      console.error('Download error:', error);
      toast({
        title: "Download Failed",
        description: "Unable to download results. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsDownloading(false);
    }
  };

  const handleShareNative = async () => {
    const shareText = `💜 Just completed the SPICE ENM Compatibility Quiz!\n\nDiscover if ENM is right for you! 🌈\n${window.location.origin}/quiz/enm`;
    
    try {
      if (navigator.share) {
        await navigator.share({
          title: 'My SPICE ENM Quiz Results',
          text: shareText,
          url: window.location.origin + '/quiz/enm',
        });
        toast({
          title: "Shared!",
          description: "Thanks for sharing your results",
        });
      } else {
        setShowShareMenu(true);
      }
    } catch (error) {
      if (error instanceof Error && error.name !== 'AbortError') {
        setShowShareMenu(true);
      }
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.origin + '/quiz/enm');
    toast({
      title: "Copied!",
      description: "Quiz link copied to clipboard",
    });
    setShowShareMenu(false);
  };

  if (!started) {
    return (
      <>
        <SEO
          title="ENM Compatibility Quiz | Are You Ready for Ethical Non-Monogamy? | SPICE"
          description="Take our comprehensive 20-question ENM compatibility quiz to assess your readiness for ethical non-monogamy and polyamory. Get personalized insights and recommendations."
          keywords="ENM quiz, polyamory quiz, ethical non-monogamy quiz, open relationship quiz, poly compatibility, ENM readiness"
          canonical="https://thespiceapp.com/quiz/enm"
        />

        <div className="relative min-h-screen">
          <ParticlesBackground />
          <Header />
          <Breadcrumbs />

          <main className="relative z-10 pt-32 pb-12">
            <div className="container mx-auto px-4 max-w-4xl">
              {/* Hero Section */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                  <Sparkles className="w-4 h-4 text-purple-500" />
                  <span className="text-sm font-medium text-purple-500">ENM Assessment</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                  ENM Compatibility Quiz
                </h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Discover if ethical non-monogamy aligns with your values, communication style, and emotional readiness. Get personalized insights and recommendations.
                </p>
              </div>

              {/* Info Cards */}
              <div className="grid md:grid-cols-3 gap-4 mb-12">
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
                  <MessageCircle className="w-8 h-8 text-purple-500 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">20 Questions</h3>
                  <p className="text-sm text-muted-foreground">Comprehensive compatibility assessment</p>
                </div>
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
                  <Sparkles className="w-8 h-8 text-purple-500 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">10-15 Minutes</h3>
                  <p className="text-sm text-muted-foreground">Answer honestly for accurate results</p>
                </div>
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center">
                  <BookOpen className="w-8 h-8 text-purple-500 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Detailed Analysis</h3>
                  <p className="text-sm text-muted-foreground">Personalized insights & resources</p>
                </div>
              </div>

              {/* Assessment Categories */}
              <div className="bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-purple-500/10 border border-purple-500/30 rounded-2xl p-8 mb-12">
                <h2 className="text-2xl font-bold mb-6 text-center">What This Quiz Assesses</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <MessageCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Communication & Honesty</h3>
                      <p className="text-sm text-muted-foreground">Your ability to communicate openly and honestly with multiple partners</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Heart className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Jealousy & Security</h3>
                      <p className="text-sm text-muted-foreground">How you handle jealousy and your emotional security in relationships</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Independence & Autonomy</h3>
                      <p className="text-sm text-muted-foreground">Your comfort with independence and separate lives/connections</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Time Management & Flexibility</h3>
                      <p className="text-sm text-muted-foreground">Your ability to balance multiple relationships and adapt to changes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Boundaries & Agreements</h3>
                      <p className="text-sm text-muted-foreground">Your approach to setting and negotiating relationship boundaries</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Self-Awareness & Growth</h3>
                      <p className="text-sm text-muted-foreground">Your commitment to personal growth and self-understanding</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Start Button */}
              <div className="text-center">
                <button
                  onClick={() => setStarted(true)}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-full transition-all shadow-lg hover:shadow-xl"
                >
                  Start Quiz
                  <ArrowRight className="w-5 h-5" />
                </button>
                <p className="text-sm text-muted-foreground mt-4">
                  Answer honestly for the most accurate assessment
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
    const compatibility = getCompatibilityLevel(overallPercentage);
    const recommendations = getRecommendations(overallPercentage, results);
    const blogPosts = getBlogRecommendations(overallPercentage, results);
    const books = getBookRecommendations(overallPercentage);

    return (
      <>
        <SEO
          title="Your ENM Compatibility Results | SPICE"
          description="View your personalized ENM compatibility assessment results with recommendations and resources."
          canonical="https://thespiceapp.com/quiz/enm/results"
        />

        <div className="relative min-h-screen" ref={resultsRef}>
          <ParticlesBackground />
          <Header />
          <Breadcrumbs />

          <main className="relative z-10 pt-32 pb-12">
            <div className="container mx-auto px-4 max-w-4xl">
              {/* Results Header */}
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4">Your ENM Compatibility Results</h1>
                <p className="text-muted-foreground">Based on your answers, here's your comprehensive assessment</p>
              </div>

              {/* Overall Score */}
              <div className={`${compatibility.bgColor} border border-purple-500/30 rounded-2xl p-8 mb-8 text-center`}>
                <div className="text-6xl font-bold mb-2 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  {overallPercentage}%
                </div>
                <div className={`text-2xl font-semibold ${compatibility.color} mb-2`}>
                  {compatibility.level}
                </div>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  {compatibility.description}
                </p>
                <p className="text-sm text-muted-foreground mt-4">
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
                          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-500"
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
                        <CheckCircle className="w-5 h-5 text-purple-500" />
                        {rec.title}
                      </h3>
                      <p className="text-muted-foreground">{rec.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Next Steps */}
              <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6">Your Next Steps</h2>
                <div className="space-y-4">
                  {overallPercentage >= 70 ? (
                    <>
                      <div className="flex items-start gap-3">
                        <div className="bg-purple-500/20 rounded-full p-2 flex-shrink-0">
                          <span className="text-purple-500 font-bold">1</span>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Read Foundational Books</h3>
                          <p className="text-sm text-muted-foreground">Start with "The Ethical Slut" and "Opening Up" to deepen your understanding</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-purple-500/20 rounded-full p-2 flex-shrink-0">
                          <span className="text-purple-500 font-bold">2</span>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Join ENM Communities</h3>
                          <p className="text-sm text-muted-foreground">Connect with experienced practitioners on SPICE or local poly meetups</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-purple-500/20 rounded-full p-2 flex-shrink-0">
                          <span className="text-purple-500 font-bold">3</span>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Start Slowly</h3>
                          <p className="text-sm text-muted-foreground">If opening an existing relationship, begin with extensive discussions and clear agreements</p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-start gap-3">
                        <div className="bg-purple-500/20 rounded-full p-2 flex-shrink-0">
                          <span className="text-purple-500 font-bold">1</span>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Work on Identified Weak Areas</h3>
                          <p className="text-sm text-muted-foreground">Focus on categories where you scored below 60% before pursuing ENM</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-purple-500/20 rounded-full p-2 flex-shrink-0">
                          <span className="text-purple-500 font-bold">2</span>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Consider Therapy or Coaching</h3>
                          <p className="text-sm text-muted-foreground">Work with a poly-friendly therapist to develop necessary skills and awareness</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-purple-500/20 rounded-full p-2 flex-shrink-0">
                          <span className="text-purple-500 font-bold">3</span>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Retake This Quiz in 6-12 Months</h3>
                          <p className="text-sm text-muted-foreground">After personal growth work, reassess your compatibility with ENM</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Recommended Blog Posts */}
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6">Recommended Reading from SPICE</h2>
                <div className="space-y-3">
                  {blogPosts.map((post, index) => (
                    <Link
                      key={index}
                      to={post.path}
                      className="flex items-center justify-between p-4 bg-background/50 hover:bg-background/80 rounded-xl transition-colors group"
                    >
                      <div className="flex-1">
                        <h3 className="font-semibold group-hover:text-purple-500 transition-colors">{post.title}</h3>
                        <p className="text-sm text-muted-foreground">{post.reason}</p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-purple-500 transition-colors flex-shrink-0 ml-4" />
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
                      <p className="text-sm text-purple-500 mb-2">by {book.author}</p>
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
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-full transition-all"
                >
                  Join SPICE Community
                </Link>
              </div>
              
              {/* Share and Download Buttons */}
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 mt-8">
                <p className="text-center text-muted-foreground mb-6 text-lg">
                  Share your results or save them for later
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={handleDownloadImage}
                    disabled={isDownloading}
                    className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-background/50 hover:bg-background/80 border border-border font-semibold rounded-full transition-all disabled:opacity-50"
                  >
                    <Download className="w-4 h-4" />
                    {isDownloading ? 'Downloading...' : 'Download Results'}
                  </button>
                  <div className="relative">
                    <button 
                      onClick={handleShareNative}
                      className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-background/50 hover:bg-background/80 border border-border font-semibold rounded-full transition-all w-full"
                    >
                      <Share2 className="w-4 h-4" />
                      Share Results
                    </button>
                    
                    {showShareMenu && (
                      <div className="absolute bottom-full mb-2 right-0 bg-card rounded-xl p-3 shadow-xl border border-border/50 min-w-[200px] z-50">
                        <div className="space-y-2">
                          <button
                            onClick={handleCopyLink}
                            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted/50 transition-colors text-left"
                          >
                            <Copy className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm">Copy Link</span>
                          </button>
                          <button
                            onClick={() => {
                              window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent('💜 Just completed the SPICE ENM Quiz!')}&url=${encodeURIComponent(window.location.origin + '/quiz/enm')}`, '_blank');
                              setShowShareMenu(false);
                            }}
                            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted/50 transition-colors text-left"
                          >
                            <Twitter className="w-4 h-4 text-[#1DA1F2]" />
                            <span className="text-sm">Twitter</span>
                          </button>
                          <button
                            onClick={() => {
                              window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.origin + '/quiz/enm')}`, '_blank');
                              setShowShareMenu(false);
                            }}
                            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted/50 transition-colors text-left"
                          >
                            <Facebook className="w-4 h-4 text-[#1877F2]" />
                            <span className="text-sm">Facebook</span>
                          </button>
                          <button
                            onClick={() => {
                              window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.origin + '/quiz/enm')}`, '_blank');
                              setShowShareMenu(false);
                            }}
                            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted/50 transition-colors text-left"
                          >
                            <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                            <span className="text-sm">LinkedIn</span>
                          </button>
                          <button
                            onClick={() => {
                              window.open(`https://wa.me/?text=${encodeURIComponent('💜 Just completed the SPICE ENM Quiz! ' + window.location.origin + '/quiz/enm')}`, '_blank');
                              setShowShareMenu(false);
                            }}
                            className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted/50 transition-colors text-left"
                          >
                            <MessageCircle className="w-4 h-4 text-[#25D366]" />
                            <span className="text-sm">WhatsApp</span>
                          </button>
                        </div>
                        <button
                          onClick={() => setShowShareMenu(false)}
                          className="w-full mt-2 pt-2 border-t border-border/50 text-xs text-muted-foreground hover:text-foreground transition-colors"
                        >
                          Close
                        </button>
                      </div>
                    )}
                  </div>
                </div>
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
        title={`ENM Compatibility Quiz - Question ${currentQuestion + 1} | SPICE`}
        description="Answer questions about your readiness for ethical non-monogamy and polyamory."
        canonical="https://thespiceapp.com/quiz/enm"
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
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Category Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <span className="text-sm font-medium text-purple-500">{currentQ.category}</span>
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
                        ? "border-purple-500 bg-purple-500/10"
                        : "border-border hover:border-purple-500/50 bg-background/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                        selectedAnswer?.optionIndex === index
                          ? "border-purple-500 bg-purple-500"
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
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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

export default ENMQuiz;
