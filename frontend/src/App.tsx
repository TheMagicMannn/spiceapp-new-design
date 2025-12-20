import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import SpiceApp from "./pages/SpiceApp";
import About from "./pages/About";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import BDSMQuiz from "./pages/BDSMQuiz";
import FAQ from "./pages/FAQ";
import NewcomersGuide from "./pages/NewcomersGuide";
import HowTo from "./pages/HowTo";
import CommunityLifestyles from "./pages/CommunityLifestyles";
import Glossary from "./pages/Glossary";
import Safety from "./pages/Safety";
import SelfCare from "./pages/SelfCare";
import Download from "./pages/Download";
import ArticleDetail from "./pages/ArticleDetail";
import CityPage from "./pages/CityPage";
import ComparisonFeeld from "./pages/ComparisonFeeld";
import Comparison3Fun from "./pages/Comparison3Fun";
import ComparisonSDC from "./pages/ComparisonSDC";
import HotwifingGuide from "./pages/HotwifingGuide";
import SwingersGuide from "./pages/SwingersGuide";
import TravelMiami from "./pages/TravelMiami";
import BlogHome from "./pages/BlogHome";
import AppComparisons from "./pages/AppComparisons";
import ENMPolyamoryGuide from "./pages/ENMPolyamoryGuide";
import RelationshipsCommunication from "./pages/RelationshipsCommunication";
import JealousyManagement from "./pages/JealousyManagement";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/spice-app" element={<SpiceApp />} />
            <Route path="/about" element={<About />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/quiz" element={<BDSMQuiz />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/guide/newcomers" element={<NewcomersGuide />} />
            <Route path="/guide/how-to" element={<HowTo />} />
            <Route path="/guide/community" element={<CommunityLifestyles />} />
            <Route path="/guide/glossary" element={<Glossary />} />
            <Route path="/guide/safety" element={<Safety />} />
            <Route path="/guide/self-care" element={<SelfCare />} />
            <Route path="/download" element={<Download />} />
            <Route path="/guide/article/:slug" element={<ArticleDetail />} />
            <Route path="/locations/:citySlug" element={<CityPage />} />
            <Route path="/vs/feeld" element={<ComparisonFeeld />} />
            <Route path="/vs/3fun" element={<Comparison3Fun />} />
            <Route path="/vs/sdc" element={<ComparisonSDC />} />
            
            {/* Lifestyle Guides */}
            <Route path="/lifestyle/hotwifing-guide" element={<HotwifingGuide />} />
            <Route path="/lifestyle/swingers-guide" element={<SwingersGuide />} />
            <Route path="/lifestyle/enm-polyamory-guide" element={<ENMPolyamoryGuide />} />
            <Route path="/lifestyle/relationships-communication" element={<RelationshipsCommunication />} />
            <Route path="/lifestyle/jealousy-management" element={<JealousyManagement />} />
            
            {/* Travel */}
            <Route path="/travel/miami" element={<TravelMiami />} />
            <Route path="/travel/las-vegas" element={<CityPage />} />
            <Route path="/travel/new-york" element={<CityPage />} />
            
            {/* Blog */}
            <Route path="/blog" element={<BlogHome />} />
            
            {/* Tools */}
            <Route path="/tools/app-comparisons" element={<AppComparisons />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
