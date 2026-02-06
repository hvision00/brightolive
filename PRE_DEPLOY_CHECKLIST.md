# 🚀 CHECKLIST PRE-DEPLOY - BrightOlive

## ✅ STATO ATTUALE

### 📄 **Pagine Implementate** (100%)

#### Italiano (IT) ✅
- [x] Homepage (`/`)
- [x] Chi Siamo (`/chi-siamo`)
- [x] Servizi (`/servizi`)
  - [x] Consulenza (`/servizi/consulenza`)
  - [x] Coordinamento (`/servizi/coordinamento`)
  - [x] Wedding Totale (`/servizi/wedding-totale`)
  - [x] [slug] dinamico (`/servizi/[slug]`)
- [x] Destination Wedding (`/destination-wedding`)
  - [x] Dolomiti (`/destination-wedding/dolomiti`)
  - [x] Venezia (`/destination-wedding/venezia`)
  - [x] Bassano (`/destination-wedding/bassano`)
  - [x] Padova (`/destination-wedding/padova`)
  - [x] Prosecco (`/destination-wedding/prosecco`)
  - [x] [slug] dinamico (`/destination-wedding/[slug]`)
- [x] Blog (`/blog`)
  - [x] [slug] dinamico (`/blog/[slug]`)
- [x] Galleria (`/galleria`)
- [x] Contatti (`/contatti`)
- [x] Privacy (`/privacy`)
- [x] Cookie Policy (`/cookie-policy`)

#### English (EN) ✅
- [x] Tutte le pagine tradotte in `/en/`

#### Español (ES) ✅
- [x] Tutte le pagine tradotte in `/es/`

---

## 🎨 **SANITY CMS**

### Schemi Implementati ✅
- [x] `siteSettings` - Impostazioni sito (NASCOSTO da Studio)
- [x] `homePage` - Homepage
- [x] `aboutPage` - Chi Siamo
- [x] `servicesPage` - Pagina Servizi
- [x] `service` - Singolo Servizio
- [x] `destinationsPage` - Pagina Destinations
- [x] `destination` - Singola Destination
- [x] `blogPost` - Articolo Blog
- [x] `category` - Categoria Blog
- [x] `contactPage` - Pagina Contatti
- [x] `galleryPage` - Galleria

### Funzionalità CMS ✅
- [x] Campi multilingua (IT/EN/ES)
- [x] Template blog semplice + strutturato
- [x] Icone personalizzabili (Lucide)
- [x] Gestione immagini con hotspot
- [x] Preview contenuti

---

## 📝 **CONTENUTI POPOLATI**

### Destination Wedding
- [x] Dolomiti (completo con 4 sezioni + icone)
- [x] Venezia (completo con 4 sezioni + icone)
- [x] Bassano del Grappa (completo con 4 sezioni + icone)
- [x] Padova (completo con 4 sezioni + icone)
- [x] Area del Prosecco (completo con 4 sezioni + icone)

### Blog Post
- [x] Dolomiti Venete (template strutturato)
- [x] Venezia (template strutturato)
- [x] Bassano del Grappa (template strutturato)
- [x] Padova (template strutturato)
- [x] Area del Prosecco (template strutturato)

### Da Verificare/Completare
- [ ] **Immagini**: Caricare tutte le immagini per destination e blog
- [ ] **Categorie Blog**: Creare e assegnare categorie
- [ ] **Pubblicare**: Tutti i contenuti devono essere "Published" (non draft)

---

## 🔧 **CONFIGURAZIONE TECNICA**

### Form di Contatto ✅
- [x] Formspree configurato (`xbddlryz`)
- [x] Campi validati (Nome, Email, Messaggio obbligatori)
- [x] Privacy policy obbligatoria
- [x] Stesso form su IT/EN/ES

**⚠️ DA VERIFICARE CON CLIENTE:**
- [ ] Accesso Formspree attivo
- [ ] Email destinataria corretta
- [ ] Test invio form funzionante

### SEO & Meta ✅
- [x] Meta tags su tutte le pagine
- [x] Open Graph configurato
- [x] Descrizioni SEO
- [x] Sitemap (automatico con Astro)

### Analytics & Privacy
- [ ] Google Analytics (da implementare)
- [ ] Google Tag Manager (da implementare)
- [ ] Cookie Consent Banner (da implementare)
- [ ] Privacy Policy su Iubenda (link presente)

---

## 🌐 **DEPLOY REQUIREMENTS**

### 1. Sanity Studio Deploy
```bash
cd sanity-studio
npm run deploy
```
- [ ] Deploy Sanity Studio su Sanity.io
- [ ] Configurare permessi utente per la cliente
- [ ] Fornire URL studio: `https://[project-name].sanity.studio`

### 2. Sito Astro Deploy (Opzioni)

#### Opzione A: Vercel (Consigliato)
```bash
npm i -g vercel
vercel
```
- [ ] Collegare repository GitHub
- [ ] Configurare variabili ambiente:
  - `PUBLIC_SANITY_PROJECT_ID=8i61ocow`
  - `PUBLIC_SANITY_DATASET=production`
- [ ] Abilitare rebuild automatico con webhook Sanity

#### Opzione B: Netlify
```bash
npm i -g netlify-cli
netlify deploy --prod
```

### 3. Webhook Sanity → Vercel/Netlify
- [ ] Creare webhook in Sanity per rebuild automatico
- [ ] Testare: modifica contenuto → sito aggiornato in 2-3 min

---

## 🧪 **TEST PRE-DEPLOY**

### Test Funzionali
- [ ] **Homepage**: Hero, servizi, destinations visibili
- [ ] **Navigazione**: Menu funzionante IT/EN/ES
- [ ] **Destination Pages**: Tutte e 5 accessibili e formattate
- [ ] **Blog**: Lista articoli + singolo articolo
- [ ] **Form Contatti**: Invio test su tutte e 3 le lingue
- [ ] **Galleria**: Immagini caricate e visibili
- [ ] **Mobile**: Responsive su smartphone
- [ ] **Performance**: PageSpeed > 90

### Test Links
- [ ] Link interni (pagine → pagine)
- [ ] Link social (Instagram, Facebook)
- [ ] Link email (`mailto:`)
- [ ] Link telefono (`tel:`)
- [ ] Link Privacy Policy (Iubenda)

### Test Contenuti Sanity
- [ ] Modifica testo → salva → publish → sito aggiornato
- [ ] Upload immagine → publish → immagine visibile
- [ ] Creazione nuovo blog post → funziona

---

## 🚨 **ISSUES NOTI**

### Critici
Nessuno ✅

### Non Critici
- ⚠️ Analytics non implementato (facoltativo)
- ⚠️ Cookie banner non presente (da aggiungere se richiesto)

---

## 📋 **PROSSIMI PASSI IMMEDIATI**

1. **CONTENUTI**
   - [ ] Cliente carica tutte le immagini in Sanity
   - [ ] Cliente pubblica tutti i documenti (rimuovere draft)
   - [ ] Cliente crea categorie blog

2. **DEPLOY**
   - [ ] Deploy Sanity Studio
   - [ ] Deploy sito Astro su Vercel/Netlify
   - [ ] Configurare dominio personalizzato
   - [ ] Setup webhook per rebuild automatico

3. **VERIFICA FINALE**
   - [ ] Test form di contatto in produzione
   - [ ] Verifica email ricevute correttamente
   - [ ] Test PageSpeed Insights
   - [ ] Test su mobile (iOS + Android)

4. **OPZIONALE**
   - [ ] Setup Google Analytics
   - [ ] Setup Google Search Console
   - [ ] Implementare cookie banner
   - [ ] Setup backup automatico Sanity

---

## 📞 **FORMAZIONE CLIENTE**

Documenti da fornire:
- [ ] Guida uso Sanity Studio
- [ ] Come pubblicare contenuti
- [ ] Come caricare immagini
- [ ] Come creare nuovi blog post
- [ ] Troubleshooting comune

---

## ✅ **PRONTO PER DEPLOY?**

**Requisiti Minimi:**
- ✅ Nessun errore TypeScript
- ✅ Nessun errore di build
- ✅ Tutte le pagine implementate
- ✅ Form di contatto configurato
- ⚠️ Immagini da caricare
- ⚠️ Contenuti da pubblicare

**Stato: QUASI PRONTO** 🟡

Mancano solo:
1. Upload immagini dalla cliente
2. Pubblicazione contenuti (rimuovere draft)
3. Test form in produzione
