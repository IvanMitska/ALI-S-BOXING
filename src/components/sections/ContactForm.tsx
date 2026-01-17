'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useTranslations } from 'next-intl';
import { Send, CheckCircle } from 'lucide-react';
import { Input, Textarea } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { AnimatedSection } from '@/components/common/AnimatedSection';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const t = useTranslations('contact.form');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('Form submitted:', data);
    setIsSubmitted(true);
    reset();
  };

  if (isSubmitted) {
    return (
      <AnimatedSection className="text-center py-12">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-semibold mb-2">{t('success')}</h3>
        <Button
          variant="outline"
          onClick={() => setIsSubmitted(false)}
          className="mt-4"
        >
          Send another message
        </Button>
      </AnimatedSection>
    );
  }

  return (
    <AnimatedSection>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <Input
          label={t('name')}
          placeholder="John Doe"
          error={errors.name?.message}
          {...register('name')}
        />

        <Input
          type="email"
          label={t('email')}
          placeholder="john@example.com"
          error={errors.email?.message}
          {...register('email')}
        />

        <Input
          label={t('subject')}
          placeholder="Training inquiry"
          error={errors.subject?.message}
          {...register('subject')}
        />

        <Textarea
          label={t('message')}
          placeholder="Tell us about your training goals..."
          error={errors.message?.message}
          {...register('message')}
        />

        <Button
          type="submit"
          isLoading={isSubmitting}
          rightIcon={<Send className="w-4 h-4" />}
          className="w-full sm:w-auto"
        >
          {t('submit')}
        </Button>
      </form>
    </AnimatedSection>
  );
}
