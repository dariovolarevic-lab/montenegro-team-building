import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { HiArrowLeft } from "@/components/icons";
import { getBlogPostBySlug, getAllBlogSlugs } from "@/data/blog";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags.map((t) => `${t} Montenegro team building`),
    alternates: {
      canonical: `https://www.montenegroteambuilding.com/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `https://www.montenegroteambuilding.com${post.image}`,
    datePublished: post.date,
    author: {
      "@type": "Organization",
      name: post.author,
      url: "https://www.montenegroteambuilding.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Montenegro Team Building",
      url: "https://www.montenegroteambuilding.com",
    },
    url: `https://www.montenegroteambuilding.com/blog/${slug}`,
    mainEntityOfPage: `https://www.montenegroteambuilding.com/blog/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero image */}
      <section className="pt-8 pb-4 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-amber-500 hover:text-amber-600 text-sm uppercase tracking-wider font-medium mb-5 transition-colors"
          >
            <HiArrowLeft size={16} />
            Back to Blog
          </Link>

          <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-[2/1]">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 800px"
              priority
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Meta */}
          <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
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

          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap gap-2 mb-10">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-amber-50 text-amber-700 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Markdown-like content rendering */}
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed prose-headings:text-slate-900 prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-strong:text-slate-800 prose-a:text-amber-600 prose-a:no-underline hover:prose-a:underline prose-table:text-sm">
            {post.content.split("\n\n").map((block, idx) => {
              if (block.startsWith("## ")) {
                return (
                  <h2 key={idx} className="text-2xl font-bold text-slate-900 mt-10 mb-4">
                    {block.replace("## ", "")}
                  </h2>
                );
              }
              if (block.startsWith("| ")) {
                const rows = block.split("\n").filter((r) => !r.match(/^\|\s*-/));
                const headerCells = rows[0]
                  ?.split("|")
                  .slice(1, -1)
                  .map((c) => c.trim());
                const bodyRows = rows.slice(1);
                return (
                  <div key={idx} className="overflow-x-auto my-6">
                    <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden table-fixed">
                      <thead className="bg-slate-50">
                        <tr>
                          {headerCells?.map((h, i) => (
                            <th
                              key={i}
                              className={`px-4 py-3 text-left font-semibold text-slate-900 border-b border-gray-200 ${i === 0 ? "w-1/4" : ""}`}
                            >
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {bodyRows.map((row, ri) => {
                          const cells = row
                            .split("|")
                            .slice(1, -1)
                            .map((c) => c.trim());
                          return (
                            <tr key={ri} className="border-b border-gray-100">
                              {cells.map((cell, ci) => (
                                <td key={ci} className="px-4 py-3 text-gray-700">
                                  {cell.replace(/\*\*(.*?)\*\*/g, "$1")}
                                </td>
                              ))}
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                );
              }
              // Handle bold text and lists within paragraphs
              const formatted = block
                .split("\n")
                .map((line) => line.trim());

              // Check if it's a list
              if (formatted.every((l) => l.startsWith("- ") || l === "")) {
                return (
                  <ul key={idx} className="list-disc pl-6 space-y-2 my-4">
                    {formatted
                      .filter((l) => l.startsWith("- "))
                      .map((l, li) => (
                        <li key={li} className="text-gray-700 leading-relaxed">
                          {renderInlineFormatting(l.replace(/^- /, ""))}
                        </li>
                      ))}
                  </ul>
                );
              }

              return (
                <p key={idx} className="mb-5 leading-relaxed">
                  {renderInlineFormatting(block)}
                </p>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-slate-900 rounded-2xl text-center">
            <h3 className="text-2xl font-bold text-white mb-3">
              Ready to Plan Your Event?
            </h3>
            <p className="text-gray-300 mb-6">
              Tell us about your group and we&apos;ll put together a custom
              proposal.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold py-3 px-8 rounded-full transition-colors text-sm uppercase tracking-wider"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}

function renderInlineFormatting(text: string) {
  // Split by bold markers
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="text-slate-800 font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}
