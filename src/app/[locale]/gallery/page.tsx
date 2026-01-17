import { getTranslations } from 'next-intl/server';
import { generatePageMetadata } from '@/lib/metadata';
import { PageHeader } from '@/components/sections/PageHeader';
import { GalleryGrid } from '@/components/sections/GalleryGrid';

interface GalleryPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: GalleryPageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'gallery' });

  return generatePageMetadata({
    title: t('pageTitle'),
    description: t('pageSubtitle'),
    path: '/gallery',
    locale,
  });
}

export default async function GalleryPage({ params }: GalleryPageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'gallery' });

  return (
    <>
      <PageHeader title={t('pageTitle')} subtitle={t('pageSubtitle')} />
      <GalleryGrid />
    </>
  );
}
