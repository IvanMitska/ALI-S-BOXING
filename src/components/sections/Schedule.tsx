'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { cn } from '@/lib/utils';

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat'] as const;

type Day = (typeof days)[number];

interface ClassSession {
  time: string;
  name: string;
  highlight?: 'women' | 'kids';
}

const scheduleData: Record<Day, ClassSession[]> = {
  mon: [
    { time: '9:30 - 10:30', name: 'Boxing Strength Training' },
    { time: '10:30 - 11:45', name: 'Boxing' },
    { time: '15:00 - 16:00', name: 'Pro Fighter\'s Class' },
    { time: '19:00 - 20:30', name: 'Boxing' },
  ],
  tue: [
    { time: '9:30 - 10:30', name: 'Women\'s Boxing', highlight: 'women' },
    { time: '10:30 - 11:45', name: 'Boxing Drills & Sparring' },
    { time: '15:00 - 16:00', name: 'Pro Fighter\'s Class' },
    { time: '19:00 - 20:30', name: 'Boxing Drills & Sparring' },
  ],
  wed: [
    { time: '9:30 - 10:30', name: 'Boxing Strength Training' },
    { time: '10:30 - 11:45', name: 'Boxing' },
    { time: '15:00 - 16:00', name: 'Pro Fighter\'s Class' },
    { time: '19:00 - 20:30', name: 'Boxing' },
  ],
  thu: [
    { time: '9:30 - 10:30', name: 'Women\'s Boxing', highlight: 'women' },
    { time: '10:30 - 11:45', name: 'Boxing Drills & Sparring' },
    { time: '15:00 - 16:00', name: 'Pro Fighter\'s Class' },
    { time: '19:00 - 20:30', name: 'Boxing Drills & Sparring' },
  ],
  fri: [
    { time: '9:30 - 10:30', name: 'Boxing Strength Training' },
    { time: '10:30 - 11:45', name: 'Boxing' },
    { time: '15:00 - 16:00', name: 'Pro Fighter\'s Class' },
    { time: '19:00 - 20:30', name: 'Boxing' },
  ],
  sat: [
    { time: '10:30 - 11:45', name: 'Boxing Drills & Sparring' },
    { time: '12:00 - 13:00', name: 'Sparring' },
    { time: '19:00 - 20:30', name: 'Boxing Drills & Sparring' },
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const rowVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: [0, 0, 0.2, 1] as const },
  },
  exit: {
    opacity: 0,
    x: 20,
    transition: { duration: 0.2 },
  },
};

const mobileCardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.3, ease: [0, 0, 0.2, 1] as const },
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.95,
    transition: { duration: 0.2 },
  },
};

export function Schedule() {
  const t = useTranslations('classes.schedule');
  const [selectedDay, setSelectedDay] = useState<Day>('mon');

  return (
    <section className="py-16 lg:py-24 bg-background-secondary">
      <Container>
        <AnimatedSection className="text-center mb-12">
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4 text-white uppercase">{t('title')}</h2>
          <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </AnimatedSection>

        {/* Day selector */}
        <AnimatedSection delay={0.2}>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {days.map((day, index) => (
              <motion.button
                key={day}
                onClick={() => setSelectedDay(day)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                  'relative px-5 py-2.5 font-medium transition-all duration-300 uppercase tracking-wide text-sm overflow-hidden',
                  selectedDay === day
                    ? 'text-black'
                    : 'text-foreground-muted hover:text-white'
                )}
              >
                {/* Background for selected */}
                <motion.span
                  className="absolute inset-0 bg-brand-yellow"
                  initial={false}
                  animate={{
                    scale: selectedDay === day ? 1 : 0,
                    opacity: selectedDay === day ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                />
                <span className="relative z-10">{t(`days.${day}`)}</span>
              </motion.button>
            ))}
          </div>
        </AnimatedSection>

        {/* Desktop Table */}
        <div className="hidden md:block">
          <div className="overflow-hidden border border-border rounded-lg">
            {/* Header */}
            <div className="grid grid-cols-[200px_1fr] bg-[#1a1a1a] border-b border-border">
              <div className="py-4 px-6 font-semibold text-brand-yellow uppercase tracking-wider text-sm">
                {t('headers.time')}
              </div>
              <div className="py-4 px-6 font-semibold text-brand-yellow uppercase tracking-wider text-sm">
                {t('headers.class')}
              </div>
            </div>

            {/* Body */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedDay}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {scheduleData[selectedDay].map((session, index) => (
                  <motion.div
                    key={`${selectedDay}-${index}`}
                    variants={rowVariants}
                    className="group grid grid-cols-[200px_1fr] border-b border-border last:border-b-0 hover:bg-brand-yellow/5 transition-colors duration-300"
                  >
                    <div className="py-5 px-6 relative overflow-hidden">
                      <motion.span
                        className="absolute left-0 top-0 bottom-0 w-1 bg-brand-yellow"
                        initial={{ scaleY: 0 }}
                        whileHover={{ scaleY: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                      <span className="font-medium text-white group-hover:text-brand-yellow transition-colors duration-300">
                        {session.time}
                      </span>
                    </div>
                    <div className="py-5 px-6 flex items-center">
                      <motion.span
                        className={cn(
                          'relative',
                          session.highlight === 'kids' && 'text-cyan-400',
                          session.highlight === 'women' && 'text-pink-400',
                          !session.highlight && 'text-white'
                        )}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {session.name}
                        {session.highlight && (
                          <motion.span
                            className={cn(
                              'ml-3 px-2 py-0.5 text-xs rounded-full',
                              session.highlight === 'women' && 'bg-pink-400/20 text-pink-400',
                              session.highlight === 'kids' && 'bg-cyan-400/20 text-cyan-400'
                            )}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                          >
                            {session.highlight === 'women' ? 'Women Only' : 'Kids'}
                          </motion.span>
                        )}
                      </motion.span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedDay}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="space-y-3"
            >
              {scheduleData[selectedDay].map((session, index) => (
                <motion.div
                  key={`${selectedDay}-${index}`}
                  variants={mobileCardVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative bg-gradient-to-r from-[#1a1a1a] to-[#141414] rounded-lg p-4 border border-border overflow-hidden hover:border-brand-yellow/30 transition-colors duration-300"
                >
                  {/* Accent line */}
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 w-1 bg-brand-yellow"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  />

                  <div className="flex justify-between items-start gap-4 pl-3">
                    <div className="flex-1">
                      <span className={cn(
                        'font-semibold block',
                        session.highlight === 'kids' && 'text-cyan-400',
                        session.highlight === 'women' && 'text-pink-400',
                        !session.highlight && 'text-white'
                      )}>
                        {session.name}
                      </span>
                      {session.highlight && (
                        <span className={cn(
                          'inline-block mt-1 px-2 py-0.5 text-xs rounded-full',
                          session.highlight === 'women' && 'bg-pink-400/20 text-pink-400',
                          session.highlight === 'kids' && 'bg-cyan-400/20 text-cyan-400'
                        )}>
                          {session.highlight === 'women' ? 'Women Only' : 'Kids'}
                        </span>
                      )}
                    </div>
                    <span className="text-brand-yellow font-medium text-sm whitespace-nowrap">
                      {session.time}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
