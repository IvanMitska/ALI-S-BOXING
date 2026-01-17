import { MetadataRoute } from 'next';
import { locales } from '@/i18n/routing';
import { siteConfig } from '@/lib/constants';

const pages = ['', '/classes', '/our-story', '/gallery', '/contact'];

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const page of pages) {
      sitemapEntries.push({
        url: `${siteConfig.url}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'weekly' : 'monthly',
        priority: page === '' ? 1 : 0.8,
        alternates: {
          languages: locales.reduce(
            (acc, loc) => ({
              ...acc,
              [loc]: `${siteConfig.url}/${loc}${page}`,
            }),
            {}
          ),
        },
      });
    }
  }

  return sitemapEntries;
}
