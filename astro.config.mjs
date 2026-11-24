// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://mikemcbride.dev",

  markdown: {
    // Code blocks are a single color to match the rest of the site; styled
    // via `.prose pre` in src/styles/global.css.
    syntaxHighlight: false,
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
