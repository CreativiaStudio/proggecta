"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, MapPin } from "lucide-react";

const MOBILE_SLIDES = [
  {
    src: "/media/hero/hero-1.jpg",
    alt: "Cucina sartoriale con isola in marmo nero venato e doghe in noce — Proggecta",
    label: "Cucine su misura",
  },
  {
    src: "/media/hero/hero-3.jpg",
    alt: "Open space completo con isola e zona living panoramica — Proggecta",
    label: "Tutta la casa",
  },
  {
    src: "/media/hero/hero-4.jpg",
    alt: "Cucina d'autore in pietra scura e cantina vini illuminata — Proggecta",
    label: "Alta falegnameria",
  },
];

export function MobileHeroGallery() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);
  const userInteracted = useRef(false);

  // Aggiorna l'indicatore attivo durante lo swipe manuale
  const handleScroll = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const slideWidth = el.clientWidth * 0.86;
    const idx = Math.round(el.scrollLeft / slideWidth);
    setActive(Math.min(MOBILE_SLIDES.length - 1, Math.max(0, idx)));
  };

  // Scorrimento gentile automatico finché l'utente non tocca la gallery
  useEffect(() => {
    const id = window.setInterval(() => {
      if (userInteracted.current) return;
      const el = scrollerRef.current;
      if (!el) return;
      setActive((prev) => {
        const next = (prev + 1) % MOBILE_SLIDES.length;
        const slideWidth = el.clientWidth * 0.86 + 12;
        el.scrollTo({ left: next * slideWidth, behavior: "smooth" });
        return next;
      });
    }, 4500);
    return () => window.clearInterval(id);
  }, []);

  const goTo = (idx: number) => {
    userInteracted.current = true;
    const el = scrollerRef.current;
    if (!el) return;
    const slideWidth = el.clientWidth * 0.86 + 12;
    el.scrollTo({ left: idx * slideWidth, behavior: "smooth" });
    setActive(idx);
  };

  return (
    <section className="lg:hidden bg-[#14110e] text-[#faf7f2] pt-5 pb-9 overflow-x-clip">
      {/* 1. Logo in alto centrato (zero barre sticky sopra) */}
      <div className="flex justify-center px-4 pb-4">
        <Link href="/" aria-label="Proggecta Home" className="inline-flex items-center">
          <img
            src="/media/logos/proggecta-horizontal-light.svg"
            alt="Proggecta — Studio di Progettazione"
            className="h-7 w-auto object-contain"
          />
        </Link>
      </div>

      {/* 2. Gallery fotografica orizzontale fluida a pieno impatto */}
      <div className="relative">
        <div
          ref={scrollerRef}
          onScroll={handleScroll}
          onTouchStart={() => {
            userInteracted.current = true;
          }}
          className="flex gap-3 overflow-x-auto snap-x snap-mandatory px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {MOBILE_SLIDES.map((slide, idx) => (
            <div
              key={slide.src}
              className="relative w-[86vw] shrink-0 snap-center aspect-[16/10] overflow-hidden rounded-2xl border border-white/15 bg-[#1e1914] shadow-xl"
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={idx === 0}
                sizes="86vw"
                className="object-cover object-center"
              />
              <div
                className="pointer-events-none absolute inset-x-0 bottom-0 h-16"
                style={{
                  background: "linear-gradient(to top, rgba(16,13,10,0.72), transparent)",
                }}
              />
              <span className="absolute bottom-3 left-3.5 rounded-full bg-[#14110e]/75 backdrop-blur-sm border border-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#dfc094]">
                {slide.label}
              </span>
            </div>
          ))}
        </div>

        {/* Indicatori gallery */}
        <div className="mt-2.5 flex items-center justify-center gap-2">
          {MOBILE_SLIDES.map((s, idx) => (
            <button
              key={s.src}
              type="button"
              aria-label={`Foto ${idx + 1}`}
              onClick={() => goTo(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === active ? "w-6 bg-[#dfc094]" : "w-1.5 bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>

      {/* 3. Titolo e descrizione subito sotto la foto, above the fold */}
      <div className="px-5 pt-5">
        <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#dfc094]">
          <MapPin className="h-3 w-3" />
          <span>Arredamento Sartoriale · Nocera Inferiore</span>
        </div>

        <h1 className="font-serif text-[32px] sm:text-4xl font-medium leading-[1.06] tracking-tight mb-3">
          Devi arredare casa?{" "}
          <span className="block italic font-normal text-[#dfc094] mt-0.5">
            Sei nel posto giusto.
          </span>
        </h1>

        <p className="text-[15px] font-light leading-relaxed text-[#faf7f2]/88 mb-4">
          Arredamento sartoriale al millimetro, dalla singola cucina alla casa completa. Qualità
          artigianale e materiali veri al giusto prezzo — senza compromessi e senza spendere una
          follia.
        </p>

        <div className="inline-flex items-center gap-2 text-xs text-[#e7c799] font-medium">
          <Check className="h-4 w-4 shrink-0 text-[#dfc094]" />
          <span>Consulenza e progetto 3D gratuiti · Senza impegno</span>
        </div>
      </div>
    </section>
  );
}
