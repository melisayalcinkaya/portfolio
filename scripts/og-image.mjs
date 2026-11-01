// Bağlantı paylaşım görselini (public/og-image.png, 1200x630) sitenin giriş bölümünden üretir.
// Önce `npm run build && npx vite preview --port 4173` çalışıyor olmalı.
import { chromium } from '@playwright/test'

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, locale: 'tr-TR', reducedMotion: 'reduce' })
await page.goto('http://localhost:4173/')
await page.addStyleTag({
  content: '.site-header,.social,.hero-actions,.about{display:none!important} .page{padding-top:28px} .hero{padding-top:64px;min-height:574px}',
})
await page.screenshot({ path: 'public/og-image.png' })
await browser.close()
console.log('yazıldı: public/og-image.png')
