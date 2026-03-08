"use client";

import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "@/components/icons";

interface ActivityCarouselProps {
  images: string[];
  activityTitle: string;
}

export default function ActivityCarousel({ images, activityTitle }: ActivityCarouselProps) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  const getIdx = (offset: number) => (current + offset + images.length) % images.length;

  return (
    <section className="pb-14 md:pb-18">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 uppercase tracking-wide mb-6 text-center">
          Activity Photos
        </h2>

        <div className="relative flex items-center justify-center gap-3 md:gap-4">
          {/* Prev button */}
          <button
            onClick={prev}
            className="absolute left-0 z-10 w-10 h-10 bg-sky-500 hover:bg-sky-600 text-white rounded flex items-center justify-center shadow-md transition-colors"
            aria-label="Previous"
          >
            <HiChevronLeft size={22} />
          </button>

          {/* Left image */}
          <div className="hidden sm:block w-[28%] overflow-hidden rounded-lg flex-shrink-0 opacity-50">
            <img
              src={images[getIdx(-1)]}
              alt={`${activityTitle} photo`}
              className="w-full h-52 md:h-64 object-cover"
              loading="lazy"
            />
          </div>

          {/* Center image */}
          <div className="w-full sm:w-[44%] overflow-hidden rounded-xl flex-shrink-0 shadow-lg">
            <img
              src={images[current]}
              alt={`${activityTitle} photo`}
              className="w-full h-56 md:h-72 object-cover"
              loading="lazy"
            />
          </div>

          {/* Right image */}
          <div className="hidden sm:block w-[28%] overflow-hidden rounded-lg flex-shrink-0 opacity-50">
            <img
              src={images[getIdx(1)]}
              alt={`${activityTitle} photo`}
              className="w-full h-52 md:h-64 object-cover"
              loading="lazy"
            />
          </div>

          {/* Next button */}
          <button
            onClick={next}
            className="absolute right-0 z-10 w-10 h-10 bg-sky-500 hover:bg-sky-600 text-white rounded flex items-center justify-center shadow-md transition-colors"
            aria-label="Next"
          >
            <HiChevronRight size={22} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-2 h-2 rounded-full transition-colors ${
                idx === current ? "bg-slate-900" : "bg-gray-300"
              }`}
              aria-label={`Go to photo ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
