import { Palmtree, MapPin, Users, Shield, Calendar, Heart, Sun, PartyPopper } from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";

const TravelMiami = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TravelGuide",
    "name": "Miami Swingers & Lifestyle Travel Guide",
    "description": "Complete guide to Miami's swinger clubs, lifestyle events, and BDSM scene. Best beaches, parties, and venues for lifestyle couples."
  };

  return (
    <>
      <SEO
        title="Miami Swingers Guide 2025: Clubs, Parties & Lifestyle Events | SPICE"
        description="Ultimate Miami lifestyle guide: Swinger clubs, BDSM events, hotwife parties, best beaches for lifestyle couples. 7,800+ SPICE members in Miami. Complete travel guide."
        keywords="swingers Miami, Miami lifestyle clubs, BDSM Miami, swinger parties Miami, lifestyle events Miami, Miami Beach swingers, South Beach lifestyle"
        canonical="https://thespiceapp.com/travel/miami"
        structuredData={structuredData}
      />

      <div className="relative min-h-screen">
        <ParticlesBackground />
        <Header />
        <Breadcrumbs />
        
        <main className="relative z-10 pt-32 pb-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-2 mb-4 text-muted-foreground">
                <Palmtree className="w-5 h-5" />
                <span className="text-sm">Miami, Florida</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                Miami Swingers & Lifestyle Guide
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Your complete guide to Miami's sizzling lifestyle scene: clubs, parties, beaches, and 7,800+ verified SPICE members ready to connect.
              </p>
            </div>

            <div className="mb-12">
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="font-semibold">7,800+ Active SPICE Members in Miami</span>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="w-5 h-5 text-primary" />
                  <span className="font-semibold">3,400+ Couples Profiles</span>
                </div>
                <div className="flex items-center gap-3">
                  <Sun className="w-5 h-5 text-primary" />
                  <span className="font-semibold">Year-Round Lifestyle Events & Parties</span>
                </div>
              </div>
            </div>

            <section className="mb-16">
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 md:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <PartyPopper className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">Why Miami for Lifestyle Dating</h2>
                </div>
                
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-lg leading-relaxed">
                    Miami is one of the sexiest cities in America for lifestyle dating. The combination of beautiful beaches, Latin culture, world-class nightlife, and a sex-positive atmosphere makes Miami a playground for swingers, BDSM enthusiasts, and ENM couples.
                  </p>
                  <p className="text-lg leading-relaxed">
                    With over 7,800 active SPICE members, Miami's lifestyle community is vibrant year-round. From South Beach pool parties to exclusive clubs in Brickell, from yacht parties to warehouse events in Wynwood, Miami offers endless opportunities for connection and adventure.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-background/50 border border-border/50 rounded-lg p-4">
                      <h3 className="font-bold text-primary mb-3">Best Neighborhoods:</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• <strong className="text-foreground">South Beach:</strong> Clubs, parties, tourist-friendly</li>
                        <li>• <strong className="text-foreground">Brickell:</strong> Upscale professionals, exclusive events</li>
                        <li>• <strong className="text-foreground">Wynwood:</strong> Artistic, alternative, warehouse parties</li>
                        <li>• <strong className="text-foreground">Miami Beach:</strong> Lifestyle-friendly hotels and resorts</li>
                        <li>• <strong className="text-foreground">Fort Lauderdale:</strong> Just north, active scene</li>
                      </ul>
                    </div>

                    <div className="bg-background/50 border border-border/50 rounded-lg p-4">
                      <h3 className="font-bold text-primary mb-3">Best Time to Visit:</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• <strong className="text-foreground">Winter (Nov-Mar):</strong> Peak season, most events</li>
                        <li>• <strong className="text-foreground">Spring Break (Mar):</strong> Massive parties, packed clubs</li>
                        <li>• <strong className="text-foreground">Summer (Jun-Aug):</strong> Hot but great beach parties</li>
                        <li>• <strong className="text-foreground">Art Basel (Dec):</strong> Creative, lifestyle-friendly crowds</li>
                        <li>• <strong className="text-foreground">Year-round:</strong> Always something happening!</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="mb-16">
              <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl p-8 md:p-12 border border-primary/30 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Connect with Miami Lifestyle Community</h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Join 7,800+ verified swingers, BDSM enthusiasts, and ENM couples in Miami
                </p>
                <a href="/download" className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all">
                  Download SPICE Free
                </a>
              </div>
            </div>
          </div>
        </main>

        <FooterSection />
      </div>
    </>
  );
};

export default TravelMiami;