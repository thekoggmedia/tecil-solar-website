import { z } from 'zod';

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Name must be at least 2 characters')
    .max(80, 'Name is too long'),

  phone: z
    .string()
    .trim()
    .min(7, 'Phone number is too short')
    .max(20, 'Phone number is too long'),

  email: z
    .string()
    .trim()
    .email('Invalid email address')
    .optional()
    .or(z.literal('')),

  location: z
    .string()
    .trim()
    .min(2, 'Location is required')
    .max(120, 'Location is too long'),

  branch: z
    .string()
    .trim()
    .max(120)
    .optional()
    .or(z.literal('')),

  type: z
    .string()
    .trim()
    .max(120)
    .optional()
    .or(z.literal('')),

  message: z
    .string()
    .trim()
    .min(10, 'Message is too short')
    .max(3000, 'Message is too long'),

  website: z.string().max(0).optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;