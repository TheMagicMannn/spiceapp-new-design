import { Shield, CheckCircle, AlertTriangle, Lock, Eye } from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";

const BlogBDSMSafety = () => {
  const safetyItems = [
    { title: "Negotiate Before Playing", desc: "Discuss activities, limits, safe words, and aftercare BEFORE any BDSM scene. Never wing it." },
    { title: "Use Safe Words", desc: "Traffic light system (red/yellow/green) or specific words. Practice using them before intense play." },
    { title: "Know Anatomy & Risk", desc: "Learn where it's safe to hit, tie, or apply sensation. Kidneys, neck, and spine are off-limits for impact." },
    { title: "Start Slow, Build Intensity", desc: "Begin gentle and increase gradually. You can always add more - you can't undo going too far." },
    { title: "Never Play Drunk/High", desc: "BDSM requires judgment, coordination, and consent ability. Substances and kink don't mix." },
    { title: "Have Safety Shears", desc: "For bondage - keep EMT shears nearby to cut rope/restraints in emergencies." },
    { title: "Check In Frequently", desc: "Ask 'Color?' during scenes. Monitor breathing, skin color, circulation if using bondage." },
    { title: "Provide Aftercare", desc: "Physical and emotional care after intense scenes. Cuddle, hydrate, process emotions." },
  ];

  return (
    <>
      <SEO
        title="BDSM Safety Checklist for Beginners: Essential Kink Safety Guide"
        description="Complete BDSM safety checklist: Negotiation, safe words, anatomy, risk awareness, and aftercare. Essential guide for kink beginners."
        keywords="BDSM safety checklist, kink safety, BDSM for beginners, safe words, BDSM negotiation, kink safety guide, bondage safety"
        canonical="https://thespiceapp.com/blog/bdsm-safety-checklist"
      />

      <div className="relative min-h-screen">
        <ParticlesBackground />
        <Header />
        <Breadcrumbs />
        
        <main className="relative z-10 pt-32 pb-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="mb-8">
              <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">BDSM & Kink</span>
              <span className="text-xs text-muted-foreground ml-3">10 min read</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
              BDSM Safety Checklist for Beginners
            </h1>
            
            <p className="text-lg text-muted-foreground mb-12">
              BDSM can be incredibly rewarding when done safely. This essential checklist covers everything beginners need to know about safe, consensual kink exploration.
            </p>

            <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 mb-12">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-red-400 mb-2">Safety First, Always</h3>
                  <p className="text-sm text-muted-foreground">
                    BDSM involves risk. Following safety protocols isn't optional - it's what separates consensual kink from abuse. Never compromise on safety.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6 mb-16">
              {safetyItems.map((item, index) => (
                <div key={index} className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl p-8 border border-primary/30 text-center mb-12">
              <h2 className="text-2xl font-bold mb-4">Discover Your BDSM Compatibility</h2>
              <p className="text-muted-foreground mb-6">
                Take SPICE's comprehensive BDSM quiz to understand your preferences and find compatible partners
              </p>
              <a href="/quiz" className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all">
                Take BDSM Quiz Free
              </a>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8">
              <h2 className="text-xl font-bold mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <a href="/guide/community" className="text-primary hover:underline">→ BDSM & Kink Dynamics</a>
                <a href="/start/consent-basics" className="text-primary hover:underline">→ Consent Basics</a>
                <a href="/guide/safety" className="text-primary hover:underline">→ Safety Resources</a>
                <a href="/quiz" className="text-primary hover:underline">→ BDSM Compatibility Quiz</a>
              </div>
            </div>
          </div>
        </main>

        <FooterSection />
      </div>
    </>
  );
};

export default BlogBDSMSafety;