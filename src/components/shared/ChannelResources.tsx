import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen,
  Search,
  Plus,
  Pin,
  TrendingUp,
  Filter,
  X,
  FileText,
  HelpCircle,
  Star,
  Eye,
  Download
} from "lucide-react";
import { useState, useEffect } from "react";
import { ResourcesService } from "@/utils/ResourcesService";
import ResourceItem from "./ResourceItem";
import AddResourceModal from "./AddResourceModal";

interface ChannelResourcesProps {
  isOpen: boolean;
  onClose: () => void;
  channelId: string;
  channelName: string;
  userRole: string;
  roleConfig: Record<string, any>;
  user: {
    name: string;
    avatar: string;
    role: string;
  };
}

export default function ChannelResources({ 
  isOpen, 
  onClose, 
  channelId, 
  channelName, 
  userRole,
  roleConfig,
  user 
}: ChannelResourcesProps) {
  const [resources, setResources] = useState(ResourcesService.getChannelResources(channelId));
  const [faqs, setFaqs] = useState(ResourcesService.getChannelFAQs(channelId));
  const [searchQuery, setSearchQuery] = useState('');
  const [showPinnedOnly, setShowPinnedOnly] = useState(false);
  const [sortBy, setSortBy] = useState<'votes' | 'date' | 'views'>('votes');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  const canModerate = ['moderator', 'expert', 'instructor', 'founder'].includes(userRole);

  useEffect(() => {
    setResources(ResourcesService.getChannelResources(channelId));
    setFaqs(ResourcesService.getChannelFAQs(channelId));
  }, [channelId]);

  const handleVote = (id: string, vote: 1 | -1, type: 'resource' | 'faq') => {
    if (type === 'resource') {
      ResourcesService.voteResource(channelId, id, vote);
      setResources(ResourcesService.getChannelResources(channelId));
    } else {
      ResourcesService.voteFAQ(channelId, id, vote);
      setFaqs(ResourcesService.getChannelFAQs(channelId));
    }
  };

  const handlePin = (id: string, type: 'resource' | 'faq') => {
    ResourcesService.togglePin(channelId, id, type);
    if (type === 'resource') {
      setResources(ResourcesService.getChannelResources(channelId));
    } else {
      setFaqs(ResourcesService.getChannelFAQs(channelId));
    }
  };

  const handleResourceAdded = (newItem: any) => {
    if (newItem.question) {
      // It's a FAQ
      setFaqs(ResourcesService.getChannelFAQs(channelId));
    } else {
      // It's a resource
      setResources(ResourcesService.getChannelResources(channelId));
    }
  };

  const filteredAndSortedItems = () => {
    let items: any[] = [];
    
    if (activeTab === 'all') {
      items = [
        ...resources.map(r => ({ ...r, itemType: 'resource' })),
        ...faqs.map(f => ({ ...f, itemType: 'faq' }))
      ];
    } else if (activeTab === 'resources') {
      items = resources.map(r => ({ ...r, itemType: 'resource' }));
    } else if (activeTab === 'faqs') {
      items = faqs.map(f => ({ ...f, itemType: 'faq' }));
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      items = items.filter(item => {
        const title = item.itemType === 'resource' ? item.title : item.question;
        const description = item.itemType === 'resource' ? item.description : item.answer;
        return title.toLowerCase().includes(query) ||
               description.toLowerCase().includes(query) ||
               item.tags?.some((tag: string) => tag.toLowerCase().includes(query));
      });
    }

    // Filter by pinned
    if (showPinnedOnly) {
      items = items.filter(item => item.isPinned);
    }

    // Sort
    items.sort((a, b) => {
      if (a.isPinned && !b.isPinned) return -1;
      if (!a.isPinned && b.isPinned) return 1;
      
      switch (sortBy) {
        case 'votes':
          return b.votes - a.votes;
        case 'date':
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        case 'views':
          return (b.views || 0) - (a.views || 0);
        default:
          return 0;
      }
    });

    return items;
  };

  const getStats = () => {
    const pinnedResources = resources.filter(r => r.isPinned).length;
    const pinnedFaqs = faqs.filter(f => f.isPinned).length;
    const totalViews = resources.reduce((sum, r) => sum + (r.views || 0), 0);
    const totalDownloads = resources.reduce((sum, r) => sum + (r.downloads || 0), 0);
    
    return { pinnedResources, pinnedFaqs, totalViews, totalDownloads };
  };

  const stats = getStats();
  const filteredItems = filteredAndSortedItems();

  return (
    <>
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-6xl max-h-[90vh] bg-neutral-900 text-white border-neutral-700">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-purple-400" />
              Recursos del Canal: #{channelName}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6">
            {/* Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-neutral-800 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-purple-400">{resources.length}</div>
                <div className="text-xs text-neutral-400">Recursos</div>
              </div>
              <div className="bg-neutral-800 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-blue-400">{faqs.length}</div>
                <div className="text-xs text-neutral-400">FAQs</div>
              </div>
              <div className="bg-neutral-800 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-green-400">{stats.totalViews}</div>
                <div className="text-xs text-neutral-400">Vistas</div>
              </div>
              <div className="bg-neutral-800 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-yellow-400">{stats.pinnedResources + stats.pinnedFaqs}</div>
                <div className="text-xs text-neutral-400">Fijados</div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Buscar recursos, FAQs, etiquetas..."
                  className="pl-10 bg-neutral-800 border-neutral-700"
                />
              </div>
              
              <div className="flex gap-2">
                <Button
                  variant={showPinnedOnly ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setShowPinnedOnly(!showPinnedOnly)}
                  className="bg-neutral-700 border-neutral-600"
                >
                  <Pin className="w-4 h-4 mr-1" />
                  Fijados
                </Button>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSortBy(sortBy === 'votes' ? 'date' : sortBy === 'date' ? 'views' : 'votes')}
                  className="bg-neutral-700 border-neutral-600"
                >
                  <TrendingUp className="w-4 h-4 mr-1" />
                  {sortBy === 'votes' ? 'Votos' : sortBy === 'date' ? 'Fecha' : 'Vistas'}
                </Button>
                
                <Button
                  onClick={() => setIsAddModalOpen(true)}
                  size="sm"
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  <Plus className="w-4 h-4 mr-1" />
                  Agregar
                </Button>
              </div>
            </div>

            {/* Content Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3 bg-neutral-800">
                <TabsTrigger value="all" className="data-[state=active]:bg-neutral-700">
                  <FileText className="w-4 h-4 mr-2" />
                  Todo ({resources.length + faqs.length})
                </TabsTrigger>
                <TabsTrigger value="resources" className="data-[state=active]:bg-neutral-700">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Recursos ({resources.length})
                </TabsTrigger>
                <TabsTrigger value="faqs" className="data-[state=active]:bg-neutral-700">
                  <HelpCircle className="w-4 h-4 mr-2" />
                  FAQs ({faqs.length})
                </TabsTrigger>
              </TabsList>

              <TabsContent value={activeTab} className="mt-6">
                <ScrollArea className="h-[500px] pr-4">
                  {filteredItems.length > 0 ? (
                    <div className="space-y-4">
                      {filteredItems.map((item) => (
                        <ResourceItem
                          key={`${item.itemType}-${item.id}`}
                          item={item}
                          type={item.itemType}
                          onVote={(id, vote) => handleVote(id, vote, item.itemType)}
                          onPin={canModerate ? (id) => handlePin(id, item.itemType) : undefined}
                          canModerate={canModerate}
                          roleConfig={roleConfig}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <BookOpen className="w-12 h-12 text-neutral-600 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-neutral-400 mb-2">
                        {searchQuery.trim() 
                          ? 'No se encontraron resultados' 
                          : `No hay ${activeTab === 'faqs' ? 'FAQs' : activeTab === 'resources' ? 'recursos' : 'contenido'} aún`
                        }
                      </h3>
                      <p className="text-neutral-500 text-sm mb-4">
                        {searchQuery.trim() 
                          ? 'Intenta con otros términos de búsqueda' 
                          : 'Sé el primero en contribuir al canal'
                        }
                      </p>
                      {!searchQuery.trim() && (
                        <Button
                          onClick={() => setIsAddModalOpen(true)}
                          className="bg-purple-600 hover:bg-purple-700"
                        >
                          <Plus className="w-4 h-4 mr-2" />
                          Agregar {activeTab === 'faqs' ? 'FAQ' : 'Recurso'}
                        </Button>
                      )}
                    </div>
                  )}
                </ScrollArea>
              </TabsContent>
            </Tabs>
          </div>
        </DialogContent>
      </Dialog>

      <AddResourceModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        channelId={channelId}
        onResourceAdded={handleResourceAdded}
        user={user}
      />
    </>
  );
}