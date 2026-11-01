import type { Metadata } from "next";
import Link from "next/link";
import { qualitaCopy } from "@/data/pagesData";
import { featuresData } from "@/data/featuresData";
import { PageHero } from "@/components/sections/PageHero";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { QualityComparison } from "@/components/sections/QualityComparison";
import { BuyerChecklist } from "@/components/sections/BuyerChecklist";
import { BookingForm } from "@/components/forms/BookingForm";
import { FinalCta } from "@/components/sections/FinalCta";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { Trees, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: qualitaCopy.seo.title,
  description: qualitaCopy.seo.description,
};

export default function QualitaCostruttivaPage() {
  const qualityFeatures = featuresData.filter((f) =>
    f.showOn.includes("qualita-costruttiva")
  );

  return (
    <>
      <Breadcrumbs items={[{ label: "Qualità Costruttiva" }]} />

      <PageHero
        eyebrow={qualitaCopy.hero.eyebrow}
        headline={qualitaCopy.hero.headline}
        subheadline={qualitaCopy.hero.subheadline}
        cta={qualitaCopy.hero.cta}
        image={{
          src: "/media/qualita/hero-anta-legno-essenza.jpg",
          alt: "Dettaglio ante in legno ed essenze sartoriali Ciesse Cucine",
          width: 1920,
          height: 1080,
        }}
      />

      {/* Sezione 1: Manifesto della Qualità */}
      <section className="py-20 sm:py-28 bg-[#efe8dd]/60 border-b border-[#d9cfc1]/80">
        <Container size="narrow">
          <div className="bg-white rounded-3xl p-8 sm:p-14 border border-[#d9cfc1] shadow-sm text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6f7a64] mb-6">
              I nostri principi irrinunciabili
            </p>
            <div className="space-y-6">
              {qualitaCopy.manifesto.map((line, idx) => (
                <p
                  key={idx}
                  className="font-serif text-xl sm:text-2xl text-[#1f1b16] font-normal leading-relaxed"
                >
                  "{line}"
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Sezione 2: Il confronto Multistrato vs Truciolare */}
      <QualityComparison />

      {/* Sezione 3: Le Caratteristiche Tecniche nel Dettaglio */}
      <section className="py-20 sm:py-32 bg-[#faf7f2] border-b border-[#efe8dd]">
        <Container>
          <SectionHeading
            eyebrow="Ogni elemento conta"
            title="L'ingegneria invisibile che protegge il tuo investimento"
            subtitle="Dalle guide dei cassetti alle emissioni nell'aria: ecco cosa rende i nostri mobili differenti."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {qualityFeatures.map((f, idx) => (
              <Reveal key={f.id} delay={idx * 0.08}>
                <div className="bg-white rounded-3xl p-8 border border-[#d9cfc1]/80 shadow-xs h-full flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#efe8dd] text-[#8a5a32] flex items-center justify-center mb-6">
                      <Icon name={f.icon} className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#6f7a64] block mb-2">
                      {f.kicker}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#1f1b16] font-medium mb-3">
                      {f.title}
                    </h3>
                    <p className="text-sm text-[#4a443c] leading-relaxed mb-6">
                      {f.long}
                    </p>
                  </div>

                  {f.bullets && (
                    <ul className="space-y-2 border-t border-[#efe8dd] pt-4 text-xs text-[#4a443c]">
                      {f.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#8a5a32]" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Sezione 4: Filiera Poziello & Riccardi */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#efe8dd]">
        <Container size="narrow">
          <div className="bg-[#faf7f2] rounded-3xl p-8 sm:p-12 border border-[#d9cfc1] flex flex-col sm:flex-row items-center gap-8">
            <div className="w-16 h-16 rounded-2xl bg-[#efe8dd] text-[#8a5a32] flex items-center justify-center shrink-0">
              <Trees className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-serif text-2xl text-[#1f1b16] font-medium mb-2">
                {qualitaCopy.filiera.title}
              </h3>
              <p className="text-sm sm:text-base text-[#4a443c] leading-relaxed mb-4">
                {qualitaCopy.filiera.body}
              </p>
              <Link
                href="/brand/materiali-pannelli"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#8a5a32] hover:text-[#6f4626] transition-colors"
              >
                <span>Scopri la filiera dei materiali Poziello & Riccardi</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Sezione 5: Le 6 domande da fare a qualunque negozio */}
      <BuyerChecklist />

      {/* Form di prenotazione */}
      <section id="prenota" className="py-20 sm:py-28 bg-[#faf7f2] border-b border-[#efe8dd]">
        <Container size="narrow">
          <BookingForm preset="cucina" source="qualita-costruttiva" />
        </Container>
      </section>

      {/* Final CTA */}
      <FinalCta
        title="Non crederci sulla parola. Vieni a toccare."
        body="I materiali, le scocche in multistrato e i campionari ti aspettano nello showroom di Nocera Inferiore (Località Fosso Imperatore – Lotto 14)."
        cta={{ label: "Prenota la visita in showroom", href: "#prenota" }}
      />
    </>
  );
}
