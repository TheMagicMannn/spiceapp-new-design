import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { Helmet } from "react-helmet-async";

interface BreadcrumbItem {
  name: string;
  path: string;
}

const routeNames: Record<string, string> = {
  "/": "Home",
  "/spice-app": "SPICE App",
  "/about": "About Us",
  "/team": "Our Team",
  "/contact": "Contact",
  "/quiz": "BDSM Quiz",
};

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Don't show breadcrumbs on homepage
  if (location.pathname === "/") return null;

  const breadcrumbItems: BreadcrumbItem[] = [
    { name: "Home", path: "/" },
    ...pathnames.map((_, index) => {
      const path = `/${pathnames.slice(0, index + 1).join("/")}`;
      return {
        name: routeNames[path] || pathnames[index],
        path,
      };
    }),
  ];

  // Generate JSON-LD structured data for breadcrumbs
  const breadcrumbSchema = {
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
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
      <nav
        aria-label="Breadcrumb"
        className="container mx-auto px-4 pt-20 pb-2"
      >
        <ol className="flex items-center gap-2 text-sm text-muted-foreground">
          {breadcrumbItems.map((item, index) => {
            const isLast = index === breadcrumbItems.length - 1;

            return (
              <li key={item.path} className="flex items-center gap-2">
                {index === 0 ? (
                  <Link
                    to={item.path}
                    className="flex items-center gap-1 hover:text-primary transition-colors"
                    aria-label="Home"
                  >
                    <Home className="w-4 h-4" />
                    <span className="sr-only">Home</span>
                  </Link>
                ) : isLast ? (
                  <span
                    className="font-medium text-foreground"
                    aria-current="page"
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    to={item.path}
                    className="hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
                {!isLast && (
                  <ChevronRight className="w-4 h-4 text-muted-foreground/50" />
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs;
