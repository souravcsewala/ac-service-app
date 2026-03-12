import { Link } from 'react-router-dom';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Portfolio', to: '/projects' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
];

const serviceLinks = [
  { label: 'AC Repair', to: '/services' },
  { label: 'AC Installation', to: '/services' },
  { label: 'Maintenance Plans', to: '/services' },
  { label: 'Emergency Service', to: '/services' },
  { label: 'Energy Audits', to: '/services' },
];

const socials = [
  { label: 'X', href: 'https://x.com/' },
  { label: 'Instagram', href: 'https://www.instagram.com/' },
  { label: 'Facebook', href: 'https://www.facebook.com/' },
  { label: 'WhatsApp', href: 'https://www.whatsapp.com/' },
];

export default function Footer() {
  return (
    <footer className="footer-photo relative z-0" style={{ borderTop: 'none' }}>
      <img
        src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1800&q=80"
        alt="Technician background"
        className="absolute inset-0 h-full w-full object-cover pointer-events-none"
      />

      <div className="section-shell relative z-10 py-10 md:py-14">
        <div className="flex flex-wrap items-center gap-4 border-b border-white/16 pb-6">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/22 bg-white/10 text-sm font-extrabold uppercase tracking-[0.14em] transition-colors hover:bg-[#117ca1]"
            >
              {social.label.slice(0, 1)}
            </a>
          ))}

          <div className="ml-auto hidden flex-wrap items-center gap-6 text-sm text-white/78 lg:flex">
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
              <span>Kolkata, West Bengal</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <span>essgeeenterprise1@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              <span>+91 98317 31800</span>
            </div>
          </div>
        </div>

        <div className="grid gap-10 py-10 lg:grid-cols-[1.1fr_0.8fr_0.8fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#117ca1,#9dc63b)] text-xl font-black text-white">
                E
              </div>
              <div>
                <div className="text-[1.7rem] leading-none">ESSGEE</div>
                <div className="text-[0.72rem] font-extrabold uppercase tracking-[0.26em] text-[#9dc63b]">Enterprise</div>
              </div>
            </div>

            <p className="mt-3 text-sm font-medium text-white/90">Ultimate HVAC Solution Providing Company</p>
            <p className="mt-6 max-w-xs text-sm leading-7 text-white/72">
              Your trusted partner for all AC repair, installation, and maintenance needs. Serving the community for over 15 years.
            </p>

            <Link to="/contact" className="ghost-btn mt-7">
              Get a solution
            </Link>
          </div>

          <div>
            <h3 className="text-[2rem] leading-none border-b border-white/20 pb-2">Quick Links</h3>
            <div className="mt-6 flex flex-col gap-4 text-sm font-semibold text-white/90">
              {quickLinks.map((item) => (
                <Link key={item.to} to={item.to} className="flex items-center gap-2 py-1 transition-colors hover:text-[#9dc63b]">
                  <svg className="h-4 w-4 shrink-0 text-white/60" fill="currentColor" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" /></svg>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-[2rem] leading-none border-b border-white/20 pb-2">Our Services</h3>
            <div className="mt-6 flex flex-col gap-4 text-sm font-semibold text-white/90">
              {serviceLinks.map((item) => (
                <Link key={`${item.label}-${item.to}`} to={item.to} className="flex items-center gap-2 py-1 transition-colors hover:text-[#9dc63b]">
                  <svg className="h-4 w-4 shrink-0 text-white/60" fill="currentColor" viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" /></svg>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="min-w-0">
            <h3 className="text-[2rem] leading-none">Newsletter</h3>
            <p className="mt-5 max-w-[280px] text-sm leading-relaxed text-white/72">
              Sign up to receive updates, latest blogs, exclusive offers, and useful insights from us.
            </p>
            <form onSubmit={(event) => event.preventDefault()} className="mt-6 w-full max-w-[280px] space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full min-h-[44px] rounded-[0.9rem] border border-white/24 bg-white/10 px-4 py-3.5 text-sm text-white placeholder:text-white/48 outline-none transition focus:border-white/40"
              />
              <button type="submit" className="primary-btn w-full">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/14 pt-5 text-center text-sm font-semibold text-white/72">
          © 2026 ESSGEE Enterprise | All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
