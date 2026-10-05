import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Quote } from "lucide-react";

interface FounderNoteProps {
  name?: string;
  role?: string;
  quote?: string;
}

export function FounderNote({
  name = "Alfonso Malafronte",
  role = "Fondatore di Proggecta",
  quote = "Ho fondato Proggecta perché ero stanco di vedere case arredate a forza di compromessi. Qui ogni progetto lo seguiamo dall'inizio alla fine, e se qualcosa non va, il numero da chiamare è il mio.",
}: FounderNoteProps) {
  return (
    <section className="py-16 sm:py-24 bg-[#efe8dd]/40 border-b border-[#d9cfc1]/60">
      <Container size="narrow">
        <Reveal>
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#d9cfc1] shadow-xs text-center relative overflow-hidden">
            <div className="w-12 h-12 rounded-full bg-[#efe8dd] text-[#8a5a32] flex items-center justify-center mx-auto mb-6">
              <Quote className="w-6 h-6" />
            </div>

            <blockquote className="font-serif text-xl sm:text-2xl text-[#1f1b16] leading-relaxed mb-6 font-normal italic">
              "{quote}"
            </blockquote>

            <div className="inline-block border-t border-[#d9cfc1]/80 pt-4">
              <p className="font-semibold text-base text-[#1f1b16]">{name}</p>
              <p className="text-xs text-[#6f7a64] uppercase tracking-wider mt-0.5">
                {role}
              </p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
