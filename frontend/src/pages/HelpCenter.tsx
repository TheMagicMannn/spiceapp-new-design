import { useState } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";
import { 
  Search, 
  Book, 
  Users, 
  Shield, 
  Heart, 
  Settings, 
  CreditCard,
  MessageCircle,
  ChevronRight,
  ChevronDown,
  HelpCircle,
  Smartphone,
  Lock,
  Bell,
  Camera,
  MapPin
} from "lucide-react";

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCategory, setExpandedCategory] = useState<string | null>("getting-started");

  const categories = [
    {
      id: "getting-started",
      icon: Book,
      title: "Getting Started",
      description: "New to SPICE? Start here.",
      color: "blue",
      articles: [
        { title: "Creating Your SPICE Account", slug: "creating-account" },
        { title: "Setting Up Your Profile", slug: "profile-setup" },
        { title: "Understanding the Matching System", slug: "matching-system" },
        { title: "Navigating the App", slug: "app-navigation" },
        { title: "Completing Verification", slug: "verification" },
      ]
    },
    {
      id: "profile-settings",
      icon: Settings,
      title: "Profile & Settings",
      description: "Customize your experience.",
      color: "purple",
      articles: [
        { title: "Editing Your Profile Information", slug: "edit-profile" },
        { title: "Managing Profile Photos", slug: "profile-photos" },
        { title: "Setting Your Preferences", slug: "preferences" },
        { title: "Privacy Settings Explained", slug: "privacy-settings" },
        { title: "Notification Preferences", slug: "notifications" },
      ]
    },
    {
      id: "matching-connections",
      icon: Heart,
      title: "Matching & Connections",
      description: "Find and connect with others.",
      color: "pink",
      articles: [
        { title: "How SPICE Matching Works", slug: "how-matching-works" },
        { title: "Understanding Match Scores", slug: "match-scores" },
        { title: "Sending and Receiving Messages", slug: "messaging" },
        { title: "Managing Your Connections", slug: "connections" },
        { title: "Blocking and Reporting Users", slug: "block-report" },
      ]
    },
    {
      id: "safety-privacy",
      icon: Shield,
      title: "Safety & Privacy",
      description: "Stay safe on SPICE.",
      color: "green",
      articles: [
        { title: "Our Safety Commitment", slug: "safety-commitment" },
        { title: "Protecting Your Privacy", slug: "protect-privacy" },
        { title: "Recognizing Red Flags", slug: "red-flags" },
        { title: "Safe Meeting Guidelines", slug: "safe-meetings" },
        { title: "Reporting Inappropriate Behavior", slug: "reporting" },
      ]
    },
    {
      id: "community",
      icon: Users,
      title: "Community Guidelines",
      description: "Be part of our community.",
      color: "amber",
      articles: [
        { title: "Community Standards Overview", slug: "community-standards" },
        { title: "Respectful Communication", slug: "respectful-communication" },
        { title: "Consent in the Community", slug: "consent" },
        { title: "Event Etiquette", slug: "event-etiquette" },
        { title: "Being a Good Community Member", slug: "good-member" },
      ]
    },
    {
      id: "account-billing",
      icon: CreditCard,
      title: "Account & Billing",
      description: "Manage your subscription.",
      color: "cyan",
      articles: [
        { title: "Subscription Plans Explained", slug: "subscription-plans" },
        { title: "Managing Your Subscription", slug: "manage-subscription" },
        { title: "Payment Methods", slug: "payment-methods" },
        { title: "Cancellation & Refunds", slug: "cancellation" },
        { title: "Deleting Your Account", slug: "delete-account" },
      ]
    },
  ];

  const popularArticles = [
    { icon: Smartphone, title: "How to Download SPICE", category: "Getting Started" },
    { icon: Lock, title: "Resetting Your Password", category: "Account" },
    { icon: Camera, title: "Photo Guidelines", category: "Profile" },
    { icon: Bell, title: "Managing Notifications", category: "Settings" },
    { icon: MapPin, title: "Location Privacy", category: "Privacy" },
    { icon: MessageCircle, title: "Messaging Tips", category: "Connections" },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; text: string; icon: string }> = {
      blue: { bg: "bg-blue-500/10", border: "border-blue-500/30", text: "text-blue-400", icon: "text-blue-500" },
      green: { bg: "bg-green-500/10", border: "border-green-500/30", text: "text-green-400", icon: "text-green-500" },
      purple: { bg: "bg-purple-500/10", border: "border-purple-500/30", text: "text-purple-400", icon: "text-purple-500" },
      amber: { bg: "bg-amber-500/10", border: "border-amber-500/30", text: "text-amber-400", icon: "text-amber-500" },
      pink: { bg: "bg-pink-500/10", border: "border-pink-500/30", text: "text-pink-400", icon: "text-pink-500" },
      cyan: { bg: "bg-cyan-500/10", border: "border-cyan-500/30", text: "text-cyan-400", icon: "text-cyan-500" },
    };
    return colors[color] || colors.blue;
  };

  const filteredCategories = categories.filter(category => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      category.title.toLowerCase().includes(query) ||
      category.description.toLowerCase().includes(query) ||
      category.articles.some(article => article.title.toLowerCase().includes(query))
    );
  });

  return (
    <>
      <SEO
        title="Help Center | SPICE - Knowledge Base & FAQs"
        description="Find answers to your questions about SPICE. Browse our knowledge base for guides, tutorials, and FAQs about the lifestyle dating app."
        keywords="SPICE help, knowledge base, FAQ, lifestyle app support, SPICE tutorials, how to use SPICE"
        canonical="https://thespiceapp.com/support/help"
      />

      <div className="relative min-h-screen">
        <ParticlesBackground />
        <Header />
        <Breadcrumbs />

        <main className="relative z-10 pt-32 pb-12">
          <div className="container mx-auto px-4">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 mb-6">
                <Book className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium text-blue-400">Help Center</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Knowledge Base
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                Find guides, tutorials, and answers to help you get the most out of SPICE.
              </p>

              {/* Search Bar */}
              <div className="max-w-xl mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search help articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-card/50 border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  />
                </div>
              </div>
            </div>

            {/* Popular Articles */}
            <div className="max-w-4xl mx-auto mb-12">
              <h2 className="text-lg font-semibold text-white mb-4">Popular Articles</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {popularArticles.map((article) => {
                  const Icon = article.icon;
                  return (
                    <button
                      key={article.title}
                      className="flex items-center gap-3 p-3 bg-card/50 border border-border rounded-xl hover:border-blue-500/50 transition-colors text-left"
                    >
                      <Icon className="w-5 h-5 text-blue-500 flex-shrink-0" />
                      <div>
                        <span className="text-sm text-white block">{article.title}</span>
                        <span className="text-xs text-muted-foreground">{article.category}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Categories */}
            <div className="max-w-4xl mx-auto mb-12">
              <h2 className="text-lg font-semibold text-white mb-4">Browse by Category</h2>
              <div className="space-y-4">
                {filteredCategories.map((category) => {
                  const Icon = category.icon;
                  const colors = getColorClasses(category.color);
                  const isExpanded = expandedCategory === category.id;

                  return (
                    <div
                      key={category.id}
                      className={`${colors.bg} border ${colors.border} rounded-xl overflow-hidden`}
                    >
                      <button
                        onClick={() => setExpandedCategory(isExpanded ? null : category.id)}
                        className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-10 h-10 rounded-lg ${colors.bg} flex items-center justify-center`}>
                            <Icon className={`w-5 h-5 ${colors.icon}`} />
                          </div>
                          <div className="text-left">
                            <h3 className="font-semibold text-white">{category.title}</h3>
                            <p className="text-sm text-muted-foreground">{category.description}</p>
                          </div>
                        </div>
                        <ChevronDown 
                          className={`w-5 h-5 text-muted-foreground transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
                        />
                      </button>
                      
                      {isExpanded && (
                        <div className="border-t border-border/50 p-4">
                          <ul className="space-y-2">
                            {category.articles.map((article) => (
                              <li key={article.slug}>
                                <button
                                  className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors text-left"
                                >
                                  <span className="text-sm text-white">{article.title}</span>
                                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Contact CTA */}
            <div className="max-w-3xl mx-auto">
              <div className="bg-card/50 border border-border rounded-2xl p-8 text-center">
                <HelpCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="text-2xl font-bold text-white mb-4">Can't Find What You're Looking For?</h2>
                <p className="text-muted-foreground mb-6">
                  Our support team is ready to help you with any questions not covered in our knowledge base.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl font-medium transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Contact Support
                  </Link>
                  <Link
                    to="/faq"
                    className="inline-flex items-center justify-center gap-2 bg-card border border-border hover:border-primary/50 text-white px-6 py-3 rounded-xl font-medium transition-colors"
                  >
                    View FAQs
                  </Link>
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

export default HelpCenter;
