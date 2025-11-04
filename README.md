# 🌿 BrightOlive

Progetto web sviluppato con Astro, Tailwind CSS e Alpine.js per prestazioni ottimali e sviluppo rapido.

## 🚀 Stack Tecnologico

- **[Astro](https://astro.build)** - Framework per siti web ultra-performanti
- **[Tailwind CSS v4](https://tailwindcss.com)** - Framework CSS utility-first
- **[Alpine.js](https://alpinejs.dev)** - Framework JavaScript leggero (~15kb)
- **TypeScript** - Type safety e migliore developer experience

## 📁 Struttura del Progetto

```
/
├── public/              # File statici (favicon, immagini, ecc.)
├── src/
│   ├── components/      # Componenti Astro riutilizzabili
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── Button.astro
│   ├── layouts/         # Layout delle pagine
│   │   └── BaseLayout.astro
│   ├── pages/           # Pagine del sito (routing automatico)
│   │   └── index.astro
│   └── styles/          # Stili globali
│       └── global.css
├── astro.config.mjs     # Configurazione Astro
└── package.json
```

## 🛠️ Comandi Disponibili

Tutti i comandi vanno eseguiti dalla root del progetto:

| Comando           | Azione                                              |
|:------------------|:----------------------------------------------------|
| `npm run dev`     | Avvia il server di sviluppo su `localhost:4321`    |
| `npm run build`   | Crea la build di produzione in `./dist/`            |
| `npm run preview` | Anteprima della build locale prima del deploy       |

## 🎯 Come Iniziare

1. **Avvia il server di sviluppo:**
   ```bash
   npm run dev
   ```

2. **Apri il browser:**
   Vai su [http://localhost:4321](http://localhost:4321)

3. **Inizia a sviluppare:**
   - Modifica le pagine in `src/pages/`
   - Crea nuovi componenti in `src/components/`
   - Personalizza gli stili con Tailwind CSS

## 💡 Utilizzo Componenti

### Layout Base
```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
---

<BaseLayout title="Titolo Pagina" description="Descrizione">
  <!-- Il tuo contenuto qui -->
</BaseLayout>
```

### Button Component
```astro
---
import Button from '../components/Button.astro';
---

<Button variant="primary" size="md" href="/contatti">
  Contattaci
</Button>
```

### Header e Footer
```astro
---
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';
---

<Header />
<!-- contenuto pagina -->
<Footer />
```

## 🎨 Tailwind CSS

Tailwind CSS v4 è già configurato. Usa le classi utility direttamente nell'HTML:

```html
<div class="bg-blue-500 text-white p-4 rounded-lg shadow-md">
  Ciao mondo!
</div>
```

## ⚡ Alpine.js

Alpine.js è disponibile globalmente. Usa `x-data`, `x-show`, `@click` ecc.:

```html
<div x-data="{ open: false }">
  <button @click="open = !open">Toggle</button>
  <div x-show="open">Contenuto</div>
</div>
```

## 📝 Creare Nuove Pagine

Crea un nuovo file in `src/pages/`. Il routing è automatico:

- `src/pages/about.astro` → `/about`
- `src/pages/contatti.astro` → `/contatti`
- `src/pages/blog/[slug].astro` → `/blog/:slug` (route dinamiche)

## 🚀 Deploy

La build di produzione genera HTML statico ottimizzato. Puoi deployare su:

- **Netlify** - Deploy automatico da Git
- **Vercel** - Deploy con zero-config
- **GitHub Pages** - Hosting gratuito
- Qualsiasi hosting statico

```bash
npm run build
# I file pronti per il deploy sono in ./dist/
```

## 📚 Risorse

- [Documentazione Astro](https://docs.astro.build)
- [Documentazione Tailwind CSS](https://tailwindcss.com/docs)
- [Documentazione Alpine.js](https://alpinejs.dev/start-here)

---

**Buon sviluppo! 🚀**
