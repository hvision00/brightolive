import { defineType, defineField } from "sanity";
import { localizedString } from "./helpers/localizedString";

export default defineType({
  name: "siteSettings",
  title: "Impostazioni Sito",
  type: "document",
  icon: () => "⚙️",
  fields: [
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "phone",
      title: "Telefono",
      type: "string",
    }),
    defineField({
      name: "instagram",
      title: "Instagram URL",
      type: "url",
    }),
    defineField({
      name: "facebook",
      title: "Facebook URL",
      type: "url",
    }),
    defineField({
      name: "pinterest",
      title: "Pinterest URL",
      type: "url",
    }),
    localizedString("defaultSeoTitle", "SEO Title Default"),
    localizedString("defaultSeoDescription", "SEO Description Default", {
      rows: 3,
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Impostazioni Sito",
      };
    },
  },
});
