"use client";

declare global {
  interface Window {
    dataLayer?: any[];
  }
}

export function pushDataLayer(event: string, payload: Record<string, any> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event,
    ...payload,
    timestamp: Date.now(),
  });
}

export function trackFormStart(formType: string) {
  pushDataLayer("form_start", { form_type: formType });
}

export function trackFormStep(formType: string, step: number) {
  pushDataLayer("form_step", { form_type: formType, step });
}

export function trackLead(params: {
  formType: string;
  ambiente?: string;
  eventId: string;
  email: string;
  phone: string;
}) {
  // Evento primario Google Ads + Meta Pixel con deduplicazione event_id
  pushDataLayer("generate_lead", {
    form_type: params.formType,
    ambiente: params.ambiente || "generale",
    event_id: params.eventId,
    user_data: {
      email: params.email,
      phone_number: params.phone,
    },
  });

  // Evento di retro-compatibilità per trigger legacy
  pushDataLayer("custom_lead", {
    eventId: params.eventId,
    form_type: params.formType,
  });
}

export function trackWhatsAppClick(placement: string) {
  pushDataLayer("whatsapp_click", { placement });
}

export function trackPhoneClick(placement: string) {
  pushDataLayer("phone_click", { placement });
}
