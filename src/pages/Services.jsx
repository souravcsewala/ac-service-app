import ServicesHero from '../components/services/ServicesHero';
import ServicesOverview from '../components/services/ServicesOverview';
import ServicesProcess from '../components/services/ServicesProcess';
import ServicesOfferings from '../components/services/ServicesOfferings';
import WhyChooseUs from '../components/services/WhyChooseUs';

export default function Services() {
  return (
    <div className="page-shell flex w-full flex-col gap-12 md:gap-16 lg:gap-20">
      <ServicesHero />
      <ServicesOverview />
      <ServicesOfferings />
      <WhyChooseUs />
      <ServicesProcess />
    </div>
  );
}
