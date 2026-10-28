import type { OpeningHours } from "./types";

// Tutti i valori "[DA COMPILARE]" vanno confermati da Alfonso prima del go-live.
// Gli ID di tracciamento e gli URL dei webhook NON stanno qui: vanno in .env (vedi docs/C).

export const siteConfig = {
  name: "Proggecta",
  legalName: "[DA COMPILARE — ragione sociale Proggecta]",
  vatNumber: "[DA COMPILARE — P.IVA]",
  tagline: "Studio di progettazione sartoriale d'interni",
  url: "https://www.proggecta.it",
  locale: "it_IT",

  address: {
    street: "Località Fosso Imperatore – Lotto 14",
    city: "Nocera Inferiore",
    province: "SA",
    postalCode: "84014",
    country: "IT",
    // Coordinate esatte dello showroom (servono per JSON-LD e link mappe)
    lat: 0,
    lng: 0,
    googleMapsUrl: "[DA COMPILARE — link condivisione Google Maps]",
  },

  showroom: {
    sizeSqm: 500,
    parking: "Parcheggio privato riservato ai clienti",
    directions: "Località Fosso Imperatore (Lotto 14), Nocera Inferiore",
  },

  contacts: {
    phone: "[DA COMPILARE]",
    phoneHref: "tel:+39XXXXXXXXXX",
    whatsapp: "39XXXXXXXXXX", // solo cifre, prefisso incluso, senza "+"
    whatsappDefaultMessage:
      "Ciao Proggecta, vorrei prenotare una consulenza in showroom a Nocera Inferiore.",
    email: "info@proggecta.it",
    emailContract: "info@proggecta.it",
  },

  /** Usato dal form per proporre solo giorni di apertura */
  openingHours: [
    { day: 1, label: "Lunedì", slots: [{ open: "09:00", close: "13:00" }, { open: "15:30", close: "19:30" }] },
    { day: 2, label: "Martedì", slots: [{ open: "09:00", close: "13:00" }, { open: "15:30", close: "19:30" }] },
    { day: 3, label: "Mercoledì", slots: [{ open: "09:00", close: "13:00" }, { open: "15:30", close: "19:30" }] },
    { day: 4, label: "Giovedì", slots: [{ open: "09:00", close: "13:00" }, { open: "15:30", close: "19:30" }] },
    { day: 5, label: "Venerdì", slots: [{ open: "09:00", close: "13:00" }, { open: "15:30", close: "19:30" }] },
    { day: 6, label: "Sabato", slots: [{ open: "09:00", close: "13:00" }, { open: "15:30", close: "19:30" }] },
  ] satisfies OpeningHours[], // ORARI SEGNAPOSTO — DA CONFERMARE

  /** Comuni del bacino d'utenza: usati nel copy locale e nel targeting Ads */
  serviceArea: [
    "Scafati",
    "Pompei",
    "Angri",
    "Sant'Antonio Abate",
    "San Marzano sul Sarno",
    "Poggiomarino",
    "Boscoreale",
    "Sarno",
    "Nocera Inferiore",
    "Nocera Superiore",
    "Pagani",
    "Castellammare di Stabia",
    "Torre Annunziata",
    "Gragnano",
    "Salerno",
  ],

  /** Promessa di ricontatto mostrata sotto i form — deve essere rispettata dai venditori */
  callbackPromise: "Ti richiamiamo entro 24 ore lavorative per confermare giorno e orario.",

  social: {
    instagram: "[DA COMPILARE]",
    facebook: "[DA COMPILARE]",
    tiktok: "[DA COMPILARE]",
  },

  founder: {
    name: "Alfonso Malafronte",
    role: "Fondatore di Proggecta",
  },

  nav: [
    { label: "Progettazione", href: "/progettazione-sartoriale" },
    { label: "Qualità costruttiva", href: "/qualita-costruttiva" },
    { label: "Marchi", href: "/#marchi" },
    { label: "Contatti", href: "/contatti" },
  ],

  primaryCta: { label: "Prenota la consulenza gratuita", href: "/contatti" },
} as const;

export type SiteConfig = typeof siteConfig;

/** Voce del mega menu "Marchi" nell'header (loghi in /public/media/logos). */
export interface NavBrand {
  name: string;
  /** Pagina del marchio */
  href: string;
  /** Uno o più loghi vettoriali da /media/logos (es. Smeg & Electrolux) */
  logos: string[];
  /** Comparto mostrato sotto il nome del marchio */
  compartment: string;
}

/** Elenco completo dei marchi partner mostrato nel mega menu dell'header. */
export const navBrands: NavBrand[] = [
  {
    name: "Ciesse Cucine",
    href: "/brand/ciesse",
    logos: ["/media/logos/ciesse.svg"],
    compartment: "Cucine sartoriali",
  },
  {
    name: "Moretti Compact",
    href: "/brand/moretti-compact",
    logos: ["/media/logos/moretti-compact.png"],
    compartment: "Camerette e cabine",
  },
  {
    name: "Mercantini",
    href: "/brand/mercantini",
    logos: ["/media/logos/mercantini.svg"],
    compartment: "Armadi e zona notte",
  },
  {
    name: "Zamagna",
    href: "/brand/zamagna",
    logos: ["/media/logos/zamagna.svg"],
    compartment: "Tavoli, sedie e living",
  },
  {
    name: "Signorini & Coco",
    href: "/brand/signorini-coco",
    logos: ["/media/logos/signorini-coco.svg"],
    compartment: "Arredo d'arte",
  },
  {
    name: "Ferretti e Ferretti",
    href: "/brand/ferretti-ferretti",
    logos: ["/media/logos/ferretti-ferretti.svg"],
    compartment: "Falegnameria sartoriale",
  },
  {
    name: "Smeg & Electrolux",
    href: "/brand/elettrodomestici",
    logos: ["/media/logos/smeg.svg", "/media/logos/electrolux.svg"],
    compartment: "Elettrodomestici",
  },
  {
    name: "Poziello & Riccardi",
    href: "/brand/materiali-pannelli",
    logos: ["/media/logos/poziello-riccardi.svg"],
    compartment: "Materiali e pannelli",
  },
];
