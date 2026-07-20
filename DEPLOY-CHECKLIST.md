# Deployment Checklist - SEO Fix

Quick reference for deploying the SEO fixes to production.

---

## Pre-Deployment

- [x] Applied fixes to codebase
- [x] Created `public/index.html` redirect
- [x] Added `scripts/post-build.js`
- [x] Updated `package.json` scripts
- [ ] Tested locally (see below)

---

## Local Testing

```bash
# 1. Clean build
rm -rf out/ .next/

# 2. Build with verification
npm run build

# Expected output:
# ✅ Root index.html already exists
# ✅ .nojekyll file exists
# ✅ All critical pages verified
# ✅ English homepage contains expected content

# 3. Serve locally
npx serve out

# 4. Test in browser
# Open: http://localhost:3000
# Should redirect to: http://localhost:3000/en/
# Should show: "Your AI. Your Data. Your Control."

# 5. Run SEO verification
node scripts/verify-seo.js

# Expected: 19/20 checks passed
```

---

## Deployment

### Option A: GitHub Actions (Recommended)

```bash
git add .
git commit -m "Fix: Add static root redirect for proper SEO/crawler support"
git push origin main

# GitHub Actions will automatically:
# 1. Run npm run build
# 2. Deploy out/ to gh-pages branch
# 3. GitHub Pages serves the updated site
```

### Option B: Manual Deployment

```bash
# 1. Build
npm run build

# 2. Copy out/ to gh-pages branch
git worktree add gh-pages gh-pages
cp -r out/* gh-pages/
cd gh-pages
git add .
git commit -m "Deploy: SEO fixes"
git push origin gh-pages
cd ..
git worktree remove gh-pages
```

---

## Post-Deployment Verification

### 1. Wait for Deployment (2-5 minutes)

GitHub Pages typically takes a few minutes to update.

### 2. Clear Cache

```bash
# Clear your browser cache or use incognito mode
# If using Cloudflare, purge the cache
```

### 3. Test Root Redirect

```bash
# Test that root redirects to /en/
curl -L https://haal-lab.solutions/ | grep -i "Your AI"

# Expected output should include: "Your AI. Your Data. Your Control."
```

### 4. Test Direct Page Load

```bash
# Test English page directly
curl https://haal-lab.solutions/en/ | grep -i "Your AI"

# Should show the same content
```

### 5. Verify in Browser

- [ ] Visit https://haal-lab.solutions
- [ ] Should redirect to https://haal-lab.solutions/en/
- [ ] Should see full content (not "Loading...")
- [ ] Check browser console (F12) - no errors
- [ ] Test all language variants: /de/, /fr/, /es/, /it/

### 6. Test with Crawlers

#### Google
- [ ] Go to [Google Search Console](https://search.google.com/search-console)
- [ ] Use "URL Inspection" tool
- [ ] Enter: `https://haal-lab.solutions/en/`
- [ ] Check: "View crawled page" → Should show full content

#### Rich Results
- [ ] Visit [Google Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Enter: `https://haal-lab.solutions/en/`
- [ ] Verify: Organization, WebSite, FAQPage schemas detected

#### AI Crawlers
- [ ] Check: `https://haal-lab.solutions/llms.txt`
- [ ] Check: `https://haal-lab.solutions/.well-known/ai-plugin.json`
- [ ] Check: `https://haal-lab.solutions/sitemap.xml`

---

## Expected Results

### ✅ Success Indicators

1. **Root URL** (`https://haal-lab.solutions/`)
   - Redirects to `/en/` immediately
   - No "Loading..." visible

2. **Content Pages** (`/en/`, `/de/`, etc.)
   - Full HTML content in page source
   - "Your AI. Your Data. Your Control." visible
   - No client-side rendering delays

3. **Crawler View** (curl/wget)
   - Contains actual content, not "Loading..."
   - Includes all meta tags and structured data

4. **Google Search Console**
   - "Valid" status for indexed pages
   - No "Soft 404" or "Redirect" errors
   - Rich results detected

---

## Troubleshooting

### Problem: Still seeing "Loading..."

**Check 1: Browser Cache**
```bash
# Hard refresh: Ctrl+Shift+R (or Cmd+Shift+R on Mac)
# Or test in incognito mode
```

**Check 2: CDN Cache**
```bash
# If using Cloudflare:
# Login → Caching → Purge Everything
# Wait 2-3 minutes
```

**Check 3: Deployment Status**
```bash
# Check what's actually deployed
curl https://haal-lab.solutions/ > deployed.html
cat deployed.html | head -50

# Should see the redirect HTML from public/index.html
```

### Problem: 404 errors in console

**Check 1: Asset paths**
```bash
# Verify _next directory exists
curl https://haal-lab.solutions/_next/ -I

# Should return: 200 or 403 (not 404)
```

**Check 2: .nojekyll file**
```bash
# Verify file exists
curl https://haal-lab.solutions/.nojekyll -I

# Should return: 200
```

### Problem: Redirect not working

**Check 1: Root HTML**
```bash
curl https://haal-lab.solutions/ > root.html
cat root.html

# Should contain:
# <meta http-equiv="refresh" content="0; url=/en/">
```

**Check 2: JavaScript**
```bash
# Check if JavaScript redirect exists
grep "window.location" root.html

# Should show: window.location.replace('/en/');
```

---

## Rollback Plan (If Needed)

If something goes wrong:

```bash
# 1. Revert changes
git revert HEAD

# 2. Rebuild and deploy
npm run build
# Deploy as usual

# OR manually restore previous build
git checkout gh-pages
git reset --hard <previous-commit-hash>
git push -f origin gh-pages
```

---

## Success Metrics

After 24-48 hours, check:

- [ ] Google Search Console shows no "Soft 404" errors
- [ ] Rich results detected for main pages
- [ ] No increase in bounce rate (Google Analytics)
- [ ] Page load time unchanged or improved
- [ ] All hreflang tags recognized

---

## Next Steps (Optional)

After confirming the fix works:

1. **Monitor Performance**
   - Check Core Web Vitals in Search Console
   - Verify LCP (Largest Contentful Paint) < 2.5s

2. **Submit to Search Engines**
   - Request re-indexing in Google Search Console
   - Submit sitemap: https://haal-lab.solutions/sitemap.xml

3. **Test Mobile**
   - Use Google's Mobile-Friendly Test
   - Verify responsive behavior

4. **Set up Monitoring**
   - Add uptime monitoring (e.g., UptimeRobot)
   - Set up alerts for 404 errors

---

## Contact

If issues persist after following this checklist:

1. Run `node scripts/verify-seo.js` and save output
2. Run `curl -L https://haal-lab.solutions/` and save output
3. Take screenshots of browser console errors (if any)
4. Check GitHub Actions deployment logs

Then provide these details for further troubleshooting.

---

**Status:** Ready to deploy ✅  
**Estimated Time:** 5-10 minutes deployment + 5 minutes verification  
**Risk Level:** Low (changes are additions, no breaking changes)
