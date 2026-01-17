'use client';

import { useTranslations } from 'next-intl';
import { Check } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { getBookingWhatsAppUrl } from '@/lib/whatsapp';
import { cn } from '@/lib/utils';

const pricingPlans = ['dropIn', 'weekly', 'monthly'] as const;

export function PricingTable() {
  const t = useTranslations('classes.pricing');

  return (
    <section className="py-16 lg:py-24 bg-background">
      <Container>
        <AnimatedSection className="text-center mb-12">
          <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4 text-white uppercase">{t('title')}</h2>
          <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pricingPlans.map((plan, index) => {
            const isPopular = plan === 'weekly';
            const features = t.raw(`${plan}.features`) as string[];

            return (
              <AnimatedSection key={plan} delay={index * 0.1}>
                <Card
                  className={cn(
                    'h-full relative bg-background-card',
                    isPopular && 'border-brand-yellow border-2 shadow-lg shadow-brand-yellow/20'
                  )}
                  hover={false}
                >
                  {isPopular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge variant="brand" className="px-4 py-1">
                        Popular
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="text-center pb-0">
                    <CardTitle className="text-xl text-white">{t(`${plan}.title`)}</CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold text-brand-yellow">
                        {t(`${plan}.price`)}
                      </span>
                      <span className="text-foreground-muted ml-1">
                        {t(`${plan}.currency`)}
                      </span>
                      <p className="text-sm text-foreground-muted mt-1">
                        {t(`${plan}.period`)}
                      </p>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-6">
                    <ul className="space-y-3 mb-6">
                      {features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground-muted">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      href={getBookingWhatsAppUrl(t(`${plan}.title`))}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant={isPopular ? 'secondary' : 'outline'}
                      className="w-full"
                    >
                      {t('cta')}
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
