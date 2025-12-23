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
import SafetyVerification from "./pages/SafetyVerification";
import AIMatching from "./pages/AIMatching";
import WhyDifferent from "./pages/WhyDifferent";
import ConsentBasics from "./pages/ConsentBasics";
import LifestyleEtiquette from "./pages/LifestyleEtiquette";
import CommonMyths from "./pages/CommonMyths";
import Academy from "./pages/Academy";
import AcademyModules from "./pages/AcademyModules";
import Travel from "./pages/Travel";
import TravelNewOrleans from "./pages/TravelNewOrleans";
import TravelOrlando from "./pages/TravelOrlando";
import TravelCancun from "./pages/TravelCancun";
import TravelInternational from "./pages/TravelInternational";
import ClubsResorts from "./pages/ClubsResorts";
import FeatureComparison from "./pages/FeatureComparison";
import BlogPost10Signs from "./pages/BlogPost10Signs";
import BlogTalkToPartner from "./pages/BlogTalkToPartner";
import BlogBDSMSafety from "./pages/BlogBDSMSafety";
import NotFound from "./pages/NotFound";
import CommunityStandards from "./pages/CommunityStandards";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import Legal from "./pages/Legal";
import Lifestyle from "./pages/Lifestyle";
import BlogHotwifingBeginnersGuide from "./pages/BlogHotwifingBeginnersGuide";
import BlogHotwifingJealousy from "./pages/BlogHotwifingJealousy";
import BlogHotwifingFirstDate from "./pages/BlogHotwifingFirstDate";
import BlogHotwifingFindingBull from "./pages/BlogHotwifingFindingBull";
import BlogHotwifingReclamationSex from "./pages/BlogHotwifingReclamationSex";
import BlogHotwifingFantasyReality from "./pages/BlogHotwifingFantasyReality";
import BlogHotwifingCreativeDates from "./pages/BlogHotwifingCreativeDates";
import BlogHotwifingYearReview from "./pages/BlogHotwifingYearReview";
import BlogHotwifingToysKink from "./pages/BlogHotwifingToysKink";
import BlogHotwifingCommunicationMarriage from "./pages/BlogHotwifingCommunicationMarriage";

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
            <Route path="/lifestyle" element={<Lifestyle />} />
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
            <Route path="/tools/feature-comparison" element={<FeatureComparison />} />
            
            {/* About SPICE */}
            <Route path="/about/safety-verification" element={<SafetyVerification />} />
            <Route path="/about/ai-matching" element={<AIMatching />} />
            <Route path="/about/why-different" element={<WhyDifferent />} />
            
            {/* Start Here */}
            <Route path="/start/consent-basics" element={<ConsentBasics />} />
            <Route path="/start/etiquette" element={<LifestyleEtiquette />} />
            <Route path="/start/myths" element={<CommonMyths />} />
            
            {/* Academy */}
            <Route path="/academy" element={<Academy />} />
            <Route path="/academy/modules" element={<AcademyModules />} />
            
            {/* Travel - Additional Cities */}
            <Route path="/travel" element={<Travel />} />
            <Route path="/travel/new-orleans" element={<TravelNewOrleans />} />
            <Route path="/travel/orlando" element={<TravelOrlando />} />
            <Route path="/travel/cancun" element={<TravelCancun />} />
            <Route path="/travel/international" element={<TravelInternational />} />
            <Route path="/travel/clubs-resorts" element={<ClubsResorts />} />
            
            {/* Academy - Additional */}
            <Route path="/academy/consent" element={<ConsentBasics />} />
            <Route path="/academy/journeys" element={<ConsentBasics />} />
            
            {/* Support & Legal */}
            <Route path="/legal" element={<Legal />} />
            <Route path="/legal/terms" element={<TermsOfService />} />
            <Route path="/legal/privacy" element={<PrivacyPolicy />} />
            <Route path="/legal/cookies" element={<CookiePolicy />} />
            <Route path="/legal/community-standards" element={<CommunityStandards />} />
            <Route path="/support/help" element={<ConsentBasics />} />
            <Route path="/support/report" element={<ConsentBasics />} />
            <Route path="/newsletter" element={<ConsentBasics />} />
            <Route path="/tools/sti-resources" element={<ConsentBasics />} />
            
            {/* Blog Categories (Placeholders) */}
            <Route path="/blog/swingers" element={<BlogHome />} />
            <Route path="/blog/hotwifing" element={<BlogHome />} />
            <Route path="/blog/bdsm" element={<BlogHome />} />
            <Route path="/blog/enm" element={<BlogHome />} />
            <Route path="/blog/consent" element={<BlogHome />} />
            <Route path="/blog/travel" element={<BlogHome />} />
            <Route path="/blog/relationships" element={<BlogHome />} />
            
            {/* Blog Posts */}
            <Route path="/blog/10-signs-ready-lifestyle" element={<BlogPost10Signs />} />
            <Route path="/blog/talk-partner-opening-relationship" element={<BlogTalkToPartner />} />
            <Route path="/blog/bdsm-safety-checklist" element={<BlogBDSMSafety />} />
            
            {/* City Pages - Additional */}
            <Route path="/locations/chicago-il" element={<CityPage />} />
            <Route path="/locations/san-francisco-ca" element={<CityPage />} />
            <Route path="/locations/atlanta-ga" element={<CityPage />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
