'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { Link } from '@/i18n/navigation';

export function CTASection() {
  const t = useTranslations('home.cta');

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background image - grayscale */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed grayscale"
          style={{ backgroundImage: 'url(/images/futer.jpg)' }}
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

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/checkout"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-yellow text-black font-semibold uppercase tracking-wider text-sm hover:bg-brand-yellow-dark transition-colors"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Buy Online
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white font-semibold uppercase tracking-wider text-sm hover:border-white transition-colors"
                >
                  Contact Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Stats/features */}
            <div className="grid grid-cols-3 gap-px bg-border">
              {[
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
