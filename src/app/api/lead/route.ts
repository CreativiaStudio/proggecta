import { NextRequest, NextResponse } from "next/server";
import { bookingSchema, contractSchema } from "@/lib/leadSchema";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.json();

    const formType = rawBody.formType;
    let validatedData: any;

    if (formType === "contract") {
      const parsed = contractSchema.safeParse(rawBody);
      if (!parsed.success) {
        return NextResponse.json(
          { ok: false, errors: parsed.error.flatten().fieldErrors },
          { status: 400 }
        );
      }
      validatedData = parsed.data;
    } else {
      const parsed = bookingSchema.safeParse(rawBody);
      if (!parsed.success) {
        return NextResponse.json(
          { ok: false, errors: parsed.error.flatten().fieldErrors },
          { status: 400 }
        );
      }
      validatedData = parsed.data;
    }

    // 2. Anti-spam: honeypot o invio compilato in meno di 3 secondi
    const isBot =
      Boolean(validatedData.website && validatedData.website.length > 0) ||
      Date.now() - (validatedData.startedAt || 0) < 3000;

    if (isBot) {
      // Risposta silenziosa positiva per non allarmare o istruire il bot
      return NextResponse.json({ ok: true, spam_filtered: true });
    }

    // 3. Normalizzazione telefono e nome
    let phoneClean = validatedData.phone.replace(/[\s.\-()]/g, "");
    if (!phoneClean.startsWith("+")) {
      if (phoneClean.startsWith("0039")) {
        phoneClean = "+" + phoneClean.slice(2);
      } else if (phoneClean.startsWith("39")) {
        phoneClean = "+" + phoneClean;
      } else {
        phoneClean = "+39" + phoneClean;
      }
    }

    const nameParts = validatedData.fullName.trim().split(/\s+/);
    const fn = nameParts[0] || "";
    const ln = nameParts.slice(1).join(" ") || fn;

    // 4. Client headers e cookies
    const clientIp =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "";
    const userAgent = req.headers.get("user-agent") || "";
    const fbp = req.cookies.get("_fbp")?.value || "";
    const fbc = req.cookies.get("_fbc")?.value || "";

    const webhookUrl = process.env.N8N_LEAD_WEBHOOK_URL;
    const webhookSecret = process.env.N8N_WEBHOOK_SECRET || "";

    const payload = {
      event_id: validatedData.eventId,
      event_name: "Lead",
      event_time: Math.floor(Date.now() / 1000),
      event_source_url: validatedData.sourcePath,
      form_type: validatedData.formType,
      user_data: {
        fn,
        ln,
        em: validatedData.email,
        ph: phoneClean,
        client_ip_address: clientIp,
        client_user_agent: userAgent,
        fbp,
        fbc,
      },
      custom_data: {
        ambiente: validatedData.ambiente || "contract",
        preferred_date: validatedData.preferredDate || "",
        preferred_slot: validatedData.preferredSlot || "",
        company: validatedData.company || "",
        role: validatedData.role || "",
        business_type: validatedData.businessType || "",
        notes: validatedData.notes || "",
        source_path: validatedData.sourcePath,
      },
      attribution: validatedData.attribution || {},
      consent: {
        privacy: validatedData.privacy,
        marketing: validatedData.marketing,
        timestamp: new Date().toISOString(),
      },
    };

    if (webhookUrl) {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 8000);

      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-webhook-secret": webhookSecret,
          },
          body: JSON.stringify(payload),
          signal: controller.signal,
        });
      } catch (webhookErr) {
        console.error("Webhook forwarding error:", webhookErr);
      } finally {
        clearTimeout(timeoutId);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error("API /api/lead error:", err);
    return NextResponse.json(
      { ok: false, message: "Errore interno elaborazione lead" },
      { status: 500 }
    );
  }
}
