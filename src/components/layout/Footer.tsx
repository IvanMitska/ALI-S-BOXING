'use client';

import { useTranslations } from 'next-intl';
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { Container } from '@/components/ui/Container';
import { siteConfig, navLinks } from '@/lib/constants';

export function Footer() {
  const t = useTranslations();

  const socialLinks = [
    { href: siteConfig.social.instagram, icon: Instagram, label: 'Instagram' },
    { href: siteConfig.social.facebook, icon: Facebook, label: 'Facebook' },
    { href: siteConfig.social.youtube, icon: Youtube, label: 'YouTube' },
  ];

  return (
    <footer className="relative bg-background-secondary">
      <Container>
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand */}
            <div className="lg:col-span-1">
              <span className="font-display text-2xl font-bold uppercase tracking-wider text-white block mb-6">
                Ali&apos;s Boxing
              </span>
              <p className="text-foreground-muted text-sm leading-relaxed mb-6">
                {t('footer.description')}
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-border flex items-center justify-center text-foreground-muted hover:bg-white hover:text-background hover:border-white transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white mb-6">
                {t('footer.quickLinks')}
              </h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-foreground-muted hover:text-white transition-colors text-sm"
                    >
                      {t(link.labelKey)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white mb-6">
                {t('footer.contactUs')}
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-yellow flex-shrink-0 mt-0.5" />
                  <span className="text-foreground-muted text-sm">
                    {siteConfig.contact.address}
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-brand-yellow flex-shrink-0" />
                  <a
                    href={`tel:${siteConfig.contact.phone}`}
                    className="text-foreground-muted hover:text-white transition-colors text-sm"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-brand-yellow flex-shrink-0" />
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-foreground-muted hover:text-white transition-colors text-sm"
                  >
                    {siteConfig.contact.email}
                  </a>
                </li>
              </ul>
            </div>

            {/* Hours */}
            <div>
              <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white mb-6">
                {t('footer.hours')}
              </h4>
              <div className="space-y-3">
                <div className="flex flex-wrap justify-between gap-2 text-sm">
                  <span className="text-foreground-muted">{t('footer.weekday')}</span>
                  <span className="text-white">{siteConfig.hours.weekday}</span>
                </div>
                <div className="flex flex-wrap justify-between gap-2 text-sm">
                  <span className="text-foreground-muted">{t('footer.weekend')}</span>
                  <span className="text-white">{siteConfig.hours.weekend}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border py-6">
          <p className="text-center text-sm text-foreground-muted">
            &copy; {new Date().getFullYear()} Ali&apos;s Boxing Gym. {t('footer.copyright')}
          </p>
        </div>
      </Container>
    </footer>
  );
}
