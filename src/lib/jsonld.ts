import { siteConfig } from "@/data/siteConfig";

export function getStoreJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FurnitureStore",
    "@id": `${siteConfig.url}/#store`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    telephone: siteConfig.contacts.phone,
    email: siteConfig.contacts.email,
    priceRange: "€€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.province,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.address.lat,
      longitude: siteConfig.address.lng,
    },
    openingHoursSpecification: siteConfig.openingHours.flatMap((oh) =>
      oh.slots.map((s) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ][oh.day],
        opens: s.open,
        closes: s.close,
      }))
    ),
    areaServed: siteConfig.serviceArea.map((city) => ({
      "@type": "AdministrativeArea",
      name: city,
    })),
  };
}

export function getBreadcrumbJsonLd(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${siteConfig.url}${item.url}`,
    })),
  };
}

export function getFaqJsonLd(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
