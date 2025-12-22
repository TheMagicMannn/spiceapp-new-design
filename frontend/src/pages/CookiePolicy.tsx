import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Cookie, Settings, Shield, Eye, BarChart3, Target, Mail } from "lucide-react";

const CookiePolicy = () => {
  return (
    <>
      <SEO
        title="Cookie Policy | SPICE Dating App"
        description="Learn how SPICE uses cookies and similar technologies to enhance your experience on our adult dating platform for swingers, BDSM, and ENM communities."
        keywords="SPICE cookie policy, cookies, tracking technologies, privacy, dating app cookies"
        canonical="https://thespiceapp.com/legal/cookies"
      />

      <div className="relative min-h-screen">
        <ParticlesBackground />
        <Header />
        <Breadcrumbs />
        
        <main className="relative z-10 pt-32 pb-12">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Cookie className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Legal</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                Cookie Policy
              </h1>
              <p className="text-muted-foreground">
                Last Updated: December 20, 2025
              </p>
            </div>

            {/* Introduction */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 mb-8">
              <p className="text-muted-foreground leading-relaxed mb-4">
                This Cookie Policy explains how SPICE, Inc. ("SPICE", "we", "us", or "our") uses cookies and similar tracking technologies when you visit our website and use our mobile application (collectively, the "Service"). This policy should be read alongside our <a href="/legal/privacy" className="text-primary hover:underline">Privacy Policy</a>.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                By continuing to use our Service, you consent to our use of cookies as described in this policy. You can manage your cookie preferences at any time through your browser settings or our cookie management tools.
              </p>
            </div>

            {/* What Are Cookies */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Cookie className="w-6 h-6 text-primary" />
                <h2 className="text-xl font-bold">What Are Cookies?</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                Cookies are small text files that are stored on your device (computer, tablet, or mobile phone) when you visit a website. They are widely used to make websites work more efficiently and provide information to site owners.
              </p>
              <p className="text-muted-foreground">
                Cookies can be "session cookies" (which are deleted when you close your browser) or "persistent cookies" (which remain on your device for a set period or until you delete them).
              </p>
            </div>

            {/* Types of Cookies We Use */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 mb-8">
              <h2 className="text-xl font-bold mb-6">Types of Cookies We Use</h2>
              
              <div className="space-y-6">
                {/* Essential Cookies */}
                <div className="border border-border/50 rounded-lg p-6 bg-background/50">
                  <div className="flex items-center gap-3 mb-3">
                    <Shield className="w-5 h-5 text-green-500" />
                    <h3 className="font-semibold text-lg">Essential Cookies</h3>
                    <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">Required</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3">
                    These cookies are necessary for the Service to function properly. They enable core functionality such as:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1 ml-4">
                    <li>Maintaining your logged-in session</li>
                    <li>Remembering your age verification status</li>
                    <li>Bypassing adult content warnings (if selected)</li>
                    <li>Ensuring security and preventing fraud</li>
                    <li>Load balancing and server optimization</li>
                  </ul>
                  <p className="text-muted-foreground text-sm mt-3 italic">
                    These cookies cannot be disabled as they are essential for the Service to operate.
                  </p>
                </div>

                {/* Functional Cookies */}
                <div className="border border-border/50 rounded-lg p-6 bg-background/50">
                  <div className="flex items-center gap-3 mb-3">
                    <Settings className="w-5 h-5 text-blue-500" />
                    <h3 className="font-semibold text-lg">Functional Cookies</h3>
                    <span className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded">Optional</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3">
                    These cookies allow us to remember your preferences and provide enhanced features:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1 ml-4">
                    <li>Language and regional preferences</li>
                    <li>Theme preferences (dark/light mode)</li>
                    <li>Notification settings</li>
                    <li>Search and filter preferences</li>
                    <li>Recently viewed profiles or content</li>
                  </ul>
                </div>

                {/* Analytics Cookies */}
                <div className="border border-border/50 rounded-lg p-6 bg-background/50">
                  <div className="flex items-center gap-3 mb-3">
                    <BarChart3 className="w-5 h-5 text-purple-500" />
                    <h3 className="font-semibold text-lg">Analytics Cookies</h3>
                    <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded">Optional</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3">
                    These cookies help us understand how visitors interact with our Service:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1 ml-4">
                    <li>Pages visited and time spent on pages</li>
                    <li>Features used and user flows</li>
                    <li>Error tracking and performance monitoring</li>
                    <li>Device and browser information</li>
                    <li>Geographic location (country/region level)</li>
                  </ul>
                  <p className="text-muted-foreground text-sm mt-3">
                    We use services like Google Analytics. Data is aggregated and anonymized where possible.
                  </p>
                </div>

                {/* Advertising Cookies */}
                <div className="border border-border/50 rounded-lg p-6 bg-background/50">
                  <div className="flex items-center gap-3 mb-3">
                    <Target className="w-5 h-5 text-orange-500" />
                    <h3 className="font-semibold text-lg">Advertising Cookies</h3>
                    <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-1 rounded">Optional</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-3">
                    These cookies are used to deliver relevant advertisements and track ad performance:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1 ml-4">
                    <li>Display personalized advertisements</li>
                    <li>Measure ad campaign effectiveness</li>
                    <li>Limit the number of times you see an ad</li>
                    <li>Track conversions from our marketing campaigns</li>
                  </ul>
                  <p className="text-muted-foreground text-sm mt-3">
                    Third-party advertising partners may set these cookies. We do not share personally identifiable information with advertisers without your explicit consent.
                  </p>
                </div>
              </div>
            </div>

            {/* Similar Technologies */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-primary" />
                <h2 className="text-xl font-bold">Similar Technologies</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                In addition to cookies, we may use other similar technologies:
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Web Beacons (Pixel Tags)</h3>
                  <p className="text-muted-foreground text-sm">
                    Small graphic images embedded in emails or web pages that track whether content has been viewed or links clicked.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Local Storage</h3>
                  <p className="text-muted-foreground text-sm">
                    Browser storage that allows websites to store data locally on your device, similar to cookies but with larger storage capacity.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Device Fingerprinting</h3>
                  <p className="text-muted-foreground text-sm">
                    Collecting information about your device configuration to identify unique devices for security and fraud prevention purposes.
                  </p>
                </div>
              </div>
            </div>

            {/* Third-Party Cookies */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 mb-8">
              <h2 className="text-xl font-bold mb-4">Third-Party Cookies</h2>
              <p className="text-muted-foreground mb-4">
                Some cookies on our Service are set by third parties. These include:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li><strong>Google Analytics:</strong> Website usage analytics</li>
                <li><strong>Payment Processors:</strong> Secure transaction processing</li>
                <li><strong>Social Media:</strong> Social sharing features (if enabled)</li>
                <li><strong>Ad Networks:</strong> Advertising and remarketing (with consent)</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                We do not control third-party cookies. Please refer to their respective privacy policies for more information about their practices.
              </p>
            </div>

            {/* Managing Cookies */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Settings className="w-6 h-6 text-primary" />
                <h2 className="text-xl font-bold">Managing Your Cookie Preferences</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                You have several options for managing cookies:
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Browser Settings</h3>
                  <p className="text-muted-foreground text-sm">
                    Most browsers allow you to control cookies through their settings. You can typically:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1 ml-4 mt-2">
                    <li>View cookies stored on your device</li>
                    <li>Delete all or specific cookies</li>
                    <li>Block all or third-party cookies</li>
                    <li>Set preferences for specific websites</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2">Opt-Out Links</h3>
                  <p className="text-muted-foreground text-sm">
                    You can opt out of specific third-party tracking:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1 ml-4 mt-2">
                    <li>Google Analytics: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">tools.google.com/dlpage/gaoptout</a></li>
                    <li>Network Advertising Initiative: <a href="https://optout.networkadvertising.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">optout.networkadvertising.org</a></li>
                    <li>Digital Advertising Alliance: <a href="https://optout.aboutads.info" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">optout.aboutads.info</a></li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4 mt-6">
                <p className="text-muted-foreground text-sm">
                  <strong>Note:</strong> Disabling certain cookies may affect your experience on our Service. Essential cookies cannot be disabled as they are required for the Service to function properly.
                </p>
              </div>
            </div>

            {/* Do Not Track */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 mb-8">
              <h2 className="text-xl font-bold mb-4">Do Not Track Signals</h2>
              <p className="text-muted-foreground">
                Some browsers have a "Do Not Track" (DNT) feature that sends a signal to websites requesting that they not track your browsing activity. Currently, there is no universal standard for how websites should respond to DNT signals. We do not currently respond to DNT signals, but we honor your cookie preferences set through our cookie management tools and browser settings.
              </p>
            </div>

            {/* Updates */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 mb-8">
              <h2 className="text-xl font-bold mb-4">Updates to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will post any changes on this page with an updated revision date. We encourage you to review this policy periodically.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl p-8 border border-primary/30 text-center">
              <Mail className="w-10 h-10 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Questions?</h2>
              <p className="text-muted-foreground mb-4">
                If you have questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              <p className="font-semibold">SPICE, Inc.</p>
              <a href="mailto:privacy@thespiceapp.com" className="text-primary hover:underline">
                privacy@thespiceapp.com
              </a>
            </div>
          </div>
        </main>

        <FooterSection />
      </div>
    </>
  );
};

export default CookiePolicy;
