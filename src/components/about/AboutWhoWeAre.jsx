const cards = [
  {
    title: 'ISO 9001:',
    subtitle: '2015 Certified',
    icon: (
      <svg className="h-9 w-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 3l2.7 1.35 3 .44.44 3L19.5 10.5 18.14 13l-.44 3-3 .44L12 18l-2.7-1.56-3-.44-.44-3L4.5 10.5l1.36-2.71.44-3 3-.44L12 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.25 12.25l1.6 1.6 3.9-4.1" />
      </svg>
    ),
  },
  {
    title: 'ISHRAE Compliant',
    subtitle: 'Practices',
    icon: (
      <svg className="h-9 w-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 3l6 2.5V11c0 4-2.56 7.38-6 8.5C8.56 18.38 6 15 6 11V5.5L12 3z" />
      </svg>
    ),
  },
  {
    title: 'Skilled & Trained',
    subtitle: 'Technicians',
    icon: (
      <svg className="h-9 w-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 12a4 4 0 100-8 4 4 0 000 8z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4.5 20a7.5 7.5 0 0115 0" />
      </svg>
    ),
  },
  {
    title: 'Proven Industry',
    subtitle: 'Experience',
    icon: (
      <svg className="h-9 w-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7.5V6a4 4 0 018 0v1.5" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6.5 8.5h11A1.5 1.5 0 0119 10v8a2 2 0 01-2 2H7a2 2 0 01-2-2v-8a1.5 1.5 0 011.5-1.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6" />
      </svg>
    ),
  },
];

export default function AboutWhoWeAre() {
  return (
    <section className="py-20 md:py-28">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.95fr] lg:items-start">
          <div className="max-w-4xl">
            <div className="section-kicker">Who We Are</div>
            <h2 className="mt-4 text-[clamp(3rem,5vw,5rem)] leading-[0.96] text-[#0d2844]">
              Complete <span className="text-[#28b49b]">HVAC</span> Solutions
            </h2>

            <div className="mt-10 space-y-5 text-[1.02rem] leading-[1.95] text-[#39506a] md:text-[1.16rem]">
              <p>
                ESSGEE Enterprise is a trusted HVAC solutions provider
                specializing in air conditioning and ventilation systems for
                residential, commercial, and industrial applications. Known for
                our technical expertise and customer-centric approach, we deliver
                efficient, reliable, and compliant HVAC solutions tailored to
                real-world requirements.
              </p>
              <p>
                As an <strong className="font-extrabold text-[#233b58]">ISO 9001:2015 certified company</strong>, we strictly
                follow ISHRAE guidelines and industry best practices, ensuring
                every project meets the highest standards of quality, safety,
                and performance. Our strength lies in seamless execution,
                transparent communication, and long-term service commitment.
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {cards.map((card) => (
              <div
                key={`${card.title}-${card.subtitle}`}
                className="rounded-[1.9rem] bg-[#d9edf3] px-6 py-9 text-center shadow-[0_10px_22px_rgba(12,32,48,0.14)]"
              >
                <div className="mx-auto flex h-[4.25rem] w-[4.25rem] items-center justify-center rounded-full bg-[#238fbd] text-white">
                  {card.icon}
                </div>
                <div className="mt-8 text-[1.1rem] font-black leading-[1.7] text-black md:text-[1.28rem]">
                  <div>{card.title}</div>
                  <div>{card.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
