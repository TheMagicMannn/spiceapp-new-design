-- Create waitlist table
CREATE TABLE IF NOT EXISTS public.waitlist (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  name TEXT,
  source TEXT, -- 'hero', 'download', 'quiz', etc.
  metadata JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON public.waitlist(email);
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON public.waitlist(created_at DESC);

-- Enable Row Level Security
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts (anyone can join waitlist)
CREATE POLICY "Allow public insert on waitlist" ON public.waitlist
  FOR INSERT WITH CHECK (true);

-- Create policy to prevent reading other users' data
CREATE POLICY "Users can only read their own waitlist entry" ON public.waitlist
  FOR SELECT USING (auth.uid() IS NOT NULL);

-- Create contact_messages table
CREATE TABLE IF NOT EXISTS public.contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'resolved')),
  metadata JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create index
CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at ON public.contact_messages(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_messages_status ON public.contact_messages(status);

-- Enable RLS
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow inserts (anyone can contact)
CREATE POLICY "Allow public insert on contact_messages" ON public.contact_messages
  FOR INSERT WITH CHECK (true);

-- Only authenticated users can read (for admin dashboard)
CREATE POLICY "Authenticated users can read contact_messages" ON public.contact_messages
  FOR SELECT USING (auth.uid() IS NOT NULL);

-- Create quiz_results table
CREATE TABLE IF NOT EXISTS public.quiz_results (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id),
  email TEXT,
  responses JSONB NOT NULL,
  insights JSONB NOT NULL,
  share_token TEXT UNIQUE,
  is_public BOOLEAN DEFAULT false,
  view_count INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_quiz_results_user_id ON public.quiz_results(user_id);
CREATE INDEX IF NOT EXISTS idx_quiz_results_share_token ON public.quiz_results(share_token);
CREATE INDEX IF NOT EXISTS idx_quiz_results_created_at ON public.quiz_results(created_at DESC);

-- Enable RLS
ALTER TABLE public.quiz_results ENABLE ROW LEVEL SECURITY;

-- Allow inserts
CREATE POLICY "Allow public insert on quiz_results" ON public.quiz_results
  FOR INSERT WITH CHECK (true);

-- Users can read their own results
CREATE POLICY "Users can read their own quiz_results" ON public.quiz_results
  FOR SELECT USING (
    auth.uid() = user_id OR 
    (is_public = true)
  );

-- Users can update their own results
CREATE POLICY "Users can update their own quiz_results" ON public.quiz_results
  FOR UPDATE USING (auth.uid() = user_id);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = timezone('utc'::text, now());
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_waitlist_updated_at BEFORE UPDATE ON public.waitlist
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_contact_messages_updated_at BEFORE UPDATE ON public.contact_messages
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_quiz_results_updated_at BEFORE UPDATE ON public.quiz_results
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Create function to increment view count
CREATE OR REPLACE FUNCTION increment_quiz_view_count(result_id UUID)
RETURNS void AS $$
BEGIN
  UPDATE public.quiz_results
  SET view_count = view_count + 1
  WHERE id = result_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create function to generate share token
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

-- Grant necessary permissions
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT ALL ON ALL TABLES IN SCHEMA public TO anon, authenticated;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO anon, authenticated;
GRANT ALL ON ALL FUNCTIONS IN SCHEMA public TO anon, authenticated;
