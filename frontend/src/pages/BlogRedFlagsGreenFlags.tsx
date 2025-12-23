import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Flag, AlertTriangle, CheckCircle, Shield, MessageCircle, Eye, BookOpen } from "lucide-react";

const BlogRedFlagsGreenFlags = () => {
  return (
    <>
      <SEO
        title="Red Flags vs. Green Flags: Spotting Safe Partners Before You Meet | SPICE"
        description="Learn to identify warning signs and positive traits in lifestyle partners. Real examples of red flags in profiles and messages, plus green flags that signal respect."
        keywords="red flags dating, green flags relationships, safe partners, warning signs dating profiles, lifestyle partner safety, swinger red flags, ENM partner vetting"
        canonical="https://thespiceapp.com/blog/red-flags-green-flags"
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
                <span className="text-xs text-muted-foreground">16 min read</span>
                <span className="text-xs text-muted-foreground">Updated January 2025</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 bg-clip-text text-transparent">
                Red Flags vs. Green Flags: Spotting Safe Partners Before You Ever Meet
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Your safety starts before the first date. Learn to read profiles, messages, and conversations to identify partners who respect boundaries—and those who don't.
              </p>
            </div>

            {/* Featured Section */}
            <div className="bg-gradient-to-r from-red-500/20 via-yellow-500/20 to-green-500/20 rounded-2xl p-12 mb-12 text-center border border-yellow-500/30">
              <Eye className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
              <p className="text-muted-foreground">Trust Your Instincts, But Know What to Look For</p>
            </div>

            {/* Table of Contents */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 mb-12">
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-green-500" />
                In This Guide
              </h2>
              <ul className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                <li><a href="#profile-red-flags" className="hover:text-red-500">→ Red Flags in Profiles</a></li>
                <li><a href="#message-red-flags" className="hover:text-red-500">→ Red Flags in Messages</a></li>
                <li><a href="#conversation-red-flags" className="hover:text-red-500">→ Red Flags in Conversations</a></li>
                <li><a href="#profile-green-flags" className="hover:text-green-500">→ Green Flags in Profiles</a></li>
                <li><a href="#message-green-flags" className="hover:text-green-500">→ Green Flags in Messages</a></li>
                <li><a href="#conversation-green-flags" className="hover:text-green-500">→ Green Flags in Conversations</a></li>
                <li><a href="#verification" className="hover:text-green-500">→ Verification Tips</a></li>
                <li><a href="#trust-gut" className="hover:text-green-500">→ Trusting Your Gut</a></li>
              </ul>
            </div>

            {/* Article Content */}
            <article className="prose prose-invert max-w-none">
              <section className="mb-12">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  In the lifestyle world, you'll meet many wonderful people—and occasionally encounter those who don't respect boundaries. Learning to spot the difference early protects you, your partner, and the entire community. These aren't just dating tips; they're safety skills.
                </p>

                <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-4 mb-6">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-yellow-400">Important:</strong> One red flag doesn't necessarily mean someone is dangerous—context matters. But multiple red flags, or one severe one, should make you proceed with extreme caution or not at all.
                  </p>
                </div>
              </section>

              <section id="profile-red-flags" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <AlertTriangle className="w-8 h-8 text-red-500" />
                  Red Flags in Profiles
                </h2>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-red-400 mb-4">Profile Warning Signs:</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <Flag className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span><strong>"No drama":</strong> Often means they create drama and blame others. Well-adjusted people don't need to advertise this.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Flag className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Demands without offering:</strong> Long list of requirements for partners with nothing about what they bring to the table.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Flag className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span><strong>No face photos + urgency:</strong> While privacy is valid, combined with pushing to meet quickly is concerning.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Flag className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span><strong>"My partner doesn't know":</strong> Cheating disguised as swinging. This isn't ethical non-monogamy.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Flag className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Negative about past partners:</strong> "All my exes were crazy" suggests they may be the common factor.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Flag className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Only sexual content:</strong> Profiles that are 100% explicit with zero personality or boundaries discussion.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Flag className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Copied/generic text:</strong> Same bio appearing across multiple platforms suggests low effort or fake profile.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Flag className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span><strong>"Looking for a unicorn to save our marriage":</strong> Using lifestyle to fix relationship problems.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card/50 border border-border rounded-xl p-4 mb-6">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-white">Real Example:</strong> "Looking for a drama-free, clean, disease-free female under 30 who knows how to please a man. No questions asked. Must host. Don't waste my time." — This profile has multiple red flags: demanding, transactional, ageist, no reciprocity, and suspicious about health discussions.
                  </p>
                </div>
              </section>

              <section id="message-red-flags" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <MessageCircle className="w-8 h-8 text-red-500" />
                  Red Flags in Messages
                </h2>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-red-400 mb-4">Messaging Warning Signs:</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <Flag className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Immediately sexual:</strong> First message is explicit without any rapport-building. No interest in you as a person.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Flag className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Pushing to move off-platform quickly:</strong> "Let's talk on WhatsApp/Kik" before establishing basic trust.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Flag className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Won't video chat:</strong> Refuses to verify identity through video before meeting.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Flag className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Pressure and urgency:</strong> "Meet tonight or never" / "I won't be in town long" / "Why are you making this difficult?"</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Flag className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Ignoring stated boundaries:</strong> You say you're soft swap only; they keep pushing for full swap.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Flag className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Love bombing:</strong> Excessive compliments, future-planning, and intensity too soon. It's manipulation.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Flag className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Inconsistent stories:</strong> Details about their life, relationship, or schedule keep changing.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Flag className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Requests for money:</strong> Any financial request, no matter the sob story, is a scam.</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section id="conversation-red-flags" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Red Flags in Phone/Video Conversations</h2>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-red-400 mb-4">Conversation Warning Signs:</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <Flag className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Speaking for their partner:</strong> "She's into whatever I'm into." Always hear from the partner directly.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Flag className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Dismissive of consent talk:</strong> "We don't need to discuss all that, just go with the flow."</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Flag className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Trash-talking others:</strong> Negative stories about everyone they've met suggests the problem is them.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Flag className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Partner seems reluctant:</strong> One enthusiastic person, one who seems uncomfortable or coerced.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Flag className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Avoiding specific plans:</strong> Vague about meeting details, timing, or logistics.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Flag className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Testing your boundaries:</strong> Small pushes to see how firm you are. "Just this once" mentality.</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section id="profile-green-flags" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                  Green Flags in Profiles
                </h2>

                <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-green-400 mb-4">Positive Profile Signs:</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Clear about boundaries:</strong> States what they're looking for AND what they're not into.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Mentions consent explicitly:</strong> Shows they understand and value communication.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Both partners represented:</strong> Profile shows both people's voices and desires.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Personality beyond sex:</strong> Interests, humor, life details—they're whole people.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Verified or vouched:</strong> Site verifications, reviews from others, community reputation.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Discusses safer sex:</strong> Mentions testing, protection preferences openly.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Respectful language:</strong> No objectifying terms, degrading language, or entitlement.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card/50 border border-border rounded-xl p-4 mb-6">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-white">Great Example:</strong> "We're Sarah and Mike, together 8 years, in the lifestyle for 3. We move slow, prefer to build connection first. Soft swap only until we know you well. We respect all boundaries and expect the same. Both of us need to feel a connection—no one plays solo. STI tested quarterly, happy to share results. Looking for couples who communicate as well as they play!"
                  </p>
                </div>
              </section>

              <section id="message-green-flags" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <MessageCircle className="w-8 h-8 text-green-500" />
                  Green Flags in Messages
                </h2>

                <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-green-400 mb-4">Positive Messaging Signs:</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Read your profile:</strong> References specific things you wrote, asks relevant questions.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Respects your pace:</strong> Doesn't push to meet immediately, comfortable building rapport.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Both partners message:</strong> You hear from both people in the couple.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Asks about your boundaries:</strong> "What are you comfortable with?" before discussing play.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Offers verification:</strong> Willing to video chat, share social proof, meet in public first.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Graceful with rejection:</strong> When you decline something, they respond with respect.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Consistent communication:</strong> Reliable responses, follows through on what they say.</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section id="conversation-green-flags" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Green Flags in Conversations</h2>

                <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-green-400 mb-4">Positive Conversation Signs:</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Enthusiastic consent discussion:</strong> They bring up boundaries before you do.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Partner speaks for themselves:</strong> Both people share their own desires and limits.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Positive about others:</strong> Speaks respectfully about past partners and experiences.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Asks questions:</strong> Genuinely curious about you, your relationship, your boundaries.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Clear about expectations:</strong> Transparent about what they're hoping for.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Comfortable with "no":</strong> When you set a limit, they honor it without question.</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section id="verification" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Shield className="w-8 h-8 text-blue-500" />
                  Verification Tips
                </h2>

                <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-4">How to Verify Potential Partners:</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Video chat before meeting:</strong> Non-negotiable. See that they match their photos and both partners are willing.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Check for reviews/certifications:</strong> Many lifestyle sites have verification or review systems.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Ask for social proof:</strong> Mutual friends in the community, club memberships, event attendance.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Reverse image search:</strong> Check that photos aren't stolen from elsewhere.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Meet in public first:</strong> Coffee, drinks, dinner before any private time.</span>
                    </li>
                  </ul>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  For comprehensive first-meet safety, see our <Link to="/blog/solo-dates-safety-tips" className="text-green-500 hover:underline">Solo Dates Done Right</Link> guide.
                </p>
              </section>

              <section id="trust-gut" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Trusting Your Gut</h2>

                <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-4">Your Instincts Matter:</h4>
                  <p className="text-muted-foreground mb-4">
                    Sometimes you can't articulate why something feels off—but you feel it anyway. Trust that. Your subconscious picks up on patterns your conscious mind might miss.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• If something feels wrong, it probably is.</li>
                    <li>• You don't need to justify your "no" to anyone.</li>
                    <li>• Better to miss an opportunity than ignore a warning sign.</li>
                    <li>• Your safety is more important than someone's feelings.</li>
                    <li>• A good partner will understand caution, not be offended by it.</li>
                  </ul>
                </div>

                <div className="bg-card/50 border border-border rounded-xl p-4">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-white">Remember:</strong> The lifestyle is supposed to be fun. If the vetting process feels like too much work with a particular person, that's information. The right connections feel easy and exciting, not exhausting and concerning.
                  </p>
                </div>
              </section>

              {/* Final Section */}
              <section className="mb-12">
                <div className="bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-green-500/20 rounded-2xl p-8 border border-green-500/30">
                  <h3 className="text-2xl font-bold mb-4 text-center">Safety First, Fun Always</h3>
                  <p className="text-muted-foreground text-center mb-6">
                    Taking time to vet partners isn't paranoia—it's wisdom. The most experienced lifestyle couples will tell you: good partners appreciate thorough vetting. It shows you take the lifestyle seriously and value everyone's wellbeing.
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
                    <h4 className="font-bold group-hover:text-green-500 transition-colors mt-1">The Golden Rules of Consent</h4>
                    <p className="text-sm text-muted-foreground mt-2">Master asking, giving, and revoking consent.</p>
                  </Link>
                  <Link to="/blog/digital-safety-privacy" className="bg-card/50 border border-border rounded-xl p-4 hover:border-green-500/50 transition-all group">
                    <span className="text-xs text-green-500">CONSENT & SAFETY</span>
                    <h4 className="font-bold group-hover:text-green-500 transition-colors mt-1">Digital Safety First</h4>
                    <p className="text-sm text-muted-foreground mt-2">Protect your privacy online.</p>
                  </Link>
                  <Link to="/blog/consent-violations-boundaries" className="bg-card/50 border border-border rounded-xl p-4 hover:border-green-500/50 transition-all group">
                    <span className="text-xs text-green-500">CONSENT & SAFETY</span>
                    <h4 className="font-bold group-hover:text-green-500 transition-colors mt-1">When "No" Gets Ignored</h4>
                    <p className="text-sm text-muted-foreground mt-2">Handling consent violations.</p>
                  </Link>
                  <Link to="/blog/safer-sex-lifestyle-guide" className="bg-card/50 border border-border rounded-xl p-4 hover:border-green-500/50 transition-all group">
                    <span className="text-xs text-green-500">CONSENT & SAFETY</span>
                    <h4 className="font-bold group-hover:text-green-500 transition-colors mt-1">Safer Sex Guide 2026</h4>
                    <p className="text-sm text-muted-foreground mt-2">Testing, barriers, and honest conversations.</p>
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

export default BlogRedFlagsGreenFlags;
