# Supabase Quick Setup Guide

## Step-by-Step Instructions

### Step 1: Run Database Schema

1. **Go to Supabase SQL Editor:**
   - Visit: https://supabase.com/dashboard/project/rvpkcwskkovqhfwwrdeq/sql
   - Or: Dashboard → Your Project → SQL Editor

2. **Create New Query:**
   - Click **"New query"** button

3. **Copy and Paste SQL:**
   - Open `/app/supabase_setup.sql`
   - Copy ALL the content
   - Paste into Supabase SQL Editor

4. **Run the Query:**
   - Click **"Run"** button (or press Ctrl+Enter)
   - Wait for completion (~5 seconds)

5. **Verify Success:**
   - You should see: "✅ SPICE App database setup completed successfully!"
   - Check "Results" tab shows success messages

### Step 2: Verify Tables Created

1. **Go to Table Editor:**
   - Dashboard → Table Editor

2. **Check Tables Exist:**
   - ✅ `waitlist`
   - ✅ `contact_messages`
   - ✅ `quiz_results`

3. **Check Structure:**
   - Click each table
   - Verify columns exist
   - Check indexes (gear icon → Indexes)

### Step 3: Deploy Edge Functions

```bash
# Navigate to supabase directory
cd /app/supabase

# Login to Supabase (if not already)
supabase login

# Link your project
supabase link --project-ref rvpkcwskkovqhfwwrdeq

# Deploy all edge functions
supabase functions deploy join-waitlist
supabase functions deploy send-contact
supabase functions deploy analyze-bdsm-quiz
```

**Expected Output:**
```
✓ Deployed function join-waitlist
✓ Deployed function send-contact
✓ Deployed function analyze-bdsm-quiz
```

### Step 4: Set Edge Function Secrets

```bash
# Set Resend API key for emails
supabase secrets set RESEND_API_KEY=re_J68Uf9Xh_9tDQvAoS5DwcxJ7YrJEC8xKs

# Set Emergent LLM key for quiz AI analysis
supabase secrets set EMERGENT_LLM_KEY=sk-emergent-33e28B9B9F284Ab71F
```

**Verify Secrets:**
```bash
supabase secrets list
```

Should show:
- ✅ RESEND_API_KEY
- ✅ EMERGENT_LLM_KEY

### Step 5: Get Supabase Anon Key

1. **Go to API Settings:**
   - Dashboard → Settings → API
   - Or: https://supabase.com/dashboard/project/rvpkcwskkovqhfwwrdeq/settings/api

2. **Copy Keys:**
   - **Project URL:** `https://rvpkcwskkovqhfwwrdeq.supabase.co`
   - **anon public key:** (copy this - starts with `eyJhbGci...`)

### Step 6: Update Environment Variables

#### For Local Development

Edit `/app/frontend/.env`:
```bash
VITE_SUPABASE_PROJECT_ID="rvpkcwskkovqhfwwrdeq"
VITE_SUPABASE_URL="https://rvpkcwskkovqhfwwrdeq.supabase.co"
VITE_SUPABASE_PUBLISHABLE_KEY="<paste-your-anon-key-here>"
VITE_GA_ID="G-9REM6Z20KL"
```

#### For Vercel Deployment

1. Go to Vercel Dashboard
2. Your Project → Settings → Environment Variables
3. Add/Update these variables:

```
VITE_SUPABASE_PROJECT_ID = rvpkcwskkovqhfwwrdeq
VITE_SUPABASE_URL = https://rvpkcwskkovqhfwwrdeq.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY = <paste-your-anon-key-here>
VITE_GA_ID = G-9REM6Z20KL
```

4. Select all environments (Production, Preview, Development)
5. Save

### Step 7: Test Everything

#### Test 1: Check Edge Functions in Dashboard
1. Dashboard → Edge Functions
2. Verify all 3 functions are listed
3. Check logs for any errors

#### Test 2: Test Edge Function Directly
```bash
curl -X POST \
  'https://rvpkcwskkovqhfwwrdeq.supabase.co/functions/v1/join-waitlist' \
  -H 'Authorization: Bearer YOUR_ANON_KEY' \
  -H 'Content-Type: application/json' \
  -d '{"email":"test@example.com","source":"test"}'
```

Expected response: `{"success":true,...}`

#### Test 3: Test in Application
1. Build and deploy frontend
2. Go to homepage
3. Try joining waitlist
4. Check email inbox for confirmation
5. Verify entry in Supabase Table Editor

## Troubleshooting

### SQL Execution Failed

**Error:** "relation already exists"
- **Solution:** Tables already exist, this is OK. You can skip or drop tables first:
  ```sql
  DROP TABLE IF EXISTS public.waitlist CASCADE;
  DROP TABLE IF EXISTS public.contact_messages CASCADE;
  DROP TABLE IF EXISTS public.quiz_results CASCADE;
  ```
  Then run the setup SQL again.

### Edge Functions Won't Deploy

**Error:** "Not logged in"
- **Solution:** Run `supabase login` first

**Error:** "Project not linked"
- **Solution:** Run `supabase link --project-ref rvpkcwskkovqhfwwrdeq`

**Error:** "Permission denied"
- **Solution:** Make sure you're the project owner in Supabase dashboard

### Secrets Not Working

**Check secrets are set:**
```bash
supabase secrets list
```

**Redeploy functions after setting secrets:**
```bash
supabase functions deploy join-waitlist --no-verify-jwt
```

### Forms Still Not Working

**Check console errors:**
1. Open browser DevTools (F12)
2. Check Console tab for errors
3. Look for "placeholder" or "invalid key" messages

**Verify environment variables:**
- Check they're set in Vercel
- Check they're set correctly (no typos)
- Redeploy after changing

## Verification Checklist

### Database Setup
- [ ] SQL script executed successfully
- [ ] 3 tables created (waitlist, contact_messages, quiz_results)
- [ ] RLS policies enabled
- [ ] Triggers working

### Edge Functions
- [ ] 3 functions deployed (join-waitlist, send-contact, analyze-bdsm-quiz)
- [ ] Functions visible in dashboard
- [ ] Secrets set (RESEND_API_KEY, EMERGENT_LLM_KEY)

### Frontend Configuration
- [ ] Supabase anon key obtained
- [ ] Local .env updated
- [ ] Vercel environment variables set
- [ ] Frontend rebuilt and deployed

### Testing
- [ ] Waitlist form works
- [ ] Contact form works
- [ ] Quiz completes and analyzes
- [ ] Emails are received
- [ ] Data appears in database

## Expected Email Flow

### Waitlist Signup
1. User submits email
2. **User receives:** Welcome email from noreply@thespiceapp.com
3. **Support receives:** Notification at support@thespiceapp.com
4. Entry saved in database

### Contact Form
1. User submits message
2. **User receives:** Confirmation from noreply@thespiceapp.com
3. **Support receives:** Full message at support@thespiceapp.com
4. Entry saved in database

### Quiz Completion
1. User completes quiz
2. AI analyzes responses (via Emergent LLM)
3. Results displayed immediately
4. (Optional) Results saved to database

## Quick Links

- **Supabase Dashboard:** https://supabase.com/dashboard/project/rvpkcwskkovqhfwwrdeq
- **SQL Editor:** https://supabase.com/dashboard/project/rvpkcwskkovqhfwwrdeq/sql
- **Table Editor:** https://supabase.com/dashboard/project/rvpkcwskkovqhfwwrdeq/editor
- **Edge Functions:** https://supabase.com/dashboard/project/rvpkcwskkovqhfwwrdeq/functions
- **API Settings:** https://supabase.com/dashboard/project/rvpkcwskkovqhfwwrdeq/settings/api

## Support

If you encounter issues:
1. Check browser console for errors
2. Check Supabase edge function logs
3. Verify all environment variables are set
4. Check email spam folder
5. Verify Resend API key is valid

---

## Summary

✅ Run SQL file in Supabase SQL Editor  
✅ Deploy 3 edge functions  
✅ Set 2 secrets (RESEND_API_KEY, EMERGENT_LLM_KEY)  
✅ Get and update Supabase anon key  
✅ Deploy to Vercel with correct environment variables  
✅ Test all forms  

**Estimated Setup Time:** 15-20 minutes
