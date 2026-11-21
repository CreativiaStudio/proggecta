"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { DayChips } from "./DayChips";
import { getAttribution } from "@/lib/attribution";
import { trackFormStart, trackFormStep, trackLead } from "@/lib/tracking";
import {
  Home,
  Utensils,
  Moon,
  Sofa,
  Ruler,
  Clock,
  MapPin,
  CheckCircle2,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  Loader2,
  FileText,
} from "lucide-react";
import { cn } from "@/lib/cn";

type ProjectType =
  | "casa_completa"
  | "cucina"
  | "armadi_notte"
  | "living_tavoli"
  | "su_misura_singolo";

type TimelineType = "urgente_30_60" | "3_6_mesi" | "esplorativo";
type FloorplanType = "si" | "no_serve_rilievo";

interface ProjectOption {
  id: ProjectType;
  title: string;
  sub: string;
  icon: React.ElementType;
}

const PROJECT_OPTIONS: ProjectOption[] = [
  {
    id: "casa_completa",
    title: "Tutta la Casa",
    sub: "Arredo completo coordinato",
    icon: Home,
  },
  {
    id: "cucina",
    title: "Cucina su Misura",
    sub: "Progettata al millimetro",
    icon: Utensils,
  },
  {
    id: "armadi_notte",
    title: "Armadi & Zona Notte",
    sub: "Camere, cabine e camerette",
    icon: Moon,
  },
  {
    id: "living_tavoli",
    title: "Living, Tavoli & Divani",
    sub: "Zona giorno sartoriale",
    icon: Sofa,
  },
  {
    id: "su_misura_singolo",
    title: "Singolo Mobile / Fuori Misura",
    sub: "Nicchie, mansarde e pareti fuori squadro",
    icon: Ruler,
  },
];

const HOUR_SLOTS = [
  "09:00 - 10:00",
  "10:00 - 11:00",
  "11:00 - 12:00",
  "12:00 - 13:00",
  "15:30 - 16:30",
  "16:30 - 17:30",
  "17:30 - 18:30",
  "18:30 - 19:30",
];

const TIMELINE_OPTIONS: { id: TimelineType; label: string; sub: string }[] = [
  { id: "urgente_30_60", label: "Entro 30–60 giorni", sub: "Cantiere o consegna vicina" },
  { id: "3_6_mesi", label: "Entro 3–6 mesi", sub: "Ristrutturazione o nozze" },
  { id: "esplorativo", label: "Valuto idee & costi", sub: "Progetto futuro" },
];

const INPUT_CLASS =
  "w-full px-3.5 py-2.5 rounded-xl border border-[#d9cfc1] focus:outline-none focus:border-[#8a5a32] focus:ring-2 focus:ring-[#8a5a32]/20 text-sm bg-white text-[#1f1b16] placeholder:text-[#6f7a64]/70";

const LABEL_CLASS =
  "block text-[11px] font-bold uppercase tracking-wider text-[#6f7a64] mb-1";

function formatDateLong(date: string): string {
  const d = new Date(`${date}T12:00:00`);
  if (isNaN(d.getTime())) return date;
  return d.toLocaleDateString("it-IT", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
}

export function LandingSuMisuraForm({
  source = "/arredamento-su-misura",
  inModal = false,
}: {
  source?: string;
  inModal?: boolean;
}) {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [eventId, setEventId] = useState("");
  const [startedAt, setStartedAt] = useState<number>(0);
  const [formStarted, setFormStarted] = useState(false);

  // Campi form
  const [projectType, setProjectType] = useState<ProjectType | "">("");
  const [timeline, setTimeline] = useState<TimelineType>("3_6_mesi");
  const [hasFloorplan, setHasFloorplan] = useState<FloorplanType>("si");
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredSlot, setPreferredSlot] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [privacy, setPrivacy] = useState(false);
  const [website, setWebsite] = useState(""); // Honeypot

  // Stato UI
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [step1Error, setStep1Error] = useState("");
  const [step2Error, setStep2Error] = useState("");
  const [submittedName, setSubmittedName] = useState("");

  // Barra sticky mobile (nascosta quando il form è nel viewport)
  const [cardVisible, setCardVisible] = useState(true);
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setEventId(crypto.randomUUID());
  }, []);

  const handleStart = useCallback(() => {
    if (!formStarted) {
      setFormStarted(true);
      setStartedAt(Date.now());
      trackFormStart("landing_su_misura");
    }
  }, [formStarted]);

  // Ascolto evento esterno di pre-selezione dalle card della pagina
  useEffect(() => {
    const valid = PROJECT_OPTIONS.map((o) => o.id as string);
    const onSelect = (ev: Event) => {
      const detail = (ev as CustomEvent<{ projectType?: string }>).detail;
      const incoming = detail?.projectType;
      if (incoming && valid.includes(incoming)) {
        handleStart();
        setProjectType(incoming as ProjectType);
        setStep1Error("");
        setStep(1);
      }
    };
    window.addEventListener("proggecta:select-project", onSelect);
    return () => window.removeEventListener("proggecta:select-project", onSelect);
  }, [handleStart]);

  useEffect(() => {
    const el = cardRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const obs = new IntersectionObserver(
      ([entry]) => setCardVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const handleSelectProject = (id: ProjectType) => {
    handleStart();
    setProjectType(id);
    setStep1Error("");
  };

  const handleContinueStep1 = () => {
    handleStart();
    if (!projectType) {
      setStep1Error("Scegli l'ambiente principale per continuare.");
      return;
    }
    setStep1Error("");
    setStep(2);
    trackFormStep("landing_su_misura", 2);
  };

  const handleChangeDate = (date: string) => {
    setStep2Error("");
    if (date === preferredDate) {
      setPreferredDate("");
      setPreferredSlot("");
      return;
    }
    setPreferredDate(date);
    if (date === "flessibile") setPreferredSlot("");
  };

  const handleContinueStep2 = () => {
    if (!preferredDate) {
      setStep2Error("Scegli un giorno oppure «Flessibile» per continuare.");
      return;
    }
    if (preferredDate !== "flessibile" && !preferredSlot) {
      setStep2Error("Scegli una fascia oraria per continuare.");
      return;
    }
    setStep2Error("");
    setStep(3);
    trackFormStep("landing_su_misura", 3);
  };

  const handleContinueStep3 = () => {
    setStep(4);
    trackFormStep("landing_su_misura", 4);
  };

  const validateStep4 = () => {
    const errs: Record<string, string> = {};
    if (fullName.trim().length < 3) {
      errs.fullName = "Scrivi nome e cognome (almeno 3 caratteri).";
    }
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 9 || digits.length > 13) {
      errs.phone = "Inserisci un numero valido.";
    }
    if (email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errs.email = "Controlla l'indirizzo email.";
    }
    if (notes.length > 500) errs.notes = "Massimo 500 caratteri.";
    if (!privacy) errs.privacy = "Serve il consenso privacy per ricontattarti.";
    setFieldErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    if (!projectType) {
      setStep(1);
      return;
    }
    if (!validateStep4()) return;

    setLoading(true);
    setErrorMessage("");

    try {
      const payload = {
        formType: "landing_su_misura" as const,
        projectType,
        timeline,
        hasFloorplan,
        preferredDate: preferredDate || "flessibile",
        preferredSlot: preferredDate && preferredDate !== "flessibile" ? preferredSlot : "",
        fullName: fullName.trim(),
        phone: phone.trim(),
        email: email.trim(),
        notes: notes.trim(),
        privacy: true as const,
        marketing: false,
        website,
        startedAt: startedAt || Date.now() - 5000,
        eventId: eventId || crypto.randomUUID(),
        sourcePath: source,
        attribution: getAttribution(),
      };

      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        if (data?.fieldErrors) {
          setFieldErrors(data.fieldErrors);
        }
        setErrorMessage(
          data?.message || "Si è verificato un problema nell'invio. Riprova tra un istante."
        );
        return;
      }

      setSubmittedName(fullName.trim().split(" ")[0] || "Grazie");
      setSubmitted(true);
      trackLead({
        formType: "landing_su_misura",
        ambiente: projectType,
        eventId: payload.eventId,
        email: payload.email,
        phone: payload.phone,
      });
    } catch {
      setErrorMessage("Connessione momentaneamente assente. Riprova tra un attimo.");
    } finally {
      setLoading(false);
    }
  };

  const projectLabel = PROJECT_OPTIONS.find((o) => o.id === projectType)?.title ?? "";
  const dateSummary =
    preferredDate && preferredDate !== "flessibile"
      ? `${formatDateLong(preferredDate)}${preferredSlot ? ` · ${preferredSlot}` : ""}`
      : "Data flessibile";

  const handleStickyClick = () => {
    cardRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  // ---------- CONFERMA ----------
  if (submitted) {
    return (
      <div
        id="prenota-consulenza"
        ref={cardRef}
        className="scroll-mt-24 bg-[#faf7f2] rounded-2xl p-6 sm:p-8 border border-[#d9cfc1] shadow-2xl text-center lg:min-h-[540px] flex flex-col items-center justify-center"
      >
        <div className="w-14 h-14 rounded-full bg-[#efe8dd] text-[#8a5a32] flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#1f1b16] mb-2">
          Richiesta ricevuta, {submittedName}!
        </h3>
        <p className="text-sm text-[#4a443c] mb-5 max-w-sm mx-auto leading-relaxed">
          Il nostro Team di Progettazione ti ricontatterà via telefono o WhatsApp per confermare
          l&apos;appuntamento in showroom.
        </p>
        <div className="w-full rounded-xl bg-white border border-[#d9cfc1] p-4 text-left max-w-sm mx-auto space-y-2 mb-4">
          <p className="text-sm text-[#1f1b16]">
            <span className="font-semibold">{projectLabel}</span> · {dateSummary}
          </p>
          <p className="text-xs text-[#4a443c] flex items-start gap-2">
            <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#8a5a32]" />
            <span>Località Fosso Imperatore – Lotto 14, Nocera Inferiore (SA)</span>
          </p>
        </div>
      </div>
    );
  }

  // ---------- FORM 4 STEP AD ALTEZZA COSTANTE ----------
  return (
    <>
      <div
        id={inModal ? undefined : "prenota-consulenza"}
        ref={cardRef}
        className={cn(
          "scroll-mt-24 bg-[#faf7f2] overflow-hidden flex flex-col",
          inModal
            ? "rounded-none border-0 shadow-none"
            : "rounded-2xl border border-white/15 shadow-2xl lg:min-h-[540px]"
        )}
      >
        {/* Header fisso compatto */}
        <div className="bg-[#181410] text-[#faf7f2] px-5 sm:px-6 py-4 border-b border-white/10">
          <div className="flex items-center justify-between gap-2">
            <h2 className="font-serif text-xl sm:text-[22px] font-medium leading-tight">
              Prenota la tua visita in showroom
            </h2>
            <span className="shrink-0 text-[10px] font-bold uppercase tracking-[0.18em] text-[#dfc094] bg-white/10 px-2.5 py-1 rounded-full">
              {step} / 4
            </span>
          </div>
          <p className="text-xs text-[#d9cfc1]/90 mt-1">
            100% gratuita e senza impegno · Valutiamo insieme idee, materiali e costi con calma
          </p>
        </div>

        {/* Corpo ad altezza uniforme per evitare salti della Hero */}
        <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
          {/* Barra di progresso */}
          <div className="mb-4">
            <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-wider text-[#6f7a64] mb-1.5">
              <span>Passo {step} di 4</span>
              <span className="text-[#8a5a32]">
                {step === 1 && "Cosa progettiamo"}
                {step === 2 && "Giorno e orario"}
                {step === 3 && "Tempi e misure"}
                {step === 4 && "I tuoi contatti"}
              </span>
            </div>
            <div className="grid grid-cols-4 gap-1.5">
              {[1, 2, 3, 4].map((n) => (
                <div
                  key={n}
                  className={cn(
                    "h-1 rounded-full transition-colors duration-300",
                    n <= step ? "bg-[#8a5a32]" : "bg-[#e3dacb]"
                  )}
                />
              ))}
            </div>
          </div>

          {errorMessage && (
            <div
              role="alert"
              className="mb-3 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs"
            >
              {errorMessage}
            </div>
          )}

          {/* PASSO 1 — AMBIENTE */}
          {step === 1 && (
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-lg sm:text-xl font-medium text-[#1f1b16] mb-1">
                  Cosa vuoi progettare?
                </h3>
                <p className="text-xs text-[#4a443c] mb-3.5">
                  Scegli l&apos;ambiente principale. Del resto parliamo insieme in consulenza.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {PROJECT_OPTIONS.map((opt, idx) => {
                    const Icon = opt.icon;
                    const isSelected = projectType === opt.id;
                    const isLastFull = idx === PROJECT_OPTIONS.length - 1;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        aria-pressed={isSelected}
                        onClick={() => handleSelectProject(opt.id)}
                        className={cn(
                          "text-left px-3 py-2.5 rounded-xl border transition-colors duration-200 flex items-center gap-2.5 cursor-pointer bg-white",
                          isLastFull && "sm:col-span-2",
                          isSelected
                            ? "border-[#8a5a32] bg-[#f4ede2] ring-2 ring-[#8a5a32]/20"
                            : "border-[#d9cfc1] hover:border-[#8a5a32]/60"
                        )}
                      >
                        <div
                          className={cn(
                            "w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors",
                            isSelected
                              ? "bg-[#8a5a32] text-white"
                              : "bg-[#efe8dd] text-[#8a5a32]"
                          )}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <span className="block font-serif font-medium text-[15px] text-[#1f1b16] leading-tight">
                            {opt.title}
                          </span>
                          <span className="block text-[11px] text-[#6f7a64] mt-0.5 leading-tight">
                            {opt.sub}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {step1Error && (
                  <p role="alert" className="text-xs text-red-700 mt-2.5">
                    {step1Error}
                  </p>
                )}
              </div>

              <button
                type="button"
                disabled={!projectType}
                onClick={handleContinueStep1}
                className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#8a5a32] px-6 py-3.5 text-sm sm:text-base font-semibold text-white shadow-sm transition-colors hover:bg-[#6f4626] disabled:opacity-45 disabled:cursor-not-allowed cursor-pointer"
              >
                <span>Continua</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* PASSO 2 — GIORNO & ORARIO DI ORA IN ORA */}
          {step === 2 && (
            <div className="flex-1 flex flex-col justify-between">
              <div className="space-y-3.5">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-serif text-lg sm:text-xl font-medium text-[#1f1b16]">
                    Quando vuoi venire?
                  </h3>
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#6f7a64] hover:text-[#1f1b16] cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Indietro</span>
                  </button>
                </div>

                <div>
                  <label className={LABEL_CLASS}>
                    <Clock className="w-3.5 h-3.5 inline-block mr-1 text-[#8a5a32]" />
                    Scegli il giorno (Domenica chiuso)
                  </label>
                  <DayChips value={preferredDate} onChange={handleChangeDate} count={8} />
                </div>

                {preferredDate && preferredDate !== "flessibile" ? (
                  <div>
                    <label className={LABEL_CLASS}>Fascia oraria preferita</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {HOUR_SLOTS.map((slot) => {
                        const active = preferredSlot === slot;
                        return (
                          <button
                            key={slot}
                            type="button"
                            aria-pressed={active}
                            onClick={() => {
                              setPreferredSlot(slot);
                              setStep2Error("");
                            }}
                            className={cn(
                              "px-2 py-2 rounded-xl border text-center text-xs font-semibold transition-colors cursor-pointer",
                              active
                                ? "border-[#8a5a32] bg-[#8a5a32] text-white"
                                : "border-[#d9cfc1] bg-white text-[#1f1b16] hover:border-[#8a5a32]/60"
                            )}
                          >
                            {slot}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <div className="rounded-xl border border-dashed border-[#d9cfc1] bg-white/60 px-4 py-3 text-xs text-[#4a443c]">
                    {preferredDate === "flessibile"
                      ? "Perfetto: troveremo insieme giorno e orario più comodi per te."
                      : "Seleziona un giorno qui sopra per scegliere l'orario di ora in ora, oppure scegli «Flessibile»."}
                  </div>
                )}

                {step2Error && (
                  <p role="alert" className="text-xs text-red-700">
                    {step2Error}
                  </p>
                )}
              </div>

              <button
                type="button"
                onClick={handleContinueStep2}
                className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#8a5a32] px-6 py-3.5 text-sm sm:text-base font-semibold text-white shadow-sm transition-colors hover:bg-[#6f4626] cursor-pointer"
              >
                <span>Continua</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* PASSO 3 — TEMPISTICA & MISURE */}
          {step === 3 && (
            <div className="flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-serif text-lg sm:text-xl font-medium text-[#1f1b16]">
                    Tempi e misure del progetto
                  </h3>
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#6f7a64] hover:text-[#1f1b16] cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Indietro</span>
                  </button>
                </div>

                <div>
                  <label className={LABEL_CLASS}>
                    <Clock className="w-3.5 h-3.5 inline-block mr-1 text-[#8a5a32]" />
                    Quando ti serve l&apos;arredo?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {TIMELINE_OPTIONS.map((item) => {
                      const active = timeline === item.id;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          aria-pressed={active}
                          onClick={() => setTimeline(item.id)}
                          className={cn(
                            "p-3 rounded-xl border text-left transition-colors cursor-pointer bg-white",
                            active
                              ? "border-[#8a5a32] bg-[#f4ede2] ring-2 ring-[#8a5a32]/20"
                              : "border-[#d9cfc1] hover:border-[#8a5a32]/50"
                          )}
                        >
                          <div className="text-xs sm:text-sm font-semibold text-[#1f1b16]">
                            {item.label}
                          </div>
                          <div className="text-[11px] text-[#4a443c] mt-0.5">{item.sub}</div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className={LABEL_CLASS}>
                    <FileText className="w-3.5 h-3.5 inline-block mr-1 text-[#8a5a32]" />
                    Hai già le misure o una piantina?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <button
                      type="button"
                      aria-pressed={hasFloorplan === "si"}
                      onClick={() => setHasFloorplan("si")}
                      className={cn(
                        "p-3 rounded-xl border text-left transition-colors cursor-pointer bg-white",
                        hasFloorplan === "si"
                          ? "border-[#8a5a32] bg-[#f4ede2] ring-2 ring-[#8a5a32]/20"
                          : "border-[#d9cfc1] hover:border-[#8a5a32]/50"
                      )}
                    >
                      <div className="text-xs sm:text-sm font-semibold text-[#1f1b16]">
                        Sì, ho piantina o misure
                      </div>
                      <div className="text-[11px] text-[#4a443c] mt-0.5">
                        Puoi portarle con te in showroom
                      </div>
                    </button>
                    <button
                      type="button"
                      aria-pressed={hasFloorplan === "no_serve_rilievo"}
                      onClick={() => setHasFloorplan("no_serve_rilievo")}
                      className={cn(
                        "p-3 rounded-xl border text-left transition-colors cursor-pointer bg-white",
                        hasFloorplan === "no_serve_rilievo"
                          ? "border-[#8a5a32] bg-[#f4ede2] ring-2 ring-[#8a5a32]/20"
                          : "border-[#d9cfc1] hover:border-[#8a5a32]/50"
                      )}
                    >
                      <div className="text-xs sm:text-sm font-semibold text-[#1f1b16]">
                        No, mi serve il rilievo
                      </div>
                      <div className="text-[11px] text-[#4a443c] mt-0.5">
                        Ci pensiamo noi con il laser 3D
                      </div>
                    </button>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={handleContinueStep3}
                className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#8a5a32] px-6 py-3.5 text-sm sm:text-base font-semibold text-white shadow-sm transition-colors hover:bg-[#6f4626] cursor-pointer"
              >
                <span>Continua</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* PASSO 4 — CONTATTI & CONFERMA */}
          {step === 4 && (
            <form onSubmit={handleSubmit} noValidate className="flex-1 flex flex-col justify-between">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-serif text-lg sm:text-xl font-medium text-[#1f1b16]">
                    I tuoi contatti
                  </h3>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#6f7a64] hover:text-[#1f1b16] cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Indietro</span>
                  </button>
                </div>

                {/* Honeypot */}
                <input
                  type="text"
                  name="website"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                <div>
                  <label htmlFor="landing-fullName" className={LABEL_CLASS}>
                    Nome e cognome *
                  </label>
                  <input
                    id="landing-fullName"
                    type="text"
                    autoComplete="name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Es. Maria Rossi"
                    className={INPUT_CLASS}
                  />
                  {fieldErrors.fullName && (
                    <p role="alert" className="text-[11px] text-red-700 mt-0.5">
                      {fieldErrors.fullName}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div>
                    <label htmlFor="landing-phone" className={LABEL_CLASS}>
                      Telefono / WhatsApp *
                    </label>
                    <input
                      id="landing-phone"
                      type="tel"
                      inputMode="numeric"
                      autoComplete="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Es. 333 123 4567"
                      className={INPUT_CLASS}
                    />
                    {fieldErrors.phone && (
                      <p role="alert" className="text-[11px] text-red-700 mt-0.5">
                        {fieldErrors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="landing-email" className={LABEL_CLASS}>
                      Email (facoltativa)
                    </label>
                    <input
                      id="landing-email"
                      type="email"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Es. maria@email.it"
                      className={INPUT_CLASS}
                    />
                    {fieldErrors.email && (
                      <p role="alert" className="text-[11px] text-red-700 mt-0.5">
                        {fieldErrors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="landing-notes" className={LABEL_CLASS}>
                    Note sul progetto (facoltativo)
                  </label>
                  <textarea
                    id="landing-notes"
                    rows={2}
                    maxLength={500}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Es. Nicchia 87 cm, consegna casa a primavera…"
                    className={cn(INPUT_CLASS, "resize-none py-2")}
                  />
                </div>

                <div>
                  <label className="flex items-start gap-2.5 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={privacy}
                      onChange={(e) => setPrivacy(e.target.checked)}
                      className="mt-0.5 w-4 h-4 rounded border-[#d9cfc1] text-[#8a5a32] focus:ring-[#8a5a32]"
                    />
                    <span className="text-[11px] text-[#4a443c] leading-snug">
                      Acconsento al trattamento dei dati per essere ricontattato sulla mia richiesta
                      secondo la Privacy Policy.
                    </span>
                  </label>
                  {fieldErrors.privacy && (
                    <p role="alert" className="text-[11px] text-red-700 mt-0.5">
                      {fieldErrors.privacy}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-3 space-y-2">
                <div className="rounded-xl bg-white border border-[#e3dacb] px-3 py-2 text-[11px] text-[#4a443c] flex items-center justify-between gap-2">
                  <span className="truncate">
                    <strong className="text-[#1f1b16]">{projectLabel}</strong> · {dateSummary}
                  </span>
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="font-semibold text-[#8a5a32] underline underline-offset-2 cursor-pointer shrink-0"
                  >
                    Modifica
                  </button>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#8a5a32] px-6 py-3.5 text-sm sm:text-base font-bold text-white shadow-md transition-colors hover:bg-[#6f4626] disabled:opacity-50 cursor-pointer"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Invio in corso…</span>
                    </>
                  ) : (
                    <>
                      <span>Prenota la consulenza gratuita</span>
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                    </>
                  )}
                </button>

                <p className="flex items-center justify-center gap-1.5 text-[11px] text-[#6f7a64] text-center">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#8a5a32] shrink-0" />
                  <span>Zero impegno · Nessuna pressione d&apos;acquisto</span>
                </p>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Barra sticky mobile disattivata (gestita da MobileBookingSheet su /arredamento-su-misura) */}
      {!inModal && !cardVisible && false && (
        <div
          className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-[#181410]/95 backdrop-blur-md text-[#faf7f2] border-t border-white/15 px-4 pt-3 flex items-center justify-between gap-3"
          style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
        >
          <div className="leading-tight">
            <div className="text-sm font-semibold">Consulenza gratuita in showroom</div>
            <div className="text-[11px] text-[#dfc094]">Progetto 3D senza impegno</div>
          </div>
          <button
            type="button"
            onClick={handleStickyClick}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#8a5a32] text-white text-xs font-bold cursor-pointer hover:bg-[#6f4626] transition-colors shrink-0"
          >
            <span>Prenota</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}
    </>
  );
}
