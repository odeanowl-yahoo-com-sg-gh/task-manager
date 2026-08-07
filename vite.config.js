import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// HIGHLIGHT: Tailwind v4 must use the dedicated Vite plugin package.
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // HIGHLIGHT: Enables @import "tailwindcss" processing in src/index.css.
    tailwindcss(),
  ],
})
