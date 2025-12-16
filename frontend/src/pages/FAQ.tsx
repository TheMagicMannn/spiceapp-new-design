import SEO from "@/components/SEO";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Shield, Users, Heart, Lock, Sparkles, Globe } from "lucide-react";

const FAQ = () => {
  const faqCategories = [
    {
      title: "About SPICE Dating App",
      icon: Heart,
      questions: [
        {
          q: "What is SPICE dating app?",
          a: "SPICE is a premium dating app designed specifically for adventurous adults interested in swingers, BDSM, ENM (ethical non-monogamy), polyamory, and kink lifestyles. We provide a safe, verified, and inclusive platform for couples and singles to explore their desires, connect with like-minded individuals, and build meaningful connections within the lifestyle community.",
        },
        {
          q: "Is SPICE for couples or singles?",
          a: "SPICE welcomes both! Our platform is designed for singles, couples, and groups interested in alternative relationship styles. Whether you're a couple exploring swinging, a single looking to join the lifestyle, or someone interested in polyamorous relationships, SPICE provides the tools and community to connect with compatible partners.",
        },
        {
          q: "Who can use SPICE?",
          a: "SPICE is for adventurous couples and singles of all genders and sexualities interested in exploring swingers, ENM, polyamory, BDSM, and kink lifestyles. Whether you're experienced in the lifestyle or just curious, our platform welcomes anyone seeking authentic connections in the alternative relationship space.",
        },
        {
          q: "What makes SPICE different from other dating apps?",
          a: "SPICE stands out with 100% verified profiles, 200+ desire tags for precise matching, an AI-powered BDSM compatibility quiz, lifestyle-specific filters, and a sex-positive community. Unlike mainstream dating apps, we're built specifically for the lifestyle community with features that cater to swingers, kink, ENM, and polyamory.",
        },
      ],
    },
    {
      title: "Getting Started & Features",
      icon: Sparkles,
      questions: [
        {
          q: "How do I join SPICE?",
          a: "Download the SPICE app from the App Store or Google Play Store, create your profile, complete our verification process, and take our optional BDSM compatibility quiz. You can start browsing and connecting immediately with our free tier, or upgrade to VIP for premium features.",
        },
        {
          q: "What are desire tags and how do they work?",
          a: "Desire tags are specific interests, kinks, and preferences you can add to your profile. With over 200 tags covering everything from vanilla preferences to specific BDSM practices, swinging styles, and polyamory structures, you can precisely express what you're looking for and find highly compatible matches.",
        },
        {
          q: "What is the BDSM compatibility quiz?",
          a: "Our AI-powered BDSM quiz analyzes your preferences, boundaries, experience level, and desires to create a comprehensive compatibility profile. It helps you understand your kink personality and matches you with compatible partners who share similar interests and complementary dynamics.",
        },
        {
          q: "Can I use SPICE anonymously?",
          a: "Yes! We understand privacy is important in the lifestyle community. You can use a username instead of your real name, control who sees your profile and photos, and manage your visibility settings. However, all profiles must complete our verification process for safety.",
        },
      ],
    },
    {
      title: "Safety & Verification",
      icon: Shield,
      questions: [
        {
          q: "How does profile verification work?",
          a: "SPICE requires 100% verified profiles for all members. Our verification process includes photo verification, optional ID verification, and behavioral monitoring. This ensures you're connecting with real people and helps maintain a safe, authentic community free from fake profiles and scammers.",
        },
        {
          q: "Is SPICE safe and secure?",
          a: "Yes! We take safety seriously with end-to-end encryption for messages, secure profile verification, reporting and blocking features, community guidelines enforcement, and a dedicated safety team. We also provide safety resources and guidelines specific to the lifestyle community.",
        },
        {
          q: "How do you handle privacy?",
          a: "Your privacy is paramount. We never share your data with third parties, offer discreet app icons, provide granular privacy controls, allow photo blur options, and let you control exactly who can see your profile. You're always in control of your information.",
        },
        {
          q: "What if I encounter inappropriate behavior?",
          a: "SPICE has zero tolerance for harassment, non-consensual behavior, or violations of our community guidelines. You can instantly report or block any user, and our safety team reviews all reports within 24 hours. Serious violations result in immediate account termination.",
        },
      ],
    },
    {
      title: "Lifestyle & Community",
      icon: Users,
      questions: [
        {
          q: "What is swinging and how does SPICE support swingers?",
          a: "Swinging is when couples engage in sexual activities with other couples or singles. SPICE supports the swinging lifestyle with couple profiles, couple-friendly matching, lifestyle event listings, and filters specifically designed for soft swap, full swap, same-room, and separate-room preferences.",
        },
        {
          q: "What is ENM (Ethical Non-Monogamy)?",
          a: "ENM is practicing non-monogamy with honesty, consent, and open communication. This includes polyamory, open relationships, relationship anarchy, and more. SPICE helps ENM practitioners find partners who understand and respect their relationship structure with specialized matching and filters.",
        },
        {
          q: "I'm new to the lifestyle - is SPICE right for me?",
          a: "Absolutely! SPICE welcomes newcomers with comprehensive guides, safety resources, educational content about BDSM, swinging, and ENM, and a supportive community. Our platform lets you explore at your own pace with clear boundaries and extensive communication tools.",
        },
        {
          q: "Does SPICE organize events or parties?",
          a: "While SPICE doesn't organize events directly, our VIP members get access to a curated calendar of verified lifestyle events, club parties, munches, and community gatherings. We also facilitate private member meetups and have features for organizing your own events.",
        },
      ],
    },
    {
      title: "Pricing & Membership",
      icon: Lock,
      questions: [
        {
          q: "Is SPICE free to use?",
          a: "Yes! SPICE offers a free tier with basic features including profile creation, browsing profiles, limited messaging, and access to the BDSM quiz. You can upgrade to VIP membership ($16.99/month or $149.99/year) for unlimited messaging, advanced filters, priority matching, and exclusive features.",
        },
        {
          q: "What's included in VIP membership?",
          a: "VIP members get unlimited messaging, advanced search filters, see who viewed your profile, priority customer support, boost your profile visibility, access to exclusive events, unlimited desire tags, detailed compatibility insights, and an ad-free experience.",
        },
        {
          q: "Can I try VIP before committing?",
          a: "Yes! We offer a 7-day free trial of VIP membership to all new users. Experience all premium features risk-free, and you can cancel anytime before the trial ends with no charges.",
        },
        {
          q: "Are there couple discounts?",
          a: "Yes! Couple profiles get a special discount on VIP membership. When you create a joint couple account, you'll automatically qualify for our couple pricing, which includes all VIP features for both partners under one subscription.",
        },
      ],
    },
    {
      title: "Technical & Support",
      icon: Globe,
      questions: [
        {
          q: "What devices does SPICE support?",
          a: "SPICE is available on iOS (iPhone and iPad) and Android devices. You can download our app from the App Store or Google Play Store. We also have a responsive web version accessible from any modern browser.",
        },
        {
          q: "How do I contact support?",
          a: "You can reach our support team 24/7 through the in-app help center, email us at support@thespiceapp.com, or use the contact form on our website. VIP members get priority support with faster response times.",
        },
        {
          q: "Can I delete my account?",
          a: "Yes, you can delete your account at any time from the Settings menu. When you delete your account, all your data, messages, and profile information are permanently removed from our servers within 30 days, in compliance with data protection regulations.",
        },
        {
          q: "Do you offer international support?",
          a: "Yes! SPICE is available worldwide with members in over 50 countries. Our app supports multiple languages, and our community spans diverse cultures and locations. Whether you're looking for local connections or international relationships, SPICE has you covered.",
        },
      ],
    },
  ];

  // Create FAQ structured data for SEO
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqCategories.flatMap(category =>
      category.questions.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    )
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      <SEO
        title="Frequently Asked Questions (FAQ) - SPICE Dating App"
        description="Get answers about SPICE dating app - the premium platform for swingers, BDSM, ENM, polyamory, and kink. Learn about our features, safety, verification, LGBTQ+ inclusivity, pricing, and how to get started with lifestyle dating for couples and singles."
        keywords="SPICE FAQ, swingers dating app questions, BDSM dating app help, ENM dating FAQ, polyamory app questions, kink dating help, lifestyle dating FAQ, couples dating app FAQ, LGBTQ+ dating questions, verified dating app, alternative lifestyle FAQ"
        canonical="https://thespiceapp.com/faq"
        structuredData={faqStructuredData}
      />
      
      <Header />
      
      <main className="relative z-10 pt-24 pb-20">
        <div className="container max-w-5xl mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent">
              Frequently Asked Questions
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to know about SPICE - the premium dating app for swingers, BDSM enthusiasts, ENM practitioners, and the lifestyle community. Find answers about features, safety, and getting started.
            </p>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-8">
            {faqCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <div
                  key={categoryIndex}
                  className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 md:p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold">{category.title}</h2>
                  </div>
                  
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.questions.map((faq, faqIndex) => (
                      <AccordionItem
                        key={faqIndex}
                        value={`item-${categoryIndex}-${faqIndex}`}
                        className="border border-border/50 rounded-lg px-6 bg-background/50"
                      >
                        <AccordionTrigger className="text-left hover:no-underline py-4">
                          <span className="text-lg font-semibold pr-4">{faq.q}</span>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl p-8 md:p-12 border border-primary/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our support team is here to help! Reach out anytime and we'll get back to you within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all"
              >
                Contact Support
              </a>
              <a
                href="/download"
                className="inline-flex items-center justify-center px-8 py-3 bg-background border-2 border-primary hover:bg-primary/10 font-semibold rounded-full transition-all"
              >
                Download SPICE
              </a>
            </div>
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

export default FAQ;
