import Link from "next/link";
import { HiMail } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Column 1 — Brand & Description */}
          <div>
            <h3 className="text-white text-xl font-bold uppercase tracking-widest mb-3">
              Montenegro Team Building
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
              We are a Montenegro-based team of experts who specialize in
              organizing team-building activities across the country. Each
              program is customized to the client&apos;s needs and completely new
              activities are often created or tailor-made.
            </p>
          </div>

          {/* Column 2 — Logo */}
          <div className="flex flex-col items-center justify-center">
            <Link href="/" className="flex items-center gap-0" aria-label="Montenegro Team Building — Home">
              <img
                src="/images/gallery/logo.png"
                alt="Montenegro Team Building logo"
                width={96}
                height={96}
                className="h-24 w-auto object-contain"
              />
              <div className="flex flex-col leading-none self-center items-center">
                <span className="text-white text-base font-semibold uppercase tracking-widest">
                  Montenegro
                </span>
                <span className="text-amber-400 text-base font-semibold uppercase tracking-widest">
                  Team Building
                </span>
              </div>
            </Link>
          </div>

          {/* Column 3 — Contact Info */}
          <div>
            <h4 className="text-white text-xl font-bold uppercase tracking-widest mb-4">
              Contact Info
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <HiMail className="text-amber-400 shrink-0" size={18} />
                <a
                  href="mailto:info@montenegroteambuilding.com"
                  className="hover:text-amber-400 transition-colors"
                >
                  info@montenegroteambuilding.com
                </a>
              </div>
              <div className="mt-4">
                <Link
                  href="/contact"
                  className="inline-block border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-slate-900 font-semibold py-2 px-6 rounded-full text-sm uppercase tracking-wider transition-all duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Montenegro Team Building. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
