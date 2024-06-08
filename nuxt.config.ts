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
  app: {
    head: {
      title:
        "MCW Design, Sviluppo Siti Web Valle d'Aosta, Torino, Canavese e Piemonte",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Sviluppo Siti Web e App Mobile Aosta, Valle d'Aosta, Torino, Canavese e Piemonte",
        },
      ],
      link: [
        { rel: "icon", type: "image/svg", href: "../assets/favicon.svg" },
      ],
    },
  },
  alias: {
    "@": resolve(__dirname, "/"),
  },
  modules: ["@pinia/nuxt", "@hypernym/nuxt-anime"],
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
});
