import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowLeft,
  Play, 
  Clock, 
  Star, 
  Search,
  Home,
  GraduationCap,
  FileText,
  Users,
  Calendar as CalendarIcon,
  Settings,
  CheckCircle,
  Award,
  User,
  MapPin,
  Globe,
  ExternalLink,
  Plus
} from "lucide-react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

export default function UniversidadEventoDetalle() {
  const [activeSection, setActiveSection] = useState('events');
  const navigate = useNavigate();
  const { eventoId } = useParams();
  const { toast } = useToast();

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
    } else if (itemId === 'events') {
      navigate('/universidad/eventos');
    }
  };

  // Mock event data
  const eventData = {
    id: eventoId || '2',
    title: "Dominando los agentes de IA para el servicio al cliente con Fin",
    category: "Agentes de IA",
    instructor: {
      name: "Brian Byrne",
      avatar: "BB"
    },
    status: "Próximamente",
    date: "Miércoles 13 de agosto de 2025",
    time: "2:00 p. m., hora del este - 3:00 p. m., hora del este",
    timezone: "Tiempo Universal Coordinado",
    description: `Únase a nosotros el miércoles 13 de agosto a las 2 p.m. EST para un taller práctico sobre agentes de IA en servicio al cliente. Aprenderá: - Qué son los agentes de IA, qué pueden hacer y cómo esta revolucionando el panorama de soporte - Un marco estratégico, independiente del producto, para implementar IA (basado en los aprendizajes de Intercom de clientes de implementaciones) - Cómo obtener el marco en la práctica con Fin en 1 o 2 casos de uso de alto impacto Ya sea que esté explorando IA por primera vez o tratando de obtener más de una configuración actual, se irá con una comprensión clara de lo que está funcionando, lo que debe evitar y cómo construir una base escalable. Su anfitrión, Brian Byrne, gerente de educación del cliente en Intercom, ayuda a los equipos de soporte al cliente a convertir los objetivos estratégicos en acción a través de contenido educativo atractivo. No olvide confirmar su asistencia y marcar sus calendarios. ¡Nos vemos allí!`,
    thumbnail: "bg-gradient-to-br from-purple-400 to-violet-500",
    isUpcoming: true
  };

  const handleRSVP = () => {
    toast({
      title: "¡Reserva confirmada!",
      description: `Te has registrado exitosamente para "${eventData.title}". Recibirás un recordatorio por email.`,
    });
  };

  const handleAddToCalendar = () => {
    // Create calendar event data
    const startDate = new Date('2025-08-13T18:00:00Z'); // 2:00 PM EST
    const endDate = new Date('2025-08-13T19:00:00Z'); // 3:00 PM EST
    
    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventData.title)}&dates=${startDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z/${endDate.toISOString().replace(/[-:]/g, '').split('.')[0]}Z&details=${encodeURIComponent(eventData.description)}&location=Online`;
    
    window.open(calendarUrl, '_blank');
    
    toast({
      title: "Evento agregado al calendario",
      description: "Se ha abierto Google Calendar para agregar el evento.",
    });
  };

  const handleJoinLive = () => {
    toast({
      title: "Uniéndose a la transmisión en vivo",
      description: "Serás redirigido a la transmisión en vivo del evento.",
    });
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
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64">
        {/* Header */}
        <div className="border-b border-neutral-700 p-6">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => navigate('/universidad/eventos')}
            className="text-neutral-400 hover:text-white mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al calendario de talleres
          </Button>
        </div>

        {/* Event Hero */}
        <div className="relative">
          <div className={`h-80 ${eventData.thumbnail} flex items-center justify-center relative`}>
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
              <Badge className="mb-4 bg-blue-600 text-white">
                {eventData.category}
              </Badge>
              <h1 className="text-4xl font-bold mb-4 text-white">
                {eventData.title}
              </h1>
              <div className="flex items-center justify-center gap-4 text-white">
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span>Presentado por {eventData.instructor.name}</span>
                </div>
              </div>
            </div>
            
            {/* Instructor Avatar */}
            <div className="absolute right-8 bottom-8">
              <div className="w-32 h-32 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/20">
                <div className="w-24 h-24 bg-neutral-600 rounded-xl flex items-center justify-center">
                  <User className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex">
          {/* Event Content */}
          <div className="flex-1 p-8">
            <h2 className="text-3xl font-bold mb-6">{eventData.title}</h2>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-neutral-700 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">{eventData.instructor.avatar}</span>
              </div>
              <div>
                <div className="font-semibold">Presentado por {eventData.instructor.name}</div>
              </div>
            </div>

            <Badge variant="outline" className="border-green-600 text-green-400 mb-6">
              {eventData.status}
            </Badge>

            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Acerca de este taller</h3>
              <div className="text-neutral-300 leading-relaxed whitespace-pre-line">
                {eventData.description}
              </div>
            </div>
          </div>

          {/* Event Sidebar */}
          <div className="w-80 border-l border-neutral-700 p-6">
            <div className="space-y-6">
              {/* Event Details */}
              <Card className="bg-neutral-800 border-neutral-700">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <CalendarIcon className="w-4 h-4 text-purple-400" />
                        <span className="font-semibold">Fecha</span>
                      </div>
                      <div className="text-neutral-300">{eventData.date}</div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-4 h-4 text-purple-400" />
                        <span className="font-semibold">Tiempo</span>
                      </div>
                      <div className="text-neutral-300">{eventData.time}</div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Globe className="w-4 h-4 text-purple-400" />
                        <span className="font-semibold">Zona horaria</span>
                      </div>
                      <div className="text-neutral-300">{eventData.timezone}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Button 
                  onClick={handleRSVP}
                  className="w-full bg-white text-black hover:bg-gray-100"
                >
                  RSVP para este evento
                </Button>
                
                <div className="text-xs text-neutral-400 text-center">
                  10 en marcha
                </div>

                <Button 
                  onClick={handleJoinLive}
                  variant="outline" 
                  className="w-full border-neutral-600 text-neutral-300 hover:bg-neutral-700"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Únase a la transmisión en vivo
                </Button>

                <div className="text-xs text-neutral-400 text-center">
                  Al confirmar su asistencia, recibirá recordatorios por correo electrónico antes del evento.
                </div>

                <Button 
                  onClick={handleAddToCalendar}
                  variant="outline" 
                  className="w-full border-neutral-600 text-neutral-300 hover:bg-neutral-700"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Añadir al calendario
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}