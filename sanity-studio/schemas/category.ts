import { defineType, defineField } from "sanity";
import { localizedString } from "./helpers/localizedString";

export default defineType({
  name: "category",
  title: "Categoria Blog",
  type: "document",
  icon: () => "🏷️",
  fields: [
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "name.it",
        maxLength: 96,
      },
    }),
    localizedString("name", "Nome Categoria"),
  ],
  preview: {
    select: {
      title: "name.it",
    },
  },
});
