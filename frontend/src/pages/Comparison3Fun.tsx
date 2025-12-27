import { CheckCircle, XCircle, Crown, Download, Shield, Users, Star, DollarSign, AlertTriangle, Calendar, Lock, Eye, Sparkles, ChevronRight, Award, MessageSquare, UserX, BadgeCheck, Flame } from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";

const Comparison3Fun = () => {
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ComparisonPage",
        "name": "SPICE vs 3Fun: Which Swingers App is Safer?",
        "description": "Safety and verification comparison between SPICE and 3Fun dating apps"
      }
    ]
  };

  const safetyFeatures = [
    { feature: "Photo Verification", spice: true, threeFun: true, spiceNote: "AI + human review", threeFunNote: "AI only" },
    { feature: "ID Verification", spice: true, threeFun: false, spiceNote: "Government ID required", threeFunNote: "Not available" },
    { feature: "Real-Time Selfie", spice: true, threeFun: true, spiceNote: "Required for verification", threeFunNote: "Optional" },
    { feature: "24/7 Moderation", spice: true, threeFun: false, spiceNote: "Active team", threeFunNote: "Slow response" },
    { feature: "Fake Profile Detection", spice: true, threeFun: false, spiceNote: "95% reduction", threeFunNote: "Common complaints" },
    { feature: "Report System", spice: true, threeFun: true, spiceNote: "Fast response", threeFunNote: "Mixed results" },
    { feature: "Block Feature", spice: true, threeFun: true, spiceNote: "Standard", threeFunNote: "Standard" },
    { feature: "Location Hiding", spice: true, threeFun: true, spiceNote: "Full control", threeFunNote: "Limited" },
  ];

  const allFeatures = [
    { category: "Core Features", features: [
      { name: "Couples Profiles", spice: true, threeFun: true },
      { name: "Singles Welcome", spice: true, threeFun: true },
      { name: "Threesome Matching", spice: true, threeFun: true },
      { name: "BDSM Compatibility Quiz", spice: true, threeFun: false },
      { name: "Interest Tags", spice: true, threeFun: true },
      { name: "Swipe Interface", spice: true, threeFun: true },
    ]},
    { category: "Communication", features: [
      { name: "Unlimited Messages", spice: true, threeFun: false },
      { name: "Group Chats", spice: true, threeFun: true },
      { name: "Photo Sharing", spice: true, threeFun: true },
      { name: "Read Receipts", spice: true, threeFun: true },
    ]},
    { category: "Discovery", features: [
      { name: "Local Events Calendar", spice: true, threeFun: false },
      { name: "Club Directory", spice: true, threeFun: false },
      { name: "Travel Mode", spice: true, threeFun: true },
      { name: "Distance Filters", spice: true, threeFun: true },
    ]},
  ];

  const safetyStats = [
    { stat: "95%", label: "Fewer fake profiles on SPICE", icon: UserX },
    { stat: "2hrs", label: "Average moderation response", icon: Shield },
    { stat: "100%", label: "Premium members ID verified", icon: BadgeCheck },
    { stat: "24/7", label: "Active safety monitoring", icon: Eye },
  ];

  const userReviews = [
    {
      name: "Jessica & Ryan",
      type: "Couple",
      rating: 5,
      review: "We left 3Fun after too many fake profiles and catfish. SPICE's verification is legit - everyone we've met has been real.",
      verified: true
    },
    {
      name: "Marcus",
      type: "Single Male",
      rating: 5,
      review: "As a single guy, safety matters to me too. The ID verification on SPICE gives women confidence to actually meet up.",
      verified: true
    },
    {
      name: "Kim & David",
      type: "Couple",
      rating: 4,
      review: "3Fun was okay but we wasted so much time on fakes. Switched to SPICE 3 months ago - much better quality matches.",
      verified: true
    }
  ];

  return (
    <>
      <SEO
        title="SPICE vs 3Fun 2025: Safety Comparison | Which Swingers App is Safer?"
        description="SPICE vs 3Fun safety comparison: ID verification, fake profile rates, moderation. SPICE offers 95% fewer fakes with mandatory verification. See detailed safety analysis."
        keywords="SPICE vs 3Fun, 3Fun alternative, safest swingers app, threesome app comparison, fake profiles 3Fun, verified swingers app"
        canonical="https://thespiceapp.com/vs/3fun"
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
                <Shield className="w-4 h-4" />
                Safety-Focused Comparison
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                SPICE vs 3Fun: Which is Safer?
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Both apps target threesome-seekers, but safety records differ dramatically. We analyzed verification, moderation, and user complaints.
              </p>
            </div>

            {/* Safety Alert Banner */}
            <div className="mb-12">
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                  <div className="p-4 bg-green-500/20 rounded-2xl">
                    <Shield className="w-12 h-12 text-green-500" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
                      <Crown className="w-6 h-6 text-yellow-500" />
                      SPICE Wins on Safety
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      SPICE requires ID verification for premium members, has 24/7 moderation, and reports 95% fewer fake profiles than 3Fun based on user complaints.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {safetyStats.map((item, index) => (
                        <div key={index} className="flex items-center gap-2 px-3 py-1.5 bg-background/50 rounded-full">
                          <item.icon className="w-4 h-4 text-green-500" />
                          <span className="text-sm"><strong>{item.stat}</strong> {item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Score Comparison */}
            <div className="mb-16">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card/60 backdrop-blur-sm border-2 border-green-500 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <Crown className="w-8 h-8 text-yellow-500" />
                      <h3 className="text-2xl font-bold text-primary">SPICE</h3>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold">90<span className="text-lg text-muted-foreground">/100</span></div>
                      <p className="text-sm text-green-500 font-medium">Safety Winner</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>ID verification required</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>24/7 active moderation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>95% fewer fake profiles</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>BDSM compatibility quiz</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Local events calendar</span>
                    </div>
                  </div>
                  <Link to="/download" className="mt-6 w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl transition-all">
                    <Download className="w-5 h-5" />
                    Try Safer SPICE
                  </Link>
                </div>

                <div className="bg-card/60 backdrop-blur-sm border border-border rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <Flame className="w-8 h-8 text-orange-500" />
                      <h3 className="text-2xl font-bold">3Fun</h3>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold">65<span className="text-lg text-muted-foreground">/100</span></div>
                      <p className="text-sm text-muted-foreground">Safety Concerns</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-red-400" />
                      <span className="text-muted-foreground">No ID verification</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-red-400" />
                      <span className="text-muted-foreground">Limited moderation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-yellow-500" />
                      <span className="text-muted-foreground">Frequent fake profile complaints</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-red-400" />
                      <span className="text-muted-foreground">No compatibility quiz</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <XCircle className="w-5 h-5 text-red-400" />
                      <span className="text-muted-foreground">No events calendar</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Safety Feature Table */}
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
                <Shield className="w-8 h-8 text-primary" />
                Safety Features Compared
              </h2>
              
              <div className="bg-card/60 backdrop-blur-sm border border-border rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border bg-muted/50">
                        <th className="text-left p-4 font-bold">Safety Feature</th>
                        <th className="p-4 text-center">
                          <span className="font-bold text-primary">SPICE</span>
                        </th>
                        <th className="p-4 text-center font-medium">3Fun</th>
                      </tr>
                    </thead>
                    <tbody>
                      {safetyFeatures.map((row, index) => (
                        <tr key={index} className="border-b border-border/50 hover:bg-muted/30 transition-colors">
                          <td className="p-4 font-medium">{row.feature}</td>
                          <td className="p-4 bg-green-500/5">
                            <div className="flex flex-col items-center">
                              {row.spice ? (
                                <CheckCircle className="w-6 h-6 text-green-500 mb-1" />
                              ) : (
                                <XCircle className="w-6 h-6 text-red-400 mb-1" />
                              )}
                              <span className="text-xs text-muted-foreground">{row.spiceNote}</span>
                            </div>
                          </td>
                          <td className="p-4">
                            <div className="flex flex-col items-center">
                              {row.threeFun ? (
                                <CheckCircle className="w-6 h-6 text-green-500 mb-1" />
                              ) : (
                                <XCircle className="w-6 h-6 text-red-400 mb-1" />
                              )}
                              <span className="text-xs text-muted-foreground">{row.threeFunNote}</span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* All Features Comparison */}
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">All Features Compared</h2>
              
              <div className="space-y-6">
                {allFeatures.map((category, catIndex) => (
                  <div key={catIndex} className="bg-card/60 backdrop-blur-sm border border-border rounded-2xl overflow-hidden">
                    <div className="bg-muted/50 p-4 border-b border-border">
                      <h3 className="font-bold">{category.category}</h3>
                    </div>
                    <div className="divide-y divide-border/50">
                      {category.features.map((feature, featIndex) => (
                        <div key={featIndex} className="p-4 flex items-center justify-between">
                          <span className="font-medium">{feature.name}</span>
                          <div className="flex items-center gap-8">
                            <div className="flex items-center gap-2 min-w-[80px]">
                              {feature.spice ? (
                                <CheckCircle className="w-5 h-5 text-green-500" />
                              ) : (
                                <XCircle className="w-5 h-5 text-red-400" />
                              )}
                              <span className="text-sm text-primary font-medium">SPICE</span>
                            </div>
                            <div className="flex items-center gap-2 min-w-[80px]">
                              {feature.threeFun ? (
                                <CheckCircle className="w-5 h-5 text-green-500" />
                              ) : (
                                <XCircle className="w-5 h-5 text-red-400" />
                              )}
                              <span className="text-sm">3Fun</span>
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
                Real User Experiences
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
                          <BadgeCheck className="w-3 h-3" />
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

            {/* Pricing */}
            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
                <DollarSign className="w-8 h-8 text-primary" />
                Pricing Comparison
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card/60 backdrop-blur-sm border-2 border-primary rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-primary mb-4">SPICE Pricing</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between p-3 bg-background/50 rounded-lg">
                      <span>Monthly</span>
                      <span className="font-bold">$14.99</span>
                    </div>
                    <div className="flex justify-between p-3 bg-background/50 rounded-lg">
                      <span>3 Months</span>
                      <span className="font-bold">$34.99</span>
                    </div>
                    <div className="flex justify-between p-3 bg-background/50 rounded-lg">
                      <span>Yearly</span>
                      <span className="font-bold">$99.99</span>
                    </div>
                  </div>
                </div>

                <div className="bg-card/60 backdrop-blur-sm border border-border rounded-2xl p-6">
                  <h3 className="text-xl font-bold mb-4">3Fun Pricing</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between p-3 bg-background/50 rounded-lg">
                      <span>Weekly</span>
                      <span className="font-bold">$9.99</span>
                    </div>
                    <div className="flex justify-between p-3 bg-background/50 rounded-lg">
                      <span>Monthly</span>
                      <span className="font-bold">$19.99</span>
                    </div>
                    <div className="flex justify-between p-3 bg-background/50 rounded-lg">
                      <span>3 Months</span>
                      <span className="font-bold">$39.99</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Final CTA */}
            <section>
              <div className="bg-gradient-to-r from-green-500/20 via-primary/20 to-green-500/20 rounded-2xl p-8 md:p-12 border border-green-500/30 text-center">
                <Shield className="w-12 h-12 text-green-500 mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Safety. Choose SPICE.</h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  ID verification, 24/7 moderation, 95% fewer fakes. Meet real people safely.
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

export default Comparison3Fun;
