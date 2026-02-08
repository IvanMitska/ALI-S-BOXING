'use client';

import { Suspense, useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, CreditCard, Shield, Zap, Filter } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { Package, allPackages, getPackageById } from '@/lib/packages';

type Category = 'all' | 'group' | 'gym' | 'private';

const categories: { id: Category; label: string }[] = [
  { id: 'all', label: 'All Packages' },
  { id: 'group', label: 'Group Classes' },
  { id: 'gym', label: 'Open Gym' },
  { id: 'private', label: 'Private Training' },
];

function CheckoutContent() {
  const searchParams = useSearchParams();
  const preselectedId = searchParams.get('package');

  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [step, setStep] = useState<'select' | 'payment'>('select');
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

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

  const filteredPackages = activeCategory === 'all'
    ? allPackages
    : allPackages.filter(p => p.category === activeCategory);

  const handleSelectPackage = (pkg: Package) => {
    setSelectedPackage(pkg);
  };

  const handleProceedToPayment = () => {
    if (selectedPackage) {
      setStep('payment');
    }
  };

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
              Secure Checkout
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {step === 'select' ? 'Choose Your Package' : 'Complete Payment'}
            </h1>
            <p className="text-foreground-muted text-lg">
              {step === 'select'
                ? 'Select the training package that fits your goals'
                : 'Secure payment powered by Stripe'
              }
            </p>
          </motion.div>

          {/* Progress Steps */}
          <div className="flex items-center gap-4 mt-10">
            <div className={cn(
              'flex items-center gap-2 text-sm font-medium',
              step === 'select' ? 'text-brand-yellow' : 'text-foreground-muted'
            )}>
              <span className={cn(
                'w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold',
                step === 'select' ? 'bg-brand-yellow text-black' : 'bg-brand-yellow/20 text-brand-yellow'
              )}>
                {step === 'payment' ? <Check className="w-4 h-4" /> : '1'}
              </span>
              Select Package
            </div>
            <div className="w-12 h-px bg-border" />
            <div className={cn(
              'flex items-center gap-2 text-sm font-medium',
              step === 'payment' ? 'text-brand-yellow' : 'text-foreground-muted'
            )}>
              <span className={cn(
                'w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold',
                step === 'payment' ? 'bg-brand-yellow text-black' : 'bg-white/10 text-white/50'
              )}>
                2
              </span>
              Payment
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
                  {categories.map((cat) => (
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
                      {cat.label}
                    </button>
                  ))}
                </div>

                {/* Package Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  <AnimatePresence mode="popLayout">
                    {filteredPackages.map((pkg, index) => (
                      <motion.div
                        key={pkg.id}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ delay: index * 0.05 }}
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
                              Most Popular
                            </span>
                          </div>
                        )}

                        {/* Category Tag */}
                        <div className="absolute top-4 left-4">
                          <span className={cn(
                            'px-2 py-1 text-[10px] font-bold uppercase tracking-wider',
                            pkg.category === 'group' && 'bg-blue-500/20 text-blue-400',
                            pkg.category === 'gym' && 'bg-green-500/20 text-green-400',
                            pkg.category === 'private' && 'bg-purple-500/20 text-purple-400',
                          )}>
                            {pkg.category === 'group' ? 'Group' : pkg.category === 'gym' ? 'Gym' : 'Private'}
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
                            {pkg.name}
                          </h3>
                          <p className="text-foreground-muted text-sm mb-4">
                            {pkg.period}
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
                            {pkg.features.slice(0, 3).map((feature, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-foreground-muted">
                                <Check className="w-4 h-4 text-brand-yellow flex-shrink-0 mt-0.5" />
                                {feature}
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
                  className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 p-6 bg-background border border-border"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <div>
                    {selectedPackage ? (
                      <div className="text-center sm:text-left">
                        <p className="text-foreground-muted text-sm">Selected package</p>
                        <p className="text-white font-bold text-lg">{selectedPackage.name}</p>
                      </div>
                    ) : (
                      <p className="text-foreground-muted">Select a package to continue</p>
                    )}
                  </div>

                  <div className="flex items-center gap-4">
                    {selectedPackage && (
                      <div className="text-right">
                        <p className="text-foreground-muted text-sm">Total</p>
                        <p className="text-brand-yellow font-bold text-2xl">
                          ฿{selectedPackage.price.toLocaleString()}
                        </p>
                      </div>
                    )}
                    <Button
                      variant="primary"
                      size="lg"
                      disabled={!selectedPackage}
                      onClick={handleProceedToPayment}
                      rightIcon={<CreditCard className="w-5 h-5" />}
                    >
                      Continue to Payment
                    </Button>
                  </div>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="payment"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-8"
              >
                {/* Payment Form */}
                <div className="lg:col-span-2">
                  <div className="bg-background border border-border p-8">
                    <h2 className="font-display text-2xl font-bold text-white mb-6">
                      Payment Details
                    </h2>

                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-white mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="your@email.com"
                          className="w-full px-4 py-3 bg-background-secondary border border-border text-white placeholder-foreground-muted focus:outline-none focus:border-brand-yellow transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-white mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your full name"
                          className="w-full px-4 py-3 bg-background-secondary border border-border text-white placeholder-foreground-muted focus:outline-none focus:border-brand-yellow transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-white mb-2">
                          Card Information
                        </label>
                        {/* Stripe Card Element placeholder */}
                        <div className="w-full px-4 py-4 bg-background-secondary border border-border text-foreground-muted">
                          <div className="flex items-center gap-2">
                            <CreditCard className="w-5 h-5" />
                            <span className="text-sm">Stripe payment form will be integrated here</span>
                          </div>
                        </div>
                        <p className="text-foreground-muted text-xs mt-2">
                          Your payment is secured with 256-bit SSL encryption
                        </p>
                      </div>

                      <Button
                        variant="primary"
                        size="lg"
                        className="w-full"
                        rightIcon={<Shield className="w-5 h-5" />}
                      >
                        Pay ฿{selectedPackage?.price.toLocaleString()}
                      </Button>

                      <div className="flex items-center justify-center gap-6 pt-4 border-t border-border">
                        <div className="flex items-center gap-2 text-foreground-muted text-sm">
                          <Shield className="w-4 h-4 text-brand-yellow" />
                          Secure Payment
                        </div>
                        <div className="flex items-center gap-2 text-foreground-muted text-sm">
                          <Zap className="w-4 h-4 text-brand-yellow" />
                          Instant Access
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setStep('select')}
                    className="mt-4 text-foreground-muted hover:text-white text-sm transition-colors"
                  >
                    ← Back to package selection
                  </button>
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                  <div className="bg-background border border-border p-6 sticky top-24">
                    <h3 className="font-display text-xl font-bold text-white mb-6">
                      Order Summary
                    </h3>

                    {selectedPackage && (
                      <>
                        <div className="pb-6 border-b border-border">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <span className="text-white font-medium block">{selectedPackage.name}</span>
                              <span className={cn(
                                'inline-block mt-1 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider',
                                selectedPackage.category === 'group' && 'bg-blue-500/20 text-blue-400',
                                selectedPackage.category === 'gym' && 'bg-green-500/20 text-green-400',
                                selectedPackage.category === 'private' && 'bg-purple-500/20 text-purple-400',
                              )}>
                                {selectedPackage.category}
                              </span>
                            </div>
                            <span className="text-white">฿{selectedPackage.price.toLocaleString()}</span>
                          </div>
                          <span className="text-foreground-muted text-sm">{selectedPackage.period}</span>
                        </div>

                        <div className="py-6 border-b border-border space-y-3">
                          {selectedPackage.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm text-foreground-muted">
                              <Check className="w-4 h-4 text-brand-yellow flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>

                        <div className="pt-6">
                          <div className="flex justify-between items-center pt-4 border-t border-border">
                            <span className="text-white font-bold text-lg">Total</span>
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
              <Shield className="w-6 h-6 text-brand-yellow" />
              <span className="text-sm">SSL Secured</span>
            </div>
            <div className="flex items-center gap-3 text-foreground-muted">
              <CreditCard className="w-6 h-6 text-brand-yellow" />
              <span className="text-sm">Powered by Stripe</span>
            </div>
            <div className="flex items-center gap-3 text-foreground-muted">
              <Zap className="w-6 h-6 text-brand-yellow" />
              <span className="text-sm">Instant Confirmation</span>
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
