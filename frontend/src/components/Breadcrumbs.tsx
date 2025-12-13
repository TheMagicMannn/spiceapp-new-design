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

const routeNames: Record<string, string> = {
  "/": "Home",
  "/spice-app": "SPICE App",
  "/about": "About Us",
  "/team": "Our Team",
  "/contact": "Contact",
  "/quiz": "BDSM Quiz",
  "/guide/newcomers": "For the Interested/Curious",
  "/guide/how-to": "How To",
  "/guide/community": "Community & Lifestyles",
  "/guide/glossary": "Glossary",
  "/guide/safety": "Safety",
  "/guide/self-care": "Self Care Resources",
  "/download": "Download SPICE",
};

const parentRoutes: Record<string, string> = {
  "/guide/newcomers": "/guide",
  "/guide/how-to": "/guide",
  "/guide/community": "/guide",
  "/guide/glossary": "/guide",
  "/guide/safety": "/guide",
  "/guide/self-care": "/guide",
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

  // Build breadcrumb trail
  let currentPathBuild = "";
  pathSegments.forEach((segment, index) => {
    currentPathBuild += `/${segment}`;
    
    // Special handling for /guide parent
    if (segment === "guide" && index < pathSegments.length - 1) {
      breadcrumbItems.push({ path: "/guide/newcomers", name: "SPICE Guide" });
    } else if (segment !== "guide") {
      const name = routeNames[currentPathBuild] || segment.charAt(0).toUpperCase() + segment.slice(1);
      breadcrumbItems.push({ path: currentPathBuild, name });
    }
  });

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
                <BreadcrumbItem key={item.path}>
                  {index === breadcrumbItems.length - 1 ? (
                    <BreadcrumbPage>{item.name}</BreadcrumbPage>
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
