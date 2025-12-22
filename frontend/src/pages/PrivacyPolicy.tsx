import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Shield, Eye, Database, Globe, Lock, Mail, Cookie, Users } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <>
      <SEO
        title="Privacy Policy | SPICE Dating App"
        description="SPICE Privacy Policy explains how we collect, use, disclose, store, and protect your personal information when you use our adult dating platform."
        keywords="SPICE privacy policy, data protection, personal information, GDPR, dating app privacy"
        canonical="https://thespiceapp.com/legal/privacy"
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
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Privacy</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                Privacy Policy
              </h1>
              <p className="text-muted-foreground">
                Updated December 20, 2025
              </p>
            </div>

            {/* Introduction */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 mb-8">
              <p className="text-muted-foreground leading-relaxed mb-4">
                SPICE, Inc. ("SPICE", "we", "us", or "our") is committed to protecting your privacy and handling your personal information responsibly. This Privacy Policy explains how we collect, use, disclose, store, and protect your personal information when you use our mobile application, website, and related services (collectively, the "Service"). The Service is an adults-only platform and is strictly intended for individuals aged 18 and older.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our websites and services are clearly identified with our logos and/or copyright notices to indicate where this policy applies. This policy does not extend to any third-party websites or organizations that we may link to; we recommend reviewing their separate privacy policies.
              </p>
            </div>

            {/* Contact Information */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-primary" />
                <h2 className="text-xl font-bold">Contact Information</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Data Protection Officer</h3>
                  <p className="text-muted-foreground text-sm">SPICE, Inc.</p>
                  <p className="text-muted-foreground text-sm">Email: <a href="mailto:privacy@thespiceapp.com" className="text-primary hover:underline">privacy@thespiceapp.com</a></p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">EU/UK Representative</h3>
                  <p className="text-muted-foreground text-sm">Email: <a href="mailto:privacy@thespiceapp.com" className="text-primary hover:underline">privacy@thespiceapp.com</a></p>
                </div>
              </div>
            </div>

            {/* Information Collection */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Database className="w-6 h-6 text-primary" />
                <h2 className="text-xl font-bold">Information Collection</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                SPICE collects personally identifiable information only when you voluntarily provide it (e.g., account registration details such as username, email address, profile information, photos, preferences, posts, messages, and other content you submit). Beyond that, we gather non-personal and automatically collected data, including IP address, device information, browser type, usage data, and cookies.
              </p>
              <p className="text-muted-foreground">
                We use cookies (both session and persistent) to maintain logged-in status, bypass adult content warnings (if selected), and support other features. You can manage or remove cookies via your browser settings, but this may limit certain Service functionality.
              </p>
            </div>

            {/* Links and Third-Party Advertising */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 mb-8">
              <h2 className="text-xl font-bold mb-4">Links and Third-Party Advertising</h2>
              <p className="text-muted-foreground mb-4">
                The Service contains links to external sites for which SPICE bears no responsibility. We permit third-party ad networks to display advertisements. These partners may collect your IP address and use technologies (cookies, JavaScript, web beacons) to measure ad effectiveness and tailor content.
              </p>
              <p className="text-muted-foreground">
                We do not share personally identifiable information with these third parties without your explicit consent, except for general demographic categories or optional opt-in programs. Interaction with targeted ads may allow advertisers to infer audience fit without receiving personal details from us.
              </p>
            </div>

            {/* Non-Personal Information */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 mb-8">
              <h2 className="text-xl font-bold mb-4">Non-Personal Information and Communication</h2>
              <p className="text-muted-foreground mb-4">
                We use the information you provide to enhance the Service without disclosing personally identifiable details. Aggregated, anonymous data (e.g., usage trends, IP addresses, browser types) is used for reporting, advertising, fraud prevention, and service improvement.
              </p>
              <p className="text-muted-foreground">
                We share personally identifiable information only with trusted service providers (e.g., payment processing, analytics) under strict restrictions, or when required by law, court order, or to protect rights/safety. We send occasional emails (service updates, notifications, promotions) via third-party providers to registered users.
              </p>
            </div>

            {/* Purposes of Processing */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="w-6 h-6 text-primary" />
                <h2 className="text-xl font-bold">Purposes of Processing</h2>
              </div>
              <p className="text-muted-foreground mb-4">We process personal data to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Provide and maintain the Service (account creation, login, content display, matching, messaging)</li>
                <li>Improve and personalize user experience (analytics, feature development)</li>
                <li>Communicate with you (updates, support, notifications)</li>
                <li>Serve contextual advertising</li>
                <li>Prevent fraud and ensure security</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                We do not engage in automated decision-making with legal or significant effects.
              </p>
            </div>

            {/* Recipients and Third-Party Sharing */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 mb-8">
              <h2 className="text-xl font-bold mb-4">Recipients and Third-Party Sharing</h2>
              <p className="text-muted-foreground">
                We share data only in limited circumstances: service providers (bound by agreements), legal requirements, or business transfers. <strong>We do not sell your personal data.</strong>
              </p>
            </div>

            {/* International Users */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-6 h-6 text-primary" />
                <h2 className="text-xl font-bold">International Users and Data Transfers</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                The Service is hosted and operated in the United States and primarily targeted at U.S. users. If you access from outside the U.S. (including regions with differing data protection laws), your continued use constitutes consent to the transfer of your personal information to the United States, governed by U.S. law and this Privacy Policy.
              </p>
              <p className="text-muted-foreground">
                For users in the EU/EEA or UK, transfers are protected by Standard Contractual Clauses (SCCs) approved by the European Commission and Transfer Impact Assessments where required.
              </p>
            </div>

            {/* Data Retention */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 mb-8">
              <h2 className="text-xl font-bold mb-4">Data Retention</h2>
              <p className="text-muted-foreground">
                We retain personal data only as long as necessary (e.g., account data until deletion plus reasonable backup/legal holds; usage logs up to 12 months; marketing data until consent withdrawn).
              </p>
            </div>

            {/* A Word of Caution */}
            <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-xl p-8 mb-8">
              <h2 className="text-xl font-bold mb-4 text-yellow-400">A Word of Caution</h2>
              <p className="text-muted-foreground mb-4">
                Content you post or share is publicly visible and may be viewed by others. While we use password protection and commercially reasonable security measures, no system is foolproof. You share and transmit information at your own risk. We act solely as a platform provider and do not routinely monitor or censor content (though we may act on reports of illegal material or Terms violations).
              </p>
              <p className="text-muted-foreground">
                In the event of a security breach, we may notify you electronically and/or post a notice on our site.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-6 h-6 text-primary" />
                <h2 className="text-xl font-bold">SPICE's Commitment to Children's Privacy</h2>
              </div>
              <p className="text-muted-foreground">
                The Service is strictly for users 18 and older. We do not knowingly collect or store personally identifiable information from individuals under 18 years old. If discovered, we will promptly remove it and may report to authorities.
              </p>
            </div>

            {/* Your Rights */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Lock className="w-6 h-6 text-primary" />
                <h2 className="text-xl font-bold">Your Rights</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                Depending on your location, you may have rights to access, correct, delete, restrict, or object to processing of your data, as well as withdraw consent or request portability. To exercise rights or withdraw consent, contact <a href="mailto:privacy@thespiceapp.com" className="text-primary hover:underline">privacy@thespiceapp.com</a>. We also respect opt-out preferences for communications and cookies.
              </p>
              <p className="text-muted-foreground">
                You may have the right to lodge a complaint with a relevant authority.
              </p>
            </div>

            {/* Cookies */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Cookie className="w-6 h-6 text-primary" />
                <h2 className="text-xl font-bold">Cookies and Similar Technologies</h2>
              </div>
              <p className="text-muted-foreground">
                You can manage cookie preferences via browser settings or our cookie tools. Disabling cookies may affect Service features. For more information, see our <a href="/legal/cookies" className="text-primary hover:underline">Cookie Policy</a>.
              </p>
            </div>

            {/* Terms of Use */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 mb-8">
              <h2 className="text-xl font-bold mb-4">Terms of Use Agreement</h2>
              <p className="text-muted-foreground">
                Our <a href="/legal/terms" className="text-primary hover:underline">Terms of Use Agreement</a> is incorporated by reference. Access it via the link at the bottom of any page on our website.
              </p>
            </div>

            {/* Business Transfers */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 mb-8">
              <h2 className="text-xl font-bold mb-4">Business Transfers</h2>
              <p className="text-muted-foreground">
                In the event of merger, acquisition, sale, bankruptcy, or similar, we may transfer your personal information. We will notify you if such transfer materially affects your rights.
              </p>
            </div>

            {/* Policy Changes */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 mb-8">
              <h2 className="text-xl font-bold mb-4">Policy Changes</h2>
              <p className="text-muted-foreground">
                Updates will be posted here with the revised date. Significant changes will be notified via email or prominent notice. Continued use constitutes acceptance of the updated policy.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl p-8 border border-primary/30 text-center">
              <Mail className="w-10 h-10 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Contacting SPICE</h2>
              <p className="text-muted-foreground mb-4">
                For questions about this Privacy Policy, rights requests, or complaints, contact:
              </p>
              <p className="font-semibold">SPICE, Inc., Privacy Department</p>
              <a href="mailto:privacy@thespiceapp.com" className="text-primary hover:underline">
                privacy@thespiceapp.com
              </a>
              <p className="text-sm text-muted-foreground mt-4">
                EU/UK users may also contact privacy@thespiceapp.com.
              </p>
            </div>
          </div>
        </main>

        <FooterSection />
      </div>
    </>
  );
};

export default PrivacyPolicy;
