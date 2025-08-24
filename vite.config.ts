import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss(), react()],
  base: '/cine-delices-front/', // IMPORTANT : ton repo
  build: { outDir: 'dist' },
});
