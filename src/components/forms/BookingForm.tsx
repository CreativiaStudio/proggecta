"use client";

import { useState, useEffect } from "react";
import type { Ambiente } from "@/data/types";
import { DayChips } from "./DayChips";
import { FormSuccess } from "./FormSuccess";
import { Button } from "@/components/ui/Button";
import { getAttribution } from "@/lib/attribution";
import { trackFormStart, trackFormStep, trackLead } from "@/lib/tracking";
import { Utensils, Moon, BedDouble, Sofa, Home, ArrowLeft, Loader2 } from "lucide-react";
import { cn } from "@/lib/cn";

interface BookingFormProps {
  preset?: Ambiente;
  source?: string;
}

const AMBIENTI_OPTIONS: Array<{
  id: Ambiente;
  title: string;
  desc: string;
  icon: React.ElementType;
}> = [
  { id: "cucina", title: "Cucina su misura", desc: "Lineari, isole, penisole", icon: Utensils },
  { id: "notte", title: "Zona Notte & Armadi", desc: "Armadi, cabine, letti", icon: Moon },
  { id: "cameretta", title: "Cameretta Ragazzi", desc: "Salvaspazio, soppalchi", icon: BedDouble },
  { id: "living", title: "Living & Zona Giorno", desc: "Tavoli, sedie, pareti", icon: Sofa },
  { id: "completo", title: "Tutta la casa", desc: "Progetto d'arredo globale", icon: Home },
];

export function BookingForm({ preset = "cucina", source = "general" }: BookingFormProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [eventId, setEventId] = useState("");
  const [startedAt, setStartedAt] = useState<number>(0);
  const [formStarted, setFormStarted] = useState(false);

  // Form State
  const [ambiente, setAmbiente] = useState<Ambiente>(preset);
  const [preferredDate, setPreferredDate] = useState("flessibile");
  const [preferredSlot, setPreferredSlot] = useState<string>("pomeriggio");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [privacy, setPrivacy] = useState(true);
  const [marketing, setMarketing] = useState(false);
  const [website, setWebsite] = useState(""); // Honeypot

  // Status
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setEventId(crypto.randomUUID());
  }, []);

  const handleStart = () => {
    if (!formStarted) {
      setFormStarted(true);
      setStartedAt(Date.now());
      trackFormStart("showroom");
    }
  };

  const handleSelectAmbiente = (chosen: Ambiente) => {
    handleStart();
    setAmbiente(chosen);
    setStep(2);
    trackFormStep("showroom", 2);
  };

  const handleGoStep3 = () => {
    setStep(3);
    trackFormStep("showroom", 3);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const attribution = getAttribution();
      const payload = {
        formType: "showroom",
        ambiente,
        preferredDate,
        preferredSlot,
        fullName,
        phone,
        email,
        notes,
        privacy,
        marketing,
        website,
        startedAt,
        eventId,
        sourcePath: typeof window !== "undefined" ? window.location.pathname : source,
        attribution,
      };

      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok && data.ok) {
        trackLead({
          formType: "showroom",
          ambiente,
          eventId,
          email,
          phone,
        });
        setSubmitted(true);
      } else {
        setErrorMessage(
          data.errors
            ? Object.values(data.errors).flat().join(" ")
            : "Controlla i dati inseriti e riprova."
        );
      }
    } catch (err) {
      setErrorMessage("Si è verificato un errore di connessione. Riprova tra poco.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <FormSuccess
        fullName={fullName}
        phone={phone}
        formType="showroom"
        onReset={() => {
          setSubmitted(false);
          setStep(1);
          setEventId(crypto.randomUUID());
          setStartedAt(Date.now());
        }}
      />
    );
  }

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#d9cfc1]/80 shadow-lg relative">
      {/* Progress indicator */}
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#efe8dd]">
        <div className="flex items-center gap-2">
          {step > 1 && (
            <button
              type="button"
              onClick={() => setStep((s) => (s - 1) as any)}
              className="p-1 text-[#4a443c] hover:text-[#8a5a32] transition-colors cursor-pointer mr-1"
              aria-label="Passaggio precedente"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}
          <span className="text-xs font-semibold uppercase tracking-wider text-[#6f7a64]">
            Passaggio {step} di 3
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span
            className={cn(
              "w-2.5 h-2.5 rounded-full transition-colors",
              step >= 1 ? "bg-[#8a5a32]" : "bg-[#d9cfc1]"
            )}
          />
          <span
            className={cn(
              "w-2.5 h-2.5 rounded-full transition-colors",
              step >= 2 ? "bg-[#8a5a32]" : "bg-[#d9cfc1]"
            )}
          />
          <span
            className={cn(
              "w-2.5 h-2.5 rounded-full transition-colors",
              step === 3 ? "bg-[#8a5a32]" : "bg-[#d9cfc1]"
            )}
          />
        </div>
      </div>

      {/* STEP 1: Scelta Ambiente */}
      {step === 1 && (
        <div className="animate-in fade-in duration-200">
          <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1f1b16] mb-2">
            Cosa desideri progettare?
          </h3>
          <p className="text-sm text-[#4a443c] mb-6">
            Tocca l'ambiente di tuo interesse per personalizzare la consulenza.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {AMBIENTI_OPTIONS.map((opt) => {
              const IconComp = opt.icon;
              const isSelected = ambiente === opt.id;
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => handleSelectAmbiente(opt.id)}
                  className={cn(
                    "flex items-start gap-4 p-4 rounded-2xl border text-left transition-all cursor-pointer group",
                    isSelected
                      ? "bg-[#faf7f2] border-[#8a5a32] shadow-xs"
                      : "bg-white border-[#d9cfc1] hover:border-[#8a5a32]/60 hover:bg-[#faf7f2]"
                  )}
                >
                  <div
                    className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors",
                      isSelected
                        ? "bg-[#8a5a32] text-white"
                        : "bg-[#efe8dd] text-[#8a5a32] group-hover:bg-[#8a5a32] group-hover:text-white"
                    )}
                  >
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base text-[#1f1b16]">
                      {opt.title}
                    </h4>
                    <p className="text-xs text-[#4a443c] mt-0.5">{opt.desc}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* STEP 2: Scelta Giorno e Fascia */}
      {step === 2 && (
        <div className="animate-in fade-in duration-200">
          <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1f1b16] mb-2">
            Quando preferisci venire in showroom?
          </h3>
          <p className="text-sm text-[#4a443c] mb-6">
            Seleziona la data indicativa e la fascia oraria più comoda per te.
          </p>

          {/* Giorno */}
          <div className="mb-6">
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#6f7a64] mb-3">
              Giorno preferito
            </label>
            <DayChips value={preferredDate} onChange={setPreferredDate} />
          </div>

          {/* Fascia Oraria */}
          <div className="mb-8">
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#6f7a64] mb-3">
              Fascia oraria preferita
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {[
                { id: "09:30 - 11:00", label: "09:30 – 11:00", note: "Prima mattina" },
                { id: "11:00 - 12:30", label: "11:00 – 12:30", note: "Tarda mattina" },
                { id: "15:30 - 17:30", label: "15:30 – 17:30", note: "Primo pomeriggio" },
                { id: "17:30 - 19:30", label: "17:30 – 19:30", note: "Tardo pomeriggio" },
              ].map((slot) => {
                const isSelected = preferredSlot === slot.id || (preferredSlot === "pomeriggio" && slot.id === "15:30 - 17:30") || (preferredSlot === "mattina" && slot.id === "09:30 - 11:00");
                return (
                  <button
                    key={slot.id}
                    type="button"
                    onClick={() => setPreferredSlot(slot.id)}
                    className={cn(
                      "p-3 rounded-xl border font-medium text-xs sm:text-sm transition-all cursor-pointer text-center flex flex-col items-center justify-center gap-0.5",
                      isSelected
                        ? "bg-[#8a5a32] text-white border-[#8a5a32] shadow-xs"
                        : "bg-white text-[#1f1b16] border-[#d9cfc1] hover:bg-[#faf7f2] hover:border-[#8a5a32]/40"
                    )}
                  >
                    <span className="font-semibold">{slot.label}</span>
                    <span
                      className={cn(
                        "text-[10px]",
                        isSelected ? "text-white/80" : "text-[#6f7a64]"
                      )}
                    >
                      {slot.note}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <Button type="button" onClick={handleGoStep3} className="w-full">
            Continua con i tuoi dati
          </Button>
        </div>
      )}

      {/* STEP 3: Dati di Contatto */}
      {step === 3 && (
        <form onSubmit={handleSubmit} className="animate-in fade-in duration-200">
          <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1f1b16] mb-2">
            A chi riserviamo la consulenza?
          </h3>
          <p className="text-sm text-[#4a443c] mb-6">
            Inserisci i tuoi recapiti per ricevere la conferma dell'appuntamento.
          </p>

          {/* Honeypot anti-spam */}
          <input
            type="text"
            name="website"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          <div className="space-y-4 mb-6">
            <div>
              <label
                htmlFor="fullName"
                className="block text-xs font-semibold uppercase tracking-wider text-[#6f7a64] mb-1.5"
              >
                Nome e Cognome *
              </label>
              <input
                id="fullName"
                type="text"
                required
                value={fullName}
                onChange={(e) => {
                  handleStart();
                  setFullName(e.target.value);
                }}
                placeholder="es. Marco Rossi"
                className="w-full px-4 py-3 rounded-xl border border-[#d9cfc1] bg-[#faf7f2]/50 text-[#1f1b16] focus:outline-none focus:border-[#8a5a32] focus:bg-white transition-colors text-base"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#6f7a64] mb-1.5"
                >
                  Telefono cellulare *
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="es. 333 1234567"
                  className="w-full px-4 py-3 rounded-xl border border-[#d9cfc1] bg-[#faf7f2]/50 text-[#1f1b16] focus:outline-none focus:border-[#8a5a32] focus:bg-white transition-colors text-base"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#6f7a64] mb-1.5"
                >
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="es. nome@email.it"
                  className="w-full px-4 py-3 rounded-xl border border-[#d9cfc1] bg-[#faf7f2]/50 text-[#1f1b16] focus:outline-none focus:border-[#8a5a32] focus:bg-white transition-colors text-base"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="notes"
                className="block text-xs font-semibold uppercase tracking-wider text-[#6f7a64] mb-1.5"
              >
                Note sul tuo progetto (facoltativo)
              </label>
              <textarea
                id="notes"
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="es. Casa nuova in costruzione, vorrei una cucina con isola..."
                className="w-full px-4 py-3 rounded-xl border border-[#d9cfc1] bg-[#faf7f2]/50 text-[#1f1b16] focus:outline-none focus:border-[#8a5a32] focus:bg-white transition-colors text-sm"
              />
            </div>

            {/* Checkbox Privacy */}
            <div className="pt-2">
              <label className="flex items-start gap-3 cursor-pointer text-xs text-[#4a443c] leading-relaxed">
                <input
                  type="checkbox"
                  required
                  checked={privacy}
                  onChange={(e) => setPrivacy(e.target.checked)}
                  className="mt-0.5 rounded border-[#d9cfc1] text-[#8a5a32] focus:ring-[#8a5a32]"
                />
                <span>
                  Ho letto e accetto la Privacy Policy. Autorizzo Proggecta a
                  contattarmi via telefono ed email per la gestione dell'appuntamento.
                </span>
              </label>
            </div>
          </div>

          {errorMessage && (
            <div className="p-3 mb-4 rounded-xl bg-red-50 text-red-700 text-xs border border-red-200">
              {errorMessage}
            </div>
          )}

          <Button type="submit" disabled={loading} className="w-full">
            {loading ? (
              <span className="flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                Invio richiesta in corso...
              </span>
            ) : (
              "Conferma Prenotazione Gratuita"
            )}
          </Button>

          <p className="text-[11px] text-center text-[#6f7a64] mt-3">
            Nessun vincolo di acquisto · Riservatezza garantita · Ti richiamiamo entro 24h
          </p>
        </form>
      )}
    </div>
  );
}
