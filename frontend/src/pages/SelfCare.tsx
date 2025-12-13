import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Heart, Brain, Phone, Users, Sparkles, ExternalLink, ArrowRight } from "lucide-react";

const resources = [
  {
    id: "mental-health",
    title: "Mental Health",
    icon: Brain,
    description: "Taking care of your mind is essential for healthy relationships",
    articles: [
      {
        slug: "managing-anxiety-non-traditional-relationships",
        title: "Managing Anxiety in Non-Traditional Relationships",
        excerpt: "Strategies for coping with anxiety that may arise in ENM and lifestyle dynamics.",
        readTime: "7 min read",
        image: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=400&h=250&fit=crop",
      },
      {
        slug: "processing-jealousy-mental-health-approach",
        title: "Processing Jealousy: A Mental Health Approach",
        excerpt: "Understanding jealousy as an emotion and working through it constructively.",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=400&h=250&fit=crop",
      },
      {
        slug: "when-to-seek-professional-help",
        title: "When to Seek Professional Help",
        excerpt: "Recognizing when you might benefit from working with a kink-aware therapist.",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?w=400&h=250&fit=crop",
      },
    ],
  },
  {
    id: "emotional",
    title: "Emotional Wellbeing",
    icon: Heart,
    description: "Nurturing your emotional health in the lifestyle",
    articles: [
      {
        slug: "self-compassion-alternative-lifestyles",
        title: "Self-Compassion in Alternative Lifestyles",
        excerpt: "Being kind to yourself while navigating non-traditional relationship structures.",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=250&fit=crop",
      },
      {
        slug: "dealing-with-drop-after-intense-experiences",
        title: "Dealing with Drop After Intense Experiences",
        excerpt: "Understanding and managing sub drop, dom drop, and emotional drops after events.",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=250&fit=crop",
      },
      {
        slug: "building-emotional-resilience",
        title: "Building Emotional Resilience",
        excerpt: "Strengthening your emotional core for the unique challenges of lifestyle relationships.",
        readTime: "7 min read",
        image: "https://images.unsplash.com/photo-1522075782449-e45a34f1ddfb?w=400&h=250&fit=crop",
      },
    ],
  },
  {
    id: "community",
    title: "Community Support",
    icon: Users,
    description: "You're not alone—find your people",
    articles: [
      {
        slug: "finding-kink-friendly-support-groups",
        title: "Finding Kink-Friendly Support Groups",
        excerpt: "Resources for connecting with others who understand the lifestyle.",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=250&fit=crop",
      },
      {
        slug: "building-support-network",
        title: "Building a Support Network",
        excerpt: "Creating meaningful connections with people who can support your journey.",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop",
      },
      {
        slug: "online-communities-forums",
        title: "Online Communities and Forums",
        excerpt: "Safe online spaces to discuss experiences and seek advice.",
        readTime: "4 min read",
        image: "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?w=400&h=250&fit=crop",
      },
    ],
  },
];

const externalResources = [
  {
    name: "NCSF Kink-Aware Professionals",
    description: "Find therapists, doctors, and legal professionals who understand alternative lifestyles.",
    url: "https://www.kapprofessionals.org/",
  },
  {
    name: "Psychology Today - Find a Therapist",
    description: "Search for therapists specializing in sexuality, LGBTQ+, and non-traditional relationships.",
    url: "https://www.psychologytoday.com/us/therapists",
  },
  {
    name: "Crisis Text Line",
    description: "Text HOME to 741741 to connect with a trained crisis counselor.",
    url: "https://www.crisistextline.org/",
  },
  {
    name: "7 Cups",
    description: "Free online chat with trained listeners for emotional support.",
    url: "https://www.7cups.com/",
  },
];

const SelfCare = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Self Care Resources | SPICE Guide</title>
        <meta name="description" content="Prioritize your mental health and wellbeing. Find resources for self-care, emotional support, and mental health in the lifestyle community." />
        <link rel="canonical" href="https://thespiceapp.com/guide/self-care" />
      </Helmet>
      
      <Header />
      <Breadcrumbs />
      
      <main className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-gradient mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">SPICE Guide</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6">
              <span className="text-gradient">Self Care</span>
              <br />
              <span className="text-foreground">Resources</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your wellbeing matters. Explore resources for mental health, emotional support, 
              and self-care tailored to the lifestyle community.
            </p>
          </div>

          {/* Crisis Banner */}
          <div className="glass-card rounded-2xl p-6 border-gradient bg-primary/10 mb-12">
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h2 className="text-lg font-bold mb-2">Need Immediate Support?</h2>
                <p className="text-muted-foreground mb-4">
                  If you're in crisis or need someone to talk to right now, these resources are available 24/7:
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="text-foreground">988 Suicide & Crisis Lifeline: Call or text 988</span>
                  <span className="text-muted-foreground">|</span>
                  <span className="text-foreground">Crisis Text Line: Text HOME to 741741</span>
                </div>
              </div>
            </div>
          </div>

          {/* Resource Categories */}
          <div className="space-y-16">
            {resources.map((category) => (
              <section key={category.id} className="scroll-mt-24" id={category.id}>
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{category.title}</h2>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>
                </div>

                {/* Articles Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                  {category.articles.map((article, idx) => (
                    <Link 
                      key={idx}
                      to={`/guide/article/${article.slug}`}
                      className="glass-card rounded-xl overflow-hidden border-gradient feature-card group cursor-pointer block"
                    >
                      <article>
                        <div className="relative h-36 overflow-hidden">
                          <img 
                            src={article.image} 
                            alt={article.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                        </div>
                        <div className="p-5">
                          <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                            {article.title}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                            {article.excerpt}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground">{article.readTime}</span>
                            <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </div>
                      </article>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* External Resources */}
          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-8 text-center">External Resources</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {externalResources.map((resource, idx) => (
                <a
                  key={idx}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card rounded-xl p-6 border-gradient hover:bg-primary/10 transition-colors group"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                        {resource.name}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {resource.description}
                      </p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-muted-foreground shrink-0 group-hover:text-primary transition-colors" />
                  </div>
                </a>
              ))}
            </div>
          </section>

          {/* Self-Care Reminder */}
          <div className="mt-16">
            <div className="glass-card rounded-2xl p-8 border-gradient text-center max-w-2xl mx-auto">
              <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Remember</h3>
              <p className="text-muted-foreground">
                Taking care of yourself isn't selfish—it's essential. You deserve to feel supported, 
                understood, and valued in all aspects of your life and relationships.
              </p>
            </div>
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

export default SelfCare;
