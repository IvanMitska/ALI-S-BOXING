import { notFound } from 'next/navigation';
import { draftMode } from 'next/headers';
import { getTranslations } from 'next-intl/server';
import { generatePageMetadata } from '@/lib/metadata';
import { PageHeader } from '@/components/sections/PageHeader';
import { Container } from '@/components/ui/Container';
import { AnimatedSection } from '@/components/common/AnimatedSection';

interface ShopPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: ShopPageProps) {
  const { locale } = await params;

  return generatePageMetadata({
    title: 'Shop',
    description: 'Shop merchandise and training gear',
    path: '/shop',
    locale,
  });
}

export default async function ShopPage({ params }: ShopPageProps) {
  const { isEnabled } = await draftMode();

  // In production, return 404 unless draft mode is enabled
  if (!isEnabled && process.env.NODE_ENV === 'production') {
    notFound();
  }

  return (
    <>
      <PageHeader title="Shop" subtitle="Coming Soon" />

      <section className="py-16 lg:py-24">
        <Container>
          <AnimatedSection className="text-center">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Under Construction</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Our online shop is currently under development. Check back soon for
                merchandise, training gear, and more!
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 text-yellow-800 rounded-lg text-sm">
                <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" />
                Draft Mode: {isEnabled ? 'Enabled' : 'Disabled'}
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </>
  );
}
