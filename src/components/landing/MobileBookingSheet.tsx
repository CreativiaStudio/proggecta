"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, m, useReducedMotion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { LandingSuMisuraForm } from "@/components/forms/LandingSuMisuraForm";

export function openMobileBookingSheet(projectType?: string) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(
    new CustomEvent("proggecta:open-mobile-sheet", {
      detail: { projectType },
    })
  );
}

export function MobileBookingSheet({ source = "/arredamento-su-misura" }: { source?: string }) {
  const [open, setOpen] = useState(false);
  const [initialProject, setInitialProject] = useState<string | undefined>(undefined);
  const prefersReduced = useReducedMotion();

  // Ascolta apertura programmatica (es. click su un ambiente o CTA da mobile)
  useEffect(() => {
    const onOpen = (ev: Event) => {
      const detail = (ev as CustomEvent<{ projectType?: string }>).detail;
      if (detail?.projectType) {
        setInitialProject(detail.projectType);
      }
      setOpen(true);
    };
    window.addEventListener("proggecta:open-mobile-sheet", onOpen);
    return () => window.removeEventListener("proggecta:open-mobile-sheet", onOpen);
  }, []);

  // Invia l'eventuale ambiente pre-selezionato appena il form dentro il sheet è montato
  useEffect(() => {
    if (!open || !initialProject) return;
    const t = window.setTimeout(() => {
      window.dispatchEvent(
        new CustomEvent("proggecta:select-project", {
          detail: { projectType: initialProject },
        })
      );
    }, 60);
    return () => window.clearTimeout(t);
  }, [open, initialProject]);

  // Blocca scroll del body quando il bottom sheet è aperto + chiusura con Escape
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      {/* Barra sticky SOLO in basso: "Progetta con noi" */}
      <div
        className="fixed bottom-0 inset-x-0 z-40 border-t border-white/15 bg-[#14110e]/95 px-4 pt-3 backdrop-blur-md shadow-[0_-8px_30px_rgba(0,0,0,0.35)]"
        style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
      >
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#8a5a32] px-6 py-3.5 text-base font-bold text-white shadow-lg transition-colors active:scale-[0.99] hover:bg-[#6f4626] cursor-pointer"
        >
          <span>Progetta con noi</span>
          <ArrowUpRight className="w-4 h-4 shrink-0" />
        </button>
      </div>

      {/* Popup / Bottom Sheet che sale dal basso */}
      <AnimatePresence>
        {open && (
          <div
            className="fixed inset-0 z-50 flex items-end justify-center"
            role="dialog"
            aria-modal="true"
            aria-label="Prenota la tua consulenza in showroom"
          >
            {/* Backdrop */}
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: prefersReduced ? 0.05 : 0.25 }}
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-black/70 backdrop-blur-xs"
            />

            {/* Foglio scorrevole dal basso */}
            <m.div
              initial={prefersReduced ? { opacity: 0 } : { y: "100%" }}
              animate={prefersReduced ? { opacity: 1 } : { y: 0 }}
              exit={prefersReduced ? { opacity: 0 } : { y: "100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 w-full max-h-[92dvh] flex flex-col rounded-t-3xl bg-[#faf7f2] shadow-2xl overflow-hidden"
            >
              {/* Maniglia superiore + pulsante chiudi */}
              <div className="flex items-center justify-between px-5 pt-3 pb-2 bg-[#181410] text-[#faf7f2]">
                <div className="w-8" aria-hidden="true" />
                <div className="h-1 w-10 rounded-full bg-white/30" />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Chiudi modulo"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-[#faf7f2] hover:bg-white/20 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div
                className="overflow-y-auto overscroll-contain flex-1"
                style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
              >
                <LandingSuMisuraForm source={source} inModal />
              </div>
            </m.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
