import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Calendar, Clock, Star, Play, Settings, GraduationCap, TrendingUp, Network, Quote, Plus, Minus } from "lucide-react";
import Header from "@/components/shared/Header";
import { useState } from "react";
export default function Universidad() {
  const ld = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Universidad — IA al Día"
  };
  const courses = [{
    title: "Introducción a la IA",
    description: "Fundamentos esenciales para comenzar en el mundo de la inteligencia artificial",
    duration: "4 semanas",
    students: "2,300+",
    level: "Principiante"
  }, {
    title: "Machine Learning Aplicado",
    description: "Técnicas prácticas de aprendizaje automático para proyectos reales",
    duration: "6 semanas",
    students: "1,800+",
    level: "Intermedio"
  }, {
    title: "IA Generativa y LLMs",
    description: "Domina las herramientas más avanzadas de generación de contenido",
    duration: "8 semanas",
    students: "1,500+",
    level: "Avanzado"
  }, {
    title: "IA para Negocios",
    description: "Estrategias de implementación de IA en entornos empresariales",
    duration: "5 semanas",
    students: "900+",
    level: "Profesional"
  }];
  const features = ["Acceso a todos los cursos actuales y futuros", "Certificación oficial al completar cada curso", "Sesiones en vivo semanales con expertos", "Comunidad exclusiva de profesionales", "Proyectos prácticos y casos de estudio", "Soporte personalizado del equipo académico"];
  const testimonials = [{
    name: "Ana García",
    role: "Directora de Innovación",
    company: "TechCorp",
    content: "Los cursos me permitieron implementar IA en mi empresa con confianza. El contenido es práctico y actualizado.",
    avatar: "AG"
  }, {
    name: "Carlos Mendoza",
    role: "Data Scientist",
    company: "StartupAI",
    content: "La comunidad y las sesiones en vivo son invaluables. Aprendí más en 3 meses que en años por mi cuenta.",
    avatar: "CM"
  }];
  return <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{
      __html: JSON.stringify(ld)
    }} />
      
      <Header />
      
      {/* Hero Section */}
      <section className="text-white bg-neutral-900 pt-16">
        <div className="container mx-auto px-4 py-20 bg-neutral-900">
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
            <p className="text-xl mb-8 max-w-3xl mx-auto text-white">
              Accede a certificaciones específicas de la industria, cientos de guías paso a paso y talleres de expertos en vivo para acelerar su carrera.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 px-8 py-3 text-lg">
              Pruébalo gratis durante 14 días
            </Button>
          </div>
        </div>
      </section>

      {/* Company Logos Section */}
      <section className="py-12 border-t border-slate-800 bg-neutral-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="mb-8 text-slate-50">
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

            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 px-8 py-3 text-lg mt-8">
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
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
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
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
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

      {/* Expert-Led Workshops Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
                Aprenda directamente de expertos en IA con <span className="text-purple-600">talleres dirigidos por expertos</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-12">
                Únase a sesiones interactivas semanales en vivo con líderes de la industria que están a la vanguardia de la innovación en IA para obtener orientación práctica sobre la implementación y conocimientos exclusivos.
              </p>

              {/* Company logos */}
              <div className="flex items-center justify-center space-x-8 mb-16 opacity-60">
                <div className="text-slate-600 font-bold text-xl">Meta</div>
                <div className="text-slate-600 font-bold text-xl">KLING AI</div>
                <div className="text-slate-600 font-bold text-xl">windsurf</div>
                <div className="text-slate-600 font-bold text-xl">bolt</div>
                <div className="text-slate-600 font-bold text-xl">Lindy</div>
                <div className="text-slate-600 font-bold text-xl">Poe</div>
              </div>
            </div>
            
            <div className="space-y-6 mb-12">
              {/* Workshop 1 */}
              <Card className="p-6 hover:shadow-lg transition-shadow bg-white">
                <div className="flex items-start gap-6">
                  <div className="w-32 h-24 bg-slate-800 rounded-lg flex-shrink-0 flex items-center justify-center">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-slate-500 mb-2">4 de febrero de 2025 • 4:00 p. m., hora del este</div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900">
                      Creación y monetización de aplicaciones móviles con Windsurf AI
                    </h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      Yendo más allá de lo básico, esta sesión avanzada le enseñará cómo crear e implementar aplicaciones móviles robustas utilizando Windsurf y React Native, con implementación práctica de servicios de backend de Supabase e integración de pagos de App Store que puede aplicar de inmediato a sus proyectos.
                    </p>
                    <div className="flex items-center gap-6 text-sm text-slate-500">
                      <span>Transmisión en vivo</span>
                      <span>Más de 100 asistentes</span>
                      <Button variant="link" className="p-0 text-purple-600 hover:text-purple-700">
                        Más información →
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Workshop 2 */}
              <Card className="p-6 hover:shadow-lg transition-shadow bg-white">
                <div className="flex items-start gap-6">
                  <div className="w-32 h-24 bg-slate-800 rounded-lg flex-shrink-0 flex items-center justify-center">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-slate-500 mb-2">30 de agosto de 2024 • 4:00 p. m., hora del este</div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900">
                      Creación de agentes de IA con Lindy AI
                    </h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      Cree agentes de IA autónomos que gestionen flujos de trabajo repetitivos en múltiples aplicaciones, lo que le permitirá delegar procesos completos (no solo tareas individuales) para que pueda centrarse en el trabajo creativo y estratégico que genera valor comercial real.
                    </p>
                    <div className="flex items-center gap-6 text-sm text-slate-500">
                      <span>Transmisión en vivo</span>
                      <span>Más de 100 asistentes</span>
                      <Button variant="link" className="p-0 text-purple-600 hover:text-purple-700">
                        Más información →
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Workshop 3 */}
              <Card className="p-6 hover:shadow-lg transition-shadow bg-white">
                <div className="flex items-start gap-6">
                  <div className="w-32 h-24 bg-slate-800 rounded-lg flex-shrink-0 flex items-center justify-center">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-slate-500 mb-2">31 de enero de 2025 • 4:00 p. m. ET</div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900">
                      Cómo automatizar tareas con el operador ChatGPT
                    </h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      Aprenda a aprovechar el nuevo asistente Operator de OpenAI en ChatGPT para tareas prácticas como enviar formularios, solicitar empleos y pedir artículos. Tras casos prácticos, le explicaremos paso a paso cómo configurar Operator para su uso sin conexión, lo que le brindará mayor privacidad y control total sobre sus datos.
                    </p>
                    <div className="flex items-center gap-6 text-sm text-slate-500">
                      <span>Transmisión en vivo</span>
                      <span>Más de 100 asistentes</span>
                      <Button variant="link" className="p-0 text-purple-600 hover:text-purple-700">
                        Más información →
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Workshop 4 */}
              <Card className="p-6 hover:shadow-lg transition-shadow bg-white">
                <div className="flex items-start gap-6">
                  <div className="w-32 h-24 bg-slate-800 rounded-lg flex-shrink-0 flex items-center justify-center">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-slate-500 mb-2">26 de febrero de 2025 • 4:00 p. m., hora del este</div>
                    <h3 className="text-xl font-bold mb-3 text-slate-900">
                      Utilice videos personalizados para ampliar su alcance con Synthesia
                    </h3>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      Domine las técnicas para crear mensajes de video personalizados y de alta conversión que se adapten a cientos de clientes potenciales sin sacrificar el toque personal, lo que le ayudará a superar el desorden de la bandeja de entrada y aumentar drásticamente las tasas de respuesta.
                    </p>
                    <div className="flex items-center gap-6 text-sm text-slate-500">
                      <span>Transmisión en vivo</span>
                      <span>Más de 80 asistentes</span>
                      <Button variant="link" className="p-0 text-purple-600 hover:text-purple-700">
                        Más información →
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="text-center mb-12">
              <p className="text-slate-600 mb-4">
                Todos los talleres incluyen presentaciones, sesiones de preguntas y respuestas y una demostración. Las grabaciones previas se almacenan en la Universidad.
              </p>
              <Button variant="link" className="text-slate-600 hover:text-purple-600">
                Ver todos los talleres →
              </Button>
            </div>

            {/* Wouter Teunissen Testimonial */}
            <div className="max-w-2xl mx-auto mb-12">
              <Card className="p-8 bg-white shadow-lg">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-purple-600 mr-3" />
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
                  </div>
                </div>
                <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                  "El Resumen me abrió los ojos a las posibilidades de la IA. Al principio, solo probé un par de herramientas de IA, pero no las usé en mi trabajo. Tras solo un par de días de aprendizaje, creé un agente de IA que responde a mis correos electrónicos en mi nombre. Un punto de inflexión para mi negocio."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-slate-400 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    WT
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Wouter Teunissen</div>
                  </div>
                </div>
              </Card>
            </div>

            {/* User Avatars Section */}
            <div className="text-center">
              <div className="flex justify-center items-center space-x-4 mb-6">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-semibold">FS</div>
                  <div className="w-10 h-10 bg-green-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-semibold">JW</div>
                  <div className="w-10 h-10 bg-purple-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-semibold">AM</div>
                  <div className="w-10 h-10 bg-orange-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-semibold">KH</div>
                  <div className="w-10 h-10 bg-red-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-semibold">ML</div>
                  <div className="w-10 h-10 bg-indigo-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-semibold">BT</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
              Encuentre conexiones valiosas dentro de una <span className="text-purple-600">comunidad de primeros usuarios</span>
            </h2>
            <p className="text-lg text-slate-600 mb-16">
              Aprenda de las lecciones, oportunidades y logros de una comunidad creciente de profesionales que ya están trabajando más rápido e inteligentemente con IA.
            </p>

            {/* Blake Moore Testimonial */}
            <div className="max-w-2xl mx-auto mb-20">
              <Card className="p-8 bg-white shadow-lg">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-purple-600 mr-3" />
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
                  </div>
                </div>
                <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                  "Con descripciones generales y análisis a fondo de todas las áreas de la IA, no hay mejor manera de mantenerse actualizado y al tanto de las mejores maneras de implementar estas nuevas tecnologías en nuestras vidas. Si tienes preguntas específicas o buscas oportunidades para hacer networking, The Rundown es el lugar ideal."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-slate-400 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    BM
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Blake Moore</div>
                  </div>
                </div>
              </Card>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
              Construya una mejor pila tecnológica con <span className="text-purple-600">beneficios exclusivos</span>
            </h2>
            <p className="text-lg text-slate-600 mb-16">
              Aproveche nuestra amplia red de asociaciones con las principales empresas de inteligencia artificial para acceder a un número cada vez mayor de tarifas con descuento, pruebas extendidas y asignaciones de uso adicionales que valen más de $1000.
            </p>

            {/* Adriana Carvajal Testimonial */}
            <div className="max-w-2xl mx-auto">
              <Card className="p-8 bg-white shadow-lg">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-purple-600 mr-3" />
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
                  </div>
                </div>
                <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                  "¡The Rundown me ha sido de gran ayuda para ponerme al día con la IA! Con el boletín, no me pierdo nada nunca más, y con la formación, cada día encuentro nuevas maneras de integrar la IA en mi trabajo, tanto como creador de contenido como empresario."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-slate-400 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    AC
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Adriana Carvajal</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center mb-8">
                <div className="w-10 h-10 bg-white rounded flex items-center justify-center mr-3">
                  <span className="text-slate-900 font-bold">TR</span>
                </div>
                <span className="text-white text-xl font-semibold">
                  The Rundown <span className="text-purple-400">University</span>
                </span>
              </div>
              <p className="text-slate-300 text-lg max-w-3xl mx-auto">
                Acceda a certificaciones específicas de la industria, cientos de guías paso a paso y talleres de expertos en vivo para acelerar su carrera.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {/* Plan Completo */}
              <Card className="p-8 bg-slate-800 text-white border-slate-700 relative">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">Plan completo</h3>
                  <div className="text-4xl font-bold mb-1">$999</div>
                  <div className="text-slate-400 text-sm">/año</div>
                  <p className="text-slate-400 text-sm mt-2">Se renueva anualmente. Puedes cancelar en cualquier momento.</p>
                </div>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 mb-6">
                  Suscríbete ahora
                </Button>
                <div className="space-y-3">
                  <p className="font-semibold mb-3">Desbloquear el acceso a:</p>
                  <div className="text-sm space-y-2">
                    <p>• Más de 300 casos de uso de IA</p>
                    <p>• Todos los cursos de IA certificados</p>
                    <p>• Guías diarias paso a paso</p>
                    <p>• Talleres semanales dirigidos por expertos (en vivo y a pedido)</p>
                    <p>• Apoyo personalizado de nuestro equipo experimentado</p>
                    <p>• Más de $1000 de descuento, beneficios y pruebas en herramientas de IA</p>
                    <p>• Una red de más de 7500 usuarios pioneros de IA</p>
                  </div>
                </div>
              </Card>

              {/* Ensayo */}
              <Card className="p-8 bg-slate-800 text-white border-slate-700">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">Ensayo</h3>
                  <div className="text-4xl font-bold mb-1">
                    <span className="line-through text-slate-500">$999/año</span>
                  </div>
                  <div className="text-4xl font-bold text-green-400 mb-1">$0</div>
                  <div className="text-slate-400 text-sm">prueba de 14 días</div>
                </div>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 mb-6">
                  Pruébelo gratis durante 14 días
                </Button>
                <div className="space-y-3">
                  <p className="font-semibold mb-3">Desbloquear el acceso a:</p>
                  <div className="text-sm space-y-2">
                    <p>• 5-10 casos de uso de IA</p>
                    <p>• Cursos de IA certificados para la industria seleccionada</p>
                    <p>• Guías diarias paso a paso</p>
                    <p>• Talleres semanales dirigidos por expertos (solo en vivo)</p>
                    <p>• Una red de más de 7500 usuarios pioneros de IA</p>
                  </div>
                </div>
              </Card>

              {/* Equipos */}
              <Card className="p-8 bg-slate-800 text-white border-slate-700">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">Equipos</h3>
                  <div className="text-4xl font-bold mb-1">Costumbre</div>
                  <div className="text-slate-400 text-sm">.</div>
                </div>
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 mb-6">
                  Ponte en contacto con nosotros
                </Button>
                <div className="space-y-3">
                  <p className="font-semibold mb-3">Todo lo del plan Completo, más:</p>
                  <div className="text-sm space-y-2">
                    <p>• Descuento por múltiples asientos</p>
                    <p>• Panel de progreso del equipo</p>
                    <p>• Flujos de trabajo personalizados</p>
                    <p>• Incorporación personalizada</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">Conozca al equipo educativo</h2>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-slate-400 rounded-full mx-auto mb-4"></div>
                <h4 className="font-bold text-slate-900 mb-1">Rowan Cheung</h4>
                <p className="text-slate-600 text-sm">Fundador de The Rundown</p>
              </div>
              
              <div className="text-center">
                <div className="w-24 h-24 bg-slate-400 rounded-full mx-auto mb-4"></div>
                <h4 className="font-bold text-slate-900 mb-1">Dr. Álvaro Cintas</h4>
                <p className="text-slate-600 text-sm">Profesor de IA con doctorado</p>
              </div>
              
              <div className="text-center">
                <div className="w-24 h-24 bg-slate-400 rounded-full mx-auto mb-4"></div>
                <h4 className="font-bold text-slate-900 mb-1">Clintin Lyle Kruger</h4>
                <p className="text-slate-600 text-sm">Consultor/Educador de IA</p>
              </div>
              
              <div className="text-center">
                <div className="w-24 h-24 bg-slate-400 rounded-full mx-auto mb-4"></div>
                <h4 className="font-bold text-slate-900 mb-1">Dr. Jeremy Nguyen</h4>
                <p className="text-slate-600 text-sm">Profesor/Investigador de Doctorado en IA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Preguntas que hicieron nuestros miembros antes de unirse</h2>
            </div>
            
            <FAQAccordion />
            
            <div className="text-center mt-12">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 px-8 py-3 text-lg">
                Únase a The Rundown AI University
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final Footer Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-lg text-slate-600 mb-8">
                Entérate de las últimas noticias sobre IA, comprende su importancia y aprende a aplicarla en tu trabajo. Únete a más de 1.000.000 de lectores de empresas como Apple, OpenAI y la NASA.
              </p>
              <div className="flex max-w-md mx-auto">
                <input type="email" placeholder="Dirección de correo electrónico" className="flex-1 px-4 py-3 border border-slate-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-600" />
                <Button className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-r-lg rounded-l-none">
                  Suscribir
                </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div>
                <h4 className="font-semibold text-slate-900 mb-4">Manténgase actualizado</h4>
                <div className="space-y-2 text-sm text-slate-600">
                  <p>Artículos</p>
                  <p>Podcast</p>
                  <p>Guías</p>
                  <p>Herramientas</p>
                  <p>Talleres</p>
                  <p>Bolsa de trabajo de IA</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-slate-900 mb-4">Universidad de IA</h4>
                <div className="space-y-2 text-sm text-slate-600">
                  <p>IA para empresas</p>
                  <p>IA para codificación</p>
                  <p>IA para la creación de contenido</p>
                  <p>IA para la educación</p>
                  <p>IA para marketing</p>
                  <p>Todos los cursos de certificación</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-slate-900 mb-4">Compañía</h4>
                <div className="space-y-2 text-sm text-slate-600">
                  <p>Anunciar</p>
                  <p>Carreras</p>
                  <p>Contáctenos</p>
                  <p>política de privacidad</p>
                  <p>Términos y condiciones</p>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-slate-900 mb-4">Contacto</h4>
                <div className="space-y-2 text-sm text-slate-600">
                  <p>© 2025 The Rundown AI, Inc.</p>
                  <p>Todos los derechos reservados.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
}

// FAQ Component
function FAQAccordion() {
  const [openItem, setOpenItem] = useState<number | null>(null);
  const faqItems = ["¿Qué es exactamente The Rundown AI University?", "Soy principiante absoluto en IA. ¿Me ayudará esto?", "¿En qué se diferencia de otros cursos de IA en línea?", "¿Ofrecen certificaciones que pueda agregar a mi currículum?", "¿Puedo deducir esto como gasto a través de la empresa para la que trabajo?", "¿Con qué frecuencia se agrega contenido nuevo a la plataforma?", "¿Qué puedo esperar en los talleres de IA?", "¿Cuánto tiempo necesito dedicar cada semana?", "¿Puedo solicitar cursos o guías específicos?", "¿Sobre qué plataforma se basa The Rundown AI University?", "¿Ofrecen opciones de pago mensual?", "¿Ofrecen una garantía de devolución de dinero?", "¿Cómo cancelo mi plan?", "¿Cómo puedo obtener ayuda si la necesito?"];
  return <div className="space-y-4">
      {faqItems.map((question, index) => <div key={index} className="border border-slate-700 rounded-lg">
          <button className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-800 transition-colors" onClick={() => setOpenItem(openItem === index ? null : index)}>
            <span className="text-white">{question}</span>
            {openItem === index ? <Minus className="w-5 h-5 text-white flex-shrink-0" /> : <Plus className="w-5 h-5 text-white flex-shrink-0" />}
          </button>
          {openItem === index && <div className="p-4 pt-0 text-slate-300">
              <p>Respuesta para la pregunta: {question}</p>
            </div>}
        </div>)}
    </div>;
}