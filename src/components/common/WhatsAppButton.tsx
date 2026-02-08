'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getBookingWhatsAppUrl } from '@/lib/whatsapp';

interface WhatsAppButtonProps {
  variant?: 'floating' | 'inline';
  message?: string;
  className?: string;
  children?: React.ReactNode;
}

export function WhatsAppButton({
  variant = 'floating',
  message,
  className,
  children,
}: WhatsAppButtonProps) {
  const whatsappUrl = getBookingWhatsAppUrl(message);

  if (variant === 'inline') {
    return (
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          'group relative inline-flex items-center gap-2 px-6 py-3 overflow-hidden',
          'bg-transparent text-white font-bold uppercase tracking-wider text-sm',
          'border border-white transition-all duration-300',
          className
        )}
      >
        <MessageCircle className="w-5 h-5 relative z-10" />
        <span className="relative z-10">{children || 'WhatsApp'}</span>
        <span className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-brand-yellow/70 via-brand-yellow to-brand-yellow-dark origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100" />
      </a>
    );
  }

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'fixed bottom-6 right-6 z-50',
        'w-12 h-12 rounded-full',
        'bg-brand-yellow/90 backdrop-blur-sm',
        'flex items-center justify-center',
        'hover:bg-brand-yellow hover:scale-110 transition-all duration-300',
        className
      )}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-5 h-5 text-black" />
    </motion.a>
  );
}
