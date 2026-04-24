'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { Link } from '@/i18n/navigation';

interface Program {
  id: string;
  image: string;
  hoverColor: string;
  videoUrl: string;
}

const programs: Program[] = [
  {
    id: 'westernBoxing',
    image: '/images/Boxing-section-_4_-_1_-_1_.webp',
    hoverColor: '#D4AF37',
    videoUrl: 'https://youtube.com/shorts/pHKTy-XRehM',
  },
  {
    id: 'strengthConditioning',
    image: '/images/s_c-_1_.webp',
    hoverColor: '#B8860B',
    videoUrl: 'https://youtube.com/shorts/ZXfglmZ5iYE',
  },
  {
    id: 'womensBoxing',
    image: '/images/womens-boxing-_1_.webp',
    hoverColor: '#FFD700',
    videoUrl: 'https://www.instagram.com/reel/DVnK8pTCcBq/',
  },
  {
    id: 'drillsSparring',
    image: '/images/drills-and-sparring-_1_.webp',
    hoverColor: '#DAA520',
    videoUrl: 'https://youtube.com/shorts/wTRnTRP3My8',
  },
];

interface ProgramsProps {
  showViewAllButton?: boolean;
}

export function Programs({ showViewAllButton = true }: ProgramsProps) {
  const t = useTranslations('classes.programs');
  const tHome = useTranslations('home.programs');

  return (
    <section className="py-24 lg:py-32 relative bg-background">
      <Container>
        {/* Section header */}
        <div className="mb-16">
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
        </div>

        {/* Programs grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {programs.map((program, index) => (
            <div key={program.id} className="flex flex-col">
              <a
                href={program.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-[4/3] lg:aspect-[16/11] overflow-hidden cursor-pointer"
              >
                {/* Background image */}
                <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-105">
                  <Image
                    src={program.image}
                    alt={t(`${program.id}.title`)}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority={index < 2}
                    quality={75}
                  />
                </div>

                {/* Color overlay on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-300"
                  style={{ backgroundColor: program.hoverColor }}
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/40" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 sm:p-8">
                  <h3 className="font-display text-2xl sm:text-3xl lg:text-5xl font-bold uppercase text-white leading-tight text-center transition-transform duration-300 group-hover:-translate-y-4">
                    {t(`${program.id}.title`)}
                  </h3>

                  <span className="mt-6 px-6 py-2.5 bg-white text-black text-sm font-semibold uppercase tracking-wider opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    {t('watchVideo')}
                  </span>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* View all link */}
        {showViewAllButton && (
          <div className="mt-12">
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
          </div>
        )}
      </Container>
    </section>
  );
}
