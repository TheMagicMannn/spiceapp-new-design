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
import HotwifingQuiz from "./pages/HotwifingQuiz";
import SwingingQuiz from "./pages/SwingingQuiz";
import ENMQuiz from "./pages/ENMQuiz";
import QuizLanding from "./pages/QuizLanding";
import FAQ from "./pages/FAQ";
import SpiceGuide from "./pages/SpiceGuide";
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
import ComparisonKasidie from "./pages/ComparisonKasidie";
import ComparisonSLS from "./pages/ComparisonSLS";
import HotwifingGuide from "./pages/HotwifingGuide";
import SwingersGuide from "./pages/SwingersGuide";
import BDSMGuide from "./pages/BDSMGuide";
import TravelMiami from "./pages/TravelMiami";
import BlogHome from "./pages/BlogHome";
import AppComparisons from "./pages/AppComparisons";
import Tools from "./pages/Tools";
import ENMPolyamoryGuide from "./pages/ENMPolyamoryGuide";
import RelationshipsCommunication from "./pages/RelationshipsCommunication";
import JealousyManagement from "./pages/JealousyManagement";
import SafetyVerification from "./pages/SafetyVerification";
import AIMatching from "./pages/AIMatching";
import WhyDifferent from "./pages/WhyDifferent";
import OurStory from "./pages/OurStory";
import ConsentBasics from "./pages/ConsentBasics";
import LifestyleEtiquette from "./pages/LifestyleEtiquette";
import CommonMyths from "./pages/CommonMyths";
import BeginnerLifestyleFAQ from "./pages/BeginnerLifestyleFAQ";
import Academy from "./pages/Academy";
import AcademyModules from "./pages/AcademyModules";
import GuidedJourneys from "./pages/GuidedJourneys";
import Travel from "./pages/Travel";
import TravelNewOrleans from "./pages/TravelNewOrleans";
import TravelOrlando from "./pages/TravelOrlando";
import TravelCancun from "./pages/TravelCancun";
import TravelInternational from "./pages/TravelInternational";
import ClubsResorts from "./pages/ClubsResorts";
import CityGuides from "./pages/CityGuides";
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
import BlogSwinging101 from "./pages/BlogSwinging101";
import BlogSwingingMistakes from "./pages/BlogSwingingMistakes";
import BlogSwingingMarriage from "./pages/BlogSwingingMarriage";
import BlogSwingingFindingCouples from "./pages/BlogSwingingFindingCouples";
import BlogSwingingJealousy from "./pages/BlogSwingingJealousy";
import BlogSwingingSoftFullSwap from "./pages/BlogSwingingSoftFullSwap";
import BlogSwingingEtiquette from "./pages/BlogSwingingEtiquette";
import BlogSwingingVacation from "./pages/BlogSwingingVacation";
import BlogSwingingHealthSafety from "./pages/BlogSwingingHealthSafety";
import BlogSwingingKeepingSpark from "./pages/BlogSwingingKeepingSpark";
import BlogCategory from "./pages/BlogCategory";

// Consent & Safety Blog Articles
import BlogConsentGoldenRules from "./pages/BlogConsentGoldenRules";
import BlogRedFlagsGreenFlags from "./pages/BlogRedFlagsGreenFlags";
import BlogSaferSexGuide from "./pages/BlogSaferSexGuide";
import BlogSoloDatesSafety from "./pages/BlogSoloDatesSafety";
import BlogConsentViolations from "./pages/BlogConsentViolations";
import BlogConsentCheckIns from "./pages/BlogConsentCheckIns";
import BlogAlcoholSubstancesConsent from "./pages/BlogAlcoholSubstancesConsent";
import BlogDigitalSafetyFirst from "./pages/BlogDigitalSafetyFirst";
import BlogAftercareEmotionalSafety from "./pages/BlogAftercareEmotionalSafety";
import BlogTeachingConsentNextGen from "./pages/BlogTeachingConsentNextGen";

// Support Pages
import Support from "./pages/Support";
import HelpCenter from "./pages/HelpCenter";
import TechnicalResources from "./pages/TechnicalResources";
import ReportIssue from "./pages/ReportIssue";
import StartHere from "./pages/StartHere";
import STIResources from "./pages/STIResources";

// BDSM & Kink Blog Articles
import BlogBDSMBeginners from "./pages/BlogBDSMBeginners";
import BlogBDSMAftercareGuide from "./pages/BlogBDSMAftercareGuide";
import BlogBDSMNegotiationChecklist from "./pages/BlogBDSMNegotiationChecklist";
import BlogKinkMentalHealth from "./pages/BlogKinkMentalHealth";
import BlogBeginnerFriendlyKinks from "./pages/BlogBeginnerFriendlyKinks";
import BlogFindingKinkCommunity from "./pages/BlogFindingKinkCommunity";
import BlogSwitchingDynamics from "./pages/BlogSwitchingDynamics";
import BlogKinkOnBudget from "./pages/BlogKinkOnBudget";
import BlogLongDistanceBDSM from "./pages/BlogLongDistanceBDSM";
import BlogComingOutKinky from "./pages/BlogComingOutKinky";

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
            <Route path="/quiz" element={<QuizLanding />} />
            <Route path="/quiz/bdsm" element={<BDSMQuiz />} />
            <Route path="/quiz/hotwifing" element={<HotwifingQuiz />} />
            <Route path="/quiz/swinging" element={<SwingingQuiz />} />
            <Route path="/quiz/enm" element={<ENMQuiz />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/guide" element={<SpiceGuide />} />
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
            <Route path="/vs/kasidie" element={<ComparisonKasidie />} />
            <Route path="/vs/sls" element={<ComparisonSLS />} />
            
            {/* Lifestyle Guides */}
            <Route path="/lifestyle" element={<Lifestyle />} />
            <Route path="/lifestyle/hotwifing-guide" element={<HotwifingGuide />} />
            <Route path="/lifestyle/swingers-guide" element={<SwingersGuide />} />
            <Route path="/lifestyle/bdsm-guide" element={<BDSMGuide />} />
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
            <Route path="/tools" element={<Tools />} />
            <Route path="/tools/app-comparisons" element={<AppComparisons />} />
            <Route path="/tools/feature-comparison" element={<FeatureComparison />} />
            
            {/* About SPICE */}
            <Route path="/about/safety-verification" element={<SafetyVerification />} />
            <Route path="/about/ai-matching" element={<AIMatching />} />
            <Route path="/about/why-different" element={<WhyDifferent />} />
            <Route path="/about/our-story" element={<OurStory />} />
            
            {/* Support Pages */}
            <Route path="/support" element={<Support />} />
            <Route path="/support/help" element={<HelpCenter />} />
            <Route path="/support/technical" element={<TechnicalResources />} />
            <Route path="/support/report" element={<ReportIssue />} />
            
            {/* Start Here */}
            <Route path="/start" element={<StartHere />} />
            <Route path="/start/consent-basics" element={<ConsentBasics />} />
            <Route path="/start/etiquette" element={<LifestyleEtiquette />} />
            <Route path="/start/myths" element={<CommonMyths />} />
            <Route path="/start/beginner-faq" element={<BeginnerLifestyleFAQ />} />
            
            {/* Academy */}
            <Route path="/academy" element={<Academy />} />
            <Route path="/academy/modules" element={<AcademyModules />} />
            <Route path="/academy/journeys" element={<GuidedJourneys />} />
            
            {/* Travel - Additional Cities */}
            <Route path="/travel" element={<Travel />} />
            <Route path="/travel/new-orleans" element={<TravelNewOrleans />} />
            <Route path="/travel/orlando" element={<TravelOrlando />} />
            <Route path="/travel/cancun" element={<TravelCancun />} />
            <Route path="/travel/international" element={<TravelInternational />} />
            <Route path="/travel/clubs-resorts" element={<ClubsResorts />} />
            <Route path="/travel/cities" element={<CityGuides />} />
            
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
            <Route path="/tools/sti-resources" element={<STIResources />} />
            
            {/* Blog Posts */}
            <Route path="/blog/10-signs-ready-lifestyle" element={<BlogPost10Signs />} />
            <Route path="/blog/talk-partner-opening-relationship" element={<BlogTalkToPartner />} />
            <Route path="/blog/bdsm-safety-checklist" element={<BlogBDSMSafety />} />
            
            {/* Hotwifing Blog Articles */}
            <Route path="/blog/hotwifing-beginners-guide" element={<BlogHotwifingBeginnersGuide />} />
            <Route path="/blog/hotwifing-jealousy" element={<BlogHotwifingJealousy />} />
            <Route path="/blog/hotwifing-first-date" element={<BlogHotwifingFirstDate />} />
            <Route path="/blog/hotwifing-finding-bull" element={<BlogHotwifingFindingBull />} />
            <Route path="/blog/hotwifing-reclamation-sex" element={<BlogHotwifingReclamationSex />} />
            <Route path="/blog/hotwifing-fantasy-reality" element={<BlogHotwifingFantasyReality />} />
            <Route path="/blog/hotwifing-creative-dates" element={<BlogHotwifingCreativeDates />} />
            <Route path="/blog/hotwifing-year-review" element={<BlogHotwifingYearReview />} />
            <Route path="/blog/hotwifing-toys-kink" element={<BlogHotwifingToysKink />} />
            <Route path="/blog/hotwifing-communication-marriage" element={<BlogHotwifingCommunicationMarriage />} />
            
            {/* Swinging Blog Articles */}
            <Route path="/blog/swinging-101-beginners-guide" element={<BlogSwinging101 />} />
            <Route path="/blog/swinging-mistakes-avoid" element={<BlogSwingingMistakes />} />
            <Route path="/blog/swinging-strengthened-marriage" element={<BlogSwingingMarriage />} />
            <Route path="/blog/swinging-finding-couples" element={<BlogSwingingFindingCouples />} />
            <Route path="/blog/swinging-jealousy-tools" element={<BlogSwingingJealousy />} />
            <Route path="/blog/swinging-soft-full-swap" element={<BlogSwingingSoftFullSwap />} />
            <Route path="/blog/swinging-etiquette-rules" element={<BlogSwingingEtiquette />} />
            <Route path="/blog/swinging-vacation-guide" element={<BlogSwingingVacation />} />
            <Route path="/blog/swinging-health-safety" element={<BlogSwingingHealthSafety />} />
            <Route path="/blog/swinging-keeping-spark" element={<BlogSwingingKeepingSpark />} />
            
            {/* BDSM & Kink Blog Articles */}
            <Route path="/blog/bdsm-beginners-guide" element={<BlogBDSMBeginners />} />
            <Route path="/blog/bdsm-aftercare-guide" element={<BlogBDSMAftercareGuide />} />
            <Route path="/blog/bdsm-negotiation-checklist" element={<BlogBDSMNegotiationChecklist />} />
            <Route path="/blog/kink-mental-health" element={<BlogKinkMentalHealth />} />
            <Route path="/blog/beginner-friendly-kinks" element={<BlogBeginnerFriendlyKinks />} />
            <Route path="/blog/finding-kink-community" element={<BlogFindingKinkCommunity />} />
            <Route path="/blog/switching-dynamics" element={<BlogSwitchingDynamics />} />
            <Route path="/blog/kink-on-budget" element={<BlogKinkOnBudget />} />
            <Route path="/blog/long-distance-bdsm" element={<BlogLongDistanceBDSM />} />
            <Route path="/blog/coming-out-kinky" element={<BlogComingOutKinky />} />
            
            {/* Consent & Safety Blog Articles */}
            <Route path="/blog/consent-golden-rules" element={<BlogConsentGoldenRules />} />
            <Route path="/blog/red-flags-green-flags" element={<BlogRedFlagsGreenFlags />} />
            <Route path="/blog/safer-sex-guide-2026" element={<BlogSaferSexGuide />} />
            <Route path="/blog/solo-dates-safety" element={<BlogSoloDatesSafety />} />
            <Route path="/blog/consent-violations" element={<BlogConsentViolations />} />
            <Route path="/blog/consent-check-ins-sexy" element={<BlogConsentCheckIns />} />
            <Route path="/blog/alcohol-substances-consent" element={<BlogAlcoholSubstancesConsent />} />
            <Route path="/blog/digital-safety-first" element={<BlogDigitalSafetyFirst />} />
            <Route path="/blog/aftercare-emotional-safety" element={<BlogAftercareEmotionalSafety />} />
            <Route path="/blog/teaching-consent-next-generation" element={<BlogTeachingConsentNextGen />} />
            
            {/* Blog Category Pages (must come after specific article routes) */}
            <Route path="/blog/:category" element={<BlogCategory />} />
            
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
