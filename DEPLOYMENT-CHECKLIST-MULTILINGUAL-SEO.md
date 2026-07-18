# Deployment Checklist — Multilingual SEO Upgrade

**Project:** haal-lab.solutions Professional Multilingual SEO  
**Date:** 2026-07-18  
**Type:** Zero-downtime deployment (metadata-only changes)

---

## Pre-Deployment (Local)

### 1. Code Validation ✅

```bash
# Validate hreflang implementation
node scripts/validate-hreflang.js
# Expected: ✅ ALL CHECKS PASSED!
```

### 2. TypeScript Compilation ✅

```bash
# Check for type errors
npm run type-check
# or
npx tsc --noEmit
# Expected: No errors
```

### 3. Build Test ✅

```bash
# Full production build
npm run build
# Expected: Build succeeds, no errors
```

### 4. Inspect Generated HTML (Sample Check)

```bash
# After build, check one page for hreflang tags
# Windows:
type out\en\pricing\index.html | findstr "hreflang"

# Should show 6 hreflang tags:
# <link rel="alternate" hreflang="x-default" href="https://haal-lab.solutions/en/pricing"/>
# <link rel="alternate" hreflang="en" href="https://haal-lab.solutions/en/pricing"/>
# <link rel="alternate" hreflang="de" href="https://haal-lab.solutions/de/pricing"/>
# <link rel="alternate" hreflang="fr" href="https://haal-lab.solutions/fr/pricing"/>
# <link rel="alternate" hreflang="es" href="https://haal-lab.solutions/es/pricing"/>
# <link rel="alternate" hreflang="it" href="https://haal-lab.solutions/it/pricing"/>
```

---

## Deployment (GitHub Pages / Vercel)

### Option A: GitHub Pages (Static Export)

```bash
# 1. Commit changes
git add .
git commit -m "feat: implement professional multilingual SEO with hreflang"

# 2. Push to main
git push origin main

# 3. GitHub Actions will automatically:
#    - Run npm run build
#    - Deploy to gh-pages branch
#    - Site updates in ~2-3 minutes
```

### Option B: Vercel / Netlify

```bash
# 1. Commit and push
git add .
git commit -m "feat: implement professional multilingual SEO with hreflang"
git push origin main

# 2. Automatic deployment triggers
# Vercel/Netlify will:
#    - Detect changes
#    - Run build
#    - Deploy to production
#    - Takes ~1-2 minutes
```

---

## Post-Deployment Validation (Day 1)

### 1. Visual Inspection (5 minutes)

**Check one page from each locale:**

```
✅ https://haal-lab.solutions/en/pricing
✅ https://haal-lab.solutions/de/pricing
✅ https://haal-lab.solutions/fr/pricing
✅ https://haal-lab.solutions/es/pricing
✅ https://haal-lab.solutions/it/pricing
```

**In browser DevTools (F12):**
1. Inspect `<head>` section
2. Look for 6 `<link rel="alternate" hreflang=...` tags
3. Confirm 1 `<link rel="canonical"` tag (self-referencing)

**Expected output example (for `/de/pricing`):**
```html
<link rel="canonical" href="https://haal-lab.solutions/de/pricing" />
<link rel="alternate" hreflang="x-default" href="https://haal-lab.solutions/en/pricing" />
<link rel="alternate" hreflang="en" href="https://haal-lab.solutions/en/pricing" />
<link rel="alternate" hreflang="de" href="https://haal-lab.solutions/de/pricing" />
<link rel="alternate" hreflang="fr" href="https://haal-lab.solutions/fr/pricing" />
<link rel="alternate" hreflang="es" href="https://haal-lab.solutions/es/pricing" />
<link rel="alternate" hreflang="it" href="https://haal-lab.solutions/it/pricing" />
```

### 2. Sitemap Validation (2 minutes)

**Visit sitemap:**
```
https://haal-lab.solutions/sitemap.xml
```

**Check for:**
- ✅ All 5 locales present for each page
- ✅ `xhtml:link` elements with `hreflang` attributes
- ✅ `x-default` entries pointing to `/en/`

**Expected snippet:**
```xml
<url>
  <loc>https://haal-lab.solutions/en/pricing</loc>
  <lastModified>2026-07-18</lastModified>
  <changeFrequency>monthly</changeFrequency>
  <priority>0.85</priority>
  <alternates>
    <languages>
      <x-default>https://haal-lab.solutions/en/pricing</x-default>
      <en>https://haal-lab.solutions/en/pricing</en>
      <de>https://haal-lab.solutions/de/pricing</de>
      <fr>https://haal-lab.solutions/fr/pricing</fr>
      <es>https://haal-lab.solutions/es/pricing</es>
      <it>https://haal-lab.solutions/it/pricing</it>
    </languages>
  </alternates>
</url>
```

### 3. Quick Online Validator (3 minutes)

**Aleyda Solis Hreflang Validator:**
1. Visit: https://www.aleydasolis.com/english/international-seo-tools/hreflang-tags-generator/
2. Enter URL: `https://haal-lab.solutions/de/pricing`
3. Click "Check hreflang"
4. Expected: ✅ All hreflang tags valid, bidirectional, no errors

---

## Google Search Console Setup (Day 1-2)

### 1. Submit Sitemap (Critical)

```
1. Go to: https://search.google.com/search-console
2. Select property: haal-lab.solutions
3. Navigate to: Sitemaps (left sidebar)
4. Add sitemap URL: https://haal-lab.solutions/sitemap.xml
5. Click "Submit"
6. Status should show: "Success" (may take a few hours)
```

### 2. Check International Targeting Report (Week 1)

```
1. In Google Search Console
2. Navigate to: Legacy tools and reports → International Targeting
3. Click "Language" tab
4. Expected: No errors (may take 3-7 days for Google to crawl and validate)
```

**Common errors to watch for (none expected):**
- ❌ "No return tags" — Means missing bidirectional hreflang
- ❌ "Unknown language code" — Means invalid ISO code
- ❌ "Conflicting hreflang" — Means canonical fights hreflang

---

## Advanced Validation (Optional, Week 1)

### 1. Screaming Frog SEO Spider (Comprehensive Crawl)

**Requirements:**
- Download: https://www.screamingfrog.co.uk/seo-spider/
- Free version: Up to 500 URLs (sufficient for haal-lab.solutions)

**Steps:**
```
1. Open Screaming Frog
2. Enter URL: https://haal-lab.solutions
3. Click "Start"
4. After crawl completes:
   - Go to: Directives > Hreflang
   - Check for errors in "Hreflang" tab
   - Export report
5. Expected: Zero errors, all clusters complete
```

**What it catches:**
- Missing return tags
- Broken hreflang URLs (404s)
- Incorrect language codes
- Missing x-default
- Canonical conflicts

### 2. Manual SERP Test (Real-World Validation)

**Test German locale:**
```
1. Open incognito/private browser
2. Go to: https://www.google.de
3. Search: site:haal-lab.solutions/de/
4. Expected: German pages appear in results
```

**Or use parameter:**
```
https://www.google.com/search?q=site:haal-lab.solutions/de/&gl=DE&hl=de
```

**Repeat for other locales:**
- French: `site:haal-lab.solutions/fr/` on google.fr
- Spanish: `site:haal-lab.solutions/es/` on google.es
- Italian: `site:haal-lab.solutions/it/` on google.it

---

## Monitoring (Ongoing)

### Weekly (First Month)

- [ ] Check GSC Coverage report (no new errors)
- [ ] Monitor indexing status per locale
- [ ] Review GSC International Targeting (should show zero errors)

### Monthly (Ongoing)

- [ ] GSC International Targeting report (check for new errors)
- [ ] Organic traffic by locale (Analytics)
- [ ] Indexing status: `site:haal-lab.solutions/de/` (ensure pages indexed)

---

## Rollback Plan (If Issues Arise)

**Unlikely to need this (metadata-only changes), but documented for completeness:**

### If hreflang errors appear in GSC:

1. **Diagnose:**
   ```bash
   node scripts/validate-hreflang.js
   ```
   If validator passes but GSC shows errors, wait 3-7 days (Google may be showing stale data).

2. **Inspect live site:**
   - View source of problem URL
   - Check hreflang tags in `<head>`
   - Verify sitemap.xml entries

3. **Quick fix (if needed):**
   - Revert specific page metadata
   - Redeploy
   - Resubmit sitemap

### If build fails:

1. **Check TypeScript errors:**
   ```bash
   npm run type-check
   ```

2. **Check validation:**
   ```bash
   node scripts/validate-hreflang.js
   ```

3. **Revert to last working commit:**
   ```bash
   git revert HEAD
   git push origin main
   ```

---

## Success Criteria

### ✅ Deployment Successful If:

**Technical (Immediate):**
- [ ] Build succeeds with no errors
- [ ] All pages have 6 hreflang tags in `<head>`
- [ ] Sitemap includes hreflang alternates
- [ ] `validate-hreflang.js` passes
- [ ] TypeScript compilation has no errors

**SEO (Week 1):**
- [ ] Sitemap submitted to GSC successfully
- [ ] No errors in GSC International Targeting report
- [ ] Aleyda validator shows no issues
- [ ] Manual SERP checks show correct locales

**Production (Month 1):**
- [ ] All 5 locales indexed independently in GSC
- [ ] No duplicate content warnings
- [ ] Organic traffic by locale is trackable
- [ ] German searches rank `/de/` pages
- [ ] French searches rank `/fr/` pages

---

## Common Issues & Fixes

| Issue | Diagnosis | Fix |
|-------|-----------|-----|
| **Hreflang tags not in HTML** | View source → no `<link rel="alternate"` | Check build output, redeploy |
| **x-default missing** | Validator or GSC shows error | Already fixed (utility always adds it) |
| **GSC shows "No return tags"** | One page missing from cluster | Run validator, check for missed page |
| **Canonical points to wrong locale** | GSC or validator error | Already fixed (self-referencing enforced) |
| **Sitemap not updating** | Old sitemap cached | Force resubmit in GSC, wait 24h |

---

## Next Steps After Successful Deployment

### Immediate (Day 1)
1. ✅ Deploy to production
2. ✅ Visual inspection (check 5 sample pages)
3. ✅ Submit sitemap to GSC
4. ✅ Run Aleyda validator

### Week 1
1. Check GSC International Targeting report
2. Verify indexing: `site:haal-lab.solutions/de/`
3. Run Screaming Frog crawl (optional)

### Month 1-3
1. Monitor organic traffic by locale (Analytics)
2. Check GSC Coverage report for improvements
3. Consider TMS integration if translation becomes bottleneck

---

## Documentation Reference

- **Quick Start:** `MULTILINGUAL-SEO-QUICK-START.md` (developer reference)
- **Full Spec:** `MULTILINGUAL-SEO-IMPLEMENTATION.md` (technical deep dive)
- **Summary:** `MULTILINGUAL-SEO-SUMMARY.md` (executive overview)
- **Code:** `src/lib/seo.ts` (implementation with comments)

---

## Contact

**Issues during deployment?**
1. Check `MULTILINGUAL-SEO-QUICK-START.md` for common tasks
2. Run `node scripts/validate-hreflang.js` for diagnostics
3. Read error messages carefully (validator is descriptive)

---

**Ready to deploy?** ✅ All systems go!

```bash
# Final pre-deploy validation
node scripts/validate-hreflang.js && npm run build

# Expected output:
# ✅ ALL CHECKS PASSED! Hreflang implementation is professional-grade.
# ✓ Compiled successfully
```

If both pass, you're ready to push to production. 🚀
