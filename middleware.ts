import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const REDIRECTS: Record<string, string> = {
  '/about-us': '/about',
  '/about-us/': '/about',
  '/our-sports': '/sports',
  '/our-sports/': '/sports',
  '/coaches': '/academy/coaches',
  '/coaches/': '/academy/coaches',
  '/our-membership-program': '/memberships',
  '/our-membership-program/': '/memberships',
  '/special-events': '/events',
  '/special-events/': '/events',
  '/rentals/cricket-lane-rental': '/cricket-lanes',
  '/rentals/cricket-lane-rental/': '/cricket-lanes',
  '/rentals/badminton-court-rentals': '/badminton-courts',
  '/rentals/badminton-court-rentals/': '/badminton-courts',
  '/rentals/soccer-field-rentals': '/soccer-fields',
  '/rentals/soccer-field-rentals/': '/soccer-fields',
  '/rentals/dodgeball-court-rentals': '/dodgeball-courts',
  '/rentals/dodgeball-court-rentals/': '/dodgeball-courts',
  '/sponsors': '/partners',
  '/sponsors/': '/partners',
  '/contact-us': '/contact',
  '/contact-us/': '/contact',
  '/release-and-waiver-of-liability': '/waiver',
  '/release-and-waiver-of-liability/': '/waiver',
  '/refunds-cancellations': '/refund-policy',
  '/refunds-cancellations/': '/refund-policy',
};

const rateLimitMap = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000;
const MAX_REQUESTS = 100;

function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  return request.headers.get('x-real-ip') || 'unknown';
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record) {
    rateLimitMap.set(ip, { count: 1, timestamp: now });
    return false;
  }

  if (now - record.timestamp > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { count: 1, timestamp: now });
    return false;
  }

  record.count++;
  return record.count > MAX_REQUESTS;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const ip = getClientIP(request);
  if (isRateLimited(ip)) {
    return new NextResponse('Too Many Requests', {
      status: 429,
      headers: {
        'Retry-After': '60',
      },
    });
  }

  const redirectTo = REDIRECTS[pathname];
  if (redirectTo) {
    const url = request.nextUrl.clone();
    url.pathname = redirectTo;
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
};