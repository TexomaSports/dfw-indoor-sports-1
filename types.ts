import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface FeatureCard {
  title: string;
  image: string;
  link: string;
}

export interface ServiceHighlight {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface PricingCard {
  title: string;
  price: string;
  features: string[];
  recommended?: boolean;
}