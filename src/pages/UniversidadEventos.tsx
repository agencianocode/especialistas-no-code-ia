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
  Calendar as CalendarIcon,
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
  Download,
  MapPin,
  Globe
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UniversidadEventos() {
  const [activeSection, setActiveSection] = useState('events');
  const [currentDate, setCurrentDate] = useState(new Date(2025, 7)); // August 2025
  const navigate = useNavigate();

  const sidebarItems = [
    { id: 'home', icon: Home, label: 'Hogar' },
    { id: 'courses', icon: GraduationCap, label: 'Cursos' },
    { id: 'guides', icon: FileText, label: 'Guías' },
    { id: 'workshops', icon: Users, label: 'Talleres' },
    { id: 'events', icon: CalendarIcon, label: 'Eventos' },
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
    } else if (itemId === 'workshops') {
      navigate('/universidad/talleres');
    }
  };

  const upcomingEvents = [
    {
      id: 1,
      title: "Cómo ejecutar los modelos de peso abierto de OpenAI localmente en su computadora",
      category: "Código abierto",
      instructor: "Dr. Álvaro Ciriza",
      date: "6 de agosto (viernes)",
      time: "4:00 p. m. ET - 5:00 p. m. ET",
      thumbnail: "bg-gradient-to-br from-blue-400 to-cyan-500",
      badge: "bg-green-600"
    },
    {
      id: 2,
      title: "Dominando los agentes de IA para el servicio al cliente con Fin",
      category: "Agentes de IA",
      instructor: "Brian Byrne",
      date: "13 de agosto (miércoles)",
      time: "2:00 p. m. ET - 3:00 p. m. ET",
      thumbnail: "bg-gradient-to-br from-purple-400 to-violet-500",
      badge: "bg-blue-600"
    },
    {
      id: 3,
      title: "Cómo gestionar LLMs localmente: un taller práctico",
      category: "Maestría en Derecho local",
      instructor: "Dr. Álvaro Ciriza",
      date: "15 de agosto (viernes)",
      time: "4:00 p. m. ET - 5:00 p. m. ET",
      thumbnail: "bg-gradient-to-br from-teal-400 to-emerald-500",
      badge: "bg-purple-600"
    },
    {
      id: 4,
      title: "Consejos esenciales de ChatGPT: últimas funciones y casos prácticos",
      category: "General",
      instructor: "Dr. Álvaro Ciriza",
      date: "29 de agosto (viernes)",
      time: "4:00 p. m. ET - 5:00 p. m. ET",
      thumbnail: "bg-gradient-to-br from-orange-400 to-red-500",
      badge: "bg-gray-600"
    }
  ];

  const calendarEvents = {
    2: { title: "Dominando la incitación: Técnica", color: "bg-blue-500" },
    8: { title: "Cómo ejecutar los modelos d...", color: "bg-green-500" },
    13: { title: "Dominando los agentes de IA...", color: "bg-purple-500" },
    15: { title: "Cómo gestionar LLMs localm...", color: "bg-teal-500" },
    29: { title: "Consejos esenciales de Chat...", color: "bg-orange-500" }
  };

  const monthNames = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
  ];

  const dayNames = ["Sol", "Lun", "Mar", "Mié", "Jue", "Vie", "Sá senti"];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      const prevDate = new Date(year, month, 1 - (startingDayOfWeek - i));
      days.push({ 
        date: prevDate.getDate(), 
        isCurrentMonth: false,
        fullDate: prevDate
      });
    }
    
    // Add days of the current month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push({ 
        date: day, 
        isCurrentMonth: true,
        fullDate: new Date(year, month, day)
      });
    }
    
    // Add remaining days to complete the grid
    const remainingCells = 42 - days.length; // 6 rows × 7 days
    for (let day = 1; day <= remainingCells; day++) {
      const nextDate = new Date(year, month + 1, day);
      days.push({ 
        date: day, 
        isCurrentMonth: false,
        fullDate: nextDate
      });
    }
    
    return days;
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    if (direction === 'prev') {
      newDate.setMonth(newDate.getMonth() - 1);
    } else {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    setCurrentDate(newDate);
  };

  const days = getDaysInMonth(currentDate);

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
            <h1 className="text-3xl font-bold mb-2">Próximos talleres</h1>
            <p className="text-neutral-400">Vea nuestro calendario de eventos en vivo y regístrese para participar en sesiones de talleres en tiempo real.</p>
          </div>
        </div>

        {/* Upcoming Events Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-purple-400" />
              <h2 className="text-xl font-semibold">A continuación</h2>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" className="text-neutral-400">
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-neutral-400">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {upcomingEvents.map((event) => (
              <Card 
                key={event.id} 
                className="bg-neutral-800 border-neutral-700 overflow-hidden hover:bg-neutral-750 transition-colors group cursor-pointer"
                onClick={() => navigate(`/universidad/evento/${event.id}`)}
              >
                {/* Event Header */}
                <div className={`h-32 ${event.thumbnail} relative p-4 flex flex-col justify-between`}>
                  <div className="flex justify-between items-start">
                    <Badge 
                      variant="secondary" 
                      className={`text-xs text-white ${event.badge}`}
                    >
                      {event.category}
                    </Badge>
                  </div>

                  <div className="flex items-end justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-white text-sm">
                        <div className="font-medium">{event.instructor}</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Event Info */}
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-3 text-white leading-tight text-sm">{event.title}</h3>
                  
                  <div className="space-y-2 text-xs text-neutral-400">
                    <div>{event.date}</div>
                    <div>{event.time}</div>
                  </div>

                  <div className="mt-4">
                    <Button 
                      size="sm" 
                      className="w-full bg-neutral-700 hover:bg-neutral-600 text-white text-xs"
                    >
                      Detalles del evento y confirmación de asistencia
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Calendar Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-5 h-5 text-purple-400" />
              <h2 className="text-xl font-semibold">Todos los eventos</h2>
            </div>
            <Button 
              variant="outline" 
              className="border-neutral-600 text-neutral-300 hover:bg-neutral-700"
              onClick={() => navigate('/universidad/talleres')}
            >
              Ver todos los talleres a demanda
            </Button>
          </div>

          <Card className="bg-neutral-800 border-neutral-700">
            <CardHeader>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">
                  {monthNames[currentDate.getMonth()]} de {currentDate.getFullYear()}
                </h3>
                <div className="flex gap-2">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => navigateMonth('prev')}
                    className="text-neutral-400 hover:text-white"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => navigateMonth('next')}
                    className="text-neutral-400 hover:text-white"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1">
                {/* Day headers */}
                {dayNames.map((day) => (
                  <div key={day} className="p-2 text-center text-sm font-medium text-neutral-400">
                    {day}
                  </div>
                ))}
                
                {/* Calendar days */}
                {days.map((day, index) => {
                  const hasEvent = day.isCurrentMonth && calendarEvents[day.date];
                  return (
                    <div 
                      key={index} 
                      className={`min-h-[80px] p-2 border border-neutral-700 ${
                        day.isCurrentMonth ? 'bg-neutral-800' : 'bg-neutral-900'
                      } ${hasEvent ? 'cursor-pointer hover:bg-neutral-750' : ''} transition-colors`}
                      onClick={hasEvent ? () => navigate(`/universidad/evento/${day.date}`) : undefined}
                    >
                      <div className={`text-sm ${
                        day.isCurrentMonth ? 'text-white' : 'text-neutral-600'
                      }`}>
                        {day.date}
                      </div>
                      {hasEvent && (
                        <div className={`text-xs mt-1 p-1 rounded text-white ${hasEvent.color}`}>
                          {hasEvent.title}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}