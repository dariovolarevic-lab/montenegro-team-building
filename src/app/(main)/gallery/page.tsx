import GalleryGrid from "@/components/GalleryGrid";

const images = [
  "/images/gallery/montenegro-scavenger-hunt.webp",
  "/images/gallery/create-a-movie.webp",
  "/images/gallery/classical-treasure-hunt.webp",
  "/images/gallery/hero slika.webp",
  // Dodajte ostale slike po potrebi
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-slate-900 mb-8 text-center uppercase">Gallery</h1>
        <GalleryGrid images={images} />
      </div>
    </main>
  );
}
