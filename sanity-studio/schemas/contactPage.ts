import { defineType, defineField } from "sanity";
import { localizedString } from "./helpers/localizedString";

export default defineType({
  name: "contactPage",
  title: "Pagina Contatti",
  type: "document",
  icon: () => "📞",
  groups: [
    { name: "hero", title: "Hero" },
    { name: "info", title: "Info" },
    { name: "whatHappens", title: "Cosa Succede Dopo" },
    { name: "details", title: "Dettagli Contatto" },
  ],
  fields: [
    // HERO
    localizedString("heroLabel", "Hero - Label"),
    localizedString("heroTitle", "Hero - Titolo"),
    localizedString("heroSubtitle", "Hero - Sottotitolo"),
    localizedString("heroText", "Hero - Testo", { rows: 3 }),

    // INFO
    localizedString("infoTitle", "Info - Titolo"),
    localizedString("infoText", "Info - Testo", { rows: 3 }),

    // WHAT HAPPENS
    localizedString("whatHappensTitle", "Cosa Succede - Titolo"),
    defineField({
      name: "whatHappensSteps",
      title: "Cosa Succede - Steps",
      type: "array",
      group: "whatHappens",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "Titolo",
              type: "object",
              fields: [
                { name: "it", title: "IT", type: "string" },
                { name: "en", title: "EN", type: "string" },
                { name: "es", title: "ES", type: "string" },
              ],
            },
            {
              name: "text",
              title: "Testo",
              type: "object",
              fields: [
                { name: "it", title: "IT", type: "text", rows: 2 },
                { name: "en", title: "EN", type: "text", rows: 2 },
                { name: "es", title: "ES", type: "text", rows: 2 },
              ],
            },
          ],
          preview: {
            select: { title: "title.it" },
          },
        },
      ],
    }),

    // DETAILS
    localizedString("detailsTitle", "Dettagli - Titolo"),
    localizedString("detailsEmail", "Dettagli - Label Email"),
    localizedString("detailsPhone", "Dettagli - Label Telefono"),
    localizedString("detailsSocial", "Dettagli - Label Social"),
    localizedString("detailsOr", "Dettagli - Oppure"),
  ],
  preview: {
    prepare() {
      return {
        title: "Pagina Contatti",
      };
    },
  },
});
