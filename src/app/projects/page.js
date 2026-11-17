import PageHeader from '@/components/PageHeader';
import Gallery from '@/components/Gallery';
import CtaBanner from '@/components/CtaBanner';

export const metadata = { title: 'Projects / Gallery' };

export default function Projects() {
  return (
    <>
      <PageHeader art="projects" eyebrow="Projects / Gallery" title="Our recent work" text="Prototypes, custom products and functional parts we have printed for our clients. Click any project to see the details." />
      <Gallery />
      <CtaBanner />
    </>
  );
}
