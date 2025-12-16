import SEO from "@/components/SEO";
import ParticlesBackground from "@/components/ParticlesBackground";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DesireTagsSection from "@/components/DesireTagsSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "SPICE Dating App",
    "applicationCategory": "LifestyleApplication",
    "operatingSystem": "iOS, Android",
    "description": "Premium adventurous adult dating app for swingers, BDSM, ENM, and lifestyle exploration. Join thousands of verified members in a safe, inclusive community.",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "10000"
    }
  };

  return (
    <div className="relative min-h-screen">
      <SEO
        title="SPICE Dating App — Premium Swingers, BDSM & ENM Community"
        description="Join SPICE — the premier adventurous adult dating app for swingers, BDSM, ENM, and lifestyle exploration. 100% verified profiles, 200+ desire tags, BDSM compatibility quiz, and a sex-positive LGBTQ+ inclusive community. Connect with like-minded singles and couples."
        keywords="SPICE dating app, swingers dating app, BDSM dating, ENM dating app, ethical non-monogamy dating, couples dating app, kink dating, polyamory dating, lifestyle dating community, verified adult dating, alternative lifestyle dating, sex-positive dating app, LGBTQ+ lifestyle dating"
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
