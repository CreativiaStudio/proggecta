import type { Metadata } from "next";
import { showroomCopy } from "@/data/pagesData";
import { siteConfig } from "@/data/siteConfig";
import { faqData } from "@/data/faqData";
import { PageHero } from "@/components/sections/PageHero";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { BookingForm } from "@/components/forms/BookingForm";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Phone, Mail, MapPin, Clock, MessageSquare, Car, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: showroomCopy.seo.title,
  description: showroomCopy.seo.description,
};

export default function ShowroomContattiPage() {
  const showroomFaqs = faqData.filter((f) => f.category === "showroom");

  const cleanNumber = siteConfig.contacts.whatsapp.replace(/\D/g, "");
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(
    siteConfig.contacts.whatsappDefaultMessage
  )}`;

  return (
    <>
      <Breadcrumbs items={[{ label: "Showroom & Contatti" }]} />

      <PageHero
        eyebrow={showroomCopy.hero.eyebrow}
        headline={showroomCopy.hero.headline}
        subheadline={showroomCopy.hero.subheadline}
        cta={showroomCopy.hero.cta}
        secondaryCta={{ label: "Scrivici su WhatsApp", href: whatsappUrl }}
      />

      {/* Sezione 1: Com'è strutturata una visita */}
      <section className="py-20 sm:py-28 bg-[#faf7f2] border-b border-[#efe8dd]">
        <Container>
          <SectionHeading
            eyebrow="Esperienza su misura"
            title="Come si svolge la tua consulenza in showroom"
            subtitle="Un'ora dedicata esclusivamente a te e alla tua casa, senza fretta e senza attese."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {showroomCopy.timeline.map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-[#d9cfc1]/80 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="w-10 h-10 rounded-xl bg-[#efe8dd] text-[#8a5a32] flex items-center justify-center font-serif text-xl font-bold mb-4">
                    0{item.step}
                  </span>
                  <h3 className="font-serif text-xl text-[#1f1b16] font-medium mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#4a443c] leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Sezione 2: Cosa portare */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#efe8dd]">
        <Container size="narrow">
          <div className="bg-[#efe8dd]/60 rounded-3xl p-8 sm:p-12 border border-[#d9cfc1] text-center">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#1f1b16] font-medium mb-4">
              Cosa portare con te per sfruttare al meglio l'incontro
            </h3>
            <p className="text-sm sm:text-base text-[#4a443c] leading-relaxed mb-8 max-w-xl mx-auto">
              Non serve avere rilievi perfetti: bastano pochi elementi per dare al tuo interior designer le basi per una proposta concreta.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-lg mx-auto">
              {showroomCopy.whatToBring.map((w, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-white p-3.5 rounded-xl border border-[#d9cfc1]">
                  <span className="w-2 h-2 rounded-full bg-[#8a5a32] mt-1.5 shrink-0" />
                  <span className="text-xs sm:text-sm font-medium text-[#1f1b16]">{w}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Sezione 3: Dove siamo, Orari & Contatti Diretti */}
      <section className="py-20 sm:py-28 bg-[#faf7f2] border-b border-[#efe8dd]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Dati Struttura & Orari */}
            <div>
              <h2 className="font-serif text-3xl font-medium text-[#1f1b16] mb-6">
                Vieni a trovarci a Scafati
              </h2>

              <div className="space-y-6 text-[#4a443c] text-base leading-relaxed mb-8">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[#8a5a32] shrink-0 mt-1" />
                  <div>
                    <strong className="block text-[#1f1b16]">Indirizzo:</strong>
                    <span>
                      {siteConfig.address.street} — {siteConfig.address.postalCode} {siteConfig.address.city} ({siteConfig.address.province})
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Car className="w-5 h-5 text-[#8a5a32] shrink-0 mt-1" />
                  <div>
                    <strong className="block text-[#1f1b16]">Parcheggio:</strong>
                    <span>{showroomCopy.location.parking}</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-[#8a5a32] shrink-0 mt-1" />
                  <div>
                    <strong className="block text-[#1f1b16]">Orari di apertura Showroom:</strong>
                    <ul className="text-sm mt-1 space-y-1">
                      {siteConfig.openingHours.map((oh) => (
                        <li key={oh.day} className="flex justify-between w-64 border-b border-[#efe8dd] py-1">
                          <span>{oh.label}:</span>
                          <span>
                            {oh.slots.map((s) => `${s.open}–${s.close}`).join(" / ")}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Bottoni Mappe */}
              <div className="flex flex-wrap gap-4 pt-4 border-t border-[#d9cfc1]">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(`${siteConfig.name} ${siteConfig.address.city}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#d9cfc1] text-xs font-semibold text-[#1f1b16] hover:bg-[#efe8dd] transition-colors"
                >
                  <MapPin className="w-4 h-4 text-[#8a5a32]" />
                  <span>Apri in Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-[#6f7a64]" />
                </a>
              </div>
            </div>

            {/* Contatti Rapidi */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#d9cfc1] shadow-xs flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-2xl font-medium text-[#1f1b16] mb-4">
                  Canali Diretti
                </h3>
                <p className="text-sm text-[#4a443c] leading-relaxed mb-6">
                  Se hai bisogno di informazioni immediate o vuoi anticiparci le misure della tua casa:
                </p>

                <div className="space-y-4">
                  <a
                    href={siteConfig.contacts.phoneHref}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-[#faf7f2] border border-[#efe8dd] hover:border-[#8a5a32]/60 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#efe8dd] text-[#8a5a32] flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-[#6f7a64] uppercase tracking-wider block font-semibold">
                        Telefono Showroom
                      </span>
                      <span className="text-base font-bold text-[#1f1b16]">
                        {siteConfig.contacts.phone}
                      </span>
                    </div>
                  </a>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-[#128c4a]/5 border border-[#128c4a]/20 hover:border-[#128c4a] transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#128c4a] text-white flex items-center justify-center shrink-0">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-[#128c4a] uppercase tracking-wider block font-semibold">
                        WhatsApp Ufficiale
                      </span>
                      <span className="text-base font-bold text-[#1f1b16]">
                        Scrivi al nostro team
                      </span>
                    </div>
                  </a>

                  <a
                    href={`mailto:${siteConfig.contacts.email}`}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-[#faf7f2] border border-[#efe8dd] hover:border-[#8a5a32]/60 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#efe8dd] text-[#8a5a32] flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-[#6f7a64] uppercase tracking-wider block font-semibold">
                        Email
                      </span>
                      <span className="text-base font-bold text-[#1f1b16]">
                        {siteConfig.contacts.email}
                      </span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#efe8dd] text-xs text-[#6f7a64] leading-relaxed">
                {showroomCopy.location.localSeoText}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Form di prenotazione */}
      <section id="prenota" className="py-20 sm:py-28 bg-[#faf7f2] border-b border-[#efe8dd]">
        <Container size="narrow">
          <SectionHeading
            eyebrow="Prenotazione online"
            title="Riserva la tua ora di consulenza in showroom"
            subtitle="Scegli giorno e orario preferito per avere un interior designer dedicato senza attese."
            align="center"
          />
          <BookingForm preset="completo" source="showroom-contatti" />
        </Container>
      </section>

      {/* FAQ Showroom */}
      <FaqAccordion
        items={showroomFaqs}
        eyebrow="Visita allo Showroom"
        title="Tutto quello che c'è da sapere prima di venire a trovarci"
      />
    </>
  );
}
