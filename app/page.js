import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import StatsSection from '@/components/StatsSection';
import ContactSection from '@/components/ContactSection';
import TeamSection from '@/components/TeamSection.lazy'; 

export const revalidate = 0; 

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
