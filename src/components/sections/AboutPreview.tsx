'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { AnimatedSection } from '@/components/common/AnimatedSection';

export function AboutPreview() {
  const t = useTranslations('home.about');

  return (
    <section className="py-24 lg:py-32 relative bg-background">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <AnimatedSection direction="left">
            <div className="relative">
              {/* Main image */}
              <motion.div
                className="relative aspect-[4/5] overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6 }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: 'url(/images/mission.jpg)' }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </motion.div>

            </div>
          </AnimatedSection>

          {/* Content side */}
          <AnimatedSection direction="right">
            <div>
              <span className="inline-block text-brand-yellow text-sm font-semibold uppercase tracking-[0.2em] mb-6">
                {t('subtitle')}
              </span>

              <h2 className="font-display text-4xl lg:text-5xl xl:text-6xl font-bold uppercase text-white mb-6 leading-[0.95]">
                {t('title')}
              </h2>

              <p className="text-foreground-muted text-base lg:text-lg leading-relaxed mb-10">
                {t('description')}
              </p>

              <Link href="/our-story">
                <Button variant="outline" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  {t('cta')}
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
