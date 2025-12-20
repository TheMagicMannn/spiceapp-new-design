import { Users, Shield, Calendar, Heart, CheckCircle, Sparkles, PartyPopper, MessageCircle } from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";

const SwingersGuide = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Complete Swingers Guide 2025: Etiquette, Parties, Clubs & Lifestyle Tips",
    "description": "Ultimate guide to the swinging lifestyle. Learn swinger etiquette, how to find parties, club rules, communication tips, and safety for couples exploring swinging.",
    "author": {
      "@type": "Organization",
      "name": "SPICE Dating App"
    },
    "publisher": {
      "@type": "Organization",
      "name": "SPICE",
      "logo": {
        "@type": "ImageObject",
        "url": "https://thespiceapp.com/logo.png"
      }
    },
    "datePublished": "2025-01-20"
  };

  return (
    <>
      <SEO
        title="Complete Swingers Guide 2025: Etiquette, Parties & Clubs | SPICE"
        description="Ultimate swingers guide: What is swinging, couple swapping etiquette, finding swinger parties, club rules, soft vs full swap, safety tips. 3500+ word comprehensive guide for couples."
        keywords="swingers guide, swinging lifestyle, swinger parties, swinger clubs, swinger etiquette, couple swapping, soft swap, full swap, lifestyle parties, swingers for couples"
        canonical="https://thespiceapp.com/lifestyle/swingers-guide"
        structuredData={structuredData}
      />

      <div className="relative min-h-screen">
        <ParticlesBackground />
        <Header />
        <Breadcrumbs />
        
        <main className="relative z-10 pt-32 pb-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                The Complete Swingers Guide
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Everything couples need to know about the swinging lifestyle: etiquette, parties, clubs, communication, and safety.
              </p>
            </div>

            <div className="mb-12">
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4">In This Guide:</h2>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                  <a href="#what-is" className="text-primary hover:underline">• What is Swinging?</a>
                  <a href="#types" className="text-primary hover:underline">• Types of Swinging</a>
                  <a href="#parties" className="text-primary hover:underline">• Your First Party</a>
                  <a href="#clubs" className="text-primary hover:underline">• Swinger Clubs</a>
                  <a href="#etiquette" className="text-primary hover:underline">• Essential Etiquette</a>
                  <a href="#communication" className="text-primary hover:underline">• Couple Communication</a>
                  <a href="#safety" className="text-primary hover:underline">• Safety & Health</a>
                  <a href="#finding" className="text-primary hover:underline">• Finding Couples on SPICE</a>
                </div>
              </div>
            </div>

            <section id="what-is" className="mb-16">
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">What is Swinging?</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Swinging is when couples consensually engage in sexual activities with other couples or singles. Both partners are aware, consenting, and typically participating together. This is complete guide for couples exploring the lifestyle.
                </p>
                <a href="/download" className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all">
                  Find Swingers on SPICE
                </a>
              </div>
            </section>
          </div>
        </main>

        <FooterSection />
      </div>
    </>
  );
};

export default SwingersGuide;