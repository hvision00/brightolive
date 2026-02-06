# Checklist Migrazione a Sanity CMS

## Progetto: BrightOlive Wedding Planner
**Data inizio:** _______________  
**Data completamento stimata:** 3 giorni lavorativi

---

## Legenda
- 👤 **Tu** = Setup, test, inserimento contenuti
- 🤖 **Io** = Scrittura codice
- ✅ Completato
- ⏳ In corso
- ⬜ Da fare

---

## FASE 1: Setup Progetto Sanity
**Responsabile:** 👤 Tu | **Tempo stimato:** 30 minuti

### 1.1 Creazione Account e Progetto
- [x] Vai su https://www.sanity.io/get-started
- [x] Crea account (con Google o email)
- [x] Crea nuovo progetto:
  - Nome progetto: `Bright Olive`
  - Dataset: `production` (default)
  - Piano: Growth Trial (30 giorni)

### 1.2 Recupera Credenziali
- [x] Vai su https://www.sanity.io/manage
- [x] Seleziona il progetto `Bright Olive`
- [x] Copia **Project ID**
- [x] Copia **Dataset**

### 1.3 Crea Token API
- [x] Vai su Settings → API → Tokens
- [x] Clicca "Add API Token"
- [x] Nome: `astro-read`
- [x] Permissions: **Viewer** (read-only)
- [x] Copia il token generato

### 1.4 Condividi Credenziali
- [x] Comunica a me:
  - Project ID: `8i61ocow`
  - Dataset: `production`
  - Token: `sk3GzTBQ...` ✅

**✅ FASE 1 COMPLETATA:** [x]

---

## FASE 2: Creazione Schema Contenuti
**Responsabile:** 🤖 Io | **Tempo stimato:** 2-3 ore

### 2.1 Setup Sanity nel Progetto
- [x] Installa dipendenze Sanity (`@sanity/client`, `@sanity/image-url`)
- [x] Crea cartella `/sanity-studio`
- [x] Configura `sanity.config.ts`
- [x] Configura `sanity.cli.ts`

### 2.2 Schema Documenti Singleton (Pagine)
- [x] `siteSettings` - Impostazioni globali sito
- [x] `homePage` - Contenuti home page
- [x] `aboutPage` - Contenuti chi siamo
- [x] `servicesPage` - Intro pagina servizi
- [x] `destinationsPage` - Intro pagina destinations
- [x] `contactPage` - Contenuti pagina contatti
- [x] `galleryPage` - Contenuti galleria

### 2.3 Schema Documenti Multipli
- [x] `service` - Schema singolo servizio (x3)
- [x] `destination` - Schema singola destinazione (x5)
- [x] `blogPost` - Schema articolo blog
- [x] `category` - Schema categoria blog

### 2.4 Campi Multilingua
- [x] Helper per campi IT/EN/ES
- [x] Applicato a tutti i campi testuali

### 2.5 Sanity Studio
- [x] Struttura desk personalizzata
- [x] Raggruppamento logico contenuti
- [x] Preview configurata

### 2.6 Deploy Studio
- [ ] Studio deployato su Sanity (gratuito) ⏳
- [ ] URL studio funzionante

**✅ FASE 2 COMPLETATA:** [x] (manca solo deploy)

---

## FASE 3: Integrazione Astro
**Responsabile:** 🤖 Io | **Tempo stimato:** 2-3 ore

### 3.1 Setup Client
- [x] Installa `@sanity/client`
- [x] Installa `@sanity/image-url`
- [x] Crea `src/lib/sanity.ts`
- [x] Configura variabili ambiente `.env`

### 3.2 Funzioni Fetch Dati
- [ ] `getSiteSettings()`
- [ ] `getHomePage(lang)`
- [ ] `getAboutPage(lang)`
- [ ] `getServicesPage(lang)`
- [ ] `getServices(lang)`
- [ ] `getServiceBySlug(slug, lang)`
- [ ] `getDestinationsPage(lang)`
- [ ] `getDestinations(lang)`
- [ ] `getDestinationBySlug(slug, lang)`
- [ ] `getContactPage(lang)`
- [ ] `getGalleryPage(lang)`
- [ ] `getBlogPosts(lang, limit)`
- [ ] `getBlogPostBySlug(slug, lang)`
- [ ] `getAllBlogSlugs()`
- [ ] `getCategories(lang)`

### 3.3 Helper Immagini
- [ ] Funzione `urlFor(image)`
- [ ] Supporto resize/crop
- [ ] Fallback immagini mancanti

### 3.4 Tipi TypeScript
- [ ] Interfacce per ogni tipo di contenuto
- [ ] Type safety completo

**✅ FASE 3 COMPLETATA:** [ ]

---

## FASE 4: Aggiornamento Componenti
**Responsabile:** 🤖 Io | **Tempo stimato:** 3-4 ore

### 4.1 Componenti Comuni
- [ ] `Header.astro` - Menu (se dinamico)
- [ ] `Footer.astro` - Info contatto da Sanity
- [ ] `SEO.astro` - Meta tags da Sanity

### 4.2 Componenti Home
- [ ] `HeroSlider.astro` - Hero da Sanity
- [ ] `DestinationWedding.astro` - Lista destinations
- [ ] `Services.astro` - Lista servizi
- [ ] `ImpactSection.astro` - Sezione impatto
- [ ] `ContactForm.astro` - Labels form

### 4.3 Pagine Italiano
- [ ] `index.astro` - Home
- [ ] `chi-siamo.astro` - Chi siamo
- [ ] `servizi.astro` - Lista servizi
- [ ] `servizi/[slug].astro` - Servizio singolo (dinamico)
- [ ] `destination-wedding.astro` - Lista destinations
- [ ] `destination-wedding/[slug].astro` - Destination singola (dinamico)
- [ ] `contatti.astro` - Contatti
- [ ] `galleria.astro` - Galleria
- [ ] `blog.astro` - Lista blog
- [ ] `blog/[slug].astro` - Articolo singolo

### 4.4 Pagine Inglese (`/en/`)
- [ ] Tutte le pagine con `lang="en"`

### 4.5 Pagine Spagnolo (`/es/`)
- [ ] Tutte le pagine con `lang="es"`

### 4.6 Pulizia
- [ ] Rimuovi import `translations.ts` non usati
- [ ] Backup `translations.ts` (per riferimento)

**✅ FASE 4 COMPLETATA:** [ ]

---

## FASE 5: Sistema Blog
**Responsabile:** 🤖 Io | **Tempo stimato:** 2 ore

### 5.1 Template Articolo
- [ ] Hero full-screen con immagine
- [ ] Breadcrumb + categoria
- [ ] Titolo + data
- [ ] Contenuto rich text
- [ ] Styling prose
- [ ] Link torna al blog
- [ ] Articoli correlati (opzionale)

### 5.2 Listing Blog
- [ ] Grid articoli responsive
- [ ] Card con immagine, titolo, excerpt
- [ ] Data formattata
- [ ] Link "leggi di più"

### 5.3 Generazione Statica
- [ ] `getStaticPaths()` per articoli
- [ ] Supporto multilingua

### 5.4 Categorie
- [ ] Filtro per categoria (opzionale)
- [ ] Badge categoria su card

**✅ FASE 5 COMPLETATA:** [ ]

---

## FASE 6: Popolamento Contenuti
**Responsabile:** 👤 Tu | **Tempo stimato:** 2-3 ore

### 6.1 Preparazione
- [ ] Accedi a Sanity Studio (URL: _______________)
- [ ] Leggi guida inserimento (fornita da me)
- [ ] Tieni aperto `translations.ts` come riferimento

### 6.2 Impostazioni Globali
- [ ] Site Settings (logo, contatti, social)

### 6.3 Home Page
- [ ] Hero (tagline, titolo, descrizione, CTA) - IT/EN/ES
- [ ] Immagini slider hero (3 immagini)
- [ ] Sezione destinations intro
- [ ] Sezione servizi intro
- [ ] Sezione impact

### 6.4 Chi Siamo
- [ ] Hero quote
- [ ] Intro (4 paragrafi + foto Sara)
- [ ] Missione (4 punti)
- [ ] Stile (testi + keywords)
- [ ] Perché BrightOlive
- [ ] CTA finale

### 6.5 Servizi
- [ ] Servizi Page (hero)
- [ ] Servizio: Coordinamento
- [ ] Servizio: Wedding Totale
- [ ] Servizio: Consulenza

### 6.6 Destination Wedding
- [ ] Destinations Page (hero, why italy)
- [ ] Destination: Venezia
- [ ] Destination: Dolomiti
- [ ] Destination: Prosecco
- [ ] Destination: Bassano
- [ ] Destination: Padova

### 6.7 Altre Pagine
- [ ] Contatti Page
- [ ] Galleria Page + immagini

### 6.8 Blog
- [ ] Categorie (Destination, Tips, Real Wedding, News)
- [ ] Articoli esistenti (se presenti)

### 6.9 Immagini
- [ ] Hero slider (3)
- [ ] Destinations (5)
- [ ] Galleria (~20)
- [ ] Foto Sara (chi siamo)
- [ ] Logo

**✅ FASE 6 COMPLETATA:** [ ]

---

## FASE 7: Test & Deploy
**Responsabile:** 👤 Tu + 🤖 Io | **Tempo stimato:** 1-2 ore

### 7.1 Test Funzionale - Italiano
- [ ] Home page - tutte le sezioni
- [ ] Chi siamo - tutti i contenuti
- [ ] Servizi - pagina lista
- [ ] Servizio Coordinamento
- [ ] Servizio Wedding Totale
- [ ] Servizio Consulenza
- [ ] Destination Wedding - pagina lista
- [ ] Destination Venezia
- [ ] Destination Dolomiti
- [ ] Destination Prosecco
- [ ] Destination Bassano
- [ ] Destination Padova
- [ ] Blog - pagina lista
- [ ] Blog - articolo singolo
- [ ] Contatti
- [ ] Galleria

### 7.2 Test Funzionale - Inglese
- [ ] Tutte le pagine in `/en/`

### 7.3 Test Funzionale - Spagnolo
- [ ] Tutte le pagine in `/es/`

### 7.4 Test Responsive
- [ ] Desktop (1920px)
- [ ] Laptop (1366px)
- [ ] Tablet (768px)
- [ ] Mobile (375px)

### 7.5 Test Modifica Contenuti
- [ ] Modifica un testo in Sanity
- [ ] Salva/Pubblica
- [ ] Verifica che il sito si aggiorni (dopo rebuild)

### 7.6 Setup Webhook Rebuild
- [ ] Crea webhook su Cloudflare Pages
- [ ] Configura webhook in Sanity
- [ ] Testa: modifica → rebuild automatico

### 7.7 Rimozione WordPress
- [ ] Backup dati WordPress
- [ ] Rimuovi `src/lib/wordpress.ts`
- [ ] Rimuovi variabili `.env` WordPress
- [ ] Rimuovi dipendenze WP (se presenti)
- [ ] Test finale senza WordPress

### 7.8 Go Live
- [ ] Verifica finale produzione
- [ ] Comunicazione alla cliente
- [ ] Guida uso Sanity per la cliente

**✅ FASE 7 COMPLETATA:** [ ]

---

## FASE 8 (Futura): Template Blog Avanzato
**Da fare dopo il go-live, per la seconda richiesta della cliente**

- [ ] Schema blog post con sezioni strutturate
- [ ] Hero full-screen
- [ ] Sezioni numerabili (come destination pages)
- [ ] Blocchi icone/features
- [ ] CTA configurabile
- [ ] Preview in Sanity

---

## Note e Problemi

### Problemi Riscontrati
| Data | Problema | Soluzione | Risolto |
|------|----------|-----------|---------|
| | | | |

### Note Importanti
- 
- 
- 

---

## Credenziali (COMPILATE ✅)

```
PUBLIC_SANITY_PROJECT_ID=8i61ocow
PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=sk3GzTBQ5QduPwA2olbswGDgclRbPe31k4z4izNWzvMxavJdGgSFQpPLb86En55yqShAWCNxCBIxOC67Hzs8PTkpTCFIqtqK3u58iopCjeeRZWTZc5rpgftSvXnJnw5QizWYZGyq2NKHZOKPLTpK5lzDxVfAVBGAYVSjCfZjZp8IhC3j2LtB
```

---

## Link Utili

- **Sanity Studio:** https://_____.sanity.studio
- **Sanity Manage:** https://www.sanity.io/manage
- **Documentazione Sanity:** https://www.sanity.io/docs
- **Sito Produzione:** https://www.thebrightolive.com

---

## Contatti Progetto

- **Sviluppatore:** _______________
- **Cliente:** Sara De Coppi - BrightOlive

---

*Ultimo aggiornamento: _______________*
