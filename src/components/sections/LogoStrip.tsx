import type { Brand } from "@/data/types";
import { BrandCarousel } from "./BrandCarousel";

interface LogoStripProps {
  brands?: Brand[];
  label?: string;
}

export function LogoStrip({
  label = "Selezioniamo e progettiamo con l'eccellenza italiana",
}: LogoStripProps) {
  return <BrandCarousel label={label} />;
}

