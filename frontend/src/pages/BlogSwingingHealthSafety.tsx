import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Shield, Heart, CheckCircle, AlertTriangle, Activity, MessageCircle, Users, BookOpen, X } from "lucide-react";

const BlogSwingingHealthSafety = () => {
  return (
    <>
      <SEO
        title="Health, Safety & Consent: Non-Negotiables for Responsible Swinging | SPICE"
        description="Complete guide to STI testing, safer sex practices, boundary setting, and consent protocols for swinging couples. Protect yourself and your partners while enjoying the lifestyle."
        keywords="swinging safety, STI testing swingers, consent in swinging, safer sex practices, swinger health, lifestyle safety tips, sexual health swingers"
        canonical="https://thespiceapp.com/blog/swinging-health-safety"
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
                <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">SWINGERS</span>
                <span className="text-xs text-muted-foreground">16 min read</span>
                <span className="text-xs text-muted-foreground">Updated January 2025</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                Health, Safety, and Consent: The Non-Negotiables for Responsible Swinging Couples
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Enjoying the lifestyle means protecting yourself, your partner, and everyone you play with. This comprehensive guide covers everything you need to know about staying safe.
              </p>
            </div>

            {/* Featured Section */}
            <div className="bg-gradient-to-r from-green-500/20 via-primary/20 to-green-500/20 rounded-2xl p-12 mb-12 text-center border border-green-500/30">
              <Shield className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <p className="text-muted-foreground">Your Complete Health & Safety Playbook</p>
            </div>

            {/* Important Notice */}
            <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 mb-12">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-red-400 mb-2">This Information Saves Lives</h3>
                  <p className="text-sm text-muted-foreground">
                    The practices in this guide aren't suggestions—they're the foundation of ethical swinging. Ignoring health and safety protocols puts you, your partner, and the entire community at risk. Read this carefully. Share it with play partners. Make it part of your lifestyle.
                  </p>
                </div>
              </div>
            </div>

            {/* Table of Contents */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 mb-12">
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                In This Guide
              </h2>
              <ul className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                <li><a href="#sti-testing" className="hover:text-primary">→ STI Testing Protocols</a></li>
                <li><a href="#safer-sex" className="hover:text-primary">→ Safer Sex Practices</a></li>
                <li><a href="#consent" className="hover:text-primary">→ Consent & Communication</a></li>
                <li><a href="#boundaries" className="hover:text-primary">→ Setting Boundaries</a></li>
                <li><a href="#sobriety" className="hover:text-primary">→ Alcohol & Substances</a></li>
                <li><a href="#handling-no" className="hover:text-primary">→ Handling "No"</a></li>
                <li><a href="#after-play" className="hover:text-primary">→ After Play Care</a></li>
                <li><a href="#emergency" className="hover:text-primary">→ Emergency Situations</a></li>
              </ul>
            </div>

            {/* Article Content */}
            <article className="prose prose-invert max-w-none">
              <section id="sti-testing" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Activity className="w-8 h-8 text-green-500" />
                  STI Testing Protocols
                </h2>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Regular testing is the cornerstone of responsible swinging. Even with protection, testing catches what barriers might miss. Here's how to do it right.
                </p>

                <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-4">Recommended Testing Schedule:</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Active swingers (multiple partners monthly):</strong> Every 4-6 weeks</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Occasional players (few times a year):</strong> Every 3 months</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>After any condom failure or risky exposure:</strong> 2 weeks and 6 weeks later</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Before playing with new regular partners:</strong> Fresh panel recommended</span>
                    </li>
                  </ul>
                </div>

                <h4 className="font-bold text-white mb-4">What to Test For:</h4>
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-card/50 border border-border rounded-lg p-4">
                    <h5 className="font-bold text-primary mb-2">Standard Panel</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• HIV (1 & 2)</li>
                      <li>• Syphilis</li>
                      <li>• Gonorrhea (3-site: throat, urine, rectal)</li>
                      <li>• Chlamydia (3-site)</li>
                      <li>• Hepatitis B & C</li>
                    </ul>
                  </div>
                  <div className="bg-card/50 border border-border rounded-lg p-4">
                    <h5 className="font-bold text-primary mb-2">Additional Tests</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• HSV-1 & HSV-2 (herpes) - often not included</li>
                      <li>• Mycoplasma genitalium</li>
                      <li>• Trichomoniasis</li>
                      <li>• HPV (if symptomatic)</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-4 mb-6">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-yellow-400">Testing Pro Tip:</strong> Ask specifically for oral and rectal swabs in addition to urine testing. Many STIs can be present in the throat or rectum without genital symptoms. Standard urine-only tests miss these.
                  </p>
                </div>

                <h4 className="font-bold text-white mb-4">Where to Get Tested:</h4>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li>• <strong>Planned Parenthood:</strong> Affordable, judgment-free, comprehensive</li>
                  <li>• <strong>Urgent care clinics:</strong> Many offer STI panels</li>
                  <li>• <strong>At-home kits:</strong> Everlywell, LetsGetChecked, STDcheck.com</li>
                  <li>• <strong>Your primary care doctor:</strong> May require explicitly requesting full panel</li>
                  <li>• <strong>LGBTQ+ health centers:</strong> Often most comprehensive testing</li>
                </ul>

                <div className="bg-card/50 border border-border rounded-xl p-4">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-white">Sharing Results:</strong> Many couples share screenshots of recent test results with potential partners. This isn't about distrust—it's about building a culture of transparency and safety in the lifestyle community.
                  </p>
                </div>
              </section>

              <section id="safer-sex" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Shield className="w-8 h-8 text-blue-500" />
                  Safer Sex Practices
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  No protection is 100% effective, but combining multiple strategies significantly reduces risk. Here's what responsible swingers do.
                </p>

                <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-4">Barrier Methods:</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>External condoms:</strong> Use for all penetrative sex with partners outside your primary relationship. Always.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Internal (female) condoms:</strong> Alternative option that gives women more control</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Dental dams:</strong> For oral sex on vulvas and anuses. Or cut open a condom.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Gloves:</strong> For manual stimulation, especially with multiple partners in same session</span>
                    </li>
                  </ul>
                </div>

                <h4 className="font-bold text-white mb-4">Condom Best Practices:</h4>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-4">
                    <h5 className="font-bold text-green-400 mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      DO
                    </h5>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>✓ Bring your own—know they fit and you like them</li>
                      <li>✓ Check expiration dates</li>
                      <li>✓ Store properly (not in wallet/car)</li>
                      <li>✓ Use water or silicone-based lube</li>
                      <li>✓ Change condoms between partners</li>
                      <li>✓ Change condoms between holes</li>
                      <li>✓ Pinch tip when putting on</li>
                    </ul>
                  </div>
                  <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-4">
                    <h5 className="font-bold text-red-400 mb-3 flex items-center gap-2">
                      <X className="w-5 h-5" />
                      DON'T
                    </h5>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>✗ Double-bag (increases friction and breakage)</li>
                      <li>✗ Use oil-based lubes with latex</li>
                      <li>✗ Reuse condoms ever</li>
                      <li>✗ Use novelty or "glow" condoms for penetration</li>
                      <li>✗ Remove without being asked/agreed</li>
                      <li>✗ Assume "I'm clean" means tested</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-purple-400 mb-3">PrEP & PEP</h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    <strong>PrEP (Pre-Exposure Prophylaxis):</strong> Daily pill that's 99% effective at preventing HIV. Many active swingers take PrEP as an additional layer of protection alongside condoms.
                  </p>
                  <p className="text-muted-foreground text-sm">
                    <strong>PEP (Post-Exposure Prophylaxis):</strong> Emergency treatment after potential HIV exposure. Must start within 72 hours. Go to an ER or urgent care immediately if needed.
                  </p>
                </div>

                <div className="bg-card/50 border border-border rounded-xl p-4 mb-6">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-white">Oral Sex Note:</strong> Many swingers don't use barriers for oral sex. This is a personal risk assessment. Oral transmission of most STIs is possible but generally lower risk than penetrative sex. Know the risks, get tested regularly, and make informed choices.
                  </p>
                </div>
              </section>

              <section id="consent" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <MessageCircle className="w-8 h-8 text-yellow-500" />
                  Consent & Communication
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Consent isn't a one-time checkbox—it's an ongoing conversation throughout any encounter. In the lifestyle, enthusiastic, continuous consent is the standard.
                </p>

                <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-4">The Consent Framework:</h4>
                  <div className="space-y-4">
                    <div className="border-l-4 border-yellow-500 pl-4">
                      <h5 className="font-bold text-yellow-400">Freely Given</h5>
                      <p className="text-sm text-muted-foreground">No pressure, coercion, or manipulation. Each person decides independently.</p>
                    </div>
                    <div className="border-l-4 border-yellow-500 pl-4">
                      <h5 className="font-bold text-yellow-400">Reversible</h5>
                      <p className="text-sm text-muted-foreground">Anyone can change their mind at ANY time—even mid-act. Respect it immediately.</p>
                    </div>
                    <div className="border-l-4 border-yellow-500 pl-4">
                      <h5 className="font-bold text-yellow-400">Informed</h5>
                      <p className="text-sm text-muted-foreground">All parties understand what they're consenting to. No surprises.</p>
                    </div>
                    <div className="border-l-4 border-yellow-500 pl-4">
                      <h5 className="font-bold text-yellow-400">Enthusiastic</h5>
                      <p className="text-sm text-muted-foreground">"Maybe" is not yes. Look for eager, active participation.</p>
                    </div>
                    <div className="border-l-4 border-yellow-500 pl-4">
                      <h5 className="font-bold text-yellow-400">Specific</h5>
                      <p className="text-sm text-muted-foreground">Consent to one activity doesn't mean consent to all activities.</p>
                    </div>
                  </div>
                </div>

                <h4 className="font-bold text-white mb-4">Asking for Consent:</h4>
                <div className="bg-card/50 border border-border rounded-xl p-6 mb-6">
                  <p className="text-muted-foreground mb-4">Consent can be sexy. Try:</p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>"I'd love to kiss you. Would you like that?"</li>
                    <li>"Can I touch you here?"</li>
                    <li>"What would feel good right now?"</li>
                    <li>"Is it okay if I...?"</li>
                    <li>"Do you want me to keep going?"</li>
                    <li>"Tell me what you want."</li>
                  </ul>
                </div>

                <h4 className="font-bold text-white mb-4">Checking In During Play:</h4>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Watch for body language—tension, pulling away, going silent</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Verbal check-ins: "You still good?" "Feel okay?"</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Establish a safe word before play (especially for intensity play)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Traffic light system works well: Green (good), Yellow (slow down), Red (stop)</span>
                  </li>
                </ul>

                <p className="text-muted-foreground leading-relaxed">
                  For more on consent basics, see our <Link to="/start/consent-basics" className="text-primary hover:underline">Consent Basics Guide</Link>.
                </p>
              </section>

              <section id="boundaries" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Users className="w-8 h-8 text-purple-500" />
                  Setting & Communicating Boundaries
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Every couple has different comfort levels. Clearly defining and communicating boundaries—both with each other and with play partners—prevents misunderstandings and hurt feelings.
                </p>

                <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-4">Questions to Discuss with Your Partner:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Soft swap only? Full swap? Watching only?</li>
                    <li>• Same room only? Separate room okay?</li>
                    <li>• Kissing—with other partners or reserved for each other?</li>
                    <li>• Specific acts that are off-limits?</li>
                    <li>• How do we handle uneven attraction situations?</li>
                    <li>• What's our safe word or signal to leave?</li>
                    <li>• How much detail do we share afterward?</li>
                    <li>• Any specific people who are off-limits (exes, friends)?</li>
                  </ul>
                </div>

                <div className="bg-card/50 border border-border rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-4">Communicating Boundaries to Play Partners:</h4>
                  <p className="text-muted-foreground mb-4">
                    Be direct and clear. Before any play begins, share your limits:
                  </p>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>"We only do soft swap—no penetration with other partners."</li>
                    <li>"We always stay in the same room."</li>
                    <li>"Condoms are non-negotiable for everything."</li>
                    <li>"She doesn't do anal. Please don't ask."</li>
                    <li>"We need to check in with each other every 15 minutes or so."</li>
                  </ul>
                </div>

                <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-4 mb-6">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-yellow-400">Boundary Tip:</strong> It's okay to have different boundaries for different situations. You might be comfortable with more at a resort than at a local club. Boundaries can evolve over time—just make sure any changes are discussed and agreed upon by both partners.
                  </p>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Read our guide on <Link to="/blog/swinging-soft-full-swap" className="text-primary hover:underline">Soft Swap vs. Full Swap</Link> for help deciding what's right for you.
                </p>
              </section>

              <section id="sobriety" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <AlertTriangle className="w-8 h-8 text-orange-500" />
                  Alcohol & Substances
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Let's be real: alcohol is common at lifestyle events. But there's a crucial line between social drinking and impaired decision-making.
                </p>

                <div className="bg-orange-900/20 border border-orange-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-orange-400 mb-4">The Sober Consent Rule:</h4>
                  <p className="text-muted-foreground mb-4">
                    If someone is visibly intoxicated, they cannot give meaningful consent. Period. This isn't negotiable, even if they're saying yes. Even if you've played before. Even if they'll "regret missing out."
                  </p>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• <strong>Signs of impairment:</strong> Slurred speech, unsteady walking, confusion, drowsiness</li>
                    <li>• <strong>What to do:</strong> Pause play. Get them water. Make sure they're safe. Try another time.</li>
                    <li>• <strong>Remember:</strong> An intoxicated "yes" is not consent.</li>
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-4">
                    <h5 className="font-bold text-green-400 mb-2">Smart Drinking Guidelines</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Set a drink limit before the event</li>
                      <li>• Alternate alcoholic drinks with water</li>
                      <li>• Eat before and during</li>
                      <li>• Discuss limits with your partner</li>
                      <li>• Have a designated "checker" between you</li>
                    </ul>
                  </div>
                  <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-4">
                    <h5 className="font-bold text-red-400 mb-2">Red Flags to Watch</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Someone pushing drinks on others</li>
                      <li>• Partner being isolated from their spouse</li>
                      <li>• Sudden behavioral changes</li>
                      <li>• Someone who can't stand steady</li>
                      <li>• Drink left unattended</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-card/50 border border-border rounded-xl p-4">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-white">About Other Substances:</strong> Whatever your personal choices, the lifestyle community generally expects sober-enough consent. Many clubs prohibit drug use on premises. Be aware of how any substance affects your judgment and physical ability to read situations.
                  </p>
                </div>
              </section>

              <section id="handling-no" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Handling "No" Gracefully</h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Rejection is part of the lifestyle. Not every couple will be a match. Not every evening will lead to play. How you handle "no" defines you in the community.
                </p>

                <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-green-400 mb-4">When You're Rejected:</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Say:</strong> "No problem at all! It was great chatting with you."</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Do:</strong> Smile genuinely and move on with dignity</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Don't:</strong> Ask why, argue, sulk, or spread negativity</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Remember:</strong> It's not personal. Chemistry is complex.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-blue-400 mb-4">When You Need to Reject:</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Be kind but clear:</strong> "Thanks for the interest, but we're not feeling a connection."</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span><strong>You don't owe an explanation:</strong> "Not tonight" is enough</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Don't lead people on:</strong> Be honest rather than making excuses you don't mean</span>
                    </li>
                  </ul>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  For more on navigating social situations, see our <Link to="/blog/swinging-etiquette-rules" className="text-primary hover:underline">Swinging Etiquette Guide</Link>.
                </p>
              </section>

              <section id="after-play" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Heart className="w-8 h-8 text-pink-500" />
                  After Play: Reconnection & Care
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  What happens after play is as important as what happens during. Proper aftercare strengthens your relationship and processes the experience.
                </p>

                <div className="bg-pink-900/20 border border-pink-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-4">Immediate Aftercare (that night):</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Physical reconnection—cuddle, hold hands, make eye contact</li>
                    <li>• Quick check-in: "How are you feeling?"</li>
                    <li>• Hydrate and have a snack</li>
                    <li>• If needed, shower together (physically cleansing can be emotionally cleansing)</li>
                    <li>• Sleep in physical contact if comfortable</li>
                  </ul>
                </div>

                <div className="bg-card/50 border border-border rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-4">The Next Day Debrief:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• When you're both rested and clear-headed, talk through the experience</li>
                    <li>• What did you enjoy? What didn't work?</li>
                    <li>• Any emotions coming up—good or challenging?</li>
                    <li>• Anything you'd do differently?</li>
                    <li>• Reaffirm your connection and love</li>
                  </ul>
                </div>

                <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-4 mb-6">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-yellow-400">Important:</strong> It's normal for emotions to surface 24-48 hours later. Some people experience "drop"—a dip in mood after intense experiences. Be patient with yourself and your partner. If challenging feelings persist, address them together or consider a lifestyle-aware counselor.
                  </p>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Read our guide on <Link to="/blog/swinging-jealousy-tools" className="text-primary hover:underline">Managing Jealousy</Link> for tools to handle difficult emotions.
                </p>
              </section>

              <section id="emergency" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <AlertTriangle className="w-8 h-8 text-red-500" />
                  Emergency Situations
                </h2>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-red-400 mb-4">If Consent is Violated:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• <strong>Stop immediately</strong> and remove yourself/partner from the situation</li>
                    <li>• <strong>Report to venue staff</strong> if at a club—they take this seriously</li>
                    <li>• <strong>Document</strong> what happened while memory is fresh</li>
                    <li>• <strong>Seek support</strong>—RAINN hotline: 1-800-656-4673</li>
                    <li>• <strong>Consider reporting</strong> to authorities if appropriate</li>
                    <li>• <strong>Get tested</strong> and consider PEP if penetration occurred</li>
                  </ul>
                </div>

                <div className="bg-card/50 border border-border rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-4">If There's a Health Concern:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• <strong>Condom broke:</strong> Stop, communicate, consider PEP if HIV risk, get tested at 2 and 6 weeks</li>
                    <li>• <strong>Partner discloses an STI after play:</strong> Get tested, inform other partners, don't panic—most STIs are treatable</li>
                    <li>• <strong>Symptoms appear:</strong> See a doctor promptly, abstain from play until cleared</li>
                  </ul>
                </div>

                <div className="bg-card/50 border border-border rounded-xl p-4">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-white">Community Accountability:</strong> If you witness concerning behavior, say something. Look out for other couples. A healthy lifestyle community polices itself.
                  </p>
                </div>
              </section>

              {/* Final Section */}
              <section className="mb-12">
                <div className="bg-gradient-to-r from-green-500/20 via-primary/20 to-green-500/20 rounded-2xl p-8 border border-green-500/30">
                  <h3 className="text-2xl font-bold mb-4 text-center">Safety Is Sexy</h3>
                  <p className="text-muted-foreground text-center mb-6">
                    Responsible swingers are respected swingers. When everyone prioritizes health, safety, and consent, the entire community thrives. Make these practices second nature, and you'll have better, more relaxed, more enjoyable experiences.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      to="/blog/swinging-101-beginners-guide"
                      className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all"
                    >
                      Swinging 101 Guide
                    </Link>
                    <Link
                      to="/blog/swinging-etiquette-rules"
                      className="inline-flex items-center justify-center px-6 py-3 border border-primary text-primary font-semibold rounded-full hover:bg-primary/10 transition-all"
                    >
                      Lifestyle Etiquette
                    </Link>
                  </div>
                </div>
              </section>

              {/* Related Articles */}
              <section>
                <h3 className="text-2xl font-bold mb-6">Continue Your Swinging Journey</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link to="/blog/swinging-101-beginners-guide" className="bg-card/50 border border-border rounded-xl p-4 hover:border-primary/50 transition-all group">
                    <span className="text-xs text-primary">SWINGERS</span>
                    <h4 className="font-bold group-hover:text-primary transition-colors mt-1">Swinging 101: Complete Beginner's Guide</h4>
                    <p className="text-sm text-muted-foreground mt-2">Everything you need to know to start your journey.</p>
                  </Link>
                  <Link to="/blog/swinging-jealousy-tools" className="bg-card/50 border border-border rounded-xl p-4 hover:border-primary/50 transition-all group">
                    <span className="text-xs text-primary">SWINGERS</span>
                    <h4 className="font-bold group-hover:text-primary transition-colors mt-1">Jealousy in the Lifestyle</h4>
                    <p className="text-sm text-muted-foreground mt-2">Proven tools to turn jealousy into excitement.</p>
                  </Link>
                  <Link to="/blog/swinging-vacation-guide" className="bg-card/50 border border-border rounded-xl p-4 hover:border-primary/50 transition-all group">
                    <span className="text-xs text-primary">SWINGERS</span>
                    <h4 className="font-bold group-hover:text-primary transition-colors mt-1">Ultimate Swinger Vacation Guide</h4>
                    <p className="text-sm text-muted-foreground mt-2">Top resorts, cruises, and destinations for 2025-2026.</p>
                  </Link>
                  <Link to="/blog/swinging-keeping-spark" className="bg-card/50 border border-border rounded-xl p-4 hover:border-primary/50 transition-all group">
                    <span className="text-xs text-primary">SWINGERS</span>
                    <h4 className="font-bold group-hover:text-primary transition-colors mt-1">Keeping the Spark Alive</h4>
                    <p className="text-sm text-muted-foreground mt-2">Advanced tips from veteran swingers.</p>
                  </Link>
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

export default BlogSwingingHealthSafety;
