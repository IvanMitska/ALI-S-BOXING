'use client';

import { ArrowRight, ShoppingCart } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Link } from '@/i18n/navigation';

export function CTASection() {
  const tCta = useTranslations('home.cta');
  const t = useTranslations();

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/futer.jpg"
          alt=""
          fill
          className="object-cover"
          quality={75}
        />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div>
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
          </div>

          {/* Stats/features */}
          <div className="grid grid-cols-3 gap-px bg-border">
            {[
              { value: '5+', labelKey: 'cta.expertCoaches' },
              { value: '100%', labelKey: 'cta.dedication' },
              { value: '1:1', labelKey: 'cta.personalAttention' },
            ].map((stat) => (
              <div
                key={stat.labelKey}
                className="bg-background p-8 text-center"
              >
                <div className="font-display text-3xl lg:text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-foreground-muted text-xs uppercase tracking-wider">
                  {t(stat.labelKey)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
