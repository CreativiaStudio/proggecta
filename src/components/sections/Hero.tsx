import Image from "next/image";
import type { ImageAsset, VideoAsset } from "@/data/types";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { Icon } from "@/components/ui/Icon";

interface HeroProps {
  eyebrow: string;
  headline: string;
  subheadline: string;
  image: ImageAsset;
  video?: VideoAsset;
  cta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  microcopy?: string;
  chips?: Array<{ icon: string; label: string }>;
}

export function Hero({
  eyebrow,
  headline,
  subheadline,
  image,
  video,
  cta,
  secondaryCta,
  microcopy,
  chips,
}: HeroProps) {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-center pt-28 pb-16 sm:pb-24 overflow-hidden bg-[#1f1b16]">
      {/* Background Image / LCP element */}
      <div className="absolute inset-0 z-0">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center scale-105 transition-transform duration-1000"
        />
        {/* Gradients overlay per leggibilità perfetta */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1f1b16]/95 via-[#1f1b16]/80 to-transparent sm:w-4/5 lg:w-3/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1f1b16] via-transparent to-[#1f1b16]/40" />
      </div>

      <Container className="relative z-10 my-auto">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#faf7f2]/10 backdrop-blur-md border border-[#faf7f2]/15 text-[#d9cfc1] text-xs font-semibold uppercase tracking-[0.2em] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8a5a32]" />
            <span>{eyebrow}</span>
          </div>

          {/* H1 Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-white tracking-tight leading-[1.05] mb-6">
            {headline}
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-[#d9cfc1] leading-relaxed mb-8 max-w-2xl font-light">
            {subheadline}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-4">
            <Button href={cta.href} size="lg">
              {cta.label}
            </Button>
            {secondaryCta && (
              <WhatsAppLink
                placement="hero"
                className="text-white hover:text-[#d9cfc1] text-base"
              >
                {secondaryCta.label}
              </WhatsAppLink>
            )}
          </div>

          {microcopy && (
            <p className="text-xs text-[#a3af97] mb-12 sm:mb-16">
              {microcopy}
            </p>
          )}

          {/* Trust Chips */}
          {chips && chips.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-6 border-t border-white/10">
              {chips.map((chip, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 text-xs sm:text-sm text-white/90 bg-white/5 backdrop-blur-xs px-3.5 py-2.5 rounded-xl border border-white/10"
                >
                  <Icon
                    name={chip.icon as any}
                    className="w-4 h-4 text-[#8a5a32] shrink-0"
                  />
                  <span className="leading-snug">{chip.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
