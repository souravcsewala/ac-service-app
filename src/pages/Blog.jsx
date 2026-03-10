const posts = [
  {
    title: 'Essential AC Maintenance Checklist for Peak Summer',
    meta: 'Maintenance',
    summary: 'A simple maintenance routine reduces breakdown risk, improves airflow, and keeps operating costs under control.',
  },
  {
    title: 'How VRF Systems Change Energy Planning for Large Buildings',
    meta: 'Technology',
    summary: 'VRF deployments give commercial buildings tighter zone control, better part-load performance, and cleaner retrofits.',
  },
  {
    title: 'How to Choose Between Split, Cassette, and Ducted Units',
    meta: 'Buying Guide',
    summary: 'System selection depends on occupancy, ceiling constraints, airflow strategy, and lifecycle cost, not only upfront price.',
  },
];

export default function Blog() {
  return (
    <div className="page-shell py-24">
      <section className="section-shell">
        <div className="surface-panel rounded-[2rem] p-8 md:p-12">
          <div className="section-kicker mb-4">Insights</div>
          <h1 className="section-title max-w-3xl">
            HVAC articles, maintenance guidance, and product updates.
          </h1>
          <p className="section-lead mt-5 max-w-2xl">
            The home page now links here. This page is intentionally lightweight, but the route is real and ready for full blog content later.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {posts.map((post) => (
              <article key={post.title} className="surface-card rounded-[1.4rem] p-6">
                <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#117ca1]">{post.meta}</div>
                <h2 className="mt-3 text-3xl leading-none text-[#0d2844]">{post.title}</h2>
                <p className="mt-4 text-sm leading-7 text-[#5e6d7b]">{post.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
