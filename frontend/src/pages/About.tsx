import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { Heart, Shield, Users, Sparkles, Target, Zap } from "lucide-react";
import ParticlesBackground from "@/components/ParticlesBackground";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import Breadcrumbs from "@/components/Breadcrumbs";

const values = [
  {
    icon: Heart,
    title: "Authentic Connections",
    description: "We believe in fostering genuine relationships built on trust, respect, and shared desires.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your privacy is sacred. We implement industry-leading security measures to protect your identity.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "SPICE is built by the community, for the community. Your feedback shapes our platform.",
  },
  {
    icon: Sparkles,
    title: "Inclusive by Design",
    description: "We celebrate all orientations, identities, and relationship styles without judgment.",
  },
  {
    icon: Target,
    title: "Verified Experience",
    description: "Every profile is verified. No bots, no fakes—just real people seeking real connections.",
  },
  {
    icon: Zap,
    title: "Innovation Forward",
    description: "We're constantly evolving with cutting-edge features that enhance your experience.",
  },
];

const stats = [
  { value: "200+", label: "Desire Tags" },
  { value: "100%", label: "Verification Rate" },
];

const About = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About SPICE Dating App",
    "description": "SPICE's mission to create an inclusive, verified, privacy-focused dating platform for swingers, BDSM, and ENM communities.",
    "mainEntity": {
      "@type": "Organization",
      "name": "SPICE",
      "description": "Premium adult lifestyle dating platform",
      "foundingDate": "2024",
      "memberOf": {
        "@type": "Thing",
        "name": "Alternative Lifestyle Community"
      }
    }
  };

  return (
    <div className="relative min-h-screen">
      <SEO
        title="About SPICE — Inclusive, Verified Dating for Swingers, BDSM & ENM"
        description="Learn about SPICE's mission to create the most inclusive, verified, and privacy-focused dating app for swingers, BDSM, ENM, and polyamorous communities. Built by the lifestyle community, for the community. 100% verification rate, 200+ desire tags."
        keywords="about SPICE dating app, lifestyle dating mission, sex-positive dating platform, inclusive adult dating, verified dating community, alternative lifestyle app, BDSM community values, ENM platform mission, privacy-focused adult dating, authentic connections dating"
        canonical="https://thespiceapp.com/about"
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
            className="text-center mb-20"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="text-gradient">SPICE</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              We're on a mission to create the most inclusive, safe, and exciting
              platform for adults exploring their desires and connections.
            </p>
          </motion.div>

          {/* Story Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center mb-20"
          >
            <div>
              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                Our <span className="text-gradient">Story</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="text-muted-foreground mb-4"
              >
                SPICE was born from frustration with existing dating platforms that
                failed to serve the lifestyle community. We saw the need for a space
                where adults could explore their desires without judgment, fake
                profiles, or privacy concerns.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="text-muted-foreground"
              >
                Built by members of the community, SPICE understands what you need.
                We're not just another dating app—we're a movement towards authentic,
                verified, and respectful connections.
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
              <div className="relative grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our <span className="text-gradient">Values</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="glass-card rounded-xl p-6 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="text-gradient">Mission</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                "To create a world where adults can freely explore their desires,
                form authentic connections, and be part of a community that celebrates
                individuality—all within a safe, verified, and judgment-free space."
              </p>
            </div>
          </motion.div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
};

export default About;
