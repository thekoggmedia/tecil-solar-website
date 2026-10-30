import { z } from 'zod';

const envSchema = z.object({
  RESEND_API_KEY: z.string().min(1),

  // Comma-separated list of recipient addresses.
  // e.g. "info@tecilsolar.com,info.tecilservices@gmail.com"
  CONTACT_EMAIL: z
    .string()
    .min(3)
    .default('tecilsolarcustomercare@gmail.com'),

  // Optional custom sender, e.g. "TECIL Solar <info@tecilsolar.com>".
  // Falls back to the Resend sandbox address until the domain is verified.
  RESEND_FROM: z.string().optional(),

  PUBLIC_SITE_URL: z.string().url(),

  PUBLIC_WA_NUMBER: z.string().min(5),

  PUBLIC_TURNSTILE_SITE_KEY: z.string().min(1),

  TURNSTILE_SECRET_KEY: z.string().min(1),
});

const parsed = envSchema.safeParse({
  RESEND_API_KEY: import.meta.env.RESEND_API_KEY,

  CONTACT_EMAIL:
    import.meta.env.CONTACT_EMAIL,

  PUBLIC_SITE_URL:
    import.meta.env.PUBLIC_SITE_URL,

  PUBLIC_WA_NUMBER:
    import.meta.env.PUBLIC_WA_NUMBER,

  PUBLIC_TURNSTILE_SITE_KEY:
    import.meta.env.PUBLIC_TURNSTILE_SITE_KEY,

  TURNSTILE_SECRET_KEY:
    import.meta.env.TURNSTILE_SECRET_KEY,
});

if (!parsed.success) {
  console.error(
    '❌ Invalid environment variables:',
    parsed.error.flatten().fieldErrors
  );

  throw new Error(
    'Invalid environment variables'
  );
}

export const env = parsed.data;