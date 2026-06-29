import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'fs'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(), 
    tailwindcss(),
    {
      name: 'copy-index-to-404',
      closeBundle() {
        fs.copyFileSync('dist/index.html', 'dist/404.html')
      }
    }
  ],
})
