import { ArrowRight, CheckCircle, XCircle, Crown, Download, DollarSign } from "lucide-react";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";

const ComparisonSDC = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ComparisonPage",
    "name": "SPICE vs SDC: Best Value Lifestyle Dating App 2025",
    "description": "Detailed comparison of SPICE and SDC (Swingers Date Club). See pricing, features, and which offers better value for swingers and lifestyle dating."
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
        "name": "SPICE vs SDC"
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
        title="SPICE vs SDC: Better Value Swingers App Comparison 2025"
        description="SPICE vs SDC comparison: Pricing, features, mobile experience. SPICE offers 70% better value, modern design, BDSM quiz. See why members are switching from SDC."
        keywords="SPICE vs SDC, SDC alternative, cheaper than SDC, best value swingers app, Swingers Date Club vs SPICE, lifestyle dating app comparison"
        canonical="https://thespiceapp.com/vs/sdc"
        structuredData={combinedSchema}
      />

      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        {/* Hero */}
        <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-2 mb-4 text-purple-100">
              <span className="text-sm">Home → Comparisons → SPICE vs SDC</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              SPICE vs SDC: Modern App vs Legacy Platform
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl">
              Comprehensive comparison of pricing, features, and value. See why SPICE offers 70% better value with modern features SDC can't match.
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
                SDC has been around for 20+ years, but <strong>SPICE offers superior value ($14.99 vs $49.99), modern mobile-first design, BDSM compatibility quiz, and features SDC doesn't have</strong>. Better for modern swingers who want more than a dated forum.
              </p>
              <Button 
                size="lg" 
                className="bg-purple-600 hover:bg-purple-700 text-white"
                onClick={() => window.open('https://thespiceapp.com/download', '_blank')}
              >
                <Download className="w-5 h-5 mr-2" />
                Try SPICE Free - 70% Cheaper Than SDC
              </Button>
            </div>
          </div>
        </section>

        {/* Price Comparison - Highlighted */}
        <section className="py-16 px-4 bg-yellow-50">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-8">
              <DollarSign className="w-10 h-10 text-green-600" />
              <h2 className="text-4xl font-bold text-center text-gray-900">
                Pricing: SPICE is 70% Cheaper!
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-green-300">
                <h3 className="text-2xl font-bold mb-4 text-purple-600 flex items-center gap-2">
                  <CheckCircle className="w-7 h-7 text-green-600" />
                  SPICE Pricing
                </h3>
                <div className="mb-6">
                  <p className="text-5xl font-bold text-purple-600">$14.99</p>
                  <p className="text-xl text-gray-600">/month</p>
                  <p className="text-sm text-green-700 font-semibold mt-2">💰 Save 70% vs SDC!</p>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="font-semibold">Unlimited messaging</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="font-semibold">BDSM compatibility quiz</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="font-semibold">Local events calendar</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="font-semibold">Advanced filters</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="font-semibold">Mobile-first app experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="font-semibold">Photo + ID verification</span>
                  </div>
                </div>
                <div className="bg-green-100 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-green-900">$179/year</p>
                  <p className="text-sm text-green-700">Annual plan saves 25%</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-red-200">
                <h3 className="text-2xl font-bold mb-4 text-gray-600">SDC Pricing</h3>
                <div className="mb-6">
                  <p className="text-5xl font-bold text-gray-600">$49.99</p>
                  <p className="text-xl text-gray-600">/month</p>
                  <p className="text-sm text-red-600 font-semibold mt-2">⚠️ 3.3x more expensive</p>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <span>Access to forums & profiles</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>Basic messaging</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>Event listings</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>Travel calendar</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-red-500" />
                    <span>No compatibility quiz</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <XCircle className="w-5 h-5 text-red-500" />
                    <span>Dated mobile experience</span>
                  </div>
                </div>
                <div className="bg-red-100 rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-red-900">$599/year</p>
                  <p className="text-sm text-red-700">$420 MORE than SPICE!</p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-green-100 border-2 border-green-300 rounded-xl p-6 text-center">
              <p className="text-2xl font-bold text-green-900">
                💰 Save $420/year by switching from SDC to SPICE
              </p>
              <p className="text-lg text-green-800 mt-2">
                That's a weekend getaway, lifestyle event tickets, or savings for other fun!
              </p>
            </div>
          </div>
        </section>

        {/* Feature Comparison Table */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
              Feature-by-Feature Comparison
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg border border-gray-200">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="p-6 text-left text-lg font-bold text-gray-900">Feature</th>
                    <th className="p-6 text-center text-lg font-bold text-purple-600">SPICE</th>
                    <th className="p-6 text-center text-lg font-bold text-gray-600">SDC</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-yellow-50">
                    <td className="p-6 font-semibold text-gray-900">Monthly Price</td>
                    <td className="p-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                        <span className="font-bold text-green-700">$14.99</span>
                      </div>
                    </td>
                    <td className="p-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <XCircle className="w-6 h-6 text-red-500" />
                        <span className="font-bold text-red-600">$49.99</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-6 font-semibold text-gray-900">Mobile App Experience</td>
                    <td className="p-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                        <span className="font-bold">Modern, mobile-first</span>
                      </div>
                    </td>
                    <td className="p-6 text-center">
                      <span className="text-gray-600">Desktop-focused, dated</span>
                    </td>
                  </tr>
                  <tr className="bg-purple-50">
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
                        <span>No quiz feature</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-6 font-semibold text-gray-900">Photo + ID Verification</td>
                    <td className="p-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                        <span className="font-bold">Strict verification</span>
                      </div>
                    </td>
                    <td className="p-6 text-center">
                      <span className="text-gray-600">Basic verification</span>
                    </td>
                  </tr>
                  <tr className="bg-purple-50">
                    <td className="p-6 font-semibold text-gray-900">Local Events Calendar</td>
                    <td className="p-6 text-center">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </td>
                    <td className="p-6 text-center">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-6 font-semibold text-gray-900">Educational Resources</td>
                    <td className="p-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                        <span className="font-bold">50+ guides & articles</span>
                      </div>
                    </td>
                    <td className="p-6 text-center">
                      <span className="text-gray-600">Forums only</span>
                    </td>
                  </tr>
                  <tr className="bg-purple-50">
                    <td className="p-6 font-semibold text-gray-900">Forum/Community</td>
                    <td className="p-6 text-center">
                      <span className="text-gray-600">Coming soon</span>
                    </td>
                    <td className="p-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                        <span className="font-bold">Established forums</span>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-6 font-semibold text-gray-900">Modern UI/UX</td>
                    <td className="p-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                        <span className="font-bold">2025 design</span>
                      </div>
                    </td>
                    <td className="p-6 text-center">
                      <span className="text-gray-600">2000s-era design</span>
                    </td>
                  </tr>
                  <tr className="bg-purple-50">
                    <td className="p-6 font-semibold text-gray-900">Customer Support</td>
                    <td className="p-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                        <span className="font-bold">24/7 support</span>
                      </div>
                    </td>
                    <td className="p-6 text-center">
                      <span className="text-gray-600">Email support</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-6 font-semibold text-gray-900">Target Audience</td>
                    <td className="p-6 text-center">
                      <span className="font-bold">All ages, mobile-first</span>
                    </td>
                    <td className="p-6 text-center">
                      <span className="text-gray-600">Older demographic, desktop</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Pros & Cons */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Honest Pros & Cons</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-8 shadow-md">
                <h3 className="text-2xl font-bold mb-6 text-purple-600">SPICE</h3>
                <div className="mb-6">
                  <h4 className="font-bold text-green-700 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Pros:
                  </h4>
                  <ul className="space-y-2 ml-7">
                    <li className="text-gray-700">• 70% cheaper ($14.99 vs $49.99)</li>
                    <li className="text-gray-700">• Modern mobile-first experience</li>
                    <li className="text-gray-700">• Unique BDSM compatibility quiz</li>
                    <li className="text-gray-700">• Superior verification (Photo + ID)</li>
                    <li className="text-gray-700">• Clean, intuitive interface</li>
                    <li className="text-gray-700">• 50+ educational resources</li>
                    <li className="text-gray-700">• Growing engaged community</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-red-600 mb-3 flex items-center gap-2">
                    <XCircle className="w-5 h-5" />
                    Cons:
                  </h4>
                  <ul className="space-y-2 ml-7">
                    <li className="text-gray-700">• Newer app (smaller than SDC's 20+ years)</li>
                    <li className="text-gray-700">• No forum feature yet</li>
                    <li className="text-gray-700">• US-focused (SDC more international)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-md">
                <h3 className="text-2xl font-bold mb-6 text-gray-600">SDC (Swingers Date Club)</h3>
                <div className="mb-6">
                  <h4 className="font-bold text-green-700 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Pros:
                  </h4>
                  <ul className="space-y-2 ml-7">
                    <li className="text-gray-700">• Established for 20+ years</li>
                    <li className="text-gray-700">• Large existing member base</li>
                    <li className="text-gray-700">• Active forums and discussions</li>
                    <li className="text-gray-700">• Travel calendar feature</li>
                    <li className="text-gray-700">• Strong in Netherlands/Europe</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-red-600 mb-3 flex items-center gap-2">
                    <XCircle className="w-5 h-5" />
                    Cons:
                  </h4>
                  <ul className="space-y-2 ml-7">
                    <li className="text-gray-700">• 3.3x more expensive ($49.99/month!)</li>
                    <li className="text-gray-700">• Dated 2000s-era interface</li>
                    <li className="text-gray-700">• Poor mobile app experience</li>
                    <li className="text-gray-700">• No compatibility quiz/matching</li>
                    <li className="text-gray-700">• User complaints about pricing</li>
                    <li className="text-gray-700">• Desktop-focused (not mobile-first)</li>
                  </ul>
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
                    <span className="text-gray-700">Want <strong>70% better value</strong> for money</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Prefer a <strong>modern mobile-first app</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Want <strong>BDSM/kink compatibility</strong> matching</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Are under 50 and tech-savvy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Value <strong>superior verification</strong> and safety</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Want to <strong>save $420/year</strong></span>
                  </li>
                </ul>
                <Button 
                  size="lg" 
                  className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white"
                  onClick={() => window.open('https://thespiceapp.com/download', '_blank')}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Try SPICE Free - 70% Cheaper
                </Button>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200">
                <h3 className="text-2xl font-bold mb-4 text-gray-600">Choose SDC if you:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-gray-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Don't mind paying 3.3x more</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-gray-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Prefer desktop over mobile</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-gray-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Want established forums/community</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-gray-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Are based in Europe/Netherlands</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-gray-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Don't care about modern UI</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Switching CTA */}
        <section className="py-12 px-4 bg-green-50">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                💰 Already an SDC Member? Make the Switch!
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Save $420/year by switching to SPICE. Get modern features, BDSM quiz, better mobile experience, and keep the money for lifestyle events and fun!
              </p>
              <div className="bg-green-100 rounded-lg p-6 mb-6">
                <p className="text-2xl font-bold text-green-900 mb-2">Do the Math:</p>
                <p className="text-lg text-gray-700">SDC: $599/year</p>
                <p className="text-lg text-gray-700">SPICE: $179/year</p>
                <p className="text-3xl font-bold text-green-700 mt-3">You Save: $420/year! 🎉</p>
              </div>
              <p className="text-gray-600 mb-6">
                That's a Vegas weekend, tickets to multiple lifestyle events, or just more fun money in your pocket!
              </p>
              <Button 
                size="lg" 
                className="bg-purple-600 hover:bg-purple-700 text-white"
                onClick={() => window.open('https://thespiceapp.com/download', '_blank')}
              >
                <Download className="w-5 h-5 mr-2" />
                Switch to SPICE & Start Saving
              </Button>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-pink-600">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Modern Features. Better Value. SPICE.
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              Join 30,000+ members who chose the modern, affordable lifestyle dating app. BDSM quiz, local events, and 70% savings vs SDC.
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

export default ComparisonSDC;