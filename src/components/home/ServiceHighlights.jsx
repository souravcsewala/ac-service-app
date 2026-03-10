import { Link } from 'react-router-dom';

const services = [
  {
    title: 'AC Installation',
    desc: 'Expert AC installation with warranty for optimal cooling.',
    image: 'https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'AC Repair & Gas Refill',
    desc: 'Professional AC repair and gas refilling using genuine parts.',
    image: 'https://images.unsplash.com/photo-1621905252472-e8c681dcb4f5?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Commercial HVAC Solutions',
    desc: 'Commercial HVAC solutions for offices, malls, energy efficiency.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Emergency AC Service',
    desc: '24/7 emergency cooling repair services with rapid response.',
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=80',
  },
];

export default function ServiceHighlights() {
  return (
    <section className="py-28 md:py-36">
      <div className="section-shell">
        <div className="text-center">
          <div className="section-kicker justify-center">Services Highlight</div>
          <h2 className="section-title mt-6">Quick overview of our most popular services.</h2>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-4">
          {services.map((service) => (
            <article key={service.title} className="group flex flex-col overflow-hidden rounded-[1.6rem] border border-[#117ca1]/16 shadow-[0_16px_42px_rgba(12,32,48,0.1)]">
              <div className="relative h-[280px] shrink-0 overflow-hidden">
                <img src={service.image} alt={service.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071b29]/92 via-[#071b29]/25 to-transparent" />
              </div>
              <div className="relative z-10 bg-[#0d2844] px-5 py-5 text-white">
                <h3 className="text-[1.35rem] font-bold leading-tight">{service.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/85">{service.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-end">
          <Link to="/services" className="secondary-btn">
            View All Services →
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
