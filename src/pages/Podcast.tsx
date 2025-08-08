import ResponsiveHeader from "@/components/shared/ResponsiveHeader";
import SectionHeader from "@/components/shared/SectionHeader";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, Clock, Users, Star, ArrowRight } from "lucide-react";

export default function Podcast() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Podcast — IA al Día",
  };

  const episodes = [
    { title: "Episodio 1: Introducción a la IA", duration: "45 min", date: "Hoy" },
    { title: "Episodio 2: Machine Learning Básico", duration: "52 min", date: "Ayer" },
    { title: "Episodio 3: Herramientas de IA", duration: "38 min", date: "Esta semana" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <ResponsiveHeader />
      <main className="container mx-auto px-4 py-12 md:py-16">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
        <SectionHeader title="Podcast" subtitle="Escucha las últimas novedades en IA" />
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {episodes.map((episode, i) => (
            <Card key={i} className="hover:translate-y-[-2px] hover:shadow-[var(--shadow-elevated)] transition-all">
              <CardHeader>
                <CardTitle className="text-base">{episode.title}</CardTitle>
                <CardDescription>{episode.duration} • {episode.date}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
