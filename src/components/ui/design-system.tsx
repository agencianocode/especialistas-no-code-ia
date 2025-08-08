// Componentes de utilidad del sistema de diseño
// Estos componentes usan el sistema de diseño unificado

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

// ===== COMPONENTES DE TEXTO =====

interface TextProps {
  children: ReactNode;
  className?: string;
  as?: 'p' | 'span' | 'div';
}

/**
 * Componente de texto que usa el sistema de diseño
 */
export const Text = ({ children, className, as: Component = 'p' }: TextProps) => {
  return (
    <Component className={cn("text-foreground leading-relaxed", className)}>
      {children}
    </Component>
  );
};

/**
 * Componente para títulos principales
 */
export const HeroText = ({ children, className }: TextProps) => {
  return (
    <h1 className={cn(
      "font-bold tracking-tight text-balance",
      "text-4xl sm:text-5xl lg:text-6xl",
      className
    )}>
      {children}
    </h1>
  );
};

/**
 * Componente para títulos de sección
 */
export const SectionTitle = ({ children, className }: TextProps) => {
  return (
    <h2 className={cn(
      "font-bold tracking-tight text-balance",
      "text-2xl sm:text-3xl lg:text-4xl",
      className
    )}>
      {children}
    </h2>
  );
};

/**
 * Componente para subtítulos
 */
export const Subtitle = ({ children, className }: TextProps) => {
  return (
    <p className={cn(
      "text-muted-foreground leading-relaxed text-balance",
      "text-base sm:text-lg lg:text-xl",
      className
    )}>
      {children}
    </p>
  );
};

/**
 * Componente para texto de caption
 */
export const Caption = ({ children, className }: TextProps) => {
  return (
    <span className={cn(
      "text-muted-foreground text-sm",
      className
    )}>
      {children}
    </span>
  );
};

// ===== COMPONENTES DE ESPACIADO =====

interface SpacingProps {
  children: ReactNode;
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
}

/**
 * Componente para espaciado vertical
 */
export const VStack = ({ children, className, size = 'md' }: SpacingProps) => {
  const spacingClasses = {
    xs: 'space-y-1',
    sm: 'space-y-2',
    md: 'space-y-4',
    lg: 'space-y-6',
    xl: 'space-y-8',
    '2xl': 'space-y-12',
    '3xl': 'space-y-16',
  };

  return (
    <div className={cn(spacingClasses[size], className)}>
      {children}
    </div>
  );
};

/**
 * Componente para espaciado horizontal
 */
export const HStack = ({ children, className, size = 'md' }: SpacingProps) => {
  const spacingClasses = {
    xs: 'space-x-1',
    sm: 'space-x-2',
    md: 'space-x-4',
    lg: 'space-x-6',
    xl: 'space-x-8',
    '2xl': 'space-x-12',
    '3xl': 'space-x-16',
  };

  return (
    <div className={cn(spacingClasses[size], className)}>
      {children}
    </div>
  );
};

// ===== COMPONENTES DE LAYOUT =====

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

/**
 * Componente contenedor responsivo
 */
export const Container = ({ children, className, size = 'lg' }: ContainerProps) => {
  const sizeClasses = {
    sm: 'max-w-2xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full',
  };

  return (
    <div className={cn(
      "mx-auto px-4 sm:px-6 lg:px-8",
      sizeClasses[size],
      className
    )}>
      {children}
    </div>
  );
};

/**
 * Componente para secciones
 */
export const Section = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <section className={cn("py-12 md:py-16 lg:py-20", className)}>
      {children}
    </section>
  );
};

// ===== COMPONENTES DE COLORES =====

interface ColorTextProps {
  children: ReactNode;
  className?: string;
  variant?: 'brand' | 'level' | 'xp' | 'badge' | 'online' | 'offline' | 'away';
}

/**
 * Componente para texto con colores específicos
 */
export const ColorText = ({ children, className, variant = 'brand' }: ColorTextProps) => {
  const variantClasses = {
    brand: 'text-primary',
    level: 'text-yellow-600',
    xp: 'text-blue-600',
    badge: 'text-green-600',
    online: 'text-green-600',
    offline: 'text-gray-600',
    away: 'text-yellow-600',
  };

  return (
    <span className={cn(variantClasses[variant], className)}>
      {children}
    </span>
  );
};

// ===== COMPONENTES DE GRADIENTES =====

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  variant?: 'brand' | 'hero' | 'subtle';
}

/**
 * Componente para texto con gradientes
 */
export const GradientText = ({ children, className, variant = 'brand' }: GradientTextProps) => {
  const variantClasses = {
    brand: 'bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent',
    hero: 'bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent',
    subtle: 'bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent',
  };

  return (
    <span className={cn(variantClasses[variant], className)}>
      {children}
    </span>
  );
};

// ===== COMPONENTES DE ANIMACIONES =====

interface AnimatedProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-in' | 'slide-up' | 'scale-in' | 'bounce';
  delay?: number;
}

/**
 * Componente con animaciones predefinidas
 */
export const Animated = ({ children, className, animation = 'fade-in', delay = 0 }: AnimatedProps) => {
  const animationClasses = {
    'fade-in': 'animate-fade-in',
    'slide-up': 'animate-fade-in-up',
    'scale-in': 'animate-scale-in',
    'bounce': 'animate-bounce',
  };

  const style = delay > 0 ? { animationDelay: `${delay}ms` } : {};

  return (
    <div 
      className={cn(animationClasses[animation], className)}
      style={style}
    >
      {children}
    </div>
  );
};

// ===== COMPONENTES DE GAMIFICACIÓN =====

interface BadgeProps {
  children: ReactNode;
  className?: string;
  type?: 'level' | 'xp' | 'badge' | 'achievement';
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Componente para badges de gamificación
 */
export const GamificationBadge = ({ children, className, type = 'level', size = 'md' }: BadgeProps) => {
  const typeClasses = {
    level: 'bg-yellow-500 text-black',
    xp: 'bg-blue-500 text-white',
    badge: 'bg-green-500 text-white',
    achievement: 'bg-gradient-to-r from-purple-600 to-pink-600 text-white',
  };

  const sizeClasses = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1.5 text-sm',
    lg: 'px-4 py-2 text-base',
  };

  return (
    <span className={cn(
      "inline-flex items-center rounded-full font-medium",
      typeClasses[type],
      sizeClasses[size],
      className
    )}>
      {children}
    </span>
  );
};

// ===== COMPONENTES DE ESTADO =====

interface StatusIndicatorProps {
  status: 'online' | 'offline' | 'away';
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

/**
 * Componente para indicadores de estado
 */
export const StatusIndicator = ({ status, size = 'md', showLabel = false }: StatusIndicatorProps) => {
  const statusConfig = {
    online: {
      color: 'bg-green-500',
      label: 'En línea',
    },
    offline: {
      color: 'bg-gray-400',
      label: 'Desconectado',
    },
    away: {
      color: 'bg-yellow-500',
      label: 'Ausente',
    },
  };

  const sizeClasses = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4',
  };

  const config = statusConfig[status];

  return (
    <div className="flex items-center gap-2">
      <div className={cn(
        "rounded-full border-2 border-background",
        config.color,
        sizeClasses[size]
      )} />
      {showLabel && (
        <span className="text-sm text-muted-foreground">
          {config.label}
        </span>
      )}
    </div>
  );
};
