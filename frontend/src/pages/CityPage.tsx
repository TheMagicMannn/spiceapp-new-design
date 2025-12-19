import { useParams, Navigate } from "react-router-dom";
import { Download, MapPin, Users, Shield, Calendar, Heart, CheckCircle, TrendingUp } from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";
import { cityData, CityData } from "@/data/cityData";

const CityPage = () => {
  const { citySlug } = useParams<{ citySlug: string }>();
  
  const city = cityData[citySlug || ""];

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

      <div className="relative min-h-screen">
        <ParticlesBackground />
        <Header />
        <Breadcrumbs />
        
        <main className="relative z-10 pt-32 pb-12">
          <div className="container mx-auto px-4">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-2 mb-4 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{city.name}, {city.state}</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                {city.hero.title}
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                {city.hero.subtitle}
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-full px-6 py-3">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="font-semibold">{city.stats.totalMembers.toLocaleString()}+ Members</span>
                  </div>
                </div>
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-full px-6 py-3">
                  <div className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-primary" />
                    <span className="font-semibold">{city.stats.couples.toLocaleString()}+ Couples</span>
                  </div>
                </div>
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-full px-6 py-3">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <span className="font-semibold">{city.stats.activeWeekly.toLocaleString()} Active This Week</span>
                  </div>
                </div>
              </div>

              <a
                href="/download"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all"
              >
                <Download className="w-5 h-5 mr-2" />
                Download SPICE - Connect with {city.name} Members
              </a>
            </div>

            {/* Overview Section */}
            <div className="mb-16">
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  {city.content.overview.title}
                </h2>
                {city.content.overview.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-lg text-muted-foreground mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* CTA Box */}
            <div className="mb-16">
              <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl p-8 md:p-12 border border-primary/30 text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Connect?</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Join {city.stats.totalMembers.toLocaleString()}+ verified members in {city.name}
                </p>
                <a
                  href="/download"
                  className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download SPICE Free
                </a>
              </div>
            </div>

            {/* Neighborhoods */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                {city.content.neighborhoods.title}
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                {city.content.neighborhoods.intro}
              </p>
              <div className="grid gap-6">
                {city.content.neighborhoods.areas.map((area, index) => (
                  <div key={index} className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
                    <h3 className="text-xl font-bold mb-2 text-primary">
                      {area.name}
                    </h3>
                    <p className="text-muted-foreground">
                      {area.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Why This City */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                {city.content.whyCity.title}
              </h2>
              <div className="grid gap-4">
                {city.content.whyCity.reasons.map((reason, index) => (
                  <div key={index} className="flex items-start gap-4 bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-lg text-muted-foreground">{reason}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Local Scene */}
            <div className="mb-16">
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 md:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">{city.content.localScene.title}</h2>
                </div>
                {city.content.localScene.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-lg text-muted-foreground mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Safety Tips */}
            <div className="mb-16">
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 md:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">{city.content.safetyTips.title}</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  {city.content.safetyTips.intro}
                </p>
                <div className="space-y-4">
                  {city.content.safetyTips.tips.map((tip, index) => (
                    <div key={index} className="border border-border/50 rounded-lg p-6 bg-background/50">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/20 text-primary rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold text-sm">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="font-bold mb-1 text-lg">{tip.title}</h3>
                          <p className="text-muted-foreground">{tip.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Success Story */}
            {city.successStory && (
              <div className="mb-16">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Success Story from {city.name}
                </h2>
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8">
                  <p className="text-lg text-muted-foreground italic mb-4">
                    "{city.successStory.quote}"
                  </p>
                  <p className="font-semibold">
                    - {city.successStory.author}, {city.successStory.location}
                  </p>
                </div>
              </div>
            )}

            {/* FAQs */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {city.faqs.map((faq, index) => (
                  <div key={index} className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
                    <h3 className="text-xl font-bold mb-3 text-primary">
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Final CTA */}
            <div className="mb-16">
              <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl p-8 md:p-12 border border-primary/30 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Join the {city.name} SPICE Community
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Connect with {city.stats.totalMembers.toLocaleString()}+ verified swingers, BDSM enthusiasts, and ENM couples & singles in {city.name}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/download"
                    className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download SPICE Free
                  </a>
                  <a
                    href="/quiz"
                    className="inline-flex items-center justify-center px-8 py-3 bg-background border-2 border-primary hover:bg-primary/10 font-semibold rounded-full transition-all"
                  >
                    Take BDSM Quiz First
                  </a>
                </div>
              </div>
            </div>

            {/* Related Cities */}
            {city.relatedCities && city.relatedCities.length > 0 && (
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
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
                        className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:scale-105"
                      >
                        <h3 className="text-xl font-bold mb-2 text-primary">
                          {relatedCity.name}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {relatedCity.stats.totalMembers.toLocaleString()}+ active members
                        </p>
                        <span className="text-primary font-semibold">
                          View {relatedCity.name} →
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </main>

        <FooterSection />
      </div>
    </>
  );
};

export default CityPage;