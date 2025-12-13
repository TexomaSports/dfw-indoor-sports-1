import type { Metadata } from 'next'
import { createPageMetadata } from '@/lib/metadata'

export const metadata: Metadata = createPageMetadata({
  title: 'Refund & Cancellation Policy | DFW Indoor Sports',
  description: 'Review our refund and cancellation policy for court rentals, memberships, academy programs, and events at DFW Indoor Sports. Clear, fair policies for all services.',
  keywords: [
    'refund policy Fort Worth sports',
    'cancellation policy DFW',
    'sports facility refund',
  ],
  path: '/refund-policy',
})

export default function RefundPolicyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
