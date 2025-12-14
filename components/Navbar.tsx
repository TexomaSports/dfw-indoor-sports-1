'use client'

import React, { useState, useEffect } from 'react'
import { ArrowRight, ChevronRight, ChevronDown, Menu, X, Moon, Sun } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NAV_ITEMS } from '@/constants'
import { useTheme } from '@/context/ThemeContext'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    if (pathname !== '/') {
      window.scrollTo(0, 0)
    }
  }, [pathname])

  return (
    <>
      <nav 
        className={`sticky top-0 z-[100] w-full transition-all duration-300 border-b ${
          isOpen 
            ? 'bg-white dark:bg-dfw-navy border-gray-100 dark:border-white/10' 
            : scrolled 
              ? 'bg-white/95 dark:bg-dfw-navy/95 backdrop-blur-xl border-gray-200 dark:border-white/10 shadow-md py-2' 
              : 'bg-white dark:bg-dfw-navy border-gray-100 dark:border-white/10 py-4'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 relative z-[110]">
          <div className="flex justify-between items-center h-12 md:h-14">
            
            <div className="flex items-center flex-shrink-0 group cursor-pointer relative z-50">
              <Link href="/" className="flex items-center gap-2 select-none">
                <img src="/images/dfwlogo.png" alt="DFW Indoor Sports" className="h-10 md:h-12 w-auto" />
              </Link>
            </div>

            <div className="hidden lg:flex items-center gap-8 xl:gap-10">
              <div className="flex items-center gap-1">
                {NAV_ITEMS.map((item) => (
                  <div key={item.label} className="relative group/menu">
                    {item.children ? (
                      <>
                        <button
                          className={`relative px-3 py-2 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest transition-colors duration-300 group-hover/menu:text-dfw-red ${
                            pathname.startsWith(item.href) ? 'text-dfw-navy dark:text-white' : 'text-gray-500 dark:text-gray-400'
                          }`}
                        >
                          {item.label}
                          <ChevronDown size={10} className="transition-transform duration-300 group-hover/menu:rotate-180" />
                          
                          <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-dfw-red transition-all duration-300 group-hover/menu:w-1/2 ${pathname.startsWith(item.href) ? 'w-1/2' : ''}`}></span>
                        </button>
                        
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-56 opacity-0 invisible group-hover/menu:opacity-100 group-hover/menu:visible transition-all duration-300 transform translate-y-2 group-hover/menu:translate-y-0">
                          <div className="bg-white dark:bg-gray-900 border border-gray-100 dark:border-white/10 shadow-xl rounded-sm overflow-hidden p-1">
                            {item.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href}
                                className="block px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-300 hover:text-dfw-red dark:hover:text-dfw-red hover:bg-gray-50 dark:hover:bg-white/5 transition-all rounded-sm flex items-center justify-between group/item"
                              >
                                <span>{child.label}</span>
                                <ChevronRight size={10} className="opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all text-dfw-red" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className={`relative px-3 py-2 block text-[11px] font-bold uppercase tracking-widest transition-colors duration-300 hover:text-dfw-red ${
                          pathname === item.href ? 'text-dfw-navy dark:text-white' : 'text-gray-500 dark:text-gray-400'
                        }`}
                      >
                        {item.label}
                        <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-dfw-red transition-all duration-300 group-hover:w-1/2 ${pathname === item.href ? 'w-1/2' : ''}`}></span>
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              <div className="pl-6 border-l border-gray-200 dark:border-white/10 flex items-center gap-4">
                <button 
                  onClick={toggleTheme}
                  className="p-2 rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10 transition-all"
                  aria-label="Toggle Dark Mode"
                >
                  {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                </button>

                <Link
                  href="/contact"
                  className="group relative inline-flex items-center gap-2 px-5 py-2.5 bg-dfw-navy dark:bg-white dark:text-dfw-navy text-white text-[10px] font-bold uppercase tracking-widest rounded-sm overflow-hidden transition-all hover:bg-dfw-red dark:hover:bg-gray-200 shadow-md"
                >
                  <span className="relative z-10">Contact Us</span>
                  <ArrowRight size={12} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="lg:hidden flex items-center gap-4 z-50">
              <button 
                  onClick={toggleTheme}
                  className="p-2 rounded-full text-gray-500 dark:text-gray-400"
              >
                  {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 -mr-2 text-dfw-navy dark:text-white hover:text-dfw-red transition-colors focus:outline-none`}
                aria-label="Toggle Menu"
              >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="lg:hidden fixed inset-0 z-[90] bg-white dark:bg-dfw-navy"
            >
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] dark:opacity-[0.05]"></div>

              <div className="flex flex-col h-full pt-28 px-6 pb-12 overflow-y-auto relative z-10">
                  
                  <nav className="flex-1 space-y-2">
                      {NAV_ITEMS.map((item, idx) => (
                          <motion.div
                              key={item.label}
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.05 + 0.2 }}
                              className="border-b border-gray-100 dark:border-white/10 last:border-0"
                          >
                              {item.children ? (
                                  <div className="py-4">
                                      <Link 
                                          href={item.href}
                                          onClick={() => setIsOpen(false)}
                                          className="block font-header font-bold text-2xl text-dfw-navy dark:text-white uppercase mb-4"
                                      >
                                          {item.label}
                                      </Link>
                                      <div className="pl-4 border-l-2 border-gray-100 dark:border-white/10 space-y-3">
                                          {item.children.map(child => (
                                              <Link 
                                                  key={child.label}
                                                  href={child.href}
                                                  onClick={() => setIsOpen(false)}
                                                  className="block text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest hover:text-dfw-red transition-colors"
                                              >
                                                  {child.label}
                                              </Link>
                                          ))}
                                      </div>
                                  </div>
                              ) : (
                                  <Link
                                      href={item.href}
                                      className="block py-4 font-header font-bold text-2xl text-dfw-navy dark:text-white uppercase hover:text-dfw-red transition-colors"
                                      onClick={() => setIsOpen(false)}
                                  >
                                      {item.label}
                                  </Link>
                              )}
                          </motion.div>
                      ))}
                  </nav>

                  <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="mt-8 pt-8 border-t border-gray-100 dark:border-white/10" 
                  >
                      <Link
                          href="/contact"
                          className="flex items-center justify-center w-full bg-dfw-red text-white py-4 rounded-sm font-bold uppercase tracking-widest text-xs gap-3 shadow-[0_0_20px_rgba(214,40,40,0.3)] active:scale-[0.98] transition-transform"
                          onClick={() => setIsOpen(false)}
                      >
                          Get In Touch <ArrowRight size={14} />
                      </Link>
                      
                      <div className="flex justify-center gap-8 mt-8 text-[10px] font-bold uppercase tracking-widest text-gray-400 dark:text-gray-500">
                          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-dfw-navy dark:hover:text-white transition-colors">Instagram</a>
                          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-dfw-navy dark:hover:text-white transition-colors">Facebook</a>
                          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-dfw-navy dark:hover:text-white transition-colors">Twitter</a>
                      </div>
                  </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  )
}