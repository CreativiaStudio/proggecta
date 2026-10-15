"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig, navBrands } from "@/data/siteConfig";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Phone, Menu, X, MessageSquare, ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";
import { trackPhoneClick, trackWhatsAppClick } from "@/lib/tracking";

/** Voce di navigazione che apre il mega menu dei marchi */
const BRANDS_HREF = "/#marchi";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [brandsOpen, setBrandsOpen] = useState(false);
  const [mobileBrandsOpen, setMobileBrandsOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  /** Hover morbido: apre subito, chiude con un piccolo ritardo anti-flicker */
  const openBrands = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setBrandsOpen(true);
  };

  const scheduleCloseBrands = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setBrandsOpen(false), 160);
  };

  const hasRealPhone =
    siteConfig.contacts.phone && !siteConfig.contacts.phone.startsWith("[");

  const cleanNumber = siteConfig.contacts.whatsapp.replace(/\D/g, "");
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(
    siteConfig.contacts.whatsappDefaultMessage
  )}`;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-[#faf7f2]/95 backdrop-blur-md border-b border-[#d9cfc1]/60 py-3 shadow-xs"
          : "bg-transparent py-5"
      )}
    >
      <Container className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span
            className={cn(
              "font-serif text-2xl sm:text-3xl font-semibold tracking-tight transition-colors",
              isScrolled ? "text-[#1f1b16]" : "text-white drop-shadow-xs"
            )}
          >
            Proggecta
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#8a5a32] mt-1" />
        </Link>

        {/* Desktop Nav */}
        <nav
          className={cn(
            "hidden lg:flex items-center gap-8 text-[15px] font-medium transition-colors relative",
            isScrolled ? "text-[#4a443c]" : "text-white/90 drop-shadow-xs"
          )}
        >
          {siteConfig.nav.map((item) =>
            item.href === BRANDS_HREF ? (
              <div
                key={item.href}
                className="py-1"
                onMouseEnter={openBrands}
                onMouseLeave={scheduleCloseBrands}
              >
                <Link
                  href={item.href}
                  aria-haspopup="true"
                  aria-expanded={brandsOpen}
                  className={cn(
                    "relative inline-flex items-center gap-1 transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 hover:after:w-full after:transition-all",
                    isScrolled
                      ? "hover:text-[#8a5a32] after:bg-[#8a5a32]"
                      : "hover:text-white after:bg-white"
                  )}
                >
                  {item.label}
                  <ChevronDown
                    className={cn(
                      "w-3.5 h-3.5 transition-transform duration-200",
                      brandsOpen && "rotate-180"
                    )}
                  />
                </Link>

                {/* Mega menu Marchi — pannello luxury scuro */}
                {brandsOpen && (
                  <div className="absolute left-1/2 top-full -translate-x-1/2 pt-4">
                    <div className="w-[720px] bg-[#1f1b16]/95 backdrop-blur-xl border border-white/15 shadow-2xl rounded-2xl p-6 text-white">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#c9a06a] mb-4">
                        I marchi partner
                      </p>
                      <div className="grid grid-cols-4 gap-2.5">
                        {navBrands.map((brand) => (
                          <Link
                            key={brand.href}
                            href={brand.href}
                            title={brand.name}
                            onClick={() => setBrandsOpen(false)}
                            className="group rounded-xl p-4 hover:bg-white/[0.08] bg-white/[0.03] border border-white/10 hover:border-[#8a5a32]/50 transition-all duration-200 flex items-center justify-center h-16"
                          >
                            <div className="flex items-center justify-center gap-2 h-7 w-full overflow-hidden">
                              {brand.logos.map((src) => (
                                <Image
                                  key={src}
                                  src={src}
                                  alt={brand.name}
                                  width={140}
                                  height={32}
                                  unoptimized
                                  className={cn(
                                    "brightness-0 invert opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-200 h-6 w-auto object-contain",
                                    brand.logos.length > 1
                                      ? "max-w-[48%]"
                                      : "max-w-[130px]"
                                  )}
                                />
                              ))}
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t border-white/10">
                        <Link
                          href={BRANDS_HREF}
                          onClick={() => setBrandsOpen(false)}
                          className="inline-flex items-center gap-1.5 text-xs font-medium text-[#c9a06a] hover:text-white transition-colors"
                        >
                          Scopri tutti i marchi
                          <ChevronDown className="w-3.5 h-3.5 -rotate-90" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "py-1 relative transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#8a5a32] hover:after:w-full after:transition-all",
                  isScrolled
                    ? "hover:text-[#8a5a32]"
                    : "hover:text-white after:bg-white"
                )}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-4">
          {hasRealPhone ? (
            <a
              href={siteConfig.contacts.phoneHref}
              onClick={() => trackPhoneClick("header")}
              className={cn(
                "flex items-center gap-2 text-sm font-medium transition-colors px-3 py-2",
                isScrolled
                  ? "text-[#1f1b16] hover:text-[#8a5a32]"
                  : "text-white/90 hover:text-white"
              )}
            >
              <Phone className="w-4 h-4 text-[#8a5a32]" />
              <span>{siteConfig.contacts.phone}</span>
            </a>
          ) : (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("header")}
              className={cn(
                "flex items-center gap-2 text-sm font-medium transition-colors px-3 py-2",
                isScrolled
                  ? "text-[#128c4a] hover:text-[#0e703b]"
                  : "text-white/90 hover:text-white"
              )}
            >
              <MessageSquare className="w-4 h-4 text-[#128c4a]" />
              <span>WhatsApp</span>
            </a>
          )}

          <Button href={siteConfig.primaryCta.href} size="sm">
            {siteConfig.primaryCta.label}
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={cn(
            "lg:hidden p-2 transition-colors focus:outline-none",
            isScrolled
              ? "text-[#1f1b16] hover:text-[#8a5a32]"
              : "text-white hover:text-[#d9cfc1]"
          )}
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </Container>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-[#faf7f2] border-b border-[#d9cfc1] shadow-lg p-6 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col text-base font-medium text-[#1f1b16] mb-6">
            {siteConfig.nav.map((item) =>
              item.href === BRANDS_HREF ? (
                <div key={item.href} className="border-b border-[#efe8dd]">
                  <button
                    type="button"
                    onClick={() => setMobileBrandsOpen((v) => !v)}
                    aria-expanded={mobileBrandsOpen}
                    className="w-full flex items-center justify-between py-2 hover:text-[#8a5a32] transition-colors"
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform duration-200",
                        mobileBrandsOpen && "rotate-180"
                      )}
                    />
                  </button>

                  {mobileBrandsOpen && (
                    <div className="pb-3 grid grid-cols-1 gap-1">
                      {navBrands.map((brand) => (
                        <Link
                          key={brand.href}
                          href={brand.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="group flex items-center gap-3 rounded-lg px-2 py-2 hover:bg-[#efe8dd]/60 transition-colors"
                        >
                          <span className="flex items-center gap-1.5 w-14 shrink-0">
                            {brand.logos.map((src) => (
                              <Image
                                key={src}
                                src={src}
                                alt={brand.name}
                                width={56}
                                height={16}
                                unoptimized
                                className="h-3.5 w-auto max-w-full object-contain brightness-0 opacity-70"
                              />
                            ))}
                          </span>
                          <span className="flex flex-col">
                            <span className="text-sm font-medium text-[#1f1b16]">
                              {brand.name}
                            </span>
                            <span className="text-[10px] uppercase tracking-[0.14em] text-[#6f7a64]">
                              {brand.compartment}
                            </span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 border-b border-[#efe8dd] hover:text-[#8a5a32] transition-colors"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>
          <div className="flex flex-col gap-3">
            {hasRealPhone ? (
              <a
                href={siteConfig.contacts.phoneHref}
                onClick={() => {
                  trackPhoneClick("mobile_menu");
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-center gap-2 py-3 rounded-full border border-[#d9cfc1] text-[#1f1b16] font-medium"
              >
                <Phone className="w-4 h-4 text-[#8a5a32]" />
                <span>{siteConfig.contacts.phone}</span>
              </a>
            ) : (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackWhatsAppClick("mobile_menu");
                  setMobileMenuOpen(false);
                }}
                className="flex items-center justify-center gap-2 py-3 rounded-full border border-[#d9cfc1] text-[#128c4a] font-medium bg-[#128c4a]/5"
              >
                <MessageSquare className="w-4 h-4 text-[#128c4a]" />
                <span>Scrivici su WhatsApp</span>
              </a>
            )}
            <Button
              href={siteConfig.primaryCta.href}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full"
            >
              {siteConfig.primaryCta.label}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
