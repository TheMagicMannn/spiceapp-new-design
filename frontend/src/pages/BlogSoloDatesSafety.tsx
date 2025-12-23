import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";
import { MapPin, Shield, CheckCircle, Phone, Users, Clock, AlertTriangle, BookOpen } from "lucide-react";

const BlogSoloDatesSafety = () => {
  return (
    <>
      <SEO
        title="Solo Dates Done Right: Personal Safety Tips for First Meets | SPICE"
        description="Complete safety checklist for first dates in swinging and ENM. Location sharing, public meetups, check-in systems, sober consent, and emergency plans."
        keywords="first date safety, solo date tips, swinging safety, ENM first meet, lifestyle date safety, personal safety dating, meeting strangers safely"
        canonical="https://thespiceapp.com/blog/solo-dates-safety-tips"
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 via-emerald-400 to-green-400 bg-clip-text text-transparent">
                Solo Dates Done Right: Personal Safety Tips for First Meets in Swinging and ENM
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Meeting new people is exciting—but safety comes first. This step-by-step checklist ensures your first meets are both thrilling and secure.
              </p>
            </div>

            {/* Featured Section */}
            <div className="bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-green-500/20 rounded-2xl p-12 mb-12 text-center border border-green-500/30">
              <Shield className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <p className="text-muted-foreground">Your Complete First-Meet Safety Checklist</p>
            </div>

            {/* Quick Checklist */}
            <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6 mb-12">
              <h2 className="text-xl font-bold mb-4 text-green-400">Quick Safety Checklist</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Video chat before meeting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Meet in public first</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Share location with friend</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Set up check-in times</span>
                  </li>
                </ul>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Drive yourself</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Stay sober</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Trust your gut</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Have an exit plan</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Table of Contents */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 mb-12">
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-green-500" />
                In This Guide
              </h2>
              <ul className="grid md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                <li><a href="#before-meeting" className="hover:text-green-500">→ Before the Meeting</a></li>
                <li><a href="#location-sharing" className="hover:text-green-500">→ Location Sharing</a></li>
                <li><a href="#check-in-system" className="hover:text-green-500">→ Check-In Systems</a></li>
                <li><a href="#public-meetup" className="hover:text-green-500">→ The Public Meetup</a></li>
                <li><a href="#sober-consent" className="hover:text-green-500">→ Sober Consent</a></li>
                <li><a href="#going-private" className="hover:text-green-500">→ Going Private Safely</a></li>
                <li><a href="#emergency-plan" className="hover:text-green-500">→ Emergency Plans</a></li>
                <li><a href="#trusting-gut" className="hover:text-green-500">→ Trusting Your Gut</a></li>
              </ul>
            </div>

            {/* Article Content */}
            <article className="prose prose-invert max-w-none">
              <section id="before-meeting" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Users className="w-8 h-8 text-blue-500" />
                  Before the Meeting
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Safety starts long before you walk out the door. Here's how to vet someone before committing to meet in person:
                </p>

                <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-4">Pre-Meeting Verification:</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Video chat first:</strong> Non-negotiable. Verify they look like their photos and that both partners (if a couple) are genuinely interested.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Research their profiles:</strong> Check multiple platforms. Consistent information is good; conflicting details are a red flag.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Look for reviews/vouches:</strong> Many lifestyle sites have review systems. Read what others say.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Reverse image search:</strong> Make sure their photos aren't stolen from somewhere else.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Ask for social proof:</strong> Mutual friends, club memberships, or event attendance history.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-4 mb-6">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-yellow-400">Red Flag:</strong> If someone refuses to video chat, gets angry about verification questions, or pressures you to meet immediately—don't meet them. Period.
                  </p>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  For more on vetting, see our guide on <Link to="/blog/red-flags-green-flags" className="text-green-500 hover:underline">Red Flags vs. Green Flags</Link>.
                </p>
              </section>

              <section id="location-sharing" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <MapPin className="w-8 h-8 text-green-500" />
                  Location Sharing
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Someone you trust should always know where you are and who you're with.
                </p>

                <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-4">Location Sharing Best Practices:</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Share live location:</strong> Use Find My Friends, Google Maps sharing, or Life360 with a trusted person.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Send details in advance:</strong> Name, phone number, profile link, and photo of who you're meeting.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Share the venue:</strong> Exact address of where you'll be meeting.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Update if plans change:</strong> Moving to a second location? Let your safety contact know.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card/50 border border-border rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-3">Who Should Be Your Safety Contact?</h4>
                  <p className="text-sm text-muted-foreground">
                    Choose someone who understands the lifestyle and won't judge. Options include: your primary partner, a lifestyle-friendly friend, another couple in the community, or a trusted vanilla friend who's been briefed. They should be available by phone during your date.
                  </p>
                </div>
              </section>

              <section id="check-in-system" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <Phone className="w-8 h-8 text-purple-500" />
                  Check-In Systems
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Set up a check-in schedule with your safety contact before you leave.
                </p>

                <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-4">Sample Check-In System:</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Arrival text:</strong> "I'm here. They look like their photos. Starting drinks."</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span><strong>30-minute check:</strong> Quick text or emoji to confirm all is well.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Location change alert:</strong> "Moving to [new location]. All good."</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span><strong>End of date:</strong> "Home safe!" or "Staying the night at [location]."</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card/50 border border-border rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-3">Code Words</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Establish code words or phrases with your safety contact:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>"Everything's great!"</strong> = I'm fine, having fun</li>
                    <li>• <strong>"Call me about mom"</strong> = I need an excuse to leave</li>
                    <li>• <strong>"Red"</strong> = Send help immediately</li>
                    <li>• <strong>Missed check-in</strong> = Contact me or escalate</li>
                  </ul>
                </div>

                <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-4 mb-6">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-yellow-400">Agreement with your contact:</strong> If you miss a check-in and don't respond to calls/texts within 15 minutes, they should take action (call venue, contact police, etc.).
                  </p>
                </div>
              </section>

              <section id="public-meetup" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">The Public Meetup</h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  First meets should always be in public. Here's how to set it up right:
                </p>

                <div className="bg-card/50 border border-border rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-4">Ideal First-Meet Venues:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Busy coffee shop or casual restaurant</li>
                    <li>• Bar or lounge with good lighting</li>
                    <li>• Lifestyle club (if you're both members)</li>
                    <li>• Public park during daytime</li>
                    <li>• Any place with staff and other customers</li>
                  </ul>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-red-400 mb-4">Avoid for First Meets:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>✗ Their home or your home</li>
                    <li>✗ Isolated locations</li>
                    <li>✗ Their car</li>
                    <li>✗ Hotel rooms (save for second or third meet)</li>
                    <li>✗ Anywhere they choose that you can't verify</li>
                  </ul>
                </div>

                <div className="bg-card/50 border border-border rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-3">At the Meetup:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Arrive separately—drive yourself or take your own rideshare</li>
                    <li>• Park in a well-lit area</li>
                    <li>• Let them arrive first so you can observe before approaching</li>
                    <li>• Sit where you can see exits</li>
                    <li>• Keep your phone charged and accessible</li>
                    <li>• Watch your drink being made and never leave it unattended</li>
                  </ul>
                </div>
              </section>

              <section id="sober-consent" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <AlertTriangle className="w-8 h-8 text-orange-500" />
                  Sober Consent
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  For first meets especially, keep your head clear.
                </p>

                <div className="bg-orange-900/20 border border-orange-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-4">Alcohol Guidelines for First Meets:</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Set a limit before you go:</strong> One or two drinks max.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Eat before/during:</strong> Don't drink on an empty stomach.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Watch for pressure:</strong> Someone pushing drinks on you is a red flag.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Never leave your drink:</strong> Get a new one if you step away.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Trust unusual feelings:</strong> If you feel more intoxicated than you should, leave immediately.</span>
                    </li>
                  </ul>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  Learn more in our full guide on <Link to="/blog/alcohol-substances-consent" className="text-green-500 hover:underline">Alcohol, Substances, and Consent</Link>.
                </p>
              </section>

              <section id="going-private" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Going Private Safely</h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  If the public meet goes well and you want to move to a private location:
                </p>

                <div className="bg-card/50 border border-border rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-4">Transitioning to Private:</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Consider waiting:</strong> Many experienced players recommend public-only for first meet, private for second.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>If you proceed:</strong> Update your safety contact with the new location.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Hotel vs. home:</strong> Hotels are generally safer than going to a stranger's home.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Drive separately:</strong> Keep your own transportation the entire time.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Trust your instincts:</strong> If something feels off after the public meet, don't go private.</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section id="emergency-plan" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                  <AlertTriangle className="w-8 h-8 text-red-500" />
                  Emergency Plans
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Hope for the best, plan for the worst.
                </p>

                <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-red-400 mb-4">Your Emergency Toolkit:</h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Charged phone:</strong> Always have enough battery to make calls.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Cash:</strong> For emergency cab/rideshare if needed.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Rideshare apps:</strong> Uber/Lyft installed and ready.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Exit strategy:</strong> Know where exits are. Have an excuse ready if you need to leave.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span><strong>Local emergency numbers:</strong> Know the local police non-emergency line.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-card/50 border border-border rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-3">Exit Excuses:</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    You don't owe anyone an explanation, but having excuses ready can make leaving easier:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• "My roommate/kid needs me at home."</li>
                    <li>• "I'm not feeling well. I need to go."</li>
                    <li>• "Work emergency—I have to take this."</li>
                    <li>• "I just remembered I have an early morning."</li>
                    <li>• Or simply: "This isn't working for me. I'm leaving."</li>
                  </ul>
                </div>
              </section>

              <section id="trusting-gut" className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Trusting Your Gut</h2>

                <div className="bg-purple-900/20 border border-purple-500/30 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-white mb-4">Your Instincts Are Your Best Tool</h4>
                  <p className="text-muted-foreground mb-4">
                    If something feels wrong, it probably is. Don't rationalize away discomfort. Your brain picks up on subtle cues that your conscious mind might miss.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• <strong>Feeling uneasy?</strong> Leave.</li>
                    <li>• <strong>Something seems "off"?</strong> Trust it.</li>
                    <li>• <strong>Pressure to stay?</strong> That's your sign to go.</li>
                    <li>• <strong>Chemistry isn't there?</strong> It's okay to end the date.</li>
                  </ul>
                </div>

                <div className="bg-card/50 border border-border rounded-xl p-4">
                  <p className="text-sm text-muted-foreground">
                    <strong className="text-white">Remember:</strong> A good potential partner will understand caution and respect your safety measures. Anyone who's annoyed by your safety precautions is showing you who they are—believe them.
                  </p>
                </div>
              </section>

              {/* Final Section */}
              <section className="mb-12">
                <div className="bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-green-500/20 rounded-2xl p-8 border border-green-500/30">
                  <h3 className="text-2xl font-bold mb-4 text-center">Safety Enables Freedom</h3>
                  <p className="text-muted-foreground text-center mb-6">
                    These precautions aren't about paranoia—they're about enabling you to explore with confidence. When you know you're protected, you can relax and enjoy the adventure. Safe dating is good dating.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      to="/blog/consent-golden-rules"
                      className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-all"
                    >
                      Golden Rules of Consent
                    </Link>
                    <Link
                      to="/blog/red-flags-green-flags"
                      className="inline-flex items-center justify-center px-6 py-3 border border-green-500 text-green-500 font-semibold rounded-full hover:bg-green-500/10 transition-all"
                    >
                      Red Flags vs. Green Flags
                    </Link>
                  </div>
                </div>
              </section>

              {/* Related Articles */}
              <section>
                <h3 className="text-2xl font-bold mb-6">Continue Learning About Safety</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link to="/blog/red-flags-green-flags" className="bg-card/50 border border-border rounded-xl p-4 hover:border-green-500/50 transition-all group">
                    <span className="text-xs text-green-500">CONSENT & SAFETY</span>
                    <h4 className="font-bold group-hover:text-green-500 transition-colors mt-1">Red Flags vs. Green Flags</h4>
                    <p className="text-sm text-muted-foreground mt-2">Spot safe partners before meeting.</p>
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
                  <Link to="/blog/alcohol-substances-consent" className="bg-card/50 border border-border rounded-xl p-4 hover:border-green-500/50 transition-all group">
                    <span className="text-xs text-green-500">CONSENT & SAFETY</span>
                    <h4 className="font-bold group-hover:text-green-500 transition-colors mt-1">Alcohol, Substances & Consent</h4>
                    <p className="text-sm text-muted-foreground mt-2">Why a clear head matters.</p>
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

export default BlogSoloDatesSafety;
