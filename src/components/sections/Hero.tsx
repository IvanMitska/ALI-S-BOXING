'use client';

import { ArrowRight, ShoppingCart } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { heroVideo } from '@/lib/constants';

export function Hero() {
  const t = useTranslations();
  const tHero = useTranslations('home.hero');

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Background video - Desktop (horizontal) */}
      <div className="absolute inset-0 hidden md:block will-change-transform">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={heroVideo.desktopPoster}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo.desktop} type="video/mp4" />
        </video>
        {/* Dark gradient overlay for text readability on left side */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
      </div>

      {/* Background video - Mobile (vertical) */}
      <div className="absolute inset-0 md:hidden will-change-transform">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={heroVideo.mobilePoster}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo.mobile} type="video/mp4" />
        </video>
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-20 min-h-screen flex flex-col justify-center px-6 lg:px-16 xl:px-24 pt-20">
        <div className="max-w-3xl animate-fade-in">
          {/* Location tag */}
          <p className="text-white/70 text-sm uppercase tracking-[0.3em] mb-6">
            Phuket, Thailand
          </p>

          {/* Main headline */}
          <h1 className="text-[clamp(3.5rem,12vw,9rem)] font-bold uppercase leading-[0.9] tracking-tight mb-8" style={{ fontFamily: 'Oswald, system-ui, sans-serif' }}>
            <span className="text-white block">TRAIN LIKE</span>
            <span className="text-white block">A LEGEND,</span>
            <span className="text-brand-yellow block">FIGHT LIKE ALI.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-white/80 text-base sm:text-lg max-w-md mb-10 leading-relaxed">
            {tHero('subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/checkout"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-yellow text-black font-semibold uppercase tracking-wider text-sm hover:bg-brand-yellow-dark transition-colors rounded-full"
            >
              <ShoppingCart className="w-5 h-5" />
              {t('buttons.buyMembership')}
            </Link>
            <Link
              href="/classes"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white font-semibold uppercase tracking-wider text-sm hover:border-white transition-colors rounded-full"
            >
              {t('buttons.viewClasses')}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
