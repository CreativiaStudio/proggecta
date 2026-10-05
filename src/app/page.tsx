import { homeCopy } from "@/data/pagesData";
import { brandData } from "@/data/brandData";
import { processStepsData } from "@/data/processStepsData";
import { getFaqs, homeFaqIds } from "@/data/faqData";
import { Hero } from "@/components/sections/Hero";
import { LogoStrip } from "@/components/sections/LogoStrip";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { BrandGrid } from "@/components/sections/BrandGrid";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { QualityComparison } from "@/components/sections/QualityComparison";
import { ShowroomExperience } from "@/components/sections/ShowroomExperience";
import { FounderNote } from "@/components/sections/FounderNote";
import { ContractTeaser } from "@/components/sections/ContractTeaser";
import { BookingForm } from "@/components/forms/BookingForm";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { FinalCta } from "@/components/sections/FinalCta";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function HomePage() {
  const homeFaqs = getFaqs(homeFaqIds);

  // Asset immagine Hero (cucina con isola sartoriale di pregio)
  const heroImage = {
    src: "/media/brand/ciesse/hero.jpg",
    alt: "Cucina sartoriale con isola in gres e legno scuro",
    width: 2560,
    height: 1440,
    credit: "© Proggecta Showroom Scafati",
  };

  return (
    <>
      {/* 2.1 Hero Section ad alto impatto */}
      <Hero
        eyebrow={homeCopy.hero.eyebrow}
        headline={homeCopy.hero.headline}
        subheadline={homeCopy.hero.subheadline}
        image={heroImage}
        cta={homeCopy.hero.cta}
        secondaryCta={homeCopy.hero.secondaryCta}
        microcopy={homeCopy.hero.microcopy}
        chips={homeCopy.hero.chips}
      />

      {/* 2.2 Striscia Marchi */}
      <LogoStrip brands={brandData} label={homeCopy.brandsStrip.label} />

      {/* 2.3 Il Problema del Mobile Standard */}
      <ProblemSection
        eyebrow={homeCopy.problem.eyebrow}
        title={homeCopy.problem.title}
        cards={homeCopy.problem.cards}
        bridge={homeCopy.problem.bridge}
      />

      {/* 2.4 Multi-Brand Grid */}
      <BrandGrid brands={brandData} />

      {/* 2.5 Il Metodo Sartoriale in 4 Step */}
      <ProcessSteps steps={processStepsData} variant="compact" />

      {/* 2.6 Qualità Costruttiva: Multistrato vs Truciolare */}
      <QualityComparison />

      {/* 2.7 Showroom Experience */}
      <ShowroomExperience
        eyebrow={homeCopy.showroom.eyebrow}
        title={homeCopy.showroom.title}
        body={homeCopy.showroom.body}
        highlights={homeCopy.showroom.highlights}
        cta={homeCopy.showroom.cta}
      />

      {/* 2.8 Ci Metto la Faccia: Fondatore Alfonso Malafronte */}
      <FounderNote
        name={homeCopy.founder.name}
        role={homeCopy.founder.role}
        quote={homeCopy.founder.quote}
      />

      {/* 2.9 Contract & Hospitality Teaser */}
      <ContractTeaser
        eyebrow={homeCopy.contract.eyebrow}
        title={homeCopy.contract.title}
        body={homeCopy.contract.body}
        cta={homeCopy.contract.cta}
      />

      {/* 2.10 Form di Prenotazione Showroom (Anchor #prenota) */}
      <section
        id="prenota"
        className="py-20 sm:py-32 bg-[#faf7f2] border-b border-[#efe8dd]"
      >
        <Container size="narrow">
          <SectionHeading
            eyebrow={homeCopy.bookingForm.eyebrow}
            title={homeCopy.bookingForm.title}
            subtitle={homeCopy.bookingForm.body}
            align="center"
          />
          <BookingForm preset="cucina" source="home" />
        </Container>
      </section>

      {/* 2.11 FAQ Psicologiche */}
      <FaqAccordion items={homeFaqs} />

      {/* 2.12 CTA Finale */}
      <FinalCta
        title={homeCopy.finalCta.title}
        body={homeCopy.finalCta.body}
        cta={homeCopy.finalCta.cta}
      />
    </>
  );
}
