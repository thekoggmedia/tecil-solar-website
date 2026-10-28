import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ url }) => {
  return Response.redirect(new URL('/images/og-cover.png', url), 302);
};
