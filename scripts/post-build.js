#!/usr/bin/env node

/**
 * Post-build script for static export
 * 
 * Ensures proper root redirect and GitHub Pages compatibility
 */

const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '../out');

console.log('🔧 Running post-build tasks...\n');

// Task 1: Ensure root redirect exists
const indexPath = path.join(outDir, 'index.html');
if (fs.existsSync(indexPath)) {
  console.log('✅ Root index.html already exists (from public/ folder)');
} else {
  console.log('⚠️  Root index.html missing - creating redirect...');
  
  const redirectHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="refresh" content="0; url=/en/">
  <link rel="canonical" href="https://haal-lab.solutions/en/">
  <script>window.location.replace('/en/');</script>
</head>
<body>
  <p>Redirecting to <a href="/en/">Haal Lab</a>...</p>
</body>
</html>`;
  
  fs.writeFileSync(indexPath, redirectHtml);
  console.log('✅ Created root redirect at /index.html');
}

// Task 2: Verify .nojekyll exists (required for GitHub Pages)
const nojekyllPath = path.join(outDir, '.nojekyll');
if (fs.existsSync(nojekyllPath)) {
  console.log('✅ .nojekyll file exists (GitHub Pages will serve _next correctly)');
} else {
  console.log('⚠️  Creating .nojekyll file...');
  fs.writeFileSync(nojekyllPath, '');
  console.log('✅ Created .nojekyll file');
}

// Task 3: Verify CNAME exists
const cnamePath = path.join(outDir, 'CNAME');
if (fs.existsSync(cnamePath)) {
  const domain = fs.readFileSync(cnamePath, 'utf-8').trim();
  console.log(`✅ CNAME file exists: ${domain}`);
} else {
  console.log('ℹ️  No CNAME file (using GitHub Pages default domain)');
}

// Task 4: Verify critical pages exist
const criticalPages = [
  'en/index.html',
  'de/index.html',
  'fr/index.html',
  'es/index.html',
  'it/index.html',
  'llms.txt',
  '.well-known/ai-plugin.json',
  'sitemap.xml',
  'robots.txt',
];

console.log('\n📄 Verifying critical pages:');
let allPagesExist = true;

criticalPages.forEach(page => {
  const pagePath = path.join(outDir, page);
  if (fs.existsSync(pagePath)) {
    console.log(`   ✅ ${page}`);
  } else {
    console.log(`   ❌ ${page} - MISSING!`);
    allPagesExist = false;
  }
});

// Task 5: Check for common issues
console.log('\n🔍 Checking for common issues:');

// Check if HTML files have content
const enIndexPath = path.join(outDir, 'en/index.html');
if (fs.existsSync(enIndexPath)) {
  const content = fs.readFileSync(enIndexPath, 'utf-8');
  
  if (content.includes('Your AI.') && content.includes('Your Data.')) {
    console.log('   ✅ English homepage contains expected content');
  } else {
    console.log('   ⚠️  English homepage might be missing content');
  }
  
  if (content.includes('application/ld+json')) {
    console.log('   ✅ Structured data (JSON-LD) present');
  } else {
    console.log('   ⚠️  Structured data might be missing');
  }
  
  if (content.includes('hreflang')) {
    console.log('   ✅ Multilingual hreflang tags present');
  } else {
    console.log('   ⚠️  Hreflang tags might be missing');
  }
}

// Final summary
console.log('\n' + '='.repeat(60));
if (allPagesExist) {
  console.log('✅ Post-build checks passed! Site is ready for deployment.');
} else {
  console.log('⚠️  Some pages are missing. Review the build output.');
  process.exit(1);
}
console.log('='.repeat(60) + '\n');

// Output build stats
try {
  const stats = getBuildStats(outDir);
  console.log('📊 Build Statistics:');
  console.log(`   HTML files: ${stats.html}`);
  console.log(`   CSS files: ${stats.css}`);
  console.log(`   JS files: ${stats.js}`);
  console.log(`   Total files: ${stats.total}`);
  console.log(`   Total size: ${formatBytes(stats.size)}\n`);
} catch (err) {
  console.log('ℹ️  Could not calculate build stats\n');
}

// Helper functions
function getBuildStats(dir) {
  let stats = { html: 0, css: 0, js: 0, total: 0, size: 0 };
  
  function walk(directory) {
    const files = fs.readdirSync(directory);
    
    files.forEach(file => {
      const filePath = path.join(directory, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        walk(filePath);
      } else {
        stats.total++;
        stats.size += stat.size;
        
        if (file.endsWith('.html')) stats.html++;
        else if (file.endsWith('.css')) stats.css++;
        else if (file.endsWith('.js')) stats.js++;
      }
    });
  }
  
  walk(dir);
  return stats;
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}
