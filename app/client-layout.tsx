'use client'

import { ThemeProvider } from '@/context/ThemeContext'
import Navbar from '@/components/Navbar'
import TopBar from '@/components/TopBar'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-dfw-red focus:text-white focus:font-bold focus:text-xs focus:uppercase focus:tracking-widest focus:rounded-sm"
        >
          Skip to main content
        </a>
        <TopBar />
        <Navbar />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
        <BackToTop />
      </div>
    </ThemeProvider>
  )
}