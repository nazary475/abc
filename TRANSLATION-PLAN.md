# Translation Plan — Haal Lab Website

## Overview

This plan covers translating all hardcoded English content across the Haal Lab website into 5 locales: **en**, **de** (German), **fr** (French), **es** (Spanish), **it** (Italian).

---

## Phase 1: Home Page Sections (CRITICAL)

### 1.1 Solutions Cards — `src/components/blocks/home-sections.tsx`

**SOLUTIONS array (lines 54-464):**
- [ ] Card 1: "AI Agents & Business Automation" — title, description, detailContent (~90 lines)
- [ ] Card 2: "Knowledge Intelligence Systems" — title, description, detailContent (~90 lines)
- [ ] Card 3: "Private AI Infrastructure" — title, description, detailContent (~90 lines)
- [ ] Card 4: "Custom AI Models & Training" — title, description, detailContent (~100 lines)
- [ ] "More info" button text

**Approach:**
1. Create translation keys in `en.json` under `solutions.cards` for each card
2. Add corresponding keys to `de.json`, `fr.json`, `es.json`, `it.json`
3. Replace hardcoded strings with `t("solutions.cards.card1.title")` etc.
4. For `detailContent` JSX, extract text strings into translation keys and rebuild JSX dynamically

### 1.2 Projects Section — `home-sections.tsx` (lines 539-670)

- [ ] PROJECTS array: project names, descriptions, tags, metrics
- [ ] "/ Project" prefix text
- [ ] Aria labels

**Keys to add:** `projects.items.0.name`, `projects.items.0.description`, `projects.items.0.tags`, `projects.items.0.metrics`

### 1.3 Why Section — `home-sections.tsx` (lines 652-713)

- [ ] WHY array: 3 items (title + description each)
- [ ] Section header: eyebrow, heading, lead
- [ ] "Why HAAL Lab" / "Why Organizations Choose HAAL Lab"

**Keys to add:** `why.items.0.title`, `why.items.0.description`, `why.eyebrow`, `why.heading`, `why.lead`

### 1.4 Services Section — `home-sections.tsx` (lines 717-754)

- [ ] SERVICES array: 6 service items (title + description each)

**Keys to add:** `servicesList.items.0.title`, `servicesList.items.0.description`

### 1.5 Architecture Section — `home-sections.tsx` (lines 795-834)

- [ ] eyebrow: "Architecture"
- [ ] heading: "From Data to Intelligence"
- [ ] lead text
- [ ] Description paragraph
- [ ] CTA: "Discuss Your Architecture"

**Keys to add:** `architecture.eyebrow`, `architecture.heading`, `architecture.lead`, `architecture.description`, `architecture.cta`

### 1.6 About Teaser — `home-sections.tsx` (lines 862-867)

- [ ] 4 definition list items: Focus, Approach, Delivery, Method

**Keys to add:** `aboutTeaser.details.focus`, etc.

### 1.7 CTA After Solutions — `home-sections.tsx` (lines 516-532)

- [ ] "Need an AI system tailored to your organization?"
- [ ] Description paragraph
- [ ] "Request Technical Discussion" button

---

## Phase 2: Case Studies (CRITICAL)

### `src/components/blocks/case-study-section.tsx`

- [ ] Section header: eyebrow, heading, lead
- [ ] 4 case studies × ~20 fields each (eyebrow, title, description, tags, context, challenge, approach, considerations, outcome)
- [ ] Bottom CTA section

**Approach:**
1. Create `caseStudies` namespace in each locale JSON
2. Store case study data as arrays of objects per locale
3. OR keep structure in component and extract strings to translation keys

**Estimated keys:** ~100+ per locale

---

## Phase 3: Process & How We Work (HIGH)

### `src/components/blocks/process-section.tsx`

- [ ] 5 phase titles and descriptions
- [ ] Section header: eyebrow, heading, lead
- [ ] Phase labels ("Phase 01", etc.)
- [ ] "Next" button
- [ ] CTA section: heading, description, button

**Keys to add:** `process.phases.0.title`, `process.phases.0.description`, `process.eyebrow`, `process.heading`, `process.lead`, `process.cta`

---

## Phase 4: Founder Section (HIGH)

### `src/components/site/founder-section.tsx`

- [ ] "Founder" badge text
- [ ] Name: "Ali-Zafar Najafi"
- [ ] Bio: "Electrical Engineering graduate..."

**Keys to add:** `founder.badge`, `founder.name`, `founder.bio`

---

## Phase 5: Hero Visual SVG (HIGH)

### `src/components/visuals/hero-visual.tsx`

- [ ] 8 source labels: PDFs, Contracts, Research, Emails, Databases, APIs
- [ ] 6 processing labels: Search, Analysis, Automation, Reports, Insights, Workflows, Decisions
- [ ] Section labels: DATA SOURCES, KNOWLEDGE PLATFORM, INTELLIGENT OUTPUTS
- [ ] "AI-Powered Intelligence Layer"
- [ ] aria-label

**Approach:**
1. Pass translated strings as props to the component
2. Use translation keys for all text elements

---

## Phase 6: Chat Assistant (HIGH)

### `src/components/chat-assistant.tsx`

- [ ] "Haal Lab Assistant"
- [ ] "AI-powered help"
- [ ] "Ask me anything..." placeholder
- [ ] "Press Enter to send, Shift+Enter for new line"
- [ ] All aria-labels

**Keys to add:** `chat.title`, `chat.subtitle`, `chat.placeholder`, `chat.hint`

---

## Phase 7: Footer (MEDIUM)

### `src/components/site/footer.tsx`

- [ ] "Tell us about your requirements..." paragraph
- [ ] Social link labels: GitHub, LinkedIn, Email
- [ ] "Founder" badge
- [ ] Legal section: "Officially Registered", "RCS Évreux:", "SIRET:", "Legal Name:"
- [ ] Address: "1 Rue Auguste Delaune, 27000 Évreux, France"
- [ ] Tagline: "Private AI for European Organizations"
- [ ] "Founded: July 2026 • Founder: Ali-Zafar Najafi"

**Keys to add:** `footer.description`, `footer.social.github`, `footer.legal.registered`, etc.

---

## Phase 8: Locale Suggestion Banner (MEDIUM)

### `src/components/site/locale-suggestion-banner.tsx`

- [ ] "Language Suggestion"
- [ ] "Would you like to view this site in..."
- [ ] "Switch to..."
- [ ] "Stay in..."
- [ ] Dismiss aria-label

---

## Phase 9: SEO FAQs Translation (MEDIUM)

### `src/lib/seo-faqs.ts`

Currently only `home` section is translated for non-EN locales.

- [ ] Translate `solutions` FAQs (6 questions) → de, fr, es, it
- [ ] Translate `about` FAQs (4 questions) → de, fr, es, it
- [ ] Translate `contact` FAQs (3 questions) → de, fr, es, it
- [ ] Translate `howWeWork` FAQs (3 questions) → de, fr, es, it
- [ ] Translate `research` FAQs (2 questions) → de, fr, es, it
- [ ] Translate `network` FAQs (3 questions) → de, fr, es, it
- [ ] Translate `pricing` FAQs (5 questions) → de, fr, es, it

**Estimated:** 26 questions × 4 locales = 104 translations

---

## Phase 10: Research Articles (CRITICAL — Long-term)

### `src/lib/research-articles.ts`

Currently English-only with no translation mechanism.

**Approach:**
1. Add optional `locale` field to Article type
2. Create duplicate article entries per locale, OR
3. Move article content to separate JSON files per locale
4. Update `getAllArticles()` to filter by locale

**Estimated:** 6 articles × full content translation

**Note:** This is the largest single task. Consider whether research articles need translation at all, or if they should remain English-only with a note.

---

## Phase 11: SVG Files (LOW)

### `public/og-image.svg`

Text elements:
- [ ] "HaalLab" (brand name)
- [ ] "AI Automation • AI Assistants • AI Infrastructure"
- [ ] "Designed for Private Environments"
- [ ] "Your Data Stays Under Your Control"
- [ ] "haal-lab.solutions"

**Approach:** Generate localized SVG files per locale (og-image-de.svg, og-image-fr.svg, etc.) or use the Python script to render locale-specific PNGs.

### `src/components/visuals/model-schematic.tsx`

- [ ] "IN", "DENSE", "OUT" labels — keep English (universal technical terms)

---

## Phase 12: Misc Components (LOW)

### `src/components/site/json-ld.tsx`

- [ ] Check all structured data strings are from `seo.ts` (already centralized)

### `src/app/api/chat/route.ts`

- [ ] Chatbot system prompt is English-only — consider adding locale parameter

### `EXPECTED-SEO-RESULTS.md`

- [ ] Documentation only — no translation needed

---

## File Changes Summary

| File | Keys to Add | Difficulty |
|------|-------------|------------|
| `en.json` | ~300+ new keys | Medium |
| `de.json` | ~300+ translations | High (translation work) |
| `fr.json` | ~300+ translations | High |
| `es.json` | ~300+ translations | High |
| `it.json` | ~300+ translations | High |
| `home-sections.tsx` | Refactor to use t() | High (code refactoring) |
| `case-study-section.tsx` | Refactor to use t() | High |
| `process-section.tsx` | Refactor to use t() | Medium |
| `founder-section.tsx` | Refactor to use t() | Low |
| `hero-visual.tsx` | Add props/translations | Medium |
| `chat-assistant.tsx` | Refactor to use t() | Medium |
| `footer.tsx` | Refactor to use t() | Medium |
| `locale-suggestion-banner.tsx` | Refactor to use t() | Low |
| `seo-faqs.ts` | Add 104 translations | Medium |
| `research-articles.ts` | Add i18n support | Very High |
| `og-image.svg` | Localized variants | Low |

---

## Estimated Effort

| Phase | Effort | Priority |
|-------|--------|----------|
| Phase 1: Home Sections | 3-4 hours | P0 |
| Phase 2: Case Studies | 2-3 hours | P0 |
| Phase 3: Process | 1 hour | P1 |
| Phase 4: Founder | 30 min | P1 |
| Phase 5: Hero Visual | 1-2 hours | P1 |
| Phase 6: Chat | 1 hour | P1 |
| Phase 7: Footer | 1 hour | P2 |
| Phase 8: Locale Banner | 30 min | P2 |
| Phase 9: SEO FAQs | 1-2 hours | P2 |
| Phase 10: Research Articles | 4-6 hours | P3 |
| Phase 11: SVGs | 1 hour | P3 |
| Phase 12: Misc | 30 min | P3 |
| **Translation Work** | **10-15 hours** | **Parallel** |
| **Total** | **~25-35 hours** | |

---

## Recommended Execution Order

1. **Phase 1** — Home page is the most visible, start here
2. **Phase 3 + 4** — Quick wins (process + founder)
3. **Phase 2** — Case studies (high content volume)
4. **Phase 5 + 6** — Visual and chat components
5. **Phase 7 + 8** — Footer and locale banner
6. **Phase 9** — SEO FAQs (important for GEO)
7. **Phase 10** — Research articles (can defer)
8. **Phase 11 + 12** — SVGs and misc (lowest priority)

---

## Translation Memory

After completing translation, consider:
- Creating a glossary of consistent AI/technical terms across locales
- Using a CAT tool or translation memory for future content
- Setting up a review workflow for new content before deployment
