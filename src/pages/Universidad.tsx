import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Calendar, Clock, Star, Play } from "lucide-react";
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

      {/* Stats Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-slate-900 mb-2">5,000+</div>
              <div className="text-slate-600">Estudiantes Activos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 mb-2">95%</div>
              <div className="text-slate-600">Tasa de Finalización</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 mb-2">4.8/5</div>
              <div className="text-slate-600">Valoración Promedio</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-900 mb-2">24/7</div>
              <div className="text-slate-600">Soporte Disponible</div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Cursos</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Rutas de aprendizaje estructuradas desde principiante hasta experto
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {courses.map((course, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <Badge variant="secondary">{course.level}</Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="w-4 h-4 mr-1" />
                    {course.students}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3">{course.title}</h3>
                <p className="text-muted-foreground mb-4">{course.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-1" />
                    {course.duration}
                  </div>
                  <Button variant="outline" size="sm">
                    <Play className="w-4 h-4 mr-2" />
                    Ver Contenido
                  </Button>
                </div>
              </Card>
            ))}
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
