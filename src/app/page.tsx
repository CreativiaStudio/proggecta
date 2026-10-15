import { homeCopy } from "@/data/pagesData";
import { brandData } from "@/data/brandData";
import { processStepsData } from "@/data/processStepsData";
import { getFaqs, homeFaqIds } from "@/data/faqData";
import { Hero } from "@/components/sections/Hero";
import { LogoStrip } from "@/components/sections/LogoStrip";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SolutionsGallery } from "@/components/sections/SolutionsGallery";
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

  // Sequenza di 4 ambienti di design per la Hero cinematografica
  const heroImages = [
    {
      src: "/media/hero/hero-1.jpg",
      alt: "Cucina sartoriale con isola in marmo scuro cannettato",
      width: 2560,
      height: 1440,
    },
    {
      src: "/media/hero/hero-2.jpg",
      alt: "Living open space con cucina sartoriale e tavolo di design",
      width: 2560,
      height: 1440,
    },
    {
      src: "/media/hero/hero-3.jpg",
      alt: "Prospettiva living contemporaneo su cucina e terrazzo panoramico",
      width: 2560,
      height: 1440,
    },
    {
      src: "/media/hero/hero-4.jpg",
      alt: "Cucina sartoriale con cantina vini a vista e isola scultorea",
      width: 2560,
      height: 1440,
    },
  ];

  return (
    <>
      {/* 2.1 Hero Section ad alto impatto con slideshow cinematografico */}
      <Hero
        eyebrow={homeCopy.hero.eyebrow}
        headline={homeCopy.hero.headline}
        subheadline={homeCopy.hero.subheadline}
        image={heroImages[0]}
        images={heroImages}
        chips={homeCopy.hero.chips}
      />

      {/* 2.2 Striscia Marchi */}
      <div id="marchi" className="scroll-mt-20">
        <LogoStrip brands={brandData} label={homeCopy.brandsStrip.label} />
      </div>

      {/* 2.3 Il Problema del Mobile Standard */}
      <ProblemSection
        eyebrow={homeCopy.problem.eyebrow}
        title={homeCopy.problem.title}
        cards={homeCopy.problem.cards}
        bridge={homeCopy.problem.bridge}
      />

      {/* 2.4 Galleria fotografica delle soluzioni d'arredo */}
      <SolutionsGallery />

      {/* 2.5 Il Metodo Sartoriale in 4 Step */}
      <ProcessSteps steps={processStepsData} variant="compact" />

      {/* 2.6 Qualità Costruttiva: Multistrato vs Truciolare */}
      <QualityComparison />

      {/* 2.7 Showroom Experience */}
      <ShowroomExperience
        eyebrow={homeCopy.showroom.eyebrow}
        title={homeCopy.showroom.title}
        body={homeCopy.showroom.body}
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
