import { CheckCircle, XCircle, Crown, Download, Shield, Users, Star, DollarSign, Smartphone, Calendar, Sparkles, ChevronRight, Award, MessageSquare, Zap, Globe, Laptop, Target, Heart, PartyPopper, MapPin, Clock } from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";

const ComparisonKasidie = () => {
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ComparisonPage",
        "name": "SPICE vs Kasidie: Modern App vs Legacy Swingers Site",
        "description": "Compare SPICE and Kasidie - features, pricing, mobile experience, BDSM tools"
      }
    ]
  };

  const features = [
    { category: "User Experience", features: [
      { name: "Modern Mobile App", spice: true, kasidie: false, note: "Kasidie's app is a web wrapper" },
      { name: "Intuitive Interface", spice: true, kasidie: false, note: "Kasidie has dated navigation" },
      { name: "Swipe Matching", spice: true, kasidie: false, note: "Modern dating app style" },
      { name: "Fast Performance", spice: true, kasidie: false, note: "Kasidie can be slow" },
      { name: "Dark Mode", spice: true, kasidie: false, note: "SPICE only" },
      { name: "Push Notifications", spice: true, kasidie: true, note: "Both support" },
    ]},
    { category: "Matching & Discovery", features: [
      { name: "BDSM Compatibility Quiz", spice: true, kasidie: false, note: "Unique to SPICE" },
      { name: "Couples Profiles", spice: true, kasidie: true, note: "Both support linked profiles" },
      { name: "Interest Tags", spice: true, kasidie: true, note: "Both have tags" },
      { name: "Advanced Search", spice: true, kasidie: true, note: "Both offer filters" },
      { name: "Travel Announcements", spice: true, kasidie: true, note: "Both support travel mode" },
      { name: "Hot Date Feature", spice: true, kasidie: true, note: "Find tonight's matches" },
    ]},
    { category: "Community & Events", features: [
      { name: "Local Events Calendar", spice: true, kasidie: true, note: "Kasidie known for events" },
      { name: "Club Directory", spice: true, kasidie: true, note: "Both list venues" },
      { name: "Party RSVPs", spice: true, kasidie: true, note: "Both track attendance" },
      { name: "Forums/Groups", spice: false, kasidie: true, note: "Kasidie has legacy forums" },
      { name: "Photo Albums", spice: true, kasidie: true, note: "Both support galleries" },
      { name: "Lifestyle Resources", spice: true, kasidie: true, note: "Educational content" },
    ]},
    { category: "Safety & Verification", features: [
      { name: "Photo Verification", spice: true, kasidie: true, note: "Both verify photos" },
      { name: "ID Verification", spice: true, kasidie: true, note: "Both offer ID check" },
      { name: "24/7 Moderation", spice: true, kasidie: true, note: "Both have teams" },
      { name: "Certifications/Vouches", spice: true, kasidie: true, note: "Community vouching" },
      { name: "Block/Report", spice: true, kasidie: true, note: "Standard feature" },
    ]},
    { category: "Communication", features: [
      { name: "Unlimited Messaging", spice: true, kasidie: true, note: "Premium feature" },
      { name: "Flirts/Icebreakers", spice: true, kasidie: true, note: "Quick interest signals" },
      { name: "Photo Sharing in Chat", spice: true, kasidie: true, note: "Both support" },
      { name: "Video Chat", spice: false, kasidie: false, note: "Neither has native video" },
    ]},
  ];

  const pricingComparison = {
    spice: { monthly: 14.99, quarterly: 34.99, yearly: 99.99 },
    kasidie: { monthly: 19.99, quarterly: 49.99, yearly: 149.99 }
  };

  const yearlySavings = pricingComparison.kasidie.yearly - pricingComparison.spice.yearly;

  const kasidieStrengths = [
    { title: "Event Scene", description: "Kasidie is known for its active party and event community, especially in certain regions.", icon: PartyPopper },
    { title: "Established Community", description: "Longer history means larger userbase in some markets, especially Western US.", icon: Users },
    { title: "Party RSVPs", description: "Strong event management with guest lists, RSVPs, and party reviews.", icon: Calendar },
    { title: "Certifications", description: "Community vouching system where members verify meeting each other.", icon: Award },
  ];

  const spiceAdvantages = [
    { title: "Modern Mobile App", description: "True native app vs Kasidie's web wrapper. Faster, smoother, better UX.", icon: Smartphone },
    { title: "BDSM Quiz", description: "Unique compatibility matching for kinks that Kasidie doesn't offer.", icon: Sparkles },
    { title: "33% Cheaper", description: "Save $50/year with better features and modern technology.", icon: DollarSign },
    { title: "Intuitive Design", description: "Modern swipe interface vs Kasidie's 2010-era navigation.", icon: Zap },
  ];

  const userReviews = [
    {
      name: "The Andersons",
      type: "Couple, 8yr lifestyle",
      rating: 5,
      review: "We love Kasidie for parties but their app is painful. SPICE is what we use daily for matching. Best of both worlds.",
      verified: true
    },
    {
      name: "Phoenix Swingers",
      type: "Couple, party hosts",
      rating: 5,
      review: "Kasidie has the party crowd but SPICE has the tech. We use SPICE to find couples, then invite them to Kasidie events.",
      verified: true
    },
    {
      name: "NewbieCurious",
      type: "New Couple",
      rating: 5,
      review: "Started on Kasidie but got overwhelmed. SPICE's clean interface and BDSM quiz helped us figure out what we actually want.",
      verified: true
    }
  ];

  return (
    <>
      <SEO
        title="SPICE vs Kasidie 2025: Modern App vs Legacy Swingers Site | Complete Comparison"
        description="SPICE vs Kasidie comparison: Modern mobile app, BDSM quiz, 33% cheaper. See features, pricing, and why couples use SPICE for daily matching and Kasidie for events."
        keywords="SPICE vs Kasidie, Kasidie alternative, best swingers app, Kasidie review, modern swingers app, lifestyle dating app, swinger party app"
        canonical="https://thespiceapp.com/vs/kasidie"
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
                SPICE vs Kasidie
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Modern mobile-first app vs established party-focused platform. Both have strengths—see which fits your lifestyle.
              </p>
            </div>

            {/* Quick Verdict */}
            <div className="mb-16">
              <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl p-8 md:p-10 border border-primary/30">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  {/* SPICE Score */}
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/20 rounded-full text-primary text-sm font-medium mb-3">
                      <Crown className="w-4 h-4" />
                      Best Overall
                    </div>
                    <h3 className="text-3xl font-bold text-primary mb-2">SPICE</h3>
                    <div className="flex items-center justify-center gap-1 mb-2">
                      {[1,2,3,4,5].map((i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <div className="text-4xl font-bold">87<span className="text-lg text-muted-foreground">/100</span></div>
                    <p className="text-sm text-muted-foreground mt-1">Best for daily matching</p>
                  </div>

                  {/* VS */}
                  <div className="text-center">
                    <div className="text-6xl font-bold text-muted-foreground/30">VS</div>
                    <p className="text-sm text-muted-foreground mt-2">Different strengths</p>
                  </div>

                  {/* Kasidie Score */}
                  <div className="text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-500/20 rounded-full text-yellow-500 text-sm font-medium mb-3">
                      <PartyPopper className="w-4 h-4" />
                      Event Leader
                    </div>
                    <h3 className="text-3xl font-bold mb-2">Kasidie</h3>
                    <div className="flex items-center justify-center gap-1 mb-2">
                      {[1,2,3,4,5].map((i) => (
                        <Star key={i} className={`w-5 h-5 ${i <= 4 ? 'text-yellow-400 fill-yellow-400' : 'text-muted'}`} />
                      ))}
                    </div>
                    <div className="text-4xl font-bold">74<span className="text-lg text-muted-foreground">/100</span></div>
                    <p className="text-sm text-muted-foreground mt-1">Best for party scene</p>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-border">
                  <h4 className="font-bold mb-4 text-center">The Verdict:</h4>
                  <p className="text-center text-muted-foreground max-w-2xl mx-auto">
                    <strong className="text-primary">SPICE wins for daily matching</strong> with its modern app and BDSM quiz. 
                    <strong className="text-yellow-500"> Kasidie excels at events</strong> with its established party community. 
                    Many couples use both—SPICE to find matches, Kasidie for parties.
                  </p>
                </div>
              </div>
            </div>

            {/* Strengths Comparison */}
            <section className="mb-16">
              <div className="grid md:grid-cols-2 gap-6">
                {/* SPICE Advantages */}
                <div className="bg-card/60 backdrop-blur-sm border-2 border-primary rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <Crown className="w-8 h-8 text-primary" />
                    <div>
                      <h3 className="text-xl font-bold text-primary">SPICE Advantages</h3>
                      <p className="text-sm text-muted-foreground">Why couples choose SPICE</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {spiceAdvantages.map((item, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-background/50 rounded-lg">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link to="/download" className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl transition-all">
                    <Download className="w-5 h-5" />
                    Try SPICE Free
                  </Link>
                </div>

                {/* Kasidie Strengths */}
                <div className="bg-card/60 backdrop-blur-sm border border-border rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <PartyPopper className="w-8 h-8 text-yellow-500" />
                    <div>
                      <h3 className="text-xl font-bold">Kasidie Strengths</h3>
                      <p className="text-sm text-muted-foreground">Where Kasidie shines</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {kasidieStrengths.map((item, index) => (
                      <div key={index} className="flex items-start gap-3 p-3 bg-background/50 rounded-lg">
                        <div className="p-2 bg-yellow-500/10 rounded-lg">
                          <item.icon className="w-5 h-5 text-yellow-500" />
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
                    <p className="text-muted-foreground">That's ${Math.round(yearlySavings / 12)}/month back in your pocket</p>
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
                      <span>3 Months</span>
                      <span className="font-bold">${pricingComparison.spice.quarterly}</span>
                    </div>
                    <div className="flex justify-between p-3 bg-background/50 rounded-lg">
                      <span>Yearly</span>
                      <span className="font-bold">${pricingComparison.spice.yearly}</span>
                    </div>
                    <div className="flex justify-between p-3 bg-green-500/10 rounded-lg">
                      <span className="text-green-500 font-medium">Savings vs Kasidie</span>
                      <span className="font-bold text-green-500">-33%</span>
                    </div>
                  </div>
                </div>

                <div className="bg-card/60 backdrop-blur-sm border border-border rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-4">Kasidie Pricing</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between p-3 bg-background/50 rounded-lg">
                      <span>Monthly</span>
                      <span className="font-bold">${pricingComparison.kasidie.monthly}</span>
                    </div>
                    <div className="flex justify-between p-3 bg-background/50 rounded-lg">
                      <span>3 Months</span>
                      <span className="font-bold">${pricingComparison.kasidie.quarterly}</span>
                    </div>
                    <div className="flex justify-between p-3 bg-background/50 rounded-lg">
                      <span>Yearly</span>
                      <span className="font-bold">${pricingComparison.kasidie.yearly}</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Feature Comparison */}
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
                <Target className="w-8 h-8 text-primary" />
                Complete Feature Comparison
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
                              {feature.kasidie ? (
                                <CheckCircle className="w-5 h-5 text-green-500" />
                              ) : (
                                <XCircle className="w-5 h-5 text-red-400" />
                              )}
                              <span className="text-sm">Kasidie</span>
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
                      <span>Want a modern, fast mobile app for daily use</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Are into BDSM/kink and want compatibility matching</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Prefer swipe-style matching over browsing profiles</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Want to save 33% on subscription costs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Are new to lifestyle and want educational resources</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card/60 backdrop-blur-sm border border-border rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <PartyPopper className="w-6 h-6 text-yellow-500" />
                    Consider Kasidie If You...
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 flex items-center justify-center text-yellow-500 mt-0.5">•</span>
                      <span className="text-muted-foreground">Primarily attend lifestyle parties and events</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 flex items-center justify-center text-yellow-500 mt-0.5">•</span>
                      <span className="text-muted-foreground">Live in Western US where Kasidie is popular</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 flex items-center justify-center text-yellow-500 mt-0.5">•</span>
                      <span className="text-muted-foreground">Want community forums and discussion groups</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-5 h-5 flex items-center justify-center text-yellow-500 mt-0.5">•</span>
                      <span className="text-muted-foreground">Already have an established Kasidie network</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Final CTA */}
            <section>
              <div className="bg-gradient-to-r from-primary/30 via-purple-500/30 to-pink-500/30 rounded-2xl p-8 md:p-12 border border-primary/40 text-center">
                <Smartphone className="w-12 h-12 text-primary mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Try the Modern Alternative</h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  BDSM quiz, modern app, 33% cheaper. See why couples are adding SPICE to their lifestyle toolkit.
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

export default ComparisonKasidie;
