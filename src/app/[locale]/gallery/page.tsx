'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { PageHeader } from '@/components/sections/PageHeader';
import { Container } from '@/components/ui/Container';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { Users, Trophy, Heart, Globe, Dumbbell, Calendar } from 'lucide-react';

export default function CommunityPage() {
  const t = useTranslations();
  const tGallery = useTranslations('gallery');
  const tCommunity = useTranslations('community');

  const features = [
    {
      icon: Users,
      titleKey: 'support.title',
      contentKey: 'support.content',
      color: '#5b21b6',
    },
    {
      icon: Trophy,
      titleKey: 'events.title',
      contentKey: 'events.content',
      color: '#D50202',
    },
    {
      icon: Heart,
      titleKey: 'atmosphere.title',
      contentKey: 'atmosphere.content',
      color: '#FBDF00',
    },
  ];

  const stats = [
    { value: '4', labelKey: 'fightNights', icon: Trophy },
    { value: '50+', labelKey: 'countries', icon: Globe },
    { value: '100s', labelKey: 'athletes', icon: Dumbbell },
    { value: '7', labelKey: 'yearsStrong', icon: Calendar },
  ];

  return (
    <>
      <PageHeader title={tGallery('pageTitle')} subtitle={tGallery('pageSubtitle')} />

      {/* Big Statement Section */}
      <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
        {/* Large background text */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
          <span className="font-display text-[200px] md:text-[350px] lg:text-[450px] font-bold text-white/[0.02] whitespace-nowrap">
            FAMILY
          </span>
        </div>

        <Container className="relative z-10">
          <AnimatedSection className="max-w-5xl">
            <motion.p
              className="text-2xl md:text-3xl lg:text-4xl text-white font-light leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-brand-yellow font-bold">Ali's Boxing Gym</span> brings together people from all over the world.{' '}
              <span className="text-foreground-muted">Some come to compete. Some come to get fit. Some just want to try boxing for the first time.</span>{' '}
              What connects everyone is the mindset:{' '}
              <span className="text-brand-yellow">work hard, respect each other, and keep improving.</span>
            </motion.p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Stats - Animated Cards */}
      <section className="pb-24 lg:pb-32 bg-background">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 -mt-12 relative z-20">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.labelKey}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group"
              >
                <div className="bg-background-secondary border border-border p-6 lg:p-8 text-center hover:border-brand-yellow/50 transition-all duration-300 relative overflow-hidden">
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <stat.icon className="w-6 h-6 text-brand-yellow mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <div className="font-display text-4xl lg:text-5xl font-bold text-white mb-1 relative">
                    {stat.value}
                  </div>
                  <div className="text-foreground-muted uppercase tracking-wider text-xs font-medium">
                    {tCommunity(stat.labelKey)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-24 lg:py-32 bg-background-secondary relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-yellow/20 to-transparent" />

        <Container>
          <AnimatedSection className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
              <div>
                <motion.div
                  className="inline-flex items-center gap-3 mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 bg-brand-yellow flex items-center justify-center">
                    <Heart className="w-6 h-6 text-black" />
                  </div>
                  <span className="text-brand-yellow text-sm font-bold uppercase tracking-[0.2em]">
                    {tCommunity('whatMakesUsDifferent')}
                  </span>
                </motion.div>
                <h2 className="font-display text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[0.9]">
                  {tCommunity('moreThanGym')}
                </h2>
              </div>
              <div className="lg:text-right">
                <p className="text-foreground-muted text-xl leading-relaxed max-w-md lg:ml-auto">
                  {tCommunity('seriousTrainingDescription')}
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Feature Cards - Large Format */}
          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.titleKey}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-0 bg-background border border-border hover:border-brand-yellow/30 transition-all duration-500 overflow-hidden">
                  {/* Number & Icon */}
                  <div className="lg:col-span-2 p-8 lg:p-10 flex lg:flex-col items-center lg:items-start gap-6 lg:gap-4 border-b lg:border-b-0 lg:border-r border-border">
                    <span
                      className="font-display text-6xl lg:text-7xl font-bold"
                      style={{ color: feature.color }}
                    >
                      0{index + 1}
                    </span>
                    <div
                      className="w-14 h-14 flex items-center justify-center"
                      style={{ backgroundColor: `${feature.color}15` }}
                    >
                      <feature.icon className="w-7 h-7" style={{ color: feature.color }} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-7 p-8 lg:p-10 flex flex-col justify-center">
                    <h3 className="font-display text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-brand-yellow transition-colors">
                      {tGallery(feature.titleKey)}
                    </h3>
                    <p className="text-foreground-muted text-lg leading-relaxed">
                      {tGallery(feature.contentKey)}
                    </p>
                  </div>

                  {/* Visual/Image placeholder */}
                  <div className="lg:col-span-3 relative min-h-[200px] lg:min-h-0">
                    <div
                      className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity"
                      style={{
                        background: `linear-gradient(135deg, ${feature.color}40 0%, transparent 100%)`
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <feature.icon
                        className="w-20 h-20 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500"
                        style={{ color: feature.color }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Full-width Image/Quote Section */}
      <section className="relative h-[60vh] lg:h-[80vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: 'url(/images/parallax-community.jpg)' }}
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

          {/* Masonry-style Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { span: 'col-span-2 row-span-2', aspect: 'aspect-square' },
              { span: 'col-span-1', aspect: 'aspect-square' },
              { span: 'col-span-1', aspect: 'aspect-square' },
              { span: 'col-span-1 row-span-2', aspect: 'aspect-[3/4]' },
              { span: 'col-span-1', aspect: 'aspect-square' },
              { span: 'col-span-2', aspect: 'aspect-video' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className={`${item.span} relative group overflow-hidden`}
              >
                <div className={`${item.aspect} bg-background border border-border flex items-center justify-center group-hover:border-brand-yellow/50 transition-all duration-300 relative overflow-hidden`}>
                  {/* Placeholder with hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="text-foreground-muted text-sm uppercase tracking-wider relative z-10">
                    Photo {i + 1}
                  </span>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-t-brand-yellow/20 border-l-[40px] border-l-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <p className="text-foreground-muted italic">
              {tCommunity('photosComingSoon')}
            </p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Join CTA */}
      <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -top-1/2 -left-1/2 w-full h-full bg-brand-yellow/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-brand-yellow/5 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
        </div>

        <Container className="relative z-10">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="w-20 h-20 bg-brand-yellow/10 rounded-full flex items-center justify-center mx-auto mb-8"
            >
              <Users className="w-10 h-10 text-brand-yellow" />
            </motion.div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {tCommunity('becomePartOf')}{' '}
              <span className="text-brand-yellow">{tCommunity('ourFamily')}</span>
            </h2>
            <p className="text-foreground-muted text-xl mb-10 max-w-xl mx-auto">
              {tCommunity('whetherBeginner')}
            </p>

            <motion.a
              href="https://wa.me/66992097926"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-brand-yellow text-black font-bold uppercase tracking-wider text-sm hover:bg-white transition-colors group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>{t('buttons.joinCommunity')}</span>
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
}
