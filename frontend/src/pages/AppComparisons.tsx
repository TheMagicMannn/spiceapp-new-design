import { CheckCircle, TrendingUp, Shield, Crown } from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";

const AppComparisons = () => {
  const comparisons = [
    { name: "SPICE vs Feeld", path: "/vs/feeld", winner: "SPICE", reason: "Better verification, BDSM quiz, 25% cheaper" },
    { name: "SPICE vs 3Fun", path: "/vs/3fun", winner: "SPICE", reason: "ID verification, safer community, events calendar" },
    { name: "SPICE vs SDC", path: "/vs/sdc", winner: "SPICE", reason: "70% cheaper, modern mobile app, better UX" },
  ];

  return (
    <>
      <SEO
        title="SPICE App Comparisons: Why SPICE Beats Feeld, 3Fun & SDC"
        description="Compare SPICE with Feeld, 3Fun, and SDC. See features, pricing, verification, and why SPICE is the best lifestyle dating app for swingers, BDSM, and ENM."
        keywords="SPICE vs Feeld, SPICE vs 3Fun, SPICE vs SDC, best lifestyle app comparison, swinger app comparison, BDSM app comparison"
        canonical="https://thespiceapp.com/tools/app-comparisons"
      />

      <div className="relative min-h-screen">
        <ParticlesBackground />
        <Header />
        <Breadcrumbs />
        
        <main className="relative z-10 pt-32 pb-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                SPICE App Comparisons
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                See how SPICE stacks up against Feeld, 3Fun, SDC and other lifestyle dating apps. Detailed feature comparisons, pricing, and why 30,000+ members chose SPICE.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {comparisons.map((comp, index) => (
                <a
                  key={index}
                  href={comp.path}
                  className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:scale-105"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <Crown className="w-6 h-6 text-yellow-500" />
                    <h3 className="text-xl font-bold">{comp.name}</h3>
                  </div>
                  <div className="mb-3">
                    <span className="text-sm font-semibold text-green-500">✓ Winner: {comp.winner}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{comp.reason}</p>
                  <span className="text-primary font-semibold text-sm">Read Full Comparison →</span>
                </a>
              ))}
            </div>

            <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl p-8 md:p-12 border border-primary/30 text-center">
              <h2 className="text-3xl font-bold mb-4">Why 30,000+ Members Chose SPICE</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Better verification, unique BDSM quiz, local events, and superior value
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

export default AppComparisons;