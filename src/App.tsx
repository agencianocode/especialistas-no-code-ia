import React from 'react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import TestPage from "./pages/TestPage";
import Index from "./pages/Index";
import Universidad from "./pages/Universidad";
import UniversidadComunidad from "./pages/UniversidadComunidad";
import UniversidadCursoDetalle from "./pages/UniversidadCursoDetalle";
import UniversidadCursos from "./pages/UniversidadCursos";
import UniversidadDashboard from "./pages/UniversidadDashboard";
import UniversidadEventoDetalle from "./pages/UniversidadEventoDetalle";
import UniversidadEventos from "./pages/UniversidadEventos";
import UniversidadGuias from "./pages/UniversidadGuias";
import UniversidadLeccion from "./pages/UniversidadLeccion";
import UniversidadTalleres from "./pages/UniversidadTalleres";
import Guias from "./pages/Guias";
import Articulos from "./pages/Articulos";
import Herramientas from "./pages/Herramientas";
import Podcast from "./pages/Podcast";
import Talleres from "./pages/Talleres";
import Login from "./pages/Login";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/test" element={<TestPage />} />
            
            {/* Páginas principales */}
            <Route path="/universidad" element={<Universidad />} />
            <Route path="/guias" element={<Guias />} />
            <Route path="/articulos" element={<Articulos />} />
            <Route path="/herramientas" element={<Herramientas />} />
            <Route path="/podcast" element={<Podcast />} />
            <Route path="/talleres" element={<Talleres />} />
            <Route path="/login" element={<Login />} />
            
            {/* Páginas de la Universidad */}
            <Route path="/universidad/comunidad" element={<UniversidadComunidad />} />
            <Route path="/universidad/curso/:id" element={<UniversidadCursoDetalle />} />
            <Route path="/universidad/cursos" element={<UniversidadCursos />} />
            <Route path="/universidad/dashboard" element={<UniversidadDashboard />} />
            <Route path="/universidad/evento/:id" element={<UniversidadEventoDetalle />} />
            <Route path="/universidad/eventos" element={<UniversidadEventos />} />
            <Route path="/universidad/guias" element={<UniversidadGuias />} />
            <Route path="/universidad/leccion/:id" element={<UniversidadLeccion />} />
            <Route path="/universidad/talleres" element={<UniversidadTalleres />} />
            
            <Route path="*" element={<Index />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
