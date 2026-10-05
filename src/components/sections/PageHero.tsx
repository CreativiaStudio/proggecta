import Image from "next/image";
import type { ImageAsset } from "@/data/types";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

interface PageHeroProps {
  eyebrow: string;
  headline: string;
  subheadline: string;
  image?: ImageAsset;
  cta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export function PageHero({
  eyebrow,
  headline,
  subheadline,
  image,
  cta,
  secondaryCta,
}: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 bg-[#faf7f2] border-b border-[#efe8dd] overflow-hidden">
      <Container>
        <div className="max-w-3xl">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#6f7a64] mb-4">
            {eyebrow}
          </p>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#1f1b16] tracking-tight leading-[1.1] mb-6">
            {headline}
          </h1>

          <p className="text-lg sm:text-xl text-[#4a443c] leading-relaxed mb-8 font-light">
            {subheadline}
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            {cta && (
              <Button href={cta.href} size="lg">
                {cta.label}
              </Button>
            )}
            {secondaryCta && (
              <Button href={secondaryCta.href} variant="outline" size="lg">
                {secondaryCta.label}
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
