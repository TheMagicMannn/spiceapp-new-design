import { Music, MapPin, PartyPopper, Heart, Users, Palmtree, Calendar } from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";

const TravelNewOrleans = () => {
  return (
    <>
      <SEO
        title="New Orleans Swingers Guide 2025: NOLA Lifestyle, Clubs & Events | SPICE"
        description="Complete New Orleans lifestyle guide: Swinger clubs, BDSM events, Bourbon Street parties, French Quarter lifestyle scene. 4,200+ SPICE members in NOLA."
        keywords="swingers New Orleans, NOLA lifestyle, New Orleans swinger clubs, Bourbon Street lifestyle, NOLA parties, French Quarter swingers, swinging NOLA"
        canonical="https://thespiceapp.com/travel/new-orleans"
      />

      <div className="relative min-h-screen">
        <ParticlesBackground />
        <Header />
        <Breadcrumbs />
        
        <main className="relative z-10 pt-32 pb-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-2 mb-4 text-muted-foreground">
                <Music className="w-5 h-5" />
                <span className="text-sm">New Orleans, Louisiana</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                New Orleans Swingers & Lifestyle Guide
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                The Big Easy's sizzling lifestyle scene: clubs, parties, Bourbon Street adventures, and 4,200+ verified SPICE members ready to laissez les bons temps rouler!
              </p>
            </div>

            <div className="mb-12">
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-primary" />
                    <span className="font-semibold">4,200+ Active Members</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Heart className="w-5 h-5 text-primary" />
                    <span className="font-semibold">1,800+ Couples</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="font-semibold">Year-Round Events</span>
                  </div>
                </div>
              </div>
            </div>

            <section className="mb-16">
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 md:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <PartyPopper className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">Why NOLA for Lifestyle Dating</h2>
                </div>
                
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-lg leading-relaxed">
                    New Orleans has always embraced sexual freedom and hedonism. From Mardi Gras debauchery to year-round celebrations, NOLA is a playground for the lifestyle community. The city's "laissez les bons temps rouler" (let the good times roll) attitude extends to swinging, BDSM, and all forms of consensual adult fun.
                  </p>
                  <p className="text-lg leading-relaxed">
                    With 4,200+ active SPICE members, New Orleans offers a vibrant mix of tourists and locals, creating a constantly refreshing scene. The French Quarter's clubs and bars welcome lifestyle exploration, and the city hosts major lifestyle events throughout the year.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mt-6">
                    <div className="bg-background/50 border border-border/50 rounded-lg p-4">
                      <h3 className="font-bold text-primary mb-3">Best Areas:</h3>
                      <ul className="space-y-1 text-sm">
                        <li>• <strong className="text-foreground">French Quarter:</strong> Historic center, most clubs</li>
                        <li>• <strong className="text-foreground">Bourbon Street:</strong> Party atmosphere, lifestyle-friendly</li>
                        <li>• <strong className="text-foreground">Marigny:</strong> Local scene, house parties</li>
                        <li>• <strong className="text-foreground">Warehouse District:</strong> Upscale, art scene</li>
                      </ul>
                    </div>

                    <div className="bg-background/50 border border-border/50 rounded-lg p-4">
                      <h3 className="font-bold text-primary mb-3">Best Times:</h3>
                      <ul className="space-y-1 text-sm">
                        <li>• <strong className="text-foreground">Mardi Gras (Feb/Mar):</strong> Peak debauchery!</li>
                        <li>• <strong className="text-foreground">Southern Decadence (Sep):</strong> Massive LGBTQ+ event</li>
                        <li>• <strong className="text-foreground">Halloween:</strong> Costume parties galore</li>
                        <li>• <strong className="text-foreground">Year-round:</strong> Always something happening</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl p-8 md:p-12 border border-primary/30 text-center">
              <h2 className="text-3xl font-bold mb-4">Connect with NOLA Lifestyle Community</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Join 4,200+ verified swingers and lifestyle enthusiasts in New Orleans
              </p>
              <a href="/download" className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all">
                Download SPICE Free
              </a>
            </div>
          </div>
        </main>

        <FooterSection />
      </div>
    </>
  );
};

export default TravelNewOrleans;