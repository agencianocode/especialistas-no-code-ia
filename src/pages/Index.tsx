import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, ArrowRight, Sparkles, BookOpen, LayoutDashboard, Users, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import SectionHeader from "@/components/shared/SectionHeader";
import Chip from "@/components/shared/Chip";
import ArticleCard from "@/components/shared/ArticleCard";
import LogoCloud from "@/components/shared/LogoCloud";
import AudioPlaylistCard from "@/components/shared/AudioPlaylistCard";
import WorkshopCard from "@/components/shared/WorkshopCard";
import FeatureTile from "@/components/shared/FeatureTile";
import ResponsiveHeader from "@/components/shared/ResponsiveHeader";
import { 
  HeroText, 
  Subtitle, 
    Caption,
  Container, 
  Section, 
  VStack, 
  HStack,
  ColorText,
  GradientText,
  Animated
} from "@/components/ui/design-system";


const dummyArticles = [
  { title: "El potencial doble de Gemini", tag: "Noticias", date: "Hoy", excerpt: "Análisis y roadmap de capacidades.", image: "/placeholder.svg" },
  { title: "Lanzamientos clave de la semana", tag: "Actualidad", date: "Ayer", image: "/placeholder.svg" },
  { title: "Cómo elegir la mejor herramienta de IA", tag: "Guías", date: "Ayer", image: "/placeholder.svg" },
  { title: "Riesgos y oportunidades de los agentes", tag: "Análisis", date: "Esta semana", image: "/placeholder.svg" },
];

const categories = ["Todos", "Noticias", "Guías", "Análisis", "Tutoriales"] as const;

const dummyGuides = [
  "Prompting efectivo", "Automatiza con IA", "Vision + OCR", "RAG y embeddings", "Herramientas no-code", "Flujos con agentes",
  "Evaluación de modelos", "Agentes y orquestación", "Seguridad de IA", "Data pipelines para RAG", "Búsqueda híbrida", "Quality gates"
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
      <ResponsiveHeader />

      <main>
        {/* Hero Section - Responsive */}
        <Section className="relative overflow-hidden bg-foreground text-background">
          <Container>
            <VStack size="2xl" className="mx-auto max-w-4xl text-center">
              <Animated animation="fade-in">
                <HeroText className="text-background">
                  Aprende IA en <ColorText variant="brand">5</ColorText>
                  <br />
                  <ColorText variant="brand">minutos</ColorText> al día.
                </HeroText>
              </Animated>
              
                             <Animated animation="fade-in" delay={200}>
                 <Subtitle className="text-background/80 max-w-2xl mx-auto">
                   Obtenga las últimas noticias sobre IA, comprenda por qué es importante y aprenda cómo aplicarla en su trabajo.
                 </Subtitle>
               </Animated>
               
               {/* Responsive Newsletter Form */}
               <Animated animation="fade-in" delay={400}>
                 <form onSubmit={onSubscribe} className="mx-auto flex flex-col sm:flex-row w-full max-w-lg items-center gap-2 sm:gap-0 sm:rounded-full bg-white p-1 shadow-lg">
                   <label htmlFor="email" className="sr-only">Dirección de correo electrónico</label>
                   <Input 
                     id="email" 
                     type="email" 
                     required 
                     placeholder="Dirección de correo electrónico" 
                     value={email} 
                     onChange={(e) => setEmail(e.target.value)} 
                     className="h-12 flex-1 rounded-lg sm:rounded-full border-0 bg-transparent text-foreground placeholder:text-muted-foreground focus-visible:ring-0 px-6" 
                   />
                   <Button type="submit" size="lg" className="w-full sm:w-auto rounded-lg sm:rounded-full bg-foreground text-background hover:bg-foreground/90 px-6 min-h-[48px]">
                     Suscribir ✈
                   </Button>
                 </form>
               </Animated>
               
               <Animated animation="fade-in" delay={600}>
                 <p className="text-sm text-background/70 text-balance">Únase a más de 1.000.000 de lectores de empresas como:</p>
                 
                 {/* Responsive Logo Cloud */}
                 <HStack size="lg" className="flex-wrap items-center justify-center opacity-60">
                   <span className="text-lg sm:text-2xl font-bold text-background">Google</span>
                   <span className="text-lg sm:text-2xl font-bold text-background">Meta</span>
                   <span className="text-base sm:text-lg font-bold text-background">cisco</span>
                   <span className="text-lg sm:text-xl font-bold text-background">HubSpot</span>
                   <span className="text-lg sm:text-2xl font-bold text-background">IBM</span>
                   <span className="text-lg sm:text-xl font-bold text-background">Microsoft</span>
                 </HStack>
               </Animated>
             </VStack>
           </Container>
         </Section>

        {/* Articles Section - Responsive */}
        <section id="articulos" className="container-responsive spacing-section">
          <SectionHeader title="Últimos artículos" subtitle="Lo más reciente en noticias, guías y análisis." href="/articulos" />
          <Tabs defaultValue="Todos" className="w-full">
            <TabsList className="flex flex-wrap gap-2 bg-transparent p-0 justify-start sm:justify-center">
              {categories.map((c) => (
                <TabsTrigger 
                  key={c} 
                  value={c} 
                  className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary rounded-full border bg-muted px-3 py-1.5 text-sm text-muted-foreground hover-lift"
                >
                  {c}
                </TabsTrigger>
              ))}
            </TabsList>
            {categories.map((c) => (
              <TabsContent key={c} value={c} className="mt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:auto-rows-[1fr]">
                  <ArticleCard featured title={dummyArticles[0].title} tag={dummyArticles[0].tag} date={dummyArticles[0].date} excerpt={dummyArticles[0].excerpt} image={dummyArticles[0].image} />
                  {dummyArticles.slice(1).map((a, i) => (
                    <ArticleCard key={i} title={a.title} tag={a.tag} date={a.date} image={a.image} />
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Button variant="secondary" asChild>
                    <a href="/articulos">Ver todos los artículos</a>
                  </Button>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </section>

        {/* Guides Section - Responsive */}
        <section id="guias" className="container-responsive spacing-section">
          <div className="mx-auto max-w-4xl text-center mb-8">
            <h2 className="font-bold mb-6 text-balance">Guías</h2>
            <p className="text-responsive text-muted-foreground leading-relaxed text-balance">
              Recopilamos los principales casos de uso de IA del mundo real entre nuestra audiencia de más de 1 millón de primeros usuarios y creamos guías diarias sobre exactamente cómo puede copiarlos y aplicarlos a su trabajo.
            </p>
          </div>
          
          {/* Responsive Category Filters */}
          <div className="mb-8 space-y-3">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              <Chip selected>Todo</Chip>
              <Chip>👨‍💻 Codificación</Chip>
              <Chip>📈 Marketing</Chip>
              <Chip>✏️ Creador de contenido</Chip>
              <Chip>📚 Educador</Chip>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              <Chip>💼 Ventas</Chip>
              <Chip>🎨 Diseño</Chip>
              <Chip>📊 Análisis de datos</Chip>
              <Chip>📋 Gestión de proyectos</Chip>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              <Chip>🤝 Consultante</Chip>
              <Chip>💰 Finanzas</Chip>
              <Chip>🏛️ Gobierno</Chip>
              <Chip>🏥 Cuidado de la salud</Chip>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              <Chip>⚖️ Legal</Chip>
              <Chip>👥 Reclutamiento de RRHH</Chip>
              <Chip>🎓 Alumno</Chip>
              <Chip>📋 General</Chip>
              <Chip>🏢 Operaciones comerciales</Chip>
            </div>
          </div>

          {/* Responsive Guides Grid */}
          <div className="grid-responsive gap-6 mb-8">
            <Card className="overflow-hidden hover-lift transition-shadow hover:shadow-[var(--shadow-elevated)]">
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-blue-200 p-4">
                <div className="h-full w-full rounded bg-slate-900 flex items-center justify-center">
                  <div className="text-white text-xs">🎬 Video Editor</div>
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-base leading-tight">Cómo intercambiar productos en cualquier video con Kling AI</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-1 mb-2">
                  <span className="text-xs bg-muted px-2 py-0.5 rounded">Creador de contenido</span>
                  <span className="text-xs bg-muted px-2 py-0.5 rounded">Diseño</span>
                  <span className="text-xs bg-muted px-2 py-0.5 rounded">Marketing</span>
                </div>
                <p className="text-xs text-muted-foreground">Dr. Álvaro Cintas</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-[var(--shadow-elevated)] transition-shadow">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 p-4">
                <div className="h-full w-full rounded bg-white border flex items-center justify-center">
                  <div className="text-gray-600 text-xs">📝 Legal Assistant</div>
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-base leading-tight">Crea asistentes legales especializados con Grok Workspaces</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-1 mb-2">
                  <span className="text-xs bg-muted px-2 py-0.5 rounded">Legal</span>
                  <span className="text-xs bg-muted px-2 py-0.5 rounded">Consultante</span>
                  <span className="text-xs bg-muted px-2 py-0.5 rounded">Gestión de proyectos</span>
                </div>
                <p className="text-xs text-muted-foreground">Dr. Álvaro Cintas</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-[var(--shadow-elevated)] transition-shadow">
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-blue-200 p-4">
                <div className="h-full w-full rounded bg-slate-800 flex items-center justify-center">
                  <div className="text-white text-xs">💻 Terminal</div>
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-base leading-tight">Convierte tu terminal en un agente de codificación de IA con OpenAI Codex CLI</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-1 mb-2">
                  <span className="text-xs bg-muted px-2 py-0.5 rounded">Codificación</span>
                  <span className="text-xs bg-muted px-2 py-0.5 rounded">Educador</span>
                  <span className="text-xs bg-muted px-2 py-0.5 rounded">Alumno</span>
                </div>
                <p className="text-xs text-muted-foreground">Dr. Álvaro Cintas</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-[var(--shadow-elevated)] transition-shadow">
              <div className="aspect-[4/3] bg-gradient-to-br from-orange-100 to-red-200 p-4">
                <div className="h-full w-full rounded bg-white border flex items-center justify-center">
                  <div className="text-gray-600 text-xs">🤖 AI Assistant</div>
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-base leading-tight">Prepárese para reuniones al instante con el asistente de inteligencia artificial de Claude</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-1 mb-2">
                  <span className="text-xs bg-muted px-2 py-0.5 rounded">Gestión de proyectos</span>
                  <span className="text-xs bg-muted px-2 py-0.5 rounded">Análisis de datos</span>
                </div>
                <p className="text-xs text-muted-foreground">Dr. Álvaro Cintas</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-[var(--shadow-elevated)] transition-shadow">
              <div className="aspect-[4/3] bg-gradient-to-br from-pink-100 to-red-200 p-4">
                <div className="h-full w-full rounded bg-white border flex items-center justify-center">
                  <div className="text-gray-600 text-xs">📧 Email Marketing</div>
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-base leading-tight">Automatice su alcance de ventas con correos electrónicos personalizados</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-1 mb-2">
                  <span className="text-xs bg-muted px-2 py-0.5 rounded">Ventas</span>
                  <span className="text-xs bg-muted px-2 py-0.5 rounded">Marketing</span>
                </div>
                <p className="text-xs text-muted-foreground">Dr. Álvaro Cintas</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-[var(--shadow-elevated)] transition-shadow">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200 p-4">
                <div className="h-full w-full rounded bg-slate-800 flex items-center justify-center text-white">
                  <div className="text-xs">N</div>
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-base leading-tight">Investigue de forma más inteligente con la función de descubrimiento web de NotebookLM</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-1 mb-2">
                  <span className="text-xs bg-muted px-2 py-0.5 rounded">Educador</span>
                  <span className="text-xs bg-muted px-2 py-0.5 rounded">Alumno</span>
                  <span className="text-xs bg-muted px-2 py-0.5 rounded">Análisis de datos</span>
                </div>
                <p className="text-xs text-muted-foreground">Dr. Álvaro Cintas</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-[var(--shadow-elevated)] transition-shadow">
              <div className="aspect-[4/3] bg-gradient-to-br from-orange-100 to-red-200 p-4">
                <div className="h-full w-full rounded bg-white border flex items-center justify-center">
                  <div className="text-gray-600 text-xs">🔥 Firebase</div>
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-base leading-tight">Cree aplicaciones web completas sin codificar con Firebase Studio</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-1 mb-2">
                  <span className="text-xs bg-muted px-2 py-0.5 rounded">Diseño</span>
                  <span className="text-xs bg-muted px-2 py-0.5 rounded">Codificación</span>
                  <span className="text-xs bg-muted px-2 py-0.5 rounded">Educador</span>
                </div>
                <p className="text-xs text-muted-foreground">Dr. Álvaro Cintas</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-[var(--shadow-elevated)] transition-shadow">
              <div className="aspect-[4/3] bg-gradient-to-br from-blue-100 to-blue-200 p-4">
                <div className="h-full w-full rounded bg-white border flex items-center justify-center">
                  <div className="text-blue-600 text-xs">📊 Google Sheets</div>
                </div>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-base leading-tight">Transforme sus hojas de cálculo con fórmulas de IA en Hojas de cálculo de Google</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-1 mb-2">
                  <span className="text-xs bg-muted px-2 py-0.5 rounded">Análisis de datos</span>
                  <span className="text-xs bg-muted px-2 py-0.5 rounded">Creador de contenido</span>
                  <span className="text-xs bg-muted px-2 py-0.5 rounded">Codificación</span>
                </div>
                <p className="text-xs text-muted-foreground">Dr. Álvaro Cintas</p>
              </CardContent>
            </Card>
          </div>

          {/* Ver todas las guías */}
          <div className="text-center">
            <Button variant="link" className="text-lg" asChild>
              <a href="/guias">Ver todas las guías →</a>
            </Button>
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
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {[...dummyTools, ...dummyTools].map((t, i) => (
              <Card key={i} className="text-center">
                <CardHeader>
                  <CardTitle className="text-base">{t}</CardTitle>
                  <CardDescription><Button variant="soft" size="sm">Ver</Button></CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Button variant="secondary" asChild>
              <a href="/herramientas">Ver todas las herramientas</a>
            </Button>
          </div>
        </section>

        {/* Podcast / Estado de la IA */}
        <section className="container mx-auto px-4 py-12 md:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <Caption>Podcast</Caption>
            <h3 className="mt-2 text-2xl font-bold">El estado de la IA con Rowan Cheung</h3>
            <p className="mt-2 text-muted-foreground">Análisis semanal de las noticias más importantes de IA, oportunidades reales y cómo aplicarlas.</p>
            <div className="mt-4 flex items-center justify-center gap-3">
              <Button variant="hero"><Sparkles className="mr-2" />Suscribirse</Button>
              <Button variant="outline" asChild><a href="/podcast">Ver episodios</a></Button>
            </div>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Card className="p-6">
              <div className="h-40 w-40 mx-auto rounded-full border-8 border-muted grid place-items-center">
                <span className="text-sm text-muted-foreground">Gráfico</span>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                <li>• Lo esencial de la semana en 20 minutos.</li>
                <li>• Impacto para negocio, producto y carrera.</li>
                <li>• Recomendaciones y herramientas prácticas.</li>
              </ul>
            </Card>
            <AudioPlaylistCard title="Episodios recientes" subtitle="Actualizado cada semana" episodes={[{ title: 'Cómo la IA está cambiando el trabajo del conocimiento' }, { title: 'Modelos multimodales: casos reales' }, { title: 'Evaluando agentes con métricas prácticas' }]} />
          </div>
        </section>

        {/* Talleres - lista vertical */}
        <section className="container mx-auto px-4 py-12 md:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h3 className="text-xl font-semibold">Aprenda directamente de expertos en IA con</h3>
            <h3 className="text-2xl font-bold"><GradientText>talleres dirigidos por expertos</GradientText></h3>
            <p className="mt-2 text-muted-foreground">Sesiones en vivo con ejercicios prácticos y Q&A.</p>
          </div>
          <div className="mt-8 space-y-4">
            {[ 
              { t: 'Prompting aplicado', i: 'Ana García', r: 'ML Engineer', d: 'Jue 18:00', du: '2h' },
              { t: 'Automatizaciones con IA', i: 'Carlos Pérez', r: 'AI Architect', d: 'Sáb 10:00', du: '2h' },
              { t: 'RAG en producción', i: 'Lucía Romero', r: 'Data Scientist', d: 'Mié 17:00', du: '90m' },
              { t: 'Agentes y orquestación', i: 'Marcos Díaz', r: 'AI Engineer', d: 'Lun 19:00', du: '2h' }
            ].map((w, idx) => (
              <Card key={idx} className="p-4">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div className="min-w-0">
                    <div className="font-semibold">{w.t}</div>
                    <div className="text-sm text-muted-foreground">{w.i} · {w.r}</div>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span>{w.d}</span>
                    <span>•</span>
                    <span>{w.du}</span>
                  </div>
                  <div>
                    <Button size="sm" asChild>
                      <a href="/talleres">Registrarme</a>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Button variant="secondary" asChild>
              <a href="/talleres">Ver todos los talleres</a>
            </Button>
          </div>
        </section>

        {/* Universidad - bloque claro con 4 tarjetas */}
        <section className="relative overflow-hidden bg-background">
          <div className="container mx-auto px-4 py-16">
            <div className="mx-auto max-w-3xl text-center">
              <Caption>The Rundown University</Caption>
              <h3 className="mt-2 text-3xl font-bold md:text-4xl">Capacitación en IA para el futuro del trabajo.</h3>
              <p className="mt-2 text-muted-foreground">Cursos, guías, talleres y comunidad para dominar IA aplicada a negocio y producto.</p>
              <div className="mt-5 flex items-center justify-center gap-3">
                <Button variant="hero">Comenzar prueba gratis</Button>
                <Button variant="outline">Saber más</Button>
              </div>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <Card className="p-6">
                <div className="flex items-start gap-3">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-semibold">Cursos de IA</div>
                    <p className="text-sm text-muted-foreground">Acceso a todos los cursos actuales y futuros, con certificación.</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-start gap-3">
                  <LayoutDashboard className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-semibold">Guías diarias</div>
                    <p className="text-sm text-muted-foreground">Más de 300 casos prácticos para implementar IA en tu trabajo.</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-semibold">Talleres</div>
                    <p className="text-sm text-muted-foreground">Sesiones en vivo con líderes de la industria y Q&A.</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-start gap-3">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-semibold">Comunidad</div>
                    <p className="text-sm text-muted-foreground">Conecta con profesionales que aplican IA a diario.</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>


      </main>

      <footer className="border-t border-border/50 bg-background">
        <div className="container mx-auto px-4 py-12">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-6 w-6 items-center justify-center rounded bg-foreground text-background font-bold text-xs">
                  RR
                </div>
                <span className="font-bold">The Rundown</span>
              </div>
              <p className="text-sm text-muted-foreground mb-6 max-w-xs">
                Entérate de las últimas noticias sobre IA, comprenda su importancia y aprenda a aplicarla en tu trabajo. Únete a más de 1.000.000 de lectores de empresas como Apple, OpenAI y la NASA.
              </p>
              <form onSubmit={onSubscribe} className="flex w-full max-w-sm items-center gap-2 rounded-md border border-border bg-background p-1">
                <label htmlFor="email-footer" className="sr-only">Dirección de correo electrónico</label>
                <Input 
                  id="email-footer" 
                  type="email" 
                  required 
                  placeholder="Dirección de correo electrónico" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)} 
                  className="h-10 border-0 bg-transparent text-sm focus-visible:ring-0" 
                />
                <Button type="submit" size="sm" className="bg-foreground text-background hover:bg-foreground/90">
                  Suscribir ✈
                </Button>
              </form>
            </div>
            
            <div>
              <h5 className="mb-4 font-semibold">Manténgase actualizado</h5>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="/articulos" className="hover:text-foreground transition-colors">Artículos</a></li>
                <li><a href="/podcast" className="hover:text-foreground transition-colors">Podcast</a></li>
                <li><a href="/guias" className="hover:text-foreground transition-colors">Guías</a></li>
                <li><a href="/herramientas" className="hover:text-foreground transition-colors">Herramientas</a></li>
                <li><a href="/talleres" className="hover:text-foreground transition-colors">Talleres</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Bolsa de trabajo de IA</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="mb-4 font-semibold">Universidad de IA</h5>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="/universidad" className="hover:text-foreground transition-colors">IA para empresas</a></li>
                <li><a href="/universidad" className="hover:text-foreground transition-colors">IA para codificación</a></li>
                <li><a href="/universidad" className="hover:text-foreground transition-colors">IA para la creación de contenido</a></li>
                <li><a href="/universidad" className="hover:text-foreground transition-colors">IA para educación</a></li>
                <li><a href="/universidad" className="hover:text-foreground transition-colors">IA para marketing</a></li>
                <li><a href="/universidad" className="hover:text-foreground transition-colors">Todos los cursos de certificación</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="mb-4 font-semibold">Compañía</h5>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Anunciar</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Carreras</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contáctenos</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">política de privacidad</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Términos y condiciones</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 md:flex-row">
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} The Rundown AI, Inc. Todos los derechos reservados.</p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <span className="sr-only">Twitter</span>
                <span className="text-lg">X</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <span className="sr-only">Instagram</span>
                <span className="text-lg">📷</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <span className="sr-only">LinkedIn</span>
                <span className="text-lg">💼</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
