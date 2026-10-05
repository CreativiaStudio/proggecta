import type { ChecklistItem, ComparisonRow, Feature } from "./types";

// ATTENZIONE: i claim tecnici (multistrato, cicli di apertura, durata, certificazioni)
// sono vincolati alla checklist "Claim da validare" in docs/README.md.
// La cassa in multistrato riguarda le realizzazioni su misura Proggecta,
// NON necessariamente i prodotti di serie dei marchi distribuiti.

export const featuresData: Feature[] = [
  {
    id: "multistrato",
    icon: "Layers",
    kicker: "Il cuore del mobile",
    title: "Casse in multistrato, non in truciolare",
    short:
      "Strati incrociati di vero legno incollati a pressione: l'umidità sotto il lavello non lo gonfia, le viti delle cerniere non si allentano.",
    long: "La cassa è la scatola che regge tutto: ante, cerniere, top, elettrodomestici. Nella maggior parte delle cucine commerciali è in truciolare nobilitato, cioè trucioli di legno compressi con colla e rivestiti da una pellicola. Funziona finché resta asciutto. Basta una perdita sotto il lavello o il vapore della lavastoviglie e il pannello si gonfia, si sbriciola e non tiene più le viti. Nelle nostre realizzazioni su misura usiamo il multistrato: fogli di vero legno sovrapposti con le fibre incrociate e pressati. È più stabile, più resistente all'acqua e tiene le viti nel tempo.",
    bullets: [
      "Resiste a umidità e vapore nelle zone critiche (lavello, lavastoviglie, forno)",
      "Tenuta meccanica delle viti superiore: cerniere e guide restano allineate",
      "Indeformabile: le ante non si imbarcano con gli anni",
    ],
    showOn: ["home", "qualita-costruttiva", "contract"],
  },
  {
    id: "ferramenta",
    icon: "Cog",
    kicker: "Ciò che usi mille volte al giorno",
    title: "Ferramenta e meccanica certificata",
    short:
      "Cerniere e guide ammortizzate testate per decine di migliaia di aperture a pieno carico. Si chiudono da sole, in silenzio, per anni.",
    long: "Un cassetto lo apri e chiudi migliaia di volte all'anno. Per questo montiamo guide a estrazione totale con ammortizzatore integrato e cerniere a chiusura rallentata di produttori leader, testate per decine di migliaia di cicli sotto carico. Completano la meccanica cestelli estraibili in acciaio, cappe integrate silenziose e illuminazione LED incassata in canali fresati, senza cavi a vista.",
    bullets: [
      "Guide a estrazione totale con chiusura ammortizzata",
      "Cerniere con regolazione 3D per allineamenti perfetti",
      "Cestelli estraibili in acciaio e attrezzature interne su misura",
      "LED integrati in canali fresati, senza cavi a vista",
    ],
    showOn: ["home", "qualita-costruttiva"],
  },
  {
    id: "superfici",
    icon: "Gem",
    kicker: "Le superfici che tocchi ogni giorno",
    title: "Top e superfici fatti per durare",
    short:
      "Gres porcellanato, HPL a tutto spessore, quarzo, Fenix: resistono a calore, graffi e macchie. Te li facciamo toccare in showroom.",
    long: "Il top è la superficie più maltrattata di casa: pentole bollenti, coltelli, vino, limone. Ti aiutiamo a scegliere il materiale giusto per come cucini davvero: il gres porcellanato per chi vuole resistenza estrema al calore, il quarzo per l'effetto pietra, l'HPL stratificato per chi cerca robustezza e spessori sottili, il Fenix per una superficie opaca, morbida al tatto e anti-impronta. In showroom trovi i campioni veri, da toccare e confrontare.",
    bullets: [
      "Gres porcellanato: resistenza al calore e ai graffi",
      "Quarzo: effetto pietra, compatto e facile da pulire",
      "HPL stratificato: robusto anche in spessori sottili",
      "Fenix: opaco, anti-impronta, micrograffi superficiali riparabili",
    ],
    showOn: ["home", "qualita-costruttiva"],
  },
  {
    id: "salubrita",
    icon: "Leaf",
    kicker: "L'aria di casa tua",
    title: "Materiali sicuri per chi vive la casa",
    short:
      "Pannelli a bassa emissione di formaldeide e finiture certificate: importante in cucina, fondamentale nella cameretta dei bambini.",
    long: "I mobili rilasciano sostanze nell'aria per anni. Per questo selezioniamo pannelli e vernici conformi alle normative più restrittive sulle emissioni e finiture certificate per il contatto quotidiano. È una scelta che non si vede, ma che si respira, soprattutto nelle camerette e nelle camere da letto.",
    showOn: ["qualita-costruttiva"],
  },
  {
    id: "filiera",
    icon: "Trees",
    kicker: "La materia prima del su misura",
    title: "Filiera controllata con Poziello & Riccardi",
    short:
      "Pannelli, legni nobili e semilavorati selezionati da un partner storico: è così che il su misura diventa davvero su misura.",
    long: "Un progetto sartoriale ha bisogno di materia prima tagliata sulle tue misure, non di moduli già pronti. Con Poziello & Riccardi selezioniamo pannelli certificati, essenze e semilavorati con cui le nostre maestranze realizzano tutto ciò che un catalogo non prevede: boiserie, nicchie, chiusure, raccordi, elementi fuori misura.",
    showOn: ["qualita-costruttiva", "progettazione-sartoriale"],
  },
  {
    id: "rilievo",
    icon: "Ruler",
    kicker: "Zero sorprese in cantiere",
    title: "Rilievo laser, non metro a nastro",
    short:
      "Misuriamo ogni parete, angolo e attacco con strumenti laser. Pareti fuori squadro e soffitti irregolari non sono più un problema.",
    long: "Gli errori di misura sono la prima causa di mobili che non entrano, fughe storte e ante disallineate. Il rilievo laser ci dà misure precise di pareti, altezze e angoli reali, insieme alla posizione esatta di impianti e attacchi.",
    showOn: ["progettazione-sartoriale", "home"],
  },
  {
    id: "montaggio-interno",
    icon: "Users",
    kicker: "Le mani che montano casa tua",
    title: "Montatori interni, non squadre a cottimo",
    short:
      "Consegna e montaggio li fa la nostra squadra. Conosce il progetto, i materiali e risponde a noi, non al numero di mobili montati in un giorno.",
    long: "Un mobile perfetto montato male è un mobile rovinato. I nostri montatori lavorano con noi, conoscono ogni dettaglio del progetto e hanno un solo obiettivo: riconsegnarti la casa finita, regolata al millimetro e pulita.",
    showOn: ["qualita-costruttiva", "progettazione-sartoriale", "contract"],
  },
];

export const comparisonIntro = {
  eyebrow: "Quello che non si vede",
  title: "Quello che non vedi è quello che fa durare una cucina trent'anni.",
  body: "Due cucine possono sembrare identiche in esposizione. La differenza la scopri dopo tre anni, sotto il lavello. Ecco cosa c'è dentro la scocca.",
  multistratoLabel: "Multistrato",
  multistratoSub: "Nelle nostre realizzazioni su misura",
  truciolareLabel: "Truciolare nobilitato",
  truciolareSub: "Lo standard di molte cucine commerciali",
  footnote:
    "Esiste anche il truciolare \"idrofugo\" (V100): rallenta l'assorbimento dell'acqua, ma resta un pannello di trucioli compressi. Il multistrato è un'altra struttura.",
  ctaLabel: "Vieni a vedere la differenza dal vivo",
};

export const comparisonRows: ComparisonRow[] = [
  {
    criterion: "Com'è fatto",
    multistrato: "Fogli di vero legno sovrapposti a fibre incrociate e pressati",
    truciolare: "Trucioli e scarti di legno compressi con colla, rivestiti da pellicola",
  },
  {
    criterion: "Acqua e vapore",
    multistrato: "Stabile: non si gonfia in caso di infiltrazioni accidentali",
    truciolare: "Se l'acqua passa da un bordo o da un foro, gonfia e non torna più come prima",
  },
  {
    criterion: "Tenuta delle viti",
    multistrato: "Le viti di cerniere e guide fanno presa sulle fibre del legno",
    truciolare: "Con aperture ripetute il foro si allarga e la cerniera cede",
  },
  {
    criterion: "Stabilità nel tempo",
    multistrato: "Indeformabile, regge carichi pesanti (top in pietra, elettrodomestici)",
    truciolare: "Tende a flettere sotto carico, soprattutto nei ripiani lunghi",
  },
  {
    criterion: "Riparabilità",
    multistrato: "Si può riforare, rifinire, rinforzare",
    truciolare: "Un pannello danneggiato in genere va sostituito",
  },
];

export const buyerChecklistIntro = {
  eyebrow: "Prima di firmare un preventivo, ovunque",
  title: "Le 6 domande da fare a qualunque negozio di cucine",
  body: "Non devi fidarti di noi sulla parola. Fai queste domande a chiunque ti stia proponendo una cucina, noi compresi, e confronta le risposte.",
};

export const buyerChecklist: ChecklistItem[] = [
  {
    question: "Di che materiale è la cassa (la scocca) dei mobili sotto il lavello?",
    whyItMatters: "È la zona più esposta all'acqua. Se la risposta è \"truciolare\", chiedi cosa succede in caso di perdita.",
  },
  {
    question: "Le misure le prendete voi con il laser o devo fornirle io?",
    whyItMatters: "Chi prende le misure si assume la responsabilità degli errori.",
  },
  {
    question: "Vedrò un render fotorealistico prima di firmare l'ordine?",
    whyItMatters: "Una pianta in 2D non ti fa capire volumi, luci e colori. Il render sì.",
  },
  {
    question: "Chi monta: personale vostro o una ditta esterna?",
    whyItMatters: "Il montaggio decide metà del risultato finale e chi deve rispondere se qualcosa non va.",
  },
  {
    question: "Di che marca sono cerniere e guide, e per quanti cicli sono testate?",
    whyItMatters: "Sono i componenti che usi di più. Se non ti sanno rispondere, è un segnale.",
  },
  {
    question: "Il preventivo è dettagliato voce per voce?",
    whyItMatters: "Un prezzo \"a corpo\" nasconde spesso le differenze di materiale e gli extra.",
  },
];
