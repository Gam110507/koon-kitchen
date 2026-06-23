import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/menu', '/gallery', '/reservation', '/about', '/contact', '/privacy', '/terms', '/accessibility'].map(r => ({
    url: `${siteConfig.url}${r}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: r === '' ? 1 : 0.8,
  }));
  return routes;
}
