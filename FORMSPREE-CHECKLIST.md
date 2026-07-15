# Formspree Setup Checklist

## Quick Reference - Copy & Paste Commands

### 🔧 Local Setup (For Testing)

```bash
# 1. Create .env.local file
echo "NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID" > .env.local

# 2. Test locally
npm run dev
# or
bun dev

# 3. Visit: http://localhost:3000/en/contact
```

---

### 🚀 Production Setup (GitHub Pages)

**GitHub Repository Secret:**
- Name: `NEXT_PUBLIC_FORMSPREE_ENDPOINT`
- Value: `https://formspree.io/f/YOUR_FORM_ID`

**Path:** 
`Settings → Secrets and variables → Actions → New repository secret`

---

### ✅ Setup Checklist

#### Before You Start:
- [ ] Have GitHub repository access
- [ ] Have email: contact@haal-lab.solutions

#### Formspree Account:
- [ ] Sign up at https://formspree.io
- [ ] Verify email address
- [ ] Create new form: "HAAL Lab AI Project Inquiries"
- [ ] Set notification email: contact@haal-lab.solutions
- [ ] Copy form endpoint URL

#### Local Development:
- [ ] Create `.env.local` file in project root
- [ ] Add: `NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_ID`
- [ ] Run `npm run dev` or `bun dev`
- [ ] Test form at: http://localhost:3000/en/contact
- [ ] Verify email received at: contact@haal-lab.solutions
- [ ] Check Formspree dashboard for submission

#### GitHub Pages Deployment:
- [ ] Go to GitHub repo → Settings → Secrets → Actions
- [ ] Create secret: `NEXT_PUBLIC_FORMSPREE_ENDPOINT`
- [ ] Set value: `https://formspree.io/f/YOUR_ID`
- [ ] Commit and push to main branch
- [ ] Wait for GitHub Actions to complete
- [ ] Test form at: https://haal-lab.solutions/en/contact

#### Optional (Recommended):
- [ ] Enable spam protection (reCAPTCHA or Honeypot)
- [ ] Customize email notification template
- [ ] Set up auto-reply message
- [ ] Test in all languages (en, de, fr, es, it)

---

### 🎯 What You Need

**From Formspree:**
```
Endpoint URL: https://formspree.io/f/YOUR_FORM_ID
```

**For Local (.env.local):**
```env
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

**For GitHub (Repository Secret):**
```
Name: NEXT_PUBLIC_FORMSPREE_ENDPOINT
Value: https://formspree.io/f/YOUR_FORM_ID
```

---

### 📧 Test Emails

**Local Test:**
1. Run dev server
2. Fill form with fake data
3. Submit
4. Check: contact@haal-lab.solutions
5. Check: Formspree dashboard

**Production Test:**
1. Visit: https://haal-lab.solutions/en/contact
2. Fill form with test data
3. Submit
4. Check: contact@haal-lab.solutions
5. Verify: Formspree dashboard

---

### 🔍 Verify Setup

**Local:**
```bash
# Check if .env.local exists
ls -la .env.local

# Check if variable is loaded (after dev server starts)
# The form should work without errors
```

**Production:**
```bash
# Check GitHub Actions workflow
# Go to: https://github.com/YOUR_USERNAME/haal-lab/actions

# Look for successful build with:
# "Build static site" step should show:
# "Using Formspree endpoint: https://formspree.io/f/..."
```

---

### ⚠️ Common Issues

**Issue:** Form uses mailto: instead of Formspree
- **Fix:** Check environment variable is set correctly
- **Fix:** Restart dev server after adding .env.local
- **Fix:** Verify GitHub secret name is exact: `NEXT_PUBLIC_FORMSPREE_ENDPOINT`

**Issue:** Not receiving emails
- **Fix:** Check spam folder
- **Fix:** Verify email in Formspree settings
- **Fix:** Check Formspree dashboard → Submissions

**Issue:** Form shows error
- **Fix:** Check Formspree form is active (not archived)
- **Fix:** Verify endpoint URL is correct
- **Fix:** Check browser console for errors

---

### 📊 Form Fields

Your form sends these fields to Formspree:

**Required:**
- `fullName`
- `email`
- `company`
- `role`
- `organizationType`
- `projectInterest`
- `dataEnvironment`
- `projectDescription`

**Optional:**
- `timeline`

All fields will appear in email notifications and Formspree dashboard.

---

### 💰 Cost Tracker

**Current: FREE**
- 50 submissions/month included

**Upgrade when:**
- You hit 50/month (≈2 per day)
- You need webhooks/integrations
- You want priority support

**Next tier: $10/month**
- 1,000 submissions
- Good for 33 inquiries/day

---

### 🎉 Success Criteria

✅ Form works locally
✅ Form works on production
✅ Emails arrive at contact@haal-lab.solutions
✅ Submissions show in Formspree dashboard
✅ No console errors
✅ Mobile form works
✅ All language versions work
✅ Spam protection enabled

---

### 📞 Quick Links

- Formspree Dashboard: https://formspree.io/forms
- Formspree Docs: https://help.formspree.io
- Your Contact Page: https://haal-lab.solutions/en/contact
- GitHub Actions: https://github.com/YOUR_USERNAME/haal-lab/actions

---

**Last Updated:** Ready to configure
**Status:** ✅ All code ready, just needs Formspree endpoint
**Time to Complete:** 5 minutes
