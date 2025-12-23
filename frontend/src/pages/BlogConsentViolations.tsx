import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Shield, AlertTriangle, Heart, Users, MessageCircle, BookOpen, Phone } from "lucide-react";

const BlogConsentViolations = () => {
  return (
    <>
      <SEO
        title="When 'No' Gets Ignored: Handling Consent Violations & Protecting Boundaries | SPICE"
        description="Empowering guide on handling consent violations. Immediate responses, aftermath support, community reporting, and healing for individuals and couples."
        keywords="consent violations, boundary violations, sexual assault support, handling rejection, consent ignored, lifestyle safety, reporting consent violations"
        canonical="https://thespiceapp.com/blog/consent-violations-boundaries"
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
                <span className="text-xs text-muted-foreground">14 min read</span>
                <span className="text-xs text-muted-foreground">Updated January 2025</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                When "No" Gets Ignored: How to Handle Consent Violations and Protect Your Boundaries
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                No one should ever have to deal with this—but if it happens, you deserve to know your options. Here's how to respond, heal, and protect yourself and others.
              </p>
            </div>

            {/* Content Warning */}
            <div className="bg-red-900/30 border border-red-500/50 rounded-xl p-6 mb-12">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-red-400 mb-2">Content Warning</h3>
                  <p className="text-sm text-muted-foreground">
                    This article discusses consent violations, sexual assault, and boundary violations. If you're currently in crisis, please reach out to RAINN at 1-800-656-4673 or chat at rainn.org. Your wellbeing comes first.
                  </p>
                </div>
              </div>
            </div>

            {/* Featured Section */}
            <div className="bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 rounded-2xl p-12 mb-12 text-center border border-purple-500/30">
              <Shield className="w-16 h-16 text-purple-500 mx-auto mb-4" />
              <p className="text-muted-foreground">Your Boundaries Matter. Your Voice Matters. You Matter.</p>
            </div>

            {/* Table of Contents */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 mb-12">
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-green-500" />
                In This Guide
              </h2>
              <ul className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                <li><a href="#what-counts" className="hover:text-green-500">→ What Counts as a Violation</a></li>
                <li><a href="#immediate-response" className="hover:text-green-500">→ Immediate Response</a></li>
                <li><a href="#aftermath" className="hover:text-green-500">→ The Aftermath</a></li>
                <li><a href="#reporting" className="hover:text-green-500">→ Reporting Options</a></li>
                <li><a href="#healing" className="hover:text-green-500">→ Healing Process</a></li>
                <li><a href="#couples" className="hover:text-green-500">→ For Couples</a></li>
                <li><a href="#prevention" className="hover:text-green-500">→ Prevention Going Forward</a></li>
                <li><a href="#resources" className="hover:text-green-500">→ Resources</a></li>
              </ul>
            </div>

            {/* Article Content */}
            <article className="prose prose-invert max-w-none">
              <section className="mb-12">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  In the lifestyle community, consent is supposed to be sacred. The vast majority of people you'll meet will respect your boundaries absolutely. But violations do happen, and knowing how to respond can make a crucial difference in your safety and recovery.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  If you're reading this because something happened to you: <strong>It was not your fault.</strong> No matter what you were wearing, how much you'd had to drink, or what you'd agreed to earlier. Consent can be withdrawn at any time, and a violation is always the fault of the person who violated boundaries.
                </p>
              </section>

              <section id="what-counts" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <AlertTriangle className="w-8 h-8 text-orange-500" />
                  What Counts as a Consent Violation
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Consent violations exist on a spectrum. All are serious. All deserve to be addressed.
                </p>

                <div className="bg-orange-900/20 border border-orange-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-4">Examples of Consent Violations:</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• Continuing after someone says "stop" or "no"</li>
                    <li>• Removing protection (stealthing) without consent</li>
                    <li>• Doing an act that wasn't agreed upon</li>
                    <li>• Ignoring a safe word</li>
                    <li>• Taking photos/videos without permission</li>
                    <li>• Touching someone who hasn't consented</li>
                    <li>• Proceeding with someone who is intoxicated</li>
                    <li>• Pressuring someone until they "give in"</li>
                    <li>• Sharing private information without consent</li>
                    <li>• Continuing when someone freezes or goes silent</li>
                  </ul>
                </div>

                <div className="bg-card/50 border border-border rounded-xl p-4 mb-6">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-white">Note:</strong> You don't have to have physical injuries or have said "no" in exactly the right way for a violation to be real. If your boundaries weren't respected, that's a violation.
                  </p>
                </div>
              </section>

              <section id="immediate-response" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Shield className="w-8 h-8 text-red-500" />
                  Immediate Response
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  If a violation is happening or just happened, your immediate safety is the priority.
                </p>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-red-400 mb-4">In the Moment:</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Get safe:</strong> Remove yourself from the situation if possible. Leave the room, the venue, the location.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Find help:</strong> Get to staff, security, friends, or any trusted person.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Call for backup:</strong> Your safety contact, partner, or 911 if needed.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Shield className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Don't be alone with them:</strong> Stay in public spaces or with trusted people.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card/50 border border-border rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-4">Things You Might Say:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• "STOP. I said no."</li>
                    <li>• "This is over. I'm leaving."</li>
                    <li>• "I didn't consent to this."</li>
                    <li>• "I need help." (to staff/others)</li>
                    <li>• "Call my partner/friend."</li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-4 italic">
                    Note: You don't have to say anything. Freezing is a normal response. Whatever you did or didn't say, the violation is still not your fault.
                  </p>
                </div>

                <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-4 mb-6">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-yellow-400">If at a lifestyle club:</strong> Go directly to staff. Reputable venues take consent violations extremely seriously. They will help you, remove the violator, and support you in whatever next steps you choose.
                  </p>
                </div>
              </section>

              <section id="aftermath" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Heart className="w-8 h-8 text-pink-500" />
                  The Aftermath
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Once you're physically safe, focus on taking care of yourself.
                </p>

                <div className="bg-pink-900/20 border border-pink-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-4">Immediate Aftercare:</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Get to a safe space:</strong> Home, a friend's place, or somewhere you feel secure.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Contact your support person:</strong> Partner, friend, family—whoever you need.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Document if possible:</strong> Write down what happened while it's fresh. Screenshot any messages.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Consider medical care:</strong> For physical injuries, potential exposure, or emergency contraception.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Don't shower yet (if assault):</strong> If considering reporting, evidence may be important.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card/50 border border-border rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-4">Normal Reactions After Violation:</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    There's no "right" way to feel. All of these are normal:
                  </p>
                  <ul className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                    <li>• Shock, numbness</li>
                    <li>• Anger, rage</li>
                    <li>• Self-blame (unfounded)</li>
                    <li>• Anxiety, fear</li>
                    <li>• Shame (also unfounded)</li>
                    <li>• Difficulty sleeping</li>
                    <li>• Replaying what happened</li>
                    <li>• Wanting to forget it</li>
                    <li>• Crying, emotional swings</li>
                    <li>• Feeling disconnected</li>
                  </ul>
                </div>
              </section>

              <section id="reporting" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <MessageCircle className="w-8 h-8 text-blue-500" />
                  Reporting Options
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  You have choices about how to proceed. All are valid. Only you can decide what's right for you.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6">
                    <h4 className="font-bold text-blue-400 mb-3">Report to Venue/Event Organizers</h4>
                    <p className="text-sm text-muted-foreground">
                      Lifestyle clubs and event organizers typically have policies for handling violations. They can ban the violator, warn others, and provide support. This helps protect the community even if you don't want to involve authorities.
                    </p>
                  </div>

                  <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6">
                    <h4 className="font-bold text-blue-400 mb-3">Report to Platform/App</h4>
                    <p className="text-sm text-muted-foreground">
                      If you met them on a lifestyle site or app, report their profile. Screenshots help. Most platforms take consent violations seriously and will remove violators.
                    </p>
                  </div>

                  <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6">
                    <h4 className="font-bold text-blue-400 mb-3">Report to Police</h4>
                    <p className="text-sm text-muted-foreground">
                      You have the right to report to law enforcement. This is entirely your choice. RAINN (1-800-656-4673) can help you understand your options and what to expect.
                    </p>
                  </div>

                  <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6">
                    <h4 className="font-bold text-blue-400 mb-3">Warn the Community</h4>
                    <p className="text-sm text-muted-foreground">
                      Some choose to share experiences (without full names publicly) to warn others. This is personal choice. Some communities have private warning systems among trusted members.
                    </p>
                  </div>

                  <div className="bg-card/50 border border-border rounded-xl p-6">
                    <h4 className="font-bold text-white mb-3">Choose Not to Report</h4>
                    <p className="text-sm text-muted-foreground">
                      You are not obligated to report. Your healing is what matters most. Whatever you decide, make sure it's your decision—not pressure from others.
                    </p>
                  </div>
                </div>
              </section>

              <section id="healing" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Heart className="w-8 h-8 text-purple-500" />
                  The Healing Process
                </h2>

                <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-4">Steps Toward Healing:</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Be patient with yourself:</strong> Healing isn't linear. Good days and bad days are normal.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Seek professional support:</strong> A trauma-informed therapist can be invaluable. RAINN can help find one.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Lean on trusted people:</strong> You don't have to process this alone.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Practice self-compassion:</strong> You did nothing wrong. Treat yourself with kindness.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Take breaks from the lifestyle:</strong> If you need time away, take it without guilt.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card/50 border border-border rounded-xl p-4 mb-6">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-white">Important:</strong> You get to decide if and when you return to the lifestyle. Some people take breaks. Some find healing in positive experiences. Some step away permanently. There's no wrong answer.
                  </p>
                </div>
              </section>

              <section id="couples" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Users className="w-8 h-8 text-green-500" />
                  For Couples: When Your Partner Is Violated
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  If your partner experienced a violation, you're also affected. Here's how to support them and care for yourself.
                </p>

                <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-4">Supporting Your Partner:</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Believe them:</strong> Full stop. Don't question or minimize their experience.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Listen without fixing:</strong> Sometimes they just need to be heard.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Let them lead:</strong> Follow their wishes on reporting, talking, and healing.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Don't blame:</strong> Even subtly. Avoid "why did you..." questions.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Be patient:</strong> Their needs and responses may change day to day.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Heart className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Get support yourself:</strong> Secondary trauma is real. A therapist can help you too.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-4 mb-6">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-yellow-400">For the supporting partner:</strong> You may feel anger, guilt ("I should have protected them"), or helplessness. These feelings are valid, but process them with a therapist or friend—not in ways that burden your partner.
                  </p>
                </div>
              </section>

              <section id="prevention" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Prevention Going Forward</h2>

                <div className="bg-card/50 border border-border rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-4">Reducing Future Risk:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Thorough vetting before meeting (<Link to="/blog/red-flags-green-flags" className="text-green-500 hover:underline">Red Flags vs. Green Flags</Link>)</li>
                    <li>• Always meet in public first (<Link to="/blog/solo-dates-safety-tips" className="text-green-500 hover:underline">Solo Date Safety</Link>)</li>
                    <li>• Clear communication of boundaries beforehand</li>
                    <li>• Safe words and check-in systems</li>
                    <li>• Trust your instincts—leave if something feels off</li>
                    <li>• Limit alcohol on first meets (<Link to="/blog/alcohol-substances-consent" className="text-green-500 hover:underline">Alcohol & Consent</Link>)</li>
                    <li>• Location sharing with a safety contact</li>
                  </ul>
                </div>

                <div className="bg-card/50 border border-border rounded-xl p-4">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-white">Remember:</strong> No amount of precaution makes a violation your fault. These measures reduce risk, but if someone violates your consent, the responsibility is 100% theirs.
                  </p>
                </div>
              </section>

              <section id="resources" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Phone className="w-8 h-8 text-blue-500" />
                  Resources
                </h2>

                <div className="space-y-4">
                  <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6">
                    <h4 className="font-bold text-blue-400 mb-2">RAINN (Rape, Abuse & Incest National Network)</h4>
                    <p className="text-muted-foreground text-sm mb-2">24/7 support for survivors of sexual violence</p>
                    <p className="text-white font-bold">1-800-656-4673</p>
                    <p className="text-sm text-muted-foreground">rainn.org</p>
                  </div>

                  <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6">
                    <h4 className="font-bold text-blue-400 mb-2">Crisis Text Line</h4>
                    <p className="text-muted-foreground text-sm mb-2">Text-based support for any crisis</p>
                    <p className="text-white font-bold">Text HOME to 741741</p>
                  </div>

                  <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6">
                    <h4 className="font-bold text-blue-400 mb-2">National Sexual Assault Hotline</h4>
                    <p className="text-muted-foreground text-sm mb-2">Free, confidential support 24/7</p>
                    <p className="text-white font-bold">1-800-656-4673</p>
                  </div>

                  <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6">
                    <h4 className="font-bold text-blue-400 mb-2">1in6</h4>
                    <p className="text-muted-foreground text-sm mb-2">Support for men who have experienced sexual abuse or assault</p>
                    <p className="text-sm text-muted-foreground">1in6.org</p>
                  </div>
                </div>
              </section>

              {/* Final Section */}
              <section className="mb-12">
                <div className="bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 rounded-2xl p-8 border border-purple-500/30">
                  <h3 className="text-2xl font-bold mb-4 text-center">You Are Not Alone</h3>
                  <p className="text-muted-foreground text-center mb-6">
                    What happened to you was not your fault. You deserve support, healing, and a future where your boundaries are always respected. The lifestyle community at its best rallies around survivors and holds violators accountable. You matter.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      to="/blog/consent-golden-rules"
                      className="inline-flex items-center justify-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition-all"
                    >
                      Golden Rules of Consent
                    </Link>
                    <Link
                      to="/blog/aftercare-emotional-safety"
                      className="inline-flex items-center justify-center px-6 py-3 border border-purple-500 text-purple-400 font-semibold rounded-full hover:bg-purple-500/10 transition-all"
                    >
                      Aftercare & Emotional Safety
                    </Link>
                  </div>
                </div>
              </section>

              {/* Related Articles */}
              <section>
                <h3 className="text-2xl font-bold mb-6">Related Safety Resources</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link to="/blog/consent-golden-rules" className="bg-card/50 border border-border rounded-xl p-4 hover:border-green-500/50 transition-all group">
                    <span className="text-xs text-green-500">CONSENT & SAFETY</span>
                    <h4 className="font-bold group-hover:text-green-500 transition-colors mt-1">Golden Rules of Consent</h4>
                    <p className="text-sm text-muted-foreground mt-2">Understanding enthusiastic consent.</p>
                  </Link>
                  <Link to="/blog/aftercare-emotional-safety" className="bg-card/50 border border-border rounded-xl p-4 hover:border-green-500/50 transition-all group">
                    <span className="text-xs text-green-500">CONSENT & SAFETY</span>
                    <h4 className="font-bold group-hover:text-green-500 transition-colors mt-1">Aftercare & Emotional Safety</h4>
                    <p className="text-sm text-muted-foreground mt-2">Reconnection and healing.</p>
                  </Link>
                  <Link to="/blog/solo-dates-safety-tips" className="bg-card/50 border border-border rounded-xl p-4 hover:border-green-500/50 transition-all group">
                    <span className="text-xs text-green-500">CONSENT & SAFETY</span>
                    <h4 className="font-bold group-hover:text-green-500 transition-colors mt-1">Solo Date Safety</h4>
                    <p className="text-sm text-muted-foreground mt-2">First-meet safety checklist.</p>
                  </Link>
                  <Link to="/blog/red-flags-green-flags" className="bg-card/50 border border-border rounded-xl p-4 hover:border-green-500/50 transition-all group">
                    <span className="text-xs text-green-500">CONSENT & SAFETY</span>
                    <h4 className="font-bold group-hover:text-green-500 transition-colors mt-1">Red Flags vs. Green Flags</h4>
                    <p className="text-sm text-muted-foreground mt-2">Spotting safe partners.</p>
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

export default BlogConsentViolations;
