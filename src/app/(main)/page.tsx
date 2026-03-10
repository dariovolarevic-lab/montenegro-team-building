import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import ActivityCard from "@/components/ActivityCard";
import ScrollReveal from "@/components/ScrollReveal";
import QuoteButton from "@/components/QuoteButton";
import { activities } from "@/data/activities";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const LogoCarousel = dynamic(() => import("@/components/LogoCarousel"), {
  loading: () => <div className="py-4"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"><div className="bg-slate-900 rounded-3xl py-16 h-[400px]" /></div></div>,
});

export const metadata: Metadata = {
  title: {
    absolute: "Team Building Activities in Montenegro | Montenegro Team Building",
  },
  description:
    "Professional team building activities and corporate events in Montenegro. Scavenger hunts, treasure hunts, creative challenges and more for groups of 8 to 500 people in Kotor, Budva, Podgorica and across Montenegro.",
  alternates: {
    canonical: "https://www.montenegroteambuilding.com",
  },
  openGraph: {
    title: "Team Building Activities in Montenegro | Montenegro Team Building",
    description:
      "Professional team building activities and corporate events in Montenegro. Scavenger hunts, treasure hunts, creative challenges for groups of all sizes.",
    url: "https://www.montenegroteambuilding.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Team Building Activities in Montenegro",
    description:
      "Professional team building activities and corporate events in Montenegro for groups of all sizes.",
  },
};

export const revalidate = 86400;

const reviews: Record<string, { name: string; role: string; company: string; logo: string; text: string }> = {
  "montenegro-scavenger-hunt": {
    name: "Pere Tarrida",
    role: "Comercial Director",
    company: "JÆR",
    logo: "/images/logos/JAER.webp",
    text: "I would like to sincerely thank you for the exceptional attention you gave to both me and our group, as well as for your professionalism in organizing our Scavenger Hunt event. We had a wonderful and enjoyable time, and every activity was meticulously planned.",
  },
  "create-a-movie": {
    name: "Ana-Mara Banu",
    role: "Managing Director",
    company: "Welcome Europa",
    logo: "/images/logos/liqui-moly-testimonial.webp",
    text: "Create a Movie was an incredibly creative and fun experience for our whole team. Everyone participated with so much energy and laughter. The facilitators were outstanding and made the entire event seamless and memorable.",
  },
  "classical-treasure-hunt": {
    name: "Carmen Moll",
    role: "Head of Exhibitions & Events",
    company: "Liqui Moly",
    logo: "/images/logos/Welcome-Europa-1.webp",
    text: "The Classical Treasure Hunt was the perfect team-building activity for our group. Everyone was engaged from start to finish. A brilliant way to explore Montenegro while strengthening team bonds. Highly recommended!",
  },
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-8 pb-4 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="relative overflow-hidden rounded-2xl shadow-xl"
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 88%, 78% 100%, 0 100%)" }}
          >
            {/* Next.js optimized hero image */}
            <Image
              src="/images/hero.webp"
              alt="Montenegro Team Building"
              width={1920}
              height={1080}
              className="w-full h-auto block"
              priority
              sizes="100vw"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal fromLeft className="text-center mb-12">
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
              <ScrollReveal
                key={activity.slug}
                delay={Math.floor(idx / 3) * 100}
                fromLeft={idx % 3 === 0}
                fromRight={idx % 3 === 2}
                fade={idx % 3 === 1}
              >
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
                  <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-3 mb-5 leading-tight uppercase">
                    {activity.title}
                  </h2>
                  <p className="text-gray-500 text-base leading-relaxed mb-8">
                    {activity.shortDescription}
                  </p>
                  <Link
                    href={`/activity/${activity.slug}`}
                    className="inline-block bg-slate-900 hover:bg-slate-700 text-white font-semibold py-3 px-8 rounded-full transition-colors text-sm uppercase tracking-wider"
                  >
                    Discover {activity.title}
                  </Link>
                </div>

                {/* Review + Image side */}
                <div className="flex-1 relative min-h-[360px] w-full">
                  {/* Activity image — right portion */}
                  <div className="absolute right-0 top-8 w-4/5 h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-100">
                    <Image
                      src={activity.image}
                      alt={activity.title}
                      fill
                      sizes="(max-width: 1024px) 80vw, 40vw"
                      className="object-cover"
                    />
                  </div>
                  {/* Review card — overlapping from left */}
                  {review && (
                    <div className="absolute left-0 top-0 z-10 bg-amber-50 border-2 border-amber-200 rounded-2xl p-5 w-64 shadow-xl">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-16 h-16 rounded-full bg-white border border-gray-200 flex items-center justify-center overflow-hidden shrink-0">
                          <Image
                            src={review.logo}
                            alt={review.company}
                            width={56}
                            height={56}
                            className="w-14 h-14 object-contain"
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
