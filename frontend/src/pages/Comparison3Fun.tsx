import { ArrowRight, CheckCircle, XCircle, Crown, Download, Shield } from "lucide-react";
import SEO from "@/components/SEO";
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

      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        {/* Hero */}
        <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-2 mb-4 text-purple-100">
              <span className="text-sm">Home → Comparisons → SPICE vs 3Fun</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              SPICE vs 3Fun: Which Swingers App is Safer & Better?
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl">
              Safety, verification, and community comparison. See why SPICE offers superior protection and better experiences for swingers and couples.
            </p>
          </div>
        </section>

        {/* Quick Winner Box */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200">
              <div className="flex items-center gap-3 mb-4">
                <Crown className="w-10 h-10 text-yellow-500" />
                <h2 className="text-3xl font-bold text-gray-900">The Winner: SPICE</h2>
              </div>
              <p className="text-lg text-gray-700 mb-4">
                While 3Fun has been around longer, <strong>SPICE prioritizes safety with ID verification, offers unique BDSM tools, local events, and a more engaged community</strong>. Better for serious swingers, couples, and lifestyle enthusiasts.
              </p>
              <Button 
                size="lg" 
                className="bg-purple-600 hover:bg-purple-700 text-white"
                onClick={() => window.open('https://thespiceapp.com/download', '_blank')}
              >
                <Download className="w-5 h-5 mr-2" />
                Try SPICE Free - Safer & Verified
              </Button>
            </div>
          </div>
        </section>

        {/* Safety Comparison - Highlighted */}
        <section className="py-16 px-4 bg-blue-50">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-8">
              <Shield className="w-10 h-10 text-blue-600" />
              <h2 className="text-4xl font-bold text-center text-gray-900">
                Safety & Verification Comparison
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-green-200">
                <h3 className="text-2xl font-bold mb-4 text-purple-600 flex items-center gap-2">
                  <CheckCircle className="w-7 h-7 text-green-600" />
                  SPICE Safety Features
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-gray-900">Photo + ID Verification</p>
                      <p className="text-sm text-gray-600">Both photo AND government ID required for full verification</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-gray-900">Active Moderation</p>
                      <p className="text-sm text-gray-600">24/7 team monitoring for fake profiles and inappropriate behavior</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-gray-900">Report & Block Tools</p>
                      <p className="text-sm text-gray-600">Easy reporting with fast response times</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-gray-900">Safety Resources</p>
                      <p className="text-sm text-gray-600">50+ safety guides and educational articles</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-gray-600">3Fun Safety Features</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-gray-900">Photo Verification Only</p>
                      <p className="text-sm text-gray-600">No ID verification - easier for fake profiles</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-gray-900">Reported Fake Profiles</p>
                      <p className="text-sm text-gray-600">User reviews mention frequent fake/scam profiles</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div>
                      <p className="font-bold text-gray-900">Basic Report Function</p>
                      <p className="text-sm text-gray-600">Standard reporting tools</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div>
                      <p className="font-bold text-gray-900">Limited Safety Content</p>
                      <p className="text-sm text-gray-600">Basic safety tips only</p>
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
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
              Feature Comparison
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg border border-gray-200">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="p-6 text-left text-lg font-bold text-gray-900">Feature</th>
                    <th className="p-6 text-center text-lg font-bold text-purple-600">SPICE</th>
                    <th className="p-6 text-center text-lg font-bold text-gray-600">3Fun</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-green-50">
                    <td className="p-6 font-semibold text-gray-900">ID Verification</td>
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
                    <td className="p-6 font-semibold text-gray-900">BDSM Compatibility Quiz</td>
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
                  <tr className="bg-purple-50">
                    <td className="p-6 font-semibold text-gray-900">Local Events & Meetups</td>
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
                    <td className="p-6 font-semibold text-gray-900">Educational Content</td>
                    <td className="p-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                        <span className="font-bold">50+ comprehensive guides</span>
                      </div>
                    </td>
                    <td className="p-6 text-center text-gray-600">Basic tips only</td>
                  </tr>
                  <tr className="bg-purple-50">
                    <td className="p-6 font-semibold text-gray-900">US Member Base</td>
                    <td className="p-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                        <span className="font-bold">30,000+ verified</span>
                      </div>
                    </td>
                    <td className="p-6 text-center text-gray-600">Strong in Spain/Mexico</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-semibold text-gray-900">Free Version Features</td>
                    <td className="p-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                        <span className="font-bold">Browse + Limited messaging</span>
                      </div>
                    </td>
                    <td className="p-6 text-center text-gray-600">Browse + Likes only</td>
                  </tr>
                  <tr className="bg-purple-50">
                    <td className="p-6 font-semibold text-gray-900">Customer Support</td>
                    <td className="p-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                        <span className="font-bold">24/7 support</span>
                      </div>
                    </td>
                    <td className="p-6 text-center text-gray-600">Email support</td>
                  </tr>
                  <tr>
                    <td className="p-6 font-semibold text-gray-900">Premium Price</td>
                    <td className="p-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                        <span className="font-bold">$14.99/month</span>
                      </div>
                    </td>
                    <td className="p-6 text-center text-gray-600">$19.99/month</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* User Reviews & Reputation */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">User Reviews & Reputation</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-8 shadow-md">
                <h3 className="text-xl font-bold mb-4 text-purple-600">SPICE User Feedback</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">"Real people, real connections"</p>
                      <p className="text-sm text-gray-600">Users praise verification system for reducing fakes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">"BDSM quiz was eye-opening"</p>
                      <p className="text-sm text-gray-600">Couples love discovering kink compatibility</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">"Great local events"</p>
                      <p className="text-sm text-gray-600">Event feature helps find real meetups</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">"Responsive support team"</p>
                      <p className="text-sm text-gray-600">Quick response to issues and questions</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md">
                <h3 className="text-xl font-bold mb-4 text-gray-600">3Fun User Concerns</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">"Too many fake profiles"</p>
                      <p className="text-sm text-gray-600">Common complaint in app store reviews</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">"Better in other countries"</p>
                      <p className="text-sm text-gray-600">US user base smaller than international</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">"Limited features on free"</p>
                      <p className="text-sm text-gray-600">Can't message without premium</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <XCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">"Support is slow"</p>
                      <p className="text-sm text-gray-600">Long wait times for help</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who Should Use Which */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
              Which App is Right for You?
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border-2 border-purple-200">
                <h3 className="text-2xl font-bold mb-4 text-purple-600">Choose SPICE if you:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Prioritize <strong>safety and verified profiles</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Want to explore <strong>BDSM/kink compatibility</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Want to attend <strong>local lifestyle events</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Are based in the <strong>United States</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Want <strong>educational resources</strong> and safety guides</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Prefer <strong>better value</strong> ($5/month cheaper)</span>
                  </li>
                </ul>
                <Button 
                  size="lg" 
                  className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white"
                  onClick={() => window.open('https://thespiceapp.com/download', '_blank')}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Try SPICE Free
                </Button>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200">
                <h3 className="text-2xl font-bold mb-4 text-gray-600">Choose 3Fun if you:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-gray-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Are located in Spain or Mexico (stronger user base)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-gray-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Don't mind sorting through unverified profiles</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-gray-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Want a simpler, basic app interface</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-gray-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Are just casually exploring (not serious)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join the Safer, More Authentic Community
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              SPICE's ID verification means you'll meet real people, not fake profiles. Plus BDSM quiz, local events, and 30,000+ verified members.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-purple-600 hover:bg-purple-50 text-lg px-8 py-6"
                onClick={() => window.open('https://thespiceapp.com/download', '_blank')}
              >
                <Download className="w-5 h-5 mr-2" />
                Download SPICE Free
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6"
                onClick={() => window.location.href = '/quiz'}
              >
                Take BDSM Quiz First
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Comparison3Fun;