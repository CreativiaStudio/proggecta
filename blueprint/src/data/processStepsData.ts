import type { ProcessStep } from "./types";

export const processIntro = {
  eyebrow: "Il Metodo Proggecta",
  title: "Dal primo caffè all'ultima vite, un solo metodo. Nessuna sorpresa.",
  body: "Ogni progetto segue gli stessi quattro passaggi, sempre con lo stesso interior designer. Sai cosa succede, quando succede e cosa riceverai prima di firmare.",
};

export const processStepsData: ProcessStep[] = [
  {
    step: 1,
    slug: "ascolto",
    icon: "Ear",
    title: "Ascolto e studio degli spazi",
    short:
      "Ci sediamo con te in showroom: come vivi la casa, chi la abita, cosa ti manca oggi. Poi studiamo la piantina.",
    long: "Il progetto non parte dai mobili, parte da te. Quante persone cucinano, dove si appoggia la spesa, quanti vestiti devono entrare nell'armadio, quanto crescerà la cameretta. Con la tua piantina (o anche solo con qualche foto e misura indicativa) l'interior designer ti propone le prime soluzioni e ti accompagna tra gli ambienti dello showroom per farti toccare materiali e finiture.",
    duration: "60–90 minuti in showroom",
    deliverable: "Prima ipotesi distributiva e una forbice di spesa chiara",
  },
  {
    step: 2,
    slug: "rilievo-laser",
    icon: "ScanLine",
    title: "Rilievo laser millimetrico",
    short:
      "Veniamo a casa tua e misuriamo tutto con il distanziometro laser: pareti fuori squadro, nicchie, pilastri, impianti.",
    long: "Le case vere non sono mai in squadra. Un errore di un centimetro diventa una fuga storta, un'anta che non chiude, un elettrodomestico che non entra. Per questo rileviamo ogni parete, altezza, angolo e attacco (acqua, gas, prese, scarichi) con strumenti laser, e registriamo tutto in un rilievo tecnico che diventa la base del progetto esecutivo.",
    duration: "1–2 ore a domicilio",
    deliverable: "Rilievo tecnico completo di misure e impianti",
  },
  {
    step: 3,
    slug: "render-3d",
    icon: "Box",
    title: "Render 3D fotorealistico",
    short:
      "Vedi la tua casa finita prima che esista: colori, materiali, luci. Modifichi tutto finché non è perfetta.",
    long: "Trasformiamo il rilievo in un modello 3D fotorealistico della tua casa, con le finiture reali che hai scelto in showroom. Puoi cambiare un colore, spostare un'isola, provare un top diverso: lo vedi subito. Si va in produzione solo quando il render ti convince al 100%, insieme a un preventivo dettagliato voce per voce.",
    duration: "Pochi giorni dalla consulenza",
    deliverable: "Render fotorealistici + preventivo dettagliato e trasparente",
  },
  {
    step: 4,
    slug: "montaggio",
    icon: "Hammer",
    title: "Consegna e montaggio a regola d'arte",
    short:
      "I nostri montatori consegnano, montano e regolano tutto. Ti riconsegnamo la casa pulita, pronta da vivere.",
    long: "Consegna programmata con data concordata, montaggio eseguito dalla nostra squadra (non da ditte esterne pagate a pezzo), allacciamento degli elettrodomestici, regolazione millimetrica di ante e cassetti. Alla fine facciamo il controllo finale insieme a te e lasciamo l'ambiente pulito.",
    duration: "Data concordata in fase d'ordine",
    deliverable: "Ambiente montato, regolato e collaudato con te",
  },
];
