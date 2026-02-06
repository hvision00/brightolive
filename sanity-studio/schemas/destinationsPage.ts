import { defineType } from "sanity";
import { localizedString } from "./helpers/localizedString";

export default defineType({
  name: "destinationsPage",
  title: "Pagina Destination Wedding",
  type: "document",
  icon: () => "🌍",
  groups: [
    { name: "hero", title: "Hero" },
    { name: "why", title: "Why Northern Italy" },
    { name: "cta", title: "CTA" },
  ],
  fields: [
    // HERO
    localizedString("heroLabel", "Hero - Label"),
    localizedString("heroTitle", "Hero - Titolo"),
    localizedString("heroSubtitle", "Hero - Sottotitolo"),
    localizedString("heroText", "Hero - Testo", { rows: 3 }),

    // WHY NORTHERN ITALY
    localizedString("whyLabel", "Why - Label"),
    localizedString("whyTitle", "Why - Titolo"),
    localizedString("whyText", "Why - Testo", { rows: 4 }),

    // CTA
    localizedString("ctaTitle", "CTA - Titolo"),
    localizedString("ctaText", "CTA - Testo", { rows: 2 }),
    localizedString("ctaButton", "CTA - Pulsante"),
  ],
  preview: {
    prepare() {
      return {
        title: "Pagina Destination Wedding",
        subtitle: "Intro, Why e CTA",
      };
    },
  },
});
