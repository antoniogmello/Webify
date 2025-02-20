// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath, URL } from "url";
import svgLoader from "vite-svg-loader";

export default defineNuxtConfig({
  nitro: {
    preset: "static",
    output: {
      dir: "dist", 
    },
  },
  alias: {
    utils: fileURLToPath(new URL("./utils", import.meta.url)),
  },

  compatibilityDate: "2025-02-20",
  vite: {
    plugins: [svgLoader()],
  },
});
