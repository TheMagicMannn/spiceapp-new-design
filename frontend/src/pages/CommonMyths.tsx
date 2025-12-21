import { AlertCircle, CheckCircle, XCircle, Heart, Users, Shield } from "lucide-react";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";

const CommonMyths = () => {
  const myths = [
    {
      myth: "Swingers have unhappy marriages",
      reality: "Studies show lifestyle couples often have STRONGER marriages. Swinging requires exceptional communication, trust, and honesty - skills that strengthen relationships. Many couples credit swinging with saving their marriages by adding excitement and improving communication."
    },
    {
      myth: "It's just an excuse to cheat",
      reality: "Swinging is the OPPOSITE of cheating! Both partners know, consent, and usually participate together. Cheating involves secrecy and betrayal. Swinging involves honesty and shared experiences. They couldn't be more different."
    },
    {
      myth: "Only attractive young people swing",
      reality: "The lifestyle community includes ALL body types, ages (21-70+), and attractiveness levels. What matters is confidence, respect, and good hygiene - not looking like a model. Many report the lifestyle helped them love their bodies more."
    },
    {
      myth: "Swinging will ruin your relationship",
      reality: "Swinging doesn't ruin healthy relationships - it reveals existing problems. If your relationship has poor communication, insecurity, or trust issues, swinging will expose them. But if you have a strong foundation, swinging can enhance your bond significantly."
    },
    {
      myth: "Once you start, you can't stop",
      reality: "Many couples try swinging and decide it's not for them - that's completely fine! Others take breaks for months or years. The lifestyle isn't addictive; it's just one option for sexual expression that you can engage with or leave at any time."
    },
    {
      myth: "Lifestyle people are promiscuous and risky",
      reality: "Lifestyle communities actually tend to be MORE cautious about sexual health than the general population. Regular STI testing, condom use, and honest communication are standard. Many lifestyle people are safer than those engaging in serial monogamy with poor testing habits."
    }
  ];

  return (
    <>
      <SEO
        title="Common Lifestyle Myths Debunked: Swinging, BDSM & ENM Misconceptions | SPICE"
        description="Debunking myths about swinging, polyamory, BDSM, and lifestyle dating. Separate fact from fiction with research-backed realities."
        keywords="swinging myths, polyamory misconceptions, lifestyle myths debunked, swinger stereotypes, BDSM myths, ENM misconceptions"
        canonical="https://thespiceapp.com/start/myths"
      />

      <div className="relative min-h-screen">
        <ParticlesBackground />
        <Header />
        <Breadcrumbs />
        
        <main className="relative z-10 pt-32 pb-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                Common Lifestyle Myths Debunked
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Separating fact from fiction about swinging, polyamory, BDSM, and lifestyle dating. Let's bust these misconceptions with research and reality.
              </p>
            </div>

            <div className="space-y-8 mb-16">
              {myths.map((item, index) => (
                <div key={index} className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <XCircle className="w-8 h-8 text-red-500 flex-shrink-0" />
                    <h2 className="text-2xl font-bold text-red-400">Myth: {item.myth}</h2>
                  </div>
                  <div className="flex items-start gap-4 ml-12">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-green-400 mb-2">Reality:</p>
                      <p className="text-muted-foreground leading-relaxed">{item.reality}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl p-8 md:p-12 border border-primary/30 text-center">
              <h2 className="text-3xl font-bold mb-4">Discover the Reality</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Join SPICE and see the lifestyle community for yourself - welcoming, respectful, and diverse.
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

export default CommonMyths;