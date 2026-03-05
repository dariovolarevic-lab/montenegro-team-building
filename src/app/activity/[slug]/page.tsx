import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { HiClock, HiUsers, HiArrowLeft } from "react-icons/hi";
import { getActivityBySlug, getAllSlugs } from "@/data/activities";

interface ActivityPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ActivityPageProps): Promise<Metadata> {
  const { slug } = await params;
  const activity = getActivityBySlug(slug);
  if (!activity) return {};

  return {
    title: activity.title,
    description: activity.shortDescription,
    openGraph: {
      title: `${activity.title} | Montenegro Team Building`,
      description: activity.shortDescription,
      images: [activity.image],
    },
  };
}

export default async function ActivityPage({ params }: ActivityPageProps) {
  const { slug } = await params;
  const activity = getActivityBySlug(slug);

  if (!activity) {
    notFound();
  }

  return (
    <>
      {/* Hero Image */}
      <section className="relative min-h-[50vh] flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${activity.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-slate-900/20" />
        {/* Fallback bg if image doesn't load */}
        <div className="absolute inset-0 -z-10 bg-slate-700" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 text-sm uppercase tracking-wider font-medium mb-4 transition-colors"
          >
            <HiArrowLeft size={16} />
            Back to Activities
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">
            {activity.title}
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl">
            {activity.subtitle}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                {activity.description.split("\n\n").map((paragraph, idx) => (
                  <p key={idx} className="mb-5">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-28">
                <h3 className="text-lg font-bold text-slate-900 mb-5 uppercase tracking-wider">
                  Activity Details
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                      <HiClock className="text-amber-600" size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider">
                        Duration
                      </div>
                      <div className="font-semibold">{activity.duration}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                      <HiUsers className="text-amber-600" size={20} />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider">
                        Number of People
                      </div>
                      <div className="font-semibold">
                        {activity.numberOfPeople}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                      <span className="text-amber-600 text-lg">📍</span>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider">
                        Category
                      </div>
                      <div className="font-semibold">{activity.category}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                      <span className="text-amber-600 text-lg">🗺️</span>
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider">
                        Possible Locations
                      </div>
                      <div className="font-semibold">{activity.locations}</div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-100 mt-6 pt-6">
                  <Link
                    href="/contact"
                    className="block w-full bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold py-3 px-6 rounded-lg transition-colors text-center uppercase tracking-wider text-sm"
                  >
                    Enquire About This Activity
                  </Link>
                </div>

                <p className="text-xs text-gray-400 mt-4 text-center">
                  All activities are fully customizable to your group&apos;s
                  needs
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
