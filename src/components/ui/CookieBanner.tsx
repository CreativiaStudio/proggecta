"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const CONSENT_STORAGE_KEY = "pg_cookie_consent";

type ConsentState = "granted" | "denied";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

function applyConsentUpdate(state: ConsentState) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  const fn =
    typeof window.gtag === "function"
      ? window.gtag
      : (...args: any[]) => {
          window.dataLayer?.push(args);
        };

  fn("consent", "update", {
    ad_storage: state,
    ad_user_data: state,
    ad_personalization: state,
    analytics_storage: state,
  });

  window.dataLayer.push({
    event: "consent_update",
    consent_state: state,
  });
}

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(CONSENT_STORAGE_KEY);
      if (saved === "granted" || saved === "denied") {
        if (saved === "granted") {
          applyConsentUpdate("granted");
        }
        return;
      }
    } catch {
      // Fallback: mostra il banner se localStorage non è accessibile
    }
    setVisible(true);
  }, []);

  const handleChoice = (choice: ConsentState) => {
    try {
      window.localStorage.setItem(CONSENT_STORAGE_KEY, choice);
    } catch {
      // Ignora errori storage in navigazione privata restrittiva
    }
    applyConsentUpdate(choice);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <aside
      role="dialog"
      aria-label="Preferenze cookie"
      className="fixed bottom-24 lg:bottom-5 left-4 right-4 lg:left-auto lg:right-5 lg:max-w-md z-[45] rounded-2xl bg-[#181410]/95 backdrop-blur-md text-[#faf7f2] border border-[#2d2620] p-4 sm:p-5 shadow-2xl"
    >
      <p className="text-xs sm:text-[13px] leading-relaxed text-[#e3dacb] mb-3.5">
        Utilizziamo cookie tecnici e, con il tuo consenso, strumenti di analisi e misurazione per
        migliorare la consulenza e le visite in showroom.{" "}
        <Link
          href="/cookie-policy"
          className="underline decoration-[#dfc094]/60 text-[#dfc094] hover:text-white transition-colors"
        >
          Cookie Policy
        </Link>
        .
      </p>

      <div className="flex flex-wrap items-center justify-end gap-2">
        <button
          type="button"
          onClick={() => handleChoice("denied")}
          className="px-3.5 py-2 rounded-full border border-white/20 text-xs font-medium text-[#e3dacb] hover:bg-white/10 transition-colors cursor-pointer"
        >
          Solo essenziali
        </button>
        <button
          type="button"
          onClick={() => handleChoice("granted")}
          className="px-4 py-2 rounded-full bg-[#8a5a32] text-xs font-semibold text-white hover:bg-[#a06b3f] transition-colors shadow-sm cursor-pointer"
        >
          Accetta tutti
        </button>
      </div>
    </aside>
  );
}
