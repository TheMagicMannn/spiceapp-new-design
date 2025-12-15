# Supabase Setup Diagnostic & Fix

## Current Issue
"Failed to send a request to the Edge Function" error when submitting forms.

## Root Cause
The Supabase client is using **placeholder values** because the actual Supabase Anon Key is not set in the environment variables.

### Check Environment Variables

**File:** `/app/frontend/.env`

```bash
VITE_SUPABASE_PROJECT_ID="rvpkcwskkovqhfwwrdeq"  ✅ CORRECT
VITE_SUPABASE_URL="https://rvpkcwskkovqhfwwrdeq.supabase.co"  ✅ CORRECT
VITE_SUPABASE_PUBLISHABLE_KEY="YOUR_SUPABASE_ANON_KEY_HERE"  ❌ PLACEHOLDER!
```

## How to Get Your Supabase Anon Key

### Step 1: Go to Supabase Dashboard
Visit: https://supabase.com/dashboard/project/rvpkcwskkovqhfwwrdeq

### Step 2: Navigate to API Settings
1. Click on your project: `rvpkcwskkovqhfwwrdeq`
2. Go to **Settings** (gear icon in left sidebar)
3. Click **API**

### Step 3: Copy the Anon/Public Key
You'll see two keys:
- **anon public** (this is what you need)
- service_role (don't use this in frontend!)

Copy the **anon public** key.

### Step 4: Update Environment Variables

#### For Local Development
Update `/app/frontend/.env`:
```bash
VITE_SUPABASE_PUBLISHABLE_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.your-actual-key-here"
```

#### For Vercel Deployment
1. Go to Vercel Dashboard
2. Your Project → Settings → Environment Variables
3. Update or add:
   ```
   Name: VITE_SUPABASE_PUBLISHABLE_KEY
   Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.your-actual-key-here
   ```
4. Select all environments (Production, Preview, Development)
5. Save
6. Redeploy

## Verify Supabase Edge Functions Are Deployed

### Check if Functions Exist
1. Go to Supabase Dashboard
2. Click **Edge Functions** in left sidebar
3. You should see:
   - ✅ `join-waitlist`
   - ✅ `send-contact`
   - ✅ `analyze-bdsm-quiz`

### If Functions Are Missing, Deploy Them

```bash
# Navigate to supabase directory
cd /app/supabase

# Login to Supabase CLI
supabase login

# Link your project
supabase link --project-ref rvpkcwskkovqhfwwrdeq

# Deploy all functions
supabase functions deploy join-waitlist
supabase functions deploy send-contact
supabase functions deploy analyze-bdsm-quiz
```

## Set Supabase Secrets

Your edge functions need these environment variables:

```bash
# Set Resend API key
supabase secrets set RESEND_API_KEY=re_J68Uf9Xh_9tDQvAoS5DwcxJ7YrJEC8xKs

# Set Emergent LLM key
supabase secrets set EMERGENT_LLM_KEY=sk-emergent-33e28B9B9F284Ab71F
```

## Verify Database Schema

Make sure database tables exist:

```bash
# Run migrations
supabase db push
```

Or manually check in Supabase Dashboard → Table Editor:
- ✅ `waitlist` table
- ✅ `contact_messages` table
- ✅ `quiz_results` table

## Test Edge Functions Directly

Once deployed, test with curl:

### Test join-waitlist
```bash
curl -i --location --request POST \
  'https://rvpkcwskkovqhfwwrdeq.supabase.co/functions/v1/join-waitlist' \
  --header 'Authorization: Bearer YOUR_ANON_KEY' \
  --header 'Content-Type: application/json' \
  --data '{"email":"test@example.com","source":"test"}'
```

### Test send-contact
```bash
curl -i --location --request POST \
  'https://rvpkcwskkovqhfwwrdeq.supabase.co/functions/v1/send-contact' \
  --header 'Authorization: Bearer YOUR_ANON_KEY' \
  --header 'Content-Type: application/json' \
  --data '{"name":"Test","email":"test@example.com","subject":"Test","message":"Test message"}'
```

Expected response: `200 OK` with JSON body

## Debugging Checklist

### Frontend Issues
- [ ] `VITE_SUPABASE_PUBLISHABLE_KEY` is set (not placeholder)
- [ ] `VITE_SUPABASE_URL` is correct
- [ ] Frontend rebuilt after changing .env: `yarn build`
- [ ] Browser cache cleared (hard refresh with Ctrl+Shift+R)
- [ ] No console errors about "placeholder.supabase.co"

### Supabase Issues
- [ ] Edge functions are deployed
- [ ] Secrets are set (RESEND_API_KEY, EMERGENT_LLM_KEY)
- [ ] Database tables exist
- [ ] Migrations applied successfully
- [ ] Functions show up in Supabase dashboard

### Network Issues
- [ ] Check browser DevTools → Network tab
- [ ] Look for requests to `supabase.co/functions/v1/`
- [ ] Check response status (should be 200, not 404 or 401)
- [ ] Verify request payload is correct

## Common Errors & Solutions

### Error: "Failed to send a request to the Edge Function"
**Cause:** Invalid Supabase credentials or functions not deployed
**Fix:** 
1. Get real anon key from Supabase dashboard
2. Update environment variables
3. Deploy edge functions
4. Rebuild frontend

### Error: "Invalid API key"
**Cause:** Wrong anon key or using service_role key
**Fix:** Use the **anon public** key, not service_role

### Error: "Function not found"
**Cause:** Edge functions not deployed
**Fix:** Run `supabase functions deploy <function-name>`

### Error: "CORS error"
**Cause:** Edge function CORS headers misconfigured
**Fix:** Edge functions already have correct CORS headers, this shouldn't happen

### Error: "Internal server error" (500)
**Cause:** Missing secrets (RESEND_API_KEY, EMERGENT_LLM_KEY)
**Fix:** Set secrets in Supabase: `supabase secrets set KEY=value`

## Quick Fix for Testing (Temporary)

If you want to test locally without Supabase while waiting:

**Option 1:** Use local backend
Update files to use FastAPI backend temporarily (see previous backend code).

**Option 2:** Mock the functions
Add this to your component for testing:

```typescript
// Temporary mock for testing
const mockSupabaseFunction = async (name: string, body: any) => {
  console.log(`Mock calling ${name}:`, body);
  return { 
    data: { success: true, message: 'Mock success' }, 
    error: null 
  };
};

// Replace supabase.functions.invoke with mockSupabaseFunction
```

## After Setup Checklist

- [ ] Forms submit without errors
- [ ] Emails are received (check spam folder)
- [ ] Data appears in Supabase tables
- [ ] Quiz analysis works and returns results
- [ ] No console errors in browser

## Support Links

- Supabase Dashboard: https://supabase.com/dashboard/project/rvpkcwskkovqhfwwrdeq
- Supabase Docs: https://supabase.com/docs
- Edge Functions Docs: https://supabase.com/docs/guides/functions
- Resend Docs: https://resend.com/docs

---

## Summary

**The Issue:** Placeholder Supabase key in environment variables

**The Fix:**
1. Get real anon key from Supabase dashboard (Settings → API)
2. Update `VITE_SUPABASE_PUBLISHABLE_KEY` in `.env` and Vercel
3. Deploy edge functions if not already deployed
4. Set secrets for RESEND_API_KEY and EMERGENT_LLM_KEY
5. Rebuild and redeploy

**Priority:** HIGH - App won't work until this is fixed!
