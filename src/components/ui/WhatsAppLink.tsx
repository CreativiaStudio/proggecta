"use client";

import { siteConfig } from "@/data/siteConfig";
import { trackWhatsAppClick } from "@/lib/tracking";
import { cn } from "@/lib/cn";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

interface WhatsAppLinkProps {
  message?: string;
  placement?: string;
  className?: string;
  children?: React.ReactNode;
  variant?: "button" | "text";
}

export function WhatsAppLink({
  message = siteConfig.contacts.whatsappDefaultMessage,
  placement = "general",
  className = "",
  children,
  variant = "text",
}: WhatsAppLinkProps) {
  const cleanNumber = siteConfig.contacts.whatsapp.replace(/\D/g, "");
  const hasRealNumber =
    cleanNumber.length > 6 && !siteConfig.contacts.whatsapp.includes("X");

  // Se non c'è un numero WhatsApp valido configurato, non mostriamo il link fasullo
  if (!hasRealNumber) {
    return null;
  }

  const encodedText = encodeURIComponent(message);
  const href = `https://wa.me/${cleanNumber}?text=${encodedText}`;

  const handleClick = () => {
    trackWhatsAppClick(placement);
  };

  if (variant === "button") {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className={cn(
          "inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebd5a] text-white px-6 py-3 rounded-full font-medium transition-all shadow-sm hover:shadow-md cursor-pointer",
          className
        )}
      >
        <WhatsAppIcon className="w-5 h-5 fill-current" />
        <span>{children || "Scrivici su WhatsApp"}</span>
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={cn(
        "inline-flex items-center gap-1.5 text-[#25D366] hover:underline font-medium transition-colors cursor-pointer",
        className
      )}
    >
      <WhatsAppIcon className="w-4 h-4 fill-current shrink-0" />
      <span>{children || "WhatsApp"}</span>
    </a>
  );
}
