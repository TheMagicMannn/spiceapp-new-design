import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { Check, X, Minus, Crown, ChevronRight, Star, Shield, DollarSign, Smartphone, Sparkles } from "lucide-react";
import ParticlesBackground from "@/components/ParticlesBackground";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";

type FeatureStatus = "yes" | "no" | "partial" | "coming";

interface Feature {
  name: string;
  spice: FeatureStatus;
  feeld: FeatureStatus;
  threefun: FeatureStatus;
  tinder: FeatureStatus;
  sdc: FeatureStatus;
  beedoo: FeatureStatus;
}

const features: Feature[] = [
  { name: "100% Photo Verification", spice: "yes", feeld: "partial", threefun: "no", tinder: "partial", sdc: "no", beedoo: "no" },
  { name: "LGBTQ+ Inclusive", spice: "yes", feeld: "yes", threefun: "partial", tinder: "partial", sdc: "partial", beedoo: "yes" },
  { name: "Couples Matching", spice: "yes", feeld: "yes", threefun: "yes", tinder: "no", sdc: "yes", beedoo: "yes" },
  { name: "Partner Linking with Relationship Type", spice: "yes", feeld: "partial", threefun: "partial", tinder: "no", sdc: "partial", beedoo: "partial" },
  { name: "Couple Profile Verification (Both Partners)", spice: "yes", feeld: "no", threefun: "no", tinder: "no", sdc: "partial", beedoo: "no" },
  { name: "Polyamorous Lifestyle Support", spice: "yes", feeld: "yes", threefun: "partial", tinder: "no", sdc: "partial", beedoo: "partial" },
  { name: "BDSM Quiz & Compatibility", spice: "yes", feeld: "partial", threefun: "no", tinder: "no", sdc: "no", beedoo: "partial" },
  { name: "Learning Modules & Education", spice: "yes", feeld: "no", threefun: "no", tinder: "no", sdc: "no", beedoo: "no" },
  { name: "Hyper Match AI Engine", spice: "yes", feeld: "no", threefun: "no", tinder: "partial", sdc: "no", beedoo: "no" },
  { name: "Advanced Match Filters", spice: "yes", feeld: "partial", threefun: "partial", tinder: "partial", sdc: "yes", beedoo: "partial" },
  { name: "Couples Activity Log Dashboard", spice: "yes", feeld: "no", threefun: "no", tinder: "no", sdc: "partial", beedoo: "no" },
  { name: "ISO Local User Posts", spice: "yes", feeld: "no", threefun: "no", tinder: "no", sdc: "yes", beedoo: "no" },
  { name: "Community Forum with Groups", spice: "yes", feeld: "no", threefun: "partial", tinder: "no", sdc: "yes", beedoo: "partial" },
  { name: "User Feedback & Validations", spice: "yes", feeld: "partial", threefun: "no", tinder: "no", sdc: "partial", beedoo: "no" },
  { name: "200+ Desire Tags", spice: "yes", feeld: "partial", threefun: "partial", tinder: "no", sdc: "partial", beedoo: "partial" },
  { name: "Event Integration", spice: "coming", feeld: "no", threefun: "no", tinder: "no", sdc: "yes", beedoo: "no" },
  { name: "Privacy Controls", spice: "yes", feeld: "partial", threefun: "partial", tinder: "partial", sdc: "yes", beedoo: "partial" },
  { name: "Community Verified", spice: "yes", feeld: "no", threefun: "no", tinder: "no", sdc: "partial", beedoo: "no" },
  { name: "No Fake Profiles", spice: "yes", feeld: "partial", threefun: "no", tinder: "no", sdc: "partial", beedoo: "partial" },
  { name: "Free Messaging", spice: "yes", feeld: "no", threefun: "no", tinder: "no", sdc: "no", beedoo: "partial" },
  { name: "Group Chats", spice: "yes", feeld: "no", threefun: "yes", tinder: "no", sdc: "yes", beedoo: "yes" },
  { name: "Travel Mode", spice: "coming", feeld: "yes", threefun: "no", tinder: "yes", sdc: "yes", beedoo: "no" },
  { name: "Anonymous Browsing", spice: "yes", feeld: "partial", threefun: "partial", tinder: "no", sdc: "yes", beedoo: "partial" },
];

const apps = [
  { key: "spice", name: "SPICE", highlight: true },
  { key: "feeld", name: "Feeld", highlight: false },
  { key: "threefun", name: "3Fun", highlight: false },
  { key: "tinder", name: "Tinder", highlight: false },
  { key: "sdc", name: "SDC", highlight: false },
  { key: "beedoo", name: "Beedoo", highlight: false },
];

const StatusIcon = ({ status }: { status: FeatureStatus }) => {
  switch (status) {
    case "yes":
      return (
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center"
        >
          <Check className="w-5 h-5 text-green-400" />
        </motion.div>
      );
    case "no":
      return (
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center"
        >
          <X className="w-5 h-5 text-red-400" />
        </motion.div>
      );
    case "partial":
      return (
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center"
        >
          <Minus className="w-5 h-5 text-yellow-400" />
        </motion.div>
      );
    case "coming":
      return (
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className="px-2 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium"
        >
          Soon
        </motion.div>
      );
  }
};

const SpiceApp = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "SPICE App Features Comparison",
    "description": "Compare SPICE dating app features with Feeld, 3Fun, Tinder, SDC, and Beedoo for swingers, BDSM, and ENM communities.",
    "mainEntity": {
      "@type": "Table",
      "about": "Dating app feature comparison for alternative lifestyle communities"
    }
  };

  return (
    <div className="relative min-h-screen">
      <SEO
        title="SPICE vs Feeld, 3Fun, Tinder — Best Swingers Dating App Comparison"
        description="Compare SPICE with Feeld, 3Fun, Tinder, SDC, and Beedoo. See why SPICE offers 100% photo verification, BDSM compatibility quiz, couples matching, polyamorous support, 200+ desire tags, and more features for the lifestyle community."
        keywords="SPICE vs Feeld, SPICE vs 3Fun, best swingers dating app, BDSM dating app comparison, lifestyle app reviews, alternative lifestyle dating comparison, couples dating app features, verified adult dating comparison, ENM dating app features, kink-friendly dating apps"
        canonical="https://thespiceapp.com/spice-app"
        structuredData={structuredData}
      />
      <ParticlesBackground />
      <Header />
      <Breadcrumbs />
      <main className="relative z-10 pt-32 pb-12">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Why Choose <span className="text-gradient">SPICE</span>?
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              See how SPICE compares to other dating apps. We're building the most
              inclusive, verified, and feature-rich platform for the lifestyle community.
            </p>
          </motion.div>

          {/* Comparison Matrix */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="glass-card rounded-2xl overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px]">
                <thead>
                  <tr className="border-b border-border/50">
                    <th className="p-4 text-left text-muted-foreground font-medium">
                      Features
                    </th>
                    {apps.map((app, index) => (
                      <motion.th
                        key={app.key}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 * index }}
                        className={`p-4 text-center ${
                          app.highlight
                            ? "bg-primary/10 text-primary font-bold text-lg"
                            : "text-foreground font-medium"
                        }`}
                      >
                        {app.name}
                      </motion.th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {features.map((feature, rowIndex) => (
                    <motion.tr
                      key={feature.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * rowIndex }}
                      viewport={{ once: true }}
                      className="border-b border-border/30 hover:bg-muted/20 transition-colors"
                    >
                      <td className="p-4 font-medium">{feature.name}</td>
                      <td className="p-4 text-center bg-primary/5">
                        <div className="flex justify-center">
                          <StatusIcon status={feature.spice} />
                        </div>
                      </td>
                      <td className="p-4 text-center">
                        <div className="flex justify-center">
                          <StatusIcon status={feature.feeld} />
                        </div>
                      </td>
                      <td className="p-4 text-center">
                        <div className="flex justify-center">
                          <StatusIcon status={feature.threefun} />
                        </div>
                      </td>
                      <td className="p-4 text-center">
                        <div className="flex justify-center">
                          <StatusIcon status={feature.tinder} />
                        </div>
                      </td>
                      <td className="p-4 text-center">
                        <div className="flex justify-center">
                          <StatusIcon status={feature.sdc} />
                        </div>
                      </td>
                      <td className="p-4 text-center">
                        <div className="flex justify-center">
                          <StatusIcon status={feature.beedoo} />
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Legend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6 mt-8"
          >
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                <Check className="w-4 h-4 text-green-400" />
              </div>
              <span className="text-sm text-muted-foreground">Full Support</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center">
                <Minus className="w-4 h-4 text-yellow-400" />
              </div>
              <span className="text-sm text-muted-foreground">Partial Support</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center">
                <X className="w-4 h-4 text-red-400" />
              </div>
              <span className="text-sm text-muted-foreground">Not Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="px-2 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                Soon
              </div>
              <span className="text-sm text-muted-foreground">Coming Soon</span>
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to experience the <span className="text-gradient">difference</span>?
            </h2>
            <p className="text-muted-foreground mb-8">
              Join thousands waiting for the launch of SPICE.
            </p>
          </motion.div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
};

export default SpiceApp;
