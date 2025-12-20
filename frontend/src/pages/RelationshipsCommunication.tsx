import { MessageCircle, Heart, Users, Shield, CheckCircle, BookOpen } from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";

const RelationshipsCommunication = () => {
  return (
    <>
      <SEO
        title="Relationship Communication Guide: Opening Up & Setting Boundaries | SPICE"
        description="Master relationship communication for swinging, ENM, and polyamory. Learn how to talk about opening up, set healthy boundaries, and strengthen your connection."
        keywords="relationship communication, open relationship talk, polyamory communication, swinging communication, setting boundaries, talking to partner ENM, opening relationship guide"
        canonical="https://thespiceapp.com/lifestyle/relationships-communication"
      />

      <div className="relative min-h-screen">
        <ParticlesBackground />
        <Header />
        <Breadcrumbs />
        
        <main className="relative z-10 pt-32 pb-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                Relationships & Communication
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Essential communication skills for opening your relationship, exploring the lifestyle, and building stronger connections through honest dialogue.
              </p>
            </div>

            <section className="mb-16">
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 md:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">How to Talk About Opening Your Relationship</h2>
                </div>
                <div className="space-y-6 text-muted-foreground">
                  <p className="text-lg leading-relaxed">
                    Bringing up non-monogamy, swinging, or polyamory with your partner can feel scary. This guide walks you through the conversation step-by-step.
                  </p>
                </div>
              </div>
            </section>

            <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl p-8 md:p-12 border border-primary/30 text-center">
              <h2 className="text-3xl font-bold mb-4">Strengthen Your Communication</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Join SPICE to connect with couples and individuals who prioritize open, honest communication
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

export default RelationshipsCommunication;