# Supabase Setup Guide for SPICE App

## Overview
This directory contains all Supabase configurations, migrations, edge functions, and storage settings for the SPICE application.

## Directory Structure
```
supabase/
├── migrations/           # Database schema migrations
│   └── 001_initial_schema.sql
├── functions/           # Edge Functions (Serverless)
│   ├── join-waitlist/
│   ├── send-contact/
│   └── save-quiz-result/
├── storage/            # Storage bucket configurations
└── config.toml         # Supabase project configuration
```

## Prerequisites
1. Supabase account (https://supabase.com)
2. Supabase CLI installed: `npm install -g supabase`
3. Project already created on Supabase

## Setup Instructions

### 1. Link Your Supabase Project
```bash
cd /app/supabase
supabase login
supabase link --project-ref ikdktebuaipbvrrkkpyb
```

### 2. Run Database Migrations
```bash
# Apply the initial schema
supabase db push

# Or manually run the migration
psql <your-database-url> < migrations/001_initial_schema.sql
```

### 3. Deploy Edge Functions

#### Join Waitlist Function
```bash
supabase functions deploy join-waitlist
```

#### Send Contact Function
```bash
supabase functions deploy send-contact
```

#### Save Quiz Result Function
```bash
supabase functions deploy save-quiz-result
```

#### Deploy All Functions at Once
```bash
supabase functions deploy --no-verify-jwt
```

### 4. Set Environment Variables (Optional)
If your functions need additional environment variables:
```bash
supabase secrets set MY_SECRET=value
```

### 5. Test Edge Functions Locally
```bash
# Start Supabase local development
supabase start

# Test individual function
supabase functions serve join-waitlist --env-file .env.local

# Make test request
curl -i --location --request POST 'http://localhost:54321/functions/v1/join-waitlist' \
  --header 'Authorization: Bearer YOUR_ANON_KEY' \
  --header 'Content-Type: application/json' \
  --data '{"email":"test@example.com","name":"Test User","source":"hero"}'
```

## Database Schema

### Tables Created

#### 1. waitlist
Stores email addresses for product launch notifications.
- `id` (UUID, PK)
- `email` (TEXT, UNIQUE)
- `name` (TEXT)
- `source` (TEXT) - Where they signed up from
- `metadata` (JSONB)
- `created_at` (TIMESTAMP)
- `updated_at` (TIMESTAMP)

**Indexes:**
- `idx_waitlist_email` on email
- `idx_waitlist_created_at` on created_at

**RLS Policies:**
- Anyone can insert
- Users can only read their own entries

#### 2. contact_messages
Stores contact form submissions.
- `id` (UUID, PK)
- `name` (TEXT)
- `email` (TEXT)
- `subject` (TEXT)
- `message` (TEXT)
- `status` (TEXT) - 'new', 'in_progress', 'resolved'
- `metadata` (JSONB)
- `created_at` (TIMESTAMP)
- `updated_at` (TIMESTAMP)

**Indexes:**
- `idx_contact_messages_created_at` on created_at
- `idx_contact_messages_status` on status

**RLS Policies:**
- Anyone can insert
- Only authenticated users can read (admin access)

#### 3. quiz_results
Stores BDSM quiz responses and generated insights.
- `id` (UUID, PK)
- `user_id` (UUID, FK to auth.users)
- `email` (TEXT)
- `responses` (JSONB) - All quiz answers
- `insights` (JSONB) - Generated analysis
- `share_token` (TEXT, UNIQUE) - For public sharing
- `is_public` (BOOLEAN)
- `view_count` (INTEGER)
- `created_at` (TIMESTAMP)
- `updated_at` (TIMESTAMP)

**Indexes:**
- `idx_quiz_results_user_id` on user_id
- `idx_quiz_results_share_token` on share_token
- `idx_quiz_results_created_at` on created_at

**RLS Policies:**
- Anyone can insert
- Users can read their own results
- Anyone can read public results
- Users can update their own results

### Triggers
- `update_updated_at_column()` - Auto-updates `updated_at` on all tables

### Functions
- `increment_quiz_view_count(result_id)` - Increments view count
- `generate_share_token()` - Generates random 12-char token

## Edge Functions

### 1. join-waitlist
**Endpoint:** `/functions/v1/join-waitlist`  
**Method:** POST

**Request Body:**
```json
{
  "email": "user@example.com",
  "name": "John Doe",
  "source": "hero",
  "metadata": {
    "referrer": "facebook"
  }
}
```

**Response:**
```json
{
  "success": true,
  "message": "Successfully joined the waitlist!",
  "data": { ... }
}
```

**Features:**
- Email validation
- Duplicate detection
- Metadata tracking (user agent, timestamp)
- TODO: Welcome email integration

### 2. send-contact
**Endpoint:** `/functions/v1/send-contact`  
**Method:** POST

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "user@example.com",
  "subject": "Partnership Inquiry",
  "message": "I'd like to discuss..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message sent successfully!",
  "data": { ... }
}
```

**Features:**
- Field validation
- Status tracking (new, in_progress, resolved)
- Metadata tracking (user agent, IP, timestamp)
- TODO: Admin notification email
- TODO: Auto-reply to user

### 3. save-quiz-result
**Endpoint:** `/functions/v1/save-quiz-result`  
**Method:** POST

**Request Body:**
```json
{
  "responses": [ ... ],
  "insights": { ... },
  "email": "user@example.com",
  "isPublic": true
}
```

**Response:**
```json
{
  "success": true,
  "message": "Quiz results saved successfully!",
  "data": { ... },
  "shareUrl": "https://app.com/quiz/results/abc123def456"
}
```

**Features:**
- Generates unique share token (12 chars)
- Supports authenticated and anonymous users
- Public/private toggle
- View count tracking
- Returns shareable URL

## Frontend Integration

### Environment Variables
Update `.env` files with Supabase credentials:

```env
# Frontend (.env)
VITE_SUPABASE_URL=https://ikdktebuaipbvrrkkpyb.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=your_anon_key_here
```

### Usage Examples

#### Join Waitlist
```typescript
const { data, error } = await supabase.functions.invoke('join-waitlist', {
  body: {
    email: 'user@example.com',
    name: 'John Doe',
    source: 'quiz'
  }
});
```

#### Send Contact Message
```typescript
const { data, error } = await supabase.functions.invoke('send-contact', {
  body: {
    name: 'John Doe',
    email: 'user@example.com',
    subject: 'Question',
    message: 'How do I...'
  }
});
```

#### Save Quiz Results
```typescript
const { data, error } = await supabase.functions.invoke('save-quiz-result', {
  body: {
    responses: quizResponses,
    insights: generatedInsights,
    isPublic: true
  }
});
```

## Security

### Row Level Security (RLS)
All tables have RLS enabled with appropriate policies:
- Public can insert to waitlist and contact forms
- Users can only read their own data
- Admin access requires authentication

### CORS
All edge functions include CORS headers for cross-origin requests.

### Data Validation
- Email format validation
- Required field checks
- Duplicate email detection (waitlist)

## Monitoring & Analytics

### View Analytics
```sql
-- Total waitlist signups
SELECT COUNT(*) FROM waitlist;

-- Signups by source
SELECT source, COUNT(*) 
FROM waitlist 
GROUP BY source 
ORDER BY COUNT(*) DESC;

-- Recent contact messages
SELECT * 
FROM contact_messages 
WHERE status = 'new' 
ORDER BY created_at DESC;

-- Quiz completion stats
SELECT COUNT(*), 
       COUNT(CASE WHEN is_public THEN 1 END) as public_results,
       SUM(view_count) as total_views
FROM quiz_results;
```

## Troubleshooting

### Edge Function Not Working
1. Check function logs: `supabase functions logs <function-name>`
2. Verify environment variables are set
3. Check CORS headers in request
4. Verify Supabase URL and keys in frontend

### Database Connection Issues
1. Check if migrations ran successfully
2. Verify RLS policies are correct
3. Check if user has correct permissions

### Testing Locally
```bash
# Start local Supabase
supabase start

# Check status
supabase status

# View logs
supabase logs

# Stop local instance
supabase stop
```

## TODO / Future Enhancements

### Email Integration
- [ ] Integrate Resend or SendGrid for emails
- [ ] Send welcome email to waitlist signups
- [ ] Send confirmation to contact form submissions
- [ ] Notify admin of new contact messages

### Storage
- [ ] Set up storage buckets for user avatars
- [ ] Create bucket for quiz result images (for social sharing)

### Analytics
- [ ] Track quiz completion rates
- [ ] A/B test different quiz variations
- [ ] Analyze most common kink combinations

### Admin Dashboard
- [ ] Create admin UI to view waitlist
- [ ] Manage contact messages (mark resolved)
- [ ] View quiz statistics

## Support
For issues or questions:
- Check Supabase documentation: https://supabase.com/docs
- Join Supabase Discord: https://discord.supabase.com
- Open an issue in the project repository

## License
Internal use only for SPICE application.
