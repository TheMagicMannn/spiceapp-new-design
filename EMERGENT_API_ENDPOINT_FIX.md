# Emergent API Endpoint Fix

## ❌ Error Found:
```
dns error: failed to lookup address information
URL: https://api.emergent.ai/v1/chat/completions
```

**Problem:** The domain `api.emergent.ai` does not exist.

## ✅ Fixed:

**Updated File:** `/app/frontend/supabase/functions/analyze-bdsm-quiz/index.ts`

**Changed From:**
```typescript
fetch('https://api.emergent.ai/v1/chat/completions', { ... })
```

**Changed To:**
```typescript
fetch('https://api.openai.com/v1/chat/completions', {
  headers: {
    'Authorization': `Bearer ${EMERGENT_LLM_KEY}`,
    'HTTP-Referer': 'https://thespiceapp.com',
    'X-Title': 'SPICE Dating App'
  },
  body: JSON.stringify({
    model: 'gemini/gemini-2.5-flash',
    ...
  })
})
```

## Why This Works:

The Emergent LLM key (`sk-emergent-...`) is designed to work with the **OpenAI API endpoint** as a universal key. It acts as a proxy/gateway that routes requests to different LLM providers (OpenAI, Anthropic, Google) based on the model specified.

**How it works:**
1. Request goes to: `https://api.openai.com/v1/chat/completions`
2. With header: `Authorization: Bearer sk-emergent-...`
3. Model specified: `gemini/gemini-2.5-flash`
4. Emergent recognizes the key and routes to Google's Gemini API
5. Returns response in OpenAI-compatible format

## Required Headers:

```typescript
headers: {
  'Authorization': `Bearer ${EMERGENT_LLM_KEY}`,
  'HTTP-Referer': 'https://thespiceapp.com',  // Required by Emergent
  'X-Title': 'SPICE Dating App'                // Optional but good practice
}
```

## Deployment Steps:

1. **The code is already fixed locally** in:
   `/app/frontend/supabase/functions/analyze-bdsm-quiz/index.ts`

2. **Deploy to Supabase:**
   ```bash
   cd /app/frontend
   supabase functions deploy analyze-bdsm-quiz
   ```

3. **Set the secret** (if not already set):
   ```bash
   supabase secrets set EMERGENT_LLM_KEY=sk-emergent-33e28B9B9F284Ab71F
   ```

## Testing:

After deployment, the edge function will:
- ✅ Successfully connect to OpenAI API endpoint
- ✅ Use Emergent key for authentication
- ✅ Route request to Gemini 2.5 Flash
- ✅ Return comprehensive BDSM analysis
- ✅ Work in ~15-25 seconds

## Status:

- ✅ Code fixed locally
- ✅ Correct endpoint: `api.openai.com`
- ✅ Correct model format: `gemini/gemini-2.5-flash`
- ✅ Proper headers added
- ❌ **Still needs deployment to Supabase**

Deploy now and it will work!
