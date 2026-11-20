"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const SLIDES = [
  {
    src: "/media/hero/hero-1.jpg",
    alt: "Cucina sartoriale con isola in marmo nero venato e boiserie in noce — Atelier Proggecta",
    motionClass: "animate-kb-1",
  },
  {
    src: "/media/hero/hero-3.jpg",
    alt: "Open space sartoriale con cucina ad isola e zona living panoramica — Atelier Proggecta",
    motionClass: "animate-kb-2",
  },
  {
    src: "/media/hero/hero-4.jpg",
    alt: "Cucina d'autore ad angolo in pietra scura e cantina vini illuminata su misura — Atelier Proggecta",
    motionClass: "animate-kb-3",
  },
];

const INTERVAL_MS = 5800;

export function HeroBackgroundSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden bg-[#120f0c]"
      aria-hidden="true"
    >
      <style>{`
        @keyframes kbOne {
          0% { transform: scale(1.0) translate3d(0%, 0%, 0); }
          100% { transform: scale(1.09) translate3d(-1.5%, -0.8%, 0); }
        }
        @keyframes kbTwo {
          0% { transform: scale(1.08) translate3d(-1.2%, 0.6%, 0); }
          100% { transform: scale(1.0) translate3d(1%, -0.8%, 0); }
        }
        @keyframes kbThree {
          0% { transform: scale(1.0) translate3d(0.8%, 0%, 0); }
          100% { transform: scale(1.09) translate3d(-1%, 0.8%, 0); }
        }
        .animate-kb-1 { animation: kbOne 11.6s ease-in-out infinite alternate; }
        .animate-kb-2 { animation: kbTwo 11.6s ease-in-out infinite alternate; }
        .animate-kb-3 { animation: kbThree 11.6s ease-in-out infinite alternate; }
        @media (prefers-reduced-motion: reduce) {
          .animate-kb-1, .animate-kb-2, .animate-kb-3 {
            animation: none !important;
            transform: scale(1.02) !important;
          }
        }
      `}</style>

      {SLIDES.map((slide, idx) => {
        const isActive = idx === active;
        return (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-[1800ms] ease-in-out ${
              isActive ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className={`relative h-full w-full will-change-transform ${slide.motionClass}`}>
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={idx === 0}
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        );
      })}

      {/* Gradiente caldo da galleria: valorizza l'arredo e garantisce contrasto WCAG AAA sul copy */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(108deg, rgba(16,13,10,0.88) 0%, rgba(16,13,10,0.68) 46%, rgba(16,13,10,0.44) 100%)",
        }}
      />
      <div
        className="absolute inset-x-0 top-0 h-28"
        style={{
          background: "linear-gradient(to bottom, rgba(16,13,10,0.58), transparent)",
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-24"
        style={{
          background: "linear-gradient(to top, rgba(16,13,10,0.72), transparent)",
        }}
      />

      {/* Indicatori discreti slide in basso a sinistra (desktop) */}
      <div className="hidden lg:flex items-center gap-2 absolute bottom-7 left-10 z-10">
        {SLIDES.map((s, idx) => (
          <span
            key={s.src}
            className={`h-0.5 rounded-full transition-all duration-500 ${
              idx === active ? "w-8 bg-[#dfc094]" : "w-3 bg-white/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
