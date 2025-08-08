import ResponsiveHeader from "@/components/shared/ResponsiveHeader";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, MessageSquare, Calendar, Star } from "lucide-react";

export default function UniversidadComunidad() {
  return (
    <div className="min-h-screen bg-background">
      <ResponsiveHeader />
      <main className="container mx-auto px-4 py-12 md:py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Comunidad de la Universidad</h1>
          <p className="text-xl text-muted-foreground">Conecta con otros estudiantes y expertos</p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Foros de Discusión</CardTitle>
              <CardContent>
                <p className="text-muted-foreground">Participa en debates sobre IA</p>
              </CardContent>
            </CardHeader>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Grupos de Estudio</CardTitle>
              <CardContent>
                <p className="text-muted-foreground">Únete a grupos por especialidad</p>
              </CardContent>
            </CardHeader>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Mentorías</CardTitle>
              <CardContent>
                <p className="text-muted-foreground">Recibe orientación de expertos</p>
              </CardContent>
            </CardHeader>
          </Card>
        </div>
      </main>
    </div>
  );
}