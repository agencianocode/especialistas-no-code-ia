import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, ArrowRight, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import SectionHeader from "@/components/shared/SectionHeader";
import Chip from "@/components/shared/Chip";
import ArticleCard from "@/components/shared/ArticleCard";
import LogoCloud from "@/components/shared/LogoCloud";
import AudioPlaylistCard from "@/components/shared/AudioPlaylistCard";
const dummyArticles = [
  { title: "El potencial doble de Gemini", tag: "Noticias", date: "Hoy", excerpt: "Análisis y roadmap de capacidades." },
  { title: "Lanzamientos clave de la semana", tag: "Actualidad", date: "Ayer" },
  { title: "Cómo elegir la mejor herramienta de IA", tag: "Guías", date: "Ayer" },
  { title: "Riesgos y oportunidades de los agentes", tag: "Análisis", date: "Esta semana" },
];

const categories = ["Todos", "Noticias", "Guías", "Análisis", "Tutoriales"] as const;

const dummyGuides = [
  "Prompting efectivo", "Automatiza con IA", "Vision + OCR", "RAG y embeddings", "Herramientas no-code", "Flujos con agentes"
];

const dummyTools = [
  "ChatGPT", "Claude", "Gemini", "Midjourney", "Perplexity", "NotebookLM"
];

const logos = [
  { name: "Logo 1", src: "/placeholder.svg" },
  { name: "Logo 2", src: "/placeholder.svg" },
  { name: "Logo 3", src: "/placeholder.svg" },
  { name: "Logo 4", src: "/placeholder.svg" },
  { name: "Logo 5", src: "/placeholder.svg" },
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
            <a href="/articulos" className="hover:text-foreground transition-colors">Artículos</a>
            <a href="/guias" className="hover:text-foreground transition-colors">Guías</a>
            <a href="/herramientas" className="hover:text-foreground transition-colors">Herramientas</a>
            <a href="/podcast" className="hover:text-foreground transition-colors">Podcast</a>
            <a href="/talleres" className="hover:text-foreground transition-colors">Talleres</a>
            <a href="/universidad" className="hover:text-foreground transition-colors">Universidad</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="soft" size="sm">Iniciar sesión</Button>
            <Button variant="hero" size="sm">Suscribirse</Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border/50">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,hsl(var(--primary)/0.14),transparent)]" />
          <div className="container mx-auto grid gap-8 px-4 py-16 md:py-24">
            <div className="mx-auto max-w-3xl text-center animate-fade-in">
              <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card px-3 py-1 text-xs text-muted-foreground">
                <Sparkles className="h-3.5 w-3.5" /> Aprenda IA en 5 minutos al día
              </div>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight md:text-6xl">
                Aprenda IA en <span className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary-glow))]">5 minutos</span> al día.
              </h1>
              <p className="mt-4 text-lg text-muted-foreground md:text-xl">
                Resúmenes claros, guías prácticas y herramientas seleccionadas. Todo en español.
              </p>
              {/* Capsule form */}
              <form onSubmit={onSubscribe} className="mx-auto mt-8 flex w-full max-w-2xl items-center gap-2 rounded-full border border-border bg-card p-2 shadow-sm">
                <label htmlFor="email" className="sr-only">Correo electrónico</label>
                <Input id="email" type="email" required placeholder="Tu correo" value={email} onChange={(e) => setEmail(e.target.value)} className="h-12 rounded-full border-0 bg-transparent focus-visible:ring-0" />
                <Button type="submit" variant="hero" size="xl" className="rounded-full px-6">
                  <Mail className="mr-1.5" /> Suscribirse
                </Button>
              </form>
              <p className="mt-3 text-sm text-muted-foreground">Únete a más de 120,000 lectores.</p>
              {/* Logo cloud */}
              <LogoCloud logos={logos} />
            </div>
          </div>
        </section>

        {/* Últimos artículos con tabs y destacado */}
        <section id="articulos" className="container mx-auto px-4 py-12 md:py-16">
          <SectionHeader title="Últimos artículos" subtitle="Lo más reciente en noticias, guías y análisis." href="/articulos" />
          <Tabs defaultValue="Todos" className="w-full">
            <TabsList className="flex flex-wrap gap-2 bg-transparent p-0">
              {categories.map((c) => (
                <TabsTrigger key={c} value={c} className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary rounded-full border bg-muted px-3 py-1.5 text-sm text-muted-foreground">
                  {c}
                </TabsTrigger>
              ))}
            </TabsList>
            {categories.map((c) => (
              <TabsContent key={c} value={c} className="mt-6">
                <div className="grid gap-6 md:grid-cols-3 md:auto-rows-[1fr]">
                  <ArticleCard featured title={dummyArticles[0].title} tag={dummyArticles[0].tag} date={dummyArticles[0].date} excerpt={dummyArticles[0].excerpt} />
                  {dummyArticles.slice(1).map((a, i) => (
                    <ArticleCard key={i} title={a.title} tag={a.tag} date={a.date} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </section>

        {/* Guías */}
        <section id="guias" className="container mx-auto px-4 py-12 md:py-16">
          <SectionHeader title="Guías" subtitle="Aprenda conceptos clave de IA con ejemplos prácticos." href="/guias" />
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-3">
              {dummyGuides.slice(0, 3).map((g, i) => (
                <Card key={i} className="hover:shadow-[var(--shadow-elevated)] transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-base">{g}</CardTitle>
                    <CardDescription>Lectura de 5–8 minutos</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
            <div className="space-y-3">
              {dummyGuides.slice(3, 6).map((g, i) => (
                <Card key={i} className="hover:shadow-[var(--shadow-elevated)] transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-base">{g}</CardTitle>
                    <CardDescription>Lectura de 5–8 minutos</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Herramientas */}
        <section id="herramientas" className="container mx-auto px-4 py-12 md:py-16">
          <SectionHeader title="Herramientas de tendencia" subtitle="Seleccionadas y probadas para aumentar tu productividad." href="/herramientas" />
          <div className="mb-4 flex flex-wrap gap-2">
            {["LLM", "Imagen", "Agentes", "Búsqueda", "Audio"].map((c) => (
              <Chip key={c}>{c}</Chip>
            ))}
          </div>
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
                <Button variant="outline" asChild><a href="/podcast">Ver episodios</a></Button>
              </div>
            </div>
            <AudioPlaylistCard title="Episodios recientes" subtitle="Actualizado cada semana" episodes={[{ title: 'Cómo la IA está cambiando el trabajo del conocimiento' }, { title: 'Modelos multimodales: casos reales' }, { title: 'Evaluando agentes con métricas prácticas' }]} />
          </div>
        </section>
      </main>

      <footer className="border-t border-border/50">
        <div className="container mx-auto px-4 py-10">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h4 className="text-lg font-semibold">Suscríbete al boletín</h4>
              <p className="mt-1 text-sm text-muted-foreground">Resumen diario de IA, directo a tu correo.</p>
            </div>
            <form onSubmit={onSubscribe} className="flex w-full max-w-md items-center gap-2 rounded-md border border-border bg-card p-2">
              <label htmlFor="email-footer" className="sr-only">Correo electrónico</label>
              <Input id="email-footer" type="email" required placeholder="Tu correo" value={email} onChange={(e) => setEmail(e.target.value)} className="h-10 border-0 bg-transparent focus-visible:ring-0" />
              <Button type="submit" variant="hero">Suscribirse</Button>
            </form>
          </div>
          <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-6 md:flex-row">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} IA al Día · Todos los derechos reservados</p>
            <nav className="flex gap-4 text-sm text-muted-foreground">
              <a href="/articulos">Artículos</a>
              <a href="/guias">Guías</a>
              <a href="/herramientas">Herramientas</a>
              <a href="/podcast">Podcast</a>
              <a href="/talleres">Talleres</a>
              <a href="/universidad">Universidad</a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
