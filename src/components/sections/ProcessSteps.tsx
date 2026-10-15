import Link from "next/link";
import type { ProcessStep } from "@/data/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { ArrowRight, CheckCircle2 } from "lucide-react";

interface ProcessStepsProps {
  steps: ProcessStep[];
  variant?: "compact" | "timeline";
  eyebrow?: string;
  title?: string;
  subtitle?: string;
}

export function ProcessSteps({
  steps,
  variant = "compact",
  eyebrow = "Il nostro metodo sartoriale",
  title = "Dal rilievo laser alla posa finale: quattro fasi di rigore progettuale.",
  subtitle = "Architettura d'interni su misura: un unico progettista coordina volumi, materiali e installazione.",
}: ProcessStepsProps) {
  return (
    <section className="py-20 sm:py-32 bg-[#faf7f2] border-b border-[#efe8dd]">
      <Container>
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          subtitle={subtitle}
          align="center"
        />

        {variant === "compact" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {steps.map((step, idx) => (
              <Reveal key={step.slug} delay={idx * 0.1}>
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#d9cfc1]/80 shadow-xs h-full flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden">
                  <span className="absolute top-4 right-4 text-4xl sm:text-5xl font-serif font-bold text-[#efe8dd] pointer-events-none">
                    0{step.step}
                  </span>

                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#efe8dd] text-[#8a5a32] flex items-center justify-center mb-6">
                      <Icon name={step.icon} className="w-6 h-6" />
                    </div>

                    <h3 className="font-serif text-xl sm:text-2xl text-[#1f1b16] font-medium mb-3">
                      {step.title}
                    </h3>

                    <p className="text-sm text-[#4a443c] leading-relaxed mb-6">
                      {step.short}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#efe8dd] bg-[#faf7f2]/60 -mx-6 -mb-6 p-4 rounded-b-3xl">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-[#6f7a64] mb-1">
                      Cosa ricevi:
                    </p>
                    <p className="text-xs text-[#1f1b16] font-medium flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#8a5a32] shrink-0" />
                      <span>{step.deliverable}</span>
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        ) : (
          /* Timeline view per /progettazione-sartoriale */
          <div className="max-w-4xl mx-auto space-y-12 mb-16">
            {steps.map((step, idx) => (
              <Reveal key={step.slug} delay={idx * 0.1}>
                <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start bg-white rounded-3xl p-8 border border-[#d9cfc1]/80 shadow-xs">
                  <div className="w-16 h-16 rounded-2xl bg-[#8a5a32] text-white flex items-center justify-center shrink-0 text-2xl font-serif font-bold shadow-sm">
                    0{step.step}
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h3 className="font-serif text-2xl sm:text-3xl text-[#1f1b16] font-medium">
                        {step.title}
                      </h3>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#efe8dd] text-[#6f7a64]">
                        {step.duration}
                      </span>
                    </div>

                    <p className="text-base text-[#4a443c] leading-relaxed mb-4">
                      {step.long}
                    </p>

                    <div className="p-3.5 rounded-xl bg-[#faf7f2] border border-[#efe8dd] inline-flex items-center gap-2 text-xs sm:text-sm text-[#1f1b16] font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#8a5a32] shrink-0" />
                      <span>Risultato: {step.deliverable}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}

        {/* CTA finale dopo gli step */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <Button href="#prenota" size="lg">
            Inizia dallo step 1: prenota la consulenza
          </Button>
          {variant === "compact" && (
            <Link
              href="/progettazione-sartoriale"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1f1b16] hover:text-[#8a5a32] transition-colors py-2 px-4"
            >
              <span>Scopri il processo nel dettaglio</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </Container>
    </section>
  );
}
