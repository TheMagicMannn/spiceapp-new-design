import { ArrowRight, CheckCircle, XCircle, Crown, Download } from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import { Button } from "@/components/ui/button";

const ComparisonFeeld = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "ComparisonPage",
    "name": "SPICE vs Feeld: Which Lifestyle Dating App is Better?",
    "description": "Detailed comparison of SPICE and Feeld dating apps for swingers, BDSM, and ENM relationships. See features, pricing, and which app is right for you."
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
        "name": "SPICE vs Feeld"
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
        title="SPICE vs Feeld: Best Lifestyle Dating App 2025 Comparison"
        description="SPICE vs Feeld comparison: Features, pricing, community size, BDSM tools. SPICE offers unique quiz, better verification, and 30K+ members. See which is right for you."
        keywords="SPICE vs Feeld, Feeld alternative, best lifestyle dating app, swingers app comparison, BDSM dating app comparison, ENM app vs Feeld"
        canonical="https://thespiceapp.com/vs/feeld"
        structuredData={combinedSchema}
      />

      <div className="relative min-h-screen">
        <ParticlesBackground />
        <Header />
        
        <main className="relative z-10 pt-16">
        {/* Hero */}
        <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-2 mb-4 text-purple-100">
              <span className="text-sm">Home → Comparisons → SPICE vs Feeld</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              SPICE vs Feeld: Which Lifestyle Dating App Wins in 2025?
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl">
              Detailed comparison of features, community, pricing, and user experience. See why 30,000+ members chose SPICE over Feeld.
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
                While Feeld is a solid app, <strong>SPICE offers better value, unique features like the BDSM Compatibility Quiz, superior verification, and a more engaged community</strong>. Perfect for couples and singles exploring swinging, BDSM, polyamory, and ENM.
              </p>
              <Button 
                size="lg" 
                className="bg-purple-600 hover:bg-purple-700 text-white"
                onClick={() => window.open('https://thespiceapp.com/download', '_blank')}
              >
                <Download className="w-5 h-5 mr-2" />
                Try SPICE Free - No Credit Card Required
              </Button>
            </div>
          </div>
        </section>

        {/* Main Comparison Table */}
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
                    <th className="p-6 text-center text-lg font-bold text-gray-600">Feeld</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="p-6 font-semibold text-gray-900">Community Size</td>
                    <td className="p-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                        <span className="font-bold">30,000+ verified members</span>
                      </div>
                    </td>
                    <td className="p-6 text-center text-gray-600">~500,000+ global users</td>
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
                    <td className="p-6 font-semibold text-gray-900">Photo & ID Verification</td>
                    <td className="p-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                        <span className="font-bold">Strict verification</span>
                      </div>
                    </td>
                    <td className="p-6 text-center text-gray-600">Photo verification only</td>
                  </tr>
                  <tr className="bg-purple-50">
                    <td className="p-6 font-semibold text-gray-900">Couples Profiles</td>
                    <td className="p-6 text-center">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </td>
                    <td className="p-6 text-center">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </td>
                  </tr>
                  <tr>
                    <td className="p-6 font-semibold text-gray-900">Free Messaging</td>
                    <td className="p-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                        <span className="font-bold">Yes - Limited</span>
                      </div>
                    </td>
                    <td className="p-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <XCircle className="w-6 h-6 text-red-500" />
                        <span>Likes only (free)</span>
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-purple-50">
                    <td className="p-6 font-semibold text-gray-900">Events & Meetups</td>
                    <td className="p-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                        <span className="font-bold">Local events calendar</span>
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
                    <td className="p-6 font-semibold text-gray-900">Educational Resources</td>
                    <td className="p-6 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                        <span className="font-bold">50+ comprehensive guides</span>
                      </div>
                    </td>
                    <td className="p-6 text-center text-gray-600">"Ask Feeld" blog</td>
                  </tr>
                  <tr className="bg-purple-50">
                    <td className="p-6 font-semibold text-gray-900">Privacy Mode</td>
                    <td className="p-6 text-center">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </td>
                    <td className="p-6 text-center">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    </td>
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
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Detailed Comparison Sections */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Community & User Base */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Community & User Base</h2>
              <div className="bg-white rounded-xl p-8 shadow-md">
                <h3 className="text-xl font-bold mb-4 text-purple-600">SPICE Community</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700"><strong>30,000+ verified members</strong> focused specifically on swingers, BDSM, ENM, and polyamory</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700"><strong>Higher engagement rate</strong> - Members join with clear lifestyle intentions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700"><strong>Strong US presence</strong> in major cities (NYC 10,500+, LA 12,800+, Vegas 8,200+)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700"><strong>Verification required</strong> - Photo AND ID verification reduces fake profiles</span>
                  </li>
                </ul>

                <h3 className="text-xl font-bold mb-4 text-gray-600">Feeld Community</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-gray-700">~500,000+ global users, but more broad/general audience</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-700">Heavy LGBTQ+ focus, less emphasis on swinging/couples</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-700">More casual explorers vs. serious lifestyle participants</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-700">Photo verification only - more fake profiles reported</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Unique Features */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Unique Features</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-purple-50 rounded-xl p-8 border-2 border-purple-200">
                  <h3 className="text-xl font-bold mb-4 text-purple-600">SPICE Exclusive Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700"><strong>BDSM Compatibility Quiz</strong> - 50+ questions to discover your kink profile and find compatible partners</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700"><strong>Events Calendar</strong> - Find local lifestyle parties, meetups, and workshops</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700"><strong>Educational Hub</strong> - 50+ safety guides, how-tos, and lifestyle resources</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700"><strong>ID Verification</strong> - Extra layer of safety and authenticity</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-100 rounded-xl p-8">
                  <h3 className="text-xl font-bold mb-4 text-gray-600">Feeld Features</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-gray-700">AI-powered matching algorithm</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gray-700">Detailed preference settings</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gray-700">Incognito mode (premium)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-gray-700">"Ask Feeld" blog with articles</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Pricing Comparison</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-8 shadow-md border-2 border-green-200">
                  <div className="flex items-center gap-3 mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                    <h3 className="text-2xl font-bold text-purple-600">SPICE Pricing</h3>
                  </div>
                  <div className="mb-6">
                    <p className="text-4xl font-bold text-gray-900 mb-2">$14.99<span className="text-xl text-gray-600">/month</span></p>
                    <p className="text-gray-600">Save 25% with annual plan</p>
                  </div>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Unlimited messaging</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>BDSM quiz results & matching</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>See who viewed your profile</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Advanced filters</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Event RSVPs & priority</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Priority support</span>
                    </li>
                  </ul>
                  <p className="text-sm text-green-700 font-semibold">💰 25% cheaper than Feeld!</p>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-md">
                  <h3 className="text-2xl font-bold text-gray-600 mb-4">Feeld Majestic</h3>
                  <div className="mb-6">
                    <p className="text-4xl font-bold text-gray-900 mb-2">$19.99<span className="text-xl text-gray-600">/month</span></p>
                    <p className="text-gray-600">Tiered pricing by location</p>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                      <span>Unlimited likes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                      <span>See who likes you</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                      <span>Advanced filters</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                      <span>Incognito mode</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                      <span>Private photos</span>
                    </li>
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
                    <span className="text-gray-700">Are specifically interested in <strong>swinging, BDSM, or ENM</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Want to <strong>discover your BDSM compatibility</strong> with a detailed quiz</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Value <strong>verified profiles</strong> and safety features</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Want to <strong>attend local lifestyle events</strong></span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Prefer <strong>better value</strong> ($5/month cheaper)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Want a <strong>focused, serious lifestyle community</strong></span>
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
                <h3 className="text-2xl font-bold mb-4 text-gray-600">Choose Feeld if you:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-gray-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Are exploring many different relationship styles broadly</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-gray-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Prioritize LGBTQ+ identity-focused community</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-gray-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Want a larger, global user base</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-gray-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Prefer AI-powered algorithmic matching</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-gray-600 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">Are willing to pay premium for incognito mode</span>
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
              Ready to Experience SPICE?
            </h2>
            <p className="text-xl mb-8 text-purple-100">
              Join 30,000+ verified members. Take the BDSM quiz, attend local events, and connect with lifestyle-minded people in your city.
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

export default ComparisonFeeld;
