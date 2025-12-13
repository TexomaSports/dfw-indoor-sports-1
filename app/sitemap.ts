import { MetadataRoute } from 'next';

const SITE_URL = 'https://dfwindoorsports.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();

  const routes = [
    { path: '/', priority: 1.0, changeFrequency: 'daily' as const },
    { path: '/about', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/sports', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/academy', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/academy/coaches', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/memberships', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/events', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/rentals', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/cricket-lanes', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/badminton-courts', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/soccer-fields', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/dodgeball-courts', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/partners', priority: 0.6, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/waiver', priority: 0.5, changeFrequency: 'yearly' as const },
    { path: '/refund-policy', priority: 0.4, changeFrequency: 'yearly' as const },
    { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/terms', priority: 0.3, changeFrequency: 'yearly' as const },
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
