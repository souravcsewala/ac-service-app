import { Link } from 'react-router-dom';
import heroImage from '../../assets/service/herosection.png';
import overviewImage from '../../assets/service/service overview.png';

const services = [
  {
    title: 'Air-Conditioning',
    description:
      'Complete air conditioning solutions including installation, repair, and maintenance for residential and commercial spaces.',
    features: ['Split & Central AC', 'Installation & Repair', 'Energy-efficient systems', 'All major brands'],
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    image: heroImage,
  },
  {
    title: 'Ventilation Solutions',
    description:
      'Professional ventilation system design and installation for optimal indoor air quality. From exhaust systems to fresh air intake solutions.',
    features: ['Air handling units', 'Exhaust systems', 'Fresh air supply', 'IAQ improvement'],
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
      </svg>
    ),
    image: overviewImage,
  },
  {
    title: 'VRF System',
    description:
      'Variable Refrigerant Flow (VRF) systems provide precise, energy-efficient temperature control across multiple zones.',
    features: ['Multi-zone control', 'Installation & Repair', 'Energy-efficient systems', 'All major brands'],
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    image: heroImage,
  },
];

export default function ServicesOfferings() {
  return (
    <section className="bg-[#f8fafd] py-16 md:py-24">
      <div className="flex w-full justify-center px-6 md:px-10 lg:px-12">
        <div className="w-full max-w-[1200px]">
        <p className="text-center text-base font-semibold text-[#0d9bb5] md:text-lg">
          Our Services
        </p>
        <div className="mx-auto mt-1 flex items-center justify-center gap-1">
          <span className="h-0.5 w-4 rounded-full bg-[#cfe2ff]" aria-hidden />
          <span className="h-0.5 w-12 rounded-full bg-[#007bff]" aria-hidden />
          <span className="h-0.5 w-4 rounded-full bg-[#cfe2ff]" aria-hidden />
        </div>
        <h2 className="mt-4 text-center text-[clamp(1.9rem,3vw,2.75rem)] font-bold leading-tight text-[#1a1d21]">
          Professional HVAC Services
        </h2>
        <p className="mx-auto mt-3 max-w-[640px] text-center text-[1rem] leading-[1.6] text-[#495057] md:text-[1.05rem]">
          Expert solutions for all your heating, ventilation, and air conditioning needs.
        </p>

        <div className="mx-auto mt-12 grid w-full max-w-[1100px] gap-8 md:grid-cols-3 md:gap-6 lg:gap-8">
          {services.map((service) => (
            <article
              key={service.title}
              className="flex flex-col overflow-hidden rounded-2xl border border-[#e9ecef] bg-white shadow-[0_10px_30px_rgba(12,32,48,0.08)] transition-shadow hover:shadow-[0_16px_40px_rgba(12,32,48,0.12)]"
            >
              <div className="relative h-52 overflow-hidden md:h-48">
                <img
                  src={service.image}
                  alt=""
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#cfe2ff] text-[#007bff]">
                  {service.icon}
                </div>
              </div>
              <div className="flex flex-1 flex-col px-6 pb-6 pt-4">
                <h3 className="text-xl font-bold text-[#1a1d21]">
                  {service.title}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-[1.55] text-[#495057]">
                  {service.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-[0.9rem] text-[#495057]"
                    >
                      <svg className="h-5 w-5 shrink-0 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#007bff] px-4 py-3.5 text-[0.95rem] font-bold text-white transition-colors hover:bg-[#0056b3]"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Book Service Now
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-2 md:mt-10">
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dee2e6] bg-white text-[#495057] shadow-sm transition-colors hover:bg-[#f1f3f5]"
            aria-label="Previous services"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dee2e6] bg-white text-[#495057] shadow-sm transition-colors hover:bg-[#f1f3f5]"
            aria-label="Next services"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        </div>
      </div>
    </section>
  );
}
