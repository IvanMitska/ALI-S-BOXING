'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { PageHeader } from '@/components/sections/PageHeader';
import { Container } from '@/components/ui/Container';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { AliPhotoSlider } from '@/components/common/AliPhotoSlider';
import { CTASection } from '@/components/sections/CTASection';
import { ImageLightbox } from '@/components/ui/ImageLightbox';
import { Users, Trophy, Heart, PlayCircle, ExternalLink } from 'lucide-react';

const lifeAtGymPhotos = [
  '/images/life-at-gym/life-1.webp',
  '/images/life-at-gym/life-2.webp',
  '/images/life-at-gym/life-3.webp',
  '/images/life-at-gym/life-4.webp',
  '/images/life-at-gym/life-5.webp',
  '/images/life-at-gym/life-6.webp',
  '/images/life-at-gym/life-7.webp',
  '/images/life-at-gym/life-8.webp',
];

const stats = [
  { value: '1000+', labelKey: 'students' },
  { value: '50+', labelKey: 'countries' },
  { value: '8+', labelKey: 'experience' },
  { value: '25+', labelKey: 'champions' },
];

const communityFeatures = [
  { icon: Users, titleKey: 'support.title', contentKey: 'support.content' },
  { icon: Trophy, titleKey: 'events.title', contentKey: 'events.content' },
  { icon: Heart, titleKey: 'atmosphere.title', contentKey: 'atmosphere.content' },
];

const FIGHT_NIGHTS_PLAYLIST_URL =
  'https://youtube.com/playlist?list=PLwdN-JFBCB5gFP6xndFt_y2clRyVVxXa5';

export default function OurStoryPage() {
  const t = useTranslations('ourStory');
  const tButtons = useTranslations('buttons');
  const tGallery = useTranslations('gallery');
  const tCommunity = useTranslations('community');

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLifeLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <PageHeader
        title={t('pageTitle')}
        subtitle={t('pageSubtitle')}
        backgroundImage="/images/parallax-community.jpg"
        grayscale
        objectPosition="center 30%"
      />

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
              <span className="text-foreground-muted uppercase tracking-wider text-sm">{t('established')}</span>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* About Ali Section */}
      <section className="py-24 lg:py-32 bg-background-secondary">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image Side */}
            <AnimatedSection direction="left">
              <AliPhotoSlider />
            </AnimatedSection>

            {/* Content Side */}
            <AnimatedSection direction="right">
              <span className="inline-block text-brand-yellow text-sm font-bold uppercase tracking-[0.2em] mb-4">
                {t('aboutAli.subtitle')}
              </span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-8 leading-[0.95]">
                {t('aboutAli.title')}
              </h2>
              <div className="space-y-6 text-foreground-muted text-lg leading-relaxed">
                <p>{t('aboutAli.content1')}</p>
                <p>{t('aboutAli.content2')}</p>
                <p>{t('aboutAli.content3')}</p>
                <p>{t('aboutAli.content4')}</p>
              </div>

              {/* Highlight quote */}
              <motion.blockquote
                className="mt-10 relative pl-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-brand-yellow" />
                <p className="text-white text-xl italic font-light">
                  {t('aboutAli.highlight')}
                </p>
              </motion.blockquote>
            </AnimatedSection>
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
                <Image
                  src="/images/mission.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                  loading="lazy"
                  quality={75}
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
                  {t('theBeginning')}
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
                    "{t('quote')}"
                  </p>
                </motion.blockquote>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* Growth Section - Full Width */}
      <section className="py-24 lg:py-32 bg-background-secondary">
        <Container>
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-brand-yellow text-sm font-bold uppercase tracking-[0.2em] mb-6">
              {t('newChapter')}
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
              className="mt-10 inline-flex items-center gap-5 p-5 bg-background border-l-4 border-brand-yellow"
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
              <div className="text-left">
                <div className="text-white font-bold text-lg">{t('location.city')}</div>
                <div className="text-foreground-muted text-sm">{t('location.description')}</div>
              </div>
            </motion.div>
          </AnimatedSection>
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
              {t('todayLabel')}
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
                  {t('values.subtitle')}
                </span>
                <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-[0.95]">
                  {t('values.title')}
                </h2>
              </div>
              <p className="text-foreground-muted max-w-md lg:text-right">
                {t('values.description')}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { titleKey: 'respect', descriptionKey: 'respectDescription' },
              { titleKey: 'focus', descriptionKey: 'focusDescription' },
              { titleKey: 'resilience', descriptionKey: 'resilienceDescription' },
            ].map((value, index) => (
              <motion.div
                key={value.titleKey}
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
                      {t(`values.${value.titleKey}`)}
                    </h3>
                    <p className="text-foreground-muted leading-relaxed">
                      {t(`values.${value.descriptionKey}`)}
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

      {/* Our Community - Big Statement Section */}
      <section className="py-32 lg:py-48 min-h-[80vh] lg:min-h-[90vh] flex items-center relative overflow-hidden">
        {/* Background illustration */}
        <Image
          src="/images/illustrations/girls-ill.png"
          alt="Katie Taylor vs Amanda Serrano 2022"
          fill
          sizes="100vw"
          className="object-cover object-center -z-10"
          quality={90}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/75 -z-10" />

        <Container className="relative z-10">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <motion.p
              className="font-display text-3xl md:text-4xl lg:text-5xl text-white leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-brand-yellow">Ali&apos;s Boxing Gym</span> brings together people from all over the world.{' '}
              <span className="text-white/80">Some come to compete. Some come to get fit. Some just want to try boxing for the first time.</span>{' '}
              What connects everyone is the mindset:{' '}
              <span className="text-brand-yellow">work hard, respect each other, and keep improving.</span>
            </motion.p>
          </AnimatedSection>
        </Container>

        {/* Fight caption pinned to bottom of the section */}
        <p className="absolute bottom-6 left-0 right-0 text-center text-foreground-muted text-xs sm:text-sm uppercase tracking-[0.2em] z-10">
          Katie Taylor vs Amanda Serrano (2022)
        </p>
      </section>

      {/* Fight Nights CTA */}
      <section className="py-20 lg:py-28 bg-background">
        <Container>
          <motion.a
            href={FIGHT_NIGHTS_PLAYLIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="group block max-w-3xl mx-auto bg-background-secondary border border-border hover:border-brand-yellow transition-colors duration-300 overflow-hidden"
            aria-label="Watch our 4 Fight Nights on YouTube"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-brand-yellow/0 via-brand-yellow/5 to-brand-yellow/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative flex flex-col sm:flex-row items-center gap-6 sm:gap-8 p-8 lg:p-10 text-center sm:text-left">
              {/* Icon */}
              <div className="w-20 h-20 lg:w-24 lg:h-24 flex-shrink-0 bg-brand-yellow/10 flex items-center justify-center group-hover:bg-brand-yellow/20 group-hover:scale-105 transition-all duration-300">
                <Trophy className="w-10 h-10 lg:w-12 lg:h-12 text-brand-yellow" />
              </div>

              {/* Text */}
              <div className="flex-1">
                <div className="flex items-baseline justify-center sm:justify-start gap-3 mb-2">
                  <span className="font-display text-5xl lg:text-6xl font-bold text-white leading-none">
                    4
                  </span>
                  <span className="font-display text-2xl lg:text-3xl font-bold text-white uppercase">
                    {tCommunity('fightNights')}
                  </span>
                </div>
                <p className="text-foreground-muted text-sm lg:text-base">
                  Watch every Fight Night on our YouTube playlist
                </p>
              </div>

              {/* CTA */}
              <div className="flex-shrink-0 flex items-center gap-2 px-5 py-3 bg-brand-yellow text-black font-semibold uppercase tracking-wider text-xs lg:text-sm rounded-full group-hover:bg-white transition-colors">
                <PlayCircle className="w-5 h-5" />
                <span>Watch on YouTube</span>
                <ExternalLink className="w-4 h-4" />
              </div>
            </div>
          </motion.a>
        </Container>
      </section>

      {/* Community Features Section */}
      <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 50px, white 50px, white 51px)'
          }} />
        </div>

        <Container className="relative z-10">
          <AnimatedSection className="mb-16 lg:mb-24">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
              <div>
                <motion.div
                  className="flex items-center gap-4 mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="h-px w-12 bg-brand-yellow" />
                  <span className="text-brand-yellow text-sm font-bold uppercase tracking-[0.2em]">
                    {tCommunity('whatMakesUsDifferent')}
                  </span>
                </motion.div>
                <h2 className="hero-headline text-5xl lg:text-6xl xl:text-7xl text-white">
                  {tCommunity('moreThanGym')}
                </h2>
              </div>
              <p className="text-foreground-muted text-lg lg:text-xl leading-relaxed max-w-md lg:text-right">
                {tCommunity('seriousTrainingDescription')}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {communityFeatures.map((feature, index) => (
              <motion.div
                key={feature.titleKey}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="relative bg-background-secondary h-full overflow-hidden border border-border group-hover:border-brand-yellow/30 transition-colors duration-300">
                  <div className="h-1 w-full bg-brand-yellow" />
                  <div className="p-8 lg:p-10">
                    <div className="w-16 h-16 mb-8 flex items-center justify-center bg-brand-yellow/10 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-8 h-8 text-brand-yellow" />
                    </div>
                    <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-brand-yellow transition-colors">
                      {tGallery(feature.titleKey)}
                    </h3>
                    <p className="text-foreground-muted leading-relaxed">
                      {tGallery(feature.contentKey)}
                    </p>
                  </div>
                  <div className="absolute bottom-0 right-0 w-20 h-20 bg-brand-yellow/[0.08] clip-corner group-hover:w-28 group-hover:h-28 transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Full-width Image/Quote Section */}
      <section className="relative h-[60vh] lg:h-[80vh] overflow-hidden">
        <Image
          src="/images/parallax-community.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
          loading="lazy"
          quality={75}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 flex items-center justify-center">
          <Container>
            <motion.div
              className="text-center max-w-4xl mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <motion.span
                className="inline-block text-brand-yellow text-sm font-bold uppercase tracking-[0.3em] mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                {tCommunity('ourPhilosophy')}
              </motion.span>
              <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.95] mb-6">
                {tCommunity('builtOn')}
              </h2>
              <p className="text-xl text-white/70">
                {tCommunity('youFeelIt')}
              </p>
            </motion.div>
          </Container>
        </div>
      </section>

      {/* Community Gallery Teaser */}
      <section className="py-24 lg:py-32 bg-background-secondary">
        <Container>
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block text-brand-yellow text-sm font-bold uppercase tracking-[0.2em] mb-4">
              {tCommunity('moments')}
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
              {tCommunity('lifeAtGym')}
            </h2>
            <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
              {tCommunity('trainingDescription')}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {lifeAtGymPhotos.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                onClick={() => openLifeLightbox(i)}
                className="group relative overflow-hidden cursor-pointer aspect-square"
              >
                <Image
                  src={src}
                  alt={`Life at Ali's Boxing Gym ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  quality={80}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-black/50 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Join CTA */}
      <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-yellow/[0.03] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-yellow/[0.03] rounded-full" />
        </div>

        <Container className="relative z-10">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 bg-brand-yellow/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <Users className="w-10 h-10 text-brand-yellow" />
            </div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {tCommunity('becomePartOf')}{' '}
              <span className="text-brand-yellow">{tCommunity('ourFamily')}</span>
            </h2>
            <p className="text-foreground-muted text-xl mb-10 max-w-xl mx-auto">
              {tCommunity('whetherBeginner')}
            </p>

            <a
              href="https://wa.me/66992097926"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-brand-yellow text-black font-bold uppercase tracking-wider text-sm hover:bg-white transition-colors rounded-full"
            >
              <span>{tButtons('joinCommunity')}</span>
              <span>→</span>
            </a>
          </AnimatedSection>
        </Container>
      </section>

      {/* Lightbox for Life at Gym photos */}
      <ImageLightbox
        images={lifeAtGymPhotos}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
}
