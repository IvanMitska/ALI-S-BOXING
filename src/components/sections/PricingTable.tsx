'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ShoppingCart } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { Link } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import { Package, groupPackages, gymPackages, privatePackages } from '@/lib/packages';

function PricingCard({ item, index }: { item: Package; index: number }) {
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
              Popular
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
            {item.name}
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
          {item.features && (
            <ul className="space-y-3">
              {item.features.map((feature, i) => (
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
                  {feature}
                </motion.li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer - Buy Button */}
        <div className="p-6 pt-0">
          <Link
            href={`/checkout?package=${item.id}`}
            className="group/btn relative flex items-center justify-center gap-2 w-full py-3.5 text-center font-semibold text-sm uppercase tracking-wider transition-all duration-300 overflow-hidden bg-brand-yellow text-black hover:bg-brand-yellow-dark"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Buy Now</span>
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
}: {
  title: string;
  items: Package[];
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
          <PricingCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}

export function PricingTable() {
  const t = useTranslations('classes.pricing');

  return (
    <section className="py-24 lg:py-32 bg-background">
      <Container>
        {/* Header */}
        <AnimatedSection className="text-center mb-20">
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white uppercase mb-4">
            {t('title')}
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-brand-yellow via-brand-red to-blue-600 mx-auto mb-6" />
          <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </AnimatedSection>

        {/* Pricing Sections */}
        <PricingSection title="Group Classes" items={groupPackages} />
        <PricingSection title="Open Gym" items={gymPackages} />
        <PricingSection title="Private Classes" items={privatePackages} />

        {/* CTA Banner */}
        <motion.div
          className="mt-20 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Background with diagonal split */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow via-brand-yellow to-brand-yellow-dark" />
          {/* Darken yellow for better readability */}
          <div className="absolute inset-0 bg-black/20" style={{ clipPath: 'polygon(0 0, 50% 0, 60% 100%, 0 100%)' }} />

          {/* Photo on right side with diagonal clip */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(/images/page-header-bg.jpg)',
              clipPath: 'polygon(45% 0, 100% 0, 100% 100%, 55% 100%)'
            }}
          />
          <div
            className="absolute inset-0 bg-black/60"
            style={{
              clipPath: 'polygon(45% 0, 100% 0, 100% 100%, 55% 100%)'
            }}
          />

          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />

          {/* Content */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
            {/* Left side - on yellow */}
            <div className="flex flex-col justify-center">
              <motion.span
                className="text-black/60 text-sm font-bold uppercase tracking-[0.2em] mb-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                Need Help?
              </motion.span>
              <motion.h3
                className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold text-black leading-[0.95] mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                Not sure which package fits you?
              </motion.h3>
              <motion.p
                className="text-black/70 text-lg max-w-md"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                Our team will help you choose the perfect training program
              </motion.p>
            </div>

            {/* Right side - on dark */}
            <div className="flex flex-col items-start lg:items-end justify-center gap-4">
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                <Link
                  href="/contact"
                  className="group relative px-8 py-4 bg-white text-black font-semibold uppercase tracking-wider text-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
                >
                  <span className="relative z-10">Contact Us</span>
                  <div className="absolute inset-0 bg-brand-yellow translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </Link>
                <Link
                  href="/checkout"
                  className="px-8 py-4 border-2 border-white text-white font-semibold uppercase tracking-wider text-sm hover:bg-white hover:text-black transition-all duration-300"
                >
                  View All Packages
                </Link>
              </motion.div>

              {/* Quick stats */}
              <motion.div
                className="flex gap-8 mt-4 pt-4 border-t border-white/20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-center">
                  <div className="font-display text-2xl font-bold text-white">1000+</div>
                  <div className="text-white/60 text-xs uppercase tracking-wider">Students</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-2xl font-bold text-white">8+</div>
                  <div className="text-white/60 text-xs uppercase tracking-wider">Years</div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
