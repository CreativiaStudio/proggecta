import type { OpeningHours } from "./types";

// Configurazione principale del sito Proggecta.
// Gli ID di tracciamento e gli URL dei webhook vanno in .env (vedi docs/C).

export const siteConfig = {
  name: "Proggecta",
  legalName: "" as string,
  vatNumber: "" as string,
  tagline: "Studio di progettazione sartoriale d'interni",
  url: "https://www.proggecta.it",
  locale: "it_IT",

  address: {
    street: "Località Fosso Imperatore – Lotto 14",
    city: "Nocera Inferiore",
    province: "SA",
    postalCode: "84014",
    country: "IT",
    // Coordinate esatte dello showroom (Lotto 14, Fosso Imperatore)
    lat: 40.779377,
    lng: 14.612368,
    googleMapsUrl: "https://www.google.com/maps/dir/?api=1&destination=40.779377,14.612368",
  },

  showroom: {
    sizeSqm: 500,
    parking: "Parcheggio privato riservato ai clienti",
    directions: "Località Fosso Imperatore (Lotto 14), Nocera Inferiore",
  },

  contacts: {
    phone: "" as string,
    phoneHref: "" as string,
    whatsapp: "" as string,
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
  ] satisfies OpeningHours[],

  /** Comuni del bacino d'utenza: usati nel copy locale e nel targeting Ads */
  serviceArea: [
    "Nocera Inferiore",
    "Nocera Superiore",
    "Pagani",
    "Angri",
    "Pompei",
    "Sant'Antonio Abate",
    "San Marzano sul Sarno",
    "Poggiomarino",
    "Boscoreale",
    "Sarno",
    "Castellammare di Stabia",
    "Torre Annunziata",
    "Gragnano",
    "Cava de' Tirreni",
    "Salerno",
  ],

  /** Promessa di ricontatto mostrata sotto i form */
  callbackPromise: "Ti richiamiamo entro 24 ore lavorative per confermare giorno e orario.",

  social: {
    instagram: "",
    facebook: "",
    tiktok: "",
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
