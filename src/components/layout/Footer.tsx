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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 pb-12">
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
              Showroom & Materioteca
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

          {/* Colonna 3: Pagine & Servizi */}
          <div>
            <h3 className="font-serif text-lg font-medium text-white mb-4">
              Pagine & Servizi
            </h3>
            <ul className="space-y-2 text-sm text-[#d9cfc1]">
              <li>
                <Link
                  href="/progettazione-sartoriale"
                  className="hover:text-white transition-colors"
                >
                  Progettazione sartoriale
                </Link>
              </li>
              <li>
                <Link
                  href="/qualita-costruttiva"
                  className="hover:text-white transition-colors"
                >
                  Qualità costruttiva
                </Link>
              </li>
              <li>
                <Link
                  href="/#marchi"
                  className="hover:text-white transition-colors"
                >
                  I nostri marchi
                </Link>
              </li>
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
        </div>

        {/* Fascia Orizzontale Loghi Partner (Solo loghi in orizzontale) */}
        <div className="py-8 border-t border-[#4a443c]/60">
          <div className="flex flex-wrap items-center justify-between sm:justify-around gap-6 sm:gap-8">
            {[
              { name: "Ciesse Cucine", href: "/brand/ciesse", src: "/media/logos/ciesse.svg" },
              { name: "Moretti Compact", href: "/brand/moretti-compact", src: "/media/logos/moretti-compact.png" },
              { name: "Mercantini", href: "/brand/mercantini", src: "/media/logos/mercantini.svg" },
              { name: "Zamagna", href: "/brand/zamagna", src: "/media/logos/zamagna.svg" },
              { name: "Signorini & Coco", href: "/brand/signorini-coco", src: "/media/logos/signorini-coco.svg" },
              { name: "Ferretti e Ferretti", href: "/brand/ferretti-ferretti", src: "/media/logos/ferretti-ferretti.svg" },
              { name: "Smeg", href: "/brand/elettrodomestici", src: "/media/logos/smeg.svg" },
              { name: "Electrolux", href: "/brand/elettrodomestici", src: "/media/logos/electrolux.svg" },
              { name: "Poziello & Riccardi", href: "/brand/materiali-pannelli", src: "/media/logos/poziello-riccardi.svg" },
            ].map((brand) => (
              <Link
                key={brand.name}
                href={brand.href}
                title={brand.name}
                className="opacity-55 hover:opacity-100 transition-opacity duration-200 py-1"
              >
                <img
                  src={brand.src}
                  alt={brand.name}
                  className="h-5 sm:h-6 max-w-[100px] w-auto object-contain brightness-0 invert"
                  loading="lazy"
                />
              </Link>
            ))}
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
