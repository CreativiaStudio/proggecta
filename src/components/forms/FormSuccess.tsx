"use client";

import { CheckCircle2, MessageSquare } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { trackWhatsAppClick } from "@/lib/tracking";

interface FormSuccessProps {
  fullName: string;
  phone: string;
  formType?: "showroom" | "contract";
  onReset?: () => void;
}

export function FormSuccess({
  fullName,
  phone,
  formType = "showroom",
  onReset,
}: FormSuccessProps) {
  const firstName = fullName.split(" ")[0] || fullName;
  const cleanNumber = siteConfig.contacts.whatsapp.replace(/\D/g, "");
  const whatsappMsg = `Ciao Proggecta, sono ${firstName} (${phone}). Ho appena prenotato la consulenza dal sito e vi invio qui la piantina e alcune foto della mia casa.`;
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(
    whatsappMsg
  )}`;

  return (
    <div className="bg-white rounded-2xl p-8 sm:p-12 text-center border border-[#d9cfc1]/80 shadow-md animate-in fade-in zoom-in-95 duration-300">
      <div className="w-16 h-16 rounded-full bg-[#efe8dd] text-[#8a5a32] flex items-center justify-center mx-auto mb-6">
        <CheckCircle2 className="w-10 h-10 text-[#8a5a32]" />
      </div>

      <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1f1b16] mb-3">
        Grazie, {firstName}! La tua richiesta è arrivata.
      </h3>

      <p className="text-base sm:text-lg text-[#4a443c] max-w-lg mx-auto mb-8 leading-relaxed">
        {formType === "contract"
          ? "Il nostro responsabile della divisione Contract ti ricontatterà entro 1 giorno lavorativo per fissare il sopralluogo."
          : `Ti richiamiamo entro 24 ore lavorative al numero ${phone} per confermare definitivamente data e orario della tua consulenza.`}
      </p>

      {/* Box WhatsApp per piantina */}
      <div className="bg-[#faf7f2] rounded-xl p-6 border border-[#d9cfc1] max-w-md mx-auto mb-8 text-left">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-[#128c4a]/10 text-[#128c4a] flex items-center justify-center shrink-0 mt-0.5">
            <MessageSquare className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-semibold text-sm text-[#1f1b16] mb-1">
              Vuoi accelerare i tempi?
            </h4>
            <p className="text-xs sm:text-sm text-[#4a443c] leading-relaxed mb-4">
              Inviaci subito su WhatsApp la piantina o le foto degli ambienti: il
              tuo interior designer inizierà a studiarle prima del tuo arrivo.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick("form_success_fast_track")}
              className="inline-flex items-center gap-2 bg-[#128c4a] hover:bg-[#0e703b] text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all shadow-xs"
            >
              <span>Invia piantina su WhatsApp</span>
              <span className="text-xs">→</span>
            </a>
          </div>
        </div>
      </div>

      {onReset && (
        <button
          type="button"
          onClick={onReset}
          className="text-xs text-[#6f7a64] hover:text-[#1f1b16] underline underline-offset-4 cursor-pointer"
        >
          Compila una nuova richiesta
        </button>
      )}
    </div>
  );
}
