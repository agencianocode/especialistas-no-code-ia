import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  X, 
  Hash, 
  Send,
  Smile,
  Paperclip,
  ArrowLeft
} from "lucide-react";
import { useState } from "react";
import MessageItem from "./MessageItem";

interface ThreadProps {
  parentMessage: any;
  threadReplies: any[];
  roleConfig: Record<string, any>;
  onClose: () => void;
  onSendReply: (content: string) => void;
}

export default function MessageThread({ 
  parentMessage, 
  threadReplies, 
  roleConfig, 
  onClose, 
  onSendReply 
}: ThreadProps) {
  const [replyContent, setReplyContent] = useState('');

  const handleSendReply = () => {
    if (replyContent.trim()) {
      onSendReply(replyContent);
      setReplyContent('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendReply();
    }
  };

  return (
    <div className="w-96 bg-neutral-800 border-l border-neutral-700 flex flex-col h-full">
      {/* Thread Header */}
      <div className="p-4 border-b border-neutral-700 bg-neutral-800">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={onClose} className="text-neutral-400 hover:text-white p-1">
              <X className="w-4 h-4" />
            </Button>
            <h3 className="font-semibold">Hilo</h3>
          </div>
          <Badge variant="secondary" className="bg-neutral-600 text-white text-xs">
            {threadReplies.length} respuestas
          </Badge>
        </div>
        <div className="flex items-center gap-2 text-sm text-neutral-400">
          <Hash className="w-4 h-4" />
          <span>General</span>
        </div>
      </div>

      {/* Thread Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Parent Message */}
        <div className="border-l-2 border-purple-600 pl-4">
          <MessageItem 
            message={parentMessage} 
            roleConfig={roleConfig} 
            isInThread={true}
          />
        </div>

        {/* Thread Replies */}
        <div className="space-y-4">
          {threadReplies.map((reply) => (
            <MessageItem 
              key={reply.id} 
              message={reply} 
              roleConfig={roleConfig} 
              isInThread={true}
            />
          ))}
        </div>

        {threadReplies.length === 0 && (
          <div className="text-center text-neutral-400 py-8">
            <p className="text-sm">No hay respuestas aún.</p>
            <p className="text-xs mt-1">¡Sé el primero en responder!</p>
          </div>
        )}
      </div>

      {/* Thread Reply Input */}
      <div className="p-4 border-t border-neutral-700">
        <div className="relative">
          <input
            type="text"
            value={replyContent}
            onChange={(e) => setReplyContent(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Responder en el hilo..."
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
              onClick={handleSendReply}
              variant="ghost" 
              size="sm" 
              className="text-purple-400 hover:text-purple-300 p-1"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <p className="text-xs text-neutral-400 mt-2">
          También se publicará en <span className="text-purple-400">#general</span>
        </p>
      </div>
    </div>
  );
}