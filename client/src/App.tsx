import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";
import Home from "./pages/Home";
import About from "./pages/About";
import HowItWorks from "./pages/HowItWorks";
import Questionnaire from "./pages/Questionnaire";
import Contact from "./pages/Contact";
import Imprint from "./pages/Imprint";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import CookiePolicy from "./pages/CookiePolicy";
import AudioContent from "./pages/AudioContent";
import VideoContent from "./pages/VideoContent";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Portfolio from "./pages/Portfolio";
import ForAICompanies from "./pages/ForAICompanies";
import ForContentOwners from "./pages/ForContentOwners";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <CookieConsent />
      <main className="flex-1">
        <Switch>
          <Route path={"/"} component={Home} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/for-content-owners" component={ForContentOwners} />
          <Route path="/for-ai-companies" component={ForAICompanies} />
          <Route path="/about" component={About} />
          <Route path="/how-it-works" component={HowItWorks} />
          <Route path={"/questionnaire"} component={Questionnaire} />
          <Route path={"/blog"} component={Blog} />
          <Route path={"/blog/:slug"} component={BlogPost} />
          <Route path="/contact" component={Contact} />
          <Route path="/audio-content" component={AudioContent} />
          <Route path="/video-content" component={VideoContent} />
          <Route path="/imprint" component={Imprint} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/cookie-policy" component={CookiePolicy} />
          <Route path="/terms" component={Terms} />
          <Route path={"/404"} component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
