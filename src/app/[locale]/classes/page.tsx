import { getTranslations } from 'next-intl/server';
import { generatePageMetadata } from '@/lib/metadata';
import { ClassesHero } from '@/components/sections/ClassesHero';
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
      <ClassesHero subtitle={t('pageSubtitle')} />
      <Programs showViewAllButton={false} />
      <Schedule />
      <CTASection />
    </>
  );
}
