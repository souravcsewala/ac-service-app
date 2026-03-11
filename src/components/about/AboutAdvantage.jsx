const advantages = [
  'Experienced HVAC professionals with decades of expertise',
  'Compliance with industry standards',
  'Trusted OEM partnerships',
  '24/7 Preventive & Emergency HVAC Support Services',
  'Certified Compliance with Industry Safety Standards',
];

export default function AboutAdvantage() {
  return (
    <section className="py-20 md:py-28">
      <div className="section-shell">
        <div className="text-center">
          <div className="section-kicker justify-center">Our Advantage</div>
          <h2 className="mx-auto mt-6 max-w-[14ch] text-[clamp(2.8rem,5vw,4.9rem)] leading-[0.98] text-[#0d2844]">
            Why <span className="text-[#28b49b]">ESSGEE</span> Enterprise?
          </h2>
        </div>

        <div className="mt-16 grid gap-8 xl:grid-cols-[0.82fr_1.18fr] xl:items-start">
          <div className="space-y-5">
            {advantages.map((item) => (
              <div
                key={item}
                className="flex min-h-[5.2rem] items-center gap-5 border border-[#cfe0e7] bg-[#d9edf3] px-6 py-5 shadow-[0_6px_14px_rgba(175,198,122,0.28)]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[#39b54a] text-[#39b54a]">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M5 12l4 4L19 7" />
                  </svg>
                </span>
                <p className="text-left text-[1.02rem] font-extrabold leading-[1.4] text-[#30486b] md:text-[1.14rem]">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="flex min-h-[420px] items-center justify-center bg-[linear-gradient(90deg,#177ea8,#2d9cca)] px-8 py-12 text-center text-white md:px-12 xl:min-h-[100%]">
            <div className="max-w-3xl">
              <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-white text-[#0f759f]">
                <svg className="h-14 w-14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.9} d="M12 3l4.5 2.2V10c0 3.4-1.94 6.4-4.5 7.8C9.44 16.4 7.5 13.4 7.5 10V5.2L12 3z" />
                  <circle cx="12" cy="10" r="2.8" strokeWidth={1.9} />
                </svg>
              </div>

              <h3 className="mt-10 text-[clamp(2.3rem,3.4vw,3.8rem)] leading-[1.02] text-white">
                ISO 9001:2015 Certified
              </h3>
              <p className="mx-auto mt-8 max-w-[34rem] text-[1.05rem] leading-[1.85] text-white/92 md:text-[1.2rem]">
                Our processes are audited and aligned with international quality
                management standards to ensure consistency, reliability, and
                continual improvement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
