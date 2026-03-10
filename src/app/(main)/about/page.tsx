import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";

export const metadata: Metadata = {
  title: "About Us — Expert Team Building Organisers in Montenegro",
  description:
    "Meet the team behind Montenegro Team Building. We specialise in organising bespoke corporate team building events, scavenger hunts, and group activities across Montenegro for companies worldwide.",
  keywords: [
    "about Montenegro Team Building",
    "team building organisers Montenegro",
    "corporate events Montenegro",
  ],
  alternates: {
    canonical: "https://www.montenegroteambuilding.com/about",
  },
  openGraph: {
    title: "About Us — Expert Team Building Organisers in Montenegro",
    description:
      "Meet the team behind Montenegro Team Building. Bespoke corporate team building events across Montenegro.",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us — Montenegro Team Building",
    description:
      "Meet the team behind Montenegro Team Building. Bespoke corporate team building events across Montenegro.",
  },
};

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
