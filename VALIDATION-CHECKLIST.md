# SEO & Schema Validation Checklist

## Pre-Deployment Checks

### ✅ Code Quality
- [x] No TypeScript errors
- [x] All imports resolve correctly
- [x] JSON syntax valid in all schemas
- [x] Manifest.json valid JSON
- [ ] Build succeeds: `npm run build`
- [ ] Local preview works: `npm run start`

### ✅ Content Accuracy
- [x] No "intelligent systems for the future" anywhere
- [x] No "engineering intelligent systems" anywhere  
- [x] "Europe" / "European" used instead of "Worldwide"
- [x] Concrete service names (On-Premises LLM, not Local AI)
- [x] Specific model names (Llama, Mistral, Qwen)
- [x] Data sovereignty emphasized
- [x] GDPR compliance mentioned

---

## Schema Validation

### Organization Schema
```bash
# Test URL: https://haal-lab.solutions/en
```

**Check these fields:**
- [ ] `slogan`: "Private AI Systems for European Organizations"
- [ ] `areaServed.name`: "Europe"
- [ ] `serviceType`: Contains "Private AI Deployment", "On-Premises LLM Systems"
- [ ] `audience.audienceType`: Includes "European Enterprises"
- [ ] `knowsAbout`: Contains "Private AI Systems", "Data Sovereignty"
- [ ] `contactPoint[].areaServed`: All say "Europe"

**Validation Tool:**
- Schema.org Validator: https://validator.schema.org/
- Paste: https://haal-lab.solutions/en

**Expected:** ✅ No errors, all @type values valid

---

### Service Schema

**Check these fields:**
- [ ] `name`: "Private AI Engineering Services" 
- [ ] `serviceType`: Array with 6 specific services
- [ ] `areaServed.name`: "Europe"
- [ ] `serviceOutput.name`: "Private AI Systems"
- [ ] `audience.geographicArea.name`: "Europe"

---

### SoftwareApplication Schema

**Check these fields:**
- [ ] `name`: "Haal Lab Private AI Platform"
- [ ] `applicationSubCategory`: "Private AI Infrastructure"
- [ ] `description`: Mentions "European organizations", "data sovereignty"
- [ ] `featureList`: 12 items (not 10)
- [ ] `softwareRequirements`: "Linux or Windows Server, Docker..."

---

### WebPage Schemas (Per Page)

Test each page:
- [ ] Home: `/en`
- [ ] About: `/en/about`
- [ ] Solutions: `/en/solutions`
- [ ] How We Work: `/en/how-we-work`
- [ ] Pricing: `/en/pricing`
- [ ] Research: `/en/research`
- [ ] Network: `/en/network`
- [ ] Contact: `/en/contact`

**Each should have:**
- [ ] BreadcrumbList schema
- [ ] FAQPage schema (if FAQs exist)
- [ ] Correct page-specific schemas

---

## Meta Tags Validation

### Home Page (`/en`)

**Open in browser, View Source, search for:**

```html
<title>Haal Lab — Private AI Systems for European Organizations</title>

<meta name="description" content="Haal Lab builds private, on-premises AI systems for European organizations..." />

<meta property="og:title" content="Haal Lab — Private AI Systems for European Organizations" />

<meta property="og:description" content="On-premises AI systems for European organizations..." />

<meta name="twitter:title" content="Haal Lab — Private AI Systems for European Organizations" />
```

**Should NOT find:**
- ❌ "intelligent systems"
- ❌ "for the future"
- ❌ "engineering intelligent"
- ❌ "deep-tech"

---

### All Pages Check

For each of the 8 pages × 5 languages = 40 pages:

**Quick spot check (3-4 pages):**
- [ ] `/en` - Home
- [ ] `/en/solutions` - Solutions  
- [ ] `/de` - German home
- [ ] `/fr/contact` - French contact

**Verify:**
- [ ] Title is concrete (not vague)
- [ ] Description mentions specific deliverables
- [ ] No futuristic language
- [ ] Canonical URL correct
- [ ] hreflang alternates present

---

## Google Tools Validation

### 1. Google Rich Results Test

**URL:** https://search.google.com/test/rich-results

**Test each page type:**
- [ ] Home page: `/en`
- [ ] Solutions: `/en/solutions`
- [ ] How We Work: `/en/how-we-work`

**Expected results:**
- ✅ Organization detected
- ✅ BreadcrumbList detected
- ✅ FAQPage detected (if FAQs present)
- ✅ HowTo detected (on How We Work page)
- ❌ No errors
- ❌ No warnings (or minor warnings only)

**Screenshot:** Save results for documentation

---

### 2. Google Search Console

After deployment:

- [ ] Submit sitemap (if not already)
- [ ] Wait 24-48 hours
- [ ] Check "Enhancements" → "Structured Data"
- [ ] Verify new schemas detected:
  - Organization
  - BreadcrumbList
  - FAQPage
  - HowTo
  - WebPage

**Expected:** All valid, no errors

---

## Social Media Preview Testing

### Facebook / LinkedIn

**Tool:** https://developers.facebook.com/tools/debug/

**Test URLs:**
- [ ] https://haal-lab.solutions/en
- [ ] https://haal-lab.solutions/en/solutions
- [ ] https://haal-lab.solutions/en/contact

**Expected preview:**
- Title: "Haal Lab — Private AI Systems for European Organizations"
- Description: On-premises AI, European organizations
- Image: og-image.png (1200×630)
- **No vague language**

**Action:** Click "Scrape Again" to refresh cache

---

### Twitter / X

**Tool:** https://cards-dev.twitter.com/validator

**Test URLs:**
- [ ] https://haal-lab.solutions/en
- [ ] https://haal-lab.solutions/en/how-we-work

**Expected:**
- Card type: summary_large_image
- Title: Concrete and specific
- Description: On-premises, data sovereignty
- Image: Displays correctly

---

### LinkedIn Post Inspector

**Tool:** https://www.linkedin.com/post-inspector/

**Test URL:**
- [ ] https://haal-lab.solutions/en

**Expected:**
- Title and description: Concrete, no vague language
- Image: Displays at 1200×630
- No errors

---

## AI Chatbot Testing

### ChatGPT Test

**Prompt:**
```
What does Haal Lab do?
```

**Expected response should mention:**
- ✅ Private / on-premises AI
- ✅ European organizations
- ✅ Data sovereignty / GDPR
- ✅ Specific technologies (LLMs, RAG)
- ✅ Llama, Mistral, Qwen (model names)

**Should NOT say:**
- ❌ "Intelligent systems for the future"
- ❌ "Deep-tech AI company"
- ❌ Generic/vague descriptions

---

### Perplexity Test

**Prompt:**
```
Tell me about Haal Lab's AI deployment services
```

**Expected:**
- ✅ Cites haal-lab.solutions
- ✅ Mentions on-premises deployment
- ✅ European focus
- ✅ Specific services (RAG, LLMs)
- ✅ Data sovereignty

---

### Claude Test

**Prompt:**
```
What AI services does Haal Lab provide?
```

**Expected:**
- ✅ Private AI deployment
- ✅ On-premises LLM systems
- ✅ European data sovereignty
- ✅ Specific tech stack

---

## Browser Testing

### Desktop Browsers

Test on:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

**For each browser:**
- [ ] All pages load correctly
- [ ] No console errors
- [ ] Meta tags render correctly (view source)
- [ ] Schema JSON-LD validates (view source)

---

### Mobile Browsers

Test on:
- [ ] Mobile Chrome (Android)
- [ ] Mobile Safari (iOS)

**Check:**
- [ ] PWA manifest loads
- [ ] Meta tags correct
- [ ] Page renders properly

---

## Lighthouse Audit

Run Lighthouse on key pages:

```bash
# Chrome DevTools → Lighthouse
```

**Pages to audit:**
- [ ] Home (`/en`)
- [ ] Solutions (`/en/solutions`)
- [ ] Contact (`/en/contact`)

**Check SEO score:**
- [ ] 90+ SEO score
- [ ] Meta description present
- [ ] Title tags unique
- [ ] Structured data valid
- [ ] hreflang tags valid

---

## Content Verification

### Search for Banned Words

Search entire codebase for vague terms:

```bash
# In project root
grep -r "intelligent systems" src/
grep -r "for the future" src/
grep -r "engineering intelligent" src/
grep -r "Knowledge Intelligence" src/
```

**Expected:** ❌ No matches (or only in comments/docs)

---

### Verify Concrete Terms Present

Search for required concrete terms:

```bash
grep -r "Private AI" src/
grep -r "on-premises" src/
grep -r "European organizations" src/
grep -r "data sovereignty" src/
grep -r "GDPR" src/
```

**Expected:** ✅ Multiple matches across files

---

## Multi-Language Check

Test localized versions:

### German (`/de`)
- [ ] Title: "Private KI-Systeme für europäische Organisationen"
- [ ] Description: Mentions "lokale", "Datensouveränität"
- [ ] Schema: `inLanguage: "de"`

### French (`/fr`)
- [ ] Title: "Systèmes IA privés pour organisations européennes"  
- [ ] Description: "sur site", "souveraineté des données"
- [ ] Schema: `inLanguage: "fr"`

### Spanish (`/es`)
- [ ] Title: "Sistemas IA privados para organizaciones europeas"
- [ ] Description: "locales", "soberanía de datos"
- [ ] Schema: `inLanguage: "es"`

### Italian (`/it`)
- [ ] Title: "Sistemi IA privati per organizzazioni europee"
- [ ] Description: "on-premise", "sovranità dei dati"
- [ ] Schema: `inLanguage: "it"`

---

## Performance Check

### Build Size
```bash
npm run build
# Check .next/static/chunks size
```

**Expected:**
- [ ] No significant size increase
- [ ] Gzip compression working
- [ ] JSON-LD schemas reasonable size (<20KB total)

---

### Runtime Performance

**Check with DevTools:**
- [ ] No layout shifts (CLS)
- [ ] Fast page load (LCP < 2.5s)
- [ ] No excessive reflows
- [ ] Schemas don't block rendering

---

## Final Pre-Launch Checklist

### Code
- [ ] All TypeScript errors resolved
- [ ] No console errors in production build
- [ ] All links work (internal navigation)
- [ ] All images load (og-image.png exists)

### Content
- [ ] No vague/futuristic language anywhere
- [ ] All services described concretely
- [ ] Target audience clearly stated
- [ ] Differentiation explicit

### SEO
- [ ] All page titles unique
- [ ] All descriptions unique and specific
- [ ] Canonical URLs correct
- [ ] Sitemap includes all pages
- [ ] robots.txt allows indexing

### Schemas
- [ ] All schemas validate (no errors)
- [ ] @id references consistent
- [ ] No duplicate schemas per page
- [ ] Breadcrumbs match actual navigation

### Social
- [ ] Open Graph tags complete
- [ ] Twitter Cards configured
- [ ] Images sized correctly (1200×630)
- [ ] Previews look good on all platforms

---

## Post-Deployment Monitoring

### Week 1
- [ ] Google Search Console: Check for crawl errors
- [ ] Schema detection: Verify new schemas appear
- [ ] Index status: Confirm pages indexed

### Week 2
- [ ] Search queries: Monitor new keyword rankings
- [ ] Click-through rate: Check improvements
- [ ] Rich results: Verify appearing in search

### Month 1
- [ ] AI chatbot accuracy: Test descriptions
- [ ] Ranking changes: Track target keywords
- [ ] Traffic sources: Analyze organic search

---

## Rollback Plan

If issues found post-deployment:

### Critical Issues (Rollback Immediately)
- Schema validation errors
- Pages not loading
- Broken navigation
- SEO score drops significantly

### Minor Issues (Fix Forward)
- Typos in content
- Minor schema warnings
- Social preview tweaks needed

### Rollback Commands
```bash
# Revert to previous commit
git log  # Find previous commit hash
git revert <commit-hash>
npm run build
# Deploy
```

---

## Sign-Off

**Developer:**
- [ ] All code changes complete
- [ ] No TypeScript errors
- [ ] Local testing passed
- [ ] Ready for staging deployment

**QA:**
- [ ] All validation tests passed
- [ ] Schema validation successful
- [ ] Meta tags verified
- [ ] Social previews checked

**SEO Lead:**
- [ ] Content accuracy verified
- [ ] Target keywords present
- [ ] Vague language removed
- [ ] Ready for production

**Deployment:**
- [ ] Staging deployed and tested
- [ ] Production deployment scheduled
- [ ] Monitoring plan in place
- [ ] Rollback plan documented

---

**Validation Date**: _________________
**Approved By**: _________________
**Deployment Date**: _________________
**Status**: ⏳ Pending Validation → ✅ Approved → 🚀 Deployed
