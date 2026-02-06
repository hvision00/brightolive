import { defineField, defineType } from "sanity";
import {
  localizedString,
  localizedStringArray,
} from "./helpers/localizedString";

export default defineType({
  name: "destination",
  title: "Destination Wedding",
  type: "document",
  fields: [
    defineField({
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      options: {
        source: "name.it",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "order",
      title: "Ordine",
      type: "number",
      description: "Ordine di visualizzazione (numeri più bassi appaiono prima)",
    }),

    // ========================================
    // CARD (per listing)
    // ========================================
    defineField({
      name: "name",
      title: "Nome Destinazione",
      type: "object",
      fields: [
        { name: "it", type: "string", title: "🇮🇹 Italiano" },
        { name: "en", type: "string", title: "🇬🇧 English" },
        { name: "es", type: "string", title: "🇪🇸 Español" },
      ],
      validation: (Rule) => Rule.required(),
    }),
    localizedString("subtitle", "Sottotitolo"),
    localizedString("shortDescription", "Descrizione breve (per card)", {
      rows: 3,
    }),
    localizedStringArray("details", "Dettagli rapidi (usa Add item)"),
    defineField({
      name: "cardImage",
      title: "Immagine Card (per listing)",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [localizedString("alt", "Testo alternativo")],
    }),

    // ========================================
    // HERO
    // ========================================
    defineField({
      name: "heroImage",
      title: "Hero: Immagine",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [localizedString("alt", "Testo alternativo")],
    }),
    localizedString("heroLabel", "Hero: Label (piccola)"),
    localizedString("heroIntro", "Hero: Testo Intro", { rows: 3 }),

    // ========================================
    // INTRO
    // ========================================
    localizedString("introQuote", "Intro: Citazione (grande)", { rows: 3 }),
    defineField({
      name: "introCards",
      title: "Intro: Cards Info (max 3)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            localizedString("cardValue", "Valore (es: 2019, 1h, ∞)"),
            localizedString("cardLabel", "Label (es: Patrimonio UNESCO)"),
          ],
        },
      ],
      validation: (Rule) => Rule.max(3),
    }),
    localizedString("introText", "Intro: Testo Principale", { rows: 6 }),

    // ========================================
    // SEZIONE 01
    // ========================================
    localizedString("section01Label", "Sezione 01: Label"),
    localizedString("section01Title", "Sezione 01: Titolo"),
    localizedString("section01Text", "Sezione 01: Testo", { rows: 6 }),
    defineField({
      name: "section01BoxIcon",
      title: "Sezione 01: Box Icona",
      type: "string",
      options: {
        list: [
          { title: "🍇 Uva (Wine)", value: "lucide:grape" },
          { title: "🌿 Foglia (Nature)", value: "lucide:leaf" },
          { title: "⛰️ Montagna (Mountain)", value: "lucide:mountain" },
          { title: "🏛️ Monumento (Landmark)", value: "lucide:landmark" },
          { title: "✨ Stelle (Sparkles)", value: "lucide:sparkles" },
          { title: "🎨 Tavolozza (Palette)", value: "lucide:palette" },
          { title: "❤️ Cuore (Heart)", value: "lucide:heart" },
        ],
      },
      initialValue: "lucide:grape",
    }),
    localizedString("section01BoxTitle", "Sezione 01: Box Titolo"),
    localizedStringArray("section01BoxPoints", "Sezione 01: Box Punti"),

    // ========================================
    // SEZIONE 02
    // ========================================
    localizedString("section02Label", "Sezione 02: Label"),
    localizedString("section02Title", "Sezione 02: Titolo"),
    localizedString("section02Intro", "Sezione 02: Intro", { rows: 3 }),
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
                  { title: "🏛️ Monumento", value: "lucide:landmark" },
                  { title: "🏰 Castello", value: "lucide:castle" },
                  { title: "⛪ Chiesa", value: "lucide:church" },
                  { title: "🏛️ Edificio", value: "lucide:building" },
                  { title: "🌳 Albero", value: "lucide:trees" },
                  { title: "🏔️ Montagna", value: "lucide:mountain" },
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
    }),
    localizedString("section02Highlight", "Sezione 02: Highlight (box)", {
      rows: 3,
    }),

    // ========================================
    // SEZIONE 03
    // ========================================
    localizedString("section03Label", "Sezione 03: Label"),
    localizedString("section03Title", "Sezione 03: Titolo"),
    localizedString("section03Intro", "Sezione 03: Intro", { rows: 3 }),
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
                  { title: "🌊 Onde (Waves)", value: "lucide:waves" },
                  { title: "📜 Pergamena (Scroll)", value: "lucide:scroll-text" },
                  { title: "💧 Gocce (Droplets)", value: "lucide:droplets" },
                  { title: "🏠 Casa (Home)", value: "lucide:home" },
                  { title: "✨ Stelle (Sparkles)", value: "lucide:sparkles" },
                  { title: "🌲 Albero (Tree)", value: "lucide:tree-pine" },
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
    }),

    // ========================================
    // SEZIONE 04
    // ========================================
    localizedString("section04Label", "Sezione 04: Label"),
    localizedString("section04Title", "Sezione 04: Titolo"),
    localizedString("section04Text", "Sezione 04: Testo", { rows: 6 }),
    localizedString("section04Quote", "Sezione 04: Citazione finale", {
      rows: 3,
    }),
    localizedStringArray("section04Tags", "Sezione 04: Tags finali"),
  ],
  preview: {
    select: {
      title: "name.it",
      subtitle: "subtitle.it",
      media: "cardImage",
    },
  },
});
