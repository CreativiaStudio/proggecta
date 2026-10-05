import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { buyerChecklist, buyerChecklistIntro } from "@/data/featuresData";
import { HelpCircle, CheckCircle2 } from "lucide-react";

export function BuyerChecklist() {
  return (
    <section className="py-20 sm:py-28 bg-[#faf7f2] border-b border-[#efe8dd]">
      <Container size="narrow">
        <SectionHeading
          eyebrow={buyerChecklistIntro.eyebrow}
          title={buyerChecklistIntro.title}
          subtitle={buyerChecklistIntro.body}
          align="center"
        />

        <div className="space-y-4">
          {buyerChecklist.map((item, idx) => (
            <Reveal key={idx} delay={idx * 0.06}>
              <div className="bg-white rounded-2xl p-6 border border-[#d9cfc1]/80 shadow-2xs">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#efe8dd] text-[#8a5a32] flex items-center justify-center shrink-0 mt-0.5 font-bold text-sm">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-[#1f1b16] font-medium mb-1.5">
                      {item.question}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4a443c] flex items-start gap-2">
                      <span className="font-semibold text-[#6f7a64] shrink-0">
                        Perché conta:
                      </span>
                      <span>{item.whyItMatters}</span>
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
