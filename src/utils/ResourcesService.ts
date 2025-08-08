interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'faq' | 'template' | 'tool' | 'link' | 'guide' | 'best-practice';
  content?: string;
  url?: string;
  downloadUrl?: string;
  channelId: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  createdAt: Date;
  updatedAt: Date;
  isPinned: boolean;
  votes: number;
  tags: string[];
  downloads?: number;
  views: number;
}

interface FAQ {
  id: string;
  question: string;
  answer: string;
  channelId: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  votes: number;
  isPinned: boolean;
  tags: string[];
  createdAt: Date;
}

export class ResourcesService {
  private static RESOURCES_STORAGE_KEY = 'universidad_channel_resources';
  private static FAQS_STORAGE_KEY = 'universidad_channel_faqs';

  // Sample resources data
  static readonly SAMPLE_RESOURCES: Record<string, Resource[]> = {
    'general': [
      {
        id: 'r1',
        title: 'Guía de Introducción a la IA',
        description: 'Una guía completa para comenzar con Inteligencia Artificial',
        type: 'guide',
        content: 'Esta guía cubre los conceptos fundamentales de IA...',
        channelId: 'general',
        author: { name: 'Dr. López', avatar: 'DL', role: 'mentor' },
        createdAt: new Date('2025-01-01'),
        updatedAt: new Date('2025-01-15'),
        isPinned: true,
        votes: 45,
        tags: ['principiantes', 'fundamentos', 'teoria'],
        views: 234
      },
      {
        id: 'r2',
        title: 'Plantilla de Prompt Engineering',
        description: 'Plantilla estructurada para crear prompts efectivos',
        type: 'template',
        downloadUrl: '/templates/prompt-template.pdf',
        channelId: 'general',
        author: { name: 'Cimfin Lyle Kruger', avatar: 'CK', role: 'expert' },
        createdAt: new Date('2025-01-10'),
        updatedAt: new Date('2025-01-10'),
        isPinned: true,
        votes: 38,
        tags: ['prompts', 'template', 'productividad'],
        downloads: 156,
        views: 189
      },
      {
        id: 'r3',
        title: 'ChatGPT vs Claude vs Gemini',
        description: 'Comparación detallada de las principales herramientas de IA',
        type: 'best-practice',
        url: 'https://example.com/ai-comparison',
        channelId: 'general',
        author: { name: 'Ana García', avatar: 'AG', role: 'moderator' },
        createdAt: new Date('2025-01-20'),
        updatedAt: new Date('2025-01-20'),
        isPinned: false,
        votes: 29,
        tags: ['comparacion', 'herramientas', 'evaluacion'],
        views: 145
      }
    ],
    'gobierno': [
      {
        id: 'r4',
        title: 'IA en el Sector Público',
        description: 'Mejores prácticas para implementar IA en gobierno',
        type: 'best-practice',
        content: 'Consideraciones éticas y técnicas para el sector público...',
        channelId: 'gobierno',
        author: { name: 'Carlos Ruiz', avatar: 'CR', role: 'instructor' },
        createdAt: new Date('2025-01-12'),
        updatedAt: new Date('2025-01-12'),
        isPinned: true,
        votes: 22,
        tags: ['gobierno', 'etica', 'implementacion'],
        views: 98
      }
    ],
    'salud': [
      {
        id: 'r5',
        title: 'IA para Diagnóstico Médico',
        description: 'Herramientas de IA aplicadas en medicina',
        type: 'tool',
        url: 'https://example.com/medical-ai-tools',
        channelId: 'salud',
        author: { name: 'María Founder', avatar: 'MF', role: 'founder' },
        createdAt: new Date('2025-01-18'),
        updatedAt: new Date('2025-01-18'),
        isPinned: false,
        votes: 18,
        tags: ['medicina', 'diagnostico', 'herramientas'],
        views: 76
      }
    ]
  };

  // Sample FAQs data
  static readonly SAMPLE_FAQS: Record<string, FAQ[]> = {
    'general': [
      {
        id: 'faq1',
        question: '¿Cuál es la mejor herramienta de IA para principiantes?',
        answer: 'Para principiantes, recomendamos empezar con ChatGPT debido a su interfaz intuitiva y amplia documentación. También es útil probar Claude para tareas de análisis y Gemini para investigación.',
        channelId: 'general',
        author: { name: 'Dr. López', avatar: 'DL', role: 'mentor' },
        votes: 67,
        isPinned: true,
        tags: ['principiantes', 'herramientas', 'recomendaciones'],
        createdAt: new Date('2025-01-05')
      },
      {
        id: 'faq2',
        question: '¿Cómo crear prompts más efectivos?',
        answer: 'Los prompts efectivos deben ser específicos, incluir contexto relevante, definir el formato de salida deseado y usar ejemplos cuando sea posible. La clave está en la claridad y la estructura.',
        channelId: 'general',
        author: { name: 'Cimfin Lyle Kruger', avatar: 'CK', role: 'expert' },
        votes: 89,
        isPinned: true,
        tags: ['prompts', 'mejores-practicas', 'productividad'],
        createdAt: new Date('2025-01-08')
      }
    ],
    'codificacion': [
      {
        id: 'faq3',
        question: '¿Qué herramientas de IA ayudan con la programación?',
        answer: 'Las principales herramientas son GitHub Copilot, Cursor, Codeium y ChatGPT. Cada una tiene fortalezas específicas: Copilot para autocompletado, Cursor para desarrollo completo, y ChatGPT para explicaciones y debugging.',
        channelId: 'codificacion',
        author: { name: 'Elias Novak', avatar: 'EN', role: 'top-contributor' },
        votes: 45,
        isPinned: false,
        tags: ['programacion', 'herramientas', 'desarrollo'],
        createdAt: new Date('2025-01-15')
      }
    ]
  };

  static getChannelResources(channelId: string): Resource[] {
    try {
      const stored = localStorage.getItem(`${this.RESOURCES_STORAGE_KEY}_${channelId}`);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (error) {
      console.error('Error loading channel resources:', error);
    }
    
    return this.SAMPLE_RESOURCES[channelId] || [];
  }

  static getChannelFAQs(channelId: string): FAQ[] {
    try {
      const stored = localStorage.getItem(`${this.FAQS_STORAGE_KEY}_${channelId}`);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (error) {
      console.error('Error loading channel FAQs:', error);
    }
    
    return this.SAMPLE_FAQS[channelId] || [];
  }

  static saveChannelResources(channelId: string, resources: Resource[]): void {
    try {
      localStorage.setItem(`${this.RESOURCES_STORAGE_KEY}_${channelId}`, JSON.stringify(resources));
    } catch (error) {
      console.error('Error saving channel resources:', error);
    }
  }

  static saveChannelFAQs(channelId: string, faqs: FAQ[]): void {
    try {
      localStorage.setItem(`${this.FAQS_STORAGE_KEY}_${channelId}`, JSON.stringify(faqs));
    } catch (error) {
      console.error('Error saving channel FAQs:', error);
    }
  }

  static addResource(resource: Omit<Resource, 'id' | 'createdAt' | 'updatedAt' | 'votes' | 'views'>): Resource {
    const newResource: Resource = {
      ...resource,
      id: Date.now().toString(),
      createdAt: new Date(),
      updatedAt: new Date(),
      votes: 0,
      views: 0
    };

    const resources = this.getChannelResources(resource.channelId);
    resources.unshift(newResource);
    this.saveChannelResources(resource.channelId, resources);
    
    return newResource;
  }

  static addFAQ(faq: Omit<FAQ, 'id' | 'createdAt' | 'votes'>): FAQ {
    const newFAQ: FAQ = {
      ...faq,
      id: Date.now().toString(),
      createdAt: new Date(),
      votes: 0
    };

    const faqs = this.getChannelFAQs(faq.channelId);
    faqs.unshift(newFAQ);
    this.saveChannelFAQs(faq.channelId, faqs);
    
    return newFAQ;
  }

  static voteResource(channelId: string, resourceId: string, vote: 1 | -1): void {
    const resources = this.getChannelResources(channelId);
    const resource = resources.find(r => r.id === resourceId);
    if (resource) {
      resource.votes += vote;
      this.saveChannelResources(channelId, resources);
    }
  }

  static voteFAQ(channelId: string, faqId: string, vote: 1 | -1): void {
    const faqs = this.getChannelFAQs(channelId);
    const faq = faqs.find(f => f.id === faqId);
    if (faq) {
      faq.votes += vote;
      this.saveChannelFAQs(channelId, faqs);
    }
  }

  static togglePin(channelId: string, resourceId: string, type: 'resource' | 'faq'): void {
    if (type === 'resource') {
      const resources = this.getChannelResources(channelId);
      const resource = resources.find(r => r.id === resourceId);
      if (resource) {
        resource.isPinned = !resource.isPinned;
        this.saveChannelResources(channelId, resources);
      }
    } else {
      const faqs = this.getChannelFAQs(channelId);
      const faq = faqs.find(f => f.id === resourceId);
      if (faq) {
        faq.isPinned = !faq.isPinned;
        this.saveChannelFAQs(channelId, faqs);
      }
    }
  }

  static incrementViews(channelId: string, resourceId: string): void {
    const resources = this.getChannelResources(channelId);
    const resource = resources.find(r => r.id === resourceId);
    if (resource) {
      resource.views++;
      this.saveChannelResources(channelId, resources);
    }
  }

  static searchResources(channelId: string, query: string): (Resource | FAQ)[] {
    const resources = this.getChannelResources(channelId);
    const faqs = this.getChannelFAQs(channelId);
    
    const queryLower = query.toLowerCase();
    
    const matchingResources = resources.filter(r => 
      r.title.toLowerCase().includes(queryLower) ||
      r.description.toLowerCase().includes(queryLower) ||
      r.tags.some(tag => tag.toLowerCase().includes(queryLower))
    );
    
    const matchingFAQs = faqs.filter(f => 
      f.question.toLowerCase().includes(queryLower) ||
      f.answer.toLowerCase().includes(queryLower) ||
      f.tags.some(tag => tag.toLowerCase().includes(queryLower))
    );
    
    return [...matchingResources, ...matchingFAQs];
  }

  static getResourceTypeIcon(type: string): string {
    const icons = {
      'faq': '❓',
      'template': '📄',
      'tool': '🔧',
      'link': '🔗',
      'guide': '📚',
      'best-practice': '⭐'
    };
    return icons[type as keyof typeof icons] || '📎';
  }

  static getResourceTypeLabel(type: string): string {
    const labels = {
      'faq': 'FAQ',
      'template': 'Plantilla',
      'tool': 'Herramienta',
      'link': 'Enlace',
      'guide': 'Guía',
      'best-practice': 'Mejor Práctica'
    };
    return labels[type as keyof typeof labels] || 'Recurso';
  }
}