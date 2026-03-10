import { useState } from 'react';

const faqs = [
  {
    question: 'What types of HVAC services do you offer?',
    answer: 'We handle split AC installation, repair, gas refill, preventive maintenance, VRF systems, ducted systems, and commercial HVAC support.',
  },
  {
    question: 'Do you offer emergency repair services?',
    answer: 'Yes. Our service team handles emergency callouts for urgent cooling failures and critical maintenance cases.',
  },
  {
    question: 'How can I request a quote for a new installation?',
    answer: 'Use the contact form, call us directly, or request a site visit. We review space requirements and provide a clear scope with pricing.',
  },
  {
    question: 'What is a VRF system and is it suitable for my building?',
    answer: 'VRF systems use variable refrigerant flow for zoned cooling and heating. They fit offices, hotels, and multi-room buildings that need precise control.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const experiencePoints = ['Certified AC Experts', '24/7 Support'];

  return (
    <section className="py-28 md:py-36">
      <div className="section-shell grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative">
          <div className="media-frame h-[520px]">
            <img
              src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80"
              alt="Technician working on a wall mounted AC unit"
              className="media-cover"
            />
          </div>
          <div className="absolute bottom-6 left-6 right-6 rounded-2xl border-2 border-[#9dc63b]/60 bg-white/95 p-5 shadow-lg">
            <div className="text-2xl font-extrabold leading-tight text-[#0d2844]">10+ Years Experience</div>
            <div className="mt-3 space-y-2">
              {experiencePoints.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#9dc63b]/20 text-[#6a8722]">
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <span className="text-sm font-semibold text-[#223448]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="surface-panel rounded-[2rem] p-8 md:p-12">
          <h2 className="section-title">
            <span className="text-[#0d2844]">Frequently </span>
            <span className="text-[#117ca1]">Asked Questions</span>
            <span className="text-[#0d2844]"> (FAQ)</span>
          </h2>
          <p className="section-lead mt-6 max-w-xl">
            Find answers to common questions about our HVAC services and solutions.
          </p>

          <div className="mt-10 space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={faq.question} className="faq-item overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-6 text-left"
                  >
                    <span className="text-lg font-semibold text-[#223448]">{faq.question}</span>
                    <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${isOpen ? 'bg-[#117ca1] text-white' : 'bg-[#e5edf1] text-[#117ca1]'}`}>
                      <svg className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                  {isOpen && <p className="px-5 pb-6 text-sm leading-7 text-[#5e6d7b]">{faq.answer}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
