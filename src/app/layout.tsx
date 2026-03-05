import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Montenegro Team Building — Activities & Events",
    template: "%s | Montenegro Team Building",
  },
  description:
    "Professional team-building activities and corporate events across Montenegro. From the Bay of Kotor to Durmitor, we create unforgettable experiences for groups of all sizes.",
  keywords: [
    "Montenegro",
    "team building",
    "corporate events",
    "Bay of Kotor",
    "activities",
    "Budva",
    "Durmitor",
  ],
  openGraph: {
    title: "Montenegro Team Building — Activities & Events",
    description:
      "Professional team-building activities and corporate events across Montenegro.",
    type: "website",
    locale: "en_US",
    siteName: "Montenegro Team Building",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-gray-50 text-gray-900 min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
