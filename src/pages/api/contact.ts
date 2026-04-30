import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.formData();

    const name     = data.get('name')?.toString().trim();
    const email    = data.get('email')?.toString().trim();
    const phone    = data.get('phone')?.toString().trim();
    const location = data.get('location')?.toString().trim();
    const branch   = data.get('branch')?.toString().trim();
    const type     = data.get('type')?.toString().trim();
    const message  = data.get('message')?.toString().trim();

    // 🔒 REQUIRED FIELDS
    if (!name || !phone || !message) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Missing required fields'
      }), { status: 400 });
    }

    // 📩 FORMAT MESSAGE
    const emailBody = `
NEW ENQUIRY — TECIL SOLAR

Name: ${name}
Phone: ${phone}
Email: ${email || 'N/A'}
Location: ${location || 'N/A'}
Branch: ${branch || 'N/A'}
Type: ${type || 'N/A'}

Message:
${message}
    `;

    // 🔥 SEND VIA RESEND
    const RESEND_API_KEY = import.meta.env.RESEND_API_KEY;

    if (RESEND_API_KEY) {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          from: 'TECIL Solar <onboarding@resend.dev>',
          to: ['tecilsolarcustomercare@gmail.com'],
          subject: `New Enquiry — ${name}`,
          text: emailBody
        })
      });
    } else {
      // fallback if no API key yet
      console.log('⚠️ NO RESEND KEY — LOGGING ONLY');
      console.log(emailBody);
    }

    return new Response(JSON.stringify({
      success: true
    }), { status: 200 });

  } catch (err) {
    return new Response(JSON.stringify({
      success: false,
      error: 'Server error'
    }), { status: 500 });
  }
};