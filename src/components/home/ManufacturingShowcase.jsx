import { Link } from 'react-router-dom';

const manufacturingPoints = [
  'Advanced Manufacturing Facility',
  'ISO 9001:2015 certified processes',
  'Rigorous quality control & testing',
  'Custom AC solutions available',
  'Energy Star rated products',
  '5-year comprehensive warranty',
];

export default function ManufacturingShowcase() {
  return (
    <section className="py-28 md:py-36">
      <div className="section-shell">
        <div className="grid overflow-hidden rounded-[2rem] border border-[#117ca1]/20 bg-[#f4f8fa] shadow-[0_24px_60px_rgba(12,32,48,0.12)] lg:grid-cols-[1fr_1.05fr]">
          <div className="relative min-h-[320px] p-5 lg:min-h-[540px]">
            <img
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1400&q=80"
              alt="Technicians on an AC manufacturing line"
              className="h-[320px] w-full rounded-[1.6rem] object-cover shadow-[0_18px_42px_rgba(12,32,48,0.12)] lg:h-full lg:min-h-[500px]"
            />
            <div className="absolute bottom-8 left-8 flex items-center gap-3 rounded-xl border border-[#117ca1]/20 bg-[#dff0f4] px-5 py-4 shadow-lg">
              <svg className="h-8 w-8 shrink-0 text-[#117ca1]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              <div>
                <div className="text-3xl font-extrabold leading-none text-[#0d2844]">50,000+</div>
                <div className="mt-1 text-sm font-semibold text-[#5e6d7b]">Units Manufactured</div>
              </div>
            </div>
          </div>

          <div className="p-8 md:p-12 lg:p-14">
            <div className="section-kicker mb-5">Manufacturing Excellence</div>
            <h2 className="section-title max-w-xl">
              In-House AC Manufacturing for Unmatched Quality
            </h2>
            <p className="section-lead mt-6 max-w-xl">
              Our state-of-the-art manufacturing facility produces high-quality air conditioning units using advanced technology and sustainable practices. Every unit undergoes rigorous testing to ensure peak performance and durability.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {manufacturingPoints.map((point) => (
                <div key={point} className="flex items-start gap-3 rounded-[1rem] bg-white/75 px-4 py-5">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#9dc63b]/60 bg-[#9dc63b]/10 text-[#6a8722]">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm font-semibold text-[#223448]">{point}</span>
                </div>
              ))}
            </div>

            <Link to="/manufacturing" className="primary-btn mt-12">
              Explore Manufacturing
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
