import React from 'react';
import ResponsiveHeader from "@/components/shared/ResponsiveHeader";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Calendar, Clock, Star, Play, Settings, GraduationCap, TrendingUp, Network, Quote, Plus, Minus } from "lucide-react";
import { useState, useEffect } from "react";

export default function Universidad() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify(ld)
      }} />
      
      <ResponsiveHeader />
      
      {/* Hero Section */}
      <section className={`text-white transition-all duration-500 pt-16 ${isScrolled ? 'bg-white' : 'bg-neutral-900'}`}>
        <div className={`container mx-auto px-4 py-12 md:py-16 transition-all duration-500 ${isScrolled ? 'bg-white' : 'bg-neutral-900'}`}>
          <div className="max-w-4xl mx-auto text-center">
            {/* Logo TR University */}
            <div className="flex items-center justify-center mb-8">
              <div className={`w-10 h-10 ${isScrolled ? 'bg-neutral-900' : 'bg-white'} rounded flex items-center justify-center mr-3 transition-colors duration-500`}>
                <span className={`${isScrolled ? 'text-white' : 'text-slate-900'} font-bold transition-colors duration-500`}>TR</span>
              </div>
              <span className={`text-xl font-semibold transition-colors duration-500 ${isScrolled ? 'text-neutral-900' : 'text-white'}`}>
                The Rundown <span className="text-purple-400">University</span>
              </span>
            </div>
            
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 transition-colors duration-500 ${isScrolled ? 'text-neutral-900' : 'text-white'}`}>
              Educación en IA<br />
              personalizada para el<br />
              futuro del trabajo.
            </h1>
            
            <p className={`text-xl mb-8 transition-colors duration-500 ${isScrolled ? 'text-slate-600' : 'text-white'}`}>
              Accede a certificaciones específicas de la industria, cientos de guías paso a paso y talleres de expertos en vivo para acelerar su carrera.
            </p>
            
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 px-8 py-3 text-lg">
              Pruébalo gratis durante 14 días
            </Button>
          </div>
        </div>
      </section>

      {/* Company Logos Section */}
      <section className={`py-12 transition-all duration-500 ${isScrolled ? 'bg-white' : 'bg-neutral-900'}`}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className={`mb-8 transition-colors duration-500 ${isScrolled ? 'text-slate-600' : 'text-slate-50'}`}>
              Con la confianza de profesionales y socios de las principales empresas de inteligencia artificial:
            </p>
            <div className="flex items-center justify-center space-x-12 opacity-60">
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" className={`h-8 transition-all duration-500 ${isScrolled ? 'filter-none' : 'filter brightness-0 invert'}`} />
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" alt="Meta" className={`h-8 transition-all duration-500 ${isScrolled ? 'filter-none' : 'filter brightness-0 invert'}`} />
              <div className={`font-semibold text-xl transition-colors duration-500 ${isScrolled ? 'text-slate-600' : 'text-white'}`}>cisco</div>
              <div className={`font-semibold text-xl transition-colors duration-500 ${isScrolled ? 'text-slate-600' : 'text-white'}`}>HubSpot</div>
              <div className={`font-bold text-2xl transition-colors duration-500 ${isScrolled ? 'text-slate-600' : 'text-white'}`}>IBM</div>
              <div className={`font-semibold text-xl transition-colors duration-500 ${isScrolled ? 'text-slate-600' : 'text-white'}`}>Microsoft</div>
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
                  Benefíciese de flujos de trabajo generados de manera colectiva por una comunidad de más de 1 millón de profesionales y de descuentos en herramientas de IA líderes <span className="text-purple-600 font-semibold">que cubren de inmediato el costo de su membresía</span>.
                </p>
              </Card>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 px-8 py-3 text-lg">
                Desbloquea mi recorrido de aprendizaje personalizado
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
                Acelere su crecimiento profesional con nuestros cursos de certificación
              </h2>
              <p className="text-xl text-slate-700 max-w-3xl mx-auto">
                Obtén habilidades validadas por la industria y destaca en el mercado laboral.
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
              {courses.map((course, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow border-2 border-slate-100">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <GraduationCap className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-slate-900">{course.title}</h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">{course.description}</p>
                  <div className="space-y-2">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="secondary" className="text-xs">
                        <Clock className="w-3 h-3 mr-1" />
                        {course.duration}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        <Users className="w-3 h-3 mr-1" />
                        {course.students}
                      </Badge>
                    </div>
                    <Badge className="bg-purple-100 text-purple-700 text-xs">
                      {course.level}
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 px-8 py-3">
                Ver todos los cursos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
                Resuelva problemas del mundo real con <span className="text-purple-600">guías paso</span>
              </h2>
              <p className="text-xl text-slate-700 max-w-4xl mx-auto mb-8">
                Acceda a más de 300 lecciones prácticas en video inspiradas por usuarios pioneros de diferentes industrias, con nuevas guías creadas diariamente para mantenerlo constantemente actualizado y transformar su forma de trabajar.
              </p>
              <Button variant="outline" className="border-2 border-slate-300 hover:border-slate-400">
                Ver todas las guías →
              </Button>
            </div>

            {/* Guide Cards Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Card 1 - Kling AI */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-slate-100 mb-4 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-20 bg-gradient-to-br from-blue-400 to-green-400 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">Video Editor</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">K</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">
                        Cómo intercambiar productos en cualquier vídeo con Kling AI
                      </h3>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    La nueva función Multi-Elements de Kling AI te permite agregar, eliminar o reemplazar fácilmente cualquier objeto en los videos con tus propios productos sin necesidad de habilidades complejas de edición de videos.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="text-xs">Creador de contenido</Badge>
                    <Badge variant="secondary" className="text-xs">Diseño</Badge>
                    <Badge variant="secondary" className="text-xs">Marketing</Badge>
                  </div>
                  <div className="text-sm text-slate-500">Dr. Álvaro Cintas</div>
                </CardContent>
              </Card>

              {/* Card 2 - Grok Workspaces */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-slate-100 mb-4 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-20 bg-slate-300 rounded-lg flex items-center justify-center">
                      <span className="text-slate-700 font-bold text-lg">Workspace</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-slate-400 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">X</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">
                        Crea asistentes legales especializados con Grok Workspaces
                      </h3>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    La nueva función Espacios de trabajo de Grok le permite crear asistentes de IA dedicados para tareas específicas, como revisar contratos y documentos legales, con capacidades de carga de documentos.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="text-xs">Legal</Badge>
                    <Badge variant="secondary" className="text-xs">Consultante</Badge>
                    <Badge variant="secondary" className="text-xs">Gestión de proyectos</Badge>
                  </div>
                  <div className="text-sm text-slate-500">Dr. Álvaro Cintas</div>
                </CardContent>
              </Card>

              {/* Card 3 - OpenAI Codex CLI */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-slate-100 mb-4 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-20 bg-slate-800 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">Terminal</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">S</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">
                        Convierte tu terminal en un agente de codificación de IA con OpenAI Codex CLI
                      </h3>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    Aprenda a instalar y utilizar el nuevo agente de codificación Codex CLI de OpenAI que se ejecuta en su terminal y le permite explicar, modificar y crear código utilizando comandos de lenguaje natural.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="text-xs">Codificación</Badge>
                    <Badge variant="secondary" className="text-xs">Educador</Badge>
                    <Badge variant="secondary" className="text-xs">Alumno</Badge>
                  </div>
                  <div className="text-sm text-slate-500">Dr. Álvaro Cintas</div>
                </CardContent>
              </Card>

              {/* Card 4 - Claude Assistant */}
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-slate-100 mb-4 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-20 bg-orange-300 rounded-lg flex items-center justify-center">
                      <span className="text-orange-800 font-bold text-lg">Calendar</span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">★</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">
                        Prepárese para reuniones al instante con el asistente de inteligencia artificial de Claude
                      </h3>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    La integración de Claude con Calendario y Gmail le permite investigar fácilmente a los participantes de reuniones, analizar comunicaciones anteriores y obtener información detallada de la empresa, todo en un solo lugar.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="text-xs">Gestión de proyectos</Badge>
                    <Badge variant="secondary" className="text-xs">Análisis de datos</Badge>
                  </div>
                  <div className="text-sm text-slate-500">Dr. Álvaro Cintas</div>
                </CardContent>
              </Card>
            </div>

            {/* Testimonial */}
            <div className="max-w-4xl mx-auto">
              <Card className="p-8 text-center relative">
                <div className="absolute top-4 left-4 text-6xl text-purple-200">"</div>
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-slate-700 text-lg mb-6 leading-relaxed">
                  "Gracias por las fantásticas lecciones que ofrecen en el sitio web de su universidad de IA. Acabo de empezar en una nueva empresa, trabajando en el diseño y desarrollo de la interfaz de un portal web de salud, y ya estoy superando sus expectativas."
                </blockquote>
                <div className="flex items-center justify-center">
                  <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center mr-3">
                    <span className="text-slate-600 font-bold">RM</span>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-slate-900">Reid Manning</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Workshops Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
                Aprenda directamente de expertos en IA con talleres dirigidos por expertos
              </h2>
              <p className="text-xl text-slate-700 max-w-4xl mx-auto mb-8">
                Únase a sesiones interactivas semanales en vivo con líderes de la industria que están a la vanguardia de la innovación en IA para obtener orientación práctica sobre la implementación y conocimientos exclusivos.
              </p>
              
              {/* Company Logos */}
              <div className="flex items-center justify-center space-x-8 mb-12 opacity-60">
                <div className="text-slate-400 font-semibold text-lg">Meta</div>
                <div className="text-slate-400 font-semibold text-lg">KLING AI</div>
                <div className="text-slate-400 font-semibold text-lg">windsurf</div>
                <div className="text-slate-400 font-semibold text-lg">bolt</div>
                <div className="text-slate-400 font-semibold text-lg">Lindy</div>
                <div className="text-slate-400 font-semibold text-lg">Poe</div>
              </div>
            </div>

            {/* Workshop Cards */}
            <div className="space-y-6 mb-12">
              {/* Workshop 1 */}
              <Card className="p-6 hover:shadow-lg transition-shadow border-2 border-slate-200">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                      <span className="text-purple-600 font-bold text-lg">KH</span>
                    </div>
                    <Badge className="bg-blue-600 text-white text-xs">Coding</Badge>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-1">
                          How to build and monetize mobile apps using AI
                        </h3>
                        <p className="text-slate-600 text-sm">Kevin Hou, Head of Product Eng at Codlum</p>
                      </div>
                      <div className="text-right text-sm text-slate-500">
                        <div>4 de febrero de 2025 • 4:00 p. m. hora del este</div>
                      </div>
                    </div>
                    <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                      Yendo más allá de lo básico, esta sesión avanzada le enseñará cómo crear e implementar aplicaciones móviles robustas utilizando Windsurf y React Native, con implementaciones prácticas de servicios de backend de Supabase e integración de pagos de App Store que puede aplicar de inmediato a sus proyectos.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-slate-500">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                          Transmisión en vivo
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          Más de 100 asistentes
                        </div>
                      </div>
                      <Button variant="link" className="text-purple-600 hover:text-purple-700">
                        Más información →
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Workshop 2 */}
              <Card className="p-6 hover:shadow-lg transition-shadow border-2 border-slate-200">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                      <span className="text-purple-600 font-bold text-lg">HC</span>
                    </div>
                    <Badge className="bg-blue-600 text-white text-xs">Agents</Badge>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-1">
                          Create AI agents to respond to emails on your behalf
                        </h3>
                        <p className="text-slate-600 text-sm">Ho Crivello, Founder of Lindy</p>
                      </div>
                      <div className="text-right text-sm text-slate-500">
                        <div>30 de agosto de 2024 • 4:00 p. m. hora del este</div>
                      </div>
                    </div>
                    <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                      Cree agentes de IA autónomos que gestionen flujos de trabajo repetitivos en múltiples aplicaciones, lo que le permitirá delegar procesos completos (no solo tareas individuales) para que pueda centrarse en el trabajo creativo y estratégico que genera valor comercial real.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-slate-500">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                          Transmisión en vivo
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          Más de 100 asistentes
                        </div>
                      </div>
                      <Button variant="link" className="text-purple-600 hover:text-purple-700">
                        Más información →
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Workshop 3 */}
              <Card className="p-6 hover:shadow-lg transition-shadow border-2 border-slate-200">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                      <span className="text-purple-600 font-bold text-lg">AC</span>
                    </div>
                    <Badge className="bg-blue-600 text-white text-xs">Automation</Badge>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-1">
                          Automate tasks with ChatGPT Operator
                        </h3>
                        <p className="text-slate-600 text-sm">Alvaro Cintas, PhD, Professor at The Rundown</p>
                      </div>
                      <div className="text-right text-sm text-slate-500">
                        <div>31 de enero de 2025 • 6:00 p. m. ET</div>
                      </div>
                    </div>
                    <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                      Aprenda a aprovechar el nuevo asistente Operator de OpenAI en ChatGPT para tareas prácticas como enviar formularios, solicitar empleos y pedir artículos. Tres casos prácticos, lo replicaremos paso a paso cómo configurar Operator para su uso sin comisión, lo que le brindará mayor privacidad y control total sobre sus datos.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-slate-500">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                          Transmisión en vivo
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          Más de 100 asistentes
                        </div>
                      </div>
                      <Button variant="link" className="text-purple-600 hover:text-purple-700">
                        Más información →
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Workshop 4 */}
              <Card className="p-6 hover:shadow-lg transition-shadow border-2 border-slate-200">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                      <span className="text-purple-600 font-bold text-lg">KA</span>
                    </div>
                    <Badge className="bg-blue-600 text-white text-xs">Content</Badge>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-bold text-slate-900 mb-1">
                          Scale outreach with personalized AI avatar videos
                        </h3>
                        <p className="text-slate-600 text-sm">Kevin Alstede, Strategic Advisor at Synthesia</p>
                      </div>
                      <div className="text-right text-sm text-slate-500">
                        <div>20 de febrero de 2025 • 4:00 p. m. hora del este</div>
                      </div>
                    </div>
                    <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                      Domine las técnicas para crear mensajes de vídeo personalizados y de alta conversión que se adapten a cientos de clientes potenciales sin sacrificar el toque personal, lo que le ayudará a superar el desorden de la bandeja de entrada y aumentar drásticamente las tasas de respuesta.
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-slate-500">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-2"></div>
                          Transmisión en vivo
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          Más de 80 asistentes
                        </div>
                      </div>
                      <Button variant="link" className="text-purple-600 hover:text-purple-700">
                        Más información →
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Workshop Info */}
            <div className="text-center mb-12">
              <p className="text-slate-600 mb-6">
                Todos los talleres incluyen presentaciones, sesiones de preguntas y respuestas y una demostración. Las grabaciones previas se almacenan en la Universidad.
              </p>
              <Button variant="outline" className="border-2 border-slate-300 hover:border-slate-400">
                Ver todos los talleres →
              </Button>
            </div>

            {/* Testimonial */}
            <div className="max-w-4xl mx-auto mb-12">
              <Card className="p-8 text-center relative">
                <div className="absolute top-4 left-4 text-6xl text-purple-200">"</div>
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-slate-700 text-lg mb-6 leading-relaxed">
                  "El Resumen me abrió los ojos a las posibilidades de la IA. Al principio, solo probé un par de herramientas de IA, pero no las usé en mi trabajo. Tras solo un par de días de aprendizaje, creé un agente de IA que responde a mis correos electrónicos en mi nombre. Un punto de inflexión para mi negocio."
                </blockquote>
                <div className="flex items-center justify-center">
                  <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center mr-3">
                    <span className="text-slate-600 font-bold">WT</span>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-slate-900">Wouter Teunissen</div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Social Comments */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold text-sm">TA</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 text-sm">Tom Albanese</div>
                    <p className="text-slate-600 text-sm">"This was fantastic, thank you all!"</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold text-sm">JP</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 text-sm">Jake Pollastrini</div>
                    <p className="text-slate-600 text-sm">"Super cool - just watched this and replicated in Lindy for myself ✨"</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold text-sm">S</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 text-sm">Sebo</div>
                    <p className="text-slate-600 text-sm">"Really nice breakdown. Thanks for sharing."</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold text-sm">AD</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 text-sm">Austin D</div>
                    <p className="text-slate-600 text-sm">"Wish I'd known about this sooner - thank you!"</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold text-sm">EJ</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 text-sm">Eliza Jennings</div>
                    <p className="text-slate-600 text-sm">"Thank you professor! 🎓"</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold text-sm">EL</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 text-sm">elise lew</div>
                    <p className="text-slate-600 text-sm">"This was a great workshop."</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold text-sm">EI</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 text-sm">Edgar Irizarry</div>
                    <p className="text-slate-600 text-sm">"Great tutorial! Thanks!"</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-purple-600 font-bold text-sm">NF</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 text-sm">Niels Footman</div>
                    <p className="text-slate-600 text-sm">"Thanks for this, Alvaro Cintas."</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
                Encuentra conexiones valiosas dentro de una comunidad de primeros usuarios
              </h2>
              <p className="text-xl text-slate-700">
                Únete a nuestra vibrante comunidad para colaborar, compartir conocimientos y crecer juntos
              </p>
            </div>

            {/* Testimonial */}
            <div className="max-w-2xl mx-auto mb-12">
              <Card className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-slate-700 text-lg mb-4">
                  "La comunidad me conectó con profesionales que comparten mis mismos desafíos."
                </blockquote>
                <div className="flex items-center justify-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-purple-600 font-bold">CR</span>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-slate-900">Carlos Ruiz</div>
                    <div className="text-sm text-slate-600">Emprendedor</div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">¿Qué incluye la comunidad?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Foros especializados</h4>
                      <p className="text-slate-600">Discusiones técnicas y casos de uso reales</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Mentorías 1:1</h4>
                      <p className="text-slate-600">Sesiones personalizadas con expertos</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Proyectos colaborativos</h4>
                      <p className="text-slate-600">Trabaja en equipo en proyectos reales</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-4 gap-4">
                {[...Array(12)].map((_, i) => (
                  <div key={i} className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-lg font-bold text-purple-600">{String.fromCharCode(65 + i)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
                Construye una mejor pila tecnológica con beneficios exclusivos
              </h2>
              <p className="text-xl text-slate-700">
                Accede a descuentos en herramientas premium, recursos y eventos exclusivos para miembros
              </p>
            </div>

            {/* Testimonial */}
            <div className="max-w-2xl mx-auto mb-12">
              <Card className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-slate-700 text-lg mb-4">
                  "Los descuentos en herramientas me ahorraron miles de dólares al año."
                </blockquote>
                <div className="flex items-center justify-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-purple-600 font-bold">DG</span>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-slate-900">David García</div>
                    <div className="text-sm text-slate-600">CTO</div>
                  </div>
                </div>
              </Card>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Herramientas Premium</h3>
                <p className="text-slate-600">
                  Descuentos exclusivos en las mejores herramientas de IA del mercado
                </p>
              </Card>

              <Card className="text-center p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Eventos Exclusivos</h3>
                <p className="text-slate-600">
                  Acceso a conferencias, workshops y networking events privados
                </p>
              </Card>

              <Card className="text-center p-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Recursos Avanzados</h3>
                <p className="text-slate-600">
                  Plantillas, frameworks y recursos que aceleran tu desarrollo
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              ¿Listo para transformar su carrera con IA?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Únase a miles de profesionales que ya están aprovechando el poder de la IA para acelerar sus carreras.
            </p>
            <div className="text-center mt-12">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-slate-100 border-0 px-8 py-3 text-lg font-semibold">
                Comenzar prueba gratuita
              </Button>
              <p className="text-white/70 mt-4">
                Sin tarjeta de crédito requerida • Cancelar en cualquier momento
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
                Preguntas frecuentes
              </h2>
              <p className="text-xl text-slate-700">
                Todo lo que necesita saber sobre The Rundown AI University
              </p>
            </div>

            <div className="max-w-md mx-auto">
              <FAQAccordion />
            </div>

            <div className="grid md:grid-cols-4 gap-8 mb-12 mt-16">
              <div className="space-y-2 text-sm text-slate-600">
                <h4 className="font-semibold text-slate-900">Producto</h4>
                <a href="#" className="hover:text-purple-600">Cursos</a>
                <a href="#" className="hover:text-purple-600">Certificaciones</a>
                <a href="#" className="hover:text-purple-600">Comunidad</a>
                <a href="#" className="hover:text-purple-600">Talleres</a>
              </div>

              <div className="space-y-2 text-sm text-slate-600">
                <h4 className="font-semibold text-slate-900">Recursos</h4>
                <a href="#" className="hover:text-purple-600">Blog</a>
                <a href="#" className="hover:text-purple-600">Guías</a>
                <a href="#" className="hover:text-purple-600">Podcast</a>
                <a href="#" className="hover:text-purple-600">Eventos</a>
              </div>

              <div className="space-y-2 text-sm text-slate-600">
                <h4 className="font-semibold text-slate-900">Empresa</h4>
                <a href="#" className="hover:text-purple-600">Acerca de</a>
                <a href="#" className="hover:text-purple-600">Carreras</a>
                <a href="#" className="hover:text-purple-600">Contacto</a>
                <a href="#" className="hover:text-purple-600">Prensa</a>
              </div>

              <div className="space-y-2 text-sm text-slate-600">
                <h4 className="font-semibold text-slate-900">Soporte</h4>
                <a href="#" className="hover:text-purple-600">Ayuda</a>
                <a href="#" className="hover:text-purple-600">Centro de ayuda</a>
                <a href="#" className="hover:text-purple-600">Contacto</a>
                <a href="#" className="hover:text-purple-600">Estado</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                Planes de Membresía
              </h2>
              <p className="text-xl text-slate-300">
                Elige el plan que mejor se adapte a tus necesidades
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Plan Básico */}
              <Card className="bg-white border-2 border-slate-200">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Básico</CardTitle>
                  <div className="text-4xl font-bold text-purple-600">Gratis</div>
                  <p className="text-slate-600">Para comenzar tu viaje en IA</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>Acceso a cursos básicos</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>Comunidad básica</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>Recursos limitados</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                    Pruébalo gratis
                  </Button>
                </CardContent>
              </Card>

              {/* Plan Completo */}
              <Card className="bg-white border-2 border-purple-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-purple-600 text-white px-4 py-1">Más Popular</Badge>
                </div>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Plan Completo</CardTitle>
                  <div className="text-4xl font-bold text-purple-600">$999</div>
                  <p className="text-slate-600">/ año</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>Acceso completo a todos los cursos</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>Certificaciones oficiales</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>Sesiones en vivo semanales</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>Comunidad exclusiva</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>Soporte prioritario</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                    Comenzar ahora
                  </Button>
                </CardContent>
              </Card>

              {/* Plan Personalizado */}
              <Card className="bg-white border-2 border-slate-200">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Personalizado</CardTitle>
                  <div className="text-4xl font-bold text-purple-600">Contáctanos</div>
                  <p className="text-slate-600">Para empresas y equipos</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>Soluciones personalizadas</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>Entrenamiento in-house</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>Consultoría especializada</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      <span>Soporte dedicado</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                    Solicitar demo
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-slate-900">
                Conoce al equipo educativo
              </h2>
              <p className="text-xl text-slate-700">
                Expertos en IA que están dando forma al futuro de la educación
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: "Dennis Murray", role: "CEO & Fundador", avatar: "DM" },
                { name: "Dr. Ethan Cole", role: "Jefe de Investigación de IA", avatar: "EC" },
                { name: "Sarah Chen", role: "Directora de Producto", avatar: "SC" },
                { name: "Marcus Rodriguez", role: "Líder de Contenido", avatar: "MR" }
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-purple-600">{member.avatar}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                  <p className="text-slate-600">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                Únase a la revolución de la IA
              </h2>
              <p className="text-xl text-slate-300">
                No se quede atrás. Comience su viaje hacia el dominio de la IA hoy mismo.
              </p>
            </div>

            <div className="max-w-md mx-auto">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 px-8 py-3 text-lg">
                Comenzar ahora
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// FAQ Component
function FAQAccordion() {
  const [openItem, setOpenItem] = useState<number | null>(null);
  
  const faqItems = [
    "¿Qué incluye la membresía?",
    "¿Puedo cancelar en cualquier momento?",
    "¿Los cursos son en vivo o grabados?",
    "¿Obtengo certificación al completar los cursos?",
    "¿Hay soporte disponible si tengo preguntas?"
  ];

  return (
    <div className="space-y-4">
      {faqItems.map((question, index) => (
        <div key={index} className="border border-slate-700 rounded-lg">
          <button className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-800 transition-colors" onClick={() => setOpenItem(openItem === index ? null : index)}>
            <span className="text-white">{question}</span>
            {openItem === index ? <Minus className="w-5 h-5 text-white flex-shrink-0" /> : <Plus className="w-5 h-5 text-white flex-shrink-0" />}
          </button>
          {openItem === index && (
            <div className="p-4 pt-0 text-slate-300">
              <p>Respuesta para la pregunta: {question}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

