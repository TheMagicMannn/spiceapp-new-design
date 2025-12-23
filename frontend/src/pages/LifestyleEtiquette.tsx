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

            <section id="club-etiquette" className="mb-16">
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 md:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-purple-500/10 rounded-lg">
                    <Users className="w-6 h-6 text-purple-500" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">Lifestyle Club Etiquette</h2>
                </div>
                
                <div className="space-y-6 text-muted-foreground">
                  <p className="text-lg leading-relaxed">
                    Lifestyle clubs have their own culture and rules. Whether it's your first visit or your hundredth, these guidelines ensure everyone has a great time.
                  </p>

                  <div className="space-y-4">
                    <div className="bg-background/50 border border-purple-500/30 rounded-lg p-6">
                      <h3 className="font-bold text-lg mb-3 text-foreground">Before You Arrive</h3>
                      <ul className="text-sm space-y-2 ml-4">
                        <li>• <strong>Research the club</strong> - Know their dress code, rules, and theme nights</li>
                        <li>• <strong>Make reservations</strong> if required (many clubs require advance booking)</li>
                        <li>• <strong>Complete membership/verification</strong> - Most clubs require ID and couples verification</li>
                        <li>• <strong>Discuss expectations</strong> with your partner beforehand - what are you hoping for?</li>
                        <li>• <strong>Pack essentials</strong> - Condoms, lube, towel, change of underwear, breath mints</li>
                      </ul>
                    </div>

                    <div className="bg-background/50 border border-purple-500/30 rounded-lg p-6">
                      <h3 className="font-bold text-lg mb-3 text-foreground">Club-Specific Rules</h3>
                      <ul className="text-sm space-y-2 ml-4">
                        <li>• <strong>No phones in play areas</strong> - Store them in lockers. Zero tolerance policy</li>
                        <li>• <strong>Towels required</strong> - Always sit on a towel on furniture and beds</li>
                        <li>• <strong>Clean up after yourself</strong> - Dispose of condoms, wipe down surfaces</li>
                        <li>• <strong>Use the facilities</strong> - Most clubs have showers; use them between encounters</li>
                        <li>• <strong>Lock your valuables</strong> - Use the locker system provided</li>
                        <li>• <strong>Tip staff appropriately</strong> - Many clubs rely on tips for their staff</li>
                      </ul>
                    </div>

                    <div className="bg-background/50 border border-purple-500/30 rounded-lg p-6">
                      <h3 className="font-bold text-lg mb-3 text-foreground">Navigating Common Areas</h3>
                      <ul className="text-sm space-y-2 ml-4">
                        <li>• <strong>Dance floor</strong> - Touching requires consent, even while dancing</li>
                        <li>• <strong>Bar/social areas</strong> - Great for meeting people; be sociable, not predatory</li>
                        <li>• <strong>Play rooms</strong> - Don't interrupt scenes; watch quietly if invited or move on</li>
                        <li>• <strong>Private rooms</strong> - Respect closed doors; knock and wait if door is ajar</li>
                        <li>• <strong>Couples-only sections</strong> - Respect these boundaries if you're single</li>
                      </ul>
                    </div>

                    <div className="bg-background/50 border border-purple-500/30 rounded-lg p-6">
                      <h3 className="font-bold text-lg mb-3 text-foreground">Watching vs. Participating</h3>
                      <ul className="text-sm space-y-2 ml-4">
                        <li>• <strong>Watching is often OK</strong> in open areas - but don't hover or stare aggressively</li>
                        <li>• <strong>Keep respectful distance</strong> - Give couples space unless invited closer</li>
                        <li>• <strong>Don't touch yourself</strong> while watching unless in designated areas</li>
                        <li>• <strong>If you want to join</strong> - Make eye contact, wait for invitation, or ask verbally</li>
                        <li>• <strong>Take a polite no</strong> gracefully and move on without lingering</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="bdsm-etiquette" className="mb-16">
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 md:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-red-500/10 rounded-lg">
                    <Heart className="w-6 h-6 text-red-500" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">BDSM Event Etiquette</h2>
                </div>
                
                <div className="space-y-6 text-muted-foreground">
                  <p className="text-lg leading-relaxed">
                    BDSM events, dungeons, and play parties have additional protocols beyond standard lifestyle etiquette. Respect these rules to keep everyone safe.
                  </p>

                  <div className="space-y-4">
                    <div className="bg-background/50 border border-red-500/30 rounded-lg p-6">
                      <h3 className="font-bold text-lg mb-3 text-foreground">Pre-Scene Negotiation</h3>
                      <ul className="text-sm space-y-2 ml-4">
                        <li>• <strong>Always negotiate before playing</strong> - Discuss limits, safe words, and activities</li>
                        <li>• <strong>Use clear safe words</strong> - Red/Yellow/Green system or agree on specific words</li>
                        <li>• <strong>Disclose health conditions</strong> that might affect play (asthma, heart issues, etc.)</li>
                        <li>• <strong>Discuss aftercare needs</strong> - What do they need when the scene ends?</li>
                        <li>• <strong>Set time limits</strong> if appropriate, especially for bondage or intense scenes</li>
                      </ul>
                    </div>

                    <div className="bg-background/50 border border-red-500/30 rounded-lg p-6">
                      <h3 className="font-bold text-lg mb-3 text-foreground">During Scenes</h3>
                      <ul className="text-sm space-y-2 ml-4">
                        <li>• <strong>NEVER interrupt a scene</strong> unless you see a genuine safety emergency</li>
                        <li>• <strong>Don't talk loudly</strong> near ongoing scenes - maintain the atmosphere</li>
                        <li>• <strong>Keep safe distance</strong> - Impact play needs space; swinging floggers can hit bystanders</li>
                        <li>• <strong>Don't touch equipment</strong> without permission from the owner</li>
                        <li>• <strong>If invited to watch</strong> - Stay quiet, don't offer commentary or suggestions</li>
                        <li>• <strong>Respect the dynamic</strong> - Don't interfere with Dom/sub relationships</li>
                      </ul>
                    </div>

                    <div className="bg-background/50 border border-red-500/30 rounded-lg p-6">
                      <h3 className="font-bold text-lg mb-3 text-foreground">Equipment & Space</h3>
                      <ul className="text-sm space-y-2 ml-4">
                        <li>• <strong>Wipe down equipment</strong> after use with provided sanitizer</li>
                        <li>• <strong>Don't use equipment</strong> you're not trained on (St. Andrew's Cross, suspension rigs)</li>
                        <li>• <strong>Bring your own toys</strong> when possible - don't assume community toys are available</li>
                        <li>• <strong>Time limits on popular equipment</strong> - Don't hog the cross for hours</li>
                        <li>• <strong>Report damaged equipment</strong> to dungeon monitors immediately</li>
                      </ul>
                    </div>

                    <div className="bg-background/50 border border-red-500/30 rounded-lg p-6">
                      <h3 className="font-bold text-lg mb-3 text-foreground">Dungeon Monitors (DMs)</h3>
                      <ul className="text-sm space-y-2 ml-4">
                        <li>• <strong>DMs are there for safety</strong> - Respect their authority</li>
                        <li>• <strong>If you see something concerning</strong> - Tell a DM, don't intervene yourself</li>
                        <li>• <strong>DMs can stop scenes</strong> if they believe there's a safety issue</li>
                        <li>• <strong>Ask DMs questions</strong> - They're happy to help newcomers navigate</li>
                        <li>• <strong>Follow DM instructions</strong> immediately and without argument</li>
                      </ul>
                    </div>

                    <div className="bg-background/50 border border-red-500/30 rounded-lg p-6">
                      <h3 className="font-bold text-lg mb-3 text-foreground">Aftercare at Events</h3>
                      <ul className="text-sm space-y-2 ml-4">
                        <li>• <strong>Aftercare areas exist</strong> - Use them; don't rush your partner out</li>
                        <li>• <strong>Have water and snacks</strong> ready for after intense scenes</li>
                        <li>• <strong>Don't abandon your partner</strong> after a scene to play with someone else</li>
                        <li>• <strong>Check in the next day</strong> - Sub drop can hit 24-48 hours later</li>
                        <li>• <strong>Debrief the scene</strong> - What worked? What didn't? How do you both feel?</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="enm-etiquette" className="mb-16">
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 md:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-pink-500/10 rounded-lg">
                    <Users className="w-6 h-6 text-pink-500" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">ENM/Poly Etiquette</h2>
                </div>
                
                <div className="space-y-6 text-muted-foreground">
                  <p className="text-lg leading-relaxed">
                    Ethical non-monogamy and polyamory involve multiple relationships. These etiquette guidelines help maintain healthy dynamics with all partners.
                  </p>

                  <div className="space-y-4">
                    <div className="bg-background/50 border border-pink-500/30 rounded-lg p-6">
                      <h3 className="font-bold text-lg mb-3 text-foreground">Respecting Existing Relationships</h3>
                      <ul className="text-sm space-y-2 ml-4">
                        <li>• <strong>Ask about relationship structure</strong> - Hierarchical? Non-hierarchical? Rules?</li>
                        <li>• <strong>Respect primary/nesting partners</strong> - Don't try to become "more important"</li>
                        <li>• <strong>Don't bad-mouth metamours</strong> (your partner's other partners)</li>
                        <li>• <strong>Understand your role</strong> - Are you a secondary? A casual partner? Be clear</li>
                        <li>• <strong>Don't issue ultimatums</strong> - "It's me or them" violates ENM ethics</li>
                      </ul>
                    </div>

                    <div className="bg-background/50 border border-pink-500/30 rounded-lg p-6">
                      <h3 className="font-bold text-lg mb-3 text-foreground">Communication Standards</h3>
                      <ul className="text-sm space-y-2 ml-4">
                        <li>• <strong>Be honest about your situation</strong> - Are you married? Do you have other partners?</li>
                        <li>• <strong>Communicate scheduling needs</strong> - Calendars matter in poly</li>
                        <li>• <strong>Don't "forget" to mention partners</strong> - This is deception</li>
                        <li>• <strong>Share relevant health info</strong> - STI status, new partners, testing schedules</li>
                        <li>• <strong>Discuss relationship escalation</strong> - Don't assume relationships will progress</li>
                      </ul>
                    </div>

                    <div className="bg-background/50 border border-pink-500/30 rounded-lg p-6">
                      <h3 className="font-bold text-lg mb-3 text-foreground">Time & Resource Management</h3>
                      <ul className="text-sm space-y-2 ml-4">
                        <li>• <strong>Be reliable</strong> - If you commit to time, show up</li>
                        <li>• <strong>Don't over-promise availability</strong> - Be realistic about your capacity</li>
                        <li>• <strong>Respect date nights</strong> - Don't text constantly when they're with another partner</li>
                        <li>• <strong>Plan ahead</strong> - Last-minute requests often conflict with other relationships</li>
                        <li>• <strong>Be understanding about cancellations</strong> - Life happens in poly networks</li>
                      </ul>
                    </div>

                    <div className="bg-background/50 border border-pink-500/30 rounded-lg p-6">
                      <h3 className="font-bold text-lg mb-3 text-foreground">Metamour Relations</h3>
                      <ul className="text-sm space-y-2 ml-4">
                        <li>• <strong>Kitchen table vs. parallel poly</strong> - Know which they practice</li>
                        <li>• <strong>Introduce yourself</strong> if appropriate - It reduces anxiety for everyone</li>
                        <li>• <strong>Don't compete</strong> with metamours - You each offer different things</li>
                        <li>• <strong>Be kind</strong> even if you're not close - You share someone you both care about</li>
                        <li>• <strong>Handle jealousy maturely</strong> - It's normal but shouldn't drive poor behavior</li>
                      </ul>
                    </div>

                    <div className="bg-background/50 border border-pink-500/30 rounded-lg p-6">
                      <h3 className="font-bold text-lg mb-3 text-foreground">ENM-Specific Don'ts</h3>
                      <ul className="text-sm space-y-2 ml-4">
                        <li>• <strong>Don't "cowboy/cowgirl"</strong> - Trying to pull someone out of their poly structure</li>
                        <li>• <strong>Don't hide relationships</strong> - Secrecy isn't ethical non-monogamy</li>
                        <li>• <strong>Don't veto abuse</strong> - Using veto power to control rather than protect</li>
                        <li>• <strong>Don't date someone hoping</strong> they'll "become monogamous for you"</li>
                        <li>• <strong>Don't use NRE</strong> (New Relationship Energy) as an excuse to neglect existing partners</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="red-flags" className="mb-16">
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 md:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-red-500/10 rounded-lg">
                    <Shield className="w-6 h-6 text-red-500" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">Behavior Red Flags</h2>
                </div>
                
                <div className="space-y-6 text-muted-foreground">
                  <p className="text-lg leading-relaxed">
                    Learning to recognize red flags protects you and the community. If you see these behaviors, proceed with extreme caution or disengage entirely.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
                      <h3 className="font-bold text-red-400 mb-4">🚩 Consent Red Flags</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Doesn't take "no" gracefully - pouts, argues, or asks repeatedly</li>
                        <li>• Touches without asking first</li>
                        <li>• Pushes boundaries after they've been stated</li>
                        <li>• Gets angry when rejected</li>
                        <li>• Tries to negotiate safer sex practices away</li>
                        <li>• Ignores or "forgets" previously discussed limits</li>
                        <li>• Uses intoxication as an excuse for bad behavior</li>
                      </ul>
                    </div>

                    <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
                      <h3 className="font-bold text-red-400 mb-4">🚩 Communication Red Flags</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Refuses to discuss boundaries or dismisses the topic</li>
                        <li>• Gets defensive when you ask questions</li>
                        <li>• Contradicts themselves or changes stories</li>
                        <li>• Won't video verify or share basic info</li>
                        <li>• Pressures for immediate meetings</li>
                        <li>• Gets aggressive in messages when challenged</li>
                        <li>• Love-bombs excessively early on</li>
                      </ul>
                    </div>

                    <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
                      <h3 className="font-bold text-red-400 mb-4">🚩 Relationship Red Flags</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Partner doesn't know about their lifestyle activities</li>
                        <li>• Tries to isolate you from their other relationships</li>
                        <li>• Bad-mouths all their exes or previous play partners</li>
                        <li>• Claims everyone in the community is "crazy" or "drama"</li>
                        <li>• Won't introduce you to their partner(s)</li>
                        <li>• Has a reputation you keep hearing about from others</li>
                        <li>• Tries to get you to break your relationship rules</li>
                      </ul>
                    </div>

                    <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-6">
                      <h3 className="font-bold text-red-400 mb-4">🚩 Event/Party Red Flags</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Hovers around play areas without playing or socializing</li>
                        <li>• Follows people around after being turned down</li>
                        <li>• Gets too drunk/high to function appropriately</li>
                        <li>• Makes comments about others' bodies or activities</li>
                        <li>• Tries to sneak phones into play areas</li>
                        <li>• Gossips about other attendees</li>
                        <li>• Ignores dress codes or house rules</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6">
                    <h3 className="font-bold text-green-400 mb-3">✓ What To Do If You See Red Flags</h3>
                    <ul className="text-sm space-y-2">
                      <li>• <strong>Trust your gut</strong> - If something feels wrong, it probably is</li>
                      <li>• <strong>Disengage politely</strong> - "I'm not feeling a connection, but nice to meet you"</li>
                      <li>• <strong>Don't feel obligated</strong> to explain or justify your decision</li>
                      <li>• <strong>Tell event organizers</strong> if you witness concerning behavior</li>
                      <li>• <strong>Warn others</strong> appropriately (without defamation - stick to facts)</li>
                      <li>• <strong>Report on platforms</strong> like SPICE to protect the community</li>
                      <li>• <strong>Leave if you feel unsafe</strong> - Your safety trumps politeness</li>
                    </ul>
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