// @ts-check
import { defineConfig } from 'astro/config';

// 🔴 AJOUT OBLIGATOIRE POUR REACT
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()]  // 🔴 AJOUT OBLIGATOIRE
});
