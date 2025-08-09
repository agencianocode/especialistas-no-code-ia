import ResponsiveHeader from "@/components/shared/ResponsiveHeader";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star } from "lucide-react";

export default function Guias() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Guías — IA al Día",
  };

  const guides = [
    {
      title: "Cómo intercambiar productos en cualquier video con Kling AI",
      description: "La nueva función Multi Elemento de Kling AI te permite agregar, eliminar o reemplazar fácilmente cualquier objeto en los videos con tus propios productos sin necesidad de habilidades complejas de edición de videos.",
      categories: ["Creador de contenido", "Diseño", "Marketing"],
      author: "Dr. Álvaro Cintas",
      bgColor: "bg-blue-100 dark:bg-blue-900/20"
    },
    {
      title: "Crea asistentes legales especializados con Grok Workspaces",
      description: "La nueva función Espacios de trabajo de Grok te permite crear asistentes de IA especializados para tareas específicas para revisar contratos y documentos legales, con capacidades de carga de documentos.",
      categories: ["Legal", "Consultante", "Gestión de proyectos"],
      author: "Dr. Álvaro Cintas",
      bgColor: "bg-gray-200 dark:bg-gray-800"
    },
    {
      title: "Convierte tu terminal en un agente de codificación de IA con OpenAI Codex CLI",
      description: "Aprende a instalar y utilizar el nuevo agente de codificación Codex CLI de OpenAI que se ejecuta en tu terminal y te permite emplear, modificar y crear código utilizando comandos en lenguaje natural.",
      categories: ["Codificación", "Educador", "Alumno"],
      author: "Dr. Álvaro Cintas",
      bgColor: "bg-blue-200 dark:bg-blue-800/30"
    },
    {
      title: "Prepárese para reuniones al instante con el asistente de inteligencia artificial de Claude",
      description: "La integración de Claude con Calendario y Gmail te permite investigar fácilmente a los participantes de las reuniones, analizar comunicaciones anteriores y obtener información detallada de la empresa, todo en un solo lugar.",
      categories: ["Gestión de proyectos", "Análisis de datos"],
      author: "Dr. Álvaro Cintas",
      bgColor: "bg-orange-200 dark:bg-orange-900/30"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <ResponsiveHeader />
      <main className="container mx-auto px-4 py-12 md:py-16">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Resuelva problemas del mundo real con <span className="text-primary">guías</span> paso
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Accede a más de 300 lecciones prácticas en video inspiradas por usuarios pioneros de 
            diferentes industrias, con nuevas guías creadas diariamente para mantenerte constantemente 
            actualizado y transformar su forma de trabajar.
          </p>
        </div>

        {/* Guides Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 mb-16">
          {guides.map((guide, i) => (
            <Card key={i} className={`${guide.bgColor} border-0 hover:translate-y-[-2px] transition-all duration-300 overflow-hidden`}>
              <CardContent className="p-6">
                {/* Placeholder for video thumbnail */}
                <div className="w-full h-48 bg-black/10 dark:bg-white/10 rounded-lg mb-4 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[8px] border-l-white border-y-[6px] border-y-transparent ml-1"></div>
                  </div>
                </div>
                
                <h3 className="font-semibold text-lg mb-3 line-clamp-2">
                  {guide.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {guide.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {guide.categories.map((category, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {category}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{guide.author}</span>
                  <div className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-600"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mb-16">
          <Button variant="outline" className="group">
            Ver todas las guías
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        {/* Testimonial Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                <span className="text-2xl">"</span>
              </div>
            </div>
            
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            
            <p className="text-lg mb-6 text-muted-foreground">
              Gracias por las fantásticas lecciones que ofrecen en el sitio web de su universidad de IA. 
              Acabo de empezar en una nueva empresa, trabajando en el diseño y desarrollo de la interfaz 
              de un portal web de salud, y ya estoy superando sus expectativas.
            </p>
            
            <div className="flex items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-600"></div>
              <span className="font-semibold">Reid Manning</span>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
