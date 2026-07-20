#!/usr/bin/env node

/**
 * SEO Verification Script
 * 
 * Checks that the built site has proper SEO elements
 */

const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '../out');
const enIndexPath = path.join(outDir, 'en/index.html');

console.log('🔍 SEO Verification for Haal Lab\n');
console.log('='.repeat(60));

if (!fs.existsSync(enIndexPath)) {
  console.error('❌ ERROR: out/en/index.html not found!');
  console.error('   Run "npm run build" first.');
  process.exit(1);
}

const html = fs.readFileSync(enIndexPath, 'utf-8');

// Test suite
const tests = [
  {
    name: 'Page title',
    check: () => html.includes('<title>Haal Lab'),
    expected: 'Should contain "Haal Lab" in title tag',
  },
  {
    name: 'Meta description',
    check: () => html.includes('meta name="description"'),
    expected: 'Should have meta description',
  },
  {
    name: 'Hero content',
    check: () => html.includes('Your AI.') && html.includes('Your Data.'),
    expected: 'Should contain main heading "Your AI. Your Data."',
  },
  {
    name: 'Marketing copy',
    check: () => html.includes('deployed within your environment'),
    expected: 'Should contain key marketing messages',
  },
  {
    name: 'JSON-LD structured data',
    check: () => html.includes('application/ld+json') && html.includes('@context'),
    expected: 'Should have structured data (JSON-LD)',
  },
  {
    name: 'Organization schema',
    check: () => html.includes('"@type":"Organization"'),
    expected: 'Should have Organization schema',
  },
  {
    name: 'WebSite schema',
    check: () => html.includes('"@type":"WebSite"'),
    expected: 'Should have WebSite schema',
  },
  {
    name: 'FAQ schema',
    check: () => html.includes('"@type":"FAQPage"'),
    expected: 'Should have FAQPage schema',
  },
  {
    name: 'Hreflang tags',
    check: () => {
      return html.includes('hreflang="en"') &&
             html.includes('hreflang="de"') &&
             html.includes('hreflang="fr"') &&
             html.includes('hreflang="x-default"');
    },
    expected: 'Should have hreflang tags for all languages + x-default',
  },
  {
    name: 'Canonical URL',
    check: () => html.includes('rel="canonical"'),
    expected: 'Should have canonical URL',
  },
  {
    name: 'Open Graph tags',
    check: () => html.includes('property="og:title"') && html.includes('property="og:description"'),
    expected: 'Should have Open Graph tags',
  },
  {
    name: 'Twitter Card',
    check: () => html.includes('name="twitter:card"'),
    expected: 'Should have Twitter Card meta tags',
  },
  {
    name: 'Robots meta',
    check: () => html.includes('meta name="robots"') || html.includes('meta name="googlebot"'),
    expected: 'Should have robots meta tag',
  },
  {
    name: 'Keywords',
    check: () => html.includes('meta name="keywords"') && html.includes('AI engineering'),
    expected: 'Should have keywords meta tag',
  },
  {
    name: 'Viewport meta',
    check: () => html.includes('meta name="viewport"'),
    expected: 'Should have viewport meta tag',
  },
  {
    name: 'Language attribute',
    check: () => html.includes('lang="en"'),
    expected: 'Should have lang attribute on html tag',
  },
  {
    name: 'Navigation',
    check: () => html.includes('Solutions') || html.includes('Vision'),
    expected: 'Should have navigation menu',
  },
  {
    name: 'CTA buttons',
    check: () => html.includes('Discuss Your AI Project') || html.includes('Contact'),
    expected: 'Should have call-to-action buttons',
  },
  {
    name: 'Feature highlights',
    check: () => html.includes('Privacy') && html.includes('Security'),
    expected: 'Should have feature highlights',
  },
  {
    name: 'No "Loading..." placeholder',
    check: () => !html.includes('>Loading...</'),
    expected: 'Should NOT show "Loading..." in static HTML',
  },
];

// Run tests
let passed = 0;
let failed = 0;

console.log('\n📋 Running SEO Checks:\n');

tests.forEach((test, index) => {
  const result = test.check();
  if (result) {
    console.log(`   ✅ ${test.name}`);
    passed++;
  } else {
    console.log(`   ❌ ${test.name}`);
    console.log(`      → ${test.expected}`);
    failed++;
  }
});

// Check file sizes
console.log('\n📊 File Size Analysis:\n');

const enIndexSize = fs.statSync(enIndexPath).size;
console.log(`   HTML size: ${formatBytes(enIndexSize)}`);

if (enIndexSize < 10000) {
  console.log('   ⚠️  Warning: HTML file is very small, might be missing content');
} else if (enIndexSize > 500000) {
  console.log('   ⚠️  Warning: HTML file is quite large, consider code splitting');
} else {
  console.log('   ✅ HTML file size looks good');
}

// Summary
console.log('\n' + '='.repeat(60));
console.log(`\n📈 Results: ${passed}/${tests.length} checks passed`);

if (failed === 0) {
  console.log('\n✅ All SEO checks passed! Your site is properly optimized.\n');
  process.exit(0);
} else {
  console.log(`\n⚠️  ${failed} checks failed. Review the issues above.\n`);
  process.exit(1);
}

// Helper function
function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
}
