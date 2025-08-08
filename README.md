# 🧠 The Rundown - Universidad de IA

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC.svg)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-Ready-green.svg)](https://supabase.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> 🚀 **Plataforma educativa integral de Inteligencia Artificial** - Democratizando el conocimiento de IA a través de una experiencia de aprendizaje gamificada, interactiva y centrada en la comunidad.

---

## 📋 Descripción del Proyecto

**The Rundown - Universidad de IA** es una plataforma educativa innovadora que combina aprendizaje estructurado con interacción comunitaria para enseñar Inteligencia Artificial de manera práctica y accesible.

### 🎯 **Propuesta de Valor**

- **Aprendizaje Gamificado**: Sistema de puntos, niveles y logros que motivan el progreso continuo
- **Comunidad Activa**: Canales de chat especializados con moderación inteligente
- **Contenido Curado**: Artículos, guías, herramientas y talleres actualizados constantemente
- **Experiencia Personalizada**: Dashboard adaptativo según el progreso y intereses del usuario
- **Recursos Compartidos**: Biblioteca colaborativa de recursos por canal

### 👥 **Audiencia Objetivo**

- Profesionales buscando upskilling en IA
- Estudiantes de tecnología y ciencias de datos
- Empresarios explorando aplicaciones de IA
- Desarrolladores interesados en Machine Learning
- Entusiastas de la tecnología

---

## ✨ Funcionalidades Principales

### 🏫 **Universidad de IA**
- **Dashboard Personalizado**: Continúa donde lo dejaste, recomendaciones personalizadas
- **Cursos Estructurados**: Módulos progresivos con certificaciones
- **Lecciones Interactivas**: Videos, ejercicios prácticos y evaluaciones
- **Eventos y Talleres**: Sesiones en vivo y workshops especializados

### 💬 **Sistema de Comunidad**
- **Canales Temáticos**: Separados por áreas de especialización
- **Chat en Tiempo Real**: Mensajería instantánea con hilos de conversación
- **Moderación Inteligente**: Sistema de roles y permisos
- **Recursos por Canal**: FAQs y documentación compartida

### 🎮 **Gamificación Avanzada**
- **Sistema de Niveles**: Progresión basada en participación y logros
- **Badges de Expertise**: Reconocimiento por áreas de especialización
- **Leaderboards**: Rankings semanales, mensuales y históricos
- **Achievements**: Logros desbloqueables por diferentes actividades

### 📚 **Centro de Recursos**
- **Artículos Curados**: Noticias y análisis del mundo IA
- **Guías Paso a Paso**: Tutoriales prácticos y casos de uso
- **Herramientas Recomendadas**: Directorio de tools y plataformas
- **Biblioteca de Talleres**: Sesiones grabadas y materiales

---

## 🛠️ Stack Tecnológico

### **Frontend**
- **React 18.3.1** - Biblioteca principal de UI
- **TypeScript** - Tipado estático para mayor robustez
- **Tailwind CSS** - Framework de estilos con design system personalizado
- **Vite** - Build tool ultrarrápido para desarrollo

### **UI/UX**
- **shadcn/ui** - Componentes accesibles y customizables
- **Radix UI** - Primitivos de UI de alta calidad
- **Lucide React** - Iconografía consistente y moderna
- **Responsive Design** - Optimizado para todos los dispositivos

### **Estado y Datos**
- **React Query** - Gestión de estado servidor y cache
- **React Hook Form** - Manejo eficiente de formularios
- **Zod** - Validación de esquemas TypeScript

### **Backend & Base de Datos**
- **Supabase** - Backend as a Service completo
- **PostgreSQL** - Base de datos relacional robusta
- **Real-time** - Funcionalidad en tiempo real nativa
- **Edge Functions** - Lógica serverless personalizada

### **Routing & Navigation**
- **React Router DOM** - Navegación SPA declarativa
- **Dynamic Imports** - Code splitting automático

---

## ⚡ Instalación y Configuración

### **Prerrequisitos**
- Node.js 18+ y npm
- Cuenta de Supabase (opcional para desarrollo)
- Git para control de versiones

### **Instalación Local**

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/the-rundown-universidad-ia.git
cd the-rundown-universidad-ia

# Instalar dependencias
npm install

# Configurar variables de entorno (opcional)
cp .env.example .env.local

# Iniciar servidor de desarrollo
npm run dev
```

### **Variables de Entorno**

```bash
# .env.local (opcional para funcionalidades avanzadas)
VITE_SUPABASE_URL=tu_supabase_project_url
VITE_SUPABASE_ANON_KEY=tu_supabase_anon_key
```

### **Scripts Disponibles**

```bash
npm run dev          # Desarrollo con hot reload
npm run build        # Build de producción
npm run preview      # Preview del build local
npm run lint         # Linting con ESLint
```

---

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── ui/              # Componentes base de shadcn/ui
│   └── shared/          # Componentes reutilizables
│       ├── Header.tsx
│       ├── MessageThread.tsx
│       ├── GamificationPanel.tsx
│       └── ChannelResources.tsx
├── pages/               # Páginas principales de la aplicación
│   ├── Index.tsx        # Landing page
│   ├── Universidad.tsx  # Dashboard universidad
│   ├── UniversidadComunidad.tsx  # Sistema de chat
│   ├── Articulos.tsx    # Centro de artículos
│   ├── Guias.tsx        # Guías paso a paso
│   ├── Herramientas.tsx # Directorio de tools
│   └── Talleres.tsx     # Talleres y eventos
├── utils/               # Servicios y utilidades
│   ├── GamificationService.ts
│   ├── ResourcesService.ts
│   └── SearchService.ts
├── hooks/               # Custom hooks
├── lib/                 # Configuraciones y helpers
└── styles/              # Estilos globales y design system
```

### **Componentes Clave**

- **ResponsiveHeader**: Navegación adaptativa con menú móvil
- **MessageThread**: Sistema de hilos de conversación
- **GamificationPanel**: Panel de progreso y logros
- **ChannelResources**: Gestión de recursos por canal
- **SearchModal**: Búsqueda global inteligente

---

## 🤝 Contribución

### **Guidelines de Desarrollo**

1. **Branching Strategy**
   ```bash
   main           # Producción estable
   develop        # Desarrollo activo
   feature/*      # Nuevas funcionalidades
   hotfix/*       # Correcciones urgentes
   ```

2. **Standards de Código**
   - Usar TypeScript estricto
   - Seguir convenciones de naming de React
   - Implementar componentes funcionales con hooks
   - Documentar PropTypes con interfaces

3. **Commits Semánticos**
   ```
   feat: nueva funcionalidad
   fix: corrección de bugs
   docs: documentación
   style: formato de código
   refactor: refactorización
   test: tests
   ```

### **Proceso de Contribución**

1. Fork del repositorio
2. Crear branch feature desde develop
3. Implementar cambios con tests
4. Pull request con descripción detallada
5. Code review y merge

---

## 🗺️ Roadmap y Estado del MVP

### **✅ Implementado (MVP v1.0)**

- ✅ Landing page responsive con SEO
- ✅ Dashboard de universidad personalizado
- ✅ Sistema de comunidad/chat en tiempo real
- ✅ Gamificación completa (niveles, badges, leaderboards)
- ✅ Gestión de recursos por canal
- ✅ Navegación responsive y accesible
- ✅ Design system consistente
- ✅ Integración con Supabase

### **🚧 En Desarrollo (MVP v1.1)**

- 🚧 Sistema de autenticación completo
- 🚧 Contenido real para artículos y guías
- 🚧 Video player para lecciones
- 🚧 Sistema de suscripciones
- 🚧 API de recursos dinámicos

### **📋 Próximas Funcionalidades (v2.0)**

- 📋 Certificaciones digitales
- 📋 Marketplace de cursos
- 📋 Integración con herramientas de IA
- 📋 Analytics avanzados
- 📋 Mobile app nativa
- 📋 Sistema de mentorías

### **🎯 Métricas de Éxito**

- **Usuarios Activos**: Target 1000+ usuarios mes 1
- **Engagement**: 70%+ usuarios regresan semanalmente
- **Completación**: 60%+ completan primer curso
- **Comunidad**: 50+ mensajes diarios en chat

---

## 🚀 Deployment

### **Lovable Deployment (Recomendado)**

1. Conectar repositorio a Lovable
2. Configurar variables de entorno
3. Deploy automático desde main branch

### **Vercel/Netlify Alternative**

```bash
# Build para producción
npm run build

# Deploy a Vercel
npx vercel --prod

# Deploy a Netlify
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

### **Configuración de Supabase**

1. Crear proyecto en [Supabase](https://supabase.com)
2. Configurar schemas de base de datos
3. Habilitar Row Level Security
4. Configurar Edge Functions si es necesario

---

## 📊 Performance y SEO

### **Optimizaciones Implementadas**

- ⚡ Code splitting automático por rutas
- 🖼️ Lazy loading de imágenes
- 📱 Responsive design mobile-first
- 🔍 Meta tags dinámicos por página
- 🚀 Precarga de recursos críticos
- 📈 Core Web Vitals optimizados

### **SEO Strategy**

- Structured data (JSON-LD)
- Canonical URLs
- Open Graph tags
- Twitter Cards
- Sitemap automático
- Robot.txt optimizado

---

## 📞 Soporte y Contacto

### **Canales de Soporte**

- 📧 **Email**: soporte@therundown-ia.com
- 💬 **Discord**: [Comunidad The Rundown](https://discord.gg/therundown)
- 📱 **Twitter**: [@TheRundownIA](https://twitter.com/therundownia)
- 🐛 **Issues**: [GitHub Issues](https://github.com/tu-usuario/the-rundown-universidad-ia/issues)

### **Documentación Adicional**

- [API Documentation](docs/api.md)
- [Component Library](docs/components.md)
- [Deployment Guide](docs/deployment.md)
- [Contributing Guidelines](CONTRIBUTING.md)

---

## 📄 Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

---

## 🙏 Agradecimientos

- **Equipo de Desarrollo**: Por la dedicación y excelencia técnica
- **Comunidad Beta**: Por el feedback invaluable
- **Open Source Community**: Por las herramientas increíbles
- **Supabase Team**: Por el backend extraordinario

---

<div align="center">
  <strong>🚀 ¿Listo para revolucionar la educación en IA? ¡Únete a nosotros!</strong>
  
  [💻 Contribuir](CONTRIBUTING.md) • [🐛 Reportar Bug](https://github.com/tu-usuario/the-rundown-universidad-ia/issues) • [💡 Sugerir Feature](https://github.com/tu-usuario/the-rundown-universidad-ia/discussions)
</div>

---

**Hecho con ❤️ y ☕ por el equipo de The Rundown**