"use client";

import { siteConfig } from "@/data/siteConfig";
import { trackWhatsAppClick } from "@/lib/tracking";
import { cn } from "@/lib/cn";
import { MessageSquare } from "lucide-react";

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
          "inline-flex items-center justify-center gap-2 bg-[#128c4a] hover:bg-[#0e703b] text-white px-6 py-3 rounded-full font-medium transition-all shadow-sm hover:shadow-md cursor-pointer",
          className
        )}
      >
        <MessageSquare className="w-5 h-5" />
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
        "inline-flex items-center gap-1.5 text-[#128c4a] hover:text-[#0e703b] font-medium transition-colors hover:underline cursor-pointer",
        className
      )}
    >
      <MessageSquare className="w-4 h-4" />
      <span>{children || "WhatsApp →"}</span>
    </a>
  );
}
