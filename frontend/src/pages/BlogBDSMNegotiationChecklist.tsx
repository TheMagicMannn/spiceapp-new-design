import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FileText, CheckCircle, MessageCircle, BookOpen, Shield, Download, Heart, AlertTriangle } from "lucide-react";

const BlogBDSMNegotiationChecklist = () => {
  return (
    <>
      <SEO
        title="Negotiating Like a Pro: The Ultimate BDSM Checklist & Scene Contract Templates | SPICE"
        description="Downloadable BDSM negotiation resources, must-ask questions, scene contracts, and tips for turning potentially awkward talks into intimate foreplay."
        keywords="BDSM checklist, scene negotiation, BDSM contract template, kink negotiation, BDSM limits checklist, scene contract, BDSM communication, negotiation tips kink"
        canonical="https://thespiceapp.com/blog/bdsm-negotiation-checklist"
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
                <span className="text-xs text-muted-foreground">20 min read</span>
                <span className="text-xs text-muted-foreground">Updated January 2025</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Negotiating Like a Pro: The Ultimate BDSM Checklist and Scene Contract Templates
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Transform awkward conversations into intimate foreplay. This comprehensive guide includes everything you need for thorough, sexy negotiation—checklists, must-ask questions, and customizable contracts.
              </p>
            </div>

            {/* Featured Section */}
            <div className="bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 rounded-2xl p-12 mb-12 text-center border border-purple-500/30">
              <FileText className="w-16 h-16 text-purple-500 mx-auto mb-4" />
              <p className="text-muted-foreground">Clear Communication = Better Scenes</p>
            </div>

            {/* Key Insight */}
            <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6 mb-12">
              <div className="flex items-start gap-3">
                <Heart className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-purple-400 mb-2">Negotiation Is Foreplay:</h3>
                  <p className="text-muted-foreground">
                    Many people dread "the negotiation talk" as clinical or mood-killing. But experienced kinksters know: discussing desires, limits, and fantasies in detail can be incredibly arousing. It builds anticipation, deepens trust, and often reveals turn-ons you didn't know you shared.
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
                <li><a href="#why-negotiate" className="hover:text-purple-500">→ Why Negotiate?</a></li>
                <li><a href="#when-negotiate" className="hover:text-purple-500">→ When to Have the Talk</a></li>
                <li><a href="#must-ask" className="hover:text-purple-500">→ Must-Ask Questions</a></li>
                <li><a href="#checklist" className="hover:text-purple-500">→ The Ultimate BDSM Checklist</a></li>
                <li><a href="#limits" className="hover:text-purple-500">→ Hard vs. Soft Limits</a></li>
                <li><a href="#safewords" className="hover:text-purple-500">→ Safe Words & Signals</a></li>
                <li><a href="#contracts" className="hover:text-purple-500">→ Scene Contract Templates</a></li>
                <li><a href="#making-it-sexy" className="hover:text-purple-500">→ Making Negotiation Sexy</a></li>
              </ul>
            </div>

            {/* Article Content */}
            <article className="prose prose-invert max-w-none">
              <section id="why-negotiate" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Shield className="w-8 h-8 text-purple-500" />
                  Why Negotiate?
                </h2>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  <Link to="/guide/glossary" className="text-purple-400 hover:underline">Negotiation</Link> isn't about being overly cautious or killing spontaneity—it's about creating a container where both partners can fully let go. When boundaries are clear, you can push further without fear.
                </p>

                <div className="bg-card/50 border border-border rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-4">Benefits of Thorough Negotiation:</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong className="text-white">Safety</strong> — Know medical conditions, triggers, and absolute limits</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong className="text-white">Trust</strong> — Partners who communicate well feel safer being vulnerable</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong className="text-white">Better scenes</strong> — Know exactly what turns them on</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong className="text-white">Discovery</strong> — Uncover shared interests you didn't know about</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong className="text-white">Anticipation</strong> — Talking about what you'll do builds excitement</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section id="when-negotiate" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">When to Have the Talk</h2>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6">
                    <h4 className="font-bold text-green-400 mb-3">✓ Good Times to Negotiate:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Over coffee or dinner (sober, calm)</li>
                      <li>• Days before a planned scene</li>
                      <li>• Via text/chat for initial comfort</li>
                      <li>• During a dedicated "relationship check-in"</li>
                      <li>• When you're both relaxed and not rushed</li>
                    </ul>
                  </div>
                  <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                    <h4 className="font-bold text-red-400 mb-3">✗ Bad Times to Negotiate:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Right before play (pressure, rush)</li>
                      <li>• When either person is intoxicated</li>
                      <li>• During or immediately after a fight</li>
                      <li>• When someone is stressed or emotional</li>
                      <li>• In the middle of a scene</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-card/50 border border-border rounded-xl p-4 mb-6">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-white">New Partners:</strong> More extensive negotiation required. Cover everything in detail.
                    <br />
                    <strong className="text-white">Established Partners:</strong> Quick check-ins may suffice, but revisit the full conversation periodically.
                  </p>
                </div>
              </section>

              <section id="must-ask" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <MessageCircle className="w-8 h-8 text-pink-500" />
                  Must-Ask Questions
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  These questions form the foundation of any BDSM negotiation. Don't skip any—even if you think you know the answer.
                </p>

                <div className="space-y-6 mb-6">
                  <div className="bg-card/50 border border-border rounded-xl p-6">
                    <h4 className="font-bold text-pink-400 mb-3">Safety & Health:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Do you have any health conditions I should know about? (Heart, asthma, diabetes, etc.)</li>
                      <li>• Any injuries or areas of your body to avoid?</li>
                      <li>• Any medications that affect pain perception, blood clotting, or consciousness?</li>
                      <li>• Do you have any past trauma or triggers I should be aware of?</li>
                      <li>• When were you last tested for STIs? What's your safer sex protocol?</li>
                    </ul>
                  </div>

                  <div className="bg-card/50 border border-border rounded-xl p-6">
                    <h4 className="font-bold text-purple-400 mb-3">Experience & Desires:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• What's your experience level with BDSM?</li>
                      <li>• What activities are you most excited to try?</li>
                      <li>• What's on your "bucket list" for kink?</li>
                      <li>• What do you hope to get out of this scene/dynamic?</li>
                      <li>• Are there activities you've tried before that you want more or less of?</li>
                    </ul>
                  </div>

                  <div className="bg-card/50 border border-border rounded-xl p-6">
                    <h4 className="font-bold text-blue-400 mb-3">Limits & Boundaries:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• What are your hard limits? (Things you will NOT do, ever)</li>
                      <li>• What are your soft limits? (Maybe, with discussion/warm-up)</li>
                      <li>• Are there words, scenarios, or dynamics that are off-limits?</li>
                      <li>• How do you feel about marks/bruises? Visible vs. hidden areas?</li>
                      <li>• What's your relationship with pain? (Love it, tolerate it, avoid it?)</li>
                    </ul>
                  </div>

                  <div className="bg-card/50 border border-border rounded-xl p-6">
                    <h4 className="font-bold text-amber-400 mb-3">Communication & Aftercare:</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• What's your safe word system? (Colors, custom words, non-verbal?)</li>
                      <li>• How do you typically show you're enjoying something vs. struggling?</li>
                      <li>• What does aftercare look like for you?</li>
                      <li>• Have you experienced <Link to="/guide/glossary" className="text-purple-400 hover:underline">sub-drop</Link> or <Link to="/guide/glossary" className="text-purple-400 hover:underline">Dom-drop</Link>? What helps?</li>
                      <li>• How should I check in during scenes? How often?</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="checklist" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">The Ultimate BDSM Checklist</h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Use this checklist to rate your interest in various activities. Share with partners to find common ground.
                </p>

                <div className="bg-card/50 border border-border rounded-xl p-4 mb-6">
                  <h4 className="font-bold text-white mb-3">Rating Scale:</h4>
                  <div className="flex flex-wrap gap-2 text-sm">
                    <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded">0 = Hard No</span>
                    <span className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded">1 = Soft Limit</span>
                    <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded">2 = Neutral</span>
                    <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded">3 = Interested</span>
                    <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded">4 = Very Interested</span>
                    <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded">5 = Favorite/Must Have</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-card/50 border border-border rounded-xl p-6">
                    <h4 className="font-bold text-white mb-3">Bondage:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>□ Wrist restraints</li>
                      <li>□ Ankle restraints</li>
                      <li>□ Full body bondage</li>
                      <li>□ Rope bondage (<Link to="/guide/glossary" className="text-purple-400 hover:underline">Shibari</Link>)</li>
                      <li>□ Spreader bars</li>
                      <li>□ Suspension (advanced)</li>
                      <li>□ Predicament bondage</li>
                      <li>□ Mummification</li>
                    </ul>
                  </div>
                  <div className="bg-card/50 border border-border rounded-xl p-6">
                    <h4 className="font-bold text-white mb-3">Impact Play:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>□ Hand spanking</li>
                      <li>□ Paddle</li>
                      <li>□ Flogger</li>
                      <li>□ Crop</li>
                      <li>□ Cane (advanced)</li>
                      <li>□ Belt</li>
                      <li>□ Face slapping</li>
                      <li>□ Body punching (advanced)</li>
                    </ul>
                  </div>
                  <div className="bg-card/50 border border-border rounded-xl p-6">
                    <h4 className="font-bold text-white mb-3">Sensation Play:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>□ Blindfolds</li>
                      <li>□ Feathers/tickling</li>
                      <li>□ Ice/temperature play</li>
                      <li>□ Wax play</li>
                      <li>□ Pinwheels</li>
                      <li>□ Nipple clamps</li>
                      <li>□ Electrostimulation</li>
                      <li>□ Scratching/nails</li>
                    </ul>
                  </div>
                  <div className="bg-card/50 border border-border rounded-xl p-6">
                    <h4 className="font-bold text-white mb-3">Power Exchange:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>□ <Link to="/guide/glossary" className="text-purple-400 hover:underline">Dominant</Link>/<Link to="/guide/glossary" className="text-purple-400 hover:underline">submissive</Link> dynamic</li>
                      <li>□ Master/slave dynamic</li>
                      <li>□ Service submission</li>
                      <li>□ Rules and protocols</li>
                      <li>□ Collaring</li>
                      <li>□ Titles (Sir, Ma'am, etc.)</li>
                      <li>□ 24/7 dynamics</li>
                      <li>□ <Link to="/guide/glossary" className="text-purple-400 hover:underline">TPE</Link> (Total Power Exchange)</li>
                    </ul>
                  </div>
                  <div className="bg-card/50 border border-border rounded-xl p-6">
                    <h4 className="font-bold text-white mb-3">Role Play:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>□ Age play (adult role play)</li>
                      <li>□ Pet play</li>
                      <li>□ Teacher/student</li>
                      <li>□ Boss/employee</li>
                      <li>□ Stranger scenarios</li>
                      <li>□ Interrogation/captor</li>
                      <li>□ Medical play</li>
                      <li>□ Uniform/costume</li>
                    </ul>
                  </div>
                  <div className="bg-card/50 border border-border rounded-xl p-6">
                    <h4 className="font-bold text-white mb-3">Psychological:</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>□ Humiliation (light)</li>
                      <li>□ Degradation</li>
                      <li>□ Praise kink</li>
                      <li>□ Objectification</li>
                      <li>□ Orgasm control/denial</li>
                      <li>□ Forced orgasms</li>
                      <li>□ Exhibitionism</li>
                      <li>□ Voyeurism</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6 mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Download className="w-5 h-5 text-purple-500" />
                    <h4 className="font-bold text-white">Pro Tip: Compare Lists</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Fill out the checklist separately, then compare. Look for areas where you both scored 3+. Those are your starting points! Mismatches aren't problems—they're opportunities for discussion.
                  </p>
                </div>
              </section>

              <section id="limits" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Hard Limits vs. Soft Limits</h2>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                    <h4 className="font-bold text-red-400 mb-3">Hard Limits</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Activities that are <strong>absolutely off the table</strong>. No negotiation, no "maybe later," no exceptions. These should never be pushed or tested.
                    </p>
                    <p className="text-xs text-muted-foreground italic">
                      Examples: Anything non-consensual, blood play, permanent marks, specific triggers from trauma
                    </p>
                  </div>
                  <div className="bg-amber-900/20 border border-amber-500/30 rounded-xl p-6">
                    <h4 className="font-bold text-amber-400 mb-3">Soft Limits</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Activities you're <strong>hesitant about but open to exploring</strong> under the right circumstances—with discussion, trust-building, or gradual introduction.
                    </p>
                    <p className="text-xs text-muted-foreground italic">
                      Examples: "I've never tried wax play but I'm curious," "Maybe spanking after more trust is built"
                    </p>
                  </div>
                </div>

                <div className="bg-card/50 border border-border rounded-xl p-4 mb-6">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-white">Limits Can Change:</strong> What's a hard limit today might become a soft limit after years of trust-building. What's exciting now might become a limit after a bad experience. Revisit regularly.
                  </p>
                </div>
              </section>

              <section id="safewords" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Shield className="w-8 h-8 text-green-500" />
                  Safe Words & Signals
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  <Link to="/guide/glossary" className="text-purple-400 hover:underline">Safe words</Link> are non-negotiable. Every scene needs a clear way to communicate "stop" that won't be mistaken for roleplay.
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-4 text-center">
                    <span className="text-3xl font-bold text-green-400">GREEN</span>
                    <p className="text-sm text-muted-foreground mt-2">"Good to go, keep going, more please"</p>
                  </div>
                  <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-4 text-center">
                    <span className="text-3xl font-bold text-yellow-400">YELLOW</span>
                    <p className="text-sm text-muted-foreground mt-2">"Approaching limit, slow down, check in"</p>
                  </div>
                  <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-4 text-center">
                    <span className="text-3xl font-bold text-red-400">RED</span>
                    <p className="text-sm text-muted-foreground mt-2">"Stop everything immediately"</p>
                  </div>
                </div>

                <div className="bg-card/50 border border-border rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-3">Non-Verbal Signals:</h4>
                  <p className="text-sm text-muted-foreground mb-3">For scenes where verbal communication isn't possible (gags, intense headspace):</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• <strong className="text-white">Drop a ball</strong> — Hold a ball; dropping it = red</li>
                    <li>• <strong className="text-white">Tap three times</strong> — Rapid tapping on any surface</li>
                    <li>• <strong className="text-white">Squeeze hand</strong> — Specific pattern of squeezes</li>
                    <li>• <strong className="text-white">Grunt patterns</strong> — Agreed-upon sounds</li>
                    <li>• <strong className="text-white">Bell or clicker</strong> — Noise-making device in hand</li>
                  </ul>
                </div>
              </section>

              <section id="contracts" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <FileText className="w-8 h-8 text-blue-500" />
                  Scene Contract Templates
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Written contracts aren't legally binding, but they're valuable tools for clarity and ceremony. Here are templates you can customize:
                </p>

                <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-4">Basic Scene Agreement Template:</h4>
                  <div className="bg-background/50 rounded-lg p-4 text-sm text-muted-foreground font-mono">
                    <p className="mb-2"><strong className="text-white">Date:</strong> _______________</p>
                    <p className="mb-2"><strong className="text-white">Participants:</strong> _______________</p>
                    <p className="mb-4"><strong className="text-white">Scene Type:</strong> _______________</p>
                    
                    <p className="mb-2"><strong className="text-white">Activities Included:</strong></p>
                    <p className="mb-4">□ ___ □ ___ □ ___ □ ___</p>
                    
                    <p className="mb-2"><strong className="text-white">Hard Limits:</strong></p>
                    <p className="mb-4">_________________________________</p>
                    
                    <p className="mb-2"><strong className="text-white">Safe Words:</strong></p>
                    <p className="mb-4">Green: ___ Yellow: ___ Red: ___</p>
                    
                    <p className="mb-2"><strong className="text-white">Aftercare Needs:</strong></p>
                    <p className="mb-4">_________________________________</p>
                    
                    <p className="mb-2"><strong className="text-white">Signatures:</strong></p>
                    <p>_______________ _______________</p>
                  </div>
                </div>

                <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-4">Ongoing D/s Dynamic Contract Elements:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Roles and titles to be used</li>
                    <li>• Daily/weekly protocols and rituals</li>
                    <li>• Communication expectations</li>
                    <li>• Punishments and rewards system</li>
                    <li>• Relationship boundaries (24/7 vs. scenes only)</li>
                    <li>• Review/renegotiation schedule</li>
                    <li>• Exit clause (how either party can end the dynamic)</li>
                  </ul>
                </div>
              </section>

              <section id="making-it-sexy" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Making Negotiation Sexy</h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Here's how experienced kinksters turn "the talk" into foreplay:
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-card/50 border border-border rounded-xl p-4">
                    <h4 className="font-bold text-pink-400 mb-2">Share Fantasies in Detail</h4>
                    <p className="text-sm text-muted-foreground">
                      Instead of "I like bondage," try: "I want you to tie my wrists above my head, blindfold me, and make me guess what you're going to do next..." Let the description build heat.
                    </p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-xl p-4">
                    <h4 className="font-bold text-purple-400 mb-2">Use "What If" Games</h4>
                    <p className="text-sm text-muted-foreground">
                      "What if I pulled your hair while...?" "What if I made you beg before...?" Turn limits-finding into a flirtatious exploration.
                    </p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-xl p-4">
                    <h4 className="font-bold text-blue-400 mb-2">Fill Out Checklists Together</h4>
                    <p className="text-sm text-muted-foreground">
                      Sit together, go through each item, discuss reactions. Watch each other's faces as you discover shared interests.
                    </p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-xl p-4">
                    <h4 className="font-bold text-amber-400 mb-2">Set the Scene</h4>
                    <p className="text-sm text-muted-foreground">
                      Wine, candles, comfortable space. Treat the conversation as an intimate date, not a business meeting.
                    </p>
                  </div>
                </div>
              </section>

              {/* Final Section */}
              <section className="mb-12">
                <div className="bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 rounded-xl p-6 border border-purple-500/30">
                  <p className="text-muted-foreground leading-relaxed">
                    <strong className="text-white">Remember:</strong> Negotiation isn't a one-time event—it's an ongoing conversation. Check in before scenes, during scenes, after scenes. As you grow together, your interests and limits will evolve. Keep talking.
                  </p>
                </div>
              </section>
            </article>

            {/* Related Articles */}
            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="text-xl font-bold mb-6">Continue Your Education</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Link to="/blog/bdsm-beginners-guide" className="bg-card/50 border border-border rounded-xl p-4 hover:border-purple-500/50 transition-colors">
                  <span className="text-xs text-red-500 font-semibold">BDSM & Kink</span>
                  <h4 className="font-bold text-white mt-1 mb-2">BDSM for Beginners</h4>
                  <p className="text-sm text-muted-foreground">Start your kink journey safely.</p>
                </Link>
                <Link to="/blog/bdsm-aftercare-guide" className="bg-card/50 border border-border rounded-xl p-4 hover:border-pink-500/50 transition-colors">
                  <span className="text-xs text-red-500 font-semibold">BDSM & Kink</span>
                  <h4 className="font-bold text-white mt-1 mb-2">The Power of Aftercare</h4>
                  <p className="text-sm text-muted-foreground">Essential post-scene care.</p>
                </Link>
                <Link to="/start/consent-basics" className="bg-card/50 border border-border rounded-xl p-4 hover:border-green-500/50 transition-colors">
                  <span className="text-xs text-green-500 font-semibold">Start Here</span>
                  <h4 className="font-bold text-white mt-1 mb-2">Consent Basics</h4>
                  <p className="text-sm text-muted-foreground">Foundation of all BDSM.</p>
                </Link>
                <Link to="/quiz" className="bg-card/50 border border-border rounded-xl p-4 hover:border-amber-500/50 transition-colors">
                  <span className="text-xs text-amber-500 font-semibold">Interactive</span>
                  <h4 className="font-bold text-white mt-1 mb-2">BDSM Quiz</h4>
                  <p className="text-sm text-muted-foreground">Discover your preferences.</p>
                </Link>
              </div>

              <h3 className="text-xl font-bold mb-4">Helpful Resources</h3>
              <div className="flex flex-wrap gap-3">
                <Link to="/guide/glossary" className="text-sm bg-card/50 border border-border rounded-full px-4 py-2 hover:border-purple-500/50 transition-colors">
                  📖 Lifestyle Glossary
                </Link>
                <Link to="/blog/consent-golden-rules" className="text-sm bg-card/50 border border-border rounded-full px-4 py-2 hover:border-purple-500/50 transition-colors">
                  ✓ Golden Rules of Consent
                </Link>
                <Link to="/guide/safety" className="text-sm bg-card/50 border border-border rounded-full px-4 py-2 hover:border-purple-500/50 transition-colors">
                  🛡️ Safety Guide
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

export default BlogBDSMNegotiationChecklist;
