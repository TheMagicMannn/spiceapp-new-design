import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Lock, Shield, Eye, AlertTriangle, CheckCircle, Smartphone, BookOpen, Camera, MessageSquare } from "lucide-react";

const BlogDigitalSafetyFirst = () => {
  return (
    <>
      <SEO
        title="Digital Safety First: Protecting Your Privacy in Apps, Chats & Lifestyle Communities | SPICE"
        description="Essential tips on anonymous profiles, secure messaging, avoiding revenge porn, and what to do if photos get shared without permission. Protect your digital privacy."
        keywords="digital privacy lifestyle, anonymous dating profile, secure messaging, revenge porn prevention, photo sharing safety, lifestyle privacy, online safety tips, protect identity online"
        canonical="https://thespiceapp.com/blog/digital-safety-first"
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
                <span className="text-xs text-muted-foreground">15 min read</span>
                <span className="text-xs text-muted-foreground">Updated January 2025</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Digital Safety First: Protecting Your Privacy in Apps, Chats, and Lifestyle Communities
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Your digital footprint matters. Learn how to explore the lifestyle while keeping your identity, photos, and conversations safe from unwanted exposure.
              </p>
            </div>

            {/* Featured Section */}
            <div className="bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20 rounded-2xl p-12 mb-12 text-center border border-blue-500/30">
              <Lock className="w-16 h-16 text-blue-500 mx-auto mb-4" />
              <p className="text-muted-foreground">Your Privacy Is Worth Protecting</p>
            </div>

            {/* Key Message */}
            <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6 mb-12">
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-blue-400 mb-2">Why Digital Safety Matters:</h3>
                  <p className="text-muted-foreground">
                    In the lifestyle, your privacy isn't just about comfort—it can affect your career, relationships, and safety. Taking digital security seriously protects not just you, but everyone you connect with.
                  </p>
                </div>
              </div>
            </div>

            {/* Table of Contents */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 mb-12">
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-500" />
                In This Guide
              </h2>
              <ul className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                <li><a href="#anonymous-profiles" className="hover:text-blue-500">→ Creating Anonymous Profiles</a></li>
                <li><a href="#photo-safety" className="hover:text-blue-500">→ Photo Safety & Sharing</a></li>
                <li><a href="#secure-messaging" className="hover:text-blue-500">→ Secure Messaging Practices</a></li>
                <li><a href="#social-media" className="hover:text-blue-500">→ Social Media Boundaries</a></li>
                <li><a href="#revenge-porn" className="hover:text-blue-500">→ Preventing Non-Consensual Sharing</a></li>
                <li><a href="#if-leaked" className="hover:text-blue-500">→ If Your Photos Are Leaked</a></li>
                <li><a href="#device-security" className="hover:text-blue-500">→ Device Security</a></li>
                <li><a href="#community-safety" className="hover:text-blue-500">→ Community Platform Safety</a></li>
              </ul>
            </div>

            {/* Article Content */}
            <article className="prose prose-invert max-w-none">
              <section id="anonymous-profiles" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Eye className="w-8 h-8 text-blue-500" />
                  Creating Anonymous Profiles
                </h2>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Many lifestyle community members need to keep their activities separate from their professional lives. Here's how to create a profile that protects your identity while still being authentic.
                </p>

                <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-4">Profile Privacy Checklist:</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Use a lifestyle-only name:</strong> First name or nickname that isn't your legal name. Avoid names you use professionally.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Create a dedicated email:</strong> Use ProtonMail or similar privacy-focused service. Never your work email.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Separate phone number:</strong> Google Voice, Hushed, or Burner app for lifestyle communications.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Be vague about location:</strong> Use region/area rather than exact city or neighborhood.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Occupation generalities:</strong> "Works in healthcare" vs. specific hospital name.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card/50 border border-border rounded-xl p-4 mb-6">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-white">Pro Tip:</strong> Create a complete "lifestyle identity" with consistent details you can remember. This isn't about being fake—it's about compartmentalizing your private life from your public one.
                  </p>
                </div>
              </section>

              <section id="photo-safety" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Camera className="w-8 h-8 text-purple-500" />
                  Photo Safety & Sharing
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Photos are the biggest privacy risk in the lifestyle. Here's how to share selectively while minimizing exposure.
                </p>

                <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-4">Before Sharing Any Photo:</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Strip metadata:</strong> Photos contain hidden location and device data. Use apps like "Exif Remover" or "Photo Metadata Remover" before sharing.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Check the background:</strong> Mail, work badges, family photos, recognizable locations—all can identify you.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Consider unique identifiers:</strong> Distinctive tattoos, jewelry, birthmarks can be recognizable.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Avoid reverse image search risk:</strong> Don't use photos that appear on your public social media or professional profiles.</span>
                    </li>
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-4">
                    <h4 className="font-bold text-green-400 mb-2">✅ Lower Risk Sharing:</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• No-face photos initially</li>
                      <li>• Photos taken specifically for lifestyle profiles</li>
                      <li>• Neutral backgrounds</li>
                      <li>• Share in private galleries with trust requirements</li>
                      <li>• Watermark with username (deters misuse)</li>
                    </ul>
                  </div>
                  <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-4">
                    <h4 className="font-bold text-red-400 mb-2">❌ Higher Risk Sharing:</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Face + explicit content together</li>
                      <li>• Photos at recognizable locations</li>
                      <li>• Photos from public social media</li>
                      <li>• Sharing before trust is established</li>
                      <li>• Sending via unencrypted platforms</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-card/50 border border-border rounded-xl p-4 mb-6">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-white">The Photo Progression:</strong> Many experienced community members follow a progression: body photos without face → face in non-explicit context → combined photos only with verified, trusted connections over time.
                  </p>
                </div>
              </section>

              <section id="secure-messaging" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <MessageSquare className="w-8 h-8 text-green-500" />
                  Secure Messaging Practices
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Where and how you communicate matters as much as what you share. Here's how to keep conversations private.
                </p>

                <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-4">Messaging App Security Tiers:</h4>
                  <div className="space-y-4">
                    <div className="bg-green-800/30 rounded-lg p-3">
                      <h5 className="font-bold text-green-400 mb-2">🔒 Most Secure:</h5>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• <strong>Signal:</strong> End-to-end encrypted, disappearing messages, no metadata collection</li>
                        <li>• <strong>Session:</strong> No phone number required, decentralized</li>
                      </ul>
                    </div>
                    <div className="bg-yellow-800/30 rounded-lg p-3">
                      <h5 className="font-bold text-yellow-400 mb-2">🔐 Moderately Secure:</h5>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• <strong>Telegram:</strong> Secret chats only (not regular chats); self-destruct timers</li>
                        <li>• <strong>WhatsApp:</strong> End-to-end encrypted, but Meta owns it</li>
                      </ul>
                    </div>
                    <div className="bg-red-800/30 rounded-lg p-3">
                      <h5 className="font-bold text-red-400 mb-2">⚠️ Less Secure:</h5>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Regular SMS/texting (not encrypted)</li>
                        <li>• Instagram/Facebook DMs (stored, mined for data)</li>
                        <li>• Standard email (not encrypted)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-card/50 border border-border rounded-xl p-4 mb-6">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-white">Key Setting:</strong> Enable disappearing messages for sensitive conversations. Signal's "disappearing messages" feature lets you set conversations to auto-delete after a specified time.
                  </p>
                </div>
              </section>

              <section id="social-media" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Social Media Boundaries</h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Connecting lifestyle contacts to your vanilla social media creates risk. Here's how to maintain separation.
                </p>

                <div className="bg-amber-900/20 border border-amber-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-4">Social Media Rules:</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Never link lifestyle and vanilla profiles:</strong> No cross-follows, no mutual friends if avoidable.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Audit your public profiles:</strong> What could someone find with your name or photo? Google yourself.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Tighten privacy settings:</strong> Limit who can see your friends list, photos, check-ins.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Location services off:</strong> Disable location tagging on photos and posts.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Separate lifestyle social:</strong> If you want lifestyle-specific social media, create separate accounts with your lifestyle identity.</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section id="revenge-porn" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Shield className="w-8 h-8 text-red-500" />
                  Preventing Non-Consensual Sharing
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  "Revenge porn" and non-consensual sharing of intimate images is illegal in most jurisdictions. Here's how to minimize risk and protect yourself.
                </p>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-4">Prevention Strategies:</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Build trust before sharing:</strong> Take time to get to know someone before exchanging explicit content.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Watermark photos:</strong> Include your username visibly. Deters sharing and identifies source if leaked.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Separate face and body:</strong> Never include face and explicit content in the same photo.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Use platforms with protections:</strong> Apps like SPICE have verification systems that reduce bad actors.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Trust your gut:</strong> If something feels off about a request, decline.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card/50 border border-border rounded-xl p-4 mb-6">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-white">Red Flags for Photo Requests:</strong> Pressure to send quickly, requests for very specific poses/acts, anger when you decline, requests early in communication before trust is built.
                  </p>
                </div>
              </section>

              <section id="if-leaked" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">If Your Photos Are Leaked</h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  If intimate photos are shared without your consent, you have options. Don't panic—take these steps.
                </p>

                <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-4">Immediate Steps:</h4>
                  <ol className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-blue-500 font-bold">1.</span>
                      <span><strong>Document everything:</strong> Screenshot where images appear, save URLs, note dates and times.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-500 font-bold">2.</span>
                      <span><strong>Report to platforms:</strong> Most major platforms have reporting mechanisms for non-consensual intimate images. Use them.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-500 font-bold">3.</span>
                      <span><strong>Contact NCMEC (US) or equivalent:</strong> The National Center for Missing & Exploited Children has a CyberTipline that helps with image removal.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-500 font-bold">4.</span>
                      <span><strong>Consider legal action:</strong> Non-consensual sharing is illegal in most states/countries. Consult a lawyer who specializes in this area.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-500 font-bold">5.</span>
                      <span><strong>Seek support:</strong> Organizations like CCRI (Cyber Civil Rights Initiative) offer support for victims.</span>
                    </li>
                  </ol>
                </div>

                <div className="bg-card/50 border border-border rounded-xl p-4 mb-6">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-white">Google Search Removal:</strong> Google has a process for removing non-consensual intimate images from search results. Visit their support page for "Remove non-consensual explicit images."
                  </p>
                </div>
              </section>

              <section id="device-security" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Smartphone className="w-8 h-8 text-cyan-500" />
                  Device Security
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Your phone is the gateway to your lifestyle activities. Secure it properly.
                </p>

                <div className="bg-cyan-900/20 border border-cyan-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-4">Device Security Checklist:</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Strong passcode:</strong> 6+ digit PIN or complex password. Avoid face/fingerprint unlock in sensitive situations.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Hide sensitive apps:</strong> Use app folders or privacy screens. Some phones allow hidden app sections.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Disable notification previews:</strong> Prevent message content from showing on lock screen.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Secure photo storage:</strong> Use apps with PIN-protected folders for sensitive photos.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Disable auto cloud backup:</strong> For sensitive photos, disable automatic uploads to iCloud/Google Photos.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Enable remote wipe:</strong> In case your device is lost or stolen.</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section id="community-safety" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Community Platform Safety</h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Choosing the right platforms and using them wisely protects your privacy within lifestyle communities.
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-card/50 border border-border rounded-xl p-4">
                    <h4 className="font-bold text-white mb-2">Look For in Apps:</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>✅ Identity verification systems</li>
                      <li>✅ Private photo galleries with access control</li>
                      <li>✅ Report/block features</li>
                      <li>✅ Clear privacy policy</li>
                      <li>✅ Active moderation</li>
                      <li>✅ Screenshot protection</li>
                    </ul>
                  </div>
                  <div className="bg-card/50 border border-border rounded-xl p-4">
                    <h4 className="font-bold text-white mb-2">Red Flags in Platforms:</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>🚩 No verification options</li>
                      <li>🚩 Photos visible to all users</li>
                      <li>🚩 Weak or no moderation</li>
                      <li>🚩 Data breaches in history</li>
                      <li>🚩 Unclear about data usage</li>
                      <li>🚩 No way to delete account fully</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Final Section */}
              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">The Bottom Line</h2>

                <div className="bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20 rounded-xl p-6 border border-blue-500/30 mb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    Digital safety in the lifestyle requires ongoing attention, but it's absolutely manageable. The goal isn't paranoia—it's thoughtful protection that lets you explore freely while maintaining control over your information.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    <strong className="text-white">Remember:</strong> Your privacy is yours to control. Take the precautions that match your situation, trust your instincts about who deserves access to your information, and don't let fear stop you from making genuine connections—just make them safely.
                  </p>
                </div>

                <div className="bg-card/50 border border-border rounded-xl p-4">
                  <p className="text-muted-foreground text-center">
                    Stay safe online. Protect your privacy. Enjoy the journey.
                  </p>
                </div>
              </section>
            </article>

            {/* Related Articles */}
            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="text-xl font-bold mb-6">Related Articles</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Link to="/blog/red-flags-green-flags" className="bg-card/50 border border-border rounded-xl p-4 hover:border-green-500/50 transition-colors">
                  <h4 className="font-bold text-white mb-2">Red Flags vs. Green Flags</h4>
                  <p className="text-sm text-muted-foreground">Spotting safe partners before you meet.</p>
                </Link>
                <Link to="/blog/solo-dates-safety" className="bg-card/50 border border-border rounded-xl p-4 hover:border-purple-500/50 transition-colors">
                  <h4 className="font-bold text-white mb-2">Solo Dates Done Right</h4>
                  <p className="text-sm text-muted-foreground">Personal safety tips for first meets.</p>
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

export default BlogDigitalSafetyFirst;
