import { CheckCircle, XCircle, Crown, Download, Shield, Users, Star, Heart, Sparkles, ChevronRight, MessageSquare, Calendar, Search, Lock, Camera, Globe, Zap, Award, Eye, UserCheck, Users2, FileText, Brain, Filter, Stethoscope, Scale, Bell, BookOpen, Plane, BarChart3, Gem } from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";
import { useState } from "react";

const FeatureComparison = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "SPICE Features - Complete Lifestyle Dating App Feature List",
    "description": "Comprehensive feature list for SPICE lifestyle dating app. BDSM quiz, polycule profiles, ID verification, events calendar, and 50+ unique features."
  };

  const featureCategories = [
    { id: 'all', name: 'All Features', icon: Star },
    { id: 'profiles', name: 'Profiles', icon: Users },
    { id: 'matching', name: 'Matching', icon: Heart },
    { id: 'communication', name: 'Communication', icon: MessageSquare },
    { id: 'safety', name: 'Safety & Privacy', icon: Shield },
    { id: 'kink', name: 'BDSM & Kink', icon: Sparkles },
    { id: 'community', name: 'Community', icon: Users2 },
    { id: 'unique', name: 'Unique Features', icon: Crown },
  ];

  const coreFeatures = [
    {
      category: 'profiles',
      name: "Individual Profiles",
      description: "Full bios, photos, interests, and preferences for solo users",
      spice: true, feeld: true, sdc: true, kasidie: true, sls: true,
      highlight: false
    },
    {
      category: 'profiles',
      name: "Couple Profiles",
      description: "Linked partner profiles with shared and individual sections",
      spice: true, feeld: true, sdc: true, kasidie: true, sls: true,
      highlight: false
    },
    {
      category: 'profiles',
      name: "Polycule/Constellation Profiles",
      description: "Unlimited linked profiles forming visible relationship maps (primaries, metamours, etc.)",
      spice: true, feeld: false, sdc: false, kasidie: false, sls: false,
      highlight: true
    },
    {
      category: 'profiles',
      name: "Public & Private Photo Albums",
      description: "Control who sees your photos with granular privacy settings",
      spice: true, feeld: true, sdc: true, kasidie: true, sls: true,
      highlight: false
    },
    {
      category: 'profiles',
      name: "Solo ↔ Partnered Profile Toggle",
      description: "Seamless switching between modes with separate desire visibility",
      spice: true, feeld: false, sdc: false, kasidie: false, sls: false,
      highlight: true
    },
    {
      category: 'matching',
      name: "Swipe-Based Matching",
      description: "Modern swipe interface with mutual likes unlocking chats",
      spice: true, feeld: true, sdc: false, kasidie: false, sls: false,
      highlight: false
    },
    {
      category: 'matching',
      name: "Advanced Search & Filters",
      description: "Location, age, orientation, desires, and more",
      spice: true, feeld: true, sdc: true, kasidie: true, sls: true,
      highlight: false
    },
    {
      category: 'matching',
      name: "Ultra-Granular Physical Filters",
      description: "Hair color/length, eye color, height (inch-by-inch), body type, ethnicity, tattoos/piercings, grooming, endowment preferences with savable presets",
      spice: true, feeld: false, sdc: true, kasidie: true, sls: true,
      highlight: true
    },
    {
      category: 'matching',
      name: "Location-Based Matching",
      description: "Find people near you with adjustable radius",
      spice: true, feeld: true, sdc: true, kasidie: true, sls: true,
      highlight: false
    },
    {
      category: 'matching',
      name: "Travel Mode",
      description: "Match in cities you're traveling to before you arrive",
      spice: true, feeld: true, sdc: true, kasidie: true, sls: true,
      highlight: false
    },
    {
      category: 'matching',
      name: "AI-Powered Learning Algorithm",
      description: "Learns from swipes, messages, blocks, certifications; provides explained compatibility scores",
      spice: true, feeld: false, sdc: false, kasidie: false, sls: false,
      highlight: true
    },
    {
      category: 'matching',
      name: "Group/Multi-Person Matching",
      description: "Pre-match group chats and polycule/group swiping",
      spice: true, feeld: false, sdc: false, kasidie: false, sls: false,
      highlight: true
    },
    {
      category: 'communication',
      name: "Unlimited Messaging",
      description: "Send unlimited messages to matches",
      spice: true, feeld: false, sdc: true, kasidie: true, sls: true,
      highlight: false
    },
    {
      category: 'communication',
      name: "Photo & Video Sharing in Chat",
      description: "Share photos and videos in chat with matches",
      spice: true, feeld: true, sdc: true, kasidie: true, sls: true,
      highlight: false
    },
    {
      category: 'communication',
      name: "Voice Notes",
      description: "Send voice messages to matches",
      spice: true, feeld: true, sdc: false, kasidie: false, sls: false,
      highlight: false
    },
    {
      category: 'communication',
      name: "Read Receipts",
      description: "Know when your messages are read",
      spice: true, feeld: true, sdc: true, kasidie: true, sls: true,
      highlight: false
    },
    {
      category: 'communication',
      name: "Group Chat",
      description: "Chat with multiple people at once",
      spice: true, feeld: false, sdc: true, kasidie: true, sls: true,
      highlight: false
    },
    {
      category: 'safety',
      name: "Photo Verification",
      description: "Selfie verification to prove you're real",
      spice: true, feeld: true, sdc: true, kasidie: true, sls: true,
      highlight: false
    },
    {
      category: 'safety',
      name: "ID Verification (Optional)",
      description: "Government ID verification for enhanced trust",
      spice: true, feeld: false, sdc: true, kasidie: true, sls: false,
      highlight: true
    },
    {
      category: 'safety',
      name: "Dual Verification for Couples",
      description: "Both partners must complete separate photo verification. Prevents fake couple accounts.",
      spice: true, feeld: false, sdc: false, kasidie: false, sls: false,
      highlight: true
    },
    {
      category: 'safety',
      name: "24/7 Professional Moderation",
      description: "Round-the-clock human moderation with kink-aware moderators. Transparent stats published in-app.",
      spice: true, feeld: true, sdc: true, kasidie: true, sls: true,
      highlight: true
    },
    {
      category: 'safety',
      name: "Advanced Anti-Fake System",
      description: "Activity scoring, AI detection, and human review to eliminate fakes",
      spice: true, feeld: false, sdc: false, kasidie: false, sls: false,
      highlight: true
    },
    {
      category: 'safety',
      name: "Blurred Photos",
      description: "Keep photos blurred until you choose to reveal",
      spice: true, feeld: true, sdc: true, kasidie: true, sls: true,
      highlight: false
    },
    {
      category: 'safety',
      name: "Private Albums",
      description: "Share private photos only with approved users",
      spice: true, feeld: true, sdc: true, kasidie: true, sls: true,
      highlight: false
    },
    {
      category: 'safety',
      name: "Incognito Mode",
      description: "Browse without appearing in others' feeds",
      spice: true, feeld: true, sdc: true, kasidie: true, sls: true,
      highlight: false
    },
    {
      category: 'safety',
      name: "Discreet App Icon",
      description: "Hide the app with a generic icon on your phone",
      spice: true, feeld: true, sdc: false, kasidie: false, sls: false,
      highlight: false
    },
    {
      category: 'safety',
      name: "Linked Couple Read-Only Activity View",
      description: "Both partners can view all shared profile activity (likes, messages, matches) for full transparency",
      spice: true, feeld: false, sdc: false, kasidie: false, sls: false,
      highlight: true
    },
    {
      category: 'safety',
      name: "Partner Approval Workflow",
      description: "Optional: require partner approval before sending messages or likes",
      spice: true, feeld: false, sdc: false, kasidie: false, sls: false,
      highlight: true
    },
    {
      category: 'kink',
      name: "Kink/Desire Tags",
      description: "Tag your interests and desires for better matching",
      spice: true, feeld: true, sdc: true, kasidie: true, sls: true,
      highlight: false
    },
    {
      category: 'kink',
      name: "BDSM Roles",
      description: "Specify your role (Dom, sub, switch, etc.)",
      spice: true, feeld: true, sdc: true, kasidie: true, sls: true,
      highlight: false
    },
    {
      category: 'kink',
      name: "Comprehensive BDSM/Kink Quiz",
      description: "50+ questions covering roles, experience, interests, limits, safe words, aftercare, dynamics. Generates detailed compatibility scores.",
      spice: true, feeld: false, sdc: false, kasidie: false, sls: false,
      highlight: true
    },
    {
      category: 'kink',
      name: "Hard/Soft Limits",
      description: "Clearly communicate your boundaries",
      spice: true, feeld: false, sdc: true, kasidie: true, sls: true,
      highlight: false
    },
    {
      category: 'kink',
      name: "Boundary & Consent Tools",
      description: "Shared checklists, negotiation templates, AI-assisted consent reminders in chats",
      spice: true, feeld: false, sdc: false, kasidie: false, sls: false,
      highlight: true
    },
    {
      category: 'kink',
      name: "STI/Health Status Sharing",
      description: "Secure, voluntary upload of anonymized test results with visible badges",
      spice: true, feeld: false, sdc: false, kasidie: false, sls: false,
      highlight: true
    },
    {
      category: 'community',
      name: "ISO (In Search Of) Posts Feed",
      description: "Dedicated personal ads section with rich text, photos, tags, browsing, and direct messaging",
      spice: true, feeld: false, sdc: true, kasidie: true, sls: true,
      highlight: true
    },
    {
      category: 'community',
      name: "Certifications & Validations",
      description: "Moderated post-meetup reviews confirming real connections and boundary respect",
      spice: true, feeld: false, sdc: true, kasidie: true, sls: true,
      highlight: true
    },
    {
      category: 'community',
      name: "Integrated Event Calendar",
      description: "RSVP to munches, parties, workshops. User-submitted and verified events + private invites.",
      spice: true, feeld: false, sdc: true, kasidie: true, sls: true,
      highlight: true
    },
    {
      category: 'community',
      name: "Community Forums",
      description: "Moderated discussions and local group directories",
      spice: true, feeld: false, sdc: true, kasidie: true, sls: true,
      highlight: false
    },
    {
      category: 'community',
      name: "Education Hub & Resource Library",
      description: "Guides, articles, and educational content for lifestyle participants",
      spice: true, feeld: false, sdc: true, kasidie: true, sls: true,
      highlight: false
    },
    {
      category: 'community',
      name: "Travel Planning & Hot Dates",
      description: "Shared trip notifications and hot date postings calendar",
      spice: true, feeld: false, sdc: true, kasidie: true, sls: true,
      highlight: false
    },
    {
      category: 'unique',
      name: "Fair Visibility Algorithm",
      description: "Rewards profile completeness and activity, not payment. Everyone gets seen.",
      spice: true, feeld: false, sdc: false, kasidie: false, sls: false,
      highlight: true
    },
    {
      category: 'unique',
      name: "Free Tier Available",
      description: "Core features free with optional VIP upgrades",
      spice: true, feeld: true, sdc: false, kasidie: false, sls: false,
      highlight: false
    },
  ];

  const vipFeatures = [
    { name: "Unlimited ISO Posts & Boosts", description: "Post unlimited personal ads and boost visibility" },
    { name: "Advanced AI Pattern Insights", description: "Deep analytics on your matching patterns and suggestions" },
    { name: "See Who Liked You", description: "View everyone who's interested before matching" },
    { name: "Priority Support", description: "Fast-track support and moderation queue" },
    { name: "Extended Search Filters", description: "Access all granular search options" },
    { name: "Profile Boost", description: "Get more visibility in feeds" },
  ];

  const filteredFeatures = activeCategory === 'all' 
    ? coreFeatures 
    : coreFeatures.filter(f => f.category === activeCategory);

  const uniqueFeatures = coreFeatures.filter(f => f.highlight);

  return (
    <>
      <SEO
        title="SPICE Features - Complete Lifestyle Dating App Feature List | 50+ Features"
        description="Comprehensive SPICE feature list: BDSM quiz, polycule profiles, dual verification, AI matching, events calendar, and 50+ unique features for swingers, BDSM, and ENM."
        keywords="SPICE features, lifestyle app features, BDSM quiz, polycule profiles, swinger app features, ENM dating features, kink matching"
        canonical="https://thespiceapp.com/tools/feature-comparison"
        structuredData={structuredData}
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
                <Crown className="w-4 h-4" />
                50+ Features
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                SPICE Feature Comparison
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                The most comprehensive lifestyle dating app. Compare SPICE features with Feeld, SDC, Kasidie, and SLS.
              </p>
            </div>

            {/* Stats Bar */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{coreFeatures.length}+</div>
                <div className="text-sm text-muted-foreground">Total Features</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">{uniqueFeatures.length}</div>
                <div className="text-sm text-muted-foreground">Unique to SPICE</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">5</div>
                <div className="text-sm text-muted-foreground">Apps Compared</div>
              </div>
            </div>

            {/* Standout Features Banner */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-pink-500/20 border border-primary/30 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Crown className="w-8 h-8 text-yellow-500" />
                  <h2 className="text-2xl font-bold">Standout Features Only on SPICE</h2>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {uniqueFeatures.slice(0, 9).map((feature, index) => (
                    <div key={index} className="bg-background/50 border border-border/50 rounded-xl p-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-sm mb-1">{feature.name}</h4>
                          <p className="text-xs text-muted-foreground line-clamp-2">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {featureCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 rounded-full font-medium transition-all flex items-center gap-2 ${
                    activeCategory === cat.id
                      ? 'bg-primary text-white'
                      : 'bg-card/50 border border-border hover:border-primary/50 text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <cat.icon className="w-4 h-4" />
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Feature Comparison Table */}
            <section className="mb-12">
              <div className="bg-card/60 backdrop-blur-sm border border-border rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border bg-muted/50">
                        <th className="text-left p-4 font-bold min-w-[250px]">Feature</th>
                        <th className="p-4 text-center min-w-[80px]">
                          <div className="flex flex-col items-center">
                            <span className="font-bold text-primary">SPICE</span>
                            <Crown className="w-4 h-4 text-yellow-500" />
                          </div>
                        </th>
                        <th className="p-4 text-center min-w-[80px] font-medium text-muted-foreground">Feeld</th>
                        <th className="p-4 text-center min-w-[80px] font-medium text-muted-foreground">SDC</th>
                        <th className="p-4 text-center min-w-[80px] font-medium text-muted-foreground">Kasidie</th>
                        <th className="p-4 text-center min-w-[80px] font-medium text-muted-foreground">SLS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredFeatures.map((feature, index) => (
                        <tr key={index} className={`border-b border-border/50 hover:bg-muted/30 transition-colors ${feature.highlight ? 'bg-primary/5' : ''}`}>
                          <td className="p-4">
                            <div className="flex items-start gap-2">
                              {feature.highlight && (
                                <Star className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                              )}
                              <div>
                                <span className="font-medium">{feature.name}</span>
                                <p className="text-xs text-muted-foreground mt-0.5">{feature.description}</p>
                              </div>
                            </div>
                          </td>
                          <td className="p-4 text-center bg-primary/5">
                            {feature.spice ? (
                              <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                            ) : (
                              <XCircle className="w-5 h-5 text-red-400 mx-auto" />
                            )}
                          </td>
                          <td className="p-4 text-center">
                            {feature.feeld ? (
                              <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                            ) : (
                              <XCircle className="w-5 h-5 text-red-400 mx-auto" />
                            )}
                          </td>
                          <td className="p-4 text-center">
                            {feature.sdc ? (
                              <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                            ) : (
                              <XCircle className="w-5 h-5 text-red-400 mx-auto" />
                            )}
                          </td>
                          <td className="p-4 text-center">
                            {feature.kasidie ? (
                              <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                            ) : (
                              <XCircle className="w-5 h-5 text-red-400 mx-auto" />
                            )}
                          </td>
                          <td className="p-4 text-center">
                            {feature.sls ? (
                              <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                            ) : (
                              <XCircle className="w-5 h-5 text-red-400 mx-auto" />
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* BDSM Quiz Deep Dive */}
            <section className="mb-12">
              <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 border border-pink-500/30 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Sparkles className="w-8 h-8 text-pink-400" />
                  <div>
                    <h2 className="text-2xl font-bold">Comprehensive BDSM/Kink Quiz</h2>
                    <p className="text-muted-foreground">50+ questions for detailed compatibility matching</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                  <div className="bg-background/50 rounded-xl p-4">
                    <h4 className="font-bold mb-2">Roles Covered</h4>
                    <p className="text-sm text-muted-foreground">Dom, sub, switch, Master/Mistress, slave, primal, brat, Daddy/Mommy, little, and more</p>
                  </div>
                  <div className="bg-background/50 rounded-xl p-4">
                    <h4 className="font-bold mb-2">Experience Levels</h4>
                    <p className="text-sm text-muted-foreground">From curious novice to experienced 24/7 practitioners</p>
                  </div>
                  <div className="bg-background/50 rounded-xl p-4">
                    <h4 className="font-bold mb-2">Specific Interests</h4>
                    <p className="text-sm text-muted-foreground">Impact play, rope bondage, sensory deprivation, humiliation, service, and 40+ more</p>
                  </div>
                  <div className="bg-background/50 rounded-xl p-4">
                    <h4 className="font-bold mb-2">Limits & Boundaries</h4>
                    <p className="text-sm text-muted-foreground">Hard limits, soft limits, safe words, and negotiation preferences</p>
                  </div>
                  <div className="bg-background/50 rounded-xl p-4">
                    <h4 className="font-bold mb-2">Aftercare Needs</h4>
                    <p className="text-sm text-muted-foreground">Physical, emotional, and communication aftercare preferences</p>
                  </div>
                  <div className="bg-background/50 rounded-xl p-4">
                    <h4 className="font-bold mb-2">Dynamic Preferences</h4>
                    <p className="text-sm text-muted-foreground">24/7 TPE, bedroom-only, lifestyle, and hybrid dynamics</p>
                  </div>
                </div>

                <div className="bg-background/70 rounded-xl p-4 border border-primary/30">
                  <p className="text-sm">
                    <strong className="text-primary">Example Match Result:</strong> "92% compatibility: Shared rope bondage interest, complementary Dom/sub roles, aligned aftercare needs, matching experience levels."
                  </p>
                </div>

                <div className="mt-6 text-center">
                  <Link to="/quiz" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all">
                    <Heart className="w-5 h-5" />
                    Take the Quiz
                  </Link>
                </div>
              </div>
            </section>

            {/* Verification Options Section */}
            <section className="mb-12">
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-8 h-8 text-green-500" />
                  <div>
                    <h2 className="text-2xl font-bold">Verification Options</h2>
                    <p className="text-muted-foreground">Choose the method that works best for you. All provide the same level of trust.</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {/* Option 1: Social Media */}
                  <div className="bg-background/60 border border-border rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-blue-500/20 rounded-xl">
                        <Globe className="w-6 h-6 text-blue-500" />
                      </div>
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">~24-48 hrs</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">Social Media Verification</h3>
                    <p className="text-sm text-muted-foreground mb-4">Verify using an established lifestyle social media profile</p>
                    <div className="space-y-2">
                      <p className="text-xs font-medium text-foreground">Requirements:</p>
                      <ul className="space-y-1.5">
                        <li className="flex items-start gap-2 text-xs text-muted-foreground">
                          <CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Verified profile (e.g., FetLife) at least 90 days old</span>
                        </li>
                        <li className="flex items-start gap-2 text-xs text-muted-foreground">
                          <CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Submit profile URL for review</span>
                        </li>
                        <li className="flex items-start gap-2 text-xs text-muted-foreground">
                          <CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Screenshot showing you logged in</span>
                        </li>
                        <li className="flex items-start gap-2 text-xs text-muted-foreground">
                          <CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Profile in good standing, no violations</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Option 2: Selfie + Unique ID */}
                  <div className="bg-background/60 border-2 border-primary rounded-xl p-6 relative">
                    <div className="absolute -top-3 left-4 px-3 py-1 bg-primary text-white text-xs font-bold rounded-full">
                      Most Popular
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-primary/20 rounded-xl">
                        <Camera className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">~12-24 hrs</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">Selfie + Unique ID</h3>
                    <p className="text-sm text-muted-foreground mb-4">Quick verification with a selfie and unique code</p>
                    <div className="space-y-2">
                      <p className="text-xs font-medium text-foreground">Requirements:</p>
                      <ul className="space-y-1.5">
                        <li className="flex items-start gap-2 text-xs text-muted-foreground">
                          <CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Selfie holding unique verification ID shown on screen</span>
                        </li>
                        <li className="flex items-start gap-2 text-xs text-muted-foreground">
                          <CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Face clearly visible, matching profile photos</span>
                        </li>
                        <li className="flex items-start gap-2 text-xs text-muted-foreground">
                          <CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Unique ID code must be legible</span>
                        </li>
                        <li className="flex items-start gap-2 text-xs text-muted-foreground">
                          <CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Photo must be taken in real-time</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Option 3: Government ID */}
                  <div className="bg-background/60 border border-border rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-amber-500/20 rounded-xl">
                        <FileText className="w-6 h-6 text-amber-500" />
                      </div>
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">~24-72 hrs</span>
                    </div>
                    <h3 className="text-lg font-bold mb-2">Government ID</h3>
                    <p className="text-sm text-muted-foreground mb-4">Full identity verification with official ID</p>
                    <div className="space-y-2">
                      <p className="text-xs font-medium text-foreground">Requirements:</p>
                      <ul className="space-y-1.5">
                        <li className="flex items-start gap-2 text-xs text-muted-foreground">
                          <CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Clear photo of government ID (front & back)</span>
                        </li>
                        <li className="flex items-start gap-2 text-xs text-muted-foreground">
                          <CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Selfie holding ID next to your face</span>
                        </li>
                        <li className="flex items-start gap-2 text-xs text-muted-foreground">
                          <CheckCircle className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>ID must be valid and not expired</span>
                        </li>
                        <li className="flex items-start gap-2 text-xs text-muted-foreground">
                          <Lock className="w-3.5 h-3.5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>All info encrypted & securely stored</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Couples Account Verification */}
                <div className="bg-background/70 border border-pink-500/30 rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-pink-500/20 rounded-xl flex-shrink-0">
                      <Users2 className="w-6 h-6 text-pink-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                        Couples Account Verification
                        <span className="px-2 py-0.5 bg-pink-500/20 text-pink-500 text-xs font-medium rounded-full">Both Required</span>
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        For shared couples accounts, both parties must be individually verified to ensure consent and authenticity.
                      </p>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <ul className="space-y-1.5">
                            <li className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>Each individual must complete their own verification</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>Both can use same or different methods</span>
                            </li>
                          </ul>
                        </div>
                        <div className="space-y-2">
                          <ul className="space-y-1.5">
                            <li className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>Account limited until both verified</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm text-muted-foreground">
                              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>Ensures consent from all parties involved</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* VIP Features */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-yellow-500/20 via-amber-500/20 to-yellow-500/20 border border-yellow-500/30 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Gem className="w-8 h-8 text-yellow-500" />
                  <div>
                    <h2 className="text-2xl font-bold">VIP Enhancements</h2>
                    <p className="text-muted-foreground">Premium features for power users</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {vipFeatures.map((feature, index) => (
                    <div key={index} className="bg-background/50 rounded-xl p-4 flex items-start gap-3">
                      <Star className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-sm">{feature.name}</h4>
                        <p className="text-xs text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section>
              <div className="bg-gradient-to-r from-primary/30 via-purple-500/30 to-pink-500/30 rounded-2xl p-8 md:p-12 border border-primary/40 text-center">
                <Crown className="w-12 h-12 text-yellow-500 mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience All These Features</h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Join 50,000+ members using the most feature-rich lifestyle app. Free to start.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link to="/download" className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all gap-2 text-lg">
                    <Download className="w-5 h-5" />
                    Download SPICE Free
                  </Link>
                  <Link to="/tools/app-comparisons" className="inline-flex items-center justify-center px-8 py-4 border border-primary text-primary hover:bg-primary/10 font-semibold rounded-full transition-all gap-2">
                    See App Comparisons
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

export default FeatureComparison;
