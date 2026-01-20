// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://www.thebrightolive.com", // Il tuo dominio
  integrations: [
    icon(),
    sitemap({
      // Configurazione sitemap
      i18n: {
        defaultLocale: "it",
        locales: {
          it: "it-IT",
          en: "en-US",
          es: "es-ES",
        },
      },
      // Escludi pagine che non vuoi nella sitemap
      filter: (page) =>
        !page.includes("/privacy") && !page.includes("/cookie-policy"),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
