import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about our team of experts who specialize in organizing team-building activities across Montenegro.",
};

const teamMembers = [
  {
    name: "Marko Vuković",
    role: "Founder & Director",
    bio: "Marko founded Montenegro Team Building after a decade of experience organizing corporate events across the Balkans. With deep knowledge of Montenegro's landscape and culture, he ensures every program is unique and unforgettable.",
    image: "/images/team/marko.jpg",
  },
  {
    name: "Ana Popović",
    role: "Operations Manager",
    bio: "Ana manages the logistics behind every event, coordinating venues, equipment, guides, and catering to ensure flawless execution. Her attention to detail and local connections are invaluable.",
    image: "/images/team/ana.jpg",
  },
  {
    name: "Nikola Jovanović",
    role: "Lead Activity Designer",
    bio: "Nikola designs our activities and challenges, drawing on his background in outdoor education and adventure sports. He's the creative mind behind our most popular programs.",
    image: "/images/team/nikola.jpg",
  },
];

export default function AboutPage() {
  return (
    <>
      <HeroSection
        title="Who We Are & What We Do"
        subtitle="A passionate team creating fun and inspiring activities for corporate groups"
        compact
      />

      {/* About Intro */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-lg text-gray-700 leading-relaxed space-y-5">
            <p>
              Montenegro Team Building is a company designed by experts offering unique team building experiences. Our lineup includes the Montenegro Scavenger Hunt, Create a Movie and the Classical Treasure Hunt.
            </p>
            <p>
              All our activities are crafted to connect your team to Montenegro&apos;s culture and history while enforcing communication, collaboration and teamwork.
            </p>
            <p>
              We customize our programs to accommodate your specific requirements, taking into account variables such as the season, group size and the desired activity location.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              The Dream Team
            </h2>
            <div className="w-16 h-1 bg-amber-400 mx-auto mb-6" />
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The people behind every unforgettable event
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-xl shadow-md overflow-hidden text-center"
              >
                {/* Photo placeholder */}
                <div className="h-56 bg-gradient-to-br from-slate-200 to-slate-300 relative">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${member.image})` }}
                  />
                  {/* Fallback initials */}
                  <div className="absolute inset-0 flex items-center justify-center text-5xl font-bold text-slate-400/50">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900">
                    {member.name}
                  </h3>
                  <div className="text-amber-500 text-sm font-medium uppercase tracking-wider mt-1 mb-3">
                    {member.role}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Values
            </h2>
            <div className="w-16 h-1 bg-amber-400 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Customized Programs
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Every program is tailor-made to match your company&apos;s
                culture, group size, and objectives. No two events are the same.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🏔️</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Local Expertise
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our deep knowledge of Montenegro&apos;s landscapes, culture, and
                hidden gems allows us to create truly unique experiences.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⭐</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Excellence in Execution
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Professional guides, quality equipment, and meticulous planning
                ensure your event runs smoothly from start to finish.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
