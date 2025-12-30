# Supabase Edge Function Deployment Guide
# Report Issue Form

## 📋 Overview

This guide shows how to deploy the `report-issue` Supabase Edge Function for handling form submissions.

---

## 📁 File Structure

```
supabase/
├── functions/
│   └── report-issue/
│       ├── index.ts           # Main edge function code
│       ├── deno.json           # Deno configuration
│       └── import_map.json    # Import mappings
└── migrations/
    └── 002_issue_reports_complete.sql  # Database setup
```

---

## 🚀 Deployment Steps

### Step 1: Install Supabase CLI

```bash
npm install -g supabase
```

### Step 2: Login to Supabase

```bash
supabase login
```

### Step 3: Link Your Project

```bash
cd /app
supabase link --project-ref YOUR_PROJECT_REF
```

### Step 4: Set Environment Secrets

```bash
# Set Resend API Key
supabase secrets set RESEND_API_KEY=re_J68Uf9Xh_9tDQvAoS5DwcxJ7YrJEC8xKs

# Set Sender Email
supabase secrets set SENDER_EMAIL=noreply@thespiceapp.com

# Set Support Email
supabase secrets set SUPPORT_EMAIL=support@thespiceapp.com
```

**Note:** `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` are automatically available in edge functions.

### Step 5: Deploy the Edge Function

```bash
supabase functions deploy report-issue
```

### Step 6: Get the Function URL

After deployment, you'll get a URL like:
```
https://[project-ref].supabase.co/functions/v1/report-issue
```

Save this URL for frontend configuration.

---

## 🔧 Configuration

### Environment Variables in Supabase

The edge function uses these environment variables:

| Variable | Description | Auto-Available |
|----------|-------------|----------------|
| `SUPABASE_URL` | Your Supabase project URL | ✅ Yes |
| `SUPABASE_SERVICE_ROLE_KEY` | Service role key | ✅ Yes |
| `RESEND_API_KEY` | Resend email API key | ❌ Set via CLI |
| `SENDER_EMAIL` | Email sender address | ❌ Set via CLI |
| `SUPPORT_EMAIL` | Support team email | ❌ Set via CLI |

---

## 🎯 Testing the Edge Function

### Using curl:

```bash
curl -X POST 'https://[project-ref].supabase.co/functions/v1/report-issue' \
  -H 'Content-Type: application/json' \
  -H 'Authorization: Bearer YOUR_ANON_KEY' \
  -d '{
    "report_type": "bug",
    "subject": "Test Report",
    "details": "This is a test report",
    "email": "test@example.com"
  }'
```

### Expected Response:

```json
{
  "success": true,
  "message": "Your report has been submitted successfully. Our team will review it within 24-48 hours.",
  "report_id": "uuid-here"
}
```

---

## 🔌 Frontend Integration

### Update Frontend to Use Edge Function

In `/app/frontend/src/pages/ReportIssue.tsx`, update the API call:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
    
    const response = await fetch(
      `${supabaseUrl}/functions/v1/report-issue`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${supabaseAnonKey}`
        },
        body: JSON.stringify({
          report_type: formData.reportType,
          subject: formData.subject,
          details: formData.details,
          email: formData.email,
        }),
      }
    );
    
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error || 'Failed to submit report');
    }
    
    toast({
      title: "Report Submitted!",
      description: data.message,
    });
    
    setFormData({ reportType: "", subject: "", details: "", email: "" });
  } catch (error) {
    toast({
      title: "Error",
      description: error.message,
      variant: "destructive",
    });
  } finally {
    setIsSubmitting(false);
  }
};
```

### Add Environment Variables to Frontend

In `/app/frontend/.env`:

```env
VITE_SUPABASE_URL=https://[project-ref].supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

---

## 🔍 Monitoring & Logs

### View Edge Function Logs:

```bash
supabase functions logs report-issue
```

### View Real-time Logs:

```bash
supabase functions logs report-issue --follow
```

### Check Function Status:

```bash
supabase functions list
```

---

## 🐛 Troubleshooting

### Issue: "Function not found"
**Solution:** Make sure you've deployed the function:
```bash
supabase functions deploy report-issue
```

### Issue: "Unauthorized"
**Solution:** Check that you're passing the correct anon key in Authorization header.

### Issue: "Email not sending"
**Solution:** Verify Resend API key is set:
```bash
supabase secrets list
```

If not set:
```bash
supabase secrets set RESEND_API_KEY=your-key-here
```

### Issue: "Database table doesn't exist"
**Solution:** Run the SQL migration first:
```bash
# Via Dashboard: Copy 002_issue_reports_complete.sql content
# Or via CLI:
supabase db push
```

### Issue: "CORS errors"
**Solution:** The function includes proper CORS headers. Make sure you're using the correct Supabase URL and anon key.

---

## 📊 Function Behavior

**What the Edge Function Does:**

1. ✅ Validates request (required fields, email format, report type)
2. ✅ Saves report to `issue_reports` table
3. ✅ Sends formatted HTML email via Resend
4. ✅ Returns success response with report ID
5. ✅ Graceful degradation (continues if DB fails)
6. ✅ Comprehensive error handling
7. ✅ CORS support for frontend calls

**Validation Rules:**

- **Report Type:** Must be one of: safety, user, bug, content, feedback
- **Email:** Must match pattern: `[username]@[domain].[tld]`
- **Subject:** Required (non-empty)
- **Details:** Required (non-empty)

---

## 🔄 Updating the Function

After making changes to `index.ts`:

```bash
# Redeploy the function
supabase functions deploy report-issue

# View logs to verify
supabase functions logs report-issue --follow
```

---

## 📈 Analytics & Monitoring

### In Supabase Dashboard:

1. **Edge Functions** → `report-issue` → View metrics
2. **Database** → `issue_reports` → View data
3. **Logs** → Filter by function name

### Key Metrics to Monitor:

- Request count
- Error rate
- Response time
- Email delivery success rate

---

## 🎉 Summary

Your edge function is deployed at:
```
https://[project-ref].supabase.co/functions/v1/report-issue
```

**Capabilities:**
- ✅ Form validation
- ✅ Database storage
- ✅ Email notifications via Resend
- ✅ Error handling
- ✅ CORS support
- ✅ Graceful degradation

**Next Steps:**
1. Deploy the function using the commands above
2. Set environment secrets
3. Update frontend to use edge function URL
4. Test the integration
5. Monitor logs and metrics

For support, check Supabase documentation at https://supabase.com/docs/guides/functions
