-- Create issue_reports table
CREATE TABLE IF NOT EXISTS public.issue_reports (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  report_type TEXT NOT NULL CHECK (report_type IN ('safety', 'user', 'bug', 'content', 'feedback')),
  subject TEXT NOT NULL,
  details TEXT NOT NULL,
  email TEXT NOT NULL,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'resolved', 'closed')),
  metadata JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_issue_reports_created_at ON public.issue_reports(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_issue_reports_status ON public.issue_reports(status);
CREATE INDEX IF NOT EXISTS idx_issue_reports_report_type ON public.issue_reports(report_type);
CREATE INDEX IF NOT EXISTS idx_issue_reports_email ON public.issue_reports(email);

-- Enable Row Level Security
ALTER TABLE public.issue_reports ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts (anyone can submit a report)
CREATE POLICY "Allow public insert on issue_reports" ON public.issue_reports
  FOR INSERT WITH CHECK (true);

-- Create policy for reading (authenticated users only - for admin dashboard)
CREATE POLICY "Authenticated users can read issue_reports" ON public.issue_reports
  FOR SELECT USING (auth.uid() IS NOT NULL);

-- Create policy for updating (authenticated users only - for admin management)
CREATE POLICY "Authenticated users can update issue_reports" ON public.issue_reports
  FOR UPDATE USING (auth.uid() IS NOT NULL);

-- Create trigger for updated_at timestamp
CREATE TRIGGER update_issue_reports_updated_at BEFORE UPDATE ON public.issue_reports
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Grant necessary permissions
GRANT ALL ON public.issue_reports TO anon, authenticated;
