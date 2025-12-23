import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Shield, Activity, CheckCircle, MessageCircle, Heart, AlertTriangle, BookOpen, Calendar } from "lucide-react";

const BlogSaferSexGuide = () => {
  return (
    <>
      <SEO
        title="Safer Sex in the Lifestyle: 2026 Guide to STI Testing, Barriers & Conversations | SPICE"
        description="Complete 2026 guide to sexual health in swinging and ENM. STI testing protocols, best testing services, barrier methods, and how to have honest health conversations."
        keywords="STI testing swingers, safer sex lifestyle, sexual health ENM, STI testing guide 2026, barrier methods, condom use swinging, sexual health conversations"
        canonical="https://thespiceapp.com/blog/safer-sex-lifestyle-guide"
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
                <span className="text-xs text-muted-foreground">18 min read</span>
                <span className="text-xs text-muted-foreground">Updated January 2025</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-green-400 bg-clip-text text-transparent">
                Safer Sex in the Lifestyle: 2026 Guide to STI Testing, Barriers, and Honest Conversations
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Protecting yourself and your partners is the foundation of ethical play. Here's everything you need to know about sexual health in the lifestyle—updated for 2026.
              </p>
            </div>

            {/* Featured Section */}
            <div className="bg-gradient-to-r from-green-500/20 via-blue-500/20 to-green-500/20 rounded-2xl p-12 mb-12 text-center border border-green-500/30">
              <Activity className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <p className="text-muted-foreground">Your Complete Sexual Health Playbook</p>
            </div>

            {/* Table of Contents */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 mb-12">
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-green-500" />
                In This Guide
              </h2>
              <ul className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                <li><a href="#testing-schedule" className="hover:text-green-500">→ Testing Schedule</a></li>
                <li><a href="#what-to-test" className="hover:text-green-500">→ What to Test For</a></li>
                <li><a href="#testing-services" className="hover:text-green-500">→ Best Testing Services</a></li>
                <li><a href="#sharing-results" className="hover:text-green-500">→ Sharing Results</a></li>
                <li><a href="#barrier-methods" className="hover:text-green-500">→ Barrier Methods</a></li>
                <li><a href="#prep-pep" className="hover:text-green-500">→ PrEP and PEP</a></li>
                <li><a href="#conversations" className="hover:text-green-500">→ Having the Talk</a></li>
                <li><a href="#if-positive" className="hover:text-green-500">→ If You Test Positive</a></li>
              </ul>
            </div>

            {/* Article Content */}
            <article className="prose prose-invert max-w-none">
              <section className="mb-12">
                <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-green-400 mb-3">The Lifestyle Mindset on Sexual Health:</h4>
                  <p className="text-muted-foreground">
                    In the lifestyle community, talking about sexual health isn't awkward—it's expected. Regular testing, honest disclosure, and barrier use are signs of a responsible, experienced player. Couples who take health seriously are more attractive partners, not less.
                  </p>
                </div>
              </section>

              <section id="testing-schedule" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Calendar className="w-8 h-8 text-blue-500" />
                  STI Testing Schedule
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  How often you test depends on how active you are. Here's a general guideline:
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-card/50 border border-border rounded-xl p-6">
                    <h4 className="font-bold text-white mb-2">Very Active (Multiple partners monthly)</h4>
                    <p className="text-sm text-muted-foreground">Test every 4-6 weeks. Consider PrEP if not already on it.</p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-xl p-6">
                    <h4 className="font-bold text-white mb-2">Moderately Active (Few times a month)</h4>
                    <p className="text-sm text-muted-foreground">Test every 2-3 months. Stay current with regular partners' status.</p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-xl p-6">
                    <h4 className="font-bold text-white mb-2">Occasionally Active (Few times a year)</h4>
                    <p className="text-sm text-muted-foreground">Test before and 2-4 weeks after each encounter with new partners.</p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-xl p-6">
                    <h4 className="font-bold text-white mb-2">After Any Potential Exposure</h4>
                    <p className="text-sm text-muted-foreground">Condom break, unexpected fluid contact, or partner discloses something: test at 2 weeks and again at 6 weeks.</p>
                  </div>
                </div>

                <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-4 mb-6">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-yellow-400">Window Periods Matter:</strong> Some STIs don't show up immediately. HIV can take 2-4 weeks (with modern tests), syphilis 3-6 weeks, and herpes antibodies 4-6 weeks. Plan your testing accordingly.
                  </p>
                </div>
              </section>

              <section id="what-to-test" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Activity className="w-8 h-8 text-green-500" />
                  What to Test For
                </h2>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6">
                    <h4 className="font-bold text-green-400 mb-4">Standard Panel (Every Test)</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>HIV 1 & 2 (4th gen antibody/antigen)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Syphilis (RPR or similar)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Gonorrhea - 3 site (throat, urine/genital, rectal)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Chlamydia - 3 site (throat, urine/genital, rectal)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Hepatitis B & C</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6">
                    <h4 className="font-bold text-blue-400 mb-4">Additional Tests (Periodically)</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>HSV-1 & HSV-2 (herpes) - often not standard</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>Mycoplasma genitalium</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>Trichomoniasis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                        <span>HPV (if symptomatic or via Pap/HPV co-test)</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-4 mb-6">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-yellow-400">Important:</strong> Ask specifically for 3-site testing (throat, genital, rectal) for gonorrhea and chlamydia. Standard urine-only tests miss oral and rectal infections, which are common in the lifestyle.
                  </p>
                </div>
              </section>

              <section id="testing-services" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Best Testing Services in 2026</h2>

                <div className="space-y-4 mb-6">
                  <div className="bg-card/50 border border-border rounded-xl p-6">
                    <h4 className="font-bold text-primary mb-2">At-Home Testing Kits</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• <strong>Everlywell:</strong> Comprehensive panels, easy to use, results in days</li>
                      <li>• <strong>LetsGetChecked:</strong> Excellent customer support, multiple panel options</li>
                      <li>• <strong>myLAB Box:</strong> Good for couples packages</li>
                      <li>• <strong>STDcheck.com:</strong> Lab-based accuracy with home collection</li>
                    </ul>
                    <p className="text-xs text-muted-foreground mt-2">Cost: $100-300 per comprehensive panel</p>
                  </div>
                  
                  <div className="bg-card/50 border border-border rounded-xl p-6">
                    <h4 className="font-bold text-primary mb-2">In-Person Options</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• <strong>Planned Parenthood:</strong> Sliding scale fees, judgment-free</li>
                      <li>• <strong>LGBTQ+ health centers:</strong> Often most comprehensive testing available</li>
                      <li>• <strong>Urgent care clinics:</strong> Quick and convenient</li>
                      <li>• <strong>Your primary care doctor:</strong> May need to specifically request full panel</li>
                      <li>• <strong>Local health departments:</strong> Often free or very low cost</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-card/50 border border-border rounded-xl p-4 mb-6">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-white">Pro Tip:</strong> Set a recurring calendar reminder for testing. Treat it like any other health maintenance—dental cleanings, annual physicals, STI panels.
                  </p>
                </div>
              </section>

              <section id="sharing-results" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <MessageCircle className="w-8 h-8 text-purple-500" />
                  Sharing Results Without Awkwardness
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  In the lifestyle, sharing test results is normal. Here's how to do it smoothly:
                </p>

                <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-4">Best Practices for Sharing:</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Screenshot your results:</strong> Most testing services provide downloadable PDFs or app results. Screenshot and save.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Bring it up naturally:</strong> "Before we get together, let's swap test results. Here are ours from [date]."</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Date matters:</strong> Results from 6 months ago aren't current. Aim for results within the last 4-6 weeks.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Lead by example:</strong> Share yours first. It sets the tone and shows you're serious about safety.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Don't be offended if asked:</strong> Experienced players will ask. Take it as a good sign.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card/50 border border-border rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-3">Sample Conversation:</h4>
                  <p className="text-sm text-muted-foreground italic">
                    "Hey, we're really excited about meeting up! Before we do, we always like to exchange recent test results. Here's our panel from two weeks ago [screenshot]. Would you mind sharing yours? We find this helps everyone relax and enjoy themselves more."
                  </p>
                </div>
              </section>

              <section id="barrier-methods" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Shield className="w-8 h-8 text-blue-500" />
                  Barrier Methods
                </h2>

                <div className="space-y-6 mb-6">
                  <div className="bg-card/50 border border-border rounded-xl p-6">
                    <h4 className="font-bold text-white mb-3">External (Male) Condoms</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      The standard for penetrative sex with non-primary partners. Effective against most STIs when used correctly.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Bring your own—know they fit and you like them</li>
                      <li>• Check expiration dates</li>
                      <li>• Use water or silicone-based lube (no oil with latex)</li>
                      <li>• Change between partners AND between holes</li>
                      <li>• Pinch tip when putting on to leave room</li>
                    </ul>
                  </div>

                  <div className="bg-card/50 border border-border rounded-xl p-6">
                    <h4 className="font-bold text-white mb-3">Internal (Female) Condoms</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Inserted into the vagina or anus. Gives the receptive partner more control over protection.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Can be inserted ahead of time</li>
                      <li>• Made of nitrile (great for latex allergies)</li>
                      <li>• Provides more coverage of external genitalia</li>
                    </ul>
                  </div>

                  <div className="bg-card/50 border border-border rounded-xl p-6">
                    <h4 className="font-bold text-white mb-3">Dental Dams</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Thin latex squares for oral sex on vulvas or anuses. Reduces transmission of herpes, HPV, and other infections.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Can cut open a condom as a DIY dam</li>
                      <li>• Add lube to the body side for better sensation</li>
                      <li>• Mark one side so you don't flip it</li>
                    </ul>
                  </div>

                  <div className="bg-card/50 border border-border rounded-xl p-6">
                    <h4 className="font-bold text-white mb-3">Gloves</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      For manual stimulation (fingering, fisting). Especially useful in group settings with multiple partners.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Nitrile gloves are latex-free and durable</li>
                      <li>• Change gloves between partners</li>
                      <li>• Also protects against hangnails and rough skin</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-4 mb-6">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-yellow-400">Real Talk About Oral:</strong> Many lifestyle participants don't use barriers for oral sex. This is a personal risk assessment. Oral transmission of most STIs is lower risk but not zero. Know the risks, test regularly, and make informed choices.
                  </p>
                </div>
              </section>

              <section id="prep-pep" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">PrEP and PEP: Beyond Barriers</h2>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6">
                    <h4 className="font-bold text-green-400 mb-3">PrEP (Pre-Exposure Prophylaxis)</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Daily pill that's 99% effective at preventing HIV when taken consistently.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Truvada or Descovy (daily pill)</li>
                      <li>• Apretude (injection every 2 months)</li>
                      <li>• Requires regular testing while on it</li>
                      <li>• Many insurance plans cover it</li>
                      <li>• Common among active lifestyle participants</li>
                    </ul>
                  </div>
                  <div className="bg-orange-900/20 border border-orange-500/30 rounded-xl p-6">
                    <h4 className="font-bold text-orange-400 mb-3">PEP (Post-Exposure Prophylaxis)</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Emergency treatment after potential HIV exposure. Must start within 72 hours.
                    </p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Available at ERs and urgent cares</li>
                      <li>• 28-day course of medication</li>
                      <li>• Most effective when started ASAP</li>
                      <li>• For: condom breaks, assault, unexpected exposure</li>
                      <li>• Don't wait—time matters</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section id="conversations" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Heart className="w-8 h-8 text-pink-500" />
                  Having the Sexual Health Talk
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Discussing sexual health should happen before any physical contact. Here's how to navigate these conversations:
                </p>

                <div className="bg-card/50 border border-border rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-4">Questions to Ask New Partners:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• "When were you last tested, and what was on the panel?"</li>
                    <li>• "Have you had any new partners since then?"</li>
                    <li>• "What's your approach to barriers?"</li>
                    <li>• "Is there anything we should know about your status?"</li>
                    <li>• "Are you on PrEP?"</li>
                    <li>• "What are your boundaries around safer sex?"</li>
                  </ul>
                </div>

                <div className="bg-card/50 border border-border rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-4">If Someone Discloses an STI:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Thank them for telling you—honesty takes courage</li>
                    <li>• Ask questions to understand (treatment status, transmission risk)</li>
                    <li>• Research before deciding—many STIs are manageable</li>
                    <li>• Make an informed choice about proceeding</li>
                    <li>• Don't shame or stigmatize</li>
                  </ul>
                </div>
              </section>

              <section id="if-positive" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <AlertTriangle className="w-8 h-8 text-orange-500" />
                  If You Test Positive
                </h2>

                <div className="bg-orange-900/20 border border-orange-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-4">Steps to Take:</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Don't panic:</strong> Most STIs are treatable or manageable. This isn't the end.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Get treatment:</strong> Follow your healthcare provider's guidance immediately.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Notify recent partners:</strong> Anyone you've been with during the possible infection window needs to know.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Abstain until cleared:</strong> Wait for your provider to confirm you're no longer contagious.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Learn from it:</strong> Assess how transmission happened and adjust practices if needed.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card/50 border border-border rounded-xl p-4">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-white">Remember:</strong> Having an STI doesn't make you "dirty" or irresponsible. STIs happen to careful people too. What matters is how you handle it—getting treatment and being honest with partners.
                  </p>
                </div>
              </section>

              {/* Final Section */}
              <section className="mb-12">
                <div className="bg-gradient-to-r from-green-500/20 via-blue-500/20 to-green-500/20 rounded-2xl p-8 border border-green-500/30">
                  <h3 className="text-2xl font-bold mb-4 text-center">Health Is Sexy</h3>
                  <p className="text-muted-foreground text-center mb-6">
                    Taking sexual health seriously is a sign of a mature, experienced player. The couples and singles who prioritize testing and honest communication are the ones who thrive in the lifestyle long-term. Protect yourself, protect your partners, and enjoy with peace of mind.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      to="/blog/consent-golden-rules"
                      className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-all"
                    >
                      Golden Rules of Consent
                    </Link>
                    <Link
                      to="/blog/solo-dates-safety-tips"
                      className="inline-flex items-center justify-center px-6 py-3 border border-green-500 text-green-500 font-semibold rounded-full hover:bg-green-500/10 transition-all"
                    >
                      Solo Date Safety Tips
                    </Link>
                  </div>
                </div>
              </section>

              {/* Related Articles */}
              <section>
                <h3 className="text-2xl font-bold mb-6">Continue Learning About Safety</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link to="/blog/consent-golden-rules" className="bg-card/50 border border-border rounded-xl p-4 hover:border-green-500/50 transition-all group">
                    <span className="text-xs text-green-500">CONSENT & SAFETY</span>
                    <h4 className="font-bold group-hover:text-green-500 transition-colors mt-1">Golden Rules of Consent</h4>
                    <p className="text-sm text-muted-foreground mt-2">Master the art of enthusiastic consent.</p>
                  </Link>
                  <Link to="/blog/alcohol-substances-consent" className="bg-card/50 border border-border rounded-xl p-4 hover:border-green-500/50 transition-all group">
                    <span className="text-xs text-green-500">CONSENT & SAFETY</span>
                    <h4 className="font-bold group-hover:text-green-500 transition-colors mt-1">Alcohol, Substances & Consent</h4>
                    <p className="text-sm text-muted-foreground mt-2">Why a clear head makes everything better.</p>
                  </Link>
                  <Link to="/blog/aftercare-emotional-safety" className="bg-card/50 border border-border rounded-xl p-4 hover:border-green-500/50 transition-all group">
                    <span className="text-xs text-green-500">CONSENT & SAFETY</span>
                    <h4 className="font-bold group-hover:text-green-500 transition-colors mt-1">Aftercare & Emotional Safety</h4>
                    <p className="text-sm text-muted-foreground mt-2">Reconnection after play.</p>
                  </Link>
                  <Link to="/blog/swinging-health-safety" className="bg-card/50 border border-border rounded-xl p-4 hover:border-green-500/50 transition-all group">
                    <span className="text-xs text-primary">SWINGERS</span>
                    <h4 className="font-bold group-hover:text-primary transition-colors mt-1">Swinging Health & Safety</h4>
                    <p className="text-sm text-muted-foreground mt-2">Complete swinger safety guide.</p>
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

export default BlogSaferSexGuide;
