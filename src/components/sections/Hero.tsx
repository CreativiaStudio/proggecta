"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import type { ImageAsset, VideoAsset } from "@/data/types";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { cn } from "@/lib/cn";

interface HeroProps {
  eyebrow: string;
  headline: string;
  subheadline: string;
  image: ImageAsset;
  images?: ImageAsset[];
  video?: VideoAsset;
  cta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  microcopy?: string;
  chips?: Array<{ icon: string; label: string }>;
}

export function Hero({
  eyebrow,
  headline,
  subheadline,
  image,
  images,
  chips,
}: HeroProps) {
  // Lista delle foto di design (se passate, altrimenti singola foto)
  const slideList: ImageAsset[] = images && images.length > 0 ? images : [image];
  const [activeIdx, setActiveIdx] = useState(0);

  // Scorrimento cinematografico ogni 5.5 secondi
  useEffect(() => {
    if (slideList.length <= 1) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % slideList.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [slideList.length]);

  return (
    <section className="relative bg-[#1f1b16] overflow-hidden">
      {/* =========================================================================
          VERSIONE MOBILE (< md): SLIDER IN ALTO + TESTO SOTTO (Above-The-Fold)
          ========================================================================= */}
      <div className="flex flex-col md:hidden">
        {/* Slider fotografico in alto */}
        <div className="relative w-full h-[38vh] min-h-[250px] max-h-[320px] overflow-hidden bg-[#161310]">
          {slideList.map((slide, idx) => {
            const isActive = idx === activeIdx;
            return (
              <div
                key={`mob-${slide.src}`}
                className={cn(
                  "absolute inset-0 transition-opacity duration-1000 ease-in-out",
                  isActive ? "opacity-100 z-1" : "opacity-0 z-0"
                )}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={idx === 0}
                  sizes="100vw"
                  className={cn(
                    "object-cover object-center transition-transform duration-[6000ms] ease-out",
                    isActive ? "scale-106" : "scale-100"
                  )}
                />
              </div>
            );
          })}

          {/* Velo superiore per contrasto trasparente con la navbar mobile */}
          <div className="absolute top-0 inset-x-0 h-20 bg-gradient-to-b from-[#1f1b16]/80 via-[#1f1b16]/30 to-transparent z-2 pointer-events-none" />
          {/* Velo inferiore leggero per fondersi morbidamente col testo sotto */}
          <div className="absolute bottom-0 inset-x-0 h-14 bg-gradient-to-t from-[#1f1b16] to-transparent z-2 pointer-events-none" />

          {/* Indicatore slide compatto in basso a destra sopra l'immagine */}
          {slideList.length > 1 && (
            <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-white text-[11px]">
              <span className="font-serif font-medium">0{activeIdx + 1}</span>
              <span className="text-white/40">/</span>
              <span className="text-white/40">0{slideList.length}</span>
              <div className="flex items-center gap-1 ml-1.5">
                {slideList.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIdx(i)}
                    aria-label={`Slide ${i + 1}`}
                    className={cn(
                      "h-1 rounded-full transition-all duration-300",
                      i === activeIdx ? "w-3 bg-[#8a5a32]" : "w-1 bg-white/40"
                    )}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Contenuto testuale subito sotto lo slider */}
        <div className="px-4.5 pt-4 pb-10 bg-[#1f1b16] relative z-10">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#faf7f2]/10 border border-[#faf7f2]/15 text-[#d9cfc1] text-[11px] font-semibold uppercase tracking-[0.18em] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8a5a32]" />
            <span>{eyebrow}</span>
          </div>

          {/* H1 Headline */}
          <h1 className="font-serif text-[27px] sm:text-3xl font-normal text-white tracking-tight leading-[1.14] mb-3 [text-wrap:balance]">
            {headline}
          </h1>

          {/* Subheadline */}
          <p className="text-[13.5px] sm:text-sm text-[#d9cfc1] leading-relaxed mb-5 font-light">
            {subheadline}
          </p>

          {/* Trust Chips su mobile (griglia 2 colonne pulita) */}
          {chips && chips.length > 0 && (
            <div className="grid grid-cols-2 gap-2 pt-4 border-t border-white/10">
              {chips.map((chip, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-[11.5px] text-white/90 bg-white/5 backdrop-blur-xs px-2.5 py-2 rounded-lg border border-white/10"
                >
                  <Icon
                    name={chip.icon as any}
                    className="w-3.5 h-3.5 text-[#8a5a32] shrink-0"
                  />
                  <span className="leading-tight">{chip.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* =========================================================================
          VERSIONE DESKTOP (md:flex): PANORAMICA CON CUCINA SCHIARITA A DESTRA
          ========================================================================= */}
      <div className="hidden md:flex min-h-[92vh] lg:min-h-screen flex-col justify-center pt-28 pb-16 lg:pb-24 relative">
        {/* Background Slideshow immersivo Ken Burns */}
        <div className="absolute inset-0 z-0">
          {slideList.map((slide, idx) => {
            const isActive = idx === activeIdx;
            return (
              <div
                key={`desk-${slide.src}`}
                className={cn(
                  "absolute inset-0 transition-opacity duration-1000 ease-in-out",
                  isActive ? "opacity-100 z-1" : "opacity-0 z-0"
                )}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={idx === 0}
                  sizes="100vw"
                  className={cn(
                    "object-cover object-center transition-transform duration-[6000ms] ease-out",
                    isActive ? "scale-108" : "scale-100"
                  )}
                />
              </div>
            );
          })}

          {/* 
            Overlay calibrato:
            - A sinistra: gradiente scuro solo per garantire contrasto leggibile al testo
            - A destra (la cucina con l'isola, boiserie e mensole): schiarita e limpida, senza patina scura
          */}
          <div className="absolute inset-0 z-2 bg-gradient-to-r from-[#1f1b16]/95 via-[#1f1b16]/75 via-45% to-transparent w-full md:w-[62%] lg:w-[50%]" />
          
          {/* Velo leggero superiore per contrasto navbar */}
          <div className="absolute top-0 inset-x-0 h-24 z-2 bg-gradient-to-b from-[#1f1b16]/50 via-transparent to-transparent pointer-events-none" />

          {/* Velo leggero solo negli ultimi 80px inferiori per fusione morbida */}
          <div className="absolute bottom-0 inset-x-0 h-24 z-2 bg-gradient-to-t from-[#1f1b16] via-[#1f1b16]/30 to-transparent pointer-events-none" />
        </div>

        {/* Testo Hero Desktop */}
        <Container className="relative z-10 my-auto">
          <div className="max-w-2xl lg:max-w-3xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#faf7f2]/10 backdrop-blur-md border border-[#faf7f2]/15 text-[#d9cfc1] text-xs font-semibold uppercase tracking-[0.2em] mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8a5a32]" />
              <span>{eyebrow}</span>
            </div>

            {/* H1 Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-white tracking-tight leading-[1.05] mb-6 [text-wrap:balance]">
              {headline}
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-[#d9cfc1] leading-relaxed mb-10 max-w-2xl font-light [text-wrap:balance]">
              {subheadline}
            </p>

            {/* Trust Chips orizzontali */}
            {chips && chips.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-6 border-t border-white/10">
                {chips.map((chip, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 text-xs sm:text-sm text-white/90 bg-white/5 backdrop-blur-xs px-3.5 py-2.5 rounded-xl border border-white/10"
                  >
                    <Icon
                      name={chip.icon as any}
                      className="w-4 h-4 text-[#8a5a32] shrink-0"
                    />
                    <span className="leading-snug">{chip.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </Container>

        {/* Indicatore slide Desktop in basso a destra */}
        {slideList.length > 1 && (
          <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 z-10 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/30 backdrop-blur-md border border-white/10 text-white/80 text-xs">
            <span className="font-serif font-medium text-white">0{activeIdx + 1}</span>
            <span className="text-white/40">/</span>
            <span className="text-white/40">0{slideList.length}</span>
            <div className="flex items-center gap-1 ml-2">
              {slideList.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  aria-label={`Slide ${i + 1}`}
                  className={cn(
                    "h-1 rounded-full transition-all duration-500",
                    i === activeIdx ? "w-4 bg-[#8a5a32]" : "w-1.5 bg-white/30 hover:bg-white/60"
                  )}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
