# 📝 Snippets Utili per lo Sviluppo

## Alpine.js Patterns

### Toggle Menu
```html
<div x-data="{ open: false }">
  <button @click="open = !open">Toggle</button>
  <div x-show="open" x-transition>
    Contenuto
  </div>
</div>
```

### Dropdown
```html
<div x-data="{ open: false }" @click.away="open = false">
  <button @click="open = !open">Menu</button>
  <div x-show="open" x-transition>
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
  </div>
</div>
```

### Form con validazione
```html
<form 
  x-data="{ 
    email: '', 
    isValid: false,
    validate() {
      this.isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
    }
  }"
>
  <input 
    type="email" 
    x-model="email" 
    @input="validate()"
    class="border rounded px-4 py-2"
  />
  <button 
    type="submit" 
    :disabled="!isValid"
    :class="{ 'opacity-50': !isValid }"
  >
    Invia
  </button>
</form>
```

### Accordion
```html
<div x-data="{ selected: null }">
  <div class="space-y-2">
    <div>
      <button @click="selected = selected === 1 ? null : 1">
        Item 1
      </button>
      <div x-show="selected === 1" x-transition>
        Contenuto 1
      </div>
    </div>
    <div>
      <button @click="selected = selected === 2 ? null : 2">
        Item 2
      </button>
      <div x-show="selected === 2" x-transition>
        Contenuto 2
      </div>
    </div>
  </div>
</div>
```

### Tabs
```html
<div x-data="{ activeTab: 'tab1' }">
  <div class="flex space-x-4 border-b">
    <button 
      @click="activeTab = 'tab1'"
      :class="{ 'border-b-2 border-blue-500': activeTab === 'tab1' }"
    >
      Tab 1
    </button>
    <button 
      @click="activeTab = 'tab2'"
      :class="{ 'border-b-2 border-blue-500': activeTab === 'tab2' }"
    >
      Tab 2
    </button>
  </div>
  
  <div class="mt-4">
    <div x-show="activeTab === 'tab1'">Contenuto Tab 1</div>
    <div x-show="activeTab === 'tab2'">Contenuto Tab 2</div>
  </div>
</div>
```

## Tailwind CSS Patterns

### Card
```html
<div class="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
  <h3 class="text-xl font-bold mb-2">Titolo</h3>
  <p class="text-gray-600">Descrizione</p>
</div>
```

### Hero Section
```html
<section class="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
  <div class="container mx-auto px-4 text-center">
    <h1 class="text-5xl font-bold mb-4">Titolo Hero</h1>
    <p class="text-xl mb-8">Sottotitolo</p>
    <button class="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
      CTA Button
    </button>
  </div>
</section>
```

### Grid Layout
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div class="bg-white rounded-lg shadow p-6">Item 1</div>
  <div class="bg-white rounded-lg shadow p-6">Item 2</div>
  <div class="bg-white rounded-lg shadow p-6">Item 3</div>
</div>
```

### Form Input
```html
<div class="mb-4">
  <label class="block text-gray-700 font-medium mb-2" for="email">
    Email
  </label>
  <input 
    type="email" 
    id="email"
    class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    placeholder="tua@email.com"
  />
</div>
```

### Badge/Tag
```html
<span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
  Tag
</span>
```

### Modal Backdrop
```html
<div 
  x-show="modalOpen" 
  class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
  @click="modalOpen = false"
>
  <div 
    class="bg-white rounded-lg p-8 max-w-md w-full mx-4"
    @click.stop
  >
    <h2 class="text-2xl font-bold mb-4">Titolo Modal</h2>
    <p class="text-gray-600 mb-6">Contenuto del modal</p>
    <button 
      @click="modalOpen = false"
      class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
    >
      Chiudi
    </button>
  </div>
</div>
```

## Astro Patterns

### Componente con Props
```astro
---
interface Props {
  title: string;
  description?: string;
  image?: string;
}

const { title, description, image } = Astro.props;
---

<div class="card">
  {image && <img src={image} alt={title} />}
  <h2>{title}</h2>
  {description && <p>{description}</p>}
</div>
```

### Fetch Data (getStaticPaths)
```astro
---
export async function getStaticPaths() {
  const posts = await fetch('https://api.example.com/posts').then(r => r.json());
  
  return posts.map(post => ({
    params: { slug: post.slug },
    props: { post }
  }));
}

const { post } = Astro.props;
---

<h1>{post.title}</h1>
<p>{post.content}</p>
```

### Layout con Slot Named
```astro
---
// Layout.astro
---
<html>
  <head>
    <slot name="head" />
  </head>
  <body>
    <header>
      <slot name="header" />
    </header>
    <main>
      <slot />
    </main>
  </body>
</html>

<!-- Uso -->
---
import Layout from '../layouts/Layout.astro';
---
<Layout>
  <div slot="head">
    <title>Titolo Custom</title>
  </div>
  <div slot="header">
    <h1>Header Custom</h1>
  </div>
  <p>Contenuto principale</p>
</Layout>
```

