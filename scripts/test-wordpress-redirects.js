#!/usr/bin/env node

const http = require('http');
const https = require('https');

const DOMAIN = process.env.TEST_DOMAIN || 'localhost:3000';
const USE_HTTPS = DOMAIN !== 'localhost:3000';

const WORDPRESS_REDIRECTS = {
  '/about-us/': '/about',
  '/about-us': '/about',
  '/our-sports/': '/sports',
  '/our-sports': '/sports',
  '/coaches/': '/academy/coaches',
  '/coaches': '/academy/coaches',
  '/our-membership-program/': '/memberships',
  '/our-membership-program': '/memberships',
  '/special-events/': '/events',
  '/special-events': '/events',
  '/rentals/cricket-lane-rental/': '/cricket-lanes',
  '/rentals/cricket-lane-rental': '/cricket-lanes',
  '/rentals/badminton-court-rentals/': '/badminton-courts',
  '/rentals/badminton-court-rentals': '/badminton-courts',
  '/rentals/soccer-field-rentals/': '/soccer-fields',
  '/rentals/soccer-field-rentals': '/soccer-fields',
  '/rentals/dodgeball-court-rentals/': '/dodgeball-courts',
  '/rentals/dodgeball-court-rentals': '/dodgeball-courts',
  '/sponsors/': '/partners',
  '/sponsors': '/partners',
  '/contact-us/': '/contact',
  '/contact-us': '/contact',
  '/release-and-waiver-of-liability/': '/waiver',
  '/release-and-waiver-of-liability': '/waiver',
  '/refunds-cancellations/': '/refund-policy',
  '/refunds-cancellations': '/refund-policy',
  '/registration/': '/academy',
  '/registration': '/academy',
  '/rentals/baseball-lane-rental/': '/rentals',
  '/rentals/baseball-lane-rental': '/rentals',
  '/hitman/': '/events',
  '/hitman': '/events',
};

function testRedirect(oldPath, expectedNewPath) {
  return new Promise((resolve) => {
    const protocol = USE_HTTPS ? https : http;
    const [hostname, port] = DOMAIN.split(':');

    const options = {
      method: 'HEAD',
      hostname: hostname,
      port: port || (USE_HTTPS ? 443 : 80),
      path: oldPath,
      headers: { 'User-Agent': 'SEO-Redirect-Tester/1.0' },
    };

    const req = protocol.request(options, (res) => {
      const statusCode = res.statusCode;
      const location = res.headers.location;

      let redirectPath = null;
      if (location) {
        try {
          const locationUrl = new URL(location, `${USE_HTTPS ? 'https' : 'http'}://${DOMAIN}`);
          redirectPath = locationUrl.pathname;
        } catch (e) {
          redirectPath = location;
        }
      }

      const isCorrect = redirectPath === expectedNewPath;
      const isPermanent = statusCode === 301;

      resolve({
        oldPath,
        expectedNewPath,
        actualNewPath: redirectPath,
        statusCode,
        success: isCorrect && isPermanent,
        isPermanent,
        isCorrectPath: isCorrect,
      });
    });

    req.on('error', (error) => {
      resolve({
        oldPath,
        expectedNewPath,
        error: error.message,
        success: false,
      });
    });

    req.end();
  });
}

async function runAllTests() {
  console.log('\n🔍 Testing WordPress → Next.js Redirects\n');
  console.log('═'.repeat(80));
  console.log(`Testing against: ${USE_HTTPS ? 'https' : 'http'}://${DOMAIN}`);
  console.log('═'.repeat(80));

  let passed = 0;
  let failed = 0;

  for (const [oldPath, expectedNewPath] of Object.entries(WORDPRESS_REDIRECTS)) {
    const result = await testRedirect(oldPath, expectedNewPath);

    if (result.success) {
      passed++;
      console.log(`✅ ${oldPath} → ${result.actualNewPath} (${result.statusCode})`);
    } else {
      failed++;
      if (result.error) {
        console.log(`❌ ${oldPath} - ERROR: ${result.error}`);
      } else if (!result.isPermanent) {
        console.log(`⚠️  ${oldPath} → ${result.actualNewPath} (${result.statusCode} - Should be 301)`);
      } else {
        console.log(`❌ ${oldPath} → ${result.actualNewPath} (Expected: ${expectedNewPath})`);
      }
    }

    await new Promise(resolve => setTimeout(resolve, 50));
  }

  console.log('═'.repeat(80));
  console.log(`\n📊 Results: ${passed} passed, ${failed} failed out of ${passed + failed} tests\n`);

  if (failed > 0) {
    console.log('❌ FAILED - Fix redirects before deploying!\n');
    process.exit(1);
  } else {
    console.log('✅ ALL REDIRECTS WORKING - SAFE TO DEPLOY!\n');
    process.exit(0);
  }
}

runAllTests();
