import Image from "next/image";

const images = [
  "/images/activities/Montenegro Scavenger Hunt.jpg",
  "/images/activities/Create a Movie.jpg",
  "/images/activities/Classical Treasure Hunt.jpg",
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-slate-900 mb-8 text-center uppercase">Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, idx) => (
            <div key={idx} className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md">
              <Image
                src={src}
                alt={`Gallery image ${idx + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
