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
              {/* Main image - grayscale */}
              <motion.div
                className="relative aspect-[4/5] overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6 }}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-700"
                  style={{ backgroundImage: 'url(/images/about-preview.jpg)' }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </motion.div>

              {/* Floating stats card */}
              <motion.div
                className="absolute -bottom-6 -right-6 lg:right-auto lg:-left-6 p-6 bg-background border border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="font-display text-5xl font-bold text-brand-yellow mb-1">15+</div>
                <div className="text-foreground-muted text-sm uppercase tracking-wider">Years of Excellence</div>
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

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-6 mb-10 py-6 border-y border-border">
                <div>
                  <div className="font-display text-3xl lg:text-4xl font-bold text-white">1000+</div>
                  <div className="text-foreground-muted text-xs uppercase tracking-wider mt-1">Students Trained</div>
                </div>
                <div>
                  <div className="font-display text-3xl lg:text-4xl font-bold text-white">50+</div>
                  <div className="text-foreground-muted text-xs uppercase tracking-wider mt-1">Countries</div>
                </div>
                <div>
                  <div className="font-display text-3xl lg:text-4xl font-bold text-white">5</div>
                  <div className="text-foreground-muted text-xs uppercase tracking-wider mt-1">Expert Trainers</div>
                </div>
              </div>

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
