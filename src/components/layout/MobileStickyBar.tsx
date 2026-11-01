"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/data/siteConfig";
import { Phone, Calendar } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { trackPhoneClick, trackWhatsAppClick } from "@/lib/tracking";

export function MobileStickyBar() {
  const [visible, setVisible] = useState(false);
  const [formInView, setFormInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // IntersectionObserver per nascondere la barra quando il form #prenota è visibile
    const formElement = document.getElementById("prenota");
    let observer: IntersectionObserver | null = null;

    if (formElement) {
      observer = new IntersectionObserver(
        ([entry]) => {
          setFormInView(entry.isIntersecting);
        },
        { threshold: 0.1 }
      );
      observer.observe(formElement);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (observer && formElement) {
        observer.unobserve(formElement);
      }
    };
  }, []);

  if (!visible || formInView) return null;

  const hasPhone = Boolean(
    siteConfig.contacts.phone &&
      siteConfig.contacts.phone.trim().length > 5 &&
      !siteConfig.contacts.phone.includes("[") &&
      !siteConfig.contacts.phone.includes("X")
  );

  const cleanNumber = siteConfig.contacts.whatsapp
    ? siteConfig.contacts.whatsapp.replace(/\D/g, "")
    : "";
  const hasWhatsApp = Boolean(
    cleanNumber.length > 6 && !siteConfig.contacts.whatsapp.includes("X")
  );
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(
    siteConfig.contacts.whatsappDefaultMessage
  )}`;

  return (
    <aside
      aria-label="Contatti rapidi"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#faf7f2]/95 backdrop-blur-md border-t border-[#d9cfc1] px-4 py-3 shadow-lg animate-in slide-in-from-bottom-2 duration-300"
    >
      {hasPhone && hasWhatsApp ? (
        <div className="grid grid-cols-3 gap-2">
          <a
            href={siteConfig.contacts.phoneHref}
            onClick={() => trackPhoneClick("mobile_sticky")}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#efe8dd] text-[#1f1b16] text-xs font-medium hover:bg-[#d9cfc1] transition-colors"
          >
            <Phone className="w-4 h-4 mb-1 text-[#8a5a32]" />
            <span>Chiama</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("mobile_sticky")}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#efe8dd] text-[#128c4a] text-xs font-medium hover:bg-[#d9cfc1] transition-colors"
          >
            <WhatsAppIcon className="w-4 h-4 mb-1 text-[#25D366] fill-current" />
            <span>WhatsApp</span>
          </a>

          <a
            href="#prenota"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#8a5a32] text-white text-xs font-semibold hover:bg-[#6f4626] transition-colors shadow-xs"
          >
            <Calendar className="w-4 h-4 mb-1" />
            <span>Prenota</span>
          </a>
        </div>
      ) : hasWhatsApp ? (
        <div className="grid grid-cols-2 gap-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick("mobile_sticky")}
            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#efe8dd] text-[#128c4a] text-xs font-semibold hover:bg-[#d9cfc1] transition-colors"
          >
            <WhatsAppIcon className="w-4 h-4 text-[#25D366] fill-current" />
            <span>Scrivici su WhatsApp</span>
          </a>

          <a
            href="#prenota"
            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[#8a5a32] text-white text-xs font-semibold hover:bg-[#6f4626] transition-colors shadow-xs"
          >
            <Calendar className="w-4 h-4" />
            <span>Prenota Visita</span>
          </a>
        </div>
      ) : (
        <a
          href="#prenota"
          className="flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#8a5a32] text-white text-sm font-semibold hover:bg-[#6f4626] transition-colors shadow-md w-full"
        >
          <Calendar className="w-4 h-4" />
          <span>Prenota la consulenza gratuita</span>
        </a>
      )}
    </aside>
  );
}
