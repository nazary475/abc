# Formspree Quick Start Guide

Your HAAL Lab contact form is **ready for Formspree**! Follow these steps to activate it.

---

## 📋 Prerequisites

- ✅ Contact form is built and ready
- ✅ GitHub Actions workflow is configured
- ✅ You need: a Formspree account (free tier works)

---

## 🚀 Setup Steps (5 Minutes)

### Step 1: Create Formspree Account

1. Go to **[https://formspree.io](https://formspree.io)**
2. Click **"Get Started"** or **"Sign Up"**
3. Create account with: **contact@haal-lab.solutions**
4. Verify your email

---

### Step 2: Create Your Form

1. After login, click **"+ New Form"**
2. Fill in:
   - **Form Name:** `HAAL Lab AI Project Inquiries`
   - **Email:** `contact@haal-lab.solutions`
3. Click **"Create Form"**

---

### Step 3: Get Your Form Endpoint

1. In your form dashboard, you'll see an **Endpoint URL**
2. It looks like: `https://formspree.io/f/xyzabc123`
3. **Copy this URL** (you'll need it in the next steps)

---

### Step 4: Configure for Local Development

Create a `.env.local` file in your project root:

```bash
# Copy from .env.local.example
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID_HERE
```

**Replace `YOUR_FORM_ID_HERE`** with your actual form ID from Step 3.

**Test locally:**
```bash
npm run dev
# or
bun dev
```

Visit `http://localhost:3000/en/contact` and test the form!

---

### Step 5: Configure for GitHub Pages (Production)

1. Go to your **GitHub repository**
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **"New repository secret"**
4. Add:
   - **Name:** `NEXT_PUBLIC_FORMSPREE_ENDPOINT`
   - **Value:** `https://formspree.io/f/YOUR_FORM_ID_HERE`
5. Click **"Add secret"**

---

### Step 6: Deploy

```bash
git add .
git commit -m "Configure Formspree for contact form"
git push origin main
```

GitHub Actions will automatically:
- Build your site with the Formspree endpoint
- Deploy to GitHub Pages
- Your form will be live!

---

## ✅ Verify It Works

### Test Production Form:
1. Visit: **https://haal-lab.solutions/en/contact**
2. Fill out the form with test data
3. Submit
4. Check **contact@haal-lab.solutions** for the email
5. Check **Formspree dashboard** under "Submissions"

---

## 🔧 Optional: Configure Formspree Settings

### Enable Spam Protection (Recommended)

1. In Formspree dashboard → **Settings** → **Spam Protection**
2. Choose one:
   - **reCAPTCHA v3** (invisible, best UX)
   - **hCaptcha** (privacy-focused)
   - **Honeypot** (simplest, no CAPTCHA UI)

### Customize Email Notifications

1. Go to **Integrations** → **Email Notifications**
2. Customize:

**Subject:**
```
New AI Project Inquiry: {fullName} from {company}
```

**Template:**
```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NEW AI PROJECT INQUIRY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CONTACT DETAILS:
Name: {fullName}
Email: {email}
Company: {company}
Role: {role}

PROJECT INFORMATION:
Organization Type: {organizationType}
Project Interest: {projectInterest}
Data Environment: {dataEnvironment}
Timeline: {timeline}

PROJECT DESCRIPTION:
{projectDescription}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Submitted: {date}
Reply to: {email}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### Add Auto-Reply (Optional)

1. Go to **Settings** → **Auto-Reply**
2. Enable and customize:

**Subject:** `Thank you for contacting HAAL Lab`

**Message:**
```
Hello {fullName},

Thank you for your inquiry about AI engineering services at HAAL Lab.

We have received your project details and our engineering team will review your requirements. You can expect a response within two business days.

In the meantime, feel free to explore:
- Our solutions: https://haal-lab.solutions/en/solutions
- Recent projects: https://haal-lab.solutions/en/projects
- Technical insights: https://haal-lab.solutions/en/research

Best regards,
HAAL Lab Engineering Team

---
This is an automated confirmation. Please do not reply to this email.
For urgent inquiries, contact us directly at contact@haal-lab.solutions
```

---

## 📊 Monitor Submissions

Access your Formspree dashboard to:
- ✅ View all form submissions
- ✅ Export data to CSV
- ✅ Set up webhooks (for CRM integration)
- ✅ Review spam blocks
- ✅ Check submission analytics

---

## 💰 Pricing

### Free Tier (Current):
- ✅ 50 submissions/month
- ✅ Perfect for starting out
- ✅ ~1-2 inquiries per day

### When to Upgrade:
If you receive more than 50 inquiries/month:

- **Basic ($10/month):**
  - 1,000 submissions/month
  - Email support
  
- **Pro ($40/month):**
  - 10,000 submissions/month
  - Priority support
  - Advanced features

- **Business ($99/month):**
  - Custom limits
  - Dedicated support
  - White-label option

---

## 🔍 Troubleshooting

### Form not working locally?

**Check:**
1. `.env.local` file exists in project root
2. Variable is named exactly: `NEXT_PUBLIC_FORMSPREE_ENDPOINT`
3. Value starts with `https://formspree.io/f/`
4. Restart dev server after creating `.env.local`

**Verify:**
```bash
# Should show your endpoint
echo $NEXT_PUBLIC_FORMSPREE_ENDPOINT
```

### Form not working on production?

**Check:**
1. GitHub secret is added correctly
2. Secret name is: `NEXT_PUBLIC_FORMSPREE_ENDPOINT`
3. GitHub Actions build completed successfully
4. Check browser console for errors

**Debug:**
1. Go to GitHub repo → Actions
2. Check latest workflow run
3. Look for build errors

### Not receiving emails?

**Check:**
1. Spam/junk folder
2. Email address in Formspree settings
3. Email is verified in Formspree
4. Notification settings enabled

**Fix:**
1. Formspree dashboard → Settings
2. Verify notification email
3. Check integration settings

### Getting spam submissions?

**Enable protection:**
1. Formspree → Settings → Spam Protection
2. Enable reCAPTCHA or Honeypot
3. Review blocked submissions in dashboard

---

## 🎯 Current Form Configuration

Your form collects:
- ✅ Full Name (required)
- ✅ Work Email (required)
- ✅ Company/Organization (required)
- ✅ Role (required dropdown)
- ✅ Organization Type (required dropdown)
- ✅ Project Interest (required dropdown)
- ✅ Data Environment (required dropdown)
- ✅ Project Description (required textarea)
- ✅ Expected Timeline (optional dropdown)

All fields are properly configured and will be included in email notifications.

---

## 📞 Support

### Formspree Help:
- Documentation: https://help.formspree.io
- Support Email: support@formspree.io
- Status Page: https://status.formspree.io

### Your Setup:
- Contact Email: contact@haal-lab.solutions
- Form Location: /en/contact (and all language variants)
- Fallback: mailto: links (works without Formspree)

---

## ✨ Next Steps

1. ✅ Sign up for Formspree
2. ✅ Create your form
3. ✅ Add endpoint to `.env.local` (local testing)
4. ✅ Add secret to GitHub (production)
5. ✅ Deploy and test
6. ✅ Configure spam protection
7. ✅ Customize email notifications
8. 🎉 Start receiving AI project inquiries!

---

**Questions?** The form is production-ready and will work with or without Formspree (it falls back to mailto: links). Formspree just makes it more professional and easier to manage.

**Ready to launch?** Just add your Formspree endpoint and deploy! 🚀
