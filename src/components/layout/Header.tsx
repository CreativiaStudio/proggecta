"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Phone, Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { trackPhoneClick } from "@/lib/tracking";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          <span className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight text-[#1f1b16]">
            Proggecta
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#8a5a32] mt-1" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-[#4a443c]">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-[#8a5a32] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#8a5a32] hover:after:w-full after:transition-all"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href={siteConfig.contacts.phoneHref}
            onClick={() => trackPhoneClick("header")}
            className="flex items-center gap-2 text-sm font-medium text-[#1f1b16] hover:text-[#8a5a32] transition-colors px-3 py-2"
          >
            <Phone className="w-4 h-4 text-[#8a5a32]" />
            <span>{siteConfig.contacts.phone}</span>
          </a>
          <Button href={siteConfig.primaryCta.href} size="sm">
            {siteConfig.primaryCta.label}
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#1f1b16] hover:text-[#8a5a32] transition-colors focus:outline-none"
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </Container>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-[#faf7f2] border-b border-[#d9cfc1] shadow-lg p-6 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-4 text-base font-medium text-[#1f1b16] mb-6">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#efe8dd] hover:text-[#8a5a32] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col gap-3">
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
