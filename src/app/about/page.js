import PageHeader from '@/components/PageHeader';
import Expertise from '@/components/Expertise';
import WhyChoose from '@/components/WhyChoose';
import Process from '@/components/Process';
import CtaBanner from '@/components/CtaBanner';

export const metadata = { title: 'About Us' };

export default function About() {
  return (
    <>
      <PageHeader art="about" eyebrow="About Us" title="Turning Ideas into Reality with 3D Printing." />
      <section style={{ paddingTop: 30 }}>
        <div className="wrap split">
          <div>
            <p className="rv" style={{ color: 'var(--mut)', marginBottom: 18 }}>
              Aqua 3D is a professional 3D printing service provider focused on delivering customized, high-quality 3D printed products and solutions. We serve both industrial and individual customers with rapid prototyping, functional components, customized products and small-batch production.
            </p>
            <p className="rv" style={{ color: 'var(--mut)' }}>
              Our goal is to make 3D printing accessible, reliable and cost-effective — from a single prototype to multiple production parts.
            </p>
          </div>
          <div className="card lc rv"><img src="/logo-full.png" alt="Aqua 3D" /></div>
        </div>
      </section>
      <Expertise />
      <WhyChoose />
      <Process />
      <CtaBanner />
    </>
  );
}
