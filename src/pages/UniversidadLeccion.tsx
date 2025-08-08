import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft,
  Play, 
  Pause,
  Volume2,
  Maximize,
  Settings,
  SkipBack,
  SkipForward,
  Clock, 
  CheckCircle,
  Search,
  Home,
  GraduationCap,
  FileText,
  Users,
  Calendar,
  BookOpen,
  Video,
  Lock,
  PlayCircle,
  ChevronRight,
  ChevronDown,
  MessageSquare,
  ThumbsUp,
  Share,
  Download,
  Star,
  User
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function UniversidadLeccion() {
  const [activeSection, setActiveSection] = useState('courses');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(720); // 12 minutes
  const [volume, setVolume] = useState(1);
  const [showTranscript, setShowTranscript] = useState(true);
  const [completedSections, setCompletedSections] = useState<number[]>([]);
  
  const navigate = useNavigate();
  const { cursoId, leccionId } = useParams();
  const videoRef = useRef<HTMLVideoElement>(null);

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

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  // Mock lesson data
  const lessonData = {
    id: leccionId || '1',
    title: "¿Qué es la IA en consultoría?",
    courseTitle: "IA para consultoría",
    duration: "12:00",
    description: "En esta lección aprenderás los conceptos fundamentales de cómo la inteligencia artificial puede transformar el trabajo de consultoría moderna.",
    content: {
      title: "Ingeniería rápida para consultoría",
      objectives: [
        "Comprenda cómo elaborar indicaciones efectivas específicamente para tareas de consultoría como investigación, análisis y creación de resultados.",
        "Aprenda marcos estructurados, como la fórmula de seis pasos, para obtener constantemente resultados mejores y más confiables de la IA.",
        "Reconocer patrones de indicaciones comunes adaptados a desafíos de consultoría específicos.",
        "Aplicar técnicas avanzadas de estímulo para abordar escenarios estratégicos o analíticos complejos.",
        "Desarrolle estrategias para construir su propia biblioteca de indicaciones de consultoría efectivas."
      ],
      sections: [
        {
          title: "Introducción",
          content: "El módulo anterior mostró cómo herramientas como ChatGPT transformaron la forma de trabajar de los consultores. Pero pronto se dieron cuenta de que obtener resultados útiles, precisos y listos para el cliente de la IA requiere más que simplemente hacer una pregunta. Requiere la capacidad constante de formular la pregunta correcta de la manera correcta.\n\nLa ingeniería de indicaciones es la habilidad de redactar instrucciones claras, específicas y contextualizadas para guiar a los modelos de IA hacia el resultado deseado. Para los consultores, desarrollar esta habilidad es clave para usar la IA eficazmente, manteniendo altos estándares de calidad, precisión y relevancia. Este módulo se centra en métodos prácticos para redactar indicaciones eficaces, adaptadas al trabajo de consultoría."
        },
        {
          title: "Elementos fundamentales de una consultoría eficaz",
          content: "Toda propuesta de consultoría eficaz requiere ingredientes específicos para guiar la IA con precisión. Omitir elementos clave puede generar consejos genéricos, análisis inexactos o resultados inadecuados para el trabajo del cliente.",
          subsections: [
            {
              title: "1. Tarea y objetivo claros",
              content: "Sea explícito sobre lo que necesita que haga la IA. ¿Está resumiendo una investigación, generando ideas, redactando un correo electrónico, analizando datos o describiendo una presentación?",
              examples: [
                {
                  basic: "Ideas for client workshop.",
                  improved: "Generate a detailed agenda for a 3-hour client workshop focused on identifying cost-saving opportunities in their supply chain. Include timings, key activities, and desired outcomes for each section."
                }
              ],
              importance: "Las solicitudes imprecisas generan resultados imprecisos. Definir claramente la tarea y el objetivo específico (p. ej., \"agenda para taller de ahorro de costes\") centra la atención de la IA y garantiza que el resultado sea relevante para su necesidad inmediata."
            },
            {
              title: "2. Contexto suficiente",
              content: "Los modelos de IA carecen del conocimiento previo que usted tiene sobre el cliente, la industria o el proyecto. Proporcione contexto esencial.",
              examples: [
                {
                  basic: "Analyze market trends.",
                  improved: "Analyze key market trends for the European electric vehicle charging infrastructure sector over the next 5 years. Consider technological advancements, regulatory changes, and competitive landscape shifts. Our client is a new entrant planning a B2B offering."
                }
              ],
              importance: "El contexto (industria, situación del cliente, objetivos del proyecto) permite que la IA adapte su respuesta, haciéndola significativamente más relevante y reveladora que la información genérica."
            }
          ]
        }
      ]
    },
    keyPoints: [
      "La IA automatiza tareas repetitivas en consultoría",
      "Permite análisis de datos más profundos y rápidos", 
      "Mejora la calidad de presentaciones y reportes",
      "Libera tiempo para trabajo estratégico de mayor valor"
    ],
    nextLesson: {
      id: "2",
      title: "Casos de uso principales",
      duration: "15 min"
    },
    prevLesson: null
  };

  const courseModules = [
    {
      id: 1,
      title: "Introducción a la IA en consultoría",
      duration: "45 min",
      expanded: true,
      lessons: [
        { id: 1, title: "¿Qué es la IA en consultoría?", duration: "12 min", completed: true, current: true },
        { id: 2, title: "Casos de uso principales", duration: "15 min", completed: false, current: false },
        { id: 3, title: "Evaluación inicial", duration: "18 min", completed: false, current: false }
      ]
    },
    {
      id: 2, 
      title: "Herramientas fundamentales",
      duration: "1h 20min",
      expanded: false,
      lessons: [
        { id: 4, title: "ChatGPT para análisis de datos", duration: "25 min", completed: false, current: false },
        { id: 5, title: "Claude para documentación", duration: "22 min", completed: false, current: false },
        { id: 6, title: "Práctica guiada", duration: "33 min", completed: false, current: false }
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying && currentTime < duration) {
        setCurrentTime(prev => prev + 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying, currentTime, duration]);

  const progressPercentage = (currentTime / duration) * 100;

  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 w-64 h-full bg-neutral-800 border-r border-neutral-700 z-10">
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
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 flex">
        {/* Video and Content Area */}
        <div className="flex-1">
          {/* Header */}
          <div className="border-b border-neutral-700 p-4">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => navigate(`/universidad/curso/${cursoId}`)}
                className="text-neutral-400 hover:text-white"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                {lessonData.courseTitle}
              </Button>
              <ChevronRight className="w-4 h-4 text-neutral-400" />
              <span className="text-white font-medium">{lessonData.title}</span>
            </div>
          </div>

          {/* Video Player */}
          <div className="relative bg-black">
            <div className="aspect-video relative">
              {/* Mock video player */}
              <div className="w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <User className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-white text-lg font-medium">Carlos Mendoza</div>
                  <div className="text-neutral-400">Senior AI Consultant</div>
                </div>
              </div>

              {/* Video Controls Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="w-full bg-white/20 rounded-full h-1 mb-2">
                    <div 
                      className="bg-purple-500 h-1 rounded-full transition-all duration-300"
                      style={{ width: `${progressPercentage}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-xs text-white/80">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-white hover:bg-white/20"
                      disabled={!lessonData.prevLesson}
                    >
                      <SkipBack className="w-5 h-5" />
                    </Button>
                    
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-white hover:bg-white/20 w-12 h-12 rounded-full"
                      onClick={togglePlay}
                    >
                      {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
                    </Button>

                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="text-white hover:bg-white/20"
                      onClick={() => navigate(`/universidad/curso/${cursoId}/leccion/${lessonData.nextLesson.id}`)}
                    >
                      <SkipForward className="w-5 h-5" />
                    </Button>

                    <div className="flex items-center gap-2 ml-4">
                      <Volume2 className="w-4 h-4 text-white" />
                      <div className="w-16 h-1 bg-white/20 rounded-full">
                        <div 
                          className="bg-white h-1 rounded-full"
                          style={{ width: `${volume * 100}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                      <Settings className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                      <Maximize className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lesson Content */}
          <div className="p-6">
            <div className="mb-6">
              <h1 className="text-2xl font-bold mb-2">{lessonData.title}</h1>
              <p className="text-neutral-400">{lessonData.description}</p>
              
              <div className="flex items-center gap-4 mt-4">
                <div className="flex items-center gap-2 text-sm text-neutral-400">
                  <Clock className="w-4 h-4" />
                  {lessonData.duration}
                </div>
                <Button variant="outline" size="sm" className="border-neutral-600">
                  <ThumbsUp className="w-4 h-4 mr-2" />
                  Me gusta
                </Button>
                <Button variant="outline" size="sm" className="border-neutral-600">
                  <Share className="w-4 h-4 mr-2" />
                  Compartir
                </Button>
                <Button variant="outline" size="sm" className="border-neutral-600">
                  <Download className="w-4 h-4 mr-2" />
                  Descargar
                </Button>
              </div>
            </div>

            {/* Key Points */}
            <Card className="bg-neutral-800 border-neutral-700 mb-6">
              <CardHeader>
                <CardTitle className="text-lg">Puntos clave de esta lección</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {lessonData.keyPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Lesson Content */}
            <Card className="bg-neutral-800 border-neutral-700 mb-6">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-center text-purple-400">
                  {lessonData.content.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Learning Objectives */}
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-white">Al finalizar este módulo, usted:</h3>
                  <ul className="space-y-3">
                    {lessonData.content.objectives.map((objective, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-neutral-300 leading-relaxed">{objective}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Content Sections */}
                {lessonData.content.sections.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="space-y-4">
                    <h3 className="text-xl font-bold text-white border-b border-neutral-600 pb-2">
                      {section.title}
                    </h3>
                    
                    <div className="text-neutral-300 leading-relaxed whitespace-pre-line">
                      {section.content}
                    </div>

                    {/* Image placeholder for content */}
                    {sectionIndex === 0 && (
                      <div className="my-6">
                        <div className="w-full h-64 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-lg border border-purple-500/20 flex items-center justify-center">
                          <div className="text-center">
                            <FileText className="w-12 h-12 text-purple-400 mx-auto mb-2" />
                            <div className="text-neutral-400">Consultoría (9).png</div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Subsections */}
                    {section.subsections?.map((subsection, subIndex) => (
                      <div key={subIndex} className="ml-6 space-y-3 border-l-2 border-purple-500/20 pl-6">
                        <h4 className="text-lg font-semibold text-purple-300">
                          {subsection.title}
                        </h4>
                        
                        <div className="text-neutral-300 leading-relaxed">
                          {subsection.content}
                        </div>

                        {/* Examples */}
                        {subsection.examples?.map((example, exampleIndex) => (
                          <div key={exampleIndex} className="bg-neutral-700/50 rounded-lg p-4 space-y-3">
                            <div className="grid md:grid-cols-2 gap-4">
                              <div>
                                <div className="text-sm font-medium text-red-400 mb-2">Ejemplo básico:</div>
                                <div className="bg-red-900/20 border border-red-500/30 rounded p-3 text-sm text-neutral-300">
                                  "{example.basic}"
                                </div>
                              </div>
                              <div>
                                <div className="text-sm font-medium text-green-400 mb-2">Ejemplo mejorado:</div>
                                <div className="bg-green-900/20 border border-green-500/30 rounded p-3 text-sm text-neutral-300">
                                  "{example.improved}"
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}

                        {/* Importance note */}
                        {subsection.importance && (
                          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
                            <div className="text-sm font-medium text-blue-400 mb-2">Por qué es importante:</div>
                            <div className="text-neutral-300 text-sm leading-relaxed">
                              {subsection.importance}
                            </div>
                          </div>
                        )}

                        {/* Screenshots placeholders */}
                        {subIndex === 0 && (
                          <div className="my-4">
                            <div className="w-full h-48 bg-gradient-to-br from-cyan-900/30 to-blue-900/30 rounded-lg border border-cyan-500/20 flex items-center justify-center">
                              <div className="text-center">
                                <FileText className="w-10 h-10 text-cyan-400 mx-auto mb-2" />
                                <div className="text-neutral-400 text-sm">Captura de pantalla del 29/04/2025 a las 13:56.23.png</div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8 pt-6 border-t border-neutral-700">
              <div>
                {lessonData.prevLesson ? (
                  <Button variant="outline" className="border-neutral-600">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Lección anterior
                  </Button>
                ) : (
                  <div></div>
                )}
              </div>
              <div className="text-right">
                {lessonData.nextLesson && (
                  <div>
                    <div className="text-sm text-neutral-400 mb-1">Siguiente:</div>
                    <Button 
                      className="bg-purple-600 hover:bg-purple-700"
                      onClick={() => navigate(`/universidad/curso/${cursoId}/leccion/${lessonData.nextLesson.id}`)}
                    >
                      {lessonData.nextLesson.title}
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Course Sidebar */}
        <div className="w-80 border-l border-neutral-700 bg-neutral-800/50">
          <div className="p-4 border-b border-neutral-700">
            <h3 className="font-semibold">Contenido del curso</h3>
          </div>
          <div className="p-4 max-h-screen overflow-y-auto">
            {courseModules.map((module) => (
              <div key={module.id} className="mb-4">
                <div className="flex items-center justify-between p-3 bg-neutral-700 rounded-lg mb-2">
                  <div>
                    <div className="font-medium text-sm">{module.title}</div>
                    <div className="text-xs text-neutral-400">{module.duration}</div>
                  </div>
                  <ChevronDown className={`w-4 h-4 transition-transform ${module.expanded ? 'rotate-180' : ''}`} />
                </div>
                {module.expanded && (
                  <div className="space-y-2 pl-2">
                    {module.lessons.map((lesson) => (
                      <div 
                        key={lesson.id}
                        className={`flex items-center gap-3 p-2 rounded cursor-pointer transition-colors ${
                          lesson.current 
                            ? 'bg-purple-600/20 border border-purple-500/30' 
                            : 'hover:bg-neutral-700/50'
                        }`}
                      >
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                          lesson.completed 
                            ? 'bg-green-500' 
                            : lesson.current 
                              ? 'bg-purple-500' 
                              : 'bg-neutral-600'
                        }`}>
                          {lesson.completed ? (
                            <CheckCircle className="w-4 h-4 text-white" />
                          ) : (
                            <span className="text-xs text-white">{lesson.id}</span>
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium">{lesson.title}</div>
                          <div className="text-xs text-neutral-400">{lesson.duration}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}