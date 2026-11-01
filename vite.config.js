import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' -> derlenen dosyalar göreli yollarla bağlanır. Site GitHub Pages'te
// /portfolio/ altında da, depo adı değişirse başka bir yolda da çalışır.
export default defineConfig({
  base: './',
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./tests/setup.js'],
    include: ['tests/**/*.test.{js,jsx}'],
    css: false,
  },
})
