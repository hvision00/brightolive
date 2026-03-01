import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";
import { toHTML } from "@portabletext/to-html";

// ============================================
// CLIENT CONFIGURATION
// ============================================

export const client = createClient({
  projectId: "8i61ocow",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
  token:
    "sk3GzTBQ5QduPwA2olbswGDgclRbPe31k4z4izNWzvMxavJdGgSFQpPLb86En55yqShAWCNxCBIxOC67Hzs8PTkpTCFIqtqK3u58iopCjeeRZWTZc5rpgftSvXnJnw5QizWYZGyq2NKHZOKPLTpK5lzDxVfAVBGAYVSjCfZjZp8IhC3j2LtB",
});

// ============================================
// IMAGE URL BUILDER
// ============================================

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// Funzione helper per ottenere URL immagine con dimensioni opzionali
export function getImageUrl(source: SanityImageSource, width?: number): string {
  if (!source) return "";
  const imgBuilder = builder.image(source);
  if (width) {
    return imgBuilder.width(width).url();
  }
  return imgBuilder.url();
}

// ============================================
// TYPESCRIPT INTERFACES
// ============================================

export type Language = "it" | "en" | "es";

export interface LocalizedString {
  it?: string;
  en?: string;
  es?: string;
}

export interface LocalizedBlockContent {
  it?: any[];
  en?: any[];
  es?: any[];
}

export interface SanityImage {
  asset: {
    _ref: string;
    _type: "reference";
  };
  alt?: LocalizedString;
}

export interface SiteSettings {
  _id: string;
  siteName?: LocalizedString;
  siteDescription?: LocalizedString;
  defaultSeoTitle?: LocalizedString;
  defaultSeoDescription?: LocalizedString;
  logo?: SanityImage;
  email?: string;
  phone?: string;
  instagram?: string;
  facebook?: string;
  pinterest?: string;
  socialLinks?: {
    platform?: string;
    url?: string;
  }[];
}

export interface HomePage {
  _id: string;
  heroTitle?: LocalizedString;
  heroSubtitle?: LocalizedString;
  heroText?: LocalizedString;
  heroImages?: SanityImage[];
  impactNumber1?: LocalizedString;
  impactLabel1?: LocalizedString;
  impactNumber2?: LocalizedString;
  impactLabel2?: LocalizedString;
  impactNumber3?: LocalizedString;
  impactLabel3?: LocalizedString;
  servicesTitle?: LocalizedString;
  servicesSubtitle?: LocalizedString;
  servicesText?: LocalizedString;
  destinationsTitle?: LocalizedString;
  destinationsSubtitle?: LocalizedString;
  destinationsText?: LocalizedString;
  ctaTitle?: LocalizedString;
  ctaText?: LocalizedString;
  ctaButton?: LocalizedString;
}

export interface AboutPage {
  _id: string;
  heroLabel?: LocalizedString;
  heroTitle?: LocalizedString;
  heroSubtitle?: LocalizedString;
  heroText?: LocalizedString;
  heroImage?: SanityImage;
  introTitle?: LocalizedString;
  introTexts?: LocalizedString[];
  valuesTitle?: LocalizedString;
  values?: {
    title?: LocalizedString;
    text?: LocalizedString;
  }[];
  styleLabel?: LocalizedString;
  styleTitle?: LocalizedString;
  styleText?: LocalizedString;
  styleKeywords?: LocalizedString[];
  styleImage?: SanityImage;
  whyLabel?: LocalizedString;
  whyTitle?: LocalizedString;
  whyHighlight?: string;
  whyText1?: LocalizedString;
  whyBright?: LocalizedString;
  whyOlive?: LocalizedString;
  whyConclusion?: LocalizedString;
  ctaTitle?: LocalizedString;
  ctaText?: LocalizedString;
  ctaButton?: LocalizedString;
}

export interface Service {
  _id: string;
  slug: { current: string };
  number?: string;
  name?: LocalizedString;
  tagline?: LocalizedString;
  intro?: LocalizedString;
  ideal?: LocalizedString;
  whatLabel?: LocalizedString;
  includes?: LocalizedString[];
  howLabel?: LocalizedString;
  steps?: LocalizedString[];
  order?: number;
}

export interface ServicesPage {
  _id: string;
  heroLabel?: LocalizedString;
  heroTitle?: LocalizedString;
  heroSubtitle?: LocalizedString;
  heroText?: LocalizedString;
  ctaTitle?: LocalizedString;
  ctaText?: LocalizedString;
  ctaButton?: LocalizedString;
  processLabel?: LocalizedString;
  processTitle?: LocalizedString;
  processSteps?: {
    title?: LocalizedString;
    text?: LocalizedString;
  }[];
}

export interface Destination {
  _id: string;
  slug: { current: string };
  order?: number;
  
  // Card (per listing)
  name?: LocalizedString;
  subtitle?: LocalizedString;
  shortDescription?: LocalizedString;
  details?: LocalizedString[];
  cardImage?: SanityImage;
  
  // Hero
  heroImage?: SanityImage;
  heroLabel?: LocalizedString;
  heroIntro?: LocalizedString;
  
  // Intro
  introQuote?: LocalizedString;
  introCards?: {
    cardValue?: LocalizedString;
    cardLabel?: LocalizedString;
  }[];
  introText?: LocalizedString;
  
  // Section 01
  section01Label?: LocalizedString;
  section01Title?: LocalizedString;
  section01Text?: LocalizedString;
  section01BoxIcon?: string;
  section01BoxTitle?: LocalizedString;
  section01BoxPoints?: LocalizedString[];
  
  // Section 02
  section02Label?: LocalizedString;
  section02Title?: LocalizedString;
  section02Intro?: LocalizedString;
  section02Cards?: {
    cardIcon?: string;
    cardTitle?: LocalizedString;
    cardText?: LocalizedString;
    cardTags?: LocalizedString[];
  }[];
  section02Highlight?: LocalizedString;
  
  // Section 03
  section03Label?: LocalizedString;
  section03Title?: LocalizedString;
  section03Intro?: LocalizedString;
  section03Items?: {
    itemIcon?: string;
    itemTitle?: LocalizedString;
    itemSubtitle?: LocalizedString;
  }[];
  
  // Section 04
  section04Label?: LocalizedString;
  section04Title?: LocalizedString;
  section04Text?: LocalizedString;
  section04Quote?: LocalizedString;
  section04Tags?: LocalizedString[];
}

export interface DestinationsPage {
  _id: string;
  heroLabel?: LocalizedString;
  heroTitle?: LocalizedString;
  heroSubtitle?: LocalizedString;
  heroText?: LocalizedString;
  whyLabel?: LocalizedString;
  whyTitle?: LocalizedString;
  whyText?: LocalizedString;
  ctaTitle?: LocalizedString;
  ctaText?: LocalizedString;
  ctaButton?: LocalizedString;
}

export interface ContactPage {
  _id: string;
  heroLabel?: LocalizedString;
  heroTitle?: LocalizedString;
  heroSubtitle?: LocalizedString;
  heroText?: LocalizedString;
  infoTitle?: LocalizedString;
  infoText?: LocalizedString;
  whatHappensTitle?: LocalizedString;
  whatHappensSteps?: {
    title?: LocalizedString;
    text?: LocalizedString;
  }[];
  detailsTitle?: LocalizedString;
  detailsEmail?: LocalizedString;
  detailsPhone?: LocalizedString;
  detailsSocial?: LocalizedString;
  detailsOr?: LocalizedString;
}

export interface GalleryPage {
  _id: string;
  heroLabel?: LocalizedString;
  heroTitle?: LocalizedString;
  heroSubtitle?: LocalizedString;
  heroText?: LocalizedString;
  images?: SanityImage[];
}

export interface BlogPost {
  _id: string;
  slug: { current: string };
  templateType?: "simple" | "structured";
  title?: LocalizedString;
  excerpt?: LocalizedString;
  featuredImage?: SanityImage;
  publishedAt?: string;
  categories?: Category[];
  
  // Simple template
  heroLabel?: LocalizedString;
  heroIntro?: LocalizedString;
  content?: LocalizedBlockContent;
  
  // Structured template (same as destination)
  heroImage?: SanityImage;
  introQuote?: LocalizedString;
  introCards?: {
    cardValue?: LocalizedString;
    cardLabel?: LocalizedString;
  }[];
  introText?: LocalizedString;
  section01Label?: LocalizedString;
  section01Title?: LocalizedString;
  section01Text?: LocalizedString;
  section01BoxIcon?: string;
  section01BoxTitle?: LocalizedString;
  section01BoxPoints?: LocalizedString[];
  section02Label?: LocalizedString;
  section02Title?: LocalizedString;
  section02Intro?: LocalizedString;
  section02Cards?: {
    cardIcon?: string;
    cardTitle?: LocalizedString;
    cardText?: LocalizedString;
    cardTags?: LocalizedString[];
  }[];
  section02Highlight?: LocalizedString;
  section03Label?: LocalizedString;
  section03Title?: LocalizedString;
  section03Intro?: LocalizedString;
  section03Items?: {
    itemIcon?: string;
    itemTitle?: LocalizedString;
    itemSubtitle?: LocalizedString;
  }[];
  section04Label?: LocalizedString;
  section04Title?: LocalizedString;
  section04Text?: LocalizedString;
  section04Quote?: LocalizedString;
  section04Tags?: LocalizedString[];
}

export interface Category {
  _id: string;
  slug: { current: string };
  name?: LocalizedString;
}

// ============================================
// HELPER FUNCTIONS
// ============================================

export function getLocalized(
  field: LocalizedString | undefined,
  lang: "it" | "en" | "es",
  fallback: string = ""
): string {
  if (!field) return fallback;
  return field[lang] || field.it || fallback;
}

export function getLocalizedArray(
  field: LocalizedString[] | undefined,
  lang: "it" | "en" | "es"
): string[] {
  if (!field) return [];
  return field.map((item) => getLocalized(item, lang, ""));
}

export function getLocalizedContent(
  field: LocalizedBlockContent | undefined,
  lang: "it" | "en" | "es"
): string {
  if (!field) return "";
  const content = field[lang] || field.it || [];
  
  return toHTML(content, {
    components: {
      block: {
        normal: ({ children }) => `<p class="mb-4">${children}</p>`,
        h2: ({ children }) => `<h2 class="text-2xl font-light mt-8 mb-4">${children}</h2>`,
        h3: ({ children }) => `<h3 class="text-xl font-light mt-6 mb-3">${children}</h3>`,
      },
      marks: {
        strong: ({ children }) => `<strong class="font-semibold">${children}</strong>`,
        em: ({ children }) => `<em>${children}</em>`,
        link: ({ children, value }) => 
          `<a href="${value?.href || '#'}" class="text-primary hover:underline">${children}</a>`,
      },
      list: {
        bullet: ({ children }) => `<ul class="list-disc list-inside mb-4">${children}</ul>`,
        number: ({ children }) => `<ol class="list-decimal list-inside mb-4">${children}</ol>`,
      },
      listItem: {
        bullet: ({ children }) => `<li class="mb-2">${children}</li>`,
        number: ({ children }) => `<li class="mb-2">${children}</li>`,
      },
    },
  });
}

// ============================================
// FETCH FUNCTIONS - SITE SETTINGS
// ============================================

export async function getSiteSettings(): Promise<SiteSettings | null> {
  const query = `*[_type == "siteSettings"][0]`;
  return await client.fetch(query);
}

// ============================================
// FETCH FUNCTIONS - HOME PAGE
// ============================================

export async function getHomePageData(): Promise<{
  homePage: HomePage | null;
  destinations: Destination[];
  services: Service[];
}> {
  const homePage = await client.fetch(`*[_type == "homePage"][0]`);
  const destinations = await client.fetch(`*[_type == "destination" && defined(slug.current)] | order(order asc)`);
  const services = await client.fetch(`*[_type == "service" && defined(slug.current)] | order(order asc)`);
  
  return { homePage, destinations, services };
}

// ============================================
// FETCH FUNCTIONS - ABOUT PAGE
// ============================================

export async function getAboutPageData(): Promise<AboutPage | null> {
  const query = `*[_type == "aboutPage"][0]`;
  return await client.fetch(query);
}

// Alias per compatibilità
export const getAboutPage = getAboutPageData;

// ============================================
// FETCH FUNCTIONS - SERVICES
// ============================================

export async function getServicesPageData(): Promise<ServicesPage | null> {
  const query = `*[_type == "servicesPage"][0]`;
  return await client.fetch(query);
}

// Alias per compatibilità
export const getServicesPage = getServicesPageData;

export async function getServices(): Promise<Service[]> {
  const query = `*[_type == "service" && defined(slug.current)] | order(order asc)`;
  return await client.fetch(query);
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  const query = `*[_type == "service" && slug.current == $slug][0]`;
  return await client.fetch(query, { slug });
}

export async function getAllServiceSlugs(): Promise<string[]> {
  const query = `*[_type == "service" && defined(slug.current)].slug.current`;
  const slugs = await client.fetch(query);
  return slugs.filter((slug: string | null) => slug !== null && slug !== undefined);
}

// ============================================
// FETCH FUNCTIONS - DESTINATIONS
// ============================================

export async function getDestinationsPageData(): Promise<DestinationsPage | null> {
  const query = `*[_type == "destinationsPage"][0]`;
  return await client.fetch(query);
}

// Alias per compatibilità
export const getDestinationsPage = getDestinationsPageData;

export async function getDestinations(): Promise<Destination[]> {
  const query = `*[_type == "destination" && defined(slug.current)] | order(order asc)`;
  return await client.fetch(query);
}

export async function getDestinationBySlug(
  slug: string
): Promise<Destination | null> {
  const query = `*[_type == "destination" && slug.current == $slug][0] {
    _id,
    slug,
    order,
    name,
    subtitle,
    shortDescription,
    cardImage,
    heroImage,
    heroLabel,
    heroIntro,
    introQuote,
    introCards,
    introText,
    section01Label,
    section01Title,
    section01Text,
    section01BoxIcon,
    section01BoxTitle,
    section01BoxPoints,
    section02Label,
    section02Title,
    section02Intro,
    section02Cards,
    section02Highlight,
    section03Label,
    section03Title,
    section03Intro,
    section03Items,
    section04Label,
    section04Title,
    section04Text,
    section04Quote,
    section04Tags
  }`;
  return await client.fetch(query, { slug });
}

export async function getAllDestinationSlugs(): Promise<string[]> {
  const query = `*[_type == "destination" && defined(slug.current)].slug.current`;
  const slugs = await client.fetch(query);
  return slugs.filter((slug: string | null) => slug !== null && slug !== undefined);
}

// ============================================
// FETCH FUNCTIONS - BLOG
// ============================================

export async function getBlogPosts(limit?: number): Promise<BlogPost[]> {
  const limitQuery = limit ? `[0...${limit}]` : "";
  const query = `*[_type == "blogPost" && defined(slug.current)] | order(publishedAt desc)${limitQuery} {
    _id,
    slug,
    title,
    excerpt,
    featuredImage,
    publishedAt,
    categories[]-> {
      _id,
      slug,
      name
    }
  }`;
  return await client.fetch(query);
}

export async function getBlogPostBySlug(
  slug: string
): Promise<BlogPost | null> {
  const query = `*[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    slug,
    templateType,
    title,
    excerpt,
    featuredImage,
    publishedAt,
    categories[]-> {
      _id,
      slug,
      name
    },
    heroLabel,
    heroIntro,
    content,
    heroImage,
    introQuote,
    introCards,
    introText,
    section01Label,
    section01Title,
    section01Text,
    section01BoxIcon,
    section01BoxTitle,
    section01BoxPoints,
    section02Label,
    section02Title,
    section02Intro,
    section02Cards[] {
      cardIcon,
      cardTitle,
      cardText,
      cardTags
    },
    section02Highlight,
    section03Label,
    section03Title,
    section03Intro,
    section03Items[] {
      itemIcon,
      itemTitle,
      itemSubtitle
    },
    section04Label,
    section04Title,
    section04Text,
    section04Quote,
    section04Tags
  }`;
  return await client.fetch(query, { slug });
}

export async function getAllBlogPostSlugs(): Promise<string[]> {
  const query = `*[_type == "blogPost" && defined(slug.current)].slug.current`;
  const slugs = await client.fetch(query);
  return slugs.filter((slug: string | null) => slug !== null && slug !== undefined);
}

// Alias per compatibilità
export const getAllBlogSlugs = getAllBlogPostSlugs;

// ============================================
// FETCH FUNCTIONS - CONTACT PAGE
// ============================================

export async function getContactPageData(): Promise<ContactPage | null> {
  const query = `*[_type == "contactPage"][0]`;
  return await client.fetch(query);
}

// Alias per compatibilità
export const getContactPage = getContactPageData;

// ============================================
// FETCH FUNCTIONS - GALLERY PAGE
// ============================================

export async function getGalleryPageData(): Promise<GalleryPage | null> {
  const query = `*[_type == "galleryPage"][0]`;
  return await client.fetch(query);
}

// Alias per compatibilità
export const getGalleryPage = getGalleryPageData;
