import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Brain, Heart, AlertTriangle, CheckCircle, BookOpen, Shield, Sparkles, MessageCircle } from "lucide-react";

const BlogKinkMentalHealth = () => {
  return (
    <>
      <SEO
        title="Kink and Mental Health: How BDSM Can Heal, Harm, or Help You Grow | SPICE"
        description="Honest exploration of BDSM's impact on mental health. Learn about catharsis, trauma processing, therapy compatibility, and red flags to watch for in kink."
        keywords="BDSM mental health, kink therapy, BDSM psychology, trauma and BDSM, catharsis kink, kink-aware therapy, BDSM emotional health, healthy BDSM"
        canonical="https://thespiceapp.com/blog/kink-mental-health"
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
                <span className="text-xs font-semibold text-red-500 bg-red-500/10 px-3 py-1 rounded-full">BDSM & KINK</span>
                <span className="text-xs text-muted-foreground">17 min read</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Kink and Mental Health: How BDSM Can Heal, Harm, or Help You Grow
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                An honest, nuanced look at the relationship between BDSM and psychological well-being. When kink supports mental health, when it doesn't, and how to tell the difference.
              </p>
            </div>

            {/* Featured Section */}
            <div className="bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 rounded-2xl p-12 mb-12 text-center border border-purple-500/30">
              <Brain className="w-16 h-16 text-purple-500 mx-auto mb-4" />
              <p className="text-muted-foreground">Mind, Body, and Kink Connection</p>
            </div>

            {/* Important Disclaimer */}
            <div className="bg-amber-900/20 border border-amber-500/30 rounded-xl p-6 mb-12">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-amber-400 mb-2">Important Note:</h3>
                  <p className="text-muted-foreground text-sm">
                    This article is for educational purposes and is not a substitute for professional mental health care. If you're struggling with mental health issues, please consult a qualified therapist—ideally one who is kink-aware or kink-friendly.
                  </p>
                </div>
              </div>
            </div>

            {/* Table of Contents */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 mb-12">
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-purple-500" />
                In This Guide
              </h2>
              <ul className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                <li><a href="#research" className="hover:text-purple-500">→ What Research Says About Kinksters</a></li>
                <li><a href="#healing" className="hover:text-purple-500">→ How BDSM Can Heal</a></li>
                <li><a href="#harm" className="hover:text-purple-500">→ When Kink Can Harm</a></li>
                <li><a href="#trauma" className="hover:text-purple-500">→ BDSM and Trauma</a></li>
                <li><a href="#therapy" className="hover:text-purple-500">→ Finding Kink-Aware Therapists</a></li>
                <li><a href="#red-flags" className="hover:text-purple-500">→ Red Flags to Watch</a></li>
                <li><a href="#self-check" className="hover:text-purple-500">→ Mental Health Self-Check</a></li>
                <li><a href="#resources" className="hover:text-purple-500">→ Resources & Support</a></li>
              </ul>
            </div>

            {/* Article Content */}
            <article className="prose prose-invert max-w-none">
              <section id="research" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Brain className="w-8 h-8 text-purple-500" />
                  What Research Says About Kinksters
                </h2>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  For decades, BDSM was pathologized by mental health professionals. The good news: modern research has largely debunked the myth that kinksters are psychologically damaged.
                </p>

                <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-green-400 mb-4">Key Research Findings:</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong className="text-white">No higher rates of mental illness</strong> — Studies consistently show BDSM practitioners are no more likely to have psychological disorders than the general population</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong className="text-white">Higher relationship satisfaction</strong> — Some studies suggest kinksters report better communication and relationship quality</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong className="text-white">Lower anxiety and depression</strong> — Research by Wismeijer & van Assen (2013) found BDSM practitioners scored better on several psychological measures</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong className="text-white">DSM-5 depathologization</strong> — BDSM interests are no longer considered disorders unless they cause distress or harm</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card/50 border border-border rounded-xl p-4 mb-6">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-white">Important Context:</strong> Research typically studies people in healthy, consensual BDSM practices. The benefits likely come from the communication, trust, and intentionality that good BDSM requires—not from the activities themselves.
                  </p>
                </div>
              </section>

              <section id="healing" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Heart className="w-8 h-8 text-pink-500" />
                  How BDSM Can Heal
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Many kinksters report that BDSM has positively impacted their mental health. Here's how:
                </p>

                <div className="space-y-6 mb-6">
                  <div className="bg-card/50 border border-border rounded-xl p-6">
                    <h4 className="font-bold text-pink-400 mb-3">Catharsis & Emotional Release</h4>
                    <p className="text-muted-foreground text-sm">
                      Intense BDSM scenes can trigger emotional release—crying, screaming, or profound calm. For some, this provides a safe container for emotions that are hard to access otherwise. The neurochemical flood (endorphins, oxytocin) can create genuine relief from emotional tension.
                    </p>
                  </div>

                  <div className="bg-card/50 border border-border rounded-xl p-6">
                    <h4 className="font-bold text-purple-400 mb-3">Mindfulness & Present-Moment Awareness</h4>
                    <p className="text-muted-foreground text-sm">
                      BDSM demands full presence. When you're restrained, receiving impact, or deep in <Link to="/guide/glossary" className="text-purple-400 hover:underline">subspace</Link>, your anxious thoughts about the future or past fade. Many kinksters describe this as meditative—similar to flow states achieved through yoga or meditation.
                    </p>
                  </div>

                  <div className="bg-card/50 border border-border rounded-xl p-6">
                    <h4 className="font-bold text-blue-400 mb-3">Reclaiming Control (Through Surrender)</h4>
                    <p className="text-muted-foreground text-sm">
                      Paradoxically, consensually surrendering control can feel empowering. You choose when, where, with whom, and how much. For people who feel powerless in other areas of life, BDSM offers a structured space where boundaries are clear and respected.
                    </p>
                  </div>

                  <div className="bg-card/50 border border-border rounded-xl p-6">
                    <h4 className="font-bold text-green-400 mb-3">Body Acceptance & Reconnection</h4>
                    <p className="text-muted-foreground text-sm">
                      BDSM involves deep body awareness and often appreciation. Many practitioners report improved body image and reconnection with physical sensation—especially those who had been disconnected from their bodies.
                    </p>
                  </div>

                  <div className="bg-card/50 border border-border rounded-xl p-6">
                    <h4 className="font-bold text-amber-400 mb-3">Community & Belonging</h4>
                    <p className="text-muted-foreground text-sm">
                      The kink community offers acceptance for people who've felt "different" their whole lives. Finding your tribe—people who understand your desires without judgment—can be profoundly healing for social isolation and shame.
                    </p>
                  </div>
                </div>
              </section>

              <section id="harm" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <AlertTriangle className="w-8 h-8 text-red-500" />
                  When Kink Can Harm
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  BDSM isn't automatically healthy or harmful—context matters. Here's when it can become problematic:
                </p>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-red-400 mb-4">Warning Signs:</h4>
                  <ul className="space-y-3 text-muted-foreground text-sm">
                    <li>• <strong className="text-white">Using BDSM to avoid emotions</strong> rather than process them (numbing vs. feeling)</li>
                    <li>• <strong className="text-white">Escalating intensity</strong> to chase a "high" that's harder and harder to achieve</li>
                    <li>• <strong className="text-white">Using BDSM to self-harm</strong> or punish yourself (seeking pain for the wrong reasons)</li>
                    <li>• <strong className="text-white">Compulsive behavior</strong> you can't control, interfering with life responsibilities</li>
                    <li>• <strong className="text-white">Feeling worse after scenes</strong> consistently, not just occasional drop</li>
                    <li>• <strong className="text-white">Staying with abusive partners</strong> because "it's just part of the dynamic"</li>
                    <li>• <strong className="text-white">Using kink to replay trauma</strong> without therapeutic support or processing</li>
                  </ul>
                </div>

                <div className="bg-card/50 border border-border rounded-xl p-4 mb-6">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-white">The Key Question:</strong> Does your BDSM practice leave you feeling more connected, empowered, and emotionally regulated? Or more depleted, ashamed, and destabilized? Honest answers matter.
                  </p>
                </div>
              </section>

              <section id="trauma" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">BDSM and Trauma</h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  The relationship between BDSM and trauma is complex and often misunderstood. Here's a nuanced look:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6">
                    <h4 className="font-bold text-green-400 mb-3">Can Be Healing When:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>✓ Done with therapeutic awareness</li>
                      <li>✓ Chosen freely, not compulsively</li>
                      <li>✓ With a trusted, safe partner</li>
                      <li>✓ Followed by proper processing</li>
                      <li>✓ Feels empowering, not retraumatizing</li>
                      <li>✓ Includes robust aftercare</li>
                    </ul>
                  </div>
                  <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                    <h4 className="font-bold text-red-400 mb-3">Can Be Harmful When:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>✗ Used to unconsciously replay trauma</li>
                      <li>✗ Done compulsively or desperately</li>
                      <li>✗ With partners who push past limits</li>
                      <li>✗ Without processing or integration</li>
                      <li>✗ Feels destabilizing afterward</li>
                      <li>✗ Triggers flashbacks or dissociation</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-3">The "Not Because, But And" Framework:</h4>
                  <p className="text-sm text-muted-foreground">
                    Having trauma history doesn't mean your kink interests stem from trauma. Many trauma survivors enjoy BDSM for reasons completely unrelated to their trauma. The healthiest approach: "I have trauma history AND I enjoy kink—these may or may not be connected, and either way, I can engage healthily with proper support."
                  </p>
                </div>
              </section>

              <section id="therapy" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <MessageCircle className="w-8 h-8 text-blue-500" />
                  Finding Kink-Aware Therapists
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  If you're seeking therapy, finding a kink-aware or kink-friendly therapist prevents having to educate your therapist or face judgment.
                </p>

                <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-4">How to Find One:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong className="text-white">Kink-Aware Professionals Directory (KAP)</strong> — kapprofessionals.org</li>
                    <li>• <strong className="text-white">Psychology Today</strong> — Filter for "kink" or "alternative sexuality"</li>
                    <li>• <strong className="text-white">National Coalition for Sexual Freedom (NCSF)</strong> — Resources and referrals</li>
                    <li>• <strong className="text-white">Local munch communities</strong> — Ask for recommendations</li>
                    <li>• <strong className="text-white">FetLife</strong> — Regional groups often share therapist recommendations</li>
                  </ul>
                </div>

                <div className="bg-card/50 border border-border rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-3">Questions to Ask a Potential Therapist:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• "What is your experience working with clients who practice BDSM?"</li>
                    <li>• "Do you view BDSM as inherently pathological?"</li>
                    <li>• "How would you approach a client whose kink interests conflict with their values?"</li>
                    <li>• "Are you familiar with consensual non-monogamy, power exchange, and related concepts?"</li>
                  </ul>
                </div>
              </section>

              <section id="red-flags" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Shield className="w-8 h-8 text-red-500" />
                  Red Flags to Watch
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Whether you're examining your own patterns or a partner's, these red flags suggest mental health support may be needed:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-card/50 border border-border rounded-xl p-6">
                    <h4 className="font-bold text-red-400 mb-3">In Yourself:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>🚩 Needing increasingly extreme activities for satisfaction</li>
                      <li>🚩 Unable to enjoy vanilla intimacy at all</li>
                      <li>🚩 Seeking pain to punish yourself</li>
                      <li>🚩 Dissociating during scenes (going away, not into subspace)</li>
                      <li>🚩 Feeling worse about yourself after play</li>
                      <li>🚩 Using BDSM to avoid other life issues</li>
                    </ul>
                  </div>
                  <div className="bg-card/50 border border-border rounded-xl p-6">
                    <h4 className="font-bold text-red-400 mb-3">In Partners:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>🚩 Using "it's a kink" to excuse abusive behavior</li>
                      <li>🚩 Refusing aftercare or negotiation</li>
                      <li>🚩 Pushing past limits repeatedly</li>
                      <li>🚩 Getting angry when you use safe words</li>
                      <li>🚩 Isolation from friends/family "for the dynamic"</li>
                      <li>🚩 Dramatic mood swings around play</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="self-check" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Mental Health Self-Check</h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Ask yourself these questions regularly:
                </p>

                <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6 mb-6">
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <Sparkles className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span>After scenes, do I generally feel closer to my partner and better about myself?</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Sparkles className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span>Can I say no to activities without feeling panic or loss?</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Sparkles className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span>Is BDSM one part of a balanced life, or is it consuming everything?</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Sparkles className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span>Do I feel in control of my choices, or driven by compulsion?</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Sparkles className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span>Are my partners treating me with respect and care?</span>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Final Section */}
              <section className="mb-12">
                <div className="bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 rounded-xl p-6 border border-purple-500/30">
                  <h3 className="font-bold text-white mb-3">The Bottom Line</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    BDSM, like any intense experience, can be a tool for growth or a way to avoid growth. The difference lies in self-awareness, consent, healthy practices, and a willingness to examine your motivations honestly. When practiced thoughtfully, kink can be a profound path to self-discovery and connection. When practiced unconsciously, it can reinforce harmful patterns.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    <strong className="text-white">The healthiest kinksters are those who combine their erotic exploration with genuine self-reflection—and aren't afraid to seek professional support when needed.</strong>
                  </p>
                </div>
              </section>
            </article>

            {/* Related Articles */}
            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="text-xl font-bold mb-6">Continue Your Education</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Link to="/blog/bdsm-aftercare-guide" className="bg-card/50 border border-border rounded-xl p-4 hover:border-purple-500/50 transition-colors">
                  <span className="text-xs text-red-500 font-semibold">BDSM & Kink</span>
                  <h4 className="font-bold text-white mt-1 mb-2">The Power of Aftercare</h4>
                  <p className="text-sm text-muted-foreground">Essential for emotional well-being.</p>
                </Link>
                <Link to="/guide/self-care" className="bg-card/50 border border-border rounded-xl p-4 hover:border-pink-500/50 transition-colors">
                  <span className="text-xs text-green-500 font-semibold">Resources</span>
                  <h4 className="font-bold text-white mt-1 mb-2">Self-Care Resources</h4>
                  <p className="text-sm text-muted-foreground">Mental health support for the lifestyle.</p>
                </Link>
              </div>

              <h3 className="text-xl font-bold mb-4">Helpful Resources</h3>
              <div className="flex flex-wrap gap-3">
                <Link to="/guide/glossary" className="text-sm bg-card/50 border border-border rounded-full px-4 py-2 hover:border-purple-500/50 transition-colors">
                  📖 Lifestyle Glossary
                </Link>
                <Link to="/start/consent-basics" className="text-sm bg-card/50 border border-border rounded-full px-4 py-2 hover:border-purple-500/50 transition-colors">
                  ✓ Consent Basics
                </Link>
                <Link to="/blog/consent" className="text-sm bg-card/50 border border-border rounded-full px-4 py-2 hover:border-purple-500/50 transition-colors">
                  💚 Consent Articles
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

export default BlogKinkMentalHealth;
