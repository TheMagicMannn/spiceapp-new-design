import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Heart, Shield, CheckCircle, AlertTriangle, BookOpen, Sparkles, MessageCircle, Target } from "lucide-react";

const BlogBDSMBeginners = () => {
  return (
    <>
      <SEO
        title="BDSM for Beginners: How to Safely Explore Your First Kinks | SPICE"
        description="A gentle, step-by-step guide to BDSM for beginners. Learn self-discovery, basic toys, negotiation techniques, and how to start with low-risk scenes safely."
        keywords="BDSM for beginners, first time BDSM, beginner kink guide, how to start BDSM, safe BDSM exploration, BDSM basics, kink for newbies, beginner bondage, first kink experience"
        canonical="https://thespiceapp.com/blog/bdsm-beginners-guide"
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
                <span className="text-xs text-muted-foreground">18 min read</span>
                <span className="text-xs text-muted-foreground">Updated January 2025</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                BDSM for Beginners: How to Safely Explore Your First Kinks Without Overwhelming Yourself
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Curious about BDSM but don't know where to start? This gentle, comprehensive guide will help you discover your desires, communicate with partners, and explore your first kinks safely and confidently.
              </p>
            </div>

            {/* Featured Image Placeholder */}
            <div className="bg-gradient-to-r from-red-500/20 via-pink-500/20 to-red-500/20 rounded-2xl p-12 mb-12 text-center border border-red-500/30">
              <Heart className="w-16 h-16 text-red-500 mx-auto mb-4" />
              <p className="text-muted-foreground">Your Journey Into Kink Starts Here</p>
            </div>

            {/* Key Takeaway */}
            <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 mb-12">
              <div className="flex items-start gap-3">
                <Sparkles className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-red-400 mb-2">The Most Important Thing to Know:</h3>
                  <p className="text-muted-foreground">
                    There's no "right" way to be kinky. BDSM is a spectrum, and you get to choose exactly where you land. Start slow, communicate openly, and remember that the goal is mutual pleasure and connection—not checking items off a list.
                  </p>
                </div>
              </div>
            </div>

            {/* Table of Contents */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 mb-12">
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-red-500" />
                In This Guide
              </h2>
              <ul className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                <li><a href="#what-is-bdsm" className="hover:text-red-500">→ What Is BDSM, Really?</a></li>
                <li><a href="#self-discovery" className="hover:text-red-500">→ Self-Discovery: Finding Your Interests</a></li>
                <li><a href="#communication" className="hover:text-red-500">→ Communication & Negotiation</a></li>
                <li><a href="#safety-basics" className="hover:text-red-500">→ Essential Safety Knowledge</a></li>
                <li><a href="#first-toys" className="hover:text-red-500">→ Beginner-Friendly Toys & Gear</a></li>
                <li><a href="#first-scenes" className="hover:text-red-500">→ Your First Low-Risk Scenes</a></li>
                <li><a href="#aftercare" className="hover:text-red-500">→ Introduction to Aftercare</a></li>
                <li><a href="#common-mistakes" className="hover:text-red-500">→ Common Beginner Mistakes</a></li>
              </ul>
            </div>

            {/* Article Content */}
            <article className="prose prose-invert max-w-none">
              <section id="what-is-bdsm" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Heart className="w-8 h-8 text-red-500" />
                  What Is BDSM, Really?
                </h2>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  BDSM is an umbrella term that encompasses a wide range of consensual adult activities involving power exchange, sensation play, and psychological dynamics. The acronym stands for:
                </p>

                <div className="bg-card/50 border border-border rounded-xl p-6 mb-6">
                  <ul className="space-y-3 text-muted-foreground">
                    <li><strong className="text-red-400">B</strong>ondage & <strong className="text-red-400">D</strong>iscipline — Physical restraint and rule-based play</li>
                    <li><strong className="text-red-400">D</strong>ominance & <strong className="text-red-400">S</strong>ubmission — Power exchange dynamics between partners</li>
                    <li><strong className="text-red-400">S</strong>adism & <strong className="text-red-400">M</strong>asochism — Giving and receiving pleasurable pain</li>
                  </ul>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  But here's what newcomers often don't realize: <strong className="text-white">most people into BDSM don't practice all of these.</strong> You might love bondage but have zero interest in pain. You might enjoy being submissive in the bedroom but dominant in daily life. BDSM is a buffet, not a fixed menu.
                </p>

                <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-green-400 mb-3">What BDSM Is NOT:</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>❌ Abuse (BDSM requires enthusiastic consent)</li>
                    <li>❌ A mental illness or sign of trauma</li>
                    <li>❌ Something only "extreme" people do</li>
                    <li>❌ Always about sex (many activities are non-sexual)</li>
                    <li>❌ Fixed roles you must commit to forever</li>
                  </ul>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  For a complete list of BDSM terms you'll encounter, check out our <Link to="/guide/glossary" className="text-red-400 hover:underline">Lifestyle Glossary</Link>.
                </p>
              </section>

              <section id="self-discovery" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Target className="w-8 h-8 text-pink-500" />
                  Self-Discovery: Finding Your Interests
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Before diving into BDSM with a partner, spend time exploring your own curiosities. Self-discovery helps you communicate desires and recognize boundaries before you're in the moment.
                </p>

                <div className="bg-pink-900/20 border border-pink-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-4">Questions to Ask Yourself:</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                      <span><strong>What fantasies keep returning?</strong> — Pay attention to recurring themes in daydreams or turn-ons.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Do you prefer control or surrender?</strong> — Or does it depend on your mood?</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                      <span><strong>What sensations intrigue you?</strong> — Texture, temperature, pressure, pain, restraint?</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                      <span><strong>What's a hard no?</strong> — Knowing limits is just as important as knowing desires.</span>
                    </li>
                  </ul>
                </div>

                <h3 className="text-xl font-bold text-white mb-4">Tools for Self-Discovery</h3>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-card/50 border border-border rounded-xl p-4">
                    <h4 className="font-bold text-white mb-2">BDSM Checklists</h4>
                    <p className="text-sm text-muted-foreground">Rate activities from "hard no" to "very interested." Compare with partners later. Try our <Link to="/quiz" className="text-red-400 hover:underline">BDSM Quiz</Link> to get started.</p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-xl p-4">
                    <h4 className="font-bold text-white mb-2">Erotic Fiction</h4>
                    <p className="text-sm text-muted-foreground">Reading kink-themed stories can help identify what resonates without commitment.</p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-xl p-4">
                    <h4 className="font-bold text-white mb-2">Educational Videos</h4>
                    <p className="text-sm text-muted-foreground">Watch instructional content (not porn) from educators like Evie Lupine or Watts the Safeword.</p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-xl p-4">
                    <h4 className="font-bold text-white mb-2">Journaling</h4>
                    <p className="text-sm text-muted-foreground">Write about fantasies without judgment. Notice patterns and emotional responses.</p>
                  </div>
                </div>
              </section>

              <section id="communication" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <MessageCircle className="w-8 h-8 text-purple-500" />
                  Communication & Negotiation
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Good BDSM starts with good communication. <Link to="/guide/glossary" className="text-red-400 hover:underline">Negotiation</Link> isn't just practical—it can be incredibly intimate and even arousing.
                </p>

                <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-4">The Negotiation Conversation Should Cover:</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>✓ <strong>Desires</strong> — What do you each want to try?</li>
                    <li>✓ <strong>Limits</strong> — Hard limits (never) vs. soft limits (maybe, with discussion)</li>
                    <li>✓ <strong>Safe words</strong> — Red/Yellow/Green system or custom words</li>
                    <li>✓ <strong>Health considerations</strong> — Injuries, conditions, medications</li>
                    <li>✓ <strong>Aftercare needs</strong> — What do you each need after a scene?</li>
                    <li>✓ <strong>Experience level</strong> — Be honest about what you have/haven't done</li>
                  </ul>
                </div>

                <h3 className="text-xl font-bold text-white mb-4">Safe Words: Your Emergency Brake</h3>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  <Link to="/guide/glossary" className="text-red-400 hover:underline">Safe words</Link> are non-negotiable. The most common system:
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-4 text-center">
                    <span className="text-2xl font-bold text-green-400">GREEN</span>
                    <p className="text-sm text-muted-foreground mt-2">"I'm good, keep going"</p>
                  </div>
                  <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-4 text-center">
                    <span className="text-2xl font-bold text-yellow-400">YELLOW</span>
                    <p className="text-sm text-muted-foreground mt-2">"Slow down, check in"</p>
                  </div>
                  <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-4 text-center">
                    <span className="text-2xl font-bold text-red-400">RED</span>
                    <p className="text-sm text-muted-foreground mt-2">"Stop everything now"</p>
                  </div>
                </div>

                <div className="bg-card/50 border border-border rounded-xl p-4 mb-6">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-white">Pro Tip:</strong> If verbal communication isn't possible (gags, intense headspace), establish non-verbal signals like dropping a ball, tapping three times, or specific hand gestures.
                  </p>
                </div>
              </section>

              <section id="safety-basics" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Shield className="w-8 h-8 text-green-500" />
                  Essential Safety Knowledge
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Safety in BDSM isn't about avoiding risk entirely—it's about understanding and mitigating risks. The community uses several frameworks:
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-card/50 border border-border rounded-xl p-4">
                    <h4 className="font-bold text-white mb-2">SSC: Safe, Sane, Consensual</h4>
                    <p className="text-sm text-muted-foreground">The traditional framework. Activities should be safe (minimal risk), sane (participants are of sound mind), and consensual (everyone agrees).</p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-xl p-4">
                    <h4 className="font-bold text-white mb-2">RACK: Risk-Aware Consensual Kink</h4>
                    <p className="text-sm text-muted-foreground">Acknowledges that some activities carry inherent risk. Emphasizes knowing and accepting risks rather than avoiding them entirely.</p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-xl p-4">
                    <h4 className="font-bold text-white mb-2">PRICK: Personal Responsibility, Informed Consensual Kink</h4>
                    <p className="text-sm text-muted-foreground">Focuses on individual accountability and thorough education before engaging in activities.</p>
                  </div>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-red-400 mb-3">⚠️ Universal Safety Rules:</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• <strong>Never bind around the throat</strong> without expert-level knowledge</li>
                    <li>• <strong>Never leave a bound person alone</strong></li>
                    <li>• <strong>Keep safety shears nearby</strong> for any bondage</li>
                    <li>• <strong>Avoid binding over joints</strong> and check circulation frequently</li>
                    <li>• <strong>Stay sober</strong> for anything beyond very light play</li>
                    <li>• <strong>Learn about anatomy</strong> before impact play (avoid kidneys, spine, joints)</li>
                  </ul>
                </div>
              </section>

              <section id="first-toys" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Beginner-Friendly Toys & Gear</h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  You don't need an expensive dungeon to explore BDSM. Start with these accessible, beginner-friendly items:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-card/50 border border-border rounded-xl p-6">
                    <h4 className="font-bold text-white mb-3">For Bondage:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Soft restraints/cuffs</strong> — Velcro or padded for safety</li>
                      <li>• <strong>Silk scarves or ties</strong> — Easy to untie quickly</li>
                      <li>• <strong>Under-bed restraint systems</strong> — No hardware needed</li>
                      <li>• <strong>Blindfolds</strong> — Heightens other sensations</li>
                    </ul>
                  </div>
                  <div className="bg-card/50 border border-border rounded-xl p-6">
                    <h4 className="font-bold text-white mb-3">For Sensation Play:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Feather ticklers</strong> — Light, teasing sensations</li>
                      <li>• <strong>Wartenberg wheel</strong> — Prickly without breaking skin</li>
                      <li>• <strong>Ice cubes</strong> — Free and effective!</li>
                      <li>• <strong>Massage candles</strong> — Warm wax without burns</li>
                    </ul>
                  </div>
                  <div className="bg-card/50 border border-border rounded-xl p-6">
                    <h4 className="font-bold text-white mb-3">For Impact Play:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Your hand</strong> — Start here, learn to read responses</li>
                      <li>• <strong>Leather paddle</strong> — More thud than sting</li>
                      <li>• <strong>Flogger (suede)</strong> — Softer, good for beginners</li>
                      <li>• <strong>Riding crop</strong> — More precise, adjustable intensity</li>
                    </ul>
                  </div>
                  <div className="bg-card/50 border border-border rounded-xl p-6">
                    <h4 className="font-bold text-white mb-3">For Power Exchange:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• <strong>Collar (play collar)</strong> — Symbolic of dynamic</li>
                      <li>• <strong>Leash</strong> — For guided control</li>
                      <li>• <strong>Timer/task app</strong> — For assigning tasks</li>
                      <li>• <strong>Rules notebook</strong> — Document your dynamic</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="first-scenes" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Your First Low-Risk Scenes</h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Ready to try something? Here are gentle entry points that feel intense but carry minimal risk:
                </p>

                <div className="space-y-6 mb-6">
                  <div className="bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/30 rounded-xl p-6">
                    <h4 className="font-bold text-white mb-3">Scene 1: Blindfold Exploration</h4>
                    <p className="text-sm text-muted-foreground mb-3">One partner is blindfolded while the other explores their body with different textures and temperatures.</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Use: feathers, ice, warm breath, fingertips, silk</li>
                      <li>• Duration: 15-30 minutes</li>
                      <li>• Communication: "Does this feel good?" throughout</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/30 rounded-xl p-6">
                    <h4 className="font-bold text-white mb-3">Scene 2: Light Restraint</h4>
                    <p className="text-sm text-muted-foreground mb-3">Use soft restraints to tie wrists to headboard (in front, not behind).</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Keep: safety shears within reach</li>
                      <li>• Check: circulation every few minutes</li>
                      <li>• Never: leave the room while partner is restrained</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/30 rounded-xl p-6">
                    <h4 className="font-bold text-white mb-3">Scene 3: "Yes, Sir/Ma'am" Game</h4>
                    <p className="text-sm text-muted-foreground mb-3">Simple power exchange where one partner follows instructions from the other.</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Start with: "Get me a glass of water, please."</li>
                      <li>• Escalate to: More intimate instructions as comfort grows</li>
                      <li>• Key phrase: End with agreed word like "scene over" or "back to normal"</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="aftercare" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Introduction to Aftercare</h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  <Link to="/guide/glossary" className="text-red-400 hover:underline">Aftercare</Link> is the practice of caring for each other after a BDSM scene. It's not optional—it's essential for both physical and emotional well-being.
                </p>

                <div className="bg-pink-900/20 border border-pink-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-4">Aftercare Can Include:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Cuddling and physical closeness</li>
                      <li>• Water and snacks (sugar helps!)</li>
                      <li>• Warm blankets</li>
                      <li>• Gentle conversation</li>
                    </ul>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Tending to any marks</li>
                      <li>• Words of affirmation</li>
                      <li>• Quiet time together</li>
                      <li>• Checking in the next day</li>
                    </ul>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Both <Link to="/guide/glossary" className="text-red-400 hover:underline">Dominants</Link> and <Link to="/guide/glossary" className="text-red-400 hover:underline">submissives</Link> need aftercare. Dom-drop is real. Read our full guide: <Link to="/blog/bdsm-aftercare-guide" className="text-red-400 hover:underline">The Power of Aftercare</Link>.
                </p>
              </section>

              <section id="common-mistakes" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <AlertTriangle className="w-8 h-8 text-amber-500" />
                  Common Beginner Mistakes
                </h2>

                <div className="space-y-4 mb-6">
                  <div className="bg-amber-900/20 border border-amber-500/30 rounded-xl p-4">
                    <h4 className="font-bold text-amber-400 mb-2">Mistake: Moving Too Fast</h4>
                    <p className="text-sm text-muted-foreground">Excitement can lead to skipping negotiation or trying advanced activities too soon. Start slower than you think you need to.</p>
                  </div>
                  <div className="bg-amber-900/20 border border-amber-500/30 rounded-xl p-4">
                    <h4 className="font-bold text-amber-400 mb-2">Mistake: Skipping Negotiation</h4>
                    <p className="text-sm text-muted-foreground">"We'll figure it out as we go" leads to miscommunication and potential harm. Always discuss beforehand.</p>
                  </div>
                  <div className="bg-amber-900/20 border border-amber-500/30 rounded-xl p-4">
                    <h4 className="font-bold text-amber-400 mb-2">Mistake: Comparing to Porn</h4>
                    <p className="text-sm text-muted-foreground">BDSM porn shows edited highlights, not the negotiation, warm-up, or aftercare. Real BDSM looks different.</p>
                  </div>
                  <div className="bg-amber-900/20 border border-amber-500/30 rounded-xl p-4">
                    <h4 className="font-bold text-amber-400 mb-2">Mistake: Ignoring Aftercare</h4>
                    <p className="text-sm text-muted-foreground">Ending scenes abruptly without aftercare can cause emotional crashes. Always debrief and reconnect.</p>
                  </div>
                  <div className="bg-amber-900/20 border border-amber-500/30 rounded-xl p-4">
                    <h4 className="font-bold text-amber-400 mb-2">Mistake: Playing While Impaired</h4>
                    <p className="text-sm text-muted-foreground">Alcohol and substances impair judgment and pain perception. Stay sober for anything beyond very light play.</p>
                  </div>
                </div>
              </section>

              {/* Final Section */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Your Journey Starts Now</h2>

                <div className="bg-gradient-to-r from-red-500/20 via-pink-500/20 to-red-500/20 rounded-xl p-6 border border-red-500/30 mb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    BDSM is a journey of self-discovery, connection, and growth. There's no rush to experience everything at once. Start with curiosity, proceed with communication, and always prioritize safety and consent.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    <strong className="text-white">Remember:</strong> The best kinksters are lifelong learners. Every experienced practitioner was once a beginner, and the most respected people in the community are those who prioritize safety, consent, and continuous education.
                  </p>
                </div>
              </section>
            </article>

            {/* Related Articles */}
            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="text-xl font-bold mb-6">Continue Your Education</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Link to="/blog/bdsm-aftercare-guide" className="bg-card/50 border border-border rounded-xl p-4 hover:border-red-500/50 transition-colors">
                  <span className="text-xs text-red-500 font-semibold">BDSM & Kink</span>
                  <h4 className="font-bold text-white mt-1 mb-2">The Power of Aftercare</h4>
                  <p className="text-sm text-muted-foreground">Why it's the most important part of any scene.</p>
                </Link>
                <Link to="/blog/bdsm-negotiation-checklist" className="bg-card/50 border border-border rounded-xl p-4 hover:border-pink-500/50 transition-colors">
                  <span className="text-xs text-red-500 font-semibold">BDSM & Kink</span>
                  <h4 className="font-bold text-white mt-1 mb-2">Negotiating Like a Pro</h4>
                  <p className="text-sm text-muted-foreground">The ultimate BDSM checklist and scene contracts.</p>
                </Link>
                <Link to="/blog/beginner-friendly-kinks" className="bg-card/50 border border-border rounded-xl p-4 hover:border-purple-500/50 transition-colors">
                  <span className="text-xs text-red-500 font-semibold">BDSM & Kink</span>
                  <h4 className="font-bold text-white mt-1 mb-2">Top 10 Beginner-Friendly Kinks</h4>
                  <p className="text-sm text-muted-foreground">Intense activities that are actually low-risk.</p>
                </Link>
                <Link to="/quiz" className="bg-card/50 border border-border rounded-xl p-4 hover:border-amber-500/50 transition-colors">
                  <span className="text-xs text-amber-500 font-semibold">Interactive</span>
                  <h4 className="font-bold text-white mt-1 mb-2">Take the BDSM Quiz</h4>
                  <p className="text-sm text-muted-foreground">Discover your kink preferences and interests.</p>
                </Link>
              </div>

              <h3 className="text-xl font-bold mb-4">Helpful Resources</h3>
              <div className="flex flex-wrap gap-3">
                <Link to="/guide/glossary" className="text-sm bg-card/50 border border-border rounded-full px-4 py-2 hover:border-red-500/50 transition-colors">
                  📖 Lifestyle Glossary
                </Link>
                <Link to="/start/consent-basics" className="text-sm bg-card/50 border border-border rounded-full px-4 py-2 hover:border-red-500/50 transition-colors">
                  ✓ Consent Basics
                </Link>
                <Link to="/guide/safety" className="text-sm bg-card/50 border border-border rounded-full px-4 py-2 hover:border-red-500/50 transition-colors">
                  🛡️ Safety Guide
                </Link>
                <Link to="/blog/consent" className="text-sm bg-card/50 border border-border rounded-full px-4 py-2 hover:border-red-500/50 transition-colors">
                  💚 Consent & Safety Articles
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

export default BlogBDSMBeginners;
