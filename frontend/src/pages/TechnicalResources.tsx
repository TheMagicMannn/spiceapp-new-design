import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";
import { 
  Code, 
  Book, 
  Zap, 
  Server, 
  Lock, 
  FileCode,
  ExternalLink,
  ChevronRight,
  Terminal,
  Database,
  Shield,
  Cpu
} from "lucide-react";

const TechnicalResources = () => {
  const resources = [
    {
      icon: FileCode,
      title: "API Documentation",
      description: "Complete reference for integrating with the SPICE API. Authentication, endpoints, and example requests.",
      status: "Coming Soon",
      color: "blue"
    },
    {
      icon: Terminal,
      title: "Developer SDK",
      description: "Official SDKs for iOS, Android, and web platforms to speed up your integration.",
      status: "Coming Soon",
      color: "green"
    },
    {
      icon: Database,
      title: "Data Export",
      description: "Learn how to export your data and understand our data formats and structures.",
      status: "Coming Soon",
      color: "purple"
    },
    {
      icon: Shield,
      title: "Security Whitepaper",
      description: "Detailed overview of our security practices, encryption standards, and privacy measures.",
      status: "Coming Soon",
      color: "amber"
    }
  ];

  const systemStatus = [
    { name: "API Services", status: "operational", uptime: "99.9%" },
    { name: "Web Application", status: "operational", uptime: "99.8%" },
    { name: "Mobile Apps", status: "operational", uptime: "99.9%" },
    { name: "Database Systems", status: "operational", uptime: "99.99%" },
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
        title="Technical Resources | SPICE - Developer Documentation & APIs"
        description="Access SPICE technical resources including API documentation, developer SDKs, security information, and system status."
        keywords="SPICE API, developer documentation, technical resources, SDK, security whitepaper, system status"
        canonical="https://thespiceapp.com/support/technical"
      />

      <div className="relative min-h-screen">
        <ParticlesBackground />
        <Header />
        <Breadcrumbs />

        <main className="relative z-10 pt-32 pb-12">
          <div className="container mx-auto px-4">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-2 mb-6">
                <Zap className="w-4 h-4 text-amber-500" />
                <span className="text-sm font-medium text-amber-400">Technical Resources</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
                Developer Resources
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Technical documentation, APIs, and tools for developers integrating with SPICE.
              </p>
            </div>

            {/* System Status */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="bg-card/50 border border-border rounded-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                    <Server className="w-5 h-5 text-green-500" />
                    System Status
                  </h2>
                  <span className="text-sm text-green-400 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    All Systems Operational
                  </span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {systemStatus.map((system) => (
                    <div key={system.name} className="bg-green-500/5 border border-green-500/20 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        <span className="text-xs text-green-400 capitalize">{system.status}</span>
                      </div>
                      <p className="text-sm text-white font-medium">{system.name}</p>
                      <p className="text-xs text-muted-foreground">Uptime: {system.uptime}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Resources Grid */}
            <div className="max-w-4xl mx-auto mb-12">
              <h2 className="text-lg font-semibold text-white mb-4">Available Resources</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {resources.map((resource) => {
                  const Icon = resource.icon;
                  const colors = getColorClasses(resource.color);
                  
                  return (
                    <div
                      key={resource.title}
                      className={`${colors.bg} border ${colors.border} rounded-xl p-6`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center`}>
                          <Icon className={`w-6 h-6 ${colors.icon}`} />
                        </div>
                        <span className="text-xs font-medium text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                          {resource.status}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">{resource.title}</h3>
                      <p className="text-muted-foreground text-sm">{resource.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Integration Info */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 border border-blue-500/30 rounded-xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <Code className="w-6 h-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Want to Build with SPICE?</h3>
                    <p className="text-muted-foreground mb-4">
                      We're working on opening our platform to developers. Join our developer waitlist to be notified when our APIs and SDKs become available.
                    </p>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium"
                    >
                      Join Developer Waitlist
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Security Info */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-card/50 border border-border rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <Lock className="w-8 h-8 text-green-500 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Security & Privacy</h3>
                    <p className="text-muted-foreground mb-4">
                      SPICE uses industry-standard encryption and security practices. All data is encrypted in transit and at rest. We never sell or share your personal information.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <Link to="/legal/privacy" className="text-sm text-primary hover:underline">
                        Privacy Policy
                      </Link>
                      <Link to="/legal/terms" className="text-sm text-primary hover:underline">
                        Terms of Service
                      </Link>
                      <Link to="/guide/safety" className="text-sm text-primary hover:underline">
                        Safety Guidelines
                      </Link>
                    </div>
                  </div>
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

export default TechnicalResources;
