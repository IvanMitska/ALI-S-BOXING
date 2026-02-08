'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { Link } from '@/i18n/navigation';
import { getBookingWhatsAppUrl } from '@/lib/whatsapp';

interface Program {
  id: string;
  image: string;
  hoverColor: string;
}

const programs: Program[] = [
  { id: 'boxing', image: '/images/boxing.jpg', hoverColor: '#5b21b6' }, // Dark Purple/Violet
  { id: 'strengthTraining', image: '/images/strength.webp', hoverColor: '#a3a323' }, // Olive/Yellow-green
  { id: 'drillsSparring', image: '/images/sparring.png', hoverColor: '#dc2626' }, // Red
  { id: 'womensBoxing', image: '/images/womens.jpg', hoverColor: '#d946ef' }, // Pink/Magenta
  { id: 'proFighter', image: '/images/fighter.jpg', hoverColor: '#92400e' }, // Warm Brown
  { id: 'private', image: '/images/private.jpg', hoverColor: '#1e3a8a' }, // Dark Blue
];

interface ProgramsProps {
  showAll?: boolean;
  showViewAllButton?: boolean;
}

export function Programs({ showAll = false, showViewAllButton = true }: ProgramsProps) {
  const t = useTranslations('classes.programs');
  const tHome = useTranslations('home.programs');

  const displayPrograms = showAll ? programs : programs.slice(0, 4);

  return (
    <section className="py-24 lg:py-32 relative bg-background">
      <Container>
        {/* Section header - minimal style */}
        <AnimatedSection className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold uppercase text-white leading-[0.9]">
                {tHome('title')}
              </h2>
            </div>
            <p className="text-foreground-muted text-base max-w-md">
              {tHome('subtitle')}
            </p>
          </div>
        </AnimatedSection>

        {/* Programs grid - fenriz style */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {displayPrograms.map((program, index) => (
            <AnimatedSection key={program.id} delay={index * 0.1}>
              <motion.a
                href={getBookingWhatsAppUrl(t(`${program.id}.title`))}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-[4/3] overflow-hidden cursor-pointer"
                whileHover="hover"
              >
                {/* Background image - stays grayscale, zooms out on hover */}
                <motion.div
                  className="absolute inset-0 bg-cover bg-center grayscale"
                  style={{ backgroundImage: `url(${program.image})` }}
                  initial={{ scale: 1.1 }}
                  variants={{
                    hover: { scale: 1 }
                  }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                />

                {/* Color overlay on hover */}
                <motion.div
                  className="absolute inset-0"
                  style={{ backgroundColor: program.hoverColor }}
                  initial={{ opacity: 0 }}
                  variants={{
                    hover: { opacity: 0.6 }
                  }}
                  transition={{ duration: 0.25 }}
                />

                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-black/40" />

                {/* Content - centered */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 sm:p-8">
                  {/* Title - moves up on hover */}
                  <motion.h3
                    className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold uppercase text-white leading-tight text-center"
                    initial={{ y: 0 }}
                    variants={{
                      hover: { y: -20 }
                    }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                  >
                    {t(`${program.id}.title`)}
                  </motion.h3>

                  {/* Button - appears on hover */}
                  <motion.span
                    className="mt-6 px-6 py-2.5 bg-white text-black text-sm font-semibold uppercase tracking-wider"
                    initial={{ opacity: 0, y: 20 }}
                    variants={{
                      hover: { opacity: 1, y: 0 }
                    }}
                    transition={{ duration: 0.2, delay: 0.05, ease: 'easeOut' }}
                  >
                    {tHome('learnMore')}
                  </motion.span>
                </div>
              </motion.a>
            </AnimatedSection>
          ))}
        </div>

        {/* View all link */}
        {showViewAllButton && !showAll && (
          <AnimatedSection className="mt-12" delay={0.4}>
            <Link
              href="/classes"
              className="inline-flex items-center gap-3 text-white hover:text-brand-yellow transition-colors group"
            >
              <span className="font-display text-lg uppercase tracking-wider">{tHome('viewAll')}</span>
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </AnimatedSection>
        )}
      </Container>
    </section>
  );
}
