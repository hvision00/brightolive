import { defineType, defineField } from "sanity";
import { localizedString } from "./helpers/localizedString";

export default defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  icon: () => "🏠",
  groups: [
    { name: "hero", title: "Hero Section" },
    { name: "destinations", title: "Sezione Destinations" },
    { name: "services", title: "Sezione Servizi" },
    { name: "impact", title: "Sezione Impact" },
  ],
  fields: [
    // HERO SECTION
    localizedString("heroTagline", "Hero - Tagline"),
    localizedString("heroTitle1", "Hero - Titolo Parte 1"),
    localizedString("heroTitle2", "Hero - Titolo Parte 2"),
    localizedString("heroTitle3", "Hero - Titolo Parte 3"),
    localizedString("heroDescription", "Hero - Descrizione", { rows: 3 }),
    localizedString("heroCta", "Hero - Testo Pulsante"),
    localizedString("heroFloatingTitle", "Hero - Floating Box Titolo"),
    localizedString("heroFloatingSubtitle", "Hero - Floating Box Sottotitolo"),
    defineField({
      name: "heroImages",
      title: "Hero - Immagini Slider",
      type: "array",
      group: "hero",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              title: "Alt Text",
              type: "string",
            },
          ],
        },
      ],
      validation: (Rule) => Rule.max(5),
    }),

    // DESTINATIONS SECTION
    localizedString("destinationsLabel", "Destinations - Label"),
    localizedString("destinationsTitle1", "Destinations - Titolo Parte 1"),
    localizedString("destinationsTitle2", "Destinations - Titolo Parte 2"),
    localizedString("destinationsDescription", "Destinations - Descrizione", {
      rows: 3,
    }),
    localizedString("destinationsCta", "Destinations - Testo Pulsante"),
    localizedString("destinationsFinalText", "Destinations - Testo Finale"),
    localizedString("destinationsFinalCta", "Destinations - CTA Finale"),

    // SERVICES SECTION
    localizedString("servicesLabel", "Servizi - Label"),
    localizedString("servicesTitle1", "Servizi - Titolo Parte 1"),
    localizedString("servicesTitle2", "Servizi - Titolo Parte 2"),
    localizedString("servicesTitle3", "Servizi - Titolo Parte 3"),
    localizedString("servicesDescription", "Servizi - Descrizione", {
      rows: 3,
    }),
    localizedString("servicesCta", "Servizi - Testo Pulsante"),
    localizedString("servicesFinalTitle", "Servizi - Titolo Finale"),
    localizedString("servicesFinalDescription", "Servizi - Descrizione Finale"),
    localizedString("servicesFinalCta", "Servizi - CTA Finale"),

    // IMPACT SECTION
    localizedString("impactLabel", "Impact - Label"),
    localizedString("impactQuote", "Impact - Citazione"),
    localizedString("impactQuoteHighlight", "Impact - Parte Evidenziata"),
    localizedString("impactQuoteEnd", "Impact - Fine Citazione"),
    localizedString("impactSubtext1", "Impact - Sottotesto 1"),
    localizedString("impactSubtext2", "Impact - Sottotesto 2"),
  ],
  preview: {
    prepare() {
      return {
        title: "Home Page",
        subtitle: "Contenuti della pagina principale",
      };
    },
  },
});
