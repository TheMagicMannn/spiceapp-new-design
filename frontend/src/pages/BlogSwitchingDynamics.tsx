import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";
import { RefreshCw, Heart, Users, BookOpen, MessageCircle, Sparkles } from "lucide-react";

const BlogSwitchingDynamics = () => {
  return (
    <>
      <SEO
        title="Switching Dynamics: What Happens When a Dom Wants to Sub (or Vice Versa) | SPICE"
        description="Personal stories, identity shifts, and relationship impacts when exploring switching in BDSM. Advice for partners navigating role flexibility."
        keywords="BDSM switch, dom to sub, sub to dom, switching dynamics, role reversal BDSM, switch identity, versatile BDSM, changing roles kink"
        canonical="https://thespiceapp.com/blog/switching-dynamics"
      />

      <div className="relative min-h-screen">
        <ParticlesBackground />
        <Header />
        <Breadcrumbs />
        
        <main className="relative z-10 pt-32 pb-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold text-red-500 bg-red-500/10 px-3 py-1 rounded-full">BDSM & KINK</span>
                <span className="text-xs text-muted-foreground">14 min read</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Switching Dynamics: What Happens When a Dom Wants to Sub (or Vice Versa)
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Discovering you want to explore the other side of the slash isn't a crisis—it's an opportunity for growth.
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 rounded-2xl p-12 mb-12 text-center border border-purple-500/30">
              <RefreshCw className="w-16 h-16 text-purple-500 mx-auto mb-4" />
              <p className="text-muted-foreground">Both Sides of the Slash</p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 mb-12">
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-purple-500" />
                In This Guide
              </h2>
              <ul className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                <li><a href="#what-is-switch" className="hover:text-purple-500">→ What Is a Switch?</a></li>
                <li><a href="#signs" className="hover:text-purple-500">→ Signs You Might Be a Switch</a></li>
                <li><a href="#identity" className="hover:text-purple-500">→ Identity Shifts</a></li>
                <li><a href="#relationships" className="hover:text-purple-500">→ Relationship Impacts</a></li>
                <li><a href="#telling-partner" className="hover:text-purple-500">→ Telling Your Partner</a></li>
                <li><a href="#stories" className="hover:text-purple-500">→ Real Stories</a></li>
              </ul>
            </div>

            <article className="prose prose-invert max-w-none">
              <section id="what-is-switch" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <RefreshCw className="w-8 h-8 text-purple-500" />
                  What Is a Switch?
                </h2>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  A <Link to="/guide/glossary" className="text-purple-400 hover:underline">switch</Link> is someone who enjoys both <Link to="/guide/glossary" className="text-purple-400 hover:underline">Dominant</Link> and <Link to="/guide/glossary" className="text-purple-400 hover:underline">submissive</Link> roles—either with the same partner, different partners, or at different times in their life.
                </p>

                <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-4">Switching Can Look Like:</h4>
                  <ul className="space-y-2 text-muted-foreground text-sm">
                    <li>• Topping with one partner, bottoming with another</li>
                    <li>• Dominant in daily life, submissive in the bedroom (or vice versa)</li>
                    <li>• Trading roles within a single scene</li>
                    <li>• Identifying as Dom for years, then discovering sub desires</li>
                    <li>• Role based on mood, partner, or scene type</li>
                  </ul>
                </div>

                <div className="bg-card/50 border border-border rounded-xl p-4 mb-6">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-white">Important:</strong> Being a switch doesn't mean you're "half-Dom, half-sub" or less committed to either role. Many switches go fully into each headspace—they just have capacity for both.
                  </p>
                </div>
              </section>

              <section id="signs" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Signs You Might Be a Switch</h2>

                <div className="bg-card/50 border border-border rounded-xl p-6 mb-6">
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <Sparkles className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span>You identify as Dom/sub but find yourself fantasizing about the opposite role</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Sparkles className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span>Watching scenes, you're drawn to both sides of the power exchange</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Sparkles className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span>Your preferred role changes based on partner energy or mood</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Sparkles className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span>You feel "stuck" in one role and curious about freedom on the other side</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Sparkles className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span>You're good at both giving and taking control outside the bedroom</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section id="identity" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Identity Shifts</h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Realizing you're a switch—or that you want to explore the other side—can feel like an identity crisis. Here's what many people experience:
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-card/50 border border-border rounded-xl p-6">
                    <h4 className="font-bold text-pink-400 mb-2">The "Who Am I?" Phase</h4>
                    <p className="text-sm text-muted-foreground">If you've built an identity around being a Dom or sub, wanting the opposite can feel disorienting. This is normal. Identity is allowed to evolve.</p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-xl p-6">
                    <h4 className="font-bold text-purple-400 mb-2">Imposter Syndrome</h4>
                    <p className="text-sm text-muted-foreground">"I'm not a real Dom if I want to submit" is a common fear. The truth: exploring both sides often makes you better at each, because you understand both perspectives.</p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-xl p-6">
                    <h4 className="font-bold text-blue-400 mb-2">Community Pressure</h4>
                    <p className="text-sm text-muted-foreground">Some communities stigmatize switches as "undecided" or "not serious." These attitudes are outdated. Good communities welcome role flexibility.</p>
                  </div>
                </div>
              </section>

              <section id="relationships" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Heart className="w-8 h-8 text-pink-500" />
                  Relationship Impacts
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  When one partner in an established dynamic wants to switch, it affects both people. Common scenarios:
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-card/50 border border-border rounded-xl p-6">
                    <h4 className="font-bold text-white mb-3">If Your Partner Is Also a Switch:</h4>
                    <p className="text-sm text-muted-foreground">Great news! You can trade roles, explore together, and both get your needs met. Just negotiate clearly about when and how.</p>
                  </div>
                  <div className="bg-card/50 border border-border rounded-xl p-6">
                    <h4 className="font-bold text-white mb-3">If Your Partner Is Fixed Role:</h4>
                    <p className="text-sm text-muted-foreground">More complex. Options include: playing that role with other partners (if ENM), occasional role-reversal scenes, or accepting it's a mismatch that may need addressing.</p>
                  </div>
                </div>
              </section>

              <section id="telling-partner" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <MessageCircle className="w-8 h-8 text-blue-500" />
                  Telling Your Partner
                </h2>

                <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-4">Conversation Script:</h4>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <p>"I've been thinking about our dynamic, and I want to share something with you..."</p>
                    <p>"I've been curious about exploring [the other role]. This doesn't change how I feel about you or what we have—it's about exploring a different part of myself."</p>
                    <p>"I'm not sure what this looks like yet. I wanted to tell you first, before I figure out what I need."</p>
                    <p>"How do you feel hearing this?"</p>
                  </div>
                </div>

                <div className="bg-card/50 border border-border rounded-xl p-4 mb-6">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-white">Key Points:</strong> Reassure them it's not about dissatisfaction. Give them time to process. Don't expect immediate answers. Be open to their feelings too.
                  </p>
                </div>
              </section>

              <section id="stories" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Users className="w-8 h-8 text-purple-500" />
                  Real Stories
                </h2>

                <div className="space-y-6 mb-6">
                  <div className="bg-card/50 border border-border rounded-xl p-6">
                    <h4 className="font-bold text-white mb-2">"I was a Domme for 8 years..."</h4>
                    <p className="text-sm text-muted-foreground italic mb-3">
                      "Everyone knew me as this powerful Domme. Then I met someone whose energy made me want to kneel. It terrified me at first—was I a fraud? Now I understand I can be both. My submission is informed by my dominance. I'm better at both for understanding each."
                    </p>
                    <p className="text-xs text-muted-foreground">— Alexis, 34</p>
                  </div>

                  <div className="bg-card/50 border border-border rounded-xl p-6">
                    <h4 className="font-bold text-white mb-2">"My wife was my sub for 12 years..."</h4>
                    <p className="text-sm text-muted-foreground italic mb-3">
                      "When she told me she wanted to top me, I panicked. I'd built my whole identity around being her Dom. But I trusted her, so we tried it. That first scene she topped me was one of the most intimate experiences of my life. Now we switch regularly."
                    </p>
                    <p className="text-xs text-muted-foreground">— Marcus, 45</p>
                  </div>
                </div>
              </section>

              <section className="mb-12">
                <div className="bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 rounded-xl p-6 border border-purple-500/30">
                  <h3 className="font-bold text-white mb-3">Embrace the Journey</h3>
                  <p className="text-muted-foreground">
                    Switching isn't about being undecided—it's about having the capacity to experience more. Whether you've always known or are just discovering this part of yourself, your kink identity is allowed to be complex, evolving, and multifaceted.
                  </p>
                </div>
              </section>
            </article>

            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="text-xl font-bold mb-6">Continue Your Education</h3>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Link to="/blog/bdsm-beginners-guide" className="bg-card/50 border border-border rounded-xl p-4 hover:border-purple-500/50 transition-colors">
                  <span className="text-xs text-red-500 font-semibold">BDSM & Kink</span>
                  <h4 className="font-bold text-white mt-1 mb-2">BDSM for Beginners</h4>
                  <p className="text-sm text-muted-foreground">Foundation for any role.</p>
                </Link>
                <Link to="/blog/bdsm-negotiation-checklist" className="bg-card/50 border border-border rounded-xl p-4 hover:border-pink-500/50 transition-colors">
                  <span className="text-xs text-red-500 font-semibold">BDSM & Kink</span>
                  <h4 className="font-bold text-white mt-1 mb-2">Negotiation Checklist</h4>
                  <p className="text-sm text-muted-foreground">Essential for switch dynamics.</p>
                </Link>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link to="/guide/glossary" className="text-sm bg-card/50 border border-border rounded-full px-4 py-2 hover:border-purple-500/50 transition-colors">📖 Lifestyle Glossary</Link>
                <Link to="/quiz" className="text-sm bg-card/50 border border-border rounded-full px-4 py-2 hover:border-purple-500/50 transition-colors">🎯 BDSM Quiz</Link>
              </div>
            </div>
          </div>
        </main>
        <FooterSection />
      </div>
    </>
  );
};

export default BlogSwitchingDynamics;
