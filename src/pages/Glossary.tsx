import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Book, Search } from "lucide-react";
import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";

const categories = [
  { id: "all", label: "All" },
  { id: "desires", label: "Desires & Kinks" },
  { id: "identities", label: "Sexual Identities" },
  { id: "relationships", label: "Relationship Types" },
  { id: "roles", label: "Roles & Dynamics" },
  { id: "practices", label: "Practices" },
];

const glossaryTerms = [
  {
    term: "Aftercare",
    definition: "The care and attention given to partners after a BDSM scene or intense sexual experience. This can include physical comfort, emotional support, hydration, and processing the experience together.",
    category: "practices",
  },
  {
    term: "BDSM",
    definition: "An acronym for Bondage/Discipline, Dominance/Submission, and Sadism/Masochism. It encompasses a wide range of erotic practices involving power exchange, restraint, and sensation play.",
    category: "practices",
  },
  {
    term: "Compersion",
    definition: "The feeling of joy when seeing your partner happy with another person. Often described as the opposite of jealousy, it's a common concept in polyamorous relationships.",
    category: "relationships",
  },
  {
    term: "Demisexual",
    definition: "A sexual orientation where someone only experiences sexual attraction after forming a strong emotional bond with another person.",
    category: "identities",
  },
  {
    term: "Dominant (Dom/Domme)",
    definition: "In BDSM, the partner who takes the controlling role in a power exchange dynamic. They guide scenes and take responsibility for their submissive's experience.",
    category: "roles",
  },
  {
    term: "ENM (Ethical Non-Monogamy)",
    definition: "An umbrella term for relationship structures where all parties consent to having multiple romantic or sexual relationships. Includes polyamory, swinging, and open relationships.",
    category: "relationships",
  },
  {
    term: "Fluid Bonding",
    definition: "The decision to have unprotected sex with a partner, typically after both parties have been tested for STIs. This is often a significant step in ENM relationships.",
    category: "practices",
  },
  {
    term: "Hard Limit",
    definition: "Activities that a person will absolutely not engage in under any circumstances. These boundaries are non-negotiable and must always be respected.",
    category: "practices",
  },
  {
    term: "Kink",
    definition: "Sexual practices or desires that fall outside of conventional sexual norms. What constitutes 'kink' varies by culture and individual perspective.",
    category: "desires",
  },
  {
    term: "Metamour",
    definition: "Your partner's other partner. In polyamorous relationships, metamours may or may not have a personal relationship with each other.",
    category: "relationships",
  },
  {
    term: "NRE (New Relationship Energy)",
    definition: "The excitement, infatuation, and heightened emotional state experienced at the beginning of a new romantic or sexual relationship.",
    category: "relationships",
  },
  {
    term: "Pansexual",
    definition: "A sexual orientation characterized by attraction to people regardless of their gender identity or biological sex.",
    category: "identities",
  },
  {
    term: "Polycule",
    definition: "A network of people connected through polyamorous relationships. The term comes from 'molecule' and describes the interconnected nature of poly relationships.",
    category: "relationships",
  },
  {
    term: "Safeword",
    definition: "A predetermined word or signal used during BDSM play to immediately stop or pause the scene. Common systems include 'red' (stop) and 'yellow' (slow down).",
    category: "practices",
  },
  {
    term: "Soft Limit",
    definition: "Activities that someone is hesitant about but may be willing to explore under the right circumstances, with the right partner, or with proper negotiation.",
    category: "practices",
  },
  {
    term: "Soft Swap",
    definition: "In swinging, sexual activity with others that doesn't include penetrative intercourse. Often used by couples new to the lifestyle.",
    category: "practices",
  },
  {
    term: "Solo Poly",
    definition: "A polyamorous approach where someone chooses not to have a primary or nesting partner, prioritizing their independence while maintaining multiple relationships.",
    category: "relationships",
  },
  {
    term: "Submissive (Sub)",
    definition: "In BDSM, the partner who consensually gives up control to the dominant. Submission is an active choice and requires trust and communication.",
    category: "roles",
  },
  {
    term: "Switch",
    definition: "Someone who enjoys both dominant and submissive roles in BDSM, either in different relationships or within the same dynamic.",
    category: "roles",
  },
  {
    term: "Unicorn",
    definition: "A bisexual person (often a woman) who joins a couple for sexual or romantic relationships. The term reflects how rare such arrangements can be to find.",
    category: "roles",
  },
  {
    term: "Vanilla",
    definition: "Conventional or 'mainstream' sexual practices that don't involve BDSM or kink elements. Not a derogatory term—simply describes preferences.",
    category: "practices",
  },
];

const Glossary = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredTerms = useMemo(() => {
    return glossaryTerms
      .filter((item) => {
        const matchesSearch = 
          item.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.definition.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = activeCategory === "all" || item.category === activeCategory;
        return matchesSearch && matchesCategory;
      })
      .sort((a, b) => a.term.localeCompare(b.term));
  }, [searchQuery, activeCategory]);

  const groupedTerms = useMemo(() => {
    const groups: Record<string, typeof glossaryTerms> = {};
    filteredTerms.forEach((term) => {
      const letter = term.term[0].toUpperCase();
      if (!groups[letter]) groups[letter] = [];
      groups[letter].push(term);
    });
    return groups;
  }, [filteredTerms]);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Glossary | SPICE Guide</title>
        <meta name="description" content="Learn lifestyle terminology with our comprehensive glossary. From BDSM terms to polyamory concepts, understand the language of ethical non-monogamy." />
        <link rel="canonical" href="https://thespiceapp.com/guide/glossary" />
      </Helmet>
      
      <Header />
      <Breadcrumbs />
      
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-gradient mb-6">
              <Book className="w-4 h-4 text-primary" />
              <span className="text-sm text-muted-foreground">SPICE Guide</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6">
              <span className="text-gradient">Glossary</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Understanding the language of the lifestyle is the first step to meaningful connection.
            </p>
          </div>

          {/* Search */}
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search terms..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-12 glass-card border-border/50"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "glass-card hover:bg-primary/20"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Terms List */}
          <div className="space-y-8">
            {Object.entries(groupedTerms).map(([letter, terms]) => (
              <div key={letter}>
                <div className="sticky top-20 z-10 mb-4">
                  <span className="inline-block px-4 py-2 text-2xl font-black text-gradient glass-card rounded-lg">
                    {letter}
                  </span>
                </div>
                <div className="space-y-4">
                  {terms.map((item) => (
                    <div
                      key={item.term}
                      className="glass-card rounded-xl p-6 border-gradient hover:bg-primary/5 transition-colors"
                    >
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="text-lg font-bold text-primary">{item.term}</h3>
                        <span className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground whitespace-nowrap">
                          {categories.find(c => c.id === item.category)?.label}
                        </span>
                      </div>
                      <p className="text-muted-foreground">{item.definition}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {filteredTerms.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No terms found matching your search.</p>
            </div>
          )}
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

export default Glossary;
