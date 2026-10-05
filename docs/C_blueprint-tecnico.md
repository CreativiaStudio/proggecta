# PARTE C — Blueprint tecnico per JEV e DeepSeek

**Destinatari:** JEV (supervisione e revisione) e DeepSeek v4.1 Flash (generazione del codice).
**Regola n. 1:** i componenti **non contengono copy**. Tutti i testi stanno in `src/data/*.ts` (già pronti in `blueprint/src/data/`). Il generatore costruisce componenti e pagine che leggono quei file.

---

## 1. Stack

| Ambito | Scelta | Note |
|---|---|---|
| Framework | **Next.js 15.x, App Router**, TypeScript `strict` | Se si usa Next 16, verificare il changelog prima di generare |
| Stile | **Tailwind CSS v4** (config CSS-first con `@theme`) | Nessun `tailwind.config.js` |
| Animazioni | **Framer Motion** (`motion`), con `LazyMotion` + `domAnimation` e componenti `m.*` | Bundle ridotto |
| Icone | `lucide-react` | Solo import nominali |
| Validazione | `zod` **v3** (`^3.23`) | Schema condiviso client/server. Gli esempi usano la sintassi v3 (`errorMap`, `z.record(z.string())`) |
| Font | `next/font/google`: **Fraunces** (titoli) + **Inter** (testo) | `display: swap`, solo subset `latin` |
| Tag | `@next/third-parties/google` per GTM | Pixel Meta e Google Ads **dentro GTM**, non nel codice |
| Hosting | Vercel | DNS su Aruba (record A/CNAME verso Vercel, **MX invariati**) |
| Cookie / consenso | CMP certificata Google (es. iubenda o Cookiebot) con **Consent Mode v2** | Non scrivere un banner fatto in casa |

Dipendenze consentite: `next`, `react`, `react-dom`, `framer-motion`, `lucide-react`, `zod`, `clsx`, `tailwind-merge`, `@next/third-parties`. **Nient'altro** senza approvazione di JEV.

---

## 2. Struttura cartelle

```
proggecta-web/
├── public/
│   └── media/ …                    (vedi Parte B §7)
├── src/
│   ├── app/
│   │   ├── layout.tsx              font, GTM, consent default, Header, Footer, MobileStickyBar, JSON-LD LocalBusiness
│   │   ├── page.tsx                Home
│   │   ├── globals.css             Tailwind v4 + @theme
│   │   ├── progettazione-sartoriale/page.tsx
│   │   ├── qualita-costruttiva/page.tsx
│   │   ├── contract/page.tsx
│   │   ├── showroom-contatti/page.tsx
│   │   ├── brand/[slug]/page.tsx   generateStaticParams + dynamicParams = false
│   │   ├── ambienti/[slug]/page.tsx generateStaticParams + dynamicParams = false
│   │   ├── privacy-policy/page.tsx
│   │   ├── cookie-policy/page.tsx
│   │   ├── not-found.tsx
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   ├── opengraph-image.tsx     (o /public/og.jpg statica 1200×630)
│   │   └── api/lead/route.ts       POST → validazione → n8n
│   ├── components/
│   │   ├── layout/   Header.tsx · Footer.tsx · MobileStickyBar.tsx · Breadcrumbs.tsx
│   │   ├── sections/ Hero.tsx · TrustChips.tsx · LogoStrip.tsx · ProblemSection.tsx · BrandGrid.tsx ·
│   │   │             ProcessSteps.tsx · QualityComparison.tsx · FeatureCards.tsx · ShowroomExperience.tsx ·
│   │   │             FounderNote.tsx · ContractTeaser.tsx · FaqAccordion.tsx · FinalCta.tsx ·
│   │   │             PageHero.tsx · MediaTextSection.tsx · ConstraintGrid.tsx · BuyerChecklist.tsx ·
│   │   │             CrossBrands.tsx · TransitionNotice.tsx · VisitTimeline.tsx · OpeningHoursTable.tsx ·
│   │   │             MapEmbed.tsx · RenderSlider.tsx
│   │   ├── forms/    BookingForm.tsx · ContractForm.tsx · DayChips.tsx · FormSuccess.tsx
│   │   └── ui/       Button.tsx · Container.tsx · SectionHeading.tsx · Reveal.tsx · Chip.tsx · Icon.tsx ·
│   │                 SmartImage.tsx · WhatsAppLink.tsx · MotionProvider.tsx
│   ├── data/         types.ts · siteConfig.ts · brandData.ts · featuresData.ts · processStepsData.ts ·
│   │                 faqData.ts · ambientiData.ts · pagesData.ts (copy delle pagine statiche, da Parte A)
│   └── lib/
│       ├── leadSchema.ts           zod (client + server)
│       ├── tracking.ts             dataLayer push, eventId
│       ├── attribution.ts          cattura gclid/utm/fbclid al primo atterraggio
│       ├── openingDays.ts          prossimi N giorni di apertura (Europe/Rome)
│       ├── jsonld.ts               LocalBusiness, BreadcrumbList, FAQPage
│       └── cn.ts                   clsx + tailwind-merge
├── next.config.ts                  redirect 301 (ciessehome.it, ciessecucine.com, proggecta.com)
└── .env.local                      (mai committato)
```

**`pagesData.ts`** va creato trascrivendo il copy delle sezioni Home, `/progettazione-sartoriale`, `/qualita-costruttiva`, `/contract`, `/showroom-contatti` dalla Parte A (§2, §3, §4, §6, §7). Una costante per pagina, es. `homeCopy`, `progettazioneCopy`, ecc.

---

## 3. Rendering e routing

- **Tutte le pagine sono statiche (SSG).** Nessuna pagina legge `searchParams` lato server: renderebbe la pagina dinamica e più lenta.
- `brand/[slug]` e `ambienti/[slug]`: `generateStaticParams()` dai data file + `export const dynamicParams = false` (slug sconosciuti → 404).
- **Next 15:** `params` è una `Promise`:

```tsx
// src/app/brand/[slug]/page.tsx
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { brandData, getBrand } from "@/data/brandData";

export const dynamicParams = false;

export function generateStaticParams() {
  return brandData.filter((b) => b.status !== "archived").map((b) => ({ slug: b.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const brand = getBrand(slug);
  if (!brand) return {};
  return {
    title: brand.seo.title,
    description: brand.seo.description,
    alternates: { canonical: `/brand/${brand.slug}` },
    robots: brand.seo.noindex ? { index: false } : undefined,
    openGraph: { images: [brand.hero.image.src] },
  };
}

export default async function BrandPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const brand = getBrand(slug);
  if (!brand) notFound();
  // … sezioni nell'ordine di Parte A §5
}
```

- **Preset del form** sulle pagine brand/ambiente: passato come prop (`<BookingForm preset={brand.formPreset} />`), non via query string.

---

## 4. Design system

### 4.1 Token (`src/app/globals.css`)

```css
@import "tailwindcss";

@theme {
  --color-ink: #1f1b16;          /* testo principale, sfondi scuri */
  --color-ink-soft: #4a443c;     /* testo secondario */
  --color-paper: #faf7f2;        /* sfondo pagina */
  --color-sand: #efe8dd;         /* sezioni alternate */
  --color-stone: #d9cfc1;        /* bordi, divisori */
  --color-bronze: #8a5a32;       /* accento e CTA primaria (contrasto AA con bianco) */
  --color-bronze-dark: #6f4626;  /* hover CTA */
  --color-sage: #6f7a64;         /* accento secondario, icone */
  --color-whatsapp: #128c4a;     /* solo pulsante WhatsApp (verde scuro: contrasto AA con bianco) */

  --font-display: var(--font-fraunces), Georgia, serif;
  --font-sans: var(--font-inter), system-ui, sans-serif;

  --radius-card: 1.25rem;
  --ease-out-soft: cubic-bezier(0.22, 1, 0.36, 1);
}
```

### 4.2 Regole visive
- **Tipografia:** H1 `font-display` 40px mobile / 72px desktop, interlinea 1,05, `tracking-tight`. H2 32/48px. Testo 17px mobile, interlinea 1,6. Eyebrow: sans, maiuscolo, 12–13px, `tracking-[0.2em]`, colore `sage`.
- **Ritmo:** sezioni `py-20 md:py-32`. Contenitore max `1280px`, testi max `68ch`.
- **Alternanza sfondi:** paper → sand → paper → ink (sezione qualità in scuro per dare impatto) → paper…
- **CTA primaria:** pieno `bronze`, testo bianco, altezza min. 52px, raggio pieno (`rounded-full`), freccia `→` animata al passaggio. **Un solo stile di CTA primaria su tutto il sito.**
- **Card:** sfondo bianco, `rounded-[--radius-card]`, bordo `stone/60`, nessuna ombra pesante.
- **Immagini:** angoli arrotondati solo nelle card; hero e sezioni a tutta larghezza senza bordi.

---

## 5. Inventario componenti (props essenziali)

| Componente | Tipo | Props | Note |
|---|---|---|---|
| `Hero` | server | `eyebrow, headline, subheadline, image: ImageAsset, video?: VideoAsset, cta, secondaryCta?, chips: string[]` | Immagine con `priority`; video montato **solo client e solo da 768px in su**, dopo il caricamento della pagina; il poster è l'elemento LCP |
| `TrustChips` | server | `items: {icon, label}[]` | 2×2 su mobile |
| `LogoStrip` | server | `brands: Brand[]` | Loghi SVG in scala di grigi |
| `ProblemSection` | server | `eyebrow, title, cards: {title, body}[], bridge?` | Usata con `painPoints` nelle landing ambiente |
| `BrandGrid` | server | `brands: Brand[], intro` | `id="marchi"`, card 4:5 → `/brand/[slug]` |
| `ProcessSteps` | server | `steps: ProcessStep[], variant: "compact" \| "timeline"` | `compact` in Home, `timeline` in progettazione |
| `QualityComparison` | server | `intro, rows: ComparisonRow[]` | Tabella su desktop, card impilate su mobile; sfondo `ink` |
| `FeatureCards` | server | `features: Feature[], expanded?: boolean` | |
| `ShowroomExperience` | server + client (galleria) | `images: ImageAsset[], copy` | Galleria con `scroll-snap`, senza librerie |
| `FounderNote` | server | `quote, name, role, image, videoSrc?` | |
| `BookingForm` | **client** | `preset?: Ambiente, source: string` | 3 step, vedi §6 |
| `ContractForm` | **client** | — | Singolo step |
| `DayChips` | **client** | `value, onChange, count=10` | Calcolo date **dopo il mount** (evita mismatch di idratazione), skeleton prima |
| `FaqAccordion` | server | `items: FaqItem[]` | `<details>/<summary>` nativi: zero JS, accessibile |
| `MapEmbed` | **client** | `staticImage, embedUrl` | iframe Google Maps caricato **solo al clic** |
| `RenderSlider` | **client** | `before: ImageAsset, after: ImageAsset` | `input type=range` accessibile |
| `MobileStickyBar` | **client** | — | Visibile `< md` dopo 400px di scroll; nascosta con `IntersectionObserver` quando `#prenota` è in vista |
| `Reveal` | **client** | `children, delay?, as?` | Vedi §7 |
| `SmartImage` | server | `image: ImageAsset, sizes, priority?` | Wrapper `next/image` che mostra il credito |
| `WhatsAppLink` | **client** | `message?, children` | `https://wa.me/{numero}?text=…` + evento `whatsapp_click` |

Server component di default: `"use client"` **solo** dove indicato.

---

## 6. Form e API lead

### 6.1 Schema (`src/lib/leadSchema.ts`)

```ts
import { z } from "zod";

export const ambienti = ["cucina", "notte", "cameretta", "living", "completo"] as const;

export const bookingSchema = z.object({
  formType: z.literal("showroom"),
  ambiente: z.enum(ambienti),
  preferredDate: z.string().min(1),            // "YYYY-MM-DD" oppure "flessibile"
  preferredSlot: z.enum(["mattina", "pomeriggio"]),
  fullName: z.string().trim().min(3, "Scrivi nome e cognome, così sappiamo chi cercare."),
  phone: z
    .string()
    .trim()
    .transform((v) => v.replace(/[\s.\-()]/g, ""))
    .refine((v) => /^(\+39|0039)?3\d{8,9}$|^(\+39|0039)?0\d{5,10}$/.test(v), {
      message: "Controlla il numero: ci serve per confermarti l'appuntamento.",
    }),
  email: z.string().trim().email("Sembra che manchi qualcosa nell'email."),
  notes: z.string().max(1000).optional(),
  privacy: z.literal(true, { errorMap: () => ({ message: "Per ricontattarti abbiamo bisogno del tuo consenso." }) }),
  marketing: z.boolean().default(false),
  // anti-spam
  website: z.string().max(0).optional(),        // honeypot: deve restare vuoto
  startedAt: z.number(),                        // ms; invio < 3 s dall'inizio = bot
  // tracciamento
  eventId: z.string().uuid(),
  sourcePath: z.string(),
  attribution: z.record(z.string()).optional(),
});

export type BookingInput = z.infer<typeof bookingSchema>;
```

`contractSchema`: stessa base + `company`, `role`, `businessType`, `size`, `timing`; `formType: "contract"`.

### 6.2 Route handler (`src/app/api/lead/route.ts`)

Responsabilità, in ordine:
1. `safeParse` del body con lo schema corretto (in base a `formType`). Errore → `400` con messaggi per campo.
2. Honeypot pieno o `Date.now() - startedAt < 3000` → rispondere `200 { ok: true }` **senza inoltrare** (non rivelare il filtro ai bot).
3. Normalizzare il telefono in formato E.164 (`+39…`). Dividere `fullName` in `fn` (prima parola) e `ln` (resto).
4. Arricchire con `client_ip_address` (header `x-forwarded-for`), `client_user_agent`, cookie `_fbp` / `_fbc`, `event_source_url`.
5. `POST` a `process.env.N8N_LEAD_WEBHOOK_URL` con header `x-webhook-secret: process.env.N8N_WEBHOOK_SECRET`, timeout 8 s.
6. Risposta `200 { ok: true }` / `502 { ok: false }`. Mai esporre l'URL del webhook al client.

### 6.3 Payload inviato a n8n

```json
{
  "event_id": "8b6f0c4e-…",
  "event_name": "Lead",
  "event_time": 1791200000,
  "event_source_url": "https://www.proggecta.it/ambienti/cucine-su-misura",
  "form_type": "showroom",
  "user_data": {
    "fn": "Mario", "ln": "Rossi",
    "em": "mario@email.it", "ph": "+393331234567",
    "client_ip_address": "…", "client_user_agent": "…",
    "fbp": "fb.1.…", "fbc": "fb.1.…"
  },
  "custom_data": {
    "ambiente": "cucina",
    "preferred_date": "2026-10-07",
    "preferred_slot": "mattina",
    "notes": "…",
    "source_path": "/ambienti/cucine-su-misura"
  },
  "attribution": {
    "gclid": "…", "gbraid": "", "wbraid": "", "fbclid": "",
    "utm_source": "google", "utm_medium": "cpc", "utm_campaign": "…", "utm_term": "…", "utm_content": "…",
    "landing_page": "/ambienti/cucine-su-misura", "referrer": "https://www.google.com/", "first_touch_at": "2026-10-05T09:12:00Z"
  },
  "consent": { "privacy": true, "marketing": false, "timestamp": "2026-10-05T09:15:31Z" }
}
```

> **Da adeguare in n8n (workflow esistente):** oggi il workflow si aspetta `custom_data.kitchen_id`. Va aggiornato per mappare i nuovi campi verso SwipeOne (inclusi `gclid` e UTM, indispensabili per l'import delle conversioni offline), puntare al **nuovo Pixel/Dataset Meta di Proggecta** per la CAPI (non al pixel Ciesse) e verificare l'header segreto. Hashing SHA-256 di `em`/`ph`/`fn`/`ln` resta in n8n.

### 6.4 Comportamento client del `BookingForm`
- 3 step con barra di avanzamento ("1 di 3"). Transizione tra step con `AnimatePresence` (slide 16px + fade, 200 ms).
- Lo step 1 avanza automaticamente al tocco di una card.
- `eventId = crypto.randomUUID()` generato all'apertura del form, `startedAt` al primo input.
- Invio: `fetch("/api/lead", { method: "POST", keepalive: true, … })`.
- Su successo: push `dataLayer` (§8.3), poi `FormSuccess` nello stesso spazio (nessun cambio di URL), focus spostato sul titolo di conferma.
- Eventi intermedi: `form_start` (primo tocco step 1), `form_step` (`step: 2|3`).

### 6.5 Evoluzione v2 (non nella prima release)
Caricamento piantina: upload diretto dal client su Vercel Blob (token generato da route dedicata, max 10 MB, `image/*` e `application/pdf`), URL del file aggiunto a `custom_data.attachment_url`.

---

## 7. Animazioni (Framer Motion)

```tsx
// src/components/ui/MotionProvider.tsx — avvolge il body nel layout
"use client";
import { LazyMotion, domAnimation, MotionConfig } from "framer-motion";
export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
```

```tsx
// src/components/ui/Reveal.tsx
"use client";
import { m } from "framer-motion";
export function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <m.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </m.div>
  );
}
```

**Regole:**
- **Mai** animare l'H1, il sottotitolo, la CTA o l'immagine dell'hero all'ingresso (`opacity: 0` iniziale ritarda l'LCP e penalizza il punteggio PageSpeed). L'hero appare subito; si animano le sezioni sotto.
- Stagger tra card: `0.08 s`. Durate 0,4–0,7 s. Niente rimbalzi, niente rotazioni.
- Animare solo `opacity` e `transform`.
- Parallax leggero consentito solo sull'immagine della sezione Showroom (desktop), con `useScroll` + `useTransform`, spostamento max 40px.
- `reducedMotion="user"` rispetta l'impostazione di sistema.

---

## 8. Tracciamento

### 8.1 Consent Mode v2 (in `layout.tsx`, **prima** di GTM)

```tsx
<script
  dangerouslySetInnerHTML={{
    __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',wait_for_update:500});
gtag('set','ads_data_redaction',true);gtag('set','url_passthrough',true);`,
  }}
/>
```
Poi `<GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID!} />` e lo script della CMP, che aggiorna il consenso.
**GTM:** valutare un **contenitore nuovo dedicato a Proggecta**, invece di riusare `GTM-MPWSMPF` di Ciesse: separa dati e storico dei due marchi.

### 8.2 Attribuzione (`src/lib/attribution.ts`)
Al primo caricamento di qualsiasi pagina (client): leggere da `location.search` `gclid, gbraid, wbraid, fbclid, utm_*`; se presenti, salvarli in `localStorage` (`pg_attr`, scadenza 90 giorni) insieme a `landing_page`, `referrer`, `first_touch_at`. Se ne arrivano di nuovi, sovrascrivere (ultimo clic). Il form li legge e li invia in `attribution`.

### 8.3 Eventi `dataLayer`

| Evento | Quando | Parametri |
|---|---|---|
| `form_start` | primo tocco nel form | `form_type` |
| `form_step` | passaggio di step | `form_type`, `step` |
| `generate_lead` | invio riuscito | `form_type`, `ambiente`, `event_id`, `user_data: { email, phone_number }` (per le **conversioni avanzate** Google: GTM esegue l'hashing) |
| `custom_lead` | invio riuscito (compatibilità con i trigger esistenti) | `eventId` |
| `whatsapp_click` | clic su link WhatsApp | `placement` (hero, sticky, footer, success…) |
| `phone_click` | clic su `tel:` | `placement` |

In GTM: tag Google Ads Conversion su `generate_lead` (con conversioni avanzate), tag Meta Pixel `Lead` con `eventID = {{event_id}}` per la deduplicazione con la CAPI di n8n, GA4 `generate_lead`.

---

## 9. SEO tecnica

- `metadataBase: new URL("https://www.proggecta.it")`, `title.template: "%s"` (i title nei data file sono già completi), `alternates.canonical` per ogni pagina (senza query string).
- `lang="it"` su `<html>`.
- **JSON-LD** (`src/lib/jsonld.ts`):
  - `FurnitureStore` (sottotipo di LocalBusiness) nel layout: `name, url, telephone, address, geo, openingHoursSpecification` da `siteConfig`, `image`, `priceRange: "€€€"`, `areaServed` da `serviceArea`.
  - `BreadcrumbList` su tutte le pagine interne.
  - `FAQPage` dove c'è l'accordion.
- `sitemap.ts`: pagine statiche + `brand/*` + `ambienti/*` (escludendo `noindex` e `archived`).
- `robots.ts`: `allow: "/"`, `disallow: "/api/"`, link alla sitemap.
- Immagini: `alt` sempre valorizzato dai data file. Nessun testo dentro le immagini.
- **Divieto di contenuto duplicato:** nessun testo copiato da `ciessehome.it`.

---

## 10. Redirect 301

### 10.1 Prerequisiti
1. Aggiungere `proggecta.it`, `www.proggecta.it`, `proggecta.com`, `ciessehome.it`, `www.ciessehome.it`, `ciessecucine.com` al progetto Vercel.
2. Dominio principale: `www.proggecta.it`. Gli altri reindirizzano verso di esso.
3. Spostare i DNS dei domini Ciesse verso Vercel **mantenendo invariati i record MX** se su quei domini c'è posta attiva.
4. **Prima dello switch:** esportare tutti gli URL del vecchio sito (sitemap XML + Google Search Console → Pagine + crawl con Screaming Frog) e compilare la tabella di mappatura pagina per pagina.
5. Attivazione subordinata al via libera amministrativo previsto dalla roadmap di transizione.

### 10.2 `next.config.ts` (struttura)

```ts
import type { NextConfig } from "next";

const NEW = "https://www.proggecta.it";
const CIESSE_HOST = "(?:www\\.)?ciessehome\\.it";

// Mappatura specifica (da completare con l'export degli URL storici)
const ciesseMap: Array<[string, string]> = [
  ["/", "/brand/ciesse"],
  ["/contatti", "/showroom-contatti"],
  ["/chi-siamo", "/brand/ciesse"],
  ["/cucine", "/ambienti/cucine-su-misura"],
  // ["/vecchio-url", "/nuovo-url"], …
];

const nextConfig: NextConfig = {
  images: { formats: ["image/avif", "image/webp"] },
  async redirects() {
    return [
      ...ciesseMap.map(([source, dest]) => ({
        source,
        has: [{ type: "host" as const, value: CIESSE_HOST }],
        destination: `${NEW}${dest}`,
        statusCode: 301 as const,
      })),
      // Catch-all Ciesse: tutto il resto → pagina ponte
      {
        source: "/:path*",
        has: [{ type: "host" as const, value: CIESSE_HOST }],
        destination: `${NEW}/brand/ciesse`,
        statusCode: 301 as const,
      },
      // Dominio legacy: direttamente su Proggecta, senza catene di redirect
      {
        source: "/:path*",
        has: [{ type: "host" as const, value: "(?:www\\.)?ciessecucine\\.com" }],
        destination: `${NEW}/brand/ciesse`,
        statusCode: 301 as const,
      },
      {
        source: "/:path*",
        has: [{ type: "host" as const, value: "(?:www\\.)?proggecta\\.com" }],
        destination: `${NEW}/:path*`,
        statusCode: 301 as const,
      },
      // Alias interni
      { source: "/qualita-materiali", destination: "/qualita-costruttiva", statusCode: 301 as const },
    ];
  },
};

export default nextConfig;
```

Le regole specifiche devono stare **prima** del catch-all. Dopo il go-live: verificare i redirect con `curl -I`, inviare la nuova sitemap a Search Console e usare lo strumento "Cambio di indirizzo" da `ciessehome.it` verso `proggecta.it`. Lasciare i redirect attivi **almeno 12 mesi**.

---

## 11. Budget di performance e accessibilità

| Metrica (mobile, 4G) | Obiettivo |
|---|---|
| Lighthouse Performance | ≥ 95 |
| LCP | < 2,0 s |
| CLS | < 0,05 |
| INP | < 200 ms |
| JS First Load (Home) | < 130 KB gzip |
| Peso hero (poster) | < 180 KB AVIF |

- `next/image` con `sizes` corretti ovunque; `priority` **solo** sull'immagine hero.
- Video hero: `muted playsInline loop autoPlay preload="none"`, montato dopo il caricamento della pagina, solo desktop; su mobile solo il poster.
- Font: due famiglie, `display: swap`, pesi limitati (Fraunces 400/600, Inter 400/500/600).
- GTM e CMP non bloccanti.
- Accessibilità: contrasto AA, focus visibile su tutti gli elementi interattivi, `label` reali sui campi, errori collegati con `aria-describedby`, target touch ≥ 44px, ordine dei titoli corretto (un solo H1 per pagina), link "Salta al contenuto".

---

## 12. Variabili d'ambiente

```
NEXT_PUBLIC_SITE_URL=https://www.proggecta.it
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
N8N_LEAD_WEBHOOK_URL=https://n8n.creativiastudio.com/webhook/…      # solo server
N8N_WEBHOOK_SECRET=…                                                # solo server, impostare header auth anche in n8n
```

Nessun segreto nel codice o nei data file. Pixel Meta e conversioni Google Ads vivono in GTM.

---

## 13. Criteri di accettazione (verifica JEV)

- [ ] `next build` senza errori né warning TypeScript; tutte le pagine risultano statiche (`○` / `●`) tranne `/api/lead`
- [ ] Nessuna stringa di copy nei componenti: tutto arriva da `src/data`
- [ ] Le FAQ con `draft: true` non compaiono
- [ ] Nessun segnaposto `[DA COMPILARE]` visibile in produzione (aggiungere un controllo in build che fallisce se `siteConfig` ne contiene)
- [ ] Form: validazione client e server, honeypot, schermata di successo, evento `generate_lead` in GTM Preview, payload corretto ricevuto in n8n con `gclid` di test
- [ ] Barra fissa mobile funzionante e nascosta sopra il form
- [ ] Lighthouse mobile entro i budget del §11 su Home, una pagina brand e una landing ambiente
- [ ] Redirect testati su ambiente di anteprima con header `Host` simulato
- [ ] Navigazione completa da tastiera, form compreso

---

## 14. Prompt operativo per DeepSeek v4.1 Flash

Copiare integralmente il blocco seguente, allegando come contesto: questo file, `docs/A_strategia-conversione-copy.md` e tutti i file di `blueprint/src/data/`.

```text
RUOLO
Sei un senior frontend engineer. Devi generare il codice completo del sito "Proggecta"
(Next.js 15 App Router, TypeScript strict, Tailwind CSS v4, Framer Motion) seguendo
ESATTAMENTE il documento "PARTE C — Blueprint tecnico" allegato.

INPUT
1. PARTE C — Blueprint tecnico (architettura, componenti, regole): è vincolante.
2. PARTE A — Strategia e copy: usala SOLO per creare src/data/pagesData.ts trascrivendo
   il copy delle pagine (Home §2, Progettazione §3, Qualità §4, Contract §6, Showroom §7)
   parola per parola, senza riscriverlo né "migliorarlo".
3. File in src/data/ già pronti (types.ts, siteConfig.ts, brandData.ts, featuresData.ts,
   processStepsData.ts, faqData.ts, ambientiData.ts): NON modificarli, importali.

VINCOLI ASSOLUTI
- Nessun testo hard-coded nei componenti: il copy arriva sempre da src/data.
- Non inventare contenuti, claim, numeri, recensioni, indirizzi o nomi di collezioni.
- Server component di default; "use client" solo per i componenti indicati nel §5.
- Nessuna dipendenza oltre quelle elencate nel §1.
- Non animare l'hero all'ingresso (§7). Usa LazyMotion + componenti m.*.
- params nelle pagine dinamiche è una Promise (Next 15): usa await.
- Le FAQ con draft: true non vanno mai renderizzate (usa getFaqs).
- Nessun segreto nel codice: solo process.env come da §12.

ORDINE DI GENERAZIONE (un file per blocco di codice, con il percorso come intestazione)
1.  package.json, next.config.ts (§10.2), tsconfig.json (alias "@/*" → "src/*"), postcss.config.mjs
2.  src/app/globals.css (§4.1)
3.  src/lib/*: cn.ts, leadSchema.ts, tracking.ts, attribution.ts, openingDays.ts, jsonld.ts
4.  src/data/pagesData.ts (dalla PARTE A)
5.  src/components/ui/*
6.  src/components/layout/*
7.  src/components/sections/*
8.  src/components/forms/*
9.  src/app/layout.tsx (font, consent default, GTM, MotionProvider, JSON-LD, Header, Footer, MobileStickyBar)
10. src/app/page.tsx (ordine sezioni: PARTE A §2.1 → §2.13)
11. src/app/ambienti/[slug]/page.tsx (PARTE A §8)
12. src/app/brand/[slug]/page.tsx (PARTE A §5)
13. src/app/progettazione-sartoriale, qualita-costruttiva, contract, showroom-contatti
14. src/app/api/lead/route.ts (§6.2)
15. src/app/sitemap.ts, robots.ts, not-found.tsx, privacy-policy, cookie-policy (pagine vuote con titolo e segnaposto)

QUALITÀ
- Mobile first. Verifica mentalmente ogni sezione a 375px di larghezza.
- Accessibilità come da §11.
- Alla fine elenca: file generati, eventuali punti in cui hai dovuto fare un'assunzione,
  e i comandi per avviare il progetto (npm install, npm run dev).
```

### 14.1 Istruzioni per JEV (revisione dell'output)
1. Generare a blocchi (ordine del §14): non chiedere tutto in un'unica risposta, per evitare file troncati.
2. Dopo ogni blocco: `npx tsc --noEmit`. Correggere prima di proseguire.
3. Controllare in particolare: `BookingForm` (step, validazione, evento), `api/lead` (honeypot, timeout, nessun URL esposto), `next.config.ts` (ordine dei redirect), hero (nessuna animazione d'ingresso, `priority`).
4. Lighthouse mobile su anteprima Vercel prima di collegare il dominio.
