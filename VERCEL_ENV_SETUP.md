# Vercel Environment Variables Setup Guide
# Fix 401 Error - Report Issue Form

## 🚨 Problem

Your Vercel deployment is using placeholder Supabase keys, causing 401 Unauthorized errors.

**Evidence from Supabase logs:**
```json
"apikey": {
  "error": "invalid",
  "prefix": "placeholde"  // <-- Placeholder key!
}
```

---

## ✅ Solution: Add Environment Variables to Vercel

### Step 1: Go to Vercel Dashboard

1. Open https://vercel.com/dashboard
2. Select your SPICE project
3. Click **Settings** tab
4. Click **Environment Variables** in the left sidebar

### Step 2: Add Required Variables

Add these **3 environment variables**:

#### Variable 1: VITE_SUPABASE_URL
```
Key: VITE_SUPABASE_URL
Value: https://rvpkcwskkovqhfwwrdeq.supabase.co
Environment: Production, Preview, Development (select all)
```

#### Variable 2: VITE_SUPABASE_PUBLISHABLE_KEY
```
Key: VITE_SUPABASE_PUBLISHABLE_KEY
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ2cGtjd3Nra292cWhmd3dyZGVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA1NTQ2NzMsImV4cCI6MjA3NjEzMDY3M30.MG_ZONRyNCF5Dv3NTP0nLmItEkPVym1x4mrzeZ9_EO8
Environment: Production, Preview, Development (select all)
```

#### Variable 3: REACT_APP_BACKEND_URL (Optional - for backend fallback)
```
Key: REACT_APP_BACKEND_URL
Value: https://your-backend-url.com/api
Environment: Production, Preview, Development (select all)
```

### Step 3: Redeploy

After adding the variables, you need to redeploy:

**Option A: Redeploy from Vercel Dashboard**
1. Go to **Deployments** tab
2. Find your latest deployment
3. Click the **three dots** menu
4. Click **Redeploy**

**Option B: Push a new commit**
```bash
git commit --allow-empty -m "Trigger Vercel redeploy"
git push
```

**Option C: Use Vercel CLI**
```bash
vercel --prod
```

---

## 📋 Quick Copy-Paste Values

### VITE_SUPABASE_URL
```
https://rvpkcwskkovqhfwwrdeq.supabase.co
```

### VITE_SUPABASE_PUBLISHABLE_KEY
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ2cGtjd3Nra292cWhmd3dyZGVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA1NTQ2NzMsImV4cCI6MjA3NjEzMDY3M30.MG_ZONRyNCF5Dv3NTP0nLmItEkPVym1x4mrzeZ9_EO8
```

---

## 🖼️ Visual Guide

### Adding Environment Variables in Vercel:

1. **Settings Tab**
   ```
   [Project] → [Settings] → [Environment Variables]
   ```

2. **Add Variable Form**
   ```
   Key:   VITE_SUPABASE_URL
   Value: https://rvpkcwskkovqhfwwrdeq.supabase.co
   
   [x] Production
   [x] Preview  
   [x] Development
   
   [Add] button
   ```

3. **Repeat for each variable**

---

## 🔍 Verify Variables Are Set

After adding variables, check they're configured:

1. Go to **Settings** → **Environment Variables**
2. You should see:
   - ✅ `VITE_SUPABASE_URL`
   - ✅ `VITE_SUPABASE_PUBLISHABLE_KEY`
3. Each should show **Production, Preview, Development**

---

## 🧪 Test After Redeployment

1. **Wait for deployment to complete** (usually 2-3 minutes)
2. **Clear browser cache** or use incognito mode
3. **Visit your Vercel URL**: https://your-project.vercel.app
4. **Go to Report Issue page**: `/support/report`
5. **Submit a test report**

**Expected Result:**
- ✅ Form submits successfully
- ✅ Success toast notification
- ✅ No 401 error
- ✅ No placeholder key error

---

## 🐛 Troubleshooting

### Still Getting 401 After Adding Variables?

**1. Check Environment Variables Are Saved**
- Go to Vercel Dashboard → Settings → Environment Variables
- Verify all variables are listed
- Check they're enabled for Production

**2. Force Rebuild**
```bash
# In Vercel Dashboard
Deployments → Latest → Redeploy → Use existing build cache: OFF
```

**3. Check Browser Console**
- Open Developer Tools (F12)
- Go to Console tab
- Look for Supabase errors
- Should NOT see "placeholder" in any logs

**4. Verify Environment Variables in Build Logs**
- Go to Vercel Deployment
- Click on **Build Logs**
- Look for environment variable warnings
- Should see Vite picking up variables

### Variables Not Loading?

**Make sure variable names are EXACT:**
- ❌ `VITE_SUPABASE_URL_` (extra underscore)
- ❌ `vite_supabase_url` (wrong case)
- ✅ `VITE_SUPABASE_URL` (correct)

**Check for typos:**
- `VITE_SUPABASE_PUBLISHABLE_KEY` (not SUPABASE_PUBLIC_KEY)

---

## 📊 Before vs After

### Before (401 Error):
```json
{
  "apikey": {
    "error": "invalid",
    "prefix": "placeholde"
  },
  "status_code": 401
}
```

### After (Success):
```json
{
  "apikey": {
    "hash": "abc123...",
    "prefix": "eyJhbGci"
  },
  "status_code": 200
}
```

---

## ⚡ Quick Fix Checklist

- [ ] Go to Vercel Dashboard
- [ ] Select your project
- [ ] Go to Settings → Environment Variables
- [ ] Add `VITE_SUPABASE_URL`
- [ ] Add `VITE_SUPABASE_PUBLISHABLE_KEY`
- [ ] Select all environments (Production, Preview, Development)
- [ ] Click "Add" for each variable
- [ ] Redeploy the project
- [ ] Wait for deployment to complete
- [ ] Clear browser cache
- [ ] Test the form

---

## 💡 Why This Happens

**Local Development:**
- Reads `.env` file from `/app/frontend/.env`
- Variables automatically available
- Works fine locally

**Vercel Deployment:**
- `.env` files are NOT included in deployment
- Must set variables in Vercel Dashboard
- Each environment (prod/preview/dev) can have different values

**Solution:**
- Add variables to Vercel Dashboard
- They get injected at build time
- Available to your app via `import.meta.env`

---

## 🎉 Summary

**Problem:** Vercel deployment using placeholder Supabase keys  
**Cause:** Environment variables not configured in Vercel  
**Solution:** Add variables to Vercel Dashboard and redeploy  

**Variables Needed:**
1. `VITE_SUPABASE_URL` = https://rvpkcwskkovqhfwwrdeq.supabase.co
2. `VITE_SUPABASE_PUBLISHABLE_KEY` = eyJhbGci... (anon key)

**After fixing:**
- ✅ Form will work on Vercel
- ✅ No more 401 errors
- ✅ Reports submit successfully
- ✅ Emails sent via Resend

---

Need help? Check Vercel docs:
https://vercel.com/docs/projects/environment-variables
