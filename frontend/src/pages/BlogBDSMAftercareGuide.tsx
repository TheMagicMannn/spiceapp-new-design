import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Heart, Coffee, Moon, CheckCircle, AlertTriangle, BookOpen, MessageCircle, Sparkles, Users } from "lucide-react";

const BlogBDSMAftercareGuide = () => {
  return (
    <>
      <SEO
        title="The Power of Aftercare: Why It's the Most Important Part of Any BDSM Scene | SPICE"
        description="Deep dive into emotional and physical aftercare techniques in BDSM. Learn about sub-drop, Dom-drop, real couple stories, and why skipping aftercare can harm your dynamic."
        keywords="BDSM aftercare, sub drop, dom drop, aftercare techniques, BDSM scene aftercare, kink aftercare, emotional aftercare BDSM, physical aftercare, post-scene care"
        canonical="https://thespiceapp.com/blog/bdsm-aftercare-guide"
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
                <span className="text-xs text-muted-foreground">16 min read</span>
                <span className="text-xs text-muted-foreground">Updated January 2025</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-rose-400 to-pink-400 bg-clip-text text-transparent">
                The Power of Aftercare: Why It's the Most Important (and Sexiest) Part of Any Scene
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                What happens after the scene ends matters more than you think. Learn why aftercare isn't just nice to have—it's essential for both partners' well-being and your relationship's health.
              </p>
            </div>

            {/* Featured Section */}
            <div className="bg-gradient-to-r from-pink-500/20 via-rose-500/20 to-pink-500/20 rounded-2xl p-12 mb-12 text-center border border-pink-500/30">
              <Heart className="w-16 h-16 text-pink-500 mx-auto mb-4" />
              <p className="text-muted-foreground">The Care That Completes the Scene</p>
            </div>

            {/* Key Insight */}
            <div className="bg-pink-900/20 border border-pink-500/30 rounded-xl p-6 mb-12">
              <div className="flex items-start gap-3">
                <Sparkles className="w-6 h-6 text-pink-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-pink-400 mb-2">The Truth About Aftercare:</h3>
                  <p className="text-muted-foreground">
                    Many newcomers think aftercare is optional or just "cuddling." In reality, it's a crucial part of BDSM that protects against emotional crashes, strengthens bonds, and can be incredibly intimate—sometimes even more so than the scene itself.
                  </p>
                </div>
              </div>
            </div>

            {/* Table of Contents */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 mb-12">
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-pink-500" />
                In This Guide
              </h2>
              <ul className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                <li><a href="#what-is-aftercare" className="hover:text-pink-500">→ What Is Aftercare?</a></li>
                <li><a href="#science" className="hover:text-pink-500">→ The Science Behind It</a></li>
                <li><a href="#sub-drop" className="hover:text-pink-500">→ Understanding Sub-Drop</a></li>
                <li><a href="#dom-drop" className="hover:text-pink-500">→ Dom-Drop: The Hidden Crash</a></li>
                <li><a href="#physical-aftercare" className="hover:text-pink-500">→ Physical Aftercare Techniques</a></li>
                <li><a href="#emotional-aftercare" className="hover:text-pink-500">→ Emotional Aftercare</a></li>
                <li><a href="#negotiating" className="hover:text-pink-500">→ Negotiating Aftercare Needs</a></li>
                <li><a href="#real-stories" className="hover:text-pink-500">→ Real Couple Stories</a></li>
              </ul>
            </div>

            {/* Article Content */}
            <article className="prose prose-invert max-w-none">
              <section id="what-is-aftercare" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Heart className="w-8 h-8 text-pink-500" />
                  What Is Aftercare?
                </h2>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  <Link to="/guide/glossary" className="text-pink-400 hover:underline">Aftercare</Link> is the intentional practice of caring for yourself and your partner(s) after a BDSM scene or intense sexual experience. It's the transition period from the heightened state of play back to everyday reality.
                </p>

                <div className="bg-card/50 border border-border rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-4">Aftercare Serves Multiple Purposes:</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                      <span><strong className="text-white">Physical recovery</strong> — Tending to the body after exertion, impact, or restraint</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                      <span><strong className="text-white">Emotional processing</strong> — Helping the mind transition from intense headspace</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                      <span><strong className="text-white">Connection maintenance</strong> — Reinforcing the bond between partners</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                      <span><strong className="text-white">Drop prevention</strong> — Minimizing the crash that can follow intense experiences</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-rose-900/20 border border-rose-500/30 rounded-xl p-4 mb-6">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-white">Critical Point:</strong> Both <Link to="/guide/glossary" className="text-pink-400 hover:underline">Dominants</Link> and <Link to="/guide/glossary" className="text-pink-400 hover:underline">submissives</Link> need aftercare. It's not just for the person who "received" the scene—the person who led it also experiences significant physical and emotional shifts.
                  </p>
                </div>
              </section>

              <section id="science" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">The Science Behind Aftercare</h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  During intense BDSM scenes, your body floods with a cocktail of neurochemicals that create euphoria, heightened sensation, and altered states of consciousness:
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-card/50 border border-border rounded-xl p-4">
                    <h4 className="font-bold text-pink-400 mb-2">Endorphins</h4>
                    <p className="text-sm text-muted-foreground">Natural painkillers that create euphoria, similar to runner's high. Released during impact play, intense sensations.</p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-xl p-4">
                    <h4 className="font-bold text-purple-400 mb-2">Adrenaline</h4>
                    <p className="text-sm text-muted-foreground">Fight-or-flight hormone that heightens senses and energy. Creates alertness and intensity during scenes.</p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-xl p-4">
                    <h4 className="font-bold text-blue-400 mb-2">Dopamine</h4>
                    <p className="text-sm text-muted-foreground">Pleasure and reward chemical. Spikes during anticipation and pleasurable activities.</p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-xl p-4">
                    <h4 className="font-bold text-rose-400 mb-2">Oxytocin</h4>
                    <p className="text-sm text-muted-foreground">Bonding hormone released during physical closeness, touch, and intimacy.</p>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  After the scene ends, these chemicals drop—sometimes rapidly. Without proper aftercare, this neurochemical crash can cause:
                </p>

                <div className="bg-amber-900/20 border border-amber-500/30 rounded-xl p-6 mb-6">
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Sudden sadness, weepiness, or depression</li>
                    <li>• Anxiety or feeling "off"</li>
                    <li>• Physical shakiness or chills</li>
                    <li>• Feeling disconnected from partner</li>
                    <li>• Irritability or emotional volatility</li>
                    <li>• Questioning the experience ("Was that okay? Am I weird?")</li>
                  </ul>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Aftercare maintains oxytocin levels and provides a gentle transition rather than an abrupt drop. Physical closeness, reassurance, and care keep the bonding hormones flowing while the intensity chemicals normalize.
                </p>
              </section>

              <section id="sub-drop" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Moon className="w-8 h-8 text-indigo-500" />
                  Understanding Sub-Drop
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  <Link to="/guide/glossary" className="text-pink-400 hover:underline">Sub-drop</Link> is the emotional and physical crash that can occur hours or even days after an intense scene. It's most common in the <Link to="/guide/glossary" className="text-pink-400 hover:underline">submissive</Link> partner, though it can affect anyone.
                </p>

                <div className="bg-indigo-900/20 border border-indigo-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-4">Sub-Drop Symptoms:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-bold text-indigo-400 mb-2">Emotional:</h5>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Unexplained sadness or crying</li>
                        <li>• Anxiety or feeling vulnerable</li>
                        <li>• Self-doubt or shame</li>
                        <li>• Feeling disconnected</li>
                        <li>• Irritability</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-bold text-indigo-400 mb-2">Physical:</h5>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Fatigue and exhaustion</li>
                        <li>• Headaches</li>
                        <li>• Flu-like symptoms</li>
                        <li>• Difficulty concentrating</li>
                        <li>• Sleep disturbances</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-card/50 border border-border rounded-xl p-4 mb-6">
                  <h4 className="font-bold text-white mb-2">Timeline:</h4>
                  <p className="text-sm text-muted-foreground">
                    Sub-drop typically occurs 24-72 hours after a scene, though it can be immediate or delayed up to a week. Severity depends on scene intensity, individual chemistry, aftercare quality, and external life stressors.
                  </p>
                </div>

                <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-green-400 mb-3">Managing Sub-Drop:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✓ <strong className="text-white">Recognize it</strong> — Know that these feelings are normal and temporary</li>
                    <li>✓ <strong className="text-white">Communicate</strong> — Tell your partner you're experiencing drop</li>
                    <li>✓ <strong className="text-white">Self-care</strong> — Rest, hydrate, eat well, do comforting activities</li>
                    <li>✓ <strong className="text-white">Connection</strong> — Reach out to your partner for reassurance</li>
                    <li>✓ <strong className="text-white">Plan lighter days</strong> — Don't schedule demanding activities right after intense scenes</li>
                  </ul>
                </div>
              </section>

              <section id="dom-drop" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Dom-Drop: The Hidden Crash</h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  <Link to="/guide/glossary" className="text-pink-400 hover:underline">Dom-drop</Link> is less discussed but equally real. The <Link to="/guide/glossary" className="text-pink-400 hover:underline">Dominant</Link> partner also experiences intense neurochemical shifts and can crash afterward.
                </p>

                <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-4">Dom-Drop Can Include:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• <strong className="text-white">Guilt or shame</strong> — "Did I go too far? Was that okay?"</li>
                    <li>• <strong className="text-white">Worry about partner</strong> — Excessive concern about their wellbeing</li>
                    <li>• <strong className="text-white">Emotional exhaustion</strong> — Holding space for someone is draining</li>
                    <li>• <strong className="text-white">Identity questioning</strong> — "Am I a bad person for enjoying this?"</li>
                    <li>• <strong className="text-white">Feeling used or unappreciated</strong> — Especially if aftercare is one-sided</li>
                  </ul>
                </div>

                <div className="bg-card/50 border border-border rounded-xl p-4 mb-6">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-white">Why Dom-Drop Is Overlooked:</strong> Society expects Dominants to be "strong" and not need care. But topping is emotionally and physically demanding. Good partners recognize that BOTH people need aftercare.
                  </p>
                </div>
              </section>

              <section id="physical-aftercare" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Coffee className="w-8 h-8 text-amber-500" />
                  Physical Aftercare Techniques
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  The body needs attention after physical exertion, impact, bondage, or intense sensation. Here's your physical aftercare toolkit:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-card/50 border border-border rounded-xl p-6">
                    <h4 className="font-bold text-white mb-3">Immediate (First 30 Minutes):</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>💧 <strong>Hydration</strong> — Water, electrolyte drinks, juice</li>
                      <li>🍫 <strong>Sugar/snacks</strong> — Blood sugar often drops</li>
                      <li>🛋️ <strong>Comfortable position</strong> — Lying down, cuddling</li>
                      <li>🧣 <strong>Warmth</strong> — Blankets, body heat, warm towels</li>
                      <li>🩹 <strong>First aid</strong> — Arnica for bruises, lotion for marks</li>
                    </ul>
                  </div>
                  <div className="bg-card/50 border border-border rounded-xl p-6">
                    <h4 className="font-bold text-white mb-3">Extended (Hours to Days):</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>🛁 <strong>Warm bath</strong> — Soothes muscles, promotes relaxation</li>
                      <li>💆 <strong>Gentle massage</strong> — Releases tension, maintains touch</li>
                      <li>🧴 <strong>Wound care</strong> — Proper cleaning and healing</li>
                      <li>😴 <strong>Rest</strong> — Extra sleep if needed</li>
                      <li>🥗 <strong>Good nutrition</strong> — Support physical recovery</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-900/20 border border-amber-500/30 rounded-xl p-4 mb-6">
                  <h4 className="font-bold text-amber-400 mb-2">Build an Aftercare Kit:</h4>
                  <p className="text-sm text-muted-foreground">
                    Keep supplies ready: water bottles, chocolate/snacks, soft blanket, arnica gel, lotion, first aid supplies, phone charger (for comfort), favorite playlist or show queued up.
                  </p>
                </div>
              </section>

              <section id="emotional-aftercare" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <MessageCircle className="w-8 h-8 text-rose-500" />
                  Emotional Aftercare
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Emotional aftercare is often more important than physical care. It's about making both partners feel valued, safe, and connected after vulnerability.
                </p>

                <div className="bg-rose-900/20 border border-rose-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-4">Words That Help:</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-rose-500 mt-0.5 flex-shrink-0" />
                      <span>"That was amazing. Thank you for trusting me."</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-rose-500 mt-0.5 flex-shrink-0" />
                      <span>"You were so beautiful/brave/perfect."</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-rose-500 mt-0.5 flex-shrink-0" />
                      <span>"I loved watching you let go like that."</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-rose-500 mt-0.5 flex-shrink-0" />
                      <span>"I feel so connected to you right now."</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-rose-500 mt-0.5 flex-shrink-0" />
                      <span>"How are you feeling? What do you need?"</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card/50 border border-border rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-4">Emotional Aftercare Practices:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong className="text-white">Stay present</strong> — Don't check your phone or rush off</li>
                    <li>• <strong className="text-white">Physical closeness</strong> — Cuddling, stroking hair, gentle touch</li>
                    <li>• <strong className="text-white">Verbal reassurance</strong> — Words of affirmation and appreciation</li>
                    <li>• <strong className="text-white">Active listening</strong> — Let them share feelings without judgment</li>
                    <li>• <strong className="text-white">Next-day check-in</strong> — Text or call to see how they're doing</li>
                    <li>• <strong className="text-white">Debrief conversation</strong> — (Later) What worked? What didn't?</li>
                  </ul>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-4 mb-6">
                  <h4 className="font-bold text-red-400 mb-2">⚠️ What NOT to Do:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Don't criticize anything about the scene</li>
                    <li>• Don't bring up problems or conflicts</li>
                    <li>• Don't leave abruptly or fall asleep immediately</li>
                    <li>• Don't be on your phone</li>
                    <li>• Don't minimize their feelings ("You're fine, it wasn't that intense")</li>
                  </ul>
                </div>
              </section>

              <section id="negotiating" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Negotiating Aftercare Needs</h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Everyone's aftercare needs are different. Discuss them BEFORE scenes, not after when you're both in altered states.
                </p>

                <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-4">Questions to Discuss:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• What physical aftercare do you need? (Cuddling, blankets, alone time?)</li>
                    <li>• What emotional aftercare helps you? (Words of affirmation, silence, distraction?)</li>
                    <li>• How long do you typically need for aftercare?</li>
                    <li>• Have you experienced drop before? How did it manifest?</li>
                    <li>• What helps you if drop happens days later?</li>
                    <li>• What should I avoid during aftercare?</li>
                  </ul>
                </div>

                <div className="bg-card/50 border border-border rounded-xl p-4 mb-6">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-white">Pro Tip:</strong> Some people need space after scenes while others need closeness. Some want to talk; others need quiet. Neither is wrong—just communicate your needs clearly.
                  </p>
                </div>
              </section>

              <section id="real-stories" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Users className="w-8 h-8 text-purple-500" />
                  Real Couple Stories
                </h2>

                <div className="space-y-6 mb-6">
                  <div className="bg-card/50 border border-border rounded-xl p-6">
                    <h4 className="font-bold text-white mb-2">"We learned the hard way..."</h4>
                    <p className="text-sm text-muted-foreground italic mb-3">
                      "Early in our D/s relationship, we'd have intense scenes and then just... go about our evening. My sub started getting depressed, distant, anxious after play. It took us months to realize it was because we were skipping aftercare. Now we block off at least an hour after any scene. It's transformed our dynamic."
                    </p>
                    <p className="text-xs text-muted-foreground">— Michael & Sara, together 4 years</p>
                  </div>

                  <div className="bg-card/50 border border-border rounded-xl p-6">
                    <h4 className="font-bold text-white mb-2">"Dom-drop almost ended us..."</h4>
                    <p className="text-sm text-muted-foreground italic mb-3">
                      "Nobody talks about how hard topping can be emotionally. After heavy impact scenes, I'd spiral into guilt. 'Am I a monster?' My partner finally noticed and started checking on ME after scenes. That role reversal—where the sub takes care of the Dom—was a game changer."
                    </p>
                    <p className="text-xs text-muted-foreground">— Jamie, Dom for 6 years</p>
                  </div>

                  <div className="bg-card/50 border border-border rounded-xl p-6">
                    <h4 className="font-bold text-white mb-2">"Our aftercare ritual..."</h4>
                    <p className="text-sm text-muted-foreground italic mb-3">
                      "We have a whole ritual now: warm bath together, then he wraps me in my favorite blanket, we eat chocolate, and watch comfort TV. Sometimes we talk about the scene, sometimes we don't. The predictability of the ritual is actually what makes me feel safe enough to go deeper in scenes."
                    </p>
                    <p className="text-xs text-muted-foreground">— Anonymous submissive</p>
                  </div>
                </div>
              </section>

              {/* Final Section */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Making Aftercare Sexy</h2>

                <div className="bg-gradient-to-r from-pink-500/20 via-rose-500/20 to-pink-500/20 rounded-xl p-6 border border-pink-500/30 mb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Here's the secret experienced kinksters know: <strong className="text-white">aftercare can be incredibly intimate and sexy.</strong> The vulnerability, the tenderness, the deep connection—many couples find aftercare is when they feel closest.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    Don't rush through it to "get back to normal." Savor it. The care you give each other after play is part of what makes BDSM so powerful.
                  </p>
                </div>
              </section>
            </article>

            {/* Related Articles */}
            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="text-xl font-bold mb-6">Continue Your Education</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Link to="/blog/bdsm-beginners-guide" className="bg-card/50 border border-border rounded-xl p-4 hover:border-pink-500/50 transition-colors">
                  <span className="text-xs text-red-500 font-semibold">BDSM & Kink</span>
                  <h4 className="font-bold text-white mt-1 mb-2">BDSM for Beginners</h4>
                  <p className="text-sm text-muted-foreground">Start your kink journey safely and confidently.</p>
                </Link>
                <Link to="/blog/bdsm-negotiation-checklist" className="bg-card/50 border border-border rounded-xl p-4 hover:border-rose-500/50 transition-colors">
                  <span className="text-xs text-red-500 font-semibold">BDSM & Kink</span>
                  <h4 className="font-bold text-white mt-1 mb-2">Negotiating Like a Pro</h4>
                  <p className="text-sm text-muted-foreground">The ultimate checklist and scene contracts.</p>
                </Link>
                <Link to="/blog/aftercare-emotional-safety" className="bg-card/50 border border-border rounded-xl p-4 hover:border-purple-500/50 transition-colors">
                  <span className="text-xs text-green-500 font-semibold">Consent & Safety</span>
                  <h4 className="font-bold text-white mt-1 mb-2">Aftercare & Emotional Safety</h4>
                  <p className="text-sm text-muted-foreground">Why reconnection matters for all lifestyles.</p>
                </Link>
                <Link to="/blog/kink-mental-health" className="bg-card/50 border border-border rounded-xl p-4 hover:border-amber-500/50 transition-colors">
                  <span className="text-xs text-red-500 font-semibold">BDSM & Kink</span>
                  <h4 className="font-bold text-white mt-1 mb-2">Kink and Mental Health</h4>
                  <p className="text-sm text-muted-foreground">How BDSM can heal, harm, or help you grow.</p>
                </Link>
              </div>

              <h3 className="text-xl font-bold mb-4">Helpful Resources</h3>
              <div className="flex flex-wrap gap-3">
                <Link to="/guide/glossary" className="text-sm bg-card/50 border border-border rounded-full px-4 py-2 hover:border-pink-500/50 transition-colors">
                  📖 Lifestyle Glossary
                </Link>
                <Link to="/guide/self-care" className="text-sm bg-card/50 border border-border rounded-full px-4 py-2 hover:border-pink-500/50 transition-colors">
                  💚 Self-Care Resources
                </Link>
                <Link to="/start/consent-basics" className="text-sm bg-card/50 border border-border rounded-full px-4 py-2 hover:border-pink-500/50 transition-colors">
                  ✓ Consent Basics
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

export default BlogBDSMAftercareGuide;
