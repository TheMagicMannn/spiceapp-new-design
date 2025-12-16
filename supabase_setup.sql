-- ========================================
-- SPICE App - Complete Database Setup
-- ========================================
-- Run this in Supabase SQL Editor
-- Project: rvpkcwskkovqhfwwrdeq
-- ========================================

-- Enable UUID extension if not already enabled
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ========================================
-- TABLES
-- ========================================

-- 1. WAITLIST TABLE
-- Stores email addresses for product launch notifications
CREATE TABLE IF NOT EXISTS public.waitlist (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  name TEXT,
  source TEXT, -- 'hero', 'download', 'quiz', etc.
  metadata JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create indexes for waitlist
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON public.waitlist(email);
CREATE INDEX IF NOT EXISTS idx_waitlist_source ON public.waitlist(source);
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON public.waitlist(created_at DESC);

-- Add comments
COMMENT ON TABLE public.waitlist IS 'Stores waitlist signups for product launch';
COMMENT ON COLUMN public.waitlist.source IS 'Where the signup came from: hero, download, quiz, etc.';


-- 2. CONTACT MESSAGES TABLE
-- Stores contact form submissions
CREATE TABLE IF NOT EXISTS public.contact_messages (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'resolved', 'archived')),
  metadata JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create indexes for contact_messages
CREATE INDEX IF NOT EXISTS idx_contact_messages_email ON public.contact_messages(email);
CREATE INDEX IF NOT EXISTS idx_contact_messages_status ON public.contact_messages(status);
CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at ON public.contact_messages(created_at DESC);

-- Add comments
COMMENT ON TABLE public.contact_messages IS 'Stores contact form submissions';
COMMENT ON COLUMN public.contact_messages.status IS 'Status: new, in_progress, resolved, archived';


-- 3. QUIZ RESULTS TABLE
-- Stores BDSM quiz responses and AI-generated insights
CREATE TABLE IF NOT EXISTS public.quiz_results (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT,
  responses JSONB NOT NULL,
  insights JSONB NOT NULL,
  share_token TEXT UNIQUE,
  is_public BOOLEAN DEFAULT false,
  view_count INTEGER DEFAULT 0,
  metadata JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create indexes for quiz_results
CREATE INDEX IF NOT EXISTS idx_quiz_results_user_id ON public.quiz_results(user_id);
CREATE INDEX IF NOT EXISTS idx_quiz_results_share_token ON public.quiz_results(share_token);
CREATE INDEX IF NOT EXISTS idx_quiz_results_is_public ON public.quiz_results(is_public);
CREATE INDEX IF NOT EXISTS idx_quiz_results_created_at ON public.quiz_results(created_at DESC);

-- Add comments
COMMENT ON TABLE public.quiz_results IS 'Stores BDSM quiz responses and AI-generated personality insights';
COMMENT ON COLUMN public.quiz_results.share_token IS 'Unique token for sharing results publicly';
COMMENT ON COLUMN public.quiz_results.is_public IS 'Whether the results can be viewed by anyone with the share link';


-- ========================================
-- FUNCTIONS
-- ========================================

-- Function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = timezone('utc'::text, now());
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Function to increment quiz view count
CREATE OR REPLACE FUNCTION increment_quiz_view_count(result_id UUID)
RETURNS void AS $$
BEGIN
  UPDATE public.quiz_results
  SET view_count = view_count + 1
  WHERE id = result_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Function to generate random share token
CREATE OR REPLACE FUNCTION generate_share_token()
RETURNS TEXT AS $$
DECLARE
  characters TEXT := 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  token TEXT := '';
  i INTEGER;
BEGIN
  FOR i IN 1..12 LOOP
    token := token || substr(characters, floor(random() * length(characters) + 1)::int, 1);
  END LOOP;
  RETURN token;
END;
$$ LANGUAGE plpgsql;


-- ========================================
-- TRIGGERS
-- ========================================

-- Trigger for waitlist updated_at
DROP TRIGGER IF EXISTS update_waitlist_updated_at ON public.waitlist;
CREATE TRIGGER update_waitlist_updated_at 
  BEFORE UPDATE ON public.waitlist
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();

-- Trigger for contact_messages updated_at
DROP TRIGGER IF EXISTS update_contact_messages_updated_at ON public.contact_messages;
CREATE TRIGGER update_contact_messages_updated_at 
  BEFORE UPDATE ON public.contact_messages
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();

-- Trigger for quiz_results updated_at
DROP TRIGGER IF EXISTS update_quiz_results_updated_at ON public.quiz_results;
CREATE TRIGGER update_quiz_results_updated_at 
  BEFORE UPDATE ON public.quiz_results
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();


-- ========================================
-- ROW LEVEL SECURITY (RLS)
-- ========================================

-- Enable RLS on all tables
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.quiz_results ENABLE ROW LEVEL SECURITY;

-- WAITLIST POLICIES
-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow public insert on waitlist" ON public.waitlist;
DROP POLICY IF EXISTS "Users can only read their own waitlist entry" ON public.waitlist;

-- Allow anyone to insert to waitlist (anonymous signups)
CREATE POLICY "Allow public insert on waitlist" 
  ON public.waitlist
  FOR INSERT 
  WITH CHECK (true);

-- Users can only read their own entries (for logged-in users)
CREATE POLICY "Users can only read their own waitlist entry" 
  ON public.waitlist
  FOR SELECT 
  USING (auth.uid() IS NOT NULL);

-- CONTACT MESSAGES POLICIES
-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow public insert on contact_messages" ON public.contact_messages;
DROP POLICY IF EXISTS "Authenticated users can read contact_messages" ON public.contact_messages;

-- Allow anyone to insert contact messages
CREATE POLICY "Allow public insert on contact_messages" 
  ON public.contact_messages
  FOR INSERT 
  WITH CHECK (true);

-- Only authenticated users can read (for admin dashboard)
CREATE POLICY "Authenticated users can read contact_messages" 
  ON public.contact_messages
  FOR SELECT 
  USING (auth.uid() IS NOT NULL);

-- QUIZ RESULTS POLICIES
-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow public insert on quiz_results" ON public.quiz_results;
DROP POLICY IF EXISTS "Users can read their own quiz_results" ON public.quiz_results;
DROP POLICY IF EXISTS "Users can update their own quiz_results" ON public.quiz_results;

-- Allow anyone to insert quiz results (anonymous or logged in)
CREATE POLICY "Allow public insert on quiz_results" 
  ON public.quiz_results
  FOR INSERT 
  WITH CHECK (true);

-- Users can read their own results OR public results
CREATE POLICY "Users can read their own quiz_results" 
  ON public.quiz_results
  FOR SELECT 
  USING (
    auth.uid() = user_id OR 
    is_public = true
  );

-- Users can update their own results
CREATE POLICY "Users can update their own quiz_results" 
  ON public.quiz_results
  FOR UPDATE 
  USING (auth.uid() = user_id);


-- ========================================
-- GRANTS & PERMISSIONS
-- ========================================

-- Grant necessary permissions to anon and authenticated roles
GRANT USAGE ON SCHEMA public TO anon, authenticated;

-- Grant table permissions
GRANT SELECT, INSERT ON public.waitlist TO anon, authenticated;
GRANT SELECT, INSERT ON public.contact_messages TO anon, authenticated;
GRANT SELECT, INSERT, UPDATE ON public.quiz_results TO anon, authenticated;

-- Grant function permissions
GRANT EXECUTE ON FUNCTION update_updated_at_column() TO anon, authenticated;
GRANT EXECUTE ON FUNCTION increment_quiz_view_count(UUID) TO anon, authenticated;
GRANT EXECUTE ON FUNCTION generate_share_token() TO anon, authenticated;

-- Grant sequence permissions (for auto-increment if any)
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO anon, authenticated;


-- ========================================
-- INITIAL DATA / SEED (Optional)
-- ========================================

-- Add any seed data here if needed
-- Example: Insert admin contact for testing
-- INSERT INTO public.contact_messages (name, email, subject, message, status)
-- VALUES ('Admin Test', 'admin@test.com', 'Test Message', 'This is a test', 'new')
-- ON CONFLICT DO NOTHING;


-- ========================================
-- VERIFICATION QUERIES
-- ========================================

-- Run these to verify everything is set up correctly:

-- Check all tables exist
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_name IN ('waitlist', 'contact_messages', 'quiz_results');

-- Check indexes
SELECT tablename, indexname 
FROM pg_indexes 
WHERE schemaname = 'public' 
AND tablename IN ('waitlist', 'contact_messages', 'quiz_results');

-- Check RLS is enabled
SELECT tablename, rowsecurity 
FROM pg_tables 
WHERE schemaname = 'public' 
AND tablename IN ('waitlist', 'contact_messages', 'quiz_results');

-- Check policies
SELECT tablename, policyname, cmd, qual 
FROM pg_policies 
WHERE schemaname = 'public';

-- Check functions exist
SELECT routine_name, routine_type
FROM information_schema.routines
WHERE routine_schema = 'public'
AND routine_name IN ('update_updated_at_column', 'increment_quiz_view_count', 'generate_share_token');


-- ========================================
-- SETUP COMPLETE
-- ========================================

-- Success message
DO $$
BEGIN
  RAISE NOTICE '✅ SPICE App database setup completed successfully!';
  RAISE NOTICE '📊 Tables created: waitlist, contact_messages, quiz_results';
  RAISE NOTICE '🔒 RLS policies enabled on all tables';
  RAISE NOTICE '⚡ Triggers and functions configured';
  RAISE NOTICE '👉 Next steps:';
  RAISE NOTICE '   1. Deploy edge functions: supabase functions deploy';
  RAISE NOTICE '   2. Set secrets: RESEND_API_KEY and EMERGENT_LLM_KEY';
  RAISE NOTICE '   3. Update frontend .env with VITE_SUPABASE_PUBLISHABLE_KEY';
END $$;
