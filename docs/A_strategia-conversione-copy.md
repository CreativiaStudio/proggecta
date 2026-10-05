# PARTE A — Strategia di conversione e copywriting

**Progetto:** Proggecta, piattaforma web Next.js
**Obiettivo unico di conversione:** prenotazione della consulenza in showroom a Scafati
**Fonti del copy:** questo documento (pagine) + `blueprint/src/data/*.ts` (brand, FAQ, metodo, qualità, landing per ambiente). In caso di modifiche, i file `.ts` sono la versione di riferimento per lo sviluppo.

---

## 0. Il cuore strategico in una pagina

### 0.1 La grande idea

> **La tua casa non è standard. I tuoi mobili nemmeno.**

Proggecta non vende mobili. Vende **un progetto**: la casa del cliente, misurata al laser, vista in 3D prima di spendere un euro e costruita con il meglio che ogni comparto della manifattura italiana sa fare.

### 0.2 I due "nemici" (contro cosa ci posizioniamo)

| Nemico | Cosa promette | Dove sbaglia | La risposta di Proggecta |
|---|---|---|---|
| **Il mobilificio da catalogo** | Prezzo basso, consegna rapida | Adatta la casa ai moduli standard; truciolare che cede | Progetto al millimetro, casse in multistrato |
| **La singola fabbrica** | "Facciamo tutto noi" | Nessuno è eccellente in tutto | Selezione del migliore marchio per ogni ambiente, un unico regista |

> **Regola di tono:** non nominare mai i concorrenti. Il "nemico" si descrive per categoria e per sintomo (il mobile che si gonfia, il modulo da 60 che non ci sta), mai per nome.

### 0.3 Gerarchia dei messaggi (da usare sempre in quest'ordine)

1. **Promessa emotiva:** una casa cucita sulla tua vita, senza compromessi.
2. **Meccanismo unico:** metodo in 4 step (ascolto, rilievo laser, render 3D, montaggio interno) + selezione multi-brand.
3. **Prova razionale:** multistrato vs truciolare, ferramenta certificata, filiera Poziello & Riccardi.
4. **Prova tangibile:** 2.000 mq di showroom, da toccare con mano.
5. **Rimozione del rischio:** consulenza e prima proposta gratuite, render prima dell'ordine, preventivo voce per voce, rate.
6. **Invito all'azione:** prenota la consulenza (con data e fascia oraria già scelte).

### 0.4 Tono di voce

- **Caldo, sicuro, concreto.** Il "lusso" si dimostra coi dettagli, non con gli aggettivi.
- **Si dà del tu** (target 25–55, sposi, famiglie giovani; coerente con la presenza social di Alfonso).
- **Frasi brevi.** Una frase, un'idea. Mai più di 3 righe per paragrafo su mobile.
- **Specifico batte generico:** "il mobile sotto il lavello che si gonfia" funziona meglio di "materiali scadenti".

| Usa | Evita |
|---|---|
| progetto, su misura, al millimetro, toccare con mano, render, rilievo laser, montatori interni | "il migliore", "unico in Italia", "prezzi imbattibili", "lusso" ripetuto, "eccellenza" ripetuto |
| "consulenza gratuita e senza impegno" | "GRATIS!!!", urgenze finte, countdown |
| "a partire dalla tua piantina" | gergo tecnico non spiegato (V100, E1, HPL senza spiegazione) |

### 0.5 Il prodotto "cucina" dopo Ciesse (nota strategica importante)

La cucina è l'ambiente più redditizio e quello più cercato su Google. Oggi la gamma cucine è veicolata dal brand **Ciesse**, che però è destinato a spegnersi. Se tutta la comunicazione sulle cucine si appoggia a Ciesse, quando il marchio sparirà Proggecta resterà senza un prodotto-cucina riconoscibile.

**Raccomandazione:** tutto il copy cucina (Home, landing `/ambienti/cucine-su-misura`, campagne Google) parla di **"Cucine su misura Proggecta"**. Ciesse resta una pagina-ponte (`/brand/ciesse`) per intercettare il traffico storico e dirottarlo verso il metodo Proggecta. In questo modo il valore SEO e il passaparola si trasferiscono sul marchio Proggecta, non su un marchio in uscita.

---

## 1. Strategia Google Ads (Search + Performance Max)

### 1.1 Principio guida: message match

Il primo motivo per cui una landing da Google Ads non converte è che l'utente cerca "camerette Scafati" e atterra su una pagina che parla di cucine. Per questo, oltre alla Home, il blueprint prevede **4 landing per ambiente** (`/ambienti/[slug]`, dati in `ambientiData.ts`) che riusano tutte le sezioni della Home cambiando solo hero, pain point, marchi mostrati e preset del form. Costo di sviluppo minimo, impatto forte su Quality Score e tasso di conversione.

| Gruppo di annunci | Landing |
|---|---|
| Cucine su misura | `/ambienti/cucine-su-misura` |
| Camerette | `/ambienti/camerette` |
| Armadi / cabine armadio | `/ambienti/armadi-cabine-armadio` |
| Arredamento casa completa / casa nuova | `/ambienti/arredamento-casa-completa` |
| Brand (Moretti Compact, Mercantini, Zamagna…) | `/brand/[slug]` |
| Ciesse (protezione brand storico) | `/brand/ciesse` |
| Contract / hotel / B&B | `/contract` |
| Generiche ("arredamento Scafati", "showroom arredamento") | `/` (Home) |

### 1.2 Struttura campagne consigliata

| # | Campagna | Tipo | Note |
|---|---|---|---|
| 1 | **Ambienti — Alta intenzione** | Search | Un gruppo per ambiente, keyword a corrispondenza frase/esatta + geo-modificatori |
| 2 | **Marchi a catalogo** | Search | "rivenditore Moretti Compact", "camerette Moretti Compact Salerno", ecc. Intenzione altissima, CPC spesso basso. **Solo dopo l'autorizzazione scritta dei produttori.** |
| 3 | **Ciesse — Protezione** | Search | "ciesse cucine", "ciesse home scafati". Budget basso, serve a non perdere il passaparola. **Serve il consenso del titolare del marchio Ciesse.** |
| 4 | **Contract** | Search | Budget dedicato, geo allargato (Costiera, Penisola Sorrentina, Napoli) |
| 5 | **Performance Max — Showroom** | PMax | Gruppi di asset per ambiente, segnali di pubblico da lista clienti + visitatori del sito. Avviare **dopo** aver raccolto le prime 30–50 conversioni sulla Search. |

**Geotargeting:** raggio 25–30 km da Scafati, impostazione "Presenza: persone che si trovano o si trovano regolarmente" (non "interesse"). Contract con raggio esteso.
**Estensione di località:** richiede il Google Business Profile, oggi in standby. Va attivato appena montate le insegne: senza, si perdono l'estensione località e le campagne orientate alla visita in negozio.

### 1.3 Keyword seed (da espandere con Keyword Planner)

**Cucine:** cucine su misura, cucine su misura Scafati / Pompei / Salerno / Nocera, cucine artigianali, cucina con isola su misura, showroom cucine Salerno, cucine moderne su misura
**Camerette:** camerette su misura, camerette per due figli, camerette salvaspazio, camerette Salerno, camerette con letto a soppalco
**Notte:** cabina armadio su misura, armadio su misura, armadio per mansarda, armadio scorrevole su misura
**Casa completa:** arredamento casa completa, arredare casa nuova, interior designer Scafati, showroom arredamento Salerno, arredamento su misura Napoli
**Contract:** arredamento hotel, arredamento B&B, arredamento ristorante, forniture contract hotel Campania

**Keyword negative iniziali:** ikea, mondo convenienza, usato, usata, subito, gratis, fai da te, diy, lavoro, offerte di lavoro, montatore cercasi, stipendio, noleggio, affitto, pdf, disegno, autocad, corso, tesi, wikipedia.
> Nota: per Google **non** consigliamo di escludere "economiche/offerte" a priori: la strategia "cucine civetta" è pensata per Meta. Su Google si valuta dopo due settimane di dati sui termini di ricerca.

### 1.4 Annunci adattabili (RSA) — gruppo "Cucine su misura"

**Titoli (max 30 caratteri):**

| # | Titolo | Car. |
|---|---|---|
| 1 | Cucine Su Misura a Scafati | 26 |
| 2 | Showroom di 2.000 mq | 20 |
| 3 | Render 3D Gratuito | 18 |
| 4 | Rilievo Laser al Millimetro | 27 |
| 5 | Prenota la Tua Consulenza | 25 |
| 6 | Casse in Multistrato | 20 |
| 7 | Non il Solito Mobilificio | 25 |
| 8 | Interior Designer Dedicato | 26 |
| 9 | Montaggio con Team Interno | 26 |
| 10 | I Migliori Marchi Italiani | 26 |
| 11 | Progettazione Sartoriale | 24 |
| 12 | Pagamenti Rateali | 17 |
| 13 | Zero Sorprese in Cantiere | 25 |
| 14 | Vieni a Toccare i Materiali | 27 |
| 15 | Proggecta Scafati | 17 |

Bloccare (pin) il titolo 1 in posizione 1 solo se la percentuale di impressioni risulta bassa; altrimenti lasciare libero.

**Descrizioni (max 90 caratteri):**

1. Progettiamo la tua cucina al millimetro: rilievo laser, render 3D e montaggio interno. *(85)*
2. 2.000 mq di showroom a Scafati. Prenota una consulenza gratuita con l'interior designer. *(88)*
3. Casse in multistrato: non gonfiano con l'acqua. Qualità che dura, senza compromessi. *(83)*
4. Moretti Compact, Mercantini, Zamagna, Smeg: i migliori marchi in un unico progetto. *(83)* ← *solo con autorizzazione dei marchi*

**Asset:** sitelink (Progettazione sartoriale · Qualità costruttiva · Camerette · Showroom & orari), callout (Consulenza gratuita · Parcheggio riservato · Render 3D · Montaggio interno · Rate disponibili), snippet strutturato "Marchi", estensione di chiamata, modulo lead **disattivato** (vogliamo che vedano la landing).

Per gli altri gruppi si sostituiscono i titoli 1, 4 e 6 con la keyword dell'ambiente (es. "Camerette Su Misura Scafati", "Cabine Armadio Su Misura", "Camerette Salvaspazio").

### 1.5 Conversioni e ottimizzazione

| Azione | Tipo in Google Ads | Valore indicativo |
|---|---|---|
| `generate_lead` — form showroom inviato | **Principale** | da definire (es. 50) |
| `contract_lead` — form contract inviato | Principale | da definire (es. 100) |
| `whatsapp_click` | Secondaria | 10 |
| `phone_click` | Secondaria | 10 |
| **Visita effettuata in showroom** (import offline dal CRM) | **Principale, appena disponibile** | 150 |
| **Contratto firmato** (import offline) | Principale | valore reale |

**Il punto decisivo:** il form salva `gclid` / `gbraid` / `wbraid` (vedi Parte C). Quando in SwipeOne il lead passa a "visitato" o "contratto", lo stato viene reimportato in Google Ads. Così l'algoritmo impara a portare **persone che vengono davvero in showroom**, non solo persone che compilano form. È la differenza tra una campagna che porta curiosi e una che porta clienti.

Strategia di offerta: *Massimizza conversioni* nelle prime 2–4 settimane, poi *CPA target* quando ci sono almeno 30 conversioni/mese per campagna.

### 1.6 Traffico Meta e TikTok

- **Meta (strategia "cucine civetta"):** il traffico freddo e sensibile al prezzo atterra su una **landing dedicata alle offerte** (fuori da questo blueprint, ma con lo stesso form e lo stesso tracciamento). La Home non va "abbassata" di posizionamento per inseguire il prezzo.
- **TikTok / Reels con Alfonso:** link in bio verso la Home con `?utm_source=tiktok`. La sezione "Ci metto la faccia" in Home (§2.8) crea continuità tra il video e il sito: l'utente ritrova la persona che ha appena visto.

---

## 2. HOME PAGE — Copy completo

Ordine delle sezioni pensato per lo scroll da mobile (90% del traffico Ads). La CTA primaria compare almeno **5 volte**: hero, dopo il metodo, dopo la qualità, nel form, nella barra fissa su mobile.

### 2.1 Hero

- **Eyebrow:** Studio di progettazione d'interni · Showroom di 2.000 mq a Scafati
- **H1 (versione A, consigliata):** La tua casa non è standard. I tuoi mobili nemmeno.
- **H1 (versione B per A/B test):** Basta mobili a misura di catalogo. Progettiamo la tua casa al millimetro.
- **H1 (versione C, più "keyword"):** Arredamento su misura, progettato al millimetro sulla tua vita.
- **Sottotitolo:** Rilievo laser, render 3D fotorealistico e i migliori marchi della manifattura italiana, orchestrati da un unico interior designer. Cucine, zona notte, camerette e living cuciti sui tuoi spazi e sulla tua vita.
- **CTA primaria:** Prenota la tua consulenza gratuita in showroom
- **CTA secondaria (link testuale):** Preferisci scriverci? WhatsApp →
- **Micro-copy sotto la CTA:** Ti richiamiamo entro 24 ore lavorative per confermare giorno e orario.

**Chip di rassicurazione (4, con icona):**
1. Consulenza e render 3D gratuiti, senza impegno
2. Un interior designer dedicato solo a te
3. Parcheggio riservato in showroom
4. 2.000 mq di ambienti da toccare con mano

**Note di design:** foto o video a tutto schermo di un ambiente reale (non un render freddo). Su mobile, H1 + sottotitolo + CTA visibili **senza scroll**. Overlay scuro sfumato in basso per la leggibilità.

### 2.2 Striscia marchi (subito sotto l'hero)

- **Etichetta:** Selezioniamo e progettiamo con
- Loghi in scala di grigi, a colori al passaggio del mouse: Moretti Compact · Mercantini · Zamagna · Signorini & Coco · Ferretti e Ferretti · Smeg · Electrolux · Poziello & Riccardi · Ciesse

### 2.3 Il problema (agitazione)

- **Eyebrow:** Perché il mobile standard delude
- **H2:** Il mobile standard ti chiede di adattarti. Noi facciamo il contrario.
- **Tre card:**
  1. **Il modulo da 60 che non ci sta.** I mobili a catalogo hanno misure fisse. La tua parete no. Risultato: tamponamenti, buchi e centimetri persi in ogni stanza.
  2. **Il mobile che si gonfia sotto il lavello.** Truciolare e umidità non vanno d'accordo. Dopo qualche anno le ante cedono e le cerniere non tengono più.
  3. **Cinque negozi per arredare una casa.** Uno per la cucina, uno per gli armadi, uno per le camerette. Nessuno guarda l'insieme, e alla fine gli stili non si parlano.
- **Frase ponte:** Da Proggecta la casa si progetta una volta sola, da cima a fondo, con una persona sola.

### 2.4 Multi-brand (griglia marchi) — `id="marchi"`

- **Eyebrow / H2 / testo:** da `brandIntro` in `brandData.ts`
  - H2: *Nessuna fabbrica è la migliore in tutto. Per questo le abbiamo scelte una per una.*
- **Card:** logo + categoria + `cardClaim` + link "Scopri →" a `/brand/[slug]`
- **Chiusura sotto la griglia:** Un solo progetto. Un solo preventivo. Un solo montaggio.

### 2.5 Il Metodo in 4 step

- **Eyebrow / H2 / testo:** da `processIntro` in `processStepsData.ts`
  - H2: *Dal primo caffè all'ultima vite, un solo metodo. Nessuna sorpresa.*
- 4 step con icona, numero, titolo, `short`, durata e "Cosa ricevi" (`deliverable`).
- **CTA dopo gli step:** Inizia dallo step 1: prenota la consulenza
- Link secondario: Scopri come progettiamo → `/progettazione-sartoriale`

### 2.6 Qualità costruttiva (box d'impatto)

- **Eyebrow / H2 / testo:** da `comparisonIntro` in `featuresData.ts`
  - H2: *Quello che non vedi è quello che fa durare una cucina trent'anni.*
- **Componente:** confronto a due colonne Multistrato vs Truciolare (righe da `comparisonRows`), con foto macro delle due sezioni di pannello affiancate.
- **Sotto il confronto:** tre mini-card da `featuresData` (`ferramenta`, `superfici`, `multistrato`).
- **Gancio esperienziale:** *In showroom ti mostriamo i due pannelli dopo giorni immersi nell'acqua. È la prova più convincente che conosciamo.* ← **solo se la prova viene allestita davvero** (vedi Parte B, asset video n. 3).
- **CTA:** Vieni a vedere la differenza dal vivo · link: Leggi il manifesto della qualità → `/qualita-costruttiva`

### 2.7 Showroom experience

- **Eyebrow:** Showroom di Scafati
- **H2:** 2.000 mq per smettere di immaginare e iniziare a toccare.
- **Testo:** Le foto aiutano a sognare, ma una cucina si sceglie aprendo i cassetti, un divano sedendosi, un armadio toccando le ante. Nel nostro showroom trovi ambienti completi allestiti, campionari di materiali, top e finiture, e un'area progettazione dove vedere il tuo render su grande schermo.
- **Elenco "Cosa trovi in visita":**
  - Ambienti completi: cucine, living, zona notte, camerette
  - Campionari di top, ante, essenze e tessuti da confrontare
  - Un interior designer dedicato, senza attese, se prenoti
  - Parcheggio riservato e un caffè ad accoglierti
- **Visual:** galleria a scorrimento orizzontale con 6–8 foto **reali** dello showroom.
- **CTA:** Prenota la tua visita

### 2.8 "Ci metto la faccia" (fondatore)

- **Visual:** foto o breve video verticale di Alfonso in showroom (lo stesso volto dei video social).
- **Citazione:**
  > "Ho fondato Proggecta perché ero stanco di vedere case arredate a forza di compromessi. Qui ogni progetto lo seguiamo dall'inizio alla fine, e se qualcosa non va, il numero da chiamare è il mio."
  > — **Alfonso Malafronte**, fondatore di Proggecta
- *Far rivedere e approvare il testo ad Alfonso: deve suonare con la sua voce.*

### 2.9 Contract & Hospitality (teaser)

- **Eyebrow:** Divisione Contract
- **H2:** Hotel, B&B, ristoranti e boutique: spazi che lavorano per il tuo business.
- **Testo:** Progettiamo e forniamo arredi su misura per strutture ricettive e locali commerciali, con materiali pensati per l'uso intensivo, un cronoprogramma condiviso e un unico referente dal rilievo alla posa. Collaboriamo con architetti e progettisti.
- **CTA:** Scopri la divisione Contract → `/contract`

### 2.10 Form di prenotazione — `id="prenota"`

- **Eyebrow:** Prenota la consulenza
- **H2:** Scegli il giorno. Al resto pensiamo noi.
- **Testo:** Un'ora con il tuo interior designer, gratuita e senza impegno. Porta la piantina o qualche foto: usciremo con una prima idea concreta e una forbice di spesa chiara.
- Specifiche di campi, step e micro-copy al **§9**.

### 2.11 FAQ

- **H2:** Le domande che ci fanno tutti (e le risposte sincere)
- Contenuti: `homeFaqIds` in `faqData.ts`. Accordion; prima domanda chiusa (non aperta di default: evita spostamenti di layout).

### 2.12 CTA finale

- **H2:** La casa che hai in mente esiste già. Va solo progettata.
- **Testo:** Prenota la consulenza gratuita: in un'ora capirai cosa si può fare con i tuoi spazi e con il tuo budget.
- **CTA:** Prenota la tua consulenza gratuita · Secondaria: Scrivici su WhatsApp

### 2.13 Barra fissa su mobile (sempre visibile dopo l'hero)

Tre pulsanti: **Chiama** · **WhatsApp** · **Prenota** (quest'ultimo pieno, colore accento). Si nasconde quando il form `#prenota` è visibile.

---

## 3. `/progettazione-sartoriale`

**SEO title:** Progettazione Sartoriale d'Interni a Scafati | Proggecta
**Meta description:** Progettiamo cucine, armadi e camerette al millimetro: rilievo laser, render 3D fotorealistico e soluzioni per pilastri, nicchie e mansarde. Consulenza gratuita.

### Hero
- **Eyebrow:** Progettazione sartoriale
- **H1:** La casa si adatta a te. Non il contrario.
- **Sottotitolo:** Un abito sartoriale si cuce sulle tue misure, non su una taglia. Noi facciamo lo stesso con la tua casa: la misuriamo al laser, la ridisegniamo in 3D e la arrediamo con il meglio di ogni comparto.
- **CTA:** Prenota la consulenza gratuita

### Sezione 1 — Su misura vero vs "su misura" di nome
- **H2:** Non tutto quello che si chiama "su misura" lo è davvero.
- **Testo:** Molti negozi chiamano "su misura" una composizione di moduli standard con qualche pannello di chiusura per riempire i buchi. È un adattamento, non un progetto. Su misura vero significa partire dalla tua parete reale (con i suoi fuori squadro, i suoi impianti, la sua luce) e disegnare ogni elemento perché la occupi esattamente.
- **Mini-confronto (2 colonne):**
  - *Composizione standard:* moduli da 45/60/90 cm · tamponamenti per chiudere i vuoti · altezze fisse · gli impianti si spostano per far entrare i mobili
  - *Progetto Proggecta:* ogni elemento sulla misura reale · zero spazi persi · altezza fino al soffitto · i mobili si disegnano attorno agli impianti

### Sezione 2 — Vincoli che diventano idee
- **H2:** Pilastri, nicchie, mansarde: per noi non sono problemi. Sono il punto di partenza.
- **Griglia 6 card:**
  1. **Pilastri e travi:** li inglobiamo nella composizione, fino a farli sparire.
  2. **Nicchie e rientranze:** diventano librerie, dispense, cabine armadio.
  3. **Tetti inclinati e mansarde:** armadi e contenitori che seguono la pendenza, senza un centimetro sprecato.
  4. **Pareti fuori squadro:** il rilievo laser le registra, il progetto le compensa. A occhio nudo, tutto perfettamente dritto.
  5. **Sottoscala e angoli ciechi:** cassetti, ripostigli, angoli attrezzati.
  6. **Impianti in posizioni scomode:** attacchi, scarichi e prese diventano parte del progetto, non un limite.

### Sezione 3 — Il metodo nel dettaglio
- **H2:** Quattro passaggi, sempre gli stessi, sempre con la stessa persona.
- Contenuto: `processStepsData` con il testo `long` di ogni step, layout a timeline verticale.

### Sezione 4 — Il render 3D
- **H2:** Entra nella tua casa prima che esista.
- **Testo:** Il render fotorealistico è il momento in cui il progetto smette di essere un disegno e diventa casa tua. Vedi i colori con la luce delle tue finestre, le proporzioni reali, come dialogano cucina e living. E se qualcosa non ti convince, lo cambiamo prima di produrre, non dopo il montaggio.
- **Elenco:**
  - Finiture e materiali reali scelti in showroom
  - Più viste dello stesso ambiente
  - Modifiche illimitate fino all'approvazione *(← verificare con Alfonso; in alternativa "modifiche incluse fino all'approvazione")*
  - Si va in produzione solo quando sei convinto al 100%
- **Visual:** slider "prima/dopo" render ↔ ambiente montato reale (asset chiave, vedi Parte B).

### Sezione 5 — Un solo regista per tutta la casa
- **H2:** Il meglio di ogni marchio, con un unico progetto.
- **Testo:** La cucina di un marchio, gli armadi di un altro, la cameretta di un terzo: da soli sarebbero tre acquisti scollegati. Nel nostro progetto diventano una casa sola, con materiali, colori e proporzioni coordinati. E per te, un solo interlocutore, un solo preventivo, un solo montaggio.
- Striscia loghi + link a `/#marchi`.

### Sezione 6 — Cosa porti, cosa ricevi
- **Porti:** piantina (anche una foto) o misure indicative, foto degli ambienti, immagini che ti piacciono.
- **Ricevi alla prima consulenza:** una prima ipotesi distributiva, una forbice di spesa realistica, campioni dei materiali da valutare.

### CTA finale
- **H2:** Hai una piantina? Hai già metà progetto.
- **CTA:** Prenota la consulenza · Secondaria: Mandaci la piantina su WhatsApp

---

## 4. `/qualita-costruttiva`

**SEO title:** Qualità Costruttiva: Multistrato vs Truciolare | Proggecta
**Meta description:** Cosa c'è dentro un mobile che dura: casse in multistrato, ferramenta certificata, top resistenti e materiali a basse emissioni. Scopri il manifesto Proggecta.

> Nota: la pagina va linkata anche dal footer e dagli annunci come sitelink. È il contenuto che risponde al cliente "razionale" che confronta tre preventivi.

### Hero
- **Eyebrow:** Il nostro manifesto della qualità
- **H1:** Il vero lusso è quello che dura.
- **Sottotitolo:** Un mobile si giudica dopo dieci anni, non il giorno del montaggio. Ecco cosa c'è dentro i nostri arredi, e perché fa la differenza.

### Sezione 1 — Manifesto (testo breve, tipografia grande)
> Crediamo che una cucina debba durare più di un'auto.
> Che una cerniera debba chiudersi in silenzio anche dopo diecimila aperture.
> Che il mobile sotto il lavello non debba temere una perdita d'acqua.
> Che l'aria di una cameretta debba essere pulita.
> E che il cliente abbia il diritto di sapere di cosa è fatto quello che compra.

### Sezione 2 — Multistrato vs truciolare
- Testi: `comparisonIntro` + `comparisonRows` + `footnote` in `featuresData.ts`.
- **Visual:** due sezioni di pannello in macro + video della prova dell'acqua (se disponibile).

### Sezione 3 — Le feature tecniche
- Card estese da `featuresData` con `showOn` contenente `"qualita-costruttiva"`: multistrato, ferramenta, superfici, salubrità, filiera, montaggio interno.

### Sezione 4 — La filiera Poziello & Riccardi
- **H2:** La materia prima del su misura.
- Testo: `featuresData.filiera.long` + link alla pagina `/brand/materiali-pannelli`.

### Sezione 5 — Le 6 domande da fare a qualunque negozio
- Testi: `buyerChecklistIntro` + `buyerChecklist`.
- **Perché funziona:** è una checklist che il cliente porterà con sé agli altri negozi. Ogni risposta vaga della concorrenza diventa un punto a favore di Proggecta. Prevedere un pulsante **"Salva la checklist"** (stampa / condividi su WhatsApp).

### CTA finale
- **H2:** Non crederci sulla parola. Vieni a toccare.
- **CTA:** Prenota una visita in showroom

---

## 5. Pagine brand `/brand/[slug]`

Tutto il copy è in `brandData.ts`. Struttura del template:

1. **Breadcrumb:** Home › Marchi › {name}
2. **Hero:** `eyebrow`, `headline`, `subheadline`, immagine, CTA `ctaLabel`
3. **Avviso di transizione** (solo Ciesse): box `transitionNotice` con sfondo chiaro, subito sotto l'hero
4. **Intro** + chip `highlights`
5. **"Perché con Proggecta"** (`whyProggecta`): box in evidenza, è il paragrafo che differenzia la pagina da quella di un qualsiasi rivenditore
6. **Sezioni** (`sections`) alternate immagine/testo
7. **Metodo in 4 step** (versione compatta)
8. **Completa il progetto** (`crossBrands`): 3 card verso altri marchi
9. **Form** con ambiente pre-selezionato (`formPreset`)
10. **FAQ** (`faqIds`)

### Indicazioni specifiche per `/brand/ciesse` (atterraggio redirect 301)

- **Obiettivo:** chi arriva da `ciessehome.it` o cerca "Ciesse cucine" deve capire in 5 secondi che (1) è nel posto giusto, (2) le cucine si possono ancora vedere e acquistare, (3) Proggecta è una realtà diversa e più ampia.
- **H1:** Cercavi Ciesse? Sei nel posto giusto.
- **Mai scrivere:** "Ciesse è diventata Proggecta", "Ciesse ora si chiama Proggecta", "nuova gestione", "stessa azienda". Non c'è fusione: queste frasi sarebbero false e potrebbero creare aspettative legali (garanzie, ordini pregressi).
- **Testi originali:** nessun testo o foto deve essere copiato dal vecchio sito (rischio contenuto duplicato).
- **FAQ "pratiche Ciesse Home":** testo da definire con il consulente legale prima del go-live (è `draft: true`).
- **Ciclo di vita:** quando il brand verrà ritirato, `status: "archived"` → la pagina resta online come pagina di transizione (senza gamma) per i link storici, oppure redirect 301 verso `/ambienti/cucine-su-misura`.

---

## 6. `/contract`

**SEO title:** Arredamento Contract per Hotel, B&B e Ristoranti | Proggecta
**Meta description:** Progettazione e fornitura di arredi su misura per hotel, B&B, ristoranti, boutique e uffici in Campania. Cronoprogramma condiviso e un unico referente.

### Hero
- **Eyebrow:** Proggecta Contract
- **H1:** Spazi che lavorano per il tuo business.
- **Sottotitolo:** Progettiamo, produciamo e posiamo arredi su misura per hotel, B&B, case vacanza, ristoranti, boutique e uffici. Un unico referente dal rilievo all'apertura.
- **CTA:** Richiedi un sopralluogo · Secondaria: Sei un architetto? Parliamone →

### Sezione 1 — Per chi lavoriamo (6 card con icona)
- **Hotel e resort:** camere, reception, aree comuni.
- **B&B e case vacanza:** soluzioni che sfruttano ogni metro e reggono il turnover degli ospiti.
- **Ristoranti, bar e pasticcerie:** banconi, sale, arredi su misura per il tuo flusso di lavoro.
- **Boutique e negozi:** espositori e arredi che valorizzano il prodotto.
- **Uffici e studi professionali:** spazi operativi, sale riunioni, reception.
- **Architetti e studi di progettazione:** sviluppiamo gli esecutivi del tuo concept.

### Sezione 2 — Il contesto locale (paragrafo di posizionamento)
- **H2:** A due passi da Pompei, dalla Costiera e dalla Penisola Sorrentina.
- **Testo:** Il nostro territorio vive di ospitalità. Ogni stagione conta, e una camera ferma è un incasso perso. Per questo il nostro lavoro contract si misura su due cose: arredi che reggono l'uso intensivo di centinaia di ospiti, e date rispettate per non perdere l'apertura.

### Sezione 3 — Perché Proggecta Contract (4 punti)
1. **Un unico referente:** progetto, campionature, produzione, logistica e posa con un solo interlocutore.
2. **Materiali per l'uso intensivo:** casse in multistrato, superfici resistenti, ferramenta per alto numero di cicli e, dove richiesto, materiali con certificazioni di reazione al fuoco.
3. **Cronoprogramma condiviso:** date definite per ogni fase, pensate a ritroso dalla tua data di apertura.
4. **La forza del multi-brand:** accesso a più produzioni italiane in un'unica fornitura, con condizioni dedicate ai professionisti.

### Sezione 4 — Processo B2B (5 step)
Sopralluogo e brief → Concept e preventivo di massima → Campionature e prototipo camera tipo → Produzione e logistica → Posa e consegna chiavi in mano.

### Sezione 5 — Architetti
- **H2:** Il tuo progetto, la nostra esecuzione.
- **Testo:** Se il concept è tuo, resta tuo. Noi sviluppiamo gli esecutivi di arredo, ti forniamo le campionature dei materiali, gestiamo produzione e posa e ti teniamo aggiornato a ogni passaggio. Tu resti il riferimento creativo del cliente.

### Sezione 6 — Referenze
- **Segnaposto:** 3 casi studio (foto + struttura + intervento). Se non ancora disponibili, **la sezione non va pubblicata** (meglio niente che referenze generiche).

### Form contract (diverso da quello privato)
Nome e cognome · Azienda / struttura · Ruolo (Proprietario / Gestore / Architetto-progettista / Altro) · Tipologia (Hotel / B&B / Ristorante-bar / Retail / Uffici / Altro) · Dimensione indicativa (n. camere o mq) · Tempistica (Entro 3 mesi / 3–6 mesi / Oltre 6 mesi) · Telefono · Email · Note · Privacy.
**CTA:** Richiedi un sopralluogo gratuito · **Micro-copy:** Ti risponde direttamente il responsabile Contract entro 1 giorno lavorativo.

FAQ: `contract-tempi`, `contract-architetti`, `contract-materiali`.

---

## 7. `/showroom-contatti`

**SEO title:** Showroom Arredamento a Scafati (SA) | Orari e Contatti | Proggecta
**Meta description:** 2.000 mq di showroom a Scafati: cucine, zona notte, camerette e living. Parcheggio riservato. Prenota la tua consulenza gratuita o scrivici su WhatsApp.

### Hero
- **Eyebrow:** Showroom Proggecta · Scafati (SA)
- **H1:** Ti aspettiamo a Scafati. Il caffè lo offriamo noi.
- **Sottotitolo:** 2.000 mq di ambienti da vivere, un interior designer dedicato e il tempo che ti serve per scegliere con calma.
- **CTA:** Prenota la visita · **WhatsApp** (pulsante verde) · **Chiama**

### Sezione 1 — Com'è una visita (timeline)
1. **Accoglienza:** ti accoglie il tuo interior designer, che ha già letto la tua richiesta.
2. **Ascolto (15 min):** come vivi la casa, cosa ti serve, che budget hai in mente.
3. **Giro negli ambienti (30 min):** tocchi materiali, apri cassetti, provi sedie e meccanismi.
4. **Prima idea (20–30 min):** sulla tua piantina, una prima ipotesi e una forbice di spesa.

### Sezione 2 — Cosa portare
Piantina (anche una foto) · foto degli ambienti · misure indicative · immagini che ti ispirano · e chi deciderà con te (per scegliere insieme è meglio).

### Sezione 3 — Dove siamo
- Indirizzo, pulsante "Apri in Google Maps", pulsante "Apri in Waze".
- **Mappa:** immagine statica con pulsante "Carica mappa interattiva" (la mappa di Google si carica solo dopo il clic: velocità e privacy, vedi Parte C).
- **Come arrivare:** `siteConfig.showroom.directions`
- **Parcheggio:** `siteConfig.showroom.parking`
- **Paragrafo locale (SEO):** *Siamo a Scafati, nel cuore dell'Agro Nocerino-Sarnese, a pochi minuti da Pompei, Angri, Sant'Antonio Abate, San Marzano sul Sarno, Poggiomarino, Boscoreale, Sarno, Nocera, Pagani, Castellammare di Stabia e Torre Annunziata.*

### Sezione 4 — Orari
Tabella da `siteConfig.openingHours` + stato dinamico "Aperto ora / Apre alle…" (calcolato lato client, fuso Europe/Rome).

### Sezione 5 — Contatti diretti
Telefono · WhatsApp · Email info · Email contract · Social.

### Form di prenotazione (stesso componente della Home)

---

## 8. Landing per ambiente `/ambienti/[slug]`

Dati in `ambientiData.ts`. Template = Home con:
- hero da `ambientiData.hero` (stessa struttura, chip di rassicurazione identiche);
- sezione "Il problema" con i 3 `painPoints` specifici al posto di quelli generici;
- griglia marchi filtrata su `brandSlugs`;
- form con ambiente pre-selezionato;
- FAQ da `faqIds`.

Pagine **indicizzabili** (sono anche ottime pagine SEO locali), header con navigazione completa (nessuna "landing nuda": su Google Ads la navigazione non penalizza e aumenta la fiducia).

---

## 9. Form di prenotazione — specifiche UX e micro-copy

### 9.1 Perché a step
Un form unico con 8 campi su mobile spaventa. Lo stesso form diviso in 3 step brevi, che iniziano con una scelta facile a tocco singolo, converte meglio: chi ha toccato il primo bottone tende a completare.

### 9.2 Step 1 — "Cosa vuoi progettare?"
Card grandi con icona, scelta singola:
**Cucina** · **Zona notte / armadi** · **Cameretta** · **Living / zona giorno** · **Tutta la casa**
(Pre-selezionata se si arriva da una landing ambiente o da una pagina brand.)

### 9.3 Step 2 — "Quando vuoi venire?"
- **Giorno:** chip scorrevoli con i prossimi 10 giorni di apertura (es. "Mar 7 ott", "Mer 8 ott"…), calcolati da `openingHours`. Ultima chip: "Sono flessibile".
- **Fascia:** Mattina · Pomeriggio
- Micro-copy: *Ti confermiamo l'orario esatto per telefono o WhatsApp.*

### 9.4 Step 3 — "Dove ti contattiamo?"
- **Nome e cognome** · placeholder: *Mario Rossi*
- **Telefono** · placeholder: *333 123 4567* · tastiera numerica · validazione numero italiano
- **Email** · placeholder: *nome@email.it*
- **Note (facoltativo):** *Hai una scadenza? Una piantina? Raccontaci in breve.*
- **Privacy (obbligatorio):** ☐ Ho letto l'[informativa privacy] e acconsento al trattamento dei dati per essere ricontattato.
- **Marketing (facoltativo, non pre-spuntato):** ☐ Voglio ricevere idee, novità e promozioni.
- **Pulsante:** Conferma la mia consulenza gratuita
- **Sotto il pulsante:** 🔒 I tuoi dati restano a noi. Nessuno spam. · *Ti richiamiamo entro 24 ore lavorative.*

### 9.5 Piantina: perché non nel form (v1)
Il caricamento di file da mobile è la prima causa di abbandono e di errori. Nella v1 la piantina si manda **dopo** l'invio, dalla schermata di conferma, con un pulsante WhatsApp precompilato. Si ottiene lo stesso risultato senza frenare la conversione. (Il caricamento nel form è previsto come evoluzione v2, vedi Parte C.)

### 9.6 Schermata di conferma (stesso URL, nessun redirect)
- **H3:** Perfetto, {nome}! La tua consulenza è quasi fissata.
- **Testo:** Entro 24 ore lavorative ti chiamiamo per confermare giorno e orario. Nel frattempo:
- **Pulsante WhatsApp:** Mandaci la piantina su WhatsApp → messaggio precompilato: *"Ciao Proggecta, sono {nome}, ho appena prenotato una consulenza per {ambiente}. Ecco la mia piantina:"*
- **Link:** Leggi cosa portare in showroom → `/showroom-contatti#cosa-portare`

### 9.7 Messaggi di errore
- Nome: *Scrivi nome e cognome, così sappiamo chi cercare.*
- Telefono: *Controlla il numero: ci serve per confermarti l'appuntamento.*
- Email: *Sembra che manchi qualcosa nell'email.*
- Privacy: *Per ricontattarti abbiamo bisogno del tuo consenso.*
- Errore di rete: *Qualcosa non è andato. Riprova, oppure scrivici direttamente su WhatsApp.* (+ pulsante)

### 9.8 Processo interno (non è codice, ma decide il ROI)
Il form promette un ricontatto entro 24 ore. Se i venditori richiamano dopo 3 giorni, nessuna landing salverà il costo per lead. Raccomandazioni operative:
- notifica immediata del lead (email + WhatsApp al venditore di turno) tramite n8n;
- richiamata **entro 1 ora** nelle ore di apertura: il tasso di contatto crolla dopo le prime ore;
- stato del lead aggiornato in SwipeOne (nuovo → contattato → visita fissata → visitato → contratto), che alimenta l'import delle conversioni offline.

---

## 10. Checklist CRO pre-lancio

- [ ] H1 + CTA visibili senza scroll su iPhone SE (375×667)
- [ ] LCP mobile < 2,5 s (obiettivo < 2 s) su rete 4G simulata
- [ ] La CTA primaria ha lo stesso testo ovunque
- [ ] Barra fissa mobile funzionante; si nasconde sopra il form
- [ ] Numero di telefono cliccabile ovunque compaia
- [ ] Form testato su iOS Safari e Android Chrome (tastiera numerica sul telefono)
- [ ] Evento `generate_lead` visibile in GTM Preview e in Google Ads
- [ ] `gclid` presente nel payload del lead (test con `?gclid=test123`)
- [ ] Banner cookie che non copre la CTA hero su mobile
- [ ] Nessun claim non validato online (vedi `docs/README.md`)
