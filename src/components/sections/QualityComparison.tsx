import Link from "next/link";
import { comparisonIntro, comparisonRows, featuresData } from "@/data/featuresData";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { Check, X, ArrowRight } from "lucide-react";

export function QualityComparison() {
  const topFeatures = featuresData.filter((f) =>
    ["multistrato", "ferramenta", "superfici"].includes(f.id)
  );

  return (
    <section className="py-20 sm:py-32 bg-[#1f1b16] text-[#faf7f2] relative overflow-hidden">
      {/* Texture decorativa di sfondo */}
      <div className="absolute inset-0 bg-[radial-gradient(#8a5a32_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

      <Container className="relative z-10">
        <SectionHeading
          eyebrow={comparisonIntro.eyebrow}
          title={comparisonIntro.title}
          subtitle={comparisonIntro.body}
          theme="dark"
          align="center"
        />

        {/* Tabella di confronto Desktop / Card Mobile */}
        <Reveal delay={0.1}>
          <div className="bg-[#2a241e] rounded-3xl border border-[#4a443c]/80 overflow-hidden shadow-2xl mb-16">
            {/* Header Tabella */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-b border-[#4a443c]/80">
              <div className="p-6 hidden md:block bg-[#1f1b16]/60">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#a3af97]">
                  Caratteristica
                </span>
              </div>
              <div className="p-6 sm:p-8 bg-[#8a5a32]/20 border-b md:border-b-0 md:border-r border-[#4a443c]/80">
                <div className="inline-block px-3 py-1 rounded-full bg-[#8a5a32] text-white text-[11px] font-bold uppercase tracking-wider mb-2">
                  Standard Proggecta
                </div>
                <h4 className="font-serif text-2xl text-white font-medium">
                  {comparisonIntro.multistratoLabel}
                </h4>
                <p className="text-xs text-[#d9cfc1] mt-1">
                  {comparisonIntro.multistratoSub}
                </p>
              </div>
              <div className="p-6 sm:p-8 bg-[#1f1b16]/40">
                <div className="inline-block px-3 py-1 rounded-full bg-[#4a443c] text-[#d9cfc1] text-[11px] font-bold uppercase tracking-wider mb-2">
                  Mobilifici Commerciali
                </div>
                <h4 className="font-serif text-2xl text-[#d9cfc1] font-medium">
                  {comparisonIntro.truciolareLabel}
                </h4>
                <p className="text-xs text-[#a3af97] mt-1">
                  {comparisonIntro.truciolareSub}
                </p>
              </div>
            </div>

            {/* Righe di confronto */}
            <div className="divide-y divide-[#4a443c]/60">
              {comparisonRows.map((row, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-1 md:grid-cols-3 hover:bg-[#342e26]/60 transition-colors"
                >
                  <div className="p-4 sm:p-6 md:bg-[#1f1b16]/30 flex items-center">
                    <span className="text-sm font-semibold text-white">
                      {row.criterion}
                    </span>
                  </div>
                  <div className="p-4 sm:p-6 bg-[#8a5a32]/10 md:border-r border-[#4a443c]/60 flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#8a5a32] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#faf7f2] leading-relaxed">
                      {row.multistrato}
                    </span>
                  </div>
                  <div className="p-4 sm:p-6 flex items-start gap-3">
                    <X className="w-5 h-5 text-[#a3af97]/60 shrink-0 mt-0.5" />
                    <span className="text-sm text-[#a3af97] leading-relaxed">
                      {row.truciolare}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* 3 Mini Card Qualità */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {topFeatures.map((f, idx) => (
            <Reveal key={f.id} delay={0.2 + idx * 0.1}>
              <div className="bg-[#2a241e] rounded-3xl p-6 sm:p-8 border border-[#4a443c]/80 h-full flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#8a5a32]/20 text-[#8a5a32] flex items-center justify-center mb-6 border border-[#8a5a32]/30">
                    <Icon name={f.icon} className="w-6 h-6 text-[#d9cfc1]" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#a3af97] block mb-2">
                    {f.kicker}
                  </span>
                  <h4 className="font-serif text-xl sm:text-2xl text-white font-medium mb-3">
                    {f.title}
                  </h4>
                  <p className="text-sm text-[#d9cfc1] leading-relaxed mb-6">
                    {f.short}
                  </p>
                </div>

                {f.bullets && (
                  <ul className="space-y-2 border-t border-[#4a443c]/60 pt-4 text-xs text-[#a3af97]">
                    {f.bullets.slice(0, 2).map((b, bIdx) => (
                      <li key={bIdx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8a5a32]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        {/* CTA finale sezione qualità */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <Button href="#prenota" size="lg">
            {comparisonIntro.ctaLabel}
          </Button>
          <Link
            href="/qualita-costruttiva"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#d9cfc1] hover:text-white transition-colors py-2 px-4"
          >
            <span>Leggi il manifesto completo della qualità</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
