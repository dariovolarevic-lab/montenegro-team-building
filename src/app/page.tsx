import HeroSection from "@/components/HeroSection";
import ActivityCard from "@/components/ActivityCard";
import LogoCarousel from "@/components/LogoCarousel";
import ScrollReveal from "@/components/ScrollReveal";
import QuoteButton from "@/components/QuoteButton";
import { activities } from "@/data/activities";
import Link from "next/link";

const reviews: Record<string, { name: string; role: string; company: string; logo: string; text: string }> = {
  "montenegro-scavenger-hunt": {
    name: "Marko Đurović",
    role: "HR Director",
    company: "Deloitte",
    logo: "/images/logos/1.webp",
    text: "I would like to sincerely thank you for the exceptional attention you gave to both me and our group, as well as for your professionalism in organizing our Scavenger Hunt event. We had a wonderful and enjoyable time, and every activity was meticulously planned.",
  },
  "create-a-movie": {
    name: "Ana Petrović",
    role: "Team Lead",
    company: "L'Oréal",
    logo: "/images/logos/4.webp",
    text: "Create a Movie was an incredibly creative and fun experience for our whole team. Everyone participated with so much energy and laughter. The facilitators were outstanding and made the entire event seamless and memorable.",
  },
  "classical-treasure-hunt": {
    name: "Ivan Nikolić",
    role: "Operations Manager",
    company: "Coca-Cola",
    logo: "/images/logos/2.webp",
    text: "The Classical Treasure Hunt was the perfect team-building activity for our group. Everyone was engaged from start to finish. A brilliant way to explore Montenegro while strengthening team bonds. Highly recommended!",
  },
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        title=""
        subtitle=""
        backgroundImage="/images/hero.webp"
      />

      {/* Activities Grid */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal fade className="text-center mb-12">
            <div className="inline-block text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 uppercase mb-2">
                Team Building Activities
              </h2>
              <div className="h-1 bg-amber-400 w-full" />
            </div>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-6">
              Fun competitions for small and large groups across Montenegro. Choose from our range of exciting team-building programs, each customizable to your group&apos;s size, preferences, and goals.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {activities.map((activity, idx) => (
              <ScrollReveal key={activity.slug} delay={idx * 150}>
                <ActivityCard activity={activity} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Logo Carousel */}
      <LogoCarousel />

      {/* Activity Showcase Sections */}
      {activities.map((activity, idx) => {
        const review = reviews[activity.slug];
        const isEven = idx % 2 === 0;
        return (
          <section key={activity.slug} className={`py-16 md:py-24 ${isEven ? "bg-white" : "bg-gray-50"}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${!isEven ? "lg:flex-row-reverse" : ""}`}>

                {/* Text side */}
                <div className="flex-1 max-w-lg">
                  <span className="text-amber-500 text-xs font-bold uppercase tracking-[0.2em]">
                    Enhances Teamwork
                  </span>
                  <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-3 mb-5 leading-tight">
                    {activity.title}
                  </h2>
                  <p className="text-gray-500 text-base leading-relaxed mb-8">
                    {activity.shortDescription}
                  </p>
                  <Link
                    href={`/activity/${activity.slug}`}
                    className="inline-block bg-slate-900 hover:bg-slate-700 text-white font-semibold py-3 px-8 rounded-full transition-colors text-sm uppercase tracking-wider"
                  >
                    Learn more
                  </Link>
                </div>

                {/* Review + Image side */}
                <div className="flex-1 relative min-h-[360px] w-full">
                  {/* Activity image — right portion */}
                  <div className="absolute right-0 top-8 w-4/5 h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-100">
                    <img
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Review card — overlapping from left */}
                  {review && (
                    <div className="absolute left-0 top-0 z-10 bg-amber-50 border-2 border-amber-200 rounded-2xl p-5 w-64 shadow-xl">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center overflow-hidden shrink-0">
                          <img
                            src={review.logo}
                            alt={review.company}
                            className="w-9 h-9 object-contain"
                          />
                        </div>
                        <div>
                          <p className="font-bold text-slate-900 text-sm leading-none">{review.name}</p>
                          <p className="text-gray-500 text-xs mt-0.5">{review.role}</p>
                        </div>
                      </div>
                      <p className="text-gray-700 text-xs leading-relaxed mb-3">{review.text}</p>
                      <div className="flex gap-0.5 text-amber-400 text-lg">
                        {[1,2,3,4,5].map((s) => <span key={s}>★</span>)}
                      </div>
                    </div>
                  )}
                </div>

              </div>
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="py-16 md:py-20 bg-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build Your Team?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Tell us about your group and goals, and we&apos;ll create a
            customized program that exceeds your expectations.
          </p>
          <QuoteButton />
        </div>
      </section>
    </>
  );
}
