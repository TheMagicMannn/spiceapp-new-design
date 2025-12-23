import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Heart, Users, CheckCircle, BookOpen, Shield, MessageCircle, Baby, School, Home } from "lucide-react";

const BlogTeachingConsentNextGen = () => {
  return (
    <>
      <SEO
        title="Teaching Consent to the Next Generation: Raising Kids Who Understand Boundaries | SPICE"
        description="Age-appropriate ways to model healthy consent, respect, and communication for parents in open or lifestyle relationships. Build a foundation of bodily autonomy."
        keywords="teaching consent to children, consent education kids, raising kids boundaries, sex positive parenting, bodily autonomy children, consent conversations children, healthy boundaries kids"
        canonical="https://thespiceapp.com/blog/teaching-consent-next-generation"
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                Teaching Consent to the Next Generation: Raising Kids Who Understand Boundaries in a Sex-Positive Home
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Consent education starts long before "the talk." Here's how parents in lifestyle relationships can model and teach healthy boundaries, bodily autonomy, and respectful communication.
              </p>
            </div>

            {/* Featured Section */}
            <div className="bg-gradient-to-r from-teal-500/20 via-cyan-500/20 to-teal-500/20 rounded-2xl p-12 mb-12 text-center border border-teal-500/30">
              <Users className="w-16 h-16 text-teal-500 mx-auto mb-4" />
              <p className="text-muted-foreground">Building Tomorrow's Consent Culture Today</p>
            </div>

            {/* Key Message */}
            <div className="bg-teal-900/20 border border-teal-500/30 rounded-xl p-6 mb-12">
              <div className="flex items-start gap-3">
                <Heart className="w-6 h-6 text-teal-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-teal-400 mb-2">The Foundation:</h3>
                  <p className="text-muted-foreground">
                    Children who understand consent grow into adults who respect others and advocate for themselves. Teaching consent isn't about sex—it's about bodily autonomy, personal boundaries, and respectful relationships at every age.
                  </p>
                </div>
              </div>
            </div>

            {/* Important Note */}
            <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6 mb-12">
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-purple-400 mb-2">A Note for Lifestyle Parents:</h3>
                  <p className="text-muted-foreground">
                    Being in the lifestyle doesn't mean sharing adult details with children. What it does mean is that you likely already value consent, communication, and healthy sexuality—values that translate beautifully to parenting. This guide focuses on <strong>age-appropriate</strong> consent education, not disclosure about adult activities.
                  </p>
                </div>
              </div>
            </div>

            {/* Table of Contents */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 mb-12">
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-teal-500" />
                In This Guide
              </h2>
              <ul className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                <li><a href="#why-early" className="hover:text-teal-500">→ Why Start Early?</a></li>
                <li><a href="#toddlers" className="hover:text-teal-500">→ Toddlers & Preschoolers (2-5)</a></li>
                <li><a href="#elementary" className="hover:text-teal-500">→ Elementary Age (6-10)</a></li>
                <li><a href="#tweens" className="hover:text-teal-500">→ Tweens (11-13)</a></li>
                <li><a href="#teens" className="hover:text-teal-500">→ Teenagers (14+)</a></li>
                <li><a href="#modeling" className="hover:text-teal-500">→ Modeling Consent at Home</a></li>
                <li><a href="#difficult-topics" className="hover:text-teal-500">→ Difficult Conversations</a></li>
                <li><a href="#resources" className="hover:text-teal-500">→ Resources & Books</a></li>
              </ul>
            </div>

            {/* Article Content */}
            <article className="prose prose-invert max-w-none">
              <section id="why-early" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Baby className="w-8 h-8 text-teal-500" />
                  Why Start Early?
                </h2>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Consent education isn't a one-time "talk"—it's an ongoing conversation that evolves as children grow. Starting early establishes patterns that become automatic:
                </p>

                <div className="bg-teal-900/20 border border-teal-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-4">Benefits of Early Consent Education:</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Safety:</strong> Children who understand "my body belongs to me" can better recognize and report inappropriate behavior.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Empathy:</strong> Learning to respect others' boundaries builds emotional intelligence and healthy relationships.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Communication:</strong> Kids learn to express their needs and hear others' needs—skills for life.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Foundation:</strong> Age-appropriate lessons build naturally into more complex conversations as they mature.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card/50 border border-border rounded-xl p-4 mb-6">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-white">Research Note:</strong> Studies show children who receive age-appropriate consent education are better at recognizing and reporting inappropriate situations, have healthier peer relationships, and grow into adults with better understanding of consent in intimate contexts.
                  </p>
                </div>
              </section>

              <section id="toddlers" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Heart className="w-8 h-8 text-pink-500" />
                  Toddlers & Preschoolers (Ages 2-5)
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  At this age, consent education is about bodily autonomy, naming body parts, and simple boundary-setting.
                </p>

                <div className="bg-pink-900/20 border border-pink-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-4">Key Concepts:</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                      <span><strong>"My body belongs to me":</strong> A simple, powerful phrase children can understand and repeat.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Proper body part names:</strong> Use anatomical names (penis, vulva, etc.)—not "cute" names. This helps with safety reporting.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Private parts:</strong> "These are private—they're covered by your bathing suit."</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Asking before touching:</strong> "Let's ask before we hug someone. They might not want a hug right now."</span>
                    </li>
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-card/50 border border-border rounded-xl p-4">
                    <h4 className="font-bold text-white mb-2">Scripts to Use:</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>"Would you like a hug, or a high-five?"</li>
                      <li>"Sarah doesn't want to be tickled right now. Let's find something else to do."</li>
                      <li>"You can say 'stop' if you don't like something."</li>
                      <li>"No means no. When someone says no, we stop."</li>
                    </ul>
                  </div>
                  <div className="bg-card/50 border border-border rounded-xl p-4">
                    <h4 className="font-bold text-white mb-2">Daily Opportunities:</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Asking before helping them dress</li>
                      <li>• Letting them choose greetings (hug, wave, etc.)</li>
                      <li>• Stopping tickling immediately when asked</li>
                      <li>• Respecting their "no" to kisses from relatives</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-card/50 border border-border rounded-xl p-4 mb-6">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-white">Common Situation:</strong> Grandma wants a kiss, child doesn't want to give one. Instead of "Give grandma a kiss," try: "Would you like to give grandma a hug, a high-five, or blow her a kiss from here?" This respects the child's autonomy while maintaining family connection.
                  </p>
                </div>
              </section>

              <section id="elementary" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <School className="w-8 h-8 text-blue-500" />
                  Elementary Age (Ages 6-10)
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Building on earlier lessons, this age group can understand more complex concepts about boundaries, feelings, and respecting others.
                </p>

                <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-4">Key Concepts:</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Personal space:</strong> Everyone has an invisible bubble. We ask before entering someone's space.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Reading body language:</strong> "How can you tell if someone is uncomfortable?" (Pulling away, looking down, etc.)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Asking and accepting "no":</strong> "It's okay to ask, and it's okay if they say no. And it's okay for you to say no too."</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Trusted adults:</strong> Identifying adults they can talk to if something feels wrong.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Secrets vs. surprises:</strong> "Surprises are fun things we'll eventually share. Secrets that make you feel bad aren't okay."</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card/50 border border-border rounded-xl p-4 mb-6">
                  <h4 className="font-bold text-white mb-2">Conversation Starters:</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• "What would you do if a friend kept touching you after you said stop?"</li>
                    <li>• "How can you tell if someone wants to play with you or wants to be alone?"</li>
                    <li>• "Who are the adults you could talk to if something made you feel weird or scared?"</li>
                    <li>• "It's my job to keep you safe. You can always tell me anything."</li>
                  </ul>
                </div>
              </section>

              <section id="tweens" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <MessageCircle className="w-8 h-8 text-purple-500" />
                  Tweens (Ages 11-13)
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Puberty brings new relevance to consent conversations. Tweens are ready for more nuanced discussions about peer pressure, digital boundaries, and emerging romantic feelings.
                </p>

                <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-4">Key Topics:</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Digital consent:</strong> Not sharing others' photos without permission, not forwarding private messages.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Peer pressure:</strong> "You can like someone and still say no to things you're not ready for."</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Changing relationships:</strong> Boundaries can change as friendships and feelings change.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Media literacy:</strong> Discussing consent (and lack thereof) in movies, TV, and music.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card/50 border border-border rounded-xl p-4 mb-6">
                  <h4 className="font-bold text-white mb-2">Conversation Approaches:</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• Use media as a springboard: "What do you think about how that character handled that situation?"</li>
                    <li>• Discuss scenarios: "What would you do if someone asked to see your phone without asking?"</li>
                    <li>• Be available: "I'm here if you ever want to talk about stuff going on with friends or crushes."</li>
                    <li>• Normalize questions: "It's normal to have questions about this stuff. What are you curious about?"</li>
                  </ul>
                </div>
              </section>

              <section id="teens" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Users className="w-8 h-8 text-amber-500" />
                  Teenagers (Ages 14+)
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Teens are ready for direct conversations about consent in romantic and sexual contexts. The goal is ensuring they have the knowledge and confidence to navigate relationships safely.
                </p>

                <div className="bg-amber-900/20 border border-amber-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-4">Key Topics:</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Enthusiastic consent:</strong> "Yes" should be excited, not reluctant. Looking for enthusiasm, not just absence of "no."</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Consent can be withdrawn:</strong> Anyone can change their mind at any time. That's always okay.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Intoxication and consent:</strong> You can't give or get real consent when drunk or high.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Respecting partners:</strong> Both asking for what you want and checking in with partners.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Recognizing coercion:</strong> Pressure, guilt-tripping, and manipulation aren't consent.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card/50 border border-border rounded-xl p-4 mb-6">
                  <h4 className="font-bold text-white mb-2">Key Messages for Teens:</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• "Your boundaries matter. Anyone who doesn't respect them isn't worth your time."</li>
                    <li>• "Asking is sexy. Caring about your partner's experience is attractive."</li>
                    <li>• "You never 'owe' anyone anything physical, no matter what."</li>
                    <li>• "I'd rather you talk to me than figure this out alone. I'm not going to freak out."</li>
                  </ul>
                </div>
              </section>

              <section id="modeling" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Home className="w-8 h-8 text-green-500" />
                  Modeling Consent at Home
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Children learn more from what they see than what they're told. Here's how to model consent in everyday family life:
                </p>

                <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-4">Daily Modeling Opportunities:</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Knock before entering:</strong> Respect closed doors. Teach children to knock too.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Ask before borrowing:</strong> Model asking to use others' things—even within family.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Accept their "no":</strong> When they don't want a hug, respect it. "That's okay, I'll be here when you want one."</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Apologize when wrong:</strong> "I'm sorry I picked you up without asking. I'll ask next time."</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Show partner respect:</strong> Let children see you asking permission, respecting boundaries, and communicating with your partner.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card/50 border border-border rounded-xl p-4 mb-6">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-white">For Lifestyle Parents Specifically:</strong> Your experience with explicit consent negotiation is actually an asset here. You understand consent deeply. The key is translating that understanding into age-appropriate lessons without disclosing adult activities.
                  </p>
                </div>
              </section>

              <section id="difficult-topics" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Handling Difficult Conversations</h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Sometimes kids ask hard questions or encounter difficult situations. Here's how to navigate them:
                </p>

                <div className="space-y-4 mb-6">
                  <div className="bg-card/50 border border-border rounded-xl p-4">
                    <h4 className="font-bold text-white mb-2">If They Witness Inappropriate Behavior:</h4>
                    <p className="text-sm text-muted-foreground">
                      Validate their feelings, explain it wasn't okay, reassure them it's not their fault, and explain what should have happened. "That wasn't okay. Adults/people shouldn't do that. You did the right thing telling me."
                    </p>
                  </div>

                  <div className="bg-card/50 border border-border rounded-xl p-4">
                    <h4 className="font-bold text-white mb-2">If They Report Something Concerning:</h4>
                    <p className="text-sm text-muted-foreground">
                      Stay calm. Thank them for telling you. Don't ask leading questions. Reassure them they're not in trouble. Consult with professionals (pediatrician, school counselor, authorities if needed) about next steps.
                    </p>
                  </div>

                  <div className="bg-card/50 border border-border rounded-xl p-4">
                    <h4 className="font-bold text-white mb-2">If They Ask About Your Lifestyle:</h4>
                    <p className="text-sm text-muted-foreground">
                      Age-appropriate honesty: "Grown-ups have private parts of their lives. When you're an adult, you'll make your own choices about relationships." You don't owe details, but avoid lying.
                    </p>
                  </div>
                </div>
              </section>

              <section id="resources" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Resources & Books</h2>

                <div className="bg-teal-900/20 border border-teal-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-4">Recommended Books by Age:</h4>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-bold text-teal-400 mb-2">Ages 2-5:</h5>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• <em>My Body Belongs to Me</em> by Jill Starishevsky</li>
                        <li>• <em>No Means No!</em> by Jayneen Sanders</li>
                        <li>• <em>C Is for Consent</em> by Eleanor Morrison</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-bold text-teal-400 mb-2">Ages 6-10:</h5>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• <em>Let's Talk About Body Boundaries, Consent and Respect</em> by Jayneen Sanders</li>
                        <li>• <em>Miles Is the Boss of His Body</em> by Samantha Kurtzman-Counter</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-bold text-teal-400 mb-2">Ages 11+:</h5>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• <em>Consent (For Kids!)</em> by Rachel Brian</li>
                        <li>• <em>The Every Body Book</em> by Rachel E. Simon</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-card/50 border border-border rounded-xl p-4 mb-6">
                  <h4 className="font-bold text-white mb-2">Online Resources:</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li>• <strong>Amaze.org:</strong> Age-appropriate videos about bodies, relationships, and consent</li>
                    <li>• <strong>Scarleteen.com:</strong> Comprehensive sex ed for teens</li>
                    <li>• <strong>RAINN.org:</strong> Resources on preventing abuse and supporting survivors</li>
                  </ul>
                </div>
              </section>

              {/* Final Section */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">The Bottom Line</h2>

                <div className="bg-gradient-to-r from-teal-500/20 via-cyan-500/20 to-teal-500/20 rounded-xl p-6 border border-teal-500/30 mb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Teaching consent is one of the most important things we can do for the next generation. Children who understand bodily autonomy, respect for boundaries, and healthy communication grow into adults who create safer relationships and communities.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    <strong className="text-white">As lifestyle parents,</strong> you're uniquely positioned to teach these values. You already understand consent deeply. Your job is simply to translate that understanding into age-appropriate lessons—and to model it every day.
                  </p>
                </div>

                <div className="bg-card/50 border border-border rounded-xl p-4">
                  <p className="text-muted-foreground text-center">
                    The children we raise today become the adults who shape tomorrow's culture. Teach them well.
                  </p>
                </div>
              </section>
            </article>

            {/* Related Articles */}
            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="text-xl font-bold mb-6">Related Articles</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Link to="/blog/consent-golden-rules" className="bg-card/50 border border-border rounded-xl p-4 hover:border-green-500/50 transition-colors">
                  <h4 className="font-bold text-white mb-2">The Golden Rules of Consent</h4>
                  <p className="text-sm text-muted-foreground">Master enthusiastic consent in any encounter.</p>
                </Link>
                <Link to="/blog/aftercare-emotional-safety" className="bg-card/50 border border-border rounded-xl p-4 hover:border-rose-500/50 transition-colors">
                  <h4 className="font-bold text-white mb-2">Aftercare and Emotional Safety</h4>
                  <p className="text-sm text-muted-foreground">Why reconnection matters just as much as protection.</p>
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

export default BlogTeachingConsentNextGen;
