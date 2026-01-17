'use client';

import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { cn } from '@/lib/utils';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: 'gym' | 'training' | 'events';
}

const galleryImages: GalleryImage[] = [
  { id: 1, src: '/images/gallery/gym-1.jpg', alt: 'Gym interior', category: 'gym' },
  { id: 2, src: '/images/gallery/training-1.jpg', alt: 'Training session', category: 'training' },
  { id: 3, src: '/images/gallery/events-1.jpg', alt: 'Fight night', category: 'events' },
  { id: 4, src: '/images/gallery/gym-2.jpg', alt: 'Training equipment', category: 'gym' },
  { id: 5, src: '/images/gallery/training-2.jpg', alt: 'Pad work', category: 'training' },
  { id: 6, src: '/images/gallery/events-2.jpg', alt: 'Championship', category: 'events' },
  { id: 7, src: '/images/gallery/gym-3.jpg', alt: 'Ring', category: 'gym' },
  { id: 8, src: '/images/gallery/training-3.jpg', alt: 'Sparring', category: 'training' },
  { id: 9, src: '/images/gallery/events-3.jpg', alt: 'Team photo', category: 'events' },
];

type Filter = 'all' | 'gym' | 'training' | 'events';

export function GalleryGrid() {
  const t = useTranslations('gallery.filters');
  const [filter, setFilter] = useState<Filter>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filters: Filter[] = ['all', 'gym', 'training', 'events'];

  const filteredImages = filter === 'all'
    ? galleryImages
    : galleryImages.filter((img) => img.category === filter);

  const currentIndex = selectedImage
    ? filteredImages.findIndex((img) => img.id === selectedImage.id)
    : -1;

  const goToPrevious = useCallback(() => {
    if (currentIndex > 0) {
      setSelectedImage(filteredImages[currentIndex - 1]);
    }
  }, [currentIndex, filteredImages]);

  const goToNext = useCallback(() => {
    if (currentIndex < filteredImages.length - 1) {
      setSelectedImage(filteredImages[currentIndex + 1]);
    }
  }, [currentIndex, filteredImages]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === 'Escape') setSelectedImage(null);
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    },
    [selectedImage, goToPrevious, goToNext]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedImage]);

  return (
    <section className="py-16 lg:py-24 bg-background">
      <Container>
        {/* Filters - minimal style */}
        <AnimatedSection className="flex flex-wrap gap-4 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                'px-4 py-2 text-sm font-semibold uppercase tracking-wider border transition-all duration-300',
                filter === f
                  ? 'bg-white text-background border-white'
                  : 'bg-transparent text-foreground-muted border-border hover:text-white hover:border-white'
              )}
            >
              {t(f)}
            </button>
          ))}
        </AnimatedSection>

        {/* Gallery grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <button
                  onClick={() => setSelectedImage(image)}
                  className="relative aspect-[4/3] w-full overflow-hidden group"
                >
                  {/* Image - grayscale by default */}
                  <div
                    className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${image.src})` }}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-brand-yellow/40 transition-colors duration-300" />

                  {/* Arrow indicator */}
                  <div className="absolute top-4 right-4 w-10 h-10 border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:bg-white">
                    <svg
                      className="w-5 h-5 text-white group-hover:text-background"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/98 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 w-12 h-12 border border-white flex items-center justify-center text-white hover:bg-white hover:text-background transition-all"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            {currentIndex > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
                className="absolute left-6 w-12 h-12 border border-white/50 flex items-center justify-center text-white/50 hover:border-white hover:text-white transition-all"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            )}

            {currentIndex < filteredImages.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="absolute right-6 w-12 h-12 border border-white/50 flex items-center justify-center text-white/50 hover:border-white hover:text-white transition-all"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            )}

            <motion.div
              key={selectedImage.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-5xl max-h-[80vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[80vh] object-contain"
              />
            </motion.div>

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-display text-sm uppercase tracking-wider text-foreground-muted">
              {currentIndex + 1} / {filteredImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
