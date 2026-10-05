# Proggecta — Strategia e blueprint della piattaforma web

## Documenti

| File | Contenuto |
|---|---|
| `A_strategia-conversione-copy.md` | Posizionamento, strategia Google Ads (campagne, keyword, annunci, conversioni), copy completo di Home, Progettazione sartoriale, Qualità costruttiva, Contract, Showroom, landing per ambiente, specifiche del form |
| `B_direttiva-asset-visivi.md` | Quali foto e video recuperare dai produttori e quali produrre in proprio, specifiche tecniche, naming |
| `C_blueprint-tecnico.md` | Architettura Next.js, componenti, form/API, tracciamento, SEO, redirect 301, prompt per DeepSeek |
| `../blueprint/src/data/*.ts` | Data file tipizzati pronti all'uso: `brandData`, `featuresData`, `processStepsData`, `faqData`, `ambientiData`, `siteConfig`, `types` |

I data file contengono il copy definitivo delle pagine brand, delle FAQ, del metodo e della sezione qualità: si rivedono direttamente lì.

---

## Claim da validare prima del go-live

Il copy è scritto per essere persuasivo **e** difendibile. Questi punti vanno confermati da Alfonso (meglio per iscritto, con schede tecniche): se un claim non è confermato, va tolto o ammorbidito.

| # | Claim | Dove compare | Cosa verificare |
|---|---|---|---|
| 1 | **Casse in multistrato** | Home, Qualità, Contract, landing cucine, Poziello & Riccardi | Vale per tutte le cucine o solo per le realizzazioni su misura? **Non vale** per i prodotti di serie dei marchi distribuiti (es. camerette e armadi a catalogo). Il copy è già limitato a "nostre realizzazioni su misura": mantenere questo perimetro |
| 2 | "Trent'anni" di durata | Titolo sezione qualità | È un'affermazione di tono ("dura trent'anni") e non una garanzia. Se si preferisce prudenza: "che dura nel tempo" |
| 3 | "100.000 aperture" (dal brief) | **Non usato**: il copy dice "decine di migliaia di cicli" | Inserire il numero esatto solo con la scheda tecnica del produttore di cerniere/guide |
| 4 | Montatori **interni** | Metodo step 4, Qualità, FAQ | Confermare che la squadra è dipendente/stabile e non esterna |
| 5 | Rate / **tasso zero** | FAQ, annunci | La pubblicità di un credito a tasso zero richiede TAN, TAEG ed esempio rappresentativo (Codice del consumo). Il copy attuale non dice "tasso zero": aggiungerlo solo con le condizioni della finanziaria |
| 6 | Consulenza e prima proposta **gratuite** | Ovunque | Confermare cosa è gratuito: consulenza + prima proposta? Il rilievo laser a domicilio è gratuito o incluso nel progetto dopo l'acconto? |
| 7 | "Modifiche illimitate al render" | Progettazione §4 | Confermare o sostituire con "modifiche incluse fino all'approvazione" |
| 8 | Ricontatto **entro 24 ore lavorative** | Sotto ogni form | È una promessa al cliente: il team vendite deve rispettarla |
| 9 | Parcheggio riservato | Chip hero, FAQ | Confermare e indicare il numero di posti |
| 10 | Pannelli a basse emissioni / certificati | Qualità, Poziello & Riccardi | Recuperare le certificazioni dei pannelli (classe di emissione) |
| 11 | Materiali con reazione al fuoco per il contract | Contract | Solo "dove richiesto": confermare la disponibilità con i fornitori |
| 12 | Smaltimento vecchi mobili | FAQ (`draft`) | Servizio attivo? |
| 13 | Bonus Mobili | FAQ (`draft`) | Verificare validità e massimali per l'anno in corso |
| 14 | Prova dell'acqua in showroom | Home §2.6 | Pubblicare la frase solo se la prova viene realmente allestita |

## Autorizzazioni necessarie

- **Produttori** (Moretti Compact, Mercantini, Zamagna, Signorini & Coco, Ferretti e Ferretti, Smeg, Electrolux, Poziello & Riccardi): uso di marchio, logo e immagini su sito e Ads; status di rivenditore autorizzato. Senza autorizzazione, i nomi dei marchi negli annunci Google possono essere bloccati su segnalazione del titolare.
- **Marchio Ciesse:** consenso scritto del titolare all'uso del nome, della pagina `/brand/ciesse` e del redirect dei domini storici.
- **Consulente legale:** testo della FAQ "Ho un ordine o una pratica aperta con Ciesse Home" e informative privacy/cookie.
- **Liberatorie** per chi compare in foto e video.

## Dati da raccogliere (segnaposto in `siteConfig.ts`)

Ragione sociale e P.IVA · indirizzo e coordinate · telefono e numero WhatsApp Business · orari reali · info parcheggio e indicazioni stradali · profili social · elenco URL del vecchio sito (per la mappatura dei redirect).

## Decisioni da prendere

1. **Abitare Giovane** compare nella knowledge base tra i marchi ma non nel brief: va aggiunto a `brandData`?
2. **Cucine dopo Ciesse:** confermare la linea "Cucine su misura Proggecta" come prodotto di punta (Parte A §0.5).
3. **GTM:** contenitore nuovo dedicato a Proggecta o riuso di `GTM-MPWSMPF`? (consigliato: nuovo).
4. **Pixel Meta:** creare il Dataset Proggecta e aggiornare il workflow n8n (oggi punta al pixel Ciesse).
5. **CMP cookie:** iubenda, Cookiebot o altra soluzione certificata Google.

## Sicurezza

`dump_hub.txt`, nella cartella del progetto, contiene in chiaro password Aruba, chiave API SwipeOne e access token Meta CAPI. Consigli:
- **non** copiarlo nel repository di `proggecta-web` (e non allegarlo ai prompt per DeepSeek);
- rigenerare l'access token Meta e la chiave SwipeOne, visto che sono stati salvati in un file di testo;
- spostare le credenziali in un password manager.
