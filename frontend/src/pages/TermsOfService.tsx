import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";
import { FileText, Scale, CreditCard, Shield, AlertTriangle, Mail } from "lucide-react";

const TermsOfService = () => {
  return (
    <>
      <SEO
        title="Terms of Service | SPICE Dating App"
        description="SPICE Terms of Service govern your access to and use of our adult dating platform for swingers, BDSM, kink, and ENM communities."
        keywords="SPICE terms of service, dating app terms, user agreement, lifestyle app terms"
        canonical="https://thespiceapp.com/legal/terms"
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
                <FileText className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Legal</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                Terms of Service
              </h1>
              <p className="text-muted-foreground">
                Last Updated: December 20, 2025
              </p>
            </div>

            {/* Introduction */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 mb-8">
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Service ("Terms") govern your access to and use of the SPICE mobile application, website, and related services (collectively, the "Service"), provided by SPICE, Inc. ("SPICE", "we", "us", or "our"). By accessing or using the Service, you agree to be bound by these Terms. If you do not agree, you may not use the Service.
              </p>
            </div>

            {/* Section 1: Eligibility */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 mb-8">
              <h2 className="text-xl font-bold mb-4 text-primary">1. Eligibility</h2>
              <p className="text-muted-foreground">
                You must be at least 18 years old to use the Service. By using the Service, you represent and warrant that you are 18 or older and have the legal capacity to enter into these Terms. The Service is not intended for persons under 18, and we do not knowingly collect information from anyone under 18.
              </p>
            </div>

            {/* Section 2: Account Registration */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 mb-8">
              <h2 className="text-xl font-bold mb-4 text-primary">2. Account Registration</h2>
              <p className="text-muted-foreground">
                To access certain features, you must create an account. You agree to provide accurate, current, and complete information during registration and to update such information as needed. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. Notify us immediately at privacy@thespiceapp.com of any unauthorized use.
              </p>
            </div>

            {/* Section 3: User Content */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 mb-8">
              <h2 className="text-xl font-bold mb-4 text-primary">3. User Content</h2>
              <p className="text-muted-foreground mb-4">
                You retain ownership of content you post, upload, or share ("User Content"), including photos, messages, profiles, and posts. By submitting User Content, you grant SPICE a worldwide, non-exclusive, royalty-free, transferable, sublicensable license to use, host, store, reproduce, modify, display, and distribute it solely to provide and improve the Service.
              </p>
              <p className="text-muted-foreground">
                You are solely responsible for your User Content. You represent and warrant that your User Content does not violate any law, infringe third-party rights, or breach these Terms.
              </p>
            </div>

            {/* Section 4: Prohibited Conduct */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 mb-8">
              <h2 className="text-xl font-bold mb-4 text-primary">4. Prohibited Conduct</h2>
              <p className="text-muted-foreground mb-4">You agree not to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Use the Service for any illegal purpose or in violation of any law.</li>
                <li>Post or share content that is harmful, abusive, harassing, defamatory, obscene, fraudulent, or invasive of privacy.</li>
                <li>Impersonate any person or entity.</li>
                <li>Engage in spamming, phishing, or unauthorized advertising.</li>
                <li>Attempt to interfere with the Service's operation (e.g., viruses, hacking, DDoS attacks).</li>
                <li>Use automated means (bots, scrapers) to access the Service without our written permission.</li>
                <li>Engage in commercial activity without our approval.</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                We reserve the right to remove any User Content or terminate accounts that violate these Terms.
              </p>
            </div>

            {/* Section 5: Adult Content */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 mb-8">
              <h2 className="text-xl font-bold mb-4 text-primary">5. Adult Content and User Responsibility</h2>
              <p className="text-muted-foreground">
                The Service is an adult-oriented platform. User Content may include sexually explicit material. You acknowledge that you may encounter such content and use the Service at your own discretion and risk.
              </p>
            </div>

            {/* Section 6: Privacy */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 mb-8">
              <h2 className="text-xl font-bold mb-4 text-primary">6. Privacy</h2>
              <p className="text-muted-foreground">
                Your privacy is important to us. Our <a href="/legal/privacy" className="text-primary hover:underline">Privacy Policy</a> explains how we collect, use, and protect your information. By using the Service, you agree to our Privacy Policy, which is incorporated into these Terms.
              </p>
            </div>

            {/* Section 7: Intellectual Property */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 mb-8">
              <h2 className="text-xl font-bold mb-4 text-primary">7. Intellectual Property</h2>
              <p className="text-muted-foreground">
                The Service and its content (excluding User Content) are owned by SPICE or our licensors and protected by copyright, trademark, and other laws. You are granted a limited, non-transferable license to access and use the Service for personal, non-commercial purposes.
              </p>
            </div>

            {/* Section 8: Payment Terms */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <CreditCard className="w-6 h-6 text-primary" />
                <h2 className="text-xl font-bold text-primary">8. Payment Terms</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                Certain features of the Service may require payment ("Paid Features"). By purchasing Paid Features (e.g., premium subscriptions, credits, or one-time purchases), you agree to the following:
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Pricing and Payment</h3>
                  <p className="text-muted-foreground text-sm">
                    Prices are displayed in the Service and may change with notice. You authorize us (or our third-party payment processor) to charge your chosen payment method for the applicable fees, including recurring subscription fees if applicable.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Subscriptions</h3>
                  <p className="text-muted-foreground text-sm">
                    Subscriptions automatically renew for the same period unless canceled at least 24 hours before the renewal date. You may cancel via your account settings or by contacting us.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Refunds</h3>
                  <p className="text-muted-foreground text-sm">
                    All payments are non-refundable except where required by law (e.g., within applicable cooling-off periods in certain jurisdictions). We may offer discretionary refunds or credits on a case-by-case basis.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Taxes</h3>
                  <p className="text-muted-foreground text-sm">
                    You are responsible for any applicable taxes on payments.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Failed Payments</h3>
                  <p className="text-muted-foreground text-sm">
                    If a payment fails, we may suspend access to Paid Features until payment is resolved.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Free Trials</h3>
                  <p className="text-muted-foreground text-sm">
                    If offered, free trials convert to paid subscriptions automatically unless canceled before the trial ends.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 9: Termination */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 mb-8">
              <h2 className="text-xl font-bold mb-4 text-primary">9. Termination</h2>
              <p className="text-muted-foreground mb-4">
                We may suspend or terminate your account or access to the Service at any time, with or without cause or notice, including for violations of these Terms or non-payment. Upon termination, your right to use the Service ceases immediately, and any active subscriptions will not be refunded. Sections that by their nature should survive (e.g., ownership, disclaimers, limitations of liability, payment obligations) will remain in effect.
              </p>
              <p className="text-muted-foreground">
                You may terminate your account at any time by contacting us or using account deletion features. Cancellation of subscriptions does not automatically delete your account.
              </p>
            </div>

            {/* Section 10: Disclaimer */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-yellow-500" />
                <h2 className="text-xl font-bold text-primary">10. Disclaimer of Warranties</h2>
              </div>
              <p className="text-muted-foreground uppercase text-sm">
                THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE OF VIRUSES OR HARMFUL COMPONENTS.
              </p>
            </div>

            {/* Section 11: Limitation of Liability */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 mb-8">
              <h2 className="text-xl font-bold mb-4 text-primary">11. Limitation of Liability</h2>
              <p className="text-muted-foreground uppercase text-sm mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, SPICE AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR DATA, ARISING FROM YOUR USE OF THE SERVICE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>
              <p className="text-muted-foreground uppercase text-sm">
                OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE 12 MONTHS PRECEDING THE CLAIM.
              </p>
            </div>

            {/* Section 12: Indemnification */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 mb-8">
              <h2 className="text-xl font-bold mb-4 text-primary">12. Indemnification</h2>
              <p className="text-muted-foreground">
                You agree to indemnify, defend, and hold harmless SPICE and its affiliates from any claims, liabilities, damages, losses, and expenses (including attorneys' fees) arising from your use of the Service, your User Content, or your violation of these Terms.
              </p>
            </div>

            {/* Section 13: Governing Law */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <Scale className="w-6 h-6 text-primary" />
                <h2 className="text-xl font-bold text-primary">13. Governing Law and Dispute Resolution</h2>
              </div>
              <p className="text-muted-foreground">
                These Terms are governed by the laws of the State of Nevada, USA, without regard to conflict of laws principles. Any disputes shall be resolved exclusively in the state or federal courts located in Clark County, Nevada. You waive any objection to venue or inconvenience of forum.
              </p>
            </div>

            {/* Section 14: Changes */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 mb-8">
              <h2 className="text-xl font-bold mb-4 text-primary">14. Changes to Terms</h2>
              <p className="text-muted-foreground">
                We may update these Terms from time to time. We will notify you of material changes via email or prominent notice in the Service. Continued use after changes constitutes acceptance of the updated Terms.
              </p>
            </div>

            {/* Section 15: Miscellaneous */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 mb-8">
              <h2 className="text-xl font-bold mb-4 text-primary">15. Miscellaneous</h2>
              <p className="text-muted-foreground">
                These Terms constitute the entire agreement between you and SPICE regarding the Service. If any provision is held invalid, the remainder remains in effect. Our failure to enforce any right does not waive it. You may not assign these Terms without our written consent; we may assign them freely.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl p-8 border border-primary/30 text-center">
              <Mail className="w-10 h-10 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-muted-foreground mb-2">
                For questions about these Terms, contact us at:
              </p>
              <p className="font-semibold">SPICE, Inc.</p>
              <a href="mailto:privacy@thespiceapp.com" className="text-primary hover:underline">
                privacy@thespiceapp.com
              </a>
              <p className="text-sm text-muted-foreground mt-6">
                By using the Service, you acknowledge that you have read, understood, and agree to these Terms of Service.
              </p>
            </div>
          </div>
        </main>

        <FooterSection />
      </div>
    </>
  );
};

export default TermsOfService;
