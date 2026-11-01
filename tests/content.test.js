import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'
import { content, links } from '../src/content.js'
import { cv } from '../scripts/cv-data.mjs'

// Herkese açık bir sitede telefon numarası ve referans iletişim bilgisi olmamalı.
// Bu testler, biri ileride yanlışlıkla eklerse CI'ı kırmızıya çevirir.
const phonePattern = /(\+?90[\s-]?)?0?5\d{2}[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}/
const publicFiles = ['src/content.js', 'scripts/cv-data.mjs', 'index.html']

describe('gizlilik', () => {
  it.each(publicFiles)('%s telefon numarası içermez', (file) => {
    expect(readFileSync(file, 'utf8')).not.toMatch(phonePattern)
  })

  it.each(publicFiles)('%s referans bilgisi içermez', (file) => {
    const text = readFileSync(file, 'utf8').toLowerCase()
    expect(text).not.toContain('istikbal')
    expect(text).not.toContain('çelebi')
  })

  it('yalnızca CV’deki e-posta adresi kullanılır', () => {
    expect(links.email).toBe('melisa.yky2001@gmail.com')
    expect(cv.tr.email).toBe(links.email)
    expect(cv.en.email).toBe(links.email)
  })
})

// İki dilin aynı yapıda olduğunu doğrular: bir dile alan eklenip ötekine unutulursa yakalanır.
function shape(value) {
  if (Array.isArray(value)) return value.map(shape)
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.keys(value).sort().map((k) => [k, shape(value[k])]))
  }
  return typeof value
}

describe('çeviriler', () => {
  it('site metinleri TR ve EN için aynı yapıda', () => {
    const tr = structuredClone(content.tr)
    const en = structuredClone(content.en)
    // İngilizce yayın kartı, bildirinin özgün Türkçe adını ek olarak gösterir.
    delete en.publication.originalName
    expect(shape(en)).toEqual(shape(tr))
  })

  it('CV verisi TR ve EN için aynı yapıda', () => {
    const en = structuredClone(cv.en)
    en.publications.forEach((p) => delete p.original)
    expect(shape(en)).toEqual(shape(cv.tr))
  })

  it('her projenin bir dış bağlantısı ya da özel depo notu var', () => {
    for (const lang of ['tr', 'en']) {
      for (const item of content[lang].projects.items) {
        const hasLink = Object.values(item.links).some(Boolean)
        expect(hasLink || Boolean(item.privateNote), `${lang}/${item.key}`).toBe(true)
      }
    }
  })
})
