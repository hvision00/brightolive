import { createClient } from '@sanity/client';

const client = createClient({
  projectId: '8i61ocow',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: 'skL77OcAWKxBIwLi7HyvIb2YTQLqjC5i7xGgQiPpKCmHqKFG155P1SA169AoW9bdAapCYkiD6mpe3mwsjQPS4YfUwqhziGPacyGRLb2I3ckorTXeRNcu5lHDmY8U2YyJUOiVylobA9lwosNrsE099BSR0vSDA0DQuzDRAGB95EWs7dhtPBmH',
});

// Mapping: destination slug -> blog post data
const blogMapping = [
  {
    destSlug: 'prosecco',
    blogSlug: 'sposarsi-colline-prosecco',
    title: {
      it: 'Sposarsi tra le Colline del Prosecco',
      en: 'Getting Married in the Prosecco Hills',
      es: 'Casarse entre las Colinas del Prosecco'
    },
    excerpt: {
      it: 'Scopri perché le Colline del Prosecco UNESCO sono la cornice perfetta per un matrimonio autentico e romantico nel cuore del Veneto.',
      en: 'Discover why the UNESCO Prosecco Hills are the perfect setting for an authentic and romantic wedding in the heart of Veneto.',
      es: 'Descubre por qué las Colinas del Prosecco UNESCO son el escenario perfecto para una boda auténtica y romántica en el corazón del Véneto.'
    },
    publishedAt: '2024-12-01T10:00:00Z'
  },
  {
    destSlug: 'dolomiti',
    blogSlug: 'sposarsi-dolomiti-venete',
    title: {
      it: 'Sposarsi nelle Dolomiti Venete',
      en: 'Getting Married in the Venetian Dolomites',
      es: 'Casarse en los Dolomitas Venecianos'
    },
    excerpt: {
      it: 'Tra sogno, natura e meraviglia. Le Dolomiti offrono uno scenario unico al mondo per celebrare il tuo amore circondato dalla magnificenza alpina.',
      en: 'Between dream, nature and wonder. The Dolomites offer a unique setting in the world to celebrate your love surrounded by Alpine magnificence.',
      es: 'Entre sueño, naturaleza y maravilla. Los Dolomitas ofrecen un escenario único en el mundo para celebrar tu amor rodeado de magnificencia alpina.'
    },
    publishedAt: '2024-11-28T10:00:00Z'
  },
  {
    destSlug: 'venezia',
    blogSlug: 'venezia-matrimonio-sogno-serenissima',
    title: {
      it: 'Venezia: Un matrimonio da sogno nella Serenissima',
      en: 'Venice: A Dream Wedding in the Serene',
      es: 'Venecia: Una boda de ensueño en la Serenísima'
    },
    excerpt: {
      it: 'Canali, palazzi storici e romanticismo eterno. Scopri come organizzare un matrimonio indimenticabile nella città più romantica al mondo.',
      en: 'Canals, historic palaces and eternal romance. Discover how to organize an unforgettable wedding in the most romantic city in the world.',
      es: 'Canales, palacios históricos y romanticismo eterno. Descubre cómo organizar una boda inolvidable en la ciudad más romántica del mundo.'
    },
    publishedAt: '2024-11-25T10:00:00Z'
  },
  {
    destSlug: 'bassano',
    blogSlug: 'bassano-grappa-eleganza-storia',
    title: {
      it: 'Bassano del Grappa: Eleganza e storia',
      en: 'Bassano del Grappa: Elegance and history',
      es: 'Bassano del Grappa: Elegancia e historia'
    },
    excerpt: {
      it: 'Un borgo ricco di charme dove l\'eleganza del passato incontra la raffinatezza moderna per un matrimonio indimenticabile.',
      en: 'A village rich in charm where the elegance of the past meets modern refinement for an unforgettable wedding.',
      es: 'Un pueblo rico en encanto donde la elegancia del pasado se encuentra con el refinamiento moderno para una boda inolvidable.'
    },
    publishedAt: '2024-11-20T10:00:00Z'
  },
  {
    destSlug: 'padova',
    blogSlug: 'sposarsi-padova-colli-euganei',
    title: {
      it: 'Sposarsi a Padova e nei Colli Euganei',
      en: 'Getting Married in Padua and Euganean Hills',
      es: 'Casarse en Padua y las Colinas Euganeas'
    },
    excerpt: {
      it: 'Ville Venete storiche, terme, natura e cultura si fondono per creare il contesto perfetto per un matrimonio raffinato ed elegante.',
      en: 'Historic Venetian villas, thermal baths, nature and culture merge to create the perfect context for a refined and elegant wedding.',
      es: 'Villas venecianas históricas, termas, naturaleza y cultura se fusionan para crear el contexto perfecto para una boda refinada y elegante.'
    },
    publishedAt: '2024-11-15T10:00:00Z'
  }
];

async function createBlogFromDestinations() {
  console.log('🚀 Creazione Blog Post da Destination Wedding...\n');

  for (const mapping of blogMapping) {
    try {
      console.log(`📝 Processando: ${mapping.title.it}...`);
      
      // Fetch destination data
      const destination = await client.fetch(
        `*[_type == "destination" && slug.current == $slug][0]`,
        { slug: mapping.destSlug }
      );

      if (!destination) {
        console.log(`   ⚠️  Destination "${mapping.destSlug}" non trovata. Skipping...\n`);
        continue;
      }

      // Check if blog post already exists
      const existingPost = await client.fetch(
        `*[_type == "blogPost" && slug.current == $slug][0]`,
        { slug: mapping.blogSlug }
      );

      // Create blog post data from destination
      const blogPost = {
        _type: 'blogPost',
        slug: { _type: 'slug', current: mapping.blogSlug },
        templateType: 'structured',
        title: mapping.title,
        excerpt: mapping.excerpt,
        publishedAt: mapping.publishedAt,
        
        // Copy all structured content from destination
        heroImage: destination.heroImage,
        heroLabel: destination.heroLabel,
        heroIntro: destination.heroIntro,
        
        introQuote: destination.introQuote,
        introCards: destination.introCards,
        introText: destination.introText,
        
        section01Label: destination.section01Label,
        section01Title: destination.section01Title,
        section01Text: destination.section01Text,
        section01BoxTitle: destination.section01BoxTitle,
        section01BoxPoints: destination.section01BoxPoints,
        
        section02Label: destination.section02Label,
        section02Title: destination.section02Title,
        section02Intro: destination.section02Intro,
        section02Cards: destination.section02Cards,
        section02Highlight: destination.section02Highlight,
        
        section03Label: destination.section03Label,
        section03Title: destination.section03Title,
        section03Intro: destination.section03Intro,
        section03Items: destination.section03Items,
        
        section04Label: destination.section04Label,
        section04Title: destination.section04Title,
        section04Text: destination.section04Text,
        section04Quote: destination.section04Quote,
        section04Tags: destination.section04Tags
      };

      if (existingPost) {
        await client.patch(existingPost._id).set(blogPost).commit();
        console.log(`   ✅ Blog aggiornato: ${mapping.title.it}\n`);
      } else {
        await client.create(blogPost);
        console.log(`   ✅ Blog creato: ${mapping.title.it}\n`);
      }

    } catch (error) {
      console.error(`   ❌ Errore con ${mapping.title.it}:`, error.message, '\n');
    }
  }

  console.log('🎉 TUTTI I BLOG POST CREATI!\n');
  console.log('📝 Prossimi passi:');
  console.log('1. Vai su http://localhost:3333');
  console.log('2. Apri ogni Blog Post');
  console.log('3. Carica "Featured Image" (immagine di anteprima)');
  console.log('4. Opzionale: Aggiungi categorie');
  console.log('5. Clicca "Publish" per ognuno\n');
  console.log('💡 I contenuti sono copiati dalle Destination Wedding!\n');
}

createBlogFromDestinations().catch(console.error);
