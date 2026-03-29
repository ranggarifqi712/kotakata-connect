import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import BottomNav from "@/components/BottomNav";
import WelcomeScreen from "./pages/WelcomeScreen";
import Onboarding from "./pages/Onboarding";
import Dashboard from "./pages/Dashboard";
import VoiceRoom from "./pages/VoiceRoom";
import Quests from "./pages/Quests";
import Tokens from "./pages/Tokens";
import VTuberSession from "./pages/VTuberSession";
import ClassProgression from "./pages/ClassProgression";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="max-w-md mx-auto min-h-screen relative">
          <Routes>
            <Route path="/" element={<WelcomeScreen />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/home" element={<Dashboard />} />
            <Route path="/room/:roomId" element={<VoiceRoom />} />
            <Route path="/quests" element={<Quests />} />
            <Route path="/tokens" element={<Tokens />} />
            <Route path="/vtuber-session" element={<VTuberSession />} />
            <Route path="/progression" element={<ClassProgression />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <BottomNav />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
