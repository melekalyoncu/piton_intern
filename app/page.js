export const revalidate = 0;

import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import StatsSection from '@/components/StatsSection';
import ContactSection from '@/components/ContactSection';
import dynamic from 'next/dynamic';

const TeamSection = dynamic(() => import('@/components/TeamSection'), { ssr: false });

export default function Page() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <TeamSection />   
      <StatsSection />
      <ContactSection />
    </main>
  );
}
