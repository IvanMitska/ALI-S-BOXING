'use client';

import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { getBookingWhatsAppUrl } from '@/lib/whatsapp';

interface PricingItem {
  name: string;
  price: string;
  period?: string;
}

const groupClasses: PricingItem[] = [
  { name: 'Drop In', price: '450', period: 'THB' },
  { name: '10 Sessions', price: '3,500', period: 'THB' },
  { name: '1 Month', price: '10,000', period: 'THB (Free T-shirt)' },
  { name: '3 Months', price: '27,000', period: 'THB (3 Free T-shirts)' },
];

const openGym: PricingItem[] = [
  { name: 'For a Day', price: '200', period: 'THB' },
  { name: '1 Month', price: '2,000', period: 'THB' },
];

const privateClasses: PricingItem[] = [
  { name: 'Boxing', price: '1,500', period: 'THB / Session' },
  { name: 'Kickboxing', price: '1,000', period: 'THB / Session' },
  { name: 'Olympic Weight Lifting', price: '2,000', period: 'THB / Session' },
  { name: 'Weight Loss/Muscle Gain', price: '1,500', period: 'THB / Session' },
  { name: 'Kids Class', price: '650', period: 'THB / Session' },
];

function PricingSection({
  title,
  items
}: {
  title: string;
  items: PricingItem[];
}) {
  return (
    <div className="mb-16 last:mb-0">
      <h3 className="font-display text-2xl lg:text-3xl font-bold text-brand-yellow uppercase mb-8 text-center">
        {title}
      </h3>

      <div className="overflow-hidden rounded-lg border border-border">
        {/* Table Header */}
        <div className="grid grid-cols-3 bg-brand-yellow/90">
          <div className="py-4 px-4 sm:px-6 font-semibold text-black text-sm sm:text-base">
            Course
          </div>
          <div className="py-4 px-4 sm:px-6 font-semibold text-black text-center text-sm sm:text-base">
            Price
          </div>
          <div className="py-4 px-4 sm:px-6 font-semibold text-black text-center text-sm sm:text-base">
            Buy
          </div>
        </div>

        {/* Table Body */}
        {items.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-3 border-t border-border hover:bg-background-card transition-colors"
          >
            <div className="py-4 px-4 sm:px-6 text-white font-medium text-sm sm:text-base flex items-center">
              {item.name}
            </div>
            <div className="py-4 px-4 sm:px-6 text-white text-center text-sm sm:text-base flex items-center justify-center">
              <span className="font-bold">{item.price}</span>
              {item.period && <span className="text-foreground-muted ml-1 text-xs sm:text-sm">{item.period}</span>}
            </div>
            <div className="py-4 px-4 sm:px-6 flex items-center justify-center">
              <a
                href={getBookingWhatsAppUrl(item.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 bg-white text-black text-xs sm:text-sm font-semibold rounded hover:bg-brand-yellow transition-colors"
              >
                <span className="hidden sm:inline">Book Now</span>
                <span className="sm:hidden">Book</span>
                <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function PricingTable() {
  const t = useTranslations('classes.pricing');

  return (
    <section className="py-16 lg:py-24 bg-background">
      <Container>
        <AnimatedSection className="text-center mb-12">
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4 text-white uppercase">
            {t('title')}
          </h2>
          <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <PricingSection title="Group Classes" items={groupClasses} />
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <PricingSection title="Open Gym" items={openGym} />
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <PricingSection title="Private Classes" items={privateClasses} />
        </AnimatedSection>
      </Container>
    </section>
  );
}
