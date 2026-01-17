import type { Metadata } from 'next';
import { Inter, Noto_Sans_Thai, Oswald } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const oswald = Oswald({
  variable: '--font-oswald',
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const notoSansThai = Noto_Sans_Thai({
  variable: '--font-noto-sans-thai',
  subsets: ['thai'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Ali's Boxing Gym",
  description: 'Professional Muay Thai & Boxing Training in Phuket, Thailand',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${oswald.variable} ${notoSansThai.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
