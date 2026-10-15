"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  ArrowUpRight,
} from "lucide-react";

export interface GalleryPhoto {
  src: string;
  alt: string;
  caption?: string;
  tag?: string;
}

interface BrandGalleryProps {
  brandName: string;
  category: string;
  photos: GalleryPhoto[];
}

export function BrandGallery({
  brandName,
  category,
  photos,
}: BrandGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selectedPhoto =
    selectedIndex !== null ? photos[selectedIndex] ?? null : null;

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const handleStep = useCallback(
    (delta: 1 | -1) => {
      if (selectedIndex === null || photos.length < 2) return;
      setSelectedIndex((prev) =>
        prev === null ? 0 : (prev + delta + photos.length) % photos.length
      );
    },
    [selectedIndex, photos.length]
  );

  useEffect(() => {
    if (selectedIndex === null) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      else if (e.key === "ArrowRight") handleStep(1);
      else if (e.key === "ArrowLeft") handleStep(-1);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedIndex, handleClose, handleStep]);

  if (!photos || photos.length === 0) return null;

  // Layout asimmetrico editoriale in base al numero di scatti
  const getGridClass = (idx: number, total: number) => {
    if (total === 2) {
      return idx === 0
        ? "lg:col-span-7 aspect-[16/11]"
        : "lg:col-span-5 aspect-[4/3] lg:aspect-auto lg:h-full";
    }
    if (total === 3) {
      if (idx === 0) return "lg:col-span-7 lg:row-span-2 aspect-[16/11] lg:aspect-auto lg:min-h-[540px]";
      return "lg:col-span-5 aspect-[16/10]";
    }
    if (total === 4) {
      if (idx === 0) return "lg:col-span-7 aspect-[16/10]";
      if (idx === 1) return "lg:col-span-5 aspect-[4/3] lg:aspect-auto lg:h-full";
      if (idx === 2) return "lg:col-span-5 aspect-[4/3] lg:aspect-auto lg:h-full";
      return "lg:col-span-7 aspect-[16/10]";
    }
    // 5 o più foto
    if (idx === 0) return "lg:col-span-7 aspect-[16/10]";
    if (idx === 1) return "lg:col-span-5 aspect-[4/3] lg:aspect-auto lg:h-full";
    return "lg:col-span-4 aspect-[4/3]";
  };

  return (
    <section
      id="galleria"
      className="py-24 sm:py-32 bg-[#1f1b16] text-[#faf7f2] border-b border-white/10 scroll-mt-20"
    >
      <Container>
        {/* Header Editoriale */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 sm:mb-18 pb-8 border-b border-white/10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.24em] text-[#c9a06a] mb-4">
              <span className="w-6 h-px bg-[#8a5a32]" />
              <span>Portfolio &amp; Dettagli · {brandName}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-white tracking-tight leading-[1.1] [text-wrap:balance]">
              Materia, luce e proporzioni dal vivo.
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#d9cfc1]/80 max-w-md leading-relaxed font-light">
            Esplora le composizioni {brandName} per {category.toLowerCase()}.
            Seleziona qualsiasi immagine per ispezionare finiture, essenze e
            dettagli costruttivi a pieno schermo.
          </p>
        </div>

        {/* Griglia Fotografica Asimmetrica a 12 colonne */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          {photos.map((photo, idx) => {
            const spanClass = getGridClass(idx, photos.length);
            return (
              <Reveal
                key={photo.src + idx}
                delay={idx * 0.07}
                className={spanClass}
              >
                <button
                  type="button"
                  onClick={() => setSelectedIndex(idx)}
                  aria-label={`Ingrandisci immagine: ${photo.alt}`}
                  className="group relative w-full h-full min-h-[280px] rounded-3xl overflow-hidden cursor-pointer bg-[#2a241e] border border-white/10 hover:border-[#8a5a32]/80 transition-all duration-500 text-left block shadow-lg"
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />

                  {/* Gradiente editoriale continuo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14110e]/90 via-[#14110e]/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                  {/* Badge numerico in alto a sinistra */}
                  <div className="absolute top-5 left-5 z-10 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#1f1b16]/75 backdrop-blur-md border border-white/15 text-[11px] font-mono tracking-widest text-[#d9cfc1]">
                      0{idx + 1}
                    </span>
                    {photo.tag && (
                      <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#faf7f2]">
                        {photo.tag}
                      </span>
                    )}
                  </div>

                  {/* Icona zoom in alto a destra */}
                  <div className="absolute top-5 right-5 z-10 w-10 h-10 rounded-full bg-white/10 group-hover:bg-[#8a5a32] backdrop-blur-md border border-white/20 text-white flex items-center justify-center transition-all duration-300 group-hover:scale-105">
                    <Maximize2 className="w-4 h-4" />
                  </div>

                  {/* Didascalia architetturale in basso */}
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 z-10 flex items-end justify-between gap-4">
                    <div>
                      <p className="text-white font-serif text-lg sm:text-2xl font-normal leading-snug [text-wrap:balance]">
                        {photo.alt}
                      </p>
                      {photo.caption && photo.caption !== photo.alt && (
                        <p className="text-xs text-[#d9cfc1]/70 uppercase tracking-[0.16em] mt-1.5">
                          {photo.caption}
                        </p>
                      )}
                    </div>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </Container>

      {/* Modal Lightbox Interattivo con navigazione */}
      {selectedPhoto && selectedIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedPhoto.alt}
          onClick={handleClose}
          className="fixed inset-0 z-50 bg-[#0e0c0a]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
        >
          {/* Chiudi */}
          <button
            type="button"
            onClick={handleClose}
            className="absolute top-5 right-5 sm:top-7 sm:right-7 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-[#8a5a32] text-white flex items-center justify-center transition-colors border border-white/20 cursor-pointer"
            aria-label="Chiudi anteprima"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Precedente / Successiva */}
          {photos.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleStep(-1);
                }}
                aria-label="Immagine precedente"
                className="absolute left-3 sm:left-7 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-[#8a5a32] text-white flex items-center justify-center transition-colors border border-white/20 cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleStep(1);
                }}
                aria-label="Immagine successiva"
                className="absolute right-3 sm:right-7 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-[#8a5a32] text-white flex items-center justify-center transition-colors border border-white/20 cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-6xl w-full rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-[#161310]"
          >
            <div className="relative aspect-[16/10] w-full max-h-[74vh] bg-[#0e0c0a]">
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>

            <div className="p-6 sm:p-7 bg-[#1f1b16] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xs font-mono text-[#c9a06a]">
                    0{selectedIndex + 1} / 0{photos.length}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-white/30" />
                  <span className="text-[11px] text-[#a3af97] uppercase tracking-[0.18em]">
                    Selezione Ufficiale {brandName}
                  </span>
                </div>
                <p className="text-white font-serif text-lg sm:text-xl">
                  {selectedPhoto.alt}
                </p>
              </div>

              <a
                href="#prenota"
                onClick={handleClose}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#8a5a32] hover:bg-[#6f4626] text-white text-xs sm:text-sm font-medium transition-colors shrink-0 w-fit"
              >
                <span>Richiedi nel tuo progetto</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
