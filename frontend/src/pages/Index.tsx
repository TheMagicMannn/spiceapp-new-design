import SEO from "@/components/SEO";
import ParticlesBackground from "@/components/ParticlesBackground";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DesireTagsSection from "@/components/DesireTagsSection";
import FeaturesSection from "@/components/FeaturesSection";
import TrustBadgesSection from "@/components/TrustBadgesSection";
import PricingSection from "@/components/PricingSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  // Enhanced structured data for better SEO
  const structuredData = [
    // Organization Schema
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "SPICE Dating App",
      "alternateName": "SPICE",
      "url": "https://thespiceapp.com",
      "logo": "https://thespiceapp.com/logo.png",
      "description": "Premium dating app for swingers, BDSM, ENM, polyamory, and lifestyle community",
      "foundingDate": "2024",
      "slogan": "Premium Dating for Adventurous Adults",
      "sameAs": [
        "https://www.facebook.com/spiceapp",
        "https://www.instagram.com/spiceapp",
        "https://twitter.com/spiceapp"
      ]
    },
    // Mobile Application Schema
    {
      "@context": "https://schema.org",
      "@type": "MobileApplication",
      "name": "SPICE Dating App",
      "applicationCategory": "LifestyleApplication",
      "operatingSystem": "iOS, Android",
      "description": "Premium dating app for swingers, BDSM, ENM, polyamory, and kink enthusiasts. Connect with verified singles and couples in a safe, LGBTQ+ inclusive lifestyle community.",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "10000",
        "bestRating": "5"
      },
      "contentRating": "18+",
      "downloadUrl": "https://thespiceapp.com/download"
    },
    // Review Schema
    {
      "@context": "https://schema.org",
      "@type": "Review",
      "itemReviewed": {
        "@type": "MobileApplication",
        "name": "SPICE Dating App"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "4.8",
        "bestRating": "5"
      },
      "author": {
        "@type": "Organization",
        "name": "SPICE Community"
      },
      "reviewBody": "SPICE is the premier dating app for the lifestyle community, offering verified profiles, advanced matching for swingers, BDSM, ENM, and polyamory enthusiasts."
    }
  ];

  return (
    <div className="relative min-h-screen">
      <SEO
        title="SPICE Dating App — Premium Swingers, BDSM & ENM Community for Couples and Singles"
        description="Join SPICE — the #1 dating app for swingers, BDSM, ENM, polyamory, and kink. 100% verified profiles, AI-powered matching, 200+ desire tags, BDSM compatibility quiz. LGBTQ+ inclusive community for adventurous couples and singles. Download now for iOS & Android."
        keywords="swingers dating app, BDSM dating app, ENM dating app, polyamory dating, kink dating app, dating app for couples, dating app for singles, LGBTQ+ dating, lifestyle dating, ethical non-monogamy app, verified dating app, sex-positive community, alternative lifestyle dating, couples swinging app, hotwife dating"
        canonical="https://thespiceapp.com/"
        structuredData={structuredData}
      />
      <ParticlesBackground />
      <Header />
      <main className="relative z-10 pt-16">
        <HeroSection />
        <AboutSection />
        <DesireTagsSection />
        <FeaturesSection />
        <PricingSection />
        <FooterSection />
      </main>
    </div>
  );
};

export default Index;
