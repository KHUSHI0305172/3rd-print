import PageHeader from '@/components/PageHeader';
import QuoteForm from '@/components/QuoteForm';

export const metadata = { title: 'Get Instant Quote' };

export default function Quote() {
  return (
    <>
      <PageHeader art="quote" eyebrow="Get Instant Quote" title="Tell us what you need" text="Share your requirement and we will get back with a quote on WhatsApp." />
      <QuoteForm />
    </>
  );
}
