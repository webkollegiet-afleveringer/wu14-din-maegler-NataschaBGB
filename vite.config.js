import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // base: "/wu14-din-maegler-NataschaBGB/",
  plugins: [react()],
  build: {
    outDir: 'docs',
    emptyOutDir: true
  },
})
