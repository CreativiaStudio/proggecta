"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface CarouselBrandItem {
  name: string;
  category: string;
  slug: string;
  logoSrc: string;
  isSvg?: boolean;
}

const defaultBrandItems: CarouselBrandItem[] = [
  {
    name: "Ciesse",
    category: "Cucine Sartoriali",
    slug: "ciesse",
    logoSrc: "/media/logos/ciesse.svg",
    isSvg: true,
  },
  {
    name: "Moretti Compact",
    category: "Camerette & Cabine Armadio",
    slug: "moretti-compact",
    logoSrc: "/media/logos/moretti-compact.png",
  },
  {
    name: "Mercantini",
    category: "Armadi & Zona Notte",
    slug: "mercantini",
    logoSrc: "/media/logos/mercantini.svg",
    isSvg: true,
  },
  {
    name: "Zamagna",
    category: "Tavoli, Sedie & Living",
    slug: "zamagna",
    logoSrc: "/media/logos/zamagna.svg",
    isSvg: true,
  },
  {
    name: "Smeg",
    category: "Elettrodomestici di Design",
    slug: "elettrodomestici",
    logoSrc: "/media/logos/smeg.svg",
    isSvg: true,
  },
  {
    name: "Electrolux",
    category: "Tecnologia & Cottura",
    slug: "elettrodomestici",
    logoSrc: "/media/logos/electrolux.svg",
    isSvg: true,
  },
  {
    name: "Signorini & Coco",
    category: "Arredo Sartoriale & Classico",
    slug: "signorini-coco",
    logoSrc: "/media/logos/signorini-coco.svg",
    isSvg: true,
  },
  {
    name: "Ferretti e Ferretti",
    category: "Tradizione D'Interni",
    slug: "ferretti-ferretti",
    logoSrc: "/media/logos/ferretti-ferretti.svg",
    isSvg: true,
  },
  {
    name: "Poziello & Riccardi",
    category: "Legni, Pannelli & Multistrato",
    slug: "materiali-pannelli",
    logoSrc: "/media/logos/poziello-riccardi.svg",
    isSvg: true,
  },
];

interface BrandCarouselProps {
  label?: string;
  items?: CarouselBrandItem[];
}

export function BrandCarousel({
  label = "Selezioniamo e progettiamo con l'eccellenza italiana",
  items = defaultBrandItems,
}: BrandCarouselProps) {
  // Mostriamo 4 colonne su desktop, 2 su tablet, 1 su mobile
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = items.length;

  // Massimo index consentito per mostrare sempre 4 colonne piene da desktop (o loop continuo)
  const maxIndex = Math.max(0, total - 4);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Autoplay continuo ogni 3.5s se non in hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 3500);
    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  return (
    <section
      aria-label="Marchi selezionati"
      className="py-10 bg-[#faf7f2] border-y border-[#d9cfc1]/70 relative overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Container>
        {/* Header con titolo ed eleganti frecce di controllo */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8a5a32]">
              I Fornitori Ufficiali
            </p>
            <h3 className="font-serif text-lg sm:text-xl text-[#1f1b16] font-normal tracking-tight mt-0.5">
              {label}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              aria-label="Precedente"
              className="w-9 h-9 rounded-full bg-white border border-[#d9cfc1] hover:border-[#8a5a32] text-[#4a443c] hover:text-[#8a5a32] flex items-center justify-center transition-all shadow-xs hover:shadow-sm"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Successivo"
              className="w-9 h-9 rounded-full bg-white border border-[#d9cfc1] hover:border-[#8a5a32] text-[#4a443c] hover:text-[#8a5a32] flex items-center justify-center transition-all shadow-xs hover:shadow-sm"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Viewport del Carosello a 4 colonne */}
        <div className="overflow-hidden -mx-3 px-3">
          <div
            className="flex transition-transform duration-700 ease-out gap-4 sm:gap-6"
            style={{
              // In desktop ogni card occupa il 25% meno il gap (4 colonne)
              // In tablet 50% (2 colonne)
              // In mobile 85% (1 colonna + pezzo della successiva)
              transform: `translateX(-${currentIndex * 268}px)`,
            }}
          >
            {items.map((item, idx) => (
              <Link
                key={`${item.slug}-${idx}`}
                href={`/brand/${item.slug}`}
                title={item.name}
                className="group shrink-0 w-[220px] sm:w-[240px] md:w-[250px] lg:w-[260px] bg-white rounded-2xl p-6 border border-[#d9cfc1]/80 hover:border-[#8a5a32]/60 shadow-xs hover:shadow-lg transition-all duration-300 flex items-center justify-center h-[104px] sm:h-[114px]"
              >
                {/* Solo Logo Ufficiale centrato con effetto luxury */}
                <Image
                  src={item.logoSrc}
                  alt={`Logo ${item.name}`}
                  width={180}
                  height={56}
                  className="max-h-10 sm:max-h-12 w-auto max-w-[150px] sm:max-w-[160px] object-contain filter grayscale contrast-125 opacity-75 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Indicatori Dots di scorrimento */}
        <div className="flex items-center justify-center gap-1.5 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setCurrentIndex(dotIdx)}
              aria-label={`Vai alla posizione ${dotIdx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentIndex === dotIdx
                  ? "w-6 bg-[#8a5a32]"
                  : "w-1.5 bg-[#d9cfc1] hover:bg-[#a3af97]"
              }`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
