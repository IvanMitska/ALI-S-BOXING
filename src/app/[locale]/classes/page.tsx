import { getTranslations } from 'next-intl/server';
import { generatePageMetadata } from '@/lib/metadata';
import { PageHeader } from '@/components/sections/PageHeader';
import { Programs } from '@/components/sections/Programs';
import { Schedule } from '@/components/sections/Schedule';
import { CTASection } from '@/components/sections/CTASection';

interface ClassesPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: ClassesPageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'classes' });

  return generatePageMetadata({
    title: t('pageTitle'),
    description: t('pageSubtitle'),
    path: '/classes',
    locale,
  });
}

export default async function ClassesPage({ params }: ClassesPageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'classes' });

  return (
    <>
      <PageHeader title={t('pageTitle')} subtitle={t('pageSubtitle')} />
      <Programs showAll showViewAllButton={false} />
      <Schedule />
      <CTASection />
    </>
  );
}
