import SectionHeader from "@/components/shared/SectionHeader";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function Talleres() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Talleres — IA al Día",
  };

  const workshops = [
    { title: "Prompting aplicado", desc: "Sesión práctica" },
    { title: "Automatizaciones con IA", desc: "2 horas intensivas" },
  ];

  return (
    <main className="container mx-auto px-4 py-12 md:py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <SectionHeader title="Talleres" subtitle="Aprende en vivo con ejercicios" />
      <div className="grid gap-4 sm:grid-cols-2">
        {workshops.map((w, i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle className="text-base">{w.title}</CardTitle>
              <CardDescription>{w.desc}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </main>
  );
}
