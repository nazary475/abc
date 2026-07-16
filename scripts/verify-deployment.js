#!/usr/bin/env node

/**
 * Deployment Verification Script
 * Tests API endpoints and configuration
 */

const https = require('https');

const DOMAIN = process.argv[2] || 'abc-zqp4-7aomiqjd2-hussainnazary2s-projects.vercel.app';

console.log('🔍 Verifying deployment for:', DOMAIN);
console.log('');

// Test 1: Manifest.json
function testManifest() {
  return new Promise((resolve) => {
    console.log('📄 Testing manifest.json...');
    https.get(`https://${DOMAIN}/manifest.json`, (res) => {
      if (res.statusCode === 200) {
        console.log('✅ Manifest: OK (200)');
        resolve(true);
      } else if (res.statusCode >= 300 && res.statusCode < 400) {
        console.log(`❌ Manifest: Redirecting (${res.statusCode}) - Password protection enabled?`);
        console.log(`   Redirect to: ${res.headers.location}`);
        resolve(false);
      } else {
        console.log(`❌ Manifest: Failed (${res.statusCode})`);
        resolve(false);
      }
    }).on('error', (err) => {
      console.log('❌ Manifest: Error -', err.message);
      resolve(false);
    });
  });
}

// Test 2: Homepage
function testHomepage() {
  return new Promise((resolve) => {
    console.log('🏠 Testing homepage...');
    https.get(`https://${DOMAIN}`, (res) => {
      if (res.statusCode === 200) {
        console.log('✅ Homepage: OK (200)');
        resolve(true);
      } else {
        console.log(`❌ Homepage: Failed (${res.statusCode})`);
        resolve(false);
      }
    }).on('error', (err) => {
      console.log('❌ Homepage: Error -', err.message);
      resolve(false);
    });
  });
}

// Test 3: Chat API
function testChatAPI() {
  return new Promise((resolve) => {
    console.log('💬 Testing chat API...');
    
    const data = JSON.stringify({
      messages: [{ role: 'user', content: 'test' }]
    });

    const options = {
      hostname: DOMAIN,
      port: 443,
      path: '/api/chat',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
      }
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        if (res.statusCode === 200) {
          try {
            const json = JSON.parse(body);
            if (json.message) {
              console.log('✅ Chat API: OK - Response received');
              console.log(`   Response preview: ${json.message.substring(0, 50)}...`);
              resolve(true);
            } else {
              console.log('❌ Chat API: Invalid response format');
              resolve(false);
            }
          } catch (e) {
            console.log('❌ Chat API: Invalid JSON response');
            console.log(`   Body preview: ${body.substring(0, 100)}`);
            resolve(false);
          }
        } else if (res.statusCode === 404) {
          console.log('❌ Chat API: Not Found (404) - API route not deployed');
          resolve(false);
        } else if (res.statusCode === 401) {
          console.log('❌ Chat API: Unauthorized (401) - Check API key');
          resolve(false);
        } else if (res.statusCode === 500) {
          console.log('❌ Chat API: Server Error (500)');
          console.log(`   Error: ${body}`);
          resolve(false);
        } else {
          console.log(`❌ Chat API: Failed (${res.statusCode})`);
          console.log(`   Body: ${body}`);
          resolve(false);
        }
      });
    });

    req.on('error', (err) => {
      console.log('❌ Chat API: Error -', err.message);
      resolve(false);
    });

    req.write(data);
    req.end();
  });
}

// Test 4: Check for SSO redirect
function testSSO() {
  return new Promise((resolve) => {
    console.log('🔐 Testing for SSO/password protection...');
    https.get(`https://${DOMAIN}/_next/static/css/app.css`, (res) => {
      if (res.headers.location && res.headers.location.includes('vercel.com/sso-api')) {
        console.log('❌ SSO: Password protection is ENABLED');
        console.log('   → Disable in: Vercel Dashboard → Settings → Deployment Protection');
        resolve(false);
      } else if (res.statusCode === 200 || res.statusCode === 404) {
        console.log('✅ SSO: No password protection detected');
        resolve(true);
      } else {
        console.log(`⚠️  SSO: Unknown status (${res.statusCode})`);
        resolve(true);
      }
    }).on('error', (err) => {
      console.log('⚠️  SSO: Could not check -', err.message);
      resolve(true);
    });
  });
}

// Run all tests
async function runTests() {
  console.log('═══════════════════════════════════════════\n');
  
  const results = {
    manifest: await testManifest(),
    homepage: await testHomepage(),
    sso: await testSSO(),
    chatAPI: await testChatAPI(),
  };
  
  console.log('\n═══════════════════════════════════════════');
  console.log('📊 RESULTS:');
  console.log('═══════════════════════════════════════════\n');
  
  const passed = Object.values(results).filter(Boolean).length;
  const total = Object.keys(results).length;
  
  console.log(`✅ Passed: ${passed}/${total}`);
  console.log(`❌ Failed: ${total - passed}/${total}\n`);
  
  if (passed === total) {
    console.log('🎉 All tests passed! Your deployment is working correctly.\n');
  } else {
    console.log('⚠️  Some tests failed. Check the errors above.\n');
    console.log('🔧 Quick fixes:');
    if (!results.sso) {
      console.log('   1. Disable password protection in Vercel');
    }
    if (!results.chatAPI) {
      console.log('   2. Check GROQ_API_KEY environment variable');
      console.log('   3. Verify API route is deployed');
    }
    console.log('');
  }
  
  console.log('📚 For detailed troubleshooting, see: VERCEL_TROUBLESHOOTING.md\n');
  
  process.exit(passed === total ? 0 : 1);
}

runTests();
