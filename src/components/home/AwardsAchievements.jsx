const awards = [
  { title: '2nd Best Performer - City Multi VRF', subtitle: 'Thailand 2024', badge: '2024', tone: 'from-[#0d2844] to-[#1f4967]' },
  { title: 'Star Performer Award', subtitle: 'Mitsubishi Electric - Authorized Channel Partner', badge: '2024', tone: 'from-[#f5f7f8] to-[#d9e5ea]' },
  { title: 'Silver Award - City Multi VRF', subtitle: 'Annual Dealer Meet Thailand 2025', badge: '2025', tone: 'from-[#262e39] to-[#4c5561]' },
  { title: 'ME Partnership Certificate', subtitle: 'Authorized Dealer - Mitsubishi Electric', badge: 'CERT', tone: 'from-[#f4ede1] to-[#ddd4c2]' },
];

export default function AwardsAchievements() {
  return (
    <section className="py-28 md:py-36">
      <div className="section-shell">
        <div className="rounded-[2rem] border border-[#117ca1]/14 bg-white/60 px-6 py-12 shadow-[0_20px_60px_rgba(12,32,48,0.1)] md:px-10 md:py-14">
          <div className="text-center">
            <div className="section-kicker justify-center">Awards &amp; Achievements</div>
            <h2 className="section-title mt-6">Recognitions that reflect our commitment to quality and excellence.</h2>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-4">
            {awards.map((award) => (
              <article key={award.title} className="surface-card rounded-[1.4rem] p-5">
                <div className={`flex h-[210px] items-center justify-center rounded-[1.2rem] bg-gradient-to-br ${award.tone}`}>
                  <div className="rounded-[1rem] border border-white/40 bg-white/20 px-5 py-4 text-center text-white shadow-[0_12px_24px_rgba(12,32,48,0.15)]">
                    <div className="text-xs font-extrabold uppercase tracking-[0.22em]">{award.badge}</div>
                    <div className="mt-3 text-[2.8rem] leading-none">{award.badge === 'CERT' ? 'DOC' : 'AWARD'}</div>
                  </div>
                </div>
                <h3 className="mt-6 text-[2rem] leading-none text-[#0d2844]">{award.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#5e6d7b]">{award.subtitle}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
