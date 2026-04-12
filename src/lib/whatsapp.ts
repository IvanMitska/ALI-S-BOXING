import { siteConfig } from './constants';
import type { Package } from './packages';

interface WhatsAppOptions {
  message?: string;
  phone?: string;
}

export function getWhatsAppUrl(options: WhatsAppOptions = {}): string {
  const { message = '', phone = siteConfig.contact.whatsapp } = options;

  const cleanPhone = phone.replace(/[^0-9]/g, '');
  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${cleanPhone}${message ? `?text=${encodedMessage}` : ''}`;
}

export function getBookingWhatsAppUrl(classType?: string): string {
  const message = classType
    ? `Hi! I'm interested in booking a ${classType} session at Ali's Boxing Gym.`
    : "Hi! I'm interested in training at Ali's Boxing Gym. Can you tell me more about your classes?";

  return getWhatsAppUrl({ message });
}

interface PackagePurchaseOptions {
  pkg: Package;
  packageName: string;
  period: string;
  template: string;
}

/**
 * Builds a WhatsApp URL with a localized "I'd like to buy this package" message.
 * The template is provided by the caller (already translated) and supports the
 * placeholders {package}, {period} and {price}. Falls back to the English
 * sentence if the template is missing any placeholder.
 */
export function getPackagePurchaseWhatsAppUrl({
  pkg,
  packageName,
  period,
  template,
}: PackagePurchaseOptions): string {
  const price = `฿${pkg.price.toLocaleString()}`;

  const message = template
    .replace('{package}', packageName)
    .replace('{period}', period)
    .replace('{price}', price);

  return getWhatsAppUrl({ message });
}
