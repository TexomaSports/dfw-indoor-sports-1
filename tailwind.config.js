/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'bg-dfw-red',
    'bg-blue-600',
    'bg-green-600',
    'bg-purple-600',
    'text-dfw-red',
    'text-blue-600',
    'text-green-600',
    'text-purple-600',
    'border-dfw-red',
    'border-blue-600',
    'border-green-600',
    'border-purple-600',
    'bg-dfw-red/10',
    'bg-blue-600/10',
    'bg-green-600/10',
    'bg-purple-600/10',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dfw-red': {
          DEFAULT: '#D62828',
          50: '#FDECEC',
          100: '#FAC7C7',
          200: '#F59595',
          300: '#EF6363',
          400: '#E24040',
          500: '#D62828',
          600: '#B82020',
          700: '#991919',
          800: '#7A1414',
          900: '#5C0F0F',
        },
        'dfw-navy': {
          DEFAULT: '#0A111F',
          50: '#E8EBF0',
          100: '#C5CCD9',
          light: '#141D2E',
          dark: '#050911',
        },
        'dfw-surface': '#111827',
        'dfw-border': 'rgba(255, 255, 255, 0.1)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        header: ['Oswald', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        // Fluid typography with optical sizing
        'display-xl': ['clamp(3rem, 8vw, 7rem)', { lineHeight: '0.95', letterSpacing: '-0.03em', fontWeight: '700' }],
        'display-lg': ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '1', letterSpacing: '-0.025em', fontWeight: '700' }],
        'display': ['clamp(2rem, 4vw, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '600' }],
        'heading-lg': ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.2', letterSpacing: '-0.015em', fontWeight: '600' }],
        'heading': ['clamp(1.25rem, 2vw, 1.75rem)', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7', letterSpacing: '-0.01em' }],
        'body': ['1rem', { lineHeight: '1.6', letterSpacing: '-0.005em' }],
        'caption': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0.01em' }],
        'overline': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.1em', fontWeight: '600' }],
      },
      letterSpacing: {
        'luxury': '0.15em',
        'tech': '0.05em',
        'tight': '-0.03em',
        'headline': '-0.025em',
      },
      boxShadow: {
        // Luxury shadow scale
        'luxury-sm': '0 2px 8px -2px rgba(0, 0, 0, 0.1)',
        'luxury': '0 8px 30px -12px rgba(0, 0, 0, 0.25)',
        'luxury-lg': '0 25px 50px -12px rgba(0, 0, 0, 0.35)',
        'luxury-xl': '0 35px 60px -15px rgba(0, 0, 0, 0.4)',
        'luxury-red': '0 20px 40px -12px rgba(214, 40, 40, 0.35)',
        'luxury-red-sm': '0 10px 25px -8px rgba(214, 40, 40, 0.25)',
        'inner-glow': 'inset 0 0 20px rgba(255, 255, 255, 0.05)',
        'inner-glow-red': 'inset 0 0 30px rgba(214, 40, 40, 0.1)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.12), inset 0 0 0 1px rgba(255, 255, 255, 0.05)',
        'card': '0 4px 24px -4px rgba(0, 0, 0, 0.15)',
        'card-hover': '0 12px 40px -8px rgba(0, 0, 0, 0.25)',
      },
      backgroundImage: {
        'grid-white': "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.04)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
        'grid-dark': "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(0 0 0 / 0.03)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e\")",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-premium': 'linear-gradient(135deg, rgba(214, 40, 40, 0.1) 0%, transparent 50%, rgba(59, 130, 246, 0.05) 100%)',
        'shimmer': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'bounce': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'marquee': 'marquee 40s linear infinite',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'shine': 'shine 2s infinite',
        'zoom-slow': 'zoom 20s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
        'reveal': 'reveal 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeInUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        shine: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        zoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.5', boxShadow: '0 0 20px rgba(214, 40, 40, 0.3)' },
          '50%': { opacity: '1', boxShadow: '0 0 40px rgba(214, 40, 40, 0.5)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(24px)', filter: 'blur(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)', filter: 'blur(0)' },
        }
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.mask-linear-fade': {
          'mask-image': 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          '-webkit-mask-image': 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        },
        '.text-balance': {
          'text-wrap': 'balance',
        },
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
      })
    }
  ],
}