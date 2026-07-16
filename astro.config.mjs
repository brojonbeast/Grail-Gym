// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import cloudflare from "@astrojs/cloudflare";

// Static output — deploys straight to Cloudflare Pages (no adapter needed).
// Add the @astrojs/cloudflare adapter later only if we need server-side logic.
export default defineConfig({
  site: "https://www.grailgymtx.com",

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: cloudflare()
});