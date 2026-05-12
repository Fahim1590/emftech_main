import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    sourcemap: false,
    minify: 'esbuild',
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        // Split heavy vendor libs into their own long-cacheable chunks.
        // When you change app code, browsers keep these cached.
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'i18n-vendor': ['i18next', 'react-i18next', 'i18next-browser-languagedetector'],
          'motion-vendor': ['framer-motion'],
          'forms-vendor': ['react-hook-form', '@hookform/resolvers', 'zod'],
          'particles-vendor': ['tsparticles', 'tsparticles-slim', 'react-tsparticles'],
          'swiper-vendor': ['swiper'],
          'supabase-vendor': ['@supabase/supabase-js'],
        },
      },
    },
  },
});
