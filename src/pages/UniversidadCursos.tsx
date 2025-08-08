import ResponsiveHeader from "@/components/shared/ResponsiveHeader";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, Users, Star, Play } from "lucide-react";

export default function UniversidadCursos() {
  const courses = [
    {
      title: "Introducción a la IA",
      description: "Fundamentos esenciales para comenzar",
      duration: "8 semanas",
      students: "2,300+",
      level: "Principiante",
      price: "Gratis"
    },
    {
      title: "Machine Learning Aplicado",
      description: "Técnicas prácticas de aprendizaje automático",
      duration: "12 semanas",
      students: "1,800+",
      level: "Intermedio",
      price: "$99"
    },
    {
      title: "Deep Learning Avanzado",
      description: "Redes neuronales profundas y técnicas avanzadas",
      duration: "16 semanas",
      students: "1,500+",
      level: "Avanzado",
      price: "$199"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <ResponsiveHeader />
      <main className="container mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Cursos Disponibles</h1>
          <p className="text-xl text-muted-foreground">Explora nuestra colección de cursos de IA</p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary">{course.level}</Badge>
                  <span className="text-lg font-bold text-primary">{course.price}</span>
                </div>
                <CardTitle className="text-xl">{course.title}</CardTitle>
                <CardContent className="p-0">
                  <p className="text-muted-foreground mb-4">{course.description}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {course.students}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500" />
                      4.9/5
                    </div>
                  </div>
                </CardContent>
              </CardHeader>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}