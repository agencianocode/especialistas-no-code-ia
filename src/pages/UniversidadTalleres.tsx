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
  Eye,
  User,
  Download
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UniversidadTalleres() {
  const [activeSection, setActiveSection] = useState('workshops');
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
    } else if (itemId === 'guides') {
      navigate('/universidad/guias');
    }
  };

  const workshops = [
    {
      id: 1,
      title: "Dominando la incitación: Técnicas para mejores respuestas de IA",
      category: "Iniciación",
      instructor: "Dr. Álvaro Ciriza",
      tags: ["General", "Recursos humanos de selección", "Creación de contenido"],
      duration: "45 min",
      participants: "2.1k",
      thumbnail: "bg-gradient-to-br from-blue-400 to-cyan-500"
    },
    {
      id: 2,
      title: "Experiencia práctica con los agentes de ChatGPT",
      category: "Agentes de IA",
      instructor: "Dr. Álvaro Ciriza",
      tags: ["General", "Operaciones comerciales"],
      duration: "60 min",
      participants: "1.8k",
      thumbnail: "bg-gradient-to-br from-green-400 to-emerald-500"
    },
    {
      id: 3,
      title: "Automatización de la navegación con IA con Perplexity Comet",
      category: "Agentes de IA",
      instructor: "Dr. Álvaro Ciriza",
      tags: ["General", "Operaciones comerciales", "Marketing", "Análisis de datos"],
      duration: "55 min",
      participants: "1.5k",
      thumbnail: "bg-gradient-to-br from-purple-400 to-violet-500"
    },
    {
      id: 4,
      title: "Introducción a la instalación de la CLI de Google Gemini: uso y aplicaciones reales",
      category: "Codificación",
      instructor: "Dr. Álvaro Ciriza",
      tags: ["General"],
      duration: "40 min",
      participants: "1.2k",
      thumbnail: "bg-gradient-to-br from-orange-400 to-red-500"
    },
    {
      id: 5,
      title: "Cómo potenciar tu aplicación Bolt con Supabase y Stripe",
      category: "Codificación",
      instructor: "Tomás Gutkowski",
      tags: ["General"],
      duration: "50 min",
      participants: "900",
      thumbnail: "bg-gradient-to-br from-teal-400 to-cyan-500"
    },
    {
      id: 6,
      title: "Dominando los MCP: Desde las integraciones de Claude hasta los IDE de codificación",
      category: "Agentes de IA",
      instructor: "Dr. Álvaro Ciriza",
      tags: ["Operaciones comerciales"],
      duration: "65 min",
      participants: "1.3k",
      thumbnail: "bg-gradient-to-br from-pink-400 to-rose-500"
    },
    {
      id: 7,
      title: "Agentes n8n avanzados: activadores en tiempo real y acceso web",
      category: "Agentes de IA",
      instructor: "Dr. Álvaro Ciriza",
      tags: ["General", "Operaciones comerciales"],
      duration: "70 min",
      participants: "1.1k",
      thumbnail: "bg-gradient-to-br from-indigo-400 to-blue-500"
    },
    {
      id: 8,
      title: "Automatización de flujos de trabajo con IA, MCP y Gumloop",
      category: "Agentes de IA",
      instructor: "Max Gruber-Urhas",
      tags: ["General"],
      duration: "55 min",
      participants: "950",
      thumbnail: "bg-gradient-to-br from-yellow-400 to-orange-500"
    },
    {
      id: 9,
      title: "Primeros pasos con n8n: crea tu primer asistente personal",
      category: "Agentes de IA",
      instructor: "Dr. Álvaro Ciriza",
      tags: ["General", "Operaciones comerciales"],
      duration: "45 min",
      participants: "1.4k",
      thumbnail: "bg-gradient-to-br from-violet-400 to-purple-500"
    },
    {
      id: 10,
      title: "Potencia el seguimiento de sus clientes potenciales con un agente de IA",
      category: "Agentes de IA",
      instructor: "Kareen",
      tags: ["Operaciones comerciales"],
      duration: "50 min",
      participants: "800",
      thumbnail: "bg-gradient-to-br from-emerald-400 to-teal-500"
    },
    {
      id: 11,
      title: "Cómo aprovechar al máximo o3 y o3-Pro de OpenAI: indicaciones más inteligentes para obtener mejores resultados",
      category: "General",
      instructor: "Dr. Álvaro Ciriza",
      tags: ["General", "Codificación", "Operaciones comerciales"],
      duration: "60 min",
      participants: "2.3k",
      thumbnail: "bg-gradient-to-br from-slate-400 to-gray-500"
    },
    {
      id: 12,
      title: "Dominando Flux Kontext: Edición de imágenes con IA y flujo de trabajo integrado",
      category: "Creación de contenido",
      instructor: "Dr. Álvaro Ciriza",
      tags: ["General", "Creador de contenido", "Programación"],
      duration: "55 min",
      participants: "1.6k",
      thumbnail: "bg-gradient-to-br from-amber-400 to-yellow-500"
    }
  ];

  const categories = [
    "Todas las categorías",
    "Iniciación",
    "Agentes de IA", 
    "Codificación",
    "General",
    "Creación de contenido",
    "Marketing",
    "Análisis de datos"
  ];

  const [selectedCategory, setSelectedCategory] = useState("Todas las categorías");

  const filteredWorkshops = workshops.filter(workshop => {
    return selectedCategory === "Todas las categorías" || workshop.category === selectedCategory;
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
            <h1 className="text-3xl font-bold mb-2">Talleres a demanda</h1>
            <p className="text-neutral-400">Accede a nuestra biblioteca de talleres grabados que podrás ver en cualquier momento, a tu propio ritmo.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-neutral-400">Todas las categorías</span>
              <ChevronDown className="w-4 h-4 text-neutral-400" />
            </div>
            <Button variant="outline" className="border-neutral-600 text-neutral-300 hover:bg-neutral-700">
              Borrar filtros
            </Button>
          </div>
        </div>

        {/* Workshops Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWorkshops.map((workshop) => (
            <Card key={workshop.id} className="bg-neutral-800 border-neutral-700 overflow-hidden hover:bg-neutral-750 transition-colors group cursor-pointer">
              {/* Workshop Header */}
              <div className={`h-40 ${workshop.thumbnail} relative p-4 flex flex-col justify-between`}>
                <div className="flex justify-between items-start">
                  <Badge 
                    variant="secondary" 
                    className={`text-xs ${
                      workshop.category === 'Iniciación' ? 'bg-white text-black' :
                      workshop.category === 'Agentes de IA' ? 'bg-blue-600 text-white' :
                      workshop.category === 'Codificación' ? 'bg-green-600 text-white' :
                      workshop.category === 'Creación de contenido' ? 'bg-purple-600 text-white' :
                      'bg-gray-600 text-white'
                    }`}
                  >
                    {workshop.category}
                  </Badge>
                  <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 p-1">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>

                <div className="flex items-end justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-white">
                      <div className="text-sm font-medium">{workshop.instructor}</div>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Play className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              {/* Workshop Info */}
              <CardContent className="p-4">
                <h3 className="font-semibold mb-3 text-white leading-tight">{workshop.title}</h3>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {workshop.tags.map((tag, index) => (
                    <span key={index} className="text-xs text-neutral-400">
                      {tag}{index < workshop.tags.length - 1 ? ' | ' : ''}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-neutral-400">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {workshop.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    {workshop.participants}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" className="border-neutral-600 text-neutral-300 hover:bg-neutral-700">
            Cargar más talleres
          </Button>
        </div>
      </div>
    </div>
  );
}