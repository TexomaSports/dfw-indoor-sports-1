import './globals.css'
import type { Metadata } from 'next'
import ClientLayout from './client-layout'

export const metadata: Metadata = {
  title: {
    default: 'DFW Indoor Sports',
    template: '%s | DFW Indoor Sports',
  },
  description: 'The premier multi-sport indoor facility in Fort Worth offering Cricket, Badminton, Soccer, and more.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="min-h-screen bg-[#FAFAFA] dark:bg-[#020408] text-gray-900 dark:text-gray-100 antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
