-- ============================================
-- SPICE App - Issue Reports System
-- Complete Supabase SQL Setup
-- ============================================
-- This file creates the complete infrastructure for the report issue form
-- including tables, policies, functions, triggers, and admin views
-- ============================================

-- ============================================
-- 1. CREATE ISSUE_REPORTS TABLE
-- ============================================

CREATE TABLE IF NOT EXISTS public.issue_reports (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  report_type TEXT NOT NULL CHECK (report_type IN ('safety', 'user', 'bug', 'content', 'feedback')),
  subject TEXT NOT NULL,
  details TEXT NOT NULL,
  email TEXT NOT NULL,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'resolved', 'closed')),
  priority TEXT DEFAULT 'normal' CHECK (priority IN ('low', 'normal', 'high', 'urgent')),
  assigned_to UUID REFERENCES auth.users(id),
  resolution_notes TEXT,
  metadata JSONB DEFAULT '{}'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  resolved_at TIMESTAMP WITH TIME ZONE
);

-- Add comment to table
COMMENT ON TABLE public.issue_reports IS 'Stores user-submitted issue reports from the report form';

-- Add comments to columns
COMMENT ON COLUMN public.issue_reports.id IS 'Unique identifier for the report';
COMMENT ON COLUMN public.issue_reports.report_type IS 'Type of report: safety, user, bug, content, or feedback';
COMMENT ON COLUMN public.issue_reports.subject IS 'Brief subject/title of the report';
COMMENT ON COLUMN public.issue_reports.details IS 'Detailed description of the issue';
COMMENT ON COLUMN public.issue_reports.email IS 'Email address of the reporter for follow-up';
COMMENT ON COLUMN public.issue_reports.status IS 'Current status of the report';
COMMENT ON COLUMN public.issue_reports.priority IS 'Priority level (safety reports auto-set to urgent)';
COMMENT ON COLUMN public.issue_reports.assigned_to IS 'Admin user ID assigned to handle this report';
COMMENT ON COLUMN public.issue_reports.resolution_notes IS 'Admin notes about how the issue was resolved';
COMMENT ON COLUMN public.issue_reports.metadata IS 'Additional metadata (IP, user agent, etc.)';

-- ============================================
-- 2. CREATE INDEXES FOR PERFORMANCE
-- ============================================

-- Index for sorting by creation date (most common query)
CREATE INDEX IF NOT EXISTS idx_issue_reports_created_at 
  ON public.issue_reports(created_at DESC);

-- Index for filtering by status
CREATE INDEX IF NOT EXISTS idx_issue_reports_status 
  ON public.issue_reports(status);

-- Index for filtering by report type
CREATE INDEX IF NOT EXISTS idx_issue_reports_report_type 
  ON public.issue_reports(report_type);

-- Index for searching by email
CREATE INDEX IF NOT EXISTS idx_issue_reports_email 
  ON public.issue_reports(email);

-- Index for filtering by priority
CREATE INDEX IF NOT EXISTS idx_issue_reports_priority 
  ON public.issue_reports(priority DESC);

-- Composite index for common admin queries (status + created_at)
CREATE INDEX IF NOT EXISTS idx_issue_reports_status_created 
  ON public.issue_reports(status, created_at DESC);

-- Index for assigned reports
CREATE INDEX IF NOT EXISTS idx_issue_reports_assigned_to 
  ON public.issue_reports(assigned_to) 
  WHERE assigned_to IS NOT NULL;

-- Full-text search index for subject and details
CREATE INDEX IF NOT EXISTS idx_issue_reports_search 
  ON public.issue_reports 
  USING gin(to_tsvector('english', subject || ' ' || details));

-- ============================================
-- 3. CREATE HELPER FUNCTIONS
-- ============================================

-- Function to auto-set priority based on report type
CREATE OR REPLACE FUNCTION set_report_priority()
RETURNS TRIGGER AS $$
BEGIN
  -- Safety reports are always urgent
  IF NEW.report_type = 'safety' THEN
    NEW.priority := 'urgent';
  -- Bug reports are high priority
  ELSIF NEW.report_type = 'bug' THEN
    NEW.priority := 'high';
  -- Content violations are high priority
  ELSIF NEW.report_type = 'content' THEN
    NEW.priority := 'high';
  -- User reports are normal priority
  ELSIF NEW.report_type = 'user' THEN
    NEW.priority := 'normal';
  -- Feedback is low priority
  ELSIF NEW.report_type = 'feedback' THEN
    NEW.priority := 'low';
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Function to set resolved_at timestamp
CREATE OR REPLACE FUNCTION set_resolved_at()
RETURNS TRIGGER AS $$
BEGIN
  -- Set resolved_at when status changes to resolved or closed
  IF NEW.status IN ('resolved', 'closed') AND OLD.status NOT IN ('resolved', 'closed') THEN
    NEW.resolved_at := now();
  -- Clear resolved_at if status changes back
  ELSIF NEW.status NOT IN ('resolved', 'closed') AND OLD.status IN ('resolved', 'closed') THEN
    NEW.resolved_at := NULL;
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Function to get report statistics
CREATE OR REPLACE FUNCTION get_report_stats()
RETURNS TABLE(
  total_reports BIGINT,
  new_reports BIGINT,
  in_progress_reports BIGINT,
  resolved_reports BIGINT,
  urgent_reports BIGINT,
  avg_resolution_time INTERVAL
) AS $$
BEGIN
  RETURN QUERY
  SELECT
    COUNT(*)::BIGINT as total_reports,
    COUNT(*) FILTER (WHERE status = 'new')::BIGINT as new_reports,
    COUNT(*) FILTER (WHERE status = 'in_progress')::BIGINT as in_progress_reports,
    COUNT(*) FILTER (WHERE status IN ('resolved', 'closed'))::BIGINT as resolved_reports,
    COUNT(*) FILTER (WHERE priority = 'urgent' AND status = 'new')::BIGINT as urgent_reports,
    AVG(resolved_at - created_at) FILTER (WHERE resolved_at IS NOT NULL) as avg_resolution_time
  FROM public.issue_reports;
END;
$$ LANGUAGE plpgsql;

-- ============================================
-- 4. CREATE TRIGGERS
-- ============================================

-- Trigger to auto-set priority on insert
CREATE TRIGGER set_priority_on_insert
  BEFORE INSERT ON public.issue_reports
  FOR EACH ROW
  EXECUTE FUNCTION set_report_priority();

-- Trigger to update resolved_at timestamp
CREATE TRIGGER update_resolved_at
  BEFORE UPDATE ON public.issue_reports
  FOR EACH ROW
  EXECUTE FUNCTION set_resolved_at();

-- Trigger to update updated_at timestamp
CREATE TRIGGER update_issue_reports_updated_at 
  BEFORE UPDATE ON public.issue_reports
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- 5. ENABLE ROW LEVEL SECURITY
-- ============================================

ALTER TABLE public.issue_reports ENABLE ROW LEVEL SECURITY;

-- ============================================
-- 6. CREATE RLS POLICIES
-- ============================================

-- Policy: Allow anyone to submit a report (public insert)
CREATE POLICY "Allow public insert on issue_reports" 
  ON public.issue_reports
  FOR INSERT 
  WITH CHECK (true);

-- Policy: Authenticated users (admins) can read all reports
CREATE POLICY "Authenticated users can read issue_reports" 
  ON public.issue_reports
  FOR SELECT 
  USING (auth.uid() IS NOT NULL);

-- Policy: Authenticated users (admins) can update reports
CREATE POLICY "Authenticated users can update issue_reports" 
  ON public.issue_reports
  FOR UPDATE 
  USING (auth.uid() IS NOT NULL);

-- Policy: Authenticated users (admins) can delete reports
CREATE POLICY "Authenticated users can delete issue_reports" 
  ON public.issue_reports
  FOR DELETE 
  USING (auth.uid() IS NOT NULL);

-- ============================================
-- 7. GRANT PERMISSIONS
-- ============================================

-- Grant necessary permissions to anon (for public submissions)
GRANT INSERT ON public.issue_reports TO anon;

-- Grant full permissions to authenticated users (admins)
GRANT ALL ON public.issue_reports TO authenticated;

-- Grant execute on functions
GRANT EXECUTE ON FUNCTION get_report_stats() TO authenticated;

-- ============================================
-- 8. CREATE ADMIN VIEWS
-- ============================================

-- View: Pending reports (new and in-progress)
CREATE OR REPLACE VIEW public.pending_reports AS
SELECT 
  id,
  report_type,
  subject,
  email,
  status,
  priority,
  created_at,
  CASE 
    WHEN priority = 'urgent' THEN 1
    WHEN priority = 'high' THEN 2
    WHEN priority = 'normal' THEN 3
    ELSE 4
  END as priority_order
FROM public.issue_reports
WHERE status IN ('new', 'in_progress')
ORDER BY priority_order, created_at DESC;

-- View: Urgent reports requiring immediate attention
CREATE OR REPLACE VIEW public.urgent_reports AS
SELECT 
  id,
  report_type,
  subject,
  details,
  email,
  created_at,
  EXTRACT(EPOCH FROM (now() - created_at))/3600 as hours_since_reported
FROM public.issue_reports
WHERE status = 'new' AND priority = 'urgent'
ORDER BY created_at ASC;

-- View: Reports by type (for analytics)
CREATE OR REPLACE VIEW public.reports_by_type AS
SELECT 
  report_type,
  COUNT(*) as total_count,
  COUNT(*) FILTER (WHERE status = 'new') as new_count,
  COUNT(*) FILTER (WHERE status = 'in_progress') as in_progress_count,
  COUNT(*) FILTER (WHERE status IN ('resolved', 'closed')) as resolved_count,
  ROUND(AVG(EXTRACT(EPOCH FROM (resolved_at - created_at))/3600), 2) as avg_resolution_hours
FROM public.issue_reports
GROUP BY report_type
ORDER BY total_count DESC;

-- Grant view permissions
GRANT SELECT ON public.pending_reports TO authenticated;
GRANT SELECT ON public.urgent_reports TO authenticated;
GRANT SELECT ON public.reports_by_type TO authenticated;

-- ============================================
-- 9. CREATE SAMPLE QUERIES (COMMENTED)
-- ============================================

-- Get all pending reports
-- SELECT * FROM public.pending_reports;

-- Get urgent reports
-- SELECT * FROM public.urgent_reports;

-- Get report statistics
-- SELECT * FROM get_report_stats();

-- Get reports by type
-- SELECT * FROM public.reports_by_type;

-- Search reports by keyword
-- SELECT id, subject, report_type, created_at
-- FROM public.issue_reports
-- WHERE to_tsvector('english', subject || ' ' || details) @@ to_tsquery('english', 'search_term');

-- Get reports from specific email
-- SELECT * FROM public.issue_reports WHERE email = 'user@example.com';

-- Get reports created in last 24 hours
-- SELECT * FROM public.issue_reports WHERE created_at > now() - interval '24 hours';

-- Update report status
-- UPDATE public.issue_reports SET status = 'in_progress' WHERE id = 'uuid-here';

-- ============================================
-- SETUP COMPLETE
-- ============================================
-- The issue_reports system is now fully configured with:
-- ✅ Table with proper constraints and defaults
-- ✅ Performance indexes for common queries
-- ✅ Auto-priority setting based on report type
-- ✅ Auto-timestamp for resolutions
-- ✅ RLS policies for security
-- ✅ Helper functions for statistics
-- ✅ Admin views for management
-- ✅ Full-text search capability
-- ============================================
