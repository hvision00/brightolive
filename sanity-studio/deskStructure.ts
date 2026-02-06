import type { StructureBuilder } from "sanity/structure";

// Helper per creare singleton
const singletonListItem = (
  S: StructureBuilder,
  typeName: string,
  title: string,
  icon?: string
) =>
  S.listItem()
    .title(title)
    .icon(() => icon || "📄")
    .child(S.document().schemaType(typeName).documentId(typeName));

export const deskStructure = (S: StructureBuilder) =>
  S.list()
    .title("Contenuti")
    .items([
      // ============================================
      // PAGINE SITO
      // ============================================
      S.listItem()
        .title("📄 Pagine Sito")
        .child(
          S.list()
            .title("Pagine")
            .items([
              singletonListItem(S, "homePage", "🏠 Home Page"),
              singletonListItem(S, "aboutPage", "👤 Chi Siamo"),
              singletonListItem(S, "servicesPage", "💼 Pagina Servizi"),
              singletonListItem(S, "destinationsPage", "🌍 Pagina Destinations"),
              singletonListItem(S, "contactPage", "📞 Contatti"),
              singletonListItem(S, "galleryPage", "🖼️ Galleria"),
            ])
        ),

      S.divider(),

      // ============================================
      // SERVIZI
      // ============================================
      S.listItem()
        .title("✨ Servizi")
        .icon(() => "✨")
        .child(S.documentTypeList("service").title("Servizi")),

      // ============================================
      // DESTINAZIONI
      // ============================================
      S.listItem()
        .title("📍 Destinazioni")
        .icon(() => "📍")
        .child(S.documentTypeList("destination").title("Destinazioni")),

      S.divider(),

      // ============================================
      // BLOG
      // ============================================
      S.listItem()
        .title("✏️ Blog")
        .icon(() => "✏️")
        .child(
          S.list()
            .title("Blog")
            .items([
              S.listItem()
                .title("Tutti gli Articoli")
                .icon(() => "📝")
                .child(
                  S.documentTypeList("blogPost")
                    .title("Articoli")
                    .defaultOrdering([{ field: "publishedAt", direction: "desc" }])
                ),
              S.listItem()
                .title("Categorie")
                .icon(() => "🏷️")
                .child(S.documentTypeList("category").title("Categorie")),
            ])
        ),
    ]);
