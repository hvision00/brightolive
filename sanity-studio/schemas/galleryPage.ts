import { defineType, defineField } from "sanity";
import { localizedString } from "./helpers/localizedString";

export default defineType({
  name: "galleryPage",
  title: "Pagina Galleria",
  type: "document",
  icon: () => "🖼️",
  fields: [
    // HERO
    localizedString("heroLabel", "Hero - Label"),
    localizedString("heroTitle", "Hero - Titolo"),
    localizedString("heroSubtitle", "Hero - Sottotitolo"),
    localizedString("heroText", "Hero - Testo", { rows: 3 }),

    // IMAGES
    defineField({
      name: "images",
      title: "Immagini Galleria",
      type: "array",
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
            {
              name: "caption",
              title: "Didascalia",
              type: "string",
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Pagina Galleria",
      };
    },
  },
});
