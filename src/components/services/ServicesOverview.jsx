import overviewImage from '../../assets/service/service overview.png';

const stats = [
  { value: '10,000+', label: 'Projects Completed' },
  { value: '98%', label: 'Customer Satisfaction' },
  { value: '24/7', label: 'Emergency Support' },
  { value: '50+', label: 'Expert Technicians' },
];

export default function ServicesOverview() {
  return (
    <section className="bg-[#f8fafd] py-20 md:py-24">
      <div className="flex w-full justify-center px-6 md:px-10 lg:px-12">
        <div className="w-full max-w-[1200px]">
          <div className="grid items-center justify-items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div className="w-full max-w-[580px] text-center">
            <p className="text-base font-semibold uppercase tracking-wide text-[#0d9bb5] md:text-lg">
              Overview
            </p>
            <div className="mx-auto mt-1 h-0.5 w-16 rounded-full bg-[#0d9bb5]" />

            <h2 className="mt-8 text-[clamp(2.2rem,3.8vw,3.6rem)] font-bold leading-[1.15]">
              <span className="text-[#1a1d21]">Your Trusted </span>
              <span className="text-[#0d9bb5]">HVAC Service Partner</span>
            </h2>

            <p className="mx-auto mt-6 max-w-[520px] text-[1.05rem] leading-[1.75] text-[#495057] md:text-[1.1rem]">
              Delivering reliable HVAC services with certified experts, modern technology, and a commitment to long-term performance.
            </p>

            <div className="mx-auto mt-10 grid max-w-[480px] gap-4 sm:grid-cols-2">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="relative flex min-h-[128px] flex-col justify-center overflow-hidden rounded-2xl border border-[#e9ecef] bg-white px-6 py-5 shadow-sm"
                >
                  <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-[#0d9bb5] to-white/80" />
                  <div className="text-[clamp(2rem,2.8vw,2.75rem)] font-black leading-none text-[#1a1d21]">
                    {item.value}
                  </div>
                  <div className="mt-2 text-[0.95rem] font-medium leading-snug text-[#495057] md:text-base">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex w-full justify-center">
            <div className="relative w-full max-w-[520px] overflow-hidden rounded-2xl shadow-[0_24px_48px_rgba(12,32,48,0.12)]">
              <div
                className="relative min-h-[380px] md:min-h-[480px]"
                style={{
                  clipPath:
                    'polygon(0 20%, 15% 0, 100% 0, 100% 85%, 85% 100%, 50% 100%, 25% 95%, 5% 80%)',
                }}
              >
                <img
                  src={overviewImage}
                  alt="HVAC technician holding a clipboard in a service area"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
