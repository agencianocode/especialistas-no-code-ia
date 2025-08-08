import ResponsiveHeader from "@/components/shared/ResponsiveHeader";
import SectionHeader from "@/components/shared/SectionHeader";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, ArrowRight, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Articulos() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Artículos — IA al Día",
  };

  const articles = [
    { title: "El potencial doble de Gemini", tag: "Noticias", date: "Hoy", excerpt: "Análisis y roadmap de capacidades.", image: "/placeholder.svg" },
    { title: "Lanzamientos clave de la semana", tag: "Actualidad", date: "Ayer", image: "/placeholder.svg" },
    { title: "Cómo elegir la mejor herramienta de IA", tag: "Guías", date: "Ayer", image: "/placeholder.svg" },
    { title: "Riesgos y oportunidades de los agentes", tag: "Análisis", date: "Esta semana", image: "/placeholder.svg" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <ResponsiveHeader />
      <main className="container mx-auto px-4 py-12 md:py-16">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
        <SectionHeader title="Artículos" subtitle="Las últimas noticias y análisis de IA" />
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {articles.map((article, i) => (
            <Card key={i} className="hover:translate-y-[-2px] hover:shadow-[var(--shadow-elevated)] transition-all">
              <CardHeader>
                <CardTitle className="text-base">{article.title}</CardTitle>
                <CardDescription>{article.excerpt}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
