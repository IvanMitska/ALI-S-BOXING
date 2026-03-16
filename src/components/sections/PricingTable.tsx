'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ShoppingCart } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { Link } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import { Package, groupPackages, gymPackages, privatePackages } from '@/lib/packages';

function PricingCard({ item, index, t, tPackages }: { item: Package; index: number; t: (key: string) => string; tPackages: (key: string) => string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="h-full group"
    >
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className={cn(
          'h-full flex flex-col relative overflow-hidden',
          'bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d]',
          'border border-white/10',
          'transition-all duration-500',
          'hover:border-brand-yellow/50 hover:shadow-[0_0_40px_rgba(212,175,55,0.15)]'
        )}
      >
        {/* Popular badge */}
        {item.popular && (
          <div className="absolute top-0 right-0">
            <div className="bg-brand-yellow text-black text-[10px] font-bold uppercase tracking-wider px-3 py-1">
              {t('pricing.popular')}
            </div>
          </div>
        )}

        {/* Animated corner accent */}
        <div className="absolute top-0 left-0 w-16 h-16 overflow-hidden">
          <motion.div
            className="absolute -top-8 -left-8 w-16 h-16 bg-brand-yellow/20 rotate-45"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: index * 0.1 + 0.3, duration: 0.4 }}
            viewport={{ once: true }}
          />
        </div>

        {/* Header */}
        <div className="relative p-6 pb-4">
          <motion.h4
            className="font-display text-lg font-bold text-white/70 uppercase tracking-wider mb-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
            viewport={{ once: true }}
          >
            {tPackages(`names.${item.nameKey}`)}
          </motion.h4>

          <div className="flex items-baseline gap-2">
            <motion.span
              className="text-5xl font-bold text-brand-yellow"
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.4, type: 'spring' }}
              viewport={{ once: true }}
            >
              {item.priceFormatted}
            </motion.span>
            <span className="text-foreground-muted text-sm">/ {item.unit}</span>
          </div>

          {/* Decorative line */}
          <motion.div
            className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ delay: index * 0.1 + 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          />
        </div>

        {/* Body */}
        <div className="flex-1 p-6 pt-4">
          {item.featureKeys && (
            <ul className="space-y-3">
              {item.featureKeys.map((featureKey, i) => (
                <motion.li
                  key={i}
                  className="flex items-center gap-3 text-sm text-foreground-muted"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.4 + i * 0.1, duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  <motion.span
                    className="w-1.5 h-1.5 bg-brand-yellow rounded-full flex-shrink-0"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.5 + i * 0.1, duration: 0.2 }}
                    viewport={{ once: true }}
                  />
                  {tPackages(`features.${featureKey}`)}
                </motion.li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer - Buy Button */}
        <div className="p-6 pt-0">
          <Link
            href={`/checkout?package=${item.id}`}
            className="group/btn relative flex items-center justify-center gap-2 w-full py-3.5 text-center font-semibold text-sm uppercase tracking-wider transition-all duration-300 overflow-hidden bg-brand-yellow text-black hover:bg-brand-yellow-dark rounded-full"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>{t('buttons.buyNow')}</span>
          </Link>
        </div>

        {/* Hover glow effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-yellow/50 to-transparent" />
          <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-brand-yellow/30 to-transparent" />
        </div>
      </motion.div>
    </motion.div>
  );
}

function PricingSection({
  title,
  items,
  t,
  tPackages,
}: {
  title: string;
  items: Package[];
  t: (key: string) => string;
  tPackages: (key: string) => string;
}) {
  return (
    <div className="mb-24 last:mb-0">
      <motion.h3
        className="font-display text-3xl lg:text-4xl font-bold text-white uppercase text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {title}
      </motion.h3>

      <div className={cn(
        'grid gap-6',
        items.length <= 2 && 'grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto',
        items.length === 4 && 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
        items.length === 5 && 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5',
      )}>
        {items.map((item, index) => (
          <PricingCard key={item.id} item={item} index={index} t={t} tPackages={tPackages} />
        ))}
      </div>
    </div>
  );
}

export function PricingTable() {
  const tPricing = useTranslations('classes.pricing');
  const t = useTranslations();
  const tPackages = useTranslations('packages');

  return (
    <section className="py-24 lg:py-32 bg-background">
      <Container>
        {/* Header */}
        <AnimatedSection className="text-center mb-20">
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white uppercase mb-4">
            {tPricing('title')}
          </h2>
          <div className="w-32 h-1 bg-brand-yellow mx-auto mb-6" />
          <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
            {tPricing('subtitle')}
          </p>
        </AnimatedSection>

        {/* Pricing Sections */}
        <PricingSection title={t('pricing.groupClasses')} items={groupPackages} t={t} tPackages={tPackages} />
        <PricingSection title={t('pricing.openGym')} items={gymPackages} t={t} tPackages={tPackages} />
        <PricingSection title={t('pricing.privateClasses')} items={privatePackages} t={t} tPackages={tPackages} />

        {/* CTA Banner */}
        <motion.div
          className="mt-20 relative overflow-hidden bg-brand-yellow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Content */}
          <div className="relative z-10 p-8 lg:p-12 text-center">
            <motion.span
              className="text-black/60 text-sm font-bold uppercase tracking-[0.2em] mb-3 block"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              {t('pricing.needHelp')}
            </motion.span>
            <motion.h3
              className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-black leading-tight mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              {t('pricing.notSure')}
            </motion.h3>
            <motion.p
              className="text-black/70 text-base lg:text-lg max-w-md mx-auto mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              {t('pricing.teamHelp')}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Link
                href="/contact"
                className="px-8 py-4 bg-black text-white font-semibold uppercase tracking-wider text-sm hover:bg-white hover:text-black transition-all duration-300 rounded-full"
              >
                {t('buttons.contactUs')}
              </Link>
              <Link
                href="/checkout"
                className="px-8 py-4 border-2 border-black text-black font-semibold uppercase tracking-wider text-sm hover:bg-black hover:text-white transition-all duration-300 rounded-full"
              >
                {t('pricing.viewAllPackages')}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
