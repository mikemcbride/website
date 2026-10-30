// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://mikemcbride.dev",

  markdown: {
    shikiConfig: {
      theme: "github-dark",
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
