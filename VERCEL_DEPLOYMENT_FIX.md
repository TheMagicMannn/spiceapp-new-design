# Vercel Deployment Fix - "Couldn't find package.json"

## Error Explained
```
error Couldn't find a package.json file in "/vercel/path0"
```

This happens because Vercel is looking for `package.json` in the **root directory**, but your frontend code is in the `/frontend` subdirectory.

## Solution: Configure Root Directory in Vercel

### Method 1: Vercel Dashboard (RECOMMENDED)

1. **Go to your Vercel project:**
   - https://vercel.com/dashboard
   - Select your project (spiceapp)

2. **Go to Project Settings:**
   - Click **Settings** tab
   - Navigate to **General**

3. **Set Root Directory:**
   - Find "Root Directory" section
   - Click **Edit**
   - Enter: `frontend`
   - Click **Save**

4. **Verify Build Settings:**
   - Still in Settings → General
   - Check "Build & Development Settings":
     - Framework Preset: `Vite`
     - Build Command: `yarn build` (or `npm run build`)
     - Output Directory: `build`
     - Install Command: `yarn install` (or `npm install`)

5. **Redeploy:**
   - Go to **Deployments** tab
   - Click on latest deployment
   - Click **⋯** (three dots)
   - Click **Redeploy**

### Method 2: Using vercel.json (Alternative)

If you can't access dashboard settings, the `vercel.json` in the root should work:

```json
{
  "buildCommand": "cd frontend && yarn install && yarn build",
  "outputDirectory": "frontend/build",
  "installCommand": "cd frontend && yarn install",
  "devCommand": "cd frontend && yarn dev"
}
```

**Already created at:** `/app/vercel.json`

This tells Vercel to:
1. Change to frontend directory
2. Install dependencies there
3. Build from there
4. Use frontend/build as output

## Environment Variables Required

Make sure these are set in Vercel → Settings → Environment Variables:

```bash
# Supabase Configuration
VITE_SUPABASE_PROJECT_ID=rvpkcwskkovqhfwwrdeq
VITE_SUPABASE_URL=https://rvpkcwskkovqhfwwrdeq.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=<your-supabase-anon-key>

# Google Analytics (Optional)
VITE_GA_ID=G-9REM6Z20KL

# Other Settings
REACT_APP_ENABLE_VISUAL_EDITS=false
ENABLE_HEALTH_CHECK=false
```

**CRITICAL:** Replace `<your-supabase-anon-key>` with your actual Supabase anon key from:
https://supabase.com/dashboard/project/rvpkcwskkovqhfwwrdeq/settings/api

## Complete Deployment Checklist

### Pre-Deployment
- [ ] Get Supabase anon key
- [ ] Deploy Supabase edge functions (see below)
- [ ] Set Supabase secrets

### Vercel Configuration
- [ ] Root Directory set to `frontend`
- [ ] Framework: Vite
- [ ] All environment variables added
- [ ] Build command: `yarn build`
- [ ] Output directory: `build`

### Supabase Setup
- [ ] Edge functions deployed:
  ```bash
  supabase functions deploy join-waitlist
  supabase functions deploy send-contact
  supabase functions deploy analyze-bdsm-quiz
  ```
- [ ] Secrets set:
  ```bash
  supabase secrets set RESEND_API_KEY=re_J68Uf9Xh_9tDQvAoS5DwcxJ7YrJEC8xKs
  supabase secrets set EMERGENT_LLM_KEY=sk-emergent-33e28B9B9F284Ab71F
  ```
- [ ] Database migrations applied:
  ```bash
  supabase db push
  ```

### Post-Deployment Testing
- [ ] Homepage loads correctly
- [ ] Forms work (waitlist, contact)
- [ ] Quiz completes and analyzes
- [ ] No console errors

## Troubleshooting

### Still Getting "package.json not found"?

**Check 1:** Root Directory setting
- Vercel → Settings → General → Root Directory = `frontend`

**Check 2:** Branch being deployed
- Make sure you're deploying the correct branch with the latest code

**Check 3:** Clear build cache
- Vercel → Deployments → Latest → ⋯ → Redeploy → **Clear build cache**

### Build succeeds but site is blank?

**Check 1:** Environment variables
- All `VITE_*` variables must be set in Vercel

**Check 2:** Supabase anon key
- Must be the real key, not placeholder

**Check 3:** Console errors
- Open browser DevTools (F12) → Console
- Look for errors about Supabase or missing keys

### Forms not working?

**Check 1:** Supabase edge functions deployed
- Verify in Supabase dashboard → Edge Functions

**Check 2:** Secrets set
- RESEND_API_KEY and EMERGENT_LLM_KEY must be set

**Check 3:** Browser console
- Check for error messages about "Failed to send request"

## Project Structure

Your repository structure:
```
spiceapp-c2104650/
├── frontend/              ← THIS is where Vercel should build from
│   ├── src/
│   ├── public/
│   ├── package.json      ← THIS is what Vercel needs
│   ├── vite.config.ts
│   ├── vercel.json
│   └── yarn.lock
├── backend/              ← Ignored by Vercel
├── supabase/             ← Edge functions
└── vercel.json           ← Root config (tells Vercel about frontend/)
```

## Expected Build Output

After fixing, you should see:
```
✓ Running "install" command: `yarn install`...
✓ Running "build" command: `yarn build`...
✓ Building...
✓ Compiled successfully
✓ Deployment ready
```

## Quick Commands Reference

### Deploy Supabase Functions
```bash
cd /app/supabase
supabase login
supabase link --project-ref rvpkcwskkovqhfwwrdeq
supabase functions deploy join-waitlist
supabase functions deploy send-contact
supabase functions deploy analyze-bdsm-quiz
```

### Set Supabase Secrets
```bash
supabase secrets set RESEND_API_KEY=re_J68Uf9Xh_9tDQvAoS5DwcxJ7YrJEC8xKs
supabase secrets set EMERGENT_LLM_KEY=sk-emergent-33e28B9B9F284Ab71F
```

### Apply Database Migrations
```bash
supabase db push
```

### Test Edge Function Locally
```bash
supabase functions serve join-waitlist
```

## Support

- **Vercel Support:** https://vercel.com/docs
- **Supabase Support:** https://supabase.com/docs
- **Project Issues:** Check browser console and Vercel logs

---

## Summary

**Problem:** Vercel looking for package.json in wrong directory  
**Solution:** Set Root Directory to `frontend` in Vercel settings  
**Result:** Build will succeed and deploy correctly  

**Most Important Step:** 
🎯 Vercel Dashboard → Settings → General → Root Directory = `frontend`
