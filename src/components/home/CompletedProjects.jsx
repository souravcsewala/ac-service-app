import { Link } from 'react-router-dom';

const projects = [
  {
    title: 'Residential Tower',
    image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Waterfront Hotel',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Retail Experience Center',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80',
  },
  {
    title: 'Institutional Campus',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1000&q=80',
  },
];

export default function CompletedProjects() {
  return (
    <section className="py-28 md:py-36">
      <div className="section-shell">
        <div className="text-center">
          <div className="section-kicker justify-center">Our Work</div>
          <h2 className="section-title mt-6">Completed projects</h2>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-4">
          {projects.map((project) => (
            <article key={project.title} className="group relative overflow-hidden rounded-[1.4rem] border border-[#117ca1]/16 shadow-[0_16px_38px_rgba(12,32,48,0.1)]">
              <img src={project.image} alt={project.title} className="h-[360px] w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071b29]/86 via-[#071b29]/14 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <div className="text-[2rem] leading-none">{project.title}</div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-end">
          <Link to="/projects" className="primary-btn">
            View All Project
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
