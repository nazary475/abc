// Test script to verify Groq API key
// Run with: node test-groq-api.js
// Make sure GROQ_API_KEY is set in your .env.local file

require('dotenv').config({ path: '.env.local' });

const API_KEY = process.env.GROQ_API_KEY;

async function testGroqAPI() {
  console.log('Testing Groq API...');
  console.log('API Key present:', !!API_KEY);
  console.log('API Key length:', API_KEY?.length);
  console.log('API Key (first 10 chars):', API_KEY?.substring(0, 10));
  console.log('');

  if (!API_KEY) {
    console.log('❌ ERROR: GROQ_API_KEY not found in .env.local');
    console.log('Please add your API key to .env.local file');
    return;
  }

  try {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          { role: 'user', content: 'Say "API key is working!"' }
        ],
        max_tokens: 50,
      }),
    });

    console.log('Response status:', response.status);
    console.log('Response status text:', response.statusText);
    console.log('');

    const data = await response.json();
    
    if (response.ok) {
      console.log('✅ SUCCESS! API key is working!');
      console.log('Response:', data.choices[0].message.content);
    } else {
      console.log('❌ ERROR! API key is not working');
      console.log('Error details:', JSON.stringify(data, null, 2));
      
      if (response.status === 401) {
        console.log('');
        console.log('The API key appears to be invalid or expired.');
        console.log('Please:');
        console.log('1. Go to https://console.groq.com');
        console.log('2. Sign in or create an account');
        console.log('3. Navigate to API Keys section');
        console.log('4. Generate a new API key');
        console.log('5. Copy the COMPLETE key (it should start with "gsk_")');
        console.log('6. Update the .env.local file with the new key');
      }
    }
  } catch (error) {
    console.log('❌ NETWORK ERROR!');
    console.error('Error:', error.message);
  }
}

testGroqAPI();
