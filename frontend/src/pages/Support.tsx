import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";
import { 
  HelpCircle, 
  MessageCircle, 
  Mail, 
  Book, 
  Shield, 
  AlertTriangle,
  FileText,
  Zap,
  Users,
  ChevronRight,
  Search,
  ExternalLink
} from "lucide-react";

const Support = () => {
  const supportOptions = [
    {
      icon: Book,
      title: "Knowledge Base",
      description: "Browse our comprehensive guides, FAQs, and tutorials to find answers to common questions.",
      link: "/support/help",
      linkText: "Visit Help Center",
      color: "blue"
    },
    {
      icon: MessageCircle,
      title: "Contact Support",
      description: "Get in touch with our support team for personalized assistance with your account or questions.",
      link: "/contact",
      linkText: "Send a Message",
      color: "green"
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Prefer email? Reach out directly and we'll respond within 24-48 hours.",
      link: "mailto:support@thespiceapp.com",
      linkText: "support@thespiceapp.com",
      color: "purple",
      external: true
    },
    {
      icon: Zap,
      title: "Technical Resources",
      description: "API documentation, integration guides, and technical support for developers.",
      link: "/support/technical",
      linkText: "View Resources",
      color: "amber"
    }
  ];

  const quickLinks = [
    { icon: HelpCircle, title: "Getting Started Guide", link: "/guide/newcomers" },
    { icon: Shield, title: "Safety & Privacy", link: "/guide/safety" },
    { icon: Users, title: "Community Standards", link: "/legal/community-standards" },
    { icon: FileText, title: "Terms of Service", link: "/legal/terms" },
    { icon: AlertTriangle, title: "Report an Issue", link: "/support/report" },
    { icon: Book, title: "Glossary of Terms", link: "/guide/glossary" },
  ];

  const faqs = [
    {
      question: "How do I create an account?",
      answer: "Download the SPICE app from your app store and follow the registration process. You'll need to verify your email and complete your profile."
    },
    {
      question: "Is my information private and secure?",
      answer: "Yes! We use industry-standard encryption and never share your personal data. Read our Privacy Policy for complete details."
    },
    {
      question: "How does the matching algorithm work?",
      answer: "Our AI-powered matching considers your preferences, desires, and compatibility factors to suggest connections that align with your lifestyle."
    },
    {
      question: "What should I do if I encounter inappropriate behavior?",
      answer: "Use the in-app report feature or contact our support team. We take all reports seriously and investigate promptly."
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; text: string; icon: string }> = {
      blue: { bg: "bg-blue-500/10", border: "border-blue-500/30", text: "text-blue-400", icon: "text-blue-500" },
      green: { bg: "bg-green-500/10", border: "border-green-500/30", text: "text-green-400", icon: "text-green-500" },
      purple: { bg: "bg-purple-500/10", border: "border-purple-500/30", text: "text-purple-400", icon: "text-purple-500" },
      amber: { bg: "bg-amber-500/10", border: "border-amber-500/30", text: "text-amber-400", icon: "text-amber-500" },
    };
    return colors[color] || colors.blue;
  };

  return (
    <>
      <SEO
        title="Support Center | SPICE - Get Help & Resources"
        description="Get help with SPICE. Access our knowledge base, contact support, find technical resources, and browse FAQs for the lifestyle community."
        keywords="SPICE support, help center, contact support, lifestyle app help, SPICE FAQ, technical support"
        canonical="https://thespiceapp.com/support"
      />

      <div className="relative min-h-screen">
        <ParticlesBackground />
        <Header />
        <Breadcrumbs />

        <main className="relative z-10 pt-32 pb-12">
          <div className="container mx-auto px-4">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
                <HelpCircle className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Support Center</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                How Can We Help You?
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Find answers, get support, and access resources to make the most of your SPICE experience.
              </p>

              {/* Search Bar */}
              <div className="max-w-xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search for help articles..."
                    className="w-full pl-12 pr-4 py-4 bg-card/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
              </div>
            </div>

            {/* Support Options Grid */}
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
              {supportOptions.map((option) => {
                const colors = getColorClasses(option.color);
                const Icon = option.icon;
                
                return (
                  <div
                    key={option.title}
                    className={`${colors.bg} border ${colors.border} rounded-2xl p-6 hover:scale-[1.02] transition-transform`}
                  >
                    <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-4`}>
                      <Icon className={`w-6 h-6 ${colors.icon}`} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{option.title}</h3>
                    <p className="text-muted-foreground mb-4">{option.description}</p>
                    {option.external ? (
                      <a
                        href={option.link}
                        className={`inline-flex items-center gap-2 ${colors.text} hover:underline font-medium`}
                      >
                        {option.linkText}
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : (
                      <Link
                        to={option.link}
                        className={`inline-flex items-center gap-2 ${colors.text} hover:underline font-medium`}
                      >
                        {option.linkText}
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Quick Links */}
            <div className="max-w-4xl mx-auto mb-16">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Quick Links</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {quickLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.title}
                      to={item.link}
                      className="flex items-center gap-3 p-4 bg-card/50 border border-border rounded-xl hover:border-primary/50 transition-colors"
                    >
                      <Icon className="w-5 h-5 text-primary" />
                      <span className="text-sm text-white">{item.title}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* FAQs Section */}
            <div className="max-w-3xl mx-auto mb-16">
              <h2 className="text-2xl font-bold text-white mb-6 text-center">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-card/50 border border-border rounded-xl p-6"
                  >
                    <h3 className="font-bold text-white mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
              <div className="text-center mt-6">
                <Link
                  to="/faq"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  View All FAQs
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="max-w-3xl mx-auto">
              <div className="bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-pink-500/20 border border-pink-500/30 rounded-2xl p-8 text-center">
                <h2 className="text-2xl font-bold text-white mb-4">Still Need Help?</h2>
                <p className="text-muted-foreground mb-6">
                  Our support team is here to help you with any questions or concerns. We typically respond within 24 hours.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl font-medium transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Contact Support
                  </Link>
                  <a
                    href="mailto:support@thespiceapp.com"
                    className="inline-flex items-center justify-center gap-2 bg-card border border-border hover:border-primary/50 text-white px-6 py-3 rounded-xl font-medium transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>

        <FooterSection />
      </div>
    </>
  );
};

export default Support;
