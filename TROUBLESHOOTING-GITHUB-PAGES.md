# Troubleshooting: "Site Not Reachable" on GitHub Pages

Your site works locally but shows "This site is not reachable" when deployed to GitHub Pages with custom domain `haal-lab.solutions`.

## Quick Diagnosis Steps

### 1. Check GitHub Pages Deployment Status

**Go to your GitHub repository:**
1. Navigate to `https://github.com/YOUR-USERNAME/haal-lab`
2. Click **Actions** tab
3. Check if the latest workflow run succeeded ✅ or failed ❌
4. If failed, click on it to see the error logs

**Expected:** You should see a green checkmark ✅

### 2. Check GitHub Pages Settings

**Go to Repository Settings:**
1. Click **Settings** → **Pages** (left sidebar)
2. Verify:
   - **Source:** Should be "GitHub Actions"
   - **Custom domain:** Should show `haal-lab.solutions`
   - **Enforce HTTPS:** Should be checked
   - **DNS check:** Should show a green checkmark ✅

**If you see warnings:**
- ⚠️ "DNS check failed" → Your DNS is not configured correctly
- ⚠️ "Certificate is being issued" → Wait 10-20 minutes for HTTPS

### 3. Check DNS Configuration

**Open Command Prompt and run:**

```cmd
nslookup haal-lab.solutions
```

**Expected output (one of these):**
```
# Option A: A records pointing to GitHub Pages IPs
Address: 185.199.108.153
Address: 185.199.109.153
Address: 185.199.110.153
Address: 185.199.111.153

# Option B: CNAME pointing to your GitHub Pages
Non-authoritative answer:
haal-lab.solutions
    canonical name = YOUR-USERNAME.github.io
```

**If you see:**
- Different IPs → DNS is pointing to wrong server
- "No such host" → Domain doesn't exist or DNS not propagated
- No response → DNS records not set up

### 4. Test GitHub Pages Default URL

Try accessing your site via the GitHub Pages default URL:
```
https://YOUR-USERNAME.github.io/haal-lab/
```

**If this works but custom domain doesn't:**
→ Problem is with DNS configuration

**If this also doesn't work:**
→ Problem is with the build/deployment

## Common Issues & Solutions

### Issue 1: DNS Not Configured

**Symptoms:**
- `nslookup` shows wrong IPs or no records
- GitHub Pages shows "DNS check failed"

**Solution:**
Go to your domain registrar (where you bought haal-lab.solutions) and add these DNS records:

**Option A: Using A Records (Recommended)**
```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153

Type: CNAME
Name: www
Value: YOUR-USERNAME.github.io
```

**Option B: Using CNAME**
```
Type: CNAME
Name: @
Value: YOUR-USERNAME.github.io
```

**Note:** Replace `YOUR-USERNAME` with your actual GitHub username

**DNS Propagation:**
- Changes can take 5 minutes to 48 hours
- Check propagation: https://dnschecker.org/#A/haal-lab.solutions

### Issue 2: CNAME File Missing or Wrong

**Check if CNAME file exists in the build output:**

```cmd
type out\CNAME
```

**Expected:** Should show `haal-lab.solutions`

**If it shows something else or is missing:**
1. Edit `public/CNAME` file
2. Make sure it contains only: `haal-lab.solutions`
3. No trailing spaces or newlines
4. Rebuild: `npm run build`
5. Push to GitHub again

### Issue 3: Build Failed

**Check GitHub Actions:**
1. Go to **Actions** tab in your repository
2. Click on the latest workflow run
3. Look for red ❌ marks
4. Click on failed step to see error

**Common build errors:**
- TypeScript errors → Run `npm run build` locally to see them
- Missing dependencies → Run `npm install`
- Environment variables → Check if secrets are set correctly

### Issue 4: Wrong Base Path

**For custom domain, base path should be empty.**

**Check your build settings:**
1. Go to repository **Settings** → **Secrets and variables** → **Actions**
2. Make sure `NEXT_PUBLIC_BASE_PATH` is **NOT SET** or is **EMPTY**
3. If it's set to `/haal-lab` or anything else, **delete it**

### Issue 5: HTTPS Certificate Pending

**Symptoms:**
- Site works on HTTP but not HTTPS
- Browser shows "Not Secure" or certificate error

**Solution:**
1. Go to repository **Settings** → **Pages**
2. Check if it says "Certificate is being issued"
3. Wait 10-20 minutes
4. Try again

**Force certificate renewal:**
1. Uncheck "Enforce HTTPS"
2. Save
3. Remove custom domain
4. Save
5. Re-add custom domain: `haal-lab.solutions`
6. Save
7. Check "Enforce HTTPS"

## Step-by-Step Resolution

Follow these steps in order:

### Step 1: Verify Build is Working
```cmd
cd C:\Users\MY-PC\Desktop\haal-lab
npm run build
```
✅ Should complete without errors

### Step 2: Check GitHub Actions
1. Go to your repo → **Actions** tab
2. Verify latest run shows ✅
3. If ❌, click on it and read the error

### Step 3: Verify DNS
```cmd
nslookup haal-lab.solutions
```
Should return GitHub Pages IPs (185.199.108/109/110/111.153)

### Step 4: Wait for DNS Propagation
- Check: https://dnschecker.org/#A/haal-lab.solutions
- Should show green checkmarks ✅ worldwide
- May take up to 24 hours

### Step 5: Test Default GitHub Pages URL
Try: `https://YOUR-USERNAME.github.io/haal-lab/`
- If works → DNS issue
- If doesn't work → Build/deployment issue

### Step 6: Clear Custom Domain & Re-add
1. Go to **Settings** → **Pages**
2. Remove custom domain
3. Save
4. Wait 5 minutes
5. Re-add: `haal-lab.solutions`
6. Check "Enforce HTTPS"
7. Wait for DNS check ✅

### Step 7: Check Browser
1. Clear browser cache (Ctrl + Shift + Delete)
2. Try incognito/private mode
3. Try different browser
4. Try from phone on mobile data (different network)

## Diagnostic Commands

Run these commands and share the output if you need help:

```cmd
REM Check DNS
nslookup haal-lab.solutions

REM Check if site is reachable
curl -I https://haal-lab.solutions

REM Check CNAME file
type out\CNAME

REM Check if build output exists
dir out

REM Test local build
npm run build
```

## Current Status Checklist

Check off what's working:

- [ ] `npm run build` completes successfully locally
- [ ] GitHub Actions workflow shows green ✅
- [ ] CNAME file exists in `out/` folder
- [ ] DNS records are configured at domain registrar
- [ ] `nslookup haal-lab.solutions` returns GitHub Pages IPs
- [ ] GitHub Pages settings show custom domain
- [ ] DNS check shows green ✅ in GitHub Pages settings
- [ ] HTTPS certificate is issued
- [ ] Site works on default GitHub URL
- [ ] Site works on custom domain

## Still Not Working?

### Check These:

1. **Is your repository public?**
   - GitHub Pages free tier only works for public repos
   - Go to **Settings** → **General** → Check visibility

2. **Are you using the right GitHub username?**
   - CNAME should point to `YOUR-ACTUAL-USERNAME.github.io`
   - Not `haal-lab.github.io` (unless that's your username)

3. **Is the domain purchased and active?**
   - Check your domain registrar
   - Make sure domain hasn't expired
   - Make sure DNS management is enabled

4. **Try the apex domain vs www:**
   - Try: `https://haal-lab.solutions`
   - Try: `https://www.haal-lab.solutions`
   - One might work while the other doesn't

### Get More Help

If still stuck, provide:
1. Your GitHub username
2. Repository name
3. Output of `nslookup haal-lab.solutions`
4. Screenshot of GitHub Pages settings
5. Screenshot of latest GitHub Actions run
6. Domain registrar name

## Quick Fix Summary

**Most common solution (95% of cases):**

1. Configure DNS records at your domain registrar:
   ```
   Type: A, Name: @, Value: 185.199.108.153
   Type: A, Name: @, Value: 185.199.109.153
   Type: A, Name: @, Value: 185.199.110.153
   Type: A, Name: @, Value: 185.199.111.153
   ```

2. Wait 5-30 minutes for DNS propagation

3. Check GitHub Pages settings shows DNS check ✅

4. Done! 🎉

---

**Last Updated:** 2026-07-14
