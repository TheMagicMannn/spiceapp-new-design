import { Link } from "react-router-dom";
import { Users, Shield, Calendar, Heart, CheckCircle, Sparkles, PartyPopper, MessageCircle, AlertCircle, ExternalLink, BookOpen, Brain, Flame } from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";

const SwingersGuide = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Complete Swingers Guide 2025: Etiquette, Parties, Clubs & Lifestyle Tips",
    "description": "Ultimate guide to the swinging lifestyle. Learn swinger etiquette, how to find parties, club rules, communication tips, and safety for couples and singles exploring swinging.",
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
      "@id": "https://thespiceapp.com/lifestyle/swingers-guide"
    },
    "wordCount": "5000"
  };

  return (
    <>
      <SEO
        title="Complete Swingers Guide 2025: Etiquette, Parties & Clubs | SPICE"
        description="Ultimate swingers guide: What is swinging, couple swapping etiquette, finding swinger parties, club rules, soft vs full swap, safety tips. 5000+ word comprehensive guide for couples and singles."
        keywords="swingers guide, swinging lifestyle, swinger parties, swinger clubs, swinger etiquette, couple swapping, soft swap, full swap, lifestyle parties, swingers for couples, lifestyle dating, ethical non-monogamy"
        canonical="https://thespiceapp.com/lifestyle/swingers-guide"
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Users className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Lifestyle Guide</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                The Complete Swingers Guide
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Everything couples and singles need to know about the swinging lifestyle: etiquette, parties, clubs, communication, and safety. Your comprehensive resource for exploring with confidence.
              </p>
            </div>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-3 gap-4 mb-12">
              <Link to="/quiz/swinging" className="flex items-center gap-4 p-4 bg-card/50 backdrop-blur-sm border border-border rounded-xl hover:border-primary/50 transition-all group">
                <Brain className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold group-hover:text-primary transition-colors">Take the Quiz</h3>
                  <p className="text-sm text-muted-foreground">Assess your readiness</p>
                </div>
              </Link>
              <Link to="/blog/swinging-101" className="flex items-center gap-4 p-4 bg-card/50 backdrop-blur-sm border border-border rounded-xl hover:border-primary/50 transition-all group">
                <BookOpen className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold group-hover:text-primary transition-colors">Beginner's Guide</h3>
                  <p className="text-sm text-muted-foreground">Start here if you're new</p>
                </div>
              </Link>
              <Link to="/download" className="flex items-center gap-4 p-4 bg-card/50 backdrop-blur-sm border border-border rounded-xl hover:border-primary/50 transition-all group">
                <Users className="w-6 h-6 text-primary flex-shrink-0" />
                <div>
                  <h3 className="font-semibold group-hover:text-primary transition-colors">Join SPICE</h3>
                  <p className="text-sm text-muted-foreground">Connect with others</p>
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
                    <CheckCircle className="w-4 h-4" /> What is Swinging?
                  </a>
                  <a href="#for-couples" className="text-primary hover:underline flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Swinging for Couples
                  </a>
                  <a href="#for-singles" className="text-primary hover:underline flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Swinging for Singles
                  </a>
                  <a href="#types" className="text-primary hover:underline flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Types of Swinging
                  </a>
                  <a href="#getting-started" className="text-primary hover:underline flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Getting Started
                  </a>
                  <a href="#communication" className="text-primary hover:underline flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Communication & Boundaries
                  </a>
                  <a href="#first-time" className="text-primary hover:underline flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Your First Experience
                  </a>
                  <a href="#parties" className="text-primary hover:underline flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Swinger Parties
                  </a>
                  <a href="#clubs" className="text-primary hover:underline flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Swinger Clubs
                  </a>
                  <a href="#etiquette" className="text-primary hover:underline flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Essential Etiquette
                  </a>
                  <a href="#jealousy" className="text-primary hover:underline flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Managing Jealousy
                  </a>
                  <a href="#safety" className="text-primary hover:underline flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Safety & Health
                  </a>
                  <a href="#finding" className="text-primary hover:underline flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Finding Partners
                  </a>
                  <a href="#mistakes" className="text-primary hover:underline flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Common Mistakes
                  </a>
                  <a href="#resources" className="text-primary hover:underline flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" /> Resources & Next Steps
                  </a>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <article className="prose prose-lg max-w-none">
              
              {/* What is Swinging */}
              <section id="what-is" className="mb-16 scroll-mt-24">
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <Users className="w-8 h-8 text-primary" />
                    What is Swinging?
                  </h2>
                  
                  <div className="space-y-6 text-muted-foreground">
                    <p className="text-lg leading-relaxed">
                      Swinging, also known as "the lifestyle," is a form of ethical non-monogamy where committed couples consensually engage in sexual activities with other people—typically other couples, but sometimes singles. The key word here is <strong className="text-foreground">consensual</strong>: all parties are aware, agreeing, and enthusiastic participants.
                    </p>

                    <p className="leading-relaxed">
                      Unlike cheating or affairs, swinging happens with full transparency and mutual agreement. Many couples find that swinging adds excitement to their relationship, allows them to explore fantasies together, and deepens their connection through shared experiences. It's not about replacing your partner or fixing a broken relationship—it's about enhancement and adventure for couples who are already secure and communicative.
                    </p>

                    <div className="bg-primary/10 border border-primary/30 rounded-xl p-6 my-6">
                      <h3 className="text-xl font-semibold mb-3 text-foreground flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-primary" />
                        Key Characteristics of Swinging:
                      </h3>
                      <ul className="space-y-2 text-foreground">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span><strong>Consensual:</strong> All parties agree and can say no at any time</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span><strong>Recreational:</strong> Primarily focused on sexual fun, not emotional relationships</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span><strong>Together:</strong> Couples typically play in the same room or at the same event</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span><strong>Social:</strong> Strong community with events, clubs, and online platforms</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span><strong>Boundaries-Based:</strong> Each couple defines their own rules and limits</span>
                        </li>
                      </ul>
                    </div>

                    <p className="leading-relaxed">
                      Swinging differs from polyamory (where people pursue multiple romantic relationships) and open relationships (where couples may date or play separately). In swinging, the emphasis is usually on shared sexual experiences as a couple, not forming deep emotional bonds with play partners—though friendships certainly develop!
                    </p>
                  </div>
                </div>
              </section>

              {/* For Couples */}
              <section id="for-couples" className="mb-16 scroll-mt-24">
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <Heart className="w-8 h-8 text-primary" />
                    Swinging for Couples
                  </h2>
                  
                  <div className="space-y-6 text-muted-foreground">
                    <p className="text-lg leading-relaxed">
                      For most couples, swinging is about experiencing sexual variety and adventure <em>together</em> while maintaining their primary relationship as the foundation. It requires exceptional communication, trust, and emotional maturity.
                    </p>

                    <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Why Couples Choose Swinging</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-background/50 rounded-xl p-6">
                        <h4 className="font-semibold text-foreground mb-2">Sexual Variety</h4>
                        <p className="text-sm">Experience different partners while staying emotionally committed to each other</p>
                      </div>
                      <div className="bg-background/50 rounded-xl p-6">
                        <h4 className="font-semibold text-foreground mb-2">Shared Adventure</h4>
                        <p className="text-sm">Create exciting memories and experiences as a team</p>
                      </div>
                      <div className="bg-background/50 rounded-xl p-6">
                        <h4 className="font-semibold text-foreground mb-2">Fantasy Fulfillment</h4>
                        <p className="text-sm">Explore fantasies like threesomes, same-room play, or voyeurism safely</p>
                      </div>
                      <div className="bg-background/50 rounded-xl p-6">
                        <h4 className="font-semibold text-foreground mb-2">Relationship Enhancement</h4>
                        <p className="text-sm">Many report improved communication, trust, and intimacy with their primary partner</p>
                      </div>
                    </div>

                    <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">What Successful Swinging Couples Have in Common</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <strong className="text-foreground">Strong Foundation:</strong> A stable, secure relationship of at least 1-2 years (ideally longer)
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <strong className="text-foreground">Excellent Communication:</strong> Ability to discuss desires, fears, and boundaries openly
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <strong className="text-foreground">Emotional Security:</strong> No major trust issues or relationship problems to "fix"
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <strong className="text-foreground">Mutual Enthusiasm:</strong> Both partners genuinely want this (not coerced or "going along")
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <strong className="text-foreground">Jealousy Management:</strong> Ability to process and communicate jealous feelings constructively
                        </div>
                      </li>
                    </ul>

                    <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 my-6">
                      <p className="text-sm text-foreground flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span><strong>Not sure if you're ready?</strong> Take our <Link to="/quiz/swinging" className="text-primary hover:underline">Swinging Readiness Quiz</Link> to assess your relationship's foundation, communication, trust, and boundaries before taking the plunge.</span>
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* For Singles */}
              <section id="for-singles" className="mb-16 scroll-mt-24">
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <Users className="w-8 h-8 text-primary" />
                    Swinging for Singles
                  </h2>
                  
                  <div className="space-y-6 text-muted-foreground">
                    <p className="text-lg leading-relaxed">
                      Singles can absolutely participate in the swinging lifestyle! In fact, many couples actively seek single men (often called "bulls" or "male thirds") and single women (affectionately termed "unicorns" because they're rare and highly desired). However, the dynamics and expectations differ significantly from being part of a couple.
                    </p>

                    <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Single Women in Swinging</h3>
                    <p className="leading-relaxed">
                      Single bisexual or bi-curious women are <strong className="text-foreground">highly sought after</strong> in the swinging community. Many couples specifically look for women to join them for threesomes or full swap scenarios. This puts single women in a position of significant choice and power.
                    </p>
                    
                    <div className="bg-background/50 rounded-xl p-6 my-4">
                      <h4 className="font-semibold text-foreground mb-3">Tips for Single Women:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span><strong className="text-foreground">Set Your Boundaries:</strong> You're sought after, so don't feel pressured to do anything you're not comfortable with</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span><strong className="text-foreground">Choose Respectful Couples:</strong> Look for couples who treat you as an equal partner, not an accessory to their fantasy</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span><strong className="text-foreground">Communicate Clearly:</strong> Be upfront about what you do and don't enjoy sexually</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span><strong className="text-foreground">Don't Be Used:</strong> If a couple is fighting or trying to "fix" their relationship with you, walk away</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span><strong className="text-foreground">Build Connections:</strong> Many single women form ongoing friendships with couples they play with regularly</span>
                        </li>
                      </ul>
                    </div>

                    <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Single Men in Swinging</h3>
                    <p className="leading-relaxed">
                      Single men face more challenges in the lifestyle due to oversupply and demand dynamics. However, <strong className="text-foreground">successful single men do exist</strong> and thrive by being respectful, patient, and building genuine connections.
                    </p>

                    <div className="bg-background/50 rounded-xl p-6 my-4">
                      <h4 className="font-semibold text-foreground mb-3">Tips for Single Men:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span><strong className="text-foreground">Be Patient:</strong> Competition is high, so don't get discouraged. Focus on quality connections over quantity</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span><strong className="text-foreground">Respect Boundaries:</strong> Never pressure, pursue aggressively, or contact one partner without the other's knowledge</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span><strong className="text-foreground">Bring More Than Looks:</strong> Be interesting, conversational, and emotionally intelligent. Couples value connection, not just physical attributes</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span><strong className="text-foreground">Hygiene is Critical:</strong> Impeccable grooming, fresh breath, clean nails—details matter immensely</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span><strong className="text-foreground">Attend Social Events:</strong> Meet-and-greets and lifestyle parties help you build reputation as trustworthy and fun</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span><strong className="text-foreground">Accept Rejection Gracefully:</strong> Couples will say no often—respond with "no problem, have fun!" and move on</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span><strong className="text-foreground">Never Create Drama:</strong> Don't try to come between couples or develop feelings you shouldn't. Stay drama-free</span>
                        </li>
                      </ul>
                    </div>

                    <p className="leading-relaxed text-sm italic">
                      <strong>Note:</strong> Some clubs have restrictions on single men on certain nights (often Saturday nights when it's busiest). Always check club policies before attending.
                    </p>
                  </div>
                </div>
              </section>

              {/* Types of Swinging */}
              <section id="types" className="mb-16 scroll-mt-24">
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <Sparkles className="w-8 h-8 text-primary" />
                    Types of Swinging
                  </h2>
                  
                  <div className="space-y-6 text-muted-foreground">
                    <p className="leading-relaxed">
                      Not all swinging looks the same! Couples define their own boundaries and comfort levels. Here are the most common variations:
                    </p>

                    <div className="space-y-6 mt-6">
                      <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/30 rounded-xl p-6">
                        <h3 className="text-xl font-semibold text-foreground mb-3">Soft Swap</h3>
                        <p className="mb-3">
                          Couples engage in sexual activities like kissing, touching, oral sex, and foreplay with others, but <strong className="text-foreground">not intercourse</strong>. This is a popular starting point for new couples.
                        </p>
                        <p className="text-sm">
                          <strong className="text-foreground">Best for:</strong> Beginners, couples testing boundaries, those who want intimacy without full penetrative sex
                        </p>
                      </div>

                      <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/30 rounded-xl p-6">
                        <h3 className="text-xl font-semibold text-foreground mb-3">Full Swap</h3>
                        <p className="mb-3">
                          Couples engage in all sexual activities including intercourse with other people. This requires higher trust levels and clear communication.
                        </p>
                        <p className="text-sm">
                          <strong className="text-foreground">Best for:</strong> Experienced couples, those with strong relationship foundations, couples who've done soft swap and want more
                        </p>
                      </div>

                      <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-xl p-6">
                        <h3 className="text-xl font-semibold text-foreground mb-3">Same Room Swapping</h3>
                        <p className="mb-3">
                          Couples play with other partners but everyone stays in the same physical space. This allows partners to see each other and maintain connection.
                        </p>
                        <p className="text-sm">
                          <strong className="text-foreground">Best for:</strong> Couples who want to maintain visual/emotional connection, voyeurism/exhibitionism enthusiasts
                        </p>
                      </div>

                      <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/30 rounded-xl p-6">
                        <h3 className="text-xl font-semibold text-foreground mb-3">Separate Room Swapping</h3>
                        <p className="mb-3">
                          Couples split up to play with others in different rooms or locations. This requires higher trust and security.
                        </p>
                        <p className="text-sm">
                          <strong className="text-foreground">Best for:</strong> Experienced couples, those comfortable with more independence, couples without voyeuristic desires
                        </p>
                      </div>

                      <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-6">
                        <h3 className="text-xl font-semibold text-foreground mb-3">Threesomes (MFF or MMF)</h3>
                        <p className="mb-3">
                          A couple invites a single person (male or female) to join them. MFF (two women, one man) is more common than MMF.
                        </p>
                        <p className="text-sm">
                          <strong className="text-foreground">Best for:</strong> Couples exploring group play, those with specific fantasies, gradual introduction to the lifestyle
                        </p>
                      </div>

                      <div className="bg-gradient-to-br from-yellow-500/10 to-amber-500/10 border border-yellow-500/30 rounded-xl p-6">
                        <h3 className="text-xl font-semibold text-foreground mb-3">Voyeurism/Exhibitionism</h3>
                        <p className="mb-3">
                          Some couples enjoy watching others or being watched, without necessarily participating in physical activity themselves.
                        </p>
                        <p className="text-sm">
                          <strong className="text-foreground">Best for:</strong> Absolute beginners, couples testing the waters, those who enjoy the social/visual aspects
                        </p>
                      </div>
                    </div>

                    <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 my-6">
                      <p className="text-sm text-foreground flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span><strong>Remember:</strong> You can start with one type and evolve. Many couples begin with soft swap or voyeurism and gradually explore more as their comfort grows. There's no pressure to do it all—find what works for YOUR relationship. Read more in <Link to="/blog/swinging-soft-full-swap" className="text-primary hover:underline">Soft Swap vs Full Swap: What's Right for You?</Link></span>
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Getting Started */}
              <section id="getting-started" className="mb-16 scroll-mt-24">
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <Calendar className="w-8 h-8 text-primary" />
                    Getting Started: Your Step-by-Step Journey
                  </h2>
                  
                  <div className="space-y-6 text-muted-foreground">
                    <p className="text-lg leading-relaxed">
                      Starting in the swinging lifestyle isn't about rushing into a club or party. It's a journey that begins with honest conversations, education, and gradual exploration.
                    </p>

                    <div className="space-y-6 mt-8">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">1</div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-2">Have "The Talk" with Your Partner</h3>
                          <p className="leading-relaxed mb-3">
                            Bring up the topic gently. Frame it as curiosity, not a demand: "I read an interesting article about..." or "What do you think about couples who..." Watch how they respond. If they're horrified or shut down, don't push—give them time to process.
                          </p>
                          <p className="text-sm">
                            <strong className="text-foreground">Resource:</strong> <Link to="/blog/swinging-101" className="text-primary hover:underline">Swinging 101: The Complete Beginner's Guide</Link>
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">2</div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-2">Educate Yourselves Together</h3>
                          <p className="leading-relaxed mb-3">
                            Read articles, watch documentaries, listen to podcasts about the lifestyle. Discuss what excites you and what makes you nervous. Take the <Link to="/quiz/swinging" className="text-primary hover:underline">Swinging Readiness Quiz</Link> together.
                          </p>
                          <p className="text-sm">
                            <strong className="text-foreground">Resource:</strong> <Link to="/start/beginner-faq" className="text-primary hover:underline">Beginner Lifestyle FAQ</Link>
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">3</div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-2">Define Your Boundaries</h3>
                          <p className="leading-relaxed mb-3">
                            Create a "yes/no/maybe" list together. Discuss: soft swap vs. full swap? Same room only? Can you kiss? Oral? What about ongoing friendships with play partners? Write it down. Revisit it regularly as your comfort evolves.
                          </p>
                          <p className="text-sm">
                            <strong className="text-foreground">Resource:</strong> <Link to="/start/consent-basics" className="text-primary hover:underline">Consent Basics Guide</Link>
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">4</div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-2">Create Profiles on Lifestyle Apps</h3>
                          <p className="leading-relaxed mb-3">
                            Join <Link to="/download" className="text-primary hover:underline">SPICE</Link> or other lifestyle dating platforms. Create an honest profile together. Start chatting with other couples, get a feel for the community. No pressure to meet anyone yet—just explore.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">5</div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-2">Attend a Meet-and-Greet</h3>
                          <p className="leading-relaxed mb-3">
                            These are social, non-sexual events at bars or restaurants where lifestyle people gather. It's like a mixer—dress nicely, have drinks, chat with couples. Zero pressure to play. Get comfortable with the community first.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">6</div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-2">Visit a Lifestyle Club (Just to Watch)</h3>
                          <p className="leading-relaxed mb-3">
                            Many couples first visit clubs with the agreement to only observe and be together. Dance, socialize, explore the playrooms, but keep to yourselves. This lets you experience the environment without performance pressure.
                          </p>
                          <p className="text-sm">
                            <strong className="text-foreground">Resource:</strong> See the <a href="#clubs" className="text-primary hover:underline">Swinger Clubs section</a> below for what to expect
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">7</div>
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-2">Your First Play Experience</h3>
                          <p className="leading-relaxed mb-3">
                            When you're both ready and excited (not nervous-scared), arrange a date with another couple or single. Meet for drinks first—chemistry matters! If everyone clicks, move forward at whatever pace feels right. Use your safe word if needed. Debrief afterward.
                          </p>
                          <p className="text-sm">
                            <strong className="text-foreground">Resource:</strong> <Link to="/blog/swinging-mistakes" className="text-primary hover:underline">Common Mistakes New Swingers Make</Link>
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
                        There's no "right" timeline. Some couples talk for months before their first experience. Others move faster. What matters is that BOTH partners are genuinely enthusiastic, not just one dragging the other along. Many successful couples take 3-6 months from first conversation to first play date. Slow and steady wins the race.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Communication & Boundaries */}
              <section id="communication" className="mb-16 scroll-mt-24">
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <MessageCircle className="w-8 h-8 text-primary" />
                    Communication & Boundaries
                  </h2>
                  
                  <div className="space-y-6 text-muted-foreground">
                    <p className="text-lg leading-relaxed">
                      If there's one universal truth about successful swinging, it's this: <strong className="text-foreground">communication is everything</strong>. Couples who thrive in the lifestyle talk—a lot. About desires, fears, boundaries, jealousy, and what worked or didn't after each experience.
                    </p>

                    <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Essential Conversations to Have</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-background/50 rounded-xl p-6">
                        <h4 className="font-semibold text-foreground mb-2">Before You Start:</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Why are we interested in this? What do we hope to gain?</li>
                          <li>• What are our hard boundaries (activities we absolutely won't do)?</li>
                          <li>• What are our soft boundaries (things we might try but aren't sure about)?</li>
                          <li>• How will we handle it if one of us wants to stop mid-encounter?</li>
                          <li>• Can we develop friendships with play partners or is it strictly recreational?</li>
                          <li>• What does "safe sex" mean to us? Condoms always? Even for oral?</li>
                          <li>• How do we feel about playing separately vs. together only?</li>
                        </ul>
                      </div>

                      <div className="bg-background/50 rounded-xl p-6">
                        <h4 className="font-semibold text-foreground mb-2">After Each Experience:</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• What did you enjoy most?</li>
                          <li>• Was there anything that made you uncomfortable?</li>
                          <li>• How do you feel about me/us right now?</li>
                          <li>• Should we adjust any boundaries going forward?</li>
                          <li>• Would you want to play with those people again?</li>
                        </ul>
                      </div>
                    </div>

                    <h3 className="text-2xl font-semibold text-foreground mt-8 mb-4">Creating Your Boundaries Agreement</h3>
                    <p className="leading-relaxed mb-4">
                      Many couples create a written boundaries agreement. It's not a legal contract—it's a living document you update as you learn and grow. Here's a template to start:
                    </p>

                    <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                      <h4 className="font-semibold text-foreground mb-4">Sample Boundaries to Discuss:</h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <strong className="text-foreground block mb-2">Sexual Activities:</strong>
                          <ul className="space-y-1 ml-4">
                            <li>☐ Kissing allowed?</li>
                            <li>☐ Oral sex (giving/receiving)?</li>
                            <li>☐ Intercourse?</li>
                            <li>☐ Anal play?</li>
                            <li>☐ Use of toys?</li>
                          </ul>
                        </div>
                        <div>
                          <strong className="text-foreground block mb-2">Logistics:</strong>
                          <ul className="space-y-1 ml-4">
                            <li>☐ Same room only?</li>
                            <li>☐ Can play separately?</li>
                            <li>☐ Our home OK? Their home? Hotels only?</li>
                            <li>☐ Overnight stays?</li>
                            <li>☐ Can we text play partners between dates?</li>
                          </ul>
                        </div>
                        <div>
                          <strong className="text-foreground block mb-2">Emotional Boundaries:</strong>
                          <ul className="space-y-1 ml-4">
                            <li>☐ Ongoing friendships OK?</li>
                            <li>☐ Can we develop feelings?</li>
                            <li>☐ How much detail do we share about encounters?</li>
                            <li>☐ Is this purely recreational?</li>
                          </ul>
                        </div>
                        <div>
                          <strong className="text-foreground block mb-2">Safety:</strong>
                          <ul className="space-y-1 ml-4">
                            <li>☐ Condoms required for all penetration?</li>
                            <li>☐ STI testing frequency?</li>
                            <li>☐ Safe word/signal to stop?</li>
                            <li>☐ Can we veto potential partners?</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6 my-6">
                      <p className="text-sm text-foreground flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span><strong>Important:</strong> Boundaries can and should evolve. What felt scary at first might become comfortable later. What you thought you'd enjoy might not work in reality. Check in regularly and adjust. Flexibility is key. Learn more in <Link to="/blog/swinging-marriage" className="text-primary hover:underline">How Swinging Strengthened Our Marriage</Link>.</span>
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Continue with remaining sections... */}
              {/* I'll create a separate message for the rest due to length */}

            </article>
          </div>
        </main>

        <FooterSection />
      </div>
    </>
  );
};

export default SwingersGuide;