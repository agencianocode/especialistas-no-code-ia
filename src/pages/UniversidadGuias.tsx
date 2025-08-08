import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Play, 
  Clock, 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  Search,
  Home,
  GraduationCap,
  FileText,
  Users,
  Calendar,
  Settings,
  CheckCircle,
  Award,
  TrendingUp,
  Code,
  Megaphone,
  Building,
  PieChart,
  Briefcase,
  DollarSign,
  MoreHorizontal,
  ChevronDown,
  Video,
  Filter,
  Eye
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UniversidadGuias() {
  const [activeSection, setActiveSection] = useState('guides');
  const navigate = useNavigate();

  const sidebarItems = [
    { id: 'home', icon: Home, label: 'Hogar' },
    { id: 'courses', icon: GraduationCap, label: 'Cursos' },
    { id: 'guides', icon: FileText, label: 'Guías' },
    { id: 'workshops', icon: Users, label: 'Talleres' },
    { id: 'events', icon: Calendar, label: 'Eventos' },
    { id: 'community', icon: Users, label: 'Comunidad' },
    { id: 'benefits', icon: Star, label: 'Beneficios' }
  ];

  const handleSidebarClick = (itemId: string) => {
    setActiveSection(itemId);
    if (itemId === 'home') {
      navigate('/universidad/dashboard');
    } else if (itemId === 'courses') {
      navigate('/universidad/cursos');
    }
  };

  const guides = [
    {
      id: 1,
      title: "Cómo generar contenido viral en redes sociales con IA",
      description: "Aprende a crear posts que generen engagement usando herramientas de IA",
      duration: "8 min",
      category: "Marketing",
      difficulty: "Principiante",
      thumbnail: "bg-gradient-to-br from-blue-400 to-blue-600",
      views: "2.3k"
    },
    {
      id: 2,
      title: "Automatización de reportes con ChatGPT y Excel",
      description: "Genera reportes automáticamente combinando ChatGPT con hojas de cálculo",
      duration: "12 min",
      category: "Análisis de datos",
      difficulty: "Intermedio",
      thumbnail: "bg-gradient-to-br from-green-400 to-emerald-600",
      views: "4.1k"
    },
    {
      id: 3,
      title: "Crear presentaciones profesionales con IA en minutos",
      description: "Diseña slides impactantes usando herramientas de IA generativa",
      duration: "6 min",
      category: "Diseño",
      difficulty: "Principiante",
      thumbnail: "bg-gradient-to-br from-purple-400 to-purple-600",
      views: "1.8k"
    },
    {
      id: 4,
      title: "Optimización de procesos empresariales con IA",
      description: "Identifica y automatiza procesos repetitivos en tu empresa",
      duration: "15 min",
      category: "Operaciones comerciales",
      difficulty: "Avanzado",
      thumbnail: "bg-gradient-to-br from-orange-400 to-red-500",
      views: "3.2k"
    },
    {
      id: 5,
      title: "Análisis de sentimientos en redes sociales",
      description: "Monitorea la percepción de tu marca usando herramientas de IA",
      duration: "10 min",
      category: "Marketing",
      difficulty: "Intermedio",
      thumbnail: "bg-gradient-to-br from-pink-400 to-rose-600",
      views: "2.7k"
    },
    {
      id: 6,
      title: "Desarrollo de chatbots para atención al cliente",
      description: "Crea asistentes virtuales que mejoren la experiencia del cliente",
      duration: "18 min",
      category: "Desarrollo",
      difficulty: "Avanzado",
      thumbnail: "bg-gradient-to-br from-teal-400 to-cyan-600",
      views: "1.9k"
    },
    {
      id: 7,
      title: "Investigación de mercado automatizada con IA",
      description: "Recopila y analiza datos de mercado de forma eficiente",
      duration: "11 min",
      category: "Investigación",
      difficulty: "Intermedio",
      thumbnail: "bg-gradient-to-br from-indigo-400 to-blue-600",
      views: "2.1k"
    },
    {
      id: 8,
      title: "Traducción y localización de contenido",
      description: "Adapta tu contenido para diferentes mercados globales",
      duration: "7 min",
      category: "Contenido",
      difficulty: "Principiante",
      thumbnail: "bg-gradient-to-br from-yellow-400 to-orange-500",
      views: "1.5k"
    },
    {
      id: 9,
      title: "Predicción de ventas usando machine learning",
      description: "Anticipa las tendencias de ventas con modelos predictivos",
      duration: "20 min",
      category: "Análisis de datos",
      difficulty: "Avanzado",
      thumbnail: "bg-gradient-to-br from-violet-400 to-purple-600",
      views: "3.8k"
    },
    {
      id: 10,
      title: "Automatización de reclutamiento con IA",
      description: "Optimiza tu proceso de selección de personal",
      duration: "14 min",
      category: "Recursos Humanos",
      difficulty: "Intermedio",
      thumbnail: "bg-gradient-to-br from-emerald-400 to-teal-600",
      views: "2.4k"
    },
    {
      id: 11,
      title: "Generación de código con GitHub Copilot",
      description: "Acelera el desarrollo de software con asistentes de IA",
      duration: "13 min",
      category: "Desarrollo",
      difficulty: "Intermedio",
      thumbnail: "bg-gradient-to-br from-slate-400 to-gray-600",
      views: "5.2k"
    },
    {
      id: 12,
      title: "Análisis de documentos legales con IA",
      description: "Revisa contratos y documentos legales de forma eficiente",
      duration: "16 min",
      category: "Legal",
      difficulty: "Avanzado",
      thumbnail: "bg-gradient-to-br from-amber-400 to-yellow-600",
      views: "1.3k"
    },
    {
      id: 13,
      title: "Personalización de campañas de email marketing",
      description: "Crea mensajes personalizados que aumenten la conversión",
      duration: "9 min",
      category: "Marketing",
      difficulty: "Intermedio",
      thumbnail: "bg-gradient-to-br from-red-400 to-pink-600",
      views: "2.9k"
    },
    {
      id: 14,
      title: "Detección de fraudes en transacciones financieras",
      description: "Protege tu negocio con sistemas de detección inteligentes",
      duration: "17 min",
      category: "Finanzas",
      difficulty: "Avanzado",
      thumbnail: "bg-gradient-to-br from-cyan-400 to-blue-600",
      views: "1.7k"
    },
    {
      id: 15,
      title: "Optimización de precios con algoritmos de IA",
      description: "Encuentra el precio óptimo para maximizar tus ganancias",
      duration: "12 min",
      category: "Estrategia comercial",
      difficulty: "Avanzado",
      thumbnail: "bg-gradient-to-br from-lime-400 to-green-600",
      views: "2.6k"
    },
    {
      id: 16,
      title: "Creación de música y audio con IA",
      description: "Genera música y efectos de sonido para tus proyectos",
      duration: "11 min",
      category: "Creativo",
      difficulty: "Principiante",
      thumbnail: "bg-gradient-to-br from-fuchsia-400 to-purple-600",
      views: "3.1k"
    },
    {
      id: 17,
      title: "Gestión inteligente de inventarios",
      description: "Optimiza el stock y reduce costos con predicciones de IA",
      duration: "14 min",
      category: "Operaciones",
      difficulty: "Intermedio",
      thumbnail: "bg-gradient-to-br from-rose-400 to-red-600",
      views: "1.9k"
    },
    {
      id: 18,
      title: "Análisis predictivo para el sector salud",
      description: "Mejora los diagnósticos y tratamientos con IA médica",
      duration: "19 min",
      category: "Salud",
      difficulty: "Avanzado",
      thumbnail: "bg-gradient-to-br from-teal-400 to-emerald-600",
      views: "2.2k"
    }
  ];

  const categories = [
    "Todas las categorías",
    "Marketing",
    "Análisis de datos", 
    "Desarrollo",
    "Operaciones comerciales",
    "Diseño",
    "Finanzas",
    "Legal",
    "Recursos Humanos",
    "Contenido",
    "Investigación"
  ];

  const [selectedCategory, setSelectedCategory] = useState("Todas las categorías");
  const [selectedDifficulty, setSelectedDifficulty] = useState("Todas");

  const filteredGuides = guides.filter(guide => {
    const categoryMatch = selectedCategory === "Todas las categorías" || guide.category === selectedCategory;
    const difficultyMatch = selectedDifficulty === "Todas" || guide.difficulty === selectedDifficulty;
    return categoryMatch && difficultyMatch;
  });

  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 w-64 h-full bg-neutral-800 border-r border-neutral-700">
        {/* Logo */}
        <div className="p-6 border-b border-neutral-700">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center mr-3">
              <span className="text-neutral-900 font-bold text-sm">TR</span>
            </div>
            <div>
              <div className="text-sm font-semibold">The Rundown</div>
              <div className="text-xs text-purple-400">University</div>
            </div>
            <Badge variant="secondary" className="ml-2 text-xs bg-neutral-600 text-white">
              BETA
            </Badge>
          </div>
        </div>

        {/* Search */}
        <div className="p-4 border-b border-neutral-700">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input 
              type="text" 
              placeholder="Buscar" 
              className="w-full bg-neutral-700 border border-neutral-600 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <kbd className="bg-neutral-600 px-2 py-1 rounded text-xs text-neutral-300">⌘K</kbd>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleSidebarClick(item.id)}
              className={`w-full flex items-center px-3 py-2 mb-1 text-sm rounded-lg transition-colors ${
                activeSection === item.id 
                  ? 'bg-neutral-700 text-white' 
                  : 'text-neutral-300 hover:bg-neutral-700 hover:text-white'
              }`}
            >
              <item.icon className="w-4 h-4 mr-3" />
              {item.label}
            </button>
          ))}
        </nav>

        {/* Bottom User Section */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="space-y-2">
            <button className="w-full flex items-center px-3 py-2 text-sm text-neutral-300 hover:bg-neutral-700 hover:text-white rounded-lg transition-colors">
              <Play className="w-4 h-4 mr-3" />
              Empezar
            </button>
            <button className="w-full flex items-center px-3 py-2 text-sm text-neutral-300 hover:bg-neutral-700 hover:text-white rounded-lg transition-colors">
              <FileText className="w-4 h-4 mr-3" />
              Informar un problema
            </button>
            <div className="flex items-center p-3 bg-neutral-700 rounded-lg">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-semibold text-sm">F</span>
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium">Fabiania</div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-1"></div>
                  <div className="text-xs text-neutral-300">1</div>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="p-1">
                <Settings className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Guías</h1>
            <p className="text-neutral-400">Tutoriales paso a paso para dominar la IA en tu trabajo</p>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="border-neutral-600 text-neutral-300 hover:bg-neutral-700">
              <Filter className="w-4 h-4 mr-2" />
              Filtros
            </Button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex gap-4 mb-8">
          <div className="flex items-center gap-2">
            <span className="text-sm text-neutral-400">Categoría:</span>
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-neutral-700 border border-neutral-600 rounded-lg px-3 py-1 text-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-neutral-400">Dificultad:</span>
            <select 
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="bg-neutral-700 border border-neutral-600 rounded-lg px-3 py-1 text-sm text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="Todas">Todas</option>
              <option value="Principiante">Principiante</option>
              <option value="Intermedio">Intermedio</option>
              <option value="Avanzado">Avanzado</option>
            </select>
          </div>
        </div>

        {/* Guides Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGuides.map((guide) => (
            <Card key={guide.id} className="bg-neutral-800 border-neutral-700 overflow-hidden hover:bg-neutral-750 transition-colors group cursor-pointer">
              {/* Guide Thumbnail */}
              <div className={`h-40 ${guide.thumbnail} relative p-4 flex flex-col justify-between`}>
                <div className="flex justify-between items-start">
                  <Badge variant="secondary" className="bg-black/20 text-white text-xs border-white/20">
                    {guide.id}
                  </Badge>
                  <div className="flex items-center gap-1 bg-black/20 backdrop-blur-sm rounded px-2 py-1">
                    <Eye className="w-3 h-3 text-white" />
                    <span className="text-xs text-white">{guide.views}</span>
                  </div>
                </div>
                <div className="flex justify-between items-end">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Play className="w-4 h-4 text-white" />
                    </div>
                    <div className="text-xs text-white bg-black/20 backdrop-blur-sm rounded px-2 py-1">
                      {guide.duration}
                    </div>
                  </div>
                  <Badge 
                    variant="secondary" 
                    className={`text-xs ${
                      guide.difficulty === 'Principiante' ? 'bg-green-500/20 text-green-300 border-green-500/30' :
                      guide.difficulty === 'Intermedio' ? 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30' :
                      'bg-red-500/20 text-red-300 border-red-500/30'
                    }`}
                  >
                    {guide.difficulty}
                  </Badge>
                </div>
              </div>

              {/* Guide Info */}
              <CardContent className="p-4">
                <h3 className="font-semibold mb-2 text-white leading-tight">{guide.title}</h3>
                <p className="text-sm text-neutral-400 mb-3 leading-relaxed">{guide.description}</p>
                
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="border-neutral-600 text-neutral-300 text-xs">
                    {guide.category}
                  </Badge>
                  <div className="flex items-center gap-2 text-xs text-neutral-400">
                    <Clock className="w-3 h-3" />
                    {guide.duration}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" className="border-neutral-600 text-neutral-300 hover:bg-neutral-700">
            Cargar más guías
          </Button>
        </div>
      </div>
    </div>
  );
}