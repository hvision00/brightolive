const WP_API_URL = import.meta.env.PUBLIC_WP_GRAPHQL_URL;
const WP_AUTH_USERNAME = import.meta.env.WP_AUTH_USERNAME;
const WP_AUTH_PASSWORD = import.meta.env.WP_AUTH_PASSWORD;

export async function fetchFromWP(query: string, variables = {}) {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  // Aggiungi autenticazione HTTP Basic se le credenziali sono presenti
  if (WP_AUTH_USERNAME && WP_AUTH_PASSWORD) {
    const credentials = btoa(`${WP_AUTH_USERNAME}:${WP_AUTH_PASSWORD}`);
    headers["Authorization"] = `Basic ${credentials}`;
  }

  const res = await fetch(WP_API_URL, {
    method: "POST",
    headers,
    body: JSON.stringify({ query, variables }),
  });

  if (!res.ok) {
    throw new Error(`Fetch WP fallito: ${res.status} ${res.statusText}`);
  }

  const json = await res.json();
  return json.data;
}

// Tipi TypeScript per i post
export interface WPPost {
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  content: string;
  language: {
    code: string;
    name: string;
  };
  featuredImage?: {
    node: {
      sourceUrl: string;
      altText: string;
    };
  };
  categories: {
    nodes: Array<{
      name: string;
    }>;
  };
}

// Recupera post filtrati per lingua
export async function getPostsByLanguage(
  lang: string,
  limit: number = 10
): Promise<WPPost[]> {
  try {
    // Recupera tutti i post e filtra lato client (più affidabile)
    const data = await fetchFromWP(
      `
      query GetPosts($first: Int!) {
        posts(first: $first) {
          nodes {
            title
            slug
            date
            excerpt
            content
            language {
              code
              name
            }
            featuredImage {
              node {
                sourceUrl
                altText
              }
            }
            categories {
              nodes {
                name
              }
            }
          }
        }
      }
    `,
      {
        first: 100, // Recupera più post per poi filtrare
      }
    );

    if (!data || !data.posts || !data.posts.nodes) {
      return [];
    }

    // Filtra per lingua
    const filteredPosts = data.posts.nodes.filter(
      (post: WPPost) => post.language.code.toLowerCase() === lang.toLowerCase()
    );

    // Ordina per data (più recenti prima) lato client
    filteredPosts.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    // Limita il numero di risultati
    return filteredPosts.slice(0, limit);
  } catch (error) {
    return []; // Ritorna array vuoto in caso di errore
  }
}

// Recupera un singolo post per slug e lingua
export async function getPostBySlug(
  slug: string,
  lang: string
): Promise<WPPost | null> {
  try {
    const data = await fetchFromWP(
      `
      query GetPost($slug: ID!) {
        post(id: $slug, idType: SLUG) {
          title
          slug
          date
          excerpt
          content
          language {
            code
            name
          }
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          categories {
            nodes {
              name
            }
          }
        }
      }
    `,
      {
        slug,
      }
    );

    if (!data || !data.post) {
      return null;
    }

    // Verifica che il post sia nella lingua corretta
    if (data.post.language.code.toLowerCase() !== lang.toLowerCase()) {
      return null;
    }

    return data.post;
  } catch (error) {
    return null;
  }
}

// Recupera tutti gli slug dei post per generare pagine statiche
export async function getAllPostSlugs(): Promise<
  Array<{ slug: string; lang: string }>
> {
  try {
    const data = await fetchFromWP(`
      query GetAllSlugs {
        posts(first: 1000) {
          nodes {
            slug
            language {
              code
            }
          }
        }
      }
    `);

    if (!data || !data.posts || !data.posts.nodes) {
      return [];
    }

    return data.posts.nodes.map((post: any) => ({
      slug: post.slug,
      lang: post.language.code.toLowerCase(),
    }));
  } catch (error) {
    return [];
  }
}
