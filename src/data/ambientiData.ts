import type { AmbienteLanding, ImageAsset } from "./types";

// Landing per ambiente: servono al "message match" delle campagne Google Ads.
// Ogni gruppo di annunci punta alla landing con headline coerente con la keyword.
// Riutilizzano tutte le sezioni della Home (metodo, qualità, showroom, form, FAQ):
// cambiano solo hero, pain point, marchi mostrati e preset del form.

const img = (path: string, alt: string, credit?: string): ImageAsset => ({
  src: `/media/ambienti/${path}`,
  alt,
  width: 2400,
  height: 1600,
  credit,
});

export const ambientiData: AmbienteLanding[] = [
  {
    slug: "cucine-su-misura",
    ambiente: "cucina",
    seo: {
      title: "Cucine su Misura a Nocera Inferiore | Render 3D Gratuito | Proggecta",
      description:
        "Cucine su misura progettate al millimetro: rilievo laser, render 3D gratuito, casse in multistrato e montaggio interno. Showroom a Nocera Inferiore.",
    },
    hero: {
      eyebrow: "Cucine su misura · Showroom a Nocera Inferiore",
      headline: "Cucine su misura, progettate al millimetro sulla tua casa.",
      subheadline:
        "Rilievo laser, render 3D fotorealistico prima dell'ordine e casse in multistrato che non temono l'acqua. Vieni a toccarle con mano: la consulenza è gratuita.",
      image: img("cucine/hero.jpg", "Cucina su misura con isola e top in gres in un ambiente luminoso"),
    },
    painPoints: [
      { title: "Il modulo da 60 che non ci sta", body: "Con i moduli standard restano buchi da tamponare e centimetri sprecati. Noi progettiamo sulla parete reale." },
      { title: "Il mobile sotto il lavello che si gonfia", body: "È il primo punto a cedere nelle cucine in truciolare. Le nostre casse su misura sono in multistrato." },
      { title: "Gli elettrodomestici scelti dopo", body: "Incassi che non tornano e aerazioni sbagliate. Noi li progettiamo insieme ai mobili." },
    ],
    brandSlugs: ["ciesse", "elettrodomestici", "zamagna", "materiali-pannelli"],
    faqIds: ["quanto-costa", "consulenza-gratuita", "tempi-consegna", "fuori-misura", "rate", "montaggio-incluso"],
  },
  {
    slug: "camerette",
    ambiente: "cameretta",
    seo: {
      title: "Camerette su Misura a Nocera Inferiore | Moretti Compact | Proggecta",
      description:
        "Camerette evolutive e salvaspazio progettate sulla stanza reale dei tuoi figli. Rilievo laser e render 3D gratuito nello showroom Proggecta di Nocera Inferiore.",
    },
    hero: {
      eyebrow: "Camerette · Showroom a Nocera Inferiore",
      headline: "Camerette che crescono con i tuoi figli, progettate sulla loro stanza.",
      subheadline:
        "Soluzioni salvaspazio e composizioni evolutive Moretti Compact, disegnate sulle misure reali della stanza. Le vedi in 3D, con i tuoi figli, prima dell'ordine.",
      image: img("camerette/hero.jpg", "Cameretta evolutiva con letto a soppalco e zona studio", "© Moretti Compact"),
    },
    painPoints: [
      { title: "Stanza piccola, due figli", body: "Letti sovrapposti, zone studio separate, armadi a ponte: a ciascuno il suo spazio." },
      { title: "Una cameretta da rifare ogni 5 anni", body: "Progettiamo composizioni che evolvono con l'età, senza ricomprare tutto." },
      { title: "Finestra, termosifone, porta…", body: "Il rilievo laser ci permette di sfruttare anche gli angoli più complicati." },
    ],
    brandSlugs: ["moretti-compact", "mercantini", "materiali-pannelli"],
    faqIds: ["fuori-misura", "consulenza-gratuita", "solo-un-ambiente", "tempi-consegna", "rate"],
  },
  {
    slug: "armadi-cabine-armadio",
    ambiente: "notte",
    seo: {
      title: "Armadi e Cabine Armadio su Misura a Nocera Inferiore | Proggecta",
      description:
        "Armadi battenti, scorrevoli e cabine armadio su misura: rilievo laser, attrezzature interne personalizzate e render 3D gratuito. Showroom Proggecta, Nocera Inferiore.",
    },
    hero: {
      eyebrow: "Armadi e zona notte · Showroom a Nocera Inferiore",
      headline: "Armadi e cabine armadio che occupano esattamente lo spazio che hai.",
      subheadline:
        "Dal pavimento al soffitto, da parete a parete, anche sotto il tetto inclinato. Sistemi Mercantini e Moretti Compact progettati al millimetro e organizzati su cosa devi contenere.",
      image: img("notte/hero.jpg", "Cabina armadio su misura con illuminazione integrata", "© Mercantini"),
    },
    painPoints: [
      { title: "Lo spazio sprecato sopra l'armadio", body: "Gli armadi standard lasciano centimetri vuoti fino al soffitto. Noi li recuperiamo." },
      { title: "Mansarde e nicchie", body: "Tetti inclinati e rientranze diventano contenitori, non problemi." },
      { title: "Tutto dentro, niente in ordine", body: "Progettiamo appendiabiti, cassetti e scarpiere su ciò che possiedi davvero." },
    ],
    brandSlugs: ["mercantini", "moretti-compact", "materiali-pannelli"],
    faqIds: ["fuori-misura", "consulenza-gratuita", "solo-un-ambiente", "tempi-consegna"],
  },
  {
    slug: "arredamento-casa-completa",
    ambiente: "completo",
    seo: {
      title: "Arredamento Casa Completa su Misura a Nocera Inferiore | Proggecta",
      description:
        "Arreda tutta casa con un solo interior designer: cucina, living, zona notte e camerette dai migliori marchi italiani. Showroom a Nocera Inferiore.",
    },
    hero: {
      eyebrow: "Casa nuova o ristrutturazione · Showroom a Nocera Inferiore",
      headline: "Tutta la casa, un solo progetto. Un solo interlocutore.",
      subheadline:
        "Cucina, living, zona notte e camerette scelti tra i migliori marchi italiani e progettati insieme da un unico interior designer. Niente cinque negozi, niente stili che non si parlano.",
      image: img("completo/hero.jpg", "Open space con cucina e living arredati in modo coordinato"),
    },
    painPoints: [
      { title: "Cinque negozi per una casa sola", body: "Ognuno vende il suo pezzo, nessuno guarda l'insieme. Da noi un solo progettista segue tutto." },
      { title: "Stili che non si parlano", body: "Il render 3D ti fa vedere tutta la casa coordinata prima di comprare." },
      { title: "Tempi e consegne da incastrare", body: "Un unico cronoprogramma e un'unica squadra di montaggio." },
    ],
    brandSlugs: ["ciesse", "mercantini", "moretti-compact", "zamagna", "elettrodomestici"],
    faqIds: ["perche-multibrand", "quanto-costa", "consulenza-gratuita", "tempi-consegna", "rate"],
  },
];

export const getAmbiente = (slug: string) => ambientiData.find((a) => a.slug === slug);
