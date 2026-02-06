import { defineType, defineField } from "sanity";
import {
  localizedString,
  localizedStringArray,
} from "./helpers/localizedString";

export default defineType({
  name: "service",
  title: "Servizio",
  type: "document",
  icon: () => "✨",
  fields: [
    defineField({
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "name.it",
        maxLength: 96,
      },
    }),
    defineField({
      name: "number",
      title: "Numero",
      type: "string",
      description: 'Es: "01", "02", "03"',
    }),
    defineField({
      name: "order",
      title: "Ordine",
      type: "number",
      description: "Per ordinare i servizi nella lista",
    }),
    localizedString("name", "Nome Servizio"),
    localizedString("tagline", "Tagline"),
    localizedString("intro", "Introduzione", { rows: 4 }),
    localizedString("ideal", "Per chi è ideale", { rows: 2 }),
    localizedString("whatLabel", "Etichetta Cosa Include"),
    localizedStringArray("includes", "Cosa Include"),
    localizedString("howLabel", "Etichetta Come Funziona"),
    localizedStringArray("steps", "Steps Come Funziona"),
  ],
  preview: {
    select: {
      title: "name.it",
      subtitle: "tagline.it",
      number: "number",
    },
    prepare({ title, subtitle, number }) {
      return {
        title: `${number || ""} ${title || "Servizio"}`.trim(),
        subtitle: subtitle,
      };
    },
  },
});
