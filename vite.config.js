// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2020',
    cssCodeSplit: false,      // CSS é pequeno: 1 arquivo = 1 request
    assetsInlineLimit: 2048,  // ícones pequenos viram data-uri
    reportCompressedSize: false
  }
})

