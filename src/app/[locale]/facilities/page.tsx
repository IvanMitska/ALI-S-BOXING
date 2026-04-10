'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { CTASection } from '@/components/sections/CTASection';
import { ImageLightbox } from '@/components/ui/ImageLightbox';
import { Dumbbell, Users, Clock, Shield, Wifi, Wind } from 'lucide-react';

const facilities = [
  { icon: Dumbbell, titleKey: 'equipment.title', descKey: 'equipment.description' },
  { icon: Users, titleKey: 'ringArea.title', descKey: 'ringArea.description' },
  { icon: Clock, titleKey: 'hours.title', descKey: 'hours.description' },
  { icon: Shield, titleKey: 'safety.title', descKey: 'safety.description' },
  { icon: Wifi, titleKey: 'amenities.title', descKey: 'amenities.description' },
  { icon: Wind, titleKey: 'climate.title', descKey: 'climate.description' },
];

const galleryImages = [
  { src: '/images/facilities/ring.jpeg', span: 'col-span-2 row-span-2', aspect: 'aspect-square' },
  { src: '/images/facilities/gym-1.jpeg', span: 'col-span-1', aspect: 'aspect-square' },
  { src: '/images/facilities/equipment-1.jpeg', span: 'col-span-1', aspect: 'aspect-square' },
  { src: '/images/facilities/open-gym-1.jpeg', span: 'col-span-1', aspect: 'aspect-square' },
  { src: '/images/facilities/gym-2.jpeg', span: 'col-span-1', aspect: 'aspect-square' },
  { src: '/images/facilities/equipment-2.jpeg', span: 'col-span-2', aspect: 'aspect-video' },
  { src: '/images/facilities/ring-2.jpeg', span: 'col-span-1', aspect: 'aspect-square' },
  { src: '/images/facilities/gym-3.jpeg', span: 'col-span-1', aspect: 'aspect-square' },
  { src: '/images/facilities/open-gym-2.jpeg', span: 'col-span-2', aspect: 'aspect-video' },
  { src: '/images/facilities/equipment-4.jpeg', span: 'col-span-1', aspect: 'aspect-square' },
  { src: '/images/facilities/gym-4.jpeg', span: 'col-span-1', aspect: 'aspect-square' },
  { src: '/images/facilities/equipment-5.jpeg', span: 'col-span-1', aspect: 'aspect-square' },
  { src: '/images/facilities/equipment-6.jpeg', span: 'col-span-1', aspect: 'aspect-square' },
];

export default function FacilitiesPage() {
  const t = useTranslations('facilities');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const allImages = galleryImages.map((img) => img.src);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      {/* Custom Header with Ali's Gym Banner */}
      <section className="relative bg-black pt-16 lg:pt-20 border-0 min-h-[60vh] lg:min-h-[70vh] flex items-center">
        <div className="w-full">
          <div className="relative w-full aspect-[3/1] md:aspect-[4/1] lg:aspect-[5/1]">
            <Image
              src="/images/facilities/alisgym_no_bg.png"
              alt="Ali's Gym"
              fill
              sizes="100vw"
              style={{ transform: 'translateX(-2%)' }}
              className="object-contain object-center"
              priority
              quality={90}
            />
          </div>
          <div className="text-center mt-4 lg:mt-6">
            <p className="text-foreground-muted text-xl md:text-2xl">
              {t('pageSubtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="pt-8 pb-16 lg:pt-12 lg:pb-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
          <span className="font-display text-[200px] md:text-[350px] lg:text-[450px] font-bold text-white/[0.02] whitespace-nowrap">
            GYM
          </span>
        </div>

        <Container className="relative z-10">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <motion.p
              className="text-xl md:text-2xl lg:text-3xl text-foreground-muted leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {t('intro')}
            </motion.p>
          </AnimatedSection>
        </Container>
      </section>

      {/* Facilities Grid */}
      <section className="py-24 lg:py-32 bg-background-secondary">
        <Container>
          <AnimatedSection className="mb-16">
            <div className="text-center">
              <span className="inline-block text-brand-yellow text-sm font-bold uppercase tracking-[0.2em] mb-4">
                {t('whatWeOffer')}
              </span>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-[0.95]">
                {t('facilitiesTitle')}
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.titleKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative bg-background p-8 lg:p-10 h-full border border-border hover:border-brand-yellow/30 transition-all duration-300">
                  <div className="w-14 h-14 mb-6 flex items-center justify-center bg-brand-yellow/10 group-hover:scale-110 transition-transform duration-300">
                    <facility.icon className="w-7 h-7 text-brand-yellow" />
                  </div>
                  <h3 className="font-display text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-brand-yellow transition-colors">
                    {t(facility.titleKey)}
                  </h3>
                  <p className="text-foreground-muted leading-relaxed">
                    {t(facility.descKey)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Gallery Section */}
      <section className="py-24 lg:py-32 bg-background">
        <Container>
          <AnimatedSection className="mb-16 text-center">
            <span className="inline-block text-brand-yellow text-sm font-bold uppercase tracking-[0.2em] mb-4">
              {t('gallery.label')}
            </span>
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white">
              {t('gallery.title')}
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className={`${image.span} group relative overflow-hidden cursor-pointer`}
                onClick={() => openLightbox(i)}
              >
                <div className={`${image.aspect} relative w-full h-full`}>
                  <Image
                    src={image.src}
                    alt="Ali's Boxing Gym Facility"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    quality={75}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  {/* Zoom icon on hover */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-12 h-12 bg-black/50 rounded-full flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Video tour */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 lg:mt-20"
          >
            <div className="relative w-full aspect-video overflow-hidden border border-border bg-background-secondary">
              <iframe
                src="https://www.youtube.com/embed/66Dd6RUnRag"
                title="Ali's Boxing Gym tour"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </motion.div>
        </Container>
      </section>

      <CTASection />

      {/* Lightbox */}
      <ImageLightbox
        images={allImages}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
}
