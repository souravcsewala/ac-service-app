import AboutHero from '../components/about/AboutHero';
import AboutTrustedPartners from '../components/about/AboutTrustedPartners';
import AboutWhoWeAre from '../components/about/AboutWhoWeAre';
import AboutCommitment from '../components/about/AboutCommitment';
import AboutAdvantage from '../components/about/AboutAdvantage';
import AboutTeam from '../components/about/AboutTeam';
import founderImage from '../assets/about/founder.png';

export default function About() {
  return (
    <div className="page-shell flex flex-col gap-16 pb-24 md:gap-24 md:pb-32">
      <AboutHero />
      <AboutTrustedPartners />
      <AboutWhoWeAre />

      <section>
        <div className="section-shell">
          <div className="relative overflow-hidden rounded-[2.25rem] border border-[#117ca1]/12 bg-[#C4E8FF] shadow-[0_24px_54px_rgba(12,32,48,0.1)]">
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(196,232,255,0.92),rgba(196,232,255,0.88))]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_38%,rgba(255,255,255,0.35),transparent_30%)]" />
            </div>

            <div className="relative grid gap-10 px-6 py-10 md:px-10 md:py-14 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:px-14">
              <div className="flex justify-center lg:justify-start">
                <div className="relative h-[320px] w-[320px] overflow-hidden rounded-full border-[10px] border-white/75 shadow-[0_20px_46px_rgba(12,32,48,0.16)] md:h-[420px] md:w-[420px]">
                  <img
                    src={founderImage}
                    alt="Gautam Adhikari"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div>
                <div className="section-kicker">Founder&apos;s Desk</div>
                <h2 className="text-[clamp(2.8rem,5vw,4.8rem)] leading-[0.95] text-[#0d2844]">
                  From <span className="text-[#117ca1]">Craftsmanship</span> to HVAC Excellence
                </h2>
                <p className="mt-5 text-[1.05rem] font-semibold text-[#223448] md:text-[1.2rem]">
                  <span className="text-[#1d9aaa]">Gautam Adhikari</span>
                  <span className="text-[#5e6d7b]"> - Founder, ESSGEE Enterprise</span>
                </p>

                <div className="mt-8 space-y-7 text-[1.02rem] font-semibold leading-9 text-[#223448] md:text-[1.14rem]">
                  <p>
                    ESSGEE Enterprise was founded in 2013 by Gautam Adhikari,
                    building upon hands-on technical experience that began in
                    1997. What started as a journey rooted in craftsmanship
                    gradually evolved into a full-scale HVAC service
                    organization delivering sales, installation, maintenance,
                    and repair solutions.
                  </p>
                  <p>
                    As one of the early adopters and contractors in Kolkata&apos;s
                    growing HVAC market, ESSGEE Enterprise earned its
                    reputation through consistent quality, ethical practices,
                    and dependable service delivery. While we do not
                    manufacture air conditioners or chillers, we work closely
                    with leading OEM brands to provide best-in-class systems
                    and solutions.
                  </p>
                  <p>
                    Our focus remains on creating comfortable,
                    energy-efficient, and healthy indoor environments for every
                    client we serve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AboutCommitment />
      <AboutAdvantage />
      <AboutTeam />
    </div>
  );
}
