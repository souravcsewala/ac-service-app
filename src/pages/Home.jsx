import Hero from '../components/home/Hero';
import AboutUs from '../components/home/AboutUs';
import TrustedPartners from '../components/home/TrustedPartners';
import ServiceHighlights from '../components/home/ServiceHighlights';
import WhyChooseUs from '../components/home/WhyChooseUs';
import AwardsAchievements from '../components/home/AwardsAchievements';
import CompletedProjects from '../components/home/CompletedProjects';
import Testimonials from '../components/home/Testimonials';
import LatestNews from '../components/home/LatestNews';
import FAQ from '../components/home/FAQ';
import ManufacturingShowcase from '../components/home/ManufacturingShowcase';
import WarrantyCallout from '../components/home/WarrantyCallout';

export default function Home() {
  return (
    <div className="page-shell flex flex-col gap-16 md:gap-24 pb-24 md:pb-32">
      <Hero />
      <AboutUs />
      <TrustedPartners />
      <ServiceHighlights />
      <WhyChooseUs />
      <ManufacturingShowcase />
      <AwardsAchievements />
      <CompletedProjects />
      <Testimonials />
      <LatestNews />
      <FAQ />
      <WarrantyCallout />
    </div>
  );
}
