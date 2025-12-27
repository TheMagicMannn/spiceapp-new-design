import { CheckCircle, XCircle, Crown, Download, Shield, Users, Star, DollarSign, Smartphone, Calendar, Sparkles, ChevronRight, Award, MessageSquare, Zap, TrendingDown, Clock, Globe, Laptop, Target } from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";

const ComparisonSDC = () => {
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ComparisonPage",
        "name": "SPICE vs SDC: Save $420/Year Switching to SPICE",
        "description": "Compare SPICE and SDC swingers websites - pricing, features, mobile app, user experience"
      }
    ]
  };

  const pricingComparison = {
    spice: { monthly: 14.99, quarterly: 34.99, yearly: 99.99 },
    sdc: { monthly: 49.99, quarterly: 99.99, yearly: 299.99 }
  };

  const yearlySavings = pricingComparison.sdc.yearly - pricingComparison.spice.yearly;

  const features = [
    { category: "User Experience", features: [
      { name: "Modern Mobile App", spice: true, sdc: false, note: "SDC's app is outdated" },
      { name: "Intuitive Interface", spice: true, sdc: false, note: "SDC stuck in 2010 design" },
      { name: "Fast Loading", spice: true, sdc: false, note: "SDC is notoriously slow" },
      { name: "Easy Navigation", spice: true, sdc: false, note: "SDC has confusing menus" },
      { name: "Push Notifications", spice: true, sdc: true, note: "Both support notifications" },
      { name: "Offline Access", spice: true, sdc: false, note: "View profiles offline" },
    ]},
    { category: "Matching Features", features: [
      { name: "BDSM Compatibility Quiz", spice: true, sdc: false, note: "Unique to SPICE" },
      { name: "Interest-Based Matching", spice: true, sdc: true, note: "Both have this" },
      { name: "Couples Profiles", spice: true, sdc: true, note: "Standard feature" },
      { name: "Advanced Filters", spice: true, sdc: true, note: "Both offer filters" },
      { name: "Swipe Interface", spice: true, sdc: false, note: "SPICE only" },
      { name: "Mutual Matches", spice: true, sdc: true, note: "Both show mutual interest" },
    ]},
    { category: "Community", features: [
      { name: "Local Events Calendar", spice: true, sdc: true, note: "SDC has more legacy events" },
      { name: "Club Directory", spice: true, sdc: true, note: "Both list clubs" },
      { name: "Travel Announcements", spice: true, sdc: true, note: "Both support travel" },
      { name: "Forums/Groups", spice: false, sdc: true, note: "SDC has legacy forums" },
      { name: "Lifestyle Resources", spice: true, sdc: true, note: "Both have guides" },
    ]},
    { category: "Safety", features: [
      { name: "ID Verification", spice: true, sdc: true, note: "Both verify identity" },
      { name: "Photo Verification", spice: true, sdc: true, note: "Both verify photos" },
      { name: "24/7 Moderation", spice: true, sdc: true, note: "Both have teams" },
      { name: "Block/Report", spice: true, sdc: true, note: "Standard feature" },
    ]},
  ];

  const userReviews = [
    {
      name: "Steve & Linda",
      type: "Couple, 15yr swingers",
      rating: 5,
      review: "Used SDC for 10 years but their app never improved. SPICE is what SDC should have become. Saved us $200/year too.",
      verified: true
    },
    {
      name: "The Johnsons",
      type: "Couple, lifestyle hosts",
      rating: 5,
      review: "We host parties and need to vet people. SPICE's modern app makes this so much easier than SDC's clunky interface.",
      verified: true
    },
    {
      name: "SingleGuy42",
      type: "Single Male",
      rating: 4,
      review: "SDC was $50/month and felt like using a website from 2005. SPICE is $15 and actually works on my phone. No brainer.",
      verified: true
    }
  ];

  const sdcProblems = [
    { problem: "Outdated Interface", description: "SDC's design hasn't meaningfully updated since the 2000s. Confusing navigation and dated aesthetics." },
    { problem: "Poor Mobile Experience", description: "The SDC app is essentially a mobile website wrapper. Crashes, slow loading, poor UX." },
    { problem: "Expensive Pricing", description: "At $50/month or $300/year, SDC is one of the most expensive lifestyle platforms." },
    { problem: "Slow Performance", description: "Page loads are slow, search is clunky, and the overall experience feels sluggish." },
  ];

  return (
    <>
      <SEO
        title="SPICE vs SDC 2025: Save $420/Year | Modern vs Legacy Swingers App"
        description="SPICE vs SDC comparison: Save $420/year switching to SPICE. Modern mobile app vs outdated website. Feature comparison, pricing, and why couples are switching from SDC to SPICE."
        keywords="SPICE vs SDC, SDC alternative, cheaper than SDC, best swingers app, SDC review, modern swingers app, lifestyle dating app"
        canonical="https://thespiceapp.com/vs/sdc"
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-sm font-medium text-green-500 mb-6">
                <DollarSign className="w-4 h-4" />
                Save ${yearlySavings}/Year
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                SPICE vs SDC: Save $420/Year
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                SDC is the legacy choice. SPICE is the modern alternative. See why thousands of couples are making the switch and saving hundreds annually.
              </p>
            </div>

            {/* Savings Calculator */}
            <div className="mb-16">
              <div className="bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-green-500/20 border border-green-500/30 rounded-2xl p-8 md:p-10">
                <div className="text-center mb-8">
                  <DollarSign className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h2 className="text-3xl md:text-4xl font-bold mb-2">Switch & Save ${yearlySavings}/Year</h2>
                  <p className="text-muted-foreground">That's ${Math.round(yearlySavings / 12)}/month back in your pocket</p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  <div className="bg-background/80 border-2 border-primary rounded-xl p-6 text-center">
                    <p className="text-sm text-primary font-medium mb-2">SPICE Yearly</p>
                    <p className="text-4xl font-bold text-green-500">${pricingComparison.spice.yearly}</p>
                    <p className="text-sm text-muted-foreground mt-2">${(pricingComparison.spice.yearly / 12).toFixed(2)}/month</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="text-center">
                      <TrendingDown className="w-8 h-8 text-green-500 mx-auto mb-2" />
                      <p className="text-2xl font-bold text-green-500">-70%</p>
                    </div>
                  </div>
                  <div className="bg-background/80 border border-red-500/30 rounded-xl p-6 text-center">
                    <p className="text-sm text-muted-foreground mb-2">SDC Yearly</p>
                    <p className="text-4xl font-bold text-red-400 line-through">${pricingComparison.sdc.yearly}</p>
                    <p className="text-sm text-muted-foreground mt-2">${(pricingComparison.sdc.yearly / 12).toFixed(2)}/month</p>
                  </div>
                </div>

                <div className="mt-8 text-center">
                  <Link to="/download" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all text-lg">
                    <Download className="w-5 h-5" />
                    Start Saving with SPICE
                  </Link>
                </div>
              </div>
            </div>

            {/* Score Comparison */}
            <div className="mb-16">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card/60 backdrop-blur-sm border-2 border-primary rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <Crown className="w-8 h-8 text-yellow-500" />
                      <div>
                        <h3 className="text-2xl font-bold text-primary">SPICE</h3>
                        <p className="text-sm text-muted-foreground">Modern & Affordable</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold">88<span className="text-lg text-muted-foreground">/100</span></div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>User Experience</span>
                        <span className="text-green-500">95/100</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full" style={{ width: '95%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Value for Money</span>
                        <span className="text-green-500">98/100</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full" style={{ width: '98%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Mobile App</span>
                        <span className="text-green-500">92/100</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full" style={{ width: '92%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Features</span>
                        <span className="text-green-500">85/100</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full" style={{ width: '85%' }} />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Modern, fast mobile app</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>70% cheaper than SDC</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>BDSM compatibility quiz</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Intuitive swipe interface</span>
                    </div>
                  </div>
                </div>

                <div className="bg-card/60 backdrop-blur-sm border border-border rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <Globe className="w-8 h-8 text-blue-500" />
                      <div>
                        <h3 className="text-2xl font-bold">SDC</h3>
                        <p className="text-sm text-muted-foreground">Legacy Platform</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold">72<span className="text-lg text-muted-foreground">/100</span></div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>User Experience</span>
                        <span className="text-yellow-500">55/100</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-yellow-500 rounded-full" style={{ width: '55%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Value for Money</span>
                        <span className="text-red-400">40/100</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-red-400 rounded-full" style={{ width: '40%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Mobile App</span>
                        <span className="text-red-400">45/100</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-red-400 rounded-full" style={{ width: '45%' }} />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Features</span>
                        <span className="text-green-500">90/100</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full" style={{ width: '90%' }} />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <XCircle className="w-4 h-4 text-red-400" />
                      <span className="text-muted-foreground">Outdated 2000s interface</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <XCircle className="w-4 h-4 text-red-400" />
                      <span className="text-muted-foreground">$50/month expensive</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-muted-foreground">Large legacy userbase</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-muted-foreground">Forums & groups</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SDC Problems */}
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
                <Clock className="w-8 h-8 text-yellow-500" />
                Why Couples Leave SDC
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {sdcProblems.map((item, index) => (
                  <div key={index} className="bg-card/60 backdrop-blur-sm border border-border rounded-xl p-6">
                    <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-red-400" />
                      {item.problem}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                ))}
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
                              {feature.sdc ? (
                                <CheckCircle className="w-5 h-5 text-green-500" />
                              ) : (
                                <XCircle className="w-5 h-5 text-red-400" />
                              )}
                              <span className="text-sm">SDC</span>
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
                SDC Switchers Reviews
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
                          Verified Switcher
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

            {/* Final CTA */}
            <section>
              <div className="bg-gradient-to-r from-green-500/20 via-primary/20 to-green-500/20 rounded-2xl p-8 md:p-12 border border-green-500/30 text-center">
                <DollarSign className="w-12 h-12 text-green-500 mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Save $420/Year. Get a Better App.</h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Modern interface, BDSM quiz, 70% cheaper. Join thousands who switched from SDC.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link to="/download" className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all gap-2 text-lg">
                    <Download className="w-5 h-5" />
                    Switch to SPICE Free
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

export default ComparisonSDC;
