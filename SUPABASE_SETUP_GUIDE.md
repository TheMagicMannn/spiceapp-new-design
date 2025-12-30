# Supabase Setup Guide - Report Issue System

## 📋 Overview

This guide explains how to set up the complete Supabase infrastructure for the SPICE App report issue form.

---

## 🗄️ Database Structure

### Main Table: `issue_reports`

Stores all user-submitted reports with the following fields:

| Column | Type | Description |
|--------|------|-------------|
| `id` | UUID | Primary key (auto-generated) |
| `report_type` | TEXT | Type: safety, user, bug, content, feedback |
| `subject` | TEXT | Brief title of the report |
| `details` | TEXT | Detailed description |
| `email` | TEXT | Reporter's email for follow-up |
| `status` | TEXT | new, in_progress, resolved, closed |
| `priority` | TEXT | low, normal, high, urgent (auto-set) |
| `assigned_to` | UUID | Admin user assigned to handle |
| `resolution_notes` | TEXT | Admin notes on resolution |
| `metadata` | JSONB | Additional data (IP, user agent) |
| `created_at` | TIMESTAMP | When report was submitted |
| `updated_at` | TIMESTAMP | Last modification time |
| `resolved_at` | TIMESTAMP | When report was resolved |

---

## 🚀 Setup Instructions

### Option 1: Via Supabase Dashboard (Recommended)

1. **Login to Supabase Dashboard**
   - Go to https://supabase.com/dashboard
   - Select your project

2. **Open SQL Editor**
   - Click "SQL Editor" in the left sidebar
   - Click "New query"

3. **Copy and Execute SQL**
   - Copy the contents of `/app/supabase/migrations/002_issue_reports_complete.sql`
   - Paste into the SQL editor
   - Click "Run" or press Ctrl+Enter

4. **Verify Setup**
   - Go to "Table Editor"
   - You should see `issue_reports` table
   - Check "Database" → "Functions" for helper functions
   - Check "Database" → "Views" for admin views

### Option 2: Via Supabase CLI

```bash
# Install Supabase CLI if not already installed
npm install -g supabase

# Login to Supabase
supabase login

# Link your project
supabase link --project-ref YOUR_PROJECT_REF

# Run the migration
supabase db push
```

### Option 3: Via Python Script

```bash
# Run the migration script
cd /app
python3 apply_migration.py
```

---

## 🔧 What Gets Created

### 1. Tables
- ✅ `issue_reports` - Main table for storing reports

### 2. Indexes (8 total)
- `idx_issue_reports_created_at` - Sort by date
- `idx_issue_reports_status` - Filter by status
- `idx_issue_reports_report_type` - Filter by type
- `idx_issue_reports_email` - Search by email
- `idx_issue_reports_priority` - Filter by priority
- `idx_issue_reports_status_created` - Composite index
- `idx_issue_reports_assigned_to` - Filter assigned reports
- `idx_issue_reports_search` - Full-text search

### 3. Functions
- `set_report_priority()` - Auto-sets priority based on report type
- `set_resolved_at()` - Auto-sets resolution timestamp
- `get_report_stats()` - Returns statistics dashboard data

### 4. Triggers
- `set_priority_on_insert` - Runs on insert
- `update_resolved_at` - Runs on status change
- `update_issue_reports_updated_at` - Runs on any update

### 5. Views (for Admin Dashboard)
- `pending_reports` - All new and in-progress reports
- `urgent_reports` - Safety and urgent reports only
- `reports_by_type` - Analytics by report type

### 6. RLS Policies
- Public can INSERT (submit reports)
- Authenticated users can SELECT, UPDATE, DELETE (admins only)

---

## 🔐 Security (Row Level Security)

**RLS is ENABLED** - All access is controlled by policies:

1. **Public Access:**
   - ✅ Can submit reports (INSERT only)
   - ❌ Cannot read other reports
   - ❌ Cannot update or delete

2. **Authenticated Users (Admins):**
   - ✅ Can read all reports
   - ✅ Can update reports (status, assignment, notes)
   - ✅ Can delete reports if needed

---

## 📊 Admin Queries

### Get Pending Reports
```sql
SELECT * FROM public.pending_reports;
```

### Get Urgent Reports
```sql
SELECT * FROM public.urgent_reports;
```

### Get Statistics
```sql
SELECT * FROM get_report_stats();
```

### Get Reports by Type
```sql
SELECT * FROM public.reports_by_type;
```

### Search Reports
```sql
SELECT id, subject, report_type, created_at
FROM public.issue_reports
WHERE to_tsvector('english', subject || ' ' || details) 
      @@ to_tsquery('english', 'keyword');
```

### Update Report Status
```sql
UPDATE public.issue_reports 
SET status = 'in_progress', 
    assigned_to = 'admin-user-id'
WHERE id = 'report-id';
```

### Add Resolution Notes
```sql
UPDATE public.issue_reports 
SET status = 'resolved',
    resolution_notes = 'Issue was resolved by...'
WHERE id = 'report-id';
```

---

## 🎯 Priority Auto-Assignment

Reports are automatically assigned priority based on type:

| Report Type | Priority | Color |
|-------------|----------|-------|
| Safety | **URGENT** | 🔴 Red |
| Bug | **HIGH** | 🟣 Purple |
| Content | **HIGH** | 🟡 Amber |
| User | **NORMAL** | 🟠 Orange |
| Feedback | **LOW** | 🔵 Blue |

---

## 🔄 Status Workflow

```
NEW → IN_PROGRESS → RESOLVED → CLOSED
  ↓         ↓           ↓
  └─────────┴───────────┘
      (can reopen)
```

- **NEW:** Just submitted, awaiting review
- **IN_PROGRESS:** Admin is working on it
- **RESOLVED:** Issue fixed, awaiting confirmation
- **CLOSED:** Completely handled, archived

---

## 📧 Integration with Backend

The FastAPI backend (`/app/backend/server.py`) handles:

1. **Form Submission**
   - Validates input
   - Saves to `issue_reports` table
   - Sends email via Resend API

2. **Email Notification**
   - Sent to: `support@thespiceapp.com`
   - From: `noreply@thespiceapp.com`
   - Contains: All report details + formatted HTML

3. **Graceful Degradation**
   - Works even if table doesn't exist
   - Logs database errors but continues
   - Always sends email

---

## 🧪 Testing the Setup

### 1. Test Insert (via SQL)
```sql
INSERT INTO public.issue_reports (report_type, subject, details, email)
VALUES ('bug', 'Test Report', 'This is a test', 'test@example.com');
```

### 2. Test Query
```sql
SELECT * FROM public.issue_reports ORDER BY created_at DESC LIMIT 5;
```

### 3. Test Priority Auto-Assignment
```sql
-- Should auto-set priority to 'urgent'
INSERT INTO public.issue_reports (report_type, subject, details, email)
VALUES ('safety', 'Safety Test', 'Testing priority', 'test@example.com');

-- Check the priority
SELECT id, report_type, priority FROM public.issue_reports 
WHERE subject = 'Safety Test';
```

### 4. Test Status Update
```sql
UPDATE public.issue_reports 
SET status = 'resolved' 
WHERE subject = 'Test Report'
RETURNING resolved_at; -- Should show timestamp
```

---

## 📈 Analytics Queries

### Reports per Day (Last 30 Days)
```sql
SELECT 
  DATE(created_at) as report_date,
  COUNT(*) as count
FROM public.issue_reports
WHERE created_at > now() - interval '30 days'
GROUP BY DATE(created_at)
ORDER BY report_date DESC;
```

### Average Resolution Time
```sql
SELECT 
  report_type,
  AVG(EXTRACT(EPOCH FROM (resolved_at - created_at))/3600) as avg_hours
FROM public.issue_reports
WHERE resolved_at IS NOT NULL
GROUP BY report_type;
```

### Most Active Reporters
```sql
SELECT 
  email,
  COUNT(*) as report_count
FROM public.issue_reports
GROUP BY email
HAVING COUNT(*) > 1
ORDER BY report_count DESC;
```

---

## 🎨 Building an Admin Dashboard

You can build a React admin dashboard using Supabase client:

```javascript
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

// Get pending reports
const { data: pending } = await supabase
  .from('pending_reports')
  .select('*')

// Get urgent reports
const { data: urgent } = await supabase
  .from('urgent_reports')
  .select('*')

// Get statistics
const { data: stats } = await supabase
  .rpc('get_report_stats')

// Update report status
await supabase
  .from('issue_reports')
  .update({ status: 'in_progress' })
  .eq('id', reportId)
```

---

## 🔍 Troubleshooting

### Issue: "relation already exists"
**Solution:** Table is already created. Skip migration or use `DROP TABLE IF EXISTS` first.

### Issue: "permission denied"
**Solution:** Make sure you're using the service role key, not anon key.

### Issue: "function update_updated_at_column does not exist"
**Solution:** Run the base migration first (`001_initial_schema.sql`) which creates this function.

### Issue: "policy already exists"
**Solution:** Policies are already created. You can drop and recreate or modify existing ones.

---

## 📁 File Locations

- **Complete SQL:** `/app/supabase/migrations/002_issue_reports_complete.sql`
- **Basic SQL:** `/app/supabase/migrations/002_issue_reports_table.sql`
- **Backend Code:** `/app/backend/server.py` (line ~200)
- **Frontend Form:** `/app/frontend/src/pages/ReportIssue.tsx`

---

## ✅ Verification Checklist

After running the migration, verify:

- [ ] Table `issue_reports` exists in Supabase
- [ ] 8 indexes created
- [ ] 3 functions created
- [ ] 3 triggers created
- [ ] 3 views created
- [ ] 4 RLS policies active
- [ ] Can insert a test report via SQL
- [ ] Can query reports via SQL
- [ ] Priority auto-assigns correctly
- [ ] Status updates work
- [ ] Timestamps update automatically

---

## 🎉 You're All Set!

The report issue system is now fully configured in Supabase. Reports submitted through the frontend form will be:

1. ✅ Saved to the database
2. ✅ Emailed to support team
3. ✅ Auto-prioritized by type
4. ✅ Timestamped automatically
5. ✅ Ready for admin management

For questions or issues, refer to the troubleshooting section or check the Supabase documentation.
