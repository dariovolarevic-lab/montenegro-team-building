"use client";

const logos = [
  { name: "Partner 1", src: "/images/logos/1.webp" },
  { name: "Partner 2", src: "/images/logos/2.webp" },
  { name: "Partner 3", src: "/images/logos/3.webp" },
  { name: "Partner 4", src: "/images/logos/4.webp" },
  { name: "Partner 5", src: "/images/logos/5.webp" },
  { name: "Partner 6", src: "/images/logos/6.webp" },
];

// Both rows show all 8 logos but animate in opposite directions
// 4 copies ensures the strip (4 × 8 × 196px ≈ 6272px) covers any screen — no gap during loop
const row1Double = [...logos, ...logos, ...logos];
const row2Double = [...logos, ...logos, ...logos];

export default function LogoCarousel() {
  return (
    <section className="py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-slate-900 rounded-3xl py-16 overflow-hidden relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 h-full w-32 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, #0f172a, transparent)" }} />
        <div className="absolute right-0 top-0 h-full w-32 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, #0f172a, transparent)" }} />
      {/* Row 1 — slides left */}
      <div className="relative mb-4">
        <div
          className="flex gap-4"
          style={{ animation: "ticker 50s linear infinite", width: "max-content", willChange: "transform" }}
        >
          {row1Double.map((logo, idx) => (
            <div
              key={idx}
              className="shrink-0 bg-white rounded-2xl flex items-center justify-center shadow-lg"
              style={{ width: "210px", height: "130px" }}
            >
              <img
                src={logo.src}
                alt={logo.name}
                width={180}
                height={80}
                loading="lazy"
                className="max-h-20 max-w-[180px] object-contain"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = "none";
                  const parent = target.parentElement;
                  if (parent && !parent.querySelector("span")) {
                    const span = document.createElement("span");
                    span.textContent = logo.name;
                    span.className = "text-slate-700 font-bold text-sm tracking-wider text-center px-2";
                    parent.appendChild(span);
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — slides right (offset) */}
      <div className="relative mb-10" style={{ marginLeft: "-90px" }}>
        <div
          className="flex gap-4"
          style={{ animation: "ticker 60s linear infinite reverse", width: "max-content", willChange: "transform" }}
        >
          {row2Double.map((logo, idx) => (
            <div
              key={idx}
              className="shrink-0 bg-white rounded-2xl flex items-center justify-center shadow-lg"
              style={{ width: "210px", height: "130px" }}
            >
              <img
                src={logo.src}
                alt={logo.name}
                width={180}
                height={80}
                loading="lazy"
                className="max-h-20 max-w-[180px] object-contain"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = "none";
                  const parent = target.parentElement;
                  if (parent && !parent.querySelector("span")) {
                    const span = document.createElement("span");
                    span.textContent = logo.name;
                    span.className = "text-slate-700 font-bold text-sm tracking-wider text-center px-2";
                    parent.appendChild(span);
                  }
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Text below */}
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
          Join 100+ Companies Who&apos;ve Transformed Teamwork and Communication with Us!
        </h2>
        <p className="text-slate-300 text-base md:text-lg leading-relaxed">
          We take pride in having partnered with a wide range of renowned local and international corporations to create memorable and impactful team-building experiences. Our expertise in organizing engaging events has earned the trust of top companies across various industries.
        </p>
      </div>
      </div>
      </div>
    </section>
  );
}
