'use client';

import { Suspense, useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, Check, Filter, MessageCircle, Shield, Zap } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/ui/Container';
import { cn } from '@/lib/utils';
import { Package, allPackages, getPackageById } from '@/lib/packages';
import { getPackagePurchaseWhatsAppUrl } from '@/lib/whatsapp';

type Category = 'all' | 'dropIn' | 'weekly' | 'monthly' | 'special';

const categoryKeys: { id: Category; labelKey: string }[] = [
  { id: 'all', labelKey: 'allPackages' },
  { id: 'dropIn', labelKey: 'dropIn' },
  { id: 'weekly', labelKey: 'weekly' },
  { id: 'monthly', labelKey: 'monthly' },
  { id: 'special', labelKey: 'special' },
];

function CheckoutContent() {
  const searchParams = useSearchParams();
  const preselectedId = searchParams.get('package');
  const t = useTranslations('checkout');
  const tRoot = useTranslations();
  const tPackages = useTranslations('packages');

  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [step, setStep] = useState<'select' | 'contact'>('select');
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  // Preselect package from URL
  useEffect(() => {
    if (preselectedId) {
      const pkg = getPackageById(preselectedId);
      if (pkg) {
        setSelectedPackage(pkg);
        setActiveCategory(pkg.category);
      }
    }
  }, [preselectedId]);

  const filteredPackages = useMemo(() =>
    activeCategory === 'all'
      ? allPackages
      : allPackages.filter(p => p.category === activeCategory),
    [activeCategory]
  );

  const handleSelectPackage = (pkg: Package) => {
    setSelectedPackage(pkg);
  };

  const handleProceedToPayment = () => {
    if (selectedPackage) {
      setStep('contact');
    }
  };

  const whatsappUrl = selectedPackage
    ? getPackagePurchaseWhatsAppUrl({
        pkg: selectedPackage,
        packageName: tPackages(`names.${selectedPackage.nameKey}`),
        period: tPackages(`periods.${selectedPackage.periodKey}`),
        template: tRoot('whatsapp.purchaseMessage'),
      })
    : '#';

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-yellow/5 -skew-x-12 origin-top-right" />

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-brand-yellow text-sm font-bold uppercase tracking-[0.3em] mb-4">
              {t('secureCheckout')}
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {step === 'select' ? t('choosePackage') : t('contactStepTitle')}
            </h1>
            <p className="text-foreground-muted text-lg">
              {step === 'select'
                ? t('selectDescription')
                : t('contactStepDescription')
              }
            </p>
          </motion.div>

          {/* Maintenance banner */}
          <div className="mt-8 flex items-start gap-3 px-4 py-3 border border-amber-500/40 bg-amber-500/10 text-amber-200">
            <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
            <p className="text-sm leading-relaxed">
              <span className="font-semibold">{t('maintenance.title')} </span>
              {t('maintenance.message')}
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center gap-4 mt-8">
            <div className={cn(
              'flex items-center gap-2 text-sm font-medium',
              step === 'select' ? 'text-brand-yellow' : 'text-foreground-muted'
            )}>
              <span className={cn(
                'w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold',
                step === 'select' ? 'bg-brand-yellow text-black' : 'bg-brand-yellow/20 text-brand-yellow'
              )}>
                {step === 'contact' ? <Check className="w-4 h-4" /> : '1'}
              </span>
              {t('selectPackage')}
            </div>
            <div className="w-12 h-px bg-border" />
            <div className={cn(
              'flex items-center gap-2 text-sm font-medium',
              step === 'contact' ? 'text-brand-yellow' : 'text-foreground-muted'
            )}>
              <span className={cn(
                'w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold',
                step === 'contact' ? 'bg-brand-yellow text-black' : 'bg-white/10 text-white/50'
              )}>
                2
              </span>
              {t('contactStep')}
            </div>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-16 bg-background-secondary min-h-[60vh]">
        <Container>
          <AnimatePresence mode="wait">
            {step === 'select' ? (
              <motion.div
                key="select"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
              >
                {/* Category Filter */}
                <div className="flex flex-wrap items-center gap-2 mb-10">
                  <Filter className="w-4 h-4 text-foreground-muted mr-2" />
                  {categoryKeys.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={cn(
                        'px-4 py-2 text-sm font-medium uppercase tracking-wider transition-all duration-300',
                        activeCategory === cat.id
                          ? 'bg-brand-yellow text-black'
                          : 'bg-background border border-border text-foreground-muted hover:border-brand-yellow/50 hover:text-white'
                      )}
                    >
                      {t(cat.labelKey)}
                    </button>
                  ))}
                </div>

                {/* Package Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  <AnimatePresence mode="popLayout">
                    {filteredPackages.map((pkg) => (
                      <motion.div
                        key={pkg.id}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                        onClick={() => handleSelectPackage(pkg)}
                        className={cn(
                          'relative cursor-pointer group',
                          'bg-background border-2 transition-all duration-300',
                          selectedPackage?.id === pkg.id
                            ? 'border-brand-yellow shadow-[0_0_30px_rgba(212,175,55,0.2)]'
                            : 'border-border hover:border-brand-yellow/50'
                        )}
                      >
                        {/* Popular Badge */}
                        {pkg.popular && (
                          <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                            <span className="px-4 py-1 bg-brand-yellow text-black text-xs font-bold uppercase tracking-wider whitespace-nowrap">
                              {t('mostPopular')}
                            </span>
                          </div>
                        )}

                        {/* Category Tag */}
                        <div className="absolute top-4 left-4">
                          <span className={cn(
                            'px-2 py-1 text-[10px] font-bold uppercase tracking-wider',
                            pkg.category === 'dropIn' && 'bg-blue-500/20 text-blue-400',
                            pkg.category === 'weekly' && 'bg-green-500/20 text-green-400',
                            pkg.category === 'monthly' && 'bg-purple-500/20 text-purple-400',
                            pkg.category === 'special' && 'bg-amber-500/20 text-amber-400',
                          )}>
                            {t(pkg.category)}
                          </span>
                        </div>

                        {/* Selected Indicator */}
                        {selectedPackage?.id === pkg.id && (
                          <div className="absolute top-4 right-4 z-10">
                            <div className="w-6 h-6 bg-brand-yellow rounded-full flex items-center justify-center">
                              <Check className="w-4 h-4 text-black" />
                            </div>
                          </div>
                        )}

                        <div className="p-6 pt-12">
                          {/* Name */}
                          <h3 className="font-display text-xl font-bold text-white mb-1">
                            {tPackages(`names.${pkg.nameKey}`)}
                          </h3>
                          <p className="text-foreground-muted text-sm mb-4">
                            {tPackages(`periods.${pkg.periodKey}`)}
                          </p>

                          {/* Price */}
                          <div className="mb-4">
                            <div className="flex items-baseline gap-1">
                              <span className="text-3xl font-bold text-brand-yellow">
                                ฿{pkg.price.toLocaleString()}
                              </span>
                            </div>
                          </div>

                          {/* Features */}
                          <ul className="space-y-2">
                            {pkg.featureKeys.slice(0, 3).map((featureKey, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-foreground-muted">
                                <Check className="w-4 h-4 text-brand-yellow flex-shrink-0 mt-0.5" />
                                {tPackages(`features.${featureKey}`)}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Bottom Accent */}
                        <div className={cn(
                          'h-1 transition-all duration-300',
                          selectedPackage?.id === pkg.id ? 'bg-brand-yellow' : 'bg-transparent'
                        )} />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {/* Continue Button */}
                <motion.div
                  className="mt-12 flex flex-col items-center gap-4 p-6 bg-background border border-border"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {selectedPackage ? (
                    <>
                      <div className="text-center">
                        <p className="text-foreground-muted text-sm">{t('selectedPackage')}</p>
                        <p className="text-white font-bold text-lg">{tPackages(`names.${selectedPackage.nameKey}`)}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-foreground-muted text-sm">{t('total')}</p>
                        <p className="text-brand-yellow font-bold text-2xl">
                          ฿{selectedPackage.price.toLocaleString()}
                        </p>
                      </div>
                    </>
                  ) : (
                    <p className="text-foreground-muted">{t('selectToContinue')}</p>
                  )}
                  <button
                    disabled={!selectedPackage}
                    onClick={handleProceedToPayment}
                    className={cn(
                      'inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-wider transition-all duration-300',
                      selectedPackage
                        ? 'bg-brand-yellow text-black hover:bg-brand-yellow-dark'
                        : 'bg-white/10 text-white/50 cursor-not-allowed'
                    )}
                  >
                    {t('continueToContact')}
                    <MessageCircle className="w-4 h-4" />
                  </button>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="contact"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8"
              >
                {/* WhatsApp CTA */}
                <div className="lg:col-span-2">
                  <div className="bg-background border border-border p-8">
                    <h2 className="font-display text-2xl font-bold text-white mb-3">
                      {t('contactDetailsTitle')}
                    </h2>
                    <p className="text-foreground-muted mb-6">
                      {t('contactDetailsSubtitle')}
                    </p>

                    <div className="px-4 py-4 mb-6 border border-amber-500/40 bg-amber-500/10 text-amber-200 text-sm">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5" />
                        <p>
                          <span className="font-semibold">{t('maintenance.title')} </span>
                          {t('maintenance.checkoutNote')}
                        </p>
                      </div>
                    </div>

                    <ol className="space-y-3 mb-8 text-sm text-foreground-muted">
                      <li className="flex gap-3">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-yellow/15 text-brand-yellow font-bold text-xs shrink-0">1</span>
                        {t('contactStep1')}
                      </li>
                      <li className="flex gap-3">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-yellow/15 text-brand-yellow font-bold text-xs shrink-0">2</span>
                        {t('contactStep2')}
                      </li>
                      <li className="flex gap-3">
                        <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-yellow/15 text-brand-yellow font-bold text-xs shrink-0">3</span>
                        {t('contactStep3')}
                      </li>
                    </ol>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-3 px-6 py-4 rounded-full bg-brand-yellow text-black font-semibold uppercase tracking-wider text-sm hover:bg-brand-yellow-dark transition-all duration-300"
                    >
                      <MessageCircle className="w-5 h-5" />
                      {t('contactViaWhatsApp')}
                    </a>

                    <div className="flex items-center justify-center gap-6 pt-6 mt-6 border-t border-border">
                      <div className="flex items-center gap-2 text-foreground-muted text-sm">
                        <Shield className="w-4 h-4 text-brand-yellow" />
                        {t('directContact')}
                      </div>
                      <div className="flex items-center gap-2 text-foreground-muted text-sm">
                        <Zap className="w-4 h-4 text-brand-yellow" />
                        {t('quickReply')}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setStep('select')}
                    className="mt-4 text-foreground-muted hover:text-white text-sm transition-colors"
                  >
                    {t('backToSelection')}
                  </button>
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                  <div className="bg-background border border-border p-6 sticky top-24">
                    <h3 className="font-display text-xl font-bold text-white mb-6">
                      {t('orderSummary')}
                    </h3>

                    {selectedPackage && (
                      <>
                        <div className="pb-6 border-b border-border">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <span className="text-white font-medium block">{tPackages(`names.${selectedPackage.nameKey}`)}</span>
                              <span className={cn(
                                'inline-block mt-1 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider',
                                selectedPackage.category === 'dropIn' && 'bg-blue-500/20 text-blue-400',
                                selectedPackage.category === 'weekly' && 'bg-green-500/20 text-green-400',
                                selectedPackage.category === 'monthly' && 'bg-purple-500/20 text-purple-400',
                                selectedPackage.category === 'special' && 'bg-amber-500/20 text-amber-400',
                              )}>
                                {t(selectedPackage.category)}
                              </span>
                            </div>
                            <span className="text-white">฿{selectedPackage.price.toLocaleString()}</span>
                          </div>
                          <span className="text-foreground-muted text-sm">{tPackages(`periods.${selectedPackage.periodKey}`)}</span>
                        </div>

                        <div className="py-6 border-b border-border space-y-3">
                          {selectedPackage.featureKeys.map((featureKey, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm text-foreground-muted">
                              <Check className="w-4 h-4 text-brand-yellow flex-shrink-0" />
                              {tPackages(`features.${featureKey}`)}
                            </div>
                          ))}
                        </div>

                        <div className="pt-6">
                          <div className="flex justify-between items-center pt-4 border-t border-border">
                            <span className="text-white font-bold text-lg">{t('total')}</span>
                            <span className="text-brand-yellow font-bold text-2xl">
                              ฿{selectedPackage.price.toLocaleString()}
                            </span>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Container>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-background border-t border-border">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            <div className="flex items-center gap-3 text-foreground-muted">
              <MessageCircle className="w-6 h-6 text-brand-yellow" />
              <span className="text-sm">{t('directContact')}</span>
            </div>
            <div className="flex items-center gap-3 text-foreground-muted">
              <Zap className="w-6 h-6 text-brand-yellow" />
              <span className="text-sm">{t('quickReply')}</span>
            </div>
            <div className="flex items-center gap-3 text-foreground-muted">
              <Shield className="w-6 h-6 text-brand-yellow" />
              <span className="text-sm">{t('flexibleBooking')}</span>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function CheckoutLoading() {
  return (
    <section className="pt-32 pb-16 bg-background min-h-screen">
      <Container>
        <div className="animate-pulse">
          <div className="h-4 w-32 bg-brand-yellow/20 mb-4" />
          <div className="h-12 w-96 bg-white/10 mb-6" />
          <div className="h-6 w-64 bg-white/5" />
        </div>
      </Container>
    </section>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<CheckoutLoading />}>
      <CheckoutContent />
    </Suspense>
  );
}
