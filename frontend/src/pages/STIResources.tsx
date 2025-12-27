import { Link } from "react-router-dom";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import SEO from "@/components/SEO";
import { 
  Shield, 
  Heart, 
  TestTube, 
  Calendar, 
  ExternalLink, 
  AlertTriangle, 
  CheckCircle, 
  Info,
  Syringe,
  Stethoscope,
  Users,
  Phone,
  MapPin,
  ChevronDown,
  FileText,
  Sparkles
} from "lucide-react";
import { useState } from "react";

// STI Information Data
const stiInfo = [
  {
    name: "HIV",
    description: "Human Immunodeficiency Virus attacks the immune system. With modern treatment, people with HIV can live long, healthy lives.",
    testing: "Blood test or rapid test. Test 2-4 weeks after potential exposure, confirm at 3 months.",
    prevention: "Condoms, PrEP (Pre-Exposure Prophylaxis), PEP (Post-Exposure Prophylaxis), undetectable = untransmittable (U=U).",
    treatable: true,
    curable: false,
    icon: "🔬",
    color: "bg-red-500/20 border-red-500/30"
  },
  {
    name: "HPV",
    description: "Human Papillomavirus is extremely common. Most infections clear on their own, but some strains can cause health issues.",
    testing: "Pap smear (for cervical HPV), visual inspection for warts. No routine test for all strains.",
    prevention: "HPV vaccine (Gardasil 9), condoms reduce but don't eliminate risk.",
    treatable: true,
    curable: false,
    icon: "🧬",
    color: "bg-purple-500/20 border-purple-500/30"
  },
  {
    name: "Herpes (HSV-1 & HSV-2)",
    description: "Very common viral infections. Many people have herpes without knowing it. Manageable with medication.",
    testing: "Blood test for antibodies, or swab test during outbreak.",
    prevention: "Condoms, dental dams, antivirals reduce transmission risk, avoid contact during outbreaks.",
    treatable: true,
    curable: false,
    icon: "🦠",
    color: "bg-orange-500/20 border-orange-500/30"
  },
  {
    name: "Chlamydia",
    description: "Most common bacterial STI. Often has no symptoms but can cause serious health issues if untreated.",
    testing: "Urine test or swab. Test 1-2 weeks after exposure. Annual testing recommended for sexually active people.",
    prevention: "Condoms, dental dams, regular testing.",
    treatable: true,
    curable: true,
    icon: "🔵",
    color: "bg-blue-500/20 border-blue-500/30"
  },
  {
    name: "Gonorrhea",
    description: "Bacterial infection that can infect genitals, rectum, and throat. Often occurs with chlamydia.",
    testing: "Urine test or swab. Test 1-2 weeks after exposure.",
    prevention: "Condoms, dental dams, regular testing.",
    treatable: true,
    curable: true,
    icon: "🟡",
    color: "bg-yellow-500/20 border-yellow-500/30"
  },
  {
    name: "Syphilis",
    description: "Bacterial infection that progresses in stages. Highly treatable but can cause serious issues if ignored.",
    testing: "Blood test. Can test 3-6 weeks after exposure.",
    prevention: "Condoms, dental dams, regular testing.",
    treatable: true,
    curable: true,
    icon: "⚪",
    color: "bg-gray-500/20 border-gray-500/30"
  }
];

// Testing Recommendations
const testingGuide = [
  {
    category: "For Everyone Sexually Active",
    frequency: "At least annually",
    tests: ["HIV", "Syphilis", "Chlamydia", "Gonorrhea"],
    icon: Users
  },
  {
    category: "Multiple Partners / ENM / Lifestyle",
    frequency: "Every 3-6 months",
    tests: ["Full panel STI screening", "HIV", "Hepatitis B/C"],
    icon: Heart
  },
  {
    category: "New Partner(s)",
    frequency: "Before sexual contact",
    tests: ["Full panel for both/all partners", "Discuss sexual health history"],
    icon: Sparkles
  },
  {
    category: "After Potential Exposure",
    frequency: "Based on window periods",
    tests: ["Immediate: Consider PEP for HIV", "2 weeks: Bacterial STIs", "6-12 weeks: HIV confirmation"],
    icon: AlertTriangle
  }
];

// Prevention Methods
const preventionMethods = [
  {
    title: "Barrier Methods",
    description: "External and internal condoms, dental dams for oral sex. Highly effective when used consistently and correctly.",
    effectiveness: "Very High",
    icon: Shield
  },
  {
    title: "PrEP (Pre-Exposure Prophylaxis)",
    description: "Daily pill or injection that prevents HIV. 99% effective when taken as prescribed. Talk to your doctor.",
    effectiveness: "99% for HIV",
    icon: Syringe
  },
  {
    title: "Vaccination",
    description: "HPV vaccine (up to age 45), Hepatitis A & B vaccines. Discuss with your healthcare provider.",
    effectiveness: "Very High",
    icon: TestTube
  },
  {
    title: "Communication",
    description: "Discuss STI status, testing history, and boundaries with partners before sexual activity.",
    effectiveness: "Essential",
    icon: Users
  },
  {
    title: "Regular Testing",
    description: "Know your status and your partners' status. Regular testing catches infections early when they're most treatable.",
    effectiveness: "Essential",
    icon: Stethoscope
  },
  {
    title: "Treatment as Prevention",
    description: "U=U: People with HIV who maintain undetectable viral loads cannot transmit HIV sexually.",
    effectiveness: "100% for HIV",
    icon: CheckCircle
  }
];

// External Resources
const resources = [
  {
    name: "CDC STI Resources",
    description: "Comprehensive information on STIs, prevention, and treatment from the Centers for Disease Control.",
    url: "https://www.cdc.gov/sti/",
    icon: FileText
  },
  {
    name: "Planned Parenthood",
    description: "Find local testing centers, get information, and access affordable sexual health services.",
    url: "https://www.plannedparenthood.org/get-care/our-services/std-testing-treatment-vaccines",
    icon: MapPin
  },
  {
    name: "GetTested (CDC)",
    description: "Enter your zip code to find free, fast, and confidential STI testing locations near you.",
    url: "https://gettested.cdc.gov/",
    icon: MapPin
  },
  {
    name: "PrEP Locator",
    description: "Find healthcare providers who prescribe PrEP for HIV prevention in your area.",
    url: "https://preplocator.org/",
    icon: Syringe
  },
  {
    name: "ASHA (American Sexual Health Association)",
    description: "Sexual health information, resources, and support for STI management.",
    url: "https://www.ashasexualhealth.org/",
    icon: Heart
  },
  {
    name: "STI Hotlines",
    description: "CDC National STD Hotline: 1-800-232-4636 (available 24/7)",
    url: "tel:18002324636",
    icon: Phone
  }
];

// FAQ Data
const faqItems = [
  {
    question: "How often should I get tested if I have multiple partners?",
    answer: "If you're in the lifestyle, ENM, or have multiple partners, testing every 3-6 months is recommended. Some people in very active communities test monthly. Discuss with your healthcare provider to determine the right frequency for your situation."
  },
  {
    question: "Can I get tested for everything in one visit?",
    answer: "Yes! Ask your provider for a 'full panel STI screening.' This typically includes HIV, syphilis, gonorrhea, chlamydia, and hepatitis. Note that herpes and HPV tests aren't always included in standard panels—ask specifically if you want these."
  },
  {
    question: "What is PrEP and who should consider it?",
    answer: "PrEP (Pre-Exposure Prophylaxis) is a daily pill or bi-monthly injection that prevents HIV infection. It's recommended for anyone who has HIV-positive partners, doesn't consistently use condoms, or has had an STI in the past 6 months. It's 99% effective when taken as prescribed."
  },
  {
    question: "How do I talk to partners about STI status?",
    answer: "Be direct but compassionate. Share your own testing history first, ask when they were last tested, and what they were tested for. Make it part of your consent conversation. Many lifestyle community members appreciate transparency and see it as responsible, not awkward."
  },
  {
    question: "What should I do if I test positive for an STI?",
    answer: "First, don't panic—most STIs are treatable or manageable. Follow your healthcare provider's treatment plan, inform recent partners so they can get tested, abstain from sexual activity until cleared (for bacterial infections), and continue regular testing."
  },
  {
    question: "Are home STI tests reliable?",
    answer: "FDA-approved home tests (like those from Everlywell, myLAB Box, or Nurx) are generally reliable. They're convenient for regular screening. However, if you have symptoms or known exposure, visiting a healthcare provider is recommended for immediate care."
  }
];

const STIResources = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [expandedSti, setExpandedSti] = useState<string | null>(null);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": "STI Resources & Sexual Health Guide",
    "description": "Comprehensive guide to STI testing, prevention, and sexual health resources for the lifestyle community",
    "about": {
      "@type": "MedicalCondition",
      "name": "Sexually Transmitted Infections"
    },
    "audience": {
      "@type": "PeopleAudience",
      "audienceType": "Adults interested in sexual health"
    },
    "lastReviewed": "2025-07-01",
    "mainContentOfPage": {
      "@type": "WebPageElement",
      "cssSelector": "main"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="STI Resources — Sexual Health Guide, Testing & Prevention | SPICE"
        description="Comprehensive STI testing guide, prevention methods, and sexual health resources for the lifestyle community. Learn about HIV, HPV, herpes, chlamydia, gonorrhea, PrEP, and find testing locations near you."
        keywords="STI testing, sexual health, HIV prevention, PrEP, HPV vaccine, STD testing near me, safe sex, ENM sexual health, lifestyle sexual health, STI prevention, herpes information, chlamydia testing, gonorrhea symptoms, syphilis testing, sexual health resources"
        canonical="https://thespiceapp.com/tools/sti-resources"
        ogType="website"
        ogImage="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&h=630&fit=crop"
        structuredData={structuredData}
      />
      
      <Header />
      <Breadcrumbs />
      
      <main className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-gradient mb-6">
              <Stethoscope className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">SPICE Tools</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6">
              <span className="text-gradient">STI Resources</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your sexual health matters. Get informed about STI testing, prevention, and resources 
              to keep yourself and your partners safe.
            </p>
          </div>

          {/* Why Testing Matters Banner */}
          <div className="glass-card rounded-2xl p-8 border-gradient mb-12">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center shrink-0">
                <TestTube className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3">Why Regular Testing Matters</h2>
                <p className="text-muted-foreground mb-4">
                  Many STIs have no symptoms, meaning you could have one without knowing. Regular testing is 
                  the only way to know your status for sure. For those in the lifestyle or with multiple partners, 
                  frequent testing isn't just responsible—it's a sign of respect for yourself and your partners.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Early detection = easier treatment</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Protect your partners</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Peace of mind</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testing Recommendations */}
          <section className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Testing Recommendations</h2>
                <p className="text-muted-foreground">How often should you get tested?</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {testingGuide.map((guide, idx) => (
                <div key={idx} className="glass-card rounded-xl p-6 border-gradient">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                      <guide.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{guide.category}</h3>
                      <p className="text-primary font-semibold text-sm mb-3">{guide.frequency}</p>
                      <ul className="space-y-1">
                        {guide.tests.map((test, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {test}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Common STIs */}
          <section className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <Info className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Common STIs: What You Should Know</h2>
                <p className="text-muted-foreground">Understanding each infection helps you make informed decisions</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stiInfo.map((sti) => (
                <div 
                  key={sti.name} 
                  className={`glass-card rounded-xl overflow-hidden border ${sti.color} transition-all duration-300`}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{sti.icon}</span>
                        <h3 className="font-bold text-lg">{sti.name}</h3>
                      </div>
                      <div className="flex gap-2">
                        {sti.curable ? (
                          <span className="px-2 py-1 text-xs rounded-full bg-green-500/20 text-green-400">Curable</span>
                        ) : (
                          <span className="px-2 py-1 text-xs rounded-full bg-yellow-500/20 text-yellow-400">Manageable</span>
                        )}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{sti.description}</p>
                    
                    <button
                      onClick={() => setExpandedSti(expandedSti === sti.name ? null : sti.name)}
                      className="text-sm text-primary flex items-center gap-1 hover:underline"
                    >
                      {expandedSti === sti.name ? "Show less" : "Learn more"}
                      <ChevronDown className={`w-4 h-4 transition-transform ${expandedSti === sti.name ? "rotate-180" : ""}`} />
                    </button>
                    
                    {expandedSti === sti.name && (
                      <div className="mt-4 pt-4 border-t border-border/50 space-y-3">
                        <div>
                          <p className="text-xs font-semibold text-primary mb-1">Testing</p>
                          <p className="text-sm text-muted-foreground">{sti.testing}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-primary mb-1">Prevention</p>
                          <p className="text-sm text-muted-foreground">{sti.prevention}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Prevention Methods */}
          <section className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Prevention Methods</h2>
                <p className="text-muted-foreground">Strategies to reduce your risk</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {preventionMethods.map((method, idx) => (
                <div key={idx} className="glass-card rounded-xl p-6 border-gradient feature-card">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                    <method.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{method.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                  <span className="inline-block px-3 py-1 text-xs rounded-full bg-primary/20 text-primary font-medium">
                    Effectiveness: {method.effectiveness}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* PrEP Spotlight */}
          <section className="mb-16">
            <div className="glass-card rounded-2xl p-8 border-gradient bg-gradient-to-br from-primary/10 to-purple-500/10">
              <div className="flex flex-col lg:flex-row items-start gap-8">
                <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center shrink-0">
                  <Syringe className="w-10 h-10 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-3">PrEP: A Game-Changer for HIV Prevention</h2>
                  <p className="text-muted-foreground mb-4">
                    PrEP (Pre-Exposure Prophylaxis) is a daily pill or bi-monthly injection that prevents HIV infection. 
                    When taken as prescribed, it's 99% effective. For those in the lifestyle community with multiple partners, 
                    PrEP provides an additional layer of protection and peace of mind.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-sm">Daily Pill or Injection</p>
                        <p className="text-xs text-muted-foreground">Truvada/Descovy pills or Apretude injection</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-sm">Often Covered by Insurance</p>
                        <p className="text-xs text-muted-foreground">Many programs offer PrEP for free</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-sm">Works with Other Prevention</p>
                        <p className="text-xs text-muted-foreground">Combine with condoms for maximum protection</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-sm">Regular Monitoring</p>
                        <p className="text-xs text-muted-foreground">Quarterly check-ups keep you healthy</p>
                      </div>
                    </div>
                  </div>
                  <a 
                    href="https://preplocator.org/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all"
                  >
                    Find a PrEP Provider
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Resources */}
          <section className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <ExternalLink className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Resources & Testing Locations</h2>
                <p className="text-muted-foreground">Trusted sources for information and care</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.map((resource, idx) => (
                <a
                  key={idx}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card rounded-xl p-6 border-gradient feature-card group block"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                      <resource.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                        {resource.name}
                        <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h3>
                      <p className="text-sm text-muted-foreground">{resource.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <Info className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
                <p className="text-muted-foreground">Common questions about STI testing and prevention</p>
              </div>
            </div>

            <div className="space-y-4">
              {faqItems.map((faq, idx) => (
                <div key={idx} className="glass-card rounded-xl border-gradient overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4"
                  >
                    <span className="font-semibold">{faq.question}</span>
                    <ChevronDown 
                      className={`w-5 h-5 text-primary shrink-0 transition-transform ${openFaq === idx ? "rotate-180" : ""}`} 
                    />
                  </button>
                  {openFaq === idx && (
                    <div className="px-6 pb-6">
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Emergency Alert */}
          <div className="glass-card rounded-2xl p-6 border-gradient bg-destructive/10 mb-12">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-destructive shrink-0 mt-1" />
              <div>
                <h2 className="text-lg font-bold mb-2">Potential Exposure? Act Quickly</h2>
                <p className="text-muted-foreground mb-4">
                  If you've had potential HIV exposure (condom break, unprotected sex with someone of unknown status), 
                  <strong className="text-foreground"> PEP (Post-Exposure Prophylaxis) must be started within 72 hours</strong>. 
                  Go to an emergency room, urgent care, or call a sexual health hotline immediately.
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="text-foreground">CDC Hotline: 1-800-232-4636</span>
                  <span className="text-muted-foreground">|</span>
                  <a 
                    href="https://gettested.cdc.gov/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline flex items-center gap-1"
                  >
                    Find Testing Near You <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <section className="text-center">
            <div className="glass-card rounded-2xl p-12 border-gradient bg-gradient-to-br from-primary/5 to-purple-500/5">
              <h2 className="text-3xl font-bold mb-4">
                Sexual Health is <span className="text-gradient">Self-Care</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                In the lifestyle community, taking care of your sexual health is a sign of respect—for yourself 
                and your partners. Regular testing, open communication, and prevention are the foundations of 
                healthy, enjoyable experiences.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/download"
                  className="px-8 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-full transition-all"
                >
                  Join SPICE Community
                </Link>
                <Link
                  to="/guide/safety"
                  className="px-8 py-3 glass-card border-gradient font-semibold rounded-full transition-all hover:bg-muted/50"
                >
                  More Safety Resources
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <FooterSection />
    </div>
  );
};

export default STIResources;
