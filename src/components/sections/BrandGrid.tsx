import Link from "next/link";
import Image from "next/image";
import type { Brand } from "@/data/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowRight } from "lucide-react";

interface BrandGridProps {
  brands: Brand[];
  eyebrow?: string;
  title?: string;
  subtitle?: string;
}

export function BrandGrid({
  brands,
  eyebrow = "I marchi selezionati",
  title = "Nessuna fabbrica è la migliore in tutto. Per questo le abbiamo scelte una per una.",
  subtitle = "Ogni comparto d'arredo richiede maestranze e impianti diversi. Proggecta orchestra il vertice della manifattura italiana in un unico progetto armonioso.",
}: BrandGridProps) {
  const visibleBrands = brands.filter((b) => b.showInGrid);

  return (
    <section id="marchi" className="py-20 sm:py-32 bg-[#efe8dd]/40 border-b border-[#d9cfc1]/60">
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {visibleBrands.map((brand, idx) => (
            <Reveal key={brand.slug} delay={idx * 0.08}>
              <Link
                href={`/brand/${brand.slug}`}
                className="group block bg-white rounded-3xl overflow-hidden border border-[#d9cfc1]/80 shadow-xs hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between"
              >
                {/* Immagine hero del brand */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#faf7f2]">
                  <Image
                    src={brand.hero.image.src}
                    alt={brand.hero.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#6f7a64]">
                    {brand.category}
                  </div>
                </div>

                {/* Testi card */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-2xl text-[#1f1b16] font-medium mb-2 group-hover:text-[#8a5a32] transition-colors">
                      {brand.name}
                    </h3>
                    <p className="text-sm text-[#4a443c] leading-relaxed mb-6">
                      {brand.cardClaim}
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#8a5a32] group-hover:text-[#6f4626] transition-colors pt-4 border-t border-[#efe8dd]">
                    <span>Scopri le soluzioni</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Chiusura sotto griglia */}
        <div className="text-center max-w-xl mx-auto">
          <p className="font-serif text-xl sm:text-2xl text-[#1f1b16] font-normal tracking-tight">
            Un solo progetto. Un solo preventivo. Un solo montaggio.
          </p>
        </div>
      </Container>
    </section>
  );
}
