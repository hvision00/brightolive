import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "8i61ocow",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token:
    "skL77OcAWKxBIwLi7HyvIb2YTQLqjC5i7xGgQiPpKCmHqKFG155P1SA169AoW9bdAapCYkiD6mpe3mwsjQPS4YfUwqhziGPacyGRLb2I3ckorTXeRNcu5lHDmY8U2YyJUOiVylobA9lwosNrsE099BSR0vSDA0DQuzDRAGB95EWs7dhtPBmH",
});

const destinations = [
  {
    _type: "destination",
    slug: { _type: "slug", current: "dolomiti" },
    order: 2,
    // CARD
    name: { it: "Dolomiti", en: "Dolomites", es: "Dolomitas" },
    subtitle: {
      it: "Maestosità alpina",
      en: "Alpine Majesty",
      es: "Majestuosidad alpina",
    },
    shortDescription: {
      it: "Tra vette imponenti e paesaggi mozzafiato, celebra il tuo amore circondato dalla magnificenza delle montagne più belle al mondo.",
      en: "Among imposing peaks and breathtaking landscapes, celebrate your love surrounded by the magnificence of the world's most beautiful mountains.",
      es: "Entre picos imponentes y paisajes impresionantes, celebra tu amor rodeado de la magnificencia de las montañas más hermosas del mundo.",
    },
    details: [
      { it: "Alta quota", en: "High altitude", es: "Alta altitud" },
      { it: "Panorami unici", en: "Unique views", es: "Vistas únicas" },
      {
        it: "Atmosfera montana",
        en: "Mountain atmosphere",
        es: "Atmósfera montañosa",
      },
    ],
    // HERO
    heroLabel: {
      it: "Patrimonio UNESCO dal 2009",
      en: "UNESCO Heritage since 2009",
      es: "Patrimonio UNESCO desde 2009",
    },
    heroIntro: {
      it: "Le Dolomiti Venete offrono uno scenario naturale unico al mondo: un luogo dove il tempo rallenta e l'amore trova il suo spazio più autentico.",
      en: "The Venetian Dolomites offer a unique natural setting: a place where time slows down and love finds its most authentic space.",
      es: "Los Dolomitas venecianos ofrecen un escenario natural único en el mundo: un lugar donde el tiempo se ralentiza y el amor encuentra su espacio más auténtico.",
    },
    // INTRO
    introQuote: {
      it: "Se sogni un matrimonio che sembri uscito da una fiaba, dove ogni sguardo si perde tra montagne maestose e cieli infiniti, il tuo destination wedding è nelle Dolomiti.",
      en: "If you dream of a wedding that seems straight out of a fairy tale, where every glance is lost among majestic mountains and endless skies, your destination wedding is in the Dolomites.",
      es: "Si sueñas con una boda que parezca salida de un cuento de hadas, donde cada mirada se pierde entre montañas majestuosas y cielos infinitos, tu boda destino está en los Dolomitas.",
    },
    introCards: [
      {
        cardValue: {
          it: "Best: Estate e autunno",
          en: "Best: Summer and autumn",
          es: "Mejor: Verano y otoño",
        },
        cardLabel: {
          it: "Stagionalità",
          en: "Seasonality",
          es: "Estacionalidad",
        },
      },
      {
        cardValue: {
          it: "Mountain chic",
          en: "Mountain chic",
          es: "Mountain chic",
        },
        cardLabel: { it: "Style", en: "Style", es: "Estilo" },
      },
    ],
    introText: {
      it: "Le Dolomiti Venete, riconosciute Patrimonio Mondiale dell'UNESCO dal 2009, offrono uno scenario naturale unico al mondo: un luogo dove il tempo rallenta e l'amore trova il suo spazio più autentico. Organizzare il proprio matrimonio in montagna significa abbracciare la magia di un paesaggio che cambia a ogni stagione, trasformando ogni istante in un ricordo indimenticabile.",
      en: "The Venetian Dolomites, recognized as a UNESCO World Heritage Site since 2009, offer a unique natural setting in the world: a place where time slows down and love finds its most authentic space. Organizing your wedding in the mountains means embracing the magic of a landscape that changes with each season, transforming every moment into an unforgettable memory.",
      es: "Los Dolomitas venecianos, reconocidos como Patrimonio Mundial de la UNESCO desde 2009, ofrecen un escenario natural único en el mundo: un lugar donde el tiempo se ralentiza y el amor encuentra su espacio más auténtico. Organizar tu boda en las montañas significa abrazar la magia de un paisaje que cambia con cada estación, transformando cada instante en un recuerdo inolvidable.",
    },
    // SEZIONE 01
    section01Label: {
      it: "Perché Sceglierle",
      en: "Why Choose Them",
      es: "Por qué elegirlas",
    },
    section01Title: {
      it: "L'Equilibrio Perfetto tra\nRomanticismo e Natura",
      en: "The Perfect Balance between\nRomance and Nature",
      es: "El Equilibrio Perfecto entre\nRomance y Naturaleza",
    },
    section01Text: {
      it: "Chi sceglie di sposarsi nelle Dolomiti cerca un'emozione, un'atmosfera, un racconto d'amore che diventa parte integrante del giorno del \"sì\". Ecco perché sempre più coppie da tutto il mondo le scelgono come destinazione dei loro sogni. Qui la natura si fa poesia, la luce diventa magia e l'amore trova il suo luogo ideale per essere celebrato.",
      en: 'Those who choose to get married in the Dolomites seek an emotion, an atmosphere, a love story that becomes an integral part of the day of "I do". That\'s why more and more couples from all over the world choose them as the destination of their dreams. Here nature becomes poetry, light becomes magic and love finds its ideal place to be celebrated.',
      es: 'Quienes eligen casarse en los Dolomitas buscan una emoción, una atmósfera, una historia de amor que se convierte en parte integral del día del "sí". Por eso cada vez más parejas de todo el mundo los eligen como el destino de sus sueños. Aquí la naturaleza se convierte en poesía, la luz se convierte en magia y el amor encuentra su lugar ideal para ser celebrado.',
    },
    section01BoxIcon: "lucide:mountain",
    section01BoxTitle: {
      it: "Caratteristiche Uniche",
      en: "Unique Features",
      es: "Características Únicas",
    },
    section01BoxPoints: [
      {
        it: "Paesaggi da Favola",
        en: "Fairy Tale Landscapes",
        es: "Paisajes de Cuento",
      },
      {
        it: "Atmosfera Intima",
        en: "Intimate Atmosphere",
        es: "Atmósfera Íntima",
      },
      {
        it: "Scenografie Naturali",
        en: "Natural Scenery",
        es: "Escenografía Natural",
      },
      { it: "Autenticità", en: "Authenticity", es: "Autenticidad" },
    ],
    // SEZIONE 02
    section02Label: {
      it: "La Perla delle Dolomiti",
      en: "The Pearl of the Dolomites",
      es: "La Perla de los Dolomitas",
    },
    section02Title: {
      it: "Cortina d'Ampezzo",
      en: "Cortina d'Ampezzo",
      es: "Cortina d'Ampezzo",
    },
    section02Intro: {
      it: 'La "Perla delle Dolomiti" incanta con la sua eleganza sobria e la sua atmosfera raffinata, perfetta per coppie che desiderano un matrimonio chic e immerso nella natura.',
      en: 'The "Pearl of the Dolomites" enchants with its understated elegance and refined atmosphere, perfect for couples who want a chic wedding immersed in nature.',
      es: 'La "Perla de los Dolomitas" encanta con su elegancia sobria y su atmósfera refinada, perfecta para parejas que desean una boda chic inmersa en la naturaleza.',
    },
    section02Cards: [
      {
        cardIcon: "lucide:mountain",
        cardTitle: {
          it: "Tramonti sulle Tofane",
          en: "Sunsets on the Tofane",
          es: "Atardeceres en las Tofane",
        },
        cardText: {
          it: "Spettacoli naturali unici",
          en: "Unique natural shows",
          es: "Espectáculos naturales únicos",
        },
        cardTags: [{ it: "Panorami", en: "Views", es: "Vistas" }],
      },
      {
        cardIcon: "lucide:home",
        cardTitle: {
          it: "Rifugi romantici",
          en: "Romantic refuges",
          es: "Refugios románticos",
        },
        cardText: {
          it: "Atmosfera calda e accogliente",
          en: "Warm and welcoming atmosphere",
          es: "Atmósfera cálida y acogedora",
        },
        cardTags: [{ it: "Charme", en: "Charm", es: "Encanto" }],
      },
      {
        cardIcon: "lucide:droplets",
        cardTitle: {
          it: "Laghi alpini",
          en: "Alpine lakes",
          es: "Lagos alpinos",
        },
        cardText: {
          it: "Acque cristalline e natura",
          en: "Crystal waters and nature",
          es: "Aguas cristalinas y naturaleza",
        },
        cardTags: [{ it: "Natura", en: "Nature", es: "Naturaleza" }],
      },
    ],
    section02Highlight: {
      it: "Cortina offre location esclusive e un'accoglienza di altissimo livello, ideale per matrimoni raffinati.",
      en: "Cortina offers exclusive locations and top-level hospitality, ideal for refined weddings.",
      es: "Cortina ofrece ubicaciones exclusivas y una hospitalidad de alto nivel, ideal para bodas refinadas.",
    },
    // SEZIONE 03
    section03Label: {
      it: "I Luoghi del Cuore",
      en: "The Places of the Heart",
      es: "Los Lugares del Corazón",
    },
    section03Title: {
      it: "I Luoghi più Ricercati\ndelle Dolomiti Venete",
      en: "The Most Sought-After Places\nin the Venetian Dolomites",
      es: "Los Lugares más Buscados\nde los Dolomitas Venecianos",
    },
    section03Intro: {
      it: "Dalle valli silenziose ai laghi cristallini, ogni angolo delle Dolomiti racconta una storia d'amore con la natura.",
      en: "From silent valleys to crystal lakes, every corner of the Dolomites tells a love story with nature.",
      es: "Desde valles silenciosos hasta lagos cristalinos, cada rincón de los Dolomitas cuenta una historia de amor con la naturaleza.",
    },
    section03Items: [
      {
        itemIcon: "lucide:tree-pine",
        itemTitle: {
          it: "Val Comelico",
          en: "Val Comelico",
          es: "Val Comelico",
        },
        itemSubtitle: {
          it: "Un angolo di paradiso",
          en: "A corner of paradise",
          es: "Un rincón de paraíso",
        },
      },
      {
        itemIcon: "lucide:sparkles",
        itemTitle: {
          it: "Val di Zoldo",
          en: "Val di Zoldo",
          es: "Val di Zoldo",
        },
        itemSubtitle: {
          it: "Magia e poesia",
          en: "Magic and poetry",
          es: "Magia y poesía",
        },
      },
      {
        itemIcon: "lucide:mountain",
        itemTitle: { it: "Passo Giau", en: "Passo Giau", es: "Passo Giau" },
        itemSubtitle: {
          it: "Panorama iconico",
          en: "Iconic view",
          es: "Vista icónica",
        },
      },
      {
        itemIcon: "lucide:droplets",
        itemTitle: {
          it: "Laghi alpini",
          en: "Alpine lakes",
          es: "Lagos alpinos",
        },
        itemSubtitle: {
          it: "Specchi d'acqua romantici",
          en: "Romantic water mirrors",
          es: "Espejos de agua románticos",
        },
      },
    ],
    // SEZIONE 04
    section04Label: {
      it: "L'Esperienza",
      en: "The Experience",
      es: "La Experiencia",
    },
    section04Title: {
      it: "La Magia di un\nMatrimonio in Montagna",
      en: "The Magic of a\nMountain Wedding",
      es: "La Magia de una\nBoda en la Montaña",
    },
    section04Text: {
      it: "Un matrimonio nelle Dolomiti è un'esperienza. È vivere una giornata sospesa fra cielo e terra, circondati da silenzi che scaldano il cuore e panorami che emozionano. È ritrovare un'intimità rara, lontana dal caos, immersi in un'atmosfera che invita a respirare, ad amare, a sentire. La natura diventa parte della scenografia, regalando un'estetica che nessun allestimento potrebbe mai replicare.",
      en: "A wedding in the Dolomites is an experience. It's living a day suspended between heaven and earth, surrounded by silences that warm the heart and landscapes that move you. It's rediscovering a rare intimacy, away from the chaos, immersed in an atmosphere that invites you to breathe, to love, to feel. Nature becomes part of the scenography, offering an aesthetic that no setup could ever replicate.",
      es: "Una boda en los Dolomitas es una experiencia. Es vivir un día suspendido entre el cielo y la tierra, rodeado de silencios que calientan el corazón y paisajes que emocionan. Es redescubrir una intimidad rara, lejos del caos, inmerso en una atmósfera que invita a respirar, a amar, a sentir. La naturaleza se convierte en parte de la escenografía, ofreciendo una estética que ningún montaje podría replicar.",
    },
    section04Quote: {
      it: "Sono momenti che restano impressi per sempre, nella mente e nelle fotografie.",
      en: "These are moments that remain etched forever, in your mind and in photographs.",
      es: "Son momentos que quedan grabados para siempre, en la mente y en las fotografías.",
    },
    section04Tags: [
      { it: "Luce Dorata", en: "Golden Light", es: "Luz Dorada" },
      { it: "Enrosadira", en: "Enrosadira", es: "Enrosadira" },
      { it: "Cielo Stellato", en: "Starry Sky", es: "Cielo Estrellado" },
    ],
  },
  // Aggiungi altre destinazioni qui se necessario
];

async function populateDestinations() {
  console.log("🚀 Inizio popolamento COMPLETO destination wedding...\n");

  for (const dest of destinations) {
    try {
      console.log(`📍 Creazione/Aggiornamento: ${dest.name.it}...`);

      const existing = await client.fetch(
        `*[_type == "destination" && slug.current == $slug][0]`,
        { slug: dest.slug.current }
      );

      if (existing) {
        await client.patch(existing._id).set(dest).commit();
        console.log(`   ✅ Aggiornata: ${dest.name.it}\n`);
      } else {
        await client.create(dest);
        console.log(`   ✅ Creata: ${dest.name.it}\n`);
      }
    } catch (error) {
      console.error(`   ❌ Errore con ${dest.name.it}:`, error.message, "\n");
    }
  }

  console.log("🎉 Popolamento completato!\n");
  console.log("📝 Prossimi passi:");
  console.log("1. Vai su http://localhost:3333");
  console.log('2. Apri "Dolomiti" in Destination Wedding');
  console.log("3. Carica le immagini (cardImage e heroImage)");
  console.log("4. Seleziona le icone per le sezioni");
  console.log('5. Clicca "Publish"\n');
  console.log(
    "💡 Ora hai UN ESEMPIO COMPLETO! Usa lo stesso formato per le altre 4 destinazioni.\n"
  );
}

populateDestinations().catch(console.error);
