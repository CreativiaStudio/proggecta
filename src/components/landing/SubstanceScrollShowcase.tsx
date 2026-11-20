"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  m,
  useScroll,
  useSpring,
  useTransform,
  useMotionValueEvent,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import { Container } from "@/components/ui/Container";

interface DifferenceSlide {
  num: string;
  tag: string;
  title: string;
  desc: string;
  img: string;
  alt: string;
  caption: string;
}

const SLIDES: DifferenceSlide[] = [
  {
    num: "01",
    tag: "Struttura idrofuga",
    title: "Scocche in multistrato idrofugo, mai pannelli che gonfiano",
    desc: "Sotto il lavello e vicino al vapore i pannelli standard in particelle di legno pressate cedono in pochi anni. Le nostre scocche in multistrato a strati incrociati restano indeformabili nel tempo.",
    img: "/media/progetti/venus-matrix-proggecta-cucine-7-scaled.jpg",
    alt: "Isola scultorea in pietra e legno con armadiature a tutta altezza Proggecta",
    caption: "Scocche indeformabili all'acqua e finiture materiche",
  },
  {
    num: "02",
    tag: "Taglio al millimetro",
    title: "Su misura reale al millimetro, zero listelli di compensato",
    desc: "Niente moduli standard da 60 cm arrangiati con tamponamenti per coprire i buchi. Ogni mobile viene disegnato sul rilievo laser reale della tua casa, a filo muro e a filo soffitto.",
    img: "/media/progetti/Thalia-cucine-proggecta-scaled.jpg",
    alt: "Cucina minimale incassata in nicchia a filo parete su misura",
    caption: "Incasso a filo muro progettato su rilievo laser 3D",
  },
  {
    num: "03",
    tag: "Meccanica & legno vero",
    title: "Ferramenta ad alta tenuta e superfici che si vivono davvero",
    desc: "Cerniere e guide ammortizzate ad alta portata, vero legno lavorato a regola d'arte e piani in gres porcellanato, quarzo e Fenix antigraffio scelti con te dal vivo in materioteca.",
    img: "/media/qualita/anta-legno-massello-tosca.jpg",
    alt: "Cucina artigianale in vero legno massello incassata ad arco su misura",
    caption: "Vero legno, incastri sartoriali e meccanica durevole",
  },
  {
    num: "04",
    tag: "Valore reale",
    title: "Qualità artigianale al giusto prezzo, senza ricarichi inutili",
    desc: "Nessuna singola fabbrica è la migliore in tutto: selezioniamo l'eccellenza italiana per ogni stanza e investiamo il tuo budget dove conta davvero — struttura, durata e posa.",
    img: "/media/hero/hero-2.jpg",
    alt: "Open space completo con cucina ad isola in marmo nero, living e tavolo di design",
    caption: "Design d'autore e durata trentennale al giusto prezzo",
  },
];

function RotatingDeckCard({
  slide,
  index,
  activeIndex,
  total,
  progress,
  reduced,
}: {
  slide: DifferenceSlide;
  index: number;
  activeIndex: number;
  total: number;
  progress: MotionValue<number>;
  reduced: boolean;
}) {
  // Mappa il progresso [0..1] sullo step esatto di questa carta
  const step = index / (total - 1);
  const gap = 1 / (total - 1);

  // progress < step  => carta ancora in attesa dietro nel mazzo (sporge leggermente ruotata a destra)
  // progress === step => carta attiva dritta in primo piano (100% nitida)
  // progress > step  => carta già sfogliata che ruota via pulita verso sinistra
  const x = useTransform(
    progress,
    [step - gap * 2, step - gap, step, step + gap * 0.75, step + gap],
    reduced ? [0, 0, 0, 0, 0] : [30, 16, 0, -48, -72]
  );
  const y = useTransform(
    progress,
    [step - gap * 2, step - gap, step, step + gap * 0.75, step + gap],
    reduced ? [0, 0, 0, 0, 0] : [26, 14, 0, -16, -24]
  );
  const rotateZ = useTransform(
    progress,
    [step - gap * 2, step - gap, step, step + gap * 0.75, step + gap],
    reduced ? [0, 0, 0, 0, 0] : [7, 3.8, 0, -7, -11]
  );
  const rotateY = useTransform(
    progress,
    [step - gap, step, step + gap * 0.75],
    reduced ? [0, 0, 0] : [12, 0, -20]
  );
  const scale = useTransform(
    progress,
    [step - gap * 2, step - gap, step, step + gap],
    reduced ? [1, 1, 1, 1] : [0.88, 0.94, 1, 0.9]
  );
  // Solida (opacity 1) finché è in mazzo o attiva; svanisce pulitamente SOLO quando ruota via dopo step
  const opacity = useTransform(
    progress,
    [step - gap * 2, step - gap, step, step + gap * 0.55, step + gap * 0.85],
    [1, 1, 1, 0.9, 0]
  );

  // La carta attiva sta sempre sopra, le successive impilate dietro in ordine, le già passate in fondo
  const isActive = index === activeIndex;
  const zIndex = isActive
    ? 40
    : index > activeIndex
    ? 30 - (index - activeIndex) * 5
    : 10 + index;

  // Velo scuro sulle carte in attesa dietro, così non distraggono mai dal testo della carta davanti
  const backdropDim = isActive ? "opacity-0" : "opacity-55";

  return (
    <m.div
      style={{
        x,
        y,
        rotateZ,
        rotateY,
        scale,
        opacity,
        zIndex,
        transformPerspective: 1200,
      }}
      className="absolute inset-0 overflow-hidden rounded-2xl border border-white/15 bg-[#1b1612] shadow-2xl will-change-transform origin-center"
    >
      <Image
        src={slide.img}
        alt={slide.alt}
        fill
        sizes="(max-width: 1024px) 100vw, 48vw"
        className="object-cover object-center"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(16,13,10,0.88) 0%, rgba(16,13,10,0.18) 48%, rgba(16,13,10,0.08) 100%)",
        }}
      />
      <div
        className={`pointer-events-none absolute inset-0 bg-[#14110e] transition-opacity duration-300 ${backdropDim}`}
      />
      <div
        className={`absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-[#14110e]/85 backdrop-blur-sm border border-white/15 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#dfc094] transition-opacity duration-300 ${
          isActive ? "opacity-100" : "opacity-0"
        }`}
      >
        <span>
          {slide.num} / 0{total}
        </span>
        <span className="text-white/40">·</span>
        <span>{slide.tag}</span>
      </div>
      <div
        className={`absolute inset-x-0 bottom-0 p-5 sm:p-6 transition-opacity duration-300 ${
          isActive ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className="font-serif text-lg sm:text-xl text-[#faf7f2] leading-snug">
          {slide.caption}
        </p>
      </div>
    </m.div>
  );
}

export function SubstanceScrollShowcase() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const prefersReduced = Boolean(useReducedMotion());
  const [activeIndex, setActiveIndex] = useState(0);

  // Progresso continuo dallo scorrimento della sezione (funziona identico in andata E in ritorno)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 25%", "end 80%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 22,
    mass: 0.45,
  });

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    const idx = Math.min(
      SLIDES.length - 1,
      Math.max(0, Math.round(latest * (SLIDES.length - 1)))
    );
    if (idx !== activeIndex) {
      setActiveIndex(idx);
    }
  });

  const scrollToPoint = (idx: number) => {
    const el = itemRefs.current[idx];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-x-clip bg-[#14110e] py-24 sm:py-32 text-[#faf7f2]"
    >
      {/* Bagliore caldo leggerissimo in sottofondo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 -left-40 h-[420px] w-[420px] rounded-full bg-[#8a5a32]/15 blur-3xl"
      />

      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* SINISTRA: Deck fotografico 3D rotante sticky legato allo scroll */}
          <div className="lg:col-span-6 lg:sticky lg:top-28">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-[580px]">
              {SLIDES.map((slide, idx) => (
                <RotatingDeckCard
                  key={slide.num}
                  slide={slide}
                  index={idx}
                  activeIndex={activeIndex}
                  total={SLIDES.length}
                  progress={smoothProgress}
                  reduced={prefersReduced}
                />
              ))}
            </div>

            {/* Indicatore rotazione + barra fluida */}
            <div className="mx-auto mt-8 max-w-[580px]">
              <div className="h-0.5 w-full rounded-full bg-white/15 overflow-hidden mb-4">
                <m.div
                  style={{ scaleX: smoothProgress, transformOrigin: "0% 50%" }}
                  className="h-full bg-[#dfc094]"
                />
              </div>
              <div className="flex items-center justify-between gap-2">
                {SLIDES.map((s, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <button
                      key={s.num}
                      type="button"
                      onClick={() => scrollToPoint(idx)}
                      className={`text-left transition-colors duration-300 cursor-pointer py-1 ${
                        isActive ? "text-[#dfc094]" : "text-white/40 hover:text-white/75"
                      }`}
                    >
                      <span className="block font-serif text-sm sm:text-base font-medium">
                        {s.num}
                      </span>
                      <span className="hidden sm:block text-[10px] uppercase tracking-[0.14em]">
                        {s.tag}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* DESTRA: Titolo + 4 pilastri sincronizzati allo scroll (andata & ritorno) */}
          <div className="lg:col-span-6">
            <m.div
              initial={prefersReduced ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="mb-10"
            >
              <span className="block text-xs font-bold uppercase tracking-[0.22em] text-[#dfc094] mb-3">
                La sostanza sotto il design
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-medium tracking-tight leading-[1.08] mb-5">
                Quello che non vedi è ciò che fa durare{" "}
                <span className="italic font-normal text-[#dfc094]">una casa trent&apos;anni.</span>
              </h2>
              <p className="text-sm sm:text-base text-[#faf7f2]/75 font-light leading-relaxed">
                Due cucine possono sembrare uguali il primo giorno. La differenza la scopri dopo
                tre anni sotto il lavello, sulle cerniere e sui tagli vicino ai muri.
              </p>
            </m.div>

            <div className="space-y-6 lg:space-y-14 lg:pb-16">
              {SLIDES.map((item, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <m.div
                    key={item.num}
                    ref={(el) => {
                      itemRefs.current[idx] = el;
                    }}
                    onClick={() => scrollToPoint(idx)}
                    initial={prefersReduced ? false : { opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.25 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className={`cursor-pointer border-l-2 pl-5 py-3 transition-all duration-500 ${
                      isActive
                        ? "border-[#dfc094] opacity-100"
                        : "border-white/15 opacity-55 hover:opacity-85"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className={`font-serif text-xl transition-colors duration-300 ${
                          isActive ? "text-[#dfc094]" : "text-white/40"
                        }`}
                      >
                        {item.num}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#dfc094]/80">
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#faf7f2] mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#faf7f2]/75 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </m.div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
