# Email Configuration Guide

## 📧 Resend Email Setup

### ✅ Current Status (Testing Phase)
- **From Email**: `noreply@aris-vn.com` (placeholder, update after domain verification)
- **To Email**: `hy.ntk@aris-vn.com` (your Resend account email)
- **Status**: ✓ Testing mode active - emails send to account owner only

---

## 🔧 Setup Steps

### 1. **Get Resend API Key**
```bash
# Sign up at https://resend.com
# Get API key from Dashboard → API Keys
# Add to .env.local:
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
```

### 2. **Verify Your Domain (For Production)**
This allows sending emails to ANY recipient, not just your account.

#### Step-by-step:
1. Go to https://resend.com/domains
2. Click **"Add Domain"**
3. Enter your domain: `aris-vn.com`
4. Resend will generate DNS records (CNAME, MX, TXT)
5. Add these records to your DNS provider (GoDaddy, Namecheap, Route53, etc.)
6. Click **"Verify"** - usually takes 5-10 minutes

#### Example for Route53 (AWS):
```
Name: mail._domainkey.aris-vn.com
Type: CNAME
Value: [provided by Resend]
TTL: 3600
```

### 3. **Update Environment Variables**

Once domain is verified, update `.env.local`:

```bash
# Testing (current)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
RESEND_FROM_EMAIL=noreply@aris-vn.com
CONTACT_EMAIL_TO=hy.ntk@aris-vn.com

# Production (after domain verification)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
RESEND_FROM_EMAIL=noreply@aris-vn.com
CONTACT_EMAIL_TO=admin@aris-vn.com  # Change to actual admin email
```

---

## 📋 Form Validation Rules

| Field | Required | Rules |
|-------|----------|-------|
| **name** | ✓ Yes | Min 2 chars, Max 100 |
| **email** | ✓ Yes | Valid email format |
| **phone** | ✗ Optional | Phone number format |
| **message** | ✓ Yes | Min 10 chars, Max 5000 |

---

## 🧪 Testing the Contact Form

### Local Testing (Development)
```bash
npm run dev
# Open http://localhost:3000
# Navigate to Contact section
# Fill form and submit
# Check email: hy.ntk@aris-vn.com
```

### Expected Behavior
✅ **Success**:
- Toast: "Đã gửi thông tin! Chúng tôi sẽ liên hệ sớm."
- Form resets automatically
- Email arrives in inbox (may take 1-2 minutes)

❌ **Error**:
- Toast shows error message
- Check console for detailed logs
- Common issues:
  - Invalid form data → validation error shown
  - Resend API down → "Không thể gửi email"
  - Missing env var → "Lỗi không xác định"

---

## 📧 Email Template

Users receive a beautifully formatted HTML email containing:
- Contact person's name
- Their email address
- Phone number (if provided)
- Full message content
- Timestamp in Vietnam timezone
- Reply-to address (set to user's email for easy replies)

---

## 🚀 Production Deployment

### Vercel Deployment
No additional setup needed! Just ensure these env vars are set:

1. Go to Vercel Dashboard → Project Settings → Environment Variables
2. Add:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
   RESEND_FROM_EMAIL=noreply@aris-vn.com
   CONTACT_EMAIL_TO=admin@aris-vn.com
   ```
3. Redeploy

### Security Notes
- ✅ All validation happens on server (secure)
- ✅ API key never exposed to client
- ✅ Zod schema prevents invalid data
- ✅ Rate limiting: Consider adding in production
- ✅ SPAM protection: Consider adding reCAPTCHA v3 later

---

## 🐛 Troubleshooting

### "You can only send testing emails to your own email address"
**Cause**: Domain not verified in Resend  
**Fix**: Verify domain at resend.com/domains

### "RESEND_API_KEY is missing"
**Cause**: Env var not set  
**Fix**: Add to `.env.local`:
```bash
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
```

### Email not arriving
**Cause**: Spam folder or API rate limit  
**Fix**: Check spam folder, wait 5 minutes, try again

### Form validation fails silently
**Cause**: Invalid form data  
**Fix**: Check browser console for error details

---

## 📚 Useful Links
- Resend Docs: https://resend.com/docs
- Email Templates: https://resend.com/templates
- Domain Setup: https://resend.com/docs/applications/domain-verification
