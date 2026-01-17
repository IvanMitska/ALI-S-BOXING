'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ArrowRight, Star, Zap, Crown } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { getBookingWhatsAppUrl } from '@/lib/whatsapp';
import { cn } from '@/lib/utils';

interface PricingItem {
  name: string;
  price: string;
  period?: string;
  bonus?: string;
  popular?: boolean;
}

const groupClasses: PricingItem[] = [
  { name: 'Drop In', price: '450', period: 'THB' },
  { name: '10 Sessions', price: '3,500', period: 'THB', popular: true },
  { name: '1 Month', price: '10,000', period: 'THB', bonus: 'Free T-shirt' },
  { name: '3 Months', price: '27,000', period: 'THB', bonus: '3 Free T-shirts' },
];

const openGym: PricingItem[] = [
  { name: 'For a Day', price: '200', period: 'THB' },
  { name: '1 Month', price: '2,000', period: 'THB', popular: true },
];

const privateClasses: PricingItem[] = [
  { name: 'Boxing', price: '1,500', period: 'THB / Session' },
  { name: 'Kickboxing', price: '1,000', period: 'THB / Session', popular: true },
  { name: 'Olympic Weight Lifting', price: '2,000', period: 'THB / Session' },
  { name: 'Weight Loss/Muscle Gain', price: '1,500', period: 'THB / Session' },
  { name: 'Kids Class', price: '650', period: 'THB / Session' },
];

function PricingCard({
  item,
  index,
}: {
  item: PricingItem;
  index: number;
}) {
  return (
    <motion.div
      className={cn(
        'relative group',
        item.popular && 'z-10'
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div
        className={cn(
          'relative h-full p-6 border transition-all duration-300',
          'bg-background-card hover:bg-background-card/80',
          item.popular
            ? 'border-brand-yellow shadow-lg shadow-brand-yellow/20'
            : 'border-border hover:border-brand-yellow/50'
        )}
      >
        {/* Popular badge */}
        {item.popular && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-brand-yellow text-black text-xs font-bold uppercase tracking-wider">
              <Star className="w-3 h-3" />
              Popular
            </span>
          </div>
        )}

        {/* Content */}
        <div className="flex flex-col h-full">
          <h4 className="text-white font-semibold text-lg mb-4">{item.name}</h4>

          <div className="mb-4">
            <span className="text-3xl font-bold text-brand-yellow">{item.price}</span>
            <span className="text-foreground-muted ml-2 text-sm">{item.period}</span>
          </div>

          {item.bonus && (
            <div className="mb-4 inline-flex items-center gap-2 text-sm text-green-400">
              <Zap className="w-4 h-4" />
              {item.bonus}
            </div>
          )}

          <div className="mt-auto pt-4">
            <a
              href={getBookingWhatsAppUrl(item.name)}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'w-full inline-flex items-center justify-center gap-2 px-4 py-3 font-semibold text-sm uppercase tracking-wider transition-all duration-300',
                item.popular
                  ? 'bg-brand-yellow text-black hover:bg-white'
                  : 'bg-transparent border border-white text-white hover:bg-white hover:text-black'
              )}
            >
              Book Now
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function PricingSection({
  title,
  subtitle,
  items,
  icon: Icon,
  columns = 4,
}: {
  title: string;
  subtitle?: string;
  items: PricingItem[];
  icon: React.ElementType;
  columns?: number;
}) {
  return (
    <div className="mb-20 last:mb-0">
      {/* Section Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center gap-3 mb-4">
          <Icon className="w-6 h-6 text-brand-yellow" />
          <h3 className="font-display text-2xl lg:text-3xl font-bold text-white uppercase tracking-wider">
            {title}
          </h3>
          <Icon className="w-6 h-6 text-brand-yellow" />
        </div>
        {subtitle && (
          <p className="text-foreground-muted">{subtitle}</p>
        )}
      </div>

      {/* Cards Grid */}
      <div className={cn(
        'grid gap-4',
        columns === 4 && 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
        columns === 2 && 'grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto',
        columns === 5 && 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5'
      )}>
        {items.map((item, index) => (
          <PricingCard key={item.name} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}

export function PricingTable() {
  const t = useTranslations('classes.pricing');

  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-yellow rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-yellow rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        {/* Main Header */}
        <AnimatedSection className="text-center mb-16">
          <motion.span
            className="inline-block px-4 py-2 mb-6 text-xs font-semibold uppercase tracking-widest text-brand-yellow border border-brand-yellow/30"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Pricing Plans
          </motion.span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white uppercase mb-6">
            {t('title')}
          </h2>
          <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </AnimatedSection>

        {/* Group Classes */}
        <AnimatedSection delay={0.2}>
          <PricingSection
            title="Group Classes"
            subtitle="Train together, grow together"
            items={groupClasses}
            icon={Zap}
            columns={4}
          />
        </AnimatedSection>

        {/* Open Gym */}
        <AnimatedSection delay={0.3}>
          <PricingSection
            title="Open Gym"
            subtitle="Train on your own schedule"
            items={openGym}
            icon={Star}
            columns={2}
          />
        </AnimatedSection>

        {/* Private Classes */}
        <AnimatedSection delay={0.4}>
          <PricingSection
            title="Private Classes"
            subtitle="One-on-one personalized training"
            items={privateClasses}
            icon={Crown}
            columns={5}
          />
        </AnimatedSection>
      </Container>
    </section>
  );
}
