import { useState } from 'react';

const testimonials = [
  {
    name: 'Nandini Sharma',
    role: 'Corporate Office, Mumbai',
    quote: 'Their AMC service is reliable, with timely maintenance and prompt support keeping our HVAC systems running smoothly year-round.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80',
  },
  {
    name: 'Rohan Mehta',
    role: 'Retail Operations, Kolkata',
    quote: 'The team handled multi-site service scheduling without delays and gave us a cleaner reporting process than our previous vendor.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
  },
  {
    name: 'Sarah Johnson',
    role: 'Property Manager, Bengaluru',
    quote: 'Response time and communication were the difference. Their engineers arrived prepared and resolved issues without repeat visits.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80',
  },
  {
    name: 'Michael Chen',
    role: 'Manufacturing Unit, Pune',
    quote: 'We use them for service and equipment support. The delivery is professional and the maintenance planning is straightforward.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80',
  },
];

const markers = [
  { top: '18%', left: '82%', label: 'North Bergen' },
  { top: '34%', left: '63%', label: 'Union City' },
  { top: '47%', left: '54%', label: 'Newark' },
  { top: '58%', left: '34%', label: 'Summit' },
  { top: '72%', left: '78%', label: 'Downtown' },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = testimonials[activeIndex];

  return (
    <section className="py-28 md:py-36">
      <div className="section-shell grid items-center gap-10 lg:grid-cols-[0.86fr_1.14fr]">
        <div className="surface-panel rounded-[2rem] p-8 md:p-12">
          <div className="section-kicker mb-5">
            <span className="text-[#0d2844]">What </span>
            <span className="text-[#117ca1]">Our Clients</span>
            <span className="text-[#0d2844]"> Say</span>
          </div>
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <img src={active.image} alt={active.name} className="h-20 w-20 shrink-0 rounded-full object-cover shadow-[0_14px_30px_rgba(12,32,48,0.16)]" />
            <div>
              <h2 className="text-[2.6rem] leading-none text-[#0d2844]">{active.name}</h2>
              <div className="mt-3 text-sm font-semibold uppercase tracking-[0.14em] text-[#117ca1]">{active.role}</div>
              <div className="mt-4 flex gap-1 text-[#f3b544]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <svg key={index} className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-10 text-base leading-8 text-[#5e6d7b]">{active.quote}</p>

          <div className="mt-10 flex gap-4">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.name}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-3 w-3 rounded-full transition-all ${index === activeIndex ? 'bg-[#117ca1] shadow-[0_0_0_6px_rgba(17,124,161,0.15)]' : 'bg-[#b3c2cc]'}`}
                aria-label={`Show testimonial from ${testimonial.name}`}
              />
            ))}
          </div>
        </div>

        <div className="map-surface relative overflow-hidden rounded-[2rem] border border-[#117ca1]/18 p-8 shadow-[0_22px_58px_rgba(12,32,48,0.12)]">
          <div
            className="absolute inset-0 bg-[linear-gradient(rgba(17,124,161,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(17,124,161,0.1)_1px,transparent_1px)]"
            style={{ backgroundSize: '52px 52px' }}
          />
          <div className="absolute inset-y-[14%] left-[22%] w-[9%] rounded-full bg-[#117ca1]/22 blur-xl" />
          <div className="absolute inset-y-[38%] left-[48%] w-[16%] rounded-full bg-[#117ca1]/18 blur-xl" />
          <div className="absolute inset-y-[62%] left-[70%] w-[10%] rounded-full bg-[#117ca1]/20 blur-xl" />

          {markers.map((marker) => (
            <div key={marker.label} className="absolute" style={{ top: marker.top, left: marker.left }}>
              <div className="relative">
                <div className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#117ca1]/18 blur-md" />
                <div className="flex h-11 w-11 items-center justify-center rounded-full border-4 border-white bg-[#0d2844] text-white shadow-[0_14px_28px_rgba(12,32,48,0.16)]">
                  <img src={active.image} alt="" className="h-full w-full rounded-full object-cover" />
                </div>
                <div className="absolute left-1/2 top-12 -translate-x-1/2 rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-[#223448] shadow-[0_10px_22px_rgba(12,32,48,0.12)]">
                  {marker.label}
                </div>
              </div>
            </div>
          ))}

          <div className="relative h-[420px]" />
        </div>
      </div>
    </section>
  );
}
