'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { locales, type Locale } from '@/i18n/routing';
import { cn } from '@/lib/utils';

const localeLabels: Record<Locale, string> = {
  en: 'EN',
  th: 'TH',
  ru: 'RU',
  zh: 'ZH',
};

interface LanguageSwitcherProps {
  className?: string;
}

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (newLocale: Locale) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className={cn('flex items-center', className)}>
      {locales.map((loc, index) => (
        <div key={loc} className="flex items-center">
          <button
            onClick={() => handleLocaleChange(loc)}
            className={cn(
              'text-sm font-medium transition-all duration-300 px-1',
              locale === loc
                ? 'text-white'
                : 'text-white/40 hover:text-white'
            )}
          >
            {localeLabels[loc]}
          </button>
          {index < locales.length - 1 && <span className="text-white/20">/</span>}
        </div>
      ))}
    </div>
  );
}
