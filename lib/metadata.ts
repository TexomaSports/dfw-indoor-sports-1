import type { Metadata } from 'next'

// Business Information
export const BUSINESS_INFO = {
  name: 'DFW Indoor Sports',
  legalName: 'DFW Indoor Sports LLC',
  description:
    'Premier multi-sport indoor facility in Dallas-Fort Worth offering cricket lanes, badminton courts, soccer fields, and dodgeball courts. Professional coaching, memberships, and court rentals.',
  url: 'https://dfwindoorsports.com',
  address: {
    street: '16230 Three Wide Drive',
    city: 'Fort Worth',
    state: 'TX',
    zip: '76177',
    country: 'US',
  },
  contact: {
    phone: '(817) 938-0808',
    email: 'info@dfwindoorsports.com',
  },
  geo: {
    latitude: 33.0392,
    longitude: -97.3281,
  },
  hours: 'Mo-Su 05:00-23:00',
  social: {
    facebook: 'https://www.facebook.com/dfwindoorsports',
    instagram: 'https://www.instagram.com/dfwindoorsports',
  },
}

// Default Site Metadata
export const defaultMetadata: Metadata = {
  metadataBase: new URL(BUSINESS_INFO.url),
  title: {
    default: 'DFW Indoor Sports | Premier Multi-Sport Facility in Fort Worth',
    template: '%s | DFW Indoor Sports',
  },
  description: BUSINESS_INFO.description,
  keywords: [
    'indoor sports Dallas Fort Worth',
    'multi-sport facility DFW',
    'indoor cricket Fort Worth',
    'badminton courts Dallas',
    'indoor soccer DFW',
    'sports facility Texas',
  ],
  authors: [{ name: 'DFW Indoor Sports' }],
  creator: 'DFW Indoor Sports',
  publisher: 'DFW Indoor Sports',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BUSINESS_INFO.url,
    siteName: BUSINESS_INFO.name,
    title: 'DFW Indoor Sports | Premier Multi-Sport Facility in Fort Worth',
    description: BUSINESS_INFO.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DFW Indoor Sports | Premier Multi-Sport Facility in Fort Worth',
    description: BUSINESS_INFO.description,
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

// Generate Page-Specific Metadata
export function createPageMetadata({
  title,
  description,
  keywords = [],
  path = '',
  image,
}: {
  title: string
  description: string
  keywords?: string[]
  path?: string
  image?: string
}): Metadata {
  const url = `${BUSINESS_INFO.url}${path}`
  const ogImage = image || `${BUSINESS_INFO.url}/og-image.jpg`

  return {
    title,
    description,
    keywords: [...defaultMetadata.keywords!, ...keywords],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: BUSINESS_INFO.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

// Generate LocalBusiness Schema
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SportsActivityLocation',
    name: BUSINESS_INFO.name,
    legalName: BUSINESS_INFO.legalName,
    description: BUSINESS_INFO.description,
    url: BUSINESS_INFO.url,
    telephone: BUSINESS_INFO.contact.phone,
    email: BUSINESS_INFO.contact.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.address.street,
      addressLocality: BUSINESS_INFO.address.city,
      addressRegion: BUSINESS_INFO.address.state,
      postalCode: BUSINESS_INFO.address.zip,
      addressCountry: BUSINESS_INFO.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS_INFO.geo.latitude,
      longitude: BUSINESS_INFO.geo.longitude,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '05:00',
      closes: '23:00',
    },
    priceRange: '$$',
    sameAs: [BUSINESS_INFO.social.facebook, BUSINESS_INFO.social.instagram],
    hasMap: `https://www.google.com/maps/place/${BUSINESS_INFO.address.street.replace(/ /g, '+')}+${BUSINESS_INFO.address.city}+${BUSINESS_INFO.address.state}+${BUSINESS_INFO.address.zip}`,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '245',
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Dallas',
      },
      {
        '@type': 'City',
        name: 'Fort Worth',
      },
      {
        '@type': 'State',
        name: 'Texas',
      },
    ],
    sport: ['Cricket', 'Badminton', 'Soccer', 'Dodgeball'],
  }
}

// Generate Organization Schema
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: BUSINESS_INFO.name,
    legalName: BUSINESS_INFO.legalName,
    url: BUSINESS_INFO.url,
    logo: `${BUSINESS_INFO.url}/logo.png`,
    description: BUSINESS_INFO.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.address.street,
      addressLocality: BUSINESS_INFO.address.city,
      addressRegion: BUSINESS_INFO.address.state,
      postalCode: BUSINESS_INFO.address.zip,
      addressCountry: BUSINESS_INFO.address.country,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: BUSINESS_INFO.contact.phone,
      contactType: 'customer service',
      email: BUSINESS_INFO.contact.email,
      areaServed: 'US',
      availableLanguage: ['English'],
    },
    sameAs: [BUSINESS_INFO.social.facebook, BUSINESS_INFO.social.instagram],
  }
}

// Generate Breadcrumb Schema
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${BUSINESS_INFO.url}${item.url}`,
    })),
  }
}

// Generate Sports Activity Schema
export function generateSportsActivitySchema(sportName: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SportsEvent',
    name: `${sportName} at ${BUSINESS_INFO.name}`,
    description,
    location: {
      '@type': 'SportsActivityLocation',
      name: BUSINESS_INFO.name,
      address: {
        '@type': 'PostalAddress',
        streetAddress: BUSINESS_INFO.address.street,
        addressLocality: BUSINESS_INFO.address.city,
        addressRegion: BUSINESS_INFO.address.state,
        postalCode: BUSINESS_INFO.address.zip,
        addressCountry: BUSINESS_INFO.address.country,
      },
    },
    sport: sportName,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      price: 'varies',
      priceCurrency: 'USD',
    },
  }
}

// Generate FAQ Schema
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

// Generate Service Schema
export function generateServiceSchema(service: {
  name: string
  description: string
  price?: string
  image?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'SportsActivityLocation',
      name: BUSINESS_INFO.name,
      address: {
        '@type': 'PostalAddress',
        streetAddress: BUSINESS_INFO.address.street,
        addressLocality: BUSINESS_INFO.address.city,
        addressRegion: BUSINESS_INFO.address.state,
        postalCode: BUSINESS_INFO.address.zip,
        addressCountry: BUSINESS_INFO.address.country,
      },
    },
    areaServed: {
      '@type': 'City',
      name: 'Dallas-Fort Worth',
    },
    ...(service.price && {
      offers: {
        '@type': 'Offer',
        price: service.price,
        priceCurrency: 'USD',
      },
    }),
    ...(service.image && { image: service.image }),
  }
}