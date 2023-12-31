// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
  app: {
    // head: {
    //   title: "Nuxt Practice Page",
    //   meta: [
    //     {
    //       "name": "description",
    //       "content": "This is a repository for Nuxt practice"
    //     }
    //   ]
    // }
  },
  alias: { 
    "@": resolve(__dirname, "/"),
  },
  css: ["~/assets/main.scss"],
  modules: ['@nuxt/content','@pinia/nuxt'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // ssr: false,
});


