import Link from 'next/link'
import { Home, ArrowLeft, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="relative mb-8">
          <span className="font-header text-[150px] md:text-[200px] font-bold text-gray-100 dark:text-gray-800 leading-none select-none">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <Search className="w-16 h-16 text-dfw-red opacity-80" />
          </div>
        </div>
        <h1 className="font-header text-3xl md:text-4xl font-bold text-dfw-navy dark:text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          The page you're looking for doesn't exist or has been moved. 
          Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-dfw-red text-white font-bold text-xs uppercase tracking-widest rounded-sm hover:bg-red-700 transition-colors"
          >
            <Home size={16} />
            Go Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-dfw-navy dark:bg-white text-white dark:text-dfw-navy font-bold text-xs uppercase tracking-widest rounded-sm hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
          >
            <ArrowLeft size={16} />
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}
