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

interface SearchQuery {
  query: string;
  userId?: string;
  channelId?: string;
  dateFrom?: string;
  dateTo?: string;
  contentType?: 'all' | 'messages' | 'threads' | 'users';
  sortBy?: 'relevance' | 'date' | 'user';
}

export class SearchService {
  private static SEARCH_HISTORY_KEY = 'universidad_search_history';
  private static MAX_HISTORY_ITEMS = 10;

  // Simulate AI semantic search - in real app, this would use embeddings/vector search
  static async performSemanticSearch(query: string, messages: any[]): Promise<SearchResult[]> {
    const searchTerms = query.toLowerCase().split(' ');
    
    return messages
      .map(message => {
        let relevanceScore = 0;
        const content = message.content.toLowerCase();
        
        // Simple keyword matching (in real app, use embeddings)
        searchTerms.forEach(term => {
          if (content.includes(term)) {
            relevanceScore += 1;
          }
          // Boost exact matches
          if (content.includes(query.toLowerCase())) {
            relevanceScore += 2;
          }
        });

        // Boost based on user role
        if (message.user.role === 'expert' || message.user.role === 'instructor') {
          relevanceScore += 0.5;
        }

        return {
          id: message.id,
          type: 'message' as const,
          content: message.content,
          user: message.user,
          channel: 'general', // In real app, get from message
          timestamp: message.timestamp,
          date: message.date,
          relevanceScore,
          context: this.extractContext(message.content, query)
        };
      })
      .filter(result => result.relevanceScore > 0)
      .sort((a, b) => (b.relevanceScore || 0) - (a.relevanceScore || 0));
  }

  static extractContext(content: string, query: string): string {
    const queryLower = query.toLowerCase();
    const contentLower = content.toLowerCase();
    const index = contentLower.indexOf(queryLower);
    
    if (index === -1) return content.substring(0, 100) + '...';
    
    const start = Math.max(0, index - 50);
    const end = Math.min(content.length, index + queryLower.length + 50);
    
    return (start > 0 ? '...' : '') + 
           content.substring(start, end) + 
           (end < content.length ? '...' : '');
  }

  static async searchMessages(searchQuery: SearchQuery, messages: any[]): Promise<SearchResult[]> {
    let filteredMessages = [...messages];

    // Filter by channel
    if (searchQuery.channelId && searchQuery.channelId !== 'all') {
      // In real app, filter by actual channel
    }

    // Filter by user
    if (searchQuery.userId) {
      filteredMessages = filteredMessages.filter(msg => 
        msg.user.name.toLowerCase().includes(searchQuery.userId!.toLowerCase())
      );
    }

    // Filter by date range
    if (searchQuery.dateFrom || searchQuery.dateTo) {
      filteredMessages = filteredMessages.filter(msg => {
        const msgDate = new Date(msg.date);
        const fromDate = searchQuery.dateFrom ? new Date(searchQuery.dateFrom) : new Date('1900-01-01');
        const toDate = searchQuery.dateTo ? new Date(searchQuery.dateTo) : new Date();
        return msgDate >= fromDate && msgDate <= toDate;
      });
    }

    // Perform semantic search
    const results = await this.performSemanticSearch(searchQuery.query, filteredMessages);

    // Sort results
    if (searchQuery.sortBy === 'date') {
      results.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } else if (searchQuery.sortBy === 'user') {
      results.sort((a, b) => a.user.name.localeCompare(b.user.name));
    }

    return results;
  }

  static saveSearchQuery(query: string): void {
    const history = this.getSearchHistory();
    const updatedHistory = [
      query,
      ...history.filter(h => h !== query)
    ].slice(0, this.MAX_HISTORY_ITEMS);
    
    localStorage.setItem(this.SEARCH_HISTORY_KEY, JSON.stringify(updatedHistory));
  }

  static getSearchHistory(): string[] {
    try {
      const history = localStorage.getItem(this.SEARCH_HISTORY_KEY);
      return history ? JSON.parse(history) : [];
    } catch {
      return [];
    }
  }

  static clearSearchHistory(): void {
    localStorage.removeItem(this.SEARCH_HISTORY_KEY);
  }
}