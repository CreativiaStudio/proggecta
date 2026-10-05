import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Privacy Policy | Proggecta",
  robots: { index: false, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-32 sm:py-40 bg-[#faf7f2]">
      <Container size="narrow">
        <h1 className="font-serif text-3xl sm:text-4xl text-[#1f1b16] mb-8 font-normal">
          Informativa sulla Privacy
        </h1>
        <div className="prose prose-stone text-sm text-[#4a443c] leading-relaxed space-y-6">
          <p>
            Gentile Utente, in questa pagina descriviamo le modalità di gestione dei dati personali raccolti tramite il sito web di {siteConfig.name} ({siteConfig.url}), in conformità al Regolamento UE 2016/679 (GDPR).
          </p>
          <h2 className="font-serif text-xl text-[#1f1b16] font-medium pt-4">
            1. Titolare del Trattamento
          </h2>
          <p>
            Il titolare del trattamento è {siteConfig.legalName}, con sede legale in {siteConfig.address.street}, {siteConfig.address.postalCode} {siteConfig.address.city} ({siteConfig.address.province}), P.IVA: {siteConfig.vatNumber}. Email di contatto: {siteConfig.contacts.email}.
          </p>
          <h2 className="font-serif text-xl text-[#1f1b16] font-medium pt-4">
            2. Tipologia di Dati Raccolti e Finalità
          </h2>
          <p>
            I dati personali raccolti tramite i moduli di prenotazione e richiesta informazioni (nome, cognome, numero di telefono, indirizzo email, note sul progetto) sono trattati esclusivamente per ricontattare l'utente, pianificare la consulenza in showroom e fornire le quotazioni richieste.
          </p>
          <h2 className="font-serif text-xl text-[#1f1b16] font-medium pt-4">
            3. Base Giuridica del Trattamento
          </h2>
          <p>
            Il trattamento si basa sul consenso esplicito dell'interessato espresso mediante la spunta della casella di consenso prima dell'invio del modulo, nonché sull'esecuzione di misure precontrattuali adottate su richiesta dello stesso.
          </p>
          <h2 className="font-serif text-xl text-[#1f1b16] font-medium pt-4">
            4. Diritti dell'Interessato
          </h2>
          <p>
            In ogni momento l'interessato può richiedere l'accesso, la rettifica, la cancellazione o la limitazione del trattamento dei propri dati scrivendo a {siteConfig.contacts.email}.
          </p>
        </div>
      </Container>
    </div>
  );
}
