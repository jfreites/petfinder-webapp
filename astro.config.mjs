// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import alpinejs from '@astrojs/alpinejs';

// https://astro.build/config
export default defineConfig({
  output: 'server',

  devToolbar: {
		enabled: false,
	},

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [alpinejs()]
});