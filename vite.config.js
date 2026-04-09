import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    base: "/wu14-din-maegler-NataschaBGB/",
    outDir: 'docs',
    emptyOutDir: true
  },
})
