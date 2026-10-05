import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { AlertCircle } from "lucide-react";

interface ProblemSectionProps {
  eyebrow?: string;
  title: string;
  cards: Array<{ title: string; body: string }>;
  bridge?: string;
}

export function ProblemSection({
  eyebrow = "Perché il mobile standard delude",
  title,
  cards,
  bridge,
}: ProblemSectionProps) {
  return (
    <section className="py-20 sm:py-28 bg-[#faf7f2] border-b border-[#efe8dd]">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} align="center" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {cards.map((card, idx) => (
            <Reveal key={idx} delay={idx * 0.1}>
              <div className="bg-white rounded-3xl p-8 border border-[#d9cfc1]/80 shadow-xs h-full flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#efe8dd] text-[#8a5a32] flex items-center justify-center mb-6">
                    <AlertCircle className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-xl text-[#1f1b16] font-medium mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#4a443c] leading-relaxed">
                    {card.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {bridge && (
          <Reveal delay={0.3}>
            <div className="bg-[#efe8dd]/60 border border-[#d9cfc1] rounded-2xl p-6 sm:p-8 text-center max-w-3xl mx-auto">
              <p className="font-serif text-lg sm:text-xl text-[#1f1b16] leading-snug">
                {bridge}
              </p>
            </div>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
