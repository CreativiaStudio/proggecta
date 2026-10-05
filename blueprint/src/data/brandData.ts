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
  title: "Nessuna fabbrica è la migliore in tutto. Per questo le abbiamo scelte una per una.",
  body: "Chi fa ottime cucine raramente fa anche i migliori armadi, i tavoli più belli o le camerette più sicure. Noi non siamo legati a una sola produzione: abbiamo selezionato i marchi italiani che eccellono in ciascun ambiente e li uniamo in un unico progetto, con un solo interior designer, un solo preventivo e un solo montaggio.",
};

export const brandData: Brand[] = [
  // =========================================================
  // CIESSE — brand in transizione, atterraggio redirect 301
  // =========================================================
  {
    slug: "ciesse",
    name: "Ciesse",
    makers: ["Ciesse"],
    category: "Cucine",
    ambienti: ["cucina"],
    status: "transition",
    showInGrid: true,
    order: 7,
    logo: logo("ciesse.svg", "Logo Ciesse"),
    cardClaim: "Le cucine Ciesse, oggi nella selezione dello showroom Proggecta di Scafati.",
    seo: {
      title: "Cucine Ciesse a Scafati | Showroom Proggecta",
      description:
        "Cerchi le cucine Ciesse? Le trovi nello showroom Proggecta di Scafati, insieme a progettazione su misura, rilievo laser e render 3D gratuito.",
    },
    hero: {
      eyebrow: "Cucine Ciesse",
      headline: "Cercavi Ciesse? Sei nel posto giusto.",
      subheadline:
        "La gamma di cucine Ciesse oggi la trovi nello showroom Proggecta di Scafati, all'interno di una selezione più ampia di marchi italiani e con un servizio di progettazione sartoriale completo.",
      image: img("ciesse/hero.jpg", "Cucina Ciesse in esposizione nello showroom Proggecta di Scafati"),
    },
    transitionNotice: {
      title: "Cosa è cambiato",
      body: "Proggecta è uno studio di progettazione d'interni indipendente, nato a Scafati. Non è una fusione né un cambio di nome: è una realtà nuova, che ha scelto di includere le cucine Ciesse tra i marchi del proprio showroom. Se conoscevi Ciesse per il passaparola o ci sei arrivato dal vecchio sito, qui trovi le stesse cucine, con in più un metodo di progettazione completo e una selezione di marchi per tutta la casa.",
    },
    intro:
      "Chi ha conosciuto le cucine Ciesse ne ricorda la cura sartoriale e l'attenzione al dettaglio. Nello showroom Proggecta puoi vederle dal vivo, confrontarle con le altre soluzioni in esposizione e progettarle sulla tua casa con il nostro metodo: ascolto, rilievo laser, render 3D fotorealistico e montaggio a cura della nostra squadra.",
    whyProggecta: {
      title: "La tua cucina, dentro un progetto di casa completo",
      body: "Da Proggecta la cucina non è un acquisto isolato. Con lo stesso interior designer puoi progettare anche il living, la zona notte e le camerette, scegliendo per ogni ambiente il marchio più adatto. Un unico progetto, un unico interlocutore, nessuna incoerenza tra una stanza e l'altra.",
    },
    sections: [
      {
        title: "Vieni a vederle dal vivo",
        body: "Una cucina si sceglie toccando ante, top e cassetti, non guardando una foto. Prenota una consulenza: l'interior designer ti accompagna tra gli ambienti in esposizione e ti fa confrontare finiture e materiali.",
      },
      {
        title: "Il Metodo Proggecta, applicato alla tua cucina",
        body: "Ogni cucina passa dai nostri quattro step: ascolto delle tue abitudini, rilievo laser dello spazio, render 3D fotorealistico prima dell'ordine, consegna e montaggio con regolazione finale.",
        bullets: [
          "Consulenza e prima proposta gratuite",
          "Rilievo laser millimetrico a domicilio",
          "Render 3D fotorealistico prima di firmare",
          "Montaggio a cura della squadra interna",
        ],
      },
    ],
    highlights: [
      "Showroom a Scafati",
      "Progettazione su misura",
      "Render 3D prima dell'ordine",
      "Montaggio interno",
    ],
    crossBrands: ["elettrodomestici", "zamagna", "materiali-pannelli"],
    faqIds: ["ciesse-stessa-azienda", "ciesse-pratiche", "consulenza-gratuita", "quanto-costa", "tempi-consegna"],
    formPreset: "cucina",
    ctaLabel: "Prenota una visita per vedere le cucine",
  },

  // =========================================================
  // MORETTI COMPACT — camerette, cabine armadio, zona giovani
  // =========================================================
  {
    slug: "moretti-compact",
    name: "Moretti Compact",
    makers: ["Moretti Compact"],
    category: "Camerette e cabine armadio",
    ambienti: ["cameretta", "notte"],
    status: "active",
    showInGrid: true,
    order: 1,
    logo: logo("moretti-compact.svg", "Logo Moretti Compact"),
    cardClaim: "Camerette che crescono con i tuoi figli e cabine armadio che sfruttano ogni centimetro.",
    seo: {
      title: "Camerette Moretti Compact a Scafati | Proggecta",
      description:
        "Camerette evolutive, letti salvaspazio e cabine armadio Moretti Compact progettati su misura nello showroom Proggecta di Scafati. Render 3D gratuito.",
    },
    hero: {
      eyebrow: "Moretti Compact · Camerette e sistemi componibili",
      headline: "Una cameretta che cresce con loro. E con lo spazio che hai davvero.",
      subheadline:
        "Camerette evolutive, letti salvaspazio, scrivanie e cabine armadio Moretti Compact, progettate sulle misure reali della stanza e sulle età dei tuoi figli.",
      image: img("moretti-compact/hero.jpg", "Cameretta Moretti Compact con letto a soppalco e scrivania", "© Moretti Compact"),
    },
    intro:
      "La cameretta è la stanza che cambia di più: oggi ci sono i giochi, tra cinque anni la scrivania per studiare, tra dieci un ragazzo che vuole la sua privacy. Per questo abbiamo scelto Moretti Compact: sistemi componibili pensati per evolvere nel tempo, con soluzioni salvaspazio che in una stanza piccola fanno la differenza.",
    whyProggecta: {
      title: "Perché farla progettare a noi",
      body: "Un catalogo di camerette te lo può dare chiunque. Noi partiamo dal rilievo laser della stanza: finestra, termosifone, porta, pilastri. Poi progettiamo la composizione che sfrutta ogni centimetro e la facciamo vedere in 3D, a te e ai tuoi figli, prima dell'ordine.",
    },
    sections: [
      {
        title: "Camerette evolutive",
        body: "Letti a soppalco, a castello, estraibili e a scomparsa; scrivanie che si allungano; contenitori che cambiano funzione con l'età. Progettiamo pensando a come sarà la stanza tra qualche anno, non solo a oggi.",
        image: img("moretti-compact/camerette.jpg", "Cameretta evolutiva con letto a castello e contenitori", "© Moretti Compact"),
      },
      {
        title: "Due figli, una stanza",
        body: "Quando lo spazio è poco servono idee, non rinunce. Letti sovrapposti, zone studio separate, armadi a ponte: ogni figlio ha il suo angolo, anche in pochi metri quadri.",
      },
      {
        title: "Cabine armadio e zona notte",
        body: "Gli stessi sistemi componibili diventano cabine armadio e armadiature su misura per la camera da letto, con attrezzature interne studiate su cosa devi davvero contenere.",
        image: img("moretti-compact/cabina-armadio.jpg", "Cabina armadio componibile con attrezzature interne", "© Moretti Compact"),
      },
    ],
    highlights: [
      "Soluzioni salvaspazio",
      "Composizioni evolutive",
      "Attenzione alla sicurezza dei più piccoli",
      "Cabine armadio componibili",
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
    category: "Armadi e zona notte",
    ambienti: ["notte"],
    status: "active",
    showInGrid: true,
    order: 2,
    logo: logo("mercantini.svg", "Logo Mercantini"),
    cardClaim: "Armadi battenti e scorrevoli, cabine armadio e camere da letto dal design contemporaneo.",
    seo: {
      title: "Armadi e Camere Mercantini a Scafati | Proggecta",
      description:
        "Armadi battenti e scorrevoli, cabine armadio e zona notte Mercantini progettati su misura nello showroom Proggecta di Scafati. Prenota la consulenza.",
    },
    hero: {
      eyebrow: "Mercantini · Sistemi armadio e zona notte",
      headline: "La camera da letto che ti meriti dopo una lunga giornata.",
      subheadline:
        "Armadiature battenti e scorrevoli, cabine armadio e letti Mercantini: superfici materiche, meccanismi silenziosi e un ordine che si vede appena apri un'anta.",
      image: img("mercantini/hero.jpg", "Camera da letto contemporanea con armadio scorrevole Mercantini", "© Mercantini"),
    },
    intro:
      "La zona notte è l'ambiente più intimo della casa, e l'armadio è il mobile più grande che metterai in una stanza. Per questo abbiamo scelto Mercantini: sistemi armadio dal design contemporaneo, con finiture di alto livello e meccaniche pensate per durare.",
    whyProggecta: {
      title: "Un armadio che entra al millimetro",
      body: "Tra pavimento e soffitto, tra una parete e l'altra, c'è sempre qualche centimetro che un armadio standard spreca. Con il rilievo laser progettiamo la composizione per occupare lo spazio esatto, e organizziamo l'interno in base a cosa devi contenere davvero: abiti lunghi, scarpe, valigie, biancheria.",
    },
    sections: [
      {
        title: "Battenti, scorrevoli, complanari",
        body: "Ti aiutiamo a scegliere l'apertura giusta per la tua stanza: le ante scorrevoli salvano spazio di passaggio, i battenti danno accesso totale, le complanari uniscono i due vantaggi in un'unica superficie continua.",
        image: img("mercantini/armadio-scorrevole.jpg", "Armadio con ante scorrevoli complanari", "© Mercantini"),
      },
      {
        title: "Cabine armadio",
        body: "Se hai una stanza in più, una nicchia o un angolo, può diventare la tua cabina armadio. Progettiamo struttura, illuminazione e attrezzature interne su misura.",
        image: img("mercantini/cabina-armadio.jpg", "Cabina armadio illuminata con ripiani e appenderie", "© Mercantini"),
      },
      {
        title: "La camera completa",
        body: "Letto, comodini, comò e armadio progettati insieme, con le stesse finiture e la stessa luce. Il risultato è una stanza armoniosa, non una somma di mobili.",
      },
    ],
    highlights: [
      "Armadi battenti, scorrevoli e complanari",
      "Cabine armadio su misura",
      "Attrezzature interne personalizzate",
      "Finiture materiche contemporanee",
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
    category: "Tavoli, sedie e living",
    ambienti: ["living", "cucina"],
    status: "active",
    showInGrid: true,
    order: 3,
    logo: logo("zamagna.svg", "Logo Zamagna"),
    cardClaim: "Tavoli allungabili e sedie di design: il punto in cui la casa si ritrova a tavola.",
    seo: {
      title: "Tavoli e Sedie Zamagna a Scafati | Proggecta",
      description:
        "Tavoli allungabili in ceramica e legno, sedie e complementi Zamagna nello showroom Proggecta di Scafati. Scegli dal vivo e abbinali alla tua cucina.",
    },
    hero: {
      eyebrow: "Zamagna · Tavoli, sedie e complementi",
      headline: "Il tavolo è dove la casa si ritrova. Sceglilo con calma, dal vivo.",
      subheadline:
        "Tavoli allungabili in ceramica e legno, sedie di design e complementi Zamagna, abbinati alla tua cucina e al tuo living con lo stesso progetto.",
      image: img("zamagna/hero.jpg", "Tavolo allungabile Zamagna con sedie di design in un living luminoso", "© Zamagna"),
    },
    intro:
      "Un tavolo si vive tutti i giorni: colazioni di fretta, pranzi della domenica, compiti, ospiti inattesi. Per questo abbiamo scelto Zamagna: tavoli allungabili, sedie e complementi che uniscono design contemporaneo e meccanismi pensati per l'uso quotidiano.",
    whyProggecta: {
      title: "Il tavolo giusto per lo spazio giusto",
      body: "Quanto deve essere grande chiuso? Quante persone deve ospitare aperto? Dove si mettono le sedie quando si allunga? Lo studiamo sulla piantina e lo vediamo nel render, insieme alla cucina e al living, così colori e materiali dialogano tra loro.",
    },
    sections: [
      {
        title: "Tavoli allungabili",
        body: "Piani in ceramica, legno e materiali tecnici, meccanismi di apertura fluidi: da tavolo per la famiglia a tavolo per le feste, in pochi secondi.",
        image: img("zamagna/tavolo-allungabile.jpg", "Dettaglio del meccanismo di allungamento di un tavolo Zamagna", "© Zamagna"),
      },
      {
        title: "Sedie e sgabelli",
        body: "Comodità, resistenza e design, anche per l'isola della cucina. Le provi in showroom, perché una sedia si sceglie sedendosi.",
        image: img("zamagna/sedie.jpg", "Sedie di design Zamagna attorno a un tavolo in ceramica", "© Zamagna"),
      },
      {
        title: "Complementi per il living",
        body: "Tavolini, contenitori e complementi che completano la zona giorno e la rendono coerente con il resto della casa.",
      },
    ],
    highlights: [
      "Tavoli allungabili in ceramica e legno",
      "Sedie e sgabelli di design",
      "Complementi per il living",
      "Abbinamenti studiati nel render 3D",
    ],
    crossBrands: ["ciesse", "elettrodomestici", "signorini-coco"],
    faqIds: ["solo-un-ambiente", "consulenza-gratuita", "tempi-consegna"],
    formPreset: "living",
    ctaLabel: "Scegli tavolo e sedie in showroom",
  },

  // =========================================================
  // SIGNORINI & COCO — classico / contemporaneo
  // =========================================================
  {
    slug: "signorini-coco",
    name: "Signorini & Coco",
    makers: ["Signorini & Coco"],
    category: "Arredo classico e contemporaneo",
    ambienti: ["living", "notte"],
    status: "active",
    showInGrid: true,
    order: 4,
    logo: logo("signorini-coco.svg", "Logo Signorini & Coco"),
    cardClaim: "Maestria artigiana per chi ama un arredo elegante, ricco di dettagli, senza tempo.",
    seo: {
      title: "Arredo Signorini & Coco a Scafati | Proggecta",
      description:
        "Arredo classico e contemporaneo Signorini & Coco nello showroom Proggecta di Scafati. Progettazione su misura e render 3D gratuito.",
    },
    hero: {
      eyebrow: "Signorini & Coco · Classico e contemporaneo",
      headline: "Per chi crede che l'eleganza sia fatta di dettagli.",
      subheadline:
        "Arredi Signorini & Coco per living e zona notte: lavorazioni artigianali, finiture preziose e uno stile che attraversa le mode senza invecchiare.",
      image: img("signorini-coco/hero.jpg", "Living elegante con arredi Signorini & Coco", "© Signorini & Coco"),
    },
    intro:
      "C'è chi cerca il minimalismo e chi vuole una casa che racconti qualcosa: intagli, finiture, materiali che si fanno guardare. Per questo pubblico abbiamo scelto Signorini & Coco, sinonimo di maestria artigiana nell'arredo classico e contemporaneo.",
    whyProggecta: {
      title: "Classico, ma cucito sulla tua casa",
      body: "Un arredo importante ha bisogno dello spazio giusto per respirare. Lo inseriamo nel progetto complessivo, curando proporzioni, luci e abbinamenti con gli altri ambienti, e lo verifichi nel render prima dell'ordine.",
    },
    sections: [
      {
        title: "Living e zona giorno",
        body: "Composizioni, vetrine, tavoli e complementi che danno carattere alla zona giorno.",
        image: img("signorini-coco/living.jpg", "Dettaglio di una lavorazione artigianale Signorini & Coco", "© Signorini & Coco"),
      },
      {
        title: "Camere da letto",
        body: "Camere complete con finiture coordinate, per chi vuole una zona notte dal carattere deciso.",
      },
    ],
    highlights: ["Lavorazioni artigianali", "Finiture preziose", "Living e zona notte", "Stile senza tempo"],
    crossBrands: ["ferretti-ferretti", "mercantini", "zamagna"],
    faqIds: ["solo-un-ambiente", "consulenza-gratuita", "tempi-consegna"],
    formPreset: "living",
    ctaLabel: "Scopri la collezione in showroom",
  },

  // =========================================================
  // FERRETTI E FERRETTI — classico / contemporaneo
  // =========================================================
  {
    slug: "ferretti-ferretti",
    name: "Ferretti e Ferretti",
    makers: ["Ferretti e Ferretti"],
    category: "Arredo classico e contemporaneo",
    ambienti: ["living", "notte"],
    status: "active",
    showInGrid: true,
    order: 5,
    logo: logo("ferretti-ferretti.svg", "Logo Ferretti e Ferretti"),
    cardClaim: "Arredi di tradizione sartoriale, reinterpretati per la casa di oggi.",
    seo: {
      title: "Arredo Ferretti e Ferretti a Scafati | Proggecta",
      description:
        "Arredi Ferretti e Ferretti per living e zona notte nello showroom Proggecta di Scafati. Progettazione su misura e consulenza gratuita.",
    },
    hero: {
      eyebrow: "Ferretti e Ferretti · Classico e contemporaneo",
      headline: "La tradizione dell'arredo italiano, nella casa di oggi.",
      subheadline:
        "Arredi Ferretti e Ferretti per chi cerca materiali nobili e un gusto sartoriale, inseriti in un progetto d'interni coerente.",
      image: img("ferretti-ferretti/hero.jpg", "Ambiente arredato con mobili Ferretti e Ferretti", "© Ferretti e Ferretti"),
    },
    intro:
      "Abbiamo scelto Ferretti e Ferretti per completare la nostra proposta di arredo classico e contemporaneo: mobili che uniscono cura artigianale e materiali nobili, per ambienti dal carattere riconoscibile.",
    whyProggecta: {
      title: "Un unico progetto, anche quando gli stili si incontrano",
      body: "Tante case oggi mescolano un living contemporaneo con pezzi di gusto più classico. Il nostro lavoro è far dialogare stili, materiali e proporzioni, e mostrartelo nel render 3D prima di decidere.",
    },
    sections: [
      {
        title: "Ambienti dal carattere riconoscibile",
        body: "Living, zona pranzo e camere da letto con finiture coordinate e cura artigianale del dettaglio.",
        image: img("ferretti-ferretti/ambiente.jpg", "Dettaglio di arredo Ferretti e Ferretti", "© Ferretti e Ferretti"),
      },
    ],
    highlights: ["Gusto sartoriale", "Materiali nobili", "Living e zona notte"],
    crossBrands: ["signorini-coco", "zamagna", "mercantini"],
    faqIds: ["solo-un-ambiente", "consulenza-gratuita", "tempi-consegna"],
    formPreset: "living",
    ctaLabel: "Scopri la collezione in showroom",
  },

  // =========================================================
  // ELETTRODOMESTICI — Smeg & Electrolux
  // =========================================================
  {
    slug: "elettrodomestici",
    name: "Smeg & Electrolux",
    makers: ["Smeg", "Electrolux"],
    category: "Elettrodomestici",
    ambienti: ["cucina"],
    status: "active",
    showInGrid: true,
    order: 6,
    logo: null, // In griglia mostrare entrambi i loghi affiancati
    cardClaim: "Il design iconico di Smeg e la tecnologia Electrolux, integrati al millimetro nella tua cucina.",
    seo: {
      title: "Elettrodomestici Smeg ed Electrolux a Scafati | Proggecta",
      description:
        "Forni, piani cottura, frigoriferi e lavastoviglie Smeg ed Electrolux integrati nella tua cucina su misura. Showroom Proggecta a Scafati.",
    },
    hero: {
      eyebrow: "Smeg · Electrolux · Elettrodomestici",
      headline: "Gli elettrodomestici sono il motore della cucina. Sceglili insieme al progetto.",
      subheadline:
        "Forni, piani cottura, cappe, frigoriferi e lavastoviglie Smeg ed Electrolux, scelti in base a come cucini e integrati nella cucina con precisione millimetrica.",
      image: img("elettrodomestici/hero.jpg", "Colonna forni da incasso integrata in una cucina su misura"),
    },
    intro:
      "Scegliere gli elettrodomestici dopo aver disegnato la cucina è l'errore più comune: incassi che non tornano, aerazioni sbagliate, frigoriferi che non entrano. Noi li progettiamo insieme ai mobili, scegliendo tra il design riconoscibile di Smeg e le prestazioni tecnologiche di Electrolux.",
    whyProggecta: {
      title: "Scelti per come cucini, non per come appaiono in vetrina",
      body: "Cucini ogni giorno o solo nel weekend? Siete in due o in sei? Usi il vapore, la cottura a induzione, l'abbattitore? Partiamo dalle tue abitudini per consigliarti l'elettrodomestico giusto, poi ci occupiamo di incasso, aerazione e allacciamento.",
    },
    sections: [
      {
        title: "Smeg: il design che si riconosce",
        body: "Forni, piani e frigoriferi dal design iconico, per chi vuole che l'elettrodomestico sia anche un elemento d'arredo.",
        image: img("elettrodomestici/smeg.jpg", "Forno e piano cottura Smeg in una cucina contemporanea", "© Smeg"),
      },
      {
        title: "Electrolux: la tecnologia in cucina",
        body: "Forni a vapore, piani a induzione, lavastoviglie silenziose: soluzioni tecnologiche pensate per cucinare meglio e consumare meno.",
        image: img("elettrodomestici/electrolux.jpg", "Forno a vapore Electrolux da incasso", "© Electrolux"),
      },
      {
        title: "Incasso e installazione a regola d'arte",
        body: "Progettiamo vani, aerazioni e collegamenti in base alle schede tecniche di ogni modello, e i nostri montatori si occupano dell'installazione.",
      },
    ],
    highlights: ["Forni e piani cottura", "Frigoriferi e lavastoviglie da incasso", "Cappe integrate", "Installazione inclusa nel progetto"],
    crossBrands: ["ciesse", "zamagna", "materiali-pannelli"],
    faqIds: ["montaggio-incluso", "consulenza-gratuita", "rate"],
    formPreset: "cucina",
    ctaLabel: "Progetta la cucina con gli elettrodomestici",
  },

  // =========================================================
  // MATERIALI E PANNELLI — Poziello & Riccardi
  // =========================================================
  {
    slug: "materiali-pannelli",
    name: "Poziello & Riccardi",
    makers: ["Poziello & Riccardi"],
    category: "Materiali, pannelli e legni",
    ambienti: ["cucina", "notte", "living", "contract"],
    status: "active",
    showInGrid: true,
    order: 8,
    logo: logo("poziello-riccardi.svg", "Logo Poziello & Riccardi"),
    cardClaim: "Pannelli certificati, legni nobili e semilavorati: la materia prima del vero su misura.",
    seo: {
      title: "Materiali e Pannelli Poziello & Riccardi | Proggecta",
      description:
        "Multistrato, pannelli certificati, essenze e semilavorati Poziello & Riccardi: la filiera dietro gli arredi su misura Proggecta a Scafati.",
    },
    hero: {
      eyebrow: "Poziello & Riccardi · Materiali e semilavorati",
      headline: "Il su misura vero comincia dalla materia prima.",
      subheadline:
        "Multistrato, pannelli certificati, essenze e semilavorati selezionati con Poziello & Riccardi: è con questi materiali che realizziamo tutto ciò che un catalogo non prevede.",
      image: img("materiali-pannelli/hero.jpg", "Pannelli in multistrato e campioni di essenze di legno"),
    },
    intro:
      "Dietro ogni nicchia sfruttata, ogni boiserie, ogni anta fuori misura c'è un pannello scelto bene. Per questo lavoriamo con Poziello & Riccardi, partner per pannellature, legni e semilavorati con cui le nostre maestranze trasformano il progetto in arredo.",
    whyProggecta: {
      title: "Perché ti interessa sapere da dove vengono i pannelli",
      body: "Perché la qualità di un mobile su misura dipende per metà dal progetto e per metà dal materiale. Un pannello stabile non si imbarca, tiene le viti e invecchia bene. Un pannello scadente rovina anche il progetto migliore.",
    },
    sections: [
      {
        title: "Multistrato per le casse",
        body: "Fogli di legno incrociati e pressati: la base strutturale delle nostre realizzazioni su misura, stabile all'umidità e solida nella tenuta della ferramenta.",
        image: img("materiali-pannelli/multistrato.jpg", "Sezione di un pannello multistrato con strati di legno incrociati"),
      },
      {
        title: "Essenze e finiture",
        body: "Impiallacciati in legno naturale, laccati, materici: una gamma ampia di superfici da toccare in showroom e abbinare tra loro.",
        image: img("materiali-pannelli/essenze.jpg", "Campionario di essenze e finiture per ante"),
      },
      {
        title: "Pannelli certificati e a basse emissioni",
        body: "Materiali conformi alle normative sulle emissioni, per una casa più sana, soprattutto nelle camere da letto e nelle camerette.",
      },
    ],
    highlights: ["Multistrato strutturale", "Essenze e laccati", "Pannelli certificati", "Lavorazioni fuori misura"],
    crossBrands: ["ciesse", "mercantini", "moretti-compact"],
    faqIds: ["fuori-misura", "su-misura-costa-di-piu", "consulenza-gratuita"],
    formPreset: "completo",
    ctaLabel: "Tocca i materiali in showroom",
  },
];

export const getBrand = (slug: string) => brandData.find((b) => b.slug === slug);

export const gridBrands = () =>
  brandData.filter((b) => b.showInGrid && b.status !== "archived").sort((a, b) => a.order - b.order);
