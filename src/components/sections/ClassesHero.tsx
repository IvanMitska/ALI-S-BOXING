'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';

interface ClassesHeroProps {
  subtitle?: string;
}

export function ClassesHero({ subtitle }: ClassesHeroProps) {
  return (
    <section className="relative min-h-[80vh] lg:min-h-[90vh] flex items-center overflow-hidden bg-background pt-20 border-0">
      {/* Background text watermark */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <span className="font-display text-[150px] md:text-[250px] lg:text-[350px] font-bold text-white/[0.02] whitespace-nowrap">
          TRAIN
        </span>
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col items-center justify-center">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="inline-block text-white text-lg md:text-xl lg:text-2xl font-bold uppercase tracking-[0.3em]">
              Our Classes
            </span>
          </motion.div>

          {/* Split text with illustration */}
          <div className="relative flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-0">
            {/* BOX - Left part */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-20"
            >
              <span className="font-display text-[80px] sm:text-[120px] md:text-[160px] lg:text-[200px] xl:text-[240px] font-bold uppercase text-white leading-none tracking-tight">
                BOX
              </span>
            </motion.div>

            {/* Illustration - Center */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px] lg:-mx-8 xl:-mx-12"
            >
              <Image
                src="/images/illustrations/boxing-art.png"
                alt="Boxing Art"
                fill
                sizes="(max-width: 640px) 200px, (max-width: 768px) 280px, (max-width: 1024px) 350px, 450px"
                className="object-contain"
                priority
              />
            </motion.div>

            {/* ING - Right part */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-20 lg:-ml-16 xl:-ml-24"
            >
              <span className="font-display text-[80px] sm:text-[120px] md:text-[160px] lg:text-[200px] xl:text-[240px] font-bold uppercase text-white leading-none tracking-tight">
                ING
              </span>
            </motion.div>
          </div>

          {/* Yellow accent line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-24 h-1 bg-brand-yellow mt-8"
          />

          {/* Subtitle */}
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-foreground-muted text-lg md:text-xl lg:text-2xl text-center max-w-2xl mt-8"
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </Container>
    </section>
  );
}
