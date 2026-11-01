import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { PageHero } from "@/components/sections/PageHero";
import { BookingForm } from "@/components/forms/BookingForm";
import { Container } from "@/components/ui/Container";
import {
  Mail,
  MapPin,
  Clock,
  Car,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contatti & Showroom Proggecta | Nocera Inferiore (SA)",
  description:
    "Vieni a trovarci nello showroom Proggecta a Nocera Inferiore (Località Fosso Imperatore – Lotto 14). Oltre 500 mq di esposizione e materioteca d'interni, orari di apertura, parcheggio riservato e form prenotazione consulenza.",
};

export default function ContattiPage() {
  // Coordinate GPS precise del Lotto 14 a Fosso Imperatore (evitano l'aggancio alla vecchia scheda Ciesse Home)
  const lat = siteConfig.address.lat;
  const lng = siteConfig.address.lng;
  const mapsEmbedUrl = `https://maps.google.com/maps?q=${lat},${lng}&hl=it&z=16&output=embed`;
  const mapsLinkUrl = siteConfig.address.googleMapsUrl;

  return (
    <>
      {/* Hero Fotografica Immersiva di Testata */}
      <PageHero
        eyebrow="Showroom Proggecta · Nocera Inferiore (SA)"
        headline="Contatti &amp; Showroom Proggecta"
        subheadline="Oltre 500 mq di esposizione e materioteca nel cuore dell'Agro Nocerino. Tocca con mano le scocche in multistrato, i top e i campionari, o prenota la tua consulenza sartoriale gratuita."
        image={{
          src: "/media/showroom/showroom-12.jpg",
          alt: "Showroom e materioteca d'interni Proggecta a Nocera Inferiore (Fosso Imperatore)",
          width: 1920,
          height: 1080,
        }}
        cta={{ label: "Prenota la visita in showroom", href: "#prenota" }}
        secondaryCta={{ label: "Guarda la mappa", href: "#mappa" }}
      />

      {/* Breadcrumb compatto */}
      <div className="py-3 bg-[#faf7f2] border-b border-[#efe8dd]">
        <Container>
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center flex-wrap gap-2 text-xs text-[#4a443c]">
              <li>
                <Link href="/" className="hover:text-[#8a5a32] transition-colors">
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight className="w-3.5 h-3.5 text-[#d9cfc1]" />
                <span className="text-[#1f1b16] font-medium" aria-current="page">
                  Contatti &amp; Showroom
                </span>
              </li>
            </ol>
          </nav>
        </Container>
      </div>

      {/* Due colonne: Scheda Showroom | Form di contatto e prenotazione */}
      <section
        id="prenota"
        className="scroll-mt-24 py-16 sm:py-24 bg-white border-b border-[#efe8dd]"
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Colonna Sinistra (5 col): Scheda Showroom & Servizi */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#faf7f2] rounded-3xl p-7 sm:p-9 border border-[#d9cfc1]/80 shadow-xs">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a5a32] mb-3">
                  Atelier &amp; Materioteca
                </p>
                <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#1f1b16] mb-6">
                  Vieni a trovarci
                </h2>

                <div className="space-y-6 text-[#4a443c] text-sm sm:text-base leading-relaxed">
                  {/* Indirizzo */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#efe8dd] text-[#8a5a32] flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-[#1f1b16] font-semibold">
                        Showroom &amp; Sede
                      </strong>
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
                    <div className="w-10 h-10 rounded-xl bg-[#efe8dd] text-[#8a5a32] flex items-center justify-center shrink-0 mt-0.5">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <strong className="block text-[#1f1b16] font-semibold">
                        Orari di apertura
                      </strong>
                      <ul className="text-xs sm:text-sm mt-2 space-y-1.5">
                        {siteConfig.openingHours.map((oh) => (
                          <li
                            key={oh.day}
                            className="flex justify-between gap-4 border-b border-[#efe8dd] py-1 last:border-0"
                          >
                            <span>{oh.label}</span>
                            <span className="text-[#1f1b16] font-medium">
                              {oh.slots
                                .map((s) => `${s.open}–${s.close}`)
                                .join(" / ")}
                            </span>
                          </li>
                        ))}
                        <li className="flex justify-between gap-4 py-1 text-[#6f7a64]">
                          <span>Domenica</span>
                          <span className="font-medium">Chiuso</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Parcheggio */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#efe8dd] text-[#8a5a32] flex items-center justify-center shrink-0 mt-0.5">
                      <Car className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-[#1f1b16] font-semibold">
                        Parcheggio clienti
                      </strong>
                      <span className="text-sm">
                        {siteConfig.showroom.parking}.
                      </span>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#efe8dd] text-[#8a5a32] flex items-center justify-center shrink-0 mt-0.5">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="block text-[#1f1b16] font-semibold">
                        Email diretta
                      </strong>
                      <a
                        href={`mailto:${siteConfig.contacts.email}`}
                        className="text-[#8a5a32] hover:underline font-medium text-sm break-all"
                      >
                        {siteConfig.contacts.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#d9cfc1]/80">
                  <a
                    href="#mappa"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8a5a32] hover:text-[#6f4626] transition-colors"
                  >
                    <span>Visualizza mappa e indicazioni stradali</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Riprova e garanzie atelier */}
              <div className="bg-[#efe8dd]/40 rounded-3xl p-6 border border-[#d9cfc1]/60 space-y-3 text-xs sm:text-sm text-[#4a443c]">
                <div className="flex items-center gap-2.5 font-medium text-[#1f1b16]">
                  <Sparkles className="w-4 h-4 text-[#8a5a32]" />
                  <span>Consulenza &amp; Render 3D fotorealistico gratuiti</span>
                </div>
                <div className="flex items-center gap-2.5 font-medium text-[#1f1b16]">
                  <ShieldCheck className="w-4 h-4 text-[#8a5a32]" />
                  <span>Rilievo laser al millimetro prima della produzione</span>
                </div>
              </div>
            </div>

            {/* Colonna Destra (7 col): Form di contatto */}
            <div className="lg:col-span-7">
              <div className="mb-7">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a5a32] mb-2">
                  Prenota la tua sessione dedicata
                </p>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#1f1b16] mb-3">
                  Scrivici o fissa la tua visita in showroom
                </h2>
                <p className="text-base text-[#4a443c] leading-relaxed font-light">
                  Scegli il giorno e la fascia oraria preferita: un interior designer del team Proggecta ti dedicherà il tempo necessario per esplorare materiali, campionari e soluzioni su misura.
                </p>
              </div>

              <BookingForm preset="completo" source="contatti" />
            </div>
          </div>
        </Container>
      </section>

      {/* Sezione Mappa Full-Width a tutta larghezza */}
      <section
        id="mappa"
        className="scroll-mt-20 py-16 sm:py-20 bg-[#faf7f2] border-b border-[#efe8dd]"
      >
        <Container className="mb-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#8a5a32] mb-2">
                Come Raggiungerci
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#1f1b16] font-normal tracking-tight">
                Mappa dello Showroom &amp; Indicazioni Stradali
              </h2>
            </div>
            <a
              href={mapsLinkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1f1b16] text-white hover:bg-[#8a5a32] text-xs font-semibold tracking-wider transition-colors shadow-xs shrink-0 self-start md:self-auto"
            >
              <MapPin className="w-4 h-4 text-[#c9a06a]" />
              <span>Calcola percorso su Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 text-white/70" />
            </a>
          </div>
        </Container>

        {/* Iframe Mappa 100% Full-Width */}
        <div className="w-full h-[460px] sm:h-[540px] relative border-y border-[#d9cfc1] bg-[#efe8dd]">
          <iframe
            title="Mappa interattiva Google Maps dello Showroom Proggecta a Nocera Inferiore"
            src={mapsEmbedUrl}
            className="w-full h-full border-0 block"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        {/* Info di servizio sotto la mappa */}
        <Container className="mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-[#4a443c]">
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-[#efe8dd] shadow-2xs">
              <MapPin className="w-5 h-5 text-[#8a5a32] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-[#1f1b16] font-semibold mb-0.5">
                  Indirizzo esatto
                </strong>
                <span>Località Fosso Imperatore – Lotto 14, 84014 Nocera Inferiore (SA)</span>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-[#efe8dd] shadow-2xs">
              <Car className="w-5 h-5 text-[#8a5a32] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-[#1f1b16] font-semibold mb-0.5">
                  Collegamenti Autostradali
                </strong>
                <span>A30 uscita Nocera-Pagani a 2 minuti oppure A3 uscita Nocera Inferiore</span>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-[#efe8dd] shadow-2xs">
              <Clock className="w-5 h-5 text-[#8a5a32] shrink-0 mt-0.5" />
              <div>
                <strong className="block text-[#1f1b16] font-semibold mb-0.5">
                  Parcheggio Gratuito
                </strong>
                <span>Ampio parcheggio privato riservato ai clienti all&apos;interno della struttura</span>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
