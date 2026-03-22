'use client';

import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { Container } from '@/components/ui/Container';

export function AboutPreview() {
  const t = useTranslations('home.about');

  return (
    <section className="py-24 lg:py-32 relative bg-background">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/mission.jpg"
                alt="Ali's Boxing Gym"
                fill
                className="object-cover"
                quality={75}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>
          </div>

          {/* Content side */}
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

            <Link
              href="/our-story"
              className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white font-semibold uppercase tracking-wider text-sm hover:border-white transition-colors rounded-full group"
            >
              {t('cta')}
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
