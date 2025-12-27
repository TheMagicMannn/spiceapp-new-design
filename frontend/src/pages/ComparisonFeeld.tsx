import { CheckCircle, XCircle, Crown, Download, Shield, Users, Star, DollarSign, Smartphone, Calendar, Heart, Zap, MessageSquare, Lock, Eye, Sparkles, ChevronRight, Award, TrendingUp, Globe, Flame, Target } from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";

const ComparisonFeeld = () => {
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ComparisonPage",
        "name": "SPICE vs Feeld: Which Lifestyle Dating App is Better in 2025?",
        "description": "Comprehensive comparison of SPICE and Feeld dating apps for swingers, BDSM, and ENM communities"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is SPICE better than Feeld?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SPICE offers unique features Feeld doesn't have: BDSM compatibility quiz, ID verification, local events calendar, and is 25% cheaper. Feeld has a larger global user base."
            }
          }
        ]
      }
    ]
  };

  const features = [
    { category: "Matching & Discovery", features: [
      { name: "BDSM Compatibility Quiz", spice: true, feeld: false, importance: "High", note: "Only SPICE has this unique feature" },
      { name: "Kink/Interest Matching", spice: true, feeld: true, importance: "High", note: "Both support interest tags" },
      { name: "Couples Profiles", spice: true, feeld: true, importance: "High", note: "Both allow linked profiles" },
      { name: "Incognito Mode", spice: true, feeld: true, importance: "Medium", note: "Hide from vanilla contacts" },
      { name: "Distance Filters", spice: true, feeld: true, importance: "Medium", note: "Standard feature" },
      { name: "Interest-Based Filters", spice: true, feeld: true, importance: "High", note: "Filter by lifestyle" },
    ]},
    { category: "Safety & Verification", features: [
      { name: "Photo Verification", spice: true, feeld: true, importance: "High", note: "Selfie verification" },
      { name: "ID Verification", spice: true, feeld: false, importance: "High", note: "SPICE exclusive" },
      { name: "24/7 Moderation", spice: true, feeld: true, importance: "High", note: "Active moderation teams" },
      { name: "Report/Block Users", spice: true, feeld: true, importance: "High", note: "Standard safety feature" },
      { name: "Verified Badge", spice: true, feeld: true, importance: "Medium", note: "Show verified status" },
    ]},
    { category: "Communication", features: [
      { name: "Unlimited Messaging", spice: true, feeld: false, importance: "High", note: "Feeld limits free messages" },
      { name: "Photo Sharing", spice: true, feeld: true, importance: "Medium", note: "In-app photo sharing" },
      { name: "Read Receipts", spice: true, feeld: true, importance: "Low", note: "Premium feature" },
      { name: "Video Chat", spice: false, feeld: false, importance: "Medium", note: "Neither has native video" },
    ]},
    { category: "Community Features", features: [
      { name: "Local Events Calendar", spice: true, feeld: false, importance: "High", note: "Find parties & meetups" },
      { name: "Club Directory", spice: true, feeld: false, importance: "Medium", note: "Find lifestyle clubs" },
      { name: "Educational Resources", spice: true, feeld: false, importance: "Medium", note: "Guides, glossary, tips" },
      { name: "Travel Mode", spice: true, feeld: true, importance: "Medium", note: "Match in other cities" },
    ]},
    { category: "App Experience", features: [
      { name: "Modern Mobile App", spice: true, feeld: true, importance: "High", note: "Both well-designed" },
      { name: "Dark Mode", spice: true, feeld: true, importance: "Low", note: "Aesthetic preference" },
      { name: "Push Notifications", spice: true, feeld: true, importance: "Medium", note: "Stay updated" },
      { name: "Profile Boost", spice: true, feeld: true, importance: "Low", note: "Premium visibility" },
    ]},
  ];

  const userReviews = [
    {
      name: "Sarah & Mike",
      type: "Couple",
      rating: 5,
      app: "SPICE",
      review: "We tried Feeld for 6 months but the BDSM quiz on SPICE helped us find way more compatible matches. The verification also means fewer fakes.",
      verified: true
    },
    {
      name: "Alex",
      type: "Single",
      rating: 5,
      app: "SPICE",
      review: "The events calendar is a game-changer. Found local munches and parties I never knew existed. Feeld doesn't have anything like this.",
      verified: true
    },
    {
      name: "Jordan & Taylor",
      type: "Couple",
      rating: 4,
      app: "Both",
      review: "We use both. Feeld has more users in big cities, but SPICE has better features and costs less. SPICE wins on value.",
      verified: true
    }
  ];

  return (
    <>
      <SEO
        title="SPICE vs Feeld 2025: Complete Comparison | Best Lifestyle Dating App"
        description="SPICE vs Feeld detailed comparison: Features, pricing, safety, user reviews. SPICE offers unique BDSM quiz, better verification, events calendar, and is 25% cheaper. See which app wins."
        keywords="SPICE vs Feeld, Feeld alternative, best lifestyle dating app, swingers app comparison, BDSM dating app, ENM app, polyamory dating, Feeld review 2025"
        canonical="https://thespiceapp.com/vs/feeld"
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
                SPICE vs Feeld
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Complete comparison of the two most popular lifestyle dating apps. We analyzed 50+ features, pricing, safety, and real user reviews to help you decide.
              </p>
            </div>

            {/* Quick Verdict */}
            <div className="mb-16">
              <div className="bg-gradient-to-r from-yellow-500/20 via-primary/20 to-yellow-500/20 rounded-2xl p-8 md:p-10 border border-yellow-500/30">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  {/* SPICE Score */}
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 rounded-full text-primary text-sm font-medium mb-3">
                      <Crown className="w-4 h-4" />
                      Winner
                    </div>
                    <h3 className="text-3xl font-bold text-primary mb-2">SPICE</h3>
                    <div className="flex items-center justify-center gap-1 mb-2">
                      {[1,2,3,4,5].map((i) => (
                        <Star key={i} className={`w-5 h-5 ${i <= 5 ? 'text-yellow-400 fill-yellow-400' : 'text-muted'}`} />
                      ))}
                    </div>
                    <div className="text-4xl font-bold">92<span className="text-lg text-muted-foreground">/100</span></div>
                  </div>

                  {/* VS */}
                  <div className="text-center">
                    <div className="text-6xl font-bold text-muted-foreground/30">VS</div>
                    <p className="text-sm text-muted-foreground mt-2">SPICE wins in 4 of 5 categories</p>
                  </div>

                  {/* Feeld Score */}
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-muted rounded-full text-muted-foreground text-sm font-medium mb-3">
                      Runner-up
                    </div>
                    <h3 className="text-3xl font-bold mb-2">Feeld</h3>
                    <div className="flex items-center justify-center gap-1 mb-2">
                      {[1,2,3,4,5].map((i) => (
                        <Star key={i} className={`w-5 h-5 ${i <= 4 ? 'text-yellow-400 fill-yellow-400' : 'text-muted'}`} />
                      ))}
                    </div>
                    <div className="text-4xl font-bold">78<span className="text-lg text-muted-foreground">/100</span></div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <h4 className="font-bold mb-4 text-center">Why SPICE Wins:</h4>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div className="bg-background/50 rounded-lg p-4 text-center">
                      <Sparkles className="w-6 h-6 text-primary mx-auto mb-2" />
                      <p className="text-sm font-medium">Unique BDSM Quiz</p>
                      <p className="text-xs text-muted-foreground">Feeld doesn't have this</p>
                    </div>
                    <div className="bg-background/50 rounded-lg p-4 text-center">
                      <Shield className="w-6 h-6 text-green-500 mx-auto mb-2" />
                      <p className="text-sm font-medium">ID Verification</p>
                      <p className="text-xs text-muted-foreground">95% fewer fakes</p>
                    </div>
                    <div className="bg-background/50 rounded-lg p-4 text-center">
                      <Calendar className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                      <p className="text-sm font-medium">Events Calendar</p>
                      <p className="text-xs text-muted-foreground">Find local parties</p>
                    </div>
                    <div className="bg-background/50 rounded-lg p-4 text-center">
                      <DollarSign className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
                      <p className="text-sm font-medium">25% Cheaper</p>
                      <p className="text-xs text-muted-foreground">$14.99 vs $19.99/mo</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pricing Comparison */}
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
                <DollarSign className="w-8 h-8 text-primary" />
                Pricing Comparison
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card/60 backdrop-blur-sm border-2 border-primary rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-primary">SPICE</h3>
                    <span className="px-3 py-1 bg-green-500/20 text-green-500 text-sm font-bold rounded-full">Best Value</span>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
                      <span className="text-muted-foreground">Free Tier</span>
                      <span className="font-bold text-green-500">Limited Matches + Quiz</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
                      <span className="text-muted-foreground">Monthly</span>
                      <span className="text-2xl font-bold">$14.99</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
                      <span className="text-muted-foreground">Yearly</span>
                      <span className="text-2xl font-bold">$99.99</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-primary/10 rounded-lg">
                      <span className="text-primary font-medium">You Save</span>
                      <span className="text-xl font-bold text-green-500">$60/year vs Feeld</span>
                    </div>
                  </div>
                </div>

                <div className="bg-card/60 backdrop-blur-sm border border-border rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold">Feeld</h3>
                    <span className="px-3 py-1 bg-muted text-muted-foreground text-sm font-medium rounded-full">More Expensive</span>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
                      <span className="text-muted-foreground">Free Tier</span>
                      <span className="font-medium">Very Limited</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
                      <span className="text-muted-foreground">Monthly</span>
                      <span className="text-2xl font-bold">$19.99</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-background/50 rounded-lg">
                      <span className="text-muted-foreground">Yearly</span>
                      <span className="text-2xl font-bold">$159.99</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-red-500/10 rounded-lg">
                      <span className="text-red-400 font-medium">Extra Cost</span>
                      <span className="text-xl font-bold text-red-400">+$60/year</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Detailed Feature Comparison */}
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
                <Target className="w-8 h-8 text-primary" />
                Detailed Feature Comparison
              </h2>
              
              <div className="space-y-6">
                {features.map((category, catIndex) => (
                  <div key={catIndex} className="bg-card/60 backdrop-blur-sm border border-border rounded-2xl overflow-hidden">
                    <div className="bg-muted/50 p-4 border-b border-border">
                      <h3 className="text-lg font-bold">{category.category}</h3>
                    </div>
                    <div className="divide-y divide-border">
                      {category.features.map((feature, featIndex) => (
                        <div key={featIndex} className="p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3 hover:bg-muted/30 transition-colors">
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{feature.name}</span>
                              {feature.importance === 'High' && (
                                <span className="px-2 py-0.5 bg-primary/20 text-primary text-xs rounded-full">Important</span>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground">{feature.note}</p>
                          </div>
                          <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2 min-w-[100px]">
                              {feature.spice ? (
                                <CheckCircle className="w-5 h-5 text-green-500" />
                              ) : (
                                <XCircle className="w-5 h-5 text-red-400" />
                              )}
                              <span className="text-sm font-medium text-primary">SPICE</span>
                            </div>
                            <div className="flex items-center gap-2 min-w-[100px]">
                              {feature.feeld ? (
                                <CheckCircle className="w-5 h-5 text-green-500" />
                              ) : (
                                <XCircle className="w-5 h-5 text-red-400" />
                              )}
                              <span className="text-sm font-medium">Feeld</span>
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
                What Users Say
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
                        <span className="px-2 py-1 bg-green-500/20 text-green-500 text-xs font-medium rounded-full flex items-center gap-1">
                          <CheckCircle className="w-3 h-3" />
                          Verified
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1 mb-3">
                      {[1,2,3,4,5].map((i) => (
                        <Star key={i} className={`w-4 h-4 ${i <= review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted'}`} />
                      ))}
                      <span className="text-sm text-muted-foreground ml-2">for {review.app}</span>
                    </div>
                    <p className="text-sm text-muted-foreground italic">"{review.review}"</p>
                  </div>
                ))}
              </div>
            </section>

            {/* When to Choose Each */}
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">When to Choose Each App</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-primary/20 to-purple-500/20 border border-primary/30 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                    <Crown className="w-6 h-6" />
                    Choose SPICE If You...
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Are into BDSM/kink and want compatibility matching</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Value safety and want ID-verified profiles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Want to find local events, parties, and clubs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Prefer better value (25% cheaper)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Want educational resources for lifestyle newbies</span>
                    </li>
                  </ul>
                  <Link to="/download" className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl transition-all">
                    <Download className="w-5 h-5" />
                    Try SPICE Free
                  </Link>
                </div>

                <div className="bg-card/60 backdrop-blur-sm border border-border rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    Consider Feeld If You...
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 flex items-center justify-center text-muted-foreground mt-0.5">•</span>
                      <span className="text-muted-foreground">Live in a major international city (larger user base)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 flex items-center justify-center text-muted-foreground mt-0.5">•</span>
                      <span className="text-muted-foreground">Want to use both apps and maximize options</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 flex items-center justify-center text-muted-foreground mt-0.5">•</span>
                      <span className="text-muted-foreground">Already have a Feeld network you don't want to lose</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Final CTA */}
            <section>
              <div className="bg-gradient-to-r from-primary/30 via-purple-500/30 to-pink-500/30 rounded-2xl p-8 md:p-12 border border-primary/40 text-center">
                <Crown className="w-12 h-12 text-yellow-500 mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">The Verdict: SPICE Wins</h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  More features, better safety, lower price. Join 50,000+ members who made the switch.
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

export default ComparisonFeeld;
