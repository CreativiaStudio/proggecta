import { NextRequest, NextResponse } from "next/server";
import { bookingSchema, contractSchema, customLandingSchema } from "@/lib/leadSchema";
import { supabaseAdmin } from "@/lib/supabase";
import { sendLeadNotificationEmail } from "@/lib/email";

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
    } else if (formType === "landing_su_misura") {
      const parsed = customLandingSchema.safeParse(rawBody);
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

    const nameParts = (validatedData.fullName || "").trim().split(/\s+/);
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

    const attribution = validatedData.attribution || {};
    const projectType = validatedData.projectType || validatedData.ambiente || "completo";

    // 5. SALVATAGGIO SU SUPABASE (Lead Database)
    let supabaseSaved = false;
    let savedLeadId: string | undefined = undefined;

    try {
      const insertPayload = {
        full_name: validatedData.fullName,
        phone: phoneClean,
        email: validatedData.email || null,
        city: validatedData.city || null,
        project_type: projectType,
        timeline: validatedData.timeline || null,
        has_floorplan: validatedData.hasFloorplan || null,
        notes: validatedData.notes || (validatedData.company ? `Azienda: ${validatedData.company} (${validatedData.role || ""})` : null),
        preferred_date: validatedData.preferredDate && validatedData.preferredDate !== "flessibile" ? validatedData.preferredDate : null,
        preferred_slot: validatedData.preferredSlot || null,
        source_path: validatedData.sourcePath,
        utm_source: attribution.utm_source || null,
        utm_medium: attribution.utm_medium || null,
        utm_campaign: attribution.utm_campaign || null,
        utm_content: attribution.utm_content || null,
        utm_term: attribution.utm_term || null,
        gclid: attribution.gclid || null,
        fbclid: attribution.fbclid || null,
        status: "nuovo",
      };

      if (process.env.SUPABASE_SERVICE_ROLE_KEY && process.env.SUPABASE_SERVICE_ROLE_KEY.length > 0) {
        const { data: dbData, error: dbError } = await supabaseAdmin
          .from("leads")
          .insert(insertPayload)
          .select("id")
          .single();

        if (dbError) {
          console.error("Errore salvataggio Supabase:", dbError);
        } else {
          supabaseSaved = true;
          savedLeadId = dbData?.id;
        }
      } else {
        const { error: dbError } = await supabaseAdmin
          .from("leads")
          .insert(insertPayload);

        if (dbError) {
          console.error("Errore salvataggio Supabase:", dbError);
        } else {
          supabaseSaved = true;
        }
      }
    } catch (dbErr) {
      console.error("Eccezione durante salvataggio Supabase:", dbErr);
    }

    // 6. INVIO NOTIFICA EMAIL IMMEDIATA VIA RESEND
    try {
      await sendLeadNotificationEmail({
        leadId: savedLeadId,
        fullName: validatedData.fullName,
        phone: phoneClean,
        email: validatedData.email,
        city: validatedData.city,
        projectType,
        timeline: validatedData.timeline,
        hasFloorplan: validatedData.hasFloorplan,
        notes: validatedData.notes,
        preferredDate: validatedData.preferredDate,
        preferredSlot: validatedData.preferredSlot,
        sourcePath: validatedData.sourcePath,
      });
    } catch (emailErr) {
      console.error("Errore invio email notifica Resend:", emailErr);
    }

    // 7. INOLTRO AL WEBHOOK N8N (per automazioni WhatsApp & Meta CAPI)
    const webhookUrl =
      process.env.N8N_LEAD_WEBHOOK_URL ||
      "https://n8n.creativiastudio.com/webhook/proggecta-lead-09871c29";
    const webhookSecret =
      process.env.N8N_WEBHOOK_SECRET || "proggecta_lead_secret_2026";

    if (webhookUrl) {
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
          lead_id: savedLeadId,
          ambiente: projectType,
          project_type: projectType,
          timeline: validatedData.timeline || "",
          has_floorplan: validatedData.hasFloorplan || "",
          city: validatedData.city || "",
          preferred_date: validatedData.preferredDate || "",
          preferred_slot: validatedData.preferredSlot || "",
          company: validatedData.company || "",
          role: validatedData.role || "",
          business_type: validatedData.businessType || "",
          notes: validatedData.notes || "",
          source_path: validatedData.sourcePath,
        },
        attribution,
        consent: {
          privacy: validatedData.privacy,
          marketing: validatedData.marketing,
          timestamp: new Date().toISOString(),
        },
      };

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 6000);

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
        console.warn("N8N Webhook non raggiungibile (il lead è comunque salvato a DB):", webhookErr);
      } finally {
        clearTimeout(timeoutId);
      }
    }

    return NextResponse.json({ ok: true, leadId: savedLeadId, supabase: supabaseSaved });
  } catch (err: any) {
    console.error("API /api/lead error:", err);
    return NextResponse.json(
      { ok: false, message: "Errore interno elaborazione lead" },
      { status: 500 }
    );
  }
}
