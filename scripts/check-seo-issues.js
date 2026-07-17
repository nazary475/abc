/**
 * SEO Health Check Script for Haal Lab
 * 
 * Runs automated checks to identify SEO issues preventing search engine visibility.
 * Run: node scripts/check-seo-issues.js
 */

const https = require('https');
const http = require('http');

const SITE_URL = 'https://haal-lab.solutions';
const CHECKS = [];

// Helper to make HTTP requests
function fetch(url) {
  return new Promise((resolve, reject) => {
    const lib = url.startsWith('https') ? https : http;
    lib.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; SEO-Check/1.0)',
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, body: data }));
    }).on('error', reject);
  });
}

// Check 1: Homepage Accessibility
CHECKS.push({
  name: 'Homepage Accessible',
  check: async () => {
    try {
      const res = await fetch(SITE_URL);
      return {
        pass: res.status === 200,
        message: res.status === 200 
          ? '✅ Homepage returns 200 OK'
          : `❌ Homepage returns ${res.status}`,
        details: { status: res.status }
      };
    } catch (err) {
      return {
        pass: false,
        message: `❌ Cannot reach homepage: ${err.message}`,
        fix: 'Verify domain is live and DNS is configured correctly'
      };
    }
  }
});

// Check 2: Robots.txt
CHECKS.push({
  name: 'Robots.txt Valid',
  check: async () => {
    try {
      const res = await fetch(`${SITE_URL}/robots.txt`);
      const isValid = res.status === 200 && res.body.includes('Sitemap:');
      const blocksAll = res.body.includes('Disallow: /') && !res.body.includes('Allow:');
      
      return {
        pass: isValid && !blocksAll,
        message: isValid 
          ? (blocksAll 
            ? '⚠️  Robots.txt blocks all crawlers!'
            : '✅ Robots.txt is valid')
          : '❌ Robots.txt missing or invalid',
        details: { 
          blocksAll,
          sitemapReferenced: res.body.includes('Sitemap:')
        },
        fix: blocksAll ? 'Remove "Disallow: /" from robots.txt' : undefined
      };
    } catch (err) {
      return {
        pass: false,
        message: `❌ Cannot fetch robots.txt: ${err.message}`,
      };
    }
  }
});

// Check 3: Sitemap
CHECKS.push({
  name: 'Sitemap Accessible',
  check: async () => {
    try {
      const res = await fetch(`${SITE_URL}/sitemap.xml`);
      const isXML = res.headers['content-type']?.includes('xml');
      const hasUrls = res.body.includes('<url>') || res.body.includes('<loc>');
      
      return {
        pass: res.status === 200 && isXML && hasUrls,
        message: (res.status === 200 && hasUrls)
          ? '✅ Sitemap is valid'
          : '❌ Sitemap missing or invalid',
        details: {
          contentType: res.headers['content-type'],
          hasUrls
        }
      };
    } catch (err) {
      return {
        pass: false,
        message: `❌ Cannot fetch sitemap: ${err.message}`,
      };
    }
  }
});

// Check 4: Meta Tags
CHECKS.push({
  name: 'Essential Meta Tags',
  check: async () => {
    try {
      const res = await fetch(SITE_URL);
      const html = res.body;
      
      const hasTitle = /<title>.*?<\/title>/i.test(html);
      const hasDescription = /<meta\s+name=["']description["']/i.test(html);
      const hasOG = /<meta\s+property=["']og:/i.test(html);
      const hasCanonical = /<link\s+rel=["']canonical["']/i.test(html);
      const hasViewport = /<meta\s+name=["']viewport["']/i.test(html);
      
      const issues = [];
      if (!hasTitle) issues.push('Missing <title>');
      if (!hasDescription) issues.push('Missing meta description');
      if (!hasOG) issues.push('Missing Open Graph tags');
      if (!hasCanonical) issues.push('Missing canonical URL');
      if (!hasViewport) issues.push('Missing viewport meta');
      
      return {
        pass: issues.length === 0,
        message: issues.length === 0
          ? '✅ All essential meta tags present'
          : `⚠️  Missing meta tags: ${issues.join(', ')}`,
        details: { hasTitle, hasDescription, hasOG, hasCanonical, hasViewport }
      };
    } catch (err) {
      return {
        pass: false,
        message: `❌ Cannot check meta tags: ${err.message}`,
      };
    }
  }
});

// Check 5: Google Verification
CHECKS.push({
  name: 'Google Verification Tag',
  check: async () => {
    try {
      const res = await fetch(SITE_URL);
      const html = res.body;
      
      const hasVerification = /<meta\s+name=["']google-site-verification["']/i.test(html);
      const isPlaceholder = /your-google-verification-code/i.test(html);
      
      return {
        pass: hasVerification && !isPlaceholder,
        message: !hasVerification
          ? '❌ No Google verification tag found'
          : (isPlaceholder
            ? '⚠️  Google verification tag is placeholder'
            : '✅ Google verification tag present'),
        details: { hasVerification, isPlaceholder },
        fix: isPlaceholder || !hasVerification
          ? 'Add real verification code from Google Search Console'
          : undefined
      };
    } catch (err) {
      return {
        pass: false,
        message: `❌ Cannot check verification: ${err.message}`,
      };
    }
  }
});

// Check 6: Structured Data
CHECKS.push({
  name: 'Structured Data (JSON-LD)',
  check: async () => {
    try {
      const res = await fetch(SITE_URL);
      const html = res.body;
      
      const hasJSONLD = /<script\s+type=["']application\/ld\+json["']/i.test(html);
      const hasOrganization = /"@type":\s*"Organization"/i.test(html);
      const hasWebsite = /"@type":\s*"Website"/i.test(html);
      
      return {
        pass: hasJSONLD && (hasOrganization || hasWebsite),
        message: hasJSONLD
          ? `✅ Structured data present (${[hasOrganization && 'Organization', hasWebsite && 'Website'].filter(Boolean).join(', ')})`
          : '⚠️  No structured data found',
        details: { hasJSONLD, hasOrganization, hasWebsite }
      };
    } catch (err) {
      return {
        pass: false,
        message: `❌ Cannot check structured data: ${err.message}`,
      };
    }
  }
});

// Check 7: Page Speed Hints
CHECKS.push({
  name: 'Performance Indicators',
  check: async () => {
    try {
      const start = Date.now();
      const res = await fetch(SITE_URL);
      const loadTime = Date.now() - start;
      
      const hasGzip = res.headers['content-encoding']?.includes('gzip') || 
                      res.headers['content-encoding']?.includes('br');
      const hasCaching = !!res.headers['cache-control'];
      
      return {
        pass: loadTime < 2000,
        message: loadTime < 2000
          ? `✅ Fast initial load (${loadTime}ms)`
          : `⚠️  Slow initial load (${loadTime}ms)`,
        details: {
          loadTime,
          hasCompression: hasGzip,
          hasCaching
        }
      };
    } catch (err) {
      return {
        pass: false,
        message: `❌ Cannot check performance: ${err.message}`,
      };
    }
  }
});

// Check 8: Mobile-Friendly
CHECKS.push({
  name: 'Mobile Viewport',
  check: async () => {
    try {
      const res = await fetch(SITE_URL);
      const html = res.body;
      
      const viewportMeta = html.match(/<meta\s+name=["']viewport["']\s+content=["']([^"']+)["']/i);
      const hasWidthDevice = viewportMeta?.[1]?.includes('width=device-width');
      
      return {
        pass: hasWidthDevice,
        message: hasWidthDevice
          ? '✅ Mobile viewport configured'
          : '⚠️  No mobile viewport meta tag',
        details: { viewport: viewportMeta?.[1] }
      };
    } catch (err) {
      return {
        pass: false,
        message: `❌ Cannot check viewport: ${err.message}`,
      };
    }
  }
});

// Run all checks
async function runChecks() {
  console.log('🔍 Running SEO Health Check for Haal Lab\n');
  console.log('━'.repeat(60));
  
  const results = [];
  let passed = 0;
  let failed = 0;
  let warnings = 0;
  
  for (const test of CHECKS) {
    process.stdout.write(`Checking ${test.name}... `);
    try {
      const result = await test.check();
      results.push({ name: test.name, ...result });
      
      if (result.pass) {
        passed++;
      } else if (result.message.includes('⚠️')) {
        warnings++;
      } else {
        failed++;
      }
      
      console.log(result.message);
      if (result.fix) {
        console.log(`  💡 Fix: ${result.fix}`);
      }
    } catch (err) {
      results.push({ 
        name: test.name, 
        pass: false, 
        message: `❌ Test error: ${err.message}` 
      });
      failed++;
      console.log(`❌ Error running check: ${err.message}`);
    }
    console.log('');
  }
  
  console.log('━'.repeat(60));
  console.log(`\n📊 Results: ${passed} passed, ${warnings} warnings, ${failed} failed\n`);
  
  // Critical issues
  const critical = results.filter(r => !r.pass && !r.message.includes('⚠️'));
  if (critical.length > 0) {
    console.log('🚨 CRITICAL ISSUES TO FIX:\n');
    critical.forEach(r => {
      console.log(`   ${r.message}`);
      if (r.fix) console.log(`      → ${r.fix}`);
    });
    console.log('');
  }
  
  // Next steps
  console.log('📋 NEXT STEPS:\n');
  console.log('1. Fix critical issues above');
  console.log('2. Set up Google Search Console: https://search.google.com/search-console');
  console.log('3. Submit sitemap in Search Console');
  console.log('4. Request indexing for key pages');
  console.log('5. Monitor indexing status (takes 2-7 days)');
  console.log('\nSee SEO_FIX_PLAN.md for detailed instructions.');
}

// Run
runChecks().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
