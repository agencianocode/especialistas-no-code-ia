import SectionHeader from "@/components/shared/SectionHeader";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function Guias() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Guías — IA al Día",
  };

  const guides = [
    "Prompting efectivo", "Automatiza con IA", "Vision + OCR", "RAG y embeddings", "Herramientas no-code", "Flujos con agentes"
  ];

  return (
    <main className="container mx-auto px-4 py-12 md:py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <SectionHeader title="Guías" subtitle="Aprende conceptos clave con ejemplos" />
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {guides.map((g, i) => (
          <Card key={i} className="hover:translate-y-[-2px] hover:shadow-[var(--shadow-elevated)] transition-all">
            <CardHeader>
              <CardTitle className="text-base">{g}</CardTitle>
              <CardDescription>Lectura de 5–8 minutos</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </main>
  );
}
