"use client";

import Image from "next/image";
import { m, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { openMobileBookingSheet } from "@/components/landing/MobileBookingSheet";

interface AmbienteItem {
  id: string;
  projectKey: string;
  tag: string;
  title: string;
  desc: string;
  img: string;
  alt: string;
  span: string;
}

const AMBIENTI: AmbienteItem[] = [
  {
    id: "casa-completa",
    projectKey: "casa_completa",
    tag: "Unica regia",
    title: "Tutta la Casa",
    desc: "Dalla cucina alla zona notte: un solo progettista, materiali dialoganti, zero incoerenze tra una stanza e l'altra.",
    img: "/media/hero/hero-2.jpg",
    alt: "Open space completo con cucina ad isola in marmo nero, living e zona pranzo progettati insieme",
    span: "lg:col-span-7 min-h-[360px] lg:min-h-[440px]",
  },
  {
    id: "cucine",
    projectKey: "cucina",
    tag: "Il cuore della casa",
    title: "Cucine su Misura",
    desc: "Isole scultoree, colonne fino al soffitto, scocche idrofughe in multistrato e top in gres o Fenix.",
    img: "/media/hero/hero-4.jpg",
    alt: "Cucina su misura ad angolo in pietra scura con boiserie in noce e cantina vini illuminata",
    span: "lg:col-span-5 min-h-[360px] lg:min-h-[440px]",
  },
  {
    id: "notte-armadi",
    projectKey: "armadi_notte",
    tag: "Al millimetro",
    title: "Zona Notte & Armadi",
    desc: "Camere, cabine armadio in nicchia e armadiature a filo muro che sfruttano ogni centimetro.",
    img: "/media/brand/mercantini/hero.jpg",
    alt: "Camera da letto contemporanea con letto matrimoniale imbottito e comodini di design",
    span: "lg:col-span-4 min-h-[320px] lg:min-h-[360px]",
  },
  {
    id: "living",
    projectKey: "living_tavoli",
    tag: "Zona giorno",
    title: "Living, Tavoli & Sedie",
    desc: "Pareti attrezzate su disegno, madie materiche e tavoli scultorei da toccare dal vivo in showroom.",
    img: "/media/brand/zamagna/gallery-2.jpg",
    alt: "Tavolo scultoreo in gres chiaro con base in metallo bronzo e madia di design",
    span: "lg:col-span-4 min-h-[320px] lg:min-h-[360px]",
  },
  {
    id: "camerette",
    projectKey: "armadi_notte",
    tag: "Spazi che crescono",
    title: "Camerette su Misura",
    desc: "Ponti, librerie integrate e zone studio calcolate sulle misure reali della stanza.",
    img: "/media/brand/moretti-compact/gallery-1.webp",
    alt: "Cameretta moderna a ponte con libreria integrata, letto e scrivania su misura",
    span: "lg:col-span-4 min-h-[320px] lg:min-h-[360px]",
  },
];

export function selectProjectAndScroll(projectKey?: string) {
  if (typeof window === "undefined") return;
  if (window.innerWidth < 1024) {
    openMobileBookingSheet(projectKey);
    return;
  }
  if (projectKey) {
    window.dispatchEvent(
      new CustomEvent("proggecta:select-project", {
        detail: { projectType: projectKey },
      })
    );
  }
  const target = document.getElementById("prenota-consulenza");
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

export function AmbientiShowcase() {
  const prefersReduced = useReducedMotion();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5">
      {AMBIENTI.map((item, idx) => (
        <m.button
          key={item.id}
          type="button"
          onClick={() => selectProjectAndScroll(item.projectKey)}
          initial={prefersReduced ? false : { opacity: 0, y: 28, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.16 }}
          transition={{
            duration: 0.65,
            delay: (idx % 3) * 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`group relative overflow-hidden rounded-2xl text-left cursor-pointer bg-[#1a1612] ${item.span}`}
        >
          <Image
            src={item.img}
            alt={item.alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
          <div
            className="absolute inset-0 transition-opacity duration-500"
            style={{
              background:
                "linear-gradient(to top, rgba(16,13,10,0.92) 0%, rgba(16,13,10,0.42) 45%, rgba(16,13,10,0.08) 100%)",
            }}
          />

          <div className="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/25 text-white backdrop-blur-sm transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:bg-[#8a5a32] group-hover:border-[#8a5a32]">
            <ArrowUpRight className="h-4 w-4" />
          </div>

          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
            <span className="inline-block text-[10px] font-bold uppercase tracking-[0.22em] text-[#dfc094] mb-1.5">
              {item.tag}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#faf7f2] leading-tight mb-2">
              {item.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#faf7f2]/80 font-light leading-relaxed max-w-md">
              {item.desc}
            </p>
          </div>
        </m.button>
      ))}
    </div>
  );
}

export function SinglePieceTriggerButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      onClick={() => selectProjectAndScroll("su_misura_singolo")}
      className="inline-flex items-center gap-2 rounded-full bg-[#dfc094] px-6 py-3.5 text-sm font-bold text-[#14110e] transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#ebd3b0] cursor-pointer shrink-0"
    >
      <span>{label}</span>
      <ArrowUpRight className="h-4 w-4" />
    </button>
  );
}

export function BookingTriggerLink({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={() => selectProjectAndScroll()}
      className={className}
    >
      <span>{label}</span>
      <ArrowRight className="w-4 h-4 shrink-0" />
    </button>
  );
}
