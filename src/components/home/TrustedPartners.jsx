const partners = ['Mitsubishi', 'HSBC', 'HDFC Bank', 'City Multi', 'VRF Systems', 'Bluestar'];

export default function TrustedPartners() {
  return (
    <section className="py-28 md:py-36">
      <div className="section-shell">
        <div className="relative overflow-hidden rounded-[2rem] border border-[#117ca1]/18 px-6 py-12 shadow-[0_20px_54px_rgba(12,32,48,0.12)] md:px-10 md:py-14">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=80"
              alt="Office interior background"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-white/78" />
          </div>

          <div className="relative">
            <div className="text-center">
              <div className="section-kicker justify-center">Our Trusted Partners</div>
              <h2 className="section-title mt-6">
                We are proud to work with leading organizations and brands across India
              </h2>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
              {partners.map((partner) => (
                <div key={partner} className="brand-logo-tile">
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
