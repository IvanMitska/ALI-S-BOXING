export const siteConfig = {
  name: "Ali's Boxing Gym",
  description: 'Professional Boxing Training in Phuket, Thailand',
  url: 'https://alisboxinggym.com',

  contact: {
    phone: '+66 99 209 7926',
    whatsapp: '+66992097926',
    email: 'boxinggyma@gmail.com',
    address: 'Soi Ta Ied, Chalong, Phuket, Thailand',
  },

  location: {
    lat: 7.8467,
    lng: 98.3386,
    googleMapsUrl: 'https://maps.google.com/?q=7.8467,98.3386',
  },

  social: {
    instagram: 'https://instagram.com/alisboxinggym',
    facebook: 'https://facebook.com/alisboxinggym',
    youtube: 'https://www.youtube.com/@alisboxinggym2107',
  },

  hours: {
    weekday: '8:00 AM - 8:00 PM',
    weekend: 'Closed',
  },
} as const;

// Hero video URLs (Cloudinary with optimizations)
export const heroVideo = {
  // Horizontal video for desktop (16:9) - optimized: quality auto, streaming
  desktop: 'https://res.cloudinary.com/ddvpwul6v/video/upload/q_auto,f_auto,vc_auto/Ali_s_Boxing_Gym_-_Website_Video_Horizontal_1_tvjtrp.mp4',
  desktopPoster: 'https://res.cloudinary.com/ddvpwul6v/video/upload/so_0,f_jpg,q_80/Ali_s_Boxing_Gym_-_Website_Video_Horizontal_1_tvjtrp.jpg',
  // Vertical video for mobile (9:16) - optimized: smaller width, lower bitrate for fast loading
  mobile: 'https://res.cloudinary.com/ddvpwul6v/video/upload/q_auto,f_auto,vc_auto,w_480,br_1500k/Ali_s_Boxing_Gym_-_Website_Video_Vertical_1_e2ek4q.mp4',
  mobilePoster: 'https://res.cloudinary.com/ddvpwul6v/video/upload/so_0,f_jpg,q_80,w_480/Ali_s_Boxing_Gym_-_Website_Video_Vertical_1_e2ek4q.jpg',
} as const;

export const navLinks = [
  { href: '/', labelKey: 'nav.home' },
  { href: '/classes', labelKey: 'nav.classes' },
  { href: '/our-story', labelKey: 'nav.ourStory' },
  { href: '/gallery', labelKey: 'nav.gallery' },
  { href: '/contact', labelKey: 'nav.contact' },
] as const;
