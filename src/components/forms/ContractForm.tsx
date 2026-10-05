"use client";

import { useState, useEffect } from "react";
import { FormSuccess } from "./FormSuccess";
import { Button } from "@/components/ui/Button";
import { getAttribution } from "@/lib/attribution";
import { trackFormStart, trackLead } from "@/lib/tracking";
import { Loader2 } from "lucide-react";

export function ContractForm() {
  const [eventId, setEventId] = useState("");
  const [startedAt, setStartedAt] = useState<number>(0);
  const [formStarted, setFormStarted] = useState(false);

  // Form Fields
  const [company, setCompany] = useState("");
  const [fullName, setFullName] = useState("");
  const [role, setRole] = useState("");
  const [businessType, setBusinessType] = useState<
    "hotel" | "bb" | "ristorante" | "retail" | "uffici" | "residenziale_multiplo" | "altro"
  >("hotel");
  const [size, setSize] = useState("");
  const [timing, setTiming] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [privacy, setPrivacy] = useState(true);
  const [website, setWebsite] = useState("");

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
      trackFormStart("contract");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const attribution = getAttribution();
      const payload = {
        formType: "contract",
        company,
        fullName,
        role,
        businessType,
        size,
        timing,
        phone,
        email,
        notes,
        privacy,
        marketing: false,
        website,
        startedAt,
        eventId,
        sourcePath: typeof window !== "undefined" ? window.location.pathname : "/contract",
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
          formType: "contract",
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
      setErrorMessage("Errore di connessione. Riprova tra poco.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <FormSuccess
        fullName={fullName}
        phone={phone}
        formType="contract"
        onReset={() => {
          setSubmitted(false);
          setEventId(crypto.randomUUID());
          setStartedAt(Date.now());
        }}
      />
    );
  }

  return (
    <div id="contract-form" className="bg-white rounded-3xl p-6 sm:p-10 border border-[#d9cfc1]/80 shadow-lg">
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#6f7a64] mb-1">
          Divisione Contract B2B
        </p>
        <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1f1b16]">
          Richiedi un sopralluogo o una quotazione
        </h3>
        <p className="text-sm text-[#4a443c] mt-2">
          Un responsabile dedicato ti risponderà entro 24 ore lavorative.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Honeypot */}
        <input
          type="text"
          name="website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          className="hidden"
          tabIndex={-1}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#6f7a64] mb-1.5">
              Azienda o Studio *
            </label>
            <input
              type="text"
              required
              value={company}
              onChange={(e) => {
                handleStart();
                setCompany(e.target.value);
              }}
              placeholder="es. Hotel Bellavista SRL o Studio Rossi"
              className="w-full px-4 py-3 rounded-xl border border-[#d9cfc1] bg-[#faf7f2]/50 text-[#1f1b16] focus:outline-none focus:border-[#8a5a32] text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#6f7a64] mb-1.5">
              Nome e Cognome *
            </label>
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => {
                handleStart();
                setFullName(e.target.value);
              }}
              placeholder="es. Ing. Mario Bianchi"
              className="w-full px-4 py-3 rounded-xl border border-[#d9cfc1] bg-[#faf7f2]/50 text-[#1f1b16] focus:outline-none focus:border-[#8a5a32] text-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#6f7a64] mb-1.5">
              Tuo Ruolo *
            </label>
            <input
              type="text"
              required
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="es. Architetto, Titolare, Direttore"
              className="w-full px-4 py-3 rounded-xl border border-[#d9cfc1] bg-[#faf7f2]/50 text-[#1f1b16] focus:outline-none focus:border-[#8a5a32] text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#6f7a64] mb-1.5">
              Settore di Attività
            </label>
            <select
              value={businessType}
              onChange={(e) => setBusinessType(e.target.value as any)}
              className="w-full px-4 py-3 rounded-xl border border-[#d9cfc1] bg-[#faf7f2]/50 text-[#1f1b16] focus:outline-none focus:border-[#8a5a32] text-sm"
            >
              <option value="hotel">Hotel & Resort</option>
              <option value="bb">B&B e Case Vacanza</option>
              <option value="ristorante">Ristorante, Bar o Locale</option>
              <option value="retail">Boutique & Retail</option>
              <option value="uffici">Uffici & Studi</option>
              <option value="residenziale_multiplo">Sviluppo Immobiliare Multiplo</option>
              <option value="altro">Altro</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#6f7a64] mb-1.5">
              Dimensione Indicativa
            </label>
            <input
              type="text"
              value={size}
              onChange={(e) => setSize(e.target.value)}
              placeholder="es. 12 camere, oppure 350 mq"
              className="w-full px-4 py-3 rounded-xl border border-[#d9cfc1] bg-[#faf7f2]/50 text-[#1f1b16] focus:outline-none focus:border-[#8a5a32] text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#6f7a64] mb-1.5">
              Tempistica Prevista
            </label>
            <input
              type="text"
              value={timing}
              onChange={(e) => setTiming(e.target.value)}
              placeholder="es. Entro 3 mesi, oppure Primavera 2027"
              className="w-full px-4 py-3 rounded-xl border border-[#d9cfc1] bg-[#faf7f2]/50 text-[#1f1b16] focus:outline-none focus:border-[#8a5a32] text-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#6f7a64] mb-1.5">
              Telefono Diretto *
            </label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="es. 333 1234567"
              className="w-full px-4 py-3 rounded-xl border border-[#d9cfc1] bg-[#faf7f2]/50 text-[#1f1b16] focus:outline-none focus:border-[#8a5a32] text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[#6f7a64] mb-1.5">
              Email Aziendale *
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="es. info@hotelbellavista.it"
              className="w-full px-4 py-3 rounded-xl border border-[#d9cfc1] bg-[#faf7f2]/50 text-[#1f1b16] focus:outline-none focus:border-[#8a5a32] text-sm"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#6f7a64] mb-1.5">
            Dettagli della richiesta
          </label>
          <textarea
            rows={3}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Descrivi brevemente l'intervento, se c'è già un progetto di massima o se serve il nostro studio di fattibilità..."
            className="w-full px-4 py-3 rounded-xl border border-[#d9cfc1] bg-[#faf7f2]/50 text-[#1f1b16] focus:outline-none focus:border-[#8a5a32] text-sm"
          />
        </div>

        <div className="pt-2">
          <label className="flex items-start gap-3 cursor-pointer text-xs text-[#4a443c]">
            <input
              type="checkbox"
              required
              checked={privacy}
              onChange={(e) => setPrivacy(e.target.checked)}
              className="mt-0.5 rounded border-[#d9cfc1] text-[#8a5a32] focus:ring-[#8a5a32]"
            />
            <span>
              Autorizzo Proggecta al trattamento dei dati aziendali per l'elaborazione del preventivo e per contatti professionali.
            </span>
          </label>
        </div>

        {errorMessage && (
          <div className="p-3 rounded-xl bg-red-50 text-red-700 text-xs border border-red-200">
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
            "Richiedi Sopralluogo Contract Gratuito"
          )}
        </Button>
      </form>
    </div>
  );
}
