import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Cookie Policy | Proggecta",
  robots: { index: false, follow: true },
};

export default function CookiePolicyPage() {
  return (
    <div className="py-32 sm:py-40 bg-[#faf7f2]">
      <Container size="narrow">
        <h1 className="font-serif text-3xl sm:text-4xl text-[#1f1b16] mb-8 font-normal">
          Informativa sui Cookie
        </h1>
        <div className="prose prose-stone text-sm text-[#4a443c] leading-relaxed space-y-6">
          <p>
            Questo sito web utilizza cookie e tecnologie affini per garantire il corretto funzionamento delle procedure e migliorare l'esperienza di uso delle applicazioni online.
          </p>
          <h2 className="font-serif text-xl text-[#1f1b16] font-medium pt-4">
            1. Cosa sono i cookie?
          </h2>
          <p>
            I cookie sono brevi frammenti di testo (lettere e/o numeri) che permettono al server web di memorizzare sul client (il browser) informazioni da riutilizzare nel corso della medesima visita al sito (cookie di sessione) o in seguito, anche a distanza di giorni (cookie persistenti).
          </p>
          <h2 className="font-serif text-xl text-[#1f1b16] font-medium pt-4">
            2. Tipologie di cookie utilizzate
          </h2>
          <p>
            Il sito applica il protocollo Google Consent Mode v2: i cookie di analisi e di profilazione pubblicitaria (Google Ads, Meta Pixel) rimangono disattivati di default finché l'utente non rilascia esplicito consenso tramite l'apposito banner (CMP).
          </p>
          <h2 className="font-serif text-xl text-[#1f1b16] font-medium pt-4">
            3. Gestione e revoca del consenso
          </h2>
          <p>
            L'utente può in qualsiasi momento modificare o revocare le proprie preferenze relative ai cookie tramite le impostazioni del proprio browser o riaprendo il banner delle preferenze.
          </p>
        </div>
      </Container>
    </div>
  );
}
