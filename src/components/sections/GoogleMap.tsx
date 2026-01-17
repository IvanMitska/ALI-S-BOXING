'use client';

import { useTranslations } from 'next-intl';
import { siteConfig } from '@/lib/constants';
import { AnimatedSection } from '@/components/common/AnimatedSection';

export function GoogleMap() {
  const t = useTranslations('contact.map');
  const { lat, lng } = siteConfig.location;

  return (
    <AnimatedSection>
      <h3 className="text-xl font-semibold mb-4">{t('title')}</h3>
      <div className="relative w-full h-80 rounded-lg overflow-hidden border border-border">
        <iframe
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.0!2d${lng}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwNTAnNDguMSJOIDk4wrAyMCcxOS4wIkU!5e0!3m2!1sen!2sth!4v1234567890`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ali's Boxing Gym Location"
        />
      </div>
    </AnimatedSection>
  );
}
