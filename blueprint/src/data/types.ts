// =============================================================
// PROGGECTA — Tipi condivisi per tutti i data file del minisito
// Fonte unica di verità per copy e contenuti strutturati.
// I componenti NON devono contenere copy hard-coded: leggono da qui.
// =============================================================

export type Ambiente =
  | "cucina"
  | "notte"
  | "cameretta"
  | "living"
  | "completo"
  | "contract";

export type IconName =
  // Nomi di icone lucide-react (https://lucide.dev/icons)
  | "Ear"
  | "ScanLine"
  | "Box"
  | "Hammer"
  | "Layers"
  | "Droplets"
  | "Cog"
  | "Gem"
  | "Leaf"
  | "Trees"
  | "Ruler"
  | "Users"
  | "ShieldCheck"
  | "Sparkles"
  | "ParkingCircle"
  | "UserRound"
  | "Store"
  | "Clock"
  | "Hotel"
  | "Coffee"
  | "Briefcase"
  | "ShoppingBag";

export interface ImageAsset {
  /** Percorso in /public, es. "/media/brand/mercantini/hero.jpg" */
  src: string;
  /** Alt descrittivo in italiano (accessibilità + SEO immagini) */
  alt: string;
  width: number;
  height: number;
  /** Credito obbligatorio per foto dei produttori, es. "© Mercantini" */
  credit?: string;
}

export interface VideoAsset {
  /** MP4 H.264, muto, max ~2,5 MB per l'hero */
  mp4: string;
  webm?: string;
  /** Poster = immagine LCP. Obbligatorio. */
  poster: ImageAsset;
}

export interface Cta {
  label: string;
  href: string;
}

export interface SeoMeta {
  title: string; // max ~60 caratteri
  description: string; // max ~155 caratteri
  noindex?: boolean;
}

export interface ContentSection {
  title: string;
  body: string;
  bullets?: string[];
  image?: ImageAsset;
}

// ---------- BRAND ----------

export type BrandStatus = "active" | "transition" | "archived";

export interface Brand {
  slug: string;
  /** Nome mostrato in pagina (può raggruppare più marchi) */
  name: string;
  /** Marchi reali coperti dalla pagina */
  makers: string[];
  /** Etichetta di comparto mostrata nella card */
  category: string;
  ambienti: Ambiente[];
  status: BrandStatus;
  showInGrid: boolean;
  order: number;
  logo: ImageAsset | null;
  /** Claim breve per la card nella griglia Home (max ~90 caratteri) */
  cardClaim: string;
  seo: SeoMeta;
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    image: ImageAsset;
  };
  intro: string;
  /** Perché questo marchio dentro un progetto Proggecta (angolo multi-brand) */
  whyProggecta: {
    title: string;
    body: string;
  };
  sections: ContentSection[];
  highlights: string[];
  /** Slug di altri brand da proporre in "Completa il progetto" */
  crossBrands: string[];
  /** id da faqData */
  faqIds: string[];
  /** Pre-selezione del campo "ambiente" nel form */
  formPreset: Ambiente;
  ctaLabel: string;
  /** Box speciale solo per brand in transizione (Ciesse) */
  transitionNotice?: {
    title: string;
    body: string;
  };
}

// ---------- FEATURES / QUALITÀ ----------

export interface Feature {
  id: string;
  icon: IconName;
  kicker: string;
  title: string;
  short: string;
  long: string;
  bullets?: string[];
  /** Pagine in cui mostrare la feature */
  showOn: Array<"home" | "qualita-costruttiva" | "progettazione-sartoriale" | "contract">;
}

export interface ComparisonRow {
  criterion: string;
  multistrato: string;
  truciolare: string;
}

export interface ChecklistItem {
  question: string;
  whyItMatters: string;
}

// ---------- PROCESSO ----------

export interface ProcessStep {
  step: number;
  slug: string;
  icon: IconName;
  title: string;
  short: string;
  long: string;
  duration: string;
  deliverable: string;
}

// ---------- FAQ ----------

export type FaqCategory =
  | "prezzi"
  | "tempi"
  | "progetto"
  | "servizio"
  | "pagamento"
  | "showroom"
  | "ciesse"
  | "contract";

export interface FaqItem {
  id: string;
  category: FaqCategory;
  question: string;
  answer: string;
  /** Se true NON va pubblicata finché il claim non è validato */
  draft?: boolean;
}

// ---------- LANDING AMBIENTI (Google Ads message match) ----------

export interface AmbienteLanding {
  slug: string;
  ambiente: Ambiente;
  seo: SeoMeta;
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    image: ImageAsset;
    video?: VideoAsset;
  };
  painPoints: Array<{ title: string; body: string }>;
  brandSlugs: string[];
  faqIds: string[];
}

// ---------- SITE CONFIG ----------

export interface OpeningHours {
  /** 0 = domenica … 6 = sabato */
  day: number;
  label: string;
  slots: Array<{ open: string; close: string }>;
}
