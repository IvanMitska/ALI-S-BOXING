import { getTranslations } from 'next-intl/server';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { generatePageMetadata } from '@/lib/metadata';
import { PageHeader } from '@/components/sections/PageHeader';
import { ContactForm } from '@/components/sections/ContactForm';
import { GoogleMap } from '@/components/sections/GoogleMap';
import { Container } from '@/components/ui/Container';
import { AnimatedSection } from '@/components/common/AnimatedSection';
import { siteConfig } from '@/lib/constants';

interface ContactPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: ContactPageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contact' });

  return generatePageMetadata({
    title: t('pageTitle'),
    description: t('pageSubtitle'),
    path: '/contact',
    locale,
  });
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'contact' });

  return (
    <>
      <PageHeader title={t('pageTitle')} subtitle={t('pageSubtitle')} />

      <section className="py-16 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <AnimatedSection>
                <h2 className="text-2xl font-bold mb-6">{t('info.title')}</h2>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <ul className="space-y-6 mb-10">
                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-brand-yellow/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-brand-yellow" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{t('info.address')}</h4>
                      <p className="text-muted-foreground">
                        {siteConfig.contact.address}
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-brand-yellow/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-brand-yellow" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{t('info.phone')}</h4>
                      <a
                        href={`tel:${siteConfig.contact.phone}`}
                        className="text-muted-foreground hover:text-brand-yellow transition-colors"
                      >
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-brand-yellow/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-brand-yellow" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{t('info.email')}</h4>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="text-muted-foreground hover:text-brand-yellow transition-colors"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-brand-yellow/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-brand-yellow" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{t('info.hours')}</h4>
                      <p className="text-muted-foreground">
                        {t('info.weekday')}: {siteConfig.hours.weekday}
                      </p>
                      <p className="text-muted-foreground">
                        {t('info.weekend')}: {siteConfig.hours.weekend}
                      </p>
                    </div>
                  </li>
                </ul>
              </AnimatedSection>

              <GoogleMap />
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
