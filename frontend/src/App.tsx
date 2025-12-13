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
import NewcomersGuide from "./pages/NewcomersGuide";
import HowTo from "./pages/HowTo";
import CommunityLifestyles from "./pages/CommunityLifestyles";
import Glossary from "./pages/Glossary";
import Safety from "./pages/Safety";
import SelfCare from "./pages/SelfCare";
import Download from "./pages/Download";
import ArticleDetail from "./pages/ArticleDetail";
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
            <Route path="/guide/newcomers" element={<NewcomersGuide />} />
            <Route path="/guide/how-to" element={<HowTo />} />
            <Route path="/guide/community" element={<CommunityLifestyles />} />
            <Route path="/guide/glossary" element={<Glossary />} />
            <Route path="/guide/safety" element={<Safety />} />
            <Route path="/guide/self-care" element={<SelfCare />} />
            <Route path="/download" element={<Download />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
