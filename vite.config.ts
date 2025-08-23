import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss(), react()],
  // IMPORTANT : nom EXACT de ton repo GitHub
  base: '/cine-delices-front/',
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
  
});
