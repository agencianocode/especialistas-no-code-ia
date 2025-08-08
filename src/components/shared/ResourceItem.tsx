import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ThumbsUp, 
  ThumbsDown, 
  Pin, 
  ExternalLink, 
  Download, 
  Eye, 
  Calendar,
  User,
  Crown,
  MoreHorizontal,
  Copy,
  Flag
} from "lucide-react";
import { useState } from "react";

interface ResourceItemProps {
  item: any; // Resource or FAQ
  type: 'resource' | 'faq';
  onVote: (id: string, vote: 1 | -1) => void;
  onPin?: (id: string) => void;
  canModerate?: boolean;
  roleConfig: Record<string, any>;
}

export default function ResourceItem({ item, type, onVote, onPin, canModerate = false, roleConfig }: ResourceItemProps) {
  const [userVote, setUserVote] = useState<1 | -1 | null>(null);

  const handleVote = (vote: 1 | -1) => {
    if (userVote === vote) {
      // Remove vote
      const undoVote: 1 | -1 = vote === 1 ? -1 : 1;
      onVote(item.id, undoVote);
      setUserVote(null);
    } else {
      // Add new vote (and remove previous if exists)
      if (userVote) {
        const netVote: 1 | -1 = userVote === 1 ? (vote === -1 ? -1 : 1) : (vote === 1 ? 1 : -1);
        onVote(item.id, netVote);
      } else {
        onVote(item.id, vote);
      }
      setUserVote(vote);
    }
  };

  const formatDate = (date: Date | string) => {
    return new Date(date).toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const getRoleColor = (role: string) => {
    return roleConfig[role]?.color || 'bg-blue-600';
  };

  const getRoleBadge = (role: string) => {
    return roleConfig[role]?.badge;
  };

  const getTypeColor = (resourceType: string) => {
    const colors = {
      'faq': 'bg-blue-600',
      'template': 'bg-green-600',
      'tool': 'bg-purple-600',
      'link': 'bg-orange-600',
      'guide': 'bg-indigo-600',
      'best-practice': 'bg-yellow-600'
    };
    return colors[resourceType as keyof typeof colors] || 'bg-gray-600';
  };

  return (
    <Card className={`bg-neutral-800 border-neutral-700 hover:border-neutral-600 transition-colors ${item.isPinned ? 'ring-1 ring-purple-500' : ''}`}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              {item.isPinned && <Pin className="w-4 h-4 text-purple-400" />}
              {type === 'resource' && (
                <Badge variant="secondary" className={`${getTypeColor(item.type)} text-white text-xs`}>
                  {item.type === 'faq' ? '❓' : 
                   item.type === 'template' ? '📄' : 
                   item.type === 'tool' ? '🔧' : 
                   item.type === 'link' ? '🔗' : 
                   item.type === 'guide' ? '📚' : '⭐'}
                  {type === 'resource' ? 
                    (item.type === 'faq' ? 'FAQ' :
                     item.type === 'template' ? 'Plantilla' :
                     item.type === 'tool' ? 'Herramienta' :
                     item.type === 'link' ? 'Enlace' :
                     item.type === 'guide' ? 'Guía' : 'Mejor Práctica') : 'FAQ'}
                </Badge>
              )}
              {type === 'faq' && (
                <Badge variant="secondary" className="bg-blue-600 text-white text-xs">
                  ❓ FAQ
                </Badge>
              )}
            </div>
            <CardTitle className="text-white text-base mb-2">
              {type === 'resource' ? item.title : item.question}
            </CardTitle>
            <p className="text-neutral-300 text-sm leading-relaxed">
              {type === 'resource' ? item.description : item.answer}
            </p>
          </div>
          <div className="flex items-center gap-1 ml-4">
            {canModerate && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onPin?.(item.id)}
                className={`p-1 ${item.isPinned ? 'text-purple-400' : 'text-neutral-400 hover:text-white'}`}
              >
                <Pin className="w-4 h-4" />
              </Button>
            )}
            <Button variant="ghost" size="sm" className="p-1 text-neutral-400 hover:text-white">
              <MoreHorizontal className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        {/* Tags */}
        {item.tags && item.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {item.tags.slice(0, 3).map((tag: string) => (
              <Badge key={tag} variant="outline" className="text-xs border-neutral-600 text-neutral-400">
                #{tag}
              </Badge>
            ))}
            {item.tags.length > 3 && (
              <Badge variant="outline" className="text-xs border-neutral-600 text-neutral-400">
                +{item.tags.length - 3}
              </Badge>
            )}
          </div>
        )}

        {/* Author and Meta Info */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-semibold ${getRoleColor(item.author.role)}`}>
              {item.author.avatar}
            </div>
            <span className="text-sm text-neutral-400">{item.author.name}</span>
            {getRoleBadge(item.author.role) && (
              <Badge variant="secondary" className="bg-neutral-600 text-white text-xs">
                {getRoleBadge(item.author.role)}
              </Badge>
            )}
            {item.author.role === 'expert' && <Crown className="w-3 h-3 text-purple-400" />}
          </div>
          <div className="flex items-center gap-3 text-xs text-neutral-500">
            <div className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              <span>{formatDate(item.createdAt)}</span>
            </div>
            {type === 'resource' && item.views !== undefined && (
              <div className="flex items-center gap-1">
                <Eye className="w-3 h-3" />
                <span>{item.views}</span>
              </div>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Voting */}
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleVote(1)}
                className={`p-1 h-7 ${userVote === 1 ? 'text-green-400' : 'text-neutral-400 hover:text-green-400'}`}
              >
                <ThumbsUp className="w-3 h-3" />
              </Button>
              <span className="text-sm font-medium text-neutral-300 min-w-[20px] text-center">
                {item.votes}
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleVote(-1)}
                className={`p-1 h-7 ${userVote === -1 ? 'text-red-400' : 'text-neutral-400 hover:text-red-400'}`}
              >
                <ThumbsDown className="w-3 h-3" />
              </Button>
            </div>

            {/* Additional Actions */}
            <Button variant="ghost" size="sm" className="p-1 h-7 text-neutral-400 hover:text-white">
              <Copy className="w-3 h-3" />
            </Button>
            <Button variant="ghost" size="sm" className="p-1 h-7 text-neutral-400 hover:text-white">
              <Flag className="w-3 h-3" />
            </Button>
          </div>

          <div className="flex items-center gap-2">
            {/* External Actions */}
            {type === 'resource' && item.url && (
              <Button
                variant="outline"
                size="sm"
                className="h-7 px-2 text-xs border-neutral-600 text-neutral-300 hover:text-white"
                onClick={() => window.open(item.url, '_blank')}
              >
                <ExternalLink className="w-3 h-3 mr-1" />
                Abrir
              </Button>
            )}
            {type === 'resource' && item.downloadUrl && (
              <Button
                variant="outline"
                size="sm"
                className="h-7 px-2 text-xs border-neutral-600 text-neutral-300 hover:text-white"
              >
                <Download className="w-3 h-3 mr-1" />
                Descargar
                {item.downloads && <span className="ml-1">({item.downloads})</span>}
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}