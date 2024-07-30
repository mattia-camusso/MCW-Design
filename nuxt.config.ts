// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from "nuxt/config";
import { resolve } from "path";
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  site: {
    url: "https://mcwdesign.it",
    name: "MCW Design",
    description:
      "Sviluppo Siti Web e App Mobile Aosta, Valle d'Aosta, Torino, Canavese e tutta Italia",
    defaultLocale: "it", // not needed if you have @nuxtjs/i18n installed
  },
  seo: {
    redirectToCanonicalSiteUrl: false,
  },
  app: {
    head: {
      title:
        "MCW Design, Sviluppo Siti Web Valle d'Aosta, Torino, Canavese e tutta Italia",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "google-site-verification",
          content: "ySOnsDQMAY9k-SLMdO-M4lTIWUjMBaso6blE_hCf4qk",
        },
        {
          name: "description",
          content:
            "Sviluppo Siti Web e App Mobile Aosta, Valle d'Aosta, Torino Canavese e tutta Italia",
        },
      ],
      link: [{ rel: "icon", type: "image/svg", href: "/favicon.ico" }],
    },
  },
  alias: {
    "@": resolve(__dirname, "/"),
  },
  modules: [
    "@pinia/nuxt",
    "@hypernym/nuxt-anime",
    "nuxt-simple-robots",
    "@nuxtjs/seo",
    "@nuxtjs/sitemap",
  ],
  /*   ui: {
    global: true,
  }, */
  css: ["~/assets/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  ssr: true,
});
