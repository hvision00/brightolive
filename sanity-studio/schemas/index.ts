// Singleton Pages
import siteSettings from "./siteSettings";
import homePage from "./homePage";
import aboutPage from "./aboutPage";
import servicesPage from "./servicesPage";
import destinationsPage from "./destinationsPage";
import contactPage from "./contactPage";
import galleryPage from "./galleryPage";

// Multiple Documents
import service from "./service";
import destination from "./destination";
import blogPost from "./blogPost";
import category from "./category";

export const schemaTypes = [
  // Singletons
  siteSettings,
  homePage,
  aboutPage,
  servicesPage,
  destinationsPage,
  contactPage,
  galleryPage,

  // Documents
  service,
  destination,
  blogPost,
  category,
];
