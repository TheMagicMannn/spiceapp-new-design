import { useParams, Navigate } from "react-router-dom";
import { Download, MapPin, Users, Shield, Calendar, Heart, CheckCircle, TrendingUp } from "lucide-react";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { cityData, CityData } from "@/data/cityData";

const CityPage = () => {
  const { citySlug } = useParams<{ citySlug: string }>();
  
  const city = cityData[citySlug || ""];

  // If city not found, redirect to 404
  if (!city) {
    return <Navigate to="/404" replace />;
  }

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `SPICE - Lifestyle Dating in ${city.name}`,
    "description": city.description,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city.name,
      "addressRegion": city.state,
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": city.coordinates.lat,
      "longitude": city.coordinates.lng
    },
    "url": `https://thespiceapp.com/locations/${citySlug}`,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.7",
      "reviewCount": city.stats.totalMembers.toString()
    },
    "priceRange": "Free"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": city.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
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
        "name": "Locations",
        "item": "https://thespiceapp.com/locations"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": city.name
      }
    ]
  };

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [schemaData, faqSchema, breadcrumbSchema]
  };

  return (
    <>
      <SEO
        title={city.seo.title}
        description={city.seo.description}
        keywords={city.seo.keywords}
        canonical={`https://thespiceapp.com/locations/${citySlug}`}
        structuredData={combinedSchema}
      />

      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-2 mb-4 text-purple-100">
              <MapPin className="w-5 h-5" />
              <span className="text-sm">
                Home → Locations → {city.name}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {city.hero.title}
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl">
              {city.hero.subtitle}
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span className="font-semibold">{city.stats.totalMembers.toLocaleString()}+ Members</span>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  <span className="font-semibold">{city.stats.couples.toLocaleString()}+ Couples</span>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  <span className="font-semibold">{city.stats.activeWeekly.toLocaleString()} Active This Week</span>
                </div>
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-purple-50 text-lg px-8 py-6"
              onClick={() => window.open('https://thespiceapp.com/download', '_blank')}
            >
              <Download className="w-5 h-5 mr-2" />
              Download SPICE - Connect with {city.name} Members
            </Button>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            {/* Overview */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                {city.content.overview.title}
              </h2>
              {city.content.overview.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-lg text-gray-700 mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* CTA Box */}
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8 mb-12 text-center">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Ready to Connect?
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                Join {city.stats.totalMembers.toLocaleString()}+ verified members in {city.name}
              </p>
              <Button 
                size="lg" 
                className="bg-purple-600 hover:bg-purple-700 text-white text-lg px-8 py-6"
                onClick={() => window.open('https://thespiceapp.com/download', '_blank')}
              >
                <Download className="w-5 h-5 mr-2" />
                Download SPICE Free
              </Button>
            </div>

            {/* Neighborhoods */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                {city.content.neighborhoods.title}
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                {city.content.neighborhoods.intro}
              </p>
              <div className="grid gap-6">
                {city.content.neighborhoods.areas.map((area, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
                    <h3 className="text-xl font-bold mb-2 text-purple-600">
                      {area.name}
                    </h3>
                    <p className="text-gray-700">
                      {area.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Why This City */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                {city.content.whyCity.title}
              </h2>
              <div className="grid gap-4">
                {city.content.whyCity.reasons.map((reason, index) => (
                  <div key={index} className="flex items-start gap-4 bg-purple-50 rounded-xl p-6">
                    <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                    <p className="text-lg text-gray-700">{reason}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Local Scene */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                <Calendar className="w-8 h-8 text-purple-600" />
                {city.content.localScene.title}
              </h2>
              {city.content.localScene.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-lg text-gray-700 mb-4 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Safety Tips */}
            <div className="mb-12 bg-blue-50 rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 flex items-center gap-3">
                <Shield className="w-8 h-8 text-blue-600" />
                {city.content.safetyTips.title}
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                {city.content.safetyTips.intro}
              </p>
              <div className="space-y-4">
                {city.content.safetyTips.tips.map((tip, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{tip.title}</h3>
                      <p className="text-gray-700">{tip.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Success Story */}
            {city.successStory && (
              <div className="mb-12 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  Success Story from {city.name}
                </h2>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <p className="text-lg text-gray-700 italic mb-4">
                    "{city.successStory.quote}"
                  </p>
                  <p className="text-gray-600 font-semibold">
                    - {city.successStory.author}, {city.successStory.location}
                  </p>
                </div>
              </div>
            )}

            {/* FAQs */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-gray-900">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {city.faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
                    <h3 className="text-xl font-bold mb-3 text-purple-600">
                      {faq.question}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Join the {city.name} SPICE Community
              </h2>
              <p className="text-xl mb-8 text-purple-100">
                Connect with {city.stats.totalMembers.toLocaleString()}+ verified swingers, BDSM enthusiasts, and ENM couples & singles in {city.name}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
          </div>
        </section>

        {/* Related Cities */}
        {city.relatedCities && city.relatedCities.length > 0 && (
          <section className="py-16 px-4 bg-gray-50">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">
                Explore Other Cities
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {city.relatedCities.map((relatedSlug, index) => {
                  const relatedCity = cityData[relatedSlug];
                  if (!relatedCity) return null;
                  return (
                    <a
                      key={index}
                      href={`/locations/${relatedSlug}`}
                      className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-200"
                    >
                      <h3 className="text-xl font-bold mb-2 text-purple-600">
                        {relatedCity.name}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {relatedCity.stats.totalMembers.toLocaleString()}+ active members
                      </p>
                      <span className="text-purple-600 font-semibold hover:underline">
                        View {relatedCity.name} →
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default CityPage;
