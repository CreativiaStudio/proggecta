import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { siteConfig } from "@/data/siteConfig";
import { getStoreJsonLd } from "@/lib/jsonld";
import { MotionProvider } from "@/components/ui/MotionProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileStickyBar } from "@/components/layout/MobileStickyBar";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Proggecta | Studio di Progettazione Sartoriale & Arredamento d'Interni",
    template: "%s",
  },
  description:
    "Progettiamo e realizziamo cucine, armadiature, camerette e living su misura a Scafati con i migliori marchi italiani. Showroom di 2.000 mq. Rilievo laser e render 3D.",
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Proggecta | Progettazione Sartoriale d'Interni a Scafati",
    description:
      "La tua casa non è standard. I tuoi mobili nemmeno. Progettiamo spazi su misura con cassa in multistrato e selezione multi-brand.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeJsonLd = getStoreJsonLd();
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang="it" className={`${fraunces.variable} ${inter.variable}`}>
      <head>
        {/* Google Consent Mode v2 Default */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',wait_for_update:500});
gtag('set','ads_data_redaction',true);gtag('set','url_passthrough',true);`,
          }}
        />

        {/* JSON-LD FurnitureStore */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(storeJsonLd) }}
        />
      </head>
      <body className="font-sans bg-[#faf7f2] text-[#1f1b16] antialiased min-h-screen flex flex-col selection:bg-[#8a5a32] selection:text-white">
        {gtmId && <GoogleTagManager gtmId={gtmId} />}

        {/* Script inizializzazione tracciamento attribution client */}
        <Script id="attribution-init" strategy="afterInteractive">
          {`
            try {
              var params = new URLSearchParams(window.location.search);
              var keys = ["gclid", "gbraid", "wbraid", "fbclid", "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
              var data = {};
              var hasNew = false;
              keys.forEach(function(k) {
                var v = params.get(k);
                if (v) { data[k] = v; hasNew = true; }
              });
              var stored = localStorage.getItem("pg_attr");
              var existing = stored ? JSON.parse(stored) : {};
              if (hasNew || !existing.first_touch_at) {
                data.landing_page = window.location.pathname;
                data.referrer = document.referrer || "direct";
                data.first_touch_at = existing.first_touch_at || new Date().toISOString();
                data.timestamp = Date.now();
                var combined = Object.assign({}, existing, data);
                localStorage.setItem("pg_attr", JSON.stringify(combined));
              }
            } catch(e) {}
          `}
        </Script>

        <MotionProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <MobileStickyBar />
        </MotionProvider>
      </body>
    </html>
  );
}
