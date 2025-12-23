import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Brain, Heart, Sparkles, Clock, Users, Target, ArrowRight, CheckCircle, Flame } from "lucide-react";

const quizzes = [
  {
    id: "bdsm",
    title: "BDSM & Kink Quiz",
    subtitle: "Discover Your Kink Profile",
    description: "Explore your dominant, submissive, and switch tendencies. Understand your preferences across power exchange, sensation play, and more.",
    path: "/quiz/bdsm",
    icon: Flame,
    color: "from-red-500/20 via-orange-500/20 to-red-500/20",
    borderColor: "border-red-500/30",
    iconColor: "text-red-500",
    buttonColor: "from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600",
    stats: {
      questions: 25,
      time: "8-12 min",
      type: "Individual"
    },
    features: [
      "Discover your D/s orientation",
      "Explore kink interests",
      "Get personalized recommendations",
      "Learn about compatible dynamics"
    ]
  },
  {
    id: "hotwifing",
    title: "Hotwifing Readiness Quiz",
    subtitle: "Are You Ready as a Couple?",
    description: "Assess your relationship's readiness for the hotwifing lifestyle. Evaluate communication, trust, jealousy management, and more together.",
    path: "/quiz/hotwifing",
    icon: Heart,
    color: "from-pink-500/20 via-purple-500/20 to-pink-500/20",
    borderColor: "border-pink-500/30",
    iconColor: "text-pink-500",
    buttonColor: "from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600",
    stats: {
      questions: 18,
      time: "10-15 min",
      type: "Couples"
    },
    features: [
      "Evaluate relationship foundation",
      "Assess communication skills",
      "Understand jealousy patterns",
      "Get tailored next steps"
    ]
  },
  {
    id: "swinging",
    title: "Swinging Readiness Quiz",
    subtitle: "Explore the Lifestyle Together",
    description: "Comprehensive assessment for couples considering the swinging lifestyle. Evaluate communication, trust, boundaries, and readiness for this journey.",
    path: "/quiz/swinging",
    icon: Users,
    color: "from-blue-500/20 via-cyan-500/20 to-blue-500/20",
    borderColor: "border-blue-500/30",
    iconColor: "text-blue-500",
    buttonColor: "from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600",
    stats: {
      questions: 20,
      time: "15-20 min",
      type: "Couples"
    },
    features: [
      "Assess couple communication",
      "Evaluate trust & jealousy",
      "Define boundaries together",
      "Get readiness insights"
    ]
  }
];

const upcomingQuizzes = [
  {
    title: "Swinging Readiness Quiz",
    description: "Assess if you and your partner are ready to explore the swinging lifestyle.",
    icon: Users,
    comingSoon: true
  },
  {
    title: "ENM Compatibility Quiz",
    description: "Discover which ethical non-monogamy style fits your relationship best.",
    icon: Target,
    comingSoon: true
  }
];

const QuizLanding = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Lifestyle Quizzes | SPICE",
    "description": "Interactive quizzes to discover your preferences, assess relationship readiness, and explore different lifestyle dynamics.",
    "url": "https://thespiceapp.com/quiz",
    "hasPart": quizzes.map(quiz => ({
      "@type": "Quiz",
      "name": quiz.title,
      "description": quiz.description,
      "url": `https://thespiceapp.com${quiz.path}`
    }))
  };

  return (
    <>
      <SEO
        title="Lifestyle Quizzes - BDSM, Hotwifing & More | SPICE"
        description="Take our interactive lifestyle quizzes to discover your kink profile, assess relationship readiness for hotwifing, and explore your preferences. Free, private, and insightful."
        keywords="BDSM quiz, kink quiz, hotwifing quiz, lifestyle quiz, relationship quiz, D/s quiz, couples quiz, swinging readiness, ENM quiz"
        canonical="https://thespiceapp.com/quiz"
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
                <Brain className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Interactive Assessments</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                Lifestyle Quizzes
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Discover your preferences, assess your readiness, and gain insights into different lifestyle dynamics. 
                Our quizzes are designed to help you and your partner explore with confidence.
              </p>
            </div>

            {/* Quiz Cards */}
            <div className="space-y-8 mb-16">
              {quizzes.map((quiz) => {
                const IconComponent = quiz.icon;
                return (
                  <div
                    key={quiz.id}
                    className={`bg-gradient-to-r ${quiz.color} border ${quiz.borderColor} rounded-2xl overflow-hidden`}
                  >
                    <div className="p-8 md:p-10">
                      <div className="flex flex-col lg:flex-row gap-8">
                        {/* Left: Quiz Info */}
                        <div className="flex-1">
                          <div className="flex items-start gap-4 mb-4">
                            <div className={`p-3 rounded-xl bg-background/50 backdrop-blur-sm ${quiz.iconColor}`}>
                              <IconComponent className="w-8 h-8" />
                            </div>
                            <div>
                              <h2 className="text-2xl md:text-3xl font-bold mb-1">{quiz.title}</h2>
                              <p className={`text-lg ${quiz.iconColor}`}>{quiz.subtitle}</p>
                            </div>
                          </div>
                          
                          <p className="text-muted-foreground mb-6 leading-relaxed">
                            {quiz.description}
                          </p>

                          {/* Stats */}
                          <div className="flex flex-wrap gap-4 mb-6">
                            <div className="flex items-center gap-2 bg-background/30 rounded-full px-4 py-2">
                              <Brain className="w-4 h-4 text-muted-foreground" />
                              <span className="text-sm">{quiz.stats.questions} Questions</span>
                            </div>
                            <div className="flex items-center gap-2 bg-background/30 rounded-full px-4 py-2">
                              <Clock className="w-4 h-4 text-muted-foreground" />
                              <span className="text-sm">{quiz.stats.time}</span>
                            </div>
                            <div className="flex items-center gap-2 bg-background/30 rounded-full px-4 py-2">
                              <Users className="w-4 h-4 text-muted-foreground" />
                              <span className="text-sm">{quiz.stats.type}</span>
                            </div>
                          </div>

                          {/* CTA Button */}
                          <Link
                            to={quiz.path}
                            className={`inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r ${quiz.buttonColor} text-white font-semibold rounded-full transition-all shadow-lg`}
                          >
                            Take the Quiz
                            <ArrowRight className="w-5 h-5 ml-2" />
                          </Link>
                        </div>

                        {/* Right: Features */}
                        <div className="lg:w-80">
                          <div className="bg-background/30 backdrop-blur-sm rounded-xl p-6">
                            <h3 className="font-semibold mb-4">What You'll Discover</h3>
                            <ul className="space-y-3">
                              {quiz.features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-3">
                                  <CheckCircle className={`w-5 h-5 ${quiz.iconColor} flex-shrink-0 mt-0.5`} />
                                  <span className="text-sm text-muted-foreground">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Coming Soon Section */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6 text-center">Coming Soon</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {upcomingQuizzes.map((quiz, index) => {
                  const IconComponent = quiz.icon;
                  return (
                    <div
                      key={index}
                      className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 relative overflow-hidden"
                    >
                      <div className="absolute top-4 right-4">
                        <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full">Coming Soon</span>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-muted">
                          <IconComponent className="w-6 h-6 text-muted-foreground" />
                        </div>
                        <div>
                          <h3 className="font-bold mb-2">{quiz.title}</h3>
                          <p className="text-sm text-muted-foreground">{quiz.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Why Take Our Quizzes */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 mb-16">
              <h2 className="text-2xl font-bold mb-6 text-center">Why Take Our Quizzes?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4">
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Self-Discovery</h3>
                  <p className="text-sm text-muted-foreground">
                    Gain deeper understanding of your desires, boundaries, and what excites you.
                  </p>
                </div>
                <div className="text-center p-4">
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Couple Connection</h3>
                  <p className="text-sm text-muted-foreground">
                    Take quizzes together to spark conversations and align expectations.
                  </p>
                </div>
                <div className="text-center p-4">
                  <div className="bg-primary/10 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Actionable Insights</h3>
                  <p className="text-sm text-muted-foreground">
                    Get personalized recommendations and next steps based on your results.
                  </p>
                </div>
              </div>
            </div>

            {/* Privacy Note */}
            <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6 mb-16">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-2">Your Privacy Matters</h3>
                  <p className="text-muted-foreground text-sm">
                    All quiz results are completely private. We don't store your answers or share your results. 
                    Take the quizzes with confidence knowing your exploration is just for you.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl p-8 border border-primary/30 text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Connect?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                After discovering your preferences, join SPICE to meet like-minded individuals and couples.
              </p>
              <Link 
                to="/download" 
                className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all"
              >
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

export default QuizLanding;
