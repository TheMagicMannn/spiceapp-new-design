import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import { Linkedin, Twitter, Globe } from "lucide-react";
import ParticlesBackground from "@/components/ParticlesBackground";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import kyleWitterImage from "@/assets/kyle-witter.png";

const teamMembers = [
  {
    name: "Kyle Witter",
    role: "Founder & CEO",
    bio: "Visionary entrepreneur and creative force behind SPICE. Kyle single-handedly designed, developed, and launched the entire platform from concept to reality. With an unwavering passion for building inclusive communities and a relentless drive to innovate, he transformed his vision of a safer, more authentic lifestyle app into existence. A true builder at heart, Kyle embodies the spirit of turning bold ideas into meaningful connections.",
    image: kyleWitterImage,
    gradient: "from-primary to-pink-500",
  },
  {
    name: "Jordan Chen",
    role: "CTO & Co-Founder",
    bio: "Ex-Google engineer passionate about privacy-first technology and secure platforms.",
    avatar: "💡",
    gradient: "from-purple-500 to-violet-500",
  },
  {
    name: "Sam Taylor",
    role: "Head of Community",
    bio: "Community builder dedicated to creating safe, welcoming environments for all.",
    avatar: "💜",
    gradient: "from-fuchsia-500 to-pink-500",
  },
  {
    name: "Morgan Blake",
    role: "Head of Design",
    bio: "Award-winning designer focused on creating beautiful, intuitive experiences.",
    avatar: "✨",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    name: "Casey Kim",
    role: "Head of Trust & Safety",
    bio: "Expert in platform safety with a mission to eliminate fake profiles and harassment.",
    avatar: "🛡️",
    gradient: "from-rose-500 to-pink-500",
  },
  {
    name: "Riley Morgan",
    role: "Head of Product",
    bio: "Product visionary bringing community feedback to life with innovative features.",
    avatar: "🚀",
    gradient: "from-pink-500 to-fuchsia-500",
  },
];

const Team = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "SPICE Team",
    "description": "Meet the team behind SPICE dating app"
  };

  return (
    <div className="relative min-h-screen">
      <SEO
        title="Meet the SPICE Team — Leadership Behind the Lifestyle Dating App"
        description="Meet the passionate team behind SPICE dating app. Learn about our founders, engineers, designers, and community leaders building the premier platform for swingers, BDSM, ENM, and lifestyle dating. Dedicated to privacy, verification, and authentic connections."
        keywords="SPICE team, SPICE founders, dating app leadership, Kyle Witter, lifestyle app creators, SPICE leadership team, adult dating app team, BDSM app developers"
        canonical="https://thespiceapp.com/team"
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
              Meet the <span className="text-gradient">Team</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate individuals building the future of authentic, inclusive connections.
            </p>
          </motion.div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-card rounded-2xl overflow-hidden group"
              >
                {/* Avatar/Image */}
                <div className={`h-64 bg-gradient-to-br ${member.gradient} flex items-center justify-center relative overflow-hidden`}>
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-8xl">{member.avatar}</div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>

                  {/* Social Links (placeholder) */}
                  <div className="flex gap-3 mt-6">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-primary/10 transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-primary/10 transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-primary/10 transition-colors"
                    >
                      <Globe className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <div className="glass-card rounded-2xl p-8 md:p-12 max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">
                Want to <span className="text-gradient">Join Us</span>?
              </h2>
              <p className="text-muted-foreground mb-6">
                We're always looking for talented individuals who share our vision of
                building authentic, inclusive connections.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
};

export default Team;
