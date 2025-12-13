import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Book, Search } from "lucide-react";
import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { glossaryTerms, categories } from "@/data/glossaryTerms";

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
            <p className="text-sm text-muted-foreground mt-2">
              {glossaryTerms.length} terms and counting
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

          {/* Results Count */}
          <p className="text-sm text-muted-foreground mb-8">
            Showing {filteredTerms.length} term{filteredTerms.length !== 1 ? 's' : ''}
            {searchQuery && ` for "${searchQuery}"`}
            {activeCategory !== "all" && ` in ${categories.find(c => c.id === activeCategory)?.label}`}
          </p>

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
