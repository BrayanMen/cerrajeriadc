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
      "Referrer-Policy": "strict-origin-when-cross-origin",
      "Content-Security-Policy": "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: https://www.googletagmanager.com https://www.google-analytics.com https://cdn.jsdelivr.net; connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://*.google-analytics.com; img-src 'self' data: https://www.google-analytics.com https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.jsdelivr.net; font-src 'self' data: https://fonts.gstatic.com https://cdn.jsdelivr.net; frame-src 'self' https://www.googletagmanager.com; worker-src 'self' blob:;"
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
