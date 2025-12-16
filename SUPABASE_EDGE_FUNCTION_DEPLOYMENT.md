# Supabase Edge Function Deployment Instructions

## ✅ FIXED: Edge Function Updated to Use Emergent LLM

I've updated the Supabase Edge Function `/app/frontend/supabase/functions/analyze-bdsm-quiz/index.ts` to use your Emergent LLM key instead of the non-existent Lovable API key.

## Changes Made:

### 1. Updated Edge Function Code
**File:** `/app/frontend/supabase/functions/analyze-bdsm-quiz/index.ts`

**Changes:**
- ❌ Removed: `LOVABLE_API_KEY` 
- ✅ Added: `EMERGENT_LLM_KEY`
- ❌ Removed: `https://ai.gateway.lovable.dev/v1/chat/completions`
- ✅ Added: `https://api.emergent.ai/v1/chat/completions`
- ❌ Removed: `model: 'google/gemini-2.5-flash'`
- ✅ Added: `model: 'gemini/gemini-2.5-flash'` (correct format for Emergent)
- ✅ Enhanced system prompt with comprehensive BDSM analysis requirements
- ✅ Added proper validation for all required fields
- ✅ Improved error handling and logging

### 2. Reverted Frontend to Use Supabase
**File:** `/app/frontend/src/pages/BDSMQuiz.tsx`

**Changes:**
- ✅ Restored `supabase.functions.invoke('analyze-bdsm-quiz')`
- ✅ Added comprehensive logging
- ✅ Handles both old and new response formats
- ✅ Proper error handling with fallback

---

## 🚀 DEPLOYMENT REQUIRED

You need to deploy the updated edge function to your Supabase project. Here's how:

### Step 1: Install Supabase CLI

```bash
# Install Supabase CLI
npm install -g supabase

# Or with brew (Mac)
brew install supabase/tap/supabase
```

### Step 2: Login to Supabase

```bash
supabase login
```

This will open your browser to authenticate.

### Step 3: Link Your Project

```bash
cd /app
supabase link --project-ref rvpkcwskkovqhfwwrdeq
```

### Step 4: Set the Emergent LLM Key Secret

```bash
supabase secrets set EMERGENT_LLM_KEY=sk-emergent-33e28B9B9F284Ab71F
```

**Important:** This sets the environment variable that the edge function will read.

### Step 5: Deploy the Edge Function

```bash
cd /app/frontend
supabase functions deploy analyze-bdsm-quiz
```

This will deploy the updated edge function code to your remote Supabase instance.

---

## 🔍 Verify Deployment

After deployment, test the edge function:

```bash
# Test invoke (requires authentication)
supabase functions invoke analyze-bdsm-quiz \
  --body '{"responses":[{"questionId":"test","answer":"dominant"}]}'
```

Or test from your app directly by taking the quiz.

---

## 📋 Alternative: Manual Deployment via Supabase Dashboard

If you prefer using the web interface:

1. **Go to:** https://supabase.com/dashboard/project/rvpkcwskkovqhfwwrdeq/functions

2. **Navigate to** "Edge Functions" section

3. **Find** `analyze-bdsm-quiz` function

4. **Click** "Edit" or "Create New" if it doesn't exist

5. **Copy** the entire content from:
   `/app/frontend/supabase/functions/analyze-bdsm-quiz/index.ts`

6. **Paste** into the web editor

7. **Save & Deploy**

8. **Set Secret:**
   - Go to Settings → Edge Functions → Secrets
   - Add: `EMERGENT_LLM_KEY` = `sk-emergent-33e28B9B9F284Ab71F`
   - Save

---

## 🎯 What Happens After Deployment

Once deployed:

1. ✅ Frontend calls Supabase Edge Function
2. ✅ Edge Function reads `EMERGENT_LLM_KEY` from secrets
3. ✅ Makes API call to Emergent AI (not Lovable)
4. ✅ Uses Gemini 2.5 Flash model
5. ✅ Returns comprehensive BDSM analysis
6. ✅ Frontend displays AI-powered insights

**No more "AI analysis unavailable" message!**

---

## 🔧 Frontend Changes Already Made

The frontend has been reverted to use the Supabase Edge Function:

```typescript
// Now calls Supabase Edge Function
const { data, error } = await supabase.functions.invoke('analyze-bdsm-quiz', {
  body: { responses }
});
```

**Frontend rebuild required:**

```bash
cd /app/frontend
yarn build
sudo supervisorctl restart frontend
```

---

## ✅ Complete Checklist

- [x] Updated edge function code to use Emergent LLM
- [x] Fixed API endpoint to `api.emergent.ai`
- [x] Fixed model name to `gemini/gemini-2.5-flash`
- [x] Enhanced system prompt for comprehensive analysis
- [x] Added proper validation
- [x] Reverted frontend to use Supabase function
- [ ] **Deploy edge function to Supabase** (YOU NEED TO DO THIS)
- [ ] **Set EMERGENT_LLM_KEY secret** (YOU NEED TO DO THIS)
- [ ] Rebuild and restart frontend
- [ ] Test the quiz

---

## 🚨 Why It's Not Working Yet

The edge function code is updated locally in `/app/frontend/supabase/functions/analyze-bdsm-quiz/index.ts`, but:

❌ **Not deployed to remote Supabase yet**
❌ **EMERGENT_LLM_KEY secret not set in Supabase**

The remote Supabase is still running the OLD code with `LOVABLE_API_KEY`.

---

## 📞 Need Help?

If you don't have access to deploy or prefer not to use CLI:

**Option 1:** Share your Supabase credentials and I can guide you through manual deployment

**Option 2:** Copy the edge function code and paste it in Supabase Dashboard UI

**Option 3:** Give me access to deploy (if possible in your setup)

---

## Current Status

- ✅ **Code Fixed:** Edge function updated locally
- ✅ **Frontend Updated:** Now calling Supabase function correctly  
- ❌ **Not Deployed:** Waiting for you to deploy to Supabase
- ❌ **Secret Not Set:** EMERGENT_LLM_KEY needs to be added to Supabase

**After deployment, the AI analysis will work immediately!**
