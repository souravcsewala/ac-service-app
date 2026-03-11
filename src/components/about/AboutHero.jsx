import aboutHeroVideo from '../../assets/about/abouthero1.mp4';

export default function AboutHero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={aboutHeroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,29,43,0.44),rgba(11,29,43,0.5))]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,21,33,0.16),rgba(7,21,33,0.16))]" />
      </div>

      <div className="section-shell relative flex min-h-[520px] items-center justify-center py-16 text-center md:min-h-[640px]">
        <div className="max-w-5xl">
          <h1 className="text-balance text-[clamp(3.6rem,7vw,6.2rem)] leading-[0.94] text-white">
            About ESSGGEE Enterprise
          </h1>
          <p className="mx-auto mt-10 max-w-4xl text-balance text-[clamp(1.35rem,2.3vw,2.25rem)] font-medium leading-[1.55] text-white/92">
            Delivering precision-driven HVAC solutions with comfort,
            reliability, and excellence.
          </p>
        </div>
      </div>
    </section>
  );
}
