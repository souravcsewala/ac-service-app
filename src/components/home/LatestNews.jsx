import { Link } from 'react-router-dom';

const posts = [
  {
    date: '12 Dec',
    category: 'AC Maintenance',
    comments: '5 Comments',
    title: 'Essential AC Maintenance...',
    excerpt: 'Keep your air conditioning system running efficiently with these professional maintenance tips and best practices.',
    author: 'John Smith',
    image: 'https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?auto=format&fit=crop&w=1000&q=80',
  },
  {
    date: '18 Dec',
    category: 'VRF Systems',
    comments: '3 Comments',
    title: 'Why VRF Systems Are the...',
    excerpt: 'Discover how Variable Refrigerant Flow technology is revolutionizing energy efficiency in large buildings.',
    author: 'Sarah Johnson',
    image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1000&q=80',
  },
  {
    date: '20 Dec',
    category: 'Industry News',
    comments: '8 Comments',
    title: 'Sustainable HVAC Manufa...',
    excerpt: 'Learn about eco-friendly manufacturing processes and how they benefit both the environment and long-term performance.',
    author: 'Michael Chen',
    image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1000&q=80',
  },
];

export default function LatestNews() {
  return (
    <section className="py-28 md:py-36">
      <div className="section-shell">
        <div className="text-center">
          <div className="section-kicker justify-center">Latest News &amp; Insights</div>
          <h2 className="section-title mt-6">Stay updated with the latest trends, tips, and news from the HVAC industry.</h2>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="news-card overflow-hidden">
              <div className="relative h-[260px] shrink-0 overflow-hidden">
                <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
                <div className="absolute left-4 top-4 rounded-[0.9rem] bg-[#dff0f4] px-3 py-2 text-center shadow-[0_12px_22px_rgba(12,32,48,0.14)]">
                  <div className="text-xl leading-none text-[#117ca1]">{post.date.split(' ')[0]}</div>
                  <div className="mt-1 text-xs font-extrabold uppercase tracking-[0.18em] text-[#223448]">{post.date.split(' ')[1]}</div>
                </div>
              </div>
              <div className="p-7">
                <div className="flex flex-wrap gap-4 text-xs font-bold uppercase tracking-[0.12em] text-[#117ca1]">
                  <span>{post.category}</span>
                  <span className="text-[#6b7d8b]">{post.comments}</span>
                </div>
                <h3 className="mt-5 line-clamp-2 text-[2rem] leading-none text-[#0d2844]">{post.title}</h3>
                <p className="mt-5 line-clamp-3 text-sm leading-7 text-[#5e6d7b]">{post.excerpt}</p>
                <div className="mt-8 flex items-center justify-between">
                  <div className="text-sm font-semibold text-[#223448]">By {post.author}</div>
                  <Link to="/blog" className="text-sm font-extrabold uppercase tracking-[0.14em] text-[#117ca1]">
                    Read More
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-end">
          <Link to="/blog" className="primary-btn">
            View All Posts
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
