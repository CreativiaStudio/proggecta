import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { brandData } from "@/data/brandData";
import { Container } from "@/components/ui/Container";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1f1b16] text-[#faf7f2] pt-20 pb-28 sm:pb-16 border-t border-[#4a443c]/40">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-[#4a443c]/60">
          {/* Colonna 1: Brand & Posizionamento */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="font-serif text-3xl font-semibold tracking-tight text-white">
                Proggecta
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#8a5a32] mt-1" />
            </div>
            <p className="text-sm text-[#d9cfc1] leading-relaxed mb-6">
              Studio di progettazione sartoriale d'interni e distributore multi-brand d'eccellenza.
              Cucine, zona notte, camerette e living al millimetro sulla tua vita.
            </p>
            <div className="text-xs text-[#a3af97] space-y-1">
              <p>{siteConfig.legalName}</p>
              <p>P.IVA: {siteConfig.vatNumber}</p>
            </div>
          </div>

          {/* Colonna 2: Showroom & Orari */}
          <div>
            <h3 className="font-serif text-lg font-medium text-white mb-4">
              Showroom di Scafati
            </h3>
            <ul className="space-y-3 text-sm text-[#d9cfc1]">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#8a5a32] shrink-0 mt-1" />
                <span>
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.postalCode} {siteConfig.address.city} (
                  {siteConfig.address.province})
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#8a5a32] shrink-0" />
                <a
                  href={siteConfig.contacts.phoneHref}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contacts.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#8a5a32] shrink-0" />
                <a
                  href={`mailto:${siteConfig.contacts.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.contacts.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#8a5a32] shrink-0 mt-1" />
                <span>Lun – Sab: 09:00–13:00 / 15:30–19:30</span>
              </li>
            </ul>
          </div>

          {/* Colonna 3: Pagine & Percorsi */}
          <div>
            <h3 className="font-serif text-lg font-medium text-white mb-4">
              Pagine & Servizi
            </h3>
            <ul className="space-y-2 text-sm text-[#d9cfc1]">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/ambienti/cucine-su-misura"
                  className="hover:text-white transition-colors"
                >
                  Cucine su misura
                </Link>
              </li>
              <li>
                <Link
                  href="/ambienti/camerette"
                  className="hover:text-white transition-colors"
                >
                  Camerette
                </Link>
              </li>
              <li>
                <Link
                  href="/ambienti/armadi-cabine-armadio"
                  className="hover:text-white transition-colors"
                >
                  Armadi & Cabine
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonna 4: Selezione Marchi */}
          <div>
            <h3 className="font-serif text-lg font-medium text-white mb-4">
              I Nostri Marchi
            </h3>
            <ul className="space-y-2 text-sm text-[#d9cfc1]">
              {brandData
                .filter((b) => b.showInGrid)
                .map((b) => (
                  <li key={b.slug}>
                    <Link
                      href={`/brand/${b.slug}`}
                      className="hover:text-white transition-colors flex items-center justify-between"
                    >
                      <span>{b.name}</span>
                      <span className="text-[11px] text-[#a3af97]">
                        {b.category}
                      </span>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#a3af97]">
          <p>© {currentYear} Proggecta. Tutti i diritti riservati.</p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/cookie-policy"
              className="hover:text-white transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
