'use client';

import { useTranslations } from 'next-intl';
import { MessageCircle } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Link } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import { Package, dropInPackages, weeklyPackages, monthlyPackages, specialPackages } from '@/lib/packages';
import { getPackagePurchaseWhatsAppUrl } from '@/lib/whatsapp';

function PricingCard({ item, t, tPackages }: { item: Package; t: (key: string) => string; tPackages: (key: string) => string }) {
  const whatsappUrl = getPackagePurchaseWhatsAppUrl({
    pkg: item,
    packageName: tPackages(`names.${item.nameKey}`),
    period: tPackages(`periods.${item.periodKey}`),
    template: t('whatsapp.purchaseMessage'),
  });

  return (
    <div className="h-full group">
      <div
        className={cn(
          'h-full flex flex-col relative overflow-hidden',
          'bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d]',
          'border border-white/10',
          'transition-all duration-300',
          'hover:border-brand-yellow/50 hover:shadow-[0_0_40px_rgba(212,175,55,0.15)] hover:-translate-y-2'
        )}
      >
        {/* Popular badge */}
        {item.popular && (
          <div className="absolute -top-px -right-px">
            <div className="relative bg-gradient-to-r from-[#D4AF37] via-[#F4D03F] to-[#D4AF37] text-black text-[10px] font-bold uppercase tracking-wider px-4 py-1.5 shadow-[0_0_20px_rgba(212,175,55,0.5)]">
              <span className="relative z-10">★ {t('pricing.popular')}</span>
            </div>
          </div>
        )}

        {/* Corner accent */}
        <div className="absolute top-0 left-0 w-16 h-16 overflow-hidden">
          <div className="absolute -top-8 -left-8 w-16 h-16 bg-brand-yellow/20 rotate-45" />
        </div>

        {/* Header */}
        <div className="relative p-6 pb-4">
          <h4 className="font-display text-lg font-bold text-white/70 uppercase tracking-wider mb-4">
            {tPackages(`names.${item.nameKey}`)}
          </h4>

          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-bold text-brand-yellow">
              {item.priceFormatted}
            </span>
            <span className="text-foreground-muted text-sm">/ {item.unit}</span>
          </div>

          {/* Decorative line */}
          <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>

        {/* Body */}
        <div className="flex-1 p-6 pt-4">
          {item.featureKeys && (
            <ul className="space-y-3">
              {item.featureKeys.map((featureKey, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-sm text-foreground-muted"
                >
                  <span className="w-1.5 h-1.5 bg-brand-yellow rounded-full shrink-0" />
                  {tPackages(`features.${featureKey}`)}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer - WhatsApp CTA (online payments temporarily disabled) */}
        <div className="p-6 pt-0">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3.5 text-center font-semibold text-sm uppercase tracking-wider transition-all duration-300 bg-brand-yellow text-black hover:bg-brand-yellow-dark rounded-full"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{t('buttons.bookViaWhatsApp')}</span>
          </a>
        </div>

        {/* Hover glow effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-brand-yellow/50 to-transparent" />
          <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-brand-yellow/30 to-transparent" />
        </div>
      </div>
    </div>
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
      <h3 className="font-display text-3xl lg:text-4xl font-bold text-white uppercase text-center mb-12">
        {title}
      </h3>

      <div className={cn(
        'grid gap-6',
        items.length <= 2 && 'grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto',
        items.length === 3 && 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto',
        items.length === 4 && 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
        items.length === 5 && 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5',
        items.length === 6 && 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
      )}>
        {items.map((item) => (
          <PricingCard key={item.id} item={item} t={t} tPackages={tPackages} />
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
        <div className="text-center mb-20">
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white uppercase mb-4">
            {tPricing('title')}
          </h2>
          <div className="w-32 h-1 bg-brand-yellow mx-auto mb-6" />
          <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
            {tPricing('subtitle')}
          </p>
        </div>

        {/* Pricing Sections */}
        <PricingSection title={t('pricing.dropIn')} items={dropInPackages} t={t} tPackages={tPackages} />
        <PricingSection title={t('pricing.weekly')} items={weeklyPackages} t={t} tPackages={tPackages} />
        <PricingSection title={t('pricing.monthly')} items={monthlyPackages} t={t} tPackages={tPackages} />
        <PricingSection title={t('pricing.specialDeal')} items={specialPackages} t={t} tPackages={tPackages} />

        {/* CTA Banner */}
        <div className="mt-20 relative overflow-hidden bg-brand-yellow">
          <div className="relative z-10 p-8 lg:p-12 text-center">
            <span className="text-black/60 text-sm font-bold uppercase tracking-[0.2em] mb-3 block">
              {t('pricing.needHelp')}
            </span>
            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-black leading-tight mb-4">
              {t('pricing.notSure')}
            </h3>
            <p className="text-black/70 text-base lg:text-lg max-w-md mx-auto mb-8">
              {t('pricing.teamHelp')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
