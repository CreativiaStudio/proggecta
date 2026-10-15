import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="py-32 sm:py-48 text-center bg-[#faf7f2]">
      <Container size="narrow">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6f7a64] mb-3 block">
          Errore 404
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-normal text-[#1f1b16] mb-4">
          La pagina che cerchi non è qui.
        </h1>
        <p className="text-base text-[#4a443c] leading-relaxed max-w-md mx-auto mb-8">
          Potrebbe essere stata spostata o il link potrebbe non essere corretto.
          Ripartiamo dalla nostra selezione o vieni a trovarci in showroom.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/">Torna alla Home</Button>
          <Button href="/contatti" variant="secondary">
            Vieni in Showroom
          </Button>
        </div>
      </Container>
    </div>
  );
}
