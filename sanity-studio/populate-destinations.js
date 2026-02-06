import { createClient } from '@sanity/client';

const client = createClient({
  projectId: '8i61ocow',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: 'sk3GzTBQ5QduPwA2olbswGDgclRbPe31k4z4izNWzvMxavJdGgSFQpPLb86En55yqShAWCNxCBIxOC67Hzs8PTkpTCFIqtqK3u58iopCjeeRZWTZc5rpgftSvXnJnw5QizWYZGyq2NKHZOKPLTpK5lzDxVfAVBGAYVSjCfZjZp8IhC3j2LtB',
});

const destinations = [
  {
    _type: 'destination',
    slug: { _type: 'slug', current: 'prosecco' },
    order: 1,
    name: {
      it: 'Area del Prosecco',
      en: 'Prosecco Hills',
      es: 'Colinas del Prosecco'
    },
    subtitle: {
      it: 'Colline patrimonio UNESCO',
      en: 'UNESCO Heritage Hills',
      es: 'Colinas patrimonio UNESCO'
    },
    shortDescription: {
      it: 'Dolci colline, vigneti infiniti e tramonti indimenticabili. Una cornice naturale perfetta per un matrimonio all\'insegna dell\'eleganza rurale.',
      en: 'Rolling hills, endless vineyards and unforgettable sunsets. A perfect natural setting for a wedding celebrating rural elegance.',
      es: 'Colinas suaves, viñedos infinitos y atardeceres inolvidables. Un escenario natural perfecto para una boda con elegancia rural.'
    },
    details: [
      { it: 'Vigneti', en: 'Vineyards', es: 'Viñedos' },
      { it: 'Paesaggio UNESCO', en: 'UNESCO Landscape', es: 'Paisaje UNESCO' },
      { it: 'Enogastronomia', en: 'Food & Wine', es: 'Enogastronomía' }
    ],
    heroLabel: {
      it: 'Patrimonio UNESCO dal 2019',
      en: 'UNESCO Heritage since 2019',
      es: 'Patrimonio UNESCO desde 2019'
    },
    heroIntro: {
      it: 'Le colline del Prosecco, Patrimonio UNESCO, sono un dipinto naturale di vigneti, borghi antichi e tramonti indimenticabili.',
      en: 'The Prosecco Hills, a UNESCO Heritage site, are a natural painting of vineyards, ancient villages and unforgettable sunsets.',
      es: 'Las colinas del Prosecco, Patrimonio UNESCO, son una pintura natural de viñedos, pueblos antiguos y atardeceres inolvidables.'
    }
  },
  {
    _type: 'destination',
    slug: { _type: 'slug', current: 'dolomiti' },
    order: 2,
    name: {
      it: 'Dolomiti',
      en: 'Dolomites',
      es: 'Dolomitas'
    },
    subtitle: {
      it: 'Maestosità alpina',
      en: 'Alpine Majesty',
      es: 'Majestuosidad alpina'
    },
    shortDescription: {
      it: 'Tra vette imponenti e paesaggi mozzafiato, celebra il tuo amore circondato dalla magnificenza delle montagne più belle al mondo.',
      en: 'Among imposing peaks and breathtaking landscapes, celebrate your love surrounded by the magnificence of the world\'s most beautiful mountains.',
      es: 'Entre picos imponentes y paisajes impresionantes, celebra tu amor rodeado de la magnificencia de las montañas más hermosas del mundo.'
    },
    details: [
      { it: 'Alta quota', en: 'High altitude', es: 'Alta altitud' },
      { it: 'Panorami unici', en: 'Unique views', es: 'Vistas únicas' },
      { it: 'Atmosfera montana', en: 'Mountain atmosphere', es: 'Atmósfera montañosa' }
    ],
    heroLabel: {
      it: 'Patrimonio UNESCO dal 2009',
      en: 'UNESCO Heritage since 2009',
      es: 'Patrimonio UNESCO desde 2009'
    },
    heroIntro: {
      it: 'Le Dolomiti Venete offrono uno scenario naturale unico al mondo: un luogo dove il tempo rallenta e l\'amore trova il suo spazio più autentico.',
      en: 'The Venetian Dolomites offer a unique natural setting: a place where time slows down and love finds its most authentic space.',
      es: 'Los Dolomitas venecianos ofrecen un escenario natural único en el mundo: un lugar donde el tiempo se ralentiza y el amor encuentra su espacio más auténtico.'
    }
  },
  {
    _type: 'destination',
    slug: { _type: 'slug', current: 'venezia' },
    order: 3,
    name: {
      it: 'Venezia',
      en: 'Venice',
      es: 'Venecia'
    },
    subtitle: {
      it: 'La serenissima',
      en: 'The Serene',
      es: 'La Serenísima'
    },
    shortDescription: {
      it: 'La città più romantica al mondo. Canali, palazzi storici e un\'atmosfera unica per un matrimonio da sogno che resterà nel cuore.',
      en: 'The most romantic city in the world. Canals, historic palaces and a unique atmosphere for a dream wedding that will stay in your heart.',
      es: 'La ciudad más romántica del mundo. Canales, palacios históricos y una atmósfera única para una boda de ensueño que quedará en tu corazón.'
    },
    details: [
      { it: 'Canali', en: 'Canals', es: 'Canales' },
      { it: 'Palazzi storici', en: 'Historic palaces', es: 'Palacios históricos' },
      { it: 'Romance senza tempo', en: 'Timeless romance', es: 'Romance atemporal' }
    ],
    heroLabel: {
      it: 'La città più romantica del mondo',
      en: 'The most romantic city in the world',
      es: 'La ciudad más romántica del mundo'
    },
    heroIntro: {
      it: 'Venezia è la quintessenza del romanticismo. Non c\'è città al mondo più adatta per celebrare l\'amore.',
      en: 'Venice is the quintessence of romance. There is no city in the world more suitable for celebrating love.',
      es: 'Venecia es la quintaesencia del romanticismo. No hay ciudad en el mundo más adecuada para celebrar el amor.'
    }
  },
  {
    _type: 'destination',
    slug: { _type: 'slug', current: 'bassano' },
    order: 4,
    name: {
      it: 'Bassano del Grappa',
      en: 'Bassano del Grappa',
      es: 'Bassano del Grappa'
    },
    subtitle: {
      it: 'Storia e tradizione',
      en: 'History and tradition',
      es: 'Historia y tradición'
    },
    shortDescription: {
      it: 'Un borgo ricco di fascino storico dove l\'eleganza del passato incontra la raffinatezza moderna per un matrimonio indimenticabile.',
      en: 'A village rich in historical charm where the elegance of the past meets modern refinement for an unforgettable wedding.',
      es: 'Un pueblo rico en encanto histórico donde la elegancia del pasado se encuentra con el refinamiento moderno para una boda inolvidable.'
    },
    details: [
      { it: 'Centro storico', en: 'Historic center', es: 'Centro histórico' },
      { it: 'Ponte vecchio', en: 'Old bridge', es: 'Puente viejo' },
      { it: 'Charme veneto', en: 'Venetian charm', es: 'Encanto veneciano' }
    ],
    heroLabel: {
      it: 'Borgo storico veneto',
      en: 'Historic Venetian village',
      es: 'Pueblo histórico veneciano'
    },
    heroIntro: {
      it: 'Bassano del Grappa incarna il perfetto equilibrio tra storia e tradizione veneta. Il suo centro storico crea un\'ambientazione romantica e autentica.',
      en: 'Bassano del Grappa embodies the perfect balance between history and Venetian tradition. Its historic center creates a romantic and authentic setting.',
      es: 'Bassano del Grappa encarna el equilibrio perfecto entre historia y tradición veneciana. Su centro histórico crea un ambiente romántico y auténtico.'
    }
  },
  {
    _type: 'destination',
    slug: { _type: 'slug', current: 'padova' },
    order: 5,
    name: {
      it: 'Padova',
      en: 'Padua',
      es: 'Padua'
    },
    subtitle: {
      it: 'Arte e cultura',
      en: 'Art and culture',
      es: 'Arte y cultura'
    },
    shortDescription: {
      it: 'Città d\'arte e cultura, con giardini botanici e architetture storiche che offrono location eleganti per celebrare il tuo giorno speciale.',
      en: 'A city of art and culture, with botanical gardens and historic architecture offering elegant venues to celebrate your special day.',
      es: 'Ciudad de arte y cultura, con jardines botánicos y arquitectura histórica que ofrecen lugares elegantes para celebrar tu día especial.'
    },
    details: [
      { it: 'Architettura', en: 'Architecture', es: 'Arquitectura' },
      { it: 'Giardini storici', en: 'Historic gardens', es: 'Jardines históricos' },
      { it: 'Eleganza urbana', en: 'Urban elegance', es: 'Elegancia urbana' }
    ],
    heroLabel: {
      it: 'Città d\'arte e cultura',
      en: 'City of art and culture',
      es: 'Ciudad de arte y cultura'
    },
    heroIntro: {
      it: 'Padova è una città d\'arte che unisce cultura millenaria e eleganza contemporanea. L\'Orto Botanico e le piazze storiche offrono scenari raffinati.',
      en: 'Padua is a city of art that combines millennial culture and contemporary elegance. The Botanical Garden and historic squares offer refined settings.',
      es: 'Padua es una ciudad de arte que combina cultura milenaria y elegancia contemporánea. El Jardín Botánico y las plazas históricas ofrecen escenarios refinados.'
    }
  }
];

async function populateDestinations() {
  console.log('🚀 Inizio popolamento destination wedding...\n');

  for (const dest of destinations) {
    try {
      console.log(`📍 Creazione/Aggiornamento: ${dest.name.it}...`);
      
      // Cerca se esiste già
      const existing = await client.fetch(
        `*[_type == "destination" && slug.current == $slug][0]`,
        { slug: dest.slug.current }
      );

      if (existing) {
        // Aggiorna
        await client.patch(existing._id).set(dest).commit();
        console.log(`   ✅ Aggiornata: ${dest.name.it}\n`);
      } else {
        // Crea nuova
        await client.create(dest);
        console.log(`   ✅ Creata: ${dest.name.it}\n`);
      }
    } catch (error) {
      console.error(`   ❌ Errore con ${dest.name.it}:`, error.message, '\n');
    }
  }

  console.log('🎉 Popolamento completato!\n');
  console.log('📝 Prossimi passi:');
  console.log('1. Vai su http://localhost:3333');
  console.log('2. Apri ogni Destination Wedding');
  console.log('3. Carica le immagini (cardImage e heroImage)');
  console.log('4. Compila le sezioni 01-04 con i contenuti dettagliati');
  console.log('5. Clicca "Publish" per ogni destinazione\n');
}

populateDestinations().catch(console.error);
