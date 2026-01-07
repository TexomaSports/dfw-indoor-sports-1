import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';

// Validation schema
const newsletterSchema = z.object({
    email: z.string().email('Invalid email address'),
    // Honeypot field - should be empty
    company: z.string().max(0, 'Bot detected').optional(),
});

// Initialize Resend client
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

// Simple in-memory rate limiting
const rateLimit = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 3; // 3 requests per minute

function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const record = rateLimit.get(ip);

    if (!record || now > record.resetTime) {
        rateLimit.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
        return false;
    }

    if (record.count >= MAX_REQUESTS) {
        return true;
    }

    record.count++;
    return false;
}

// Simple in-memory store for subscribed emails (use database in production)
const subscribedEmails = new Set<string>();

export async function POST(request: NextRequest) {
    try {
        // Get client IP for rate limiting
        const ip = request.headers.get('x-forwarded-for') ||
            request.headers.get('x-real-ip') ||
            'unknown';

        if (isRateLimited(ip)) {
            return NextResponse.json(
                { error: 'Too many requests. Please try again later.' },
                { status: 429 }
            );
        }

        const body = await request.json();

        // Validate request body
        const result = newsletterSchema.safeParse(body);

        if (!result.success) {
            return NextResponse.json(
                { error: 'Please enter a valid email address.' },
                { status: 400 }
            );
        }

        const { email, company } = result.data;
        const normalizedEmail = email.toLowerCase().trim();

        // Check honeypot field
        if (company && company.length > 0) {
            // Silently reject bot submissions
            return NextResponse.json({ success: true, message: 'Subscribed successfully!' });
        }

        // Check for duplicate subscription
        if (subscribedEmails.has(normalizedEmail)) {
            return NextResponse.json({
                success: true,
                message: 'You\'re already subscribed!'
            });
        }

        // Add to subscribed list
        subscribedEmails.add(normalizedEmail);

        // Send confirmation email via Resend
        if (resend && process.env.CONTACT_EMAIL) {
            // Send notification to admin
            await resend.emails.send({
                from: 'DFW Indoor Sports <onboarding@resend.dev>',
                to: [process.env.CONTACT_EMAIL],
                subject: '[Newsletter] New Subscriber',
                html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #D62828;">New Newsletter Subscriber</h2>
            <p><strong>Email:</strong> ${normalizedEmail}</p>
            <p style="color: #666; font-size: 12px;">
              Subscribed on ${new Date().toLocaleString()}
            </p>
          </div>
        `,
            });

            // Send welcome email to subscriber
            await resend.emails.send({
                from: 'DFW Indoor Sports <onboarding@resend.dev>',
                to: [normalizedEmail],
                subject: 'Welcome to DFW Indoor Sports!',
                html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #D62828; margin: 0;">Welcome to the Team!</h1>
            </div>
            <p style="color: #333; font-size: 16px; line-height: 1.6;">
              Thank you for subscribing to the DFW Indoor Sports newsletter!
            </p>
            <p style="color: #333; font-size: 16px; line-height: 1.6;">
              You'll now receive:
            </p>
            <ul style="color: #555; font-size: 14px; line-height: 1.8;">
              <li>🏆 Exclusive tournament invitations</li>
              <li>💰 Special member-only offers</li>
              <li>📅 Early access to event registrations</li>
              <li>📰 Facility updates and news</li>
            </ul>
            <div style="margin-top: 30px; padding: 20px; background: #f9f9f9; border-radius: 8px; text-align: center;">
              <p style="color: #666; margin: 0 0 15px 0;">Ready to play?</p>
              <a href="https://dfwindoorsports.com" 
                 style="display: inline-block; padding: 12px 30px; background: #D62828; color: white; text-decoration: none; border-radius: 5px; font-weight: bold;">
                Book a Court
              </a>
            </div>
            <p style="color: #999; font-size: 12px; margin-top: 30px; text-align: center;">
              DFW Indoor Sports | 16230 Three Wide Drive Suite 200, Fort Worth, TX 76177
            </p>
          </div>
        `,
            });
        } else {
            // Log to console if Resend is not configured (development)
            console.log('Newsletter Subscription:', normalizedEmail);
        }

        return NextResponse.json({
            success: true,
            message: 'Subscribed successfully! Check your inbox for a welcome email.'
        });

    } catch (error) {
        console.error('Newsletter subscription error:', error);
        return NextResponse.json(
            { error: 'Failed to subscribe. Please try again.' },
            { status: 500 }
        );
    }
}
