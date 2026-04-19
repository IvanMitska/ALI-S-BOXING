import type { Metadata } from 'next';
import { Inter, Noto_Sans_Thai, Oswald, Alfa_Slab_One, Anton } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const nouten = localFont({
  src: [
    { path: './fonts/Nouten/Nouten.woff2', weight: '400', style: 'normal' },
    { path: './fonts/Nouten/Nouten.woff', weight: '400', style: 'normal' },
  ],
  variable: '--font-nouten',
  display: 'swap',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const oswald = Oswald({
  variable: '--font-oswald',
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  weight: ['500', '700'],
});

const notoSansThai = Noto_Sans_Thai({
  variable: '--font-noto-sans-thai',
  subsets: ['thai'],
  display: 'swap',
});

const alfaSlabOne = Alfa_Slab_One({
  variable: '--font-alfa-slab',
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
});

// Anton - Bold impact-style font for Hero headlines
const anton = Anton({
  variable: '--font-anton',
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
});

export const metadata: Metadata = {
  title: "Ali's Boxing Gym",
  description: 'Professional Boxing Training in Phuket, Thailand',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${oswald.variable} ${notoSansThai.variable} ${alfaSlabOne.variable} ${anton.variable} ${nouten.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
