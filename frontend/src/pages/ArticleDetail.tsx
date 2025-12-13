import { Helmet } from "react-helmet-async";
import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import FooterSection from "@/components/FooterSection";
import Breadcrumbs from "@/components/Breadcrumbs";
import { ArrowLeft, Clock, User, Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import all article sources
import { allArticles, getArticleBySlug } from "@/data/articleContent";
import { safetyArticles, getSafetyArticleBySlug } from "@/data/safetyArticles";
import { selfCareArticles, getSelfCareArticleBySlug } from "@/data/selfCareArticles";
import { communityArticles, getCommunityArticleBySlug } from "@/data/communityArticles";

// Combine all articles for lookup
const getAllArticles = () => [
  ...allArticles,
  ...safetyArticles,
  ...selfCareArticles,
  ...communityArticles,
];

const findArticle = (slug: string) => {
  return getAllArticles().find(article => article.slug === slug);
};

const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const article = slug ? findArticle(slug) : undefined;

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The article you're looking for doesn't exist or has been moved.
            </p>
            <Button onClick={() => navigate(-1)}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Button>
          </div>
        </main>
        <FooterSection />
      </div>
    );
  }

  // Format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Convert markdown-like content to HTML
  const formatContent = (content: string) => {
    return content
      .split('\n')
      .map((line, index) => {
        // Headers
        if (line.startsWith('## ')) {
          return `<h2 class="text-2xl font-bold mt-8 mb-4 text-gradient">${line.slice(3)}</h2>`;
        }
        if (line.startsWith('### ')) {
          return `<h3 class="text-xl font-semibold mt-6 mb-3 text-primary">${line.slice(4)}</h3>`;
        }
        
        // Bold text
        line = line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>');
        
        // Italic text
        line = line.replace(/\*(.*?)\*/g, '<em>$1</em>');
        
        // Checkmarks and X marks
        line = line.replace(/✓/g, '<span class="text-green-500">✓</span>');
        line = line.replace(/✗/g, '<span class="text-red-500">✗</span>');
        line = line.replace(/❌/g, '<span class="text-red-500">❌</span>');
        line = line.replace(/⚠️/g, '<span class="text-yellow-500">⚠️</span>');
        line = line.replace(/🚩/g, '<span class="text-red-500">🚩</span>');
        
        // Blockquotes
        if (line.startsWith('> ')) {
          return `<blockquote class="border-l-4 border-primary pl-4 italic text-muted-foreground my-4">${line.slice(2)}</blockquote>`;
        }
        
        // List items with bullets
        if (line.startsWith('- ')) {
          return `<li class="ml-4 mb-2">${line.slice(2)}</li>`;
        }
        
        // Numbered list items
        if (/^\d+\.\s/.test(line)) {
          return `<li class="ml-4 mb-2 list-decimal">${line.replace(/^\d+\.\s/, '')}</li>`;
        }
        
        // Tables (simple approach)
        if (line.startsWith('|')) {
          return `<div class="overflow-x-auto my-4"><code class="text-sm">${line}</code></div>`;
        }
        
        // Empty lines become paragraph breaks
        if (line.trim() === '') {
          return '<br/>';
        }
        
        // Regular paragraphs
        return `<p class="mb-4 text-muted-foreground leading-relaxed">${line}</p>`;
      })
      .join('');
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{article.title} | SPICE Guide</title>
        <meta name="description" content={article.excerpt} />
        <link rel="canonical" href={`https://thespiceapp.com/guide/article/${article.slug}`} />
      </Helmet>
      
      <Header />
      <Breadcrumbs />
      
      <main className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Button 
            variant="ghost" 
            onClick={() => navigate(-1)}
            className="mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>

          {/* Article Header */}
          <article>
            {/* Hero Image */}
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary text-primary-foreground mb-4">
                  {article.category}
                </span>
                <h1 className="text-3xl md:text-4xl font-black text-foreground">
                  {article.title}
                </h1>
              </div>
            </div>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8 pb-8 border-b border-border">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(article.publishedDate)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{article.readTime}</span>
              </div>
            </div>

            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {article.tags.map((tag, idx) => (
                  <span 
                    key={idx}
                    className="inline-flex items-center gap-1 px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Excerpt */}
            <div className="glass-card rounded-xl p-6 border-gradient mb-8">
              <p className="text-lg text-muted-foreground italic">
                {article.excerpt}
              </p>
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: formatContent(article.content) }}
            />

            {/* Bottom CTA */}
            <div className="mt-16 glass-card rounded-2xl p-8 border-gradient text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to explore?</h3>
              <p className="text-muted-foreground mb-6">
                Take our compatibility quiz to discover more about yourself and find like-minded connections.
              </p>
              <Link 
                to="/quiz"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                Take the BDSM Quiz
              </Link>
            </div>
          </article>
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

export default ArticleDetail;
