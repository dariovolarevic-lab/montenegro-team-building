import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
  weight: ["400", "600", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.montenegroteambuilding.com"),
  title: {
    default: "Team Building Activities in Montenegro | Montenegro Team Building",
    template: "%s | Montenegro Team Building",
  },
  description:
    "Professional team building activities and corporate events in Montenegro. Scavenger hunts, treasure hunts, creative challenges and more for groups of 8 to 500 people in Kotor, Budva, Podgorica and across Montenegro.",
  keywords: [
    "team building Montenegro",
    "corporate events Montenegro",
    "team building activities Kotor",
    "team building activities Budva",
    "team building Podgorica",
    "corporate team building Balkans",
    "scavenger hunt Montenegro",
    "treasure hunt Montenegro",
    "group activities Montenegro",
    "incentive travel Montenegro",
    "company events Montenegro",
    "outdoor team building",
    "team building for large groups",
  ],
  openGraph: {
    title: "Team Building Activities in Montenegro | Montenegro Team Building",
    description:
      "Professional team building activities and corporate events in Montenegro. Scavenger hunts, treasure hunts, creative challenges for groups of all sizes.",
    type: "website",
    locale: "en_US",
    siteName: "Montenegro Team Building",
    url: "https://www.montenegroteambuilding.com",
    images: [
      {
        url: "/images/hero.webp",
        width: 1200,
        height: 630,
        alt: "Montenegro Team Building — Activities & Events",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Team Building Activities in Montenegro",
    description:
      "Professional team building activities and corporate events in Montenegro for groups of all sizes.",
    images: ["/images/hero.webp"],
  },
  alternates: {
    canonical: "https://www.montenegroteambuilding.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Montenegro Team Building",
    description:
      "Professional team building activities and corporate events in Montenegro for groups of all sizes.",
    url: "https://www.montenegroteambuilding.com",
    email: "info@montenegroteambuilding.com",
    image: "https://www.montenegroteambuilding.com/images/hero.webp",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kotor",
      addressCountry: "ME",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 42.4247,
      longitude: 18.76,
    },
    areaServed: {
      "@type": "Country",
      name: "Montenegro",
    },
    priceRange: "$$",
    serviceType: [
      "Team Building Activities",
      "Corporate Events",
      "Scavenger Hunts",
      "Treasure Hunts",
      "Incentive Travel",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      bestRating: "5",
      ratingCount: "3",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Montenegro Team Building",
    url: "https://www.montenegroteambuilding.com",
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="preload"
          as="image"
          href="/images/hero.webp"
          type="image/webp"
          fetchPriority="high"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className="bg-gray-50 text-gray-900 min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
