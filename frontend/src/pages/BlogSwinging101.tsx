import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Users, MessageCircle, Shield, CheckCircle, Heart, MapPin, BookOpen } from "lucide-react";

const BlogSwinging101 = () => {
  return (
    <>
      <SEO
        title="Swinging 101: A Step-by-Step Guide for Curious Couples | SPICE"
        description="Complete beginner's guide to swinging. Learn how to start the conversation, set rules, find swinger clubs and events, and prepare for your first swinging experience."
        keywords="swinging for beginners, how to start swinging, swinger guide, first time swinging, swinging couples guide, swinger lifestyle beginners"
        canonical="https://thespiceapp.com/blog/swinging-101-beginners-guide"
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
                <span className="text-xs text-muted-foreground">18 min read</span>
                <span className="text-xs text-muted-foreground">Updated January 2025</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                Swinging 101: A Step-by-Step Guide for Curious Couples Ready to Take the First Leap
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Everything you need to know about entering the swinging lifestyle. From that first conversation to your first club visit, we'll guide you through every step.
              </p>
            </div>

            {/* Featured Image */}
            <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl p-12 mb-12 text-center border border-primary/30">
              <Users className="w-16 h-16 text-primary mx-auto mb-4" />
              <p className="text-muted-foreground">Your Complete Roadmap to the Swinging Lifestyle</p>
            </div>

            {/* Table of Contents */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 mb-12">
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                In This Guide
              </h2>
              <ul className="space-y-2 text-sm">
                <li><a href="#what-is-swinging" className="text-primary hover:underline">→ What is Swinging?</a></li>
                <li><a href="#starting-conversation" className="text-primary hover:underline">→ Starting the Conversation with Your Partner</a></li>
                <li><a href="#setting-rules" className="text-primary hover:underline">→ Setting Rules and Boundaries</a></li>
                <li><a href="#finding-community" className="text-primary hover:underline">→ Finding the Swinging Community</a></li>
                <li><a href="#first-experience" className="text-primary hover:underline">→ Preparing for Your First Experience</a></li>
                <li><a href="#after-first-time" className="text-primary hover:underline">→ After Your First Time</a></li>
              </ul>
            </div>

            {/* Article Content */}
            <article className="prose prose-invert max-w-none">
              <section id="what-is-swinging" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">What is Swinging?</h2>
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 mb-6">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Swinging is a form of ethical non-monogamy where committed couples engage in sexual activities with other couples or individuals, with full knowledge and consent of all partners. Unlike cheating, swinging is built on transparency, trust, and mutual agreement.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    The swinging community is diverse and welcoming, encompassing everyone from couples who enjoy flirting and soft play to those who engage in full partner exchanges. There's no "right way" to swing—it's about what works for your relationship.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Key terms you'll encounter:
                  </p>
                  <ul className="mt-4 space-y-2 text-muted-foreground">
                    <li><strong>Soft Swap:</strong> Everything but penetrative sex with others</li>
                    <li><strong>Full Swap:</strong> Complete sexual exchange with other couples</li>
                    <li><strong>Same Room:</strong> Play happens in the same space</li>
                    <li><strong>Separate Room:</strong> Couples go to different rooms</li>
                    <li><strong>Unicorn:</strong> A single person (usually female) who plays with couples</li>
                  </ul>
                </div>
              </section>

              <section id="starting-conversation" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Starting the Conversation with Your Partner</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  The conversation about swinging can feel daunting, but it's the foundation of everything that follows. Here's how to approach it thoughtfully.
                </p>

                <div className="space-y-6">
                  <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-primary/20 text-primary rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                      <h3 className="text-xl font-bold">Choose the Right Moment</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Pick a relaxed, private time when you're both in good moods. Not during an argument, not right before bed, and definitely not during sex. A quiet weekend morning or a walk together often works well.
                    </p>
                  </div>

                  <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-primary/20 text-primary rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                      <h3 className="text-xl font-bold">Frame It as Curiosity</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Start by sharing that you've been curious about something, not that you've already decided. Try:
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• "I came across something interesting and wondered what you think..."</li>
                      <li>• "I've been curious about the swinging lifestyle. Have you ever thought about it?"</li>
                      <li>• "I read an article about couples who swing and it got me thinking..."</li>
                    </ul>
                  </div>

                  <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-primary/20 text-primary rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                      <h3 className="text-xl font-bold">Listen Without Defensiveness</h3>
                    </div>
                    <p className="text-muted-foreground">
                      Your partner's initial reaction might be surprise, confusion, or hesitation. That's normal. Give them space to process without pressuring for an immediate answer. Be prepared for questions and answer honestly.
                    </p>
                  </div>

                  <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-primary/20 text-primary rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                      <h3 className="text-xl font-bold">Explore Together</h3>
                    </div>
                    <p className="text-muted-foreground">
                      If there's mutual interest, suggest learning more together. Read articles, watch documentaries, or browse lifestyle websites as a couple. This shared exploration builds connection and understanding.
                    </p>
                  </div>
                </div>
              </section>

              <section id="setting-rules" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Setting Rules and Boundaries</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Clear boundaries are what separate healthy swinging from chaos. Take time to discuss and document your agreements before any experience.
                </p>

                <div className="bg-primary/10 border border-primary/30 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-bold mb-4">Essential Boundary Categories</h3>
                  
                  <div className="space-y-4">
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold mb-2">Physical Boundaries</h4>
                      <p className="text-sm text-muted-foreground">What activities are okay? Kissing? Oral? Penetration? What about specific acts that are off-limits?</p>
                    </div>
                    
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold mb-2">Same Room vs. Separate Room</h4>
                      <p className="text-sm text-muted-foreground">Do you need to be in sight of each other? Many beginners start same-room only.</p>
                    </div>
                    
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold mb-2">Communication During Play</h4>
                      <p className="text-sm text-muted-foreground">What check-in signals will you use? What's your safe word that stops everything?</p>
                    </div>
                    
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold mb-2">Protection Requirements</h4>
                      <p className="text-sm text-muted-foreground">What safer sex practices are non-negotiable? Condoms for all penetration? Dental dams?</p>
                    </div>
                    
                    <div className="border-l-4 border-primary pl-4">
                      <h4 className="font-semibold mb-2">Emotional Boundaries</h4>
                      <p className="text-sm text-muted-foreground">How do you feel about ongoing connections vs. one-time encounters? Outside communication with play partners?</p>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-6 mb-6">
                  <h3 className="font-bold text-yellow-400 mb-3">Important: The Veto Rule</h3>
                  <p className="text-muted-foreground">
                    Both partners should have absolute veto power. If either person is uncomfortable with a potential partner, situation, or activity, it doesn't happen. No questions, no guilt, no negotiation. This is fundamental to healthy swinging.
                  </p>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  For more on setting boundaries, check out our <Link to="/start/consent-basics" className="text-primary hover:underline">Consent Basics Guide</Link> and <Link to="/lifestyle/relationships-communication" className="text-primary hover:underline">Relationships & Communication Guide</Link>.
                </p>
              </section>

              <section id="finding-community" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Finding the Swinging Community</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Once you've talked, set boundaries, and decided to explore, you'll need to find other like-minded couples. Here are your main options:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                    <MapPin className="w-8 h-8 text-primary mb-4" />
                    <h3 className="font-bold mb-3">Lifestyle Clubs</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Physical venues designed for swingers. They typically have dance floors, private rooms, and clear rules about consent. Great for beginners because staff can guide you.
                    </p>
                    <Link to="/travel/clubs-resorts" className="text-primary text-sm hover:underline">Find clubs near you →</Link>
                  </div>
                  
                  <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                    <Users className="w-8 h-8 text-primary mb-4" />
                    <h3 className="font-bold mb-3">Lifestyle Apps & Websites</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Platforms like <Link to="/download" className="text-primary hover:underline">SPICE</Link> connect couples who share your interests. You can chat, verify, and meet at your own pace.
                    </p>
                    <Link to="/blog/swinging-finding-couples-2025" className="text-primary text-sm hover:underline">Best platforms for 2025 →</Link>
                  </div>
                  
                  <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                    <Heart className="w-8 h-8 text-primary mb-4" />
                    <h3 className="font-bold mb-3">House Parties</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Private parties hosted by experienced couples. Often more intimate and vetted than clubs, but harder to find as a newcomer.
                    </p>
                  </div>
                  
                  <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                    <Shield className="w-8 h-8 text-primary mb-4" />
                    <h3 className="font-bold mb-3">Lifestyle Resorts & Cruises</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Vacation destinations where everyone is in the lifestyle. Immersive experience in a beautiful setting.
                    </p>
                    <Link to="/blog/swinging-vacation-destinations-2025" className="text-primary text-sm hover:underline">Top destinations for 2025 →</Link>
                  </div>
                </div>
              </section>

              <section id="first-experience" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Preparing for Your First Experience</h2>
                
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-bold mb-4">The Week Before</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Revisit your boundaries:</strong> Make sure you're both still aligned on rules.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Discuss expectations:</strong> Are you going just to observe? To flirt? To potentially play?</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Get tested:</strong> Many couples request recent STI results. Have yours ready.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Plan your exit:</strong> Know how you'll leave if either of you gets uncomfortable.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-bold mb-4">The Day Of</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Stay sober-ish:</strong> A drink to relax is fine; getting drunk impairs judgment and consent.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Dress to feel confident:</strong> Wear something that makes you both feel sexy.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Arrive together, leave together:</strong> You're a team. Act like one.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>No pressure:</strong> It's perfectly okay if nothing happens. Just being there is a step.</span>
                    </li>
                  </ul>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  For detailed etiquette guidance, read our <Link to="/blog/swinging-etiquette-rules" className="text-primary hover:underline">Swinging Etiquette Guide</Link>.
                </p>
              </section>

              <section id="after-first-time" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">After Your First Time</h2>
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 mb-6">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    What happens after your first experience is just as important as the experience itself. Make time to process together.
                  </p>
                  
                  <h3 className="text-xl font-bold mb-4">The Debrief</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li>• <strong>Share honestly:</strong> What did you enjoy? What felt uncomfortable?</li>
                    <li>• <strong>Validate feelings:</strong> Whatever emotions come up are valid—excitement, jealousy, confusion.</li>
                    <li>• <strong>Reconnect intimately:</strong> Many couples find post-experience sex ("reclamation") deeply bonding.</li>
                    <li>• <strong>Adjust boundaries:</strong> Based on the experience, do any rules need to change?</li>
                    <li>• <strong>Decide next steps:</strong> Do you want to continue? Take a break? Explore differently?</li>
                  </ul>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  For guidance on processing emotions, check out our article on <Link to="/blog/swinging-jealousy-compersion" className="text-primary hover:underline">managing jealousy in the lifestyle</Link>.
                </p>
              </section>
            </article>

            {/* Related Articles */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 mb-8">
              <h2 className="text-xl font-bold mb-6">Continue Your Journey</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link to="/blog/swinging-mistakes-avoid" className="p-4 bg-background/50 border border-border/50 rounded-lg hover:border-primary/50 transition-all">
                  <span className="text-xs text-primary font-semibold">MUST READ</span>
                  <h3 className="font-semibold mt-2">Common Mistakes New Swingers Make</h3>
                </Link>
                <Link to="/blog/swinging-etiquette-rules" className="p-4 bg-background/50 border border-border/50 rounded-lg hover:border-primary/50 transition-all">
                  <span className="text-xs text-primary font-semibold">ETIQUETTE</span>
                  <h3 className="font-semibold mt-2">The Unwritten Rules of Swinging</h3>
                </Link>
                <Link to="/blog/swinging-soft-full-swap" className="p-4 bg-background/50 border border-border/50 rounded-lg hover:border-primary/50 transition-all">
                  <span className="text-xs text-primary font-semibold">GUIDE</span>
                  <h3 className="font-semibold mt-2">Soft Swap vs. Full Swap Explained</h3>
                </Link>
                <Link to="/lifestyle/swingers-guide" className="p-4 bg-background/50 border border-border/50 rounded-lg hover:border-primary/50 transition-all">
                  <span className="text-xs text-primary font-semibold">COMPLETE GUIDE</span>
                  <h3 className="font-semibold mt-2">The Complete Swingers Guide</h3>
                </Link>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl p-8 border border-primary/30 text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Meet Other Couples?</h2>
              <p className="text-muted-foreground mb-6">
                Join SPICE to connect with verified swinger couples in your area.
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

export default BlogSwinging101;
