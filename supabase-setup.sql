-- Configuración de Supabase para The Rundown
-- Ejecuta este script en el SQL Editor de Supabase

-- Habilitar extensiones necesarias
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Función para actualizar updated_at automáticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Crear tabla de usuarios
CREATE TABLE users (
  id UUID REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  email TEXT NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  level INTEGER DEFAULT 1,
  experience INTEGER DEFAULT 0,
  badges TEXT[] DEFAULT '{}'
);

-- Crear tabla de cursos
CREATE TABLE courses (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT NOT NULL,
  duration INTEGER NOT NULL,
  difficulty TEXT CHECK (difficulty IN ('beginner', 'intermediate', 'advanced')) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Crear tabla de lecciones
CREATE TABLE lessons (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  video_url TEXT,
  content TEXT NOT NULL,
  lesson_order INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Crear tabla de canales
CREATE TABLE channels (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Crear tabla de mensajes
CREATE TABLE messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  channel_id UUID REFERENCES channels(id) ON DELETE CASCADE,
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Crear tabla de artículos
CREATE TABLE articles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  image_url TEXT NOT NULL,
  author_id UUID REFERENCES users(id) ON DELETE CASCADE,
  tags TEXT[] DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Habilitar Row Level Security (RLS)
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE channels ENABLE ROW LEVEL SECURITY;
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;

-- Políticas para la tabla users
CREATE POLICY "Users can view their own profile" ON users
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON users
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile" ON users
  FOR INSERT WITH CHECK (auth.uid() = id);

-- Trigger para crear automáticamente el perfil de usuario
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.users (id, email, full_name)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name', split_part(NEW.email, '@', 1))
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Crear el trigger
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Políticas para la tabla courses
CREATE POLICY "Anyone can view courses" ON courses
  FOR SELECT USING (true);

CREATE POLICY "Authenticated users can create courses" ON courses
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update courses" ON courses
  FOR UPDATE USING (auth.role() = 'authenticated');

-- Políticas para la tabla lessons
CREATE POLICY "Anyone can view lessons" ON lessons
  FOR SELECT USING (true);

CREATE POLICY "Authenticated users can create lessons" ON lessons
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update lessons" ON lessons
  FOR UPDATE USING (auth.role() = 'authenticated');

-- Políticas para la tabla channels
CREATE POLICY "Anyone can view channels" ON channels
  FOR SELECT USING (true);

CREATE POLICY "Authenticated users can create channels" ON channels
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update channels" ON channels
  FOR UPDATE USING (auth.role() = 'authenticated');

-- Políticas para la tabla messages
CREATE POLICY "Anyone can view messages" ON messages
  FOR SELECT USING (true);

CREATE POLICY "Authenticated users can create messages" ON messages
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own messages" ON messages
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own messages" ON messages
  FOR DELETE USING (auth.uid() = user_id);

-- Políticas para la tabla articles
CREATE POLICY "Anyone can view articles" ON articles
  FOR SELECT USING (true);

CREATE POLICY "Authenticated users can create articles" ON articles
  FOR INSERT WITH CHECK (auth.uid() = author_id);

CREATE POLICY "Users can update their own articles" ON articles
  FOR UPDATE USING (auth.uid() = author_id);

CREATE POLICY "Users can delete their own articles" ON articles
  FOR DELETE USING (auth.uid() = author_id);

-- Crear triggers para updated_at
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_courses_updated_at BEFORE UPDATE ON courses FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_lessons_updated_at BEFORE UPDATE ON lessons FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_channels_updated_at BEFORE UPDATE ON channels FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_messages_updated_at BEFORE UPDATE ON messages FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_articles_updated_at BEFORE UPDATE ON articles FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Insertar datos de ejemplo
INSERT INTO courses (title, description, image_url, duration, difficulty) VALUES
('Fundamentos de IA', 'Aprende los conceptos básicos de inteligencia artificial', 'https://images.unsplash.com/photo-1677442136019-21780ecad995', 120, 'beginner'),
('Machine Learning Avanzado', 'Técnicas avanzadas de machine learning', 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb', 180, 'advanced'),
('Prompting Efectivo', 'Domina el arte del prompting para obtener mejores resultados', 'https://images.unsplash.com/photo-1676299251956-415b4d5a5c5c', 90, 'intermediate');

INSERT INTO lessons (course_id, title, description, content, lesson_order) VALUES
((SELECT id FROM courses WHERE title = 'Fundamentos de IA'), '¿Qué es la IA?', 'Introducción a la inteligencia artificial', 'La inteligencia artificial es...', 1),
((SELECT id FROM courses WHERE title = 'Fundamentos de IA'), 'Tipos de IA', 'Diferentes tipos de inteligencia artificial', 'Existen varios tipos de IA...', 2),
((SELECT id FROM courses WHERE title = 'Machine Learning Avanzado'), 'Redes Neuronales', 'Conceptos básicos de redes neuronales', 'Las redes neuronales son...', 1);

INSERT INTO channels (name, description) VALUES
('General', 'Canal general para discusiones sobre IA'),
('Proyectos', 'Comparte tus proyectos de IA'),
('Ayuda', 'Preguntas y respuestas sobre IA');

-- Función para agregar experiencia al usuario
CREATE OR REPLACE FUNCTION add_user_experience(user_uuid UUID, exp_amount INTEGER)
RETURNS VOID AS $$
BEGIN
  UPDATE users 
  SET experience = experience + exp_amount,
      level = 1 + (experience + exp_amount) / 100
  WHERE id = user_uuid;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Función para agregar badge al usuario
CREATE OR REPLACE FUNCTION add_user_badge(user_uuid UUID, badge_name TEXT)
RETURNS VOID AS $$
BEGIN
  UPDATE users 
  SET badges = array_append(badges, badge_name)
  WHERE id = user_uuid AND NOT (badge_name = ANY(badges));
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
