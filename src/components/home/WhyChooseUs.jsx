const reasons = [
  {
    title: 'Certified Experts',
    desc: 'EPA and NATE certified technicians with years of experience.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  },
  {
    title: 'Fast Response',
    desc: 'Same-day service available with quick response times.',
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    title: 'Transparent Pricing',
    desc: 'Upfront pricing with no hidden fees or surprise charges.',
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  },
  {
    title: 'Customer Focused',
    desc: '100% satisfaction guarantee on all our services.',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-28 md:py-36">
      <div className="section-shell grid items-center gap-10 lg:grid-cols-[0.94fr_1.06fr]">
        <div className="surface-panel rounded-[2rem] p-8 md:p-12">
          <div className="section-kicker mb-5">Why Choose Us</div>
          <h2 className="section-title">Your trusted AC service partner</h2>
          <p className="section-lead mt-6 max-w-xl">
            With over 15 years of experience in the HVAC industry, we've built our reputation on quality workmanship, honest service, and customer satisfaction. Our team is committed to keeping your home or business comfortable year-round.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div key={reason.title} className="rounded-[1.2rem] bg-white/82 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-[1rem] bg-[#117ca1]/10 text-[#117ca1]">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={reason.icon} />
                  </svg>
                </div>
                <h3 className="mt-5 text-[2rem] leading-none text-[#0d2844]">{reason.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#5e6d7b]">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-[#117ca1]/18 shadow-[0_22px_60px_rgba(12,32,48,0.12)]">
          <img
            src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1400&q=80"
            alt="Technician servicing an outdoor cooling unit"
            className="h-[480px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071b29]/10 to-transparent" />
          <div className="absolute inset-y-0 left-0 flex items-center">
            <div className="h-[88%] w-12 rounded-r-full border-r-4 border-[#9dc63b] bg-[#9dc63b]/24" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <button type="button" className="flex h-20 w-20 items-center justify-center rounded-full bg-[#ffe600] text-[#0d2844] shadow-[0_18px_30px_rgba(255,230,0,0.28)]">
              <svg className="ml-1 h-8 w-8 fill-current" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
