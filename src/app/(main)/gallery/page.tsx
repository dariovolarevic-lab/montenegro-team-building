import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse snapshots of team building events we have organized across Montenegro.",
};

const galleryImages = [
  { src: "/images/gallery/montenegro-scavenger-hunt.webp", alt: "Montenegro Scavenger Hunt" },
  { src: "/images/gallery/create-a-movie.webp", alt: "Create a Movie" },
  { src: "/images/gallery/classical-treasure-hunt.webp", alt: "Classical Treasure Hunt" },
];

export default function GalleryPage() {
  return (
    <>
      <HeroSection
        title="Gallery"
        subtitle="Snapshots of team building events we have organized across Montenegro"
        compact
      />

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryGrid images={galleryImages} />
        </div>
      </section>
    </>
  );
}
