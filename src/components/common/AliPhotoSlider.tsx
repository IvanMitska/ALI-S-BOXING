'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const aliPhotos = [
  '/images/ali/ali-1.jpg',
  '/images/ali/ali-2.jpg',
  '/images/ali/ali-3.jpg',
  '/images/ali/ali-4.jpg',
  '/images/ali/ali-5.jpg',
  '/images/ali/ali-6.jpg',
];

const AUTOPLAY_MS = 5000;

export function AliPhotoSlider() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % aliPhotos.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [isPaused]);

  const goPrev = () =>
    setIndex((i) => (i - 1 + aliPhotos.length) % aliPhotos.length);
  const goNext = () => setIndex((i) => (i + 1) % aliPhotos.length);

  return (
    <div className="relative">
      <div
        className="relative aspect-[4/5] overflow-hidden bg-background border border-border"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={aliPhotos[index]}
              alt={`Ali — photo ${index + 1}`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
              priority={index === 0}
              quality={85}
            />
          </motion.div>
        </AnimatePresence>

        {/* Prev / Next arrows */}
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous photo"
          className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center bg-black/50 hover:bg-brand-yellow hover:text-black text-white transition-colors backdrop-blur-sm rounded-full"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={goNext}
          aria-label="Next photo"
          className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center bg-black/50 hover:bg-brand-yellow hover:text-black text-white transition-colors backdrop-blur-sm rounded-full"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
          {aliPhotos.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to photo ${i + 1}`}
              className={`h-1.5 transition-all duration-300 ${
                i === index
                  ? 'w-8 bg-brand-yellow'
                  : 'w-4 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Decorative element matches the previous placeholder */}
      <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-yellow/10 -z-10" />
    </div>
  );
}
