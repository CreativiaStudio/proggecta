import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ambientiData, getAmbiente } from "@/data/ambientiData";
import { brandData } from "@/data/brandData";
import { processStepsData } from "@/data/processStepsData";
import { getFaqs } from "@/data/faqData";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHero } from "@/components/sections/PageHero";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { BrandGrid } from "@/components/sections/BrandGrid";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { QualityComparison } from "@/components/sections/QualityComparison";
import { BookingForm } from "@/components/forms/BookingForm";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { FinalCta } from "@/components/sections/FinalCta";
import { Container } from "@/components/ui/Container";

export const dynamicParams = false;

export function generateStaticParams() {
  return ambientiData.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const ambiente = getAmbiente(slug);
  if (!ambiente) return {};

  return {
    title: ambiente.seo.title,
    description: ambiente.seo.description,
    alternates: { canonical: `/ambienti/${ambiente.slug}` },
    openGraph: {
      title: ambiente.seo.title,
      description: ambiente.seo.description,
      images: [ambiente.hero.image.src],
    },
  };
}

export default async function AmbientePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ambiente = getAmbiente(slug);
  if (!ambiente) notFound();

  const faqs = getFaqs(ambiente.faqIds);
  const relevantBrands = brandData.filter((b) =>
    ambiente.brandSlugs.includes(b.slug)
  );

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Ambienti", href: "/#marchi" },
          { label: ambiente.hero.eyebrow.split("·")[0].trim() },
        ]}
      />

      <PageHero
        eyebrow={ambiente.hero.eyebrow}
        headline={ambiente.hero.headline}
        subheadline={ambiente.hero.subheadline}
        image={ambiente.hero.image}
        cta={{ label: "Prenota la consulenza gratuita", href: "#prenota" }}
        secondaryCta={{ label: "Scopri il Metodo", href: "#metodo" }}
      />

      {/* Sezione Problem specifica per questo ambiente */}
      <ProblemSection
        eyebrow="Cosa risolviamo"
        title="I vincoli più comuni di questo ambiente, risolti prima della produzione"
        cards={ambiente.painPoints}
        bridge="Con il nostro rilievo laser e la progettazione sartoriale, non sprechi un solo centimetro."
      />

      {/* Marchi specifici per questo ambiente */}
      <BrandGrid
        brands={relevantBrands}
        eyebrow="I produttori selezionati"
        title="I marchi italiani d'eccellenza per questo ambiente"
        subtitle="Un unico progetto armonioso coordinato dal tuo interior designer dedicato."
      />

      {/* Metodo 4 step */}
      <div id="metodo">
        <ProcessSteps steps={processStepsData} variant="compact" />
      </div>

      {/* Qualità costruttiva */}
      <QualityComparison />

      {/* Form di prenotazione showroom */}
      <section
        id="prenota"
        className="py-20 sm:py-28 bg-[#faf7f2] border-b border-[#efe8dd]"
      >
        <Container size="narrow">
          <BookingForm
            preset={ambiente.ambiente}
            source={`ambiente-${ambiente.slug}`}
          />
        </Container>
      </section>

      {/* FAQ per questo ambiente */}
      {faqs.length > 0 && (
        <FaqAccordion
          items={faqs}
          title="Domande frequenti per questo ambiente"
        />
      )}

      {/* Final CTA */}
      <FinalCta />
    </>
  );
}
