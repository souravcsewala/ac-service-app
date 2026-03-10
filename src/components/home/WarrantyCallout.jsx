const steps = [
  'Request to call of master',
  'Date and time assignment',
  'Repair and maintenance at your home',
];

export default function WarrantyCallout() {
  return (
    <section className="py-28 md:py-36">
      <div className="section-shell">
        <div className="grid items-center gap-10 rounded-[2rem] bg-[#f3f6f8] p-8 shadow-[0_22px_60px_rgba(12,32,48,0.1)] md:p-10 lg:grid-cols-[1.1fr_0.9fr] lg:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="section-kicker mb-5">Technical Support</div>
              <h2 className="section-title max-w-md">
                Warranty repair and service for 5 years
              </h2>
              <p className="section-lead mt-6 max-w-md">
                Trained engineers handle planned service, urgent fixes, and maintenance with clear scheduling.
              </p>

              <div className="mt-10 space-y-4">
                {steps.map((step, index) => (
                  <div key={step} className="flex items-center gap-3 text-sm font-semibold text-[#223448]">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#117ca1] bg-transparent text-sm font-bold text-[#117ca1]">{String(index + 1).padStart(2, '0')}</span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[360px]">
              <img
                src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=900&q=80"
                alt="HVAC technician holding service tools"
                className="h-[420px] w-full rounded-[1.8rem] object-cover"
              />
            </div>
          </div>

          <div className="surface-panel rounded-[1.8rem] p-8 md:p-10">
            <div className="text-center">
              <h3 className="text-[2.2rem] leading-none text-[#117ca1]">Book a free visit of our professional engineer</h3>
              <p className="mt-4 text-sm text-[#5e6d7b]">We’ll review your issue and prepare the right fix plan.</p>
            </div>

            <form onSubmit={(event) => event.preventDefault()} className="mt-10 space-y-6">
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-[#223448]">Your name</span>
                <input type="text" className="w-full border-b border-[#8ea1ae] bg-transparent px-0 py-3 outline-none" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-[#223448]">Phone number</span>
                <input type="tel" className="w-full border-b border-[#8ea1ae] bg-transparent px-0 py-3 outline-none" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-[#223448]">Email</span>
                <input type="email" className="w-full border-b border-[#8ea1ae] bg-transparent px-0 py-3 outline-none" />
              </label>
              <button type="submit" className="primary-btn mt-6 w-full">
                Send Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
