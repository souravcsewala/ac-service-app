import { Link } from 'react-router-dom';
import heroVideo from '../../assets/herosectionmain.mp4';

const serviceItems = [
  'Licensed technicians',
  'Emergency response',
  'Preventive maintenance',
];

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        minHeight: 'calc(100vh - 120px)',
        margin: 0,
        padding: 0,
        background: '#dfe7eb',
      }}
    >
      <div className="absolute inset-0 overflow-hidden" style={{ background: '#dfe7eb' }}>
        <video
          className="h-full w-full object-cover"
          style={{
            objectPosition: 'center center',
            display: 'block',
            transform: 'scale(1.14)',
            transformOrigin: 'center center',
          }}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(241,246,248,0.96) 0%, rgba(241,246,248,0.9) 28%, rgba(241,246,248,0.7) 50%, rgba(241,246,248,0.3) 68%, rgba(241,246,248,0.08) 100%)',
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle at 85% 15%, rgba(157,198,59,0.08), transparent 24%), radial-gradient(circle at 5% 85%, rgba(17,124,161,0.08), transparent 26%)',
          }}
        />
      </div>

      <div className="section-shell relative flex min-h-[calc(100vh-120px)] items-center py-16 lg:py-20">
        <div style={{ maxWidth: '580px' }}>
          <div className="section-kicker mb-5">ESSGEE Enterprise</div>

          <h1
            className="section-title text-balance"
            style={{
              fontSize: 'clamp(2.8rem, 5.5vw, 5rem)',
              lineHeight: '0.92',
              color: '#0d2844',
            }}
          >
            Professional AC
            <br />
            Service You Can Trust
          </h1>

          <p
            className="section-lead mt-5"
            style={{
              fontSize: '1.06rem',
              lineHeight: '1.75',
              color: '#314556',
              maxWidth: '460px',
            }}
          >
            Expert installation, repair & maintenance. Licensed & insured
            technicians serving your area since 2010.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/contact" className="primary-btn">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Get Free Quote
            </Link>

            <Link
              to="/services"
              className="secondary-btn"
              style={{ background: 'rgba(255,255,255,0.75)', borderColor: 'rgba(17,124,161,0.55)' }}
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Book Service Now
            </Link>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            {serviceItems.map((item) => (
              <div
                key={item}
                className="info-pill"
                style={{
                  background: 'rgba(255,255,255,0.82)',
                  border: '1px solid rgba(17,124,161,0.18)',
                }}
              >
                <span
                  className="flex h-5 w-5 items-center justify-center rounded-full"
                  style={{ background: 'rgba(157,198,59,0.2)', color: '#5e8015' }}
                >
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
