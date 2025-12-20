import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Construction } from "lucide-react";

const ComingSoon = ({ title, description, keywords, canonical }: { title: string; description: string; keywords: string; canonical: string }) => {
  return (
    <>
      <SEO
        title={title}
        description={description}
        keywords={keywords}
        canonical={canonical}
      />

      <div className="relative min-h-screen">
        <ParticlesBackground />
        <Header />
        <Breadcrumbs />
        
        <main className="relative z-10 pt-32 pb-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <div className="flex justify-center mb-6">
                <Construction className="w-16 h-16 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                {title}
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                {description}
              </p>
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8">
                <h2 className="text-xl font-bold mb-4">Coming Soon!</h2>
                <p className="text-muted-foreground mb-6">
                  This comprehensive guide is currently being developed. Join our waitlist to be notified when it launches.
                </p>
                <a
                  href="/download"
                  className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all"
                >
                  Join Waitlist
                </a>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <a href="/guide/newcomers" className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all">
                <h3 className="font-bold text-primary mb-2">Beginner Guides</h3>
                <p className="text-sm text-muted-foreground">Start your lifestyle journey</p>
              </a>
              <a href="/blog" className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all">
                <h3 className="font-bold text-primary mb-2">Blog</h3>
                <p className="text-sm text-muted-foreground">Latest lifestyle articles</p>
              </a>
              <a href="/faq" className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all">
                <h3 className="font-bold text-primary mb-2">FAQ</h3>
                <p className="text-sm text-muted-foreground">Common questions answered</p>
              </a>
            </div>
          </div>
        </main>

        <FooterSection />
      </div>
    </>
  );
};

export default ComingSoon;