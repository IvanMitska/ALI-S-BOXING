'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { AnimatedSection } from '@/components/common/AnimatedSection';

interface BenefitItem {
  number: string;
  titleKey: string;
  descriptionKey: string;
}

const benefits: BenefitItem[] = [
  {
    number: '01',
    titleKey: 'championship.title',
    descriptionKey: 'championship.description',
  },
  {
    number: '02',
    titleKey: 'community.title',
    descriptionKey: 'community.description',
  },
  {
    number: '03',
    titleKey: 'facilities.title',
    descriptionKey: 'facilities.description',
  },
  {
    number: '04',
    titleKey: 'location.title',
    descriptionKey: 'location.description',
  },
];

export function Benefits() {
  const t = useTranslations('home.benefits');

  return (
    <section className="py-24 lg:py-32 relative bg-background-secondary">
      <Container>
        {/* Section header - left aligned, minimal */}
        <AnimatedSection className="mb-16 lg:mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase text-white leading-[0.9]">
              {t('title')}
            </h2>
            <p className="text-foreground-muted text-base lg:text-lg max-w-md lg:ml-auto">
              {t('subtitle')}
            </p>
          </div>
        </AnimatedSection>

        {/* Benefits list - horizontal layout with dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {benefits.map((benefit, index) => (
            <AnimatedSection key={benefit.titleKey} delay={index * 0.1}>
              <motion.div
                className="group relative h-full p-8 border-l border-border first:border-l-0 md:first:border-l md:[&:nth-child(2)]:border-l-0 lg:[&:nth-child(2)]:border-l"
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.02)' }}
                transition={{ duration: 0.3 }}
              >
                {/* Number */}
                <span className="font-display text-5xl lg:text-6xl font-bold text-white/10 group-hover:text-brand-yellow/30 transition-colors duration-300">
                  {benefit.number}
                </span>

                {/* Content */}
                <div className="mt-6">
                  <h3 className="font-display text-xl lg:text-2xl font-bold uppercase text-white mb-4 group-hover:text-brand-yellow transition-colors duration-300">
                    {t(benefit.titleKey)}
                  </h3>
                  <p className="text-foreground-muted text-sm leading-relaxed">
                    {t(benefit.descriptionKey)}
                  </p>
                </div>

                {/* Hover indicator line */}
                <motion.div
                  className="absolute bottom-0 left-8 right-8 h-px bg-brand-yellow"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ originX: 0 }}
                />
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </Container>
    </section>
  );
}
