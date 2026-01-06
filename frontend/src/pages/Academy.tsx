import { Link } from "react-router-dom";
import { GraduationCap, BookOpen, Users, Target, TrendingUp, CheckCircle, Sparkles, Heart, Shield, MessageCircle, Brain, Award, Clock, Star, Zap, Lightbulb, Trophy, ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";

const Academy = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "SPICE Academy",
    "description": "Comprehensive lifestyle education platform offering structured learning paths for swinging, BDSM, polyamory, ENM, and ethical non-monogamy.",
    "url": "https://thespiceapp.com/academy",
    "courseMode": "online",
    "educationalLevel": "Beginner to Advanced"
  };

  const learningPaths = [
    { 
      level: "Beginner", 
      title: "Lifestyle Foundations", 
      modules: 8, 
      duration: "4-6 weeks",
      desc: "Perfect for those new to swinging, BDSM, or ENM. Covers basics, safety, communication, consent, and first steps into the lifestyle.",
      icon: <Sparkles className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      textColor: "text-green-500",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30",
      topics: [
        "What is the Lifestyle? Understanding Different Paths",
        "Consent & Communication Fundamentals",
        "Safety & Health Basics",
        "Your First Steps: Assessment & Preparation",
        "Common Mistakes & How to Avoid Them",
        "Building Your Confidence",
        "Finding Community & Resources",
        "Creating Your Relationship Agreements"
      ]
    },
    { 
      level: "Intermediate", 
      title: "Expanding Horizons", 
      modules: 12, 
      duration: "6-8 weeks",
      desc: "For those with some experience. Dive deeper into dynamics, advanced communication, navigating challenges, and enhancing your practice.",
      icon: <Target className="w-8 h-8" />,
      color: "from-primary to-blue-500",
      textColor: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/30",
      topics: [
        "Advanced Communication Techniques",
        "Managing Complex Emotions & Jealousy",
        "Navigating Metamour Relationships",
        "BDSM Scene Negotiation & Aftercare",
        "Swinging Etiquette & Social Dynamics",
        "Building Long-Term Poly Relationships",
        "Conflict Resolution Strategies",
        "Time & Energy Management",
        "Privacy & Discretion",
        "Sexual Technique Enhancement",
        "Dealing with Setbacks & Growth",
        "Community Leadership Basics"
      ]
    },
    { 
      level: "Advanced", 
      title: "Mastery & Leadership", 
      modules: 10, 
      duration: "8-10 weeks",
      desc: "Become a community leader and mentor. Advanced dynamics, teaching others, deepening practice, and giving back to the community.",
      icon: <Award className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      textColor: "text-purple-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
      topics: [
        "Advanced BDSM Dynamics & Edge Play",
        "Mentoring & Teaching Others",
        "Building & Leading Communities",
        "Advanced Polyamory Structures",
        "Navigating Major Life Transitions",
        "Trauma-Informed Practices",
        "Sex Positivity & Activism",
        "Creating Educational Content",
        "Event Planning & Facilitation",
        "Conflict Mediation at Scale"
      ]
    },
  ];

  const topicCategories = [
    {
      title: "Communication & Relationships",
      icon: <MessageCircle className="w-6 h-6 text-blue-500" />,
      color: "from-blue-500/10 to-cyan-500/10",
      borderColor: "border-blue-500/30",
      topics: [
        "Radical Honesty & Vulnerability",
        "Active Listening Skills",
        "Nonviolent Communication (NVC)",
        "Difficult Conversations",
        "Relationship Check-Ins",
        "Setting & Respecting Boundaries"
      ]
    },
    {
      title: "BDSM & Kink",
      icon: <Zap className="w-6 h-6 text-purple-500" />,
      color: "from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-500/30",
      topics: [
        "BDSM Fundamentals & Safety",
        "Consent & Negotiation",
        "Dom/Sub Dynamics",
        "Impact Play Techniques",
        "Bondage & Restraints",
        "Aftercare & Emotional Support"
      ]
    },
    {
      title: "Swinging & Group Play",
      icon: <Users className="w-6 h-6 text-green-500" />,
      color: "from-green-500/10 to-emerald-500/10",
      borderColor: "border-green-500/30",
      topics: [
        "Swinging 101: Getting Started",
        "Soft Swap vs Full Swap",
        "Lifestyle Clubs & Parties",
        "Finding Compatible Couples",
        "Group Sex Etiquette",
        "Navigating Jealousy in Swinging"
      ]
    },
    {
      title: "Polyamory & ENM",
      icon: <Heart className="w-6 h-6 text-pink-500" />,
      color: "from-pink-500/10 to-red-500/10",
      borderColor: "border-pink-500/30",
      topics: [
        "Polyamory Structures & Models",
        "Compersion & Jealousy Management",
        "Metamour Relationships",
        "Time Management with Multiple Partners",
        "Hierarchical vs Non-Hierarchical",
        "Coming Out as Poly"
      ]
    },
    {
      title: "Safety & Health",
      icon: <Shield className="w-6 h-6 text-orange-500" />,
      color: "from-orange-500/10 to-red-500/10",
      borderColor: "border-orange-500/30",
      topics: [
        "STI Prevention & Testing",
        "Safer Sex Practices",
        "Consent & Assault Prevention",
        "Mental Health in Alternative Lifestyles",
        "Physical Safety at Events",
        "Digital Privacy & Security"
      ]
    },
    {
      title: "Personal Growth",
      icon: <Brain className="w-6 h-6 text-indigo-500" />,
      color: "from-indigo-500/10 to-purple-500/10",
      borderColor: "border-indigo-500/30",
      topics: [
        "Emotional Intelligence Development",
        "Attachment Style Awareness",
        "Dealing with Insecurity",
        "Building Self-Confidence",
        "Trauma Healing & Integration",
        "Mindfulness & Meditation"
      ]
    }
  ];

  const features = [
    {
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      title: "Comprehensive Content",
      description: "30+ in-depth modules covering every aspect of lifestyle education from beginner to advanced"
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Guided Journeys",
      description: "Step-by-step learning paths tailored to your experience level and interests"
    },
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "Interactive Quizzes",
      description: "Test your knowledge and discover your kink profile, lifestyle compatibility, and readiness"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Community Learning",
      description: "Connect with other learners, share experiences, and learn from practitioners"
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Learn at Your Pace",
      description: "Self-paced modules you can complete on your schedule, revisit anytime"
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Expert Insights",
      description: "Content created by experienced practitioners, educators, and relationship experts"
    }
  ];

  const stats = [
    { number: "30+", label: "Learning Modules", icon: <BookOpen className="w-6 h-6" /> },
    { number: "50+", label: "Educational Articles", icon: <Sparkles className="w-6 h-6" /> },
    { number: "10+", label: "Interactive Quizzes", icon: <Brain className="w-6 h-6" /> },
    { number: "4", label: "Guided Journeys", icon: <Target className="w-6 h-6" /> }
  ];

  return (
    <>
      <SEO
        title="SPICE Academy: Complete Lifestyle Education Platform | Swinging, BDSM, Polyamory & ENM"
        description="Comprehensive lifestyle education with 30+ learning modules. Master swinging, BDSM, polyamory, ENM, communication, consent, and safety. Structured learning paths from beginner to advanced with interactive quizzes and guided journeys."
        keywords="lifestyle education, swinger training, BDSM academy, polyamory learning, ENM courses, lifestyle modules, consent training, swinging education, polyamory classes, BDSM training, lifestyle academy, alternative relationship education"
        canonical="https://thespiceapp.com/academy"
        structuredData={structuredData}
      />

      <div className="relative min-h-screen">
        <ParticlesBackground />
        <Header />
        <Breadcrumbs />
        
        <main className="relative z-10 pt-32 pb-12">
          <div className="container mx-auto px-4">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full border border-primary/30">
                  <GraduationCap className="w-16 h-16 text-primary" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                SPICE Academy
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
                Your comprehensive platform for lifestyle education. Master swinging, BDSM, polyamory, and ethical non-monogamy through structured learning paths, expert guidance, and community support.
              </p>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                From complete beginner to advanced practitioner - we provide the knowledge, tools, and confidence to navigate alternative lifestyles safely and successfully.
              </p>
            </div>

            {/* Stats */}
            <div className="mb-16">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-gradient-to-br from-primary/10 to-purple-500/10 border border-primary/30 rounded-xl p-6 text-center">
                    <div className="flex justify-center mb-3 text-primary">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-1">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Why Choose SPICE Academy?</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <div key={index} className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all">
                    <div className="mb-4">{feature.icon}</div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Learning Paths */}
            <section className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Structured Learning Paths</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Choose your path based on experience level. Each path includes comprehensive modules, quizzes, and practical exercises.
                </p>
              </div>
              
              <div className="space-y-8">
                {learningPaths.map((path, index) => (
                  <div key={index} className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-10 hover:border-primary/50 transition-all">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${path.color} flex items-center justify-center text-white`}>
                          {path.icon}
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="mb-4">
                          <span className={`text-xs font-bold ${path.bgColor} ${path.textColor} px-3 py-1 rounded-full`}>
                            {path.level}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{path.title}</h3>
                        <p className="text-muted-foreground mb-4">{path.desc}</p>
                        
                        <div className="flex flex-wrap gap-4 mb-6">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <BookOpen className="w-4 h-4" />
                            <span>{path.modules} modules</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            <span>{path.duration}</span>
                          </div>
                        </div>

                        <details className="group">
                          <summary className="cursor-pointer text-primary font-medium flex items-center gap-2 hover:underline">
                            <span>View Curriculum</span>
                            <ArrowRight className="w-4 h-4 group-open:rotate-90 transition-transform" />
                          </summary>
                          <div className="mt-4 pl-4 border-l-2 border-primary/30">
                            <ul className="space-y-2">
                              {path.topics.map((topic, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                  <span>{topic}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </details>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Topic Categories */}
            <section className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">What You'll Master</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Comprehensive coverage across all major lifestyle topics, from fundamentals to advanced techniques.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {topicCategories.map((category, index) => (
                  <div key={index} className={`bg-gradient-to-br ${category.color} border ${category.borderColor} rounded-xl p-6`}>
                    <div className="flex items-center gap-3 mb-4">
                      {category.icon}
                      <h3 className="text-lg font-bold">{category.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {category.topics.map((topic, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Quick Start Guide */}
            <section className="mb-16">
              <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-2xl p-8 md:p-12">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <Lightbulb className="w-6 h-6 text-blue-500" />
                    <h2 className="text-2xl md:text-3xl font-bold">Getting Started Guide</h2>
                  </div>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Not sure where to begin? Follow these steps to start your learning journey.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-card/50 border border-border rounded-xl p-6">
                    <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xl mb-4">
                      1
                    </div>
                    <h3 className="font-semibold mb-2">Take Assessments</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Complete readiness quizzes to understand your starting point
                    </p>
                    <Link to="/blog/am-i-ready-lifestyle" className="text-primary text-sm font-medium hover:underline">
                      Start Assessment →
                    </Link>
                  </div>

                  <div className="bg-card/50 border border-border rounded-xl p-6">
                    <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xl mb-4">
                      2
                    </div>
                    <h3 className="font-semibold mb-2">Choose Your Path</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Select a lifestyle that interests you: Swinging, BDSM, or ENM
                    </p>
                    <Link to="/academy/journeys" className="text-primary text-sm font-medium hover:underline">
                      View Journeys →
                    </Link>
                  </div>

                  <div className="bg-card/50 border border-border rounded-xl p-6">
                    <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xl mb-4">
                      3
                    </div>
                    <h3 className="font-semibold mb-2">Learn & Practice</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Work through modules, read guides, and practice skills
                    </p>
                    <Link to="/lifestyle/swingers-guide" className="text-primary text-sm font-medium hover:underline">
                      Browse Guides →
                    </Link>
                  </div>

                  <div className="bg-card/50 border border-border rounded-xl p-6">
                    <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-xl mb-4">
                      4
                    </div>
                    <h3 className="font-semibold mb-2">Join Community</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Connect with others, share experiences, continue learning
                    </p>
                    <Link to="/download" className="text-primary text-sm font-medium hover:underline">
                      Join SPICE →
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Popular Resources */}
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Popular Learning Resources</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Link to="/academy/journeys" className="bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 rounded-xl p-6 transition-all group">
                  <div className="flex items-center gap-3 mb-4">
                    <Target className="w-8 h-8 text-primary" />
                    <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Guided Journeys</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Step-by-step paths for Swinging, BDSM, Hotwifing, and ENM from beginner to experienced
                  </p>
                  <div className="text-primary text-sm font-semibold flex items-center gap-2">
                    <span>Start Journey</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>

                <Link to="/lifestyle/swingers-guide" className="bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 rounded-xl p-6 transition-all group">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-8 h-8 text-green-500" />
                    <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Complete Swingers Guide</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Everything you need to know about swinging: clubs, etiquette, finding couples, and more
                  </p>
                  <div className="text-primary text-sm font-semibold flex items-center gap-2">
                    <span>Read Guide</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>

                <Link to="/lifestyle/enm-polyamory-guide" className="bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 rounded-xl p-6 transition-all group">
                  <div className="flex items-center gap-3 mb-4">
                    <Heart className="w-8 h-8 text-pink-500" />
                    <h3 className="font-bold text-lg group-hover:text-primary transition-colors">ENM & Polyamory Guide</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Comprehensive guide to ethical non-monogamy, polyamory structures, and relationship tools
                  </p>
                  <div className="text-primary text-sm font-semibold flex items-center gap-2">
                    <span>Read Guide</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>

                <Link to="/lifestyle/bdsm-guide" className="bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 rounded-xl p-6 transition-all group">
                  <div className="flex items-center gap-3 mb-4">
                    <Zap className="w-8 h-8 text-purple-500" />
                    <h3 className="font-bold text-lg group-hover:text-primary transition-colors">BDSM & Kink Guide</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Safety, consent, dynamics, techniques, and community for BDSM practitioners
                  </p>
                  <div className="text-primary text-sm font-semibold flex items-center gap-2">
                    <span>Read Guide</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>

                <Link to="/lifestyle/relationships-communication" className="bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 rounded-xl p-6 transition-all group">
                  <div className="flex items-center gap-3 mb-4">
                    <MessageCircle className="w-8 h-8 text-blue-500" />
                    <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Communication Skills</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Master essential communication techniques for successful lifestyle relationships
                  </p>
                  <div className="text-primary text-sm font-semibold flex items-center gap-2">
                    <span>Learn Skills</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>

                <Link to="/lifestyle/jealousy-management" className="bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 rounded-xl p-6 transition-all group">
                  <div className="flex items-center gap-3 mb-4">
                    <Brain className="w-8 h-8 text-indigo-500" />
                    <h3 className="font-bold text-lg group-hover:text-primary transition-colors">Jealousy Management</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Tools and strategies for understanding and managing jealousy in alternative lifestyles
                  </p>
                  <div className="text-primary text-sm font-semibold flex items-center gap-2">
                    <span>Get Tools</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </div>
            </section>

            {/* Quizzes Section */}
            <section className="mb-16">
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 mb-4">
                    <Brain className="w-6 h-6 text-primary" />
                    <h2 className="text-2xl md:text-3xl font-bold">Interactive Quizzes & Assessments</h2>
                  </div>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Discover your kink profile, assess your readiness, and test your knowledge with our interactive quizzes.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <Link to="/quiz/bdsm" className="bg-background/50 border border-primary/30 rounded-lg p-6 hover:border-primary/50 transition-all group">
                    <div className="w-12 h-12 rounded-full bg-purple-500/20 text-purple-500 flex items-center justify-center mb-4">
                      <Zap className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">BDSM Kink Quiz</h3>
                    <p className="text-sm text-muted-foreground mb-3">Discover your kink profile and compatibility</p>
                    <span className="text-primary text-sm font-semibold">Take Quiz →</span>
                  </Link>

                  <Link to="/quiz/swinging" className="bg-background/50 border border-primary/30 rounded-lg p-6 hover:border-primary/50 transition-all group">
                    <div className="w-12 h-12 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mb-4">
                      <Users className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">Swinging Readiness Quiz</h3>
                    <p className="text-sm text-muted-foreground mb-3">Assess if you're ready to explore swinging</p>
                    <span className="text-primary text-sm font-semibold">Take Quiz →</span>
                  </Link>

                  <Link to="/quiz/enm" className="bg-background/50 border border-primary/30 rounded-lg p-6 hover:border-primary/50 transition-all group">
                    <div className="w-12 h-12 rounded-full bg-pink-500/20 text-pink-500 flex items-center justify-center mb-4">
                      <Heart className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">ENM Compatibility Quiz</h3>
                    <p className="text-sm text-muted-foreground mb-3">Find your ENM style and compatibility</p>
                    <span className="text-primary text-sm font-semibold">Take Quiz →</span>
                  </Link>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl p-8 md:p-12 border border-primary/30 text-center">
              <div className="mb-6">
                <Trophy className="w-16 h-16 text-primary mx-auto mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your Learning Journey Today</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-2">
                  Join 30,000+ members accessing comprehensive lifestyle education, expert guidance, and supportive community
                </p>
                <p className="text-base text-muted-foreground max-w-xl mx-auto">
                  All Academy content, guided journeys, and quizzes are free to access
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/download" className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all">
                  Download SPICE Free
                </Link>
                <Link to="/academy/journeys" className="inline-flex items-center justify-center px-8 py-3 bg-card border-2 border-primary hover:bg-card/80 font-semibold rounded-full transition-all">
                  Browse Learning Paths
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

export default Academy;
