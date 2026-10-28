# Architettura Piattaforma Web Next.js & Funnel di Conversione Showroom

## 1. Mappa Pagine & Message Match
La piattaforma è sviluppata su Next.js 15, responsive, ottimizzata per mobile (100/100 PageSpeed) e ideata per massimizzare le conversioni da Google Ads e Social:
- `/` (Home Page): conversion landing ad alta riprova, hero magnetica, metodo in 4 step, box multistrato vs truciolare, showroom 500 mq a Nocera Inferiore, form prenotazione.
- `/ambienti/[slug]`: 4 landing verticali specifiche per ambiente (`/cucine-su-misura`, `/camerette`, `/armadi-cabine-armadio`, `/arredamento-casa-completa`) per garantire message-match perfetto con le ricerche Google Search.
- `/qualita-costruttiva`: manifesto tecnico della durata, confronto macro multistrato vs truciolare, checklist delle 6 domande da fare ai mobilifici.
- `/progettazione-sartoriale`: il valore del rilievo laser 3D e render fotorealistico prima di produrre.
- `/contract`: divisione B2B per albergatori, gestori di B&B, locali e architetti dell'area costiera e campana.
- `/showroom-contatti`: esperienza visita, orari, parcheggio privato a Nocera Inferiore (Fosso Imperatore Lotto 14), mappa interattiva.
- `/brand/[slug]`: pagine dedicate ai singoli marchi partner (Moretti Compact, Mercantini, Zamagna, Ciesse transitorio).

## 2. Funnel di Prenotazione Showroom a 3 Step
1. **Step 1 - Scelta Ambiente:** Cucina, Zona Notte/Armadi, Cameretta, Living, Tutta la Casa.
2. **Step 2 - Scelta Giorno e Fascia:** Chip scorrevoli con i prossimi 10 giorni lavorativi + fascia Mattina / Pomeriggio.
3. **Step 3 - Dati di Contatto & Privacy:** Nome, Telefono (validato con tastiera numerica mobile), Email, Note/Scadenza.

## 3. Notifiche Istantanee & Patto del Ricontatto Rapido
- All'invio del form, un webhook n8n recapita istantaneamente i dati del lead su WhatsApp ed email ad Alfonso e al team vendite.
- **Regola aurea:** Il team Proggecta contatta il lead entro **1-2 ore** lavorative per confermare l'appuntamento (il tasso di show-up crolla drasticamente dopo le prime ore).
- **Tracciamento avanzato:** Invio automatico conversioni Meta CAPI (Lead hashato SHA256) e Google Ads GCLID per addestrare gli algoritmi a portare persone che visitano realmente lo showroom.
