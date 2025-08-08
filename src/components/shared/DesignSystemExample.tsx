// Ejemplo de uso del Sistema de Diseño Unificado
// Este componente demuestra cómo usar los nuevos componentes de diseño

import { 
  HeroText, 
  SectionTitle, 
  Subtitle, 
  Caption,
  VStack, 
  HStack,
  Container,
  Section,
  ColorText,
  GradientText,
  Animated,
  GamificationBadge,
  StatusIndicator
} from "@/components/ui/design-system";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Crown, Trophy, Star, Users } from "lucide-react";

export default function DesignSystemExample() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section con Sistema de Diseño */}
      <Section className="bg-gradient-to-br from-primary/10 to-secondary/10">
        <Container>
          <VStack size="2xl" className="text-center">
            <Animated animation="fade-in">
              <HeroText>
                Sistema de Diseño <GradientText variant="brand">Unificado</GradientText>
              </HeroText>
            </Animated>
            
            <Animated animation="fade-in" delay={200}>
              <Subtitle>
                Componentes consistentes y reutilizables para toda la aplicación
              </Subtitle>
            </Animated>
            
            <Animated animation="fade-in" delay={400}>
              <HStack size="md">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Explorar Componentes
                </Button>
                <Button variant="outline" size="lg">
                  Ver Documentación
                </Button>
              </HStack>
            </Animated>
          </VStack>
        </Container>
      </Section>

      {/* Sección de Características */}
      <Section>
        <Container>
          <VStack size="3xl">
            <div className="text-center">
              <SectionTitle>Características del Sistema</SectionTitle>
              <Subtitle>
                Diseño consistente y accesible en toda la aplicación
              </Subtitle>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Card 1 - Colores */}
              <Animated animation="fade-in" delay={100}>
                <Card className="hover-lift">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                        <Star className="w-4 h-4 text-primary-foreground" />
                      </div>
                      Colores Unificados
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <VStack size="sm">
                      <p className="text-sm text-muted-foreground">
                        Sistema de colores consistente con variables CSS
                      </p>
                      <HStack size="sm">
                        <ColorText variant="brand">Brand</ColorText>
                        <ColorText variant="level">Level</ColorText>
                        <ColorText variant="xp">XP</ColorText>
                      </HStack>
                    </VStack>
                  </CardContent>
                </Card>
              </Animated>

              {/* Card 2 - Tipografía */}
              <Animated animation="fade-in" delay={200}>
                <Card className="hover-lift">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                        <Users className="w-4 h-4 text-secondary-foreground" />
                      </div>
                      Tipografía Responsiva
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <VStack size="sm">
                      <p className="text-sm text-muted-foreground">
                        Escalas de texto adaptativas para todos los dispositivos
                      </p>
                      <div className="space-y-1 text-xs">
                        <div className="font-bold">HeroText</div>
                        <div className="font-semibold">SectionTitle</div>
                        <div className="font-medium">Subtitle</div>
                        <div>Caption</div>
                      </div>
                    </VStack>
                  </CardContent>
                </Card>
              </Animated>

              {/* Card 3 - Gamificación */}
              <Animated animation="fade-in" delay={300}>
                <Card className="hover-lift">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                        <Crown className="w-4 h-4 text-accent-foreground" />
                      </div>
                      Gamificación
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <VStack size="sm">
                      <p className="text-sm text-muted-foreground">
                        Badges y elementos de gamificación consistentes
                      </p>
                      <HStack size="sm">
                        <GamificationBadge type="level" size="sm">
                          <Crown className="w-3 h-3 mr-1" />
                          Nivel 5
                        </GamificationBadge>
                        <GamificationBadge type="xp" size="sm">
                          <Trophy className="w-3 h-3 mr-1" />
                          250 XP
                        </GamificationBadge>
                      </HStack>
                    </VStack>
                  </CardContent>
                </Card>
              </Animated>
            </div>
          </VStack>
        </Container>
      </Section>

      {/* Sección de Estados */}
      <Section className="bg-muted/50">
        <Container>
          <VStack size="2xl">
            <div className="text-center">
              <SectionTitle>Estados de Usuario</SectionTitle>
              <Subtitle>
                Indicadores visuales consistentes para diferentes estados
              </Subtitle>
            </div>
            
            <div className="grid gap-4 md:grid-cols-3">
              <Animated animation="fade-in" delay={100}>
                <Card>
                  <CardContent className="pt-6">
                    <VStack size="md" className="text-center">
                      <StatusIndicator status="online" size="lg" showLabel />
                      <Caption>Usuario en línea</Caption>
                    </VStack>
                  </CardContent>
                </Card>
              </Animated>

              <Animated animation="fade-in" delay={200}>
                <Card>
                  <CardContent className="pt-6">
                    <VStack size="md" className="text-center">
                      <StatusIndicator status="away" size="lg" showLabel />
                      <Caption>Usuario ausente</Caption>
                    </VStack>
                  </CardContent>
                </Card>
              </Animated>

              <Animated animation="fade-in" delay={300}>
                <Card>
                  <CardContent className="pt-6">
                    <VStack size="md" className="text-center">
                      <StatusIndicator status="offline" size="lg" showLabel />
                      <Caption>Usuario desconectado</Caption>
                    </VStack>
                  </CardContent>
                </Card>
              </Animated>
            </div>
          </VStack>
        </Container>
      </Section>

      {/* Sección de Animaciones */}
      <Section>
        <Container>
          <VStack size="2xl">
            <div className="text-center">
              <SectionTitle>Animaciones Suaves</SectionTitle>
              <Subtitle>
                Transiciones y animaciones consistentes en toda la aplicación
              </Subtitle>
            </div>
            
            <div className="grid gap-4 md:grid-cols-4">
              <Animated animation="fade-in" delay={100}>
                <Card className="hover-lift">
                  <CardContent className="pt-6 text-center">
                    <p className="text-sm font-medium">Fade In</p>
                  </CardContent>
                </Card>
              </Animated>

              <Animated animation="slide-up" delay={200}>
                <Card className="hover-lift">
                  <CardContent className="pt-6 text-center">
                    <p className="text-sm font-medium">Slide Up</p>
                  </CardContent>
                </Card>
              </Animated>

              <Animated animation="scale-in" delay={300}>
                <Card className="hover-lift">
                  <CardContent className="pt-6 text-center">
                    <p className="text-sm font-medium">Scale In</p>
                  </CardContent>
                </Card>
              </Animated>

              <Animated animation="bounce" delay={400}>
                <Card className="hover-lift">
                  <CardContent className="pt-6 text-center">
                    <p className="text-sm font-medium">Bounce</p>
                  </CardContent>
                </Card>
              </Animated>
            </div>
          </VStack>
        </Container>
      </Section>
    </div>
  );
}
