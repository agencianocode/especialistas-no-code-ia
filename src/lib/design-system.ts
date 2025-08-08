// Sistema de Diseño Unificado para The Rundown
// Este archivo define todos los tokens de diseño para mantener consistencia

export const designTokens = {
  // ===== COLORS =====
  colors: {
    // Colores principales
    primary: 'hsl(var(--primary))',
    'primary-foreground': 'hsl(var(--primary-foreground))',
    secondary: 'hsl(var(--secondary))',
    'secondary-foreground': 'hsl(var(--secondary-foreground))',
    accent: 'hsl(var(--accent))',
    'accent-foreground': 'hsl(var(--accent-foreground))',
    
    // Colores de fondo y texto
    background: 'hsl(var(--background))',
    foreground: 'hsl(var(--foreground))',
    card: 'hsl(var(--card))',
    'card-foreground': 'hsl(var(--card-foreground))',
    
    // Colores de estado
    destructive: 'hsl(var(--destructive))',
    'destructive-foreground': 'hsl(var(--destructive-foreground))',
    muted: 'hsl(var(--muted))',
    'muted-foreground': 'hsl(var(--muted-foreground))',
    
    // Colores de borde y input
    border: 'hsl(var(--border))',
    input: 'hsl(var(--input))',
    ring: 'hsl(var(--ring))',
    
    // Colores especiales para The Rundown
    'brand-purple': 'hsl(265 83% 58%)',
    'brand-pink': 'hsl(330 83% 58%)',
    'brand-gradient': 'linear-gradient(135deg, hsl(265 83% 58%), hsl(330 83% 58%))',
    
    // Colores de gamificación
    'level-gold': 'hsl(45 100% 50%)',
    'xp-blue': 'hsl(210 100% 50%)',
    'badge-green': 'hsl(142 76% 36%)',
    
    // Colores de estado de usuario
    'online-green': 'hsl(142 76% 36%)',
    'offline-gray': 'hsl(220 13% 91%)',
    'away-yellow': 'hsl(45 100% 50%)',
  },

  // ===== SPACING =====
  spacing: {
    xs: '0.25rem',    // 4px
    sm: '0.5rem',     // 8px
    md: '1rem',       // 16px
    lg: '1.5rem',     // 24px
    xl: '2rem',       // 32px
    '2xl': '3rem',    // 48px
    '3xl': '4rem',    // 64px
    '4xl': '6rem',    // 96px
  },

  // ===== TYPOGRAPHY =====
  typography: {
    fontSizes: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem',  // 36px
      '5xl': '3rem',     // 48px
      '6xl': '3.75rem',  // 60px
    },
    fontWeights: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
    },
    lineHeights: {
      tight: '1.25',
      normal: '1.5',
      relaxed: '1.75',
    },
  },

  // ===== BORDER RADIUS =====
  borderRadius: {
    none: '0',
    sm: '0.125rem',   // 2px
    base: '0.25rem',  // 4px
    md: '0.375rem',   // 6px
    lg: '0.5rem',     // 8px
    xl: '0.75rem',    // 12px
    '2xl': '1rem',    // 16px
    '3xl': '1.5rem',  // 24px
    full: '9999px',
  },

  // ===== SHADOWS =====
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    base: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
    inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
    none: '0 0 #0000',
  },

  // ===== TRANSITIONS =====
  transitions: {
    fast: 'all 0.15s ease-out',
    normal: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
    slow: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
  },

  // ===== BREAKPOINTS =====
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  // ===== Z-INDEX =====
  zIndex: {
    hide: '-1',
    auto: 'auto',
    base: '0',
    docked: '10',
    dropdown: '1000',
    sticky: '1100',
    banner: '1200',
    overlay: '1300',
    modal: '1400',
    popover: '1500',
    skipLink: '1600',
    toast: '1700',
    tooltip: '1800',
  },
};

// ===== UTILITY FUNCTIONS =====

/**
 * Obtiene un color del sistema de diseño
 */
export const getColor = (colorKey: keyof typeof designTokens.colors) => {
  return designTokens.colors[colorKey];
};

/**
 * Obtiene un espaciado del sistema de diseño
 */
export const getSpacing = (spacingKey: keyof typeof designTokens.spacing) => {
  return designTokens.spacing[spacingKey];
};

/**
 * Obtiene un tamaño de fuente del sistema de diseño
 */
export const getFontSize = (sizeKey: keyof typeof designTokens.typography.fontSizes) => {
  return designTokens.typography.fontSizes[sizeKey];
};

/**
 * Obtiene un peso de fuente del sistema de diseño
 */
export const getFontWeight = (weightKey: keyof typeof designTokens.typography.fontWeights) => {
  return designTokens.typography.fontWeights[weightKey];
};

/**
 * Obtiene un border radius del sistema de diseño
 */
export const getBorderRadius = (radiusKey: keyof typeof designTokens.borderRadius) => {
  return designTokens.borderRadius[radiusKey];
};

/**
 * Obtiene una sombra del sistema de diseño
 */
export const getShadow = (shadowKey: keyof typeof designTokens.shadows) => {
  return designTokens.shadows[shadowKey];
};

/**
 * Obtiene una transición del sistema de diseño
 */
export const getTransition = (transitionKey: keyof typeof designTokens.transitions) => {
  return designTokens.transitions[transitionKey];
};

// ===== CONSTANTS =====

/**
 * Constantes para colores específicos de la aplicación
 */
export const APP_COLORS = {
  // Colores de marca
  BRAND_PRIMARY: designTokens.colors['brand-purple'],
  BRAND_SECONDARY: designTokens.colors['brand-pink'],
  BRAND_GRADIENT: designTokens.colors['brand-gradient'],
  
  // Colores de gamificación
  LEVEL_COLOR: designTokens.colors['level-gold'],
  XP_COLOR: designTokens.colors['xp-blue'],
  BADGE_COLOR: designTokens.colors['badge-green'],
  
  // Estados de usuario
  ONLINE_COLOR: designTokens.colors['online-green'],
  OFFLINE_COLOR: designTokens.colors['offline-gray'],
  AWAY_COLOR: designTokens.colors['away-yellow'],
} as const;

/**
 * Constantes para espaciado común
 */
export const SPACING = {
  SECTION: designTokens.spacing['2xl'],
  CONTAINER: designTokens.spacing.lg,
  CARD: designTokens.spacing.md,
  BUTTON: designTokens.spacing.sm,
} as const;

/**
 * Constantes para tipografía
 */
export const TYPOGRAPHY = {
  HERO: designTokens.typography.fontSizes['5xl'],
  TITLE: designTokens.typography.fontSizes['3xl'],
  SUBTITLE: designTokens.typography.fontSizes.xl,
  BODY: designTokens.typography.fontSizes.base,
  CAPTION: designTokens.typography.fontSizes.sm,
} as const;
