# 🔧 Vercel API Route 404 - Root Cause & Fix

## The Problem

Your Vercel deployment was showing **404 for `/api/chat/`** because:

1. ❌ **Static Export Mode** - The build was using `output: "export"` which strips out API routes
2. ❌ **postbuild Script** - Was creating `out/.nojekyll` which indicated static export
3. ❌ **No vercel.json** - Vercel wasn't explicitly configured for Next.js server mode

## Why API Routes Need Server Mode

**API routes CANNOT work with static export** because:
- Static export (`output: "export"`) generates only HTML/CSS/JS files
- API routes require server-side execution (Node.js runtime)
- They need to handle POST requests, call external APIs, process data

Think of it like this:
- 📄 **Static Export** = Pre-built HTML files (GitHub Pages)
- 🚀 **Server Mode** = Live Node.js server (Vercel, Netlify)

Your site needs **TWO different builds**:
1. **Vercel** → Server mode (with API routes)
2. **GitHub Pages** → Static export (no API routes)

## The Complete Fix

### 1. Created `vercel.json` ✅

This tells Vercel explicitly to use server mode:

```json
{
  "buildCommand": "next build",
  "framework": "nextjs",
  "outputDirectory": ".next"
}
```

### 2. Fixed `package.json` Scripts ✅

Separated static and server builds:

```json
{
  "scripts": {
    "build": "next build",              // For Vercel (server mode)
    "build:static": "next build && ...", // For GitHub Pages (static)
  }
}
```

### 3. Updated `next.config.ts` ✅

Proper Vercel detection:

```typescript
const isVercel = !!process.env.VERCEL;

const nextConfig = {
  // Only use static export when NOT on Vercel
  ...(isVercel ? {} : { output: "export" }),
  trailingSlash: !isVercel,
  // ...
};
```

### 4. Updated GitHub Actions ✅

Use `build:static` for GitHub Pages deployment:

```yaml
- name: Build static site
  run: npm run build:static
```

### 5. Fixed Chat Component ✅

Use correct API path (no trailing slash on Vercel):

```typescript
fetch('/api/chat', { ... })  // ✅ Correct for Vercel
```

## How It Works Now

### On Vercel:
1. Detects `VERCEL` environment variable
2. Builds in **server mode** (keeps API routes)
3. Deploys to `.next` directory
4. API routes work at `/api/chat`

### On GitHub Pages:
1. No `VERCEL` variable
2. Builds in **static export mode**
3. Deploys to `out` directory
4. No API routes (chat won't work, but that's expected)

## Deployment Steps

### Step 1: Commit Changes
```bash
git add .
git commit -m "fix: Configure Vercel for server mode with API routes"
git push origin main
```

### Step 2: Verify Vercel Environment Variables

Go to Vercel Dashboard → Your Project → Settings → Environment Variables

**Required:**
```
GROQ_API_KEY=gsk_your_key_here
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xbdnlvrd
```

**Set for ALL environments:**
- ✅ Production
- ✅ Preview  
- ✅ Development

### Step 3: Force Rebuild on Vercel

Option A - Automatic:
- Push to GitHub (already done in Step 1)
- Vercel auto-deploys in 1-2 minutes

Option B - Manual:
1. Go to Vercel Dashboard
2. Deployments tab
3. Click **⋮** on latest deployment
4. Click **Redeploy**
5. **Uncheck** "Use existing Build Cache"
6. Click **Redeploy**

### Step 4: Verify Build Output

Check Vercel deployment logs for:

✅ **Good signs:**
```
Building Next.js application...
Creating an optimized production build...
Route (app)                     Size     First Load JS
┌ ○ /api/chat                   0 B              0 B    ← API route present!
└ ○ /                           1.2 kB          85 kB
```

❌ **Bad signs:**
```
Exporting (3/3)
Export complete
```
This means static export mode (wrong!)

## Testing After Deployment

### 1. Test API Endpoint Directly

```bash
curl -X POST https://abc-zqp4-7aomiqjd2-hussainnazary2s-projects.vercel.app/api/chat \
  -H "Content-Type: application/json" \
  -d '{"messages":[{"role":"user","content":"test"}]}'
```

**Expected response:**
```json
{
  "message": "AI response here...",
  "usage": { ... }
}
```

**NOT:**
```html
<!DOCTYPE html>
<html>404 - This page could not be found</html>
```

### 2. Test in Browser Console

Open your site and run:

```javascript
fetch('/api/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    messages: [{ role: 'user', content: 'What is Haal Lab?' }]
  })
})
.then(r => r.json())
.then(console.log)
.catch(console.error);
```

**Should return:**
```javascript
{
  message: "Haal Lab is a deep-tech AI engineering company...",
  usage: { ... }
}
```

### 3. Test Chat Widget

1. Click chat button (bottom-right)
2. Type: "What is Haal Lab?"
3. Press Enter
4. Should get response in 1-3 seconds

## Troubleshooting

### Still Getting 404?

**Check build logs:**
1. Vercel Dashboard → Deployments
2. Click latest deployment
3. View **Build Logs**
4. Search for "Export" - if found, it's building in static mode (bad)
5. Should see "Creating an optimized production build" (good)

**Check output directory:**
- Look for `.vercel/output` or `.next` (good)
- If you see `out` directory, it's static export (bad)

### "API key not configured" Error?

**Check environment variables:**
```bash
# In Vercel CLI (if installed)
vercel env ls

# Or check in Vercel Dashboard
```

Make sure `GROQ_API_KEY` is set for Production environment.

### Build Succeeds but API Still 404?

**Check routes in build output:**

In Vercel build logs, look for:
```
Route (app)                     Size
┌ ○ /api/chat
```

If you don't see `/api/chat` listed, the route isn't being built.

**Possible causes:**
- TypeScript errors in route.ts
- File in wrong location
- Still using static export

**Solution:**
```bash
# Test build locally
npm run build

# Check for API routes in output
ls -la .next/server/app/api/chat/
# Should show route.js file
```

## Key Takeaways

1. **Vercel needs server mode for API routes** - NOT static export
2. **`vercel.json` ensures proper configuration**
3. **Separate build commands** for GitHub Pages vs Vercel
4. **Environment variables MUST be set in Vercel dashboard**
5. **Check build logs** to verify server mode

## Files Changed

- ✅ `vercel.json` - Created (forces server mode)
- ✅ `package.json` - Separated build scripts
- ✅ `next.config.ts` - Better Vercel detection
- ✅ `.github/workflows/deploy.yml` - Use `build:static`
- ✅ `src/components/chat-assistant.tsx` - Correct API path

## Next Steps

1. ✅ Commit and push changes (you're doing this now)
2. ⏳ Wait for Vercel deployment (1-2 minutes)
3. 🧪 Test API endpoint
4. 🎉 Verify chat widget works

---

**Still having issues?** Check the build logs in Vercel Dashboard first!
