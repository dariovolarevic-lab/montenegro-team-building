"use client";

import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "@/components/icons";
import QuoteModal from "./QuoteModal";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20 relative">

            {/* Logo / Brand */}
            <Link href="/" className="flex items-center gap-0 group shrink-0 relative z-10" aria-label="Montenegro Team Building — Home">
              <img
                src="/images/gallery/logo.png"
                alt="Montenegro Team Building logo"
                width={64}
                height={64}
                className="h-16 md:h-18 w-auto object-contain"
              />
              <div className="flex flex-col leading-none self-center items-center">
                <span className="text-white text-xs md:text-sm font-semibold uppercase tracking-widest">
                  Montenegro
                </span>
                <span className="text-amber-400 text-xs md:text-sm font-semibold uppercase tracking-widest">
                  Team Building
                </span>
              </div>
            </Link>

            {/* Center: Get My Quote button — absolutely centered */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
              <button
                onClick={() => setQuoteOpen(true)}
                className="btn-quote bg-amber-400 hover:bg-amber-500 text-slate-900 font-bold py-2 px-6 rounded-full text-sm uppercase tracking-wider transition-all duration-300 shadow-lg"
              >
                Get My Quote
              </button>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8 shrink-0">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-gray-300 hover:text-amber-400 transition-colors text-sm uppercase tracking-wider font-medium group pb-1"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </nav>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden text-white p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-slate-900/98 border-t border-slate-700">
            <nav className="flex flex-col px-4 py-4 gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-300 hover:text-amber-400 transition-colors text-base uppercase tracking-wider py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={() => { setMenuOpen(false); setQuoteOpen(true); }}
                className="btn-quote mt-2 bg-amber-400 text-slate-900 font-bold py-3 px-6 rounded-full text-sm uppercase tracking-wider w-full"
              >
                Get My Quote
              </button>
            </nav>
          </div>
        )}
      </header>

      {quoteOpen && <QuoteModal onClose={() => setQuoteOpen(false)} />}
    </>
  );
}
