"use client";

import { useEffect, useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number; // ms
  fade?: boolean; // just fade, no slide
  fromLeft?: boolean;
  fromRight?: boolean;
  className?: string;
}

export default function ScrollReveal({
  children,
  delay = 0,
  fade = false,
  fromLeft = false,
  fromRight = false,
  className = "",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add("visible");
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const revealClass = fromLeft ? "reveal-left" : fromRight ? "reveal-right" : fade ? "reveal-fade" : "reveal";

  return (
    <div
      ref={ref}
      className={`${revealClass} ${className}`}
    >
      {children}
    </div>
  );
}
