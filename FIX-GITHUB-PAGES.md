# Fix GitHub Pages Deployment Error

## Problem
The workflow is failing with:
```
Error: Failed to create deployment (status: 404)
HttpError: Not Found
```

## Root Cause
GitHub Pages is not enabled on the repository yet. It needs to be manually enabled first.

---

## ✅ Solution: Enable GitHub Pages

### Step 1: Go to Repository Settings
Open this URL in your browser:
```
https://github.com/nazary475/haal/settings/pages
```

### Step 2: Configure GitHub Pages

1. **Under "Build and deployment":**
   - **Source**: Select **"GitHub Actions"**
   
2. **Scroll down to "Custom domain" section:**
   - Enter: `haal-lab.solutions`
   - Click **"Save"**
   
3. **Wait for DNS check** (can take a few minutes)

4. **Once verified:**
   - ☑️ Check **"Enforce HTTPS"**

### Step 3: Re-run the Failed Workflow

1. Go to: https://github.com/nazary475/haal/actions
2. Click on the failed workflow run
3. Click **"Re-run all jobs"**

The deployment should now succeed!

---

## Expected Result

After enabling GitHub Pages, you should see:

✅ **Workflow passes successfully**
✅ **Site deployed to**: https://nazary475.github.io/haal/
✅ **Custom domain**: https://haal-lab.solutions (after DNS setup)

---

## Visual Guide

### What to Select in Settings:

```
┌─────────────────────────────────────────┐
│  Build and deployment                   │
├─────────────────────────────────────────┤
│  Source:                                │
│  ┌─────────────────────────────────┐   │
│  │ GitHub Actions              ◄── │   │ ← Select this!
│  └─────────────────────────────────┘   │
│                                         │
│  Your site is live at:                  │
│  https://nazary475.github.io/haal/      │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  Custom domain                          │
├─────────────────────────────────────────┤
│  ┌─────────────────────────────────┐   │
│  │ haal-lab.solutions          [✓] │   │ ← Enter your domain
│  └─────────────────────────────────┘   │
│                                         │
│  ☑ Enforce HTTPS                        │ ← Check after DNS verifies
└─────────────────────────────────────────┘
```

---

## Troubleshooting

### Issue: "DNS check failed"
**Solution:**
- Wait a few minutes and try again
- Make sure Cloudflare DNS is set up (see CLOUDFLARE-SETUP.md)
- You can still enable Pages - just can't enforce HTTPS yet

### Issue: Workflow still fails after enabling Pages
**Solution:**
1. Check workflow permissions:
   - Go to: Settings → Actions → General
   - Under "Workflow permissions":
     - Select: **"Read and write permissions"**
     - Check: ☑️ "Allow GitHub Actions to create and approve pull requests"
   - Click **"Save"**

2. Re-run the workflow

### Issue: "CNAME already taken"
**Solution:**
- The domain might be used by another repo
- Go to the old repo and remove the custom domain
- Then try again in this repo

---

## Next Steps After Successful Deployment

1. ✅ Complete Cloudflare setup (see CLOUDFLARE-SETUP.md)
2. ✅ Test website: https://haal-lab.solutions
3. ✅ Submit sitemap to Google Search Console
4. ✅ Verify all pages load correctly
5. ✅ Test all 5 language versions (en, de, fr, es, it)

---

## Quick Links

- **Repository Settings**: https://github.com/nazary475/haal/settings
- **GitHub Pages Settings**: https://github.com/nazary475/haal/settings/pages
- **Actions/Workflows**: https://github.com/nazary475/haal/actions
- **Cloudflare Setup Guide**: See CLOUDFLARE-SETUP.md
- **Quick Setup**: See QUICK-CLOUDFLARE-SETUP.md

---

**Last Updated**: July 14, 2026
