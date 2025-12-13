# Vercel Deployment Setup Guide - Fix Black Screen Issue

## The Black Screen Problem

Your deployment succeeded, but shows a black screen. This happens when Vercel can't find the correct files to serve.

## Solution: Configure Vercel Project Settings

### Step 1: Go to Vercel Project Settings

1. Go to your Vercel dashboard: https://vercel.com/dashboard
2. Select your project: **spiceapp-c2104650**
3. Click on **Settings** tab

### Step 2: Configure Build & Development Settings

In the **Build & Development Settings** section, configure:

#### Root Directory
- **Set to:** `frontend`
- This tells Vercel that your app code is in the `/frontend` subdirectory

#### Framework Preset
- **Set to:** `Vite`
- This automatically configures the right build commands

#### Build Command
- **Should auto-fill to:** `yarn build` or `npm run build`
- If not, manually set: `yarn build`

#### Output Directory  
- **Should auto-fill to:** `build`
- This matches your vite.config.ts setting

#### Install Command
- **Should auto-fill to:** `yarn install`
- If not, manually set: `yarn install`

### Step 3: Environment Variables (Optional)

If you need environment variables in production:

1. Go to **Settings** → **Environment Variables**
2. Add the following (if needed):
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_PUBLISHABLE_KEY`
   - `VITE_GA_ID`
   - Any other `VITE_` prefixed variables

**Important:** Vercel won't read your `.env` file. You must add variables manually in the dashboard.

### Step 4: Redeploy

After saving the settings:

1. Go to **Deployments** tab
2. Click the three dots `...` on the latest deployment
3. Click **Redeploy**
4. Wait for the new deployment to complete

## Alternative: If Settings Don't Work

If the above doesn't work, try this:

### Option A: Move Everything to Root

If Vercel still has issues finding files, you might need to restructure:

```bash
# Move frontend files to root
mv frontend/* ./
mv frontend/.* ./ 2>/dev/null || true
rm -rf frontend backend tests
```

**Note:** This removes the backend and tests, suitable only if deploying frontend only.

### Option B: Use Vercel CLI

Deploy directly using Vercel CLI:

```bash
# Install Vercel CLI globally
npm i -g vercel

# Go to frontend directory
cd frontend

# Deploy
vercel --prod
```

The CLI will automatically detect the correct configuration.

## What Should Work After Setup

✅ Homepage loads at your Vercel URL
✅ All routes work (About, Team, Quiz, etc.)
✅ Assets load correctly (images, CSS, JS)
✅ No console errors

## Troubleshooting

### Still Seeing Black Screen?

1. **Check Browser Console:**
   - Right-click anywhere → Inspect → Console tab
   - Look for errors (red text)
   - Share the errors if any

2. **Check Network Tab:**
   - Right-click anywhere → Inspect → Network tab
   - Reload the page
   - Look for failed requests (red/4xx/5xx status codes)
   - Check if `/assets/index-*.js` and `/assets/index-*.css` load successfully

3. **Check Vercel Build Logs:**
   - Go to Deployments → Click on deployment → View Function Logs
   - Look for any build errors or warnings

### Common Issues & Fixes

| Issue | Solution |
|-------|----------|
| 404 on assets | Root Directory not set to `frontend` |
| White/blank page | JavaScript error - check console |
| CSS not loading | Build output directory wrong |
| Routes show 404 | Missing rewrites configuration |

## Files Structure After Fix

Your GitHub repo should have:

```
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── vite.config.ts
│   ├── vercel.json (optional, can be deleted)
│   └── yarn.lock
├── backend/ (not deployed to Vercel)
├── vercel.json (root config)
└── .vercelignore
```

## Quick Checklist

- [ ] Root Directory set to `frontend` in Vercel settings
- [ ] Framework Preset set to `Vite`
- [ ] Build command is `yarn build`
- [ ] Output directory is `build`
- [ ] Redeployed after changing settings
- [ ] Checked browser console for errors
- [ ] All environment variables added (if using Supabase/GA)

## Need More Help?

Share these details:
1. Your Vercel deployment URL
2. Browser console errors (screenshot)
3. Vercel build logs (if build fails)
4. Network tab showing which files fail to load

---

**Most Common Fix:** Set Root Directory to `frontend` in Vercel Settings, then redeploy!
