import { z } from "zod";

export const ambienti = ["cucina", "notte", "cameretta", "living", "completo"] as const;

export const bookingSchema = z.object({
  formType: z.literal("showroom"),
  ambiente: z.enum(ambienti),
  preferredDate: z.string().min(1), // "YYYY-MM-DD" oppure "flessibile"
  preferredSlot: z.enum(["mattina", "pomeriggio"]),
  fullName: z.string().trim().min(3, "Scrivi nome e cognome, così sappiamo chi cercare."),
  phone: z
    .string()
    .trim()
    .transform((v) => v.replace(/[\s.\-()]/g, ""))
    .refine((v) => /^(\+39|0039)?3\d{8,9}$|^(\+39|0039)?0\d{5,10}$/.test(v), {
      message: "Controlla il numero: ci serve per confermarti l'appuntamento.",
    }),
  email: z.string().trim().email("Sembra che manchi qualcosa nell'email."),
  notes: z.string().max(1000).optional(),
  privacy: z.literal(true, { errorMap: () => ({ message: "Per ricontattarti abbiamo bisogno del tuo consenso." }) }),
  marketing: z.boolean().default(false),
  // anti-spam
  website: z.string().max(0).optional(), // honeypot: deve restare vuoto
  startedAt: z.number(), // ms; invio < 3 s dall'inizio = bot
  // tracciamento
  eventId: z.string().uuid(),
  sourcePath: z.string(),
  attribution: z.record(z.string()).optional(),
});

export type BookingInput = z.infer<typeof bookingSchema>;

export const contractSchema = z.object({
  formType: z.literal("contract"),
  company: z.string().trim().min(2, "Inserisci il nome dell'azienda o studio."),
  fullName: z.string().trim().min(3, "Inserisci il tuo nome e cognome."),
  role: z.string().trim().min(2, "Indica il tuo ruolo (es. Architetto, Titolare)."),
  businessType: z.enum(["hotel", "bb", "ristorante", "retail", "uffici", "residenziale_multiplo", "altro"]),
  size: z.string().optional(),
  timing: z.string().optional(),
  phone: z
    .string()
    .trim()
    .transform((v) => v.replace(/[\s.\-()]/g, ""))
    .refine((v) => /^(\+39|0039)?3\d{8,9}$|^(\+39|0039)?0\d{5,10}$/.test(v), {
      message: "Controlla il numero di telefono.",
    }),
  email: z.string().trim().email("Inserisci un'email aziendale valida."),
  notes: z.string().max(2000).optional(),
  privacy: z.literal(true, { errorMap: () => ({ message: "Per ricontattarti abbiamo bisogno del tuo consenso." }) }),
  marketing: z.boolean().default(false),
  website: z.string().max(0).optional(),
  startedAt: z.number(),
  eventId: z.string().uuid(),
  sourcePath: z.string(),
  attribution: z.record(z.string()).optional(),
});

export type ContractInput = z.infer<typeof contractSchema>;
