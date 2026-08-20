// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  // El sitio se renderiza en servidor, pero su contenido es prácticamente
  // estático: lo único que cambia con el tiempo son la cuenta atrás del
  // próximo ciclo y el índice de la frase del día, ambos por día natural.
  // Sin ISR, Vercel ejecutaba una función serverless en CADA visita para
  // regenerar el mismo HTML, sin caché de CDN por delante.
  output: 'server',

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    // Se sirve desde la CDN y se regenera como mucho una vez al día, que es
    // justo el ritmo al que cambia el contenido dependiente de la fecha.
    isr: {
      expiration: 60 * 60 * 24,
    },
  }),

  integrations: [react()],
});
