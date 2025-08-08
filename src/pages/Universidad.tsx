import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Calendar, Clock, Star, Play, Settings, GraduationCap, TrendingUp, Network, Quote } from "lucide-react";
import Header from "@/components/shared/Header";

export default function Universidad() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Universidad — IA al Día",
  };

  const courses = [
    {
      title: "Introducción a la IA",
      description: "Fundamentos esenciales para comenzar en el mundo de la inteligencia artificial",
      duration: "4 semanas",
      students: "2,300+",
      level: "Principiante"
    },
    {
      title: "Machine Learning Aplicado",
      description: "Técnicas prácticas de aprendizaje automático para proyectos reales",
      duration: "6 semanas", 
      students: "1,800+",
      level: "Intermedio"
    },
    {
      title: "IA Generativa y LLMs",
      description: "Domina las herramientas más avanzadas de generación de contenido",
      duration: "8 semanas",
      students: "1,500+", 
      level: "Avanzado"
    },
    {
      title: "IA para Negocios",
      description: "Estrategias de implementación de IA en entornos empresariales",
      duration: "5 semanas",
      students: "900+",
      level: "Profesional"
    }
  ];

  const features = [
    "Acceso a todos los cursos actuales y futuros",
    "Certificación oficial al completar cada curso", 
    "Sesiones en vivo semanales con expertos",
    "Comunidad exclusiva de profesionales",
    "Proyectos prácticos y casos de estudio",
    "Soporte personalizado del equipo académico"
  ];

  const testimonials = [
    {
      name: "Ana García",
      role: "Directora de Innovación",
      company: "TechCorp",
      content: "Los cursos me permitieron implementar IA en mi empresa con confianza. El contenido es práctico y actualizado.",
      avatar: "AG"
    },
    {
      name: "Carlos Mendoza", 
      role: "Data Scientist",
      company: "StartupAI",
      content: "La comunidad y las sesiones en vivo son invaluables. Aprendí más en 3 meses que en años por mi cuenta.",
      avatar: "CM"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      
      <Header />
      
      {/* Hero Section */}
      <section className="bg-slate-900 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Logo TR University */}
            <div className="flex items-center justify-center mb-8">
              <div className="w-10 h-10 bg-white rounded flex items-center justify-center mr-3">
                <span className="text-slate-900 font-bold">TR</span>
              </div>
              <span className="text-white text-xl font-semibold">
                The Rundown <span className="text-purple-400">University</span>
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Educación en IA<br />
              personalizada para el<br />
              futuro del trabajo.
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Accede a certificaciones específicas de la industria, cientos de guías paso a paso y talleres de expertos en vivo para acelerar su carrera.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 px-8 py-3 text-lg"
            >
              Pruébalo gratis durante 14 días
            </Button>
          </div>
        </div>
      </section>

      {/* Company Logos Section */}
      <section className="bg-slate-900 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-slate-400 mb-8">
              Con la confianza de profesionales y socios de las principales empresas de inteligencia artificial:
            </p>
            <div className="flex items-center justify-center space-x-12 opacity-60">
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className="h-8 filter brightness-0 invert" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" alt="Meta" className="h-8 filter brightness-0 invert" />
              <div className="text-white font-semibold text-xl">cisco</div>
              <div className="text-white font-semibold text-xl">HubSpot</div>
              <div className="text-white font-bold text-2xl">IBM</div>
              <div className="text-white font-semibold text-xl">Microsoft</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900 leading-tight">
              El mundo de la IA avanza demasiado rápido como para navegarlo solo.
            </h2>
            <p className="text-xl text-slate-700 mb-8 font-semibold">
              El potencial de la IA es innegable.
            </p>
            <div className="text-lg text-slate-600 mb-8 leading-relaxed space-y-4">
              <p>
                Pero la mayoría de los profesionales se atascan intentando comprender un sinfín de herramientas, tutoriales obsoletos y jerga técnica, sin una guía clara sobre qué funciona realmente para sus necesidades específicas.
              </p>
              <p>
                Entonces, esa sobrecarga e incertidumbre les impide implementar la IA en su trabajo.
              </p>
              <p className="font-semibold text-slate-800">
                <span className="text-slate-900">The</span><br />
                <span className="text-slate-900">Rundown AI University</span> ofrece una experiencia de aprendizaje personalizada, dirigida por expertos, que se adapta a su apretada agenda.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-8 mt-16 mb-12">
              <Card className="p-8 text-left hover:shadow-lg transition-shadow border-2 border-slate-100">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <Settings className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">Crea tu propio camino</h3>
                <p className="text-slate-600 leading-relaxed">
                  Complete un cuestionario rápido para desbloquear un <span className="text-purple-600 font-semibold">plan de estudios personalizado</span> basado en su industria, estilo de aprendizaje y nivel de experiencia que lo ayudará a destacarse del resto.
                </p>
              </Card>

              <Card className="p-8 text-left hover:shadow-lg transition-shadow border-2 border-slate-100">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <GraduationCap className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">Aprenda de los expertos</h3>
                <p className="text-slate-600 leading-relaxed">
                  Obtenga acceso directo a los fundadores y educadores que están dando forma al futuro de la IA para aprender <span className="text-purple-600 font-semibold">secretos de automatización</span> que no puede encontrar en ningún otro lugar.
                </p>
              </Card>

              <Card className="p-8 text-left hover:shadow-lg transition-shadow border-2 border-slate-100">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">Manténgase a la vanguardia</h3>
                <p className="text-slate-600 leading-relaxed">
                  Aplique cualquiera de nuestras guías paso a paso para implementar las mejores herramientas y flujos de trabajo de IA en 15 minutos o menos, con nuevas guías creadas todos los días para garantizar que <span className="text-purple-600 font-semibold">nunca se quede atrás</span>.
                </p>
              </Card>

              <Card className="p-8 text-left hover:shadow-lg transition-shadow border-2 border-slate-100">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <Network className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-900">Aproveche nuestra red</h3>
                <p className="text-slate-600 leading-relaxed">
                  Benefíciese de flujos de trabajo generados de manera colectiva por una comunidad de más de 1 millón de profesionales y de descuentos en herramientas de IA líderes que <span className="text-purple-600 font-semibold">cubren de inmediato el costo de su membresía</span>.
                </p>
              </Card>
            </div>

            <Button 
              size="lg" 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 px-8 py-3 text-lg mt-8"
            >
              Desbloquea mi recorrido de aprendizaje personalizado
            </Button>
          </div>
        </div>
      </section>

      {/* Certification Courses Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
                Acelere su crecimiento profesional con nuestros <span className="text-purple-600">cursos de certificación</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Acceda a una biblioteca en crecimiento de cursos integrales de certificación en IA específicos de la industria para ponerse al día con los profesionales y demostrar exactamente lo que lo hace destacar en el lugar de trabajo.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
              <Card className="p-6 text-left hover:shadow-lg transition-shadow bg-slate-800 text-white border-slate-700">
                <div className="bg-slate-900 p-4 rounded-lg mb-6 text-center">
                  <div className="text-3xl font-bold mb-2">AI Starter Kit</div>
                  <div className="text-sm opacity-80">CERTIFICADO</div>
                </div>
                <h3 className="text-lg font-bold mb-3">Kit de inicio de IA</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Comprenda los fundamentos de la IA, descubra las mejores herramientas para sus necesidades e implemente casos de uso del mundo real que lo ayudarán a ser más productivo en el trabajo.
                </p>
              </Card>

              <Card className="p-6 text-left hover:shadow-lg transition-shadow bg-slate-800 text-white border-slate-700">
                <div className="bg-slate-900 p-4 rounded-lg mb-6 text-center">
                  <div className="text-3xl font-bold mb-2">AI For Marketing</div>
                  <div className="text-sm opacity-80">CERTIFICADO</div>
                </div>
                <h3 className="text-lg font-bold mb-3">IA para marketing</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Genere conceptos visuales al instante, automatice la difusión personalizada y descubra conocimientos estratégicos con flujos de trabajo impulsados por IA que escalan su producción creativa y reducen los cuellos de botella manuales.
                </p>
              </Card>

              <Card className="p-6 text-left hover:shadow-lg transition-shadow bg-slate-800 text-white border-slate-700">
                <div className="bg-slate-900 p-4 rounded-lg mb-6 text-center">
                  <div className="text-3xl font-bold mb-2">AI For Business</div>
                  <div className="text-sm opacity-80">CERTIFICADO</div>
                </div>
                <h3 className="text-lg font-bold mb-3">IA para operaciones comerciales</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Optimice los procesos, mejore la toma de decisiones y automatice las tareas rutinarias con sistemas impulsados por IA que aumentan su eficiencia operativa y reducen los cuellos de botella manuales.
                </p>
              </Card>

              <Card className="p-6 text-left hover:shadow-lg transition-shadow bg-slate-800 text-white border-slate-700">
                <div className="bg-slate-900 p-4 rounded-lg mb-6 text-center">
                  <div className="text-3xl font-bold mb-2">AI For Content Creation</div>
                  <div className="text-sm opacity-80">CERTIFICADO</div>
                </div>
                <h3 className="text-lg font-bold mb-3">IA para la creación de contenido</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Supere los bloqueos creativos, genere imágenes atractivas al instante y amplíe la producción de contenido de manera eficiente con flujos de trabajo impulsados por IA que aumentan la calidad y la cantidad de su contenido.
                </p>
              </Card>
            </div>

            <div className="text-center mb-12">
              <Button variant="link" className="text-slate-600 hover:text-purple-600">
                Ver todos los cursos →
              </Button>
            </div>

            {/* José Lacovara Testimonial */}
            <div className="max-w-2xl mx-auto">
              <Card className="p-8 bg-white shadow-lg">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-purple-600 mr-3" />
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                  "Esto es ideal para cualquier persona interesada en la IA; no se necesitan conocimientos técnicos. Lo recomiendo ampliamente y actualmente me estoy preparando para presentar el examen de certificación."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-slate-400 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    JL
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">José Lacovara</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Guides Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
                Resuelva problemas del mundo real con <span className="text-purple-600">guías</span> paso
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Acceda a más de 300 lecciones prácticas en video inspiradas por usuarios pioneros de diferentes industrias, con nuevas guías creadas diariamente para mantenerlo constantemente actualizado y transformar su forma de trabajar.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 h-32 relative">
                  <div className="absolute bottom-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <Play className="w-4 h-4 text-blue-600" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-3 text-slate-900">
                    Cómo intercambiar productos en cualquier vídeo con Kling AI
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    La nueva función Multi Elements de Kling AI te permite agregar, eliminar o reemplazar fácilmente cualquier objeto en los videos con tus propios productos sin necesidad de habilidades complejas de edición de videos.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="text-xs">Creador de contenido</Badge>
                    <Badge variant="secondary" className="text-xs">Diseño</Badge>
                    <Badge variant="secondary" className="text-xs">Marketing</Badge>
                  </div>
                  <div className="text-sm text-slate-500">Dr. Álvaro Cintas</div>
                </div>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-br from-green-500 to-green-600 h-32 relative">
                  <div className="absolute bottom-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <Play className="w-4 h-4 text-green-600" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-3 text-slate-900">
                    Crea asistentes legales especializados con Grok Workspaces
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    La nueva función Espacios de trabajo de Grok le permite crear asistentes de IA dedicados para tareas específicas, como revisar contratos y documentos legales, con capacidades de carga de documentos.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="text-xs">Legal</Badge>
                    <Badge variant="secondary" className="text-xs">Consultante</Badge>
                    <Badge variant="secondary" className="text-xs">Gestión de proyectos</Badge>
                  </div>
                  <div className="text-sm text-slate-500">Dr. Álvaro Cintas</div>
                </div>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 h-32 relative">
                  <div className="absolute bottom-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <Play className="w-4 h-4 text-purple-600" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-3 text-slate-900">
                    Convierte tu terminal en un agente de codificación de IA con OpenAI Codex CLI
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    Aprenda a instalar y utilizar el nuevo agente de codificación Codex CLI de OpenAI que se ejecuta en su terminal y le permite explicar, modificar y crear código utilizando comandos de lenguaje natural.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="text-xs">Codificación</Badge>
                    <Badge variant="secondary" className="text-xs">Educador</Badge>
                    <Badge variant="secondary" className="text-xs">Alumno</Badge>
                  </div>
                  <div className="text-sm text-slate-500">Dr. Álvaro Cintas</div>
                </div>
              </Card>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 h-32 relative">
                  <div className="absolute bottom-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <Play className="w-4 h-4 text-orange-600" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-3 text-slate-900">
                    Prepárese para reuniones al instante con el asistente de inteligencia artificial de Claude
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    La integración de Claude con Calendario y Gmail le permite investigar fácilmente a los participantes de reuniones, analizar comunicaciones anteriores y obtener información detallada de la empresa, todo en un solo lugar.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="text-xs">Gestión de proyectos</Badge>
                    <Badge variant="secondary" className="text-xs">Análisis de datos</Badge>
                  </div>
                  <div className="text-sm text-slate-500">Dr. Álvaro Cintas</div>
                </div>
              </Card>
            </div>

            <div className="text-center mb-12">
              <Button variant="link" className="text-slate-600 hover:text-purple-600">
                Ver todas las guías →
              </Button>
            </div>

            {/* Reid Manning Testimonial */}
            <div className="max-w-2xl mx-auto">
              <Card className="p-8 bg-white shadow-lg">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-purple-600 mr-3" />
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                  "Gracias por las fantásticas lecciones que ofrecen en el sitio web de su universidad de IA. Acabo de empezar en una nueva empresa, trabajando en el diseño y desarrollo de la interfaz de un portal web de salud, y ya estoy superando sus expectativas."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-slate-400 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    RM
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Reid Manning</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Todo lo que Necesitas para Dominar la IA
              </h2>
              <p className="text-xl text-muted-foreground">
                Una experiencia de aprendizaje completa diseñada para profesionales
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Lo que Dicen Nuestros Estudiantes</h2>
            <p className="text-xl text-muted-foreground">
              Historias de éxito de profesionales que transformaron sus carreras
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} en {testimonial.company}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Comienza tu Transformación en IA Hoy
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Únete a miles de profesionales que ya están aprovechando el poder de la IA en sus carreras
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Comenzar Gratis
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              Hablar con un Asesor
            </Button>
          </div>
          <p className="text-sm text-slate-400 mt-4">
            Prueba gratuita de 7 días • Sin compromiso • Cancela cuando quieras
          </p>
        </div>
      </section>
    </div>
  );
}
