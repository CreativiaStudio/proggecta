import type { Feature, ComparisonRow } from "./types";

export const homeCopy = {
  hero: {
    eyebrow: "Studio di progettazione sartoriale",
    headline: "Qui la cucina non si sceglie. Si progetta su di te.",
    subheadline:
      "Ogni progetto Proggecta nasce da un rilievo laser e diventa un pezzo unico: il tuo. Un unico interior designer ti segue dal primo sopralluogo all'ultima regolazione dell'anta, con render 3D prima di ordinare e scocca in multistrato marino.",
    cta: {
      label: "Scopri il Metodo Sartoriale ↓",
      href: "#metodo",
    },
    secondaryCta: {
      label: "Preferisci scriverci? WhatsApp →",
      href: "#whatsapp",
    },
    microcopy: "",
    chips: [
      { icon: "Sparkles", label: "Consulenza e render 3D gratuiti" },
      { icon: "Layers", label: "Scocca in multistrato" },
      { icon: "UserRound", label: "Un interior designer dedicato" },
      { icon: "Store", label: "Showroom a Nocera Inferiore" },
    ],
  },
  brandsStrip: {
    label: "Selezioniamo e progettiamo con l'eccellenza italiana",
  },
  problem: {
    eyebrow: "Perché il mobile standard delude",
    title: "Il mobile standard ti chiede di adattarti. Noi facciamo il contrario.",
    cards: [
      {
        title: "Il modulo da 60 che non ci sta.",
        body: "I mobili a catalogo hanno misure fisse. La tua parete no. Risultato: tamponamenti, buchi e centimetri persi in ogni stanza.",
      },
      {
        title: "Il mobile che si gonfia sotto il lavello.",
        body: "Truciolare e umidità non vanno d'accordo. Dopo qualche anno le ante cedono e le cerniere non tengono più.",
      },
      {
        title: "Cinque negozi per arredare una casa.",
        body: "Uno per la cucina, uno per gli armadi, uno per le camerette. Nessuno guarda l'insieme, e alla fine gli stili non si parlano.",
      },
    ],
  },
  showroom: {
    eyebrow: "Showroom & Materioteca",
    title: "Vieni a toccare con mano ciò che un catalogo non mostra.",
    body: "Una cucina non si sceglie su uno schermo: si giudica dalla tenuta della scocca in multistrato, dalla solidità delle cerniere e dalla sensazione tattile delle superfici. Nello showroom Proggecta tocchi dal vivo le sezioni costruttive, accosti marmi e legni nella materioteca e definisci ogni dettaglio con chi il mobile lo progetta davvero.",
    cta: {
      label: "Prenota la tua visita in showroom",
      href: "#prenota",
    },
  },
  founder: {
    name: "Atelier Proggecta",
    role: "Team Progettazione Sartoriale",
    quote:
      "Ogni casa ha le sue misure reali e la sua storia. Nel nostro showroom a Nocera Inferiore curiamo ogni progetto dall'ascolto iniziale al montaggio finale, con maestranze interne e un referente dedicato.",
  },
  contract: {
    eyebrow: "Divisione Contract",
    title: "Hotel, B&B, ristoranti e boutique: spazi che lavorano per il tuo business.",
    body: "Progettiamo e forniamo arredi su misura per strutture ricettive e locali commerciali, con materiali pensati per l'uso intensivo, un cronoprogramma condiviso e un unico referente dal rilievo alla posa. Collaboriamo con architetti e progettisti.",
    cta: {
      label: "Scopri la divisione Contract →",
      href: "/contract",
    },
  },
  bookingForm: {
    eyebrow: "Prenota la consulenza",
    title: "Scegli il giorno. Al resto pensiamo noi.",
    body: "Un'ora con il tuo interior designer, gratuita e senza impegno. Porta la piantina o qualche foto: usciremo con una prima idea concreta e una forbice di spesa chiara.",
  },
  finalCta: {
    title: "La casa che hai in mente esiste già. Va solo progettata.",
    body: "Prenota la consulenza gratuita: in un'ora capirai cosa si può fare con i tuoi spazi e con il tuo budget.",
    cta: {
      label: "Prenota la tua consulenza gratuita",
      href: "#prenota",
    },
  },
};

export const progettazioneCopy = {
  seo: {
    title: "Progettazione Sartoriale d'Interni a Nocera Inferiore | Proggecta",
    description:
      "Progettiamo cucine, armadi e camerette al millimetro: rilievo laser, render 3D fotorealistico e soluzioni per pilastri, nicchie e mansarde. Consulenza gratuita.",
  },
  hero: {
    eyebrow: "Progettazione sartoriale",
    headline: "La casa si adatta a te. Non il contrario.",
    subheadline:
      "Un abito sartoriale si cuce sulle tue misure, non su una taglia. Noi facciamo lo stesso con la tua casa: la misuriamo al laser, la ridisegniamo in 3D e la arrediamo con il meglio di ogni comparto.",
    cta: {
      label: "Prenota la consulenza gratuita",
      href: "#prenota",
    },
  },
  comparison: {
    title: "Non tutto quello che si chiama 'su misura' lo è davvero.",
    body: "Molti negozi chiamano 'su misura' una composizione di moduli standard con qualche pannello di chiusura per riempire i buchi. È un adattamento, non un progetto. Su misura vero significa partire dalla tua parete reale (con i suoi fuori squadro, i suoi impianti, la sua luce) e disegnare ogni elemento perché la occupi esattamente.",
    standardPoints: [
      "Moduli prefissati da 45/60/90 cm",
      "Tamponamenti per chiudere i vuoti",
      "Altezze fisse e spazi sprecati",
      "Gli impianti si spostano per far entrare i mobili",
    ],
    proggectaPoints: [
      "Ogni elemento calibrato sulla misura reale",
      "Zero centimetri o vani persi",
      "Sviluppo verticale a tutta altezza",
      "I mobili si disegnano attorno ai tuoi impianti",
    ],
  },
  constraints: {
    title: "Pilastri, nicchie, mansarde: per noi non sono problemi. Sono il punto di partenza.",
    cards: [
      {
        icon: "Box",
        title: "Pilastri e travi",
        body: "Li inglobiamo nella composizione e nei volumi, fino a farli sparire nel design.",
      },
      {
        icon: "Layers",
        title: "Nicchie e rientranze",
        body: "Diventano librerie su misura, dispense attrezzate o cabine armadio a scomparsa.",
      },
      {
        icon: "Ruler",
        title: "Tetti inclinati e mansarde",
        body: "Armadi e contenitori che seguono la pendenza al millimetro, senza un centimetro sprecato.",
      },
      {
        icon: "ScanLine",
        title: "Pareti fuori squadro",
        body: "Il rilievo laser le registra, il progetto le compensa. A occhio nudo, tutto perfettamente dritto.",
      },
      {
        icon: "Sparkles",
        title: "Sottoscala e angoli ciechi",
        body: "Cassetti estraibili ad alta portata, ripostigli e angoli attrezzati funzionali.",
      },
      {
        icon: "Cog",
        title: "Impianti e scarichi complessi",
        body: "Attacchi, scarichi e prese diventano parte integrante del progetto, mai un ostacolo.",
      },
    ],
  },
  render3d: {
    title: "Entra nella tua casa prima che esista.",
    body: "Il render fotorealistico è il momento in cui il progetto smette di essere un disegno e diventa casa tua. Vedi i colori con la luce reale delle tue finestre, le proporzioni esatte, come dialogano cucina e living. E se qualcosa non ti convince, lo cambiamo prima di produrre, non dopo il montaggio.",
    bullets: [
      "Finiture e materiali reali scelti insieme in showroom",
      "Più viste prospettiche dello stesso ambiente",
      "Modifiche incluse fino all'approvazione definitiva",
      "Si va in produzione solo quando sei convinto al 100%",
    ],
  },
  singleDirector: {
    title: "Il meglio di ogni marchio, con un unico progetto.",
    body: "La cucina di un comparto, gli armadi di un altro, la cameretta di un terzo: da soli sarebbero tre acquisti scollegati. Nel nostro progetto diventano una casa sola, con materiali, colori e proporzioni coordinati. E per te, un solo interlocutore, un solo preventivo, un solo montaggio.",
  },
  bringAndGet: {
    title: "Cosa porti, cosa ricevi",
    bring: [
      "Piantina (anche una foto dallo smartphone)",
      "Misure indicative delle pareti",
      "Foto degli ambienti attuali",
      "Immagini e stili che ti ispirano",
    ],
    get: [
      "Una prima ipotesi distributiva su misura",
      "Una forbice di spesa realistica e trasparente",
      "Campioni fisici dei materiali toccati con mano",
    ],
  },
  finalCta: {
    title: "Hai una piantina? Hai già metà progetto.",
    body: "Portala in showroom o inviacela per iniziare a dare forma alla tua nuova casa.",
    cta: {
      label: "Prenota la consulenza gratuita",
      href: "#prenota",
    },
  },
};

export const qualitaCopy = {
  seo: {
    title: "Qualità Costruttiva: Multistrato vs Truciolare | Proggecta",
    description:
      "Cosa c'è dentro un mobile che dura: casse in multistrato, ferramenta certificata, top resistenti e materiali a basse emissioni. Scopri il manifesto Proggecta.",
  },
  hero: {
    eyebrow: "Il nostro manifesto della qualità",
    headline: "Il vero lusso è quello che dura.",
    subheadline:
      "Un mobile si giudica dopo dieci anni, non il giorno del montaggio. Ecco cosa c'è dentro i nostri arredi, e perché fa la differenza.",
    cta: {
      label: "Prenota una visita in showroom",
      href: "#prenota",
    },
  },
  manifesto: [
    "Crediamo che una cucina debba durare più di un'auto.",
    "Che una cerniera debba chiudersi in silenzio anche dopo decine di migliaia di aperture.",
    "Che il mobile sotto il lavello non debba temere una perdita d'acqua.",
    "Che l'aria di una cameretta debba essere pulita e priva di emissioni nocive.",
    "E che il cliente abbia il diritto di sapere esattamente di cosa è fatto quello che compra.",
  ],
  filiera: {
    title: "La materia prima del su misura.",
    body: "Per le nostre realizzazioni su misura collaboriamo con Poziello & Riccardi: pannelli certificati a bassissima emissione di formaldeide (classe E1/CARB P2), legni selezionati e semilavorati di precisione. La qualità del mobile finito nasce dalla purezza del pannello grezzo.",
  },
  checklist: {
    title: "Le 6 domande da fare a qualunque negozio prima di firmare",
    intro:
      "Prima di scegliere una cucina o un armadio, fai queste domande al venditore. Se le risposte sono vaghe, sai cosa aspettarti.",
  },
};

export const contractCopy = {
  seo: {
    title: "Arredamento Contract per Hotel, B&B e Ristoranti | Proggecta",
    description:
      "Progettazione e fornitura di arredi su misura per hotel, B&B, ristoranti, boutique e uffici in Campania. Cronoprogramma condiviso e un unico referente.",
  },
  hero: {
    eyebrow: "Proggecta Contract",
    headline: "Spazi che lavorano per il tuo business.",
    subheadline:
      "Progettiamo, produciamo e posiamo arredi su misura per hotel, B&B, case vacanza, ristoranti, boutique e uffici. Un unico referente dal rilievo all'apertura.",
    cta: {
      label: "Richiedi un sopralluogo gratuito",
      href: "#contract-form",
    },
    secondaryCta: {
      label: "Sei un architetto? Parliamone →",
      href: "#architetti",
    },
  },
  sectors: [
    {
      icon: "Hotel",
      title: "Hotel e resort",
      body: "Camere, reception, aree lounge e suite con materiali ad alta resistenza.",
    },
    {
      icon: "Coffee",
      title: "B&B e case vacanza",
      body: "Soluzioni che ottimizzano ogni metro quadro e reggono il continuo turnover degli ospiti.",
    },
    {
      icon: "Store",
      title: "Ristoranti, bar e locali",
      body: "Banconi, sale, arredi tecnici su misura per il tuo flusso di lavoro e l'atmosfera desiderata.",
    },
    {
      icon: "ShoppingBag",
      title: "Boutique e retail",
      body: "Espositori, pareti attrezzate e layout che esaltano il prodotto e l'esperienza d'acquisto.",
    },
    {
      icon: "Briefcase",
      title: "Uffici e studi professionali",
      body: "Spazi operativi, sale riunioni, reception e postazioni ergonomiche su misura.",
    },
    {
      icon: "Ruler",
      title: "Architetti e studi",
      body: "Sviluppiamo gli esecutivi e realizziamo il tuo concept chiavi in mano con rispetto maniacale del disegno.",
    },
  ],
  localContext: {
    title: "A due passi da Pompei, dalla Costiera e dalla Penisola Sorrentina.",
    body: "Il nostro territorio vive di ospitalità. Ogni stagione conta, e una camera ferma è un incasso perso. Per questo il nostro lavoro contract si misura su due parametri inflessibili: arredi che reggono l'uso intensivo di centinaia di ospiti, e date di consegna rispettate al millimetro per non perdere l'apertura.",
  },
  advantages: [
    {
      title: "Un unico referente",
      body: "Progetto, campionature, produzione, logistica e posa con un solo interlocutore responsabile.",
    },
    {
      title: "Materiali per l'uso intensivo",
      body: "Casse in multistrato, superfici antigraffio, ferramenta per alto numero di cicli e certificazioni ignifughe dove richiesto.",
    },
    {
      title: "Cronoprogramma vincolante",
      body: "Date certe per ogni fase, calibrate a ritroso rispetto alla tua data di apertura o inaugurazione.",
    },
    {
      title: "La forza del multi-brand",
      body: "Accesso diretto alle migliori produzioni italiane in un'unica fornitura con condizioni riservate B2B.",
    },
  ],
  architects: {
    title: "Il tuo progetto, la nostra esecuzione.",
    body: "Se il concept è tuo, resta tuo. Noi sviluppiamo i disegni esecutivi di falegnameria, ti forniamo le campionature fisiche, gestiamo produzione, logistica e squadre di posa, tenendoti aggiornato a ogni passaggio. Tu mantieni il pieno controllo creativo con il committente.",
  },
};

export const showroomCopy = {
  seo: {
    title: "Showroom Arredamento a Nocera Inferiore (SA) | Orari e Contatti | Proggecta",
    description:
      "Lo showroom Proggecta a Nocera Inferiore: cucine, zona notte, camerette e living. Parcheggio riservato. Prenota la tua consulenza gratuita o scrivici su WhatsApp.",
  },
  hero: {
    eyebrow: "Showroom Proggecta · Nocera Inferiore (SA)",
    headline: "Ti aspettiamo a Nocera Inferiore. Il caffè lo offriamo noi.",
    subheadline:
      "Ambienti curati da vivere, campionari materici completi, un interior designer dedicato e tutto il tempo che ti serve per scegliere con calma.",
    cta: {
      label: "Prenota la visita",
      href: "#prenota",
    },
  },
  timeline: [
    {
      step: 1,
      title: "Accoglienza",
      body: "Ti accoglie il tuo interior designer dedicato, che ha già studiato la tua richiesta.",
    },
    {
      step: 2,
      title: "Ascolto (15 min)",
      body: "Come vivi la casa, quali esigenze hai, che budget ti sei prefissato.",
    },
    {
      step: 3,
      title: "Giro negli ambienti (30 min)",
      body: "Tocchi i materiali con mano, apri i cassetti, provi sedute, tavoli e meccanismi.",
    },
    {
      step: 4,
      title: "Prima idea concreta (20–30 min)",
      body: "Sulla tua piantina, disegniamo una prima ipotesi distributiva e definiamo una forbice di spesa chiara.",
    },
  ],
  whatToBring: [
    "Piantina (anche una foto dallo smartphone)",
    "Foto degli ambienti attuali",
    "Misure indicative delle pareti",
    "Immagini di stili che ti piacciono",
    "Chi deciderà con te (per scegliere insieme con serenità)",
  ],
  location: {
    parking: "Ampio parcheggio privato riservato ai clienti all'interno della struttura.",
    directions: "Zona industriale Fosso Imperatore (Lotto 14), facilmente raggiungibile dall'uscita autostradale A3 Nocera Inferiore o A30 Nocera-Pagani.",
    localSeoText:
      "Siamo a Nocera Inferiore (Località Fosso Imperatore – Lotto 14), nel cuore dell'Agro Nocerino-Sarnese, a pochi minuti da Nocera Superiore, Pagani, Cava de' Tirreni, Angri, Pompei, San Valentino Torio, Sarno, Salerno e Napoli.",
  },
};
