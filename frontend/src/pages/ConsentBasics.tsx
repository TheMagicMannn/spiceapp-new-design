import { Shield, Heart, CheckCircle, AlertTriangle, Lock, Eye, MessageCircle } from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";

const ConsentBasics = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Consent Basics: Foundation of Healthy Lifestyle Exploration",
    "description": "Complete guide to consent in swinging, BDSM, and ENM. Learn enthusiastic consent, boundaries, safe words, and consent best practices.",
    "datePublished": "2025-01-20"
  };

  return (
    <>
      <SEO
        title="Consent Basics: Essential Guide for Lifestyle, BDSM & Swinging | SPICE"
        description="Master consent fundamentals for swinging, BDSM, and ENM. Learn enthusiastic consent, setting boundaries, safe words, revoking consent, and creating safe spaces."
        keywords="consent basics, lifestyle consent, BDSM consent, swinging consent, enthusiastic consent, safe words, consent boundaries, sexual consent guide"
        canonical="https://thespiceapp.com/start/consent-basics"
        structuredData={structuredData}
      />

      <div className="relative min-h-screen">
        <ParticlesBackground />
        <Header />
        <Breadcrumbs />
        
        <main className="relative z-10 pt-32 pb-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                Consent Basics: The Foundation
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Consent is the absolute foundation of all lifestyle activities. This guide covers everything you need to know about enthusiastic consent, boundaries, and creating safe experiences.
              </p>
            </div>

            <div className="mb-12">
              <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="w-8 h-8 text-red-400" />
                  <h2 className="text-2xl font-bold text-red-400">Most Important Rule</h2>
                </div>
                <p className="text-lg text-muted-foreground">
                  <strong className="text-foreground">Consent is mandatory, non-negotiable, and ongoing.</strong> Without clear, enthusiastic consent from all parties, no activity should occur. Ever.
                </p>
              </div>
            </div>

            <section className="mb-16">
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 md:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">What is Enthusiastic Consent?</h2>
                </div>
                
                <div className="space-y-6 text-muted-foreground">
                  <p className="text-lg leading-relaxed">
                    <strong className="text-foreground">Enthusiastic consent</strong> means all parties are excited and actively want to participate. It's not just the absence of "no" - it's the presence of an enthusiastic "yes!"
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-background/50 border border-green-500/30 rounded-lg p-6">
                      <h3 className="font-bold text-green-500 mb-4">Enthusiastic Consent Looks Like:</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>"Yes! I'd love to!" with excited body language</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>Active participation and engagement</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>Clear verbal affirmation: "That sounds amazing!"</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>Initiating or suggesting activities</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>Positive body language - leaning in, smiling</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>Asking questions about the activity excitedly</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-background/50 border border-red-500/30 rounded-lg p-6">
                      <h3 className="font-bold text-red-500 mb-4">NOT Consent:</h3>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-red-500 font-bold">✗</span>
                          <span>"I guess..." or "Sure, whatever"</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-500 font-bold">✗</span>
                          <span>Silence or no response</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-500 font-bold">✗</span>
                          <span>Being too intoxicated to respond clearly</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-500 font-bold">✗</span>
                          <span>Giving in after repeated asking (coercion)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-500 font-bold">✗</span>
                          <span>Passive or reluctant body language</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-500 font-bold">✗</span>
                          <span>Consent given under pressure or threats</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-primary/10 border border-primary/30 rounded-lg p-6">
                    <p className="font-bold text-foreground mb-2">Remember:</p>
                    <p className="text-sm">If you're unsure whether someone is consenting enthusiastically, <strong className="text-foreground">STOP and ASK</strong>. It's better to check in and potentially interrupt the mood than to proceed without clear consent.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 md:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">How to Ask for Consent</h2>
                </div>
                
                <div className="space-y-6 text-muted-foreground">
                  <p className="text-lg leading-relaxed">
                    Asking for consent doesn't have to be awkward or kill the mood. Here's how to ask naturally:
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-background/50 border border-border/50 rounded-lg p-6">
                      <h3 className="font-bold text-primary mb-4">Great Ways to Ask:</h3>
                      <ul className="space-y-3 text-sm">
                        <li>• "Would you like to...?"</li>
                        <li>• "Can I kiss you?"</li>
                        <li>• "Are you comfortable with...?"</li>
                        <li>• "Is this okay?" (while doing something)</li>
                        <li>• "What would you like to do?"</li>
                        <li>• "Should we move to...?"</li>
                        <li>• "I'd love to... how does that sound?"</li>
                        <li>• "Tell me what you want"</li>
                      </ul>
                    </div>

                    <div className="bg-background/50 border border-border/50 rounded-lg p-6">
                      <h3 className="font-bold text-primary mb-4">For BDSM/Kink:</h3>
                      <ul className="space-y-3 text-sm">
                        <li>• "What are your hard limits today?"</li>
                        <li>• "What's your safe word?"</li>
                        <li>• "On a scale of 1-10, how intense?"</li>
                        <li>• "Check in: green, yellow, or red?"</li>
                        <li>• "Should I continue or pause?"</li>
                        <li>• "Harder or softer?"</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-primary/10 border border-primary/30 rounded-lg p-6">
                    <p className="font-bold text-foreground mb-2">Pro Tip:</p>
                    <p className="text-sm">Consent can be sexy! Asking "What do you want me to do to you?" or "Tell me how you want it" is both consent-seeking AND incredibly hot. Make it part of the experience.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 md:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">Safe Words & Signals</h2>
                </div>
                
                <div className="space-y-6 text-muted-foreground">
                  <p className="text-lg leading-relaxed">
                    <strong className="text-foreground">Safe words</strong> are code words that immediately stop activity. They're essential in BDSM but useful in all lifestyle situations.
                  </p>

                  <div className="bg-background/50 border border-primary/30 rounded-lg p-6">
                    <h3 className="font-bold text-foreground mb-4">Traffic Light System (Most Common):</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="bg-green-500/20 text-green-500 rounded-full w-20 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                          GREEN
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">"I'm good! Keep going!"</p>
                          <p className="text-sm">Everything is great, continue or increase intensity</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-yellow-500/20 text-yellow-500 rounded-full w-20 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                          YELLOW
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">"Slow down / check in"</p>
                          <p className="text-sm">Approaching a limit, need to talk, adjust intensity</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="bg-red-500/20 text-red-500 rounded-full w-20 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                          RED
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">"STOP immediately!"</p>
                          <p className="text-sm">All activity stops right now, no questions asked</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-background/50 border border-border/50 rounded-lg p-6">
                    <h3 className="font-bold text-foreground mb-4">Non-Verbal Signals:</h3>
                    <p className="text-sm mb-4">When you can't speak (gagged, etc.), use physical signals:</p>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong className="text-foreground">Three taps</strong> anywhere = RED (stop immediately)</li>
                      <li>• <strong className="text-foreground">Dropping an object</strong> = RED (if holding something)</li>
                      <li>• <strong className="text-foreground">Hand squeezes</strong> = Check-in system (1 squeeze = green, 2 = yellow, 3 = red)</li>
                      <li>• <strong className="text-foreground">Snapping fingers</strong> = Attention needed</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">The 5 Principles of Consent</h2>
              
              <div className="grid gap-6">
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 text-primary rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">1</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-primary">Freely Given</h3>
                      <p className="text-muted-foreground">Consent must be given without pressure, coercion, manipulation, or threats. If someone feels obligated, afraid, or pressured, it's NOT consent.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 text-primary rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">2</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-primary">Reversible</h3>
                      <p className="text-muted-foreground">Anyone can change their mind at ANY time - before or during activity. Consent can be withdrawn at any moment, for any reason, and must be respected immediately.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 text-primary rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">3</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-primary">Informed</h3>
                      <p className="text-muted-foreground">All parties must understand what they're consenting to. Hiding information, lying about STI status, or deceiving about activities invalidates consent.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 text-primary rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">4</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-primary">Enthusiastic</h3>
                      <p className="text-muted-foreground">Passive acceptance isn't enough. Look for active, excited participation. "Okay, fine" is NOT enthusiastic consent.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/20 text-primary rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">5</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-primary">Specific</h3>
                      <p className="text-muted-foreground">Consent to one activity doesn't mean consent to everything. Consent to kissing ≠ consent to sex. Consent yesterday ≠ consent today. Ask for each activity.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-16">
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Consent in Different Contexts</h2>
                
                <div className="space-y-6">
                  <div className="border border-border/50 rounded-lg p-6 bg-background/50">
                    <h3 className="font-bold text-lg mb-3 text-foreground">Swinging & Lifestyle Parties:</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Ask before touching anyone, even in playrooms</li>
                      <li>• Both partners in a couple must consent to play</li>
                      <li>• "No" from either partner means no for both</li>
                      <li>• Consent to soft swap doesn't mean full swap</li>
                      <li>• Check in frequently during group play</li>
                      <li>• Respect "couples only" or "no single males" boundaries</li>
                    </ul>
                  </div>

                  <div className="border border-border/50 rounded-lg p-6 bg-background/50">
                    <h3 className="font-bold text-lg mb-3 text-foreground">BDSM & Kink:</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Negotiate scenes beforehand - discuss activities, limits, safe words</li>
                      <li>• Use safe words consistently</li>
                      <li>• Check in during intense scenes: "Color?" (traffic light check)</li>
                      <li>• Consent for impact play doesn't mean consent for sexual contact</li>
                      <li>• Discuss aftercare needs before playing</li>
                      <li>• Dominant partners still need consent - SSC (Safe, Sane, Consensual)</li>
                    </ul>
                  </div>

                  <div className="border border-border/50 rounded-lg p-6 bg-background/50">
                    <h3 className="font-bold text-lg mb-3 text-foreground">ENM & Polyamory:</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• All partners must consent to relationship structure</li>
                      <li>• New partners need to be discussed and approved (if that's your agreement)</li>
                      <li>• Consent to polyamory doesn't mean consent to ALL partners</li>
                      <li>• Regular relationship check-ins about consent and boundaries</li>
                      <li>• Veto power (if agreed upon) must be respected</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <div className="mb-16">
              <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl p-8 md:p-12 border border-primary/30 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Join a Consent-Focused Community</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  SPICE members prioritize enthusiastic consent, clear communication, and respect. Connect with 30,000+ verified members who understand these principles.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/download" className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all">
                    Download SPICE Free
                  </a>
                  <a href="/quiz" className="inline-flex items-center justify-center px-8 py-3 bg-background border-2 border-primary hover:bg-primary/10 font-semibold rounded-full transition-all">
                    Take BDSM Quiz
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>

        <FooterSection />
      </div>
    </>
  );
};

export default ConsentBasics;