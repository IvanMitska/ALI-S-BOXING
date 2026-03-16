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
      <ParallaxSection image="/images/parallax-gym.jpg" words={[t('discipline'), t('dedication'), t('victory')]} />
      <PricingTable />
      <ParallaxSection image="/images/boxing.jpg" words={[t('train'), t('fight'), t('win')]} />
      <Benefits />
      <AboutPreview />
      <CTASection />
    </>
  );
}
