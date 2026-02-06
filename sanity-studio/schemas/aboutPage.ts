import { defineType, defineField } from "sanity";
import {
  localizedString,
  localizedStringArray,
} from "./helpers/localizedString";

export default defineType({
  name: "aboutPage",
  title: "Chi Siamo",
  type: "document",
  icon: () => "👤",
  groups: [
    { name: "hero", title: "Hero" },
    { name: "intro", title: "Introduzione" },
    { name: "mission", title: "Missione" },
    { name: "style", title: "Stile" },
    { name: "why", title: "Perché BrightOlive" },
    { name: "cta", title: "CTA Finale" },
  ],
  fields: [
    // HERO
    localizedString("heroQuote", "Hero - Citazione", { rows: 3 }),
    defineField({
      name: "heroAuthor",
      title: "Hero - Autore",
      type: "string",
      group: "hero",
    }),
    defineField({
      name: "heroRole",
      title: "Hero - Ruolo",
      type: "string",
      group: "hero",
    }),
    defineField({
      name: "heroImage",
      title: "Hero - Immagine",
      type: "image",
      group: "hero",
      options: { hotspot: true },
    }),

    // INTRO
    localizedString("introLabel", "Intro - Label"),
    localizedString("introTitle", "Intro - Titolo"),
    defineField({
      name: "introName",
      title: "Intro - Nome",
      type: "string",
      group: "intro",
    }),
    defineField({
      name: "introLocation",
      title: "Intro - Location",
      type: "string",
      group: "intro",
    }),
    localizedString("introText1", "Intro - Testo 1", { rows: 3 }),
    localizedString("introText2", "Intro - Testo 2", { rows: 3 }),
    localizedString("introText3", "Intro - Testo 3", { rows: 3 }),
    localizedString("introText4", "Intro - Testo 4", { rows: 3 }),
    defineField({
      name: "introImage",
      title: "Intro - Foto Sara",
      type: "image",
      group: "intro",
      options: { hotspot: true },
    }),

    // MISSION
    localizedString("missionLabel", "Missione - Label"),
    localizedString("missionTitle", "Missione - Titolo"),
    localizedStringArray("missionPoints", "Missione - Punti"),

    // STYLE
    localizedString("styleLabel", "Stile - Label"),
    localizedString("styleTitle", "Stile - Titolo"),
    localizedString("styleSubtitle", "Stile - Sottotitolo"),
    localizedString("styleText1", "Stile - Testo 1", { rows: 3 }),
    localizedString("styleText2", "Stile - Testo 2", { rows: 3 }),
    localizedStringArray("styleKeywords", "Stile - Keywords"),

    // WHY BRIGHTOLIVE
    localizedString("whyLabel", "Perché - Label"),
    localizedString("whyTitle", "Perché - Titolo"),
    defineField({
      name: "whyHighlight",
      title: "Perché - Parola Evidenziata",
      type: "string",
      group: "why",
      description: 'Es: "BrightOlive"',
    }),
    localizedString("whyText1", "Perché - Intro"),
    localizedString("whyBright", "Perché - Spiegazione Bright", { rows: 2 }),
    localizedString("whyOlive", "Perché - Spiegazione Olive", { rows: 2 }),
    localizedString("whyConclusion", "Perché - Conclusione"),

    // CTA
    localizedString("ctaTitle", "CTA - Titolo"),
    localizedString("ctaText", "CTA - Testo", { rows: 2 }),
    localizedString("ctaButton", "CTA - Pulsante"),
  ],
  preview: {
    prepare() {
      return {
        title: "Chi Siamo",
        subtitle: "Pagina Chi Siamo / About",
      };
    },
  },
});
