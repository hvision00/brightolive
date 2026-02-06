import { createClient } from '@sanity/client';

const client = createClient({
  projectId: '8i61ocow',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: 'skL77OcAWKxBIwLi7HyvIb2YTQLqjC5i7xGgQiPpKCmHqKFG155P1SA169AoW9bdAapCYkiD6mpe3mwsjQPS4YfUwqhziGPacyGRLb2I3ckorTXeRNcu5lHDmY8U2YyJUOiVylobA9lwosNrsE099BSR0vSDA0DQuzDRAGB95EWs7dhtPBmH',
});

const padova = {
  _type: 'destination',
  slug: { _type: 'slug', current: 'padova' },
  order: 5,
  // CARD
  name: { it: 'Padova', en: 'Padua', es: 'Padua' },
  subtitle: { it: 'Arte e cultura', en: 'Art and culture', es: 'Arte y cultura' },
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
  // HERO
  heroLabel: { it: 'Arte, Storia e Natura', en: 'Art, History and Nature', es: 'Arte, Historia y Naturaleza' },
  heroIntro: {
    it: 'Eleganza, autenticità e storia si fondono per trasformare ogni matrimonio in un\'esperienza indimenticabile.',
    en: 'Elegance, authenticity and history merge to transform every wedding into an unforgettable experience.',
    es: 'Elegancia, autenticidad e historia se fusionan para transformar cada boda en una experiencia inolvidable.'
  },
  // INTRO
  introQuote: {
    it: 'Se stai cercando una location elegante, autentica e ricca di storia, Padova e la sua provincia offrono scenari unici che trasformano ogni matrimonio in un\'esperienza indimenticabile.',
    en: 'If you are looking for an elegant, authentic and history-rich location, Padua and its province offer unique settings that transform every wedding into an unforgettable experience.',
    es: 'Si buscas un lugar elegante, auténtico y rico en historia, Padua y su provincia ofrecen escenarios únicos que transforman cada boda en una experiencia inolvidable.'
  },
  introCards: [
    {
      cardValue: { it: 'UNESCO', en: 'UNESCO', es: 'UNESCO' },
      cardLabel: { it: 'Siti Patrimonio dell\'Umanità', en: 'World Heritage Sites', es: 'Sitios Patrimonio de la Humanidad' }
    },
    {
      cardValue: { it: 'Ville Venete', en: 'Venetian Villas', es: 'Villas Venecianas' },
      cardLabel: { it: 'Dimore nobiliari storiche', en: 'Historic noble residences', es: 'Residencias nobles históricas' }
    },
    {
      cardValue: { it: 'Terme', en: 'Thermal Baths', es: 'Termas' },
      cardLabel: { it: 'Le più grandi d\'Europa', en: 'The largest in Europe', es: 'Las más grandes de Europa' }
    }
  ],
  introText: {
    it: 'Padova è culla di arte, scienza e cultura. L\'Orto Botanico più antico del mondo, i cicli pittorici del Trecento e le ville venete nei Colli Euganei creano un contesto perfetto per matrimoni raffinati. La città unisce cultura millenaria ed eleganza contemporanea in un territorio ricco di bellezze naturali e architettoniche.',
    en: 'Padua is the cradle of art, science and culture. The world\'s oldest Botanical Garden, the fourteenth-century pictorial cycles and the Venetian villas in the Euganean Hills create a perfect context for refined weddings. The city combines millennial culture and contemporary elegance in an area rich in natural and architectural beauties.',
    es: 'Padua es la cuna del arte, la ciencia y la cultura. El Jardín Botánico más antiguo del mundo, los ciclos pictóricos del siglo XIV y las villas venecianas en las Colinas Euganeas crean un contexto perfecto para bodas refinadas. La ciudad combina cultura milenaria y elegancia contemporánea en un territorio rico en bellezas naturales y arquitectónicas.'
  },
  // SEZIONE 01
  section01Label: { it: 'Location Esclusive', en: 'Exclusive Locations', es: 'Lugares Exclusivos' },
  section01Title: {
    it: 'Ville Venete\nStoriche',
    en: 'Historic\nVenetian Villas',
    es: 'Villas Venecianas\nHistóricas'
  },
  section01Text: {
    it: 'La provincia di Padova è una delle zone italiane con la maggiore concentrazione di Ville Venete storiche. Queste dimore nobiliari sono perfette per matrimoni scenografici, dove arte, architettura e natura si fondono armoniosamente creando un\'ambientazione da sogno.',
    en: 'The province of Padua is one of the Italian areas with the highest concentration of historic Venetian Villas. These noble residences are perfect for scenic weddings, where art, architecture and nature blend harmoniously creating a dream setting.',
    es: 'La provincia de Padua es una de las áreas italianas con la mayor concentración de Villas Venecianas históricas. Estas residencias nobles son perfectas para bodas escénicas, donde arte, arquitectura y naturaleza se fusionan armoniosamente creando un escenario de ensueño.'
  },
  section01BoxIcon: 'lucide:landmark',
  section01BoxTitle: { it: 'Caratteristiche Ville', en: 'Villa Features', es: 'Características Villas' },
  section01BoxPoints: [
    { it: 'Giardini all\'Italiana', en: 'Italian Gardens', es: 'Jardines Italianos' },
    { it: 'Sale Affrescate', en: 'Frescoed Halls', es: 'Salas con Frescos' },
    { it: 'Barchesse e Corti', en: 'Barns and Courtyards', es: 'Barchesse y Patios' }
  ],
  // SEZIONE 02
  section02Label: { it: 'Cuore Verde del Veneto', en: 'Green Heart of Veneto', es: 'Corazón Verde del Véneto' },
  section02Title: { it: 'Colli Euganei', en: 'Euganean Hills', es: 'Colinas Euganeas' },
  section02Intro: {
    it: 'I Colli Euganei, cuore verde della provincia di Padova, offrono paesaggi naturali straordinari e strutture termali di fama internazionale. L\'area è parte del Parco Regionale dei Colli Euganei, un contesto protetto che assicura matrimoni all\'aperto intimi e suggestivi.',
    en: 'The Euganean Hills, the green heart of the province of Padua, offer extraordinary natural landscapes and internationally renowned thermal facilities. The area is part of the Euganean Hills Regional Park, a protected context that ensures intimate and evocative outdoor weddings.',
    es: 'Las Colinas Euganeas, el corazón verde de la provincia de Padua, ofrecen paisajes naturales extraordinarios e instalaciones termales de renombre internacional. El área es parte del Parque Regional de las Colinas Euganeas, un contexto protegido que garantiza bodas al aire libre íntimas y evocadoras.'
  },
  section02Cards: [
    {
      cardIcon: 'lucide:droplets',
      cardTitle: { it: 'Terme di Abano', en: 'Abano Thermal Baths', es: 'Termas de Abano' },
      cardText: { it: 'Le più grandi d\'Europa per weekend benessere', en: 'The largest in Europe for wellness weekends', es: 'Las más grandes de Europa para fines de semana de bienestar' },
      cardTags: [{ it: 'Benessere', en: 'Wellness', es: 'Bienestar' }]
    },
    {
      cardIcon: 'lucide:grape',
      cardTitle: { it: 'Vigneti e Cantine', en: 'Vineyards and Wineries', es: 'Viñedos y Bodegas' },
      cardText: { it: 'Degustazioni vini DOCG e DOC del territorio', en: 'DOCG and DOC wine tastings from the area', es: 'Degustaciones de vinos DOCG y DOC del territorio' },
      cardTags: [{ it: 'Enogastronomia', en: 'Food & Wine', es: 'Enogastronomía' }]
    },
    {
      cardIcon: 'lucide:trees',
      cardTitle: { it: 'Natura e Trekking', en: 'Nature and Trekking', es: 'Naturaleza y Senderismo' },
      cardText: { it: 'Percorsi panoramici ideali per servizi fotografici', en: 'Scenic routes ideal for photo shoots', es: 'Rutas panorámicas ideales para sesiones fotográficas' },
      cardTags: [{ it: 'Natura', en: 'Nature', es: 'Naturaleza' }]
    }
  ],
  section02Highlight: {
    it: 'I Colli Euganei offrono un connubio perfetto tra natura, benessere e tradizione enogastronomica veneta.',
    en: 'The Euganean Hills offer a perfect combination of nature, wellness and Venetian food and wine tradition.',
    es: 'Las Colinas Euganeas ofrecen una combinación perfecta de naturaleza, bienestar y tradición enogastronómica veneciana.'
  },
  // SEZIONE 03
  section03Label: { it: 'Fascino Medievale', en: 'Medieval Charm', es: 'Encanto Medieval' },
  section03Title: {
    it: 'Borghi Storici, Castelli e\nLuoghi Spirituali',
    en: 'Historic Villages, Castles and\nSpiritual Places',
    es: 'Pueblos Históricos, Castillos y\nLugares Espirituales'
  },
  section03Intro: {
    it: 'La provincia di Padova è ricca di borghi medievali e castelli che aggiungono fascino e romanticismo al tuo matrimonio. Dall\'Abbazia di Praglia all\'Eremo del Monte Rua, ogni luogo racconta una storia millenaria.',
    en: 'The province of Padua is rich in medieval villages and castles that add charm and romance to your wedding. From the Abbey of Praglia to the Hermitage of Monte Rua, each place tells a thousand-year-old story.',
    es: 'La provincia de Padua es rica en pueblos medievales y castillos que añaden encanto y romanticismo a tu boda. Desde la Abadía de Praglia hasta el Ermita del Monte Rua, cada lugar cuenta una historia milenaria.'
  },
  section03Items: [
    {
      itemIcon: 'lucide:home',
      itemTitle: { it: 'Arquà Petrarca', en: 'Arquà Petrarca', es: 'Arquà Petrarca' },
      itemSubtitle: { it: 'Borgo più bello d\'Italia', en: 'Most beautiful village in Italy', es: 'Pueblo más hermoso de Italia' }
    },
    {
      itemIcon: 'lucide:castle',
      itemTitle: { it: 'Monselice', en: 'Monselice', es: 'Monselice' },
      itemSubtitle: { it: 'Rocca storica', en: 'Historic fortress', es: 'Fortaleza histórica' }
    },
    {
      itemIcon: 'lucide:landmark',
      itemTitle: { it: 'Este', en: 'Este', es: 'Este' },
      itemSubtitle: { it: 'Storia millenaria', en: 'Millennial history', es: 'Historia milenaria' }
    },
    {
      itemIcon: 'lucide:church',
      itemTitle: { it: 'Luoghi Spirituali', en: 'Spiritual Places', es: 'Lugares Espirituales' },
      itemSubtitle: { it: 'Abbazie e eremi antichi', en: 'Ancient abbeys and hermitages', es: 'Abadías y ermitas antiguas' }
    }
  ],
  // SEZIONE 04
  section04Label: { it: 'Patrimonio UNESCO', en: 'UNESCO Heritage', es: 'Patrimonio UNESCO' },
  section04Title: {
    it: 'Arte, Cultura e Università:\nLa Padova da Non Perdere',
    en: 'Art, Culture and University:\nThe Padua Not to Be Missed',
    es: 'Arte, Cultura y Universidad:\nLa Padua que No Te Puedes Perder'
  },
  section04Text: {
    it: 'Padova è culla di arte, scienza e cultura. La Cappella degli Scrovegni con gli affreschi di Giotto è un capolavoro assoluto dell\'arte mondiale. L\'Orto Botanico, il più antico del mondo fondato nel 1545, è un luogo magico dove botanica e storia si incontrano. L\'Università di Padova, fondata nel 1222, è una delle più antiche al mondo: qui Galileo Galilei insegnò per 18 anni e fu costruito il primo Teatro Anatomico al mondo.',
    en: 'Padua is the cradle of art, science and culture. The Scrovegni Chapel with Giotto\'s frescoes is an absolute masterpiece of world art. The Botanical Garden, the oldest in the world founded in 1545, is a magical place where botany and history meet. The University of Padua, founded in 1222, is one of the oldest in the world: here Galileo Galilei taught for 18 years and the first Anatomical Theater in the world was built.',
    es: 'Padua es la cuna del arte, la ciencia y la cultura. La Capilla de los Scrovegni con los frescos de Giotto es una obra maestra absoluta del arte mundial. El Jardín Botánico, el más antiguo del mundo fundado en 1545, es un lugar mágico donde la botánica y la historia se encuentran. La Universidad de Padua, fundada en 1222, es una de las más antiguas del mundo: aquí Galileo Galilei enseñó durante 18 años y se construyó el primer Teatro Anatómico del mundo.'
  },
  section04Quote: {
    it: 'Sposarsi a Padova e nei Colli Euganei significa vivere un matrimonio raffinato, intimo e naturale, dove bellezza, arte e accoglienza si fondono.',
    en: 'Getting married in Padua and the Euganean Hills means experiencing a refined, intimate and natural wedding, where beauty, art and hospitality merge.',
    es: 'Casarse en Padua y las Colinas Euganeas significa vivir una boda refinada, íntima y natural, donde la belleza, el arte y la hospitalidad se fusionan.'
  },
  section04Tags: [
    { it: 'Cappella Scrovegni', en: 'Scrovegni Chapel', es: 'Capilla Scrovegni' },
    { it: 'Orto Botanico 1545', en: 'Botanical Garden 1545', es: 'Jardín Botánico 1545' },
    { it: 'Università 1222', en: 'University 1222', es: 'Universidad 1222' }
  ]
};

async function populatePadova() {
  console.log('🚀 Popolamento PADOVA...\n');

  try {
    const existing = await client.fetch(
      `*[_type == "destination" && slug.current == "padova"][0]`
    );

    if (existing) {
      await client.patch(existing._id).set(padova).commit();
      console.log('   ✅ Padova AGGIORNATA!\n');
    } else {
      await client.create(padova);
      console.log('   ✅ Padova CREATA!\n');
    }

    console.log('🎉 FATTO!\n');
    console.log('📝 Prossimi passi:');
    console.log('1. Vai su http://localhost:3333');
    console.log('2. Apri "Padova" in Destination Wedding');
    console.log('3. Carica le immagini (cardImage e heroImage)');
    console.log('4. Clicca "Publish"\n');
  } catch (error) {
    console.error('   ❌ Errore:', error.message);
  }
}

populatePadova().catch(console.error);
