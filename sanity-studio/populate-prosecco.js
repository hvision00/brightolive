import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "8i61ocow",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token:
    "skL77OcAWKxBIwLi7HyvIb2YTQLqjC5i7xGgQiPpKCmHqKFG155P1SA169AoW9bdAapCYkiD6mpe3mwsjQPS4YfUwqhziGPacyGRLb2I3ckorTXeRNcu5lHDmY8U2YyJUOiVylobA9lwosNrsE099BSR0vSDA0DQuzDRAGB95EWs7dhtPBmH",
});

const prosecco = {
  _type: "destination",
  slug: { _type: "slug", current: "prosecco" },
  order: 1,
  // CARD
  name: {
    it: "Area del Prosecco",
    en: "Prosecco Hills",
    es: "Colinas del Prosecco",
  },
  subtitle: {
    it: "Colline patrimonio UNESCO",
    en: "UNESCO Heritage Hills",
    es: "Colinas patrimonio UNESCO",
  },
  shortDescription: {
    it: "Dolci colline, vigneti infiniti e tramonti indimenticabili. Una cornice naturale perfetta per un matrimonio all'insegna dell'eleganza rurale.",
    en: "Rolling hills, endless vineyards and unforgettable sunsets. A perfect natural setting for a wedding celebrating rural elegance.",
    es: "Colinas suaves, viñedos infinitos y atardeceres inolvidables. Un escenario natural perfecto para una boda con elegancia rural.",
  },
  details: [
    { it: "Vigneti", en: "Vineyards", es: "Viñedos" },
    { it: "Paesaggio UNESCO", en: "UNESCO Landscape", es: "Paisaje UNESCO" },
    { it: "Enogastronomia", en: "Food & Wine", es: "Enogastronomía" },
  ],
  // HERO
  heroLabel: {
    it: "Patrimonio UNESCO",
    en: "UNESCO Heritage",
    es: "Patrimonio UNESCO",
  },
  heroIntro: {
    it: "Un luogo segreto dove il tempo scorre lento e ogni panorama sembra creato per essere fotografato.",
    en: "A secret place where time flows slowly and every view seems created to be photographed.",
    es: "Un lugar secreto donde el tiempo fluye lentamente y cada panorama parece creado para ser fotografiado.",
  },
  // INTRO
  introQuote: {
    it: "A solo un'ora da Venezia e dalle spettacolari Dolomiti, una destinazione ancora autentica e poco battuta.",
    en: "Just one hour from Venice and the spectacular Dolomites, a destination that is still authentic and off the beaten path.",
    es: "A solo una hora de Venecia y de los espectaculares Dolomitas, un destino aún auténtico y poco transitado.",
  },
  introCards: [
    {
      cardValue: { it: "2019", en: "2019", es: "2019" },
      cardLabel: {
        it: "Patrimonio UNESCO",
        en: "UNESCO Heritage",
        es: "Patrimonio UNESCO",
      },
    },
    {
      cardValue: { it: "1h", en: "1h", es: "1h" },
      cardLabel: { it: "Da Venezia", en: "From Venice", es: "Desde Venecia" },
    },
    {
      cardValue: { it: "∞", en: "∞", es: "∞" },
      cardLabel: {
        it: "Panorami mozzafiato",
        en: "Breathtaking views",
        es: "Vistas impresionantes",
      },
    },
  ],
  introText: {
    it: "Dichiarate Patrimonio UNESCO nel 2019, le Colline del Prosecco si estendono da Valdobbiadene a Conegliano e offrono un mix perfetto di natura, storia e arte: un contesto ideale per un matrimonio elegante, intimo e profondamente italiano.",
    en: "Declared a UNESCO World Heritage Site in 2019, the Prosecco Hills stretch from Valdobbiadene to Conegliano and offer a perfect mix of nature, history and art: an ideal setting for an elegant, intimate and deeply Italian wedding.",
    es: "Declaradas Patrimonio Mundial de la UNESCO en 2019, las Colinas del Prosecco se extienden desde Valdobbiadene hasta Conegliano y ofrecen una mezcla perfecta de naturaleza, historia y arte: un escenario ideal para una boda elegante, íntima y profundamente italiana.",
  },
  // SEZIONE 01
  section01Label: {
    it: "Il Territorio",
    en: "The Territory",
    es: "El Territorio",
  },
  section01Title: {
    it: "Dove il Vino\nRacconta la Storia",
    en: "Where Wine\nTells the Story",
    es: "Donde el Vino\nCuenta la Historia",
  },
  section01Text: {
    it: "Per chi ama il mondo del vino, questo è un vero paradiso. Qui nasce il Prosecco che ha conquistato il mondo, ma anche etichette meno conosciute e preziose, come il Marzemino di Refrontolo. Le cantine, i filari ordinati, le terrazze naturali affacciate sui vigneti creano scenari mozzafiato per shooting e ricevimenti immersi nella quiete.",
    en: "For wine lovers, this is a true paradise. Here the Prosecco that has conquered the world is born, but also less known and precious labels, such as Marzemino di Refrontolo. The cellars, the orderly rows, the natural terraces overlooking the vineyards create breathtaking settings for shoots and receptions immersed in tranquility.",
    es: "Para los amantes del vino, este es un verdadero paraíso. Aquí nace el Prosecco que ha conquistado el mundo, pero también etiquetas menos conocidas y preciosas, como el Marzemino di Refrontolo. Las bodegas, las hileras ordenadas, las terrazas naturales con vistas a los viñedos crean escenarios impresionantes para sesiones fotográficas y recepciones inmersas en la tranquilidad.",
  },
  section01BoxIcon: "lucide:grape",
  section01BoxTitle: {
    it: "Il Paradiso del Prosecco",
    en: "Prosecco Paradise",
    es: "Paraíso del Prosecco",
  },
  section01BoxPoints: [
    {
      it: "Degustazioni esclusive",
      en: "Exclusive tastings",
      es: "Degustaciones exclusivas",
    },
    {
      it: "Cantine storiche",
      en: "Historic wineries",
      es: "Bodegas históricas",
    },
    {
      it: "Marzemino di Refrontolo",
      en: "Marzemino di Refrontolo",
      es: "Marzemino di Refrontolo",
    },
    {
      it: "Prosecco DOCG Superiore",
      en: "Prosecco DOCG Superiore",
      es: "Prosecco DOCG Superiore",
    },
  ],
  // SEZIONE 02
  section02Label: {
    it: "Arte & Cultura",
    en: "Art & Culture",
    es: "Arte y Cultura",
  },
  section02Title: {
    it: "Un Patrimonio Culturale\nAffascinante",
    en: "A Fascinating\nCultural Heritage",
    es: "Un Patrimonio Cultural\nFascinante",
  },
  section02Intro: {
    it: "Le Colline del Prosecco non sono solo vigne: sono un susseguirsi di borghi storici e testimonianze artistiche che arricchiscono l'esperienza di chi le visita.",
    en: "The Prosecco Hills are not just vineyards: they are a succession of historic villages and artistic testimonies that enrich the experience of those who visit them.",
    es: "Las Colinas del Prosecco no son solo viñedos: son una sucesión de pueblos históricos y testimonios artísticos que enriquecen la experiencia de quienes las visitan.",
  },
  section02Cards: [
    {
      cardIcon: "lucide:landmark",
      cardTitle: {
        it: "Vittorio Veneto",
        en: "Vittorio Veneto",
        es: "Vittorio Veneto",
      },
      cardText: {
        it: "Vittoria Alata, Palazzo Minucci e Santuario di Santa Augusta",
        en: "Winged Victory, Palazzo Minucci and Sanctuary of Santa Augusta",
        es: "Victoria Alada, Palazzo Minucci y Santuario de Santa Augusta",
      },
      cardTags: [
        { it: "Monumenti", en: "Monuments", es: "Monumentos" },
        { it: "Palazzi", en: "Palaces", es: "Palacios" },
      ],
    },
    {
      cardIcon: "lucide:castle",
      cardTitle: { it: "Conegliano", en: "Conegliano", es: "Conegliano" },
      cardText: {
        it: "Castello, Villa Gera, ex Convento di San Francesco e Teatro Accademia",
        en: "Castle, Villa Gera, former Convent of San Francesco and Accademia Theater",
        es: "Castillo, Villa Gera, ex Convento de San Francisco y Teatro Academia",
      },
      cardTags: [
        { it: "Castello", en: "Castle", es: "Castillo" },
        { it: "Ville", en: "Villas", es: "Villas" },
      ],
    },
    {
      cardIcon: "lucide:church",
      cardTitle: {
        it: "Borghi e Pievi",
        en: "Villages and Churches",
        es: "Pueblos e Iglesias",
      },
      cardText: {
        it: "Cison di Valmarino, Follina, Rolle. Pieve di San Pietro di Feletto per cerimonie suggestive",
        en: "Cison di Valmarino, Follina, Rolle. Pieve di San Pietro di Feletto for evocative ceremonies",
        es: "Cison di Valmarino, Follina, Rolle. Pieve di San Pietro di Feletto para ceremonias evocadoras",
      },
      cardTags: [
        { it: "Borghi", en: "Villages", es: "Pueblos" },
        { it: "Chiese", en: "Churches", es: "Iglesias" },
      ],
    },
  ],
  section02Highlight: {
    it: "Gioielli nascosti: Le Torri di Credazzo, il Santuario di Collagù e i numerosi eremi e cappelle incastonati tra i vigneti raccontano secoli di storia.",
    en: "Hidden gems: The Towers of Credazzo, the Sanctuary of Collagù and the numerous hermitages and chapels set among the vineyards tell centuries of history.",
    es: "Joyas escondidas: Las Torres de Credazzo, el Santuario de Collagù y las numerosas ermitas y capillas incrustadas entre los viñedos cuentan siglos de historia.",
  },
  // SEZIONE 03
  section03Label: {
    it: "Natura & Tradizioni",
    en: "Nature & Traditions",
    es: "Naturaleza y Tradiciones",
  },
  section03Title: {
    it: "Paesaggi\nSenza Tempo",
    en: "Timeless\nLandscapes",
    es: "Paisajes\nAtemporales",
  },
  section03Intro: {
    it: "Qui l'armonia tra uomo e natura è totale. Le colline custodiscono luoghi di immenso valore naturalistico e testimonianze storiche toccanti, come l'Isola dei Morti lungo il Piave.",
    en: "Here the harmony between man and nature is total. The hills guard places of immense naturalistic value and touching historical testimonies, such as the Island of the Dead along the Piave.",
    es: "Aquí la armonía entre el hombre y la naturaleza es total. Las colinas custodian lugares de inmenso valor naturalista y testimonios históricos conmovedores, como la Isla de los Muertos a lo largo del Piave.",
  },
  section03Items: [
    {
      itemIcon: "lucide:waves",
      itemTitle: {
        it: "Grotte del Caglieron",
        en: "Caglieron Caves",
        es: "Cuevas del Caglieron",
      },
      itemSubtitle: {
        it: "Spettacolo naturale sotterraneo",
        en: "Underground natural spectacle",
        es: "Espectáculo natural subterráneo",
      },
    },
    {
      itemIcon: "lucide:scroll-text",
      itemTitle: {
        it: "Parco del Livelet",
        en: "Livelet Park",
        es: "Parque del Livelet",
      },
      itemSubtitle: {
        it: "Viaggio nella preistoria",
        en: "Journey into prehistory",
        es: "Viaje a la prehistoria",
      },
    },
    {
      itemIcon: "lucide:droplets",
      itemTitle: {
        it: "Laghi di Revine",
        en: "Revine Lakes",
        es: "Lagos de Revine",
      },
      itemSubtitle: {
        it: "Specchi d'acqua incantati",
        en: "Enchanted water mirrors",
        es: "Espejos de agua encantados",
      },
    },
    {
      itemIcon: "lucide:home",
      itemTitle: {
        it: "Molinetto della Croda",
        en: "Molinetto della Croda",
        es: "Molinetto della Croda",
      },
      itemSubtitle: {
        it: "Mulino storico a Refrontolo",
        en: "Historic mill in Refrontolo",
        es: "Molino histórico en Refrontolo",
      },
    },
  ],
  // SEZIONE 04
  section04Label: {
    it: "Il Tuo Matrimonio",
    en: "Your Wedding",
    es: "Tu Boda",
  },
  section04Title: {
    it: "La Cornice Perfetta per\nun Matrimonio Autentico",
    en: "The Perfect Setting for\nan Authentic Wedding",
    es: "El Marco Perfecto para\nuna Boda Auténtica",
  },
  section04Text: {
    it: "Ville storiche, casolari restaurati, antichi conventi e dimore immerse nei vigneti: le Colline del Prosecco offrono location straordinarie per chi desidera un matrimonio lontano dalle mete più inflazionate. Il luogo ideale per una celebrazione intima, prestigiosa e profondamente connessa con l'autenticità del territorio italiano.",
    en: "Historic villas, restored farmhouses, ancient convents and residences immersed in vineyards: the Prosecco Hills offer extraordinary locations for those who want a wedding away from the most inflated destinations. The ideal place for an intimate, prestigious celebration deeply connected with the authenticity of the Italian territory.",
    es: "Villas históricas, casas de campo restauradas, conventos antiguos y residencias inmersas en viñedos: las Colinas del Prosecco ofrecen lugares extraordinarios para quienes desean una boda lejos de los destinos más inflados. El lugar ideal para una celebración íntima, prestigiosa y profundamente conectada con la autenticidad del territorio italiano.",
  },
  section04Quote: {
    it: "Il luogo ideale per una celebrazione intima, prestigiosa e profondamente connessa con l'autenticità del territorio italiano.",
    en: "The ideal place for an intimate, prestigious celebration deeply connected with the authenticity of the Italian territory.",
    es: "El lugar ideal para una celebración íntima, prestigiosa y profundamente conectada con la autenticidad del territorio italiano.",
  },
  section04Tags: [
    { it: "Ville Storiche", en: "Historic Villas", es: "Villas Históricas" },
    { it: "Casolari Antichi", en: "Ancient Farmhouses", es: "Casas Antiguas" },
    { it: "Cantine", en: "Wineries", es: "Bodegas" },
    {
      it: "Dimore nei Vigneti",
      en: "Vineyard Estates",
      es: "Residencias en Viñedos",
    },
  ],
};

async function populateProsecco() {
  console.log("🚀 Popolamento AREA DEL PROSECCO...\n");

  try {
    const existing = await client.fetch(
      `*[_type == "destination" && slug.current == "prosecco"][0]`
    );

    if (existing) {
      await client.patch(existing._id).set(prosecco).commit();
      console.log("   ✅ Area del Prosecco AGGIORNATA!\n");
    } else {
      await client.create(prosecco);
      console.log("   ✅ Area del Prosecco CREATA!\n");
    }

    console.log("🎉 FATTO!\n");
    console.log("📝 Prossimi passi:");
    console.log("1. Vai su http://localhost:3333");
    console.log('2. Apri "Area del Prosecco" in Destination Wedding');
    console.log("3. Carica le immagini (cardImage e heroImage)");
    console.log('4. Clicca "Publish"\n');
    console.log("🍾 Ora hai TUTTE E 5 le destination complete!\n");
  } catch (error) {
    console.error("   ❌ Errore:", error.message);
  }
}

populateProsecco().catch(console.error);
