#!/usr/bin/env node

/**
 * Quick test script for Vercel API endpoint
 * Usage: node test-api.js [domain]
 */

const https = require('https');

const domain = process.argv[2] || 'abc-zqp4-7aomiqjd2-hussainnazary2s-projects.vercel.app';

console.log('🧪 Testing API endpoint...');
console.log('Domain:', domain);
console.log('');

const data = JSON.stringify({
  messages: [
    { role: 'user', content: 'What is Haal Lab?' }
  ]
});

const options = {
  hostname: domain,
  port: 443,
  path: '/api/chat',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

const req = https.request(options, (res) => {
  console.log(`Status: ${res.statusCode}`);
  console.log(`Headers:`, res.headers);
  console.log('');

  let body = '';
  res.on('data', (chunk) => body += chunk);
  
  res.on('end', () => {
    if (res.statusCode === 200) {
      try {
        const json = JSON.parse(body);
        console.log('✅ SUCCESS! API is working!');
        console.log('');
        console.log('Response:');
        console.log('─'.repeat(60));
        console.log(json.message);
        console.log('─'.repeat(60));
        console.log('');
        console.log('Usage:', json.usage);
        process.exit(0);
      } catch (e) {
        console.log('❌ FAILED: Response is not valid JSON');
        console.log('Body:', body.substring(0, 500));
        process.exit(1);
      }
    } else if (res.statusCode === 404) {
      console.log('❌ FAILED: 404 Not Found');
      console.log('');
      console.log('The API route is not deployed or not found.');
      console.log('');
      console.log('Possible causes:');
      console.log('1. Vercel is still building (wait 1-2 minutes)');
      console.log('2. Build is in static export mode (check vercel.json)');
      console.log('3. API route file is missing or has errors');
      console.log('');
      console.log('Check build logs: https://vercel.com/dashboard');
      console.log('');
      console.log('Body:', body);
      process.exit(1);
    } else if (res.statusCode === 500) {
      console.log('❌ FAILED: 500 Server Error');
      console.log('');
      try {
        const json = JSON.parse(body);
        console.log('Error:', json.error || json);
      } catch {
        console.log('Error body:', body);
      }
      console.log('');
      console.log('Check:');
      console.log('1. GROQ_API_KEY is set in Vercel environment variables');
      console.log('2. API key is valid at https://console.groq.com');
      process.exit(1);
    } else {
      console.log(`❌ FAILED: Unexpected status ${res.statusCode}`);
      console.log('Body:', body);
      process.exit(1);
    }
  });
});

req.on('error', (err) => {
  console.log('❌ FAILED: Request error');
  console.log('Error:', err.message);
  console.log('');
  console.log('Check:');
  console.log('1. Domain is correct');
  console.log('2. Site is deployed and accessible');
  process.exit(1);
});

req.write(data);
req.end();

console.log('Sending request...');
console.log('');
