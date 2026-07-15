# Formspree Setup Guide for HAAL Lab

## Step 1: Create Formspree Account

1. Go to [https://formspree.io](https://formspree.io)
2. Click "Get Started" or "Sign Up"
3. Create account with your work email: contact@haal-lab.solutions
4. Verify your email address

## Step 2: Create New Form

1. After login, click "+ New Form"
2. **Form Name:** "HAAL Lab AI Project Inquiries"
3. **Email:** contact@haal-lab.solutions (where submissions go)
4. Click "Create Form"

## Step 3: Configure Form Settings

### Basic Settings:
- **Form Name:** HAAL Lab AI Project Inquiries
- **Notification Email:** contact@haal-lab.solutions
- **Reply-To Field:** email (the field name in your form)

### Spam Protection (Recommended):
1. Go to "Settings" → "Spam Protection"
2. Enable reCAPTCHA v3 or hCaptcha
3. Or enable "Honeypot Protection" (simpler, no CAPTCHA UI)

### Notifications:
1. Go to "Integrations" → "Email Notifications"
2. Configure:
   - Subject: "New AI Project Inquiry from {fullName}"
   - Custom template with all form fields
   - Enable instant notifications

## Step 4: Get Your Form Endpoint

1. In your form dashboard, find the **Endpoint URL**
2. It looks like: `https://formspree.io/f/xyzabc123`
3. Copy this URL

## Step 5: Add to Your Project

Create a `.env.local` file in your project root:

```bash
# .env.local
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID_HERE
```

**⚠️ IMPORTANT:** Replace `YOUR_FORM_ID_HERE` with your actual form ID

## Step 6: Update .gitignore

Make sure `.env.local` is in your `.gitignore`:

```gitignore
# Environment variables
.env.local
.env*.local
```

## Step 7: For GitHub Pages Deployment

Since GitHub Pages is static, you have two options:

### Option A: Use GitHub Secrets (Recommended)
1. Go to your GitHub repo → Settings → Secrets and variables → Actions
2. Add new secret:
   - Name: `NEXT_PUBLIC_FORMSPREE_ENDPOINT`
   - Value: `https://formspree.io/f/YOUR_FORM_ID`

3. Update your `.github/workflows/deploy.yml`:

```yaml
- name: Build
  run: npm run build
  env:
    NEXT_PUBLIC_FORMSPREE_ENDPOINT: ${{ secrets.NEXT_PUBLIC_FORMSPREE_ENDPOINT }}
```

### Option B: Hardcode (Less Secure, but Simple)
Directly in `enterprise-contact-form.tsx`:

```typescript
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";
```

## Step 8: Test Your Form

### Local Testing:
```bash
npm run dev
```

1. Navigate to http://localhost:3000/en/contact
2. Fill out the form with test data
3. Submit
4. Check contact@haal-lab.solutions for the email
5. Verify in Formspree dashboard under "Submissions"

### Production Testing:
1. Deploy to GitHub Pages
2. Test form submission
3. Verify email receipt

## Step 9: Monitor Submissions

Access your Formspree dashboard to:
- View all submissions
- Export to CSV
- Set up webhooks for CRM integration
- Monitor spam blocks
- Review analytics

## Pricing & Upgrades

### Current Free Tier:
- 50 submissions/month
- Enough for 1-2 inquiries per day

### When to Upgrade:
If you receive more than 50 inquiries/month, upgrade to:
- **Basic ($10/mo):** 1,000 submissions
- **Pro ($40/mo):** 10,000 submissions
- **Business ($99/mo):** Custom limits + priority support

## Email Template Customization

In Formspree dashboard, customize email notifications:

**Subject Line:**
```
New AI Project Inquiry from {fullName} at {company}
```

**Email Body Template:**
```
New AI Project Inquiry Received

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CONTACT INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name: {fullName}
Email: {email}
Company: {company}
Role: {role}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PROJECT DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Organization Type: {organizationType}
Project Interest: {projectInterest}
Data Environment: {dataEnvironment}
Expected Timeline: {timeline}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PROJECT DESCRIPTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

{projectDescription}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Received: {date}
Reply to: {email}
```

## Troubleshooting

### Form not submitting?
1. Check browser console for errors
2. Verify `NEXT_PUBLIC_FORMSPREE_ENDPOINT` is set correctly
3. Ensure endpoint starts with `https://formspree.io/f/`
4. Check Formspree dashboard for blocked submissions

### Not receiving emails?
1. Check spam folder
2. Verify email address in Formspree settings
3. Confirm email is verified in Formspree
4. Check Formspree notification settings

### Getting spam submissions?
1. Enable reCAPTCHA or hCaptcha
2. Use honeypot protection
3. Add email validation
4. Use Formspree's spam filtering

## Alternative: Basin

If Formspree doesn't work for you, try [Basin](https://usebasin.com):
- Similar features
- Same pricing structure
- Easy migration

Setup is identical - just replace the endpoint URL.

## Support

- Formspree Docs: https://help.formspree.io
- Support Email: support@formspree.io
- Status Page: https://status.formspree.io

---

**Ready to go?** Sign up at [formspree.io](https://formspree.io) and start receiving inquiries in 5 minutes!
