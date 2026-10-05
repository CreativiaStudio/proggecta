import type { FaqItem } from "./types";

// Le FAQ con draft: true NON vanno renderizzate finché il contenuto non è validato
// (vedi docs/README.md → "Claim da validare").

export const faqData: FaqItem[] = [
  // ---------------- PREZZI ----------------
  {
    id: "quanto-costa",
    category: "prezzi",
    question: "Quanto costa una cucina (o un arredo) su misura?",
    answer:
      "Dipende da dimensioni, materiali e accessori, ed è per questo che non pubblichiamo listini \"a partire da\" che poi non corrispondono a niente. Ti diamo però una promessa: già al primo incontro in showroom esci con una forbice di spesa realistica per il tuo progetto, e il preventivo definitivo è dettagliato voce per voce. Su misura non vuol dire fuori budget: vuol dire spendere ogni euro dove serve davvero.",
  },
  {
    id: "consulenza-gratuita",
    category: "prezzi",
    question: "La consulenza e il render 3D sono davvero gratuiti?",
    answer:
      "Sì. La consulenza in showroom con l'interior designer e la prima proposta progettuale sono gratuite e senza impegno. Se il progetto ti convince, si procede con rilievo, render definitivi e preventivo dettagliato. Se non ti convince, non devi niente a nessuno.",
  },
  {
    id: "su-misura-costa-di-piu",
    category: "prezzi",
    question: "Il su misura costa sempre più di un mobile standard?",
    answer:
      "Non sempre. Un progetto ben fatto elimina tamponamenti, sprechi di spazio ed elementi inutili che nei moduli standard paghi comunque. E soprattutto dura di più: una cucina che non devi cambiare dopo pochi anni è quella che costa meno nel tempo.",
  },

  // ---------------- PAGAMENTO ----------------
  {
    id: "rate",
    category: "pagamento",
    question: "Posso pagare a rate?",
    answer:
      "Sì, puoi dilazionare l'acquisto con soluzioni di finanziamento tramite istituti partner, salvo approvazione della finanziaria. Le condizioni aggiornate (comprese le eventuali promozioni a tasso agevolato) te le illustriamo in showroom con tutti i documenti informativi.",
    // Se si pubblicizza "tasso zero" servono TAN, TAEG ed esempio rappresentativo (vedi README).
  },
  {
    id: "bonus-mobili",
    category: "pagamento",
    question: "Posso usufruire del Bonus Mobili?",
    answer:
      "Se stai ristrutturando casa potresti avere diritto alla detrazione fiscale per l'acquisto di mobili ed elettrodomestici. Ti aiutiamo a impostare documenti e pagamenti nel modo corretto; per la verifica dei requisiti ti consigliamo di confrontarti con il tuo commercialista.",
    draft: true, // Verificare validità e massimali dell'agevolazione per l'anno in corso.
  },

  // ---------------- TEMPI ----------------
  {
    id: "tempi-consegna",
    category: "tempi",
    question: "Quanto tempo passa dall'ordine al montaggio?",
    answer:
      "Dipende dai marchi e dalle finiture scelte: ogni produttore ha i suoi tempi e le lavorazioni su misura richiedono il loro. Quello che conta è che la data te la comunichiamo per iscritto in fase d'ordine e la teniamo monitorata per tutto il percorso. Se hai una scadenza (trasloco, matrimonio, fine lavori), diccelo al primo incontro: pianifichiamo il progetto a ritroso da quella data.",
  },
  {
    id: "consulenza-durata",
    category: "tempi",
    question: "Quanto dura la consulenza in showroom?",
    answer:
      "Indicativamente tra 60 e 90 minuti. È il tempo giusto per capire come vivi la casa, guardare la piantina insieme e toccare materiali e finiture negli ambienti allestiti. Prenotando, l'interior designer è dedicato solo a te per tutto il tempo.",
  },

  // ---------------- PROGETTO ----------------
  {
    id: "fuori-misura",
    category: "progetto",
    question: "Casa mia ha pilastri, nicchie, mansarde o pareti storte. Si può fare?",
    answer:
      "È esattamente il nostro mestiere. Pilastri, travi, tetti inclinati, sottoscala, pareti fuori squadro e attacchi in posizioni scomode sono i casi in cui un mobile standard ti fa perdere spazio e un progetto sartoriale te lo restituisce. Il rilievo laser ci permette di sfruttare ogni centimetro.",
  },
  {
    id: "cosa-portare",
    category: "progetto",
    question: "Cosa devo portare alla consulenza?",
    answer:
      "Se ce l'hai, la piantina della casa (anche una foto del foglio va benissimo). Altrimenti bastano qualche foto degli ambienti e le misure indicative delle pareti principali. Porta anche le immagini che ti piacciono (Instagram, Pinterest): ci aiutano a capire il tuo gusto. Le misure precise le prendiamo noi con il rilievo laser.",
  },
  {
    id: "solo-un-ambiente",
    category: "progetto",
    question: "Posso progettare solo un ambiente o devo arredare tutta casa?",
    answer:
      "Puoi partire da quello che ti serve: solo la cucina, solo la cameretta, solo la cabina armadio. Il vantaggio di lavorare con noi è che, quando vorrai completare il resto, avrai un unico progettista che conosce già la tua casa e garantisce coerenza tra tutti gli ambienti.",
  },
  {
    id: "perche-multibrand",
    category: "progetto",
    question: "Perché affidarmi a voi e non direttamente a un'unica fabbrica?",
    answer:
      "Perché nessuna fabbrica è la migliore in tutto. Chi fa ottime cucine raramente fa anche i migliori armadi o le camerette più sicure. Noi abbiamo selezionato il meglio per ciascun ambiente e lo uniamo in un unico progetto coerente, con un solo interlocutore, un solo preventivo e un solo montaggio.",
  },

  // ---------------- SERVIZIO ----------------
  {
    id: "montaggio-incluso",
    category: "servizio",
    question: "Trasporto e montaggio sono inclusi?",
    answer:
      "Consegna e montaggio sono eseguiti dalla nostra squadra interna e sono sempre indicati in modo chiaro nel preventivo, senza sorprese all'ultimo momento. Allacciamento degli elettrodomestici e regolazioni finali sono parte del lavoro.",
  },
  {
    id: "smaltimento",
    category: "servizio",
    question: "Vi occupate anche dello smontaggio e dello smaltimento dei vecchi mobili?",
    answer:
      "Sì, su richiesta smontiamo e smaltiamo i vecchi arredi. Diccelo in fase di progetto e lo inseriamo nel preventivo.",
    draft: true, // Confermare se il servizio è attivo e come viene quotato.
  },
  {
    id: "zone-servite",
    category: "servizio",
    question: "Lavorate solo a Scafati?",
    answer:
      "Lo showroom è a Scafati, ma progettiamo e montiamo in tutta l'area tra Napoli e Salerno: Pompei, Angri, Sarno, Nocera, Castellammare, Torre Annunziata, Agro Nocerino-Sarnese, Penisola Sorrentina e Costiera. Per progetti fuori zona e per il settore contract, contattaci e valutiamo insieme.",
  },
  {
    id: "garanzia",
    category: "servizio",
    question: "Che garanzia ho?",
    answer:
      "Hai tutte le garanzie di legge e quelle dei singoli produttori, e soprattutto un unico referente: per qualsiasi necessità, dopo il montaggio chiami noi, non un call center.",
  },

  // ---------------- SHOWROOM ----------------
  {
    id: "senza-appuntamento",
    category: "showroom",
    question: "Posso venire in showroom senza appuntamento?",
    answer:
      "Certo, lo showroom è aperto negli orari indicati. Prenotando però hai un interior designer dedicato solo a te, senza attese, che si è già preparato sulle tue esigenze. Ed è l'unico modo per uscire con una prima proposta concreta.",
  },
  {
    id: "parcheggio",
    category: "showroom",
    question: "C'è parcheggio?",
    answer:
      "Sì, lo showroom dispone di parcheggio riservato ai clienti. Trovi indirizzo, mappa e indicazioni nella pagina Showroom & Contatti.",
  },

  // ---------------- CIESSE ----------------
  {
    id: "ciesse-stessa-azienda",
    category: "ciesse",
    question: "Proggecta e Ciesse Home sono la stessa azienda?",
    answer:
      "No. Proggecta è uno studio di progettazione d'interni indipendente, con un proprio team e una propria selezione di marchi. Tra i marchi che puoi trovare nel nostro showroom di Scafati c'è anche la gamma di cucine Ciesse.",
  },
  {
    id: "ciesse-pratiche",
    category: "ciesse",
    question: "Ho un ordine o una pratica aperta con Ciesse Home: a chi mi rivolgo?",
    answer:
      "[DA DEFINIRE CON IL CONSULENTE LEGALE — indicare il canale di contatto corretto per pratiche, assistenza e garanzie relative a contratti stipulati con Ciesse Home]",
    draft: true,
  },

  // ---------------- CONTRACT ----------------
  {
    id: "contract-tempi",
    category: "contract",
    question: "Potete lavorare con tempi stretti, ad esempio prima dell'apertura stagionale?",
    answer:
      "Sì, ed è il motivo per cui pianifichiamo ogni progetto contract con un cronoprogramma condiviso: rilievo, campionature, produzione, consegna e montaggio, con date definite. Prima ci contatti, più margine abbiamo per rispettare la tua data di apertura.",
  },
  {
    id: "contract-architetti",
    category: "contract",
    question: "Sono un architetto: possiamo lavorare sul mio progetto?",
    answer:
      "Assolutamente sì. Possiamo sviluppare gli esecutivi di arredo a partire dal tuo concept, fornirti campionature dei materiali e occuparci di produzione, fornitura e posa, mantenendo te come riferimento creativo verso il committente.",
  },
  {
    id: "contract-materiali",
    category: "contract",
    question: "Usate materiali adatti all'uso intensivo di hotel e locali?",
    answer:
      "Sì. Per gli spazi ricettivi e commerciali scegliamo materiali e ferramenta pensati per un uso intensivo e, dove richiesto, con le certificazioni necessarie (ad esempio di reazione al fuoco). Le definiamo insieme a te e al tuo tecnico in fase di progetto.",
  },
];

/** FAQ mostrate in Home, nell'ordine indicato */
export const homeFaqIds = [
  "quanto-costa",
  "consulenza-gratuita",
  "fuori-misura",
  "tempi-consegna",
  "rate",
  "cosa-portare",
  "perche-multibrand",
  "montaggio-incluso",
  "senza-appuntamento",
  "zone-servite",
];

export const getFaqs = (ids: string[]) =>
  ids
    .map((id) => faqData.find((f) => f.id === id))
    .filter((f): f is FaqItem => Boolean(f && !f.draft));
