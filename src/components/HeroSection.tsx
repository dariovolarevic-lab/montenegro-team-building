interface HeroSectionProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
  compact?: boolean;
}

export default function HeroSection({
  title,
  subtitle,
  backgroundImage,
  compact = false,
}: HeroSectionProps) {
  return (
    <section className="relative w-full">
      {/* Background image — full, no cropping */}
      {backgroundImage && (
        <img
          src={backgroundImage}
          alt="Hero"
          className="w-full h-auto block"
        />
      )}
      {!backgroundImage && (
        <div className={`${compact ? "min-h-[40vh]" : "min-h-[70vh]"} bg-slate-700`} />
      )}
      {/* Overlay */}
      <div className="absolute inset-0 bg-slate-900/0" />

      {/* Content */}
      {(title || subtitle) && (
      <div className="absolute inset-0 z-10 flex items-center justify-center text-center text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        {title && (
        <h1
          className={`font-bold uppercase tracking-wide leading-tight ${
            compact
              ? "text-3xl md:text-4xl lg:text-5xl"
              : "text-4xl md:text-5xl lg:text-6xl"
          }`}
        >
          {title}
        </h1>
        )}
        {title && subtitle && <div className="w-20 h-1 bg-amber-400 mx-auto my-5" />}
        {subtitle && (
        <p
          className={`text-gray-200 max-w-2xl mx-auto ${
            compact ? "text-base md:text-lg" : "text-lg md:text-xl"
          }`}
        >
          {subtitle}
        </p>
        )}
        </div>
      </div>
      )}
    </section>
  );
}
