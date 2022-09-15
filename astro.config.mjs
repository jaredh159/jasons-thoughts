import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: process.env.DEPLOY_PRIME_URL ?? `https://hender.blog`,
  integrations: [tailwind()],
  trailingSlash: `never`,
});
