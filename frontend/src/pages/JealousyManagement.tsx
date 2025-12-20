import { Heart, Shield, Users, AlertTriangle, CheckCircle, TrendingUp } from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";

const JealousyManagement = () => {
  return (
    <>
      <SEO
        title="Jealousy Management Guide: Tools for ENM, Polyamory & Swinging | SPICE"
        description="Complete guide to managing jealousy in open relationships, swinging, and polyamory. Practical tools, strategies, and emotional management techniques that work."
        keywords="managing jealousy polyamory, jealousy in open relationships, swinging jealousy, jealousy management tools, compersion, ENM jealousy, polyamory jealousy help"
        canonical="https://thespiceapp.com/lifestyle/jealousy-management"
      />

      <div className="relative min-h-screen">
        <ParticlesBackground />
        <Header />
        <Breadcrumbs />
        
        <main className="relative z-10 pt-32 pb-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                Jealousy Management Guide
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Practical tools and emotional strategies for managing jealousy in open relationships, swinging, and polyamory. Transform jealousy into growth.
              </p>
            </div>

            <section className="mb-16">
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 md:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">Understanding Jealousy</h2>
                </div>
                <div className="space-y-6 text-muted-foreground">
                  <p className="text-lg leading-relaxed">
                    Jealousy is a normal human emotion, even in consensual non-monogamy. Experiencing jealousy doesn't mean you're doing anything wrong or that ENM isn't for you. Learning to process and manage jealousy is a skill that strengthens over time.
                  </p>
                </div>
              </div>
            </section>

            <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl p-8 md:p-12 border border-primary/30 text-center">
              <h2 className="text-3xl font-bold mb-4">Connect with Emotionally Aware Partners</h2>
              <p className="text-lg text-muted-foreground mb-6">
                SPICE members understand jealousy management and prioritize communication
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

export default JealousyManagement;