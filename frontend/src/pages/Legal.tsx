import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Scale, Shield, Lock, Cookie, FileText, ChevronRight } from "lucide-react";

const Legal = () => {
  const legalSections = [
    {
      title: "Terms of Service",
      description: "The rules and guidelines that govern your use of the SPICE platform, including eligibility, account registration, payment terms, and user responsibilities.",
      icon: FileText,
      link: "/legal/terms",
      updated: "December 20, 2025"
    },
    {
      title: "Privacy Policy",
      description: "How we collect, use, store, and protect your personal information. Includes your rights regarding your data and our GDPR compliance measures.",
      icon: Lock,
      link: "/legal/privacy",
      updated: "December 20, 2025"
    },
    {
      title: "Community Standards",
      description: "Our guidelines for acceptable content and behavior on SPICE. Learn about profile requirements, prohibited conduct, and how we enforce these standards.",
      icon: Shield,
      link: "/legal/community-standards",
      updated: "December 20, 2025"
    },
    {
      title: "Cookie Policy",
      description: "Information about the cookies and similar technologies we use, including how to manage your preferences and opt-out options.",
      icon: Cookie,
      link: "/legal/cookies",
      updated: "December 20, 2025"
    }
  ];

  return (
    <>
      <SEO
        title="Legal | SPICE Dating App"
        description="Access SPICE's legal documents including Terms of Service, Privacy Policy, Community Standards, and Cookie Policy. Understand your rights and our policies."
        keywords="SPICE legal, terms of service, privacy policy, community standards, cookie policy, dating app legal"
        canonical="https://thespiceapp.com/legal"
      />

      <div className="relative min-h-screen">
        <ParticlesBackground />
        <Header />
        <Breadcrumbs />
        
        <main className="relative z-10 pt-32 pb-12">
          <div className="container mx-auto px-4 max-w-5xl">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Scale className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Legal Information</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                Legal Center
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Access all of SPICE's legal documents and policies. We're committed to transparency and protecting your rights as a member of our community.
              </p>
            </div>

            {/* Legal Sections Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {legalSections.map((section, index) => {
                const Icon = section.icon;
                return (
                  <Link
                    key={index}
                    to={section.link}
                    className="group bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 hover:border-primary/50 hover:bg-card/70 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h2 className="text-xl font-bold group-hover:text-primary transition-colors">
                            {section.title}
                          </h2>
                          <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                        </div>
                        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                          {section.description}
                        </p>
                        <p className="text-xs text-muted-foreground/70">
                          Last updated: {section.updated}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Additional Info */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 mb-8">
              <h2 className="text-xl font-bold mb-4">About Our Policies</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  At SPICE, we believe in transparency and your right to understand how we operate. Our legal documents are written to be as clear and accessible as possible while still providing the necessary legal protections for both you and our platform.
                </p>
                <p>
                  We regularly review and update our policies to ensure they reflect current practices and comply with applicable laws. When we make significant changes, we'll notify you via email or through a prominent notice on our platform.
                </p>
                <p>
                  By using SPICE, you agree to our Terms of Service and acknowledge our Privacy Policy. We encourage you to read these documents carefully and reach out if you have any questions.
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 mb-8">
              <h2 className="text-xl font-bold mb-4">Quick Links</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-3 text-primary">For Users</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>
                      <Link to="/legal/privacy#your-rights" className="hover:text-primary transition-colors">
                        → Your Privacy Rights
                      </Link>
                    </li>
                    <li>
                      <Link to="/legal/terms#payment-terms" className="hover:text-primary transition-colors">
                        → Payment & Subscription Terms
                      </Link>
                    </li>
                    <li>
                      <Link to="/legal/community-standards" className="hover:text-primary transition-colors">
                        → Profile & Content Guidelines
                      </Link>
                    </li>
                    <li>
                      <Link to="/legal/cookies" className="hover:text-primary transition-colors">
                        → Manage Cookie Preferences
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 text-primary">Contact & Support</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>
                      <span className="block">Data Protection Officer:</span>
                      <a href="mailto:privacy@thespiceapp.com" className="text-primary hover:underline">
                        privacy@thespiceapp.com
                      </a>
                    </li>
                    <li>
                      <span className="block">General Legal Inquiries:</span>
                      <a href="mailto:legal@thespiceapp.com" className="text-primary hover:underline">
                        legal@thespiceapp.com
                      </a>
                    </li>
                    <li>
                      <Link to="/contact" className="hover:text-primary transition-colors">
                        → Contact Support
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl p-8 border border-primary/30 text-center">
              <Scale className="w-10 h-10 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Have Questions?</h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                If you have any questions about our legal policies or need clarification on any terms, our team is here to help.
              </p>
              <a 
                href="mailto:legal@thespiceapp.com" 
                className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all"
              >
                Contact Legal Team
              </a>
            </div>
          </div>
        </main>

        <FooterSection />
      </div>
    </>
  );
};

export default Legal;
