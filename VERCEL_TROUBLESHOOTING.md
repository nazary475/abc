# Vercel Deployment Troubleshooting

## Issues Fixed

### 1. API Route 404 Error
**Problem:** Chat API returning 404 because of trailing slash mismatch
**Fix:** 
- Updated chat component to call `/api/chat/` with trailing slash
- Modified `next.config.ts` to disable trailing slashes on Vercel
- Vercel detection now uses `!!process.env.VERCEL` instead of exact match

### 2. Manifest.json CORS/SSO Redirect
**Problem:** Manifest being redirected through `vercel.com/sso-api`
**Root Cause:** Your Vercel deployment is password-protected or behind authentication

**Solution - Remove Password Protection:**

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Deployment Protection**
3. Disable any of these if enabled:
   - Password Protection
   - Vercel Authentication
   - IP Allowlist

**OR** if you need to keep protection:

Add these domains to the allowlist:
- Your actual domain: `haal-lab.solutions`
- Vercel domain: `*.vercel.app`

### 3. Environment Variables

Make sure these are set in Vercel:

```bash
GROQ_API_KEY=gsk_your_actual_key_here
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xbdnlvrd
```

**How to check/add:**
1. Go to Vercel Dashboard
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add both variables for all environments (Production, Preview, Development)
5. Redeploy after adding

## Deployment Checklist

Before redeploying, ensure:

- [ ] Password protection is OFF (Settings → Deployment Protection)
- [ ] Environment variables are set correctly
- [ ] `GROQ_API_KEY` is valid (test at https://console.groq.com)
- [ ] Latest code is pushed to GitHub
- [ ] Vercel is connected to the correct branch

## Redeploy Steps

### Option 1: Automatic (Recommended)
```bash
git add .
git commit -m "Fix: API routes and Vercel configuration"
git push origin main
```
Vercel will automatically redeploy.

### Option 2: Manual Redeploy
1. Go to Vercel Dashboard
2. Select your project
3. Go to **Deployments**
4. Click the **three dots** on the latest deployment
5. Click **Redeploy**
6. Select **Use existing Build Cache** → NO
7. Click **Redeploy**

## Testing After Deployment

1. **Check Deployment Logs**
   - Go to Vercel Dashboard → Deployments
   - Click on the latest deployment
   - Review build logs for errors

2. **Test API Route**
   ```bash
   curl -X POST https://your-domain.vercel.app/api/chat \
     -H "Content-Type: application/json" \
     -d '{"messages":[{"role":"user","content":"test"}]}'
   ```
   
   Should return JSON, not HTML.

3. **Test Manifest**
   ```bash
   curl -I https://your-domain.vercel.app/manifest.json
   ```
   
   Should return `200 OK`, not redirect.

4. **Test Chat Widget**
   - Open your site: `https://your-domain.vercel.app`
   - Click chat button (bottom-right)
   - Send a message: "What is Haal Lab?"
   - Should get response in 1-3 seconds

## Common Errors & Fixes

### Error: "API key not configured"
**Fix:** Add `GROQ_API_KEY` to Vercel environment variables and redeploy

### Error: "Invalid API Key"
**Fix:** 
1. Go to https://console.groq.com/keys
2. Generate a new API key
3. Update in Vercel environment variables
4. Redeploy

### Error: Manifest redirects to SSO
**Fix:** Disable password protection in Vercel settings

### Error: Chat button appears but no response
**Fix:** 
1. Open browser console (F12)
2. Check for errors
3. Verify API route is accessible
4. Check Vercel function logs

## Vercel Function Logs

To debug API issues:

1. Go to Vercel Dashboard
2. Select your project
3. Go to **Logs** or **Functions**
4. Filter for `/api/chat`
5. Look for error messages

## DNS/Domain Issues

If domain isn't working:

1. **Verify DNS Records**
   ```
   Type: CNAME
   Name: @ (or your subdomain)
   Value: cname.vercel-dns.com
   ```

2. **Check SSL Certificate**
   - Go to Vercel → Settings → Domains
   - SSL should show "Active"
   - If not, click "Refresh" or wait 24 hours

3. **Test DNS Propagation**
   - Visit: https://dnschecker.org
   - Enter your domain
   - Should resolve to Vercel's IP

## Performance Optimization

After fixing issues, optimize:

1. **Enable Edge Functions**
   - Add `export const runtime = 'edge';` to `route.ts`

2. **Add Response Caching**
   ```typescript
   export const revalidate = 0; // No cache for API routes
   ```

3. **Monitor Usage**
   - Check Groq API usage: https://console.groq.com
   - Check Vercel function invocations: Vercel Dashboard

## Still Not Working?

1. **Check Vercel Status**
   - Visit: https://www.vercel-status.com

2. **Review Build Logs**
   - Deployment → Build Logs
   - Look for TypeScript or build errors

3. **Test Locally**
   ```bash
   npm run build
   npm start
   ```
   
   If works locally but not on Vercel, it's a deployment configuration issue.

4. **Contact Support**
   - Vercel: https://vercel.com/support
   - Groq: https://console.groq.com/support

## Additional Resources

- Vercel Next.js Guide: https://vercel.com/docs/frameworks/nextjs
- Vercel Environment Variables: https://vercel.com/docs/projects/environment-variables
- Next.js API Routes: https://nextjs.org/docs/app/building-your-application/routing/route-handlers
- Groq API Docs: https://console.groq.com/docs

---

## Summary of Changes Made

1. ✅ Fixed API route path in chat component (added trailing slash)
2. ✅ Improved Vercel detection in next.config.ts
3. ✅ Disabled trailing slashes for Vercel deployments
4. ✅ Kept static export for GitHub Pages

**Next Steps:**
1. Commit and push changes
2. Remove password protection from Vercel
3. Verify environment variables are set
4. Test the deployment

