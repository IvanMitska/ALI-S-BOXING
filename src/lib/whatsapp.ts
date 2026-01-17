import { siteConfig } from './constants';

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
