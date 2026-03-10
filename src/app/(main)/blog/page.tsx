import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog — Team Building Tips, Guides & Montenegro Insights",
  description:
    "Practical advice on planning corporate team building events in Montenegro. Destination guides, activity comparisons, and tips from our experience organising events for groups of all sizes.",
  alternates: {
    canonical: "https://www.montenegroteambuilding.com/blog",
  },
  openGraph: {
    title: "Blog — Team Building Tips & Montenegro Guides",
    description:
      "Practical advice on planning corporate team building events in Montenegro.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — Montenegro Team Building",
    description:
      "Practical advice on planning corporate team building events in Montenegro.",
  },
};

export default function BlogPage() {
  return (
    <>
      <HeroSection
        title="Blog"
        subtitle="Guides, tips and stories from our team building events across Montenegro"
        compact
      />

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 hover:-translate-y-1"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors mb-2 leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-amber-50 text-amber-700 px-2 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
