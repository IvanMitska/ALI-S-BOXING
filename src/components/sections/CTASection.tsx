'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { getBookingWhatsAppUrl } from '@/lib/whatsapp';

export function CTASection() {
  const t = useTranslations('home.cta');

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background image - grayscale */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed grayscale"
          style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>


      <Container className="relative z-10">
        <AnimatedSection>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <div>
              <motion.span
                className="inline-block text-brand-yellow text-sm font-semibold uppercase tracking-[0.2em] mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                Limited Spots Available
              </motion.span>

              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-white leading-[0.95] mb-6">
                {t('title')}
              </h2>

              <p className="text-foreground-muted text-base lg:text-lg mb-10 max-w-lg">
                {t('subtitle')}
              </p>

              <Button
                href={getBookingWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-5 h-5" />}
              >
                {t('button')}
              </Button>
            </div>

            {/* Stats/features */}
            <div className="grid grid-cols-2 gap-px bg-border">
              {[
                { value: '24/7', label: 'Training Access' },
                { value: '5+', label: 'Expert Coaches' },
                { value: '100%', label: 'Dedication' },
                { value: '1:1', label: 'Personal Attention' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="bg-background p-8 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="font-display text-3xl lg:text-4xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-foreground-muted text-xs uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
