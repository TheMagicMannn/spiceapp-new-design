import { useLocation, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// Import article data for dynamic breadcrumb names
import { allArticles } from "@/data/articleContent";
import { safetyArticles } from "@/data/safetyArticles";
import { selfCareArticles } from "@/data/selfCareArticles";
import { communityArticles } from "@/data/communityArticles";

const getAllArticles = () => [
  ...allArticles,
  ...safetyArticles,
  ...selfCareArticles,
  ...communityArticles,
];

const routeNames: Record<string, string> = {
  "/": "Home",
  "/spice-app": "SPICE App",
  "/about": "About Us",
  "/team": "Our Team",
  "/contact": "Contact",
  "/quiz": "Lifestyle Quizzes",
  "/quiz/bdsm": "BDSM Quiz",
  "/quiz/hotwifing": "Hotwifing Quiz",
  "/quiz/swinging": "Swinging Quiz",
  "/guide": "SPICE Guide",
  "/guide/newcomers": "For the Interested/Curious",
  "/guide/how-to": "How To",
  "/guide/community": "Community & Lifestyles",
  "/guide/glossary": "Glossary",
  "/guide/safety": "Safety",
  "/guide/self-care": "Self Care Resources",
  "/download": "Download SPICE",
  "/support": "Support",
  "/support/help": "Help Center",
  "/support/technical": "Technical Resources",
  "/support/report": "Report an Issue",
  "/start": "Start Here",
  "/start/myths": "Common Myths",
  "/start/etiquette": "Lifestyle Etiquette",
  "/start/consent-basics": "Consent Basics",
  "/start/beginner-faq": "Beginner FAQ",
  "/academy": "SPICE Academy",
  "/academy/modules": "Learning Modules",
  "/academy/journeys": "Guided Journeys",
  "/academy/consent": "Consent Modules",
  "/tools": "Tools",
  "/tools/app-comparisons": "App Comparisons",
  "/tools/feature-comparison": "Feature Comparison",
  "/tools/sti-resources": "STI Resources",
  "/vs": "App Comparisons",
  "/vs/feeld": "SPICE vs Feeld",
  "/vs/3fun": "SPICE vs 3Fun",
  "/vs/sdc": "SPICE vs SDC",
  "/vs/kasidie": "SPICE vs Kasidie",
  "/vs/sls": "SPICE vs SLS",
};

const Breadcrumbs = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  // Don't show breadcrumbs on homepage
  if (currentPath === "/") return null;

  const pathSegments = currentPath.split("/").filter(Boolean);
  const breadcrumbItems: { path: string; name: string }[] = [
    { path: "/", name: "Home" },
  ];

  // Check if this is an article page
  const isArticlePage = pathSegments[0] === "guide" && pathSegments[1] === "article" && pathSegments[2];
  
  if (isArticlePage) {
    // For article pages, show: Home > SPICE Guide > Article Title
    breadcrumbItems.push({ path: "/guide", name: "SPICE Guide" });
    
    // Find the article to get its title
    const slug = pathSegments[2];
    const article = getAllArticles().find(a => a.slug === slug);
    const articleName = article?.title || slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    
    // Don't add a link for the article itself (it's the current page)
    breadcrumbItems.push({ path: currentPath, name: articleName });
  } else {
    // Build breadcrumb trail for non-article pages
    let currentPathBuild = "";
    pathSegments.forEach((segment, index) => {
      currentPathBuild += `/${segment}`;
      
      // Special handling for /guide parent
      if (segment === "guide" && index < pathSegments.length - 1) {
        breadcrumbItems.push({ path: "/guide", name: "SPICE Guide" });
      } 
      // Special handling for /support parent
      else if (segment === "support" && index < pathSegments.length - 1) {
        breadcrumbItems.push({ path: "/support", name: "Support" });
      }
      // Special handling for /start parent
      else if (segment === "start" && index < pathSegments.length - 1) {
        breadcrumbItems.push({ path: "/start", name: "Start Here" });
      }
      // Special handling for /quiz parent (for sub-quizzes)
      else if (segment === "quiz" && index < pathSegments.length - 1) {
        breadcrumbItems.push({ path: "/quiz", name: "Lifestyle Quizzes" });
      }
      // Special handling for /tools parent
      else if (segment === "tools" && index < pathSegments.length - 1) {
        breadcrumbItems.push({ path: "/tools", name: "Tools" });
      }
      else if (segment !== "guide") {
        const name = routeNames[currentPathBuild] || segment.charAt(0).toUpperCase() + segment.slice(1);
        breadcrumbItems.push({ path: currentPathBuild, name });
      }
    });
  }

  // Generate JSON-LD structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://thespiceapp.com${item.path}`,
    })),
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <div className="fixed top-16 left-0 right-0 z-40 glass-card border-b border-border/30 py-2 px-4">
        <div className="container mx-auto">
          <Breadcrumb>
            <BreadcrumbList>
              {breadcrumbItems.map((item, index) => (
                <BreadcrumbItem key={item.path + index}>
                  {index === breadcrumbItems.length - 1 ? (
                    <BreadcrumbPage className="max-w-[200px] truncate">{item.name}</BreadcrumbPage>
                  ) : (
                    <>
                      <BreadcrumbLink asChild>
                        <Link to={item.path}>{item.name}</Link>
                      </BreadcrumbLink>
                      <BreadcrumbSeparator />
                    </>
                  )}
                </BreadcrumbItem>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </>
  );
};

export default Breadcrumbs;
