import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Check, Sparkles, MapPin, Coffee } from "lucide-react";

interface ShowroomExperienceProps {
  eyebrow?: string;
  title?: string;
  body?: string;
  highlights?: string[];
  cta?: { label: string; href: string };
}

export function ShowroomExperience({
  eyebrow = "Showroom di Scafati",
  title = "2.000 mq per smettere di immaginare e iniziare a toccare.",
  body = "Le foto aiutano a sognare, ma una cucina si sceglie aprendo i cassetti, un divano sedendosi, un armadio toccando le ante. Nel nostro showroom trovi ambienti completi allestiti, campionari di materiali, top e finiture, e un'area progettazione dove vedere il tuo render su grande schermo.",
  highlights = [
    "Ambienti completi: cucine, living, zona notte, camerette",
    "Campionari di top, ante, essenze e tessuti da confrontare",
    "Un interior designer dedicato, senza attese, se prenoti",
    "Parcheggio riservato e un caffè ad accoglierti",
  ],
  cta = { label: "Prenota la tua visita", href: "#prenota" },
}: ShowroomExperienceProps) {
  return (
    <section className="py-20 sm:py-32 bg-[#faf7f2] border-b border-[#efe8dd]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Colonna Testo */}
          <div>
            <SectionHeading
              eyebrow={eyebrow}
              title={title}
              subtitle={body}
              className="mb-8"
            />

            <ul className="space-y-4 mb-8">
              {highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#efe8dd] text-[#8a5a32] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm sm:text-base text-[#1f1b16] font-medium leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <Button href={cta.href} size="lg">
              {cta.label}
            </Button>
          </div>

          {/* Colonna Visual Card */}
          <Reveal delay={0.2}>
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#d9cfc1]/80 shadow-md">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-[#efe8dd]/60 border border-[#d9cfc1]/60 text-center">
                  <span className="block font-serif text-3xl sm:text-4xl font-bold text-[#8a5a32] mb-1">
                    2.000 mq
                  </span>
                  <span className="text-xs text-[#4a443c] uppercase tracking-wider font-semibold">
                    Superficie Espositiva
                  </span>
                </div>

                <div className="p-6 rounded-2xl bg-[#efe8dd]/60 border border-[#d9cfc1]/60 text-center">
                  <Sparkles className="w-8 h-8 text-[#8a5a32] mx-auto mb-1" />
                  <span className="text-xs text-[#4a443c] uppercase tracking-wider font-semibold">
                    Render 3D in Sala
                  </span>
                </div>

                <div className="p-6 rounded-2xl bg-[#efe8dd]/60 border border-[#d9cfc1]/60 text-center">
                  <MapPin className="w-8 h-8 text-[#8a5a32] mx-auto mb-1" />
                  <span className="text-xs text-[#4a443c] uppercase tracking-wider font-semibold">
                    Parcheggio Privato
                  </span>
                </div>

                <div className="p-6 rounded-2xl bg-[#efe8dd]/60 border border-[#d9cfc1]/60 text-center">
                  <Coffee className="w-8 h-8 text-[#8a5a32] mx-auto mb-1" />
                  <span className="text-xs text-[#4a443c] uppercase tracking-wider font-semibold">
                    Accoglienza Riservata
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-[#efe8dd] text-center">
                <p className="text-xs text-[#6f7a64]">
                  Showroom a Scafati (SA) · A pochi minuti dall'uscita autostradale A3
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
