import { siteConfig } from './site';

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',

    '@type': 'Organization',

    name: siteConfig.business.name,

    url: siteConfig.url,

    logo: `${siteConfig.url}/logo.png`,

    email: siteConfig.business.email,

    telephone:
      siteConfig.business.phone,

    address: {
      '@type': 'PostalAddress',

      addressLocality:
        siteConfig.business.address
          .addressLocality,

      addressCountry:
        siteConfig.business.address
          .addressCountry,
    },

    sameAs: [
      'https://wa.me/2348037135545',
    ],
  };
}