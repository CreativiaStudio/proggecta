import Link from "next/link";
import Image from "next/image";
import { getBrand } from "@/data/brandData";
import { Container } from "@/components/ui/Container";
import { ArrowRight } from "lucide-react";

interface CrossBrandsProps {
  brandSlugs: string[];
}

export function CrossBrands({ brandSlugs }: CrossBrandsProps) {
  const brands = brandSlugs.map((slug) => getBrand(slug)).filter(Boolean);

  if (brands.length === 0) return null;

  return (
    <section className="py-16 sm:py-24 bg-[#efe8dd]/40 border-b border-[#d9cfc1]/80">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6f7a64] mb-2">
            Armonia di stile
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl font-normal text-[#1f1b16]">
            Completa il tuo progetto d'arredo
          </h2>
          <p className="text-sm text-[#4a443c] mt-2">
            Combina questo comparto con gli altri marchi selezionati da Proggecta per una casa coordinata in ogni dettaglio.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands.map((b: any) => (
            <Link
              key={b.slug}
              href={`/brand/${b.slug}`}
              className="group bg-white rounded-3xl overflow-hidden border border-[#d9cfc1] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] w-full bg-[#faf7f2]">
                <Image
                  src={b.hero.image.src}
                  alt={b.hero.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#6f7a64] mb-1 block">
                    {b.category}
                  </span>
                  <h3 className="font-serif text-xl font-medium text-[#1f1b16] group-hover:text-[#8a5a32] transition-colors mb-2">
                    {b.name}
                  </h3>
                  <p className="text-xs text-[#4a443c] leading-relaxed line-clamp-2">
                    {b.cardClaim}
                  </p>
                </div>

                <div className="inline-flex items-center gap-1 text-xs font-semibold text-[#8a5a32] pt-4 mt-4 border-t border-[#efe8dd]">
                  <span>Vedi gamma</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
