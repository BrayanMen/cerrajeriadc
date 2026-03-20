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
      "Content-Security-Policy": "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: https://www.googletagmanager.com https://*.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://www.googleadservices.com https://*.googleadservices.com https://googleads.g.doubleclick.net https://*.doubleclick.net https://www.google.com https://*.google.com https://www.google.com.ar https://*.google.com.ar https://cdn.jsdelivr.net; connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://www.googletagmanager.com https://*.googletagmanager.com https://www.google.com https://*.google.com https://www.google.com.ar https://*.google.com.ar https://googleads.g.doubleclick.net https://*.doubleclick.net; img-src 'self' data: https://www.google-analytics.com https://*.google-analytics.com https://www.googletagmanager.com https://*.googletagmanager.com https://www.google.com https://*.google.com https://www.google.com.ar https://*.google.com.ar https://googleads.g.doubleclick.net https://*.doubleclick.net; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.jsdelivr.net; font-src 'self' data: https://fonts.gstatic.com https://cdn.jsdelivr.net; frame-src 'self' https://www.googletagmanager.com https://*.googletagmanager.com https://td.doubleclick.net https://*.doubleclick.net https://www.google.com https://*.google.com; worker-src 'self' blob:;"
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
