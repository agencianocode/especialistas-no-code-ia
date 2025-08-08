import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  MessageSquare, 
  User, 
  Hash, 
  Clock, 
  Crown,
  TrendingUp,
  ExternalLink,
  Star
} from "lucide-react";

interface SearchResult {
  id: number;
  type: 'message' | 'thread' | 'user';
  content: string;
  user: {
    name: string;
    avatar: string;
    role: string;
  };
  channel: string;
  timestamp: string;
  date: string;
  relevanceScore?: number;
  context?: string;
}

interface SearchResultsProps {
  results: SearchResult[];
  query: string;
  onClose: () => void;
}

export default function SearchResults({ results, query, onClose }: SearchResultsProps) {
  const highlightText = (text: string, query: string) => {
    if (!query.trim()) return text;
    
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <mark key={index} className="bg-yellow-400 text-black px-1 rounded">
          {part}
        </mark>
      ) : part
    );
  };

  const getRoleColor = (role: string) => {
    const roleColors = {
      'expert': 'bg-purple-600',
      'moderator': 'bg-red-600',
      'mentor': 'bg-yellow-600',
      'premium': 'bg-indigo-600',
      'instructor': 'bg-green-600',
      'top-contributor': 'bg-orange-600',
      'founder': 'bg-pink-600',
      'member': 'bg-blue-600',
      'guest': 'bg-gray-600'
    };
    return roleColors[role as keyof typeof roleColors] || 'bg-blue-600';
  };

  const getRoleBadge = (role: string) => {
    const roleBadges = {
      'expert': '🏆 Experto IA',
      'moderator': '🛡️ Moderador',
      'mentor': '⭐ Mentor Verificado',
      'premium': '🚀 Miembro Premium',
      'instructor': '📚 Instructor',
      'top-contributor': '🔥 Contribuidor Top',
      'founder': '🌟 Miembro Fundador'
    };
    return roleBadges[role as keyof typeof roleBadges];
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-purple-400" />
          <span className="font-medium">
            {results.length} resultado{results.length !== 1 ? 's' : ''} para "{query}"
          </span>
        </div>
        <Badge variant="secondary" className="bg-neutral-700 text-neutral-300">
          Búsqueda semántica con IA
        </Badge>
      </div>

      <ScrollArea className="h-96 pr-4">
        <div className="space-y-3">
          {results.map((result) => (
            <div
              key={result.id}
              className="p-4 bg-neutral-800/50 rounded-lg border border-neutral-700 hover:border-neutral-600 transition-colors cursor-pointer group"
              onClick={() => {
                // In real app, navigate to message/thread
                onClose();
              }}
            >
              <div className="flex items-start gap-3">
                {/* User Avatar */}
                <div className="relative">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-semibold ${getRoleColor(result.user.role)}`}>
                    {result.user.avatar}
                  </div>
                  {(result.user.role === 'expert' || result.user.role === 'instructor') && (
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-purple-600 rounded-full flex items-center justify-center">
                      <Crown className="w-1.5 h-1.5 text-white" />
                    </div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  {/* Header */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-medium">{result.user.name}</span>
                    {getRoleBadge(result.user.role) && (
                      <Badge variant="secondary" className="bg-neutral-600 text-white text-xs">
                        {getRoleBadge(result.user.role)}
                      </Badge>
                    )}
                    <div className="flex items-center gap-1 text-xs text-neutral-400">
                      <Hash className="w-3 h-3" />
                      <span>{result.channel}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-neutral-400">
                      <Clock className="w-3 h-3" />
                      <span>{result.timestamp}</span>
                    </div>
                    {result.relevanceScore && (
                      <div className="flex items-center gap-1 text-xs text-purple-400">
                        <Star className="w-3 h-3" />
                        <span>{Math.round(result.relevanceScore * 100)}%</span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="text-sm text-neutral-200 leading-relaxed mb-2">
                    {highlightText(result.context || result.content, query)}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs border-neutral-600 text-neutral-400">
                        <MessageSquare className="w-3 h-3 mr-1" />
                        {result.type === 'message' ? 'Mensaje' : result.type === 'thread' ? 'Hilo' : 'Usuario'}
                      </Badge>
                      <span className="text-xs text-neutral-500">{result.date}</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="opacity-0 group-hover:opacity-100 transition-opacity text-neutral-400 hover:text-white p-1"
                    >
                      <ExternalLink className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      {results.length > 10 && (
        <div className="text-center">
          <Button variant="outline" className="border-neutral-600 text-neutral-400 hover:text-white">
            Ver más resultados
          </Button>
        </div>
      )}
    </div>
  );
}