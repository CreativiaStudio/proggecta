import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
export const resend = resendApiKey ? new Resend(resendApiKey) : null;

interface SendLeadNotificationParams {
  leadId?: string;
  fullName: string;
  phone: string;
  email?: string;
  city?: string;
  projectType: string;
  timeline?: string;
  hasFloorplan?: string;
  notes?: string;
  preferredDate?: string;
  preferredSlot?: string;
  sourcePath?: string;
}

const PROJECT_TYPE_LABELS: Record<string, string> = {
  casa_completa: "🏠 Tutta la Casa / Progetto Globale",
  cucina: "🍳 Cucina di Design su Misura",
  armadi_notte: "🚪 Armadiature Sartoriali al Millimetro & Zona Notte",
  living_tavoli: "🛋️ Zona Living, Tavoli & Divani",
  su_misura_singolo: "📐 Singolo Elemento / Fuori Misura con Falegnameria",
  cameretta: "🛏️ Cameretta Ragazzi",
  completo: "🏠 Arredo Completo",
  notte: "🚪 Zona Notte",
  living: "🛋️ Living & Zona Giorno",
};

const TIMELINE_LABELS: Record<string, string> = {
  urgente_30_60: "⚡ Urgente (Entro 30–60 giorni)",
  "3_6_mesi": "🗓️ Medio termine (Entro 3–6 mesi)",
  esplorativo: "🔍 Sto raccogliendo idee e preventivi",
};

export async function sendLeadNotificationEmail(data: SendLeadNotificationParams) {
  if (!resend) {
    console.warn("Resend non configurato: variabile RESEND_API_KEY mancante.");
    return { ok: false, message: "Resend not configured" };
  }

  const to = process.env.NOTIFICATION_EMAIL_TO || "info@proggecta.it";
  const bcc = process.env.NOTIFICATION_EMAIL_BCC || "sviluppo@creativiastudio.com";
  const from = process.env.RESEND_FROM_EMAIL || "Proggecta Notifiche <onboarding@resend.dev>";

  const projectLabel = PROJECT_TYPE_LABELS[data.projectType] || data.projectType;
  const timelineLabel = data.timeline ? TIMELINE_LABELS[data.timeline] || data.timeline : "Non specificato";

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #faf7f2; color: #1f1b16; margin: 0; padding: 24px; }
    .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; border: 1px solid #d9cfc1; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.05); }
    .header { background: #1f1b16; color: #faf7f2; padding: 24px 32px; }
    .badge { display: inline-block; background: #8a5a32; color: #ffffff; font-size: 12px; font-weight: bold; padding: 4px 10px; border-radius: 999px; text-transform: uppercase; margin-bottom: 8px; }
    .title { margin: 0; font-size: 22px; font-weight: 700; }
    .content { padding: 32px; }
    .field { margin-bottom: 20px; }
    .label { font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #6f7a64; font-weight: 700; margin-bottom: 4px; }
    .value { font-size: 16px; font-weight: 600; color: #1f1b16; }
    .call-btn { display: inline-block; background: #8a5a32; color: #ffffff !important; text-decoration: none; padding: 14px 28px; border-radius: 10px; font-weight: 700; font-size: 16px; margin-top: 16px; }
    .wa-btn { display: inline-block; background: #128c4a; color: #ffffff !important; text-decoration: none; padding: 14px 28px; border-radius: 10px; font-weight: 700; font-size: 16px; margin-top: 16px; margin-left: 8px; }
    .footer { background: #efe8dd; padding: 16px 32px; font-size: 13px; color: #4a443c; text-align: center; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <span class="badge">Nuovo Contatto Showroom</span>
      <h1 class="title">Richiesta Consulenza: ${data.fullName}</h1>
    </div>
    <div class="content">
      <div class="field">
        <div class="label">Cosa desidera realizzare</div>
        <div class="value" style="color: #8a5a32; font-size: 18px;">${projectLabel}</div>
      </div>
      
      <div class="field">
        <div class="label">Recapito Telefonico</div>
        <div class="value" style="font-size: 20px;">
          <a href="tel:${data.phone}" style="color: #1f1b16; text-decoration: none;">📞 ${data.phone}</a>
        </div>
      </div>

      ${data.email ? `
      <div class="field">
        <div class="label">Email</div>
        <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
      </div>` : ""}

      ${data.city ? `
      <div class="field">
        <div class="label">Città / Località Immobile</div>
        <div class="value">📍 ${data.city}</div>
      </div>` : ""}

      <div class="field">
        <div class="label">Tempistica del Cantiere / Acquisto</div>
        <div class="value">${timelineLabel}</div>
      </div>

      ${data.hasFloorplan ? `
      <div class="field">
        <div class="label">Disponibilità Piantina / Misure</div>
        <div class="value">${data.hasFloorplan === "si" ? "✅ Ha già una piantina o misure" : "📐 Serve il rilievo laser in cantiere"}</div>
      </div>` : ""}

      ${data.preferredDate && data.preferredDate !== "flessibile" ? `
      <div class="field">
        <div class="label">Giorno & Fascia Preferita per Showroom</div>
        <div class="value">📅 ${data.preferredDate} (${data.preferredSlot || "Non specificata"})</div>
      </div>` : ""}

      ${data.notes ? `
      <div class="field">
        <div class="label">Note del Cliente</div>
        <div class="value" style="background: #faf7f2; padding: 12px; border-radius: 8px; border: 1px dashed #d9cfc1;">${data.notes}</div>
      </div>` : ""}

      <div style="margin-top: 24px; text-align: center;">
        <a href="tel:${data.phone}" class="call-btn">Chiama Subito</a>
        <a href="https://wa.me/${data.phone.replace(/[^0-9]/g, "")}" class="wa-btn">Scrivi su WhatsApp</a>
      </div>
    </div>
    <div class="footer">
      Origine: ${data.sourcePath || "/arredamento-su-misura"} • Notifica inviata in tempo reale da Proggecta Lead Engine
    </div>
  </div>
</body>
</html>
  `;

  try {
    // Prova prima con destinatario principale e copia di sviluppo
    const sendParams: any = {
      from,
      to: [to],
      subject: `🔥 Nuovo Contatto Proggecta: ${data.fullName} (${projectLabel})`,
      html,
    };

    if (bcc && from !== "onboarding@resend.dev") {
      sendParams.bcc = [bcc];
    }

    let result = await resend.emails.send(sendParams);

    // Se il dominio non è ancora verificato e Resend blocca il BCC in modalità test, ritenta solo al destinatario dell'account
    if (result.error && result.error.name === "validation_error" && bcc) {
      console.warn("Resend in modalità test: invio diretto solo all'account proprietario", to);
      result = await resend.emails.send({
        from,
        to: [to],
        subject: `🔥 Nuovo Contatto Proggecta: ${data.fullName} (${projectLabel})`,
        html,
      });
    }

    if (result.error) {
      console.error("Errore risposta Resend:", result.error);
      return { ok: false, error: result.error.message };
    }

    return { ok: true, result };
  } catch (err: any) {
    console.error("Errore invio email Resend:", err);
    return { ok: false, error: err.message };
  }
}
