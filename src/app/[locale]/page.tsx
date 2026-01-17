import { getTranslations } from 'next-intl/server';
import { generatePageMetadata } from '@/lib/metadata';
import { Hero } from '@/components/sections/Hero';
import { Benefits } from '@/components/sections/Benefits';
import { Programs } from '@/components/sections/Programs';
import { AboutPreview } from '@/components/sections/AboutPreview';
import { CTASection } from '@/components/sections/CTASection';

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: HomePageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'home.hero' });

  return generatePageMetadata({
    title: t('title'),
    description: t('subtitle'),
    locale,
  });
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <Benefits />
      <Programs />
      <AboutPreview />
      <CTASection />
    </>
  );
}
