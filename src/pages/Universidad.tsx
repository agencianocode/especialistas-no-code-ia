import SectionHeader from "@/components/shared/SectionHeader";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Universidad() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Universidad — IA al Día",
  };

  return (
    <main className="container mx-auto px-4 py-12 md:py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <SectionHeader title="Universidad IA al Día" subtitle="Cursos estructurados y rutas de aprendizaje" />
      <Card className="bg-gradient-to-r from-[hsl(var(--primary)/0.08)] to-[hsl(var(--primary-glow)/0.1)]">
        <CardHeader>
          <CardTitle>Próximamente</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Estamos preparando un plan de estudio completo. Déjanos tu correo para avisarte.</p>
          <div className="mt-4">
            <Button variant="hero">Quiero ser el primero</Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
