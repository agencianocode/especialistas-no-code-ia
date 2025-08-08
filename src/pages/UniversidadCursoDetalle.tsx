import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft,
  Play, 
  Clock, 
  Star, 
  CheckCircle,
  Search,
  Home,
  GraduationCap,
  FileText,
  Users,
  Calendar,
  Settings,
  Award,
  BookOpen,
  Video,
  Lock,
  PlayCircle,
  User,
  Calendar as CalendarIcon,
  ChevronRight,
  Download,
  MessageSquare
} from "lucide-react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function UniversidadCursoDetalle() {
  const [activeSection, setActiveSection] = useState('courses');
  const navigate = useNavigate();
  const { cursoId } = useParams();

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

  // Mock course data - in real app this would come from API/database
  const courseData = {
    id: cursoId || '1',
    title: "IA para consultoría",
    description: "Aprende los fundamentos del aprendizaje de la IA para la consultoría.",
    category: "Consultoría",
    duration: "4-6 horas",
    lessons: 12,
    students: "2,500+",
    rating: 4.9,
    instructor: {
      name: "Carlos Mendoza",
      role: "Senior AI Consultant",
      avatar: "CM"
    },
    modules: [
      {
        id: 1,
        title: "Introducción a la IA en consultoría",
        duration: "45 min",
        lessons: [
          { id: 1, title: "¿Qué es la IA en consultoría?", duration: "12 min", completed: true, type: "video" },
          { id: 2, title: "Casos de uso principales", duration: "15 min", completed: true, type: "video" },
          { id: 3, title: "Evaluación inicial", duration: "18 min", completed: false, type: "quiz" }
        ]
      },
      {
        id: 2,
        title: "Herramientas fundamentales",
        duration: "1h 20min",
        lessons: [
          { id: 4, title: "ChatGPT para análisis de datos", duration: "25 min", completed: false, type: "video" },
          { id: 5, title: "Claude para documentación", duration: "22 min", completed: false, type: "video" },
          { id: 6, title: "Práctica guiada", duration: "33 min", completed: false, type: "practice" }
        ]
      },
      {
        id: 3,
        title: "Implementación práctica",
        duration: "2h 15min",
        lessons: [
          { id: 7, title: "Automatización de reportes", duration: "45 min", completed: false, type: "video" },
          { id: 8, title: "Análisis predictivo básico", duration: "50 min", completed: false, type: "video" },
          { id: 9, title: "Proyecto final", duration: "40 min", completed: false, type: "project" }
        ]
      }
    ]
  };

  const completedLessons = courseData.modules.flatMap(m => m.lessons).filter(l => l.completed).length;
  const totalLessons = courseData.modules.flatMap(m => m.lessons).length;
  const progressPercentage = Math.round((completedLessons / totalLessons) * 100);

  const getIconForType = (type: string) => {
    switch (type) {
      case 'video': return <Video className="w-4 h-4" />;
      case 'quiz': return <FileText className="w-4 h-4" />;
      case 'practice': return <PlayCircle className="w-4 h-4" />;
      case 'project': return <Award className="w-4 h-4" />;
      default: return <BookOpen className="w-4 h-4" />;
    }
  };

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
          <div className="flex items-center p-3 bg-neutral-700 rounded-lg">
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mr-3">
              <span className="text-white font-semibold text-sm">F</span>
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium">Fabiania</div>
            </div>
            <Button variant="ghost" size="sm" className="p-1">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64">
        {/* Header */}
        <div className="border-b border-neutral-700 p-6">
          <div className="flex items-center gap-4 mb-4">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => navigate('/universidad/cursos')}
              className="text-neutral-400 hover:text-white"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver a cursos
            </Button>
          </div>
          
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold mb-1">{courseData.title}</h1>
                  <p className="text-neutral-400">{courseData.description}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 text-sm text-neutral-400">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {courseData.duration}
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  {courseData.lessons} lecciones
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  {courseData.students} estudiantes
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-400" />
                  {courseData.rating}
                </div>
              </div>
            </div>

            <div className="text-right">
              <div className="mb-2">
                <span className="text-2xl font-bold text-green-400">{progressPercentage}%</span>
                <span className="text-sm text-neutral-400 ml-2">completado</span>
              </div>
              <div className="w-32 h-2 bg-neutral-700 rounded-full">
                <div 
                  className="h-2 bg-green-400 rounded-full transition-all duration-300"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex">
          {/* Course Content */}
          <div className="flex-1 p-6">
            <div className="mb-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-neutral-700 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">{courseData.instructor.avatar}</span>
                </div>
                <div>
                  <div className="font-semibold">{courseData.instructor.name}</div>
                  <div className="text-sm text-neutral-400">{courseData.instructor.role}</div>
                </div>
              </div>
            </div>

            {/* Course Modules */}
            <div className="space-y-6">
              {courseData.modules.map((module) => (
                <Card key={module.id} className="bg-neutral-800 border-neutral-700">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{module.title}</CardTitle>
                      <Badge variant="outline" className="border-neutral-600 text-neutral-300">
                        {module.duration}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      {module.lessons.map((lesson) => (
                        <div 
                          key={lesson.id} 
                          className={`flex items-center gap-4 p-3 rounded-lg transition-colors cursor-pointer ${
                            lesson.completed 
                              ? 'bg-green-500/10 border border-green-500/20' 
                              : 'bg-neutral-700/50 hover:bg-neutral-700'
                          }`}
                        >
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                            lesson.completed 
                              ? 'bg-green-500 text-white' 
                              : 'bg-neutral-600 text-neutral-300'
                          }`}>
                            {lesson.completed ? (
                              <CheckCircle className="w-4 h-4" />
                            ) : (
                              getIconForType(lesson.type)
                            )}
                          </div>
                          
                          <div className="flex-1">
                            <div className="font-medium">{lesson.title}</div>
                            <div className="text-sm text-neutral-400">{lesson.duration}</div>
                          </div>

                          <div className="flex items-center gap-2">
                            {!lesson.completed && <Lock className="w-4 h-4 text-neutral-500" />}
                            <ChevronRight className="w-4 h-4 text-neutral-400" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Certificate Section */}
            <Card className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-purple-500/20 mt-8">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">Obtén tu certificación</h3>
                    <p className="text-neutral-300 mb-4">
                      Completa todas las lecciones y proyecto final para obtener tu certificado oficial de IA para Consultoría.
                    </p>
                    <Button 
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                      disabled={progressPercentage < 100}
                    >
                      {progressPercentage === 100 ? 'Obtener certificado' : `${progressPercentage}% completado`}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Info */}
          <div className="w-80 border-l border-neutral-700 p-6">
            <div className="space-y-6">
              {/* Progress Overview */}
              <Card className="bg-neutral-800 border-neutral-700">
                <CardHeader>
                  <CardTitle className="text-lg">Tu progreso</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Lecciones completadas</span>
                        <span>{completedLessons}/{totalLessons}</span>
                      </div>
                      <div className="w-full bg-neutral-700 rounded-full h-2">
                        <div 
                          className="bg-purple-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${progressPercentage}%` }}
                        />
                      </div>
                    </div>
                    <div className="pt-2">
                      <div className="text-sm text-neutral-400 mb-2">Tiempo estimado restante</div>
                      <div className="font-semibold">2h 45min</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Course Resources */}
              <Card className="bg-neutral-800 border-neutral-700">
                <CardHeader>
                  <CardTitle className="text-lg">Recursos del curso</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start border-neutral-600">
                      <Download className="w-4 h-4 mr-2" />
                      Material complementario
                    </Button>
                    <Button variant="outline" className="w-full justify-start border-neutral-600">
                      <FileText className="w-4 h-4 mr-2" />
                      Plantillas y ejemplos
                    </Button>
                    <Button variant="outline" className="w-full justify-start border-neutral-600">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Foro de discusión
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Next Steps */}
              <Card className="bg-neutral-800 border-neutral-700">
                <CardHeader>
                  <CardTitle className="text-lg">Próximos pasos</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="text-sm text-neutral-400">Cursos recomendados:</div>
                    <div className="space-y-2">
                      <div className="text-sm font-medium">IA para Marketing</div>
                      <div className="text-sm font-medium">IA Avanzada para Negocios</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}