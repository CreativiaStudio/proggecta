import type { Brand, ImageAsset } from "./types";

// NOTE PER LO SVILUPPO
// - Le immagini indicate sono segnaposto con percorso definitivo: vedi docs/B per cosa recuperare.
// - Non inventare dati sui produttori (anni di fondazione, collezioni, certificazioni):
//   il copy resta volutamente sul "perché l'abbiamo scelto" e "cosa ci fai in un progetto Proggecta".
// - Uso dei marchi e delle foto subordinato all'autorizzazione dei produttori (vedi docs/README.md).

const img = (path: string, alt: string, credit?: string): ImageAsset => ({
  src: `/media/brand/${path}`,
  alt,
  width: 2400,
  height: 1600,
  credit,
});

const logo = (file: string, alt: string): ImageAsset => ({
  src: `/media/logos/${file}`,
  alt,
  width: 320,
  height: 120,
});

export const brandIntro = {
  eyebrow: "La selezione Proggecta",
  title: "Nessuna fabbrica eccelle in ogni comparto. Per questo le abbiamo selezionate una per una.",
  body: "Chi produce cucine d'eccellenza raramente realizza i sistemi armadio più evoluti o i tavoli con le migliori meccaniche. Proggecta seleziona le manifatture italiane leader di ciascun ambiente e le orchestra in un unico progetto architettonico, con un solo interior designer e una sola squadra di montaggio.",
};

export const brandData: Brand[] = [
  // =========================================================
  // CIESSE — brand in transizione, atterraggio redirect 301
  // =========================================================
  {
    slug: "ciesse",
    name: "Ciesse",
    makers: ["Ciesse"],
    category: "Cucine sartoriali",
    ambienti: ["cucina"],
    status: "transition",
    showInGrid: true,
    order: 7,
    logo: logo("ciesse.svg", "Logo Ciesse"),
    cardClaim: "Cucine sartoriali con scocca in multistrato, top materici e integrazione architettonica al millimetro.",
    seo: {
      title: "Cucine Ciesse a Nocera Inferiore | Showroom Proggecta",
      description:
        "Le cucine sartoriali Ciesse nello showroom Proggecta di Nocera Inferiore: scocca in multistrato, top in gres e marmo, progettazione su misura e rilievo laser.",
    },
    hero: {
      eyebrow: "Cucine Sartoriali · Selezione Proggecta",
      headline: "Geometrie pure, scocca in multistrato e materia viva.",
      subheadline:
        "La gamma di cucine Ciesse nello showroom Proggecta di Nocera Inferiore: volumi scultorei, lavorazioni al millimetro e dialogo continuo con la zona living.",
      image: img("ciesse/hero.jpg", "Cucina Ciesse in esposizione nello showroom Proggecta di Nocera Inferiore", "© Proggecta Selection"),
    },
    transitionNotice: {
      title: "Continuità e nuova direzione progettuale",
      body: "Proggecta è uno studio di architettura d'interni indipendente a Nocera Inferiore. Abbiamo scelto di integrare le cucine Ciesse nella nostra selezione ufficiale: qui ritrovi la stessa qualità costruttiva, inserita in un metodo di progettazione sartoriale esteso a tutta la casa.",
    },
    intro:
      "Una cucina d'alta gamma si riconosce da ciò che non si vede al primo sguardo: la stabilità strutturale delle casse in multistrato, la precisione delle fughe da 2 millimetri, la tenuta delle cerniere ad estrazione totale. Nello showroom Proggecta progettiamo ogni composizione Ciesse partendo dall'ergonomia reale dei movimenti e dalla luce naturale del tuo spazio.",
    whyProggecta: {
      title: "Continuità architettonica tra cucina e zona giorno",
      body: "Negli open space contemporanei la cucina non è un blocco isolato, ma un'architettura che dialoga con tavolo, boiserie e pareti attrezzate. In Proggecta coordiniamo essenze, marmi, gole e metalli perché cucina e living condividano lo stesso linguaggio materico.",
    },
    sections: [
      {
        title: "Isole monolitiche e superfici tattili",
        body: "Piani di lavoro in gres porcellanato a vena passante, marmi naturali, legni termotrattati e laccature opache anti-impronta. Ogni superficie è selezionata per resistere al calore, agli acidi e all'usura quotidiana senza perdere profondità visiva.",
        bullets: [
          "Scocche strutturali ad alta densità resistenti all'umidità",
          "Top monolitici con vasche integrate al millimetro",
          "Colonne attrezzate, gole profilate e cantine vini climatizzate",
        ],
        image: img("ciesse/gallery-1.jpg", "Isola cucina scultorea in marmo scuro venato", "© Proggecta Selection"),
      },
      {
        title: "Ergonomia costruttiva e fuori misura",
        body: "Altezze dei piani calibrate sulla statura di chi cucina, colonne a tutta altezza fino al soffitto senza tamponamenti plastici, compensazione invisibile di pilastri e pareti fuori squadro grazie al rilievo laser esecutivo.",
        bullets: [
          "Sviluppo verticale al millimetro per massimizzare il contenimento",
          "Meccanismi ammortizzati testati per cicli di carico intensivo",
          "Posa e regolazione millimetrica delle ante con squadra interna",
        ],
        image: img("ciesse/gallery-4.jpg", "Colonne cannettate con cantina vini a vista", "© Proggecta Selection"),
      },
    ],
    highlights: [
      "Struttura ad alta tenuta",
      "Modularità al millimetro",
      "Top in gres, quarzo e pietre naturali",
      "Integrazione living e boiserie",
    ],
    gallery: [
      img("ciesse/gallery-1.jpg", "Isola cucina scultorea in marmo scuro venato", "© Proggecta Selection"),
      img("ciesse/gallery-2.jpg", "Living open space con cucina e tavolo di design", "© Proggecta Selection"),
      img("ciesse/gallery-3.jpg", "Prospettiva contemporanea giorno su terrazzo", "© Proggecta Selection"),
      img("ciesse/gallery-4.jpg", "Colonne cannettate con cantina vini a vista", "© Proggecta Selection"),
    ],
    crossBrands: ["elettrodomestici", "zamagna", "materiali-pannelli"],
    faqIds: ["ciesse-stessa-azienda", "ciesse-pratiche", "consulenza-gratuita", "quanto-costa", "tempi-consegna"],
    formPreset: "cucina",
    ctaLabel: "Prenota la progettazione cucina",
  },

  // =========================================================
  // MORETTI COMPACT — camerette, cabine armadio, zona giovani
  // =========================================================
  {
    slug: "moretti-compact",
    name: "Moretti Compact",
    makers: ["Moretti Compact"],
    category: "Camerette evolutive e cabine",
    ambienti: ["cameretta", "notte"],
    status: "active",
    showInGrid: true,
    order: 1,
    logo: logo("moretti-compact.png", "Logo Moretti Compact"),
    cardClaim: "Architetture evolutive per ragazzi e sistemi cabina armadio progettati al centimetro.",
    seo: {
      title: "Camerette Moretti Compact a Nocera Inferiore | Proggecta",
      description:
        "Camerette evolutive, soppalchi salvaspazio e cabine armadio Moretti Compact progettati su misura nello showroom Proggecta di Nocera Inferiore.",
    },
    hero: {
      eyebrow: "Moretti Compact · Sistemi evolutivi e notte",
      headline: "Architetture che accompagnano la crescita. Senza sprecare un centimetro.",
      subheadline:
        "Sistemi modulari, soppalchi strutturali, zone studio ergonomiche e cabine armadio Moretti Compact calibrati sulle reali geometrie della stanza.",
      image: img("moretti-compact/hero.jpg", "Cameretta Moretti Compact con letto a soppalco e scrivania", "© Moretti Compact"),
    },
    intro:
      "La stanza dei ragazzi attraversa tre età diverse in dieci anni: dal gioco libero allo studio quotidiano, fino all'esigenza di autonomia di un giovane adulto. Con Moretti Compact progettiamo impianti d'arredo trasformabili, costruiti con pannelli ecologici a bassissima emissione e vernici all'acqua atossiche.",
    whyProggecta: {
      title: "Ingegneria dello spazio in metrature complesse",
      body: "Radiatori sottofinestra, porte decentrate, pilastri sporgenti: nelle stanze moderne un catalogo standard lascia vuoti inutilizzabili. Partiamo dal rilievo laser per disegnare ponti, tagli su misura e profondità differenziate che liberano il centro stanza.",
    },
    sections: [
      {
        title: "Modularità evolutiva e soppalchi",
        body: "Strutture a soppalco ad alta portata, letti scorrevoli indipendenti, scrivanie sagomate e librerie sospese. Ogni elemento è pensato per riconfigurarsi nel tempo senza dover sostituire l'intero arredo.",
        bullets: [
          "Pannelli ecologici certificati e vernici all'acqua atossiche",
          "Meccanismi di scorrimento sicuri e protezioni brevettate",
          "Zone studio ergonomiche calibrate sulla luce naturale",
        ],
        image: img("moretti-compact/gallery-1.webp", "Cameretta evolutiva con letto a castello e contenitori", "© Moretti Compact"),
      },
      {
        title: "Condivisione armoniosa: due figli, un unico ambiente",
        body: "Progettare per due fratelli richiede equilibrio tra condivisione e privacy. Disegniamo soluzioni simmetriche o sfalsate che garantiscono a ciascuno il proprio letto, il proprio piano di lavoro e una capienza armadio indipendente.",
        bullets: [
          "Divisione funzionale dei volumi anche in stanze compatte",
          "Contenimento integrato nei gradini e nelle pedane",
          "Palette cromatiche contemporanee che non stancano crescendo",
        ],
        image: img("moretti-compact/gallery-3.webp", "Cabina armadio e armadiatura scorrevole salvaspazio", "© Moretti Compact"),
      },
      {
        title: "Cabine armadio e sistemi notte",
        body: "La precisione modulare Moretti Compact si estende alla zona notte padronale: cabine armadio angolari, boiserie attrezzate e letti imbottiti dalle linee sartoriali.",
        bullets: [
          "Attrezzature interne configurabili al millimetro",
          "Cassettiere, portapantaloni, vani a giorno e luce LED integrata",
        ],
        image: img("moretti-compact/gallery-2.webp", "Cabina armadio componibile con attrezzature interne", "© Moretti Compact"),
      },
    ],
    highlights: [
      "Sistemi salvaspazio evolutivi",
      "Vernici all'acqua atossiche",
      "Sicurezza strutturale certificata",
      "Cabine armadio al centimetro",
    ],
    gallery: [
      img("moretti-compact/gallery-1.webp", "Composizione cameretta evolutiva con soppalco e scrivania", "© Moretti Compact"),
      img("moretti-compact/gallery-2.webp", "Zona notte con letto matrimoniale imbottito e boiserie", "© Moretti Compact"),
      img("moretti-compact/gallery-3.webp", "Cabina armadio e armadiatura scorrevole salvaspazio", "© Moretti Compact"),
    ],
    crossBrands: ["mercantini", "zamagna", "materiali-pannelli"],
    faqIds: ["fuori-misura", "solo-un-ambiente", "consulenza-gratuita", "tempi-consegna"],
    formPreset: "cameretta",
    ctaLabel: "Progetta la cameretta in showroom",
  },

  // =========================================================
  // MERCANTINI — armadiature e notte di alta gamma
  // =========================================================
  {
    slug: "mercantini",
    name: "Mercantini",
    makers: ["Mercantini"],
    category: "Sistemi armadio e zona notte",
    ambienti: ["notte"],
    status: "active",
    showInGrid: true,
    order: 2,
    logo: logo("mercantini.svg", "Logo Mercantini"),
    cardClaim: "Sistemi armadio complanari, cabine armadio scenografiche e architettura della zona notte.",
    seo: {
      title: "Armadi e Camere Mercantini a Nocera Inferiore | Proggecta",
      description:
        "Armadi battenti, scorrevoli e complanari, cabine armadio e zona notte Mercantini progettati su misura nello showroom Proggecta di Nocera Inferiore.",
    },
    hero: {
      eyebrow: "Mercantini · Architettura della zona notte",
      headline: "Volumi architettonici, silenzio meccanico e ordine sartoriale.",
      subheadline:
        "Armadiature complanari a tutta altezza, cabine armadio retroilluminate e gruppi notte Mercantini: superfici materiche che vestono le pareti come una seconda pelle.",
      image: img("mercantini/hero.jpg", "Camera da letto contemporanea con armadio scorrevole Mercantini", "© Mercantini"),
    },
    intro:
      "Nella zona notte l'armadio non è un semplice mobile contenitore, ma una parete architettonica che definisce le proporzioni dell'intera stanza. Abbiamo scelto Mercantini per la purezza formale delle sue ante a tutta altezza, la silenziosità assoluta dei binari ammortizzati e la ricchezza dei rivestimenti interni.",
    whyProggecta: {
      title: "Integrazione a filo muro e organizzazione millimetrica",
      body: "In Proggecta eliminiamo l'effetto 'blocco appoggiato': rileviamo quote e fuori squadro al laser per incassare l'armadiatura da parete a parete e da pavimento a soffitto. All'interno, disegniamo ogni vano in base al tuo guardaroba reale.",
    },
    sections: [
      {
        title: "Sistemi battenti, scorrevoli e complanari",
        body: "Dalle ante complanari che creano superfici monolitiche prive di interruzioni, alle vetrate fumé con telaio in alluminio bronzato. Ogni sistema di apertura è calibrato sugli spazi di passaggio e sull'estetica della camera.",
        bullets: [
          "Meccanismi complanari e scorrevoli con ammortizzazione bidirezionale",
          "Finiture in vetro riflettente, laccato poro aperto, essenze e tecno-pelle",
          "Maniglie incassate a tutta altezza o profili metallici sartoriali",
        ],
        image: img("mercantini/gallery-1.webp", "Armadio con ante scorrevoli complanari", "© Mercantini"),
      },
      {
        title: "Cabine armadio e stanze del guardaroba",
        body: "Trasformiamo nicchie, pareti lunghe o stanze dedicate in cabine armadio luminose: montanti a cremagliera, boiserie a pannelli, isole centrali con cassettiere in vetro e illuminazione LED calda integrata nei fianchi.",
        bullets: [
          "Strutture autoportanti a boiserie o a montanti verticali",
          "Cassettiere sospese, vassoi estraibili in cuoio e portacalzature",
          "Illuminazione tecnica integrata con accensione a sensore",
        ],
        image: img("mercantini/gallery-2.webp", "Cabina armadio illuminata con ripiani e appenderie", "© Mercantini"),
      },
    ],
    highlights: [
      "Sistemi complanari e scorrevoli",
      "Cabine armadio retroilluminate",
      "Riduzioni su misura al millimetro",
      "Interni attrezzati in finitura",
    ],
    gallery: [
      img("mercantini/gallery-1.webp", "Armadiatura battente a tutta altezza con finiture materiche", "© Mercantini"),
      img("mercantini/gallery-2.webp", "Cabina armadio illuminata con ripiani e cassettiere su misura", "© Mercantini"),
      img("mercantini/hero.jpg", "Suite padronale con armadio scorrevole e gruppo notte coordinato", "© Mercantini"),
    ],
    crossBrands: ["moretti-compact", "signorini-coco", "materiali-pannelli"],
    faqIds: ["fuori-misura", "solo-un-ambiente", "consulenza-gratuita", "tempi-consegna"],
    formPreset: "notte",
    ctaLabel: "Progetta la zona notte in showroom",
  },

  // =========================================================
  // ZAMAGNA — tavoli, sedie, living
  // =========================================================
  {
    slug: "zamagna",
    name: "Zamagna",
    makers: ["Zamagna"],
    category: "Tavoli scultorei, sedute e living",
    ambienti: ["living", "cucina"],
    status: "active",
    showInGrid: true,
    order: 3,
    logo: logo("zamagna.svg", "Logo Zamagna"),
    cardClaim: "Tavoli scultorei in gres e legno, meccaniche invisibili e sedute sartoriali per la zona giorno.",
    seo: {
      title: "Tavoli e Sedie Zamagna a Nocera Inferiore | Proggecta",
      description:
        "Tavoli fissi e allungabili in ceramica e legno, sedie sartoriali e madie Zamagna nello showroom Proggecta di Nocera Inferiore.",
    },
    hero: {
      eyebrow: "Zamagna · Tavoli, sedute e complementi",
      headline: "Il centro gravitazionale del living. Materia, meccanica e convivialità.",
      subheadline:
        "Tavoli scultorei fissi e allungabili in ceramica, vetro e legno massello, abbinati a sedute ergonomiche e madie coordinate al tuo progetto giorno.",
      image: img("zamagna/hero.jpg", "Tavolo allungabile Zamagna con sedie di design in un living luminoso", "© Zamagna"),
    },
    intro:
      "Il tavolo è il fulcro visivo della zona giorno: è il primo elemento che cattura lo sguardo entrando nel living e la superficie più sollecitata della casa. Con Zamagna selezioniamo basamenti architettonici in metallo verniciato, piani in gres accoppiato e meccanismi di allunga progettati per scomparire quando il tavolo è chiuso.",
    whyProggecta: {
      title: "Proporzioni, flussi di passaggio e armonia cromatica",
      body: "Un tavolo importante richiede le giuste distanze di rispetto da isola, pareti e divano. Nello studio del layout verifichiamo ingombri da chiuso e da aperto, coordiniamo la venatura del piano con il top della cucina e selezioniamo i rivestimenti delle sedute in materioteca.",
    },
    sections: [
      {
        title: "Meccanica fluida e piani in gres ceramico",
        body: "Sistemi di apertura telescopici e rotanti in alluminio che permettono a una sola persona di estendere il piano in pochi secondi, mantenendo intatta la stabilità e la pulizia formale del profilo.",
        bullets: [
          "Piani in ceramica stratificata su vetro, resistenti a tagli e alte temperature",
          "Basamenti centrali scultorei che liberano lo spazio per tutte le sedute",
          "Allunghe integrate a scomparsa totale con apertura assistita",
        ],
        image: img("zamagna/gallery-1.jpg", "Dettaglio del meccanismo di allungamento di un tavolo Zamagna", "© Zamagna"),
      },
      {
        title: "Sedute ergonomiche e sgabelli per isola",
        body: "Scocche avvolgenti imbottite a densità differenziata, cuciture ribattute, velluti antimacchia, pelli ed ecopelli tecniche. Ogni sedia e sgabello viene testato dal vivo in showroom per postura e altezza rispetto al piano.",
        bullets: [
          "Sedie con struttura in metallo, legno massello o base girevole",
          "Sgabelli calibrati per isole cucina e banconi snack",
          "Madie, consolle e tavolini coordinati per un living coerente",
        ],
        image: img("zamagna/gallery-5.jpg", "Sedie di design Zamagna attorno a un tavolo in ceramica", "© Zamagna"),
      },
    ],
    highlights: [
      "Piani in gres ceramico e legno",
      "Meccaniche d'allunga invisibili",
      "Sedute con tessuti antimacchia",
      "Madie e complementi coordinati",
    ],
    gallery: [
      img("zamagna/gallery-1.jpg", "Tavolo allungabile in ceramica e metallo con sedie coordinate", "© Zamagna"),
      img("zamagna/gallery-2.jpg", "Zona pranzo contemporanea con madia e complementi", "© Zamagna"),
      img("zamagna/gallery-3.jpg", "Living moderno con tavolo scultoreo e illuminazione d'atmosfera", "© Zamagna"),
      img("zamagna/gallery-4.jpg", "Dettaglio meccanismo d'apertura fluido per tavolo allungabile", "© Zamagna"),
      img("zamagna/gallery-5.jpg", "Sedia di design Duke con rivestimento sartoriale", "© Zamagna"),
    ],
    crossBrands: ["ciesse", "elettrodomestici", "signorini-coco"],
    faqIds: ["solo-un-ambiente", "consulenza-gratuita", "tempi-consegna"],
    formPreset: "living",
    ctaLabel: "Prova tavoli e sedute in showroom",
  },

  // =========================================================
  // SIGNORINI & COCO — classico / contemporaneo d'alta ebanisteria
  // =========================================================
  {
    slug: "signorini-coco",
    name: "Signorini & Coco",
    makers: ["Signorini & Coco"],
    category: "Alta ebanisteria contemporanea",
    ambienti: ["living", "notte"],
    status: "active",
    showInGrid: true,
    order: 4,
    logo: logo("signorini-coco.svg", "Logo Signorini & Coco"),
    cardClaim: "Alta ebanisteria italiana, essenze pregiate, pelli e dettagli metallici per ambienti d'autore.",
    seo: {
      title: "Arredo Signorini & Coco a Nocera Inferiore | Proggecta",
      description:
        "Collezioni d'alta ebanisteria contemporanea e classica Signorini & Coco nello showroom Proggecta di Nocera Inferiore. Progettazione d'interni d'autore.",
    },
    hero: {
      eyebrow: "Signorini & Coco · Alta manifattura italiana",
      headline: "Ebanisteria d'autore, legni pregiati e dettagli fuori dal tempo.",
      subheadline:
        "Collezioni Signorini & Coco per living e suite padronali: intarsi sapienti, cuoio, marmi e laccature profonde che trasformano l'arredo in pezzo da collezione.",
      image: img("signorini-coco/hero.jpg", "Living elegante con arredi Signorini & Coco", "© Signorini & Coco"),
    },
    intro:
      "Quando un interno richiede presenza scenica e cultura del mobile d'arte, selezioniamo Signorini & Coco. Ogni creazione porta il marchio di autenticità di una manifattura che lavora legni nobili, pelli pieno fiore e metalli spazzolati con la precisione dell'alta gioielleria.",
    whyProggecta: {
      title: "Calibrare il pezzo d'autore nell'architettura moderna",
      body: "Un arredo di forte personalità esige equilibrio: luci radenti, quinte neutre e proporzioni ariose. I nostri interior designer progettano l'involucro cromatico e luminoso attorno alle collezioni Signorini & Coco, creando residenze raffinate e mai appesantite.",
    },
    sections: [
      {
        title: "Living scultorei e collezioni iconiche",
        body: "Madie dalle linee fluide, tavoli monumentali, vetrine retroilluminate in cristallo fumé e divani sartoriali. Dalle geometrie contemporanee di Oceano e Milano alle preziosità materiche di Alchemy.",
        bullets: [
          "Impiallacciature in essenze pregiate selezionate e accoppiate a mano",
          "Inserti in ottone brunito, bronzo, marmo naturale e cuoio selleria",
          "Certificato di autenticità e tracciabilità della manifattura italiana",
        ],
        image: img("signorini-coco/gallery-1.jpg", "Collezione Oceano: living contemporaneo di alta manifattura", "© Signorini & Coco"),
      },
      {
        title: "Suite notte di rappresentanza",
        body: "Letti con testiere importanti lavorate capitonné o in legno curvato, comò, settimanali e toilette da camera che restituiscono alla zona notte il fascino di una suite privata.",
        bullets: [
          "Laccature lucide spazzolate a mano o finiture opache seta",
          "Tessuti, velluti e nabuk coordinati su campionario esclusivo",
        ],
        image: img("signorini-coco/gallery-3.jpg", "Collezione Alchemy: dettagli metallici preziosi e laccature", "© Signorini & Coco"),
      },
    ],
    highlights: [
      "Alta ebanisteria certificata",
      "Essenze nobili e pelli pieno fiore",
      "Dettagli in bronzo e marmo",
      "Collezioni giorno e suite notte",
    ],
    gallery: [
      img("signorini-coco/gallery-1.jpg", "Collezione Oceano: living contemporaneo di alta manifattura", "© Signorini & Coco"),
      img("signorini-coco/gallery-2.jpg", "Collezione Classic: eleganza artigianale e legni pregiati", "© Signorini & Coco"),
      img("signorini-coco/gallery-3.jpg", "Collezione Alchemy: dettagli metallici preziosi e laccature", "© Signorini & Coco"),
      img("signorini-coco/gallery-4.jpg", "Collezione Milano: arredo contemporaneo dalle linee scultoree", "© Signorini & Coco"),
    ],
    crossBrands: ["ferretti-ferretti", "mercantini", "zamagna"],
    faqIds: ["solo-un-ambiente", "consulenza-gratuita", "tempi-consegna"],
    formPreset: "living",
    ctaLabel: "Scopri le collezioni in showroom",
  },

  // =========================================================
  // FERRETTI E FERRETTI — falegnameria sartoriale toscana
  // =========================================================
  {
    slug: "ferretti-ferretti",
    name: "Ferretti e Ferretti",
    makers: ["Ferretti e Ferretti"],
    category: "Falegnameria sartoriale",
    ambienti: ["living", "notte"],
    status: "active",
    showInGrid: true,
    order: 5,
    logo: logo("ferretti-ferretti.svg", "Logo Ferretti e Ferretti"),
    cardClaim: "Tradizione ebanistica toscana, strutture in legno listellare e armadiature su misura.",
    seo: {
      title: "Arredo Ferretti e Ferretti a Nocera Inferiore | Proggecta",
      description:
        "Camere da letto, armadiature in legno listellare e living Ferretti e Ferretti nello showroom Proggecta di Nocera Inferiore.",
    },
    hero: {
      eyebrow: "Ferretti e Ferretti · Tradizione ebanistica",
      headline: "Il calore del legno nobile, cucito sulle misure della tua casa.",
      subheadline:
        "Armadiature e camere da letto Ferretti e Ferretti realizzate con strutture in legno listellare, patinature artigianali e lavorazioni fuori misura.",
      image: img("ferretti-ferretti/hero.jpg", "Ambiente arredato con mobili Ferretti e Ferretti", "© Ferretti e Ferretti"),
    },
    intro:
      "Per chi desidera la sostanza del legno vero unita a linee pulite e rassicuranti, Ferretti e Ferretti rappresenta un punto di riferimento nella falegnameria italiana: strutture solide in listellare e multistrato, verniciature all'acqua rifinite a mano e una flessibilità sartoriale rara nell'industria moderna.",
    whyProggecta: {
      title: "Dialogo armonioso tra memoria e contemporaneità",
      body: "Spesso un progetto d'interni richiede di far convivere un involucro architettonico moderno con il calore materico della tradizione. In Proggecta bilanciamo finiture, boiserie e armadiature Ferretti e Ferretti per ottenere ambienti caldi, luminosi e coerenti.",
    },
    sections: [
      {
        title: "Armadiature in listellare e fuori misura",
        body: "Dalle collezioni classiche rivisitate alle linee contemporanee di For You e Today: armadi battenti e scorrevoli con fianchi e tramezzi in legno listellare, personalizzabili in altezza, larghezza e profondità.",
        bullets: [
          "Strutture in legno listellare e multistrato ad alta stabilità",
          "Laccature a poro aperto, patinature manuali e decori artigianali",
          "Tagli su misura per mansarde, nicchie a muro e soffitti alti",
        ],
        image: img("ferretti-ferretti/gallery-1.jpg", "Collezione Morfeo: camera da letto classica contemporanea", "© Ferretti e Ferretti"),
      },
      {
        title: "Zona notte e boiserie coordinate",
        body: "Letti in legno massello o imbottiti, gruppi letto con incastri a coda di rondine e boiserie perimetrali che vestono la camera con eleganza senza tempo.",
        bullets: [
          "Verniciature ecologiche all'acqua prive di emissioni nocive",
          "Cassetti con guide ammortizzate a scomparsa totale",
        ],
        image: img("ferretti-ferretti/gallery-3.jpg", "Collezione For You: armadiature componibili al millimetro", "© Ferretti e Ferretti"),
      },
    ],
    highlights: [
      "Strutture in legno listellare",
      "Finiture artigianali all'acqua",
      "Lavorazioni fuori misura",
      "Camere e armadiature sartoriali",
    ],
    gallery: [
      img("ferretti-ferretti/gallery-1.jpg", "Collezione Morfeo: camera da letto classica contemporanea", "© Ferretti e Ferretti"),
      img("ferretti-ferretti/gallery-2.jpg", "Collezione Happy Night: falegnameria tradizionale su misura", "© Ferretti e Ferretti"),
      img("ferretti-ferretti/gallery-3.jpg", "Collezione For You: armadiature componibili al millimetro", "© Ferretti e Ferretti"),
      img("ferretti-ferretti/gallery-4.jpg", "Collezione Today: arredi per la casa di oggi con cura artigianale", "© Ferretti e Ferretti"),
    ],
    crossBrands: ["signorini-coco", "zamagna", "mercantini"],
    faqIds: ["solo-un-ambiente", "consulenza-gratuita", "tempi-consegna"],
    formPreset: "notte",
    ctaLabel: "Scopri la collezione in showroom",
  },

  // =========================================================
  // ELETTRODOMESTICI — Smeg & Electrolux
  // =========================================================
  {
    slug: "elettrodomestici",
    name: "Smeg & Electrolux",
    makers: ["Smeg", "Electrolux"],
    category: "Tecnologia e incasso cucina",
    ambienti: ["cucina"],
    status: "active",
    showInGrid: true,
    order: 6,
    logo: null, // Mostra entrambi i loghi Smeg ed Electrolux
    cardClaim: "Estetica architettonica Smeg e ingegneria di cottura Electrolux, integrate a filo nella tua cucina.",
    seo: {
      title: "Elettrodomestici Smeg ed Electrolux a Nocera Inferiore | Proggecta",
      description:
        "Forni a vapore, piani a induzione con cappa integrata, cantine vini e frigoriferi da incasso Smeg ed Electrolux progettati con la tua cucina da Proggecta.",
    },
    hero: {
      eyebrow: "Smeg · Electrolux · Integrazione Tecnica",
      headline: "Ingegneria del calore e del freddo, integrata a filo nell'architettura.",
      subheadline:
        "Forni combinati a vapore, piani a induzione aspiranti, abbattitori e cantine vini Smeg ed Electrolux, selezionati sulle tue abitudini culinarie e incassati al millimetro.",
      image: img("elettrodomestici/hero.jpg", "Colonna forni da incasso integrata in una cucina su misura", "© Smeg"),
    },
    intro:
      "Un elettrodomestico da incasso non si sceglie a progetto concluso: richiede lo studio preliminare delle sezioni di ventilazione, delle quote ergonomiche e degli assorbimenti elettrici. In Proggecta integriamo l'estetica d'autore di Smeg e la tecnologia professionale di Electrolux fin dal primo disegno esecutivo della cucina.",
    whyProggecta: {
      title: "Progettazione tecnica dei vani, aerazione e collaudo",
      body: "Dall'induzione a filo top alle colonne forni con estetica coordinata in vetro Eclipse e rame: forniamo lo schema impianti esatto al tuo cantiere e curiamo direttamente l'incasso, il bilanciamento delle ante e il collaudo funzionale con la nostra squadra.",
    },
    sections: [
      {
        title: "Smeg: estetica architettonica e serie d'autore",
        body: "Linee Dolce Stil Novo, Linea e Classica: superfici in vetro nero eclisse, profili in rame o acciaio spazzolato, cantine vini da incasso, cassetti sommelier e abbattitori domestici che trasformano la parete colonne in una galleria tecnologica.",
        bullets: [
          "Colonne coordinate: forno pirolitico, compatto a vapore, microonde e scaldavivande",
          "Piani cottura a filo o semifilo con griglie in ghisa o vetroceramica",
          "Cantine vini climatizzate e abbattitori di temperatura integrati",
        ],
        image: img("elettrodomestici/gallery-1.jpg", "Forno e piano cottura Smeg in una cucina contemporanea", "© Smeg"),
      },
      {
        title: "Electrolux: cottura assistita a vapore e silenziosità",
        body: "Tecnologia SteamPro e SteamCrisp per cotture professionali a bassa temperatura, piani a induzione SenseBoil con gestione intelligente dei consumi e lavastoviglie ad alta capienza con vasca XXL e cerniere Sliding.",
        bullets: [
          "Sonde termiche al cuore e cottura combinata vapore-calore secco",
          "Frigoriferi e congelatori da incasso NoFrost a colonna fino a 75 cm",
          "Lavastoviglie ultra-silenziose con sollevamento cestello ComfortLift",
        ],
        image: img("elettrodomestici/gallery-2.jpg", "Forno a vapore Electrolux da incasso", "© Electrolux"),
      },
    ],
    highlights: [
      "Cottura combinata a vapore",
      "Induzione con cappa integrata",
      "Cantine vini e abbattitori",
      "Schema impianti e incasso a filo",
    ],
    gallery: [
      img("elettrodomestici/gallery-1.jpg", "Forno termoventilato Smeg Dolce Stil Novo con vetro Eclipse e rame", "© Smeg"),
      img("elettrodomestici/gallery-2.jpg", "Forno compatto e microonde combinato da incasso", "© Smeg"),
      img("elettrodomestici/gallery-3.jpg", "Colonna forni coordinata con finiture di pregio", "© Smeg"),
    ],
    crossBrands: ["ciesse", "zamagna", "materiali-pannelli"],
    faqIds: ["montaggio-incluso", "consulenza-gratuita", "rate"],
    formPreset: "cucina",
    ctaLabel: "Progetta cucina ed elettrodomestici",
  },

  // =========================================================
  // MATERIALI E PANNELLI — Poziello & Riccardi
  // =========================================================
  {
    slug: "materiali-pannelli",
    name: "Poziello & Riccardi",
    makers: ["Poziello & Riccardi"],
    category: "Multistrato, legni ed essenze",
    ambienti: ["cucina", "notte", "living", "contract"],
    status: "active",
    showInGrid: true,
    order: 8,
    logo: logo("poziello-riccardi.svg", "Logo Poziello & Riccardi"),
    cardClaim: "Multistrato fenolico, listellari, tranciati di legno nobile e pannelli certificati per il vero su misura.",
    seo: {
      title: "Materiali e Pannelli Poziello & Riccardi | Proggecta",
      description:
        "Multistrato, listellari, essenze naturali e pannelli certificati Poziello & Riccardi: la filiera strutturale dietro gli arredi sartoriali Proggecta.",
    },
    hero: {
      eyebrow: "Poziello & Riccardi · Filiera Materica",
      headline: "La longevità di un arredo sartoriale nasce dalla fibra del legno.",
      subheadline:
        "Multistrato bilaminato, listellari, tranciati in essenza e pannelli certificati selezionati con Poziello & Riccardi per costruire ciò che l'industria standard non prevede.",
      image: img("materiali-pannelli/hero.jpg", "Pannelli in multistrato e campioni di essenze di legno"),
    },
    intro:
      "Dietro una boiserie a tutta altezza, una cassa cucina che non teme infiltrazioni o un'armadiatura inclinata su misura c'è la qualità meccanica del pannello grezzo. Collaboriamo con Poziello & Riccardi per approvvigionare multistrati strutturali, legni selezionati e laminati tecnici di grado architettonico.",
    whyProggecta: {
      title: "Struttura reale anziché truciolare nobilitato",
      body: "Mentre la grande distribuzione riduce i costi usando pannelli in truciolare a bassa densità che cedono sulle viti delle cerniere, nella materioteca Proggecta tocchi con mano le sezioni stratificate in multistrato e listellare che costituiscono l'ossatura dei nostri lavori.",
    },
    sections: [
      {
        title: "Multistrato strutturale e tenuta meccanica",
        body: "Fogli di legno sfogliato disposti a fibre incrociate e pressati ad alta tenuta: indeformabili nel tempo, resistenti al carico verticale dei ripiani lunghi e all'umidità degli ambienti cucina e bagno.",
        bullets: [
          "Elevata resistenza all'estrazione delle viti e al peso delle ante a tutta altezza",
          "Stabilità dimensionale superiore rispetto ai compositi standard",
          "Ideale per scocche cucina, sottolavelli e strutture contract ad uso intensivo",
        ],
        image: img("materiali-pannelli/hero.jpg", "Sezione di un pannello multistrato con strati di legno incrociati"),
      },
      {
        title: "Tranciati nobili, superfici tattili e salubrità",
        body: "Rovere termotrattato, noce canaletto, frassino spazzolato, nanotecnologie opache soft-touch e pannelli conformi alle più severe normative europee sulle basse emissioni di formaldeide (Classe E1 / CARB P2).",
        bullets: [
          "Salubrità dell'aria domestica garantita per camere e camerette",
          "Bordature laser e poliuretaniche a giunto invisibile contro il vapore",
        ],
        image: img("ciesse/gallery-3.jpg", "Ambiente su misura realizzato con boiserie ed essenze selezionate", "© Proggecta Selection"),
      },
    ],
    highlights: [
      "Multistrato a fibre incrociate",
      "Tranciati in rovere e noce",
      "Certificazione basse emissioni",
      "Esecuzioni di alta falegnameria",
    ],
    gallery: [
      img("materiali-pannelli/hero.jpg", "Sezione stratificata di pannelli in multistrato ed essenze nobili", "© Filiera Proggecta"),
      img("ciesse/gallery-1.jpg", "Applicazione materica su isola e colonne in legno lavorato", "© Proggecta Selection"),
      img("ciesse/gallery-4.jpg", "Boiserie cannettata su misura e falegnameria d'interni", "© Proggecta Selection"),
    ],
    crossBrands: ["ciesse", "mercantini", "moretti-compact"],
    faqIds: ["fuori-misura", "su-misura-costa-di-piu", "consulenza-gratuita"],
    formPreset: "completo",
    ctaLabel: "Esplora la materioteca in showroom",
  },
];

export const getBrand = (slug: string) => brandData.find((b) => b.slug === slug);

export const gridBrands = () =>
  brandData.filter((b) => b.showInGrid && b.status !== "archived").sort((a, b) => a.order - b.order);
