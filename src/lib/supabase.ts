import { createClient } from '@supabase/supabase-js'

// Configuración temporal para desarrollo
// IMPORTANTE: Reemplaza estas credenciales con las de tu proyecto Supabase
const supabaseUrl = 'https://wbzknkfjfeqvlqobliue.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indiemtua2ZqZmVxdmxxb2JsaXVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ2NzAxNjksImV4cCI6MjA3MDI0NjE2OX0.v_LFctnCSTJtJ6HaZnTdJCet8UoLEILNYR1jnulViXE'

console.log('🔧 Supabase Config:', { supabaseUrl, supabaseAnonKey: supabaseAnonKey.substring(0, 20) + '...' })

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Tipos para TypeScript
export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          full_name: string | null
          avatar_url: string | null
          created_at: string
          updated_at: string
          level: number
          experience: number
          badges: string[]
        }
        Insert: {
          id?: string
          email: string
          full_name?: string | null
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
          level?: number
          experience?: number
          badges?: string[]
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
          level?: number
          experience?: number
          badges?: string[]
        }
      }
      courses: {
        Row: {
          id: string
          title: string
          description: string
          image_url: string
          duration: number
          difficulty: 'beginner' | 'intermediate' | 'advanced'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          image_url: string
          duration: number
          difficulty: 'beginner' | 'intermediate' | 'advanced'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          image_url?: string
          duration?: number
          difficulty?: 'beginner' | 'intermediate' | 'advanced'
          created_at?: string
          updated_at?: string
        }
      }
      lessons: {
        Row: {
          id: string
          course_id: string
          title: string
          description: string
          video_url: string | null
          content: string
          lesson_order: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          course_id: string
          title: string
          description: string
          video_url?: string | null
          content: string
          lesson_order: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          course_id?: string
          title?: string
          description?: string
          video_url?: string | null
          content?: string
          lesson_order?: number
          created_at?: string
          updated_at?: string
        }
      }
      messages: {
        Row: {
          id: string
          channel_id: string
          user_id: string
          content: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          channel_id: string
          user_id: string
          content: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          channel_id?: string
          user_id?: string
          content?: string
          created_at?: string
          updated_at?: string
        }
      }
      channels: {
        Row: {
          id: string
          name: string
          description: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string
          created_at?: string
          updated_at?: string
        }
      }
      articles: {
        Row: {
          id: string
          title: string
          content: string
          excerpt: string
          image_url: string
          author_id: string
          tags: string[]
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          content: string
          excerpt: string
          image_url: string
          author_id: string
          tags?: string[]
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          content?: string
          excerpt?: string
          image_url?: string
          author_id?: string
          tags?: string[]
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}
