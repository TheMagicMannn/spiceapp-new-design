import { useParams, Navigate } from "react-router-dom";
import { Download, MapPin, Users, Shield, Calendar, Heart, CheckCircle, TrendingUp } from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import { Button } from "@/components/ui/button";
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
        
        <main className="relative z-10 pt-16">
          {/* Hero Section */}
          <section className="py-20 px-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10" />
            <div className="container mx-auto relative z-10">
              <div className="flex items-center gap-2 mb-4 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Home → Locations → {city.name}</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient glow-text">
                {city.hero.title}
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl">
                {city.hero.subtitle}
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="glass-card px-6 py-3 rounded-full">
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="font-semibold">{city.stats.totalMembers.toLocaleString()}+ Members</span>
                  </div>
                </div>
                <div className="glass-card px-6 py-3 rounded-full">
                  <div className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-accent" />
                    <span className="font-semibold">{city.stats.couples.toLocaleString()}+ Couples</span>
                  </div>
                </div>
                <div className="glass-card px-6 py-3 rounded-full">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    <span className="font-semibold">{city.stats.activeWeekly.toLocaleString()} Active This Week</span>
                  </div>
                </div>
              </div>

              <Button 
                size="lg" 
                className="gradient-animate hover:scale-105 transition-transform"
                onClick={() => window.location.href = '/download'}
              >
                <Download className="w-5 h-5 mr-2" />
                Download SPICE - Connect with {city.name} Members
              </Button>
            </div>
          </section>

          {/* Overview Section */}
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-4xl">
              <div className="glass-card p-8 md:p-12 rounded-2xl">
                <h2 className="text-3xl font-bold mb-6 text-gradient">
                  {city.content.overview.title}
                </h2>
                {city.content.overview.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-lg text-muted-foreground mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Box */}
          <section className="py-12 px-4">
            <div className="container mx-auto max-w-4xl">
              <div className="glass-card p-8 rounded-2xl text-center border-primary/20">
                <h3 className="text-2xl font-bold mb-4 text-gradient">Ready to Connect?</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Join {city.stats.totalMembers.toLocaleString()}+ verified members in {city.name}
                </p>
                <Button 
                  size="lg" 
                  className="gradient-animate hover:scale-105 transition-transform"
                  onClick={() => window.location.href = '/download'}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download SPICE Free
                </Button>
              </div>
            </div>
          </section>

          {/* Neighborhoods */}
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold mb-6 text-gradient">
                {city.content.neighborhoods.title}
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                {city.content.neighborhoods.intro}
              </p>
              <div className="grid gap-6">
                {city.content.neighborhoods.areas.map((area, index) => (
                  <div key={index} className="glass-card p-6 rounded-xl hover:border-primary/40 transition-colors">
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
          </section>

          {/* Why This City */}
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold mb-6 text-gradient">
                {city.content.whyCity.title}
              </h2>
              <div className="grid gap-4">
                {city.content.whyCity.reasons.map((reason, index) => (
                  <div key={index} className="flex items-start gap-4 glass-card p-6 rounded-xl">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-lg text-muted-foreground">{reason}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Local Scene */}
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold mb-6 text-gradient flex items-center gap-3">
                <Calendar className="w-8 h-8 text-primary" />
                {city.content.localScene.title}
              </h2>
              <div className="glass-card p-8 rounded-2xl">
                {city.content.localScene.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-lg text-muted-foreground mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </section>

          {/* Safety Tips */}
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-4xl">
              <div className="glass-card p-8 rounded-2xl border-accent/20">
                <h2 className="text-3xl font-bold mb-6 text-gradient flex items-center gap-3">
                  <Shield className="w-8 h-8 text-accent" />
                  {city.content.safetyTips.title}
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  {city.content.safetyTips.intro}
                </p>
                <div className="space-y-4">
                  {city.content.safetyTips.tips.map((tip, index) => (
                    <div key={index} className="flex items-start gap-4 glass-card p-6 rounded-xl">
                      <div className="bg-accent/20 text-accent rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">{tip.title}</h3>
                        <p className="text-muted-foreground">{tip.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Success Story */}
          {city.successStory && (
            <section className="py-16 px-4">
              <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl font-bold mb-6 text-gradient">
                  Success Story from {city.name}
                </h2>
                <div className="glass-card p-8 rounded-2xl border-primary/20">
                  <p className="text-lg text-muted-foreground italic mb-4">
                    "{city.successStory.quote}"
                  </p>
                  <p className="text-foreground font-semibold">
                    - {city.successStory.author}, {city.successStory.location}
                  </p>
                </div>
              </div>
            </section>
          )}

          {/* FAQs */}
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold mb-8 text-gradient">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {city.faqs.map((faq, index) => (
                  <div key={index} className="glass-card p-6 rounded-xl hover:border-primary/40 transition-colors">
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
          </section>

          {/* Final CTA */}
          <section className="py-16 px-4">
            <div className="container mx-auto max-w-4xl">
              <div className="glass-card p-12 rounded-2xl text-center gradient-animate">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  Join the {city.name} SPICE Community
                </h2>
                <p className="text-xl mb-8 text-white/90">
                  Connect with {city.stats.totalMembers.toLocaleString()}+ verified swingers, BDSM enthusiasts, and ENM couples & singles in {city.name}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button 
                    size="lg" 
                    className="bg-white text-primary hover:bg-white/90"
                    onClick={() => window.location.href = '/download'}
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download SPICE Free
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="bg-transparent border-2 border-white text-white hover:bg-white/10"
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
            <section className="py-16 px-4">
              <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-gradient text-center">
                  Explore Other Cities
                </h2>
                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                  {city.relatedCities.map((relatedSlug, index) => {
                    const relatedCity = cityData[relatedSlug];
                    if (!relatedCity) return null;
                    return (
                      <a
                        key={index}
                        href={`/locations/${relatedSlug}`}
                        className="glass-card p-6 rounded-xl hover:border-primary/40 transition-all hover:scale-105"
                      >
                        <h3 className="text-xl font-bold mb-2 text-primary">
                          {relatedCity.name}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {relatedCity.stats.totalMembers.toLocaleString()}+ active members
                        </p>
                        <span className="text-primary font-semibold hover:underline">
                          View {relatedCity.name} →
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </section>
          )}
        </main>

        <FooterSection />
      </div>
    </>
  );
};

export default CityPage;