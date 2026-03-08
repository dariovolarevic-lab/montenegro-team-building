import Link from "next/link";
import Image from "next/image";
import { HiClock, HiUsers } from "@/components/icons";
import type { Activity } from "@/data/activities";

interface ActivityCardProps {
  activity: Activity;
}

export default function ActivityCard({ activity }: ActivityCardProps) {
  return (
    <Link
      href={`/activity/${activity.slug}`}
      className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative overflow-hidden bg-slate-100 aspect-[16/9]">
        <Image
          src={activity.image}
          alt={activity.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Category Badge */}
        <span className="absolute top-3 left-3 bg-amber-400 text-slate-900 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
          {activity.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors mb-2 uppercase">
          {activity.title}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
          {activity.shortDescription}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-4 text-xs text-gray-500 border-t border-gray-100 pt-3">
          <span className="flex items-center gap-1.5">
            <HiUsers className="text-amber-500" size={14} />
            {activity.numberOfPeople}
          </span>
          <span className="flex items-center gap-1.5">
            <HiClock className="text-amber-500" size={14} />
            {activity.duration}
          </span>
        </div>
      </div>
    </Link>
  );
}
