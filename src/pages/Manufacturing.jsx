const points = [
  'Custom AC design for commercial and industrial sites',
  'Rigorous assembly and performance testing workflows',
  'Energy efficient product lines with service support',
  'Certified processes aligned with large deployment needs',
];

export default function Manufacturing() {
  return (
    <div className="page-shell py-24">
      <section className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="media-frame min-h-[420px]">
            <img
              src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1400&q=80"
              alt="Manufacturing line for cooling equipment"
              className="media-cover"
            />
          </div>

          <div className="surface-panel rounded-[2rem] p-8 md:p-10">
            <div className="section-kicker mb-4">Manufacturing</div>
            <h1 className="section-title max-w-xl">
              In-house AC manufacturing built for quality control and scale.
            </h1>
            <p className="section-lead mt-5">
              This route supports the new navigation and CTA blocks. It can expand into a full manufacturing page without changing the routing again.
            </p>

            <div className="mt-8 grid gap-4">
              {points.map((point) => (
                <div key={point} className="flex items-start gap-3 rounded-2xl bg-white/80 px-4 py-4">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#117ca1]/10 text-[#117ca1]">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm font-semibold text-[#223448]">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
