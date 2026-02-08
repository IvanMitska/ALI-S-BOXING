export const siteConfig = {
  name: "Ali's Boxing Gym",
  description: 'Professional Boxing Training in Phuket, Thailand',
  url: 'https://alisboxinggym.com',

  contact: {
    phone: '+66 XX XXX XXXX',
    whatsapp: '+66XXXXXXXXXX',
    email: 'info@alisboxinggym.com',
    address: 'Rawai, Phuket, Thailand',
  },

  location: {
    lat: 7.8467,
    lng: 98.3386,
    googleMapsUrl: 'https://maps.google.com/?q=7.8467,98.3386',
  },

  social: {
    instagram: 'https://instagram.com/alisboxinggym',
    facebook: 'https://facebook.com/alisboxinggym',
    youtube: 'https://youtube.com/@alisboxinggym',
  },

  hours: {
    weekday: '6:00 AM - 8:00 PM',
    weekend: '7:00 AM - 6:00 PM',
  },
} as const;

export const navLinks = [
  { href: '/', labelKey: 'nav.home' },
  { href: '/classes', labelKey: 'nav.classes' },
  { href: '/our-story', labelKey: 'nav.ourStory' },
  { href: '/gallery', labelKey: 'nav.gallery' },
  { href: '/contact', labelKey: 'nav.contact' },
] as const;
