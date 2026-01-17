import { Metadata } from 'next';
import { siteConfig } from './constants';

interface GenerateMetadataOptions {
  title?: string;
  description?: string;
  path?: string;
  locale?: string;
  image?: string;
}

export function generatePageMetadata({
  title,
  description,
  path = '',
  locale = 'en',
  image = '/og-image.jpg',
}: GenerateMetadataOptions): Metadata {
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : siteConfig.name;

  const fullDescription = description || siteConfig.description;
  const url = `${siteConfig.url}/${locale}${path}`;

  return {
    title: fullTitle,
    description: fullDescription,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
      languages: {
        en: `${siteConfig.url}/en${path}`,
        th: `${siteConfig.url}/th${path}`,
        ru: `${siteConfig.url}/ru${path}`,
        zh: `${siteConfig.url}/zh${path}`,
      },
    },
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url,
      siteName: siteConfig.name,
      images: [{ url: image, width: 1200, height: 630 }],
      locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
      images: [image],
    },
  };
}
