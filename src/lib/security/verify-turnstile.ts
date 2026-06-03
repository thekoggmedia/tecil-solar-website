import { env } from '../config/env';

export async function verifyTurnstile(
  token: string,
  ip?: string
) {
  const formData = new FormData();

  formData.append(
    'secret',
    env.TURNSTILE_SECRET_KEY
  );

  formData.append('response', token);

  if (ip) {
    formData.append('remoteip', ip);
  }

  const response = await fetch(
    'https://challenges.cloudflare.com/turnstile/v0/siteverify',
    {
      method: 'POST',
      body: formData,
    }
  );

  const data = await response.json();

  return data.success === true;
}