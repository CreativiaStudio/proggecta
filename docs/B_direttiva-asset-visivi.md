# PARTE B — Direttiva asset visivi e multimediali

**Obiettivo:** un sito che sembri lo studio di un interior designer, non il volantino di un mobilificio.
**Regola d'oro:** le foto dei produttori danno il *sogno*; le foto e i video **reali** di Proggecta (showroom, Alfonso, cantieri, rilievi) danno la *fiducia*. Servono entrambi. Un sito fatto solo di foto di catalogo sembra un rivenditore qualunque, perché quelle stesse foto le usano tutti i rivenditori.

---

## 1. Prima di scaricare: autorizzazioni

1. **Chiedere a ogni produttore l'accesso all'area rivenditori / area stampa** (press kit, media library). È lì che si trovano gli scatti in alta risoluzione e i video senza watermark.
2. **Ottenere per iscritto (anche una email)** il permesso di usare foto, video e logo sul sito e nelle campagne Ads, e lo status di "rivenditore autorizzato" se lo si vuole dichiarare.
3. **Mai** scaricare immagini da Google Immagini, Pinterest o dai social dei produttori senza autorizzazione.
4. Tenere un registro: `media/_licenze.csv` con file, fonte, data, referente che ha autorizzato, eventuali limiti (solo web, niente Ads, scadenza).
5. Inserire il credito (`© Nome produttore`) nel campo `credit` dell'immagine: il componente lo mostra in piccolo nell'angolo.

---

## 2. Criteri di selezione (cosa scegliere e cosa scartare)

### ✅ Scegliere
- **Ambienti completi e "vissuti":** luce naturale, un libro aperto, una tazza, una pianta. Sensazione di casa vera.
- **Toni caldi e naturali:** legno, pietra, beige, verdi salvia, bronzo. Coerenti con la palette del sito.
- **Inquadrature orizzontali larghe** (per hero e sezioni) **e verticali** (per mobile e social) dello stesso ambiente, quando disponibili.
- **Macro di dettagli:** venature, bordi, cerniere, interni dei cassetti, meccanismi. Raccontano qualità meglio di qualsiasi testo.
- **Persone di spalle o in movimento,** non in posa da catalogo.

### ❌ Scartare
- Scontornati su fondo bianco (effetto e-commerce o discount).
- Render palesemente finti, con luce piatta e plastica.
- Foto con prezzi, testi, loghi grandi o grafiche promozionali sovrapposte.
- Ambienti con stili molto lontani tra loro nella stessa pagina (es. barocco accanto a minimal), salvo pagine brand classiche.
- Qualsiasi immagine sotto i 2.000 px di lato lungo.

---

## 3. Specifiche tecniche

| Uso | Formato sorgente | Dimensione minima | Rapporto | Note |
|---|---|---|---|---|
| Hero desktop | JPG/TIFF qualità max | 2.560 × 1.440 | 16:9 | Soggetto principale nel terzo destro (a sinistra va il testo) |
| Hero mobile | JPG | 1.200 × 1.600 | 3:4 | Ritaglio dedicato, non lo stesso hero schiacciato |
| Sezioni immagine/testo | JPG | 2.000 × 1.333 | 3:2 | |
| Card griglia marchi | JPG | 1.200 × 1.500 | 4:5 | |
| Dettagli/macro | JPG | 1.600 × 1.600 | 1:1 | |
| Loghi | **SVG** (in alternativa PNG trasparente) | — | — | Versione monocromatica scura + chiara |
| Video hero | MP4 sorgente | 1.920 × 1.080 | 16:9 | Montaggio finale 8–12 s, in loop, **senza audio** |
| Video verticali | MP4 sorgente | 1.080 × 1.920 | 9:16 | Per sezione fondatore e social |

**Consegna allo sviluppo:** le immagini sorgente vanno in `public/media/...` già rinominate (vedi §7). Next.js genera automaticamente le versioni AVIF/WebP ridimensionate. Il video hero va esportato in **due versioni**: MP4 H.264 ≤ 2,5 MB e WebM VP9 ≤ 2 MB, più un fotogramma poster JPG.

---

## 4. Asset per sezione del sito

### Home
| Sezione | Cosa serve | Fonte |
|---|---|---|
| Hero | **Video 8–12 s**: panoramica lenta di una cucina con isola alla luce del mattino, apertura di un cassetto ammortizzato, mano che scorre sul top. In alternativa: foto ambientata cucina + living open space. | Proggecta (girato in showroom) **oppure** video del produttore se autorizzato |
| Problema (3 card) | 3 foto "di sintomo": anta gonfia di truciolare, parete con modulo e tamponamento, pianta con 5 scontrini diversi (illustrazione) | Proggecta (foto reale di un pannello rovinato) + illustrazioni |
| Griglia marchi | 1 foto ambientata 4:5 per marchio + logo SVG | Produttori |
| Metodo 4 step | 1. designer e cliente al tavolo con campioni; 2. distanziometro laser su parete; 3. schermo con render; 4. montatore che regola un'anta | **Proggecta (shooting reale)** |
| Qualità | Macro sezione multistrato vs macro sezione truciolare, stessa luce e stesso sfondo | Proggecta + Poziello & Riccardi |
| Showroom | 6–8 foto reali dello showroom: ingresso, ambienti allestiti, parete campionari, area progettazione | **Proggecta** |
| Fondatore | Ritratto ambientato di Alfonso + video verticale 20–30 s | **Proggecta** |
| Contract | 1 ambiente hotel/B&B arredato | Produttori (linee contract) o lavori realizzati |

### Pagine brand

| Brand | Hero | Sezioni | Dettagli/macro | Video |
|---|---|---|---|---|
| **Moretti Compact** | Cameretta luminosa con letto a soppalco o castello, ambiente "vissuto" | Cameretta per due figli · cameretta da ragazzo con scrivania · cabina armadio | Meccanismo letto estraibile, scala con contenitori, interno armadio | Video trasformazione letto / meccanismi salvaspazio |
| **Mercantini** | Camera da letto contemporanea con armadio a tutta parete | Ante scorrevoli/complanari · cabina armadio illuminata · camera completa | Maniglie, texture delle finiture, LED interni, cassettiere | Apertura ante scorrevoli in slow motion |
| **Zamagna** | Tavolo con sedie in un living luminoso, tavola apparecchiata | Tavolo allungabile chiuso + aperto (stessa inquadratura) · sedie · complementi | Meccanismo di allungamento, bordo del piano in ceramica, cuciture delle sedute | Apertura del tavolo allungabile (5–8 s) |
| **Signorini & Coco** | Living elegante e caldo | Dettagli di lavorazione · camera completa | Intagli, finiture, maniglie | — |
| **Ferretti e Ferretti** | Ambiente completo rappresentativo | Dettaglio di lavorazione | Materiali nobili | — |
| **Smeg / Electrolux** | Elettrodomestico **incassato in una cucina** (non scontornato) | Linea iconica Smeg in ambiente · forno a vapore / induzione Electrolux in uso | Pannelli di controllo, interno forno, piano a induzione | Video prodotto in uso (cottura a vapore, induzione) |
| **Poziello & Riccardi** | Pile ordinate di pannelli o essenze in magazzino, luce calda | Sezione multistrato · campionario essenze · laccati | Venature, bordi, strati | Lavorazione/taglio di un pannello (se disponibile) |
| **Ciesse** | Cucina Ciesse **fotografata nello showroom di Scafati** | 2–3 modelli in esposizione | Dettagli di lavorazione | — |

> Per Ciesse usare **solo foto nuove**, scattate in showroom. Le foto del vecchio sito, se riutilizzate, verrebbero lette da Google come contenuto duplicato.

### Altre pagine
- `/progettazione-sartoriale`: 6 foto di "vincoli risolti" (pilastro inglobato, mansarda con armadio inclinato, nicchia trasformata…), **slider render ↔ realizzazione** (almeno 2 coppie).
- `/qualita-costruttiva`: macro dei pannelli, ferramenta (cerniera, guida), campioni di top (gres, quarzo, HPL, Fenix) fotografati insieme.
- `/contract`: lavori realizzati (quando disponibili); nel frattempo foto contract dei produttori.
- `/showroom-contatti`: facciata con insegna (appena montata), parcheggio, ingresso, mappa statica.

---

## 5. I 6 asset "proprietari" da produrre (priorità assoluta)

Sono quelli che nessun concorrente può copiare e che rendono credibile tutto il resto.

1. **Tour dello showroom (60–90 s, orizzontale + verticale):** Alfonso che accompagna la telecamera tra gli ambienti. Per hero alternativo, pagina showroom, PMax e social.
2. **Il rilievo laser (15–20 s):** distanziometro su una parete reale, numeri che compaiono a schermo. Per step 2 del metodo e annunci.
3. **La prova dell'acqua (time-lapse):** un campione di truciolare e uno di multistrato immersi per qualche giorno, ripresi a intervalli. È il contenuto più forte per la sezione qualità, per TikTok e per gli annunci. **Va fatta davvero e documentata: nessuna simulazione.**
4. **Render → realtà (slider):** almeno 2–3 progetti con render e foto finale dalla stessa angolazione.
5. **Il montaggio (20–30 s):** la squadra interna che regola le ante e il controllo finale con il cliente.
6. **Ritratto e video del fondatore:** foto ambientata + video verticale 20–30 s con il messaggio "ci metto la faccia".

**Kit di ripresa minimo:** smartphone recente in 4K 30 fps, gimbal, luce naturale (mattina), nessuna musica nei file sorgente.

---

## 6. Elaborazione

- Correzione colore uniforme su tutte le foto (stessa temperatura calda, ombre aperte), così foto di produttori diversi sembrano parte dello stesso sito.
- Nessun filtro "Instagram", nessuna vignettatura marcata.
- Per gli hero, lasciare spazio libero per il testo (lato sinistro su desktop, parte alta su mobile).
- Video: stabilizzati, velocità 0,8× sui movimenti, dissolvenza in loop pulita.

---

## 7. Naming e cartelle

```
public/media/
├── home/            hero.jpg · hero-mobile.jpg · hero.mp4 · hero.webm · hero-poster.jpg
├── metodo/          step-1-ascolto.jpg · step-2-rilievo.jpg · step-3-render.jpg · step-4-montaggio.jpg
├── qualita/         multistrato-macro.jpg · truciolare-macro.jpg · prova-acqua.mp4 · ferramenta.jpg · top-campioni.jpg
├── showroom/        showroom-01.jpg … showroom-08.jpg · facciata.jpg · parcheggio.jpg · mappa-statica.jpg
├── fondatore/       alfonso.jpg · alfonso-video.mp4
├── ambienti/        cucine/hero.jpg · camerette/hero.jpg · notte/hero.jpg · completo/hero.jpg
├── brand/           {slug}/hero.jpg · {slug}/{sezione}.jpg   (es. mercantini/cabina-armadio.jpg)
├── contract/        hero.jpg · hotel.jpg · ristorante.jpg
├── progetti/        {nome-progetto}/render.jpg · {nome-progetto}/reale.jpg
└── logos/           {slug}.svg   (moretti-compact.svg, smeg.svg, electrolux.svg, …)
```

Regole: solo minuscole, trattini al posto degli spazi, niente accenti, nomi descrittivi (aiutano anche la SEO delle immagini).

---

## 8. Checklist da portare all'incontro in showroom

- [ ] Contatto area rivenditori di: Moretti Compact, Mercantini, Zamagna, Signorini & Coco, Ferretti e Ferretti, Smeg, Electrolux, Poziello & Riccardi
- [ ] Loghi vettoriali di tutti i marchi
- [ ] Autorizzazione scritta all'uso di marchi e immagini (sito + Ads)
- [ ] Mezza giornata di shooting in showroom (luce del mattino) per §4 e §5
- [ ] Avvio della prova dell'acqua (servono alcuni giorni)
- [ ] Raccolta di 2–3 coppie render/realizzazione da progetti già consegnati
- [ ] Liberatorie firmate da clienti e dipendenti che compaiono in foto o video
