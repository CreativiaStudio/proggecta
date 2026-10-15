import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Layers, ShieldCheck, Home, MapPin } from "lucide-react";

interface ShowroomExperienceProps {
  eyebrow?: string;
  title?: string;
  body?: string;
  highlights?: string[];
  cta?: { label: string; href: string };
}

export function ShowroomExperience({
  eyebrow = "Showroom & Materioteca",
  title = "Vieni a toccare con mano ciò che un catalogo non mostra.",
  body = "Una cucina non si sceglie su uno schermo: si giudica dalla tenuta della scocca in multistrato, dalla solidità delle cerniere e dalla sensazione tattile delle superfici. Nello showroom Proggecta tocchi dal vivo le sezioni costruttive, accosti marmi e legni nella materioteca e definisci ogni dettaglio con chi il mobile lo progetta davvero.",
  cta = { label: "Prenota la tua visita in showroom", href: "#prenota" },
}: ShowroomExperienceProps) {
  return (
    <section className="py-20 sm:py-28 bg-[#faf7f2] border-b border-[#efe8dd]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Colonna Testo (Altezza calibrata sul riquadro destro) */}
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#efe8dd] text-[#8a5a32] text-xs font-semibold uppercase tracking-wider mb-4 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8a5a32]" />
              <span>{eyebrow}</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[40px] font-normal text-[#1f1b16] tracking-tight leading-[1.12] mb-5">
              {title}
            </h2>

            <p className="text-base sm:text-lg text-[#4a443c] leading-relaxed mb-8 font-light">
              {body}
            </p>

            <div>
              <Button href={cta.href} size="lg">
                {cta.label}
              </Button>
            </div>
          </div>

          {/* Colonna Visual Card */}
          <Reveal delay={0.2}>
            <div className="bg-white rounded-3xl p-7 sm:p-9 border border-[#d9cfc1]/80 shadow-md">
              <div className="grid grid-cols-2 gap-3.5">
                <div className="p-5 rounded-2xl bg-[#efe8dd]/60 border border-[#d9cfc1]/60 text-center flex flex-col items-center justify-center">
                  <Layers className="w-7 h-7 text-[#8a5a32] mb-2" />
                  <span className="font-serif text-base sm:text-lg font-bold text-[#1f1b16] mb-0.5">
                    Materioteca Reale
                  </span>
                  <span className="text-[10.5px] text-[#4a443c] uppercase tracking-wider font-semibold">
                    Marmi, Top & Essenze
                  </span>
                </div>

                <div className="p-5 rounded-2xl bg-[#efe8dd]/60 border border-[#d9cfc1]/60 text-center flex flex-col items-center justify-center">
                  <ShieldCheck className="w-7 h-7 text-[#8a5a32] mb-2" />
                  <span className="font-serif text-base sm:text-lg font-bold text-[#1f1b16] mb-0.5">
                    Sezioni Costruttive
                  </span>
                  <span className="text-[10.5px] text-[#4a443c] uppercase tracking-wider font-semibold">
                    Multistrato dal Vivo
                  </span>
                </div>

                <div className="p-5 rounded-2xl bg-[#efe8dd]/60 border border-[#d9cfc1]/60 text-center flex flex-col items-center justify-center">
                  <Home className="w-7 h-7 text-[#8a5a32] mb-2" />
                  <span className="font-serif text-base sm:text-lg font-bold text-[#1f1b16] mb-0.5">
                    Cucine Allestite
                  </span>
                  <span className="text-[10.5px] text-[#4a443c] uppercase tracking-wider font-semibold">
                    Meccanismi Reali
                  </span>
                </div>

                <div className="p-5 rounded-2xl bg-[#efe8dd]/60 border border-[#d9cfc1]/60 text-center flex flex-col items-center justify-center">
                  <MapPin className="w-7 h-7 text-[#8a5a32] mb-2" />
                  <span className="font-serif text-base sm:text-lg font-bold text-[#1f1b16] mb-0.5">
                    Posto Auto Riservato
                  </span>
                  <span className="text-[10.5px] text-[#4a443c] uppercase tracking-wider font-semibold">
                    Parcheggio Clienti
                  </span>
                </div>
              </div>

              <div className="mt-5 pt-5 border-t border-[#efe8dd] text-center">
                <p className="text-xs text-[#6f7a64] font-medium">
                  Showroom a Nocera Inferiore (SA) · Loc. Fosso Imperatore, Lotto 14
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
