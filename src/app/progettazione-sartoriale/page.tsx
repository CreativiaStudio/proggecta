import type { Metadata } from "next";
import { progettazioneCopy } from "@/data/pagesData";
import { processStepsData } from "@/data/processStepsData";
import { brandData } from "@/data/brandData";
import { PageHero } from "@/components/sections/PageHero";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ConstraintGrid } from "@/components/sections/ConstraintGrid";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { LogoStrip } from "@/components/sections/LogoStrip";
import { BookingForm } from "@/components/forms/BookingForm";
import { FinalCta } from "@/components/sections/FinalCta";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Check, X, Sparkles, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: progettazioneCopy.seo.title,
  description: progettazioneCopy.seo.description,
};

export default function ProgettazioneSartorialePage() {
  const { comparison, render3d, singleDirector, bringAndGet } = progettazioneCopy;

  return (
    <>
      <Breadcrumbs items={[{ label: "Progettazione Sartoriale" }]} />

      <PageHero
        eyebrow={progettazioneCopy.hero.eyebrow}
        headline={progettazioneCopy.hero.headline}
        subheadline={progettazioneCopy.hero.subheadline}
        cta={progettazioneCopy.hero.cta}
        secondaryCta={{ label: "Vedi il Metodo", href: "#metodo" }}
      />

      {/* Sezione 1: Su misura vero vs finto */}
      <section className="py-20 sm:py-28 bg-[#faf7f2] border-b border-[#efe8dd]">
        <Container>
          <SectionHeading
            eyebrow="Chiarezza prima di tutto"
            title={comparison.title}
            subtitle={comparison.body}
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Standard */}
            <div className="bg-white rounded-3xl p-8 border border-[#d9cfc1]/80 shadow-xs">
              <div className="inline-block px-3 py-1 rounded-full bg-[#efe8dd] text-[#6f7a64] text-xs font-bold uppercase tracking-wider mb-4">
                Composizione da catalogo
              </div>
              <ul className="space-y-3">
                {comparison.standardPoints.map((pt, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#4a443c]">
                    <X className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Proggecta */}
            <div className="bg-white rounded-3xl p-8 border-2 border-[#8a5a32] shadow-md relative overflow-hidden">
              <div className="inline-block px-3 py-1 rounded-full bg-[#8a5a32] text-white text-xs font-bold uppercase tracking-wider mb-4">
                Progetto Sartoriale Proggecta
              </div>
              <ul className="space-y-3">
                {comparison.proggectaPoints.map((pt, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#1f1b16] font-medium">
                    <Check className="w-4 h-4 text-[#8a5a32] shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Sezione 2: Vincoli architettonici risolti */}
      <ConstraintGrid />

      {/* Sezione 3: Il Metodo a Timeline */}
      <div id="metodo">
        <ProcessSteps
          steps={processStepsData}
          variant="timeline"
          eyebrow="Il percorso passo dopo passo"
          title="Quattro passaggi, sempre gli stessi, sempre con la stessa persona."
          subtitle="Dal rilievo laser alla consegna chiavi in mano con montatori interni qualificati."
        />
      </div>

      {/* Sezione 4: Render 3D */}
      <section className="py-20 sm:py-28 bg-[#efe8dd]/40 border-b border-[#d9cfc1]/80">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="w-12 h-12 rounded-2xl bg-[#8a5a32]/20 text-[#8a5a32] flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-6 h-6" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1f1b16] font-normal mb-4">
              {render3d.title}
            </h2>
            <p className="text-base sm:text-lg text-[#4a443c] leading-relaxed">
              {render3d.body}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {render3d.bullets.map((b, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-[#d9cfc1]/80 shadow-2xs text-center"
              >
                <CheckCircle2 className="w-6 h-6 text-[#8a5a32] mx-auto mb-2" />
                <p className="text-xs sm:text-sm font-semibold text-[#1f1b16]">
                  {b}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Sezione 5: Un solo regista */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#efe8dd]">
        <Container size="narrow" className="text-center">
          <h2 className="font-serif text-2xl sm:text-3xl text-[#1f1b16] font-normal mb-4">
            {singleDirector.title}
          </h2>
          <p className="text-base text-[#4a443c] leading-relaxed max-w-xl mx-auto mb-8">
            {singleDirector.body}
          </p>
        </Container>
        <LogoStrip brands={brandData} />
      </section>

      {/* Sezione 6: Cosa porti, cosa ricevi */}
      <section className="py-20 bg-[#faf7f2] border-b border-[#efe8dd]">
        <Container size="narrow">
          <SectionHeading
            eyebrow="Preparati all'incontro"
            title={bringAndGet.title}
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-[#d9cfc1]">
              <h3 className="font-serif text-xl text-[#1f1b16] font-medium mb-4">
                Cosa porti tu:
              </h3>
              <ul className="space-y-3">
                {bringAndGet.bring.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-[#4a443c]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8a5a32]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-[#d9cfc1]">
              <h3 className="font-serif text-xl text-[#1f1b16] font-medium mb-4">
                Cosa ricevi alla prima visita:
              </h3>
              <ul className="space-y-3">
                {bringAndGet.get.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-[#1f1b16] font-medium">
                    <Check className="w-4 h-4 text-[#8a5a32] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Form di prenotazione */}
      <section id="prenota" className="py-20 sm:py-28 bg-[#faf7f2] border-b border-[#efe8dd]">
        <Container size="narrow">
          <BookingForm preset="completo" source="progettazione-sartoriale" />
        </Container>
      </section>

      {/* Final CTA */}
      <FinalCta
        title={progettazioneCopy.finalCta.title}
        body={progettazioneCopy.finalCta.body}
        cta={progettazioneCopy.finalCta.cta}
      />
    </>
  );
}
