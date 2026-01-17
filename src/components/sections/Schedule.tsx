'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { cn } from '@/lib/utils';

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'] as const;

type Day = (typeof days)[number];

interface ClassSession {
  time: string;
  name: string;
  instructor: string;
}

const scheduleData: Record<Day, ClassSession[]> = {
  mon: [
    { time: '07:00', name: 'Muay Thai', instructor: 'Coach Ali' },
    { time: '09:00', name: 'Fitness Boxing', instructor: 'Coach Som' },
    { time: '16:00', name: 'Kids Muay Thai', instructor: 'Coach Noi' },
    { time: '18:00', name: 'Muay Thai', instructor: 'Coach Ali' },
  ],
  tue: [
    { time: '07:00', name: 'Western Boxing', instructor: 'Coach Mike' },
    { time: '10:00', name: 'Private Sessions', instructor: 'All Coaches' },
    { time: '16:00', name: 'Kids Muay Thai', instructor: 'Coach Noi' },
    { time: '18:00', name: 'Fighter Training', instructor: 'Coach Ali' },
  ],
  wed: [
    { time: '07:00', name: 'Muay Thai', instructor: 'Coach Ali' },
    { time: '09:00', name: 'Fitness Boxing', instructor: 'Coach Som' },
    { time: '16:00', name: 'Kids Muay Thai', instructor: 'Coach Noi' },
    { time: '18:00', name: 'Muay Thai', instructor: 'Coach Ali' },
  ],
  thu: [
    { time: '07:00', name: 'Western Boxing', instructor: 'Coach Mike' },
    { time: '10:00', name: 'Private Sessions', instructor: 'All Coaches' },
    { time: '16:00', name: 'Kids Muay Thai', instructor: 'Coach Noi' },
    { time: '18:00', name: 'Fighter Training', instructor: 'Coach Ali' },
  ],
  fri: [
    { time: '07:00', name: 'Muay Thai', instructor: 'Coach Ali' },
    { time: '09:00', name: 'Fitness Boxing', instructor: 'Coach Som' },
    { time: '16:00', name: 'Kids Muay Thai', instructor: 'Coach Noi' },
    { time: '18:00', name: 'Muay Thai', instructor: 'Coach Ali' },
  ],
  sat: [
    { time: '08:00', name: 'Muay Thai', instructor: 'Coach Ali' },
    { time: '10:00', name: 'Fitness Boxing', instructor: 'Coach Som' },
    { time: '14:00', name: 'Open Sparring', instructor: 'All Coaches' },
  ],
  sun: [
    { time: '09:00', name: 'Muay Thai', instructor: 'Coach Ali' },
    { time: '11:00', name: 'Recovery & Stretching', instructor: 'Coach Som' },
  ],
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

        <AnimatedSection delay={0.2}>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={cn(
                  'px-4 py-2 rounded-lg font-medium transition-all duration-300',
                  selectedDay === day
                    ? 'bg-brand-yellow text-black'
                    : 'bg-background-card border border-border text-foreground-muted hover:border-brand-yellow hover:text-white'
                )}
              >
                {t(`days.${day}`)}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-4 px-6 text-left font-semibold text-white">{t('headers.time')}</th>
                  <th className="py-4 px-6 text-left font-semibold text-white">{t('headers.class')}</th>
                  <th className="py-4 px-6 text-left font-semibold text-white">{t('headers.instructor')}</th>
                </tr>
              </thead>
              <tbody>
                {scheduleData[selectedDay].map((session, index) => (
                  <tr
                    key={index}
                    className="border-b border-border hover:bg-background-card transition-colors"
                  >
                    <td className="py-4 px-6 font-medium text-white">{session.time}</td>
                    <td className="py-4 px-6 text-white">{session.name}</td>
                    <td className="py-4 px-6 text-foreground-muted">{session.instructor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="md:hidden space-y-4">
            {scheduleData[selectedDay].map((session, index) => (
              <div
                key={index}
                className="bg-background-card rounded-lg p-4 border border-border"
              >
                <div className="flex justify-between items-start mb-2">
                  <span className="font-semibold text-white">{session.name}</span>
                  <span className="text-brand-yellow font-medium">{session.time}</span>
                </div>
                <p className="text-sm text-foreground-muted">{session.instructor}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
