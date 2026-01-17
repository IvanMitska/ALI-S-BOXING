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
          'inline-flex items-center gap-2 px-4 py-2 rounded-lg',
          'bg-green-500 text-white font-medium',
          'hover:bg-green-600 transition-colors',
          className
        )}
      >
        <MessageCircle className="w-5 h-5" />
        {children || 'WhatsApp'}
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
        'w-14 h-14 rounded-full',
        'bg-green-500 text-white shadow-lg',
        'flex items-center justify-center',
        'hover:bg-green-600 transition-colors',
        className
      )}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="absolute top-0 right-0 w-3 h-3 bg-brand-yellow rounded-full animate-ping" />
      <span className="absolute top-0 right-0 w-3 h-3 bg-brand-yellow rounded-full" />
    </motion.a>
  );
}
