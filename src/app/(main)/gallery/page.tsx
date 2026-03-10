import type { Metadata } from "next";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";

export const metadata: Metadata = {
  title: "Gallery — Team Building Events & Activities in Montenegro",
  description:
    "Browse photos from our team building events across Montenegro. See scavenger hunts, treasure hunts, movie-making challenges and more in Kotor, Budva and Podgorica.",
  alternates: {
    canonical: "https://www.montenegroteambuilding.com/gallery",
  },
  openGraph: {
    title: "Gallery — Team Building Events & Activities in Montenegro",
    description:
      "Browse photos from our team building events across Montenegro.",
    images: ["/images/activities/Montenegro Scavenger Hunt.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery — Team Building Events in Montenegro",
    description:
      "Browse photos from our team building events across Montenegro.",
  },
};

const images = [
  { src: "/images/activities/Montenegro Scavenger Hunt.jpg", alt: "Montenegro Scavenger Hunt team building event" },
  { src: "/images/activities/Create a Movie.jpg", alt: "Create a Movie team building activity" },
  { src: "/images/activities/Classical Treasure Hunt.jpg", alt: "Classical Treasure Hunt team building event" },
];

export default function GalleryPage() {
  return (
    <>
      <HeroSection
        title="Gallery"
        subtitle="Highlights from our team building events across Montenegro"
        compact
      />

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, idx) => (
              <div key={idx} className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
