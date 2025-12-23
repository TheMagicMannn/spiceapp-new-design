import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BookOpen, CheckCircle, XCircle, MessageCircle, Shield, Users } from "lucide-react";

const BlogSwingingEtiquette = () => {
  return (
    <>
      <SEO
        title="Swinging Etiquette: The Unwritten Rules Every Couple Needs to Know | SPICE"
        description="Essential do's and don'ts for swinger clubs, parties, and dates. Learn about consent, rejection, hygiene, phone use, and being a good guest in the lifestyle."
        keywords="swinging etiquette, swinger rules, lifestyle etiquette, swinger club rules, swinging dos and donts, swinger party etiquette"
        canonical="https://thespiceapp.com/blog/swinging-etiquette-rules"
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
                <span className="text-xs text-muted-foreground">13 min read</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                Swinging Etiquette: The Unwritten Rules Every Couple Needs to Know
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                From club nights to house parties—master the essential dos and don'ts that make you welcome anywhere in the lifestyle.
              </p>
            </div>

            {/* Featured Section */}
            <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl p-12 mb-12 text-center border border-primary/30">
              <BookOpen className="w-16 h-16 text-primary mx-auto mb-4" />
              <p className="text-muted-foreground">The Guide to Being a Great Lifestyle Couple</p>
            </div>

            {/* Article Content */}
            <article className="prose prose-invert max-w-none">
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Shield className="w-8 h-8 text-green-500" />
                  The Golden Rule: Consent
                </h2>
                
                <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6 mb-6">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Everything in the lifestyle begins and ends with consent. It's not just polite—it's mandatory.
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Ask before touching:</strong> Always. Even if you've played before. Even a hand on the shoulder.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>No means no:</strong> Immediately, without question, without negotiation, without attitude.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Check in during play:</strong> "Is this okay?" "Do you like this?" "Should I continue?"</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Consent can be withdrawn:</strong> At any time, for any reason. Respect it gracefully.</span>
                    </li>
                  </ul>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  For a deeper dive, read our <Link to="/start/consent-basics" className="text-primary hover:underline">Consent Basics Guide</Link>.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">At Lifestyle Clubs</h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5" />
                      DO
                    </h3>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>✓ Dress to impress (check dress code)</li>
                      <li>✓ Shower and groom before arriving</li>
                      <li>✓ Bring your own protection</li>
                      <li>✓ Introduce yourselves to staff</li>
                      <li>✓ Make eye contact before approaching</li>
                      <li>✓ Accept rejection gracefully</li>
                      <li>✓ Clean up after yourself in play areas</li>
                      <li>✓ Tip bartenders well</li>
                      <li>✓ Thank hosts when leaving</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                    <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
                      <XCircle className="w-5 h-5" />
                      DON'T
                    </h3>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>✗ Take photos or videos (ever)</li>
                      <li>✗ Use your phone in play areas</li>
                      <li>✗ Stare or linger creepily</li>
                      <li>✗ Touch without asking</li>
                      <li>✗ Get too intoxicated</li>
                      <li>✗ Separate from your partner without agreement</li>
                      <li>✗ Pressure anyone who says no</li>
                      <li>✗ Discuss people's real identities</li>
                      <li>✗ Leave your partner alone uncomfortably</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4">Phone Etiquette</h3>
                  <p className="text-muted-foreground">
                    Most clubs ban phones entirely in play areas—for good reason. Even in social areas, be discreet. Never photograph anyone without explicit permission (and even then, many clubs prohibit it). If you need to use your phone, step outside or to a designated area.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">At House Parties</h2>
                
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-bold mb-4">Being a Good Guest</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>RSVP and show up:</strong> Hosts plan based on numbers. Flaking hurts everyone.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Bring what's requested:</strong> BYOB, contribution to food, specific items—don't arrive empty-handed.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Follow house rules:</strong> Every host has specific rules. Learn them and respect them.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Clean up after play:</strong> Strip sheets, dispose of protection, leave spaces tidy.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Respect privacy:</strong> What happens at the party stays at the party. Never share details outside.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Thank your hosts:</strong> Hosting is work. A thank-you message the next day goes a long way.</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <MessageCircle className="w-8 h-8 text-primary" />
                  Handling Rejection Gracefully
                </h2>
                
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 mb-6">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Rejection is a normal part of the lifestyle. How you handle it defines your reputation.
                  </p>
                  
                  <h3 className="font-bold mb-3">When You're Rejected:</h3>
                  <ul className="space-y-2 text-muted-foreground mb-4">
                    <li>• Say "Thank you for letting us know" or "No problem, enjoy your evening"</li>
                    <li>• Don't ask why or try to change their mind</li>
                    <li>• Don't take it personally—chemistry is subjective</li>
                    <li>• Move on without lingering or returning repeatedly</li>
                    <li>• Never badmouth them to others</li>
                  </ul>
                  
                  <h3 className="font-bold mb-3">When You're Rejecting:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Be clear but kind: "Thanks for approaching, but we're not feeling a connection"</li>
                    <li>• You don't owe an explanation</li>
                    <li>• A firm "no thank you" is complete sentence</li>
                    <li>• Don't ghost mid-conversation—give closure</li>
                  </ul>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Hygiene Essentials</h2>
                
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 mb-6">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    This might seem obvious, but poor hygiene is a top complaint in lifestyle communities. Don't let it be said about you.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-background/50 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">Before Events</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>✓ Shower thoroughly</li>
                        <li>✓ Fresh breath (brush, mouthwash, mints)</li>
                        <li>✓ Clean, trimmed nails</li>
                        <li>✓ Grooming as you prefer (no requirements)</li>
                        <li>✓ Light on cologne/perfume</li>
                      </ul>
                    </div>
                    <div className="bg-background/50 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">During Play</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>✓ Freshen breath between activities</li>
                        <li>✓ Wash hands after eating</li>
                        <li>✓ Quick clean-up between partners</li>
                        <li>✓ Fresh protection for each partner</li>
                        <li>✓ Towel off sweat if needed</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Users className="w-8 h-8 text-primary" />
                  Same Room vs. Separate Room
                </h2>
                
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 mb-6">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    If you're doing same-room play, there's etiquette for that too:
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Stay aware of your partner:</strong> Check in visually, be available if needed.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Match energy:</strong> If one couple is wrapping up, be sensitive to the room dynamic.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Don't compare:</strong> Avoid making comments comparing partners—it's awkward for everyone.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Know when to pause:</strong> If your partner signals discomfort, stop immediately.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-6">
                  <h3 className="font-bold text-yellow-400 mb-3">Separate Room Considerations</h3>
                  <p className="text-muted-foreground">
                    If going separate, establish clear check-in times, duration limits, and communication methods beforehand. Both couples should agree to separate room play—never assume.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">After-Event Etiquette</h2>
                
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• <strong>Follow up appropriately:</strong> A friendly "had fun meeting you" message is nice; pursuing someone who wasn't interested is not.</li>
                    <li>• <strong>Respect boundaries:</strong> If a couple played with you once but isn't responsive after, take the hint.</li>
                    <li>• <strong>Keep discretion:</strong> Never share details about who was there or what happened with non-lifestyle people.</li>
                    <li>• <strong>Give honest feedback:</strong> If asked for a reference or review, be honest but kind.</li>
                    <li>• <strong>Process with your partner:</strong> Debrief about what went well and what you'd change. See our <Link to="/blog/swinging-jealousy-compersion" className="text-primary hover:underline">jealousy management guide</Link>.</li>
                  </ul>
                </div>
              </section>
            </article>

            {/* Related Articles */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 mb-8">
              <h2 className="text-xl font-bold mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link to="/blog/swinging-101-beginners-guide" className="p-4 bg-background/50 border border-border/50 rounded-lg hover:border-primary/50 transition-all">
                  <span className="text-xs text-primary font-semibold">START HERE</span>
                  <h3 className="font-semibold mt-2">Swinging 101: Beginner's Guide</h3>
                </Link>
                <Link to="/blog/swinging-mistakes-avoid" className="p-4 bg-background/50 border border-border/50 rounded-lg hover:border-primary/50 transition-all">
                  <span className="text-xs text-primary font-semibold">AVOID</span>
                  <h3 className="font-semibold mt-2">Common Mistakes New Swingers Make</h3>
                </Link>
                <Link to="/blog/swinging-health-safety-consent" className="p-4 bg-background/50 border border-border/50 rounded-lg hover:border-primary/50 transition-all">
                  <span className="text-xs text-primary font-semibold">SAFETY</span>
                  <h3 className="font-semibold mt-2">Health, Safety & Consent</h3>
                </Link>
                <Link to="/start/consent-basics" className="p-4 bg-background/50 border border-border/50 rounded-lg hover:border-primary/50 transition-all">
                  <span className="text-xs text-primary font-semibold">GUIDE</span>
                  <h3 className="font-semibold mt-2">Consent Basics Guide</h3>
                </Link>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl p-8 border border-primary/30 text-center">
              <h2 className="text-2xl font-bold mb-4">Meet Couples Who Value Respect</h2>
              <p className="text-muted-foreground mb-6">
                Connect with well-mannered couples on SPICE.
              </p>
              <Link to="/download" className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all">
                Join SPICE Free
              </Link>
            </div>
          </div>
        </main>

        <FooterSection />
      </div>
    </>
  );
};

export default BlogSwingingEtiquette;
