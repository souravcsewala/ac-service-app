const commitments = [
  {
    title: 'Timely Delivery',
    description: 'On-schedule project execution with meticulous planning',
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="7.5" strokeWidth="2.2" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M12 8v4.5l3 3" />
      </svg>
    ),
  },
  {
    title: 'Quick Response',
    description: 'Fast support & emergency handling when you need it most',
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M13 2L5 14h5l-1 8 8-12h-5l1-8z" />
      </svg>
    ),
  },
  {
    title: 'Long-Term Solutions',
    description: 'Reliable systems & comprehensive service planning',
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M12 3l6 2.5V11c0 4-2.56 7.38-6 8.5C8.56 18.38 6 15 6 11V5.5L12 3z" />
      </svg>
    ),
  },
  {
    title: 'Customer Satisfaction',
    description: 'Relationship-driven approach focused on your success',
    icon: (
      <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M8.5 11a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M15.5 10a3 3 0 100-6 3 3 0 000 6z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M3.5 19a5 5 0 0110 0" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M13 19a4.5 4.5 0 019 0" />
      </svg>
    ),
  },
];

export default function AboutCommitment() {
  return (
    <section className="py-20 md:py-28">
      <div className="section-shell">
        <div className="text-center">
          <div className="section-kicker justify-center">Our Commitment</div>
          <h2 className="mt-6 text-[clamp(3.1rem,6vw,5.8rem)] leading-[0.95] text-[#0d2844]">
            Our <span className="text-[#28b49b]">Operational</span> Targets
          </h2>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-2 xl:grid-cols-4">
          {commitments.map((item) => (
            <div key={item.title} className="text-center">
              <div className="mx-auto flex h-[9.5rem] w-[9.5rem] items-center justify-center rounded-full border-4 border-dashed border-[#1f7fcc] bg-white">
                <div className="flex h-[7.6rem] w-[7.6rem] items-center justify-center rounded-full bg-[#238fbd] text-white shadow-[0_12px_26px_rgba(35,143,189,0.26)]">
                  {item.icon}
                </div>
              </div>
              <h3 className="mt-8 text-[2.15rem] leading-none text-[#102d4c]">{item.title}</h3>
              <p className="mx-auto mt-6 max-w-[18rem] text-[1.02rem] leading-[1.8] text-[#39506a] md:text-[1.14rem]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
