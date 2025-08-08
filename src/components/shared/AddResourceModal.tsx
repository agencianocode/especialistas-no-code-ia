import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { 
  Plus,
  X,
  Link,
  Upload,
  FileText,
  HelpCircle
} from "lucide-react";
import { useState } from "react";
import { ResourcesService } from "@/utils/ResourcesService";

interface AddResourceModalProps {
  isOpen: boolean;
  onClose: () => void;
  channelId: string;
  onResourceAdded: (resource: any) => void;
  user: {
    name: string;
    avatar: string;
    role: string;
  };
}

export default function AddResourceModal({ isOpen, onClose, channelId, onResourceAdded, user }: AddResourceModalProps) {
  const [contentType, setContentType] = useState<'resource' | 'faq'>('resource');
  const [resourceType, setResourceType] = useState<string>('guide');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [url, setUrl] = useState('');
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [currentTag, setCurrentTag] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (contentType === 'resource') {
      if (!title.trim() || !description.trim()) return;
      
      const resource = ResourcesService.addResource({
        title: title.trim(),
        description: description.trim(),
        type: resourceType as any,
        content: content.trim() || undefined,
        url: url.trim() || undefined,
        channelId,
        author: user,
        isPinned: false,
        tags
      });
      
      onResourceAdded(resource);
    } else {
      if (!question.trim() || !answer.trim()) return;
      
      const faq = ResourcesService.addFAQ({
        question: question.trim(),
        answer: answer.trim(),
        channelId,
        author: user,
        isPinned: false,
        tags
      });
      
      onResourceAdded(faq);
    }
    
    handleClose();
  };

  const handleClose = () => {
    setTitle('');
    setDescription('');
    setContent('');
    setUrl('');
    setQuestion('');
    setAnswer('');
    setTags([]);
    setCurrentTag('');
    setResourceType('guide');
    setContentType('resource');
    onClose();
  };

  const addTag = () => {
    if (currentTag.trim() && !tags.includes(currentTag.trim())) {
      setTags([...tags, currentTag.trim()]);
      setCurrentTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addTag();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl bg-neutral-900 text-white border-neutral-700">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Plus className="w-5 h-5 text-purple-400" />
            Agregar Recurso
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Content Type Selection */}
          <div className="flex gap-2">
            <Button
              type="button"
              variant={contentType === 'resource' ? 'default' : 'outline'}
              onClick={() => setContentType('resource')}
              className="flex-1 bg-neutral-700 border-neutral-600"
            >
              <FileText className="w-4 h-4 mr-2" />
              Recurso
            </Button>
            <Button
              type="button"
              variant={contentType === 'faq' ? 'default' : 'outline'}
              onClick={() => setContentType('faq')}
              className="flex-1 bg-neutral-700 border-neutral-600"
            >
              <HelpCircle className="w-4 h-4 mr-2" />
              FAQ
            </Button>
          </div>

          {contentType === 'resource' ? (
            <>
              {/* Resource Type */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-300">Tipo de Recurso</label>
                <Select value={resourceType} onValueChange={setResourceType}>
                  <SelectTrigger className="bg-neutral-800 border-neutral-700">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-neutral-800 border-neutral-700">
                    <SelectItem value="guide">📚 Guía</SelectItem>
                    <SelectItem value="template">📄 Plantilla</SelectItem>
                    <SelectItem value="tool">🔧 Herramienta</SelectItem>
                    <SelectItem value="link">🔗 Enlace</SelectItem>
                    <SelectItem value="best-practice">⭐ Mejor Práctica</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Title */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-300">Título *</label>
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Título del recurso"
                  className="bg-neutral-800 border-neutral-700"
                  required
                />
              </div>

              {/* Description */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-300">Descripción *</label>
                <Textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe brevemente el recurso"
                  className="bg-neutral-800 border-neutral-700 min-h-[80px]"
                  required
                />
              </div>

              {/* Content or URL */}
              {resourceType === 'link' || resourceType === 'tool' ? (
                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-300">URL</label>
                  <div className="relative">
                    <Link className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
                    <Input
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      placeholder="https://ejemplo.com"
                      className="bg-neutral-800 border-neutral-700 pl-10"
                    />
                  </div>
                </div>
              ) : (
                <div className="space-y-2">
                  <label className="text-sm font-medium text-neutral-300">Contenido</label>
                  <Textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Contenido detallado del recurso (opcional)"
                    className="bg-neutral-800 border-neutral-700 min-h-[120px]"
                  />
                </div>
              )}
            </>
          ) : (
            <>
              {/* FAQ Question */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-300">Pregunta *</label>
                <Input
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="¿Cuál es tu pregunta?"
                  className="bg-neutral-800 border-neutral-700"
                  required
                />
              </div>

              {/* FAQ Answer */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-300">Respuesta *</label>
                <Textarea
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  placeholder="Proporciona una respuesta detallada"
                  className="bg-neutral-800 border-neutral-700 min-h-[120px]"
                  required
                />
              </div>
            </>
          )}

          {/* Tags */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-300">Etiquetas</label>
            <div className="flex gap-2">
              <Input
                value={currentTag}
                onChange={(e) => setCurrentTag(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Agregar etiqueta"
                className="bg-neutral-800 border-neutral-700"
              />
              <Button
                type="button"
                onClick={addTag}
                variant="outline"
                className="border-neutral-600"
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-purple-600 text-white">
                    #{tag}
                    <button
                      type="button"
                      onClick={() => removeTag(tag)}
                      className="ml-1 hover:text-red-300"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              className="flex-1 border-neutral-600"
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-purple-600 hover:bg-purple-700"
              disabled={
                contentType === 'resource' 
                  ? !title.trim() || !description.trim()
                  : !question.trim() || !answer.trim()
              }
            >
              <Plus className="w-4 h-4 mr-2" />
              Agregar {contentType === 'resource' ? 'Recurso' : 'FAQ'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}