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

## Phase 7: Footer (MEDIUM) ✅ DONE

### `src/components/site/footer.tsx`

- [x] "Tell us about your requirements..." paragraph → `ctaDescription`
- [x] Social link labels: GitHub, LinkedIn, Email → `social.github`, `social.linkedin`, `social.email`
- [x] "Founder" badge → `founderBadge`
- [x] Founder bio → `founderBio`
- [x] Legal section: "Officially Registered", "RCS Évreux:", "SIRET:", "Legal Name:" → `legal.officiallyRegistered`, `legal.rcsLabel`, `legal.siretLabel`, `legal.legalNameLabel`, `legal.legalName`
- [x] Address: "1 Rue Auguste Delaune, 27000 Évreux, France" → `legal.address`
- [x] Tagline: "Private AI for European Organizations" → `tagline`
- [x] "Founded: July 2026 • Founder: Ali-Zafar Najafi" → `founded`

**Files changed:** `footer.tsx`, `en.json`, `de.json`, `fr.json`, `es.json`, `it.json`

---

## Phase 8: Locale Suggestion Banner (MEDIUM) ✅ DONE

### `src/components/site/locale-suggestion-banner.tsx`

- [x] "Language Suggestion" → `localeBanner.title`
- [x] "Would you like to view this site in..." → `localeBanner.description`
- [x] "Switch to..." → `localeBanner.switchTo` (with `{locale}` param)
- [x] "Stay in..." → `localeBanner.stayIn` (with `{locale}` param)
- [x] Dismiss aria-label → `localeBanner.dismiss`

**Files changed:** `locale-suggestion-banner.tsx`, `en.json`, `de.json`, `fr.json`, `es.json`, `it.json`

---

## Phase 9: SEO FAQs Translation (MEDIUM) ✅ DONE

### `src/lib/seo-faqs.ts`

- [x] Translate `solutions` FAQs (6 questions) → de, fr, es, it
- [x] Translate `about` FAQs (4 questions) → de, fr, es, it
- [x] Translate `contact` FAQs (3 questions) → de, fr, es, it
- [x] Translate `projects` FAQs (3 questions) → de, fr, es, it
- [x] Translate `research` FAQs (2 questions) → de, fr, es, it
- [x] Translate `network` FAQs (3 questions) → de, fr, es, it
- [x] Translate `pricing` FAQs (5 questions) → de, fr, es, it

**Total:** 26 questions × 4 locales = 104 translations

**Files changed:** `seo-faqs.ts` (added ~800 lines of translations)

---

## Phase 10: Research Articles (CRITICAL — Long-term) ✅ DONE (Page Chrome)

### `src/lib/research-articles.ts` + components

- [x] Added `researchArticle` and `researchPage` translation namespaces to all 5 locale files
- [x] Updated `research-article.tsx` — `useTranslations` + English-only notice for non-EN
- [x] Updated `research-page.tsx` — `getTranslations` for CTA section and article count

**Note:** Full article content (titles, excerpts, tags, markdown body) remains English-only. A globe notice is shown for non-EN locales. See [Phase 10b](#phase-10b-research-articles-full-translation) for the plan to translate article content.

---

## Phase 10b: Research Articles Full Translation ✅ DONE

### `src/lib/research-articles.ts` + new locale files

Translate all 6 research articles (titles, excerpts, tags, full markdown content) into DE, FR, ES, IT.

### Article Inventory

| # | Article ID | Est. Words | Status |
|---|-----------|------------|--------|
| 1 | `gpt-transformer-ffn-comparison` | ~3,000 | ✅ Done |
| 2 | `local-llm-stack-2026` | ~10,000 | ✅ Done |
| 3 | `reranking-pitfalls` | ~5,000 | ✅ Done |
| 4 | `eval-driven-llm-ci` | ~11,000 | ✅ Done |
| 5 | `agent-orchestration-patterns` | ~9,000 | ✅ Done |
| 6 | `private-ai-threat-model` | ~11,000 | ✅ Done |

**Total:** ~49,000 words × 4 locales = ~196,000 words

### Architecture

Create 4 new files, one per locale:

```
src/lib/
  research-articles.ts          (existing — English, untouched)
  research-articles-de.ts       (German translations)
  research-articles-fr.ts       (French translations)
  research-articles-es.ts       (Spanish translations)
  research-articles-it.ts       (Italian translations)
```

Each file exports a `RESEARCH_ARTICLES_<LOCALE>: Article[]` array with the same structure as the English version.

### Updated helper functions

```ts
// In research-articles.ts
import { RESEARCH_ARTICLES_DE } from "./research-articles-de";
import { RESEARCH_ARTICLES_FR } from "./research-articles-fr";
import { RESEARCH_ARTICLES_ES } from "./research-articles-es";
import { RESEARCH_ARTICLES_IT } from "./research-articles-it";

export function getAllArticles(locale: string = "en"): Article[] { ... }
export function getArticleBySlug(slug: string, locale: string = "en"): Article | undefined { ... }
export function getAllArticleSlugs(locale: string = "en"): string[] { ... }
```

### Callers to update

| File | Function call | Change |
|------|--------------|--------|
| `src/components/pages/research-page.tsx` | `getAllArticles()` | Pass `locale` from `useLocale()` |
| `src/app/[locale]/research/[slug]/page.tsx` | `getArticleBySlug(slug)` | Pass `locale` from params |
| `src/app/[locale]/research/[slug]/page.tsx` | `getAllArticleSlugs()` | Pass `locale` from params |
| `src/app/sitemap.ts` | `getAllArticles()` | Generate per-locale URLs |
| `src/app/research/feed.xml/route.ts` | `getAllArticles()` | Keep English or per-locale |
| `src/app/research-sitemap.xml/route.ts` | `getAllArticles()` | Per-locale URLs |

### Translation rules

**Translate:**
- `title` — full translation
- `excerpt` — full translation
- `tags` — translate where possible (keep technical terms like "RAG", "LLMs" in English)
- `content` — full markdown translation

**Preserve as-is (do not translate):**
- Code blocks (``` ... ```)
- URLs and links
- Variable names, function names, CLI commands
- Product/model names (Llama, vLLM, Qdrant, BGE-M3, etc.)
- Markdown formatting (headers, tables, bold, italic)
- The `id`, `author`, `date` fields

### Execution batches

#### Batch 1: Short articles (~18,000 words)
- [x] 1.1 Translate `gpt-transformer-ffn-comparison` → DE, FR, ES, IT
- [x] 1.2 Translate `reranking-pitfalls` → DE, FR, ES, IT
- [x] 1.3 Translate `agent-orchestration-patterns` → DE, FR, ES, IT

#### Batch 2: Long articles (~31,000 words)
- [x] 2.1 Translate `local-llm-stack-2026` → DE, FR, ES, IT
- [x] 2.2 Translate `eval-driven-llm-ci` → DE, FR, ES, IT
- [x] 2.3 Translate `private-ai-threat-model` → DE, FR, ES, IT

#### Batch 3: Integration
- [x] 3.1 Update helper functions to accept `locale` parameter
- [x] 3.2 Update all callers to pass `locale`
- [x] 3.3 Remove English-only notice from `research-article.tsx`
- [x] 3.4 Update sitemaps for per-locale article URLs
- [x] 3.5 Type check (`npx tsc --noEmit`)

### Technical terms glossary (consistent across articles)

| English | DE | FR | ES | IT |
|---------|-----|-----|-----|-----|
| RAG | RAG | RAG | RAG | RAG |
| LLM | LLM | LLM | LLM | LLM |
| Embedding | Embedding | Embedding | Embedding | Embedding |
| Fine-tuning | Fine-Tuning | Fine-tuning | Fine-tuning | Fine-tuning |
| Inference | Inferenz | Inférence | Inferencia | Inferenza |
| Quantization | Quantisierung | Quantification | Cuantización | Quantizzazione |
| Reranker | Reranker | Reranker | Reranker | Reranker |
| Token | Token | Token | Token | Token |
| Prompt | Prompt | Prompt | Prompt | Prompt |
| Vector database | Vektordatenbank | Base de données vectorielle | Base de datos vectorial | Database vettoriale |
| Chunking | Chunking | Chunking | Chunking | Chunking |
| Hallucination | Halluzination | Hallucination | Alucinación | Allucinazione |

### Estimated effort

| Step | Effort |
|------|--------|
| Batch 1 (3 short articles × 4 locales) | 4-6 hours |
| Batch 2 (3 long articles × 4 locales) | 6-8 hours |
| Batch 3 (integration) | 30 min |
| **Total** | **~11-15 hours** |

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

## Progress Summary

| Phase | Description | Status |
|-------|-------------|--------|
| 1 | Home Page Sections | ⬜ Not started |
| 2 | Case Studies | ⬜ Not started |
| 3 | Process & How We Work | ⬜ Not started |
| 4 | Founder Section | ⬜ Not started |
| 5 | Hero Visual SVG | ⬜ Not started |
| 6 | Chat Assistant | ⬜ Not started |
| 7 | Footer | ✅ Done |
| 8 | Locale Suggestion Banner | ✅ Done |
| 9 | SEO FAQs Translation | ✅ Done |
| 10 | Research Articles (Page Chrome) | ✅ Done |
| 10b | Research Articles (Full Translation) | ✅ Done |
| 11 | SVG Files | ⬜ Not started |
| 12 | Misc Components | ⬜ Not started |

---

## File Changes Summary

| File | Keys to Add | Difficulty | Status |
|------|-------------|------------|--------|
| `en.json` | ~350+ keys | Medium | ✅ Partial |
| `de.json` | ~350+ translations | High | ✅ Partial |
| `fr.json` | ~350+ translations | High | ✅ Partial |
| `es.json` | ~350+ translations | High | ✅ Partial |
| `it.json` | ~350+ translations | High | ✅ Partial |
| `home-sections.tsx` | Refactor to use t() | High | ⬜ Not started |
| `case-study-section.tsx` | Refactor to use t() | High | ⬜ Not started |
| `process-section.tsx` | Refactor to use t() | Medium | ⬜ Not started |
| `founder-section.tsx` | Refactor to use t() | Low | ⬜ Not started |
| `hero-visual.tsx` | Add props/translations | Medium | ⬜ Not started |
| `chat-assistant.tsx` | Refactor to use t() | Medium | ⬜ Not started |
| `footer.tsx` | Refactor to use t() | Medium | ✅ Done |
| `locale-suggestion-banner.tsx` | Refactor to use t() | Low | ✅ Done |
| `seo-faqs.ts` | Add 104 translations | Medium | ✅ Done |
| `research-articles.ts` | Add i18n support | Very High | 📋 Planned |
| `research-article.tsx` | English-only notice | Low | ✅ Done |
| `research-page.tsx` | getTranslations | Low | ✅ Done |
| `og-image.svg` | Localized variants | Low | ⬜ Not started |

---

## Estimated Effort

| Phase | Effort | Priority | Status |
|-------|--------|----------|--------|
| Phase 1: Home Sections | 3-4 hours | P0 | ⬜ |
| Phase 2: Case Studies | 2-3 hours | P0 | ⬜ |
| Phase 3: Process | 1 hour | P1 | ⬜ |
| Phase 4: Founder | 30 min | P1 | ⬜ |
| Phase 5: Hero Visual | 1-2 hours | P1 | ⬜ |
| Phase 6: Chat | 1 hour | P1 | ⬜ |
| Phase 7: Footer | 1 hour | P2 | ✅ |
| Phase 8: Locale Banner | 30 min | P2 | ✅ |
| Phase 9: SEO FAQs | 1-2 hours | P2 | ✅ |
| Phase 10: Research (Chrome) | 1 hour | P3 | ✅ |
| Phase 10b: Research (Full) | 11-15 hours | P3 | 📋 |
| Phase 11: SVGs | 1 hour | P3 | ⬜ |
| Phase 12: Misc | 30 min | P3 | ⬜ |
| **Completed** | **~4 hours** | | **4/13 phases** |
| **Remaining** | **~22-30 hours** | | |

---

## Recommended Execution Order

1. ~~**Phase 1** — Home page is the most visible, start here~~
2. ~~**Phase 3 + 4** — Quick wins (process + founder)~~
3. ~~**Phase 2** — Case studies (high content volume)~~
4. ~~**Phase 5 + 6** — Visual and chat components~~
5. ~~**Phase 7 + 8** — Footer and locale banner~~ ✅ Done
6. ~~**Phase 9** — SEO FAQs (important for GEO)~~ ✅ Done
7. **Phase 10b** — Research articles (full translation) — 📋 Planned
8. **Phase 1** — Home page sections (most visible, P0)
9. **Phase 2** — Case studies (high content volume, P0)
10. **Phase 3 + 4** — Process + founder (quick wins)
11. **Phase 5 + 6** — Visual and chat components
12. **Phase 11 + 12** — SVGs and misc (lowest priority)

---

## Translation Memory

After completing translation, consider:
- Creating a glossary of consistent AI/technical terms across locales
- Using a CAT tool or translation memory for future content
- Setting up a review workflow for new content before deployment
