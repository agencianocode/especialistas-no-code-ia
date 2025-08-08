import SectionHeader from "@/components/shared/SectionHeader";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function Herramientas() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Herramientas — IA al Día",
  };

  const tools = ["ChatGPT", "Claude", "Gemini", "Midjourney", "Perplexity", "NotebookLM"];

  return (
    <main className="container mx-auto px-4 py-12 md:py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <SectionHeader title="Herramientas" subtitle="Seleccionadas para aumentar tu productividad" />
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {tools.map((t, i) => (
          <Card key={i} className="text-center">
            <CardHeader>
              <CardTitle className="text-base">{t}</CardTitle>
              <CardDescription>
                <span className="rounded-md border bg-muted px-2 py-1 text-xs text-muted-foreground">Ver</span>
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </main>
  );
}
