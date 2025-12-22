import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Shield, Users, AlertTriangle, Heart, Ban, Flag, Scale, CheckCircle } from "lucide-react";

const CommunityStandards = () => {
  return (
    <>
      <SEO
        title="Community Standards | SPICE Dating App"
        description="SPICE Community Standards outline acceptable behavior and content guidelines for our swingers, BDSM, kink, ENM, and polyamory community. Safety, consent, and respect are our priorities."
        keywords="SPICE community standards, dating app rules, lifestyle community guidelines, consent, safety"
        canonical="https://thespiceapp.com/legal/community-standards"
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
                <span className="text-sm font-medium text-primary">Community Guidelines</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
                SPICE Community Standards
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Creating a vibrant, consensual space for bold connections within the swingers, BDSM, kink, ENM, and polyamory communities.
              </p>
            </div>

            {/* Introduction */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 mb-8">
              <p className="text-muted-foreground leading-relaxed">
                At SPICE, we're dedicated to creating a vibrant, consensual space for bold connections within the swingers, BDSM, kink, ethical non-monogamy (ENM), and polyamory communities. We celebrate exploration, trust, and mutual respect while prioritizing safety, inclusivity, and accountability. Every member is responsible for treating others with kindness and consent.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                These Community Standards outline unacceptable content and behavior—both on and off the platform—to ensure everyone feels secure and empowered.
              </p>
            </div>

            {/* Profile Requirements */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Users className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">Profile Requirements</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">Age Requirement</h3>
                  <p className="text-muted-foreground">
                    You must be 18 years or older to use SPICE. Misrepresenting your age as under 18 is strictly prohibited. We may request government-issued ID for verification, and anyone found to be underage will be permanently removed from the platform.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">Profile Photos</h3>
                  <p className="text-muted-foreground mb-3">
                    Your photos should authentically represent you (or you and your partner for couple profiles). At least one photo must clearly show your full face without obstructions. We do not allow:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Heavily filtered, distorted, or digitally altered images that make identity verification difficult</li>
                    <li>Memes, text-heavy images, or stock photos used as primary profile pictures</li>
                    <li>Any photos featuring children alone</li>
                    <li>Images of unclothed minors</li>
                    <li>Group photos as your primary image (secondary photos are fine if your face is clearly identifiable)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">Display Name</h3>
                  <p className="text-muted-foreground mb-3">
                    Choose a name that feels authentic to you—nicknames, initials, abbreviations, or scene names are welcome. You are not required to use your legal name. However, we prohibit:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-4">
                    <li>Names that include phrases violating these Standards</li>
                    <li>Celebrity, fictional character, or brand names</li>
                    <li>Excessive symbols, emojis, numbers, or punctuation unrelated to a genuine name</li>
                    <li>Inclusion of social media handles, phone numbers, or external messaging details</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Rules for Content & Behavior */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Scale className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">Rules for Content & Behavior</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">Nudity and Explicit Content in Profiles</h3>
                  <p className="text-muted-foreground">
                    SPICE embraces consensual adult sexuality, but profile content must remain suitable for public viewing. Full nudity, sexually explicit images, or vulgar material is not permitted in public profile sections. Private photos (unlocked by mutual consent) have more flexibility, but commercial solicitation of sexual services or content remains forbidden.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">Harassment and Abusive Behavior</h3>
                  <p className="text-muted-foreground">
                    Respect is non-negotiable. We do not tolerate harassment, bullying, intimidation, or targeting of any kind. Examples include: derogatory comments, repeated unwanted contact after clear boundaries, blackmail, doxxing, emotional manipulation, or any encouragement of harm or violence toward others.
                  </p>
                </div>

                <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                  <h3 className="text-lg font-semibold mb-3 text-red-400">Child Exploitation and Minor Safety</h3>
                  <p className="text-muted-foreground">
                    We maintain absolute zero tolerance for any content or behavior that sexualizes, exploits, or endangers minors (anyone under 18). This includes real or fictional depictions (illustrations, AI-generated images, text descriptions, etc.). Sharing, storing, or soliciting child sexual abuse material is illegal and will be reported to authorities.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">Commercial Activity</h3>
                  <p className="text-muted-foreground">
                    SPICE is a connection platform, not a marketplace. Unsolicited advertising, promotion of paid services, OnlyFans links in profiles, or using the app for business purposes (outside of officially sanctioned events) is prohibited.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">Illegal Substances and Controlled Items</h3>
                  <p className="text-muted-foreground">
                    Promoting, facilitating, or arranging the sale, distribution, or use of illegal drugs, controlled substances, or related paraphernalia (including marijuana in restricted jurisdictions) is not allowed.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">Terrorism and Violent Extremism</h3>
                  <p className="text-muted-foreground">
                    Any content that promotes, glorifies, supports, or recruits for terrorist organizations or violent extremist ideologies will result in immediate removal and potential reporting to authorities.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">Hate and Discrimination</h3>
                  <p className="text-muted-foreground">
                    We celebrate diversity across all identities. Content or behavior that dehumanizes, degrades, or expresses contempt toward individuals or groups based on race, ethnicity, national origin, caste, sex, gender identity, sexual orientation, disability, serious medical conditions, or religious beliefs is strictly forbidden.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">Fake or Misleading Profiles</h3>
                  <p className="text-muted-foreground">
                    Authenticity builds trust. Impersonation, catfishing, false claims about identity (age, gender, location, relationship status), or creating profiles for someone else without consent is prohibited.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">Harmful Misinformation</h3>
                  <p className="text-muted-foreground">
                    Spreading demonstrably false information that could endanger health, safety, or democratic processes—especially around sexual health, STI transmission, or consent—is not permitted.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">Threats of Violence or Non-Consensual Acts</h3>
                  <p className="text-muted-foreground">
                    Any credible threat of physical or sexual violence, stalking, revenge porn, human trafficking facilitation, or non-consensual acts (on or off platform) will result in immediate account termination and potential law enforcement involvement.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">Financial Scams and Exploitation</h3>
                  <p className="text-muted-foreground">
                    Romance scams, requests for money/gifts, fake sob stories for financial gain, or manipulating members for material resources are strictly prohibited.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">Non-Consensual Sexual Behavior</h3>
                  <p className="text-muted-foreground">
                    Sexual harassment of any form—including unsolicited explicit images, pressure for sexual favors, non-consensual sharing of intimate photos/videos, or fetishization without consent—is unacceptable.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">Spam and Disruptive Activity</h3>
                  <p className="text-muted-foreground">
                    Excessive messaging, bulk irrelevant content, misleading links, creating multiple accounts to harass or manipulate, or automated scripting to interfere with the platform is forbidden.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">Promotion of Self-Harm or Suicide</h3>
                  <p className="text-muted-foreground">
                    We support members navigating mental health challenges and allow safe sharing of personal experiences, but content that promotes, glorifies, instructs, or encourages suicide, self-injury, or eating disorders is prohibited.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">Graphic Violence</h3>
                  <p className="text-muted-foreground">
                    Images, videos, or descriptions of gore, severe injury, blood, or weapons (outside of clear law enforcement/military context) are not allowed in profiles or public areas.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">Platform Integrity and Manipulation</h3>
                  <p className="text-muted-foreground">
                    Automated bots, scraping, artificial boosting of interactions, or attempting to evade bans through new accounts/VPNs undermines trust and is prohibited.
                  </p>
                </div>
              </div>
            </div>

            {/* Reporting & Safety Tools */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <Flag className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">Reporting & Safety Tools</h2>
              </div>
              <p className="text-muted-foreground mb-4">
                Your safety is our highest priority. We combine advanced technology and human review to monitor for violations.
              </p>
              <p className="text-muted-foreground mb-4">
                You play a vital role—please report any concerning behavior immediately using <strong>Block & Report</strong>. Simply disliking someone or disagreeing with their lifestyle choices is not grounds for reporting. Abusing the report system (e.g., false reports targeting protected identities) may result in consequences for the reporter.
              </p>
            </div>

            {/* Enforcement */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">How We Enforce These Standards</h2>
              </div>
              <p className="text-muted-foreground mb-4">Violations may lead to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mb-4">
                <li>Removal of content</li>
                <li>Temporary restrictions</li>
                <li>Permanent bans across all accounts</li>
                <li>Cooperation with law enforcement when required</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                Conduct outside the app (e.g., during in-person meetups or private messaging) that comes to our attention and violates these Standards may also result in account action.
              </p>
              <p className="text-muted-foreground">
                If you believe we've made an error regarding your account, please contact support. We're here to listen and help.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl p-8 border border-primary/30 text-center">
              <Heart className="w-10 h-10 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Questions or Suggestions?</h2>
              <p className="text-muted-foreground mb-6">
                Questions or suggestions about our Community Standards? Reach out—our team is always ready to assist.
              </p>
              <a href="mailto:support@thespiceapp.com" className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all">
                Contact Support
              </a>
            </div>
          </div>
        </main>

        <FooterSection />
      </div>
    </>
  );
};

export default CommunityStandards;
