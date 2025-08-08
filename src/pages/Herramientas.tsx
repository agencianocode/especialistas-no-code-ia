import ResponsiveHeader from "@/components/shared/ResponsiveHeader";
import SectionHeader from "@/components/shared/SectionHeader";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Star, ExternalLink } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Herramientas() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Herramientas — IA al Día",
  };

  const tools = [
    "ChatGPT", "Claude", "Gemini", "Midjourney", "Perplexity", "NotebookLM"
  ];

  return (
    <div className="min-h-screen bg-background">
      <ResponsiveHeader />
      <main className="container mx-auto px-4 py-12 md:py-16">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
        <SectionHeader title="Herramientas" subtitle="Explora las mejores herramientas de IA" />
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {tools.map((tool, i) => (
            <Card key={i} className="hover:translate-y-[-2px] hover:shadow-[var(--shadow-elevated)] transition-all">
              <CardHeader>
                <CardTitle className="text-base">{tool}</CardTitle>
                <CardDescription>Herramienta de IA</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
