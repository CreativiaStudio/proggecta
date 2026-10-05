"use client";

const ATTR_KEY = "pg_attr";
const EXPIRY_DAYS = 90;

export interface AttributionData {
  gclid?: string;
  gbraid?: string;
  wbraid?: string;
  fbclid?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  landing_page?: string;
  referrer?: string;
  first_touch_at?: string;
  timestamp?: number;
  [key: string]: string | number | undefined;
}

export function initAttribution() {
  if (typeof window === "undefined") return;

  try {
    const urlParams = new URLSearchParams(window.location.search);
    const keys = [
      "gclid",
      "gbraid",
      "wbraid",
      "fbclid",
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_term",
      "utm_content",
    ];

    let hasNewParams = false;
    const newParams: Record<string, string> = {};

    keys.forEach((k) => {
      const val = urlParams.get(k);
      if (val) {
        newParams[k] = val;
        hasNewParams = true;
      }
    });

    const existingRaw = localStorage.getItem(ATTR_KEY);
    let existingData: AttributionData = {};

    if (existingRaw) {
      try {
        existingData = JSON.parse(existingRaw);
      } catch (e) {
        existingData = {};
      }
    }

    if (hasNewParams || !existingData.first_touch_at) {
      const updated: AttributionData = {
        ...existingData,
        ...newParams,
        landing_page: window.location.pathname,
        referrer: document.referrer || "direct",
        first_touch_at: existingData.first_touch_at || new Date().toISOString(),
        timestamp: Date.now(),
      };
      localStorage.setItem(ATTR_KEY, JSON.stringify(updated));
    }
  } catch (err) {
    console.warn("Could not initialize attribution:", err);
  }
}

export function getAttribution(): Record<string, string> {
  if (typeof window === "undefined") return {};

  try {
    const raw = localStorage.getItem(ATTR_KEY);
    if (!raw) return {};

    const data: AttributionData = JSON.parse(raw);
    const result: Record<string, string> = {};

    Object.entries(data).forEach(([k, v]) => {
      if (typeof v === "string" && v) {
        result[k] = v;
      }
    });

    return result;
  } catch (err) {
    return {};
  }
}
