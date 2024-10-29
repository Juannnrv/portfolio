import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://juannnrv.github.io/portfolio/',
  server: {
    port: 3000
  }
})
