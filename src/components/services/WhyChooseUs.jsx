import overviewImage from '../../assets/service/service overview.png';

const features = [
  {
    title: 'Certified Experts',
    description: 'EPA and NATE certified technicians with years of experience',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Fast Response',
    description: 'Same-day service available with quick response times',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Transparent Pricing',
    description: 'Upfront pricing with no hidden fees or surprise charges',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Customer Focused',
    description: '100% satisfaction guarantee on all our services',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[#f1f3f5] py-16 md:py-24">
      <div className="flex w-full justify-center px-6 md:px-10 lg:px-12">
        <div className="w-full max-w-[1200px]">
          <div className="grid items-center justify-items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div className="w-full max-w-[560px] text-center">
            <h2 className="text-[clamp(1.9rem,3vw,2.75rem)] font-bold leading-tight">
              <span className="text-[#1a1d21]">Why </span>
              <span className="text-[#0d9bb5] underline decoration-[#0d9bb5] decoration-2 underline-offset-2">
                Choose Us
              </span>
            </h2>
            <p className="mt-3 text-[1.1rem] font-semibold text-[#1a1d21]">
              Your Trusted AC Service Partner
            </p>
            <p className="mx-auto mt-5 max-w-[480px] text-[0.98rem] leading-[1.7] text-[#495057]">
              With over 15 years of experience in the HVAC industry, we&apos;ve built our reputation on quality
              workmanship, honest service, and customer satisfaction. Our team is committed to keeping your
              home or business comfortable year-round.
            </p>
            <div className="mx-auto mt-8 grid max-w-[480px] gap-5 sm:grid-cols-2 sm:justify-items-center">
              {features.map((item) => (
                <div key={item.title} className="flex max-w-[240px] gap-4 text-left sm:max-w-none">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border-2 border-[#0d9bb5]/40 bg-[#e6f7fa] text-[#0d9bb5]">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1a1d21]">{item.title}</h3>
                    <p className="mt-0.5 text-[0.9rem] leading-normal text-[#495057]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex w-full justify-center">
            {/* Green wavy graphic between content and image - does not overlap image */}
            <div className="absolute -left-2 top-1/2 z-10 hidden h-3/4 w-12 -translate-y-1/2 lg:block" aria-hidden>
              <svg
                className="h-full w-full text-accent"
                viewBox="0 0 48 200"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 0 Q 30 40 0 80 Q 28 120 0 160 Q 30 200 0 200"
                  stroke="currentColor"
                  strokeWidth="10"
                  fill="none"
                />
                <path
                  d="M16 0 Q 40 50 16 100 Q 38 150 16 200"
                  stroke="currentColor"
                  strokeWidth="6"
                  strokeOpacity="0.5"
                  fill="none"
                />
              </svg>
            </div>
            <div className="relative w-full max-w-[520px] overflow-hidden rounded-2xl shadow-xl lg:ml-2">
              <div className="relative aspect-4/3 md:aspect-3/2">
                <img
                  src={overviewImage}
                  alt="HVAC technician servicing an outdoor AC unit"
                  className="h-full w-full object-cover"
                />
                <button
                  type="button"
                  className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#f5c518] shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#f5c518]/50"
                  aria-label="Play video"
                >
                  <svg
                    className="ml-1 h-10 w-10 text-[#1a1d21]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
