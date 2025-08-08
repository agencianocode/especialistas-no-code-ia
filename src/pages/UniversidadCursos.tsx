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
  Lock,
  ChevronDown
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UniversidadCursos() {
  const [activeSection, setActiveSection] = useState('courses');
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
    }
  };

  const courses = [
    {
      id: 1,
      title: "IA para consultoría",
      description: "Aprende los fundamentos del aprendizaje de la IA para la consultoría.",
      category: "Consultoría",
      type: "Certificado",
      gradient: "from-purple-500 to-purple-700",
      badgeColor: "bg-purple-100 text-purple-800",
      available: true
    },
    {
      id: 2,
      title: "Kit de inicio de IA",
      description: "Comprende los conceptos del aprendizaje de la IA, de inicio.",
      category: "General",
      type: "Certificado",
      gradient: "from-blue-500 to-blue-700",
      badgeColor: "bg-blue-100 text-blue-800",
      available: true
    },
    {
      id: 3,
      title: "IA para codificación",
      description: "Aprende las herramientas útiles de IA para la codificación.",
      category: "Codificación",
      type: "Certificado",
      gradient: "from-blue-600 to-blue-800",
      badgeColor: "bg-blue-100 text-blue-800",
      available: true
    },
    {
      id: 4,
      title: "IA para marketing",
      description: "Aprende los fundamentos del aprendizaje de la IA para el marketing.",
      category: "Marketing",
      type: "Certificado",
      gradient: "from-orange-500 to-red-600",
      badgeColor: "bg-orange-100 text-orange-800",
      available: true
    },
    {
      id: 5,
      title: "IA para la creación de contenido",
      description: "Aprende los fundamentos del aprendizaje de la IA para la creación de contenido.",
      category: "Creador de contenido",
      type: "Certificado",
      gradient: "from-pink-500 to-rose-600",
      badgeColor: "bg-pink-100 text-pink-800",
      available: true
    },
    {
      id: 6,
      title: "IA para la educación",
      description: "Aprende los fundamentos del aprendizaje de la IA para la educación.",
      category: "Educador",
      type: "Certificado",
      gradient: "from-teal-500 to-cyan-600",
      badgeColor: "bg-teal-100 text-teal-800",
      available: true
    },
    {
      id: 7,
      title: "IA para operaciones comerciales",
      description: "Aprende los fundamentos del aprendizaje de la IA para operaciones comerciales.",
      category: "Operaciones comerciales",
      type: "Certificado",
      gradient: "from-purple-600 to-indigo-700",
      badgeColor: "bg-purple-100 text-purple-800",
      available: true
    },
    {
      id: 8,
      title: "IA para finanzas",
      description: "Aprende los fundamentos del uso de la IA para las finanzas.",
      category: "Finanzas",
      type: "Certificado",
      gradient: "from-green-500 to-emerald-600",
      badgeColor: "bg-green-100 text-green-800",
      available: true
    },
    {
      id: 9,
      title: "IA para el diseño",
      description: "Aprende los fundamentos del aprendizaje de la IA para el diseño.",
      category: "Diseño",
      type: "Certificado",
      gradient: "from-orange-400 to-yellow-500",
      badgeColor: "bg-orange-100 text-orange-800",
      available: true
    },
    {
      id: 10,
      title: "IA para la atención médica",
      description: "Aprende los fundamentos del aprendizaje de la IA para la atención médica.",
      category: "Cuidado de la salud",
      type: "Certificado",
      gradient: "from-red-500 to-pink-600",
      badgeColor: "bg-red-100 text-red-800",
      available: true
    },
    {
      id: 11,
      title: "IA para el gobierno",
      description: "Aprende los fundamentos del uso de la IA para el gobierno.",
      category: "Gobierno",
      type: "Certificado",
      gradient: "from-cyan-500 to-blue-600",
      badgeColor: "bg-cyan-100 text-cyan-800",
      available: true
    },
    {
      id: 12,
      title: "IA para la gestión de proyectos",
      description: "Aprende los fundamentos del aprendizaje de la IA para la gestión de proyectos.",
      category: "Gestión de proyectos",
      type: "Certificado",
      gradient: "from-pink-500 to-purple-600",
      badgeColor: "bg-pink-100 text-pink-800",
      available: true
    },
    {
      id: 13,
      title: "IA para el sector legal",
      description: "Aprende los fundamentos del aprendizaje de la IA para el sector legal.",
      category: "Legal",
      type: "Certificado",
      gradient: "from-indigo-500 to-purple-600",
      badgeColor: "bg-indigo-100 text-indigo-800",
      available: true
    },
    {
      id: 14,
      title: "IA para Recursos Humanos",
      description: "Aprende los fundamentos del aprendizaje de la IA para Recursos Humanos.",
      category: "Reclutamiento de recursos humanos",
      type: "Certificado",
      gradient: "from-purple-400 to-pink-500",
      badgeColor: "bg-purple-100 text-purple-800",
      available: true
    },
    {
      id: 15,
      title: "IA para el aprendizaje",
      description: "Aprende los fundamentos del aprendizaje de la IA para el aprendizaje.",
      category: "Alumno",
      type: "Certificado",
      gradient: "from-emerald-500 to-teal-600",
      badgeColor: "bg-emerald-100 text-emerald-800",
      available: true
    },
    {
      id: 16,
      title: "IA para ventas",
      description: "Aprende los fundamentos del aprendizaje de la IA para las ventas.",
      category: "Ventas",
      type: "Certificado",
      gradient: "from-blue-400 to-indigo-600",
      badgeColor: "bg-blue-100 text-blue-800",
      available: true
    },
    {
      id: 17,
      title: "IA para el análisis de datos",
      description: "Aprende los fundamentos del aprendizaje de la IA para el análisis de datos.",
      category: "Análisis de datos",
      type: "Certificado",
      gradient: "from-orange-500 to-red-500",
      badgeColor: "bg-orange-100 text-orange-800",
      available: true
    }
  ];

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
            <h1 className="text-3xl font-bold mb-2">Cursos</h1>
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

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card key={course.id} className="bg-neutral-800 border-neutral-700 overflow-hidden hover:bg-neutral-750 transition-colors group">
              {/* Course Image/Header */}
              <div className={`h-32 bg-gradient-to-br ${course.gradient} relative p-4 flex flex-col justify-between`}>
                <div className="flex justify-between items-start">
                  <div className="text-white">
                    <h3 className="font-bold text-lg mb-1">{course.title}</h3>
                    <p className="text-sm opacity-90">{course.description}</p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <Badge variant="secondary" className="bg-neutral-800/20 text-white text-xs border-white/20">
                      {course.id}
                    </Badge>
                    {course.available && (
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <div className="w-6 h-6 bg-neutral-800 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <Button 
                  size="sm" 
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm self-start"
                >
                  Obtener la certificación
                </Button>
              </div>

              {/* Course Info */}
              <CardContent className="p-4">
                <h4 className="font-semibold mb-2">{course.title}</h4>
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-neutral-400">Certificado</span>
                </div>
                <div className="text-sm text-neutral-400">{course.category}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}