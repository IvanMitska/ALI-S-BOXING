import { getTranslations } from 'next-intl/server';
import { generatePageMetadata } from '@/lib/metadata';
import { Hero } from '@/components/sections/Hero';
import { Benefits } from '@/components/sections/Benefits';
import { Programs } from '@/components/sections/Programs';
import { ParallaxSection } from '@/components/sections/ParallaxSection';
import { PricingTable } from '@/components/sections/PricingTable';
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

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'home.parallax' });

  return (
    <>
      <Hero />
      <Programs />
      <ParallaxSection
        image="/images/ali-images.jpg"
        quote={t('aliQuote')}
        author="Muhammad Ali"
        grainy
      />
      <PricingTable />
      <ParallaxSection
        image="/images/mike-tyson.jpg"
        quote={t('tysonQuote')}
        author="Mike Tyson"
        grainy
      />
      <Benefits />
      <AboutPreview />
      <CTASection />
    </>
  );
}
