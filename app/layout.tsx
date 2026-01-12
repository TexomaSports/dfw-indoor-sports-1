import './globals.css'
import type { Metadata } from 'next'
import ClientLayout from './client-layout'
import { defaultMetadata, generateLocalBusinessSchema, generateOrganizationSchema, generateAggregateRatingSchema } from '@/lib/metadata'

export const metadata: Metadata = defaultMetadata

import { Inter, Oswald } from 'next/font/google'

// Optimized fonts with automatic preloading and font-display: swap
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const oswald = Oswald({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-oswald',
  weight: ['400', '500', '600', '700'],
})

//
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const localBusinessSchema = generateLocalBusinessSchema()
  const organizationSchema = generateOrganizationSchema()
  const aggregateRatingSchema = generateAggregateRatingSchema({
    ratingValue: 5.0,
    reviewCount: 47,
  })

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#020408" />
        {/* Fallback for no-JavaScript: make all animated content visible */}
        <noscript>
          <style>{`
            .opacity-0 { opacity: 1 !important; }
            .animate-slide-up, .animate-fade-in-up, .animate-reveal { 
              animation: none !important; 
              opacity: 1 !important; 
              transform: none !important; 
            }
          `}</style>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(aggregateRatingSchema),
          }}
        />
      </head>
      <body className={`${inter.variable} ${oswald.variable} font-sans min-h-screen bg-[#FAFAFA] dark:bg-[#020408] text-gray-900 dark:text-gray-100 antialiased`}>
        <div aria-live="polite" aria-atomic="true" className="sr-only" id="announcements"></div>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}