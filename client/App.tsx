import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { addSmoothScrollToLinks } from "./lib/smooth-scroll";

const queryClient = new QueryClient();

const App = () => {
  useEffect(() => {
    // Configurar rolagem suave para links âncora
    addSmoothScrollToLinks();

    // Otimizar performance de scroll
    const handleScroll = () => {
      // Throttle scroll events para melhor performance
      requestAnimationFrame(() => {
        // Aqui podem ser adicionados efeitos de parallax ou outros efeitos de scroll
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inicio" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/contrate-nos" element={<ContactPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <FloatingWhatsApp />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

createRoot(document.getElementById("root")!).render(<App />);
