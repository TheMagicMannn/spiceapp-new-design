import { CheckCircle, XCircle, Crown, Download } from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";

const ComparisonFeeld = () => {
  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ComparisonPage",
        "name": "SPICE vs Feeld: Which Lifestyle Dating App is Better?",
        "description": "Detailed comparison of SPICE and Feeld dating apps"
      }
    ]
  };

  return (
    <>
      <SEO
        title="SPICE vs Feeld: Best Lifestyle Dating App 2025 Comparison"
        description="SPICE vs Feeld comparison: Features, pricing, community size, BDSM tools. SPICE offers unique quiz, better verification, and 30K+ members."
        keywords="SPICE vs Feeld, Feeld alternative, best lifestyle dating app, swingers app comparison"
        canonical="https://thespiceapp.com/vs/feeld"
        structuredData={combinedSchema}
      />

      <div className="relative min-h-screen">
        <ParticlesBackground />
        <Header />
        <Breadcrumbs />
        
        <main className="relative z-10 pt-32 pb-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                SPICE vs Feeld: Which App Wins?
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Detailed comparison of features, community, pricing. See why 30,000+ members chose SPICE.
              </p>
            </div>

            <div className="mb-16">
              <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl p-8 md:p-12 border border-primary/30 text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Crown className="w-10 h-10 text-yellow-500" />
                  <h2 className="text-3xl font-bold">Winner: SPICE</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6">
                  SPICE offers unique BDSM quiz, better verification, local events, and 25% better value than Feeld.
                </p>
                <a href="/download" className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all">
                  <Download className="w-5 h-5 mr-2" />
                  Try SPICE Free
                </a>
              </div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 md:p-12 mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Feature Comparison</h2>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-background/50 border border-primary/30 rounded-lg p-6">
                    <h3 className="text-xl font-bold text-primary mb-4">SPICE Advantages</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">BDSM Compatibility Quiz (unique!)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">ID + Photo verification</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Local events calendar</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">25% cheaper ($14.99 vs $19.99)</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-background/50 border border-border/50 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-4">Feeld Features</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <span className="text-muted-foreground">AI-powered matching</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-muted-foreground">Larger global user base</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">No compatibility quiz</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">More expensive</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl p-8 md:p-12 border border-primary/30 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Experience SPICE?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Join 30,000+ verified members. Take the BDSM quiz, attend local events.
              </p>
              <a href="/download" className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all">
                <Download className="w-5 h-5 mr-2" />
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

export default ComparisonFeeld;