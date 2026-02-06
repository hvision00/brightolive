import { defineField } from "sanity";

// Helper per creare campi stringa multilingua
export function localizedString(
  name: string,
  title: string,
  options?: { rows?: number; hidden?: (context: any) => boolean }
) {
  const fieldType = options?.rows ? "text" : "string";

  return defineField({
    name,
    title,
    type: "object",
    fields: [
      {
        name: "it",
        title: "Italiano",
        type: fieldType,
        ...(options?.rows ? { rows: options.rows } : {}),
      },
      {
        name: "en",
        title: "English",
        type: fieldType,
        ...(options?.rows ? { rows: options.rows } : {}),
      },
      {
        name: "es",
        title: "Espanol",
        type: fieldType,
        ...(options?.rows ? { rows: options.rows } : {}),
      },
    ],
    options: {
      collapsible: true,
      collapsed: false,
    },
    ...(options?.hidden ? { hidden: options.hidden } : {}),
  });
}

// Helper per creare array di stringhe multilingua
export function localizedStringArray(
  name: string,
  title: string,
  options?: { hidden?: (context: any) => boolean }
) {
  return defineField({
    name,
    title,
    type: "array",
    of: [
      {
        type: "object",
        fields: [
          { name: "it", title: "Italiano", type: "string" },
          { name: "en", title: "English", type: "string" },
          { name: "es", title: "Espanol", type: "string" },
        ],
      },
    ],
    ...(options?.hidden ? { hidden: options.hidden } : {}),
  });
}

// Helper per creare rich text multilingua
export function localizedBlockContent(
  name: string,
  title: string,
  options?: { hidden?: (context: any) => boolean }
) {
  return defineField({
    name,
    title,
    type: "object",
    fields: [
      {
        name: "it",
        title: "Italiano",
        type: "array",
        of: [{ type: "block" }],
      },
      {
        name: "en",
        title: "English",
        type: "array",
        of: [{ type: "block" }],
      },
      {
        name: "es",
        title: "Espanol",
        type: "array",
        of: [{ type: "block" }],
      },
    ],
    options: {
      collapsible: true,
      collapsed: false,
    },
    ...(options?.hidden ? { hidden: options.hidden } : {}),
  });
}
