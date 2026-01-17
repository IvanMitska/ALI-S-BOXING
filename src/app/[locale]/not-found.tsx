'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Container>
        <div className="text-center">
          <h1 className="text-9xl font-bold text-brand-yellow mb-4">404</h1>
          <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
          <Link href="/">
            <Button size="lg">Go Back Home</Button>
          </Link>
        </div>
      </Container>
    </div>
  );
}
