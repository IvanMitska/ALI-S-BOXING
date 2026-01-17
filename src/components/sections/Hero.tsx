'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/Button';
import { getBookingWhatsAppUrl } from '@/lib/whatsapp';

export function Hero() {
  const t = useTranslations('home.hero');

  return (
    <section className="relative min-h-screen bg-[#0a0a0a] overflow-hidden">
      {/* Background image - contains everything */}
      <div className="absolute inset-0">
        <motion.img
          src="/images/hero-bg.webp"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        />
        {/* Dark gradient overlay for text readability on left side */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-20 min-h-screen flex flex-col justify-center px-6 lg:px-16 xl:px-24 pt-20">
        <div className="max-w-3xl">
          {/* Location tag */}
          <motion.p
            className="text-[#555] text-sm uppercase tracking-[0.3em] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Phuket, Thailand
          </motion.p>

          {/* Main headline */}
          <motion.h1
            className="font-display text-[clamp(3.5rem,12vw,9rem)] font-bold uppercase leading-[0.85] tracking-tight mb-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-white block">MUAY THAI.</span>
            <span className="text-white block">FROM PHUKET.</span>
            <span className="text-[#f5c518] block">WITH PASSION.</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-[#777] text-base sm:text-lg max-w-md mb-10 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {t('subtitle')}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Button
              href={getBookingWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="lg"
              rightIcon={<ArrowRight className="w-5 h-5" />}
            >
              {t('cta')}
            </Button>
          </motion.div>
        </div>

        {/* Stats box */}
        <motion.div
          className="absolute bottom-8 right-8 lg:right-16 bg-[#0a0a0a]/90 border border-[#222] p-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="flex gap-6 text-center">
            <div>
              <div className="font-display text-2xl font-bold text-white">1000+</div>
              <div className="text-[10px] uppercase tracking-wider text-[#555]">Students</div>
            </div>
            <div>
              <div className="font-display text-2xl font-bold text-white">15+</div>
              <div className="text-[10px] uppercase tracking-wider text-[#555]">Years</div>
            </div>
            <div>
              <div className="font-display text-2xl font-bold text-white">50+</div>
              <div className="text-[10px] uppercase tracking-wider text-[#555]">Countries</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
