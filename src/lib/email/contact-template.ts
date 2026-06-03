import type { ContactFormData } from '../validation/contact';

export function buildContactEmail(data: ContactFormData) {
  return `
    <div style="font-family:Arial,sans-serif;padding:24px;color:#111;">
      <h2 style="margin-bottom:8px;">
        New TECIL Solar Enquiry
      </h2>

      <p style="margin-bottom:24px;color:#666;">
        A new customer enquiry was submitted from the website.
      </p>

      <table style="width:100%;border-collapse:collapse;">

        <tr>
          <td style="padding:10px;border:1px solid #ddd;">
            <strong>Name</strong>
          </td>

          <td style="padding:10px;border:1px solid #ddd;">
            ${data.name}
          </td>
        </tr>

        <tr>
          <td style="padding:10px;border:1px solid #ddd;">
            <strong>Phone</strong>
          </td>

          <td style="padding:10px;border:1px solid #ddd;">
            ${data.phone}
          </td>
        </tr>

        ${
          data.email
            ? `
        <tr>
          <td style="padding:10px;border:1px solid #ddd;">
            <strong>Email</strong>
          </td>

          <td style="padding:10px;border:1px solid #ddd;">
            ${data.email}
          </td>
        </tr>
        `
            : ''
        }

        <tr>
          <td style="padding:10px;border:1px solid #ddd;">
            <strong>Location</strong>
          </td>

          <td style="padding:10px;border:1px solid #ddd;">
            ${data.location}
          </td>
        </tr>

        ${
          data.branch
            ? `
        <tr>
          <td style="padding:10px;border:1px solid #ddd;">
            <strong>Nearest Branch</strong>
          </td>

          <td style="padding:10px;border:1px solid #ddd;">
            ${data.branch}
          </td>
        </tr>
        `
            : ''
        }

        ${
          data.type
            ? `
        <tr>
          <td style="padding:10px;border:1px solid #ddd;">
            <strong>Enquiry Type</strong>
          </td>

          <td style="padding:10px;border:1px solid #ddd;">
            ${data.type}
          </td>
        </tr>
        `
            : ''
        }

        <tr>
          <td style="padding:10px;border:1px solid #ddd;">
            <strong>Message</strong>
          </td>

          <td style="padding:10px;border:1px solid #ddd;white-space:pre-wrap;">
            ${data.message}
          </td>
        </tr>

      </table>

      <p style="margin-top:24px;color:#888;font-size:13px;">
        TECIL Solar Website Lead System
      </p>
    </div>
  `;
}