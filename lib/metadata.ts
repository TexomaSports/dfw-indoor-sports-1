import type { Metadata } from 'next';

const SITE_URL = 'https://dfwindoorsports.com';

export const BUSINESS_INFO = {
  name: 'DFW Indoor Sports',
  legalName: 'DFW Indoor Sports LLC',
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/og-image.jpg`,
  description:
    'DFW Indoor Sports is the premier multi-sport indoor facility in Dallas-Fort Worth offering Cricket, Badminton, Soccer, Dodgeball, professional coaching, and court rentals.',
  telephone: '(817) 938-0808',
  email: 'info@dfwindoorsports.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '16230 Three Wide Drive Suite 200',
    addressLocality: 'Fort Worth',
    addressRegion: 'TX',
    postalCode: '76177',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '32.9895',
    longitude: '-97.3547',
  },
  openingHours: ['Mo-Su 05:00-23:00'],
  priceRange: '$$',
  social: {
    facebook: 'https://www.facebook.com/dfwindoorsports',
    instagram: 'https://www.instagram.com/dfwindoorsports',
  },
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'DFW Indoor Sports | Premier Multi-Sport Facility in Dallas-Fort Worth',
    template: '%s | DFW Indoor Sports',
  },
  description: BUSINESS_INFO.description,
  keywords: [
    'indoor sports Dallas Fort Worth',
    'indoor cricket Fort Worth',
    'badminton courts DFW',
    'indoor soccer Dallas',
    'dodgeball courts Texas',
    'sports facility Fort Worth',
    'cricket academy Texas',
    'multi-sport facility DFW',
  ],
  authors: [{ name: 'DFW Indoor Sports' }],
  creator: 'DFW Indoor Sports',
  publisher: 'DFW Indoor Sports',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'DFW Indoor Sports',
    title: 'DFW Indoor Sports | Premier Multi-Sport Facility in Dallas-Fort Worth',
    description: BUSINESS_INFO.description,
    images: [
      {
        url: BUSINESS_INFO.image,
        width: 1200,
        height: 630,
        alt: 'DFW Indoor Sports - Premier Multi-Sport Indoor Facility',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DFW Indoor Sports | Premier Multi-Sport Facility in Dallas-Fort Worth',
    description: BUSINESS_INFO.description,
    images: [BUSINESS_INFO.image],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE',
  },
  alternates: {
    canonical: SITE_URL,
  },
};

interface PageMetadataOptions {
  title: string;
  description: string;
  keywords?: string[];
  path: string;
  image?: string;
}

export function createPageMetadata({
  title,
  description,
  keywords = [],
  path,
  image,
}: PageMetadataOptions): Metadata {
  const url = `${SITE_URL}${path}`;
  const ogImage = image || BUSINESS_INFO.image;

  return {
    title,
    description,
    keywords: [...(defaultMetadata.keywords as string[]), ...keywords],
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url,
      siteName: 'DFW Indoor Sports',
      title: `${title} | DFW Indoor Sports`,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | DFW Indoor Sports`,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: url,
    },
  };
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SportsActivityLocation',
    '@id': `${SITE_URL}/#organization`,
    name: BUSINESS_INFO.name,
    legalName: BUSINESS_INFO.legalName,
    url: BUSINESS_INFO.url,
    logo: BUSINESS_INFO.logo,
    image: BUSINESS_INFO.image,
    description: BUSINESS_INFO.description,
    telephone: BUSINESS_INFO.telephone,
    email: BUSINESS_INFO.email,
    address: BUSINESS_INFO.address,
    geo: BUSINESS_INFO.geo,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '05:00',
        closes: '23:00',
      },
    ],
    priceRange: BUSINESS_INFO.priceRange,
    sameAs: [BUSINESS_INFO.social.facebook, BUSINESS_INFO.social.instagram],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Indoor Sports Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Cricket Lane Rental',
            description: 'Professional indoor cricket lanes for practice and training',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Badminton Court Rental',
            description: 'International standard badminton courts',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Indoor Soccer Field Rental',
            description: 'Climate-controlled indoor soccer fields',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Dodgeball Court Rental',
            description: 'Safe indoor dodgeball courts for all ages',
          },
        },
      ],
    },
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: BUSINESS_INFO.name,
    url: BUSINESS_INFO.url,
    logo: BUSINESS_INFO.logo,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: BUSINESS_INFO.telephone,
      contactType: 'customer service',
      availableLanguage: ['English'],
    },
    sameAs: [BUSINESS_INFO.social.facebook, BUSINESS_INFO.social.instagram],
  };
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

export function generateSportsActivitySchema(sport: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SportsActivityLocation',
    name: `${sport} at DFW Indoor Sports`,
    description,
    url: BUSINESS_INFO.url,
    address: BUSINESS_INFO.address,
    geo: BUSINESS_INFO.geo,
    telephone: BUSINESS_INFO.telephone,
  };
}
