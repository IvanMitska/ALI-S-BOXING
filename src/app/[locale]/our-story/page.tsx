import { getTranslations } from 'next-intl/server';
import { generatePageMetadata } from '@/lib/metadata';
import { PageHeader } from '@/components/sections/PageHeader';
import { Container } from '@/components/ui/Container';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { TrainerCard } from '@/components/sections/TrainerCard';
import { CTASection } from '@/components/sections/CTASection';

interface OurStoryPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: OurStoryPageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'ourStory' });

  return generatePageMetadata({
    title: t('pageTitle'),
    description: t('pageSubtitle'),
    path: '/our-story',
    locale,
  });
}

const trainers = [
  {
    name: 'Coach Ali',
    role: 'Head Coach & Founder',
    image: '/images/trainers/ali.jpg',
    specialties: ['Muay Thai', 'Fighter Training'],
  },
  {
    name: 'Coach Som',
    role: 'Fitness Coach',
    image: '/images/trainers/som.jpg',
    specialties: ['Fitness Boxing', 'Conditioning'],
  },
  {
    name: 'Coach Mike',
    role: 'Boxing Coach',
    image: '/images/trainers/mike.jpg',
    specialties: ['Western Boxing', 'Defense'],
  },
  {
    name: 'Coach Noi',
    role: 'Youth Coach',
    image: '/images/trainers/noi.jpg',
    specialties: ['Kids Muay Thai', 'Beginners'],
  },
];

const stats = [
  { value: '1000+', labelKey: 'students' },
  { value: '50+', labelKey: 'countries' },
  { value: '15+', labelKey: 'experience' },
  { value: '25+', labelKey: 'champions' },
];

export default async function OurStoryPage({ params }: OurStoryPageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'ourStory' });

  return (
    <>
      <PageHeader title={t('pageTitle')} subtitle={t('pageSubtitle')} />

      {/* History Section */}
      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <div
                className="h-80 lg:h-[400px] rounded-xl overflow-hidden"
                style={{
                  backgroundImage: 'url(/images/history.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </AnimatedSection>

            <AnimatedSection direction="right">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                {t('history.title')}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t('history.content')}
              </p>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Mission Section */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left" className="order-2 lg:order-1">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                {t('mission.title')}
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t('mission.content')}
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right" className="order-1 lg:order-2">
              <div
                className="h-80 lg:h-[400px] rounded-xl overflow-hidden"
                style={{
                  backgroundImage: 'url(/images/mission.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24 bg-brand-yellow text-black">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection
                key={stat.labelKey}
                delay={index * 0.1}
                className="text-center"
              >
                <div className="text-4xl lg:text-5xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-black/70">{t(`stats.${stat.labelKey}`)}</div>
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      {/* Trainers Section */}
      <section className="py-16 lg:py-24">
        <Container>
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              {t('trainers.title')}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t('trainers.subtitle')}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainers.map((trainer, index) => (
              <AnimatedSection key={trainer.name} delay={index * 0.1}>
                <TrainerCard {...trainer} />
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
