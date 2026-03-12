const steps = [
  {
    num: '01',
    title: 'Book a Service',
    description: 'Schedule online or call us for immediate assistance',
  },
  {
    num: '02',
    title: 'Expert Assessment',
    description: 'Our technician evaluates and diagnoses the issue',
  },
  {
    num: '03',
    title: 'Transparent Quote',
    description: 'Receive upfront pricing with no hidden fees',
  },
  {
    num: '04',
    title: 'Quality Service',
    description: 'Professional work completed to your satisfaction',
  },
];

export default function ServicesProcess() {
  return (
    <section className="bg-[#f8fafd] py-16 md:py-24">
      <div className="flex w-full justify-center px-6 md:px-10 lg:px-12">
        <div className="w-full max-w-[1200px]">
        <p className="text-center text-base font-semibold text-[#6c757d] md:text-lg">
          Our Process
        </p>
        <div className="mx-auto mt-1 h-0.5 w-12 rounded-full bg-[#007bff]" />
        <h2 className="mt-6 text-center text-[clamp(1.9rem,3vw,2.75rem)] font-bold leading-tight text-[#343a40]">
          Simple & Easy Steps
        </h2>
        <p className="mx-auto mt-5 max-w-[560px] text-center text-[1rem] leading-[1.6] text-[#495057] md:text-[1.05rem]">
          Getting your AC serviced has never been easier. Follow our simple 4-step process.
        </p>

        <div className="relative mt-14 md:mt-16">
          {/* Single connecting line on desktop */}
          <div
            className="absolute left-1/2 top-8 hidden h-0.5 w-full max-w-[800px] -translate-x-1/2 bg-[#007bff] md:block"
            aria-hidden
          />
          <div className="flex flex-col items-center gap-10 md:flex-row md:justify-center md:gap-6 lg:gap-10">
            {steps.map((step) => (
              <div
                key={step.num}
                className="relative flex flex-col items-center text-center md:w-[200px] lg:w-[220px]"
              >
                <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-[#007bff] bg-[#cfe2ff] md:h-18 md:w-18">
                  <span className="text-lg font-bold text-[#0056b3] md:text-xl">
                    {step.num}
                  </span>
                </div>
                <h3 className="mt-5 text-[1.1rem] font-bold text-[#343a40] md:text-[1.15rem]">
                  {step.title}
                </h3>
                <p className="mt-2 text-[0.9rem] leading-normal text-[#495057] md:text-[0.95rem]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
