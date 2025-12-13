import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Smartphone, Apple, Play, Bell, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const features = [
  "Verified adult community",
  "Advanced matching algorithms",
  "Secure and private messaging",
  "Event discovery nearby",
  "Compatibility quizzes",
  "Community forums",
];

const Download = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleNotifyMe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "You're on the list!",
      description: "We'll notify you when the app launches.",
    });
    setEmail("");
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Download SPICE App | iOS & Android</title>
        <meta name="description" content="Download the SPICE app for iPhone and Android. Join the premier adult dating community for swingers, BDSM enthusiasts, and ENM lifestyles." />
        <link rel="canonical" href="https://thespiceapp.com/download" />
      </Helmet>
      
      <Header />
      <Breadcrumbs />
      
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-gradient mb-6">
              <Smartphone className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">Mobile App</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6">
              <span className="text-gradient">Download SPICE</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Take your connections on the go. The SPICE app puts the entire lifestyle community 
              in your pocket.
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href="#"
                className="flex items-center gap-3 px-6 py-4 rounded-xl glass-card border-gradient hover:bg-primary/10 transition-colors group w-full sm:w-auto"
              >
                <Apple className="w-8 h-8 text-foreground" />
                <div className="text-left">
                  <div className="text-xs text-muted-foreground">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 px-6 py-4 rounded-xl glass-card border-gradient hover:bg-primary/10 transition-colors group w-full sm:w-auto"
              >
                <Play className="w-8 h-8 text-foreground" />
                <div className="text-left">
                  <div className="text-xs text-muted-foreground">Get it on</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </a>
            </div>

            {/* Coming Soon Notice */}
            <div className="glass-card rounded-2xl p-6 border-gradient bg-primary/10 max-w-lg mx-auto">
              <Bell className="w-8 h-8 text-primary mx-auto mb-4" />
              <h2 className="text-xl font-bold mb-2">Coming Soon!</h2>
              <p className="text-muted-foreground text-sm mb-4">
                Our mobile app is currently in development. Be the first to know when it launches.
              </p>
              <form onSubmit={handleNotifyMe} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                  required
                />
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "..." : "Notify Me"}
                </Button>
              </form>
            </div>
          </div>

          {/* Features */}
          <div className="glass-card rounded-2xl p-8 border-gradient mb-12">
            <h2 className="text-2xl font-bold text-center mb-8">What You'll Get</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Phone Mockup Placeholder */}
          <div className="relative">
            <div className="glass-card rounded-3xl p-8 border-gradient text-center">
              <div className="w-64 h-[500px] mx-auto bg-gradient-to-b from-primary/20 to-secondary/20 rounded-[3rem] flex items-center justify-center border-4 border-border">
                <div className="text-center">
                  <Smartphone className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">App Preview</p>
                  <p className="text-sm text-muted-foreground/60">Coming Soon</p>
                </div>
              </div>
            </div>
          </div>

          {/* QR Code Section */}
          <div className="mt-12 text-center">
            <div className="glass-card rounded-2xl p-8 border-gradient max-w-md mx-auto">
              <h3 className="text-xl font-bold mb-4">Scan to Download</h3>
              <div className="w-32 h-32 mx-auto bg-muted rounded-lg flex items-center justify-center mb-4">
                <span className="text-muted-foreground text-xs">QR Code</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Scan with your phone's camera to go directly to the app store.
              </p>
            </div>
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

export default Download;
