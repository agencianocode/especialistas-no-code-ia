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
  User,
  Hash,
  Send,
  Smile,
  Paperclip,
  MoreHorizontal,
  Heart,
  MessageSquare,
  Copy,
  Pin,
  Bell,
  BellOff,
  UserPlus,
  Crown,
  Shield,
  Zap
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UniversidadComunidad() {
  const [activeSection, setActiveSection] = useState('community');
  const [activeChannel, setActiveChannel] = useState('general');
  const [newMessage, setNewMessage] = useState('');
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
    } else if (itemId === 'events') {
      navigate('/universidad/eventos');
    }
  };

  const channelCategories = [
    {
      name: "Industrias",
      channels: [
        { id: 'gobierno', name: 'Gobierno', count: 12, active: false },
        { id: 'salud', name: 'Cuidado de la salud', count: 23, active: false },
        { id: 'finanzas', name: 'Finanzas', count: 18, active: false },
        { id: 'codificacion', name: 'Codificación', count: 31, active: false },
        { id: 'rrhh', name: 'Reclutamiento / RRHH', count: 9, active: false },
        { id: 'diseno', name: 'Diseño', count: 15, active: false }
      ]
    },
    {
      name: "Funciones",
      channels: [
        { id: 'gestion-proyectos', name: 'Gestión de proyectos', count: 7, active: false },
        { id: 'operaciones', name: 'Operaciones comerciales', count: 13, active: false },
        { id: 'legal', name: 'Legal', count: 5, active: false },
        { id: 'datos', name: 'Análisis de datos', count: 22, active: false },
        { id: 'ventas', name: 'Ventas', count: 8, active: false },
        { id: 'marketing', name: 'Marketing', count: 33, active: false },
        { id: 'contenido', name: 'Creador de contenido', count: 21, active: false }
      ]
    },
    {
      name: "General",
      channels: [
        { id: 'general', name: 'General', count: 0, active: true }
      ]
    }
  ];

  // Role definitions with emojis
  const roleConfig = {
    'expert': { badge: '🏆 Experto IA', color: 'bg-purple-600', crown: true },
    'moderator': { badge: '🛡️ Moderador', color: 'bg-red-600', crown: false },
    'mentor': { badge: '⭐ Mentor Verificado', color: 'bg-yellow-600', crown: false },
    'premium': { badge: '🚀 Miembro Premium', color: 'bg-indigo-600', crown: false },
    'instructor': { badge: '📚 Instructor', color: 'bg-green-600', crown: false },
    'top-contributor': { badge: '🔥 Contribuidor Top', color: 'bg-orange-600', crown: false },
    'founder': { badge: '🌟 Miembro Fundador', color: 'bg-pink-600', crown: false },
    'member': { badge: null, color: 'bg-blue-600', crown: false },
    'guest': { badge: null, color: 'bg-gray-600', crown: false }
  };

  const messages = [
    {
      id: 1,
      user: { name: 'Vish', avatar: 'V', role: 'member' },
      content: 'Hola',
      timestamp: '01:28',
      date: '2 de junio de 2025',
      reactions: [],
      replies: 0
    },
    {
      id: 2,
      user: { name: 'Cimfin Lyle Kruger', avatar: 'CK', role: 'expert' },
      content: '¡Hola Vish! ¡Bienvenido! ¿Cuál es tu herramienta de IA favorita?',
      timestamp: '06:35',
      date: '3 de junio de 2025',
      reactions: [],
      replies: 0
    },
    {
      id: 3,
      user: { name: 'Ana García', avatar: 'AG', role: 'moderator' },
      content: '¡Feliz lunes! Si hay algún flujo de trabajo, caso de uso o herramienta específica sobre la que te gustaría que creáramos guías o talleres, por favor, indícalo como respuesta en este hilo. :)',
      timestamp: '14:22',
      date: '5 de junio de 2025',
      reactions: [{ emoji: '❤️', count: 3 }],
      replies: 1
    },
    {
      id: 4,
      user: { name: 'Freddie', avatar: 'F', role: 'premium' },
      content: 'Hola a todos. Me preguntaba si alguien tiene experiencia en configurar agentes de IA para gestionar renovaciones de contratos en el sector SaaS.',
      timestamp: '16:23',
      date: '20 de junio de 2025',
      reactions: [{ emoji: '💡', count: 1 }],
      replies: 1
    },
    {
      id: 5,
      user: { name: 'Carlos Ruiz', avatar: 'CR', role: 'instructor' },
      content: 'Me encantaría ver una guía sobre el enriquecimiento de datos y leads a gran escala. Utilizo varias herramientas (ZoomInfo, RocketReach, etc.), pero me gustaría ver cómo otros lo hacen con IA. Por ejemplo, tengo entre 200 y 300 empresas o contactos que quiero enriquecer para obtener más información.',
      timestamp: '04:19',
      date: '20 de junio de 2025',
      reactions: [{ emoji: '❤️', count: 2 }, { emoji: '👍', count: 4 }],
      replies: 7
    },
    {
      id: 6,
      user: { name: 'Elias Novak', avatar: 'EN', role: 'top-contributor' },
      content: 'En IA para ventas, ¿cómo se automatiza el alcance de ventas personalizado a gran escala? ¿Y qué es lo más difícil de mantener?',
      timestamp: '08:17',
      date: '1 de agosto de 2025',
      reactions: [{ emoji: '❤️', count: 2 }],
      replies: 2
    },
    {
      id: 7,
      user: { name: 'María Founder', avatar: 'MF', role: 'founder' },
      content: 'He escuchado mucho sobre "¿Cuál es la mejor herramienta de IA para presentaciones?". Hemos probado Gamma, Beautiful AI y Napkin AI. ¿Qué has usado que te permita afirmar con seguridad que es como el cursor para presentaciones?',
      timestamp: '16:52',
      date: '3 de agosto de 2025',
      reactions: [{ emoji: '💡', count: 1 }],
      replies: 4
    },
    {
      id: 8,
      user: { name: 'Dr. López', avatar: 'DL', role: 'mentor' },
      content: 'Para los nuevos miembros: he creado una lista curada de las mejores herramientas de IA por categoría. La compartiré en el canal de recursos esta semana.',
      timestamp: '10:30',
      date: '5 de agosto de 2025',
      reactions: [{ emoji: '🙌', count: 8 }, { emoji: '📚', count: 3 }],
      replies: 12
    }
  ];

  const [onlineUsers] = useState([
    { name: 'Fabianiela', status: 'online' },
    { name: 'Alex R.', status: 'online' },
    { name: 'María S.', status: 'away' },
    { name: 'Carlos M.', status: 'online' }
  ]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Aquí se enviaría el mensaje en una implementación real
      setNewMessage('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
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
              placeholder="Buscar canales" 
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
              <div className="text-sm font-medium">fabianiela</div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-1"></div>
                <div className="text-xs text-neutral-300">En línea</div>
              </div>
            </div>
            <Button variant="ghost" size="sm" className="p-1">
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 flex h-screen">
        {/* Channels Sidebar */}
        <div className="w-80 bg-neutral-800 border-r border-neutral-700 flex flex-col">
          {/* Community Header */}
          <div className="p-4 border-b border-neutral-700">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Chat de la comunidad</h2>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm text-neutral-400">Conectado</span>
              </div>
            </div>
          </div>

          {/* Channels List */}
          <div className="flex-1 overflow-y-auto p-4">
            {channelCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-6">
                <h3 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3">
                  {category.name}
                </h3>
                <div className="space-y-1">
                  {category.channels.map((channel) => (
                    <button
                      key={channel.id}
                      onClick={() => setActiveChannel(channel.id)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                        activeChannel === channel.id
                          ? 'bg-neutral-700 text-white'
                          : 'text-neutral-300 hover:bg-neutral-700 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Hash className="w-4 h-4" />
                        <span>{channel.name}</span>
                      </div>
                      {channel.count > 0 && (
                        <Badge variant="secondary" className="bg-neutral-600 text-white text-xs">
                          {channel.count}
                        </Badge>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="p-4 border-b border-neutral-700 bg-neutral-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Hash className="w-5 h-5 text-neutral-400" />
                <div>
                  <h3 className="font-semibold">General</h3>
                  <p className="text-sm text-neutral-400">Conversaciones generales sobre IA</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" className="text-neutral-400">
                  <Bell className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="text-neutral-400">
                  <Pin className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="text-neutral-400">
                  <Users className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            {messages.map((message) => (
              <div key={message.id} className="group">
                {/* Date separator if needed */}
                <div className="text-center mb-4">
                  <span className="bg-neutral-700 px-3 py-1 rounded-full text-xs text-neutral-400">
                    {message.date}
                  </span>
                </div>

                <div className="flex gap-4 hover:bg-neutral-800/50 p-3 rounded-lg transition-colors">
                  <div className="relative">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold ${
                      roleConfig[message.user.role]?.color || 'bg-blue-600'
                    }`}>
                      {message.user.avatar}
                    </div>
                    {roleConfig[message.user.role]?.crown && (
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-purple-600 rounded-full flex items-center justify-center">
                        <Crown className="w-2 h-2 text-white" />
                      </div>
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold">{message.user.name}</span>
                      {roleConfig[message.user.role]?.badge && (
                        <Badge variant="secondary" className="bg-neutral-600 text-white text-xs">
                          {roleConfig[message.user.role].badge}
                        </Badge>
                      )}
                      <span className="text-xs text-neutral-400">{message.timestamp}</span>
                    </div>

                    <div className="text-neutral-200 mb-2 leading-relaxed">
                      {message.content}
                    </div>

                    {/* Reactions and Actions */}
                    <div className="flex items-center gap-4">
                      {message.reactions.length > 0 && (
                        <div className="flex gap-1">
                          {message.reactions.map((reaction, index) => (
                            <button
                              key={index}
                              className="flex items-center gap-1 bg-neutral-700 hover:bg-neutral-600 px-2 py-1 rounded-full text-xs transition-colors"
                            >
                              <span>{reaction.emoji}</span>
                              <span>{reaction.count}</span>
                            </button>
                          ))}
                        </div>
                      )}

                      {/* Hidden actions that appear on hover */}
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
                        <Button variant="ghost" size="sm" className="text-neutral-400 hover:text-white p-1">
                          <Smile className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-neutral-400 hover:text-white p-1">
                          <MessageSquare className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-neutral-400 hover:text-white p-1">
                          <Copy className="w-4 h-4" />
                        </Button>
                      </div>

                      {message.replies > 0 && (
                        <button className="text-xs text-purple-400 hover:underline">
                          {message.replies} respuesta{message.replies !== 1 ? 's' : ''}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-neutral-700">
            <div className="relative">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Message the channel..."
                className="w-full bg-neutral-700 border border-neutral-600 rounded-lg px-4 py-3 pr-20 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex gap-1">
                <Button variant="ghost" size="sm" className="text-neutral-400 hover:text-white p-1">
                  <Paperclip className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="text-neutral-400 hover:text-white p-1">
                  <Smile className="w-4 h-4" />
                </Button>
                <Button 
                  onClick={handleSendMessage}
                  variant="ghost" 
                  size="sm" 
                  className="text-purple-400 hover:text-purple-300 p-1"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Online Users Sidebar */}
        <div className="w-64 bg-neutral-800 border-l border-neutral-700 p-4">
          <h3 className="font-semibold mb-4">Miembros en línea ({onlineUsers.length})</h3>
          <div className="space-y-2">
            {onlineUsers.map((user, index) => (
              <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-neutral-700 transition-colors">
                <div className="relative">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                    {user.name.slice(0, 2)}
                  </div>
                  <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-neutral-800 ${
                    user.status === 'online' ? 'bg-green-400' : 'bg-yellow-400'
                  }`} />
                </div>
                <span className="text-sm">{user.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}