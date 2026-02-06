import { createClient } from '@sanity/client';

const client = createClient({
  projectId: '8i61ocow',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: 'skL77OcAWKxBIwLi7HyvIb2YTQLqjC5i7xGgQiPpKCmHqKFG155P1SA169AoW9bdAapCYkiD6mpe3mwsjQPS4YfUwqhziGPacyGRLb2I3ckorTXeRNcu5lHDmY8U2YyJUOiVylobA9lwosNrsE099BSR0vSDA0DQuzDRAGB95EWs7dhtPBmH',
});

const venezia = {
  _type: 'destination',
  slug: { _type: 'slug', current: 'venezia' },
  order: 3,
  // CARD
  name: { it: 'Venezia', en: 'Venice', es: 'Venecia' },
  subtitle: { it: 'La serenissima', en: 'The Serene', es: 'La Serenísima' },
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
  // HERO
  heroLabel: { it: 'La Serenissima', en: 'The Serene', es: 'La Serenísima' },
  heroIntro: {
    it: 'La città più romantica del mondo, dove ogni angolo racconta una storia d\'amore senza tempo.',
    en: 'The most romantic city in the world, where every corner tells a timeless love story.',
    es: 'La ciudad más romántica del mundo, donde cada rincón cuenta una historia de amor atemporal.'
  },
  // INTRO
  introQuote: {
    it: 'Non c\'è città al mondo più adatta per celebrare l\'amore. Venezia è poesia che prende vita.',
    en: 'There is no city in the world more suitable for celebrating love. Venice is poetry that comes to life.',
    es: 'No hay ciudad en el mundo más adecuada para celebrar el amor. Venecia es poesía que cobra vida.'
  },
  introCards: [
    {
      cardValue: { it: 'Best: Primavera ed estate', en: 'Best: Spring and summer', es: 'Mejor: Primavera y verano' },
      cardLabel: { it: 'Stagionalità', en: 'Seasonality', es: 'Estacionalidad' }
    },
    {
      cardValue: { it: 'Romantic luxury', en: 'Romantic luxury', es: 'Romantic luxury' },
      cardLabel: { it: 'Style', en: 'Style', es: 'Estilo' }
    }
  ],
  introText: {
    it: 'Immagina di pronunciare il tuo "sì" mentre una gondola scivola dolcemente sul Canal Grande, con i palazzi storici che si riflettono nell\'acqua. Oppure in una delle magnifiche sale affrescate che hanno ospitato dogi e nobili per secoli. Venezia trasforma ogni matrimonio in un sogno ad occhi aperti, dove la storia si fonde con il romanticismo per creare momenti che restano impressi per sempre.',
    en: 'Imagine saying your "I do" while a gondola gently glides on the Grand Canal, with historic palaces reflected in the water. Or in one of the magnificent frescoed halls that have hosted doges and nobles for centuries. Venice transforms every wedding into a waking dream, where history merges with romance to create moments that remain etched forever.',
    es: 'Imagina decir tu "sí" mientras una góndola se desliza suavemente por el Gran Canal, con palacios históricos reflejados en el agua. O en una de las magníficas salas con frescos que han albergado a dogos y nobles durante siglos. Venecia transforma cada boda en un sueño despierto, donde la historia se fusiona con el romance para crear momentos que quedan grabados para siempre.'
  },
  // SEZIONE 01
  section01Label: { it: 'Perché Venezia', en: 'Why Venice', es: 'Por qué Venecia' },
  section01Title: {
    it: 'La Città più\nRomantica del Mondo',
    en: 'The Most\nRomantic City in the World',
    es: 'La Ciudad más\nRomántica del Mundo'
  },
  section01Text: {
    it: 'Sposarsi a Venezia significa regalare a te e ai tuoi ospiti un\'esperienza cinematografica, un viaggio nel tempo dove ogni dettaglio parla di bellezza, arte e amore eterno. Venezia non è solo una location, è un\'emozione che accompagnerà per sempre il ricordo del tuo giorno più bello.',
    en: 'Getting married in Venice means giving yourself and your guests a cinematic experience, a journey through time where every detail speaks of beauty, art and eternal love. Venice is not just a location, it is an emotion that will forever accompany the memory of your most beautiful day.',
    es: 'Casarse en Venecia significa regalarte a ti y a tus invitados una experiencia cinematográfica, un viaje en el tiempo donde cada detalle habla de belleza, arte y amor eterno. Venecia no es solo un lugar, es una emoción que acompañará para siempre el recuerdo de tu día más hermoso.'
  },
  section01BoxIcon: 'lucide:heart',
  section01BoxTitle: { it: 'Caratteristiche Uniche', en: 'Unique Features', es: 'Características Únicas' },
  section01BoxPoints: [
    { it: 'Canali Romantici', en: 'Romantic Canals', es: 'Canales Románticos' },
    { it: 'Palazzi Storici', en: 'Historic Palaces', es: 'Palacios Históricos' },
    { it: 'Atmosfera Unica', en: 'Unique Atmosphere', es: 'Atmósfera Única' },
    { it: 'Romance Senza Tempo', en: 'Timeless Romance', es: 'Romance Atemporal' }
  ],
  // SEZIONE 02
  section02Label: { it: 'Location da Sogno', en: 'Dream Locations', es: 'Lugares de Ensueño' },
  section02Title: {
    it: 'Location Esclusive per\nMatrimoni Indimenticabili',
    en: 'Exclusive Locations for\nUnforgettable Weddings',
    es: 'Lugares Exclusivos para\nBodas Inolvidables'
  },
  section02Intro: {
    it: 'Dai palazzi storici sul Canal Grande alle Scuole Grandi ricche d\'arte, Venezia offre location esclusive dove storia e bellezza si fondono.',
    en: 'From historic palaces on the Grand Canal to the art-rich Scuole Grandi, Venice offers exclusive locations where history and beauty merge.',
    es: 'Desde palacios históricos en el Gran Canal hasta las Scuole Grandi ricas en arte, Venecia ofrece lugares exclusivos donde la historia y la belleza se fusionan.'
  },
  section02Cards: [
    {
      cardIcon: 'lucide:landmark',
      cardTitle: { it: 'Palazzo Cavalli', en: 'Palazzo Cavalli', es: 'Palazzo Cavalli' },
      cardText: { it: 'Sul Canal Grande con vista su Ponte di Rialto', en: 'On the Grand Canal overlooking Rialto Bridge', es: 'En el Gran Canal con vista al Puente de Rialto' },
      cardTags: [
        { it: 'Canal Grande', en: 'Grand Canal', es: 'Gran Canal' },
        { it: 'Arrivo in Gondola', en: 'Gondola Arrival', es: 'Llegada en Góndola' }
      ]
    },
    {
      cardIcon: 'lucide:church',
      cardTitle: { it: 'Scuole Grandi', en: 'Scuole Grandi', es: 'Scuole Grandi' },
      cardText: { it: 'Istituzioni storiche con opere d\'arte straordinarie', en: 'Historic institutions with extraordinary artworks', es: 'Instituciones históricas con obras de arte extraordinarias' },
      cardTags: [
        { it: 'Arte & Storia', en: 'Art & History', es: 'Arte e Historia' }
      ]
    },
    {
      cardIcon: 'lucide:building',
      cardTitle: { it: 'Palazzi Esclusivi', en: 'Exclusive Palaces', es: 'Palacios Exclusivos' },
      cardText: { it: 'Hotel di lusso e dimore storiche con giardini segreti', en: 'Luxury hotels and historic residences with secret gardens', es: 'Hoteles de lujo y residencias históricas con jardines secretos' },
      cardTags: [
        { it: 'Lusso', en: 'Luxury', es: 'Lujo' }
      ]
    }
  ],
  section02Highlight: {
    it: 'Ogni location veneziana racconta una storia unica e irripetibile, dal celebre Aman Venice ai palazzi privati affacciati sulla Laguna.',
    en: 'Every Venetian location tells a unique and unrepeatable story, from the famous Aman Venice to private palaces overlooking the Lagoon.',
    es: 'Cada lugar veneciano cuenta una historia única e irrepetible, desde el famoso Aman Venice hasta los palacios privados con vista a la Laguna.'
  },
  // SEZIONE 03
  section03Label: { it: 'L\'Esperienza', en: 'The Experience', es: 'La Experiencia' },
  section03Title: {
    it: 'Un Matrimonio a Venezia è\nun Viaggio nell\'Incanto',
    en: 'A Wedding in Venice is\na Journey into Enchantment',
    es: 'Una Boda en Venecia es\nun Viaje al Encanto'
  },
  section03Intro: {
    it: 'Dall\'arrivo in motoscafo privato al suono delle onde della Laguna, ogni momento diventa parte di un racconto magico. Gli ospiti si muovono tra calli e campielli, scoprono ponti romantici e si perdono nella bellezza di una città che sembra sospesa nel tempo.',
    en: 'From the arrival by private motorboat to the sound of the Lagoon waves, every moment becomes part of a magical tale. Guests move through calli and campielli, discover romantic bridges and get lost in the beauty of a city that seems suspended in time.',
    es: 'Desde la llegada en lancha privada al sonido de las olas de la Laguna, cada momento se convierte en parte de un cuento mágico. Los invitados se mueven por calli y campielli, descubren puentes románticos y se pierden en la belleza de una ciudad que parece suspendida en el tiempo.'
  },
  section03Items: [
    {
      itemIcon: 'lucide:waves',
      itemTitle: { it: 'Arrivo in Stile', en: 'Stylish Arrival', es: 'Llegada con Estilo' },
      itemSubtitle: { it: 'Gondola o motoscafo privato', en: 'Gondola or private motorboat', es: 'Góndola o lancha privada' }
    },
    {
      itemIcon: 'lucide:sparkles',
      itemTitle: { it: 'Tramonti Dorati', en: 'Golden Sunsets', es: 'Atardeceres Dorados' },
      itemSubtitle: { it: 'Sulla Laguna veneziana', en: 'On the Venetian Lagoon', es: 'En la Laguna veneciana' }
    },
    {
      itemIcon: 'lucide:sparkles',
      itemTitle: { it: 'Serenate', en: 'Serenades', es: 'Serenatas' },
      itemSubtitle: { it: 'Musica dal vivo tra i canali', en: 'Live music among the canals', es: 'Música en vivo entre los canales' }
    }
  ],
  // SEZIONE 04
  section04Label: { it: 'Un Sogno Veneziano', en: 'A Venetian Dream', es: 'Un Sueño Veneciano' },
  section04Title: {
    it: 'Momenti che Restano\nImpressinell\'Anima',
    en: 'Moments that Remain\nEtched in the Soul',
    es: 'Momentos que Quedan\nGrabados en el Alma'
  },
  section04Text: {
    it: 'Il tramonto che tinge di oro la Laguna, le luci che si riflettono sull\'acqua, il silenzio della notte veneziana interrotto solo dal dolce sciabordio delle gondole: questi sono i momenti che rendono unico un matrimonio a Venezia. Ogni dettaglio diventa poesia, ogni istante un ricordo prezioso che ti accompagnerà per sempre.',
    en: 'The sunset that gilds the Lagoon, the lights reflected on the water, the silence of the Venetian night interrupted only by the gentle lapping of gondolas: these are the moments that make a wedding in Venice unique. Every detail becomes poetry, every moment a precious memory that will accompany you forever.',
    es: 'El atardecer que tiñe de oro la Laguna, las luces que se reflejan en el agua, el silencio de la noche veneciana interrumpido solo por el dulce chapoteo de las góndolas: estos son los momentos que hacen única una boda en Venecia. Cada detalle se convierte en poesía, cada instante un recuerdo precioso que te acompañará para siempre.'
  },
  section04Quote: {
    it: 'Venezia non è solo una location, è l\'emozione che accompagnerà per sempre il ricordo del tuo giorno più bello.',
    en: 'Venice is not just a location, it is the emotion that will forever accompany the memory of your most beautiful day.',
    es: 'Venecia no es solo un lugar, es la emoción que acompañará para siempre el recuerdo de tu día más hermoso.'
  },
  section04Tags: [
    { it: 'Canali Romantici', en: 'Romantic Canals', es: 'Canales Románticos' },
    { it: 'Palazzi Storici', en: 'Historic Palaces', es: 'Palacios Históricos' },
    { it: 'Magia Veneziana', en: 'Venetian Magic', es: 'Magia Veneciana' }
  ]
};

async function populateVenezia() {
  console.log('🚀 Popolamento VENEZIA...\n');

  try {
    const existing = await client.fetch(
      `*[_type == "destination" && slug.current == "venezia"][0]`
    );

    if (existing) {
      await client.patch(existing._id).set(venezia).commit();
      console.log('   ✅ Venezia AGGIORNATA!\n');
    } else {
      await client.create(venezia);
      console.log('   ✅ Venezia CREATA!\n');
    }

    console.log('🎉 FATTO!\n');
    console.log('📝 Prossimi passi:');
    console.log('1. Vai su http://localhost:3333');
    console.log('2. Apri "Venezia" in Destination Wedding');
    console.log('3. Carica le immagini (cardImage e heroImage)');
    console.log('4. Clicca "Publish"\n');
  } catch (error) {
    console.error('   ❌ Errore:', error.message);
  }
}

populateVenezia().catch(console.error);
