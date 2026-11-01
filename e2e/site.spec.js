import { expect, test } from '@playwright/test'

// 320 px (küçük telefon), 390 px (yaygın telefon) ve masaüstü; açık ve koyu temada.
const viewports = [320, 390, 1280]
const themes = ['light', 'dark']

for (const width of viewports) {
  for (const theme of themes) {
    test(`${width}px ${theme}: yatay taşma ve konsol hatası yok`, async ({ page }) => {
      const errors = []
      page.on('pageerror', (e) => errors.push(e.message))
      page.on('console', (m) => m.type() === 'error' && errors.push(m.text()))
      await page.emulateMedia({ colorScheme: theme })
      await page.setViewportSize({ width, height: 900 })
      await page.goto('/')

      for (const lang of ['tr', 'en']) {
        if (lang === 'en') await page.getByRole('button', { name: 'Switch to English' }).click()
        const overflow = await page.evaluate(() => ({
          scroll: document.documentElement.scrollWidth,
          inner: window.innerWidth,
          offenders: [...document.querySelectorAll('body *')]
            .filter((el) => el.getBoundingClientRect().right > window.innerWidth + 1)
            .slice(0, 5)
            .map((el) => `${el.tagName}.${el.className}`),
        }))
        expect(overflow.offenders, `${lang} taşan öğeler`).toEqual([])
        expect(overflow.scroll).toBeLessThanOrEqual(overflow.inner)
      }
      expect(errors).toEqual([])
    })
  }
}

test('mobil menü açılır, bağlantıya tıklayınca kapanır', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 800 })
  await page.goto('/')
  const nav = page.getByRole('navigation', { name: 'Ana menü' })
  await expect(nav.getByRole('link', { name: 'Projeler' })).toBeHidden()
  await page.getByRole('button', { name: 'Menüyü aç' }).click()
  await nav.getByRole('link', { name: 'Projeler' }).click()
  await expect(nav.getByRole('link', { name: 'Projeler' })).toBeHidden()
  await expect(page).toHaveURL(/#projects$/)
})

test('CV dosyaları yayında ve PDF', async ({ request }) => {
  for (const file of ['Melisa_Yalcinkaya_CV.pdf', 'Melisa_Yalcinkaya_CV_EN.pdf']) {
    const res = await request.get(`/${file}`)
    expect(res.status(), file).toBe(200)
    expect((await res.body()).subarray(0, 4).toString()).toBe('%PDF')
  }
})
