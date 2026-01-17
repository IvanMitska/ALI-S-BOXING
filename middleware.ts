import createMiddleware from 'next-intl/middleware';
import { routing } from './src/i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Enable on root
    '/',
    // Enable on locales
    '/(en|th|ru|zh)',
    '/(en|th|ru|zh)/:path*',
    // Enable on everything except static files
    '/((?!_next|_vercel|api|.*\\..*).*)'
  ]
};
