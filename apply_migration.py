#!/usr/bin/env python3
"""Apply Supabase migrations"""

import os
from pathlib import Path
from dotenv import load_dotenv
from supabase import create_client, Client

# Load environment variables
ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / 'backend' / '.env')

# Get Supabase credentials
supabase_url = os.environ.get('SUPABASE_URL')
supabase_key = os.environ.get('SUPABASE_SERVICE_ROLE_KEY')

if not supabase_url or not supabase_key:
    print("Error: SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set")
    exit(1)

# Create Supabase client
supabase: Client = create_client(supabase_url, supabase_key)

# Read migration file
migration_file = ROOT_DIR / 'supabase' / 'migrations' / '002_issue_reports_table.sql'
with open(migration_file, 'r') as f:
    migration_sql = f.read()

print(f"Applying migration: {migration_file.name}")

try:
    # Execute the migration SQL
    result = supabase.rpc('exec_sql', {'sql': migration_sql}).execute()
    print("✅ Migration applied successfully!")
except Exception as e:
    # If the RPC function doesn't exist, we need to execute it differently
    print(f"Note: {e}")
    print("The table will be created automatically when first used, or you can apply it manually in Supabase SQL Editor")
    print("\nSQL to execute:")
    print(migration_sql)
