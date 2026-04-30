import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const svg = `
  <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stop-color="#0B0B0B"/>
        <stop offset="100%" stop-color="#1a1a1a"/>
      </linearGradient>
    </defs>

    <rect width="1200" height="630" fill="url(#g)"/>

    <text x="80" y="260" fill="#ffffff" font-size="72" font-weight="900"
      font-family="Arial, sans-serif">
      TECIL Solar
    </text>

    <text x="80" y="340" fill="#E8601A" font-size="40"
      font-family="Arial, sans-serif">
      The Inverter Place
    </text>

    <text x="80" y="420" fill="#cccccc" font-size="28"
      font-family="Arial, sans-serif">
      Reliable Solar & Power Solutions Across Nigeria
    </text>
  </svg>
  `;

  return new Response(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
    },
  });
};