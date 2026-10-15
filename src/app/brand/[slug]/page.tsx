import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { brandData, getBrand } from "@/data/brandData";
import { processStepsData } from "@/data/processStepsData";
import { getFaqs } from "@/data/faqData";
import type { ImageAsset } from "@/data/types";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { TransitionNotice } from "@/components/sections/TransitionNotice";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { CrossBrands } from "@/components/sections/CrossBrands";
import { BookingForm } from "@/components/forms/BookingForm";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { BrandGallery } from "@/components/sections/BrandGallery";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SmartImage } from "@/components/ui/SmartImage";
import { Reveal } from "@/components/ui/Reveal";
import {
  Award,
  Compass,
  Layers,
  Ruler,
  ScanLine,
  ShieldCheck,
  Sparkles,
  ArrowDownRight,
} from "lucide-react";

export const dynamicParams = false;

export function generateStaticParams() {
  return brandData
    .filter((b) => b.status !== "archived")
    .map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const brand = getBrand(slug);
  if (!brand) return {};

  return {
    title: brand.seo.title,
    description: brand.seo.description,
    alternates: { canonical: `/brand/${brand.slug}` },
    robots: brand.seo.noindex ? { index: false } : undefined,
    openGraph: {
      title: brand.seo.title,
      description: brand.seo.description,
      images: [brand.hero.image.src],
    },
  };
}

export default async function BrandPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const brand = getBrand(slug);
  if (!brand) notFound();

  const brandFaqs = getFaqs(brand.faqIds);

  // Risoluzione loghi ufficiali (singolo o doppio per Smeg & Electrolux)
  const brandLogos: ImageAsset[] = brand.logo
    ? [brand.logo]
    : brand.slug === "elettrodomestici"
      ? [
          {
            src: "/media/logos/smeg.svg",
            alt: "Logo Smeg",
            width: 220,
            height: 70,
          },
          {
            src: "/media/logos/electrolux.svg",
            alt: "Logo Electrolux",
            width: 240,
            height: 70,
          },
        ]
      : [];

  // Immagini editoriali di supporto pescate dalla galleria o dalle sezioni del marchio
  const galleryPool: ImageAsset[] =
    brand.gallery && brand.gallery.length > 0
      ? brand.gallery
      : brand.sections
          .map((s) => s.image)
          .filter((img): img is ImageAsset => Boolean(img));

  const primaryEditorialImage = galleryPool[0] ?? brand.hero.image;
  const secondaryEditorialImage =
    galleryPool[1] ?? galleryPool[0] ?? brand.hero.image;
  const showcaseImage =
    galleryPool[2] ?? galleryPool[1] ?? galleryPool[0] ?? brand.hero.image;

  return (
    <>
      <Breadcrumbs
        items={[{ label: "Marchi", href: "/#marchi" }, { label: brand.name }]}
      />

      {/* =====================================================================
          1. HERO EDITORIALE IMMERSIVA
          ===================================================================== */}
      <section className="relative min-h-[76vh] lg:min-h-[84vh] flex flex-col justify-end pt-32 pb-16 sm:pb-24 bg-[#1f1b16] overflow-hidden">
        {/* Fotografia a tutto campo */}
        <div className="absolute inset-0 z-0">
          <Image
            src={brand.hero.image.src}
            alt={brand.hero.image.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-102"
          />
          {/* Gradienti calibrati: leggibilità a sinistra/basso, fotografia nitida a destra */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1f1b16] via-[#1f1b16]/65 to-[#1f1b16]/25" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1f1b16]/95 via-[#1f1b16]/55 to-transparent sm:w-4/5" />
        </div>

        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#d9cfc1] text-xs font-semibold uppercase tracking-[0.22em] mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8a5a32]" />
                <span>{brand.hero.eyebrow}</span>
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-[64px] font-normal text-white tracking-tight leading-[1.06] mb-6 [text-wrap:balance]">
                {brand.hero.headline}
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-[#d9cfc1] leading-relaxed mb-9 max-w-2xl font-light [text-wrap:balance]">
                {brand.hero.subheadline}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Button href="#prenota" size="lg">
                  {brand.ctaLabel}
                </Button>
                {brand.gallery && brand.gallery.length > 0 && (
                  <Button
                    href="#galleria"
                    variant="outline"
                    size="lg"
                    className="border-white/30 text-white hover:bg-white/10"
                  >
                    Esplora le collezioni
                  </Button>
                )}
              </div>
            </div>

            {/* Scheda tecnica sintetica ancorata a destra su desktop */}
            <div className="lg:col-span-4 hidden lg:flex justify-end">
              <div className="w-full max-w-xs rounded-3xl bg-[#1f1b16]/75 backdrop-blur-xl border border-white/15 p-6 text-[#faf7f2] shadow-2xl">
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#c9a06a]">
                    Specifiche Comparto
                  </span>
                  <Award className="w-4 h-4 text-[#8a5a32]" />
                </div>
                <p className="font-serif text-xl text-white mb-1">
                  {brand.category}
                </p>
                <p className="text-xs text-[#d9cfc1]/80 leading-relaxed mb-5">
                  {brand.cardClaim}
                </p>
                <div className="flex items-center gap-2 text-[11px] font-medium text-[#a3af97]">
                  <span className="w-2 h-2 rounded-full bg-[#6f7a64]" />
                  <span>Esposto nello Showroom di Nocera Inferiore</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================================
          2. PRESTIGIOUS BRAND BAR — LOGO COME BADGE DI AUTENTICITÀ + PILLOLE
          (Nessuna scritta duplicata del nome sotto il logo)
          ===================================================================== */}
      <section
        aria-label="Autenticità del marchio e punti chiave"
        className="bg-[#faf7f2] border-b border-[#d9cfc1]"
      >
        <Container>
          <div className="py-7 sm:py-9 flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-10">
            {/* Badge Logo Ufficiale senza testo ridondante */}
            <div className="flex flex-wrap items-center gap-5 sm:gap-7">
              {brandLogos.length > 0 && (
                <div className="inline-flex items-center gap-6 px-6 py-4 rounded-2xl bg-white border border-[#d9cfc1] shadow-2xs">
                  {brandLogos.map((lg) => (
                    <Image
                      key={lg.src}
                      src={lg.src}
                      alt={lg.alt}
                      width={lg.width}
                      height={lg.height}
                      unoptimized
                      className="h-8 sm:h-10 w-auto max-w-[160px] object-contain"
                    />
                  ))}
                </div>
              )}

              <div className="flex flex-col">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.22em] text-[#8a5a32]">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Partner Ufficiale Proggecta</span>
                </span>
                <span className="text-xs sm:text-sm text-[#4a443c] mt-0.5">
                  Selezione {brand.category.toLowerCase()} · Filiera certificata
                </span>
              </div>
            </div>

            {/* Pillole di stile, materia e modularità */}
            <div className="flex flex-wrap items-center gap-2.5">
              {brand.highlights.map((h, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 bg-[#efe8dd]/75 hover:bg-[#efe8dd] px-4 py-2 rounded-full border border-[#d9cfc1] text-xs font-medium text-[#1f1b16] tracking-wide transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8a5a32]" />
                  <span>{h}</span>
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Box Transizione (solo Ciesse) */}
      {brand.transitionNotice && (
        <TransitionNotice
          title={brand.transitionNotice.title}
          body={brand.transitionNotice.body}
        />
      )}

      {/* =====================================================================
          3. MANIFESTO EDITORIALE & COMPOSIZIONE FOTOGRAFICA ASIMMETRICA
          ===================================================================== */}
      <section className="py-20 sm:py-28 bg-[#faf7f2] border-b border-[#efe8dd] overflow-hidden">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Colonna sinistra: Visione d'architettura e citazione sartoriale */}
            <div className="lg:col-span-5">
              <Reveal>
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#6f7a64] mb-4">
                  <span className="w-5 h-px bg-[#8a5a32]" />
                  <span>Identità &amp; Progetto</span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] text-[#1f1b16] font-normal leading-[1.12] tracking-tight mb-6 [text-wrap:balance]">
                  Materia, ergonomia e proporzioni per {brand.category.toLowerCase()}.
                </h2>

                <p className="text-base sm:text-lg text-[#4a443c] leading-relaxed mb-8 font-light">
                  {brand.intro}
                </p>

                {/* Citazione / Nota di direzione artistica */}
                <div className="relative pl-6 py-1 border-l-2 border-[#8a5a32]">
                  <p className="font-serif italic text-lg sm:text-xl text-[#1f1b16] leading-snug">
                    &ldquo;{brand.cardClaim}&rdquo;
                  </p>
                  <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6f7a64] mt-2">
                    Direzione Progettuale Proggecta
                  </span>
                </div>
              </Reveal>
            </div>

            {/* Colonna destra: Diptych fotografico asimmetrico */}
            <div className="lg:col-span-7">
              <Reveal delay={0.12}>
                <div className="grid grid-cols-12 gap-4 sm:gap-6 items-end">
                  {/* Immagine principale dominante */}
                  <div
                    className={
                      secondaryEditorialImage.src !== primaryEditorialImage.src
                        ? "col-span-12 sm:col-span-8"
                        : "col-span-12"
                    }
                  >
                    <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-3xl overflow-hidden border border-[#d9cfc1] shadow-lg bg-[#efe8dd]">
                      <SmartImage
                        image={primaryEditorialImage}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>

                  {/* Immagine secondaria verticale + scheda materica */}
                  {secondaryEditorialImage.src !== primaryEditorialImage.src && (
                    <div className="col-span-12 sm:col-span-4 flex flex-col gap-4 sm:gap-6">
                      <div className="relative aspect-[4/3] sm:aspect-[3/4] rounded-3xl overflow-hidden border border-[#d9cfc1] shadow-md bg-[#efe8dd]">
                        <SmartImage
                          image={secondaryEditorialImage}
                          fill
                          sizes="(max-width: 1024px) 100vw, 25vw"
                          className="group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>

                      <div className="rounded-2xl bg-[#efe8dd]/80 border border-[#d9cfc1] p-4">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8a5a32] block mb-1">
                          Dettaglio Esecutivo
                        </span>
                        <p className="text-xs text-[#1f1b16] font-medium leading-relaxed">
                          Finiture e componibilità calibrate sulla pianta reale.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================================
          4. SEZIONI DI CONTENUTO: EDITORIAL BENTO & LAYOUT ASIMMETRICO DINAMICO
          (Contrasti avorio #faf7f2, sabbia #efe8dd e antracite #1f1b16)
          ===================================================================== */}
      {brand.sections.map((sec, idx) => {
        const isDark = idx % 2 === 1;
        const sectionImage =
          sec.image ?? galleryPool[(idx + 1) % Math.max(1, galleryPool.length)] ?? brand.hero.image;

        return (
          <section
            key={idx}
            className={
              isDark
                ? "py-20 sm:py-28 bg-[#1f1b16] text-[#faf7f2] border-b border-white/10"
                : "py-20 sm:py-28 bg-[#efe8dd]/55 text-[#1f1b16] border-b border-[#d9cfc1]/80"
            }
          >
            <Container>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                {/* Colonna Immagine (7 colonne su 12 — l'immagine domina) */}
                <div
                  className={`lg:col-span-7 ${
                    idx % 2 === 1 ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <Reveal>
                    <div
                      className={`relative aspect-[16/10] rounded-3xl overflow-hidden shadow-xl border ${
                        isDark
                          ? "border-white/15 bg-[#2a241e]"
                          : "border-[#d9cfc1] bg-white"
                      }`}
                    >
                      <SmartImage
                        image={sectionImage}
                        fill
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        className="group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                      <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4 pointer-events-none">
                        <span className="px-3.5 py-1.5 rounded-full bg-[#1f1b16]/80 backdrop-blur-md border border-white/15 text-[11px] font-medium text-[#faf7f2]">
                          {sectionImage.alt}
                        </span>
                      </div>
                    </div>
                  </Reveal>
                </div>

                {/* Colonna Testo Sartoriale (5 colonne su 12) */}
                <div
                  className={`lg:col-span-5 ${
                    idx % 2 === 1 ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <Reveal delay={0.1}>
                    <div className="flex items-center gap-3 mb-5">
                      <span
                        className={`font-serif text-sm px-3 py-1 rounded-full border ${
                          isDark
                            ? "border-[#8a5a32] text-[#c9a06a] bg-[#8a5a32]/10"
                            : "border-[#8a5a32]/40 text-[#8a5a32] bg-white"
                        }`}
                      >
                        0{idx + 1}
                      </span>
                      <span
                        className={`text-xs font-semibold uppercase tracking-[0.2em] ${
                          isDark ? "text-[#a3af97]" : "text-[#6f7a64]"
                        }`}
                      >
                        Focus Costruttivo
                      </span>
                    </div>

                    <h3
                      className={`font-serif text-3xl sm:text-4xl font-normal leading-[1.15] tracking-tight mb-5 [text-wrap:balance] ${
                        isDark ? "text-white" : "text-[#1f1b16]"
                      }`}
                    >
                      {sec.title}
                    </h3>

                    <p
                      className={`text-base sm:text-lg leading-relaxed mb-8 font-light ${
                        isDark ? "text-[#d9cfc1]" : "text-[#4a443c]"
                      }`}
                    >
                      {sec.body}
                    </p>

                    {sec.bullets && sec.bullets.length > 0 && (
                      <div
                        className={`rounded-2xl p-6 border ${
                          isDark
                            ? "bg-white/[0.04] border-white/10"
                            : "bg-white border-[#d9cfc1]"
                        }`}
                      >
                        <p
                          className={`text-[10px] font-bold uppercase tracking-[0.22em] mb-4 ${
                            isDark ? "text-[#c9a06a]" : "text-[#8a5a32]"
                          }`}
                        >
                          Specifiche di Progetto
                        </p>
                        <ul className="space-y-3">
                          {sec.bullets.map((b, bIdx) => (
                            <li
                              key={bIdx}
                              className={`flex items-start gap-3 text-sm leading-snug ${
                                isDark ? "text-[#faf7f2]" : "text-[#1f1b16]"
                              }`}
                            >
                              <ArrowDownRight className="w-4 h-4 text-[#8a5a32] shrink-0 mt-0.5" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </Reveal>
                </div>
              </div>
            </Container>
          </section>
        );
      })}

      {/* =====================================================================
          5. GALLERIA FOTOGRAFICA INTERATTIVA (BrandGallery)
          ===================================================================== */}
      {brand.gallery && brand.gallery.length > 0 && (
        <BrandGallery
          brandName={brand.name}
          category={brand.category}
          photos={brand.gallery.map((g) => ({
            src: g.src,
            alt: g.alt,
            caption: g.credit || g.alt,
            tag: brand.category,
          }))}
        />
      )}

      {/* =====================================================================
          6. SHOWCASE MATERIOTECA & PROGETTAZIONE SU MISURA ("Why Proggecta")
          ===================================================================== */}
      <section className="py-24 sm:py-32 bg-[#faf7f2] border-b border-[#d9cfc1]">
        <Container>
          <div className="rounded-[32px] bg-[#efe8dd] border border-[#d9cfc1] overflow-hidden shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Colonna Contenuto e Pilastri Materioteca (7 colonne) */}
              <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#d9cfc1] text-xs font-semibold uppercase tracking-[0.18em] text-[#8a5a32] mb-6">
                    <Sparkles className="w-3.5 h-3.5 text-[#8a5a32]" />
                    <span>Atelier &amp; Materioteca Proggecta</span>
                  </div>

                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] text-[#1f1b16] font-normal leading-[1.12] tracking-tight mb-5 [text-wrap:balance]">
                    {brand.whyProggecta.title}
                  </h2>

                  <p className="text-base sm:text-lg text-[#4a443c] leading-relaxed mb-10 font-light">
                    {brand.whyProggecta.body}
                  </p>
                </div>

                {/* 3 Pilastri Tattili & Tecnici */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-[#d9cfc1]">
                  <div className="bg-white/90 rounded-2xl p-5 border border-[#d9cfc1]/80">
                    <Layers className="w-5 h-5 text-[#8a5a32] mb-3" />
                    <h3 className="font-serif text-base font-semibold text-[#1f1b16] mb-1">
                      Campionatura dal vivo
                    </h3>
                    <p className="text-xs text-[#4a443c] leading-relaxed">
                      Accosti essenze, marmi, metalli e tessuti reali sotto luce dedicata.
                    </p>
                  </div>

                  <div className="bg-white/90 rounded-2xl p-5 border border-[#d9cfc1]/80">
                    <ScanLine className="w-5 h-5 text-[#8a5a32] mb-3" />
                    <h3 className="font-serif text-base font-semibold text-[#1f1b16] mb-1">
                      Rilievo laser esecutivo
                    </h3>
                    <p className="text-xs text-[#4a443c] leading-relaxed">
                      Compensazione di fuori squadro, nicchie, pilastri e vincoli impiantistici.
                    </p>
                  </div>

                  <div className="bg-white/90 rounded-2xl p-5 border border-[#d9cfc1]/80">
                    <Compass className="w-5 h-5 text-[#8a5a32] mb-3" />
                    <h3 className="font-serif text-base font-semibold text-[#1f1b16] mb-1">
                      Regia multi-ambiente
                    </h3>
                    <p className="text-xs text-[#4a443c] leading-relaxed">
                      Un unico progettista coordina questo comparto con il resto della casa.
                    </p>
                  </div>
                </div>
              </div>

              {/* Colonna Visual Showcase con scorcio materico (5 colonne) */}
              <div className="lg:col-span-5 relative min-h-[360px] lg:min-h-full bg-[#1f1b16]">
                <Image
                  src={showcaseImage.src}
                  alt={showcaseImage.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1f1b16] via-[#1f1b16]/35 to-transparent" />

                <div className="absolute inset-x-6 bottom-6 sm:inset-x-8 sm:bottom-8 p-6 rounded-2xl bg-[#1f1b16]/85 backdrop-blur-md border border-white/15 text-white">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-[#8a5a32] text-white flex items-center justify-center shrink-0">
                      <Ruler className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#c9a06a] block">
                        Sartoria d&apos;Interni
                      </span>
                      <span className="font-serif text-base text-white">
                        Showroom di 600 mq a Nocera Inferiore
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-[#d9cfc1] leading-relaxed mb-4">
                    Verifica dal vivo gli spessori costruttivi, i meccanismi e
                    le finiture prima di definire gli esecutivi.
                  </p>
                  <a
                    href="#prenota"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#c9a06a] hover:text-white transition-colors"
                  >
                    <span>Fissa il tuo appuntamento dedicato →</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* =====================================================================
          7. METODO 4 STEP COMPATTO
          ===================================================================== */}
      <ProcessSteps
        steps={processStepsData}
        variant="compact"
        eyebrow="Dalla pianta alla posa"
        title={`Come progettiamo ${brand.name} sulla tua architettura`}
        subtitle="Quattro passaggi esecutivi con un unico interior designer responsabile."
      />

      {/* =====================================================================
          8. COMPLETA IL PROGETTO (CrossBrands visivo)
          ===================================================================== */}
      {brand.crossBrands.length > 0 && (
        <CrossBrands brandSlugs={brand.crossBrands} />
      )}

      {/* =====================================================================
          9. FORM DI PRENOTAZIONE CON PRESET
          ===================================================================== */}
      <section
        id="prenota"
        className="py-20 sm:py-28 bg-[#faf7f2] border-b border-[#efe8dd] scroll-mt-20"
      >
        <Container size="narrow">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8a5a32] mb-3">
              Consulenza in Showroom · Nocera Inferiore
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1f1b16] font-normal tracking-tight mb-3">
              Progetta il tuo spazio con {brand.name}
            </h2>
            <p className="text-sm sm:text-base text-[#4a443c] leading-relaxed">
              Prenota un incontro riservato in materioteca: porta la planimetria
              per valutare composizioni, finiture e quadro economico.
            </p>
          </div>
          <BookingForm
            preset={brand.formPreset}
            source={`brand-${brand.slug}`}
          />
        </Container>
      </section>

      {/* =====================================================================
          10. FAQ BRAND
          ===================================================================== */}
      {brandFaqs.length > 0 && (
        <FaqAccordion
          items={brandFaqs}
          title={`Domande frequenti su ${brand.name}`}
        />
      )}
    </>
  );
}
