import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, ArrowRight, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const dummyArticles = [
  { title: "El potencial doble de Gemini", tag: "Noticias", date: "Hoy" },
  { title: "Lanzamientos clave de la semana", tag: "Actualidad", date: "Ayer" },
  { title: "Cómo elegir la mejor herramienta de IA", tag: "Guías", date: "Ayer" },
];

const dummyGuides = [
  "Prompting efectivo", "Automatiza con IA", "Vision + OCR", "RAG y embeddings", "Herramientas no-code", "Flujos con agentes"
];

const dummyTools = [
  "ChatGPT", "Claude", "Gemini", "Midjourney", "Perplexity", "NotebookLM"
];

export default function Index() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const onSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast({ title: "¡Gracias por suscribirte!", description: "Te enviaremos un resumen diario de IA." });
    setEmail("");
  };

  const ld = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "IA al Día",
    url: "/",
    potentialAction: {
      "@type": "SearchAction",
      target: "/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <header className="sticky top-0 z-40 w-full border-b border-border/50 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <a href="/" className="flex items-center gap-2 font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary-glow))] bg-clip-text text-transparent">IA al Día</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#articulos" className="hover:text-foreground transition-colors">Artículos</a>
            <a href="#guias" className="hover:text-foreground transition-colors">Guías</a>
            <a href="#herramientas" className="hover:text-foreground transition-colors">Herramientas</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="soft" size="sm">Iniciar sesión</Button>
            <Button variant="hero" size="sm">Suscribirse</Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,hsl(var(--primary)/0.1),transparent)]" />
          <div className="container mx-auto grid gap-8 px-4 py-16 md:py-24">
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card px-3 py-1 text-xs text-muted-foreground">
                <Sparkles className="h-3.5 w-3.5" />
                Aprenda IA en 5 minutos al día
              </div>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-6xl">
                Aprenda IA en <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary-glow))]">5 minutos</span> al día.
              </h1>
              <p className="mt-4 text-lg text-muted-foreground md:text-xl">
                Resúmenes claros, guías prácticas y herramientas seleccionadas. Todo en español.
              </p>
              <form onSubmit={onSubscribe} className="mt-8 flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <label htmlFor="email" className="sr-only">Correo electrónico</label>
                <div className="w-full max-w-md">
                  <Input id="email" type="email" required placeholder="Tu correo" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <Button type="submit" variant="hero" size="lg" className="w-full sm:w-auto">
                  <Mail className="mr-1.5" /> Suscribirse
                </Button>
              </form>
              <p className="mt-3 text-sm text-muted-foreground">Únete a más de 120,000 lectores.</p>
            </div>
          </div>
        </section>

        {/* Últimos artículos */}
        <section id="articulos" className="container mx-auto px-4 py-12 md:py-16">
          <header className="mb-6 text-center">
            <h2 className="text-3xl font-bold">Últimos artículos</h2>
            <p className="mt-1 text-muted-foreground">Lo más reciente en noticias, guías y análisis.</p>
          </header>
          <div className="grid gap-6 md:grid-cols-3">
            {dummyArticles.map((a, i) => (
              <Card key={i} className="group hover:shadow-[var(--shadow-elevated)] transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{a.title}</CardTitle>
                  <CardDescription>{a.tag} · {a.date}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="link" className="p-0">
                    Leer más <ArrowRight className="ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Guías */}
        <section id="guias" className="container mx-auto px-4 py-12 md:py-16">
          <header className="mb-6 text-center">
            <h2 className="text-3xl font-bold">Guías</h2>
            <p className="mt-1 text-muted-foreground">Aprenda conceptos clave de IA con ejemplos prácticos.</p>
          </header>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {dummyGuides.map((g, i) => (
              <Card key={i} className="hover:translate-y-[-2px] hover:shadow-[var(--shadow-elevated)] transition-all">
                <CardHeader>
                  <CardTitle className="text-base">{g}</CardTitle>
                  <CardDescription>Lectura de 5–8 minutos</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Herramientas */}
        <section id="herramientas" className="container mx-auto px-4 py-12 md:py-16">
          <header className="mb-6 text-center">
            <h2 className="text-3xl font-bold">Herramientas de tendencia</h2>
            <p className="mt-1 text-muted-foreground">Seleccionadas y probadas para aumentar tu productividad.</p>
          </header>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {dummyTools.map((t, i) => (
              <Card key={i} className="text-center">
                <CardHeader>
                  <CardTitle className="text-base">{t}</CardTitle>
                  <CardDescription><Button variant="soft" size="sm">Ver</Button></CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Podcast / Estado de la IA */}
        <section className="container mx-auto px-4 py-12 md:py-16">
          <div className="grid items-center gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold">El estado de la IA</h3>
              <p className="mt-2 text-muted-foreground">Un resumen semanal con lo más importante: avances, lanzamientos y oportunidades.</p>
              <div className="mt-4 flex gap-3">
                <Button variant="hero"><Sparkles className="mr-2" />Escuchar ahora</Button>
                <Button variant="outline">Ver episodios</Button>
              </div>
            </div>
            <Card className="bg-gradient-to-br from-[hsl(var(--primary)/0.08)] to-[hsl(var(--primary-glow)/0.1)]">
              <CardHeader>
                <CardTitle className="text-xl">Episodios recientes</CardTitle>
                <CardDescription>Actualizado cada semana</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Cómo la IA está cambiando el trabajo del conocimiento</li>
                  <li>• Modelos multimodales: casos reales</li>
                  <li>• Evaluando agentes con métricas prácticas</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/50">
        <div className="container mx-auto px-4 py-10">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} IA al Día · Todos los derechos reservados</p>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <a href="#">Privacidad</a>
              <a href="#">Términos</a>
              <a href="#">Contacto</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
