'use client'

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[60] p-3 md:p-4 bg-dfw-red text-white rounded-sm shadow-[0_10px_20px_rgba(214,40,40,0.3)] border border-white/10 hover:bg-red-700 transition-all duration-500 transform hover:-translate-y-1 group ${
        isVisible ? 'translate-y-0 opacity-100 visible' : 'translate-y-10 opacity-0 invisible'
      }`}
      aria-label="Back to top"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"></div>
      <ArrowUp size={20} className="relative z-10 group-hover:scale-110 transition-transform duration-300" strokeWidth={2.5} />
    </button>
  );
};

export default BackToTop;