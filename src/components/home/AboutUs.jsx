import { Link } from 'react-router-dom';

const points = [
  'AC Installation & Setup',
  'Preventive Maintenance',
  'Energy Efficiency Consulting',
  'Emergency Repair Services',
];

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '500+', label: 'Happy Clients' },
  { value: '24/7', label: 'Support' },
];

export default function AboutUs() {
  return (
    <section className="py-28 md:py-36">
      <div className="section-shell grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative">
          <div className="media-frame h-[420px] md:h-[560px]">
            <img
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80"
              alt="Technician servicing an air conditioning unit"
              className="media-cover"
            />
          </div>
          <div className="absolute bottom-6 right-6 rounded-xl border-2 border-[#117ca1]/30 bg-[#dff0f4] px-5 py-4 shadow-lg">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#117ca1]/15 text-[#117ca1]">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </span>
              <div>
                <div className="text-2xl font-extrabold leading-none text-[#0d2844]">5000+</div>
                <div className="mt-1 text-xs font-bold uppercase tracking-wider text-[#5e6d7b]">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>

        <div className="surface-panel rounded-[2rem] p-8 md:p-12">
          <div className="section-kicker mb-4">About Us</div>
          <h2 className="section-title">Complete HVAC solutions</h2>
          <p className="section-lead mt-6 max-w-2xl">
            At Essgee Enterprise, we provide comprehensive air conditioning and HVAC services across India. From installation to maintenance, our expert team ensures your spaces remain perfectly climate-controlled throughout the year.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {['What We Do', 'Our Mission', 'Our Vision'].map((label, index) => (
              <div
                key={label}
                className={`rounded-[0.9rem] border px-4 py-3 text-sm font-extrabold uppercase tracking-[0.12em] ${
                  index === 0 ? 'border-[#117ca1] bg-[#117ca1] text-white' : 'border-[#117ca1]/30 bg-white/70 text-[#117ca1]'
                }`}
              >
                {label}
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {points.map((point) => (
              <div key={point} className="flex items-center gap-3 rounded-[1rem] bg-white/80 px-4 py-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#117ca1]/10 text-[#117ca1]">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-sm font-semibold text-[#223448]">{point}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card px-5 py-6 text-center">
                <div className="text-4xl leading-none text-[#0d2844]">{stat.value}</div>
                <div className="mt-3 text-xs font-extrabold uppercase tracking-[0.18em] text-[#117ca1]">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2">
              {['A', 'B', 'C', 'D'].map((initial, index) => (
                <div
                  key={initial}
                  className={`flex h-11 w-11 items-center justify-center rounded-full border-2 border-white text-sm font-extrabold text-white ${index % 2 === 0 ? 'bg-[#117ca1]' : 'bg-[#9dc63b]'}`}
                >
                  {initial}
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-[#f3b544]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <svg key={index} className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <div className="mt-1 text-sm font-semibold text-[#5e6d7b]">4.9/5 from 2.5k+ verified reviews</div>
            </div>
          </div>

          <Link to="/about" className="primary-btn mt-12">
            Learn More About Us
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
