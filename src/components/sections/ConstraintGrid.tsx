import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { progettazioneCopy } from "@/data/pagesData";

export function ConstraintGrid() {
  const { title, cards } = progettazioneCopy.constraints;

  return (
    <section className="py-20 sm:py-28 bg-[#faf7f2] border-b border-[#efe8dd]">
      <Container>
        <SectionHeading
          eyebrow="Nessun limite architettonico"
          title={title}
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card, idx) => (
            <Reveal key={idx} delay={idx * 0.08}>
              <div className="bg-white rounded-3xl p-8 border border-[#d9cfc1]/80 shadow-xs h-full flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#efe8dd] text-[#8a5a32] flex items-center justify-center mb-6">
                    <Icon name={card.icon} className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-xl text-[#1f1b16] font-medium mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#4a443c] leading-relaxed">
                    {card.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
