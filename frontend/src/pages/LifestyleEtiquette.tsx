import { CheckCircle, XCircle, Users, PartyPopper, MessageCircle, Heart, Shield } from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";

const LifestyleEtiquette = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Lifestyle Etiquette: Complete Do's and Don'ts for Swingers, BDSM & ENM",
    "description": "Essential etiquette guide for lifestyle parties, swinger clubs, BDSM events, and ENM dating. Learn proper behavior, avoid mistakes, and build respect in the community.",
    "author": { "@type": "Organization", "name": "SPICE Dating App" },
    "publisher": { "@type": "Organization", "name": "SPICE" },
    "datePublished": "2025-01-20"
  };

  return (
    <>
      <SEO
        title="Lifestyle Etiquette Guide: Do's & Don'ts for Swingers, BDSM & ENM | SPICE"
        description="Master lifestyle etiquette for swinger parties, BDSM events, and ENM dating. Learn proper behavior, communication, boundaries, and how to build respect in the community."
        keywords="lifestyle etiquette, swinger etiquette, BDSM etiquette, party etiquette, swinging do's and don'ts, lifestyle manners, swinger party rules, ENM etiquette"
        canonical="https://thespiceapp.com/start/etiquette"
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
                Lifestyle Etiquette Guide
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Essential do's and don'ts for swinger parties, BDSM events, and lifestyle dating. Build respect, avoid mistakes, and thrive in the community.
              </p>
            </div>

            <div className="mb-12">
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4">Quick Navigation:</h2>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                  <a href="#universal-rules" className="text-primary hover:underline">• Universal Etiquette Rules</a>
                  <a href="#party-etiquette" className="text-primary hover:underline">• Swinger Party Etiquette</a>
                  <a href="#club-etiquette" className="text-primary hover:underline">• Lifestyle Club Etiquette</a>
                  <a href="#online-etiquette" className="text-primary hover:underline">• Online Dating Etiquette</a>
                  <a href="#bdsm-etiquette" className="text-primary hover:underline">• BDSM Event Etiquette</a>
                  <a href="#enm-etiquette" className="text-primary hover:underline">• ENM/Poly Etiquette</a>
                  <a href="#dos-donts" className="text-primary hover:underline">• Quick Do's & Don'ts</a>
                  <a href="#red-flags" className="text-primary hover:underline">• Behavior Red Flags</a>
                </div>
              </div>
            </div>

            <section id="universal-rules" className="mb-16">
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 md:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">Universal Etiquette Rules</h2>
                </div>
                
                <div className="space-y-6 text-muted-foreground">
                  <p className="text-lg leading-relaxed">
                    These rules apply to ALL lifestyle situations - parties, clubs, online dating, private meetups, and BDSM events.
                  </p>

                  <div className="space-y-4">
                    <div className="bg-background/50 border border-primary/30 rounded-lg p-6">
                      <h3 className="font-bold text-lg mb-3 text-foreground">1. No Means No - Always</h3>
                      <p className="text-sm mb-3">
                        This is the foundation of all lifestyle etiquette. When someone says no, stop immediately. No pouting, no convincing, no "just once." Respect the boundary graciously and move on.
                      </p>
                      <ul className="text-sm space-y-1 ml-4">
                        <li>• Accept rejection with grace: "No problem, thanks for being honest!"</li>
                        <li>• Don't ask repeatedly or try to change their mind</li>
                        <li>• Don't make them explain why (they don't owe you reasons)</li>
                        <li>• Don't act butthurt or make it awkward</li>
                        <li>• Remember: "No" to one activity doesn't mean no to everything</li>
                      </ul>
                    </div>

                    <div className="bg-background/50 border border-primary/30 rounded-lg p-6">
                      <h3 className="font-bold text-lg mb-3 text-foreground">2. Ask Before Touching</h3>
                      <p className="text-sm mb-3">
                        Even in playrooms or at lifestyle parties, ALWAYS ask before touching someone. Proximity or nudity doesn't equal permission.
                      </p>
                      <ul className="text-sm space-y-1 ml-4">
                        <li>• "May I touch you here?" or "Can I join you?"</li>
                        <li>• Wait for verbal "yes" before proceeding</li>
                        <li>• Don't assume - even if they're naked or playing with others</li>
                        <li>• Ask partners in a couple BOTH individually</li>
                      </ul>
                    </div>

                    <div className="bg-background/50 border border-primary/30 rounded-lg p-6">
                      <h3 className="font-bold text-lg mb-3 text-foreground">3. Respect Relationship Dynamics</h3>
                      <p className="text-sm mb-3">
                        Every couple/group has different rules. Don't assume, and never try to "break the rules" or exclude partners.
                      </p>
                      <ul className="text-sm space-y-1 ml-4">
                        <li>• Ask about boundaries: "What are your rules as a couple?"</li>
                        <li>• Include ALL partners in conversations (unless told otherwise)</li>
                        <li>• Don't try to contact one partner without the other's knowledge</li>
                        <li>• Respect "couples only" boundaries</li>
                        <li>• If someone says "let me check with my partner," wait patiently</li>
                      </ul>
                    </div>

                    <div className="bg-background/50 border border-primary/30 rounded-lg p-6">
                      <h3 className="font-bold text-lg mb-3 text-foreground">4. Discretion is Sacred</h3>
                      <p className="text-sm mb-3">
                        What happens in the lifestyle stays in the lifestyle. Protect people's privacy at all costs.
                      </p>
                      <ul className="text-sm space-y-1 ml-4">
                        <li>• NEVER out someone you meet in the lifestyle</li>
                        <li>• Don't share photos or stories without explicit permission</li>
                        <li>• Don't gossip about who you saw at parties</li>
                        <li>• Use discretion on social media (no tagging without permission)</li>
                        <li>• If you see lifestyle people in vanilla settings, DON'T acknowledge unless they do first</li>
                      </ul>
                    </div>

                    <div className="bg-background/50 border border-primary/30 rounded-lg p-6">
                      <h3 className="font-bold text-lg mb-3 text-foreground">5. Hygiene is Non-Negotiable</h3>
                      <p className="text-sm mb-3">
                        This should be obvious, but poor hygiene is the #1 complaint in the lifestyle.
                      </p>
                      <ul className="text-sm space-y-1 ml-4">
                        <li>• Shower before events (and between play sessions at parties)</li>
                        <li>• Brush teeth, use mouthwash, have fresh breath</li>
                        <li>• Trim/groom body hair appropriately</li>
                        <li>• Wear clean clothes and use deodorant</li>
                        <li>• Bring mints, wipes, and hygiene supplies to events</li>
                      </ul>
                    </div>

                    <div className="bg-background/50 border border-primary/30 rounded-lg p-6">
                      <h3 className="font-bold text-lg mb-3 text-foreground">6. Communication is Key</h3>
                      <p className="text-sm mb-3">
                        Over-communicate rather than under-communicate. Clear communication prevents 99% of problems.
                      </p>
                      <ul className="text-sm space-y-1 ml-4">
                        <li>• Be upfront about what you're looking for</li>
                        <li>• State your boundaries clearly before play</li>
                        <li>• Ask questions if you're unsure about anything</li>
                        <li>• Check in during play: "Is this okay?" "Feeling good?"</li>
                        <li>• Debrief after encounters - share feedback kindly</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="party-etiquette" className="mb-16">
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 md:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <PartyPopper className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">Swinger Party Etiquette</h2>
                </div>
                
                <div className="space-y-6 text-muted-foreground">
                  <p className="text-lg leading-relaxed">
                    Swinger parties have specific etiquette that ensures everyone has a good time. Follow these rules and you'll be welcomed back!
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-background/50 border border-green-500/30 rounded-lg p-6">
                      <h3 className="font-bold text-green-500 mb-4">DO:</h3>
                      <ul className="space-y-3 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span><strong className="text-foreground">Arrive on time</strong> - Not too early (hosts are prepping), not too late (miss socializing)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span><strong className="text-foreground">Follow dress code</strong> - If it says "upscale sexy," don't wear jeans and a t-shirt</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span><strong className="text-foreground">Socialize first</strong> - Spend time in social areas before heading to playrooms</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span><strong className="text-foreground">Bring supplies</strong> - Condoms, lube, hygiene wipes, breath mints</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span><strong className="text-foreground">Stay with your partner</strong> - Don't abandon them to go play alone (unless agreed)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span><strong className="text-foreground">Clean up after</strong> - Wipe down surfaces, dispose of condoms, leave space clean</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span><strong className="text-foreground">Thank hosts</strong> - Acknowledge the effort they put into organizing</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span><strong className="text-foreground">Be friendly</strong> - Smile, make conversation, create positive vibes</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-background/50 border border-red-500/30 rounded-lg p-6">
                      <h3 className="font-bold text-red-500 mb-4">DON'T:</h3>
                      <ul className="space-y-3 text-sm">
                        <li className="flex items-start gap-2">
                          <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                          <span><strong className="text-foreground">Touch without asking</strong> - HUGE violation. Always ask first</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                          <span><strong className="text-foreground">Get too drunk</strong> - You need good judgment. Drunk people can't consent</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                          <span><strong className="text-foreground">Use phones in play areas</strong> - No photos/videos ever. Phones stay in lockers</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                          <span><strong className="text-foreground">Pressure anyone</strong> - For play, to drink more, to break their boundaries</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                          <span><strong className="text-foreground">Judge others</strong> - Bodies, ages, preferences - be respectful of all</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                          <span><strong className="text-foreground">Interrupt ongoing play</strong> - Unless invited, don't jump in</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                          <span><strong className="text-foreground">Gossip or out people</strong> - Discretion is absolutely critical</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                          <span><strong className="text-foreground">Show up without RSVPing</strong> - Hosts need accurate counts</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
                    <h3 className="font-bold text-red-400 mb-3">Instant Ejection Behaviors:</h3>
                    <p className="text-sm mb-3">These will get you kicked out of parties and banned from communities:</p>
                    <ul className="text-sm space-y-1">
                      <li>🚩 Non-consensual touching</li>
                      <li>🚩 Taking photos/videos without permission</li>
                      <li>🚩 Harassing or stalking people who said no</li>
                      <li>🚩 Removing condoms without consent (stealthing)</li>
                      <li>🚩 Being aggressive or violent</li>
                      <li>🚩 Ignoring safe words in BDSM play</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section id="online-etiquette" className="mb-16">
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 md:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">Online Dating & Messaging Etiquette</h2>
                </div>
                
                <div className="space-y-6 text-muted-foreground">
                  <p className="text-lg leading-relaxed">
                    How you behave on SPICE and other lifestyle platforms sets the tone for potential connections.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-background/50 border border-green-500/30 rounded-lg p-6">
                      <h3 className="font-bold text-green-500 mb-4">Good Messaging Practices:</h3>
                      <ul className="space-y-2 text-sm">
                        <li>✓ <strong className="text-foreground">Read profiles fully</strong> before messaging</li>
                        <li>✓ <strong className="text-foreground">Personalize messages</strong> - reference something from their profile</li>
                        <li>✓ <strong className="text-foreground">Be respectful</strong> - no explicit messages unless they indicate it's welcome</li>
                        <li>✓ <strong className="text-foreground">Include both partners</strong> when messaging couples</li>
                        <li>✓ <strong className="text-foreground">Respond in reasonable time</strong> - don't ghost mid-conversation</li>
                        <li>✓ <strong className="text-foreground">Be honest</strong> about intentions, experience level, situation</li>
                        <li>✓ <strong className="text-foreground">Use recent photos</strong> - no catfishing</li>
                        <li>✓ <strong className="text-foreground">Video verify</strong> before meeting if possible</li>
                      </ul>
                    </div>

                    <div className="bg-background/50 border border-red-500/30 rounded-lg p-6">
                      <h3 className="font-bold text-red-500 mb-4">Bad Messaging Behaviors:</h3>
                      <ul className="space-y-2 text-sm">
                        <li>🚩 <strong className="text-foreground">Dick pics</strong> as opening message</li>
                        <li>🚩 <strong className="text-foreground">"Hey" or "wanna fuck"</strong> - put in effort!</li>
                        <li>🚩 <strong className="text-foreground">Copy-paste messages</strong> - people can tell</li>
                        <li>🚩 <strong className="text-foreground">Messaging just one</strong> partner in a couple</li>
                        <li>🚩 <strong className="text-foreground">Getting mad</strong> when someone doesn't respond</li>
                        <li>🚩 <strong className="text-foreground">Lying about STI status</strong> or using old photos</li>
                        <li>🚩 <strong className="text-foreground">Sending unsolicited nudes</strong></li>
                        <li>🚩 <strong className="text-foreground">Being pushy</strong> about meeting immediately</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="dos-donts" className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Quick Reference: Do's & Don'ts</h2>
              
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 text-green-500">DO ✓</th>
                      <th className="text-left py-3 px-4 text-red-500">DON'T ✗</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/50">
                    <tr>
                      <td className="py-3 px-4 text-sm">Ask before touching or joining</td>
                      <td className="py-3 px-4 text-sm">Assume consent or proximity = permission</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-sm">Respect "no" immediately and graciously</td>
                      <td className="py-3 px-4 text-sm">Try to convince or ask repeatedly</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-sm">Follow house rules and dress codes</td>
                      <td className="py-3 px-4 text-sm">Ignore rules because "it's a sex party"</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-sm">Maintain good hygiene throughout</td>
                      <td className="py-3 px-4 text-sm">Skip showers between play sessions</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-sm">Include both partners in couple conversations</td>
                      <td className="py-3 px-4 text-sm">Message only one partner behind the other's back</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-sm">Be friendly and make conversation</td>
                      <td className="py-3 px-4 text-sm">Be a wallflower or only focus on getting laid</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-sm">Use protection (condoms) always</td>
                      <td className="py-3 px-4 text-sm">Try to negotiate unprotected sex</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-sm">Respect privacy and discretion</td>
                      <td className="py-3 px-4 text-sm">Out people or share photos without permission</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <div className="mb-16">
              <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl p-8 md:p-12 border border-primary/30 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Join a Respectful Community</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  SPICE members understand and practice proper lifestyle etiquette. Connect with 30,000+ verified members who prioritize respect, consent, and good communication.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="/download" className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all">
                    Download SPICE Free
                  </a>
                  <a href="/lifestyle/swingers-guide" className="inline-flex items-center justify-center px-8 py-3 bg-background border-2 border-primary hover:bg-primary/10 font-semibold rounded-full transition-all">
                    Read Swingers Guide
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

export default LifestyleEtiquette;