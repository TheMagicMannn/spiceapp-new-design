#!/usr/bin/env python3
"""Test Resend API configuration"""

import os
import resend
from pathlib import Path
from dotenv import load_dotenv

# Load environment variables
ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / 'backend' / '.env')

# Get configuration
resend_api_key = os.environ.get('RESEND_API_KEY')
sender_email = os.environ.get('SENDER_EMAIL', 'onboarding@resend.dev')
support_email = os.environ.get('SUPPORT_EMAIL', 'support@thespiceapp.com')

print(f"Testing Resend API Configuration")
print(f"================================")
print(f"API Key: {resend_api_key[:20]}... (truncated)")
print(f"Sender: {sender_email}")
print(f"Recipient: {support_email}")
print()

if not resend_api_key:
    print("❌ ERROR: RESEND_API_KEY not found in environment")
    exit(1)

# Set API key
resend.api_key = resend_api_key

# Test email send
params = {
    "from": sender_email,
    "to": [support_email],
    "subject": "Test Email - Resend API Verification",
    "html": "<p>This is a test email to verify Resend API configuration.</p>"
}

try:
    print("Attempting to send test email...")
    email_response = resend.Emails.send(params)
    print(f"✅ SUCCESS! Email sent successfully")
    print(f"Email ID: {email_response.get('id')}")
except Exception as e:
    print(f"❌ ERROR: {str(e)}")
    print()
    print("Common issues:")
    print("1. API key is invalid or expired")
    print("2. Domain (thespiceapp.com) is not verified in Resend")
    print("3. Sender email domain must be verified to send emails")
    print()
    print("Solutions:")
    print("- Verify your domain at: https://resend.com/domains")
    print("- Or use Resend's test domain: onboarding@resend.dev")
    print("- Check API key at: https://resend.com/api-keys")
