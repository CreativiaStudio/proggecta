import Link from "next/link";
import type { Brand } from "@/data/types";
import { Container } from "@/components/ui/Container";

interface LogoStripProps {
  brands: Brand[];
  label?: string;
}

export function LogoStrip({
  brands,
  label = "Selezioniamo e progettiamo con l'eccellenza italiana",
}: LogoStripProps) {
  const visibleBrands = brands.filter((b) => b.showInGrid);

  return (
    <section className="py-8 bg-[#efe8dd] border-y border-[#d9cfc1]/80 overflow-hidden">
      <Container>
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#6f7a64] mb-6">
          {label}
        </p>
        <div className="flex items-center justify-center flex-wrap gap-6 sm:gap-10 lg:gap-14">
          {visibleBrands.map((b) => (
            <Link
              key={b.slug}
              href={`/brand/${b.slug}`}
              className="group flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity"
            >
              <span className="font-serif text-base sm:text-lg text-[#1f1b16] tracking-tight group-hover:text-[#8a5a32] transition-colors">
                {b.name}
              </span>
              <span className="text-[10px] text-[#6f7a64] uppercase tracking-wider">
                {b.category}
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
