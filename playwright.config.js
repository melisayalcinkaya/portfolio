import { defineConfig } from '@playwright/test'

// Derlenmiş siteyi `vite preview` ile açıp gerçek Chromium'da dener.
export default defineConfig({
  testDir: 'e2e',
  reporter: process.env.CI ? 'github' : 'list',
  use: { baseURL: 'http://localhost:4173', reducedMotion: 'reduce', locale: 'tr-TR' },
  webServer: {
    command: 'npm run build && npx vite preview --port 4173 --strictPort',
    url: 'http://localhost:4173',
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
})
