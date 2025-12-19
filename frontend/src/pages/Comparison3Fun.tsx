import { ArrowRight, CheckCircle, XCircle, Crown, Download, Shield } from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";

const Comparison3Fun = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ComparisonPage",
    "name": "SPICE vs 3Fun: Best Swingers Dating App Comparison 2025",
    "description": "Detailed comparison of SPICE and 3Fun for swingers and threesomes. See features, safety, verification, and community differences."
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://thespiceapp.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Comparisons",
        "item": "https://thespiceapp.com/vs"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "SPICE vs 3Fun"
      }
    ]
  };

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [schemaData, breadcrumbSchema]
  };

  return (
    <>
      <SEO
        title="SPICE vs 3Fun: Best Swingers App Comparison 2025"
        description="SPICE vs 3Fun comparison: Safety, verification, features. SPICE offers superior verification, BDSM quiz, events, and 30K+ verified members. See which is safer."
        keywords="SPICE vs 3Fun, 3Fun alternative, best swingers app, threesome dating app comparison, couples dating app comparison, safe swinger app"
        canonical="https://thespiceapp.com/vs/3fun"
        structuredData={combinedSchema}
      />

      <div className="relative min-h-screen">
        <ParticlesBackground />
        <Header />
        <Breadcrumbs />
        
        <main className="relative z-10 pt-32 pb-12">
        {/* Hero */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 mb-4 text-muted-foreground">
              <span className="text-sm">Home → Comparisons → SPICE vs 3Fun</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              SPICE vs 3Fun: Which Swingers App is Safer & Better?
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl">
              Safety, verification, and community comparison. See why SPICE offers superior protection and better experiences for swingers and couples.
            </p>
          </div>
        </section>

        {/* Quick Winner Box */}
        <section className="py-12 px-4">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200">
              <div className="flex items-center gap-3 mb-4">
                <Crown className="w-10 h-10 text-yellow-500" />
                <h2 className="text-3xl font-bold text-foreground">The Winner: SPICE</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-4">
                While 3Fun has been around longer, <strong>SPICE prioritizes safety with ID verification, offers unique BDSM tools, local events, and a more engaged community</strong>. Better for serious swingers, couples, and lifestyle enthusiasts.
              </p>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 hover:scale-105 transition-transform text-white"
                onClick={() => window.open('https://thespiceapp.com/download', '_blank')}
              >
                <Download className="w-5 h-5 mr-2" />
                Try SPICE Free - Safer & Verified
              </Button>
            </div>
          </div>
        </section>

        {/* Safety Comparison - Highlighted */}
        <section className="py-16 px-4 glass-card">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Shield className="w-10 h-10 text-blue-600" />
              <h2 className="text-4xl font-bold text-center text-foreground">
                Safety & Verification Comparison
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 shadow-lg border-2 border-green-200">
                <h3 className="text-2xl font-bold mb-4 text-primary flex items-center gap-2">
                  <CheckCircle className="w-7 h-7 text-green-600" />
                  SPICE Safety Features
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-foreground">Photo + ID Verification</p>
                      <p className="text-sm text-muted-foreground">Both photo AND government ID required for full verification</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-foreground">Active Moderation</p>
                      <p className="text-sm text-muted-foreground">24/7 team monitoring for fake profiles and inappropriate behavior</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-foreground">Report & Block Tools</p>
                      <p className="text-sm text-muted-foreground">Easy reporting with fast response times</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-foreground">Safety Resources</p>
                      <p className="text-sm text-muted-foreground">50+ safety guides and educational articles</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-muted-foreground">3Fun Safety Features</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-foreground">Photo Verification Only</p>
                      <p className="text-sm text-muted-foreground">No ID verification - easier for fake profiles</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-foreground">Reported Fake Profiles</p>
                      <p className="text-sm text-muted-foreground">User reviews mention frequent fake/scam profiles</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div>
                      <p className="font-bold text-foreground">Basic Report Function</p>
                      <p className="text-sm text-muted-foreground">Standard reporting tools</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div>
                      <p className="font-bold text-foreground">Limited Safety Content</p>
                      <p className="text-sm text-muted-foreground">Basic safety tips only</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-green-100 border-2 border-green-300 rounded-xl p-6 text-center">
              <p className="text-lg font-bold text-green-900">
                ✅ SPICE's ID verification reduces fake profiles by 95% compared to photo-only apps
              </p>
            </div>
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section className="py-16 px-4">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
              Feature Comparison
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full glass-card rounded-xl shadow-lg border border-border">
                <thead>
                  <tr className="bg-card/50 backdrop-blur-sm border border-border border-b border-border">
                    <th className="p-6 text-left text-lg font-bold text-foreground">Feature</th>
                    <th className="p-6 text-center text-lg font-bold text-primary">SPICE</th>
                    <th className="p-6 text-center text-lg font-bold text-muted-foreground">3Fun</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-card/50 backdrop-blur-sm border border-border">
                    <td className="p-6 font-semibold text-foreground">ID Verification</td>
                    <td className="p-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                        <span className="font-bold">Yes - Photo + ID</span>
                      </div>
                    </td>
                    <td className="p-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <XCircle className="w-6 h-6 text-red-500" />
                        <span>Photo only</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-6 font-semibold text-foreground">BDSM Compatibility Quiz</td>
                    <td className="p-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                        <span className="font-bold">Yes - 50+ questions</span>
                      </div>
                    </td>
                    <td className="p-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <XCircle className="w-6 h-6 text-red-500" />
                        <span>No</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-card/50 backdrop-blur-sm border border-border">
                    <td className="p-6 font-semibold text-foreground">Local Events & Meetups</td>
                    <td className="p-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                        <span className="font-bold">Yes - Calendar feature</span>
                      </div>
                    </td>
                    <td className="p-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <XCircle className="w-6 h-6 text-red-500" />
                        <span>No event feature</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-6 font-semibold text-foreground">Educational Content</td>
                    <td className="p-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                        <span className="font-bold">50+ comprehensive guides</span>
                      </div>
                    </td>
                    <td className="p-6 text-center text-muted-foreground">Basic tips only</td>
                  </tr>
                  <tr className="bg-card/50 backdrop-blur-sm border border-border">
                    <td className="p-6 font-semibold text-foreground">US Member Base</td>
                    <td className="p-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                        <span className="font-bold">30,000+ verified</span>
                      </div>
                    </td>
                    <td className="p-6 text-center text-muted-foreground">Strong in Spain/Mexico</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-semibold text-foreground">Free Version Features</td>
                    <td className="p-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                        <span className="font-bold">Browse + Limited messaging</span>
                      </div>
                    </td>
                    <td className="p-6 text-center text-muted-foreground">Browse + Likes only</td>
                  </tr>
                  <tr className="bg-card/50 backdrop-blur-sm border border-border">
                    <td className="p-6 font-semibold text-foreground">Customer Support</td>
                    <td className="p-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                        <span className="font-bold">24/7 support</span>
                      </div>
                    </td>
                    <td className="p-6 text-center text-muted-foreground">Email support</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-semibold text-foreground">Premium Price</td>
                    <td className="p-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                        <span className="font-bold">$14.99/month</span>
                      </div>
                    </td>
                    <td className="p-6 text-center text-muted-foreground">$19.99/month</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* User Reviews & Reputation */}
        <section className="py-16 px-4 glass-card">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-foreground">User Reviews & Reputation</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 shadow-md">
                <h3 className="text-xl font-bold mb-4 text-primary">SPICE User Feedback</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">"Real people, real connections"</p>
                      <p className="text-sm text-muted-foreground">Users praise verification system for reducing fakes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">"BDSM quiz was eye-opening"</p>
                      <p className="text-sm text-muted-foreground">Couples love discovering kink compatibility</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">"Great local events"</p>
                      <p className="text-sm text-muted-foreground">Event feature helps find real meetups</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">"Responsive support team"</p>
                      <p className="text-sm text-muted-foreground">Quick response to issues and questions</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 shadow-md">
                <h3 className="text-xl font-bold mb-4 text-muted-foreground">3Fun User Concerns</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">"Too many fake profiles"</p>
                      <p className="text-sm text-muted-foreground">Common complaint in app store reviews</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">"Better in other countries"</p>
                      <p className="text-sm text-muted-foreground">US user base smaller than international</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">"Limited features on free"</p>
                      <p className="text-sm text-muted-foreground">Can't message without premium</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-foreground">"Support is slow"</p>
                      <p className="text-sm text-muted-foreground">Long wait times for help</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who Should Use Which */}
        <section className="py-16 px-4">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-foreground">
              Which App is Right for You?
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200">
                <h3 className="text-2xl font-bold mb-4 text-primary">Choose SPICE if you:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">Prioritize <strong>safety and verified profiles</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">Want to explore <strong>BDSM/kink compatibility</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">Want to attend <strong>local lifestyle events</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">Are based in the <strong>United States</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">Want <strong>educational resources</strong> and safety guides</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">Prefer <strong>better value</strong> ($5/month cheaper)</span>
                  </li>
                </ul>
                <Button 
                  size="lg" 
                  className="w-full mt-6 gradient-animate hover:scale-105 transition-transform text-white"
                  onClick={() => window.open('https://thespiceapp.com/download', '_blank')}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Try SPICE Free
                </Button>
              </div>

              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 border-2 border-border">
                <h3 className="text-2xl font-bold mb-4 text-muted-foreground">Choose 3Fun if you:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">Are located in Spain or Mexico (stronger user base)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">Don't mind sorting through unverified profiles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">Want a simpler, basic app interface</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">Are just casually exploring (not serious)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 px-4 gradient-animate">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join the Safer, More Authentic Community
            </h2>
            <p className="text-xl mb-8 text-muted-foreground">
              SPICE's ID verification means you'll meet real people, not fake profiles. Plus BDSM quiz, local events, and 30,000+ verified members.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:glass-card text-lg px-8 py-6"
                onClick={() => window.open('https://thespiceapp.com/download', '_blank')}
              >
                <Download className="w-5 h-5 mr-2" />
                Download SPICE Free
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="inline-flex items-center justify-center px-8 py-3 bg-background border-2 border-primary hover:bg-primary/10 font-semibold rounded-full transition-all text-white hover:bg-white/10 text-lg px-8 py-6"
                onClick={() => window.location.href = '/quiz'}
              >
                Take BDSM Quiz First
              </Button>
            </div>
          </div>
        </section>
        </main>

        <FooterSection />
      </div>
    </>
  );
};

export default Comparison3Fun;