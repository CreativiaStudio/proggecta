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
  // Se è presente l'immagine di testata, creiamo una hero fotografica immersiva e lussuosa
  if (image) {
    return (
      <section className="relative min-h-[65vh] sm:min-h-[75vh] flex flex-col justify-end pt-36 pb-16 sm:pb-24 bg-[#1f1b16] overflow-hidden">
        {/* Grande Immagine Fotografica di Testata */}
        <div className="absolute inset-0 z-0">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center scale-102 transition-transform duration-1000"
          />
          {/* Overlay gradienti luxury per leggibilità e atmosfera */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1f1b16] via-[#1f1b16]/75 to-[#1f1b16]/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1f1b16]/90 via-[#1f1b16]/50 to-transparent sm:w-3/4" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#d9cfc1] text-xs font-semibold uppercase tracking-[0.2em] mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8a5a32]" />
              <span>{eyebrow}</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-[1.1] mb-5 [text-wrap:balance]">
              {headline}
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-[#d9cfc1] leading-relaxed mb-8 max-w-2xl font-light [text-wrap:balance]">
              {subheadline}
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              {cta && (
                <Button href={cta.href} size="lg">
                  {cta.label}
                </Button>
              )}
              {secondaryCta && (
                <Button href={secondaryCta.href} variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          </div>
        </Container>
      </section>
    );
  }

  // Fallback chiaro per pagine di servizio senza foto di testata
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 bg-[#faf7f2] border-b border-[#efe8dd] overflow-hidden">
      <Container>
        <div className="max-w-3xl">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-[#6f7a64] mb-4">
            {eyebrow}
          </p>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#1f1b16] tracking-tight leading-[1.1] mb-6 [text-wrap:balance]">
            {headline}
          </h1>

          <p className="text-lg sm:text-xl text-[#4a443c] leading-relaxed mb-8 font-light [text-wrap:balance]">
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
