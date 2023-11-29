// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
  alias: { 
    "@": resolve(__dirname, "/"),
  },
  css: ["~/assets/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});

// function defineNuxtConfig(arg0: { alias: { "@": string; }; css: string[]; }) {
//   throw new Error("Function not implemented.");
// }

