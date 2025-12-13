import { Trophy, Users, Star, Calendar, MapPin, Phone, Mail } from 'lucide-react';

export const NAV_ITEMS = [
  { label: 'Our Sports', href: '/sports' },
  { 
    label: 'Coaching', 
    href: '/academy',
    children: [
      { label: 'Academy', href: '/academy' },
      { label: 'Coaches', href: '/academy/coaches' }
    ]
  },
  { label: 'Memberships', href: '/memberships' },
  { label: 'About Us', href: '/about' },
  { label: 'Partners', href: '/partners' },
  { label: 'Special Events', href: '/events' },
  { 
    label: 'Rentals', 
    href: '/rentals',
    children: [
      { label: 'Overview', href: '/rentals' },
      { label: 'Cricket Lanes', href: '/cricket-lanes' },
      { label: 'Badminton Courts', href: '/badminton-courts' },
      { label: 'Soccer Fields', href: '/soccer-fields' },
      { label: 'Dodgeball Courts', href: '/dodgeball-courts' }
    ]
  }
];

export const MARQUEE_ITEMS = [
  'CRICKET', 'BADMINTON', 'DODGEBALL', 'SOCCER', 'CRICKET', 'BADMINTON', 'DODGEBALL', 'SOCCER'
];

export const CONTACT_INFO = {
  phone: '(817) 938-0808',
  email: 'info@dfwindoorsports.com',
  address: '16230 Three Wide Drive Suite 200, Fort Worth, TX 76177'
};