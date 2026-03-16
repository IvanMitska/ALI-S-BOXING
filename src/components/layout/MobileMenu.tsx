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
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 lg:hidden"
        >
          {/* Full screen background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black"
          />

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-yellow/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl" />

          {/* Content */}
          <div className="relative h-full flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-6">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="font-display text-xl font-bold uppercase tracking-[0.15em] text-white"
              >
                ALI&apos;S BOXING
              </motion.span>
              <motion.button
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ delay: 0.2 }}
                onClick={onClose}
                className="w-12 h-12 flex items-center justify-center border border-white/20 text-white hover:bg-brand-yellow hover:text-black hover:border-brand-yellow transition-all duration-300"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </motion.button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 flex flex-col justify-center px-6">
              <ul className="space-y-2">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.08, duration: 0.4 }}
                  >
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="group flex items-center justify-end gap-4 py-3"
                    >
                      <span className="font-display text-3xl sm:text-4xl font-bold uppercase text-white group-hover:text-brand-yellow transition-colors duration-300 text-right">
                        {t(link.labelKey)}
                      </span>
                      <span className="text-brand-yellow/60 font-mono text-sm w-6">
                        0{index + 1}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Footer */}
            <div className="p-6 pb-24 space-y-6">
              {/* Buy button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Link
                  href="/checkout"
                  onClick={onClose}
                  className="flex items-center justify-center gap-3 w-full py-4 bg-brand-yellow text-black font-bold uppercase tracking-wider hover:bg-white transition-colors duration-300"
                >
                  <ShoppingCart className="w-5 h-5" />
                  {t('buttons.buyOnline')}
                </Link>
              </motion.div>

              {/* Bottom row */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-center justify-between pt-4 border-t border-white/10"
              >
                {/* Social links */}
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 flex items-center justify-center border border-white/20 text-white/60 hover:bg-brand-yellow hover:text-black hover:border-brand-yellow transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>

                {/* Language switcher */}
                <LanguageSwitcher />
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
