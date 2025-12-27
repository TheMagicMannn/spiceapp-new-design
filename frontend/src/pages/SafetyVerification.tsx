import { Shield, CheckCircle, Clock, Camera, IdCard, Users, AlertTriangle, Ban, Eye, Fingerprint, Globe, UserCheck } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";

const SafetyVerification = () => {
  const verificationOptions = [
    {
      id: 1,
      title: "Social Media Verification",
      icon: Globe,
      description: "Verify using an established lifestyle social media profile",
      requirements: [
        "A verified social media profile (such as FetLife) that is at least 90 days old",
        "Submit your profile URL for review",
        "Provide a screenshot showing you logged in as that user",
        "Profile must be in good standing with no violations"
      ],
      time: "24-48 hours",
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30",
      iconColor: "text-blue-500"
    },
    {
      id: 2,
      title: "Selfie + Unique ID Verification",
      icon: Camera,
      description: "Quick verification with a selfie and unique code",
      requirements: [
        "Take a selfie photo while holding up the unique verification ID displayed on screen",
        "Your face must be clearly visible and match your profile photos",
        "The unique ID code must be legible in the photo",
        "Photo must be taken in real-time (no uploaded photos)"
      ],
      time: "12-24 hours",
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30",
      iconColor: "text-purple-500"
    },
    {
      id: 3,
      title: "Government ID Verification",
      icon: IdCard,
      description: "Full identity verification with official ID",
      requirements: [
        "Submit a clear photo of your government-issued ID (front and back)",
        "Take a selfie while holding your ID next to your face",
        "ID must be valid and not expired",
        "Name and photo on ID must match your SPICE profile",
        "All personal information is encrypted and securely stored"
      ],
      time: "24-72 hours",
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30",
      iconColor: "text-green-500"
    }
  ];

  return (
    <>
      <SEO
        title="Safety & Verification | How SPICE Keeps You Safe | SPICE"
        description="Learn about SPICE's comprehensive verification process. Multiple verification options, 24/7 moderation, and strict policies keep our lifestyle community safe and authentic."
        keywords="SPICE verification, lifestyle app safety, identity verification, safe dating app, verified profiles, SPICE security"
        canonical="https://thespiceapp.com/about/safety-verification"
      />

      <div className="relative min-h-screen">
        <ParticlesBackground />
        <Header />
        <Breadcrumbs />
        
        <main className="relative z-10 pt-32 pb-12">
          <div className="container mx-auto px-4 max-w-5xl">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
                <Shield className="w-4 h-4 text-green-500" />
                <span className="text-sm font-medium text-green-500">Your Safety is Our Priority</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-400 to-green-400 bg-clip-text text-transparent">
                Safety & Verification
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                SPICE is committed to creating the safest lifestyle community. Our comprehensive verification 
                system ensures every member is real, authentic, and here for the right reasons.
              </p>
            </div>

            {/* Verification Required Banner */}
            <div className="bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-500/20 border border-amber-500/30 rounded-2xl p-6 md:p-8 mb-12">
              <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
                <div className="p-4 bg-amber-500/20 rounded-full">
                  <Clock className="w-10 h-10 text-amber-500" />
                </div>
                <div className="text-center md:text-left flex-1">
                  <h2 className="text-2xl font-bold mb-2">Verification Required Within 3 Days</h2>
                  <p className="text-muted-foreground">
                    All new members must complete verification within 3 days of creating their account. 
                    This helps us maintain a trusted community of real, verified members.
                  </p>
                </div>
              </div>
            </div>

            {/* Verification Options */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center">Verification Options</h2>
              <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
                Choose the verification method that works best for you. All methods provide the same level 
                of trust and access to SPICE features.
              </p>
              
              <div className="space-y-6">
                {verificationOptions.map((option) => {
                  const Icon = option.icon;
                  return (
                    <div 
                      key={option.id}
                      className={`bg-gradient-to-r ${option.color} border ${option.borderColor} rounded-2xl p-6 md:p-8`}
                    >
                      <div className="flex flex-col lg:flex-row gap-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-4 mb-4">
                            <div className={`p-3 rounded-xl bg-background/50 ${option.iconColor}`}>
                              <Icon className="w-8 h-8" />
                            </div>
                            <div>
                              <div className="flex items-center gap-3 flex-wrap">
                                <h3 className="text-xl md:text-2xl font-bold">Option {option.id}: {option.title}</h3>
                                <span className="text-xs bg-background/50 px-3 py-1 rounded-full text-muted-foreground">
                                  ~{option.time} review
                                </span>
                              </div>
                              <p className="text-muted-foreground mt-1">{option.description}</p>
                            </div>
                          </div>
                          
                          <div className="bg-background/30 rounded-xl p-5">
                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                              <CheckCircle className={`w-5 h-5 ${option.iconColor}`} />
                              Requirements
                            </h4>
                            <ul className="space-y-2">
                              {option.requirements.map((req, index) => (
                                <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                                  <span className={`${option.iconColor} mt-1`}>•</span>
                                  {req}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Couples Verification */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 md:p-8 mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-pink-500/20 rounded-xl">
                  <Users className="w-8 h-8 text-pink-500" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">Couples Account Verification</h2>
                  <p className="text-muted-foreground">
                    For shared couples accounts, both parties must be individually verified.
                  </p>
                </div>
              </div>
              
              <div className="bg-pink-500/10 border border-pink-500/20 rounded-xl p-5">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <UserCheck className="w-5 h-5 text-pink-500" />
                  Both Partners Required
                </h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-pink-500 mt-1">•</span>
                    Each individual in a couples account must complete their own verification process
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-500 mt-1">•</span>
                    Both partners can use the same or different verification methods
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-500 mt-1">•</span>
                    Account remains limited until both parties are verified
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-pink-500 mt-1">•</span>
                    This ensures consent and authenticity from all parties involved
                  </li>
                </ul>
              </div>
            </div>

            {/* 24/7 Moderation */}
            <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 border border-primary/30 rounded-2xl p-6 md:p-8 mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/20 rounded-xl">
                  <Eye className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">24/7 Active Moderation</h2>
                  <p className="text-muted-foreground">
                    Our dedicated moderation team works around the clock to maintain community safety.
                  </p>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-background/30 rounded-xl p-4 text-center">
                  <Fingerprint className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-1">Fake Profile Detection</h4>
                  <p className="text-xs text-muted-foreground">AI-powered systems detect and remove fake accounts</p>
                </div>
                <div className="bg-background/30 rounded-xl p-4 text-center">
                  <AlertTriangle className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-1">Spam Prevention</h4>
                  <p className="text-xs text-muted-foreground">Automated filters block spam and scam attempts</p>
                </div>
                <div className="bg-background/30 rounded-xl p-4 text-center">
                  <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-1">Misuse Monitoring</h4>
                  <p className="text-xs text-muted-foreground">Human review of reported content and behavior</p>
                </div>
              </div>
            </div>

            {/* Zero Tolerance Policy */}
            <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6 md:p-8 mb-12">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-red-500/20 rounded-xl">
                  <Ban className="w-8 h-8 text-red-500" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2 text-red-400">Zero Tolerance Policy</h2>
                  <p className="text-muted-foreground">
                    SPICE has a strict zero tolerance policy for violations. We take community safety seriously.
                  </p>
                </div>
              </div>
              
              <div className="bg-background/30 rounded-xl p-5">
                <h3 className="font-semibold mb-4 text-red-400">The following will result in permanent device ban:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <Ban className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      Creating fake or impersonation profiles
                    </li>
                    <li className="flex items-start gap-3">
                      <Ban className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      Spam, solicitation, or commercial activity
                    </li>
                    <li className="flex items-start gap-3">
                      <Ban className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      Harassment or threatening behavior
                    </li>
                  </ul>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <Ban className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      Sharing others' private content without consent
                    </li>
                    <li className="flex items-start gap-3">
                      <Ban className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      Attempting to circumvent verification
                    </li>
                    <li className="flex items-start gap-3">
                      <Ban className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      Any misuse of the platform or community
                    </li>
                  </ul>
                </div>
                <p className="mt-4 text-sm text-red-400 font-medium">
                  ⚠️ Permanent device bans cannot be appealed. Banned devices cannot create new accounts.
                </p>
              </div>
            </div>

            {/* Why Verification Matters */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 md:p-8 mb-12">
              <h2 className="text-2xl font-bold mb-6 text-center">Why Verification Matters</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-green-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="font-semibold mb-2">Real People</h3>
                  <p className="text-sm text-muted-foreground">
                    Every verified badge means a real person was confirmed
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-blue-500" />
                  </div>
                  <h3 className="font-semibold mb-2">Safer Community</h3>
                  <p className="text-sm text-muted-foreground">
                    Verification deters bad actors and builds trust
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-purple-500" />
                  </div>
                  <h3 className="font-semibold mb-2">Better Connections</h3>
                  <p className="text-sm text-muted-foreground">
                    Connect confidently knowing profiles are authentic
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-pink-500/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Fingerprint className="w-8 h-8 text-pink-500" />
                  </div>
                  <h3 className="font-semibold mb-2">Your Privacy</h3>
                  <p className="text-sm text-muted-foreground">
                    Verification data is encrypted and never shared
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-green-500/20 rounded-2xl p-8 md:p-12 border border-green-500/30 text-center">
              <h2 className="text-3xl font-bold mb-4">Join Our Verified Community</h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Experience the difference a truly verified lifestyle community makes. 
                Connect with confidence on SPICE.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/download" 
                  className="inline-flex items-center justify-center px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full transition-all"
                >
                  Download SPICE Free
                </Link>
                <Link 
                  to="/legal/community-standards" 
                  className="inline-flex items-center justify-center px-8 py-3 bg-background/50 hover:bg-background/80 border border-border font-semibold rounded-full transition-all"
                >
                  View Community Standards
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

export default SafetyVerification;
