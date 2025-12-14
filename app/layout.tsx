import './globals.css'
import type { Metadata } from 'next'
import ClientLayout from './client-layout'
import { defaultMetadata, generateLocalBusinessSchema, generateOrganizationSchema } from '@/lib/metadata'

export const metadata: Metadata = defaultMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const localBusinessSchema = generateLocalBusinessSchema()
  const organizationSchema = generateOrganizationSchema()

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#020408" />
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
      </head>
      <body className="min-h-screen bg-[#FAFAFA] dark:bg-[#020408] text-gray-900 dark:text-gray-100 antialiased">
        <div aria-live="polite" aria-atomic="true" className="sr-only" id="announcements"></div>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}