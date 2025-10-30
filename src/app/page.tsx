import HeroSection from '@/components/sections/hero';
import ServicesSection from '@/components/sections/services';
import CaseStudiesSection from '@/components/sections/case-studies';
import AboutSection from '@/components/sections/about';
import ContactSection from '@/components/sections/contact';
import TeamSection from '@/components/sections/team';
import TestimonialsSection from '@/components/sections/testimonials';
import StatsSection from '@/components/sections/stats';
import PillNav from '@/components/navigation/PillNav';

export default function Home() {
  const currentPage = '/';

  return (
    <>
      <PillNav
        logo="/globe.svg"
        logoAlt="DigitalPro Logo"
        items={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '#services' },
          { label: 'Work', href: '#work' },
          { label: 'Team', href: '#team' },
          { label: 'Testimonials', href: '#testimonials' },
          { label: 'Contact', href: '#contact' }
        ]}
        activeHref={currentPage}
        className="custom-nav"
        ease="power2.easeOut"
      />
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <CaseStudiesSection />
      <AboutSection />
      <TeamSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}