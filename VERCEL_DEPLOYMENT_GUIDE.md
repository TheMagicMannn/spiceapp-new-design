# Vercel Deployment Guide - SPICE App

## Overview
Complete guide for deploying the SPICE app to Vercel with proper environment variable configuration.

## Architecture
- **Frontend:** Deployed on Vercel (React + Vite)
- **Backend:** Needs to be deployed separately (FastAPI + MongoDB)
- **No Supabase Edge Functions:** All functionality uses backend API endpoints

## Backend Deployment Options

### Option 1: Deploy Backend on Railway (Recommended)
1. Go to https://railway.app
2. Connect your GitHub repository
3. Create new project from repo
4. Select `/backend` as root directory
5. Railway will auto-detect Python and use `requirements.txt`
6. Add environment variables (see below)
7. Get the deployed URL (e.g., `https://spiceapp-backend-production.up.railway.app`)

### Option 2: Deploy Backend on Render
1. Go to https://render.com
2. Create new Web Service
3. Connect your GitHub repository
4. Set:
   - Root Directory: `backend`
   - Build Command: `pip install -r requirements.txt`
   - Start Command: `uvicorn server:app --host 0.0.0.0 --port $PORT`
5. Add environment variables
6. Deploy and get URL

### Option 3: Use Existing Deployment
Your current backend URL: `https://sti-resources.preview.emergentagent.com`

## Vercel Environment Variables

Go to Vercel Dashboard → Your Project → Settings → Environment Variables

### Required Variables

```bash
# Backend API URL (CRITICAL - Update with your deployed backend URL)
REACT_APP_BACKEND_URL=https://sti-resources.preview.emergentagent.com
VITE_BACKEND_URL=https://sti-resources.preview.emergentagent.com

# Supabase (Optional - only if using Supabase features)
VITE_SUPABASE_PROJECT_ID=rvpkcwskkovqhfwwrdeq
VITE_SUPABASE_URL=https://rvpkcwskkovqhfwwrdeq.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key_here

# Google Analytics (Optional)
VITE_GA_ID=G-9REM6Z20KL

# Visual Edits & Health Check (Optional)
REACT_APP_ENABLE_VISUAL_EDITS=false
ENABLE_HEALTH_CHECK=false
```

### How to Add Variables in Vercel

1. **Go to Project Settings:**
   - Vercel Dashboard → Select Project → Settings → Environment Variables

2. **Add Each Variable:**
   - Click "Add New"
   - Name: `REACT_APP_BACKEND_URL`
   - Value: `https://your-backend-url.com`
   - Environment: Select all (Production, Preview, Development)
   - Click "Save"

3. **Important Variables to Set:**
   - `REACT_APP_BACKEND_URL` - Your backend API URL
   - `VITE_BACKEND_URL` - Same as above (Vite format)

4. **After Adding Variables:**
   - Redeploy your app (Vercel → Deployments → Redeploy)

## Backend Environment Variables

If deploying backend separately, set these:

```bash
# MongoDB
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/
DB_NAME=spice_db

# CORS
CORS_ORIGINS=https://your-vercel-app.vercel.app,https://spiceapp.com

# Emergent LLM Key
EMERGENT_LLM_KEY=sk-emergent-33e28B9B9F284Ab71F
```

## Frontend Configuration

### Build Settings in Vercel

1. **Framework Preset:** Vite
2. **Root Directory:** `frontend`
3. **Build Command:** `yarn build`
4. **Output Directory:** `build`
5. **Install Command:** `yarn install`

### Domain Settings

1. **Custom Domain (Optional):**
   - Vercel → Settings → Domains
   - Add: `spiceapp.com` or `www.spiceapp.com`
   - Follow DNS configuration steps

## API Endpoints Used by Frontend

All these endpoints are now backend API routes (not Supabase Edge Functions):

1. **Quiz Analysis:** `POST /api/analyze-quiz`
2. **Contact Form:** `POST /api/contact`
3. **Waitlist:** `POST /api/waitlist`

## Deployment Checklist

### Pre-Deployment
- [ ] Backend deployed and URL obtained
- [ ] MongoDB database created and accessible
- [ ] Environment variables prepared

### Vercel Setup
- [ ] Project connected to GitHub
- [ ] Root directory set to `frontend`
- [ ] Framework preset: Vite
- [ ] All environment variables added
- [ ] `REACT_APP_BACKEND_URL` set correctly

### Post-Deployment Testing
- [ ] Homepage loads
- [ ] Navigation works
- [ ] Contact form submits successfully
- [ ] Waitlist signup works
- [ ] BDSM Quiz completes and analyzes
- [ ] No console errors

## Common Issues & Solutions

### Issue: "Failed to send request to Edge Function"
**Solution:** Edge functions are not used anymore. Update to latest code which uses backend API endpoints.

### Issue: Backend URL not found (404 errors)
**Solution:** 
1. Check `REACT_APP_BACKEND_URL` in Vercel environment variables
2. Ensure backend is deployed and accessible
3. Test backend URL directly: `https://your-backend-url/api/`

### Issue: CORS errors
**Solution:**
1. Add Vercel URL to backend `CORS_ORIGINS` environment variable
2. Format: `https://your-app.vercel.app,https://custom-domain.com`

### Issue: Quiz analysis fails
**Solution:**
1. Check `EMERGENT_LLM_KEY` is set in backend environment
2. Check backend logs for errors
3. Ensure emergentintegrations library is installed

### Issue: Forms not submitting
**Solution:**
1. Check Network tab in browser DevTools
2. Verify backend URL is correct
3. Check backend is running: `curl https://your-backend-url/api/`

## Environment Variables Quick Reference

### Frontend (Vercel)
```bash
REACT_APP_BACKEND_URL=<your-backend-url>
VITE_BACKEND_URL=<your-backend-url>
VITE_GA_ID=G-9REM6Z20KL
```

### Backend (Railway/Render)
```bash
MONGO_URL=<mongodb-connection-string>
DB_NAME=spice_db
CORS_ORIGINS=https://your-app.vercel.app
EMERGENT_LLM_KEY=sk-emergent-33e28B9B9F284Ab71F
```

## Testing After Deployment

### 1. Test Homepage
```
https://your-app.vercel.app/
```
Should load with particles background, hero section, features, pricing.

### 2. Test Waitlist
1. Go to homepage
2. Enter email in waitlist form
3. Should see success message
4. Check backend logs/database to confirm entry

### 3. Test Contact Form
1. Go to `/contact`
2. Fill out form
3. Submit
4. Should see success message
5. Check backend database for entry

### 4. Test Quiz
1. Go to `/quiz`
2. Complete all 40+ questions
3. Click "Finish Quiz"
4. Should see "Analyzing..." for 5-15 seconds
5. Results should display with AI-generated insights

### 5. Check Console
- Open browser DevTools (F12)
- Check Console tab
- Should have no red errors
- Warnings are OK

## Monitoring

### Vercel Dashboard
- Check deployment status
- View build logs
- Monitor function invocations (if any)

### Backend Monitoring
- Check backend logs for errors
- Monitor API response times
- Track database connections

### Analytics
- Google Analytics dashboard
- Track user flows
- Monitor conversion rates

## Updating Environment Variables

1. **Change Variable:**
   - Vercel → Settings → Environment Variables
   - Click on variable → Edit
   - Update value → Save

2. **Redeploy:**
   - Deployments → Click `...` → Redeploy
   - Or push new commit to trigger auto-deploy

## Security Notes

1. **Never commit `.env` files to GitHub**
2. **Keep API keys in Vercel secrets only**
3. **Rotate keys periodically**
4. **Use different keys for production vs preview**
5. **Monitor API usage and costs**

## Cost Estimates

### Vercel (Frontend)
- **Free Tier:** Sufficient for most use
- **Pro:** $20/month if you need more
- **Bandwidth:** ~100GB/month free

### Backend Hosting
- **Railway:** $5-20/month depending on usage
- **Render:** Free tier available, $7/month for production
- **Fly.io:** Pay-as-you-go, ~$5-10/month

### Emergent LLM Credits
- **Per Quiz:** ~$0.03-0.05
- **1000 quizzes:** ~$30-50
- **Top up as needed**

## Support

### Deployment Issues
1. Check Vercel build logs
2. Check backend logs
3. Test locally first
4. Verify all environment variables

### API Issues
1. Test backend endpoint directly
2. Check CORS configuration
3. Verify request format matches API

### Need Help?
- Vercel Docs: https://vercel.com/docs
- Railway Docs: https://docs.railway.app
- Render Docs: https://render.com/docs

---

## Summary

✅ **Frontend:** Deploy to Vercel with root directory = `frontend`  
✅ **Backend:** Deploy separately (Railway/Render recommended)  
✅ **Environment Variables:** Set in Vercel dashboard  
✅ **No Supabase Functions:** All endpoints are backend API routes  
✅ **Testing:** Test all forms and quiz after deployment  

**Most Important:** Set `REACT_APP_BACKEND_URL` to your deployed backend URL!
