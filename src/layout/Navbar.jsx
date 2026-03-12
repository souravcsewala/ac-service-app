import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Portfolio', path: '/projects' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
  { label: 'Manufacturing', path: '/manufacturing' },
];

const topItems = [
  { label: 'Kolkata, West Bengal', icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z' },
  { label: '+91 98317 31800', icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' },
  { label: 'essgeeenterprise1@gmail.com', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      <div className="relative flex min-h-12 items-stretch overflow-hidden">
        <div className="flex flex-1 items-center bg-[#9dc63b] text-white">
          <div className="section-shell flex min-h-12 flex-1 items-center gap-4 py-3.5 text-sm font-extrabold uppercase tracking-[0.16em]">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/20">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" />
              </svg>
            </span>
            We do not charge any extra fees
          </div>
        </div>
        <div
          className="hidden lg:flex items-center justify-end bg-white pl-14 pr-8 gap-8 min-h-12"
          style={{ clipPath: 'polygon(8% 0, 100% 0, 100% 100%, 0 100%)', marginLeft: '-2%' }}
        >
          {topItems.map((item, index) => (
            <div key={item.label} className="flex items-center gap-2 leading-none">
              {index > 0 && <span className="h-4 w-px bg-gray-300 shrink-0" aria-hidden />}
              <svg className="h-4 w-4 shrink-0 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
              </svg>
              <span className="text-sm font-semibold text-gray-600 whitespace-nowrap align-middle">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={`border-b border-[#117ca1]/12 bg-white backdrop-blur-sm transition-shadow ${scrolled ? 'shadow-[0_18px_32px_rgba(12,32,48,0.12)]' : ''}`}>
        <div className="section-shell flex min-h-[84px] items-center justify-between gap-4 py-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#117ca1,#9dc63b)] text-white shadow-[0_14px_26px_rgba(17,124,161,0.2)]">
              <span className="text-xl font-black">E</span>
            </div>
            <div>
              <div className="text-[1.65rem] leading-none text-[#0d2844]">ESSGEE</div>
              <div className="text-[0.72rem] font-extrabold uppercase tracking-[0.26em] text-[#117ca1]">Enterprise</div>
              <div className="text-[0.6rem] font-semibold text-[#5e6d7b] mt-0.5">Ultimate HVAC Solutions Providing Company</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `relative rounded-[0.9rem] px-4 py-3 text-sm font-extrabold uppercase tracking-[0.08em] transition-colors ${
                    isActive ? 'text-[#117ca1]' : 'text-[#223448] hover:text-[#117ca1]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#117ca1] rounded-full" />}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* ── Desktop CTAs: Login + Buy Product (commented out) ── */}
          {/* <div className="hidden items-center gap-2 lg:flex">
            <Link
              to="/login"
              className="secondary-btn"
              style={{ fontSize: '0.9rem', padding: '0.65rem 1.3rem' }}
            >
              Login
            </Link>
            <Link
              to="/products"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: '#006E97',
                color: '#fff',
                fontWeight: 800,
                fontSize: '0.88rem',
                padding: '0.65rem 1.3rem',
                borderRadius: '0.8rem',
                letterSpacing: '0.02em',
                transition: 'background 0.2s',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#005B7D')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#006E97')}
            >
              Buy Product
            </Link>
          </div> */}

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center rounded-[0.9rem] border border-[#117ca1]/20 text-[#117ca1] lg:hidden"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {mobileOpen && (
          <div className="section-shell border-t border-[#117ca1]/12 pb-5 pt-4 lg:hidden">
            <nav className="grid gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `rounded-[0.9rem] px-4 py-3 text-sm font-extrabold uppercase tracking-[0.08em] ${
                      isActive ? 'bg-[#e5f1f5] text-[#117ca1]' : 'bg-white text-[#223448]'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <a href="tel:+919831731800" className="secondary-btn">
                Call Now
              </a>
              <Link to="/contact" onClick={() => setMobileOpen(false)} className="primary-btn">
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
