import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Articulos from "./pages/Articulos";
import Guias from "./pages/Guias";
import Herramientas from "./pages/Herramientas";
import Podcast from "./pages/Podcast";
import Talleres from "./pages/Talleres";
import Universidad from "./pages/Universidad";
import UniversidadDashboard from "./pages/UniversidadDashboard";
import UniversidadCursos from "./pages/UniversidadCursos";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/articulos" element={<Articulos />} />
          <Route path="/guias" element={<Guias />} />
          <Route path="/herramientas" element={<Herramientas />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/talleres" element={<Talleres />} />
          <Route path="/universidad" element={<Universidad />} />
          <Route path="/universidad/dashboard" element={<UniversidadDashboard />} />
          <Route path="/universidad/cursos" element={<UniversidadCursos />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
