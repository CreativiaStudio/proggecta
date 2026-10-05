import type { FaqItem } from "@/data/types";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ChevronDown } from "lucide-react";

interface FaqAccordionProps {
  items: FaqItem[];
  eyebrow?: string;
  title?: string;
}

export function FaqAccordion({
  items,
  eyebrow = "Domande frequenti",
  title = "Le domande che ci fanno tutti (e le risposte sincere)",
}: FaqAccordionProps) {
  // Filtra rigorosamente le FAQ in draft per evitare claim non verificati
  const publishedItems = items.filter((item) => !item.draft);

  return (
    <section className="py-20 sm:py-28 bg-[#faf7f2] border-b border-[#efe8dd]">
      <Container size="narrow">
        <SectionHeading eyebrow={eyebrow} title={title} align="center" />

        <div className="space-y-4">
          {publishedItems.map((faq) => (
            <details
              key={faq.id}
              className="group bg-white rounded-2xl border border-[#d9cfc1]/80 overflow-hidden shadow-2xs transition-colors open:bg-[#faf7f2]/40"
            >
              <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-medium text-base sm:text-lg text-[#1f1b16] select-none hover:text-[#8a5a32] transition-colors">
                <span className="pr-4">{faq.question}</span>
                <div className="w-8 h-8 rounded-full bg-[#efe8dd] text-[#8a5a32] flex items-center justify-center shrink-0 transition-transform duration-200 group-open:rotate-180">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </summary>
              <div className="px-6 pb-6 pt-2 text-sm sm:text-base text-[#4a443c] leading-relaxed border-t border-[#efe8dd]/60">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
