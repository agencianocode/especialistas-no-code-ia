interface UserStats {
  userId: string;
  username: string;
  avatar: string;
  role: string;
  points: number;
  level: number;
  achievements: Achievement[];
  weeklyPoints: number;
  monthlyPoints: number;
  messagesCount: number;
  helpfulAnswers: number;
  threadsStarted: number;
  reactions: number;
}

interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: 'participation' | 'helpful' | 'expertise' | 'social' | 'milestone';
  points: number;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  unlockedAt?: Date;
  progress?: number;
  maxProgress?: number;
}

interface Badge {
  id: string;
  name: string;
  icon: string;
  color: string;
  expertise: string;
  level: number;
}

export class GamificationService {
  private static POINTS_STORAGE_KEY = 'universidad_user_stats';
  private static LEADERBOARD_STORAGE_KEY = 'universidad_leaderboard';

  // Point values for different actions
  static readonly POINTS = {
    MESSAGE_SENT: 5,
    THREAD_STARTED: 15,
    REPLY_IN_THREAD: 10,
    REACTION_RECEIVED: 2,
    HELPFUL_ANSWER: 25,
    FIRST_MESSAGE: 50,
    DAILY_PARTICIPATION: 10,
    WEEKEND_PARTICIPATION: 15,
    EXPERT_ANSWER: 40
  };

  // Level thresholds
  static readonly LEVELS = [
    { level: 1, minPoints: 0, title: 'Novato', color: '#9CA3AF' },
    { level: 2, minPoints: 100, title: 'Aprendiz', color: '#10B981' },
    { level: 3, minPoints: 250, title: 'Colaborador', color: '#3B82F6' },
    { level: 4, minPoints: 500, title: 'Contribuidor', color: '#8B5CF6' },
    { level: 5, minPoints: 1000, title: 'Experto', color: '#F59E0B' },
    { level: 6, minPoints: 2000, title: 'Mentor', color: '#EF4444' },
    { level: 7, minPoints: 5000, title: 'Leyenda', color: '#EC4899' }
  ];

  // Predefined achievements
  static readonly ACHIEVEMENTS: Achievement[] = [
    // Participation achievements
    {
      id: 'first_message',
      name: 'Primera Participación',
      description: 'Envía tu primer mensaje en la comunidad',
      icon: '💬',
      category: 'participation',
      points: 50,
      rarity: 'common',
      maxProgress: 1
    },
    {
      id: 'weekly_warrior',
      name: 'Guerrero Semanal',
      description: 'Participa todos los días de la semana',
      icon: '🔥',
      category: 'participation',
      points: 100,
      rarity: 'rare',
      maxProgress: 7
    },
    {
      id: 'night_owl',
      name: 'Búho Nocturno',
      description: 'Envía mensajes después de las 10 PM',
      icon: '🦉',
      category: 'participation',
      points: 25,
      rarity: 'common',
      maxProgress: 10
    },
    
    // Helpful achievements
    {
      id: 'helper',
      name: 'Ayudante',
      description: 'Recibe 50 reacciones positivas',
      icon: '🤝',
      category: 'helpful',
      points: 150,
      rarity: 'rare',
      maxProgress: 50
    },
    {
      id: 'problem_solver',
      name: 'Solucionador',
      description: 'Marca 25 respuestas como útiles',
      icon: '🧩',
      category: 'helpful',
      points: 200,
      rarity: 'epic',
      maxProgress: 25
    },
    
    // Expertise achievements
    {
      id: 'ai_expert',
      name: 'Experto en IA',
      description: 'Participa activamente en discusiones de IA',
      icon: '🤖',
      category: 'expertise',
      points: 300,
      rarity: 'epic',
      maxProgress: 100
    },
    {
      id: 'coding_guru',
      name: 'Gurú del Código',
      description: 'Ayuda con problemas de programación',
      icon: '👨‍💻',
      category: 'expertise',
      points: 250,
      rarity: 'epic',
      maxProgress: 50
    },
    
    // Social achievements
    {
      id: 'conversation_starter',
      name: 'Iniciador de Conversaciones',
      description: 'Inicia 10 hilos de discusión',
      icon: '💡',
      category: 'social',
      points: 100,
      rarity: 'rare',
      maxProgress: 10
    },
    {
      id: 'community_champion',
      name: 'Campeón de la Comunidad',
      description: 'Alcanza 1000 puntos totales',
      icon: '🏆',
      category: 'milestone',
      points: 500,
      rarity: 'legendary',
      maxProgress: 1000
    }
  ];

  static getUserStats(userId: string): UserStats {
    try {
      const stored = localStorage.getItem(`${this.POINTS_STORAGE_KEY}_${userId}`);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (error) {
      console.error('Error loading user stats:', error);
    }

    // Return default stats
    return {
      userId,
      username: 'Usuario',
      avatar: 'U',
      role: 'member',
      points: 0,
      level: 1,
      achievements: [],
      weeklyPoints: 0,
      monthlyPoints: 0,
      messagesCount: 0,
      helpfulAnswers: 0,
      threadsStarted: 0,
      reactions: 0
    };
  }

  static saveUserStats(stats: UserStats): void {
    try {
      localStorage.setItem(`${this.POINTS_STORAGE_KEY}_${stats.userId}`, JSON.stringify(stats));
    } catch (error) {
      console.error('Error saving user stats:', error);
    }
  }

  static addPoints(userId: string, action: keyof typeof GamificationService.POINTS, metadata?: any): UserStats {
    const stats = this.getUserStats(userId);
    const points = this.POINTS[action];
    
    stats.points += points;
    stats.weeklyPoints += points;
    stats.monthlyPoints += points;
    
    // Update action-specific counters
    switch (action) {
      case 'MESSAGE_SENT':
        stats.messagesCount++;
        break;
      case 'THREAD_STARTED':
        stats.threadsStarted++;
        break;
      case 'HELPFUL_ANSWER':
        stats.helpfulAnswers++;
        break;
      case 'REACTION_RECEIVED':
        stats.reactions++;
        break;
    }

    // Calculate new level
    const newLevel = this.calculateLevel(stats.points);
    const leveledUp = newLevel.level > stats.level;
    stats.level = newLevel.level;

    // Check for new achievements
    const newAchievements = this.checkAchievements(stats);
    stats.achievements = [...stats.achievements, ...newAchievements];

    this.saveUserStats(stats);
    
    // In real app, you'd trigger notifications for level up and achievements
    if (leveledUp) {
      console.log(`¡Subiste al nivel ${newLevel.level}: ${newLevel.title}!`);
    }
    
    if (newAchievements.length > 0) {
      console.log(`¡Nuevos logros desbloqueados!`, newAchievements);
    }

    return stats;
  }

  static calculateLevel(points: number) {
    for (let i = this.LEVELS.length - 1; i >= 0; i--) {
      if (points >= this.LEVELS[i].minPoints) {
        return this.LEVELS[i];
      }
    }
    return this.LEVELS[0];
  }

  static getNextLevel(currentLevel: number) {
    return this.LEVELS.find(level => level.level === currentLevel + 1);
  }

  static checkAchievements(stats: UserStats): Achievement[] {
    const newAchievements: Achievement[] = [];
    const unlockedIds = stats.achievements.map(a => a.id);

    for (const achievement of this.ACHIEVEMENTS) {
      if (unlockedIds.includes(achievement.id)) continue;

      let unlock = false;
      
      switch (achievement.id) {
        case 'first_message':
          unlock = stats.messagesCount >= 1;
          break;
        case 'helper':
          unlock = stats.reactions >= 50;
          break;
        case 'problem_solver':
          unlock = stats.helpfulAnswers >= 25;
          break;
        case 'conversation_starter':
          unlock = stats.threadsStarted >= 10;
          break;
        case 'community_champion':
          unlock = stats.points >= 1000;
          break;
        case 'weekly_warrior':
          unlock = stats.weeklyPoints >= 70; // 7 days * 10 points minimum
          break;
        case 'night_owl':
          unlock = stats.messagesCount >= 10; // Simplified for demo
          break;
        case 'ai_expert':
          unlock = stats.messagesCount >= 50 && stats.helpfulAnswers >= 10;
          break;
        case 'coding_guru':
          unlock = stats.helpfulAnswers >= 20;
          break;
      }

      if (unlock) {
        const unlockedAchievement = { 
          ...achievement, 
          unlockedAt: new Date(),
          progress: achievement.maxProgress 
        };
        newAchievements.push(unlockedAchievement);
      }
    }

    return newAchievements;
  }

  static getLeaderboard(period: 'weekly' | 'monthly' | 'alltime'): UserStats[] {
    // In real app, this would fetch from backend
    // For demo, generate sample leaderboard data
    const sampleUsers = [
      { userId: 'user1', username: 'Cimfin Lyle Kruger', avatar: 'CK', role: 'expert', points: 2500, weeklyPoints: 150, monthlyPoints: 800 },
      { userId: 'user2', username: 'Dr. López', avatar: 'DL', role: 'mentor', points: 1800, weeklyPoints: 120, monthlyPoints: 650 },
      { userId: 'user3', username: 'Ana García', avatar: 'AG', role: 'moderator', points: 1500, weeklyPoints: 100, monthlyPoints: 500 },
      { userId: 'user4', username: 'Carlos Ruiz', avatar: 'CR', role: 'instructor', points: 1200, weeklyPoints: 90, monthlyPoints: 450 },
      { userId: 'user5', username: 'María Founder', avatar: 'MF', role: 'founder', points: 3000, weeklyPoints: 80, monthlyPoints: 400 }
    ].map(user => ({
      ...user,
      level: this.calculateLevel(user.points).level,
      achievements: [],
      messagesCount: Math.floor(user.points / 10),
      helpfulAnswers: Math.floor(user.points / 50),
      threadsStarted: Math.floor(user.points / 100),
      reactions: Math.floor(user.points / 5)
    }));

    switch (period) {
      case 'weekly':
        return sampleUsers.sort((a, b) => b.weeklyPoints - a.weeklyPoints);
      case 'monthly':
        return sampleUsers.sort((a, b) => b.monthlyPoints - a.monthlyPoints);
      default:
        return sampleUsers.sort((a, b) => b.points - a.points);
    }
  }

  static getExpertiseBadges(stats: UserStats): Badge[] {
    const badges: Badge[] = [];
    
    // AI Expertise Badge
    if (stats.helpfulAnswers >= 10 && stats.points >= 500) {
      badges.push({
        id: 'ai_expertise',
        name: 'Experto IA',
        icon: '🤖',
        color: 'bg-purple-600',
        expertise: 'Inteligencia Artificial',
        level: Math.min(Math.floor(stats.helpfulAnswers / 10), 5)
      });
    }

    // Community Leadership Badge
    if (stats.threadsStarted >= 5 && stats.reactions >= 25) {
      badges.push({
        id: 'leadership',
        name: 'Líder Comunitario',
        icon: '👑',
        color: 'bg-yellow-600',
        expertise: 'Liderazgo',
        level: Math.min(Math.floor(stats.threadsStarted / 5), 5)
      });
    }

    // Helper Badge
    if (stats.helpfulAnswers >= 5) {
      badges.push({
        id: 'helper',
        name: 'Ayudante',
        icon: '🤝',
        color: 'bg-green-600',
        expertise: 'Colaboración',
        level: Math.min(Math.floor(stats.helpfulAnswers / 5), 5)
      });
    }

    return badges;
  }
}