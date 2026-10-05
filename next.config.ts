import type { NextConfig } from "next";

const NEW = "https://www.proggecta.it";
const CIESSE_HOST = "(?:www\\.)?ciessehome\\.it";

// Mappatura specifica (da completare con l'export degli URL storici)
const ciesseMap: Array<[string, string]> = [
  ["/", "/brand/ciesse"],
  ["/contatti", "/showroom-contatti"],
  ["/chi-siamo", "/brand/ciesse"],
  ["/cucine", "/ambienti/cucine-su-misura"],
];

const nextConfig: NextConfig = {
  images: { formats: ["image/avif", "image/webp"] },
  async redirects() {
    return [
      ...ciesseMap.map(([source, dest]) => ({
        source,
        has: [{ type: "host" as const, value: CIESSE_HOST }],
        destination: `${NEW}${dest}`,
        statusCode: 301 as const,
      })),
      // Catch-all Ciesse: tutto il resto -> pagina ponte
      {
        source: "/:path*",
        has: [{ type: "host" as const, value: CIESSE_HOST }],
        destination: `${NEW}/brand/ciesse`,
        statusCode: 301 as const,
      },
      // Dominio legacy: direttamente su Proggecta, senza catene di redirect
      {
        source: "/:path*",
        has: [{ type: "host" as const, value: "(?:www\\.)?ciessecucine\\.com" }],
        destination: `${NEW}/brand/ciesse`,
        statusCode: 301 as const,
      },
      {
        source: "/:path*",
        has: [{ type: "host" as const, value: "(?:www\\.)?proggecta\\.com" }],
        destination: `${NEW}/:path*`,
        statusCode: 301 as const,
      },
      // Alias interni
      { source: "/qualita-materiali", destination: "/qualita-costruttiva", statusCode: 301 as const },
    ];
  },
};

export default nextConfig;
