import type { MiddlewareHandler } from 'astro';

export const onRequest: MiddlewareHandler = async (
  context,
  next
) => {

  const response = await next();

  /*
   |--------------------------------------------------------------------------
   | SECURITY HEADERS
   |--------------------------------------------------------------------------
   */

  response.headers.set(
    'X-Frame-Options',
    'DENY'
  );

  response.headers.set(
    'X-Content-Type-Options',
    'nosniff'
  );

  response.headers.set(
    'Referrer-Policy',
    'strict-origin-when-cross-origin'
  );

  response.headers.set(
    'Permissions-Policy',
    [
      'camera=()',
      'microphone=()',
      'geolocation=()',
      'payment=()',
    ].join(', ')
  );

  response.headers.set(
    'Cross-Origin-Opener-Policy',
    'same-origin'
  );

  /*
   |--------------------------------------------------------------------------
   | CONTENT SECURITY POLICY
   |--------------------------------------------------------------------------
   */

  const csp = [
  "default-src 'self'",

  // Scripts
  "script-src 'self' 'unsafe-inline' https://challenges.cloudflare.com https://plausible.io",

  // Styles
  "style-src 'self' 'unsafe-inline'",

  // Images
  "img-src 'self' data: https: blob: https://drive.google.com https://*.googleusercontent.com",

  // Fonts
  "font-src 'self' data:",

  // API / Fetch
  [
    "connect-src",
    "'self'",
    "https://api.resend.com",
    "https://challenges.cloudflare.com",
    "https://docs.google.com",
    "https://drive.google.com",
    "https://*.googleusercontent.com",
    "https://plausible.io"
  ].join(' '),

  // Frames
  "frame-src https://challenges.cloudflare.com",

  // Forms
  "form-action 'self'",

  // Base URI
  "base-uri 'self'",

  // Security
  "object-src 'none'",
].join('; ');

  response.headers.set(
    'Content-Security-Policy',
    csp
  );

  return response;
};