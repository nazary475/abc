# 🚀 Deploying AI Assistant to Your Domain

## Current Setup

Your website is deployed to **haal-lab.solutions** using **GitHub Pages** via GitHub Actions.

## ⚠️ Important Issue: API Keys on GitHub Pages

**GitHub Pages serves static files only** - it cannot securely handle API keys because:
- All files are public and visible in the browser
- There's no server-side code execution
- API keys would be exposed in the JavaScript bundle

## ✅ Solution Options

You have 3 options to make the AI assistant work on your domain:

---

## Option 1: Use Vercel (Recommended - Easiest) ⭐

Vercel supports Next.js API routes natively and can handle environment variables securely.

### Steps:

1. **Sign up for Vercel** (free):
   - Go to https://vercel.com
   - Sign up with your GitHub account

2. **Import your repository**:
   - Click "Add New Project"
   - Select your `haal` repository
   - Click "Import"

3. **Add environment variables**:
   - In project settings, go to "Environment Variables"
   - Add these variables:
   
   ```
   Name: GROQ_API_KEY
   Value: <your_groq_api_key_from_console.groq.com>
   
   Name: NEXT_PUBLIC_FORMSPREE_ENDPOINT
   Value: https://formspree.io/f/xbdnlvrd
   ```

4. **Deploy**:
   - Click "Deploy"
   - Wait for build to complete

5. **Set up custom domain**:
   - Go to Project Settings → Domains
   - Add `haal-lab.solutions`
   - Update your DNS records as instructed by Vercel
   - Vercel will automatically handle HTTPS

6. **Done!** 🎉
   - Your site will be live at haal-lab.solutions
   - AI assistant will work perfectly
   - Auto-deploys on every push to main

**Pros:**
- ✅ Free for personal projects
- ✅ Automatic deployments from GitHub
- ✅ Secure environment variables
- ✅ Excellent Next.js support
- ✅ Custom domain with free HTTPS
- ✅ Fast global CDN

---

## Option 2: Use Netlify

Similar to Vercel but with different features.

### Steps:

1. **Sign up**: https://netlify.com
2. **Import repository**: Connect to your GitHub repo
3. **Build settings**:
   - Build command: `npm run build`
   - Publish directory: `out`
4. **Environment variables**:
   - Add `GROQ_API_KEY` with your API key
   - Add `NEXT_PUBLIC_FORMSPREE_ENDPOINT`
5. **Deploy**
6. **Custom domain**: Add haal-lab.solutions in domain settings

**Pros:**
- ✅ Free tier available
- ✅ Good Next.js support
- ✅ Automatic deployments
- ✅ Secure environment variables

---

## Option 3: Self-Host on VPS (Advanced)

Deploy to your own server (like Hetzner, DigitalOcean, etc.)

### Requirements:
- A VPS or cloud server
- Node.js installed
- PM2 or similar process manager
- Nginx or Caddy for reverse proxy

### Steps:

1. **Set up server**:
   ```bash
   # Install Node.js 20+
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt-get install -y nodejs
   
   # Install PM2
   sudo npm install -g pm2
   ```

2. **Clone repository**:
   ```bash
   git clone https://github.com/nazary475/haal.git
   cd haal
   npm install
   ```

3. **Create `.env.local`**:
   ```bash
   echo "GROQ_API_KEY=<your_api_key_here>" > .env.local
   echo "NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/xbdnlvrd" >> .env.local
   ```

4. **Build and start**:
   ```bash
   npm run build
   pm2 start npm --name "haal-lab" -- start
   pm2 save
   pm2 startup
   ```

5. **Set up reverse proxy** (Nginx example):
   ```nginx
   server {
       listen 80;
       server_name haal-lab.solutions;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

6. **Set up HTTPS**:
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d haal-lab.solutions
   ```

**Pros:**
- ✅ Full control
- ✅ No vendor lock-in
- ✅ Can add custom services

**Cons:**
- ❌ Requires server management
- ❌ Manual deployments (unless you set up CI/CD)
- ❌ You manage security updates

---

## 🎯 Recommended: Use Vercel

For your use case, **Vercel is the best option** because:

1. **Free** for personal/commercial projects
2. **Zero configuration** - works out of the box with Next.js
3. **Secure** environment variables
4. **Auto-deploys** from GitHub
5. **Fast** global CDN
6. **Easy** custom domain setup

---

## 📋 Quick Start with Vercel

### 1. Merge Your PR

First, merge your AI assistant feature:

1. Go to: https://github.com/nazary475/haal/pull/new/feature/ai-assistant-clean
2. Click "Create Pull Request"
3. Review changes
4. Click "Merge Pull Request"

### 2. Deploy to Vercel

1. Go to https://vercel.com/signup
2. Sign up with GitHub
3. Click "Add New..." → "Project"
4. Import `nazary475/haal`
5. Add environment variables:
   - `GROQ_API_KEY`: Your Groq API key
   - `NEXT_PUBLIC_FORMSPREE_ENDPOINT`: Your Formspree endpoint
6. Click "Deploy"

### 3. Set Up Custom Domain

1. In Vercel dashboard, go to your project
2. Click "Settings" → "Domains"
3. Add `haal-lab.solutions`
4. Follow DNS instructions:

   **For Cloudflare (if you use it):**
   ```
   Type: CNAME
   Name: @
   Target: cname.vercel-dns.com
   Proxy: DNS only (gray cloud)
   ```

   **Or directly:**
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   
   Type: CNAME
   Name: www
   Target: cname.vercel-dns.com
   ```

5. Wait for DNS propagation (5-30 minutes)
6. Your site will be live with HTTPS!

---

## 🔐 Security Note

- ✅ **Never commit API keys** to GitHub
- ✅ **Use environment variables** in Vercel/Netlify
- ✅ **Rotate keys** if accidentally exposed
- ✅ **Monitor usage** at https://console.groq.com

---

## ✅ Testing After Deployment

Once deployed:

1. Visit `https://haal-lab.solutions`
2. Look for the chat button (bottom-right)
3. Click and send a message: "What is Haal Lab?"
4. Should get a response in 1-3 seconds
5. Try uploading an image
6. Verify everything works

---

## 🆘 Troubleshooting

### Chat button doesn't appear:
- Check browser console for errors (F12)
- Verify build completed successfully
- Check environment variables are set

### "Invalid API Key" error:
- Verify `GROQ_API_KEY` is set correctly in Vercel
- Check for typos or extra spaces
- Generate a new key from https://console.groq.com

### Chat loads but no response:
- Check API key is valid
- Verify Groq API has credits
- Check network tab for 401/500 errors

---

## 📞 Need Help?

If you need help setting up:
1. Check Vercel documentation: https://vercel.com/docs
2. Check deployment logs in Vercel dashboard
3. Review environment variables are set correctly

---

## 🎉 Summary

**Recommended path:**
1. ✅ Merge your PR to main branch
2. ✅ Sign up for Vercel (free)
3. ✅ Import your GitHub repo
4. ✅ Add environment variables
5. ✅ Deploy
6. ✅ Set up custom domain
7. ✅ Done! Your AI assistant will work perfectly

Total time: **~15 minutes** ⚡
