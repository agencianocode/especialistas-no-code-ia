import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Crown,
  Smile,
  MessageSquare,
  Copy,
  MoreHorizontal
} from "lucide-react";

interface MessageUser {
  name: string;
  avatar: string;
  role: string;
}

interface MessageReaction {
  emoji: string;
  count: number;
}

interface Message {
  id: number;
  user: MessageUser;
  content: string;
  timestamp: string;
  date: string;
  reactions: MessageReaction[];
  replies: number;
}

interface MessageItemProps {
  message: Message;
  roleConfig: Record<string, any>;
  onThreadClick?: (messageId: number) => void;
  isInThread?: boolean;
}

export default function MessageItem({ message, roleConfig, onThreadClick, isInThread = false }: MessageItemProps) {
  return (
    <div className="group">
      {/* Date separator if needed and not in thread */}
      {!isInThread && (
        <div className="text-center mb-4">
          <span className="bg-neutral-700 px-3 py-1 rounded-full text-xs text-neutral-400">
            {message.date}
          </span>
        </div>
      )}

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
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-neutral-400 hover:text-white p-1"
                onClick={() => onThreadClick?.(message.id)}
              >
                <MessageSquare className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-neutral-400 hover:text-white p-1">
                <Copy className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-neutral-400 hover:text-white p-1">
                <MoreHorizontal className="w-4 h-4" />
              </Button>
            </div>

            {message.replies > 0 && !isInThread && (
              <button 
                className="text-xs text-purple-400 hover:underline flex items-center gap-1"
                onClick={() => onThreadClick?.(message.id)}
              >
                🧵 {message.replies} respuesta{message.replies !== 1 ? 's' : ''}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}