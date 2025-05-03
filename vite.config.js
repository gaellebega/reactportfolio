import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  root: './', // Make sure Vite uses the root folder
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure the output directory is 'dist'
  }
})
