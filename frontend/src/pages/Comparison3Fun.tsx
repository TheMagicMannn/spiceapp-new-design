import { CheckCircle, XCircle, Crown, Download, Shield } from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";

const Comparison3Fun = () => {
  return (
    <>
      <SEO
        title="SPICE vs 3Fun: Best Swingers App Comparison 2025"
        description="SPICE vs 3Fun: Safety, verification, features. SPICE offers superior verification, BDSM quiz, events."
        keywords="SPICE vs 3Fun, 3Fun alternative, best swingers app"
        canonical="https://thespiceapp.com/vs/3fun"
      />

      <div className="relative min-h-screen">
        <ParticlesBackground />
        <Header />
        <Breadcrumbs />
        
        <main className="relative z-10 pt-32 pb-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                SPICE vs 3Fun: Which is Safer?
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Safety and verification comparison. See why SPICE is the safer choice.
              </p>
            </div>

            <div className="mb-16">
              <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl p-8 md:p-12 border border-primary/30 text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Crown className="w-10 h-10 text-yellow-500" />
                  <h2 className="text-3xl font-bold">Winner: SPICE</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  SPICE's ID verification reduces fake profiles by 95%. Plus BDSM quiz and events calendar.
                </p>
                <a href="/download" className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all">
                  <Download className="w-5 h-5 mr-2" />
                  Try SPICE - Safer Choice
                </a>
              </div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                <Shield className="w-8 h-8 text-primary" />
                Safety Comparison
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-background/50 border border-green-500/30 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-primary mb-4">SPICE Safety</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span className="text-muted-foreground">Photo + ID verification required</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span className="text-muted-foreground">24/7 active moderation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span className="text-muted-foreground">95% fewer fake profiles</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-background/50 border border-border/50 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-4">3Fun Safety</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 text-red-500 mt-0.5" />
                      <span className="text-muted-foreground">Photo verification only</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <XCircle className="w-5 h-5 text-red-500 mt-0.5" />
                      <span className="text-muted-foreground">Reported fake profiles</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>

        <FooterSection />
      </div>
    </>
  );
};

export default Comparison3Fun;