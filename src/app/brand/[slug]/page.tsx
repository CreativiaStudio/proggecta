import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { brandData, getBrand } from "@/data/brandData";
import { processStepsData } from "@/data/processStepsData";
import { getFaqs } from "@/data/faqData";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PageHero } from "@/components/sections/PageHero";
import { TransitionNotice } from "@/components/sections/TransitionNotice";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { CrossBrands } from "@/components/sections/CrossBrands";
import { BookingForm } from "@/components/forms/BookingForm";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { Container } from "@/components/ui/Container";
import { SmartImage } from "@/components/ui/SmartImage";
import { Check, Sparkles } from "lucide-react";

export const dynamicParams = false;

export function generateStaticParams() {
  return brandData
    .filter((b) => b.status !== "archived")
    .map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const brand = getBrand(slug);
  if (!brand) return {};

  return {
    title: brand.seo.title,
    description: brand.seo.description,
    alternates: { canonical: `/brand/${brand.slug}` },
    robots: brand.seo.noindex ? { index: false } : undefined,
    openGraph: {
      title: brand.seo.title,
      description: brand.seo.description,
      images: [brand.hero.image.src],
    },
  };
}

export default async function BrandPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const brand = getBrand(slug);
  if (!brand) notFound();

  const brandFaqs = getFaqs(brand.faqIds);

  return (
    <>
      <Breadcrumbs
        items={[{ label: "Marchi", href: "/#marchi" }, { label: brand.name }]}
      />

      <PageHero
        eyebrow={brand.hero.eyebrow}
        headline={brand.hero.headline}
        subheadline={brand.hero.subheadline}
        image={brand.hero.image}
        cta={{ label: brand.ctaLabel, href: "#prenota" }}
      />

      {/* Box Transizione (solo Ciesse) */}
      {brand.transitionNotice && (
        <TransitionNotice
          title={brand.transitionNotice.title}
          body={brand.transitionNotice.body}
        />
      )}

      {/* Intro e Highlights */}
      <section className="py-16 sm:py-24 bg-[#faf7f2] border-b border-[#efe8dd]">
        <Container>
          <div className="max-w-3xl mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#1f1b16] font-normal leading-tight mb-4">
              {brand.name}: eccellenza per {brand.category.toLowerCase()}
            </h2>
            <p className="text-base sm:text-lg text-[#4a443c] leading-relaxed">
              {brand.intro}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {brand.highlights.map((h, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full border border-[#d9cfc1] text-xs sm:text-sm font-medium text-[#1f1b16] shadow-2xs"
              >
                <Check className="w-4 h-4 text-[#8a5a32]" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Perché questo marchio con Proggecta (Why Proggecta) */}
      <section className="py-16 sm:py-20 bg-[#efe8dd]/60 border-b border-[#d9cfc1]/80">
        <Container size="narrow">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#d9cfc1] shadow-xs">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#6f7a64] mb-3">
              <Sparkles className="w-4 h-4 text-[#8a5a32]" />
              <span>Il valore aggiunto di Proggecta</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#1f1b16] font-normal mb-4">
              {brand.whyProggecta.title}
            </h3>
            <p className="text-base text-[#4a443c] leading-relaxed">
              {brand.whyProggecta.body}
            </p>
          </div>
        </Container>
      </section>

      {/* Sezioni di contenuto dettagliate */}
      {brand.sections.map((sec, idx) => (
        <section
          key={idx}
          className="py-16 sm:py-24 bg-[#faf7f2] border-b border-[#efe8dd]"
        >
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#1f1b16] font-normal mb-4">
                  {sec.title}
                </h3>
                <p className="text-base text-[#4a443c] leading-relaxed mb-6">
                  {sec.body}
                </p>
                {sec.bullets && (
                  <ul className="space-y-2.5">
                    {sec.bullets.map((b, bIdx) => (
                      <li
                        key={bIdx}
                        className="flex items-start gap-2.5 text-sm text-[#1f1b16]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8a5a32] mt-2 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {sec.image && (
                <div
                  className={`rounded-3xl overflow-hidden border border-[#d9cfc1] shadow-md ${
                    idx % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <SmartImage image={sec.image} />
                </div>
              )}
            </div>
          </Container>
        </section>
      ))}

      {/* Metodo 4 Step */}
      <ProcessSteps
        steps={processStepsData}
        variant="compact"
        title={`Come inseriamo ${brand.name} nella tua casa`}
      />

      {/* Completa il progetto (Cross Brands) */}
      {brand.crossBrands.length > 0 && (
        <CrossBrands brandSlugs={brand.crossBrands} />
      )}

      {/* Form di prenotazione */}
      <section
        id="prenota"
        className="py-20 sm:py-28 bg-[#faf7f2] border-b border-[#efe8dd]"
      >
        <Container size="narrow">
          <BookingForm preset={brand.formPreset} source={`brand-${brand.slug}`} />
        </Container>
      </section>

      {/* FAQ Brand */}
      {brandFaqs.length > 0 && (
        <FaqAccordion
          items={brandFaqs}
          title={`Domande frequenti su ${brand.name}`}
        />
      )}
    </>
  );
}
