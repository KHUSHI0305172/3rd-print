import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Expertise from '@/components/Expertise';
import WhyChoose from '@/components/WhyChoose';
import Process from '@/components/Process';
import Work from '@/components/Work';
import Reviews from '@/components/Reviews';
import CtaBanner from '@/components/CtaBanner';

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Expertise />
      <WhyChoose />
      <Process />
      <Work limit={3} filter={false} />
      <Reviews />
      <CtaBanner />
    </>
  );
}
