import Link from "next/link";
import Image from "next/image";
import { getBrand } from "@/data/brandData";
import type { Brand } from "@/data/types";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRight } from "lucide-react";

interface CrossBrandsProps {
  brandSlugs: string[];
}

export function CrossBrands({ brandSlugs }: CrossBrandsProps) {
  const brands = brandSlugs
    .map((slug) => getBrand(slug))
    .filter((b): b is Brand => Boolean(b));

  if (brands.length === 0) return null;

  return (
    <section className="py-20 sm:py-28 bg-[#efe8dd]/50 border-b border-[#d9cfc1]/80">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#6f7a64] mb-3">
              <span className="w-5 h-px bg-[#8a5a32]" />
              <span>Continuità Architettonica</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#1f1b16] tracking-tight leading-[1.12]">
              Completa l&apos;architettura d&apos;interni
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#4a443c] max-w-md leading-relaxed">
            Un unico progetto coordina finiture, essenze e proporzioni tra i
            diversi ambienti della casa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {brands.map((b, idx) => {
            const logos =
              b.logo
                ? [b.logo.src]
                : b.slug === "elettrodomestici"
                  ? ["/media/logos/smeg.svg", "/media/logos/electrolux.svg"]
                  : [];

            return (
              <Reveal key={b.slug} delay={idx * 0.08}>
                <Link
                  href={`/brand/${b.slug}`}
                  className="group relative rounded-3xl overflow-hidden border border-[#d9cfc1] bg-[#1f1b16] shadow-xs hover:shadow-xl transition-all duration-500 flex flex-col justify-end aspect-[4/5] sm:aspect-[16/13] lg:aspect-[4/4.3]"
                >
                  {/* Fotografia a tutto campo */}
                  <Image
                    src={b.hero.image.src}
                    alt={b.hero.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out"
                  />

                  {/* Velo editoriale scuro calibrato */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14110e] via-[#14110e]/45 to-black/15 group-hover:via-[#14110e]/55 transition-colors duration-500" />

                  {/* Top bar: comparto + freccia */}
                  <div className="absolute top-5 inset-x-5 z-10 flex items-center justify-between gap-2">
                    <span className="px-3.5 py-1.5 rounded-full bg-[#faf7f2]/90 backdrop-blur-md text-[10px] font-bold uppercase tracking-[0.18em] text-[#1f1b16]">
                      {b.category}
                    </span>
                    <span className="w-10 h-10 rounded-full bg-white/15 group-hover:bg-[#8a5a32] backdrop-blur-md border border-white/25 text-white flex items-center justify-center transition-all duration-300 group-hover:scale-105">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>

                  {/* Contenuto in basso: Logo (senza nome duplicato) + claim */}
                  <div className="relative z-10 p-6 sm:p-8">
                    {logos.length > 0 ? (
                      <div className="flex items-center gap-4 mb-4 h-8">
                        {logos.map((src) => (
                          <Image
                            key={src}
                            src={src}
                            alt={`Logo ${b.name}`}
                            width={140}
                            height={36}
                            unoptimized
                            className="h-7 sm:h-8 w-auto max-w-[140px] object-contain brightness-0 invert opacity-95 group-hover:opacity-100 transition-opacity"
                          />
                        ))}
                      </div>
                    ) : (
                      <h3 className="font-serif text-2xl text-white font-normal mb-2">
                        {b.name}
                      </h3>
                    )}

                    <p className="text-xs sm:text-sm text-[#d9cfc1] leading-relaxed line-clamp-2 font-light">
                      {b.cardClaim}
                    </p>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
