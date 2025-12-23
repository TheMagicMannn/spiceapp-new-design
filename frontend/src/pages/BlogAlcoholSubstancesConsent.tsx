import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Wine, Brain, AlertTriangle, CheckCircle, Users, BookOpen, Shield, Heart } from "lucide-react";

const BlogAlcoholSubstancesConsent = () => {
  return (
    <>
      <SEO
        title="Alcohol, Substances, and Consent: Why a Clear Head Makes Everything Better | SPICE"
        description="Explore how intoxication affects decision-making in lifestyle encounters. Learn about setting personal limits and creating group agreements for parties or dates."
        keywords="alcohol and consent, substances consent, intoxication consent, sober consent, lifestyle parties alcohol, clear-headed consent, drunk consent, substance use boundaries"
        canonical="https://thespiceapp.com/blog/alcohol-substances-consent"
      />

      <div className="relative min-h-screen">
        <ParticlesBackground />
        <Header />
        <Breadcrumbs />
        
        <main className="relative z-10 pt-32 pb-12">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Article Header */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold text-green-500 bg-green-500/10 px-3 py-1 rounded-full">CONSENT & SAFETY</span>
                <span className="text-xs text-muted-foreground">12 min read</span>
                <span className="text-xs text-muted-foreground">Updated January 2025</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
                Alcohol, Substances, and Consent: Why a Clear Head Makes Everything Better
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                That glass of wine might loosen inhibitions, but it can also blur the lines of consent. Here's how to enjoy yourself responsibly while protecting everyone involved.
              </p>
            </div>

            {/* Featured Section */}
            <div className="bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-500/20 rounded-2xl p-12 mb-12 text-center border border-amber-500/30">
              <Brain className="w-16 h-16 text-amber-500 mx-auto mb-4" />
              <p className="text-muted-foreground">Clear Mind, Better Connections</p>
            </div>

            {/* Key Warning */}
            <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 mb-12">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-red-400 mb-2">The Core Principle:</h3>
                  <p className="text-muted-foreground">
                    <strong>An intoxicated person cannot give valid consent.</strong> This isn't just an ethical guideline—it's the law in most jurisdictions. If someone is drunk, high, or otherwise impaired, they cannot legally consent to sexual activity.
                  </p>
                </div>
              </div>
            </div>

            {/* Table of Contents */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 mb-12">
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-amber-500" />
                In This Guide
              </h2>
              <ul className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                <li><a href="#how-intoxication-affects" className="hover:text-amber-500">→ How Intoxication Affects Consent</a></li>
                <li><a href="#spectrum" className="hover:text-amber-500">→ The Intoxication Spectrum</a></li>
                <li><a href="#personal-limits" className="hover:text-amber-500">→ Setting Personal Limits</a></li>
                <li><a href="#party-agreements" className="hover:text-amber-500">→ Group Agreements for Parties</a></li>
                <li><a href="#pre-negotiation" className="hover:text-amber-500">→ Pre-Negotiating While Sober</a></li>
                <li><a href="#substances" className="hover:text-amber-500">→ Beyond Alcohol: Other Substances</a></li>
                <li><a href="#recognizing-impairment" className="hover:text-amber-500">→ Recognizing Impairment</a></li>
                <li><a href="#hosting-responsibly" className="hover:text-amber-500">→ Hosting Responsibly</a></li>
              </ul>
            </div>

            {/* Article Content */}
            <article className="prose prose-invert max-w-none">
              <section id="how-intoxication-affects" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Brain className="w-8 h-8 text-amber-500" />
                  How Intoxication Affects Consent
                </h2>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Alcohol and other substances don't just lower inhibitions—they fundamentally impair the cognitive processes required for meaningful consent. Understanding this helps us make better decisions.
                </p>

                <div className="bg-amber-900/20 border border-amber-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-4">What Substances Impair:</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Judgment:</strong> Ability to assess risks, evaluate partners, and make informed decisions about activities.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Communication:</strong> Ability to clearly express desires, limits, and when something doesn't feel right.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Perception:</strong> Ability to read others' signals and notice when consent is being withdrawn.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Memory:</strong> Ability to remember agreements, boundaries, and even events themselves.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Assertiveness:</strong> Ability to say no, enforce boundaries, or leave uncomfortable situations.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card/50 border border-border rounded-xl p-4 mb-6">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-white">The "Lowered Inhibitions" Myth:</strong> People often say alcohol "removes inhibitions," implying it reveals true desires. But those "inhibitions" often exist for good reasons—protecting us from risks we'd otherwise avoid. Alcohol doesn't reveal your true self; it impairs the self that makes wise decisions.
                  </p>
                </div>
              </section>

              <section id="spectrum" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">The Intoxication Spectrum</h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Not all intoxication is equal. Here's a practical way to think about it:
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-4">
                    <h4 className="font-bold text-green-400 mb-2">✅ Sober to Lightly Buzzed (0-2 drinks)</h4>
                    <p className="text-sm text-muted-foreground">
                      Full capacity for consent. May feel slightly relaxed but judgment, communication, and perception remain intact. This is the safest zone for first encounters or new activities.
                    </p>
                  </div>

                  <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-4">
                    <h4 className="font-bold text-yellow-400 mb-2">⚠️ Moderately Intoxicated (3-4 drinks)</h4>
                    <p className="text-sm text-muted-foreground">
                      Gray zone. Judgment starting to be impaired. Only appropriate with established partners who know you well, have pre-negotiated boundaries, and have enthusiastic sober consent from earlier. New encounters or new activities should wait.
                    </p>
                  </div>

                  <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-4">
                    <h4 className="font-bold text-red-400 mb-2">🛑 Significantly Intoxicated (5+ drinks)</h4>
                    <p className="text-sm text-muted-foreground">
                      Cannot give valid consent. Period. Signs include slurred speech, impaired coordination, confusion, emotional volatility. Any sexual activity with someone at this level is assault, regardless of what they "seem" to want.
                    </p>
                  </div>
                </div>

                <div className="bg-card/50 border border-border rounded-xl p-4 mb-6">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-white">Note:</strong> These drink counts are rough estimates. Tolerance varies by body size, food intake, medications, and individual factors. When in doubt, err on the side of caution. A missed opportunity is infinitely better than a consent violation.
                  </p>
                </div>
              </section>

              <section id="personal-limits" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Shield className="w-8 h-8 text-green-500" />
                  Setting Personal Limits
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Before events or dates, decide your own boundaries around substances. Having rules you've committed to beforehand makes it easier to stick to them in the moment.
                </p>

                <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-4">Questions to Ask Yourself:</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>How many drinks is my maximum for an event where play might happen?</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Will I only play with people I already know, or am I open to new connections?</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>What's my policy on playing with someone who has been drinking?</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>How will I pace my drinking throughout the evening?</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>What accountability systems will help me stick to my limits?</span>
                    </li>
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-card/50 border border-border rounded-xl p-4">
                    <h4 className="font-bold text-white mb-2">Sample Personal Rule Set:</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Maximum 2 drinks before any play</li>
                      <li>• No new partners if I've had more than 1 drink</li>
                      <li>• Always eat before drinking</li>
                      <li>• Water between every alcoholic drink</li>
                      <li>• Partner checks in with me at 10 PM</li>
                    </ul>
                  </div>
                  <div className="bg-card/50 border border-border rounded-xl p-4">
                    <h4 className="font-bold text-white mb-2">Accountability Strategies:</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Share your limits with your partner/date</li>
                      <li>• Set phone reminders</li>
                      <li>• Track drinks with an app</li>
                      <li>• Pre-commit with a buddy</li>
                      <li>• Leave credit card at hotel (cash limits)</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="party-agreements" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Users className="w-8 h-8 text-purple-500" />
                  Group Agreements for Parties
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  When hosting or attending lifestyle parties, explicit group agreements about substances help create safer spaces for everyone.
                </p>

                <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-4">Suggested Party Agreements:</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Early Hours Rule:</strong> Play areas open only during early hours when guests are more likely to be sober.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Designated Sober Host:</strong> Someone stays sober to monitor for safety issues and intervene if needed.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Check-In System:</strong> Regular check-ins between partners and with hosts.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Visible Limits:</strong> Non-alcoholic options prominently displayed; no pressure to drink.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Safe Transport:</strong> Pre-arranged rides or on-site sleeping arrangements.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card/50 border border-border rounded-xl p-4 mb-6">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-white">For Hosts:</strong> Set the tone early. "We love when people have fun, and we want everyone safe. Play spaces close at midnight, and we're here to support anyone who needs a quiet space or ride home."
                  </p>
                </div>
              </section>

              <section id="pre-negotiation" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Pre-Negotiating While Sober</h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  For established partners or planned encounters, discussing boundaries while completely sober creates a foundation for safer play—even if you have a drink or two later.
                </p>

                <div className="bg-amber-900/20 border border-amber-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-4">The Pre-Negotiation Conversation:</h4>
                  <div className="space-y-3 text-muted-foreground">
                    <p><strong className="text-amber-400">Earlier in the day/week, discuss:</strong></p>
                    <ul className="space-y-2 pl-4">
                      <li>• What activities are on/off the table</li>
                      <li>• Your drinking limits and theirs</li>
                      <li>• What would cause you to stop (for either party)</li>
                      <li>• Safe words and check-in signals</li>
                      <li>• What happens if someone feels they've had too much</li>
                    </ul>
                    <p className="mt-4"><strong className="text-amber-400">Document it:</strong> Some couples write their agreements down or text them to each other for reference.</p>
                  </div>
                </div>

                <div className="bg-card/50 border border-border rounded-xl p-4 mb-6">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-white">Important:</strong> Pre-negotiation doesn't replace in-the-moment consent. It creates a foundation, but either person can still change their mind, and ongoing check-ins are still essential.
                  </p>
                </div>
              </section>

              <section id="substances" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Wine className="w-8 h-8 text-red-500" />
                  Beyond Alcohol: Other Substances
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Cannabis, MDMA, and other substances also affect consent capacity—sometimes in less visible ways than alcohol.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-card/50 border border-border rounded-xl p-4">
                    <h4 className="font-bold text-white mb-2">Cannabis</h4>
                    <p className="text-sm text-muted-foreground">
                      Can impair judgment and communication while feeling "clearheaded." Affects time perception and can make it harder to recognize discomfort. Same consent rules apply as alcohol.
                    </p>
                  </div>

                  <div className="bg-card/50 border border-border rounded-xl p-4">
                    <h4 className="font-bold text-white mb-2">MDMA/Ecstasy</h4>
                    <p className="text-sm text-muted-foreground">
                      Creates artificial feelings of connection and love. Severely impairs judgment about people and situations. The emotional warmth is chemical, not relational—consent given under MDMA influence is not informed consent.
                    </p>
                  </div>

                  <div className="bg-card/50 border border-border rounded-xl p-4">
                    <h4 className="font-bold text-white mb-2">GHB/GBL</h4>
                    <p className="text-sm text-muted-foreground">
                      Extremely dangerous. Small dose differences can mean the difference between mild effects and unconsciousness. Has been used for assault. Never accept drinks from strangers; watch your drink being made.
                    </p>
                  </div>

                  <div className="bg-card/50 border border-border rounded-xl p-4">
                    <h4 className="font-bold text-white mb-2">Prescription Medications</h4>
                    <p className="text-sm text-muted-foreground">
                      Many medications affect judgment, especially combined with alcohol. Be aware of your own medications' effects and ask partners about theirs.
                    </p>
                  </div>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-4 mb-6">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-red-400">Zero Tolerance Zone:</strong> If someone is noticeably impaired by any substance, sexual activity is off the table. Period. The type of substance doesn't matter—impairment is impairment.
                  </p>
                </div>
              </section>

              <section id="recognizing-impairment" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Recognizing Impairment in Others</h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Part of being a responsible community member is recognizing when someone is too impaired for consent—even if they're saying "yes."
                </p>

                <div className="bg-amber-900/20 border border-amber-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-4">Warning Signs of Significant Impairment:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>🚩 Slurred or slow speech</li>
                      <li>🚩 Difficulty walking or standing</li>
                      <li>🚩 Confusion about where they are</li>
                      <li>🚩 Glassy, unfocused eyes</li>
                      <li>🚩 Unusually loud or quiet</li>
                    </ul>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>🚩 Emotional volatility</li>
                      <li>🚩 Doesn't remember earlier conversation</li>
                      <li>🚩 Overly friendly with everyone</li>
                      <li>🚩 Making decisions inconsistent with sober self</li>
                      <li>🚩 Others are "looking after" them</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-card/50 border border-border rounded-xl p-4 mb-6">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-white">The "But They Seemed Into It" Defense:</strong> This never holds up—not ethically, not legally. An impaired person might enthusiastically participate in things their sober self would never consent to. That enthusiasm is the intoxication, not informed consent.
                  </p>
                </div>
              </section>

              <section id="hosting-responsibly" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Heart className="w-8 h-8 text-pink-500" />
                  Hosting Responsibly
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  If you host parties, you set the culture around alcohol and consent. Here's how to create safer spaces:
                </p>

                <div className="bg-pink-900/20 border border-pink-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-4">Host Responsibilities:</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Provide alternatives:</strong> Quality non-alcoholic options, not just water.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Food is essential:</strong> Serve substantial food, not just snacks.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Pace the bar:</strong> Consider closing the bar or limiting access after certain hours.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Designate monitors:</strong> Have trusted, sober people watching for issues.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Safe spaces:</strong> Quiet rooms for people who need to decompress.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Clear communication:</strong> State expectations about consent and substances upfront.</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Final Section */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">The Bottom Line</h2>

                <div className="bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-green-500/20 rounded-xl p-6 border border-green-500/30 mb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    The best sexual experiences happen when everyone is present, aware, and genuinely choosing to participate. That requires clear heads. A drink or two might relax you, but anything beyond that diminishes the experience—both the pleasure and the safety.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    <strong className="text-white">The lifestyle community has a responsibility to model excellent consent practices.</strong> That means prioritizing sober, enthusiastic participation over chemical disinhibition. The connections you make when everyone is truly present are infinitely more meaningful than anything that happens in a blur.
                  </p>
                </div>

                <div className="bg-card/50 border border-border rounded-xl p-4">
                  <p className="text-muted-foreground text-center">
                    Clear heads make better lovers. Protect yourself, protect others, and create experiences worth remembering.
                  </p>
                </div>
              </section>
            </article>

            {/* Related Articles */}
            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="text-xl font-bold mb-6">Related Articles</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Link to="/blog/consent-golden-rules" className="bg-card/50 border border-border rounded-xl p-4 hover:border-green-500/50 transition-colors">
                  <h4 className="font-bold text-white mb-2">The Golden Rules of Consent</h4>
                  <p className="text-sm text-muted-foreground">Master enthusiastic consent in any encounter.</p>
                </Link>
                <Link to="/blog/consent-check-ins-sexy" className="bg-card/50 border border-border rounded-xl p-4 hover:border-pink-500/50 transition-colors">
                  <h4 className="font-bold text-white mb-2">Consent Check-Ins: Sexy Phrases</h4>
                  <p className="text-sm text-muted-foreground">Keep things hot while staying safe.</p>
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

export default BlogAlcoholSubstancesConsent;
