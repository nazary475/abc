# Haal Lab — Website

Production-ready, SEO-optimized, **static** website for **Haal Lab**, a deep-tech AI
engineering company. Deploys cleanly to GitHub Pages, Netlify, Cloudflare Pages, or any
static host — no server required.

Built with Next.js 16 (static export), TypeScript, Tailwind CSS 4, shadcn/ui, and Framer Motion.

## Tech Stack

- **Framework**: Next.js 16 (App Router) with **static export** (`output: "export"`)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 + shadcn/ui (New York)
- **Animations**: Framer Motion + CSS (SEO-safe — content visible without JS)
- **Fonts**: Inter (sans) + JetBrains Mono (mono) via `next/font` (self-hosted at build time)
- **Icons**: Lucide React

## Quick Start (local development)

```bash
# 1. Install dependencies (use any of these)
bun install
# or
npm install
# or
pnpm install

# 2. Run the dev server
bun run dev
# → http://localhost:3000

# 3. Build the static site (outputs to ./out/)
bun run build
# The out/ folder is what you deploy.
```

## Deploy to GitHub Pages (recommended)

This repo includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that
builds and deploys automatically on every push to `main`.

### Step-by-step

1. **Create a GitHub repository**
   - Go to [github.com/new](https://github.com/new).
   - Name it `haal-lab` (or whatever you like).
   - Don't initialize with a README — push this code instead.

2. **Push the code**
   ```bash
   git init
   git add .
   git commit -m "Initial commit — Haal Lab website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/haal-lab.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - In your repo: **Settings → Pages → Build and deployment → Source** → select **"GitHub Actions"**.
   - That's it. The workflow in `.github/workflows/deploy.yml` runs on every push.

4. **Wait for the first deployment**
   - Go to the **Actions** tab — you'll see "Deploy to GitHub Pages" running.
   - When it finishes, your site is live at `https://YOUR_USERNAME.github.io/haal-lab/`.

5. **(Optional) Add a custom domain** — `haal-lab.solutions`
   - In **Settings → Pages → Custom domain**, enter `haal-lab.solutions` and click **Save**.
   - This creates a `CNAME` file in your repo automatically.
   - Configure DNS with your registrar:
     - **Option A (A records)**: Point `haal-lab.solutions` to GitHub Pages IPs:
       ```
       185.199.108.153
       185.199.109.153
       185.199.110.153
       185.199.111.153
       ```
     - **Option B (CNAME)**: If using a subdomain like `www`, CNAME to `YOUR_USERNAME.github.io`.
   - Wait for DNS to propagate (5–60 minutes), then enforce HTTPS in the Pages settings.
   - Your site is now live at `https://haal-lab.solutions`.

### Project page vs custom domain — basePath

The build reads `NEXT_PUBLIC_BASE_PATH` to handle the URL prefix difference:

| Deployment | URL | `NEXT_PUBLIC_BASE_PATH` |
|---|---|---|
| User/org page (`username.github.io`) | `https://username.github.io/` | _(empty — leave unset)_ |
| Custom domain (`haal-lab.solutions`) | `https://haal-lab.solutions/` | _(empty — leave unset)_ |
| Project page (`username.github.io/haal-lab`) | `https://username.github.io/haal-lab/` | `/haal-lab` |

**If deploying to a project page**, set the `NEXT_PUBLIC_BASE_PATH` secret:
1. **Settings → Secrets and variables → Actions → New repository secret**
2. Name: `NEXT_PUBLIC_BASE_PATH`
3. Value: `/haal-lab` (your repo name, **no trailing slash**)
4. Re-run the workflow.

**If using a custom domain or user/org page**, leave it unset — the default (root) works.

### Contact form on GitHub Pages

GitHub Pages is static — no backend. The contact form handles this gracefully:

- **Default (no config)**: The form opens the visitor's email client with a pre-filled
  message to `hello@haal-lab.solutions`. No backend, no setup, works everywhere.
- **Upgrade to Formspree (optional)**: For a real form submission experience,
  create a free account at [formspree.io](https://formspree.io), create a form, and
  set the repository secret `NEXT_PUBLIC_FORMSPREE_ENDPOINT` to your endpoint
  (e.g. `https://formspree.io/f/abcdwxyz`). The workflow picks it up automatically.

Other compatible services: **Getform**, **Formspark**, **Basin**, **Web3Forms** —
any service that accepts a POST to a form endpoint works.

## SEO Features

This is a real multi-page website — each page has its own URL, metadata, and is fully crawlable.

### Real URLs (not hash-based)
- `/` — Home
- `/solutions` — AI capabilities
- `/projects` — Technical case studies
- `/research` — Technical articles
- `/about` — Mission & vision
- `/contact` — Contact form

### Per-page metadata
Each route exports its own `metadata` object with unique title, description, OpenGraph tags, Twitter Card, canonical URL, and targeted keywords.

### Sitemap & Robots (auto-generated)
- **`/sitemap.xml`** — generated at build time via `src/app/sitemap.ts`
- **`/robots.txt`** — generated at build time via `src/app/robots.ts`, points to sitemap

### Structured Data (JSON-LD)
Three schema.org schemas injected in `<head>` via `src/components/site/json-ld.tsx`:
1. **Organization** — name, url, logo, email, social links, knowsAbout
2. **WebSite** — site name, url, publisher
3. **ProfessionalService** — service types, offer catalog with all 4 capabilities

These help Google, Bing, ChatGPT, Perplexity, and other AI crawlers understand who Haal Lab is.

### SEO-safe animations
Content is visible by default in the server-rendered HTML. The reveal animation only hides content when JavaScript is active (via a `.js` class on `<html>`). Crawlers and no-JS users always see everything. `prefers-reduced-motion` is respected.

## Project Structure

```
.
├── .github/workflows/
│   └── deploy.yml              # GitHub Actions: build + deploy to Pages
├── public/
│   ├── .nojekyll               # Tells GitHub Pages not to use Jekyll
│   └── logo.svg                # Brand logo / favicon
├── src/
│   ├── app/
│   │   ├── globals.css         # Dark brand theme + utilities
│   │   ├── layout.tsx          # Root layout: fonts, metadata, Navbar, Footer, JSON-LD
│   │   ├── page.tsx            # / (home)
│   │   ├── sitemap.ts          # → /sitemap.xml
│   │   ├── robots.ts           # → /robots.txt
│   │   ├── solutions/page.tsx  # /solutions
│   │   ├── projects/page.tsx   # /projects
│   │   ├── research/page.tsx   # /research
│   │   ├── about/page.tsx      # /about
│   │   └── contact/page.tsx    # /contact
│   ├── components/
│   │   ├── blocks/             # Layout primitives + home sections
│   │   ├── pages/              # Page content components
│   │   │   └── contact-form.tsx # Static-friendly form (mailto + Formspree)
│   │   ├── site/               # Navbar, Footer, Logo, JSON-LD
│   │   ├── visuals/            # Hero AI architecture visual
│   │   └── ui/                 # shadcn/ui components
│   ├── hooks/
│   └── lib/
├── next.config.ts              # Static export config (output: "export")
├── package.json
└── DEPLOYMENT.md               # This file
```

## Customization

### Brand colors
Edit CSS variables in `src/app/globals.css`:
```css
:root {
  --background: #080B12;   /* deep black/navy */
  --foreground: #E6EAF2;   /* text */
  --accent: #00E0FF;       /* electric cyan */
}
```

### Content
All copy lives inline in `src/components/pages/*-page.tsx` and `src/components/blocks/home-sections.tsx`. Edit the arrays at the top of each file (`SOLUTIONS`, `PROJECTS`, `SERVICES`, `ARTICLES`).

### SEO metadata
- **Global defaults**: `src/app/layout.tsx`
- **Per-page**: each `src/app/*/page.tsx` exports its own `metadata`
- **Structured data**: `src/components/site/json-ld.tsx`
- **Sitemap**: `src/app/sitemap.ts`

### Contact email
Update `CONTACT_EMAIL` in `src/components/pages/contact-form.tsx`, and the `mailto:` links in `src/components/site/footer.tsx` + `src/components/pages/contact-page.tsx`.

## Deploy Elsewhere

### Netlify
1. Push to GitHub.
2. New site from Git → pick the repo.
3. Build command: `npm run build`
4. Publish directory: `out`
5. Deploy.

### Cloudflare Pages
1. Push to GitHub.
2. Create project in Cloudflare Pages, connect the repo.
3. Build command: `npm run build`
4. Build output directory: `out`
5. Deploy.

### Vercel (if you ever want server features back)
1. Remove `output: "export"` from `next.config.ts`.
2. Push to GitHub, import at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Next.js.

## Production Checklist

- [ ] Update domain in `src/app/layout.tsx` (`metadataBase`, OpenGraph URL)
- [ ] Update domain in `src/app/sitemap.ts` (`SITE_URL`)
- [ ] Update domain in `src/app/robots.ts` (`SITE_URL`)
- [ ] Update domain in `src/components/site/json-ld.tsx` (`SITE_URL`)
- [ ] Replace `hello@haal-lab.solutions` with your real inbox if different
- [ ] Update GitHub / LinkedIn URLs in `footer.tsx`, `contact-page.tsx`, `json-ld.tsx`
- [ ] Set `NEXT_PUBLIC_FORMSPREE_ENDPOINT` secret for real form submissions (optional)
- [ ] Generate a 1200×630 OpenGraph PNG and update `openGraph.images` in layout.tsx
- [ ] Submit `sitemap.xml` to Google Search Console and Bing Webmaster Tools
- [ ] Verify with [Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Test with [PageSpeed Insights](https://pagespeed.web.dev/)

## License

Proprietary — © Haal Lab. All rights reserved.
