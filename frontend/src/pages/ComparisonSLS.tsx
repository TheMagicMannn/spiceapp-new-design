import { CheckCircle, XCircle, Crown, Download, Shield, Users, Star, DollarSign, Smartphone, Calendar, Sparkles, ChevronRight, Award, MessageSquare, Zap, Globe, Laptop, Target, Clock, AlertTriangle, TrendingUp, History, Wifi } from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";

const ComparisonSLS = () => {
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ComparisonPage",
        "name": "SPICE vs SLS (SwingLifeStyle): Modern App vs Legacy Website",
        "description": "Compare SPICE and SLS SwingLifeStyle - modern mobile app vs established but dated website"
      }
    ]
  };

  const features = [
    { category: "User Experience", features: [
      { name: "Modern Mobile App", spice: true, sls: false, note: "SLS app is outdated web wrapper" },
      { name: "Responsive Design", spice: true, sls: false, note: "SLS stuck in early 2000s design" },
      { name: "Fast Performance", spice: true, sls: false, note: "SLS notoriously slow" },
      { name: "Intuitive Navigation", spice: true, sls: false, note: "SLS has confusing menus" },
      { name: "Dark Mode", spice: true, sls: false, note: "SPICE only" },
      { name: "Swipe Interface", spice: true, sls: false, note: "Modern matching style" },
    ]},
    { category: "Matching Features", features: [
      { name: "BDSM Compatibility Quiz", spice: true, sls: false, note: "Unique to SPICE" },
      { name: "Couples Profiles", spice: true, sls: true, note: "Both support" },
      { name: "Advanced Search", spice: true, sls: true, note: "SLS has detailed search" },
      { name: "Hot Date Feature", spice: true, sls: true, note: "Find tonight's matches" },
      { name: "Travel Mode", spice: true, sls: true, note: "Both support" },
      { name: "Interest Tags", spice: true, sls: true, note: "Both have tags" },
    ]},
    { category: "Community", features: [
      { name: "Local Events", spice: true, sls: true, note: "SLS has largest event database" },
      { name: "Club Directory", spice: true, sls: true, note: "SLS has most complete list" },
      { name: "Forums", spice: false, sls: true, note: "SLS has active legacy forums" },
      { name: "Chat Rooms", spice: false, sls: true, note: "SLS has regional chat rooms" },
      { name: "Groups", spice: false, sls: true, note: "SLS has interest groups" },
      { name: "Lifestyle Resources", spice: true, sls: true, note: "Both have guides" },
    ]},
    { category: "Safety", features: [
      { name: "Photo Verification", spice: true, sls: true, note: "Both verify" },
      { name: "ID Verification", spice: true, sls: false, note: "SPICE exclusive" },
      { name: "24/7 Moderation", spice: true, sls: true, note: "Both have teams" },
      { name: "Certifications", spice: true, sls: true, note: "Community vouching" },
    ]},
  ];

  const pricingComparison = {
    spice: { monthly: 14.99, yearly: 99.99 },
    sls: { monthly: 14.95, yearly: 149.95 }
  };

  const yearlySavings = pricingComparison.sls.yearly - pricingComparison.spice.yearly;

  const slsProblems = [
    { 
      title: "Extremely Dated Design", 
      description: "SLS looks like it was built in 2003 and never updated. Confusing navigation, cluttered pages, and an overwhelming interface.",
      icon: History
    },
    { 
      title: "Terrible Mobile Experience", 
      description: "The SLS 'app' is just their website in an app frame. Slow, clunky, and frustrating to use on phones.",
      icon: Smartphone
    },
    { 
      title: "Slow Loading Times", 
      description: "Page loads can take 5-10 seconds. Search is painfully slow. The entire experience feels sluggish.",
      icon: Clock
    },
    { 
      title: "Information Overload", 
      description: "Too many features crammed into confusing menus. New users often feel overwhelmed and lost.",
      icon: AlertTriangle
    },
  ];

  const slsStrengths = [
    { 
      title: "Largest Userbase", 
      description: "SLS has been around since 2001 and has the largest swinger community, especially in North America.",
      icon: Users
    },
    { 
      title: "Extensive Event Database", 
      description: "The most comprehensive listing of lifestyle events, parties, and club nights anywhere.",
      icon: Calendar
    },
    { 
      title: "Active Forums", 
      description: "Long-running discussion forums with years of accumulated knowledge and active communities.",
      icon: MessageSquare
    },
    { 
      title: "Regional Chat Rooms", 
      description: "Real-time chat rooms organized by region for meeting locals.",
      icon: Globe
    },
  ];

  const userReviews = [
    {
      name: "Mike & Sarah",
      type: "Couple, 12yr swingers",
      rating: 5,
      review: "We used SLS for a decade but finally switched. SPICE is what SLS should have evolved into. Modern, fast, actually works on our phones.",
      verified: true
    },
    {
      name: "SwingCouple2020",
      type: "Couple, lifestyle hosts",
      rating: 4,
      review: "SLS has the events and the crowd, but their tech is ancient. We use both - SLS for parties, SPICE for daily matching.",
      verified: true
    },
    {
      name: "FirstTimers2024",
      type: "New Couple",
      rating: 5,
      review: "Tried SLS first and got so confused by the interface. SPICE was so much easier to understand. The BDSM quiz helped us figure out what we wanted.",
      verified: true
    }
  ];

  const comparisonScores = [
    { category: "User Experience", spice: 95, sls: 35 },
    { category: "Mobile App", spice: 92, sls: 25 },
    { category: "Community Size", spice: 70, sls: 95 },
    { category: "Events Database", spice: 75, sls: 98 },
    { category: "Modern Features", spice: 90, sls: 40 },
    { category: "Value", spice: 85, sls: 65 },
  ];

  return (
    <>
      <SEO
        title="SPICE vs SLS (SwingLifeStyle) 2025: Modern App vs Legacy Site | Complete Comparison"
        description="SPICE vs SLS SwingLifeStyle comparison: Modern mobile app vs dated website. See features, user experience, pricing. SLS has more users, SPICE has better tech."
        keywords="SPICE vs SLS, SLS alternative, SwingLifeStyle alternative, best swingers app, SLS review, modern swingers app, lifestyle dating app"
        canonical="https://thespiceapp.com/vs/sls"
        structuredData={combinedSchema}
      />

      <div className="relative min-h-screen">
        <ParticlesBackground />
        <Header />
        <Breadcrumbs />
        
        <main className="relative z-10 pt-32 pb-12">
          <div className="container mx-auto px-4">
            
            {/* Hero Section */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary mb-6">
                <Award className="w-4 h-4" />
                Updated January 2025
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                SPICE vs SLS (SwingLifeStyle)
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                The modern mobile-first alternative vs the legacy giant. SLS has the largest community, but SPICE has the technology. Here's the full breakdown.
              </p>
            </div>

            {/* Quick Verdict */}
            <div className="mb-16">
              <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl p-8 md:p-10 border border-primary/30">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  {/* SPICE Score */}
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 rounded-full text-primary text-sm font-medium mb-3">
                      <Smartphone className="w-4 h-4" />
                      Best Tech
                    </div>
                    <h3 className="text-3xl font-bold text-primary mb-2">SPICE</h3>
                    <div className="flex items-center justify-center gap-1 mb-2">
                      {[1,2,3,4,5].map((i) => (
                        <Star key={i} className={`w-5 h-5 ${i <= 4 ? 'text-yellow-400 fill-yellow-400' : 'text-muted'}`} />
                      ))}
                    </div>
                    <div className="text-4xl font-bold">86<span className="text-lg text-muted-foreground">/100</span></div>
                    <p className="text-sm text-muted-foreground mt-1">Modern experience</p>
                  </div>

                  {/* VS */}
                  <div className="text-center">
                    <div className="text-6xl font-bold text-muted-foreground/30">VS</div>
                    <p className="text-sm text-muted-foreground mt-2">Different strengths</p>
                  </div>

                  {/* SLS Score */}
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 rounded-full text-blue-500 text-sm font-medium mb-3">
                      <Users className="w-4 h-4" />
                      Biggest Community
                    </div>
                    <h3 className="text-3xl font-bold mb-2">SLS</h3>
                    <div className="flex items-center justify-center gap-1 mb-2">
                      {[1,2,3,4,5].map((i) => (
                        <Star key={i} className={`w-5 h-5 ${i <= 3 ? 'text-yellow-400 fill-yellow-400' : 'text-muted'}`} />
                      ))}
                    </div>
                    <div className="text-4xl font-bold">68<span className="text-lg text-muted-foreground">/100</span></div>
                    <p className="text-sm text-muted-foreground mt-1">Legacy platform</p>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <h4 className="font-bold mb-4 text-center">The Verdict:</h4>
                  <p className="text-center text-muted-foreground max-w-3xl mx-auto">
                    <strong className="text-primary">SPICE wins on technology</strong>—modern app, BDSM quiz, better UX. 
                    <strong className="text-blue-500"> SLS wins on community size</strong>—20+ years of users, events, and forums. 
                    For the best experience, many couples use <strong>SPICE for matching, SLS for events</strong>.
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Score Comparison */}
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-primary" />
                Category Scores
              </h2>
              
              <div className="bg-card/60 backdrop-blur-sm border border-border rounded-2xl p-6">
                <div className="space-y-6">
                  {comparisonScores.map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{item.category}</span>
                        <div className="flex gap-4 text-sm">
                          <span className="text-primary font-medium">SPICE: {item.spice}</span>
                          <span className="text-muted-foreground">SLS: {item.sls}</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-primary rounded-full transition-all" 
                            style={{ width: `${item.spice}%` }} 
                          />
                        </div>
                        <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-blue-500 rounded-full transition-all" 
                            style={{ width: `${item.sls}%` }} 
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center gap-8 mt-6 pt-6 border-t border-border">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-primary rounded-full" />
                    <span className="text-sm font-medium">SPICE</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-blue-500 rounded-full" />
                    <span className="text-sm font-medium">SLS</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Problems & Strengths */}
            <section className="mb-16">
              <div className="grid md:grid-cols-2 gap-6">
                {/* SLS Problems */}
                <div className="bg-card/60 backdrop-blur-sm border border-red-500/30 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <AlertTriangle className="w-8 h-8 text-red-400" />
                    <div>
                      <h3 className="text-xl font-bold">SLS Pain Points</h3>
                      <p className="text-sm text-muted-foreground">Why users get frustrated</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {slsProblems.map((item, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-red-500/5 rounded-lg">
                        <div className="p-2 bg-red-500/10 rounded-lg">
                          <item.icon className="w-5 h-5 text-red-400" />
                        </div>
                        <div>
                          <h4 className="font-medium">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* SLS Strengths */}
                <div className="bg-card/60 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <Crown className="w-8 h-8 text-blue-500" />
                    <div>
                      <h3 className="text-xl font-bold">SLS Strengths</h3>
                      <p className="text-sm text-muted-foreground">What SLS does well</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {slsStrengths.map((item, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-blue-500/5 rounded-lg">
                        <div className="p-2 bg-blue-500/10 rounded-lg">
                          <item.icon className="w-5 h-5 text-blue-500" />
                        </div>
                        <div>
                          <h4 className="font-medium">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* SPICE Advantages */}
            <section className="mb-16">
              <div className="bg-gradient-to-br from-primary/20 to-purple-500/20 border border-primary/30 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles className="w-8 h-8 text-primary" />
                  <div>
                    <h2 className="text-2xl font-bold">Why Choose SPICE Over SLS</h2>
                    <p className="text-muted-foreground">Modern technology for modern swingers</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-background/50 border border-border/50 rounded-xl p-4 text-center">
                    <Smartphone className="w-8 h-8 text-primary mx-auto mb-2" />
                    <h4 className="font-bold">Real Mobile App</h4>
                    <p className="text-sm text-muted-foreground">Native app, not a website wrapper</p>
                  </div>
                  <div className="bg-background/50 border border-border/50 rounded-xl p-4 text-center">
                    <Sparkles className="w-8 h-8 text-primary mx-auto mb-2" />
                    <h4 className="font-bold">BDSM Quiz</h4>
                    <p className="text-sm text-muted-foreground">Unique compatibility matching</p>
                  </div>
                  <div className="bg-background/50 border border-border/50 rounded-xl p-4 text-center">
                    <Zap className="w-8 h-8 text-primary mx-auto mb-2" />
                    <h4 className="font-bold">Fast & Modern</h4>
                    <p className="text-sm text-muted-foreground">Instant loads, clean design</p>
                  </div>
                  <div className="bg-background/50 border border-border/50 rounded-xl p-4 text-center">
                    <Shield className="w-8 h-8 text-primary mx-auto mb-2" />
                    <h4 className="font-bold">ID Verification</h4>
                    <p className="text-sm text-muted-foreground">Fewer fakes guaranteed</p>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <Link to="/download" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all">
                    <Download className="w-5 h-5" />
                    Try SPICE Free
                  </Link>
                </div>
              </div>
            </section>

            {/* Pricing Comparison */}
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
                <DollarSign className="w-8 h-8 text-primary" />
                Pricing Comparison
              </h2>
              
              <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl p-6 mb-6">
                <div className="flex items-center justify-center gap-4 text-center">
                  <DollarSign className="w-8 h-8 text-green-500" />
                  <div>
                    <p className="text-2xl font-bold text-green-500">Save ${yearlySavings}/year with SPICE</p>
                    <p className="text-muted-foreground">Similar monthly pricing, but SPICE yearly is much cheaper</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card/60 backdrop-blur-sm border-2 border-primary rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-primary mb-4">SPICE Pricing</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between p-3 bg-background/50 rounded-lg">
                      <span>Monthly</span>
                      <span className="font-bold">${pricingComparison.spice.monthly}</span>
                    </div>
                    <div className="flex justify-between p-3 bg-background/50 rounded-lg">
                      <span>Yearly</span>
                      <span className="font-bold">${pricingComparison.spice.yearly}</span>
                    </div>
                    <div className="flex justify-between p-3 bg-green-500/10 rounded-lg">
                      <span className="text-green-500 font-medium">+ Modern App</span>
                      <span className="font-bold text-green-500">Included</span>
                    </div>
                  </div>
                </div>

                <div className="bg-card/60 backdrop-blur-sm border border-border rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-4">SLS Pricing</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between p-3 bg-background/50 rounded-lg">
                      <span>Monthly</span>
                      <span className="font-bold">${pricingComparison.sls.monthly}</span>
                    </div>
                    <div className="flex justify-between p-3 bg-background/50 rounded-lg">
                      <span>Yearly</span>
                      <span className="font-bold">${pricingComparison.sls.yearly}</span>
                    </div>
                    <div className="flex justify-between p-3 bg-blue-500/10 rounded-lg">
                      <span className="text-blue-500 font-medium">+ Largest Community</span>
                      <span className="font-bold text-blue-500">Included</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Feature Comparison */}
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
                <Target className="w-8 h-8 text-primary" />
                Feature Comparison
              </h2>
              
              <div className="space-y-6">
                {features.map((category, catIndex) => (
                  <div key={catIndex} className="bg-card/60 backdrop-blur-sm border border-border rounded-2xl overflow-hidden">
                    <div className="bg-muted/50 p-4 border-b border-border">
                      <h3 className="font-bold">{category.category}</h3>
                    </div>
                    <div className="divide-y divide-border/50">
                      {category.features.map((feature, featIndex) => (
                        <div key={featIndex} className="p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                          <div className="flex-1">
                            <span className="font-medium">{feature.name}</span>
                            <p className="text-xs text-muted-foreground">{feature.note}</p>
                          </div>
                          <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2 min-w-[80px]">
                              {feature.spice ? (
                                <CheckCircle className="w-5 h-5 text-green-500" />
                              ) : (
                                <XCircle className="w-5 h-5 text-red-400" />
                              )}
                              <span className="text-sm text-primary font-medium">SPICE</span>
                            </div>
                            <div className="flex items-center gap-2 min-w-[80px]">
                              {feature.sls ? (
                                <CheckCircle className="w-5 h-5 text-green-500" />
                              ) : (
                                <XCircle className="w-5 h-5 text-red-400" />
                              )}
                              <span className="text-sm">SLS</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* User Reviews */}
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
                <MessageSquare className="w-8 h-8 text-primary" />
                User Experiences
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {userReviews.map((review, index) => (
                  <div key={index} className="bg-card/60 backdrop-blur-sm border border-border rounded-2xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="font-bold">{review.name}</p>
                        <p className="text-sm text-muted-foreground">{review.type}</p>
                      </div>
                      {review.verified && (
                        <span className="px-2 py-1 bg-green-500/20 text-green-500 text-xs font-medium rounded-full">
                          Verified
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1 mb-3">
                      {[1,2,3,4,5].map((i) => (
                        <Star key={i} className={`w-4 h-4 ${i <= review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted'}`} />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground italic">"{review.review}"</p>
                  </div>
                ))}
              </div>
            </section>

            {/* When to Choose */}
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">When to Choose Each</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-primary/20 to-purple-500/20 border border-primary/30 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                    <Smartphone className="w-6 h-6" />
                    Choose SPICE If You...
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Want a modern, fast mobile app</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Are into BDSM and want compatibility matching</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Prefer swipe-style matching over profile browsing</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Value verified profiles and ID verification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Are frustrated with SLS's dated interface</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card/60 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Users className="w-6 h-6 text-blue-500" />
                    Consider SLS If You...
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 flex items-center justify-center text-blue-500 mt-0.5">•</span>
                      <span className="text-muted-foreground">Need the largest possible userbase</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 flex items-center justify-center text-blue-500 mt-0.5">•</span>
                      <span className="text-muted-foreground">Primarily attend parties and need event listings</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 flex items-center justify-center text-blue-500 mt-0.5">•</span>
                      <span className="text-muted-foreground">Want forum discussions and chat rooms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 flex items-center justify-center text-blue-500 mt-0.5">•</span>
                      <span className="text-muted-foreground">Don't mind desktop-focused, dated UI</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 flex items-center justify-center text-blue-500 mt-0.5">•</span>
                      <span className="text-muted-foreground">Already have established SLS connections</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-primary/10 border border-primary/30 rounded-xl p-6 text-center">
                <p className="text-lg">
                  <strong className="text-primary">Pro Tip:</strong> Many experienced swingers use <strong>both</strong>—SPICE for daily matching and modern features, SLS for event discovery and the larger community.
                </p>
              </div>
            </section>

            {/* Final CTA */}
            <section>
              <div className="bg-gradient-to-r from-primary/30 via-purple-500/30 to-pink-500/30 rounded-2xl p-8 md:p-12 border border-primary/40 text-center">
                <Zap className="w-12 h-12 text-primary mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience Modern Lifestyle Dating</h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  BDSM quiz, real mobile app, fast performance, ID verification. See what you've been missing.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link to="/download" className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all gap-2 text-lg">
                    <Download className="w-5 h-5" />
                    Download SPICE Free
                  </Link>
                  <Link to="/tools/app-comparisons" className="inline-flex items-center justify-center px-8 py-4 border border-primary text-primary hover:bg-primary/10 font-semibold rounded-full transition-all gap-2">
                    See All Comparisons
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </section>

          </div>
        </main>

        <FooterSection />
      </div>
    </>
  );
};

export default ComparisonSLS;
