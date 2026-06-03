import type { APIRoute } from 'astro';
import { Resend } from 'resend';

import { contactSchema } from '../../lib/validation/contact';
import { sanitizeInput } from '../../lib/security/sanitize';
import { verifyTurnstile } from '../../lib/security/verify-turnstile';
import { buildContactEmail } from '../../lib/email/contact-template';
import { env } from '../../lib/config/env';
import { checkRateLimit } from '../../lib/security/rate-limit';
import { withTimeout } from '../../lib/utils/timeout';

import {
  successResponse,
  errorResponse,
} from '../../lib/utils/api-response';

export const POST: APIRoute = async ({ request }) => {
  try {

    // ─────────────────────────────────────
    // RESEND CLIENT
    // ─────────────────────────────────────
    const resend = new Resend(
      env.RESEND_API_KEY
    );

    // ─────────────────────────────────────
    // PARSE BODY
    // ─────────────────────────────────────
    const rawBody = await request.json();

    // ─────────────────────────────────────
    // CLIENT IP
    // ─────────────────────────────────────
    const ip =
      request.headers.get('CF-Connecting-IP') ||
      'unknown';

    // ─────────────────────────────────────
    // RATE LIMITING
    // ─────────────────────────────────────
    const allowed = checkRateLimit(ip);

    if (!allowed) {
      return errorResponse(
        'Too many requests. Please try again later.',
        429
      );
    }

    // ─────────────────────────────────────
    // HONEYPOT PROTECTION
    // ─────────────────────────────────────
    if (rawBody.website) {
      return errorResponse(
        'Spam detected',
        400
      );
    }

    // ─────────────────────────────────────
    // TURNSTILE TOKEN CHECK
    // ─────────────────────────────────────
    if (!rawBody.turnstileToken) {
      return errorResponse(
        'Security verification failed',
        400
      );
    }

    // ─────────────────────────────────────
    // TURNSTILE VERIFICATION
    // ─────────────────────────────────────
    const isHuman =
      await verifyTurnstile(
        rawBody.turnstileToken,
        ip
      );

    if (!isHuman) {
      return errorResponse(
        'Verification failed. Please try again.',
        400
      );
    }

    // ─────────────────────────────────────
    // SANITIZE INPUTS
    // ─────────────────────────────────────
    const sanitizedBody = {
      name: sanitizeInput(
        rawBody.name || ''
      ),

      phone: sanitizeInput(
        rawBody.phone || ''
      ),

      email: sanitizeInput(
        rawBody.email || ''
      ),

      location: sanitizeInput(
        rawBody.location || ''
      ),

      branch: sanitizeInput(
        rawBody.branch || ''
      ),

      type: sanitizeInput(
        rawBody.type || ''
      ),

      message: sanitizeInput(
        rawBody.message || ''
      ),

      website:
        rawBody.website || '',
    };

    // ─────────────────────────────────────
    // VALIDATION
    // ─────────────────────────────────────
    const validation =
      contactSchema.safeParse(
        sanitizedBody
      );

    if (!validation.success) {
      return errorResponse(
        validation.error.errors[0]?.message ||
          'Invalid form data',
        400
      );
    }

    // VALIDATED SAFE DATA
    const safeData =
      validation.data;

    // ─────────────────────────────────────
    // BUILD EMAIL HTML
    // ─────────────────────────────────────
    const html =
      buildContactEmail(safeData);

    // ─────────────────────────────────────
    // SEND EMAIL
    // ─────────────────────────────────────
    const emailData =
      await withTimeout(
        resend.emails.send({
          from:
            'TECIL Solar <onboarding@resend.dev>',

          to: [env.CONTACT_EMAIL],

          subject:
            `New Website Enquiry — ${safeData.name}`,

          replyTo:
            safeData.email || undefined,

          html,
        }),
        10000
      );

    // ─────────────────────────────────────
    // SUCCESS RESPONSE
    // ─────────────────────────────────────
    return successResponse({
      success: true,
      data: emailData,
    });

  } catch (error) {

    console.error(
      'CONTACT API ERROR:',
      error
    );

    return errorResponse(
      'Something went wrong. Please try again later.',
      500
    );
  }
};