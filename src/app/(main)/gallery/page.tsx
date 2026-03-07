import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import GalleryGrid from "@/components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery — Team Building Events in Montenegro",
  description:
    "Browse photos from our team building events across Montenegro. See real moments from scavenger hunts, treasure hunts, and creative team activities in Kotor, Budva and beyond.",
  alternates: {
    canonical: "https://www.montenegroteambuilding.com/gallery",
  },
  openGraph: {
    title: "Gallery — Team Building Events in Montenegro",
    description:
      "Photos from corporate team building events across Montenegro.",
  },
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
