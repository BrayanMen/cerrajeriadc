// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  site: 'https://cerrajeriadc.com.ar',
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()]
  },
  server: {
    headers: {
      "Strict-Transport-Security": "max-age=31536000; includeSubDomains; preload",
      "X-Frame-Options": "SAMEORIGIN",
      "X-Content-Type-Options": "nosniff",
      "Cross-Origin-Opener-Policy": "same-origin",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    }
  },

  integrations: [
    sitemap(),
    partytown({
      config: {
        forward: ["gtag","dataLayer.push"],
      },
    })
  ]
});
