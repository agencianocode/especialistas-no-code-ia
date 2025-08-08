import ResponsiveHeader from "@/components/shared/ResponsiveHeader";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock, Users, Star, Play, CheckCircle } from "lucide-react";

export default function UniversidadCursoDetalle() {
  return (
    <div className="min-h-screen bg-background">
      <ResponsiveHeader />
      <main className="container mx-auto px-4 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Badge className="mb-4">Curso</Badge>
            <h1 className="text-4xl font-bold mb-4">Introducción a la Inteligencia Artificial</h1>
            <p className="text-xl text-muted-foreground mb-6">
              Aprende los fundamentos de la IA y cómo aplicarla en tu trabajo diario.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">8 semanas</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">2,300+ estudiantes</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="text-sm text-muted-foreground">4.9/5</span>
              </div>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Descripción del curso</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Este curso te introducirá a los conceptos fundamentales de la inteligencia artificial, 
                    incluyendo machine learning, deep learning y procesamiento del lenguaje natural.
                  </p>
                  <h3 className="font-semibold mb-2">Lo que aprenderás:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Fundamentos de IA y machine learning
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Aplicaciones prácticas en el trabajo
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Herramientas y plataformas de IA
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Contenido del curso</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <Play className="w-4 h-4 text-muted-foreground" />
                        <span>Módulo 1: Introducción a la IA</span>
                      </div>
                      <span className="text-sm text-muted-foreground">45 min</span>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <Play className="w-4 h-4 text-muted-foreground" />
                        <span>Módulo 2: Machine Learning Básico</span>
                      </div>
                      <span className="text-sm text-muted-foreground">60 min</span>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <Play className="w-4 h-4 text-muted-foreground" />
                        <span>Módulo 3: Aplicaciones Prácticas</span>
                      </div>
                      <span className="text-sm text-muted-foreground">75 min</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle>Inscribirse</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-3xl font-bold">Gratis</div>
                    <Button className="w-full" size="lg">
                      Comenzar curso
                    </Button>
                    <p className="text-sm text-muted-foreground text-center">
                      Acceso completo • Certificado incluido
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}