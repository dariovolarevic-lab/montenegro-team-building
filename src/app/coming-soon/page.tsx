import Image from 'next/image'
import { HiMail, HiPhone } from 'react-icons/hi'

export const metadata = {
  title: 'Coming Soon | Montenegro Team Building',
  description: 'Something exciting is coming. Montenegro Team Building — unforgettable experiences in the heart of the Adriatic.',
}

export default function ComingSoonPage() {
  return (
    <main className="min-h-screen bg-slate-900 flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-2xl w-full text-center">
        {/* Logo */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <Image
            src="/images/gallery/logo.png"
            alt="Montenegro Team Building"
            width={56}
            height={56}
            className="object-contain"
          />
          <div className="text-left leading-tight">
            <div className="text-white font-bold text-lg tracking-wide">MONTENEGRO</div>
            <div className="text-amber-400 font-medium text-sm tracking-widest uppercase">Team Building</div>
          </div>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight">
          COMING
          <span className="block text-amber-400">SOON</span>
        </h1>

        {/* Divider */}
        <div className="w-24 h-1 bg-amber-400 mx-auto mb-8 rounded-full" />

        {/* Description */}
        <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-12">
          We are crafting something extraordinary for you. 
          Unforgettable team building experiences in the heart of Montenegro — 
          the most beautiful country on the Adriatic.
        </p>

        {/* Contact */}
        <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
          <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-6">
            Get in touch in the meantime
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="mailto:info@montenegroteambuilding.com"
              className="flex items-center gap-3 text-white hover:text-amber-400 transition-colors duration-200"
            >
              <HiMail className="w-5 h-5 text-amber-400 shrink-0" />
              <span>info@montenegroteambuilding.com</span>
            </a>
            <a
              href="tel:+38269123456"
              className="flex items-center gap-3 text-white hover:text-amber-400 transition-colors duration-200"
            >
              <HiPhone className="w-5 h-5 text-amber-400 shrink-0" />
              <span>+382 69 123 456</span>
            </a>
          </div>
        </div>

        {/* Footer note */}
        <p className="text-slate-600 text-sm mt-12">
          © {new Date().getFullYear()} Montenegro Team Building. All rights reserved.
        </p>
      </div>
    </main>
  )
}
