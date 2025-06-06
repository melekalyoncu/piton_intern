import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TeamSection from '@/components/TeamSection';
import StatsSection from '@/components/StatsSection';
import ContactSection from '@/components/ContactSection';

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
