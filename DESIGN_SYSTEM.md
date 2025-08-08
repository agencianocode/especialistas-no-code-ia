# 🎨 Sistema de Diseño Unificado - The Rundown

## 📋 **Resumen**

Este documento describe el sistema de diseño unificado implementado para mantener consistencia visual y de experiencia de usuario en toda la aplicación The Rundown.

## 🎯 **Objetivos**

- ✅ **Consistencia visual** en todos los componentes
- ✅ **Reutilización** de elementos de diseño
- ✅ **Accesibilidad** mejorada
- ✅ **Responsive design** optimizado
- ✅ **Performance** mejorada

## 🏗️ **Arquitectura del Sistema**

### **1. Tokens de Diseño** (`src/lib/design-system.ts`)

```typescript
// Colores principales
primary: 'hsl(var(--primary))'
secondary: 'hsl(var(--secondary))'
accent: 'hsl(var(--accent))'

// Colores de marca específicos
'brand-purple': 'hsl(265 83% 58%)'
'brand-pink': 'hsl(330 83% 58%)'
'brand-gradient': 'linear-gradient(135deg, hsl(265 83% 58%), hsl(330 83% 58%))'

// Colores de gamificación
'level-gold': 'hsl(45 100% 50%)'
'xp-blue': 'hsl(210 100% 50%)'
'badge-green': 'hsl(142 76% 36%)'
```

### **2. Componentes de Utilidad** (`src/components/ui/design-system.tsx`)

#### **Componentes de Texto**
```tsx
// Títulos principales
<HeroText>Sistema de Diseño Unificado</HeroText>

// Títulos de sección
<SectionTitle>Características del Sistema</SectionTitle>

// Subtítulos
<Subtitle>Componentes consistentes y reutilizables</Subtitle>

// Texto de caption
<Caption>Información adicional</Caption>
```

#### **Componentes de Layout**
```tsx
// Contenedor responsivo
<Container size="lg">
  <VStack size="2xl">
    <HStack size="md">
      {/* Contenido */}
    </HStack>
  </VStack>
</Container>

// Sección con espaciado automático
<Section className="bg-muted/50">
  {/* Contenido de sección */}
</Section>
```

#### **Componentes de Colores**
```tsx
// Texto con colores específicos
<ColorText variant="brand">Texto de marca</ColorText>
<ColorText variant="level">Nivel 5</ColorText>
<ColorText variant="xp">250 XP</ColorText>

// Texto con gradientes
<GradientText variant="brand">Texto con gradiente</GradientText>
```

#### **Componentes de Animación**
```tsx
// Animaciones predefinidas
<Animated animation="fade-in" delay={200}>
  <Card>Contenido animado</Card>
</Animated>

// Tipos de animación disponibles:
// - fade-in
// - slide-up
// - scale-in
// - bounce
```

#### **Componentes de Gamificación**
```tsx
// Badges de gamificación
<GamificationBadge type="level" size="md">
  <Crown className="w-3 h-3 mr-1" />
  Nivel 5
</GamificationBadge>

<GamificationBadge type="xp" size="sm">
  <Trophy className="w-3 h-3 mr-1" />
  250 XP
</GamificationBadge>
```

#### **Componentes de Estado**
```tsx
// Indicadores de estado de usuario
<StatusIndicator status="online" size="md" showLabel />
<StatusIndicator status="away" size="lg" />
<StatusIndicator status="offline" size="sm" />
```

## 🎨 **Guía de Uso**

### **1. Colores**

#### **❌ NO HACER - Colores hardcodeados**
```tsx
<span className="text-[#c855ff]">Texto</span>
<div className="bg-[#ff6b6b]">Fondo</div>
```

#### **✅ HACER - Usar sistema de colores**
```tsx
<ColorText variant="brand">Texto</ColorText>
<div className="bg-primary">Fondo</div>
```

### **2. Tipografía**

#### **❌ NO HACER - Tamaños hardcodeados**
```tsx
<h1 className="text-4xl sm:text-5xl lg:text-6xl">Título</h1>
<p className="text-sm">Texto</p>
```

#### **✅ HACER - Usar componentes de texto**
```tsx
<HeroText>Título principal</HeroText>
<SectionTitle>Título de sección</SectionTitle>
<Subtitle>Subtítulo</Subtitle>
<Caption>Información adicional</Caption>
```

### **3. Espaciado**

#### **❌ NO HACER - Espaciado inconsistente**
```tsx
<div className="space-y-4">
  <div className="mb-6">
    <div className="mt-8">
```

#### **✅ HACER - Usar componentes de espaciado**
```tsx
<VStack size="lg">
  <HStack size="md">
    {/* Contenido */}
  </HStack>
</VStack>
```

### **4. Layout**

#### **❌ NO HACER - Contenedores inconsistentes**
```tsx
<div className="container mx-auto px-4">
<div className="max-w-4xl mx-auto">
```

#### **✅ HACER - Usar componente Container**
```tsx
<Container size="lg">
  <Container size="md">
    {/* Contenido */}
  </Container>
</Container>
```

## 📱 **Responsive Design**

### **Breakpoints Consistentes**
```css
/* Definidos en designTokens.breakpoints */
sm: '640px'   /* Móvil */
md: '768px'   /* Tablet */
lg: '1024px'  /* Desktop pequeño */
xl: '1280px'  /* Desktop */
2xl: '1536px' /* Desktop grande */
```

### **Clases Responsive**
```tsx
// Texto responsivo
<HeroText className="text-4xl sm:text-5xl lg:text-6xl">

// Grid responsivo
<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

// Espaciado responsivo
<VStack size="md" className="space-y-4 md:space-y-6 lg:space-y-8">
```

## 🎭 **Animaciones**

### **Animaciones Disponibles**
```tsx
// Fade in
<Animated animation="fade-in">

// Slide up
<Animated animation="slide-up">

// Scale in
<Animated animation="scale-in">

// Bounce
<Animated animation="bounce">

// Con delay
<Animated animation="fade-in" delay={200}>
```

### **Transiciones**
```css
/* Definidas en designTokens.transitions */
fast: 'all 0.15s ease-out'
normal: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)'
slow: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
```

## 🎮 **Gamificación**

### **Badges Disponibles**
```tsx
// Tipos de badges
type="level"      // Oro - para niveles
type="xp"         // Azul - para experiencia
type="badge"      // Verde - para logros
type="achievement" // Gradiente - para logros especiales

// Tamaños
size="sm"         // Pequeño
size="md"         // Mediano (default)
size="lg"         // Grande
```

### **Estados de Usuario**
```tsx
// Estados disponibles
status="online"   // Verde - Usuario en línea
status="away"     // Amarillo - Usuario ausente
status="offline"  // Gris - Usuario desconectado

// Tamaños
size="sm"         // Pequeño
size="md"         // Mediano (default)
size="lg"         // Grande

// Mostrar etiqueta
showLabel={true}  // Muestra "En línea", "Ausente", etc.
```

## 🔧 **Implementación**

### **1. Importar Componentes**
```tsx
import { 
  HeroText, 
  SectionTitle, 
  Subtitle,
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
```

### **2. Usar en Componentes**
```tsx
export default function MiComponente() {
  return (
    <Section className="bg-muted/50">
      <Container>
        <VStack size="2xl">
          <Animated animation="fade-in">
            <HeroText>
              Título con <GradientText variant="brand">gradiente</GradientText>
            </HeroText>
          </Animated>
          
          <Animated animation="fade-in" delay={200}>
            <Subtitle>
              Subtítulo descriptivo
            </Subtitle>
          </Animated>
          
          <HStack size="md">
            <GamificationBadge type="level" size="md">
              <Crown className="w-3 h-3 mr-1" />
              Nivel 5
            </GamificationBadge>
            
            <StatusIndicator status="online" size="md" showLabel />
          </HStack>
        </VStack>
      </Container>
    </Section>
  );
}
```

## 📋 **Checklist de Implementación**

### **Para Nuevos Componentes:**
- [ ] ¿Usa los componentes del sistema de diseño?
- [ ] ¿Los colores usan variables CSS?
- [ ] ¿El espaciado es consistente?
- [ ] ¿Es responsive?
- [ ] ¿Tiene animaciones apropiadas?
- [ ] ¿Es accesible?

### **Para Refactoring:**
- [ ] ¿Reemplazé colores hardcodeados?
- [ ] ¿Unifiqué la tipografía?
- [ ] ¿Mejoré el espaciado?
- [ ] ¿Agregué animaciones?
- [ ] ¿Probé en diferentes dispositivos?

## 🚀 **Próximos Pasos**

1. **Refactorizar páginas existentes** para usar el sistema
2. **Crear más componentes** específicos de la aplicación
3. **Mejorar accesibilidad** con ARIA labels
4. **Optimizar performance** con lazy loading
5. **Agregar más animaciones** y micro-interacciones

## 📞 **Soporte**

Para dudas sobre el sistema de diseño:
- Revisar este documento
- Ver ejemplos en `DesignSystemExample.tsx`
- Consultar tokens en `src/lib/design-system.ts`
- Revisar componentes en `src/components/ui/design-system.tsx`
