import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://eglparadox.github.io/Kasa---P11---OpenClassroom',
  plugins: [react()],
})
