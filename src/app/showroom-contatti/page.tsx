import { permanentRedirect } from "next/navigation";

/**
 * La pagina "Showroom & Contatti" è stata sostituita dalla nuova pagina
 * unica dei contatti. Manteniamo questo URL come redirect permanente (308)
 * verso /contatti per non perdere eventuali link esistenti o indicizzati.
 */
export default function ShowroomContattiPage(): never {
  permanentRedirect("/contatti");
}
