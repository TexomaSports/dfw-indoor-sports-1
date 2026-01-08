import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface RelatedPage {
    title: string
    href: string
    description: string
}

interface RelatedPagesProps {
    pages: RelatedPage[]
    title?: string
}

export default function RelatedPages({ pages, title = 'Related Pages' }: RelatedPagesProps) {
    if (!pages || pages.length === 0) return null

    return (
        <section className="py-12 border-t border-gray-200 dark:border-white/10">
            <div className="container mx-auto px-4">
                <h3 className="text-xl font-header font-bold text-dfw-navy dark:text-white uppercase mb-6">
                    {title}
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                    {pages.map((page) => (
                        <Link
                            key={page.href}
                            href={page.href}
                            className="group bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 p-6 rounded-lg hover:shadow-lg hover:border-dfw-red/30 transition-all"
                        >
                            <h4 className="font-bold text-dfw-navy dark:text-white mb-2 group-hover:text-dfw-red transition-colors flex items-center justify-between">
                                {page.title}
                                <ArrowRight size={16} className="text-gray-300 group-hover:text-dfw-red group-hover:translate-x-1 transition-all" />
                            </h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                {page.description}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

// Predefined related page sets for easy reuse
export const relatedPagesForCricket: RelatedPage[] = [
    { title: 'Court Rentals', href: '/rentals', description: 'Book cricket lanes by the hour' },
    { title: 'Academy Training', href: '/academy', description: 'Professional cricket coaching' },
    { title: 'Memberships', href: '/memberships', description: 'Unlimited access from $70/mo' },
]

export const relatedPagesForBadminton: RelatedPage[] = [
    { title: 'Court Rentals', href: '/rentals', description: 'Book badminton courts by the hour' },
    { title: 'Academy Training', href: '/academy', description: 'Professional badminton coaching' },
    { title: 'Memberships', href: '/memberships', description: 'Unlimited access from $70/mo' },
]

export const relatedPagesForEvents: RelatedPage[] = [
    { title: 'Contact Us', href: '/contact', description: 'Plan your event with our team' },
    { title: 'Court Rentals', href: '/rentals', description: 'Book courts for your event' },
    { title: 'About Us', href: '/about', description: 'Learn about our 50,000 sq ft facility' },
]

export const relatedPagesForMemberships: RelatedPage[] = [
    { title: 'Our Sports', href: '/sports', description: 'Explore all sports we offer' },
    { title: 'Academy', href: '/academy', description: 'Member discounts on coaching' },
    { title: 'Contact Us', href: '/contact', description: 'Questions about membership?' },
]
