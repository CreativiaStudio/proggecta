import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Building2, ArrowRight } from "lucide-react";

interface ContractTeaserProps {
  eyebrow?: string;
  title?: string;
  body?: string;
  cta?: { label: string; href: string };
}

export function ContractTeaser({
  eyebrow = "Divisione Contract",
  title = "Hotel, B&B, ristoranti e boutique: spazi che lavorano per il tuo business.",
  body = "Progettiamo e forniamo arredi su misura per strutture ricettive e locali commerciali, con materiali pensati per l'uso intensivo, un cronoprogramma condiviso e un unico referente dal rilievo alla posa. Collaboriamo con architetti e progettisti.",
  cta = { label: "Scopri la divisione Contract", href: "/contract" },
}: ContractTeaserProps) {
  return (
    <section className="py-20 sm:py-28 bg-[#faf7f2] border-b border-[#efe8dd]">
      <Container>
        <Reveal>
          <div className="bg-[#1f1b16] rounded-3xl p-8 sm:p-14 text-white relative overflow-hidden shadow-xl">
            <div className="max-w-2xl relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#d9cfc1] text-xs font-semibold uppercase tracking-[0.2em] mb-4">
                <Building2 className="w-3.5 h-3.5 text-[#8a5a32]" />
                <span>{eyebrow}</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-normal leading-tight mb-4">
                {title}
              </h2>

              <p className="text-sm sm:text-base text-[#d9cfc1] leading-relaxed mb-8">
                {body}
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Button href={cta.href} size="lg">
                  {cta.label}
                </Button>
                <Link
                  href="/contract#architetti"
                  className="inline-flex items-center gap-1.5 text-sm text-[#d9cfc1] hover:text-white transition-colors py-2"
                >
                  <span>Collaborazioni per architetti</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
