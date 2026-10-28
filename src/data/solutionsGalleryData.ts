import type { ImageAsset } from "./types";

export type SolutionCategory =
  | "cucine"
  | "open-space"
  | "pareti-attrezzate"
  | "notte"
  | "sedie-accessori";

export interface SolutionItem {
  id: string;
  title: string;
  category: SolutionCategory;
  categoryLabel: string;
  description: string;
  tags: string[];
  image: ImageAsset;
  /** Le card in evidenza occupano 2 colonne nella bento grid */
  featured: boolean;
  /** Punto focale per il ritaglio delle foto panoramiche (CSS object-position) */
  objectPosition?: string;
}

export interface SolutionFilter {
  id: "tutte" | SolutionCategory;
  label: string;
  highlight?: boolean;
}

export const solutionFilters: SolutionFilter[] = [
  { id: "tutte", label: "Tutte le soluzioni" },
  { id: "cucine", label: "Cucine sartoriali", highlight: true },
  { id: "open-space", label: "Open space & Living" },
  { id: "pareti-attrezzate", label: "Pareti attrezzate" },
  { id: "notte", label: "Zona notte & Cabine" },
  { id: "sedie-accessori", label: "Tavoli, Sedie & Accessori" },
];

const PROGGECTA = "© Proggecta Selection";

export const solutionsGalleryData: SolutionItem[] = [
  // ───────────── CUCINE SARTORIALI ─────────────
  {
    id: "cucina-isola-boiserie",
    title: "Isola scultorea e boiserie cannettata",
    category: "cucine",
    categoryLabel: "Cucine sartoriali",
    description:
      "Un'isola monolitica con cascata in marmo scuro venato, abbracciata da boiserie cannettate in noce. Il vano a giorno con retroilluminazione LED e fondo in pietra trasforma il piano di lavoro in una scena: ogni pentola di rame, ogni libro diventa parte del progetto. Tutto su misura, millimetro per millimetro.",
    tags: ["Scocca multistrato", "Marmo nero venato", "Boiserie cannettata", "LED 3000K"],
    image: {
      src: "/media/hero/hero-1.jpg",
      alt: "Cucina sartoriale con isola in marmo scuro e boiserie cannettata in noce",
      width: 1376,
      height: 768,
      credit: PROGGECTA,
    },
    featured: true,
  },
  {
    id: "cucina-colonne-cantina",
    title: "Colonne a scomparsa e cantina vini a vista",
    category: "cucine",
    categoryLabel: "Cucine sartoriali",
    description:
      "La cantina in vetro e bronzo, illuminata a LED caldo, diventa il cuore scenografico della cucina. Colonne a tutta altezza con forni a incasso, nicchia attrezzata con paraschizzi in marmo e una sospensione lineare in ottone che disegna la penisola in pietra: ogni funzione c'è, nessuna è a vista se non vuoi.",
    tags: ["Colonne a scomparsa", "Cantina vini", "Finiture marmo/quarzo", "Maniglie ottone"],
    image: {
      src: "/media/hero/hero-4.jpg",
      alt: "Cucina sartoriale con cantina vini a vista, colonne in noce e penisola scultorea in marmo",
      width: 1376,
      height: 768,
      credit: PROGGECTA,
    },
    featured: true,
  },
  {
    id: "cucina-rovere-rete",
    title: "Rovere nodato e colonne in rete metallica",
    category: "cucine",
    categoryLabel: "Cucine sartoriali",
    description:
      "Il calore del rovere nodato incontra il carattere industriale della rete metallica nera. Colonne con forno a incasso, maniglie verticali e un tavolo in massello che prolunga la cucina verso la zona pranzo: una composizione materica, pensata per chi vive la cucina tutti i giorni.",
    tags: ["Rovere nodato", "Rete metallica", "Forno a colonna", "Tavolo in massello"],
    image: {
      src: "/media/ambienti/notte/hero.jpg",
      alt: "Cucina in rovere nodato con colonne in rete metallica nera e tavolo in legno",
      width: 1600,
      height: 1066,
    },
    featured: false,
  },
  {
    id: "cucina-noce-lineare",
    title: "Cucina lineare in noce con pensili a giorno",
    category: "cucine",
    categoryLabel: "Cucine sartoriali",
    description:
      "Linee pulite e contrasto caldo: basi in noce, top scuro e pensili a giorno che alleggeriscono la parete e fanno spazio agli oggetti che ami. Una soluzione elegante anche dove i metri sono pochi, perché ogni modulo viene tagliato sulle tue misure reali.",
    tags: ["Noce", "Pensili a giorno", "Top in quarzo", "Su misura"],
    image: {
      src: "/media/brand/materiali-pannelli/hero.jpg",
      alt: "Cucina lineare in noce con pensili a giorno e colonna forno",
      width: 1600,
      height: 1066,
    },
    featured: false,
  },
  {
    id: "cucina-classica-salvia",
    title: "Cucina classica in laccato salvia",
    category: "cucine",
    categoryLabel: "Cucine sartoriali",
    description:
      "Tradizione rivisitata con eleganza: ante a telaio in laccato verde salvia, maniglie in ottone anticato e un forno d'epoca dai dettagli dorati. Un'atmosfera da casa di famiglia, costruita con tecnologie e solidità contemporanee.",
    tags: ["Laccato opaco", "Ante a telaio", "Ottone anticato", "Forno retrò"],
    image: {
      src: "/media/ambienti/completo/hero.jpg",
      alt: "Cucina classica in laccato verde salvia con forno d'epoca e maniglie in ottone",
      width: 1600,
      height: 1066,
    },
    featured: false,
  },
  {
    id: "cucina-elettrodomestici",
    title: "Forno a colonna integrato nel progetto",
    category: "cucine",
    categoryLabel: "Cucine sartoriali",
    description:
      "Gli elettrodomestici da incasso non si appoggiano: si disegnano. Forni e vapore a colonna a filo con i frontali, profili in rame e comandi touch si fondono nella nicchia su misura, per una cucina dove la tecnologia resta discreta.",
    tags: ["Elettrodomestici da incasso", "Colonna attrezzata", "Profili in rame", "Touch"],
    image: {
      src: "/media/brand/elettrodomestici/gallery-1.jpg",
      alt: "Forno da incasso a colonna con display touch e profili in rame",
      width: 1300,
      height: 1300,
    },
    featured: false,
  },
  {
    id: "cucina-showroom-isola-cemento",
    title: "Isola contemporanea e colonne attrezzate in showroom",
    category: "cucine",
    categoryLabel: "Cucine sartoriali",
    description:
      "Allestimento reale nello showroom di Nocera Inferiore: isola scultorea con piano in gres porcellanato ad alta resistenza e scocca in multistrato marino. Vani a giorno e colonne a scomparsa con cerniere ammortizzate testate.",
    tags: ["Showroom dal vivo", "Isola scultorea", "Top in gres", "Scocca multistrato"],
    image: {
      src: "/media/showroom/showroom-3.jpg",
      alt: "Cucina sartoriale allestita dal vivo nello showroom Proggecta a Nocera Inferiore",
      width: 1600,
      height: 1067,
      credit: PROGGECTA,
    },
    featured: true,
  },
  {
    id: "cucina-showroom-lineare-rovere",
    title: "Composizione lineare con ante a telaio in legno",
    category: "cucine",
    categoryLabel: "Cucine sartoriali",
    description:
      "Allestimento dal vivo: calore del rovere naturale con ante a telaio artigianali e piani continui in quarzo. Meccanismi di chiusura Blum a scomparsa totale e vani illuminati a LED integrati nei canali.",
    tags: ["Showroom dal vivo", "Rovere massello", "Ante a telaio", "Multistrato"],
    image: {
      src: "/media/showroom/showroom-6.jpg",
      alt: "Cucina lineare in rovere con ante a telaio esposta nello showroom Proggecta",
      width: 1600,
      height: 1066,
      credit: PROGGECTA,
    },
    featured: false,
  },
  {
    id: "cucina-showroom-dettaglio-quarzo",
    title: "Dettaglio costruttivo piano lavoro e giunzioni al millimetro",
    category: "cucine",
    categoryLabel: "Cucine sartoriali",
    description:
      "La qualità sartoriale si tocca con mano: taglio laser a 45 gradi sul top in gres, lavello sottotop integrato e scocca resistente all'umidità. Il tipo di dettaglio che nessun catalogo standard può garantire.",
    tags: ["Showroom dal vivo", "Top gres 45°", "Lavello integrato", "Zero fessure"],
    image: {
      src: "/media/showroom/showroom-7.jpg",
      alt: "Dettaglio costruttivo piano in gres e lavello integrato in showroom",
      width: 1600,
      height: 1066,
      credit: PROGGECTA,
    },
    featured: false,
  },
  {
    id: "cucina-showroom-bicolore",
    title: "Cucina bicolore moderna con pensili sospesi",
    category: "cucine",
    categoryLabel: "Cucine sartoriali",
    description:
      "Contrasto cromatico tra basi materiche antracite e pensili chiari a giorno. Soluzione pensata per allargare la percezione visiva degli spazi e offrire massima capienza contenitiva.",
    tags: ["Showroom dal vivo", "Bicolore", "Gole a gola", "Pensili a giorno"],
    image: {
      src: "/media/showroom/showroom-11.jpg",
      alt: "Cucina bicolore con pensili a giorno allestita in showroom Proggecta",
      width: 1600,
      height: 1066,
      credit: PROGGECTA,
    },
    featured: false,
  },
  {
    id: "cucina-showroom-isola-scultorea",
    title: "Isola con piano cottura a induzione e cappa integrata",
    category: "cucine",
    categoryLabel: "Cucine sartoriali",
    description:
      "Isola centrale completa di piano cottura aspirante a filo top e bancone snack a sbalzo. La cappa integrata elimina ogni ingombro visivo a soffitto, lasciando libera la vista sull'ambiente living.",
    tags: ["Showroom dal vivo", "Piano aspirante", "Bancone snack", "Design puro"],
    image: {
      src: "/media/showroom/showroom-12.jpg",
      alt: "Isola sartoriale con piano aspirante allestita in showroom Proggecta",
      width: 1280,
      height: 1600,
      credit: PROGGECTA,
    },
    featured: false,
  },

  // ───────────── OPEN SPACE & LIVING ─────────────
  {
    id: "open-space-isola-sahara",
    title: "Cucina e living in continuità sul giardino",
    category: "open-space",
    categoryLabel: "Open space & Living",
    description:
      "Un'unica prospettiva dal salotto alla cucina: l'isola in marmo Sahara Noir con venature dorate fa da quinta scenografica, la boiserie in noce regala profondità e il tavolo di design accoglie la convivialità. Luce naturale e LED a gola nel controsoffitto completano il quadro.",
    tags: ["Marmo Sahara Noir", "Boiserie in noce", "LED a gola", "Tavolo di design"],
    image: {
      src: "/media/hero/hero-2.jpg",
      alt: "Living open space con isola in marmo Sahara Noir, boiserie in noce e tavolo di design",
      width: 1376,
      height: 768,
      credit: PROGGECTA,
    },
    featured: true,
  },
  {
    id: "open-space-terrazza-serale",
    title: "Living serale con penisola e terrazza",
    category: "open-space",
    categoryLabel: "Open space & Living",
    description:
      "Al tramonto la casa cambia pelle: mensole a giorno retroilluminate, penisola in pietra con sgabelli in legno e un divano in bouclé che guarda la città. Un open space dove cucina e soggiorno dialogano senza barriere, con luce calda a 2700K e materiali da toccare.",
    tags: ["Mensole illuminate", "Penisola in pietra", "Parquet a spina", "LED 2700K"],
    image: {
      src: "/media/hero/hero-3.jpg",
      alt: "Living serale con penisola in pietra, mensole illuminate e vista sul terrazzo panoramico",
      width: 1376,
      height: 768,
      credit: PROGGECTA,
    },
    featured: true,
  },
  {
    id: "living-vista-mare",
    title: "Living a tutta vetrata con salotto scultoreo",
    category: "open-space",
    categoryLabel: "Open space & Living",
    description:
      "Volumi morbidi, tavolini in tinta e un divano lineare che accompagna lo sguardo verso l'orizzonte. Il living diventa un'estensione del paesaggio: arredi scelti per proporzioni e materiali, posizionati sul rilievo reale dello spazio.",
    tags: ["Divano su misura", "Tavolini laccati", "Tappeto materico", "Vista panoramica"],
    image: {
      src: "/media/brand/signorini-coco/gallery-1.jpg",
      alt: "Salotto contemporaneo con divano lineare e tavolini azzurri davanti a una vetrata sul mare",
      width: 780,
      height: 516,
      credit: "© Signorini & Coco",
    },
    featured: false,
  },
  {
    id: "zona-pranzo-base-croce",
    title: "Zona pranzo con tavolo scultoreo",
    category: "open-space",
    categoryLabel: "Open space & Living",
    description:
      "Un grande tavolo con base a croce in metallo dorato e piano in ceramica, sedute in tessuto e madia sullo sfondo: la zona pranzo che separa e al tempo stesso unisce cucina e living. Proporzioni calibrate sul tuo spazio, per cene da dieci o colazioni da due.",
    tags: ["Piano in ceramica", "Base metallica", "Sedute imbottite", "Madia"],
    image: {
      src: "/media/brand/zamagna/gallery-3.jpg",
      alt: "Zona pranzo con tavolo a base incrociata, sedie imbottite e grande vetrata sul giardino",
      width: 1920,
      height: 1316,
      credit: "© Zamagna",
    },
    featured: false,
  },
  {
    id: "living-showroom-madia",
    title: "Allestimento living e parete attrezzata coordinata in showroom",
    category: "open-space",
    categoryLabel: "Open space & Living",
    description:
      "Composizione giorno dal vivo nello showroom di Nocera Inferiore: boiserie a doghe con vani contenitivi a specchio e madia sospesa. Un unico progetto armonico che dialoga con la cucina per stile e materiali.",
    tags: ["Showroom dal vivo", "Living coordinato", "Madia sospesa", "Boiserie"],
    image: {
      src: "/media/showroom/showroom-4.jpg",
      alt: "Zona living e soggiorno contemporaneo allestito nello showroom Proggecta",
      width: 1600,
      height: 1067,
      credit: PROGGECTA,
    },
    featured: true,
  },
  {
    id: "materioteca-showroom-dal-vivo",
    title: "La Materioteca Proggecta dal vivo",
    category: "open-space",
    categoryLabel: "Open space & Living",
    description:
      "Il cuore della progettazione a Nocera Inferiore: centinaia di campionari reali di top in gres, legni nobili, laccature e maniglie da accostare dal vivo sotto luce naturale prima di decidere.",
    tags: ["Showroom dal vivo", "Materioteca", "Campionari reali", "Gres & Marmi"],
    image: {
      src: "/media/showroom/showroom-2.jpg",
      alt: "Campionari e materioteca reale nello showroom Proggecta a Nocera Inferiore",
      width: 1600,
      height: 1067,
      credit: PROGGECTA,
    },
    featured: false,
  },

  // ───────────── PARETI ATTREZZATE ─────────────
  {
    id: "parete-libreria-panca",
    title: "Libreria a tutta altezza con panca contenitore",
    category: "pareti-attrezzate",
    categoryLabel: "Pareti attrezzate",
    description:
      "Vani a giorno, ante a specchio e boiserie decorata disegnano una parete che contiene tutto e racconta chi vive la casa. La panca con cuscini crea un angolo lettura su misura, mentre l'illuminazione integrata fa respirare ogni scaffale.",
    tags: ["Libreria a tutta altezza", "Vani a giorno", "Boiserie decorata", "Panca contenitore"],
    image: {
      src: "/media/brand/ferretti-ferretti/gallery-1.jpg",
      alt: "Parete attrezzata con libreria a tutta altezza, boiserie e panca imbottita",
      width: 1000,
      height: 483,
      credit: "© Ferretti & Ferretti",
    },
    featured: false,
    objectPosition: "35% center",
  },
  {
    id: "parete-cameretta-scrivania",
    title: "Parete attrezzata con letto, libreria e scrivania",
    category: "pareti-attrezzate",
    categoryLabel: "Pareti attrezzate",
    description:
      "Una sola parete che diventa camera, studio e libreria. Nicchie a giorno, mensole e scrivania integrata fanno spazio a passioni e studio, con una palette vivace che cresce insieme a chi la abita: il concetto di cameretta evolutiva, interpretato su misura.",
    tags: ["Mobili su misura", "Vani a giorno", "Scrivania integrata", "Cameretta evolutiva"],
    image: {
      src: "/media/brand/ferretti-ferretti/gallery-2.jpg",
      alt: "Parete attrezzata di una cameretta con libreria a giorno, letto e scrivania",
      width: 1000,
      height: 483,
      credit: "© Ferretti & Ferretti",
    },
    featured: false,
    objectPosition: "35% center",
  },
  {
    id: "parete-libreria-angolare",
    title: "Libreria angolare e armadio a ponte con LED",
    category: "pareti-attrezzate",
    categoryLabel: "Pareti attrezzate",
    description:
      "Ogni angolo si può attrezzare. Una libreria verticale e un armadio a ponte incorniciano il letto, mentre una striscia LED sotto i pensili crea luce d'atmosfera e di lettura. Pensili chiusi per nascondere, vani a giorno per mostrare.",
    tags: ["Armadio a ponte", "Libreria angolare", "Luce LED integrata", "Su misura"],
    image: {
      src: "/media/brand/moretti-compact/gallery-1.webp",
      alt: "Libreria angolare e armadio a ponte con retroilluminazione LED sopra il letto",
      width: 1200,
      height: 400,
      credit: "© Moretti Compact",
    },
    featured: false,
    objectPosition: "62% center",
  },

  // ───────────── ZONA NOTTE & CABINE ARMADIO ─────────────
  {
    id: "notte-cabina-armadio",
    title: "Cabina armadio illuminata su misura",
    category: "notte",
    categoryLabel: "Zona notte & Cabine",
    description:
      "Un guardaroba che si vive come una boutique: ripiani, aste e cassettiere calibrate sul tuo abbigliamento, retroilluminazione LED e ante in vetro bronzato. Dal letto imbottito alla poltrona, la zona notte e la cabina diventano un'unica suite.",
    tags: ["Cabina armadio", "Illuminazione LED", "Vetro bronzato", "Cassettiere interne"],
    image: {
      src: "/media/brand/ferretti-ferretti/gallery-3.jpg",
      alt: "Cabina armadio illuminata su misura accanto a una camera con letto imbottito",
      width: 1000,
      height: 483,
      credit: "© Ferretti & Ferretti",
    },
    featured: false,
    objectPosition: "45% center",
  },
  {
    id: "notte-armadio-complanare",
    title: "Armadio complanare a filo parete",
    category: "notte",
    categoryLabel: "Zona notte & Cabine",
    description:
      "Ante complanari, senza maniglie in vista e a tutta altezza: l'armadio sparisce nella parete e restituisce una stanza pulita, silenziosa, luminosa. Cassettiera, comodino e letto dialogano nella stessa palette sabbia.",
    tags: ["Armadio complanare", "Ante a filo", "Palette sabbia", "Letto sospeso"],
    image: {
      src: "/media/brand/mercantini/gallery-2.webp",
      alt: "Camera da letto con armadio complanare a tutta altezza e luce naturale",
      width: 1200,
      height: 400,
      credit: "© Mercantini",
    },
    featured: false,
    objectPosition: "72% center",
  },
  {
    id: "notte-letto-imbottito",
    title: "Letto matrimoniale imbottito con testata a boiserie",
    category: "notte",
    categoryLabel: "Zona notte & Cabine",
    description:
      "Testata imbottita capitonné, boiserie e armadiatura chiara a specchio: la camera da letto diventa un rifugio morbido e raffinato. Tessuti, tinte e dimensioni si scelgono con te, in showroom, toccando i campioni.",
    tags: ["Letto imbottito", "Testata capitonné", "Boiserie", "Luce soffusa"],
    image: {
      src: "/media/brand/ferretti-ferretti/gallery-4.jpg",
      alt: "Camera da letto con letto matrimoniale imbottito, boiserie e armadio chiaro",
      width: 1000,
      height: 483,
      credit: "© Ferretti & Ferretti",
    },
    featured: false,
    objectPosition: "35% center",
  },
  {
    id: "notte-letto-azzurro",
    title: "Camera con letto imbottito a coste verticali",
    category: "notte",
    categoryLabel: "Zona notte & Cabine",
    description:
      "Una testata alta a coste verticali in velluto polvere, comodini in tinta e librerie luminose sullo sfondo: una camera che profuma di hotel di charme, ma con la praticità di contenitori progettati sulle tue esigenze.",
    tags: ["Letto imbottito", "Velluto", "Testata a coste", "Contenitori su misura"],
    image: {
      src: "/media/brand/signorini-coco/gallery-3.jpg",
      alt: "Camera da letto con letto imbottito in velluto azzurro e librerie illuminate",
      width: 780,
      height: 516,
      credit: "© Signorini & Coco",
    },
    featured: false,
  },
  {
    id: "notte-letto-sospeso",
    title: "Letto matrimoniale a piattaforma e comodini scultorei",
    category: "notte",
    categoryLabel: "Zona notte & Cabine",
    description:
      "Testata imbottita retroilluminata, struttura a piattaforma su piedi in cristallo e comodini con frontali in rovere cannettato: la camera da letto in cui boiserie, luce e materiali fanno la differenza. Pouf e tavolini d'appoggio completano l'atmosfera.",
    tags: ["Testata retroilluminata", "Rovere cannettato", "Comodini su misura", "Pouf"],
    image: {
      src: "/media/brand/mercantini/gallery-1.webp",
      alt: "Letto matrimoniale a piattaforma con testata imbottita e comodini in rovere cannettato",
      width: 2205,
      height: 691,
      credit: "© Mercantini",
    },
    featured: false,
    objectPosition: "72% center",
  },
  {
    id: "notte-showroom-camera",
    title: "Camera matrimoniale contemporanea allestita in showroom",
    category: "notte",
    categoryLabel: "Zona notte & Cabine",
    description:
      "Allestimento dal vivo a Nocera Inferiore: letto con testiera imbottita sartoriale, comodini sospesi e armadio scorrevole con ante complanari in finitura calda e illuminazione LED integrata.",
    tags: ["Showroom dal vivo", "Testiera imbottita", "Armadio complanare", "Sartoriale"],
    image: {
      src: "/media/showroom/showroom-8.jpg",
      alt: "Camera da letto contemporanea allestita in showroom Proggecta",
      width: 1600,
      height: 1066,
      credit: PROGGECTA,
    },
    featured: true,
  },
  {
    id: "notte-showroom-cameretta-soppalco",
    title: "Cameretta evolutiva con soppalco e scrivania sagomata",
    category: "notte",
    categoryLabel: "Zona notte & Cabine",
    description:
      "Composizione per ragazzi Moretti Compact allestita in showroom: soppalco di sicurezza con protezione anti-caduta, cabina armadio angolare e scrivania ergonomica al millimetro.",
    tags: ["Showroom dal vivo", "Moretti Compact", "Soppalco", "Salvaspazio"],
    image: {
      src: "/media/showroom/showroom-9.jpg",
      alt: "Cameretta per ragazzi allestita dal vivo nello showroom Proggecta",
      width: 1600,
      height: 1066,
      credit: PROGGECTA,
    },
    featured: false,
  },

  // ───────────── TAVOLI, SEDIE & ACCESSORI ─────────────
  {
    id: "accessori-poltroncina",
    title: "Poltroncina in bouclé dal design sartoriale",
    category: "sedie-accessori",
    categoryLabel: "Tavoli, Sedie & Accessori",
    description:
      "Seduta avvolgente in tessuto bouclé e gambe affusolate in metallo: una sedia di design che si sceglie per forma, comfort e colore, in decine di rivestimenti. Il dettaglio che rende unica una sala da pranzo.",
    tags: ["Bouclé", "Gambe in metallo", "Rivestimenti a scelta", "Design italiano"],
    image: {
      src: "/media/brand/zamagna/gallery-5.jpg",
      alt: "Poltroncina di design in tessuto bouclé ocra con gambe in metallo",
      width: 461,
      height: 438,
      credit: "© Zamagna",
    },
    featured: false,
  },
  {
    id: "accessori-tavolo-allungabile",
    title: "Tavolo allungabile in ceramica",
    category: "sedie-accessori",
    categoryLabel: "Tavoli, Sedie & Accessori",
    description:
      "Compatto nella vita di tutti i giorni, generoso quando arrivano gli ospiti: il piano in ceramica effetto pietra, resistente a macchie e calore, si allunga con un gesto. Sedie avvolgenti in tessuto e un camino a parete completano la scena.",
    tags: ["Ceramica", "Tavolo allungabile", "Resistente al calore", "Sedie in tessuto"],
    image: {
      src: "/media/brand/zamagna/gallery-1.jpg",
      alt: "Tavolo allungabile con piano in ceramica, sedie in tessuto e camino sullo sfondo",
      width: 1920,
      height: 1316,
      credit: "© Zamagna",
    },
    featured: false,
  },
  {
    id: "accessori-tavolo-ovale",
    title: "Tavolo ovale con base scultorea in bronzo",
    category: "sedie-accessori",
    categoryLabel: "Tavoli, Sedie & Accessori",
    description:
      "Un piano ovale in ceramica chiara poggia su una base scultorea in finitura bronzo: un pezzo che è arredo e scultura insieme. Sedute in velluto cioccolato e una madia con frontali in rilievo raccontano un'eleganza decisa.",
    tags: ["Base scultorea", "Finitura bronzo", "Velluto", "Madia in rilievo"],
    image: {
      src: "/media/brand/zamagna/gallery-2.jpg",
      alt: "Tavolo ovale in ceramica con base scultorea bronzo, sedie in velluto e madia in rilievo",
      width: 1920,
      height: 1316,
      credit: "© Zamagna",
    },
    featured: false,
  },
  {
    id: "accessori-cristallo-madia",
    title: "Tavolo in cristallo e madia a specchio",
    category: "sedie-accessori",
    categoryLabel: "Tavoli, Sedie & Accessori",
    description:
      "Piano in vetro fumé su base geometrica, sedute dal disegno sinuoso e madia con frontali a specchio sotto lampade d'atmosfera: complementi e oggettistica scelti come in un progetto di interior, con l'occhio all'insieme.",
    tags: ["Vetro fumé", "Madia a specchio", "Lampade d'atmosfera", "Complementi"],
    image: {
      src: "/media/brand/zamagna/gallery-4.jpg",
      alt: "Tavolo in cristallo fumé con sedie di design e madia a specchio",
      width: 1920,
      height: 1316,
      credit: "© Zamagna",
    },
    featured: false,
  },
  {
    id: "accessori-salotto-chesterfield",
    title: "Salotto capitonné con divano e poltrone",
    category: "sedie-accessori",
    categoryLabel: "Tavoli, Sedie & Accessori",
    description:
      "Divano e poltrone capitonné, tavolino intagliato, lampade da terra e un lampadario di cristallo: un salotto dal carattere classico, dove ogni complemento viene scelto per creare un'atmosfera calda e senza tempo.",
    tags: ["Capitonné", "Divano su misura", "Lampadario di cristallo", "Stile classico"],
    image: {
      src: "/media/brand/signorini-coco/gallery-2.jpg",
      alt: "Salotto classico con divano capitonné, poltrone, tavolino intagliato e lampadario di cristallo",
      width: 780,
      height: 516,
      credit: "© Signorini & Coco",
    },
    featured: false,
  },
  {
    id: "accessori-showroom-tavolo-sedie",
    title: "Tavolo allungabile in ceramica e sedie rivestite",
    category: "sedie-accessori",
    categoryLabel: "Tavoli, Sedie & Accessori",
    description:
      "Tavolo allungabile Zamagna con piano in ceramica antigraffio e calore, abbinato a sedie con rivestimento idrorepellente. Da toccare e provare dal vivo in showroom a Nocera Inferiore.",
    tags: ["Showroom dal vivo", "Zamagna", "Tavolo allungabile", "Ceramica"],
    image: {
      src: "/media/showroom/showroom-10.jpg",
      alt: "Tavolo allungabile e sedie allestite in showroom Proggecta",
      width: 1600,
      height: 1067,
      credit: PROGGECTA,
    },
    featured: false,
  },
];
