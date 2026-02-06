import { createClient } from '@sanity/client';

const client = createClient({
  projectId: '8i61ocow',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: 'skL77OcAWKxBIwLi7HyvIb2YTQLqjC5i7xGgQiPpKCmHqKFG155P1SA169AoW9bdAapCYkiD6mpe3mwsjQPS4YfUwqhziGPacyGRLb2I3ckorTXeRNcu5lHDmY8U2YyJUOiVylobA9lwosNrsE099BSR0vSDA0DQuzDRAGB95EWs7dhtPBmH',
});

async function populateBlogProsecco() {
  console.log('🚀 Creazione Blog Post "Area del Prosecco"...\n');

  try {
    // Recupero i dati dalla destination prosecco
    const destination = await client.fetch(
      `*[_type == "destination" && slug.current == "prosecco"][0]`
    );

    if (!destination) {
      console.log('   ⚠️  Destination "prosecco" non trovata. Esegui prima populate-prosecco.js\n');
      return;
    }

    const blogSlug = 'area-prosecco-matrimonio';
    const existingPost = await client.fetch(
      `*[_type == "blogPost" && slug.current == $slug][0]`,
      { slug: blogSlug }
    );

    const blogPost = {
      _type: 'blogPost',
      slug: { _type: 'slug', current: blogSlug },
      templateType: 'structured',
      title: {
        it: 'Sposarsi nell\'Area del Prosecco',
        en: 'Getting Married in the Prosecco Hills',
        es: 'Casarse en las Colinas del Prosecco'
      },
      excerpt: {
        it: 'Scopri le dolci colline patrimonio UNESCO per un matrimonio tra vigneti, storia e autenticità nel cuore del Veneto.',
        en: 'Discover the gentle UNESCO heritage hills for a wedding among vineyards, history and authenticity in the heart of Veneto.',
        es: 'Descubre las suaves colinas patrimonio de la UNESCO para una boda entre viñedos, historia y autenticidad en el corazón del Véneto.'
      },
      publishedAt: '2024-11-05T10:00:00Z',

      // Copy all structured content from destination
      heroImage: destination.heroImage,
      heroLabel: destination.heroLabel,
      introQuote: destination.heroIntro,
      
      // Section 01
      section01Label: destination.section01Label,
      section01Title: destination.section01Title,
      section01Text: destination.section01Text,
      section01BoxIcon: destination.section01BoxIcon,
      section01BoxTitle: destination.section01BoxTitle,
      section01BoxPoints: destination.section01BoxPoints,
      
      // Section 02
      section02Label: destination.section02Label,
      section02Title: destination.section02Title,
      section02Intro: destination.section02Intro,
      section02Cards: destination.section02Cards,
      section02Highlight: destination.section02Highlight,
      
      // Section 03
      section03Label: destination.section03Label,
      section03Title: destination.section03Title,
      section03Intro: destination.section03Intro,
      section03Items: destination.section03Items,
      
      // Section 04
      section04Label: destination.section04Label,
      section04Title: destination.section04Title,
      section04Text: destination.section04Text,
      section04Quote: destination.section04Quote,
      section04Tags: destination.section04Tags
    };

    if (existingPost) {
      await client.patch(existingPost._id).set(blogPost).commit();
      console.log('   ✅ Blog "Area del Prosecco" AGGIORNATO!\n');
    } else {
      await client.create(blogPost);
      console.log('   ✅ Blog "Area del Prosecco" CREATO!\n');
    }

    console.log('🎉 FATTO!\n');
    console.log('📝 Prossimi passi:');
    console.log('1. Vai su http://localhost:3333');
    console.log('2. Apri il blog "Area del Prosecco"');
    console.log('3. Carica la Featured Image');
    console.log('4. Aggiungi eventuali categorie');
    console.log('5. Clicca "Publish"\n');

  } catch (error) {
    console.error('   ❌ Errore:', error.message);
  }
}

populateBlogProsecco().catch(console.error);
