'use client';

import { useState } from 'react';
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
    { time: '9:30 - 10:30', name: 'Boxing Conditioning' },
    { time: '10:30 - 11:45', name: 'Boxing' },
    { time: '17:00 - 18:00', name: 'Kids Boxing', highlight: 'kids' },
    { time: '19:00 - 20:30', name: 'Boxing' },
  ],
  tue: [
    { time: '9:30 - 10:30', name: 'Boxing Conditioning & Women\'s Boxing', highlight: 'women' },
    { time: '10:30 - 11:45', name: 'Boxing Drills Sparring' },
    { time: '19:00 - 20:30', name: 'Boxing' },
  ],
  wed: [
    { time: '9:30 - 10:30', name: 'Boxing Conditioning' },
    { time: '10:30 - 11:45', name: 'Boxing' },
    { time: '17:00 - 18:00', name: 'Kids Boxing', highlight: 'kids' },
    { time: '19:00 - 20:30', name: 'Boxing' },
  ],
  thu: [
    { time: '9:30 - 10:30', name: 'Boxing Conditioning & Women\'s Boxing', highlight: 'women' },
    { time: '10:30 - 11:45', name: 'Boxing Drills Sparring' },
    { time: '19:00 - 20:30', name: 'Boxing' },
  ],
  fri: [
    { time: '9:30 - 10:30', name: 'Boxing Conditioning' },
    { time: '10:30 - 11:45', name: 'Boxing' },
    { time: '17:00 - 18:00', name: 'Kids Boxing', highlight: 'kids' },
    { time: '19:00 - 20:30', name: 'Boxing' },
  ],
  sat: [
    { time: '10:30 - 11:45', name: 'Boxing' },
    { time: '12:00 - 13:00', name: 'Sparring' },
    { time: '19:00 - 20:30', name: 'Boxing' },
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
                </tr>
              </thead>
              <tbody>
                {scheduleData[selectedDay].map((session, index) => (
                  <tr
                    key={index}
                    className="border-b border-border hover:bg-background-card transition-colors"
                  >
                    <td className="py-4 px-6 font-medium text-white">{session.time}</td>
                    <td className="py-4 px-6">
                      <span className={cn(
                        session.highlight === 'kids' && 'text-cyan-400',
                        session.highlight === 'women' && 'text-pink-400',
                        !session.highlight && 'text-white'
                      )}>
                        {session.name}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="md:hidden space-y-3">
            {scheduleData[selectedDay].map((session, index) => (
              <div
                key={index}
                className="bg-background-card rounded-lg p-4 border border-border"
              >
                <div className="flex justify-between items-start gap-4">
                  <span className={cn(
                    'font-semibold',
                    session.highlight === 'kids' && 'text-cyan-400',
                    session.highlight === 'women' && 'text-pink-400',
                    !session.highlight && 'text-white'
                  )}>
                    {session.name}
                  </span>
                  <span className="text-brand-yellow font-medium text-sm whitespace-nowrap">{session.time}</span>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </Container>
    </section>
  );
}
