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

              {/* Consent & Negotiation */}
              <section id="consent" className="mb-16 scroll-mt-24">
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <CheckCircle className="w-8 h-8 text-red-500" />
                    Consent & Negotiation
                  </h2>
                  
                  <div className="space-y-6 text-muted-foreground">
                    <p className="text-lg leading-relaxed">
                      Consent in BDSM is <strong className="text-foreground">explicit, enthusiastic, informed, and revocable</strong>. It's not a one-time thing—it's an ongoing conversation before, during, and after every scene.
                    </p>

                    <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-4">The Four Pillars of BDSM Consent</h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <strong className="text-foreground">Informed:</strong> All parties understand what they're agreeing to, including risks
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <strong className="text-foreground">Enthusiastic:</strong> Active "yes," not just absence of "no." Coerced consent isn't consent
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <strong className="text-foreground">Specific:</strong> Consenting to one activity doesn't mean consent to all activities
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <strong className="text-foreground">Revocable:</strong> Anyone can withdraw consent at any time, for any reason, no explanation needed
                          </div>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Pre-Scene Negotiation</h3>
                    <p className="leading-relaxed mb-4">
                      Negotiation is where you discuss what will and won't happen in a scene. It's best done before any play, when everyone is clear-headed and not in a heightened state.
                    </p>

                    <div className="bg-background/50 rounded-xl p-6">
                      <h4 className="font-semibold text-foreground mb-3">Essential Topics to Negotiate:</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <ul className="space-y-2">
                          <li>• <strong className="text-foreground">Activities:</strong> What you want to do (bondage, impact, etc.)</li>
                          <li>• <strong className="text-foreground">Hard limits:</strong> Absolute no's that won't be negotiated</li>
                          <li>• <strong className="text-foreground">Soft limits:</strong> Maybe's or things you're nervous about</li>
                          <li>• <strong className="text-foreground">Safewords:</strong> Agreed signals to slow or stop</li>
                          <li>• <strong className="text-foreground">Triggers:</strong> Past traumas or sensitive topics to avoid</li>
                        </ul>
                        <ul className="space-y-2">
                          <li>• <strong className="text-foreground">Health concerns:</strong> Injuries, conditions, medications</li>
                          <li>• <strong className="text-foreground">Intensity level:</strong> Light, moderate, or heavy play</li>
                          <li>• <strong className="text-foreground">Duration:</strong> How long the scene will last</li>
                          <li>• <strong className="text-foreground">Aftercare needs:</strong> What each person needs afterward</li>
                          <li>• <strong className="text-foreground">Check-in frequency:</strong> How often to pause and assess</li>
                        </ul>
                      </div>
                    </div>

                    <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Negotiation Tools</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
                        <h4 className="font-semibold text-foreground mb-3">Checklists</h4>
                        <p className="text-sm mb-2">Written lists of activities marked as:</p>
                        <ul className="text-xs space-y-1">
                          <li>• ✅ Yes/Interested</li>
                          <li>• ⚠️ Maybe/Willing to try</li>
                          <li>• ❌ No/Hard limit</li>
                        </ul>
                        <p className="text-xs mt-3">Compare lists with partners to find overlaps</p>
                      </div>

                      <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
                        <h4 className="font-semibold text-foreground mb-3">Traffic Light System</h4>
                        <p className="text-sm mb-2">During scenes, use colors:</p>
                        <ul className="text-xs space-y-1">
                          <li>• 🟢 Green = All good, continue</li>
                          <li>• 🟡 Yellow = Slow down, check in</li>
                          <li>• 🔴 Red = Stop immediately</li>
                        </ul>
                        <p className="text-xs mt-3">Dom asks "Color?" regularly during play</p>
                      </div>
                    </div>

                    <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 my-6">
                      <p className="text-sm text-foreground flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span><strong>Download Our Tool:</strong> Use the <Link to="/blog/bdsm-negotiation-checklist" className="text-primary hover:underline">BDSM Negotiation Checklist</Link> to facilitate thorough, organized pre-scene discussions with partners.</span>
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Getting Started */}
              <section id="getting-started" className="mb-16 scroll-mt-24">
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <Sparkles className="w-8 h-8 text-red-500" />
                    Getting Started in BDSM
                  </h2>
                  
                  <div className="space-y-6 text-muted-foreground">
                    <p className="text-lg leading-relaxed">
                      Starting your BDSM journey can feel overwhelming. Here's a step-by-step approach to exploring safely and confidently.
                    </p>

                    <div className="space-y-6 mt-8">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 font-bold text-xl">1</div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-2">Self-Discovery & Education</h3>
                          <p className="leading-relaxed mb-3">
                            Before involving partners, explore what interests you. Read books, watch educational videos, take quizzes. Understand that fantasies don't always translate to reality—and that's okay.
                          </p>
                          <p className="text-sm">
                            <strong className="text-foreground">Resources:</strong> <Link to="/quiz/bdsm" className="text-primary hover:underline">Take the BDSM Quiz</Link> • <Link to="/blog/bdsm-beginners-guide" className="text-primary hover:underline">Read BDSM for Beginners</Link>
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 font-bold text-xl">2</div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-2">Talk to Your Partner (If Applicable)</h3>
                          <p className="leading-relaxed mb-3">
                            If you're in a relationship, bring up your interests gently. Share what you've learned, ask about their curiosity, and explore together. If they're not interested, respect that—BDSM requires enthusiastic participation.
                          </p>
                          <p className="text-sm">
                            <strong className="text-foreground">Tip:</strong> Frame it as exploration, not demands. "I've been curious about..." rather than "I need you to..."
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 font-bold text-xl">3</div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-2">Start Small & Low-Risk</h3>
                          <p className="leading-relaxed mb-3">
                            Begin with beginner-friendly activities: light bondage with silk scarves, blindfolds, ice cubes, feathers, soft spanking. Build skills and confidence before progressing to advanced practices.
                          </p>
                          <p className="text-sm">
                            <strong className="text-foreground">Resource:</strong> <Link to="/blog/beginner-friendly-kinks" className="text-primary hover:underline">Beginner-Friendly Kinks to Try</Link>
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 font-bold text-xl">4</div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-2">Connect With the Community</h3>
                          <p className="leading-relaxed mb-3">
                            Attend munches (casual social gatherings), join online forums like FetLife, or find local BDSM education workshops. Learning from experienced practitioners accelerates your growth and keeps you safe.
                          </p>
                          <p className="text-sm">
                            <strong className="text-foreground">Resource:</strong> <Link to="/blog/finding-kink-community" className="text-primary hover:underline">How to Find Your Kink Community</Link>
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 font-bold text-xl">5</div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-2">Invest in Quality Toys & Safety Gear</h3>
                          <p className="leading-relaxed mb-3">
                            As you progress, invest in proper equipment. Good rope, paddles, floggers, and safety scissors matter. Cheap toys can break or cause injury. Buy from reputable BDSM retailers.
                          </p>
                          <p className="text-sm">
                            <strong className="text-foreground">Budget-Friendly:</strong> <Link to="/blog/kink-on-budget" className="text-primary hover:underline">Exploring Kink on a Budget</Link>
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 font-bold text-xl">6</div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-2">Attend Workshops & Classes</h3>
                          <p className="leading-relaxed mb-3">
                            Many communities offer classes on rope bondage, impact play, negotiation, and more. Hands-on learning with experienced teachers is invaluable and much safer than learning from videos alone.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 font-bold text-xl">7</div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-2">Reflect & Adjust</h3>
                          <p className="leading-relaxed mb-3">
                            After each experience, reflect: What felt good? What didn't? How's your emotional state? BDSM is a journey, not a destination. Your interests will evolve—that's completely normal.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6 my-6">
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                        Timeline Expectations
                      </h4>
                      <p className="text-sm">
                        There's no rush. Some people explore for years before trying anything physical. Others move faster. What matters is that you feel safe, informed, and excited—not pressured or scared.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Communication Skills */}
              <section id="communication" className="mb-16 scroll-mt-24">
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <MessageCircle className="w-8 h-8 text-red-500" />
                    Communication Skills
                  </h2>
                  
                  <div className="space-y-6 text-muted-foreground">
                    <p className="text-lg leading-relaxed">
                      BDSM requires exceptional communication—before, during, and after scenes. Poor communication leads to misunderstandings, violated boundaries, and damaged trust.
                    </p>

                    <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-4">Essential Communication Skills</h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 text-sm">Active Listening</h4>
                          <p className="text-xs">Don't just wait for your turn to talk—truly hear what your partner is saying. Reflect back: "So you're saying you're nervous about..." to confirm understanding.</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 text-sm">Vulnerability</h4>
                          <p className="text-xs">Share your fears, insecurities, and desires honestly. BDSM requires emotional intimacy alongside physical vulnerability.</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 text-sm">Non-Defensive Receiving</h4>
                          <p className="text-xs">When your partner shares concerns or feedback, don't get defensive. Thank them for trusting you with their feelings, then problem-solve together.</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 text-sm">Clear, Direct Language</h4>
                          <p className="text-xs">Be specific: "I'd like to try rope bondage on my wrists" not "Maybe we could do some tie-up stuff?" Ambiguity leads to miscommunication.</p>
                        </div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">During-Scene Communication</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-background/50 rounded-xl p-6">
                        <h4 className="font-semibold text-foreground mb-3">For Dominants:</h4>
                        <ul className="text-sm space-y-2">
                          <li>• Check in regularly: "Color?" or "How are you doing?"</li>
                          <li>• Watch body language for distress signs</li>
                          <li>• Give verbal reassurance and praise</li>
                          <li>• Adjust intensity based on responses</li>
                          <li>• Never shame for using safewords</li>
                        </ul>
                      </div>
                      <div className="bg-background/50 rounded-xl p-6">
                        <h4 className="font-semibold text-foreground mb-3">For Submissives:</h4>
                        <ul className="text-sm space-y-2">
                          <li>• Use safewords without hesitation</li>
                          <li>• Communicate physical sensations: "That's intense but good"</li>
                          <li>• Don't hide discomfort to please your Dominant</li>
                          <li>• Remember: you have power to stop anytime</li>
                          <li>• Speak up about unexpected triggers</li>
                        </ul>
                      </div>
                    </div>

                    <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Post-Scene Communication (Debriefing)</h3>
                    <div className="bg-background/50 rounded-xl p-6">
                      <p className="mb-4 text-sm">After scenes, discuss the experience while it's fresh:</p>
                      <ul className="text-sm space-y-2">
                        <li>• <strong className="text-foreground">What felt amazing?</strong> Celebrate what worked</li>
                        <li>• <strong className="text-foreground">What was uncomfortable?</strong> Address issues without blame</li>
                        <li>• <strong className="text-foreground">Surprises?</strong> Unexpected emotions or reactions</li>
                        <li>• <strong className="text-foreground">Adjust for next time?</strong> Boundary changes needed</li>
                        <li>• <strong className="text-foreground">Emotional state?</strong> Check in on feelings, not just physical</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* Continue with more sections... */}

              {/* Finding Partners */}
              <section id="finding-partners" className="mb-16 scroll-mt-24">
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <Users className="w-8 h-8 text-red-500" />
                    Finding BDSM Partners
                  </h2>
                  
                  <div className="space-y-6 text-muted-foreground">
                    <p className="text-lg leading-relaxed">
                      Finding compatible BDSM partners requires patience, clear communication, and involvement in the community.
                    </p>

                    <div className="space-y-4 mt-6">
                      <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/30 rounded-xl p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <Users className="w-6 h-6 text-red-500" />
                          <h3 className="font-semibold text-foreground text-lg">SPICE - For BDSM & Kink</h3>
                        </div>
                        <p className="text-sm mb-3">
                          <Link to="/download" className="text-primary hover:underline font-semibold">SPICE</Link> caters specifically to alternative lifestyles with kink-friendly profiles, BDSM quiz integration, and community features. Connect with dominant, submissive, and switch partners who share your interests.
                        </p>
                        <Link to="/download" className="inline-flex items-center gap-2 px-6 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-full text-sm transition-all">
                          Join SPICE Free <ExternalLink className="w-4 h-4" />
                        </Link>
                      </div>

                      <div className="bg-background/50 rounded-xl p-6">
                        <h3 className="font-semibold text-foreground mb-3">Other Platforms & Methods:</h3>
                        <ul className="space-y-2 text-sm">
                          <li>• <strong className="text-foreground">FetLife:</strong> Social network for kinksters—groups, events, discussions</li>
                          <li>• <strong className="text-foreground">Munches:</strong> Casual meetups at vanilla venues (coffee shops, restaurants)</li>
                          <li>• <strong className="text-foreground">Workshops & Classes:</strong> Meet people while learning skills</li>
                          <li>• <strong className="text-foreground">BDSM Clubs & Dungeons:</strong> Playspaces for experienced kinksters</li>
                          <li>• <strong className="text-foreground">Fetish Events:</strong> Parties, conventions, leather events</li>
                        </ul>
                      </div>
                    </div>

                    <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Creating an Effective Kink Profile</h3>
                    <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <strong className="text-foreground">Be Specific:</strong> State your role (Dom, sub, switch), experience level, and what you're seeking
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <strong className="text-foreground">List Interests:</strong> Activities you enjoy or want to explore (rope, impact, service, etc.)
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <strong className="text-foreground">Hard Limits:</strong> Mention deal-breakers upfront to filter incompatible people
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <strong className="text-foreground">Show Personality:</strong> What do you do outside of kink? Hobbies, interests, humor
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <strong className="text-foreground">Recent Photos:</strong> Clear face pics and full-body shots; honesty is crucial
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 my-6">
                      <h4 className="font-semibold text-foreground mb-3">⚠️ Red Flags to Watch For:</h4>
                      <ul className="text-sm space-y-2">
                        <li>• Rushing into scenes without negotiation</li>
                        <li>• Refusing to respect safewords or limits</li>
                        <li>• Pressuring you to do things you're uncomfortable with</li>
                        <li>• Claiming to be an "experienced Dom/sub" but can't discuss safety</li>
                        <li>• Isolating you from community or other connections</li>
                        <li>• Not willing to meet in public first or video verify</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* The Kink Community */}
              <section id="community" className="mb-16 scroll-mt-24">
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <Heart className="w-8 h-8 text-red-500" />
                    The Kink Community
                  </h2>
                  
                  <div className="space-y-6 text-muted-foreground">
                    <p className="text-lg leading-relaxed">
                      The BDSM/kink community is diverse, welcoming, and supportive. Getting involved accelerates your learning, builds friendships, and keeps you safer.
                    </p>

                    <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Types of Community Events</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-background/50 rounded-xl p-6">
                        <h4 className="font-semibold text-foreground mb-2">Munches</h4>
                        <p className="text-sm mb-2">Casual social gatherings at vanilla venues (coffee shops, restaurants). No play, no dress code—just socializing.</p>
                        <p className="text-xs text-foreground"><strong>Perfect for:</strong> Absolute beginners, making friends</p>
                      </div>
                      <div className="bg-background/50 rounded-xl p-6">
                        <h4 className="font-semibold text-foreground mb-2">Workshops & Classes</h4>
                        <p className="text-sm mb-2">Educational sessions teaching skills like rope bondage, impact play, negotiation, or safety protocols.</p>
                        <p className="text-xs text-foreground"><strong>Perfect for:</strong> Learning new skills, meeting experienced practitioners</p>
                      </div>
                      <div className="bg-background/50 rounded-xl p-6">
                        <h4 className="font-semibold text-foreground mb-2">Play Parties</h4>
                        <p className="text-sm mb-2">Private events where people engage in BDSM activities. May have social areas and playrooms/dungeons.</p>
                        <p className="text-xs text-foreground"><strong>Perfect for:</strong> Experienced players, those comfortable with public play</p>
                      </div>
                      <div className="bg-background/50 rounded-xl p-6">
                        <h4 className="font-semibold text-foreground mb-2">Dungeons & Clubs</h4>
                        <p className="text-sm mb-2">Physical spaces with BDSM equipment (crosses, cages, suspension points) where people can play.</p>
                        <p className="text-xs text-foreground"><strong>Perfect for:</strong> Accessing equipment you don't own, socializing with kinky folks</p>
                      </div>
                    </div>

                    <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Community Etiquette</h3>
                    <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                      <ul className="space-y-2 text-sm">
                        <li>• <strong className="text-foreground">Respect Privacy:</strong> Don't out people or share real names/photos without permission</li>
                        <li>• <strong className="text-foreground">Ask Before Touching:</strong> Even at play parties, consent is required for every interaction</li>
                        <li>• <strong className="text-foreground">Don't Interrupt Scenes:</strong> If people are playing, don't approach or talk to them</li>
                        <li>• <strong className="text-foreground">No Means No:</strong> If someone declines your interest, respect it immediately</li>
                        <li>• <strong className="text-foreground">Volunteer & Contribute:</strong> Many events are run by volunteers; offer to help</li>
                        <li>• <strong className="text-foreground">Be Inclusive:</strong> BDSM welcomes all genders, orientations, body types, and backgrounds</li>
                      </ul>
                    </div>

                    <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 my-6">
                      <p className="text-sm text-foreground flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span><strong>Find Your People:</strong> Read <Link to="/blog/finding-kink-community" className="text-primary hover:underline">How to Find and Join Your Local Kink Community</Link> for detailed guidance on getting involved.</span>
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* BDSM Relationships */}
              <section id="relationships" className="mb-16 scroll-mt-24">
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <Heart className="w-8 h-8 text-red-500" />
                    BDSM Relationships
                  </h2>
                  
                  <div className="space-y-6 text-muted-foreground">
                    <p className="text-lg leading-relaxed">
                      BDSM relationships come in many forms—from casual play partners to committed D/s partnerships. Each has its own dynamics and expectations.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                      <div className="bg-background/50 rounded-xl p-6">
                        <h3 className="font-semibold text-foreground mb-3">Casual Play Partners</h3>
                        <p className="text-sm mb-3">People you scene with occasionally without romantic commitment. Focus is on specific activities and skill practice.</p>
                        <p className="text-xs"><strong className="text-foreground">Best for:</strong> Exploring interests, learning, variety</p>
                      </div>
                      <div className="bg-background/50 rounded-xl p-6">
                        <h3 className="font-semibold text-foreground mb-3">Scene-Only Relationships</h3>
                        <p className="text-sm mb-3">You only interact during negotiated scenes. Outside of play, you're acquaintances or friends, not romantic partners.</p>
                        <p className="text-xs"><strong className="text-foreground">Best for:</strong> Clear boundaries, specific kink fulfillment</p>
                      </div>
                      <div className="bg-background/50 rounded-xl p-6">
                        <h3 className="font-semibold text-foreground mb-3">Romantic D/s Relationships</h3>
                        <p className="text-sm mb-3">BDSM integrated into a committed romantic relationship. Power exchange may extend beyond scenes into daily life.</p>
                        <p className="text-xs"><strong className="text-foreground">Best for:</strong> Deep intimacy, 24/7 dynamics, long-term commitment</p>
                      </div>
                      <div className="bg-background/50 rounded-xl p-6">
                        <h3 className="font-semibold text-foreground mb-3">24/7 Total Power Exchange (TPE)</h3>
                        <p className="text-sm mb-3">Dominant has control over major life decisions. Requires immense trust, communication, and is NOT for beginners.</p>
                        <p className="text-xs"><strong className="text-foreground">Best for:</strong> Experienced practitioners, deeply committed relationships</p>
                      </div>
                    </div>

                    <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Maintaining Healthy BDSM Relationships</h3>
                    <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <span><strong className="text-foreground">Regular Check-Ins:</strong> Discuss the relationship dynamic, not just scenes</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <span><strong className="text-foreground">Evolving Boundaries:</strong> What worked initially may change; renegotiate regularly</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <span><strong className="text-foreground">Vanilla Time:</strong> Spend time together outside of roles and scenes</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <span><strong className="text-foreground">Mutual Respect:</strong> Even in 24/7 dynamics, respect each other as equals</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <span><strong className="text-foreground">Outside Support:</strong> Have friends, community, and life outside the relationship</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 my-6">
                      <p className="text-sm text-foreground flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span><strong>Long Distance?</strong> Read <Link to="/blog/long-distance-bdsm" className="text-primary hover:underline">Making Long-Distance BDSM Relationships Work</Link> for tips on maintaining connection across miles.</span>
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Aftercare */}
              <section id="aftercare" className="mb-16 scroll-mt-24">
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <Heart className="w-8 h-8 text-red-500" />
                    Aftercare
                  </h2>
                  
                  <div className="space-y-6 text-muted-foreground">
                    <p className="text-lg leading-relaxed">
                      Aftercare is the time after a BDSM scene where partners reconnect, process the experience, and return to emotional baseline. It's <strong className="text-foreground">not optional</strong>—it's essential for physical and mental wellbeing.
                    </p>

                    <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-4">Why Aftercare Matters</h3>
                      <p className="text-sm mb-3">
                        BDSM triggers intense physical and emotional responses. Endorphins flood your system during scenes, and when they drop afterward, you can experience "sub drop" or "dom drop"—feelings of sadness, anxiety, or emptiness.
                      </p>
                      <p className="text-sm">
                        Aftercare helps both partners transition back to everyday headspace, process emotions, and reaffirm their connection and care for each other.
                      </p>
                    </div>

                    <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Types of Aftercare</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-background/50 rounded-xl p-6">
                        <h4 className="font-semibold text-foreground mb-3">Physical Aftercare</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Cuddling, holding, gentle touch</li>
                          <li>• Warm blankets or cozy clothing</li>
                          <li>• Water and snacks (chocolate, fruit)</li>
                          <li>• Treating marks or sore areas</li>
                          <li>• Shower or bath together</li>
                          <li>• Rest and sleep</li>
                        </ul>
                      </div>
                      <div className="bg-background/50 rounded-xl p-6">
                        <h4 className="font-semibold text-foreground mb-3">Emotional Aftercare</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Verbal reassurance and praise</li>
                          <li>• Discussing the scene and feelings</li>
                          <li>• Validation of emotions</li>
                          <li>• Quiet companionship</li>
                          <li>• Watching a comforting movie</li>
                          <li>• Journaling about the experience</li>
                        </ul>
                      </div>
                    </div>

                    <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Aftercare for Dominants</h3>
                    <p className="text-sm mb-4">
                      Dominants need aftercare too! They may experience "dom drop"—guilt about hurting someone they care about, exhaustion from responsibility, or emotional overwhelm. Don't skip this.
                    </p>
                    <div className="bg-background/50 rounded-xl p-6">
                      <ul className="text-sm space-y-2">
                        <li>• Receiving physical affection and reassurance from submissive</li>
                        <li>• Being told they did a good job and the sub enjoyed it</li>
                        <li>• Processing any concerns about going "too far"</li>
                        <li>• Self-care: food, hydration, rest</li>
                        <li>• Decompressing and stepping out of the dominant headspace</li>
                      </ul>
                    </div>

                    <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Planning Aftercare</h3>
                    <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                      <p className="text-sm mb-3">
                        Discuss aftercare needs during negotiation:
                      </p>
                      <ul className="text-sm space-y-2">
                        <li>• What do you each need after intense scenes?</li>
                        <li>• Physical touch or space?</li>
                        <li>• Talk it through or process silently?</li>
                        <li>• Specific foods, drinks, or comfort items?</li>
                        <li>• How long should aftercare last?</li>
                        <li>• Check-ins in the days after (delayed drop can happen)</li>
                      </ul>
                    </div>

                    <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 my-6">
                      <p className="text-sm text-foreground flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span><strong>Deep Dive:</strong> Read our comprehensive <Link to="/blog/bdsm-aftercare-guide" className="text-primary hover:underline">BDSM Aftercare Guide</Link> for detailed practices and troubleshooting.</span>
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Common Mistakes */}
              <section id="mistakes" className="mb-16 scroll-mt-24">
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <AlertCircle className="w-8 h-8 text-red-500" />
                    Common Mistakes to Avoid
                  </h2>
                  
                  <div className="space-y-6 text-muted-foreground">
                    <p className="text-lg leading-relaxed">
                      Learning from others' mistakes keeps you safer. Here are the most common pitfalls beginners (and even experienced folks) face:
                    </p>

                    <div className="space-y-4 mt-6">
                      <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-foreground mb-2">❌ Skipping Negotiation</h3>
                        <p className="text-sm">
                          Jumping into scenes without discussing boundaries, limits, and safewords. This leads to violated boundaries and damaged trust. Always negotiate first.
                        </p>
                      </div>

                      <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-foreground mb-2">❌ Confusing Fantasy with Reality</h3>
                        <p className="text-sm">
                          What looks hot in porn or sounds exciting in fantasy may not work in real life. Test interests gradually and be okay with discovering something isn't for you.
                        </p>
                      </div>

                      <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-foreground mb-2">❌ Calling Yourself "Master" After One Scene</h3>
                        <p className="text-sm">
                          Titles are earned through experience, trust, and community respect. Claiming expertise you don't have is dangerous and disrespectful.
                        </p>
                      </div>

                      <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-foreground mb-2">❌ Ignoring Red Flags</h3>
                        <p className="text-sm">
                          If someone pressures you, doesn't respect safewords, or isolates you from community—that's abuse, not BDSM. Trust your instincts and walk away.
                        </p>
                      </div>

                      <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-foreground mb-2">❌ Not Using Safewords</h3>
                        <p className="text-sm">
                          Thinking you'll "tough it out" or don't want to disappoint your partner. Using safewords shows strength and protects both of you. Never skip them.
                        </p>
                      </div>

                      <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-foreground mb-2">❌ Skipping Aftercare</h3>
                        <p className="text-sm">
                          Thinking aftercare is "optional" or only for submissives. Both partners need it. Skipping it leads to drop, resentment, and emotional damage.
                        </p>
                      </div>

                      <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-foreground mb-2">❌ Learning Only from Porn</h3>
                        <p className="text-sm">
                          BDSM porn is fantasy—it skips negotiation, safety, and aftercare. Learn from books, workshops, and experienced community members instead.
                        </p>
                      </div>

                      <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-foreground mb-2">❌ Comparing Yourself to Others</h3>
                        <p className="text-sm">
                          Your kinks, limits, and desires are valid even if they're different from others. Don't feel pressured to enjoy activities that don't resonate with you.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Mental Health & Kink */}
              <section id="mental-health" className="mb-16 scroll-mt-24">
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <Heart className="w-8 h-8 text-red-500" />
                    Mental Health & Kink
                  </h2>
                  
                  <div className="space-y-6 text-muted-foreground">
                    <p className="text-lg leading-relaxed">
                      BDSM and mental health intersect in complex ways. Understanding this relationship helps you engage in kink safely and healthily.
                    </p>

                    <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-3">✅ Healthy Kink Engagement</h3>
                      <p className="text-sm mb-3">
                        Research shows that kinksters are generally as mentally healthy as the general population—sometimes more so because of the communication and self-awareness required.
                      </p>
                      <ul className="text-sm space-y-2">
                        <li>• BDSM can provide stress relief and emotional release</li>
                        <li>• Power exchange can be therapeutic for some people</li>
                        <li>• Community provides acceptance and belonging</li>
                        <li>• Self-discovery and exploration of identity</li>
                      </ul>
                    </div>

                    <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 my-6">
                      <h3 className="text-xl font-semibold text-foreground mb-3">⚠️ When Kink Becomes Unhealthy</h3>
                      <ul className="text-sm space-y-2">
                        <li>• Using BDSM to self-harm or punish yourself</li>
                        <li>• Engaging in risky activities while in crisis</li>
                        <li>• Letting kink interfere with work, relationships, or daily life</li>
                        <li>• Using scenes to avoid processing trauma (without therapeutic support)</li>
                        <li>• Participating in scenes while in active mental health crisis</li>
                      </ul>
                    </div>

                    <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">BDSM and Trauma</h3>
                    <div className="bg-background/50 rounded-xl p-6">
                      <p className="text-sm mb-3">
                        Some people with trauma histories find BDSM therapeutic—it allows them to explore power dynamics in controlled, consensual environments. However:
                      </p>
                      <ul className="text-sm space-y-2">
                        <li>• BDSM is not therapy and shouldn't replace professional help</li>
                        <li>• Discuss trauma history with partners so they can avoid triggers</li>
                        <li>• Be aware that scenes can unexpectedly trigger trauma responses</li>
                        <li>• Work with a kink-aware therapist if using BDSM for healing</li>
                        <li>• Know the difference between consensual re-enactment and re-traumatization</li>
                      </ul>
                    </div>

                    <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 my-6">
                      <p className="text-sm text-foreground flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span><strong>Important Read:</strong> Explore the connection between <Link to="/blog/kink-mental-health" className="text-primary hover:underline">Kink and Mental Health</Link> for deeper understanding and resources.</span>
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Resources & Books */}
              <section id="resources" className="mb-16 scroll-mt-24">
                <div className="bg-gradient-to-br from-red-500/20 via-orange-500/20 to-red-500/20 border border-red-500/30 rounded-2xl p-8 md:p-12">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <BookOpen className="w-8 h-8 text-red-500" />
                    Resources & Next Steps
                  </h2>
                  
                  <div className="space-y-8 text-muted-foreground">
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground mb-4">Recommended SPICE Blog Posts</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <Link to="/blog/bdsm-beginners-guide" className="flex items-center gap-3 p-4 bg-background/50 rounded-xl hover:bg-background/80 transition-colors group">
                          <BookOpen className="w-5 h-5 text-red-500 flex-shrink-0" />
                          <div className="flex-1">
                            <h4 className="font-semibold text-sm group-hover:text-primary transition-colors">BDSM for Beginners</h4>
                          </div>
                          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                        </Link>

                        <Link to="/blog/bdsm-safety-checklist" className="flex items-center gap-3 p-4 bg-background/50 rounded-xl hover:bg-background/80 transition-colors group">
                          <BookOpen className="w-5 h-5 text-red-500 flex-shrink-0" />
                          <div className="flex-1">
                            <h4 className="font-semibold text-sm group-hover:text-primary transition-colors">BDSM Safety Checklist</h4>
                          </div>
                          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                        </Link>

                        <Link to="/blog/bdsm-aftercare-guide" className="flex items-center gap-3 p-4 bg-background/50 rounded-xl hover:bg-background/80 transition-colors group">
                          <BookOpen className="w-5 h-5 text-red-500 flex-shrink-0" />
                          <div className="flex-1">
                            <h4 className="font-semibold text-sm group-hover:text-primary transition-colors">Complete Aftercare Guide</h4>
                          </div>
                          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                        </Link>

                        <Link to="/blog/bdsm-negotiation-checklist" className="flex items-center gap-3 p-4 bg-background/50 rounded-xl hover:bg-background/80 transition-colors group">
                          <BookOpen className="w-5 h-5 text-red-500 flex-shrink-0" />
                          <div className="flex-1">
                            <h4 className="font-semibold text-sm group-hover:text-primary transition-colors">Negotiation Checklist</h4>
                          </div>
                          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                        </Link>

                        <Link to="/blog/beginner-friendly-kinks" className="flex items-center gap-3 p-4 bg-background/50 rounded-xl hover:bg-background/80 transition-colors group">
                          <BookOpen className="w-5 h-5 text-red-500 flex-shrink-0" />
                          <div className="flex-1">
                            <h4 className="font-semibold text-sm group-hover:text-primary transition-colors">Beginner-Friendly Kinks</h4>
                          </div>
                          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                        </Link>

                        <Link to="/blog/finding-kink-community" className="flex items-center gap-3 p-4 bg-background/50 rounded-xl hover:bg-background/80 transition-colors group">
                          <BookOpen className="w-5 h-5 text-red-500 flex-shrink-0" />
                          <div className="flex-1">
                            <h4 className="font-semibold text-sm group-hover:text-primary transition-colors">Finding Kink Community</h4>
                          </div>
                          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                        </Link>

                        <Link to="/blog/kink-mental-health" className="flex items-center gap-3 p-4 bg-background/50 rounded-xl hover:bg-background/80 transition-colors group">
                          <BookOpen className="w-5 h-5 text-red-500 flex-shrink-0" />
                          <div className="flex-1">
                            <h4 className="font-semibold text-sm group-hover:text-primary transition-colors">Kink & Mental Health</h4>
                          </div>
                          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                        </Link>

                        <Link to="/blog/coming-out-kinky" className="flex items-center gap-3 p-4 bg-background/50 rounded-xl hover:bg-background/80 transition-colors group">
                          <BookOpen className="w-5 h-5 text-red-500 flex-shrink-0" />
                          <div className="flex-1">
                            <h4 className="font-semibold text-sm group-hover:text-primary transition-colors">Coming Out as Kinky</h4>
                          </div>
                          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                        </Link>

                        <Link to="/blog/long-distance-bdsm" className="flex items-center gap-3 p-4 bg-background/50 rounded-xl hover:bg-background/80 transition-colors group">
                          <BookOpen className="w-5 h-5 text-red-500 flex-shrink-0" />
                          <div className="flex-1">
                            <h4 className="font-semibold text-sm group-hover:text-primary transition-colors">Long-Distance BDSM</h4>
                          </div>
                          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                        </Link>

                        <Link to="/blog/kink-on-budget" className="flex items-center gap-3 p-4 bg-background/50 rounded-xl hover:bg-background/80 transition-colors group">
                          <BookOpen className="w-5 h-5 text-red-500 flex-shrink-0" />
                          <div className="flex-1">
                            <h4 className="font-semibold text-sm group-hover:text-primary transition-colors">Kink on a Budget</h4>
                          </div>
                          <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                        </Link>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-foreground mb-4">Take Our Quiz</h3>
                      <Link to="/quiz/bdsm" className="flex items-center gap-4 p-6 bg-background/50 rounded-xl hover:bg-background/80 transition-colors border border-border group">
                        <Brain className="w-8 h-8 text-red-500 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold group-hover:text-primary transition-colors">BDSM & Kink Quiz</h4>
                          <p className="text-sm text-muted-foreground">25 questions to discover your kink profile and preferences</p>
                        </div>
                      </Link>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-foreground mb-4">Essential Books</h3>
                      <div className="space-y-3">
                        <div className="bg-background/50 rounded-xl p-4">
                          <h4 className="font-semibold text-foreground mb-1">The New Topping Book & The New Bottoming Book</h4>
                          <p className="text-sm mb-2">by Dossie Easton & Janet Hardy</p>
                          <p className="text-xs text-muted-foreground">Essential guides for Dominants and submissives covering techniques, psychology, and ethics.</p>
                        </div>

                        <div className="bg-background/50 rounded-xl p-4">
                          <h4 className="font-semibold text-foreground mb-1">SM 101: A Realistic Introduction</h4>
                          <p className="text-sm mb-2">by Jay Wiseman</p>
                          <p className="text-xs text-muted-foreground">Comprehensive beginner's guide covering safety, techniques, and psychology.</p>
                        </div>

                        <div className="bg-background/50 rounded-xl p-4">
                          <h4 className="font-semibold text-foreground mb-1">Screw the Roses, Send Me the Thorns</h4>
                          <p className="text-sm mb-2">by Philip Miller & Molly Devon</p>
                          <p className="text-xs text-muted-foreground">Illustrated guide to BDSM with humor, safety info, and practical advice.</p>
                        </div>

                        <div className="bg-background/50 rounded-xl p-4">
                          <h4 className="font-semibold text-foreground mb-1">The Loving Dominant</h4>
                          <p className="text-sm mb-2">by John Warren</p>
                          <p className="text-xs text-muted-foreground">Guide for Dominants emphasizing care, responsibility, and ethical power exchange.</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold text-foreground mb-4">Additional Guides</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <Link to="/start/beginner-faq" className="flex items-center gap-3 p-4 bg-background/50 rounded-xl hover:bg-background/80 transition-colors group">
                          <span className="text-foreground group-hover:text-primary transition-colors">→ Beginner Lifestyle FAQ</span>
                        </Link>
                        <Link to="/start/consent-basics" className="flex items-center gap-3 p-4 bg-background/50 rounded-xl hover:bg-background/80 transition-colors group">
                          <span className="text-foreground group-hover:text-primary transition-colors">→ Consent Basics Guide</span>
                        </Link>
                        <Link to="/start/etiquette" className="flex items-center gap-3 p-4 bg-background/50 rounded-xl hover:bg-background/80 transition-colors group">
                          <span className="text-foreground group-hover:text-primary transition-colors">→ Lifestyle Etiquette</span>
                        </Link>
                        <Link to="/guide/safety" className="flex items-center gap-3 p-4 bg-background/50 rounded-xl hover:bg-background/80 transition-colors group">
                          <span className="text-foreground group-hover:text-primary transition-colors">→ Safety Resources</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Final CTA */}
              <section className="mb-16">
                <div className="bg-gradient-to-r from-red-500/20 via-orange-500/20 to-red-500/20 rounded-2xl p-8 md:p-12 border border-red-500/30 text-center">
                  <h2 className="text-3xl font-bold mb-4">Ready to Explore BDSM & Kink?</h2>
                  <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Join thousands of kinksters exploring BDSM safely and consensually on SPICE. Connect with like-minded people, find play partners, and build your kinky community.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      to="/download"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-full transition-all text-lg shadow-lg"
                    >
                      <Users className="w-5 h-5" />
                      Join SPICE Free
                    </Link>
                    <Link
                      to="/quiz/bdsm"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-background/50 hover:bg-background/80 border border-border font-semibold rounded-full transition-all text-lg"
                    >
                      <Brain className="w-5 h-5" />
                      Take the BDSM Quiz
                    </Link>
                  </div>
                </div>
              </section>

            </article>
          </div>
        </main>

        <FooterSection />
      </div>
    </>
  );
};

export default BDSMGuide;
