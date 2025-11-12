import HeroSection from "@/components/sections/hero-section";
import WorkSection from "@/components/sections/work-section";
import ClientLogosSection from "@/components/sections/client-logos-section";
import PhilosophySection from "@/components/sections/philosophy-section";
import ServicesSection from "@/components/sections/services-section";
import ContactSection from "@/components/sections/contact-section";
import FooterSection from "@/components/sections/footer-section";
import StickyNav from "@/components/navigation/sticky-nav";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <StickyNav />
      <HeroSection />
      <WorkSection />
      <ClientLogosSection />
      <PhilosophySection />
      <ServicesSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}