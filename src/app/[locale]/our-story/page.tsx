'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { PageHeader } from '@/components/sections/PageHeader';
import { Container } from '@/components/ui/Container';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { CTASection } from '@/components/sections/CTASection';

const stats = [
  { value: '1000+', labelKey: 'students' },
  { value: '50+', labelKey: 'countries' },
  { value: '8+', labelKey: 'experience' },
  { value: '25+', labelKey: 'champions' },
];

export default function OurStoryPage() {
  const t = useTranslations('ourStory');

  return (
    <>
      <PageHeader title={t('pageTitle')} subtitle={t('pageSubtitle')} />

      {/* Welcome Section - Big Statement */}
      <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
        {/* Diagonal accent */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-yellow/5 -skew-x-12 origin-top-right" />

        <Container className="relative z-10">
          <div className="max-w-5xl">
            <motion.span
              className="inline-block text-brand-yellow text-sm font-bold uppercase tracking-[0.3em] mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {t('welcome.title')}
            </motion.span>

            <motion.h2
              className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.95] mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              {t('welcome.subtitle')}
            </motion.h2>

            <motion.div
              className="flex items-center gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <span className="w-16 h-1 bg-brand-yellow" />
              <span className="text-foreground-muted uppercase tracking-wider text-sm">Est. 2017</span>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Stats - Horizontal Band */}
      <section className="py-0 bg-background border-y border-border">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.labelKey}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative py-12 lg:py-16 text-center border-r border-border last:border-r-0 max-lg:[&:nth-child(2)]:border-r-0"
              >
                <motion.div
                  className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2"
                  initial={{ y: 20 }}
                  whileInView={{ y: 0 }}
                  transition={{ delay: index * 0.1 + 0.1, type: 'spring' }}
                  viewport={{ once: true }}
                >
                  <span className="text-brand-yellow">{stat.value}</span>
                </motion.div>
                <div className="text-foreground-muted uppercase tracking-[0.15em] text-xs font-medium">
                  {t(`stats.${stat.labelKey}`)}
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* History Section - Split Layout */}
      <section className="py-24 lg:py-32 bg-background">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Image Side */}
            <AnimatedSection direction="left" className="relative">
              <div className="relative h-[500px] lg:h-[700px]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: 'url(/images/history.jpg)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background lg:to-background" />

                {/* Year overlay */}
                <div className="absolute bottom-8 left-8">
                  <motion.div
                    className="font-display text-[120px] lg:text-[180px] font-bold text-white/10 leading-none"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    17
                  </motion.div>
                </div>
              </div>
            </AnimatedSection>

            {/* Content Side */}
            <AnimatedSection direction="right" className="flex items-center">
              <div className="py-12 lg:py-0 lg:pl-16">
                <span className="inline-block text-brand-yellow text-sm font-bold uppercase tracking-[0.2em] mb-6">
                  The Beginning
                </span>
                <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-8 leading-[0.95]">
                  {t('history.title')}
                </h2>
                <div className="space-y-6 text-foreground-muted text-lg leading-relaxed">
                  <p>{t('history.content1')}</p>
                  <p>{t('history.content2')}</p>
                </div>

                {/* Quote */}
                <motion.blockquote
                  className="mt-10 relative pl-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-yellow" />
                  <p className="text-white text-xl italic font-light">
                    "Train with discipline, grow with confidence, feel like family."
                  </p>
                </motion.blockquote>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Parallax Divider - Full Screen */}
      <section className="relative h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed grayscale"
          style={{ backgroundImage: 'url(/images/boxing.jpg)' }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="font-display text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold text-white">
              NO HYPE
            </span>
            <span className="block font-display text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold text-brand-yellow mt-4">
              JUST RESULTS
            </span>
          </motion.div>
        </div>
      </section>

      {/* Growth Section - Reverse Split */}
      <section className="py-24 lg:py-32 bg-background-secondary">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Content Side */}
            <AnimatedSection direction="left" className="flex items-center order-2 lg:order-1">
              <div className="py-12 lg:py-0 lg:pr-16">
                <span className="inline-block text-brand-yellow text-sm font-bold uppercase tracking-[0.2em] mb-6">
                  New Chapter
                </span>
                <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-8 leading-[0.95]">
                  {t('growth.title')}
                </h2>
                <div className="space-y-6 text-foreground-muted text-lg leading-relaxed">
                  <p>{t('growth.content1')}</p>
                  <p>{t('growth.content2')}</p>
                </div>

                {/* Location Card */}
                <motion.div
                  className="mt-10 flex items-center gap-5 p-5 bg-background border-l-4 border-brand-yellow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="w-14 h-14 bg-brand-yellow/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">Chalong, Phuket</div>
                    <div className="text-foreground-muted text-sm">Heart of Phuket's Fitness Street</div>
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>

            {/* Image Side */}
            <AnimatedSection direction="right" className="relative order-1 lg:order-2">
              <div className="relative h-[500px] lg:h-[700px]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: 'url(/images/mission.jpg)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background-secondary lg:to-background-secondary" />

                {/* Year overlay */}
                <div className="absolute bottom-8 right-8">
                  <motion.div
                    className="font-display text-[120px] lg:text-[180px] font-bold text-white/10 leading-none"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    24
                  </motion.div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Today - Full Width Statement */}
      <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
        {/* Background text */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
          <span className="font-display text-[200px] md:text-[300px] lg:text-[400px] font-bold text-white/[0.02] whitespace-nowrap">
            ALI'S
          </span>
        </div>

        <Container className="relative z-10">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-brand-yellow text-sm font-bold uppercase tracking-[0.3em] mb-6">
              Today
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-10 leading-[0.95]">
              {t('today.title')}
            </h2>
            <p className="text-xl lg:text-2xl text-foreground-muted leading-relaxed">
              {t('today.content')}
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Values - Modern Cards */}
      <section className="py-24 lg:py-32 bg-background-secondary">
        <Container>
          <AnimatedSection className="mb-16">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
                <span className="inline-block text-brand-yellow text-sm font-bold uppercase tracking-[0.2em] mb-4">
                  What We Stand For
                </span>
                <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-[0.95]">
                  Our Values
                </h2>
              </div>
              <p className="text-foreground-muted max-w-md lg:text-right">
                The principles that guide everything we do at Ali's Boxing Gym
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                title: 'Respect',
                description: 'We treat everyone who walks through our doors with respect, regardless of their skill level or background.',
              },
              {
                title: 'Focus',
                description: 'Training requires dedication and concentration. We help you develop the mental discipline to achieve your goals.',
              },
              {
                title: 'Resilience',
                description: 'Boxing teaches you to get back up. We build fighters who never give up, in the ring and in life.',
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative bg-background p-8 lg:p-10 h-full border border-border hover:border-brand-yellow/30 transition-all duration-500">
                  {/* Number */}
                  <span className="font-display text-7xl lg:text-8xl font-bold text-brand-yellow/10 absolute -top-4 -left-2">
                    0{index + 1}
                  </span>

                  {/* Content */}
                  <div className="relative pt-8">
                    <h3 className="font-display text-2xl font-bold text-white mb-4 group-hover:text-brand-yellow transition-colors duration-300">
                      {value.title}
                    </h3>
                    <p className="text-foreground-muted leading-relaxed">
                      {value.description}
                    </p>
                  </div>

                  {/* Bottom line */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-1 bg-brand-yellow"
                    initial={{ width: 0 }}
                    whileInView={{ width: '30%' }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
