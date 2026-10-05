import type { Metadata } from "next";
import { contractCopy } from "@/data/pagesData";
import { faqData } from "@/data/faqData";
import { PageHero } from "@/components/sections/PageHero";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ContractForm } from "@/components/forms/ContractForm";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { Check, Calendar, ShieldCheck, Layers, Users } from "lucide-react";

export const metadata: Metadata = {
  title: contractCopy.seo.title,
  description: contractCopy.seo.description,
};

export default function ContractPage() {
  const contractFaqs = faqData.filter((f) => f.category === "contract");

  const b2bSteps = [
    { num: 1, title: "Sopralluogo e Brief", desc: "Analisi degli spazi, esigenze operative, flussi di lavoro e target della struttura." },
    { num: 2, title: "Concept e Preventivo", desc: "Ipotesi distributiva, selezione materiali a catalogo/su misura e quadro economico dettagliato." },
    { num: 3, title: "Campionature e Prototipo", desc: "Validazione fisica di finiture, tessuti e realizzazione della camera tipo per grandi forniture." },
    { num: 4, title: "Produzione e Logistica", desc: "Avanzamento lavori nei tempi concordati, stoccaggio e spedizione coordinata." },
    { num: 5, title: "Posa e Collaudo Finale", desc: "Montaggio con squadre interne specializzate e consegna chiavi in mano entro la data di apertura." },
  ];

  return (
    <>
      <Breadcrumbs items={[{ label: "Divisione Contract" }]} />

      <PageHero
        eyebrow={contractCopy.hero.eyebrow}
        headline={contractCopy.hero.headline}
        subheadline={contractCopy.hero.subheadline}
        cta={contractCopy.hero.cta}
        secondaryCta={contractCopy.hero.secondaryCta}
      />

      {/* Sezione 1: Per chi lavoriamo (6 Settori) */}
      <section className="py-20 sm:py-28 bg-[#faf7f2] border-b border-[#efe8dd]">
        <Container>
          <SectionHeading
            eyebrow="Settori di intervento"
            title="Arredi su misura per ogni modello di accoglienza e business"
            subtitle="Dall'albergo boutique al ristorante d'autore, progettiamo spazi pensati per lavorare e durare."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {contractCopy.sectors.map((sec, idx) => (
              <Reveal key={idx} delay={idx * 0.08}>
                <div className="bg-white rounded-3xl p-8 border border-[#d9cfc1]/80 shadow-xs h-full flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#efe8dd] text-[#8a5a32] flex items-center justify-center mb-6">
                      <Icon name={sec.icon} className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#1f1b16] font-medium mb-3">
                      {sec.title}
                    </h3>
                    <p className="text-sm text-[#4a443c] leading-relaxed">
                      {sec.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Sezione 2: Il contesto territoriale locale */}
      <section className="py-20 sm:py-28 bg-[#efe8dd]/60 border-b border-[#d9cfc1]/80">
        <Container size="narrow" className="text-center">
          <SectionHeading
            eyebrow="Radici sul territorio"
            title={contractCopy.localContext.title}
            subtitle={contractCopy.localContext.body}
            align="center"
          />
        </Container>
      </section>

      {/* Sezione 3: Perché Proggecta Contract */}
      <section className="py-20 sm:py-28 bg-[#faf7f2] border-b border-[#efe8dd]">
        <Container>
          <SectionHeading
            eyebrow="I nostri punti di forza"
            title="Quattro garanzie vincolanti per il tuo investimento"
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {contractCopy.advantages.map((adv, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-[#d9cfc1] shadow-2xs"
              >
                <div className="w-10 h-10 rounded-xl bg-[#efe8dd] text-[#8a5a32] flex items-center justify-center mb-4">
                  <Check className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-xl font-medium text-[#1f1b16] mb-2">
                  {adv.title}
                </h3>
                <p className="text-sm text-[#4a443c] leading-relaxed">
                  {adv.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Sezione 4: Processo B2B in 5 Step */}
      <section className="py-20 sm:py-28 bg-white border-b border-[#efe8dd]">
        <Container>
          <SectionHeading
            eyebrow="Il cronoprogramma"
            title="Come lavoriamo: dal primo sopralluogo all'apertura"
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {b2bSteps.map((s) => (
              <div
                key={s.num}
                className="bg-[#faf7f2] rounded-2xl p-6 border border-[#efe8dd] flex flex-col justify-between"
              >
                <div>
                  <span className="font-serif text-3xl font-bold text-[#8a5a32] block mb-2">
                    0{s.num}
                  </span>
                  <h4 className="font-serif text-base font-semibold text-[#1f1b16] mb-2">
                    {s.title}
                  </h4>
                  <p className="text-xs text-[#4a443c] leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Sezione 5: Collaborazione con Architetti */}
      <section id="architetti" className="py-20 sm:py-28 bg-[#1f1b16] text-[#faf7f2] border-b border-[#4a443c]">
        <Container size="narrow" className="text-center">
          <SectionHeading
            eyebrow="Per gli studi di architettura"
            title={contractCopy.architects.title}
            subtitle={contractCopy.architects.body}
            theme="dark"
            align="center"
          />
        </Container>
      </section>

      {/* Form Contract B2B */}
      <section className="py-20 sm:py-32 bg-[#faf7f2] border-b border-[#efe8dd]">
        <Container size="narrow">
          <ContractForm />
        </Container>
      </section>

      {/* FAQ Contract */}
      <FaqAccordion
        items={contractFaqs}
        eyebrow="FAQ Divisione Contract"
        title="Domande frequenti per aziende e professionisti"
      />
    </>
  );
}
