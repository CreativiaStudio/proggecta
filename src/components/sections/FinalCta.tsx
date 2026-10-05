import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { WhatsAppLink } from "@/components/ui/WhatsAppLink";
import { Reveal } from "@/components/ui/Reveal";

interface FinalCtaProps {
  title?: string;
  body?: string;
  cta?: { label: string; href: string };
}

export function FinalCta({
  title = "La casa che hai in mente esiste già. Va solo progettata.",
  body = "Prenota la consulenza gratuita: in un'ora capirai cosa si può fare con i tuoi spazi e con il tuo budget.",
  cta = { label: "Prenota la tua consulenza gratuita", href: "#prenota" },
}: FinalCtaProps) {
  return (
    <section className="py-20 sm:py-32 bg-[#efe8dd] border-b border-[#d9cfc1]/80 text-center">
      <Container size="narrow">
        <Reveal>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1f1b16] tracking-tight leading-tight mb-4">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-[#4a443c] leading-relaxed max-w-xl mx-auto mb-8">
            {body}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href={cta.href} size="lg">
              {cta.label}
            </Button>
            <WhatsAppLink
              placement="final_cta"
              className="text-sm font-semibold text-[#1f1b16] hover:text-[#8a5a32] px-4 py-2"
            >
              Scrivici su WhatsApp →
            </WhatsAppLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
