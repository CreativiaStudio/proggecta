"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, m } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Ruler,
  Star,
  X,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import {
  solutionFilters,
  solutionsGalleryData,
  type SolutionCategory,
  type SolutionItem,
} from "@/data/solutionsGalleryData";

type ActiveFilter = "tutte" | SolutionCategory;

interface CardLayout {
  smWide: boolean;
  lgWide: boolean;
}

/**
 * Calcola le larghezze della bento grid in modo che l'ultima riga si chiuda
 * senza buchi: le card featured occupano sempre 2 colonne, e se servono celle
 * extra vengono allargate le card con il rapporto più panoramico.
 */
function computeLayout(items: SolutionItem[]): Record<string, CardLayout> {
  const normals = items
    .filter((i) => !i.featured)
    .sort(
      (a, b) =>
        b.image.width / b.image.height - a.image.width / a.image.height
    );

  const promote = (cellsPerRow: number, baseCells: number) => {
    const remainder = baseCells % cellsPerRow;
    const needed = remainder === 0 ? 0 : cellsPerRow - remainder;
    return new Set(normals.slice(0, needed).map((i) => i.id));
  };

  const featuredCount = items.length - normals.length;
  const smPromoted = promote(2, featuredCount * 2 + normals.length);
  const lgPromoted = promote(4, featuredCount * 4 + normals.length);

  const layout: Record<string, CardLayout> = {};
  for (const item of items) {
    layout[item.id] = {
      smWide: item.featured || smPromoted.has(item.id),
      lgWide: item.featured || lgPromoted.has(item.id),
    };
  }
  return layout;
}

function scrollToBooking() {
  document
    .getElementById("prenota")
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}

const INITIAL_VISIBLE_COUNT = 8;

export function SolutionsGallery() {
  const [filter, setFilter] = useState<ActiveFilter>("tutte");
  const [visibleCount, setVisibleCount] = useState<number>(INITIAL_VISIBLE_COUNT);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [direction, setDirection] = useState<1 | -1>(1);

  const items = useMemo(
    () =>
      filter === "tutte"
        ? solutionsGalleryData
        : solutionsGalleryData.filter((i) => i.category === filter),
    [filter]
  );
  const visibleItems = useMemo(
    () => items.slice(0, visibleCount),
    [items, visibleCount]
  );
  const layout = useMemo(() => computeLayout(visibleItems), [visibleItems]);
  const counts = useMemo(() => {
    const map: Record<string, number> = { tutte: solutionsGalleryData.length };
    for (const i of solutionsGalleryData) {
      map[i.category] = (map[i.category] ?? 0) + 1;
    }
    return map;
  }, []);

  const activeIndex = activeId
    ? items.findIndex((i) => i.id === activeId)
    : -1;
  const activeItem = activeIndex >= 0 ? items[activeIndex] : null;

  const triggerRef = useRef<HTMLElement | null>(null);

  const openItem = (id: string, trigger: HTMLElement) => {
    triggerRef.current = trigger;
    setDirection(1);
    setActiveId(id);
  };

  const close = useCallback(() => {
    setActiveId(null);
    triggerRef.current?.focus({ preventScroll: true });
  }, []);

  const step = useCallback(
    (delta: 1 | -1) => {
      if (activeIndex < 0 || items.length < 2) return;
      setDirection(delta);
      const next = (activeIndex + delta + items.length) % items.length;
      setActiveId(items[next].id);
    },
    [activeIndex, items]
  );

  useEffect(() => {
    if (!activeItem) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [activeItem, close, step]);

  const handleCta = () => {
    setActiveId(null);
    window.setTimeout(scrollToBooking, 150);
  };

  return (
    <section
      id="soluzioni"
      className="py-20 sm:py-32 bg-[#faf7f2] border-b border-[#d9cfc1]/60 scroll-mt-20"
    >
      <Container>
        {/* Intestazione */}
        <Reveal>
          <div className="text-center mx-auto max-w-3xl lg:max-w-4xl mb-10 sm:mb-14">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#8a5a32] mb-4">
              SOLUZIONI D&apos;ARREDO &amp; PROGETTI SARTORIALI
            </p>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#1f1b16] font-normal tracking-tight leading-[1.15] mb-5 [text-wrap:balance]">
              Dalla cucina all&apos;intera casa. Guarda cosa possiamo creare per
              te.
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-[#4a443c] leading-relaxed max-w-2xl mx-auto [text-wrap:balance]">
              Ogni stanza viene cucita su misura: dalla cucina con isola
              scultorea al living, dalle pareti attrezzate alla cabina armadio.
              Materiali scelti con te, luce progettata, dimensioni al
              millimetro.
            </p>
          </div>
        </Reveal>

        {/* Filtri a pill */}
        {/* Barra filtri a riga singola (tutte le tab su un unico rigo) */}
        <div
          role="group"
          aria-label="Filtra le soluzioni per ambiente"
          className="mb-8 sm:mb-12 flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden flex-nowrap"
        >
          {solutionFilters.map((f) => {
            const isActive = filter === f.id;
            return (
              <button
                key={f.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => {
                  setFilter(f.id);
                  setVisibleCount(INITIAL_VISIBLE_COUNT);
                }}
                className={cn(
                  "shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-medium border transition-all duration-300 cursor-pointer whitespace-nowrap",
                  isActive
                    ? "bg-[#1f1b16] text-white border-[#1f1b16] shadow-sm"
                    : "bg-white text-[#4a443c] border-[#d9cfc1] hover:border-[#8a5a32] hover:text-[#8a5a32]"
                )}
              >
                <span>{f.label}</span>
                <span
                  className={cn(
                    "text-[11px] tabular-nums ml-0.5",
                    isActive ? "text-white/60" : "text-[#4a443c]/50"
                  )}
                >
                  {counts[f.id]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Bento grid fotografica pura — l'immagine è protagonista assoluta */}
        <div
          key={filter}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 sm:grid-flow-dense sm:auto-rows-[220px] lg:auto-rows-[270px] gap-4 sm:gap-5"
        >
          {visibleItems.map((item, idx) => {
            const { smWide, lgWide } = layout[item.id] ?? { smWide: false, lgWide: false };
            return (
              <m.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.5,
                  delay: Math.min(idx % 8, 7) * 0.04,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={cn(
                  "min-h-0",
                  item.featured
                    ? "sm:col-span-2 sm:row-span-2"
                    : smWide
                      ? "sm:col-span-2"
                      : "",
                  !item.featured && lgWide && "lg:col-span-2",
                  !item.featured && !lgWide && "lg:col-span-1"
                )}
              >
                <SolutionCard
                  item={item}
                  onOpen={(el) => openItem(item.id, el)}
                />
              </m.div>
            );
          })}
        </div>

        {/* Tasto Carica Altro per mostrare 2-3 righe iniziali e ampliare su richiesta */}
        {visibleCount < items.length && (
          <div className="mt-10 sm:mt-14 text-center">
            <button
              type="button"
              onClick={() =>
                setVisibleCount((prev) => Math.min(prev + 8, items.length))
              }
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-white hover:bg-[#1f1b16] text-[#1f1b16] hover:text-white border border-[#d9cfc1] text-sm font-semibold transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer group"
            >
              <span>Carica altri progetti</span>
              <span className="text-xs text-[#8a5a32] group-hover:text-[#c9a06a] tabular-nums font-medium">
                (mostrati {visibleItems.length} di {items.length})
              </span>
              <ChevronDown className="w-4 h-4 text-[#8a5a32] group-hover:text-white group-hover:translate-y-0.5 transition-transform" />
            </button>
          </div>
        )}

        {/* Footer: rilievo laser e render 3D */}
        <Reveal>
          <div className="mt-14 sm:mt-20 mx-auto max-w-4xl rounded-3xl border border-[#d9cfc1] bg-white p-7 sm:p-10 shadow-xs flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
            <div className="shrink-0 w-14 h-14 rounded-full bg-[#efe8dd] text-[#8a5a32] flex items-center justify-center">
              <Ruler className="w-6 h-6" aria-hidden="true" />
            </div>
            <div className="flex-1">
              <h3 className="font-serif text-xl sm:text-2xl text-[#1f1b16] font-normal mb-2">
                Il tuo spazio, misurato e visto prima di costruirlo.
              </h3>
              <p className="text-[#4a443c] leading-relaxed">
                In showroom a Nocera Inferiore ti aspettano il rilievo laser
                del tuo ambiente e il render 3D fotorealistico del progetto:
                vedi materiali, luci e proporzioni prima di decidere.
              </p>
            </div>
            <button
              type="button"
              onClick={scrollToBooking}
              className="group shrink-0 inline-flex items-center justify-center min-h-[52px] px-7 rounded-full bg-[#8a5a32] hover:bg-[#6f4626] text-white font-medium shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <span>Prenota il rilievo</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </Reveal>
      </Container>

      <AnimatePresence>
        {activeItem && (
          <Lightbox
            key="lightbox"
            item={activeItem}
            index={activeIndex}
            total={items.length}
            direction={direction}
            onClose={close}
            onStep={step}
            onCta={handleCta}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

function SolutionCard({
  item,
  onOpen,
}: {
  item: SolutionItem;
  onOpen: (trigger: HTMLElement) => void;
}) {
  return (
    <button
      type="button"
      onClick={(e) => onOpen(e.currentTarget)}
      aria-label={`Guarda a schermo intero: ${item.title}`}
      className={cn(
        "group relative block w-full h-full overflow-hidden rounded-2xl sm:rounded-3xl bg-[#efe8dd] text-left cursor-pointer",
        "border border-[#d9cfc1]/80 hover:border-[#8a5a32]/80 shadow-xs hover:shadow-xl transition-all duration-500",
        "aspect-[4/3] sm:aspect-auto focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8a5a32]"
      )}
    >
      <Image
        src={item.image.src}
        alt={item.image.alt}
        fill
        sizes={
          item.featured
            ? "(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
            : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        }
        style={{ objectPosition: item.objectPosition }}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-106"
      />

      {/* Velo leggerissimo in hover con icona di ingrandimento discreta */}
      <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
        <span
          aria-hidden="true"
          className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-md text-[#1f1b16] flex items-center justify-center shadow-lg transition-transform duration-300 scale-90 group-hover:scale-100"
        >
          <Maximize2 className="w-5 h-5 text-[#8a5a32]" />
        </span>
      </div>
    </button>
  );
}

interface LightboxProps {
  item: SolutionItem;
  index: number;
  total: number;
  direction: 1 | -1;
  onClose: () => void;
  onStep: (delta: 1 | -1) => void;
  onCta: () => void;
}

function Lightbox({
  item,
  index,
  total,
  direction,
  onClose,
  onStep,
  onCta,
}: LightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus({ preventScroll: true });
  }, []);

  return (
    <m.div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] bg-[#0f0d0a]/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 lg:p-10"
    >
      <button
        ref={closeRef}
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="Chiudi galleria"
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center border border-white/20 transition-colors cursor-pointer"
      >
        <X className="w-5 h-5" />
      </button>

      <m.div
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.98, y: 8 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="relative w-full max-w-6xl max-h-[94vh] overflow-y-auto lg:overflow-hidden rounded-3xl bg-[#faf7f2] shadow-2xl grid grid-cols-1 lg:grid-cols-[1.7fr_1fr]"
      >
        {/* Immagine */}
        <div className="relative bg-[#0f0d0a] h-[42vh] sm:h-[52vh] lg:h-[80vh] lg:max-h-[760px] overflow-hidden">
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <m.div
              key={item.id}
              custom={direction}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -40 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={item.image.src}
                alt={item.image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-contain"
                priority
              />
            </m.div>
          </AnimatePresence>

          {total > 1 && (
            <>
              <button
                type="button"
                onClick={() => onStep(-1)}
                aria-label="Soluzione precedente"
                className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md text-white flex items-center justify-center border border-white/20 transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => onStep(1)}
                aria-label="Soluzione successiva"
                className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 backdrop-blur-md text-white flex items-center justify-center border border-white/20 transition-colors cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          <span className="absolute bottom-3 left-4 z-10 text-xs tabular-nums tracking-widest text-white/80 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full">
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </div>

        {/* Dettagli */}
        <div className="flex flex-col p-6 sm:p-8 lg:p-10 lg:overflow-y-auto lg:max-h-[760px]">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a5a32] mb-3">
            {item.categoryLabel}
          </p>
          <h3 className="font-serif text-2xl sm:text-3xl text-[#1f1b16] font-normal leading-tight mb-4 [text-wrap:balance]">
            {item.title}
          </h3>
          <p className="text-[#4a443c] leading-relaxed mb-6">
            {item.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-medium text-[#6f4626] bg-[#efe8dd] border border-[#d9cfc1] px-3 py-1.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="mt-auto">
            <button
              type="button"
              onClick={onCta}
              className="group w-full inline-flex items-center justify-center min-h-[52px] px-6 rounded-full bg-[#8a5a32] hover:bg-[#6f4626] text-white font-medium shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <span>Progetta uno spazio come questo</span>
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </button>
            {item.image.credit && (
              <p className="text-[11px] text-[#4a443c]/60 mt-4 text-center">
                Foto {item.image.credit}
              </p>
            )}
          </div>
        </div>
      </m.div>
    </m.div>
  );
}
