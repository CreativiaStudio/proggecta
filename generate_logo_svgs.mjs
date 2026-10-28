import fs from 'fs';
import path from 'path';

// Palette ufficiale Proggecta
const COLOR_TEAL = '#044564';
const COLOR_GOLD = '#FEC93B';
const COLOR_WHITE = '#FFFFFF';

/**
 * Genera il path SVG del monogramma geometrico "P"
 * @param {string} frameColor - Colore della struttura esterna (ottanio o bianco)
 * @param {string} innerGoldColor - Colore del riempimento interno della P (oro/ocra)
 */
function getMonogramSvg(frameColor, innerGoldColor = COLOR_GOLD) {
  // viewBox="0 0 84 100"
  return `
    <g class="proggecta-monogram">
      <!-- Struttura Principale P Architettonica / Sedia -->
      <path d="M6 10 C6 6.7 8.7 4 12 4 L54 4 C70.5 4 82 15.5 82 32 C82 48.5 70.5 60 54 60 L38 60 L38 68 L70 68 C72.2 68 74 69.8 74 72 L74 96 C74 98.2 72.2 100 70 100 L62 100 L62 86 L46 86 L46 100 L24 100 L24 96 L24 60 L18 60 L18 100 L6 100 L6 10 Z" fill="${frameColor}" />
      
      <!-- Inserto Dorato Sagomato (Anima della P) -->
      <path d="M24 18 L52 18 C61 18 66 23.5 66 32 C66 40.5 61 46 52 46 L38 46 L38 74 L24 74 Z" fill="${innerGoldColor}" />
      
      <!-- Finestra / Vano Vuoto Inferiore (Taglio trasparente architettura) -->
      <rect x="46" y="68" width="16" height="18" fill="transparent" />
    </g>
  `;
}

// 1. Monogramma Singolo Full Color
const monogramColor = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 104" width="88" height="104" fill="none">
  <!-- Monogramma P Proggecta (Ottanio & Ocra) -->
  <path d="M6 8 C6 4.7 8.7 2 12 2 L56 2 C72.5 2 84 13.5 84 30 C84 46.5 72.5 58 56 58 L38 58 L38 68 L72 68 C74.2 68 76 69.8 76 72 L76 98 C76 100.2 74.2 102 72 102 L64 102 L64 88 L46 88 L46 102 L38 102 L38 74 L24 74 L24 102 L6 102 Z" fill="${COLOR_TEAL}" />
  <path d="M24 16 L54 16 C63 16 68 21.5 68 30 C68 38.5 63 44 54 44 L38 44 L38 74 L24 74 Z" fill="${COLOR_GOLD}" />
  <rect x="46" y="68" width="18" height="20" rx="1" fill="${COLOR_TEAL}" fill-opacity="0.12" />
</svg>`;

// 2. Monogramma Singolo Light (per sfondi scuri)
const monogramLight = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 104" width="88" height="104" fill="none">
  <!-- Monogramma P Proggecta (Bianco Satinato & Ocra) -->
  <path d="M6 8 C6 4.7 8.7 2 12 2 L56 2 C72.5 2 84 13.5 84 30 C84 46.5 72.5 58 56 58 L38 58 L38 68 L72 68 C74.2 68 76 69.8 76 72 L76 98 C76 100.2 74.2 102 72 102 L64 102 L64 88 L46 88 L46 102 L38 102 L38 74 L24 74 L24 102 L6 102 Z" fill="${COLOR_WHITE}" />
  <path d="M24 16 L54 16 C63 16 68 21.5 68 30 C68 38.5 63 44 54 44 L38 44 L38 74 L24 74 Z" fill="${COLOR_GOLD}" />
  <rect x="46" y="68" width="18" height="20" rx="1" fill="${COLOR_WHITE}" fill-opacity="0.15" />
</svg>`;

// 3. Logo Orizzontale per Navbar Scuro / Trasparente (Bianco + Ocra)
const logoHorizontalLight = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 64" width="320" height="64" fill="none">
  <!-- Icona Monogramma Sinistra -->
  <g transform="translate(0, 4) scale(0.54)">
    <path d="M6 8 C6 4.7 8.7 2 12 2 L56 2 C72.5 2 84 13.5 84 30 C84 46.5 72.5 58 56 58 L38 58 L38 68 L72 68 C74.2 68 76 69.8 76 72 L76 98 C76 100.2 74.2 102 72 102 L64 102 L64 88 L46 88 L46 102 L38 102 L38 74 L24 74 L24 102 L6 102 Z" fill="${COLOR_WHITE}" />
    <path d="M24 16 L54 16 C63 16 68 21.5 68 30 C68 38.5 63 44 54 44 L38 44 L38 74 L24 74 Z" fill="${COLOR_GOLD}" />
    <rect x="46" y="68" width="18" height="20" rx="1" fill="${COLOR_WHITE}" fill-opacity="0.15" />
  </g>
  
  <!-- Logotipo PROGGECTA in Font Geometrico Luxury -->
  <text x="64" y="42" font-family="'Inter', 'Montserrat', -apple-system, sans-serif" font-size="28" font-weight="900" letter-spacing="4" fill="${COLOR_WHITE}">PROGGECTA</text>
  <circle cx="304" cy="38" r="3" fill="${COLOR_GOLD}" />
</svg>`;

// 4. Logo Orizzontale Full Color (per sfondi chiari/sabbia)
const logoHorizontalColor = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 64" width="320" height="64" fill="none">
  <!-- Icona Monogramma Sinistra -->
  <g transform="translate(0, 4) scale(0.54)">
    <path d="M6 8 C6 4.7 8.7 2 12 2 L56 2 C72.5 2 84 13.5 84 30 C84 46.5 72.5 58 56 58 L38 58 L38 68 L72 68 C74.2 68 76 69.8 76 72 L76 98 C76 100.2 74.2 102 72 102 L64 102 L64 88 L46 88 L46 102 L38 102 L38 74 L24 74 L24 102 L6 102 Z" fill="${COLOR_TEAL}" />
    <path d="M24 16 L54 16 C63 16 68 21.5 68 30 C68 38.5 63 44 54 44 L38 44 L38 74 L24 74 Z" fill="${COLOR_GOLD}" />
    <rect x="46" y="68" width="18" height="20" rx="1" fill="${COLOR_TEAL}" fill-opacity="0.15" />
  </g>
  
  <!-- Logotipo PROGGECTA in Ottanio Istituzionale -->
  <text x="64" y="42" font-family="'Inter', 'Montserrat', -apple-system, sans-serif" font-size="28" font-weight="900" letter-spacing="4" fill="${COLOR_TEAL}">PROGGECTA</text>
  <circle cx="304" cy="38" r="3" fill="${COLOR_GOLD}" />
</svg>`;

// 5. Logo Verticale / Stacked Full Color
const logoVerticalColor = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 160" width="220" height="160" fill="none">
  <!-- Monogramma Centrato -->
  <g transform="translate(72, 8) scale(0.88)">
    <path d="M6 8 C6 4.7 8.7 2 12 2 L56 2 C72.5 2 84 13.5 84 30 C84 46.5 72.5 58 56 58 L38 58 L38 68 L72 68 C74.2 68 76 69.8 76 72 L76 98 C76 100.2 74.2 102 72 102 L64 102 L64 88 L46 88 L46 102 L38 102 L38 74 L24 74 L24 102 L6 102 Z" fill="${COLOR_TEAL}" />
    <path d="M24 16 L54 16 C63 16 68 21.5 68 30 C68 38.5 63 44 54 44 L38 44 L38 74 L24 74 Z" fill="${COLOR_GOLD}" />
    <rect x="46" y="68" width="18" height="20" rx="1" fill="${COLOR_TEAL}" fill-opacity="0.15" />
  </g>
  <text x="110" y="132" text-anchor="middle" font-family="'Inter', -apple-system, sans-serif" font-size="20" font-weight="900" letter-spacing="4" fill="${COLOR_TEAL}">PROGGECTA</text>
  <text x="110" y="150" text-anchor="middle" font-family="'Inter', -apple-system, sans-serif" font-size="9" font-weight="600" letter-spacing="2" fill="#6B7280">STUDIO DI PROGETTAZIONE</text>
</svg>`;

// 6. Logo Verticale / Stacked Light
const logoVerticalLight = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 160" width="220" height="160" fill="none">
  <!-- Monogramma Centrato -->
  <g transform="translate(72, 8) scale(0.88)">
    <path d="M6 8 C6 4.7 8.7 2 12 2 L56 2 C72.5 2 84 13.5 84 30 C84 46.5 72.5 58 56 58 L38 58 L38 68 L72 68 C74.2 68 76 69.8 76 72 L76 98 C76 100.2 74.2 102 72 102 L64 102 L64 88 L46 88 L46 102 L38 102 L38 74 L24 74 L24 102 L6 102 Z" fill="${COLOR_WHITE}" />
    <path d="M24 16 L54 16 C63 16 68 21.5 68 30 C68 38.5 63 44 54 44 L38 44 L38 74 L24 74 Z" fill="${COLOR_GOLD}" />
    <rect x="46" y="68" width="18" height="20" rx="1" fill="${COLOR_WHITE}" fill-opacity="0.15" />
  </g>
  <text x="110" y="132" text-anchor="middle" font-family="'Inter', -apple-system, sans-serif" font-size="20" font-weight="900" letter-spacing="4" fill="${COLOR_WHITE}">PROGGECTA</text>
  <text x="110" y="150" text-anchor="middle" font-family="'Inter', -apple-system, sans-serif" font-size="9" font-weight="600" letter-spacing="2" fill="#D9CFC1">STUDIO DI PROGETTAZIONE</text>
</svg>`;

const outputDir = 'c:/Users/mario/Progetti Antigravity/Proggecta/public/media/logos';

fs.writeFileSync(path.join(outputDir, 'proggecta-monogram-color.svg'), monogramColor.trim());
fs.writeFileSync(path.join(outputDir, 'proggecta-monogram-light.svg'), monogramLight.trim());
fs.writeFileSync(path.join(outputDir, 'proggecta-horizontal-light.svg'), logoHorizontalLight.trim());
fs.writeFileSync(path.join(outputDir, 'proggecta-horizontal-color.svg'), logoHorizontalColor.trim());
fs.writeFileSync(path.join(outputDir, 'proggecta-vertical-color.svg'), logoVerticalColor.trim());
fs.writeFileSync(path.join(outputDir, 'proggecta-vertical-light.svg'), logoVerticalLight.trim());

console.log("✅ Generati 6 asset SVG declinati di Proggecta in public/media/logos!");
