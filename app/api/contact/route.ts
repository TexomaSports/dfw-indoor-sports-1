import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';

// Validation schema
const contactFormSchema = z.object({
    firstName: z.string().min(1, 'First name is required').max(100),
    lastName: z.string().min(1, 'Last name is required').max(100),
    email: z.string().email('Invalid email address'),
    phone: z.string().max(20).optional(),
    topic: z.enum([
        'General Inquiry',
        'Membership & Pricing',
        'Court Booking Issue',
        'Event Planning (Corporate/Party)',
        'Academy / Coaching',
        'Lost & Found'
    ]),
    message: z.string().min(10, 'Message must be at least 10 characters').max(5000),
    // Honeypot field - should be empty
    website: z.string().max(0, 'Bot detected').optional(),
});

// Initialize Resend client
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

// Rate limiting map (simple in-memory, consider Redis for production)
const rateLimit = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5; // 5 requests per minute

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

// Sanitize input to prevent XSS
function sanitize(str: string): string {
    return str
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;');
}

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
        const result = contactFormSchema.safeParse(body);

        if (!result.success) {
            return NextResponse.json(
                { error: 'Validation failed', details: result.error.flatten() },
                { status: 400 }
            );
        }

        const { firstName, lastName, email, phone, topic, message, website } = result.data;

        // Check honeypot field
        if (website && website.length > 0) {
            // Silently reject bot submissions
            return NextResponse.json({ success: true, message: 'Message sent successfully!' });
        }

        // Sanitize all inputs
        const safeData = {
            firstName: sanitize(firstName),
            lastName: sanitize(lastName),
            email: sanitize(email),
            phone: phone ? sanitize(phone) : 'Not provided',
            topic: sanitize(topic),
            message: sanitize(message),
        };

        // Send email via Resend
        if (resend && process.env.CONTACT_EMAIL) {
            await resend.emails.send({
                from: 'DFW Indoor Sports <onboarding@resend.dev>',
                to: [process.env.CONTACT_EMAIL],
                replyTo: safeData.email,
                subject: `[Contact Form] ${safeData.topic} - ${safeData.firstName} ${safeData.lastName}`,
                html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #D62828; border-bottom: 2px solid #D62828; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #666;"><strong>Name</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${safeData.firstName} ${safeData.lastName}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #666;"><strong>Email</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">
                  <a href="mailto:${safeData.email}">${safeData.email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #666;"><strong>Phone</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${safeData.phone}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; color: #666;"><strong>Topic</strong></td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${safeData.topic}</td>
              </tr>
            </table>
            <div style="margin-top: 20px; padding: 15px; background: #f9f9f9; border-radius: 5px;">
              <h3 style="color: #333; margin-top: 0;">Message</h3>
              <p style="color: #555; line-height: 1.6; white-space: pre-wrap;">${safeData.message}</p>
            </div>
            <p style="color: #999; font-size: 12px; margin-top: 20px;">
              This message was sent from the DFW Indoor Sports contact form.
            </p>
          </div>
        `,
            });
        } else {
            // Log to console if Resend is not configured (development)
            console.log('Contact Form Submission:', safeData);
        }

        return NextResponse.json({
            success: true,
            message: 'Message sent successfully!'
        });

    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { error: 'Failed to send message. Please try again.' },
            { status: 500 }
        );
    }
}
