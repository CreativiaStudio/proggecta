import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/data/siteConfig";
import { Container } from "@/components/ui/Container";
import { LandingSuMisuraForm } from "@/components/forms/LandingSuMisuraForm";
import { HeroBackgroundSlider } from "@/components/landing/HeroBackgroundSlider";
import {
  AmbientiShowcase,
  SinglePieceTriggerButton,
} from "@/components/landing/AmbientiShowcase";
import { SubstanceScrollShowcase } from "@/components/landing/SubstanceScrollShowcase";
import { ScrollReveal } from "@/components/landing/ScrollReveal";
import {
  Check,
  MapPin,
  Clock,
  Car,
  ArrowRight,
  Plus,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Arredamento Sartoriale su Misura a Nocera Inferiore | Atelier Proggecta",
  description:
    "Progettazione d'interni su misura al millimetro a Nocera Inferiore: dalla singola cucina o nicchia fino alla casa completa. Showroom di 500 mq, consulenza gratuita senza impegno.",
  robots: { index: false, follow: true },
  openGraph: {
    title: "Arredamento Sartoriale su Misura a Nocera Inferiore | Atelier Proggecta",
    description:
      "Devi arredare casa? Sei nel posto giusto. Arredamento sartoriale al millimetro, qualità artigianale al giusto prezzo. Showroom 500 mq a Nocera Inferiore.",
    url: `${siteConfig.url}/arredamento-su-misura`,
  },
};

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Localit%C3%A0+Fosso+Imperatore+Lotto+14+Nocera+Inferiore+SA";

const REAL_PROJECTS = [
  {
    type: "image" as const,
    src: "/media/progetti/La-cucina-di-Virginia-1-proggecta.jpg",
    alt: "Cucina su misura realizzata a casa di un cliente con colonne a filo controsoffitto e isola in legno",
    badge: "Lavoro reale · Colonne fino al soffitto",
    problem: "Parete irregolare e spazio perso sopra i pensili",
    solution:
      "Colonne tagliate al millimetro fino al controsoffitto e isola in legno coordinata al tavolo.",
  },
  {
    type: "image" as const,
    src: "/media/progetti/P0011930.jpg",
    alt: "Cucina reale su misura blu cobalto progettata attorno a scala esistente con nicchia illuminata",
    badge: "Lavoro reale · Vincolo scala & nicchia",
    problem: "Scala adiacente e passaggi stretti da non sacrificare",
    solution:
      "Isola disegnata sulle quote reali della stanza e nicchia centrale illuminata a giorno.",
  },
  {
    type: "video" as const,
    src: "/media/progetti/progetto-1.mp4",
    badge: "Video cantiere · Pilastri & fuori squadro",
    problem: "Pilastri sporgenti, muri non dritti e scarichi fissi",
    solution:
      "Rilievo laser 3D prima della produzione: il mobile nasce già esatto per quel muro, senza listelli posticci.",
  },
  {
    type: "video" as const,
    src: "/media/progetti/progetto-3.mp4",
    badge: "Video cantiere · Fuori misura sartoriale",
    problem: "Mansarde, nicchie e angoli dove il catalogo si ferma",
    solution:
      "Collaborazione diretta con il nostro mastro falegname per sfruttare ogni centimetro utile.",
  },
];

const METODO = [
  {
    num: "01",
    title: "Ascolto & Budget Reale",
    desc: "In showroom partiamo da come vivi la casa e dal budget che vuoi investire, con chiarezza dal primo minuto.",
  },
  {
    num: "02",
    title: "Rilievo Laser 3D",
    desc: "Veniamo a casa tua e rileviamo al millimetro fuori squadro, pilastri, nicchie e impianti.",
  },
  {
    num: "03",
    title: "Progetto 3D Fotorealistico",
    desc: "Vedi gli ambienti finiti con luci e materiali veri prima di avviare la produzione.",
  },
  {
    num: "04",
    title: "Montaggio Interno",
    desc: "Consegna e posa curate dalla nostra squadra specializzata, fino all'ultima regolazione.",
  },
];

const FAQS = [
  {
    q: "Quanto costa un arredo su misura rispetto a un mobilificio standard?",
    a: "Molto meno di quanto si pensi. Partiamo sempre dal tuo budget reale e lo concentriamo dove fa la differenza — struttura, ferramenta, posa — evitando spese superflue. In showroom vedi subito soluzioni concrete e trasparenti, senza impegno.",
  },
  {
    q: "Vi occupate anche di un singolo mobile, di una nicchia o di una sola stanza?",
    a: "Assolutamente sì. Un armadio in mansarda, una nicchia fuori squadro o una sola cucina ricevono la stessa attenzione di una casa completa. Molti clienti partono da un singolo mobile su misura per metterci alla prova e poi ci affidano il resto della casa.",
  },
  {
    q: "La consulenza in showroom è davvero gratuita e senza vincoli?",
    a: "Sì, al 100%. Vieni a trovarci a Nocera Inferiore, tocchi con mano i materiali in materioteca, ragioniamo insieme sugli spazi e sui costi. Poi decidi tu con la massima calma se proseguire.",
  },
  {
    q: "Chi prende le misure e chi monta i mobili?",
    a: "Non ti lasciamo mai solo con misure prese a mano. Eseguiamo il rilievo laser 3D direttamente sul posto e seguiamo consegna e montaggio con i nostri tecnici specializzati.",
  },
];

const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function ArredamentoSuMisuraPage() {
  return (
    <div className="bg-[#faf7f2] text-[#1f1b16] selection:bg-[#8a5a32] selection:text-white">
      <style>{`
        details > summary { list-style: none; }
        details > summary::-webkit-details-marker { display: none; }
        details[open] .faq-icon { transform: rotate(45deg); }
      `}</style>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }}
      />

      {/* =====================================================================
          1. HERO CINEMATOGRAFICA FULL-BLEED + FORM 4 STEP COMPATTO
         ===================================================================== */}
      <section className="relative flex min-h-[700px] lg:min-h-[92vh] items-center overflow-hidden bg-[#120f0c] pt-24 pb-14 sm:pt-28 sm:pb-16">
        <HeroBackgroundSlider />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Sinistra: Impatto emotivo e messaggio netto */}
            <ScrollReveal direction="up" distance={22} className="lg:col-span-6 text-[#faf7f2]">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#dfc094] backdrop-blur-sm">
                <MapPin className="h-3.5 w-3.5" />
                <span>Arredamento Sartoriale · Nocera Inferiore</span>
              </div>

              <h1 className="mb-6 font-serif text-4xl font-medium leading-[1.04] tracking-tight sm:text-5xl xl:text-[62px]">
                Devi arredare casa?
                <span className="mt-1 block italic font-normal text-[#dfc094]">
                  Sei nel posto giusto.
                </span>
              </h1>

              <p className="mb-7 max-w-xl text-base font-light leading-relaxed text-[#faf7f2]/90 sm:text-lg">
                Arredamento sartoriale al millimetro, dalla singola cucina alla casa completa.
                Qualità artigianale e materiali veri al giusto prezzo — senza compromessi e senza
                dover spendere una follia.
              </p>

              <div className="inline-flex items-center gap-2.5 text-xs sm:text-sm text-[#e7c799] font-medium">
                <Check className="h-4 w-4 shrink-0 text-[#dfc094]" />
                <span>Consulenza e progetto 3D gratuiti · Senza alcun impegno d&apos;acquisto</span>
              </div>
            </ScrollReveal>

            {/* Destra: Box di prenotazione compatto 4 step ad altezza costante */}
            <ScrollReveal direction="scale" delay={0.08} className="lg:col-span-6">
              <LandingSuMisuraForm source="/arredamento-su-misura" />
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* =====================================================================
          2. LAVORI REALI & VINCOLI RISOLTI ("DOVE I CATALOGHI SI FERMANO")
         ===================================================================== */}
      <section className="py-20 sm:py-28 bg-[#faf7f2] overflow-x-clip">
        <Container>
          <ScrollReveal
            direction="up"
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-14"
          >
            <div className="max-w-2xl">
              <span className="block text-xs font-bold uppercase tracking-[0.22em] text-[#8a5a32] mb-3">
                Progetti reali &amp; vincoli risolti
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.08] text-[#1f1b16]">
                Dove i cataloghi standard si fermano,{" "}
                <span className="italic font-normal text-[#8a5a32]">inizia il nostro lavoro.</span>
              </h2>
            </div>
            <p className="max-w-md text-sm sm:text-base text-[#4a443c] font-light leading-relaxed">
              Le case vere hanno pilastri, scale, soffitti inclinati e pareti fuori squadro. Qui
              sotto vedi come trasformiamo quei vincoli in arredi puliti al millimetro.
            </p>
          </ScrollReveal>

          {/* Showcase 2x2 full-bleed: foto vere a casa dei clienti + video reali */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {REAL_PROJECTS.map((item, idx) => (
              <ScrollReveal
                key={item.src}
                direction="up"
                delay={(idx % 2) * 0.1}
                distance={32}
              >
                <article className="group h-full overflow-hidden rounded-2xl bg-white border border-[#e3dacb] shadow-xs">
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#181410]">
                    {item.type === "image" ? (
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                    ) : (
                      <video
                        src={item.src}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="h-full w-full object-cover object-center"
                      />
                    )}
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/55 to-transparent" />
                    <span className="absolute top-4 left-4 inline-flex items-center rounded-full bg-[#181410]/75 backdrop-blur-sm border border-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#dfc094]">
                      {item.badge}
                    </span>
                  </div>

                  <div className="p-6 sm:p-7">
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#8a5a32] mb-1.5">
                      Vincolo: {item.problem}
                    </p>
                    <p className="font-serif text-lg sm:text-xl text-[#1f1b16] leading-snug">
                      {item.solution}
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>

          {/* Fascione "Falegname 2.0" — Cavallo di Troia piccolo arredo */}
          <ScrollReveal direction="scale" delay={0.06} className="mt-10">
            <div className="rounded-2xl bg-[#181410] text-[#faf7f2] p-6 sm:p-8 lg:px-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6 border border-[#2d2620]">
              <div className="max-w-2xl">
                <span className="block text-[10px] font-bold uppercase tracking-[0.22em] text-[#dfc094] mb-2">
                  Falegname 2.0 · Anche un singolo mobile
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-medium leading-snug">
                  Devi risolvere solo una nicchia, un armadio in mansarda o un mobile su disegno?
                </h3>
                <p className="mt-2 text-sm text-[#faf7f2]/75 font-light">
                  Lavoriamo con la stessa cura sia sulla casa completa che sul singolo pezzo fuori
                  misura. La scelta di un grande showroom, la precisione di una bottega.
                </p>
              </div>
              <SinglePieceTriggerButton label="Parlaci del tuo mobile su misura" />
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* =====================================================================
          3. LA DIFFERENZA DENTRO — DECK FOTOGRAFICO 3D ROTANTE ALLO SCROLL
         ===================================================================== */}
      <SubstanceScrollShowcase />

      {/* =====================================================================
          4. COMPRARE CON GLI OCCHI — I 5 AMBIENTI CON FOTO VERE E COERENTI
         ===================================================================== */}
      <section className="py-24 sm:py-28 bg-[#faf7f2] overflow-x-clip">
        <Container>
          <ScrollReveal direction="up" className="max-w-2xl mb-12 sm:mb-14">
            <span className="block text-xs font-bold uppercase tracking-[0.22em] text-[#8a5a32] mb-3">
              Ogni ambiente, un progetto unico
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.08] text-[#1f1b16]">
              Scegli da dove vuoi iniziare.{" "}
              <span className="italic font-normal text-[#8a5a32]">Al resto pensiamo noi.</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#4a443c] font-light leading-relaxed">
              Clicca sull&apos;ambiente che vuoi realizzare: lo pre-selezioniamo subito nella tua
              richiesta di consulenza.
            </p>
          </ScrollReveal>

          <AmbientiShowcase />
        </Container>
      </section>

      {/* =====================================================================
          5. METODO EDITORIALE (LINEA CONTINUA) + SHOWROOM 500 MQ NOCERA
         ===================================================================== */}
      <section className="py-24 sm:py-28 bg-[#f2ebe0] border-y border-[#e3dacb] overflow-x-clip">
        <Container>
          {/* Parte A: Il Metodo in 4 passi con entrata scaglionata andata/ritorno */}
          <div className="mb-20">
            <ScrollReveal
              direction="up"
              className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12"
            >
              <div>
                <span className="block text-xs font-bold uppercase tracking-[0.22em] text-[#8a5a32] mb-3">
                  Il nostro metodo
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight leading-[1.1] text-[#1f1b16]">
                  Dal primo caffè all&apos;ultima vite,{" "}
                  <span className="italic font-normal text-[#8a5a32]">nessuna sorpresa.</span>
                </h2>
              </div>
              <p className="text-sm text-[#4a443c] max-w-sm font-light">
                Oltre 26 anni di esperienza reale in cantiere messi al servizio di un percorso
                semplice e trasparente.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-[#d4c8b6] pt-8">
              {METODO.map((step, idx) => (
                <ScrollReveal key={step.num} direction="up" delay={idx * 0.08} distance={24}>
                  <span className="font-serif text-3xl text-[#8a5a32] block mb-3">{step.num}</span>
                  <h3 className="font-serif text-xl font-medium text-[#1f1b16] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#4a443c] font-light leading-relaxed">{step.desc}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Parte B: Showroom 500 mq a Nocera Inferiore — 3 foto reali diverse */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            <ScrollReveal direction="right" distance={26} className="lg:col-span-7 grid grid-cols-2 gap-4">
              <div className="col-span-2 relative aspect-[16/9] overflow-hidden rounded-2xl bg-[#181410]">
                <Image
                  src="/media/showroom/showroom-6.jpg"
                  alt="Esposizione cucine contemporanee nello showroom Proggecta di Nocera Inferiore"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#181410]">
                <Image
                  src="/media/showroom/showroom-10.jpg"
                  alt="Cucina con isola e bancone snack esposta in showroom a Nocera Inferiore"
                  fill
                  sizes="(max-width: 1024px) 50vw, 29vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#181410]">
                <Image
                  src="/media/showroom/showroom-12.jpg"
                  alt="Dettaglio vetrina illuminata e finiture reali nello showroom Proggecta"
                  fill
                  sizes="(max-width: 1024px) 50vw, 29vw"
                  className="object-cover object-center"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal
              direction="left"
              delay={0.08}
              distance={26}
              className="lg:col-span-5 flex flex-col justify-between rounded-2xl bg-white border border-[#e3dacb] p-7 sm:p-9"
            >
              <div>
                <span className="block text-xs font-bold uppercase tracking-[0.22em] text-[#8a5a32] mb-3">
                  Tocca con mano prima di scegliere
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#1f1b16] leading-tight mb-4">
                  500 mq di Showroom e Materioteca a Nocera Inferiore.
                </h3>
                <p className="text-sm text-[#4a443c] font-light leading-relaxed mb-6">
                  Scegliere l&apos;arredo solo da un monitor è impossibile. Qui provi lo scorrimento
                  dei cassetti, tocchi le essenze del legno, vedi dal vivo top e colori con un
                  progettista dedicato solo a te.
                </p>

                <ul className="space-y-4 border-t border-[#efe8dd] pt-5 text-sm text-[#1f1b16]">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#8a5a32] mt-1 shrink-0" />
                    <span>
                      <strong>Località Fosso Imperatore – Lotto 14</strong>
                      <span className="block text-xs text-[#4a443c]">
                        Nocera Inferiore (SA) · A 2 minuti dall&apos;uscita autostradale
                      </span>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Car className="w-4 h-4 text-[#8a5a32] mt-1 shrink-0" />
                    <span>
                      <strong>Parcheggio privato riservato</strong>
                      <span className="block text-xs text-[#4a443c]">
                        Comodo accesso diretto fronte ingresso
                      </span>
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-[#8a5a32] mt-1 shrink-0" />
                    <span>
                      <strong>Lun – Sab · 09:00–13:00 / 15:30–19:30</strong>
                      <span className="block text-xs text-[#4a443c]">
                        Domenica chiuso · Riceviamo su appuntamento dedicato
                      </span>
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-7 pt-5 border-t border-[#efe8dd] flex flex-wrap items-center justify-between gap-3">
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#8a5a32] hover:text-[#6f4626] transition-colors"
                >
                  <span>Apri su Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href="#prenota-consulenza"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1f1b16] hover:text-[#8a5a32] transition-colors"
                >
                  <span>Prenota la visita</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* =====================================================================
          6. FAQ ESSENZIALI + CHIUSURA ATMOSFERICA
         ===================================================================== */}
      <section className="py-24 bg-[#faf7f2] overflow-x-clip">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <ScrollReveal direction="up" className="lg:col-span-5">
              <span className="block text-xs font-bold uppercase tracking-[0.22em] text-[#8a5a32] mb-3">
                Risposte chiare
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-medium tracking-tight leading-[1.1] text-[#1f1b16] mb-4">
                Quello che ci chiedono tutti prima di venire.
              </h2>
              <p className="text-sm sm:text-base text-[#4a443c] font-light leading-relaxed">
                Nessuna sorpresa sul prezzo, nessun obbligo d&apos;acquisto. La prima visita serve
                per capire se siamo la squadra giusta per la tua casa.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={0.08} className="lg:col-span-7 divide-y divide-[#d9cfc1] border-y border-[#d9cfc1]">
              {FAQS.map((faq, idx) => (
                <details key={faq.q} open={idx === 0} className="group py-5">
                  <summary className="flex items-center justify-between gap-4 cursor-pointer font-serif text-lg sm:text-xl font-medium text-[#1f1b16]">
                    <span>{faq.q}</span>
                    <Plus className="faq-icon w-5 h-5 shrink-0 text-[#8a5a32] transition-transform duration-200" />
                  </summary>
                  <p className="mt-3 pr-8 text-sm sm:text-base text-[#4a443c] font-light leading-relaxed">
                    {faq.a}
                  </p>
                </details>
              ))}
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Chiusura atmosferica unica */}
      <section className="relative overflow-hidden bg-[#14110e] py-20 sm:py-24 text-[#faf7f2]">
        <Image
          src="/media/hero/hero-3.jpg"
          alt=""
          fill
          sizes="100vw"
          aria-hidden="true"
          className="object-cover object-center opacity-25"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(20,17,14,0.92), rgba(20,17,14,0.78), rgba(20,17,14,0.92))",
          }}
        />
        <Container className="relative z-10 text-center max-w-3xl">
          <ScrollReveal direction="scale" distance={20}>
            <span className="block text-xs font-bold uppercase tracking-[0.22em] text-[#dfc094] mb-3">
              Atelier Proggecta · Nocera Inferiore
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight leading-[1.08] mb-5">
              Vieni a progettare una casa{" "}
              <span className="italic font-normal text-[#dfc094]">fatta come si deve.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#faf7f2]/80 font-light max-w-xl mx-auto mb-8">
              Scegli giorno e orario della tua consulenza gratuita in showroom. Portaci una piantina o
              anche solo un&apos;idea: al resto pensiamo noi.
            </p>
            <a
              href="#prenota-consulenza"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#8a5a32] px-8 py-4 text-sm sm:text-base font-bold text-white shadow-xl transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#a06b3f]"
            >
              <span>Prenota la tua visita gratuita</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </ScrollReveal>
        </Container>
      </section>
    </div>
  );
}
