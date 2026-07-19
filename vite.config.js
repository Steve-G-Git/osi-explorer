import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // GitHub Pages will publish this project at:
  // https://Steve-G-Git.github.io/osi-explorer/
  base: '/osi-explorer/',
  plugins: [react()],
})
