import { CheckCircle, XCircle, Crown, Download, Shield, Users, Star, DollarSign, Smartphone, Calendar, Heart, Zap, MessageSquare, Lock, Eye, Sparkles, ChevronRight, Award, TrendingUp } from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";

const AppComparisons = () => {
  const comparisons = [
    { 
      name: "SPICE vs Feeld", 
      path: "/vs/feeld", 
      competitor: "Feeld",
      logo: "🌿",
      winner: "SPICE", 
      winReason: "Better verification, BDSM quiz, 25% cheaper",
      spiceScore: 92,
      competitorScore: 78,
      keyDifferences: ["Unique BDSM quiz", "ID verification", "Events calendar", "25% cheaper"],
      bestFor: "BDSM & kink-curious couples"
    },
    { 
      name: "SPICE vs 3Fun", 
      path: "/vs/3fun", 
      competitor: "3Fun",
      logo: "🔥",
      winner: "SPICE", 
      winReason: "ID verification, safer community, events calendar",
      spiceScore: 90,
      competitorScore: 65,
      keyDifferences: ["95% fewer fakes", "24/7 moderation", "Photo+ID verification", "Local events"],
      bestFor: "Safety-conscious swingers"
    },
    { 
      name: "SPICE vs SDC", 
      path: "/vs/sdc", 
      competitor: "SDC",
      logo: "💎",
      winner: "SPICE", 
      winReason: "70% cheaper, modern mobile app, better UX",
      spiceScore: 88,
      competitorScore: 72,
      keyDifferences: ["Save $420/year", "Modern mobile app", "Better UX", "BDSM quiz"],
      bestFor: "Value-conscious couples"
    },
    { 
      name: "SPICE vs Kasidie", 
      path: "/vs/kasidie", 
      competitor: "Kasidie",
      logo: "👑",
      winner: "SPICE", 
      winReason: "Modern UI, BDSM features, better mobile experience",
      spiceScore: 87,
      competitorScore: 74,
      keyDifferences: ["Modern interface", "BDSM compatibility", "Better mobile", "Cheaper"],
      bestFor: "Tech-savvy swingers"
    },
    { 
      name: "SPICE vs SLS", 
      path: "/vs/sls", 
      competitor: "SLS (SwingLifeStyle)",
      logo: "🎭",
      winner: "SPICE", 
      winReason: "Modern design, mobile-first, BDSM focus",
      spiceScore: 86,
      competitorScore: 68,
      keyDifferences: ["Mobile-first design", "No outdated UI", "BDSM quiz", "Better safety"],
      bestFor: "Mobile users tired of legacy sites"
    }
  ];

  const overallFeatures = [
    { feature: "BDSM Compatibility Quiz", spice: true, feeld: false, threeFun: false, sdc: false, kasidie: false, sls: false },
    { feature: "ID Verification", spice: true, feeld: false, threeFun: false, sdc: true, kasidie: true, sls: false },
    { feature: "Photo Verification", spice: true, feeld: true, threeFun: true, sdc: true, kasidie: true, sls: true },
    { feature: "Local Events Calendar", spice: true, feeld: false, threeFun: false, sdc: true, kasidie: true, sls: true },
    { feature: "Couples Profiles", spice: true, feeld: true, threeFun: true, sdc: true, kasidie: true, sls: true },
    { feature: "Modern Mobile App", spice: true, feeld: true, threeFun: true, sdc: false, kasidie: false, sls: false },
    { feature: "LGBTQ+ Inclusive", spice: true, feeld: true, threeFun: true, sdc: true, kasidie: true, sls: true },
    { feature: "Lifestyle Resources", spice: true, feeld: false, threeFun: false, sdc: true, kasidie: true, sls: true },
    { feature: "Club Directory", spice: true, feeld: false, threeFun: false, sdc: true, kasidie: true, sls: true },
    { feature: "24/7 Moderation", spice: true, feeld: true, threeFun: false, sdc: true, kasidie: true, sls: true },
  ];

  const pricing = [
    { app: "SPICE", monthly: "$14.99", yearly: "$99.99", savings: "Best Value" },
    { app: "Feeld", monthly: "$19.99", yearly: "$159.99", savings: "" },
    { app: "3Fun", monthly: "$9.99", yearly: "$59.99", savings: "" },
    { app: "SDC", monthly: "$49.99", yearly: "$299.99", savings: "" },
    { app: "Kasidie", monthly: "$19.99", yearly: "$149.99", savings: "" },
    { app: "SLS", monthly: "$14.95", yearly: "$149.95", savings: "" },
  ];

  return (
    <>
      <SEO
        title="Best Lifestyle Dating App Comparison 2025: SPICE vs Feeld, 3Fun, SDC | SPICE"
        description="Complete comparison of lifestyle dating apps. Compare SPICE, Feeld, 3Fun, SDC, Kasidie & SLS. Features, pricing, safety, user reviews. Find the best app for swingers, BDSM, and ENM."
        keywords="SPICE vs Feeld, SPICE vs 3Fun, SPICE vs SDC, best lifestyle app, swingers app comparison, BDSM app comparison, ENM dating app, polyamory app, best swinger app 2025"
        canonical="https://thespiceapp.com/tools/app-comparisons"
      />

      <div className="relative min-h-screen">
        <ParticlesBackground />
        <Header />
        <Breadcrumbs />
        
        <main className="relative z-10 pt-32 pb-12">
          <div className="container mx-auto px-4">
            
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary mb-6">
                <Award className="w-4 h-4" />
                Updated January 2025
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                Best Lifestyle Dating Apps Compared
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Comprehensive comparison of SPICE, Feeld, 3Fun, SDC, Kasidie & SLS. We analyzed features, pricing, safety, and user reviews to help you choose the best app for your lifestyle.
              </p>
              
              {/* Quick Stats */}
              <div className="flex flex-wrap justify-center gap-6 md:gap-12">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">6</div>
                  <div className="text-sm text-muted-foreground">Apps Compared</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Features Analyzed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">10K+</div>
                  <div className="text-sm text-muted-foreground">Reviews Read</div>
                </div>
              </div>
            </div>

            {/* Winner Banner */}
            <div className="mb-16">
              <div className="bg-gradient-to-r from-yellow-500/20 via-primary/20 to-yellow-500/20 rounded-2xl p-8 md:p-12 border border-yellow-500/30">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="p-4 bg-yellow-500/20 rounded-2xl">
                      <Crown className="w-12 h-12 text-yellow-500" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-yellow-500 mb-1">🏆 OVERALL WINNER 2025</p>
                      <h2 className="text-3xl md:text-4xl font-bold">SPICE</h2>
                      <p className="text-muted-foreground">Best for swingers, BDSM, ENM & polyamory</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center md:items-end gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-5xl font-bold text-primary">92</span>
                      <span className="text-xl text-muted-foreground">/100</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {[1,2,3,4,5].map((i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <Link to="/download" className="mt-2 inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all">
                      <Download className="w-5 h-5" />
                      Try SPICE Free
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Individual Comparisons */}
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Head-to-Head Comparisons</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {comparisons.map((comp, index) => (
                  <Link
                    key={index}
                    to={comp.path}
                    className="group bg-card/60 backdrop-blur-sm border border-border rounded-2xl p-6 hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/10"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{comp.logo}</span>
                        <div>
                          <h3 className="text-lg font-bold group-hover:text-primary transition-colors">{comp.name}</h3>
                          <p className="text-xs text-muted-foreground">Detailed comparison</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-yellow-500">
                        <Crown className="w-5 h-5" />
                        <span className="text-sm font-bold">{comp.winner}</span>
                      </div>
                    </div>
                    
                    {/* Score Bars */}
                    <div className="space-y-3 mb-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-primary font-medium">SPICE</span>
                          <span className="font-bold">{comp.spiceScore}/100</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full" style={{ width: `${comp.spiceScore}%` }} />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-muted-foreground">{comp.competitor}</span>
                          <span className="font-bold">{comp.competitorScore}/100</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <div className="h-full bg-muted-foreground/50 rounded-full" style={{ width: `${comp.competitorScore}%` }} />
                        </div>
                      </div>
                    </div>
                    
                    {/* Key Differences */}
                    <div className="space-y-1 mb-4">
                      {comp.keyDifferences.slice(0, 3).map((diff, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span>{diff}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-xs text-muted-foreground">Best for: {comp.bestFor}</span>
                      <ChevronRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* Full Feature Comparison Table */}
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Complete Feature Comparison</h2>
              <div className="bg-card/60 backdrop-blur-sm border border-border rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border bg-muted/50">
                        <th className="text-left p-4 font-bold">Feature</th>
                        <th className="p-4 text-center">
                          <div className="flex flex-col items-center">
                            <span className="font-bold text-primary">SPICE</span>
                            <span className="text-xs text-muted-foreground">Winner</span>
                          </div>
                        </th>
                        <th className="p-4 text-center font-medium">Feeld</th>
                        <th className="p-4 text-center font-medium">3Fun</th>
                        <th className="p-4 text-center font-medium">SDC</th>
                        <th className="p-4 text-center font-medium">Kasidie</th>
                        <th className="p-4 text-center font-medium">SLS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {overallFeatures.map((row, index) => (
                        <tr key={index} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                          <td className="p-4 font-medium">{row.feature}</td>
                          <td className="p-4 text-center bg-primary/5">
                            {row.spice ? <CheckCircle className="w-5 h-5 text-green-500 mx-auto" /> : <XCircle className="w-5 h-5 text-red-400 mx-auto" />}
                          </td>
                          <td className="p-4 text-center">
                            {row.feeld ? <CheckCircle className="w-5 h-5 text-green-500 mx-auto" /> : <XCircle className="w-5 h-5 text-red-400 mx-auto" />}
                          </td>
                          <td className="p-4 text-center">
                            {row.threeFun ? <CheckCircle className="w-5 h-5 text-green-500 mx-auto" /> : <XCircle className="w-5 h-5 text-red-400 mx-auto" />}
                          </td>
                          <td className="p-4 text-center">
                            {row.sdc ? <CheckCircle className="w-5 h-5 text-green-500 mx-auto" /> : <XCircle className="w-5 h-5 text-red-400 mx-auto" />}
                          </td>
                          <td className="p-4 text-center">
                            {row.kasidie ? <CheckCircle className="w-5 h-5 text-green-500 mx-auto" /> : <XCircle className="w-5 h-5 text-red-400 mx-auto" />}
                          </td>
                          <td className="p-4 text-center">
                            {row.sls ? <CheckCircle className="w-5 h-5 text-green-500 mx-auto" /> : <XCircle className="w-5 h-5 text-red-400 mx-auto" />}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Pricing Comparison */}
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Pricing Comparison</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pricing.map((app, index) => (
                  <div 
                    key={index} 
                    className={`bg-card/60 backdrop-blur-sm border rounded-2xl p-6 ${
                      app.app === 'SPICE' ? 'border-primary shadow-lg shadow-primary/20' : 'border-border'
                    }`}
                  >
                    {app.app === 'SPICE' && (
                      <div className="flex items-center gap-2 text-primary text-sm font-medium mb-3">
                        <Award className="w-4 h-4" />
                        Best Value
                      </div>
                    )}
                    <h3 className={`text-2xl font-bold mb-4 ${app.app === 'SPICE' ? 'text-primary' : ''}`}>{app.app}</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Monthly</span>
                        <span className="text-xl font-bold">{app.monthly}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Yearly</span>
                        <span className="text-xl font-bold">{app.yearly}</span>
                      </div>
                    </div>
                    {app.app === 'SPICE' && (
                      <Link to="/download" className="mt-6 w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl transition-all">
                        Get Started Free
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Why SPICE Wins */}
            <section className="mb-16">
              <div className="bg-gradient-to-br from-primary/20 via-purple-500/10 to-pink-500/20 border border-primary/30 rounded-2xl p-8 md:p-12">
                <div className="text-center mb-10">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Why SPICE Wins Every Comparison</h2>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    We built SPICE to address the shortcomings of every other lifestyle app. Here's what makes us different.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-background/50 border border-border/50 rounded-xl p-5 text-center">
                    <div className="p-3 bg-primary/10 rounded-full w-fit mx-auto mb-4">
                      <Sparkles className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Unique BDSM Quiz</h3>
                    <p className="text-sm text-muted-foreground">No other app has our compatibility quiz. Find partners who match your kinks.</p>
                  </div>
                  <div className="bg-background/50 border border-border/50 rounded-xl p-5 text-center">
                    <div className="p-3 bg-green-500/10 rounded-full w-fit mx-auto mb-4">
                      <Shield className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Best Verification</h3>
                    <p className="text-sm text-muted-foreground">Photo + ID verification means 95% fewer fake profiles than competitors.</p>
                  </div>
                  <div className="bg-background/50 border border-border/50 rounded-xl p-5 text-center">
                    <div className="p-3 bg-blue-500/10 rounded-full w-fit mx-auto mb-4">
                      <Calendar className="w-8 h-8 text-blue-500" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Local Events</h3>
                    <p className="text-sm text-muted-foreground">Find lifestyle events, parties, and meetups in your city. Most apps don't have this.</p>
                  </div>
                  <div className="bg-background/50 border border-border/50 rounded-xl p-5 text-center">
                    <div className="p-3 bg-yellow-500/10 rounded-full w-fit mx-auto mb-4">
                      <DollarSign className="w-8 h-8 text-yellow-500" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">Better Value</h3>
                    <p className="text-sm text-muted-foreground">More features for less money. Save up to $420/year vs SDC.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Final CTA */}
            <section>
              <div className="bg-gradient-to-r from-primary/30 via-purple-500/30 to-pink-500/30 rounded-2xl p-8 md:p-12 border border-primary/40 text-center">
                <TrendingUp className="w-12 h-12 text-primary mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Try the Best?</h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Join 50,000+ verified members who chose SPICE. Free to download, no credit card required.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link to="/download" className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all gap-2 text-lg">
                    <Download className="w-5 h-5" />
                    Download SPICE Free
                  </Link>
                  <Link to="/quiz" className="inline-flex items-center justify-center px-8 py-4 border border-primary text-primary hover:bg-primary/10 font-semibold rounded-full transition-all gap-2">
                    Take the BDSM Quiz
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

export default AppComparisons;
