import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Trophy,
  Star,
  Award,
  TrendingUp,
  Calendar,
  Target,
  Zap,
  Crown,
  Gift,
  Medal
} from "lucide-react";
import { useState, useEffect } from "react";
import { GamificationService } from "@/utils/GamificationService";

interface GamificationPanelProps {
  userId: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function GamificationPanel({ userId, isOpen, onClose }: GamificationPanelProps) {
  const [userStats, setUserStats] = useState<any>(null);
  const [leaderboardPeriod, setLeaderboardPeriod] = useState<'weekly' | 'monthly' | 'alltime'>('weekly');
  const [leaderboard, setLeaderboard] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const stats = await GamificationService.getUserStats(userId);
      setUserStats(stats.data);
      
      const leaderboardData = await GamificationService.getLeaderboard();
      setLeaderboard(leaderboardData.data || []);
    };
    fetchData();
  }, [userId, leaderboardPeriod]);

  const currentLevel = userStats ? GamificationService.calculateLevel(userStats.experience) : 1;
  const nextLevel = GamificationService.getNextLevel(currentLevel);
  const progressToNext = userStats 
    ? ((userStats.experience % 1000) / 1000) * 100
    : 0;

  const expertiseBadges = userStats ? GamificationService.getExpertiseBadges(userStats.level) : [];
  const recentAchievements = userStats?.achievements?.slice(-3) || [];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'border-gray-400 bg-gray-50';
      case 'rare': return 'border-blue-400 bg-blue-50';
      case 'epic': return 'border-purple-400 bg-purple-50';
      case 'legendary': return 'border-yellow-400 bg-yellow-50';
      default: return 'border-gray-400 bg-gray-50';
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[60] p-4">
      <div className="bg-neutral-900 rounded-lg border border-neutral-700 w-full max-w-4xl max-h-[90vh] overflow-hidden">
        <div className="p-6 border-b border-neutral-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Centro de Logros</h2>
                <p className="text-neutral-400 text-sm">Tu progreso en la comunidad</p>
              </div>
            </div>
            <Button variant="ghost" onClick={onClose} className="text-neutral-400 hover:text-white">
              ✕
            </Button>
          </div>
        </div>

        <div className="p-6">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-neutral-800">
              <TabsTrigger value="overview" className="data-[state=active]:bg-neutral-700">Resumen</TabsTrigger>
              <TabsTrigger value="achievements" className="data-[state=active]:bg-neutral-700">Logros</TabsTrigger>
              <TabsTrigger value="leaderboard" className="data-[state=active]:bg-neutral-700">Ranking</TabsTrigger>
              <TabsTrigger value="badges" className="data-[state=active]:bg-neutral-700">Insignias</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6 mt-6">
              {/* User Level & Progress */}
              <Card className="bg-neutral-800 border-neutral-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <Star className="w-5 h-5 text-purple-400" />
                    Nivel {currentLevel}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-neutral-400">
                      <span>{userStats?.experience || 0} XP</span>
                      <span>Próximo nivel: {nextLevel} XP</span>
                    </div>
                    <Progress value={progressToNext} className="h-3" />
                    <p className="text-xs text-neutral-500">
                      Te faltan {nextLevel - (userStats?.experience || 0)} XP para el siguiente nivel
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Card className="bg-neutral-800 border-neutral-700">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-purple-400">{userStats?.experience || 0}</div>
                    <div className="text-xs text-neutral-400">Experiencia Total</div>
                  </CardContent>
                </Card>
                <Card className="bg-neutral-800 border-neutral-700">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-green-400">{userStats?.level || 1}</div>
                    <div className="text-xs text-neutral-400">Nivel Actual</div>
                  </CardContent>
                </Card>
                <Card className="bg-neutral-800 border-neutral-700">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-blue-400">{userStats?.badges?.length || 0}</div>
                    <div className="text-xs text-neutral-400">Insignias</div>
                  </CardContent>
                </Card>
                <Card className="bg-neutral-800 border-neutral-700">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-yellow-400">0</div>
                    <div className="text-xs text-neutral-400">Logros</div>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Achievements */}
              {recentAchievements.length > 0 && (
                <Card className="bg-neutral-800 border-neutral-700">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-white">
                      <Award className="w-5 h-5 text-yellow-400" />
                      Logros Recientes
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {recentAchievements.map((achievement) => (
                        <div key={achievement.id} className="flex items-center gap-3 p-3 bg-neutral-700 rounded-lg">
                          <div className="text-2xl">{achievement.icon}</div>
                          <div className="flex-1">
                            <div className="font-medium text-white">{achievement.name}</div>
                            <div className="text-sm text-neutral-400">{achievement.description}</div>
                          </div>
                          <Badge variant="secondary" className="bg-yellow-600 text-white">
                            +{achievement.points}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="achievements" className="mt-6">
              <ScrollArea className="h-[500px] pr-4">
                <div className="grid gap-4">
                  {Object.entries(GamificationService.ACHIEVEMENTS).map(([key, achievementId]) => {
                    const isUnlocked = userStats?.achievements?.some((a: any) => a.id === achievementId) || false;
                    const userAchievement = userStats?.achievements?.find((a: any) => a.id === achievementId);
                    
                    const achievement = {
                      id: achievementId,
                      name: key.replace(/_/g, ' ').toLowerCase(),
                      description: `Logro: ${key}`,
                      icon: '🏆',
                      rarity: 'common',
                      points: 100
                    };
                    
                    return (
                      <Card key={achievementId} className={`bg-neutral-800 border-2 ${getRarityColor(achievement.rarity)} ${!isUnlocked ? 'opacity-60' : ''}`}>
                        <CardContent className="p-4">
                          <div className="flex items-center gap-4">
                            <div className="text-3xl">{achievement.icon}</div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <h3 className="font-semibold text-white capitalize">{achievement.name}</h3>
                                {isUnlocked && <Medal className="w-4 h-4 text-yellow-400" />}
                                <Badge variant="outline" className={`text-xs capitalize ${getRarityColor(achievement.rarity)}`}>
                                  {achievement.rarity}
                                </Badge>
                              </div>
                              <p className="text-sm text-neutral-400 mt-1">{achievement.description}</p>
                            </div>
                            <div className="text-right">
                              <div className="text-lg font-bold text-purple-400">+{achievement.points}</div>
                              {isUnlocked && userAchievement?.unlockedAt && (
                                <div className="text-xs text-neutral-500">
                                  {new Date(userAchievement.unlockedAt).toLocaleDateString()}
                                </div>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </ScrollArea>
            </TabsContent>

            <TabsContent value="leaderboard" className="mt-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Button
                    variant={leaderboardPeriod === 'weekly' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setLeaderboardPeriod('weekly')}
                    className="bg-neutral-700 border-neutral-600"
                  >
                    <Calendar className="w-4 h-4 mr-1" />
                    Semanal
                  </Button>
                  <Button
                    variant={leaderboardPeriod === 'monthly' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setLeaderboardPeriod('monthly')}
                    className="bg-neutral-700 border-neutral-600"
                  >
                    <Calendar className="w-4 h-4 mr-1" />
                    Mensual
                  </Button>
                  <Button
                    variant={leaderboardPeriod === 'alltime' ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setLeaderboardPeriod('alltime')}
                    className="bg-neutral-700 border-neutral-600"
                  >
                    <TrendingUp className="w-4 h-4 mr-1" />
                    Total
                  </Button>
                </div>

                <ScrollArea className="h-[400px] pr-4">
                  <div className="space-y-2">
                    {leaderboard.map((user, index) => {
                      const isCurrentUser = user.userId === userId;
                      const points = leaderboardPeriod === 'weekly' ? user.weeklyPoints : 
                                   leaderboardPeriod === 'monthly' ? user.monthlyPoints : 
                                   user.points;
                      
                      return (
                        <Card key={user.userId} className={`bg-neutral-800 border-neutral-700 ${isCurrentUser ? 'ring-2 ring-purple-500' : ''}`}>
                          <CardContent className="p-4">
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-neutral-600 flex items-center justify-center text-sm font-bold">
                                  {index + 1}
                                </div>
                                {index < 3 && (
                                  <div className="text-xl">
                                    {index === 0 ? '🥇' : index === 1 ? '🥈' : '🥉'}
                                  </div>
                                )}
                              </div>
                              
                              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                                {user.avatar}
                              </div>
                              
                              <div className="flex-1">
                                <div className="flex items-center gap-2">
                                  <span className="font-medium text-white">{user.username}</span>
                                  {user.role === 'expert' && <Crown className="w-4 h-4 text-purple-400" />}
                                </div>
                                <div className="text-sm text-neutral-400">Nivel {user.level}</div>
                              </div>
                              
                              <div className="text-right">
                                <div className="text-lg font-bold text-purple-400">{points}</div>
                                <div className="text-xs text-neutral-500">puntos</div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="badges" className="mt-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Insignias de Experiencia
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {expertiseBadges.map((badge, index) => (
                      <Card key={index} className="bg-neutral-800 border-neutral-700">
                        <CardContent className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-xl">
                              🏆
                            </div>
                            <div className="flex-1">
                              <div className="font-semibold text-white">{badge}</div>
                              <div className="text-sm text-neutral-400">Insignia de experiencia</div>
                              <div className="flex items-center gap-1 mt-2">
                                {[...Array(5)].map((_, i) => (
                                  <Star 
                                    key={i} 
                                    className="w-3 h-3 text-yellow-400 fill-current" 
                                  />
                                ))}
                                <span className="text-xs text-neutral-500 ml-1">Nivel 5</span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {expertiseBadges.length === 0 && (
                  <div className="text-center py-8">
                    <Gift className="w-12 h-12 text-neutral-600 mx-auto mb-2" />
                    <p className="text-neutral-400">Participa más para desbloquear insignias de experiencia</p>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}