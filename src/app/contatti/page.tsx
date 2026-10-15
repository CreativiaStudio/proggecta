import type { Metadata } from "next";
import { siteConfig } from "@/data/siteConfig";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { BookingForm } from "@/components/forms/BookingForm";
import { Container } from "@/components/ui/Container";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Car,
  ExternalLink,
  MessageSquare,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contatti & Showroom Proggecta | Nocera Inferiore (SA)",
  description:
    "Vieni a trovarci nello showroom Proggecta a Nocera Inferiore (Località Fosso Imperatore – Lotto 14). Orari di apertura, telefono, WhatsApp, parcheggio privato riservato ai clienti e mappa Google Maps.",
};

export default function ContattiPage() {
  const cleanNumber = siteConfig.contacts.whatsapp.replace(/\D/g, "");
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(
    siteConfig.contacts.whatsappDefaultMessage
  )}`;

  const hasRealPhone =
    siteConfig.contacts.phone && !siteConfig.contacts.phone.startsWith("[");

  // Indirizzo completo usato sia per l'embed della mappa che per il link esterno
  const fullAddress = `${siteConfig.address.street}, ${siteConfig.address.postalCode} ${siteConfig.address.city} (${siteConfig.address.province})`;
  const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    fullAddress
  )}&output=embed`;
  const mapsLinkUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    fullAddress
  )}`;

  return (
    <>
      <Breadcrumbs items={[{ label: "Contatti" }]} />

      {/* Header sobrio di pagina */}
      <section className="pt-12 pb-14 sm:pt-16 sm:pb-20 bg-[#faf7f2] border-b border-[#efe8dd]">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#6f7a64] mb-4">
              Showroom Proggecta · Nocera Inferiore (SA)
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#1f1b16] tracking-tight leading-[1.1] mb-6 [text-wrap:balance]">
              Contatti &amp; Showroom Proggecta
            </h1>
            <p className="text-lg sm:text-xl text-[#4a443c] leading-relaxed font-light [text-wrap:balance]">
              Vieni a toccare con mano materiali e campionari nel nostro
              showroom, oppure scrivici: ti richiamiamo per fissare la tua
              consulenza gratuita con un interior designer dedicato.
            </p>
          </div>
        </Container>
      </section>

      {/* Due colonne: Info & Mappa | Form di contatto */}
      <section
        id="prenota"
        className="scroll-mt-20 py-16 sm:py-24 bg-white border-b border-[#efe8dd]"
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            {/* Colonna Sinistra: Info & Google Maps */}
            <div className="space-y-8">
              <div className="bg-[#faf7f2] rounded-3xl p-7 sm:p-9 border border-[#d9cfc1]/80 shadow-xs">
                <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1f1b16] mb-7">
                  Dove siamo e quando venirci a trovare
                </h2>

                <div className="space-y-6 text-[#4a443c] text-base leading-relaxed">
                  {/* Indirizzo */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#efe8dd] text-[#8a5a32] flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-[#1f1b16]">Indirizzo</strong>
                      <span>
                        {siteConfig.address.street}
                        <br />
                        {siteConfig.address.postalCode} {siteConfig.address.city} (
                        {siteConfig.address.province})
                      </span>
                    </div>
                  </div>

                  {/* Orari */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#efe8dd] text-[#8a5a32] flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <strong className="block text-[#1f1b16]">
                        Orari di apertura
                      </strong>
                      <ul className="text-sm mt-2 space-y-1 max-w-xs">
                        {siteConfig.openingHours.map((oh) => (
                          <li
                            key={oh.day}
                            className="flex justify-between gap-4 border-b border-[#efe8dd] py-1.5 last:border-0"
                          >
                            <span>{oh.label}</span>
                            <span className="text-[#1f1b16] font-medium">
                              {oh.slots.map((s) => `${s.open}–${s.close}`).join(" / ")}
                            </span>
                          </li>
                        ))}
                        <li className="flex justify-between gap-4 py-1.5 text-[#6f7a64]">
                          <span>Domenica</span>
                          <span className="font-medium">Chiuso</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Parcheggio */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#efe8dd] text-[#8a5a32] flex items-center justify-center shrink-0">
                      <Car className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-[#1f1b16]">Parcheggio</strong>
                      <span>{siteConfig.showroom.parking}.</span>
                    </div>
                  </div>
                </div>

                {/* Contatti rapidi */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8 pt-7 border-t border-[#d9cfc1]">
                  <a
                    href={siteConfig.contacts.phoneHref}
                    className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-[#efe8dd] hover:border-[#8a5a32]/60 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#efe8dd] text-[#8a5a32] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-[#6f7a64] uppercase tracking-wider block font-semibold">
                        Telefono
                      </span>
                      <span className="text-sm font-bold text-[#1f1b16]">
                        {hasRealPhone ? siteConfig.contacts.phone : "Chiama lo showroom"}
                      </span>
                    </div>
                  </a>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 rounded-2xl bg-[#128c4a]/5 border border-[#128c4a]/20 hover:border-[#128c4a] transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#128c4a] text-white flex items-center justify-center shrink-0">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-[#128c4a] uppercase tracking-wider block font-semibold">
                        WhatsApp
                      </span>
                      <span className="text-sm font-bold text-[#1f1b16]">
                        Scrivici ora
                      </span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Mappa Google Maps */}
              <div className="rounded-3xl overflow-hidden border border-[#d9cfc1] shadow-xs bg-[#efe8dd]">
                <iframe
                  title="Mappa Google Maps dello showroom Proggecta a Nocera Inferiore"
                  src={mapsEmbedUrl}
                  className="w-full h-[320px] sm:h-[380px] border-0 block"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              <a
                href={mapsLinkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#d9cfc1] text-xs font-semibold text-[#1f1b16] hover:bg-[#efe8dd] transition-colors"
              >
                <MapPin className="w-4 h-4 text-[#8a5a32]" />
                <span>Apri in Google Maps</span>
                <ExternalLink className="w-3 h-3 text-[#6f7a64]" />
              </a>
            </div>

            {/* Colonna Destra: Form di contatto */}
            <div>
              <div className="mb-7">
                <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1f1b16] mb-3">
                  Scrivici o prenota la tua visita
                </h2>
                <p className="text-base text-[#4a443c] leading-relaxed">
                  Compila il form per contattare direttamente la struttura e
                  fissare il tuo appuntamento in showroom. Ti risponde una
                  persona reale del team Proggecta.
                </p>
              </div>

              <BookingForm preset="completo" source="contatti" />

              <p className="text-xs text-[#6f7a64] leading-relaxed mt-5 flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#8a5a32] shrink-0 mt-0.5" />
                <span>
                  Preferisci l&apos;email? Scrivi a{" "}
                  <a
                    href={`mailto:${siteConfig.contacts.email}`}
                    className="font-semibold text-[#8a5a32] hover:text-[#6f4626] transition-colors"
                  >
                    {siteConfig.contacts.email}
                  </a>
                </span>
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
