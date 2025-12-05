import ParticlesBackground from "@/components/ParticlesBackground";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import DesireTagsSection from "@/components/DesireTagsSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "@/components/PricingSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <ParticlesBackground />
      <main className="relative z-10">
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
