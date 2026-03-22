'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Instagram, Facebook, Youtube, ShoppingCart } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { navLinks, siteConfig } from '@/lib/constants';
import { LanguageSwitcher } from './LanguageSwitcher';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const t = useTranslations();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const socialLinks = [
    { href: siteConfig.social.instagram, icon: Instagram, label: 'Instagram' },
    { href: siteConfig.social.facebook, icon: Facebook, label: 'Facebook' },
    { href: siteConfig.social.youtube, icon: Youtube, label: 'YouTube' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 lg:hidden bg-black"
        >

          {/* Content */}
          <div className="relative h-full flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-6">
              <span className="font-display text-xl font-bold uppercase tracking-[0.15em] text-white">
                ALI&apos;S BOXING
              </span>
              <button
                onClick={onClose}
                className="w-12 h-12 flex items-center justify-center border border-white/20 text-white hover:bg-brand-yellow hover:text-black hover:border-brand-yellow transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 flex flex-col justify-center px-6">
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="group flex items-center justify-center py-3"
                    >
                      <span className="font-display text-3xl sm:text-4xl font-bold uppercase text-white group-hover:text-brand-yellow transition-colors">
                        {t(link.labelKey)}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Footer */}
            <div className="p-6 pb-24 space-y-6">
              {/* Buy button */}
              <Link
                href="/checkout"
                onClick={onClose}
                className="flex items-center justify-center gap-3 w-full py-4 bg-brand-yellow text-black font-bold uppercase tracking-wider hover:bg-white transition-colors rounded-full"
              >
                <ShoppingCart className="w-5 h-5" />
                {t('buttons.buyOnline')}
              </Link>

              {/* Bottom row */}
              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                {/* Social links */}
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center border border-white/20 text-white/60 hover:bg-brand-yellow hover:text-black hover:border-brand-yellow transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>

                {/* Language switcher */}
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
