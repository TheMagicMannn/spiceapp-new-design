import { MessageCircle, Heart, Users, AlertCircle, CheckCircle } from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";

const BlogTalkToPartner = () => {
  return (
    <>
      <SEO
        title="How to Talk to Your Partner About Opening Your Relationship | SPICE"
        description="Step-by-step guide to having 'the talk' about ENM, polyamory, or swinging. Communication strategies that work for discussing open relationships."
        keywords="talk to partner about opening relationship, discuss polyamory with partner, how to bring up swinging, ENM conversation, open relationship talk"
        canonical="https://thespiceapp.com/blog/talk-partner-opening-relationship"
      />

      <div className="relative min-h-screen">
        <ParticlesBackground />
        <Header />
        <Breadcrumbs />
        
        <main className="relative z-10 pt-32 pb-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="mb-8">
              <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">Relationships</span>
              <span className="text-xs text-muted-foreground ml-3">12 min read</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
              How to Talk to Your Partner About Opening Your Relationship
            </h1>
            
            <p className="text-lg text-muted-foreground mb-12">
              Bringing up non-monogamy, swinging, or polyamory can feel terrifying. This guide provides a step-by-step approach to having "the talk" with communication strategies that work.
            </p>

            <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6 mb-12">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-red-400 mb-2">Before You Start:</h3>
                  <p className="text-sm text-muted-foreground">
                    If your relationship has serious issues (cheating, poor communication, trust problems), address those FIRST. Opening a broken relationship will make things worse, not better.
                  </p>
                </div>
              </div>
            </div>

            <section className="mb-16">
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 md:p-12">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Step-by-Step Conversation Guide</h2>
                
                <div className="space-y-6">
                  {[
                    { step: 1, title: "Choose the Right Time", content: "Don't bring this up during an argument, right before bed, or when stressed. Choose a calm, private time when you can talk for hours if needed. Maybe over dinner at home or during a weekend walk." },
                    { step: 2, title: "Start with Curiosity", content: "Don't demand or assume. Try: 'I've been curious about something and I'd love to hear your thoughts...' or 'Have you ever wondered what it would be like to...'" },
                    { step: 3, title: "Share Your Why", content: "Explain what appeals to you. Is it variety? Compersion? Exploring fantasies together? Be specific about your motivations." },
                    { step: 4, title: "Listen More Than Talk", content: "After sharing, LISTEN. Your partner may need time to process. They might be excited, scared, confused, or all three. Let them express fully." },
                    { step: 5, title: "Address Fears Head-On", content: "Common fears: 'You're not satisfied with me,' 'You'll leave me,' 'I'm not enough.' Reassure and address each fear specifically and honestly." },
                    { step: 6, title: "Take It Slow", content: "Don't push for immediate decisions. Give your partner time to think, research, and process. This is a marathon, not a sprint." },
                  ].map((item) => (
                    <div key={item.step} className="border border-border/50 rounded-lg p-6 bg-background/50">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/20 text-primary rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold">
                          {item.step}
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl p-8 border border-primary/30 text-center mb-12">
              <h2 className="text-2xl font-bold mb-4">Connect with Couples Who've Been There</h2>
              <p className="text-muted-foreground mb-6">
                Join SPICE to talk with experienced lifestyle couples who can offer advice and support
              </p>
              <a href="/download" className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all">
                Download SPICE Free
              </a>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8">
              <h2 className="text-xl font-bold mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <a href="/lifestyle/relationships-communication" className="text-primary hover:underline">→ Relationships & Communication Guide</a>
                <a href="/lifestyle/jealousy-management" className="text-primary hover:underline">→ Managing Jealousy</a>
                <a href="/lifestyle/swingers-guide" className="text-primary hover:underline">→ Complete Swingers Guide</a>
                <a href="/guide/newcomers" className="text-primary hover:underline">→ Beginner's Guide</a>
              </div>
            </div>
          </div>
        </main>

        <FooterSection />
      </div>
    </>
  );
};

export default BlogPost10Signs;