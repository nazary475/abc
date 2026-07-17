/**
 * Quick Indexability Test for Haal Lab
 * 
 * Tests key pages to identify indexing blockers:
 * - HTTP status codes
 * - noindex tags
 * - Canonical URLs
 * - Page titles
 * - Robots meta tags
 * 
 * Run: node test-indexing.js
 */

const https = require('https');

const SITE_URL = 'https://haal-lab.solutions';

async function checkPage(url) {
  return new Promise((resolve) => {
    https.get(url, {
      headers: { 
        'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)'
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        // Check for noindex
        const hasNoindexMeta = /<meta[^>]*name=["']robots["'][^>]*content=["'][^"']*noindex[^"']*["']/i.test(data);
        const hasNoindexHeader = res.headers['x-robots-tag']?.includes('noindex');
        const hasNoindex = hasNoindexMeta || hasNoindexHeader;
        
        // Check canonical
        const canonicalMatch = data.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i);
        const canonical = canonicalMatch ? canonicalMatch[1] : null;
        
        // Check title
        const titleMatch = data.match(/<title>([^<]+)<\/title>/i);
        const title = titleMatch ? titleMatch[1].trim() : 'No title found';
        
        // Check meta description
        const descMatch = data.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i);
        const description = descMatch ? descMatch[1].substring(0, 80) : 'No description';
        
        // Check for h1
        const h1Match = data.match(/<h1[^>]*>([^<]+)<\/h1>/i);
        const h1 = h1Match ? h1Match[1].trim() : 'No h1 found';
        
        // Check if page is too small (might be error page)
        const contentSize = data.length;
        
        resolve({
          status: res.statusCode,
          hasNoindex,
          hasNoindexMeta,
          hasNoindexHeader,
          canonical,
          title,
          description,
          h1,
          contentSize,
          headers: res.headers
        });
      });
    }).on('error', (err) => resolve({ error: err.message }));
  });
}

async function checkRobotsTxt() {
  return new Promise((resolve) => {
    https.get(`${SITE_URL}/robots.txt`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const lines = data.split('\n');
        const disallowAll = lines.some(line => /Disallow:\s*\/$/.test(line.trim()));
        const hasSitemap = lines.some(line => /Sitemap:/i.test(line));
        const allowsAll = lines.some(line => /Allow:\s*\/$/.test(line.trim()));
        
        resolve({
          status: res.statusCode,
          content: data,
          disallowAll,
          hasSitemap,
          allowsAll,
          ok: res.statusCode === 200 && !disallowAll && hasSitemap
        });
      });
    }).on('error', (err) => resolve({ error: err.message }));
  });
}

async function checkSitemap() {
  return new Promise((resolve) => {
    https.get(`${SITE_URL}/sitemap.xml`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const urlCount = (data.match(/<url>/g) || []).length;
        const isValidXML = data.includes('<?xml') && data.includes('<urlset');
        
        resolve({
          status: res.statusCode,
          urlCount,
          isValidXML,
          contentType: res.headers['content-type'],
          ok: res.statusCode === 200 && isValidXML && urlCount > 0
        });
      });
    }).on('error', (err) => resolve({ error: err.message }));
  });
}

async function run() {
  console.log('🔍 Haal Lab Indexability Test\n');
  console.log('═'.repeat(70));
  
  // Test robots.txt
  console.log('\n📄 Testing robots.txt...');
  const robots = await checkRobotsTxt();
  
  if (robots.error) {
    console.log(`  ❌ Error: ${robots.error}`);
  } else {
    console.log(`  Status: ${robots.status === 200 ? '✅' : '❌'} ${robots.status}`);
    console.log(`  Has Sitemap: ${robots.hasSitemap ? '✅' : '❌'} ${robots.hasSitemap}`);
    console.log(`  Blocks All: ${robots.disallowAll ? '❌ YES (BAD!)' : '✅ No'}`);
    console.log(`  Overall: ${robots.ok ? '✅ OK' : '❌ ISSUES FOUND'}`);
    
    if (robots.disallowAll) {
      console.log('\n  🚨 CRITICAL: robots.txt is blocking all crawlers!');
      console.log('  Remove "Disallow: /" from robots.txt immediately.');
    }
  }
  
  // Test sitemap
  console.log('\n🗺️  Testing sitemap.xml...');
  const sitemap = await checkSitemap();
  
  if (sitemap.error) {
    console.log(`  ❌ Error: ${sitemap.error}`);
  } else {
    console.log(`  Status: ${sitemap.status === 200 ? '✅' : '❌'} ${sitemap.status}`);
    console.log(`  Valid XML: ${sitemap.isValidXML ? '✅' : '❌'} ${sitemap.isValidXML}`);
    console.log(`  URLs Found: ${sitemap.urlCount}`);
    console.log(`  Content-Type: ${sitemap.contentType}`);
    console.log(`  Overall: ${sitemap.ok ? '✅ OK' : '❌ ISSUES FOUND'}`);
    
    if (!sitemap.ok) {
      console.log('\n  ⚠️  Sitemap has issues. Check format and accessibility.');
    }
  }
  
  // Test key pages
  console.log('\n🌐 Testing Key Pages...\n');
  
  const urls = [
    `${SITE_URL}/en`,
    `${SITE_URL}/en/solutions`,
    `${SITE_URL}/en/projects`,
    `${SITE_URL}/en/research`,
    `${SITE_URL}/en/about`,
  ];
  
  let hasIssues = false;
  
  for (const url of urls) {
    const path = url.replace(SITE_URL, '');
    console.log(`─`.repeat(70));
    console.log(`Testing: ${path}`);
    console.log(`─`.repeat(70));
    
    const result = await checkPage(url);
    
    if (result.error) {
      console.log(`❌ Error: ${result.error}\n`);
      hasIssues = true;
      continue;
    }
    
    // Status code
    const statusOk = result.status === 200;
    console.log(`Status Code: ${statusOk ? '✅' : '❌'} ${result.status}`);
    
    // noindex check
    if (result.hasNoindex) {
      console.log(`noindex Tag: ❌ FOUND (BLOCKING INDEXING!)`);
      if (result.hasNoindexMeta) console.log(`  → Found in meta tag`);
      if (result.hasNoindexHeader) console.log(`  → Found in X-Robots-Tag header`);
      hasIssues = true;
    } else {
      console.log(`noindex Tag: ✅ Not found`);
    }
    
    // Canonical check
    if (result.canonical) {
      const canonicalOk = result.canonical === url || result.canonical === url + '/';
      console.log(`Canonical: ${canonicalOk ? '✅' : '⚠️ '} ${result.canonical}`);
      if (!canonicalOk) {
        console.log(`  → Expected: ${url}`);
        hasIssues = true;
      }
    } else {
      console.log(`Canonical: ⚠️  Not found`);
      hasIssues = true;
    }
    
    // Title check
    const titleOk = result.title && result.title !== 'No title found' && result.title.length > 10;
    console.log(`Title: ${titleOk ? '✅' : '❌'} ${result.title}`);
    if (!titleOk) hasIssues = true;
    
    // Description check
    const descOk = result.description && result.description !== 'No description' && result.description.length > 50;
    console.log(`Description: ${descOk ? '✅' : '⚠️ '} ${result.description}...`);
    
    // H1 check
    const h1Ok = result.h1 && result.h1 !== 'No h1 found';
    console.log(`H1 Heading: ${h1Ok ? '✅' : '⚠️ '} ${result.h1}`);
    
    // Content size check
    const sizeOk = result.contentSize > 5000;
    console.log(`Content Size: ${sizeOk ? '✅' : '⚠️ '} ${(result.contentSize / 1024).toFixed(1)} KB`);
    
    console.log('');
  }
  
  // Summary
  console.log('═'.repeat(70));
  console.log('\n📊 SUMMARY\n');
  
  const allOk = !hasIssues && robots.ok && sitemap.ok;
  
  if (allOk) {
    console.log('✅ All checks passed! Your site is indexable.\n');
    console.log('If not appearing in search yet:');
    console.log('1. Request indexing in Google Search Console');
    console.log('2. Build backlinks and social signals');
    console.log('3. Wait 3-7 days for Google to index');
  } else {
    console.log('❌ Issues found that may prevent indexing:\n');
    
    if (robots.disallowAll) {
      console.log('🚨 CRITICAL: robots.txt blocking all crawlers');
    }
    
    if (hasIssues) {
      console.log('⚠️  One or more pages have indexing issues');
      console.log('   Check for noindex tags, missing titles, or wrong canonicals');
    }
    
    if (!sitemap.ok) {
      console.log('⚠️  Sitemap has issues');
    }
    
    console.log('\nSee DIAGNOSE_GSC_ISSUES.md for detailed fixes.');
  }
  
  console.log('\n═'.repeat(70));
  console.log('\n💡 Next Steps:\n');
  console.log('1. Check Google Search Console Coverage Report');
  console.log('2. Use URL Inspection tool on key pages');
  console.log('3. If issues found above, fix them immediately');
  console.log('4. Request indexing in Search Console after fixes');
  console.log('5. Build backlinks and social signals');
  console.log('\nFor detailed diagnosis, see: DIAGNOSE_GSC_ISSUES.md');
}

// Run
run().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
