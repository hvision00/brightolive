import { defineType, defineField } from "sanity";
import {
  localizedString,
  localizedBlockContent,
  localizedStringArray,
} from "./helpers/localizedString";

export default defineType({
  name: "blogPost",
  title: "Articolo Blog",
  type: "document",
  icon: () => "✏️",
  fields: [
    defineField({
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      validation: (Rule) => Rule.required(),
      options: {
        source: "title.it",
        maxLength: 96,
      },
    }),
    defineField({
      name: "templateType",
      title: "Tipo Template",
      type: "string",
      options: {
        list: [
          { title: "📄 Articolo Semplice (testo libero)", value: "simple" },
          { title: "🎨 Articolo Strutturato (stile destination)", value: "structured" },
        ],
        layout: "radio",
      },
      initialValue: "simple",
      validation: (Rule) => Rule.required(),
    }),
    localizedString("title", "Titolo"),
    localizedString("excerpt", "Excerpt (anteprima)", { rows: 3 }),
    defineField({
      name: "featuredImage",
      title: "Immagine in Evidenza",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "category",
      title: "Categoria",
      type: "reference",
      to: [{ type: "category" }],
    }),
    defineField({
      name: "publishedAt",
      title: "Data Pubblicazione",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
    
    // ========================================
    // TEMPLATE SEMPLICE - Content
    // ========================================
    localizedBlockContent("content", "Contenuto Articolo", {
      hidden: ({ document }) => document?.templateType !== "simple",
    }),

    // ========================================
    // TEMPLATE STRUTTURATO - Hero
    // ========================================
    defineField({
      name: "heroImage",
      title: "Hero: Immagine",
      type: "image",
      options: { hotspot: true },
      hidden: ({ document }) => document?.templateType !== "structured",
    }),
    localizedString("heroLabel", "Hero: Label", {
      hidden: ({ document }) => document?.templateType !== "structured",
    }),
    localizedString("heroIntro", "Hero: Intro", {
      rows: 3,
      hidden: ({ document }) => document?.templateType !== "structured",
    }),
    
    // ========================================
    // TEMPLATE STRUTTURATO - Intro Section
    // ========================================
    localizedString("introQuote", "Intro: Citazione", {
      rows: 3,
      hidden: ({ document }) => document?.templateType !== "structured",
    }),
    defineField({
      name: "introCards",
      title: "Intro: Cards (3 card statistiche)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            localizedString("cardValue", "Valore (es. 2019, UNESCO)"),
            localizedString("cardLabel", "Etichetta"),
          ],
        },
      ],
      validation: (Rule) => Rule.max(3),
      hidden: ({ document }) => document?.templateType !== "structured",
    }),
    localizedString("introText", "Intro: Testo", {
      rows: 4,
      hidden: ({ document }) => document?.templateType !== "structured",
    }),

    // ========================================
    // TEMPLATE STRUTTURATO - Sezione 01
    // ========================================
    localizedString("section01Label", "Sezione 01: Label", {
      hidden: ({ document }) => document?.templateType !== "structured",
    }),
    localizedString("section01Title", "Sezione 01: Titolo", {
      hidden: ({ document }) => document?.templateType !== "structured",
    }),
    localizedString("section01Text", "Sezione 01: Testo", {
      rows: 6,
      hidden: ({ document }) => document?.templateType !== "structured",
    }),
    defineField({
      name: "section01BoxIcon",
      title: "Sezione 01: Box Icona",
      type: "string",
      options: {
        list: [
          { title: "🍇 Grape (Uva)", value: "lucide:grape" },
          { title: "🏛️ Landmark (Monumento)", value: "lucide:landmark" },
          { title: "🏰 Castle (Castello)", value: "lucide:castle" },
          { title: "⛪ Church (Chiesa)", value: "lucide:church" },
          { title: "🌊 Waves (Onde)", value: "lucide:waves" },
          { title: "📜 Scroll (Pergamena)", value: "lucide:scroll-text" },
          { title: "💧 Droplets (Gocce)", value: "lucide:droplets" },
          { title: "🏠 Home (Casa)", value: "lucide:home" },
          { title: "✨ Sparkles (Scintille)", value: "lucide:sparkles" },
          { title: "🎨 Palette (Tavolozza)", value: "lucide:palette" },
        ],
      },
      initialValue: "lucide:grape",
      hidden: ({ document }) => document?.templateType !== "structured",
    }),
    localizedString("section01BoxTitle", "Sezione 01: Box Titolo", {
      hidden: ({ document }) => document?.templateType !== "structured",
    }),
    localizedStringArray("section01BoxPoints", "Sezione 01: Box Punti (lista)", {
      hidden: ({ document }) => document?.templateType !== "structured",
    }),

    // ========================================
    // TEMPLATE STRUTTURATO - Sezione 02
    // ========================================
    localizedString("section02Label", "Sezione 02: Label", {
      hidden: ({ document }) => document?.templateType !== "structured",
    }),
    localizedString("section02Title", "Sezione 02: Titolo", {
      hidden: ({ document }) => document?.templateType !== "structured",
    }),
    localizedString("section02Intro", "Sezione 02: Intro", {
      rows: 3,
      hidden: ({ document }) => document?.templateType !== "structured",
    }),
    defineField({
      name: "section02Cards",
      title: "Sezione 02: Cards (3 card)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "cardIcon",
              title: "Icona Card",
              type: "string",
              options: {
                list: [
                  { title: "🏛️ Landmark (Monumento)", value: "lucide:landmark" },
                  { title: "🏰 Castle (Castello)", value: "lucide:castle" },
                  { title: "⛪ Church (Chiesa)", value: "lucide:church" },
                  { title: "🍇 Grape (Uva)", value: "lucide:grape" },
                  { title: "🎨 Palette (Tavolozza)", value: "lucide:palette" },
                  { title: "🌊 Waves (Onde)", value: "lucide:waves" },
                  { title: "✨ Sparkles (Scintille)", value: "lucide:sparkles" },
                ],
              },
              initialValue: "lucide:landmark",
            }),
            localizedString("cardTitle", "Titolo Card"),
            localizedString("cardText", "Testo Card", { rows: 3 }),
            localizedStringArray("cardTags", "Tags (max 2)"),
          ],
        },
      ],
      validation: (Rule) => Rule.max(3),
      hidden: ({ document }) => document?.templateType !== "structured",
    }),
    localizedString("section02Highlight", "Sezione 02: Highlight Box", {
      rows: 2,
      hidden: ({ document }) => document?.templateType !== "structured",
    }),

    // ========================================
    // TEMPLATE STRUTTURATO - Sezione 03
    // ========================================
    localizedString("section03Label", "Sezione 03: Label", {
      hidden: ({ document }) => document?.templateType !== "structured",
    }),
    localizedString("section03Title", "Sezione 03: Titolo", {
      hidden: ({ document }) => document?.templateType !== "structured",
    }),
    localizedString("section03Intro", "Sezione 03: Intro", {
      rows: 3,
      hidden: ({ document }) => document?.templateType !== "structured",
    }),
    defineField({
      name: "section03Items",
      title: "Sezione 03: Lista Items (max 4)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "itemIcon",
              title: "Icona Item",
              type: "string",
              options: {
                list: [
                  { title: "✨ Sparkles (Scintille)", value: "lucide:sparkles" },
                  { title: "🌊 Waves (Onde)", value: "lucide:waves" },
                  { title: "📜 Scroll (Pergamena)", value: "lucide:scroll-text" },
                  { title: "💧 Droplets (Gocce)", value: "lucide:droplets" },
                  { title: "🏠 Home (Casa)", value: "lucide:home" },
                  { title: "⛪ Church (Chiesa)", value: "lucide:church" },
                  { title: "🏰 Castle (Castello)", value: "lucide:castle" },
                ],
              },
              initialValue: "lucide:sparkles",
            }),
            localizedString("itemTitle", "Titolo Item"),
            localizedString("itemSubtitle", "Sottotitolo Item"),
          ],
        },
      ],
      validation: (Rule) => Rule.max(4),
      hidden: ({ document }) => document?.templateType !== "structured",
    }),

    // ========================================
    // TEMPLATE STRUTTURATO - Sezione 04
    // ========================================
    localizedString("section04Label", "Sezione 04: Label", {
      hidden: ({ document }) => document?.templateType !== "structured",
    }),
    localizedString("section04Title", "Sezione 04: Titolo", {
      hidden: ({ document }) => document?.templateType !== "structured",
    }),
    localizedString("section04Text", "Sezione 04: Testo", {
      rows: 3,
      hidden: ({ document }) => document?.templateType !== "structured",
    }),
    localizedString("section04Quote", "Sezione 04: Citazione", {
      rows: 2,
      hidden: ({ document }) => document?.templateType !== "structured",
    }),
    localizedStringArray("section04Tags", "Sezione 04: Tags (max 5)", {
      hidden: ({ document }) => document?.templateType !== "structured",
    }),
  ],
  preview: {
    select: {
      title: "title.it",
      subtitle: "category.name.it",
      media: "featuredImage",
      date: "publishedAt",
    },
    prepare({ title, subtitle, media, date }) {
      const formattedDate = date
        ? new Date(date).toLocaleDateString("it-IT")
        : "";
      return {
        title: title || "Articolo senza titolo",
        subtitle: `${subtitle || "Senza categoria"} - ${formattedDate}`,
        media,
      };
    },
  },
  orderings: [
    {
      title: "Data Pubblicazione (recenti)",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
});
