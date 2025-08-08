import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { 
  Search, 
  Filter, 
  Calendar as CalendarIcon, 
  User, 
  Hash, 
  Clock,
  Sparkles,
  History,
  X,
  ArrowRight,
  TrendingUp,
  MessageSquare
} from "lucide-react";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import { SearchService } from "@/utils/SearchService";
import SearchResults from "./SearchResults";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  messages: any[];
  channels: any[];
  users: string[];
}

export default function SearchModal({ isOpen, onClose, messages, channels, users }: SearchModalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUser, setSelectedUser] = useState<string>('');
  const [selectedChannel, setSelectedChannel] = useState<string>('all');
  const [contentType, setContentType] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('relevance');
  const [dateFrom, setDateFrom] = useState<Date | undefined>();
  const [dateTo, setDateTo] = useState<Date | undefined>();
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const [showHistory, setShowHistory] = useState(false);

  useEffect(() => {
    setSearchHistory(SearchService.getSearchHistory());
  }, []);

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;
    
    setIsSearching(true);
    try {
      const query = {
        query: searchQuery,
        userId: selectedUser || undefined,
        channelId: selectedChannel !== 'all' ? selectedChannel : undefined,
        dateFrom: dateFrom ? format(dateFrom, 'yyyy-MM-dd') : undefined,
        dateTo: dateTo ? format(dateTo, 'yyyy-MM-dd') : undefined,
        contentType: contentType as any,
        sortBy: sortBy as any
      };

      const results = await SearchService.searchMessages(query, messages);
      setSearchResults(results);
      
      // Save to search history
      SearchService.saveSearchQuery(searchQuery);
      setSearchHistory(SearchService.getSearchHistory());
      setShowHistory(false);
    } catch (error) {
      console.error('Search error:', error);
    } finally {
      setIsSearching(false);
    }
  };

  const handleHistoryClick = (historyQuery: string) => {
    setSearchQuery(historyQuery);
    setShowHistory(false);
  };

  const clearFilters = () => {
    setSelectedUser('');
    setSelectedChannel('all');
    setContentType('all');
    setSortBy('relevance');
    setDateFrom(undefined);
    setDateTo(undefined);
  };

  const activeFiltersCount = [
    selectedUser,
    selectedChannel !== 'all' ? selectedChannel : '',
    contentType !== 'all' ? contentType : '',
    dateFrom,
    dateTo
  ].filter(Boolean).length;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] bg-neutral-900 text-white border-neutral-700">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-400" />
            Búsqueda Inteligente
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <Input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              onFocus={() => setShowHistory(true)}
              placeholder="Buscar mensajes, usuarios, temas..."
              className="pl-10 pr-20 bg-neutral-800 border-neutral-700 text-white"
            />
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex gap-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowHistory(!showHistory)}
                className="text-neutral-400 hover:text-white p-1"
              >
                <History className="w-4 h-4" />
              </Button>
              <Button
                onClick={handleSearch}
                disabled={isSearching || !searchQuery.trim()}
                size="sm"
                className="bg-purple-600 hover:bg-purple-700 text-white"
              >
                {isSearching ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <ArrowRight className="w-4 h-4" />
                )}
              </Button>
            </div>

            {/* Search History Dropdown */}
            {showHistory && searchHistory.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-neutral-800 border border-neutral-700 rounded-lg shadow-lg z-[70] max-h-48 overflow-y-auto">
                <div className="p-2 border-b border-neutral-700">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-neutral-400 font-medium">BÚSQUEDAS RECIENTES</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        SearchService.clearSearchHistory();
                        setSearchHistory([]);
                        setShowHistory(false);
                      }}
                      className="text-neutral-400 hover:text-white p-1 h-auto"
                    >
                      <X className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
                {searchHistory.map((query, index) => (
                  <button
                    key={index}
                    onClick={() => handleHistoryClick(query)}
                    className="w-full text-left px-3 py-2 hover:bg-neutral-700 transition-colors flex items-center gap-2"
                  >
                    <Clock className="w-3 h-3 text-neutral-400" />
                    <span className="text-sm">{query}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Advanced Filters */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Button
                variant="ghost"
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="text-neutral-400 hover:text-white p-0 h-auto"
              >
                <Filter className="w-4 h-4 mr-2" />
                Filtros avanzados
                {activeFiltersCount > 0 && (
                  <Badge variant="secondary" className="ml-2 bg-purple-600 text-white">
                    {activeFiltersCount}
                  </Badge>
                )}
              </Button>
              {activeFiltersCount > 0 && (
                <Button
                  variant="ghost"
                  onClick={clearFilters}
                  className="text-neutral-400 hover:text-white text-xs p-1 h-auto"
                >
                  Limpiar filtros
                </Button>
              )}
            </div>

            {showAdvanced && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-neutral-800/50 rounded-lg border border-neutral-700">
                {/* User Filter */}
                <div className="space-y-2">
                  <label className="text-xs font-medium text-neutral-400">USUARIO</label>
                  <Select value={selectedUser} onValueChange={setSelectedUser}>
                    <SelectTrigger className="bg-neutral-800 border-neutral-700">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4" />
                        <SelectValue placeholder="Todos los usuarios" />
                      </div>
                    </SelectTrigger>
                    <SelectContent className="bg-neutral-800 border-neutral-700">
                      <SelectItem value="">Todos los usuarios</SelectItem>
                      {users.map(user => (
                        <SelectItem key={user} value={user}>{user}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Channel Filter */}
                <div className="space-y-2">
                  <label className="text-xs font-medium text-neutral-400">CANAL</label>
                  <Select value={selectedChannel} onValueChange={setSelectedChannel}>
                    <SelectTrigger className="bg-neutral-800 border-neutral-700">
                      <div className="flex items-center gap-2">
                        <Hash className="w-4 h-4" />
                        <SelectValue />
                      </div>
                    </SelectTrigger>
                    <SelectContent className="bg-neutral-800 border-neutral-700">
                      <SelectItem value="all">Todos los canales</SelectItem>
                      {channels.map(channel => (
                        <SelectItem key={channel.id} value={channel.id}>
                          {channel.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Content Type Filter */}
                <div className="space-y-2">
                  <label className="text-xs font-medium text-neutral-400">TIPO DE CONTENIDO</label>
                  <Select value={contentType} onValueChange={setContentType}>
                    <SelectTrigger className="bg-neutral-800 border-neutral-700">
                      <div className="flex items-center gap-2">
                        <MessageSquare className="w-4 h-4" />
                        <SelectValue />
                      </div>
                    </SelectTrigger>
                    <SelectContent className="bg-neutral-800 border-neutral-700">
                      <SelectItem value="all">Todo el contenido</SelectItem>
                      <SelectItem value="messages">Solo mensajes</SelectItem>
                      <SelectItem value="threads">Solo hilos</SelectItem>
                      <SelectItem value="users">Solo usuarios</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Sort By */}
                <div className="space-y-2">
                  <label className="text-xs font-medium text-neutral-400">ORDENAR POR</label>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="bg-neutral-800 border-neutral-700">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        <SelectValue />
                      </div>
                    </SelectTrigger>
                    <SelectContent className="bg-neutral-800 border-neutral-700">
                      <SelectItem value="relevance">Relevancia</SelectItem>
                      <SelectItem value="date">Fecha</SelectItem>
                      <SelectItem value="user">Usuario</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Date Range */}
                <div className="space-y-2 md:col-span-2">
                  <label className="text-xs font-medium text-neutral-400">RANGO DE FECHAS</label>
                  <div className="flex gap-2">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="flex-1 justify-start bg-neutral-800 border-neutral-700 hover:bg-neutral-700">
                          <CalendarIcon className="w-4 h-4 mr-2" />
                          {dateFrom ? format(dateFrom, "dd/MM/yyyy") : "Desde"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 bg-neutral-800 border-neutral-700">
                        <Calendar
                          mode="single"
                          selected={dateFrom}
                          onSelect={setDateFrom}
                          className="bg-neutral-800 text-white"
                        />
                      </PopoverContent>
                    </Popover>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="flex-1 justify-start bg-neutral-800 border-neutral-700 hover:bg-neutral-700">
                          <CalendarIcon className="w-4 h-4 mr-2" />
                          {dateTo ? format(dateTo, "dd/MM/yyyy") : "Hasta"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0 bg-neutral-800 border-neutral-700">
                        <Calendar
                          mode="single"
                          selected={dateTo}
                          onSelect={setDateTo}
                          className="bg-neutral-800 text-white"
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Search Results */}
          {searchResults.length > 0 && (
            <SearchResults 
              results={searchResults} 
              query={searchQuery}
              onClose={onClose}
            />
          )}

          {isSearching && (
            <div className="text-center py-8">
              <div className="w-8 h-8 border-2 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto mb-2" />
              <p className="text-neutral-400">Buscando con IA...</p>
            </div>
          )}

          {searchQuery && searchResults.length === 0 && !isSearching && (
            <div className="text-center py-8">
              <Search className="w-12 h-12 text-neutral-600 mx-auto mb-2" />
              <p className="text-neutral-400">No se encontraron resultados</p>
              <p className="text-neutral-500 text-sm">Intenta con otros términos de búsqueda</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}