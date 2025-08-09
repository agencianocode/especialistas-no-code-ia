import { supabase } from '@/lib/supabase'

export class GamificationService {
  // Constantes de logros y badges
  static ACHIEVEMENTS = {
    FIRST_LOGIN: 'first_login',
    FIRST_COURSE: 'first_course',
    COURSE_COMPLETION: 'course_completion',
    STREAK_7: 'streak_7',
    COMMUNITY_CONTRIBUTOR: 'community_contributor'
  }

  // Obtener estadísticas del usuario
  static async getUserStats(userId: string) {
    const { data, error } = await supabase
      .from('users')
      .select('level, experience, badges')
      .eq('id', userId)
      .single()

    return { data, error }
  }

  // Obtener progreso del usuario
  static async getUserProgress(userId: string) {
    const { data, error } = await supabase
      .from('users')
      .select('level, experience, badges')
      .eq('id', userId)
      .single()

    return { data, error }
  }

  // Calcular nivel basado en experiencia
  static calculateLevel(experience: number): number {
    return Math.floor(experience / 1000) + 1
  }

  // Obtener experiencia necesaria para el siguiente nivel
  static getNextLevel(currentLevel: number): number {
    return currentLevel * 1000
  }

  // Obtener badges de experiencia
  static getExpertiseBadges(level: number): string[] {
    const badges = []
    if (level >= 5) badges.push('Aprendiz')
    if (level >= 10) badges.push('Experto')
    if (level >= 20) badges.push('Maestro')
    return badges
  }

  // Añadir experiencia
  static async addExperience(userId: string, amount: number) {
    const { data: currentUser } = await supabase
      .from('users')
      .select('level, experience')
      .eq('id', userId)
      .single()

    if (!currentUser) return { error: 'Usuario no encontrado' }

    let newExperience = currentUser.experience + amount
    let newLevel = currentUser.level

    // Calcular si sube de nivel (cada 1000 XP)
    const experienceForNextLevel = newLevel * 1000
    if (newExperience >= experienceForNextLevel) {
      newLevel += 1
      newExperience = newExperience - experienceForNextLevel
    }

    const { error } = await supabase
      .from('users')
      .update({
        level: newLevel,
        experience: newExperience,
      })
      .eq('id', userId)

    return { error, newLevel, newExperience }
  }

  // Añadir badge
  static async addBadge(userId: string, badgeId: string) {
    const { data: currentUser } = await supabase
      .from('users')
      .select('badges')
      .eq('id', userId)
      .single()

    if (!currentUser) return { error: 'Usuario no encontrado' }

    const currentBadges = currentUser.badges || []
    if (!currentBadges.includes(badgeId)) {
      const { error } = await supabase
        .from('users')
        .update({
          badges: [...currentBadges, badgeId],
        })
        .eq('id', userId)

      return { error }
    }

    return { error: null }
  }

  // Obtener leaderboard
  static async getLeaderboard() {
    const { data, error } = await supabase
      .from('users')
      .select('id, full_name, level, experience, avatar_url')
      .order('level', { ascending: false })
      .order('experience', { ascending: false })
      .limit(10)

    return { data, error }
  }
}