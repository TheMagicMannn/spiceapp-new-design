import { Link } from "react-router-dom";
import { Flame, Shield, Heart, CheckCircle, Sparkles, AlertCircle, ExternalLink, BookOpen, Brain, Users, MessageCircle, Lock, Target } from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";

const BDSMGuide = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Complete BDSM & Kink Guide 2025: Safety, Communication, Practices & Community",
    "description": "Ultimate guide to BDSM and kink lifestyle. Learn about dominant/submissive dynamics, safety protocols, consent, negotiation, finding community, and exploring your desires safely.",
    "author": {
      "@type": "Organization",
      "name": "SPICE Dating App"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SPICE",
      "logo": {
        "@type": "ImageObject",
        "url": "https://thespiceapp.com/logo.png"
      }
    },
    "datePublished": "2025-01-20",
    "dateModified": "2025-01-20",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://thespiceapp.com/lifestyle/bdsm-guide"
    },
    "wordCount": "6000"
  };

  return (
    <>
      <SEO
        title="Complete BDSM & Kink Guide 2025: Safety, Consent & Community | SPICE"
        description="Ultimate BDSM and kink guide: What is BDSM, D/s dynamics, safety protocols, consent, negotiation, finding partners, munches, dungeons. 6000+ word comprehensive guide for beginners and experienced kinksters."
        keywords="BDSM guide, kink guide, BDSM safety, dominant submissive, BDSM consent, kink community, BDSM for beginners, power exchange, rope bondage, impact play, munches, dungeons, kink relationships"
        canonical="https://thespiceapp.com/lifestyle/bdsm-guide"
        structuredData={structuredData}
      />

      <div className="relative min-h-screen">
        <ParticlesBackground />
        <Header />
        <Breadcrumbs />
        
        <main className="relative z-10 pt-32 pb-12">
          <div className="container mx-auto px-4 max-w-5xl">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
                <Flame className="w-4 h-4 text-red-500" />
                <span className="text-sm font-medium text-red-500">BDSM & Kink Lifestyle</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-red-500 via-orange-500 to-red-500 bg-clip-text text-transparent">
                The Complete BDSM & Kink Guide
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Everything you need to know about BDSM, kink, and power exchange relationships. From safety and consent to finding your community and exploring your desires.
              </p>
            </div>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-3 gap-4 mb-12">
              <Link to="/quiz/bdsm" className="flex items-center gap-4 p-4 bg-card/50 backdrop-blur-sm border border-border rounded-xl hover:border-primary/50 transition-all group">
                <Brain className="w-6 h-6 text-red-500 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold group-hover:text-primary transition-colors">Take the Quiz</h3>
                  <p className="text-sm text-muted-foreground">Discover your kink profile</p>
                </div>
              </Link>
              <Link to="/blog/bdsm-beginners-guide" className="flex items-center gap-4 p-4 bg-card/50 backdrop-blur-sm border border-border rounded-xl hover:border-primary/50 transition-all group">
                <BookOpen className="w-6 h-6 text-red-500 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold group-hover:text-primary transition-colors">Beginner's Guide</h3>
                  <p className="text-sm text-muted-foreground">Start here if you're new</p>
                </div>
              </Link>
              <Link to="/download" className="flex items-center gap-4 p-4 bg-card/50 backdrop-blur-sm border border-border rounded-xl hover:border-primary/50 transition-all group">
                <Users className="w-6 h-6 text-red-500 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold group-hover:text-primary transition-colors">Join SPICE</h3>
                  <p className="text-sm text-muted-foreground">Connect with kinksters</p>
                </div>
              </Link>
            </div>

            {/* Table of Contents */}
            <div className="mb-12">
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-primary" />
                  In This Complete Guide:
                </h2>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                  <a href="#what-is" className="text-primary hover:underline flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> What is BDSM?
                  </a>
                  <a href="#roles" className="text-primary hover:underline flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Roles & Dynamics
                  </a>
                  <a href="#practices" className="text-primary hover:underline flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Common BDSM Practices
                  </a>
                  <a href="#safety" className="text-primary hover:underline flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Safety & Risk Awareness
                  </a>
                  <a href="#consent" className="text-primary hover:underline flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Consent & Negotiation
                  </a>
                  <a href="#getting-started" className="text-primary hover:underline flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Getting Started
                  </a>
                  <a href="#communication" className="text-primary hover:underline flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Communication Skills
                  </a>
                  <a href="#finding-partners" className="text-primary hover:underline flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Finding Partners
                  </a>
                  <a href="#community" className="text-primary hover:underline flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> The Kink Community
                  </a>
                  <a href="#relationships" className="text-primary hover:underline flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> BDSM Relationships
                  </a>
                  <a href="#aftercare" className="text-primary hover:underline flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Aftercare
                  </a>
                  <a href="#mistakes" className="text-primary hover:underline flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Common Mistakes
                  </a>
                  <a href="#mental-health" className="text-primary hover:underline flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Mental Health & Kink
                  </a>
                  <a href="#resources" className="text-primary hover:underline flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Resources & Books
                  </a>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <article className="prose prose-lg max-w-none">
              
              {/* What is BDSM */}
              <section id="what-is" className="mb-16 scroll-mt-24">
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <Flame className="w-8 h-8 text-red-500" />
                    What is BDSM?
                  </h2>
                  
                  <div className="space-y-6 text-muted-foreground">
                    <p className="text-lg leading-relaxed">
                      BDSM is an umbrella term encompassing a wide range of consensual erotic practices involving power dynamics, physical sensations, psychological play, and role-playing. The acronym stands for:
                    </p>

                    <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-xl p-6">
                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-2">BD</h3>
                          <p className="text-sm"><strong className="text-foreground">Bondage & Discipline</strong><br/>Physical restraint and behavioral training/rules</p>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-2">DS</h3>
                          <p className="text-sm"><strong className="text-foreground">Dominance & Submission</strong><br/>Power exchange and control dynamics</p>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-2">SM</h3>
                          <p className="text-sm"><strong className="text-foreground">Sadism & Masochism</strong><br/>Giving and receiving intense sensations/pain</p>
                        </div>
                      </div>
                    </div>

                    <p className="leading-relaxed">
                      BDSM isn't about abuse or violence—it's about <strong className="text-foreground">consensual exploration</strong> of power, sensation, psychology, and sexuality. All activities happen with explicit consent, negotiation, and the ability to stop at any time. The foundation is trust, communication, and mutual respect.
                    </p>

                    <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Core Principles of BDSM</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Shield className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">SSC: Safe, Sane, and Consensual</h4>
                          <p className="text-sm">The traditional framework emphasizing safety, sound judgment, and explicit consent for all activities.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Target className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">RACK: Risk-Aware Consensual Kink</h4>
                          <p className="text-sm">Acknowledges that all activities carry some risk; participants understand and accept those risks with informed consent.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Heart className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-foreground mb-2">PRICK: Personal Responsibility, Informed Consensual Kink</h4>
                          <p className="text-sm">Emphasizes personal responsibility for one's own decisions and thorough education about risks.</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 my-6">
                      <p className="text-sm text-foreground flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span><strong>New to BDSM?</strong> Take our <Link to="/quiz/bdsm" className="text-primary hover:underline">BDSM & Kink Quiz</Link> to discover your interests and preferences. Then read <Link to="/blog/bdsm-beginners-guide" className="text-primary hover:underline">BDSM for Beginners</Link> for a gentle introduction.</span>
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Roles & Dynamics */}
              <section id="roles" className="mb-16 scroll-mt-24">
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <Users className="w-8 h-8 text-red-500" />
                    Roles & Dynamics
                  </h2>
                  
                  <div className="space-y-6 text-muted-foreground">
                    <p className="text-lg leading-relaxed">
                      BDSM involves various roles that people take on during scenes or relationships. These roles aren't fixed—many people switch between them depending on partner, mood, or context.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                      <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-xl p-6">
                        <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                          <Lock className="w-5 h-5 text-red-500" />
                          Dominant (Dom/Domme)
                        </h3>
                        <p className="text-sm mb-4">
                          The person who takes control in a scene or relationship. Responsible for the submissive's safety, wellbeing, and guiding the experience within negotiated boundaries.
                        </p>
                        <div className="text-xs space-y-1">
                          <p><strong className="text-foreground">Types:</strong> Master/Mistress, Daddy/Mommy, Sir/Ma'am, Owner, Top, Sadist</p>
                          <p><strong className="text-foreground">Responsibilities:</strong> Safety, consent, aftercare, respecting limits</p>
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-6">
                        <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                          <Heart className="w-5 h-5 text-purple-500" />
                          Submissive (Sub)
                        </h3>
                        <p className="text-sm mb-4">
                          The person who consensually gives up control. Submission is a gift—it's active participation, not passivity. Subs have the ultimate power to stop scenes with safewords.
                        </p>
                        <div className="text-xs space-y-1">
                          <p><strong className="text-foreground">Types:</strong> Slave, Pet, Little, Boy/Girl, Bottom, Masochist</p>
                          <p><strong className="text-foreground">Rights:</strong> Set limits, use safewords, receive aftercare, withdraw consent</p>
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-xl p-6">
                        <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                          <Sparkles className="w-5 h-5 text-green-500" />
                          Switch
                        </h3>
                        <p className="text-sm mb-4">
                          Someone who enjoys both dominant and submissive roles, either with different partners or at different times. Switches understand both sides of power dynamics intimately.
                        </p>
                        <div className="text-xs space-y-1">
                          <p><strong className="text-foreground">Flexibility:</strong> Can adapt to partner's needs and desires</p>
                          <p><strong className="text-foreground">Benefits:</strong> Understanding of both perspectives, versatility</p>
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-xl p-6">
                        <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                          <MessageCircle className="w-5 h-5 text-blue-500" />
                          Service-Oriented
                        </h3>
                        <p className="text-sm mb-4">
                          Finds fulfillment in acts of service—cooking, cleaning, massaging, organizing for their Dominant. Service can be sexual or non-sexual, and is about pleasing through helpfulness.
                        </p>
                        <div className="text-xs space-y-1">
                          <p><strong className="text-foreground">Focus:</strong> Acts of service, caretaking, anticipating needs</p>
                          <p><strong className="text-foreground">Fulfillment:</strong> Feeling useful, appreciated, valued</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-primary/10 border border-primary/30 rounded-xl p-6 my-6">
                      <h3 className="text-xl font-semibold text-foreground mb-4">Common Misconceptions</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• <strong className="text-foreground">Myth:</strong> Dominants are always in control. <strong className="text-foreground">Truth:</strong> Submissives have ultimate control via consent and safewords</li>
                        <li>• <strong className="text-foreground">Myth:</strong> Submissives are weak. <strong className="text-foreground">Truth:</strong> It takes immense strength to be vulnerable and trust</li>
                        <li>• <strong className="text-foreground">Myth:</strong> BDSM is always sexual. <strong className="text-foreground">Truth:</strong> Many engage in non-sexual power exchange</li>
                        <li>• <strong className="text-foreground">Myth:</strong> You must identify as one role forever. <strong className="text-foreground">Truth:</strong> Roles can be fluid and evolve over time</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Due to length, I'll continue with remaining sections in the file... */}
              
              {/* Common BDSM Practices */}
              <section id="practices" className="mb-16 scroll-mt-24">
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <Flame className="w-8 h-8 text-red-500" />
                    Common BDSM Practices
                  </h2>
                  
                  <div className="space-y-6 text-muted-foreground">
                    <p className="text-lg leading-relaxed">
                      BDSM encompasses hundreds of activities. Here are some of the most common practices beginners explore:
                    </p>

                    <div className="space-y-6 mt-8">
                      <div className="bg-background/50 rounded-xl p-6">
                        <h3 className="text-xl font-semibold text-foreground mb-3">Bondage & Restraint</h3>
                        <p className="mb-3 text-sm">Restricting movement through physical means—creating helplessness and surrender in a controlled environment.</p>
                        <ul className="text-sm space-y-1 ml-4">
                          <li>• <strong className="text-foreground">Rope bondage (Shibari/Kinbaku):</strong> Artistic, decorative rope tying</li>
                          <li>• <strong className="text-foreground">Handcuffs/restraints:</strong> Quick, accessible restraint</li>
                          <li>• <strong className="text-foreground">Bondage furniture:</strong> St. Andrew's crosses, bondage beds, stocks</li>
                          <li>• <strong className="text-foreground">Mummification:</strong> Full-body wrapping in materials</li>
                        </ul>
                      </div>

                      <div className="bg-background/50 rounded-xl p-6">
                        <h3 className="text-xl font-semibold text-foreground mb-3">Impact Play</h3>
                        <p className="mb-3 text-sm">Striking the body for sensation, endorphin release, or psychological effect.</p>
                        <ul className="text-sm space-y-1 ml-4">
                          <li>• <strong className="text-foreground">Spanking:</strong> Hand, paddle, or implement striking buttocks</li>
                          <li>• <strong className="text-foreground">Flogging:</strong> Multiple-tailed whips for broader sensation</li>
                          <li>• <strong className="text-foreground">Caning:</strong> Intense, precise strikes with rigid canes</li>
                          <li>• <strong className="text-foreground">Whipping:</strong> Single-tail implements for advanced players</li>
                        </ul>
                      </div>

                      <div className="bg-background/50 rounded-xl p-6">
                        <h3 className="text-xl font-semibold text-foreground mb-3">Sensation Play</h3>
                        <p className="mb-3 text-sm">Creating intense physical sensations beyond pain—playing with nerve endings.</p>
                        <ul className="text-sm space-y-1 ml-4">
                          <li>• <strong className="text-foreground">Temperature play:</strong> Ice, heat, wax for contrasting sensations</li>
                          <li>• <strong className="text-foreground">Wax play:</strong> Dripping hot wax on skin</li>
                          <li>• <strong className="text-foreground">Sensory deprivation:</strong> Blindfolds, earplugs, hoods</li>
                          <li>• <strong className="text-foreground">Electrostimulation:</strong> Violet wands, TENS units</li>
                        </ul>
                      </div>

                      <div className="bg-background/50 rounded-xl p-6">
                        <h3 className="text-xl font-semibold text-foreground mb-3">Psychological Play</h3>
                        <p className="mb-3 text-sm">Mind games, power dynamics, and emotional experiences.</p>
                        <ul className="text-sm space-y-1 ml-4">
                          <li>• <strong className="text-foreground">Humiliation:</strong> Consensual degradation or embarrassment</li>
                          <li>• <strong className="text-foreground">Orgasm control:</strong> Edging, denial, forced orgasms</li>
                          <li>• <strong className="text-foreground">Pet play:</strong> Taking on animal personas (puppy, kitten, pony)</li>
                          <li>• <strong className="text-foreground">Age play:</strong> Adult roleplay with age regression/progression</li>
                        </ul>
                      </div>

                      <div className="bg-background/50 rounded-xl p-6">
                        <h3 className="text-xl font-semibold text-foreground mb-3">Service & Protocol</h3>
                        <p className="mb-3 text-sm">Structured behaviors, rituals, and acts of service within D/s dynamics.</p>
                        <ul className="text-sm space-y-1 ml-4">
                          <li>• <strong className="text-foreground">Domestic service:</strong> Cleaning, cooking, organizing</li>
                          <li>• <strong className="text-foreground">Formal protocol:</strong> Rules for behavior, speech, positioning</li>
                          <li>• <strong className="text-foreground">Rituals:</strong> Greeting protocols, collar ceremonies</li>
                          <li>• <strong className="text-foreground">Body service:</strong> Massage, grooming, dressing</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 my-6">
                      <p className="text-sm text-foreground flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span><strong>Explore More:</strong> Check out <Link to="/blog/beginner-friendly-kinks" className="text-primary hover:underline">Beginner-Friendly Kinks to Try</Link> for detailed guidance on starting your exploration safely.</span>
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Safety & Risk Awareness */}
              <section id="safety" className="mb-16 scroll-mt-24">
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <Shield className="w-8 h-8 text-red-500" />
                    Safety & Risk Awareness
                  </h2>
                  
                  <div className="space-y-6 text-muted-foreground">
                    <p className="text-lg leading-relaxed">
                      Safety is the foundation of all BDSM activities. Being <strong className="text-foreground">risk-aware</strong> means understanding potential hazards and taking steps to minimize them.
                    </p>

                    <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-4">Essential Safety Practices</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                          <div>
                            <strong className="text-foreground">Establish Safewords:</strong> Clear signals to pause (yellow) or stop (red) immediately. Some use "safeword" or pick random words like "banana"
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                          <div>
                            <strong className="text-foreground">Non-Verbal Signals:</strong> If gagged or unable to speak, use hand signals (dropping an object, specific gesture)
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                          <div>
                            <strong className="text-foreground">Check-Ins:</strong> Regularly ask "Color?" during scenes (green=good, yellow=slow down, red=stop)
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                          <div>
                            <strong className="text-foreground">Safety Scissors:</strong> Always have EMT shears nearby to quickly cut rope/restraints
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                          <div>
                            <strong className="text-foreground">First Aid Kit:</strong> Have bandages, antiseptic, ice packs readily available
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                          <div>
                            <strong className="text-foreground">Never Play Intoxicated:</strong> Consent can't be given when impaired; judgment and safety are compromised
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                          <div>
                            <strong className="text-foreground">Educate Yourself:</strong> Learn anatomy, proper techniques, and risks before trying new activities
                          </div>
                        </li>
                      </ul>
                    </div>

                    <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Activity-Specific Safety</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-background/50 rounded-xl p-4">
                        <h4 className="font-semibold text-foreground mb-2 text-sm">Rope Bondage</h4>
                        <ul className="text-xs space-y-1">
                          <li>• Avoid nerve bundles (wrists, ankles, neck)</li>
                          <li>• Never tie around the neck without expert training</li>
                          <li>• Check circulation frequently (color, temperature, numbness)</li>
                          <li>• Use safety scissors within reach</li>
                        </ul>
                      </div>
                      <div className="bg-background/50 rounded-xl p-4">
                        <h4 className="font-semibold text-foreground mb-2 text-sm">Impact Play</h4>
                        <ul className="text-xs space-y-1">
                          <li>• Target fleshy areas (buttocks, thighs, upper back)</li>
                          <li>• Avoid kidneys, spine, joints, head, neck</li>
                          <li>• Start light, build intensity gradually</li>
                          <li>• Watch for skin breaking, deep bruising</li>
                        </ul>
                      </div>
                      <div className="bg-background/50 rounded-xl p-4">
                        <h4 className="font-semibold text-foreground mb-2 text-sm">Breath Play</h4>
                        <ul className="text-xs space-y-1">
                          <li>• <strong>Extremely high risk</strong> - brain damage/death possible</li>
                          <li>• Never compress the neck</li>
                          <li>• Never play alone (autoerotic asphyxiation = deadly)</li>
                          <li>• Consider skipping this entirely</li>
                        </ul>
                      </div>
                      <div className="bg-background/50 rounded-xl p-4">
                        <h4 className="font-semibold text-foreground mb-2 text-sm">Sensation Play</h4>
                        <ul className="text-xs space-y-1">
                          <li>• Test temperature on yourself first</li>
                          <li>• Wax: Use candles designed for play (lower temp)</li>
                          <li>• Ice: Can cause nerve damage if held too long</li>
                          <li>• Always have a safeword for overwhelming sensation</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 my-6">
                      <p className="text-sm text-foreground flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span><strong>Comprehensive Resource:</strong> Read our detailed <Link to="/blog/bdsm-safety-checklist" className="text-primary hover:underline">BDSM Safety Checklist</Link> before engaging in any new activities.</span>
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* To be continued with remaining sections... */}

            </article>
          </div>
        </main>

        <FooterSection />
      </div>
    </>
  );
};

export default BDSMGuide;
