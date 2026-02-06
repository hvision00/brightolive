# 🚀 GUIDA DEPLOY - BrightOlive

## STEP 1: PREPARAZIONE

### Verifiche Finali
```bash
# 1. Verifica che non ci siano errori
npm run build

# 2. Test locale
npm run dev
# Apri http://localhost:4321 e testa tutte le pagine
```

---

## STEP 2: DEPLOY SANITY STUDIO

```bash
cd sanity-studio

# 1. Login a Sanity (se non già fatto)
npx sanity login

# 2. Deploy Studio
npx sanity deploy

# Output: https://brightolive.sanity.studio (o nome progetto)
```

### Configurazione Utente Cliente
1. Vai su https://www.sanity.io/manage
2. Seleziona progetto "BrightOlive"
3. Settings → API → Tokens
4. Crea token "Editor" per la cliente
5. Invita cliente: Settings → Members → Invite

**Credenziali da fornire alla cliente:**
- URL Studio: `https://[project-name].sanity.studio`
- Email di login (quella usata per l'invito)

---

## STEP 3: DEPLOY SITO ASTRO

### Opzione A: Vercel (Consigliato) ⭐

```bash
# 1. Installa Vercel CLI
npm i -g vercel

# 2. Login
vercel login

# 3. Deploy (dalla root del progetto)
vercel

# Segui le istruzioni:
# - Set up project? Yes
# - Which scope? (tuo account)
# - Link to existing project? No
# - Project name? brightolive
# - Directory? ./
# - Override settings? No

# 4. Deploy in produzione
vercel --prod
```

**Configurazione Variabili Ambiente:**
```bash
vercel env add PUBLIC_SANITY_PROJECT_ID
# Inserisci: 8i61ocow

vercel env add PUBLIC_SANITY_DATASET
# Inserisci: production
```

**Webhook per Rebuild Automatico:**
1. Dashboard Vercel → Settings → Git → Deploy Hooks
2. Crea hook: Nome "Sanity", Branch "main"
3. Copia URL webhook (es: `https://api.vercel.com/v1/integrations/deploy/...`)
4. Vai su Sanity Dashboard → API → Webhooks
5. Crea webhook:
   - Nome: "Deploy Vercel"
   - URL: (incolla URL da Vercel)
   - Dataset: `production`
   - Trigger on: Create/Update/Delete

---

### Opzione B: Netlify

```bash
# 1. Installa Netlify CLI
npm i -g netlify-cli

# 2. Login
netlify login

# 3. Inizializza
netlify init

# 4. Deploy
netlify deploy --prod
```

**Configurazione:**
- Build command: `npm run build`
- Publish directory: `dist`

**Variabili Ambiente:**
```
PUBLIC_SANITY_PROJECT_ID=8i61ocow
PUBLIC_SANITY_DATASET=production
```

---

## STEP 4: DOMINIO PERSONALIZZATO

### Su Vercel
1. Dashboard → Settings → Domains
2. Aggiungi dominio (es: `thebrightolive.com`)
3. Configura DNS:
   ```
   A Record: @ → 76.76.21.21
   CNAME: www → cname.vercel-dns.com
   ```

### Su Netlify
1. Dashboard → Domain Settings → Add custom domain
2. Configura DNS:
   ```
   A Record: @ → (IP Netlify)
   CNAME: www → [site-name].netlify.app
   ```

---

## STEP 5: VERIFICA POST-DEPLOY

### Test Funzionali
```bash
# Apri sito in produzione
open https://[tuo-dominio].com

# Testa:
- [ ] Homepage carica
- [ ] Cambio lingua (IT/EN/ES)
- [ ] Navigazione menu
- [ ] Pagina destination wedding
- [ ] Singola destination (es: /destination-wedding/venezia)
- [ ] Blog
- [ ] Singolo articolo blog
- [ ] Form contatti (INVIA TEST!)
- [ ] Galleria
- [ ] Mobile responsive
```

### Test Sanity → Sito
1. Vai su Sanity Studio
2. Modifica un testo (es: homepage)
3. Clicca "Publish"
4. Aspetta 2-3 minuti
5. Ricarica sito → Testo aggiornato ✅

---

## STEP 6: PERFORMANCE & SEO

### Google PageSpeed Insights
```bash
# Testa performance
open https://pagespeed.web.dev/
# Inserisci URL sito
```

**Target:**
- Mobile: > 85
- Desktop: > 90

### Google Search Console
1. Vai su https://search.google.com/search-console
2. Aggiungi proprietà (il tuo dominio)
3. Verifica proprietà (metodo DNS o file HTML)
4. Invia sitemap: `https://[dominio]/sitemap-index.xml`

---

## 🔧 TROUBLESHOOTING

### Build Fallisce
```bash
# Pulisci cache e riprova
rm -rf .astro dist node_modules
npm install
npm run build
```

### Immagini Non Caricano
- Verifica variabili ambiente `PUBLIC_SANITY_*`
- Verifica CORS su Sanity Dashboard → API → CORS Origins
- Aggiungi origine: `https://[tuo-dominio].com`

### Form Non Funziona
1. Vai su https://formspree.io
2. Login con account cliente
3. Verifica form `xbddlryz` sia attivo
4. Controlla email destinataria

### Webhook Non Triggera
- Verifica URL webhook corretto
- Controlla log su Sanity Dashboard → API → Webhooks → [nome] → Deliveries
- Verifica su Vercel/Netlify → Deployments → se parte build

---

## 📚 COMANDI UTILI

```bash
# Development locale
npm run dev

# Build produzione
npm run build

# Preview build
npm run preview

# Aggiorna dipendenze
npm update

# Sanity - gestione schema
cd sanity-studio
npx sanity schema extract  # Estrae schema
npx sanity dataset export production backup.tar.gz  # Backup
```

---

## 🎓 FORMAZIONE CLIENTE

### Guida Rapida Sanity
Fornisci alla cliente:
1. **URL Studio**: `https://[project].sanity.studio`
2. **Credenziali**: Email invito
3. **Video tutorial**: 
   - Come modificare testo
   - Come caricare immagine
   - Come creare blog post
   - Come pubblicare (Publish button)

### Operazioni Comuni
- **Modificare Homepage**: Pagine Sito → Home Page
- **Aggiungere Blog Post**: Blog → Tutti gli Articoli → Create
- **Modificare Destination**: Destinazioni → [Seleziona] → Edit
- **Galleria**: Pagine Sito → Galleria → Upload

---

## ✅ DEPLOY COMPLETATO

Una volta completati tutti gli step:
- ✅ Sito live su dominio
- ✅ Sanity Studio accessibile
- ✅ Webhook configurato
- ✅ Form testato in produzione
- ✅ Cliente formato

**🎉 PROGETTO CONSEGNATO!**
