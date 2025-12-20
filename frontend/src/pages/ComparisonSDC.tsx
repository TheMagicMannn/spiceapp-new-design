import { CheckCircle, XCircle, Crown, Download, DollarSign } from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";

const ComparisonSDC = () => {
  return (
    <>
      <SEO
        title="SPICE vs SDC: Better Value Swingers App 2025"
        description="SPICE vs SDC: 70% cheaper, modern mobile app, BDSM quiz. Save $420/year by switching."
        keywords="SPICE vs SDC, SDC alternative, cheaper than SDC"
        canonical="https://thespiceapp.com/vs/sdc"
      />

      <div className="relative min-h-screen">
        <ParticlesBackground />
        <Header />
        <Breadcrumbs />
        
        <main className="relative z-10 pt-32 pb-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                SPICE vs SDC: Save $420/Year
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Modern app vs legacy platform. See why SPICE offers 70% better value.
              </p>
            </div>

            <div className="mb-16">
              <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl p-8 md:p-12 border border-primary/30 text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <DollarSign className="w-10 h-10 text-green-500" />
                  <h2 className="text-3xl font-bold">Save 70% with SPICE</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-6">
                  <div className="bg-background/80 border border-green-500/30 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-1">SPICE</p>
                    <p className="text-3xl font-bold text-green-500">$14.99/mo</p>
                  </div>
                  <div className="bg-background/80 border border-red-500/30 rounded-lg p-4">
                    <p className="text-sm text-muted-foreground mb-1">SDC</p>
                    <p className="text-3xl font-bold text-red-500">$49.99/mo</p>
                  </div>
                </div>
                <p className="text-xl font-bold text-green-400 mb-6">💰 Save $420/year!</p>
                <a href="/download" className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all">
                  <Download className="w-5 h-5 mr-2" />
                  Switch to SPICE
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

export default ComparisonSDC;