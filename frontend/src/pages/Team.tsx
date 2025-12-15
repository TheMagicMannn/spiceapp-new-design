import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
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
  return (
    <div className="relative min-h-screen">
      <Helmet>
        <title>Meet the SPICE Team — Leadership Behind Your Dating App</title>
        <meta name="description" content="Meet the passionate team behind SPICE. Our diverse leadership is dedicated to building the safest, most inclusive dating platform for lifestyle communities." />
        <link rel="canonical" href="https://thespiceapp.com/team" />
      </Helmet>
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
              Meet the <span className="text-gradient">Team</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              We're a passionate group of individuals united by our commitment to
              creating the best platform for the lifestyle community.
            </p>
          </motion.div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="glass-card rounded-2xl p-6 group"
              >
                {/* Avatar/Photo */}
                {member.image ? (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-28 h-28 rounded-2xl overflow-hidden mb-6 mx-auto shadow-lg ring-2 ring-primary/30"
                  >
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-4xl mb-6 mx-auto shadow-lg`}
                  >
                    {member.avatar}
                  </motion.div>
                )}

                {/* Info */}
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>

                  {/* Social Links */}
                  <div className="flex justify-center gap-3">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-9 h-9 rounded-full bg-muted/50 flex items-center justify-center hover:bg-primary/20 transition-colors"
                    >
                      <Linkedin className="w-4 h-4 text-muted-foreground" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-9 h-9 rounded-full bg-muted/50 flex items-center justify-center hover:bg-primary/20 transition-colors"
                    >
                      <Twitter className="w-4 h-4 text-muted-foreground" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-9 h-9 rounded-full bg-muted/50 flex items-center justify-center hover:bg-primary/20 transition-colors"
                    >
                      <Globe className="w-4 h-4 text-muted-foreground" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Join the Team CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />
            <div className="relative">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
                className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center text-3xl mx-auto mb-6"
              >
                🎯
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Want to <span className="text-gradient">Join Us</span>?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                We're always looking for passionate individuals who share our vision.
                If you believe in creating inclusive spaces and building amazing products,
                we'd love to hear from you.
              </p>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
                >
                  Get in Touch
                </motion.button>
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
