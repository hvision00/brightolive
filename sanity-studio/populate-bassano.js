import { createClient } from '@sanity/client';

const client = createClient({
  projectId: '8i61ocow',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: 'skL77OcAWKxBIwLi7HyvIb2YTQLqjC5i7xGgQiPpKCmHqKFG155P1SA169AoW9bdAapCYkiD6mpe3mwsjQPS4YfUwqhziGPacyGRLb2I3ckorTXeRNcu5lHDmY8U2YyJUOiVylobA9lwosNrsE099BSR0vSDA0DQuzDRAGB95EWs7dhtPBmH',
});

const bassano = {
  _type: 'destination',
  slug: { _type: 'slug', current: 'bassano' },
  order: 4,
  // CARD
  name: { it: 'Bassano del Grappa', en: 'Bassano del Grappa', es: 'Bassano del Grappa' },
  subtitle: { it: 'Storia e tradizione', en: 'History and tradition', es: 'Historia y tradición' },
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
  // HERO
  heroLabel: { it: 'Storia e Tradizione', en: 'History and Tradition', es: 'Historia y Tradición' },
  heroIntro: {
    it: 'Dove la storia incontra la natura, tra ville palladiane, il famoso Ponte degli Alpini e le dolci colline venete.',
    en: 'Where history meets nature, among Palladian villas, the famous Ponte degli Alpini and the gentle Venetian hills.',
    es: 'Donde la historia se encuentra con la naturaleza, entre villas palladianas, el famoso Ponte degli Alpini y las suaves colinas venecianas.'
  },
  // INTRO
  introQuote: {
    it: 'Un luogo perfetto per chi desidera un matrimonio elegante e autentico, immerso nel fascino della cultura veneta.',
    en: 'A perfect place for those who want an elegant and authentic wedding, immersed in the charm of Venetian culture.',
    es: 'Un lugar perfecto para quienes desean una boda elegante y auténtica, inmersa en el encanto de la cultura veneciana.'
  },
  introCards: [
    {
      cardValue: { it: '1175', en: '1175', es: '1175' },
      cardLabel: { it: 'Prima documentazione storica', en: 'First historical documentation', es: 'Primera documentación histórica' }
    },
    {
      cardValue: { it: 'Ponte Vecchio', en: 'Old Bridge', es: 'Puente Viejo' },
      cardLabel: { it: 'Ponte degli Alpini sul Brenta', en: 'Alpini Bridge on Brenta', es: 'Puente de los Alpinos sobre Brenta' }
    },
    {
      cardValue: { it: 'Grappa', en: 'Grappa', es: 'Grappa' },
      cardLabel: { it: 'Tradizione distillatoria', en: 'Distillery tradition', es: 'Tradición destiladora' }
    }
  ],
  introText: {
    it: 'Situata ai piedi delle Prealpi Venete, Bassano del Grappa è una città ricca di storia, arte e tradizione. Il suo centro storico, con l\'iconico Ponte degli Alpini e le vie acciottolate, crea un\'ambientazione romantica e autentica per matrimoni eleganti che respirano cultura e raffinatezza.',
    en: 'Located at the foot of the Venetian Prealps, Bassano del Grappa is a city rich in history, art and tradition. Its historic center, with the iconic Ponte degli Alpini and cobbled streets, creates a romantic and authentic setting for elegant weddings that breathe culture and refinement.',
    es: 'Situada al pie de los Prealpes venecianos, Bassano del Grappa es una ciudad rica en historia, arte y tradición. Su centro histórico, con el icónico Ponte degli Alpini y las calles empedradas, crea un ambiente romántico y auténtico para bodas elegantes que respiran cultura y refinamiento.'
  },
  // SEZIONE 01
  section01Label: { it: 'Location Esclusive', en: 'Exclusive Locations', es: 'Lugares Exclusivos' },
  section01Title: {
    it: 'Ville Palladiane e\nDimore Storiche',
    en: 'Palladian Villas and\nHistoric Residences',
    es: 'Villas Palladianas y\nResidencias Históricas'
  },
  section01Text: {
    it: 'Bassano del Grappa e la sua provincia custodiscono alcune delle ville venete più belle d\'Italia. Dimore nobiliari circondate da parchi secolari, con sale affrescate e giardini all\'italiana che creano l\'ambientazione perfetta per un matrimonio da sogno.',
    en: 'Bassano del Grappa and its province house some of the most beautiful Venetian villas in Italy. Noble residences surrounded by centuries-old parks, with frescoed halls and Italian gardens that create the perfect setting for a dream wedding.',
    es: 'Bassano del Grappa y su provincia albergan algunas de las villas venecianas más hermosas de Italia. Residencias nobles rodeadas de parques centenarios, con salas con frescos y jardines italianos que crean el escenario perfecto para una boda de ensueño.'
  },
  section01BoxIcon: 'lucide:landmark',
  section01BoxTitle: { it: 'Ville Storiche', en: 'Historic Villas', es: 'Villas Históricas' },
  section01BoxPoints: [
    { it: 'Villa Angarano (Palladio)', en: 'Villa Angarano (Palladio)', es: 'Villa Angarano (Palladio)' },
    { it: 'Villa Giusti del Giardino', en: 'Villa Giusti del Giardino', es: 'Villa Giusti del Giardino' },
    { it: 'Altre Ville Nobiliari', en: 'Other Noble Villas', es: 'Otras Villas Nobles' }
  ],
  // SEZIONE 02
  section02Label: { it: 'Il Simbolo della Città', en: 'The Symbol of the City', es: 'El Símbolo de la Ciudad' },
  section02Title: { it: 'Il Ponte degli Alpini', en: 'The Alpini Bridge', es: 'El Puente de los Alpinos' },
  section02Intro: {
    it: 'Il Ponte Vecchio, noto come Ponte degli Alpini, è il simbolo di Bassano del Grappa. Progettato da Andrea Palladio nel 1569 e ricostruito più volte, attraversa il fiume Brenta creando uno scenario unico e romantico.',
    en: 'The Old Bridge, known as Ponte degli Alpini, is the symbol of Bassano del Grappa. Designed by Andrea Palladio in 1569 and rebuilt several times, it crosses the Brenta river creating a unique and romantic setting.',
    es: 'El Puente Viejo, conocido como Ponte degli Alpini, es el símbolo de Bassano del Grappa. Diseñado por Andrea Palladio en 1569 y reconstruido varias veces, cruza el río Brenta creando un escenario único y romántico.'
  },
  section02Cards: [
    {
      cardIcon: 'lucide:landmark',
      cardTitle: { it: 'Architettura Palladiana', en: 'Palladian Architecture', es: 'Arquitectura Palladiana' },
      cardText: { it: 'Progetto originale del 1569', en: 'Original 1569 design', es: 'Diseño original de 1569' },
      cardTags: [{ it: 'Palladio', en: 'Palladio', es: 'Palladio' }]
    },
    {
      cardIcon: 'lucide:castle',
      cardTitle: { it: 'Location Fotografica', en: 'Photo Location', es: 'Lugar Fotográfico' },
      cardText: { it: 'Scenario iconico e romantico', en: 'Iconic and romantic setting', es: 'Escenario icónico y romántico' },
      cardTags: [{ it: 'Romantico', en: 'Romantic', es: 'Romántico' }]
    },
    {
      cardIcon: 'lucide:scroll-text',
      cardTitle: { it: 'Tradizione', en: 'Tradition', es: 'Tradición' },
      cardText: { it: 'Storia e memoria del territorio', en: 'History and memory of the territory', es: 'Historia y memoria del territorio' },
      cardTags: [{ it: 'Storia', en: 'History', es: 'Historia' }]
    }
  ],
  section02Highlight: {
    it: 'Il Ponte degli Alpini è uno dei simboli più fotografati del Veneto, perfetto per creare ricordi indimenticabili.',
    en: 'The Alpini Bridge is one of the most photographed symbols of Veneto, perfect for creating unforgettable memories.',
    es: 'El Puente de los Alpinos es uno de los símbolos más fotografiados del Véneto, perfecto para crear recuerdos inolvidables.'
  },
  // SEZIONE 03
  section03Label: { it: 'Sapori Autentici', en: 'Authentic Flavors', es: 'Sabores Auténticos' },
  section03Title: {
    it: 'Tradizione Veneta e\nGrappa d\'Eccellenza',
    en: 'Venetian Tradition and\nExcellent Grappa',
    es: 'Tradición Veneciana y\nGrappa de Excelencia'
  },
  section03Intro: {
    it: 'Bassano del Grappa è famosa in tutto il mondo per la produzione della grappa, distillato simbolo della tradizione veneta. Le storiche distillerie e la cucina locale creano un\'esperienza enogastronomica unica.',
    en: 'Bassano del Grappa is famous worldwide for the production of grappa, a distillate symbol of Venetian tradition. Historic distilleries and local cuisine create a unique food and wine experience.',
    es: 'Bassano del Grappa es famosa en todo el mundo por la producción de grappa, un destilado símbolo de la tradición veneciana. Las destilerías históricas y la cocina local crean una experiencia enogastronómica única.'
  },
  section03Items: [
    {
      itemIcon: 'lucide:droplets',
      itemTitle: { it: 'Distillerie Storiche', en: 'Historic Distilleries', es: 'Destilerías Históricas' },
      itemSubtitle: { it: 'Poli e Nardini', en: 'Poli and Nardini', es: 'Poli y Nardini' }
    },
    {
      itemIcon: 'lucide:sparkles',
      itemTitle: { it: 'Asparagi DOP', en: 'DOP Asparagus', es: 'Espárragos DOP' },
      itemSubtitle: { it: 'Specialità locale', en: 'Local specialty', es: 'Especialidad local' }
    },
    {
      itemIcon: 'lucide:home',
      itemTitle: { it: 'Catering di Qualità', en: 'Quality Catering', es: 'Catering de Calidad' },
      itemSubtitle: { it: 'Tradizione rivisitata', en: 'Revisited tradition', es: 'Tradición revisada' }
    }
  ],
  // SEZIONE 04
  section04Label: { it: 'Arte e Cultura', en: 'Art and Culture', es: 'Arte y Cultura' },
  section04Title: {
    it: 'Borghi, Castelli e\nPanorami Incantevoli',
    en: 'Villages, Castles and\nEnchanting Landscapes',
    es: 'Pueblos, Castillos y\nPaisajes Encantadores'
  },
  section04Text: {
    it: 'Il centro storico con piazze storiche, vie acciottolate e palazzi d\'epoca crea un\'atmosfera romantica perfetta. Ai piedi delle Prealpi Venete, Bassano offre paesaggi naturali straordinari: il fiume Brenta, le colline circostanti e i sentieri panoramici regalano scorci perfetti per un matrimonio immerso nella natura. A soli 40 minuti da Venezia, vicina ai Colli Euganei e alle Dolomiti, è perfetta per esplorare il meglio del Veneto.',
    en: 'The historic center with historic squares, cobbled streets and period buildings creates a perfect romantic atmosphere. At the foot of the Venetian Prealps, Bassano offers extraordinary natural landscapes: the Brenta river, the surrounding hills and panoramic trails offer perfect views for a wedding immersed in nature. Just 40 minutes from Venice, close to the Euganean Hills and the Dolomites, it is perfect for exploring the best of Veneto.',
    es: 'El centro histórico con plazas históricas, calles empedradas y edificios de época crea una atmósfera romántica perfecta. Al pie de los Prealpes venecianos, Bassano ofrece paisajes naturales extraordinarios: el río Brenta, las colinas circundantes y los senderos panorámicos ofrecen vistas perfectas para una boda inmersa en la naturaleza. A solo 40 minutos de Venecia, cerca de las Colinas Euganeas y los Dolomitas, es perfecta para explorar lo mejor del Véneto.'
  },
  section04Quote: {
    it: 'Bassano del Grappa è il perfetto equilibrio tra storia veneta, natura e tradizione enogastronomica.',
    en: 'Bassano del Grappa is the perfect balance between Venetian history, nature and food and wine tradition.',
    es: 'Bassano del Grappa es el equilibrio perfecto entre historia veneciana, naturaleza y tradición enogastronómica.'
  },
  section04Tags: [
    { it: 'Centro Storico', en: 'Historic Center', es: 'Centro Histórico' },
    { it: 'Ville Palladiane', en: 'Palladian Villas', es: 'Villas Palladianas' },
    { it: 'Posizione Strategica', en: 'Strategic Position', es: 'Posición Estratégica' }
  ]
};

async function populateBassano() {
  console.log('🚀 Popolamento BASSANO DEL GRAPPA...\n');

  try {
    const existing = await client.fetch(
      `*[_type == "destination" && slug.current == "bassano"][0]`
    );

    if (existing) {
      await client.patch(existing._id).set(bassano).commit();
      console.log('   ✅ Bassano del Grappa AGGIORNATA!\n');
    } else {
      await client.create(bassano);
      console.log('   ✅ Bassano del Grappa CREATA!\n');
    }

    console.log('🎉 FATTO!\n');
    console.log('📝 Prossimi passi:');
    console.log('1. Vai su http://localhost:3333');
    console.log('2. Apri "Bassano del Grappa" in Destination Wedding');
    console.log('3. Carica le immagini (cardImage e heroImage)');
    console.log('4. Clicca "Publish"\n');
  } catch (error) {
    console.error('   ❌ Errore:', error.message);
  }
}

populateBassano().catch(console.error);
