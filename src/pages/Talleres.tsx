import ResponsiveHeader from "@/components/shared/ResponsiveHeader";
import SectionHeader from "@/components/shared/SectionHeader";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, Star, ArrowRight } from "lucide-react";

export default function Talleres() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Talleres — IA al Día",
  };

  const workshops = [
    { title: "Taller de Prompting", date: "Próximo", duration: "2 horas" },
    { title: "Workshop de RAG", date: "En 2 semanas", duration: "3 horas" },
    { title: "Sesión de Automatización", date: "En 1 mes", duration: "4 horas" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <ResponsiveHeader />
      <main className="container mx-auto px-4 py-12 md:py-16">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
        <SectionHeader title="Talleres" subtitle="Aprende con expertos en sesiones prácticas" />
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {workshops.map((workshop, i) => (
            <Card key={i} className="hover:translate-y-[-2px] hover:shadow-[var(--shadow-elevated)] transition-all">
              <CardHeader>
                <CardTitle className="text-base">{workshop.title}</CardTitle>
                <CardDescription>{workshop.duration} • {workshop.date}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
