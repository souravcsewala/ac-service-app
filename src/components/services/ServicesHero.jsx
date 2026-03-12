import { Link } from 'react-router-dom';
import heroImage from '../../assets/service/herosection.png';

export default function ServicesHero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="HVAC technician servicing an air conditioning unit"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,29,43,0.52),rgba(11,29,43,0.38))]" />
        <div className="absolute inset-0 bg-[rgba(10,27,40,0.22)]" />
      </div>

      <div className="relative flex min-h-[calc(100vh-132px)] items-center justify-center px-6 py-24 md:px-10 lg:px-16">
        <div className="mx-auto flex w-full max-w-[980px] flex-col items-center justify-center gap-y-9 text-center md:gap-y-16 lg:gap-y-8">
          <h1 className="mx-auto max-w-[860px] text-balance text-[clamp(2.5rem,5vw,4.2rem)] leading-[1.1] font-extrabold text-white drop-shadow-[0_6px_24px_rgba(0,0,0,0.28)]">
            Complete HVAC Service Solutions
          </h1>

          <p className="mx-auto max-w-[720px] text-balance text-[clamp(1rem,1.8vw,1.35rem)] leading-[1.9] font-medium text-white/92">
            From installation to maintenance, we deliver end-to-end HVAC services for reliable, long-term performance.
          </p>

          <div className="flex w-full flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6 sm:justify-center">
            <Link
              to="/contact"
              className="inline-flex w-full max-w-[240px] shrink-0 items-center justify-center gap-2.5 rounded-xl bg-[#0d9bb5] px-6 py-3.5 text-[1.05rem] font-bold text-white shadow-lg transition-all duration-200 hover:bg-[#0b8a9f] hover:-translate-y-0.5 md:text-[1.1rem]"
            >
              <span>Book a Service</span>
              <svg className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M5 12h14m-5-5 5 5-5 5" />
              </svg>
            </Link>

            <a
              href="tel:+919831731800"
              className="inline-flex w-full max-w-[240px] shrink-0 items-center justify-center gap-2.5 rounded-xl border-2 border-white/90 bg-transparent px-6 py-3.5 text-[1.05rem] font-bold text-white/95 transition-all duration-200 hover:bg-white/10 hover:-translate-y-0.5 md:text-[1.1rem]"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.1}
                  d="M3 5a2 2 0 0 1 2-2h3.1a1 1 0 0 1 .95.68l1.45 4.35a1 1 0 0 1-.47 1.2l-2.07 1.04a11 11 0 0 0 5.4 5.4l1.04-2.07a1 1 0 0 1 1.2-.47l4.35 1.45A1 1 0 0 1 21 15.9V19a2 2 0 0 1-2 2h-1C9.72 21 3 14.28 3 6V5Z"
                />
              </svg>
              <span>Get Free Quote</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
