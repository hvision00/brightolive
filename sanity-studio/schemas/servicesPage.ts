import { defineType, defineField } from "sanity";
import { localizedString } from "./helpers/localizedString";

export default defineType({
  name: "servicesPage",
  title: "Pagina Servizi",
  type: "document",
  icon: () => "💼",
  groups: [
    { name: "hero", title: "Hero" },
    { name: "process", title: "Processo" },
    { name: "cta", title: "CTA" },
  ],
  fields: [
    // HERO
    localizedString("heroLabel", "Hero - Label"),
    localizedString("heroTitle", "Hero - Titolo"),
    localizedString("heroSubtitle", "Hero - Sottotitolo"),
    localizedString("heroText", "Hero - Testo", { rows: 3 }),

    // PROCESS
    localizedString("processLabel", "Processo - Label"),
    localizedString("processTitle", "Processo - Titolo"),
    defineField({
      name: "processSteps",
      title: "Processo - Steps",
      type: "array",
      group: "process",
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

    // CTA
    localizedString("ctaTitle", "CTA - Titolo"),
    localizedString("ctaText", "CTA - Testo", { rows: 2 }),
    localizedString("ctaButton", "CTA - Pulsante"),
  ],
  preview: {
    prepare() {
      return {
        title: "Pagina Servizi",
        subtitle: "Intro e CTA pagina servizi",
      };
    },
  },
});
