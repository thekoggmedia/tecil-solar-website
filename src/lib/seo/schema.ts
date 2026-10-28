import { siteConfig } from './site';

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',

    '@type': 'Organization',

    name: siteConfig.business.name,

    url: siteConfig.url,

    logo: `${siteConfig.url}/logo-mark.svg`,

    email: siteConfig.business.email,

    telephone:
      siteConfig.business.phone,

    address: {
      '@type': 'PostalAddress',

      streetAddress:
        siteConfig.business.address
          .streetAddress,

      addressLocality:
        siteConfig.business.address
          .addressLocality,

      addressRegion:
        siteConfig.business.address
          .addressRegion,

      postalCode:
        siteConfig.business.address
          .postalCode,

      addressCountry:
        siteConfig.business.address
          .addressCountry,
    },

    sameAs: [
      'https://wa.me/2348037135545',
    ],
  };
}