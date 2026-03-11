import team1 from '../../assets/about/t1.png';
import team2 from '../../assets/about/t2.png';
import team3 from '../../assets/about/t3.png';
import team4 from '../../assets/about/t4.png';

const teamMembers = [
  {
    name: 'Dr. Raj Patel',
    role: 'Projects Support',
    image: team1,
  },
  {
    name: 'Anjali Kapoor',
    role: 'Service Support',
    image: team2,
  },
  {
    name: 'Arjun Mehta',
    role: 'Install Support',
    image: team3,
  },
  {
    name: 'Priya SPritomharma',
    role: 'Scenario Designer/Engineer',
    image: team4,
  },
];

export default function AboutTeam() {
  return (
    <section className="py-20 md:py-28">
      <div className="section-shell">
        <div className="text-center">
          <h2 className="text-[clamp(2.7rem,4.8vw,4.9rem)] leading-[0.98] text-[#3e3e3e]">
            Meet <span className="text-[#28b49b]">Our</span> Team
          </h2>
          <div className="mx-auto mt-4 h-[3px] w-[20rem] max-w-[78%] bg-[linear-gradient(90deg,#1787b2,#d7e1e7)]" />
          <p className="mx-auto mt-5 max-w-3xl text-[1rem] leading-8 text-[#585858] md:text-[1.12rem]">
            The experts driving quality, innovation, and excellence.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-[1380px] gap-8 md:grid-cols-2 xl:grid-cols-4 xl:gap-10">
          {teamMembers.map((member) => (
            <div key={member.name} className="h-full">
              <div className="flex h-full min-h-[22rem] flex-col items-center rounded-[1.2rem] bg-[#d9edf3] px-6 pb-10 pt-9 text-center shadow-[0_10px_18px_rgba(12,32,48,0.18)]">
                <div className="mx-auto h-[9.8rem] w-[9.8rem] overflow-hidden rounded-full bg-white">
                  <img src={member.image} alt={member.name} className="h-full w-full object-cover" />
                </div>

                <h3 className="mt-8 text-balance text-[1.85rem] leading-[1.05] text-[#102d4c] md:text-[2rem]">
                  {member.name}
                </h3>
                <p className="mt-3 max-w-[16rem] text-balance text-[1rem] leading-[1.45] text-[#30486b] md:text-[1.12rem]">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
