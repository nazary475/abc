#!/bin/bash
#
# Deployment Verification Script for haal-lab.solutions
# Run this after deploying to Vercel to verify crawler visibility is fixed
#

set -e

DOMAIN="https://haal-lab.solutions"
echo "========================================="
echo "Verifying Deployment: $DOMAIN"
echo "========================================="
echo ""

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Test 1: No "Loading..." placeholder
echo "Test 1: Checking for 'Loading...' placeholder..."
if curl -s "$DOMAIN/" | grep -qi "loading"; then
    echo -e "${RED}❌ FAIL: Found 'Loading...' placeholder${NC}"
    exit 1
else
    echo -e "${GREEN}✅ PASS: No 'Loading...' placeholder found${NC}"
fi
echo ""

# Test 2: Real content present
echo "Test 2: Checking for real content ('Private AI')..."
MATCHES=$(curl -s "$DOMAIN/" | grep -ci "private ai" || true)
if [ "$MATCHES" -gt 10 ]; then
    echo -e "${GREEN}✅ PASS: Found 'Private AI' $MATCHES times${NC}"
else
    echo -e "${RED}❌ FAIL: Only found 'Private AI' $MATCHES times (expected 10+)${NC}"
    exit 1
fi
echo ""

# Test 3: HTML response size
echo "Test 3: Checking HTML response size..."
SIZE=$(curl -s "$DOMAIN/en" | wc -c)
if [ "$SIZE" -gt 100000 ]; then
    echo -e "${GREEN}✅ PASS: HTML size is $SIZE bytes (full content)${NC}"
else
    echo -e "${RED}❌ FAIL: HTML size is only $SIZE bytes (expected 100,000+)${NC}"
    exit 1
fi
echo ""

# Test 4: All locale pages
echo "Test 4: Checking all locale pages..."
ALL_PASS=true
for locale in en de fr es it; do
    echo -n "  Testing /$locale: "
    if curl -s "$DOMAIN/$locale" | grep -qi "loading"; then
        echo -e "${RED}❌ FAIL${NC}"
        ALL_PASS=false
    else
        echo -e "${GREEN}✅ PASS${NC}"
    fi
done
if [ "$ALL_PASS" = false ]; then
    exit 1
fi
echo ""

# Test 5: Consistency test (5 fetches)
echo "Test 5: Consistency test (5 consecutive fetches)..."
FIRST_TITLE=""
CONSISTENT=true
for i in {1..5}; do
    TITLE=$(curl -s "$DOMAIN/" | grep -oP '<title>.*?</title>' || echo "NO_TITLE")
    if [ -z "$FIRST_TITLE" ]; then
        FIRST_TITLE="$TITLE"
    elif [ "$TITLE" != "$FIRST_TITLE" ]; then
        echo -e "${RED}❌ FAIL: Fetch $i returned different content${NC}"
        CONSISTENT=false
        break
    fi
    echo "  Fetch $i: ✓"
    sleep 1
done
if [ "$CONSISTENT" = true ]; then
    echo -e "${GREEN}✅ PASS: All 5 fetches consistent${NC}"
else
    exit 1
fi
echo ""

# Test 6: HTTP headers
echo "Test 6: Checking HTTP response headers..."
HEADERS=$(curl -sI "$DOMAIN/" | head -10)
echo "$HEADERS"
if echo "$HEADERS" | grep -qi "github"; then
    echo -e "${YELLOW}⚠️  WARNING: GitHub Pages headers detected${NC}"
    echo "Make sure DNS points to Vercel, not GitHub Pages"
else
    echo -e "${GREEN}✅ Headers look good${NC}"
fi
echo ""

# Test 7: Metadata verification
echo "Test 7: Checking metadata (founder name)..."
if curl -s "$DOMAIN/en" | grep -q "Ali-Zafar Najafi"; then
    echo -e "${GREEN}✅ PASS: Founder name found in metadata${NC}"
else
    echo -e "${RED}❌ FAIL: Founder name not found in metadata${NC}"
    exit 1
fi
echo ""

# Test 8: JSON-LD structured data
echo "Test 8: Checking JSON-LD structured data..."
JSONLD_COUNT=$(curl -s "$DOMAIN/en" | grep -c "application/ld+json" || true)
if [ "$JSONLD_COUNT" -gt 3 ]; then
    echo -e "${GREEN}✅ PASS: Found $JSONLD_COUNT JSON-LD scripts${NC}"
else
    echo -e "${RED}❌ FAIL: Only found $JSONLD_COUNT JSON-LD scripts (expected 4+)${NC}"
    exit 1
fi
echo ""

# Final summary
echo "========================================="
echo -e "${GREEN}✅ ALL TESTS PASSED!${NC}"
echo "========================================="
echo ""
echo "Next steps:"
echo "1. Test in Google Rich Results Test:"
echo "   https://search.google.com/test/rich-results"
echo ""
echo "2. Test with AI chatbots:"
echo "   - ChatGPT: Ask 'What is Haal Lab?'"
echo "   - Perplexity: Search for 'haal lab ai'"
echo ""
echo "3. Monitor Google Search Console for indexing improvements"
echo ""
