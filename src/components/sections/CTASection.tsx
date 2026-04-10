'use client';

import { ArrowRight, ShoppingCart } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Link } from '@/i18n/navigation';

export function CTASection() {
  const tCta = useTranslations('home.cta');
  const t = useTranslations();

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-background">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background to-background-secondary" />

      {/* Background watermark */}
      <div className="absolute inset-0 flex items-center justify-end overflow-hidden pointer-events-none">
        <span className="font-display text-[200px] md:text-[300px] lg:text-[400px] font-bold text-white/[0.02] whitespace-nowrap -mr-20">
          ALI
        </span>
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Ali Illustration - Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[450px] sm:h-[550px] lg:h-[700px] xl:h-[750px] order-2 lg:order-1"
          >
            <Image
              src="/images/illustrations/ali-knockout.png"
              alt="Muhammad Ali vs Sonny Liston (1965)"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain object-center lg:object-left"
              quality={90}
            />
            <p className="absolute bottom-0 left-0 right-0 text-center lg:text-left text-foreground-muted text-xs sm:text-sm uppercase tracking-[0.2em]">
              Muhammad Ali vs Sonny Liston (1965)
            </p>
          </motion.div>

          {/* Text content - Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block text-brand-yellow text-sm font-semibold uppercase tracking-[0.2em] mb-6">
              {t('cta.limitedSpots')}
            </span>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold uppercase text-white leading-[0.95] mb-6">
              {tCta('title')}
            </h2>

            <p className="text-foreground-muted text-base lg:text-lg mb-10 max-w-lg">
              {tCta('subtitle')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/checkout"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-yellow text-black font-semibold uppercase tracking-wider text-sm hover:bg-brand-yellow-dark transition-colors rounded-full"
              >
                <ShoppingCart className="w-5 h-5" />
                {t('buttons.buyOnline')}
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white font-semibold uppercase tracking-wider text-sm hover:border-white transition-colors rounded-full"
              >
                {t('buttons.contactUs')}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
