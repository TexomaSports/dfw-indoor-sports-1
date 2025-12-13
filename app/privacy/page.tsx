import type { Metadata } from 'next'
import { createPageMetadata, generateBreadcrumbSchema } from '@/lib/metadata'

export const metadata: Metadata = createPageMetadata({
  title: 'Privacy Policy | DFW Indoor Sports',
  description: 'Read our privacy policy to understand how DFW Indoor Sports collects, uses, and protects your personal information when using our website and facilities.',
  keywords: [
    'privacy policy sports facility',
    'DFW Indoor Sports privacy',
  ],
  path: '/privacy',
})

export default function PrivacyPolicyPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Privacy Policy', url: '/privacy' },
  ])

  return (
    <div className="bg-white dark:bg-[#020408] min-h-screen pt-24 pb-12 font-sans transition-colors duration-300">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <h1 className="text-4xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-8">Privacy Policy</h1>
        <div className="prose prose-lg text-gray-600 dark:text-gray-400">
          <p>Last updated: October 2024</p>
          <p>DFW Indoor Sports (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;) operates the website and physical facility. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service.</p>
          <h3>Information Collection</h3>
          <p>We collect information you provide directly to us, such as when you create an account, book a court, subscribe to our newsletter, or contact customer support.</p>
          <h3>Use of Data</h3>
          <p>We use the collected data to provide and maintain our Service, notify you about changes, allow you to participate in interactive features, provide customer support, and gather analysis to improve our Service.</p>
          <h3>Security</h3>
          <p>The security of your data is important to us, but remember that no method of transmission over the Internet is 100% secure.</p>
          <h3>Contact Us</h3>
          <p>If you have any questions about this Privacy Policy, please contact us at info@dfwindoorsports.com.</p>
        </div>
      </div>
    </div>
  )
}