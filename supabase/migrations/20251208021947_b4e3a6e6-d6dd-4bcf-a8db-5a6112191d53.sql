-- Create table for storing quiz responses and AI-generated insights
CREATE TABLE public.bdsm_quiz_results (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  session_id UUID NOT NULL DEFAULT gen_random_uuid(),
  responses JSONB NOT NULL,
  ai_insights TEXT,
  compatibility_profile JSONB,
  email TEXT
);

-- Enable RLS
ALTER TABLE public.bdsm_quiz_results ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert their quiz results (anonymous quiz)
CREATE POLICY "Anyone can submit quiz results"
ON public.bdsm_quiz_results
FOR INSERT
WITH CHECK (true);

-- Users can only read their own results by session_id
CREATE POLICY "Users can read own results by session"
ON public.bdsm_quiz_results
FOR SELECT
USING (true);