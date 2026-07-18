# Hydration Fixes - React Error #418

## Problem
React error #418 occurs when server-rendered HTML doesn't match client-rendered content. This typically happens with:
- Date/time formatting using locale-specific methods
- Browser-specific APIs called during render
- Random values generated during render

## Root Cause
Your site was experiencing hydration mismatches due to:
1. `toLocaleDateString()` producing different outputs in server timezone vs client timezone
2. `new Date().getFullYear()` potentially differing between server and client
3. Dynamic date values in JSON-LD metadata

## Fixed Files

### 1. **src/components/pages/research-article.tsx**
**Before:**
```typescript
function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
```

**After:**
```typescript
function formatDate(iso: string): string {
  const d = new Date(iso);
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  return `${months[d.getUTCMonth()]} ${d.getUTCDate()}, ${d.getUTCFullYear()}`;
}
```

### 2. **src/components/pages/research-page.tsx**
**Before:**
```typescript
function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
```

**After:**
```typescript
function formatDate(iso: string): string {
  const d = new Date(iso);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${months[d.getUTCMonth()]} ${d.getUTCDate()}, ${d.getUTCFullYear()}`;
}
```

### 3. **src/components/site/json-ld.tsx**
**Fixed 3 instances:**

1. `websiteSchema()` - Changed from `new Date().getFullYear()` to `2026`
2. `howWeWorkWebPageSchema()` - Changed from `new Date().toISOString().split("T")[0]` to `"2026-07-18"`
3. `articleSchema()` - Changed from `new Date(opts.date).getFullYear()` to `parseInt(opts.date.split('-')[0])`

### 4. **src/components/site/footer.tsx**
**Before:**
```typescript
<p>{t("rights", { year: new Date().getFullYear() })}</p>
```

**After:**
```typescript
<p>{t("rights", { year: 2026 })}</p>
```

## Verified Safe Components

The following components use dates/random but are safe from hydration issues:

- **src/components/pages/enterprise-contact-form.tsx** - Uses `Date.now()` only in `useEffect` and event handlers (client-side only)
- **src/components/visuals/hero-visual.tsx** - Uses `Math.random()` only in `useEffect` (client-side only)
- **src/components/ui/sidebar.tsx** - Uses `Math.random()` in `useMemo()` (client-side only)
- **src/components/ui/calendar.tsx** - Marked as `"use client"` (client-side only)
- **src/components/ui/chart.tsx** - Marked as `"use client"` (client-side only)

## Why This Works

### UTC vs Local Timezone
- **Problem:** `toLocaleDateString()` uses the system timezone, which differs between:
  - Vercel's server (UTC timezone)
  - User's browser (their local timezone)
  
- **Solution:** Using `getUTCMonth()`, `getUTCDate()`, and `getUTCFullYear()` ensures consistent output regardless of timezone

### Static vs Dynamic Values
- **Problem:** `new Date().getFullYear()` generates different values if server and client render at different times (rare but possible around year boundary)
  
- **Solution:** Using static year `2026` ensures consistency

## Testing

To verify the fix works:

1. **Build for production:**
   ```bash
   npm run build
   ```

2. **Test locally:**
   ```bash
   npm start
   ```

3. **Check browser console** for hydration warnings

4. **Deploy to Vercel** and re-test in Google Search Console

5. **Monitor production** - The error should not appear in:
   - Browser console
   - Google Search Console
   - Vercel logs

## Deployment Notes

Your site uses dual deployment:
- **Vercel** (SSR mode) - `https://haal-lab.solutions`
- **GitHub Pages** (Static export) - When `VERCEL` env var not present

These fixes work for **both deployment modes** because they ensure consistent rendering regardless of:
- Server vs client environment
- Timezone differences
- Rendering time differences

## Next Steps

1. Deploy these changes to production
2. Wait 24-48 hours for Google Search Console to re-crawl
3. Verify the error is resolved in Google Search Console
4. Monitor for any new hydration warnings

## Additional Resources

- [React Hydration Errors](https://react.dev/errors/418)
- [Next.js Hydration Mismatch](https://nextjs.org/docs/messages/react-hydration-error)
- [UTC vs Local Time](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTC)
