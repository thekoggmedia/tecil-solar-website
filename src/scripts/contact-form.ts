function showToast(
  message: string,
  type: 'success' | 'error' = 'success'
) {

  const existing =
    document.querySelector('.toast');

  if (existing) {
    existing.remove();
  }

  const toast =
    document.createElement('div');

  toast.className =
    `toast toast-${type}`;

  toast.textContent = message;

  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {

    toast.classList.remove('show');

    setTimeout(() => {
      toast.remove();
    }, 300);

  }, 4000);
}

async function handleContactForm() {

  const form =
    document.getElementById(
      'contact-form'
    ) as HTMLFormElement | null;

  if (!form) return;

  const button =
    document.getElementById(
      'submit-btn'
    ) as HTMLButtonElement | null;

  const note =
    document.getElementById(
      'form-note'
    ) as HTMLParagraphElement | null;

  if (!button || !note) return;

  form.addEventListener(
    'submit',
    async (e) => {

      e.preventDefault();

      const originalButton =
        button.innerHTML;

      button.disabled = true;

      button.innerHTML =
        'Sending...';

      note.textContent =
        'Submitting your enquiry...';

      try {

        const formData =
          new FormData(form);

        const turnstileToken =
          (
            document.querySelector(
              '[name="cf-turnstile-response"]'
            ) as HTMLInputElement | null
          )?.value || '';

        const response =
          await fetch(
            '/api/contact',
            {
              method: 'POST',

              headers: {
                'Content-Type':
                  'application/json',
              },

              body: JSON.stringify({
                name:
                  formData.get('name'),

                phone:
                  formData.get('phone'),

                email:
                  formData.get('email'),

                location:
                  formData.get(
                    'location'
                  ),

                branch:
                  formData.get(
                    'branch'
                  ),

                type:
                  formData.get('type'),

                message:
                  formData.get(
                    'message'
                  ),

                website:
                  formData.get(
                    'website'
                  ),

                turnstileToken,
              }),
            }
          );

        const result =
          await response.json();

        if (!response.ok) {
          throw new Error(
            result.error ||
            'Failed to submit form'
          );
        }

        note.textContent =
          '✓ Enquiry sent successfully.';

        showToast(
          'Enquiry submitted successfully.',
          'success'
        );

        form.reset();

      } catch (error) {

        console.error(error);

        note.textContent =
          'Submission failed. Please try again.';

        showToast(
          error instanceof Error
            ? error.message
            : 'Something went wrong',
          'error'
        );

      } finally {

        button.disabled = false;

        button.innerHTML =
          originalButton;
      }
    }
  );
}

document.addEventListener(
  'DOMContentLoaded',
  handleContactForm
);