// CV PDF'lerini üretir (Playwright + Chromium ile HTML -> PDF).
//
//   npm run cv                                  -> public/ içine web sürümleri (telefonsuz, referanssız)
//   npm run cv -- --private ~/cv.private.json --out ~/cv
//                                               -> başvurular için kişisel sürümler (depoya girmez)
//
// cv.private.json örneği:
//   { "phone": "05xx xxx xx xx",
//     "references": [{ "name": "...", "role": { "tr": "...", "en": "..." }, "email": "...", "phone": "..." }] }

import { readFileSync, mkdirSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { chromium } from '@playwright/test'
import { cv } from './cv-data.mjs'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const args = process.argv.slice(2)
const argValue = (flag) => {
  const i = args.indexOf(flag)
  return i >= 0 ? args[i + 1] : undefined
}
const privatePath = argValue('--private')
const outDir = resolve(argValue('--out') ?? resolve(root, 'public'))
const priv = privatePath ? JSON.parse(readFileSync(privatePath, 'utf8')) : null

const esc = (s) =>
  String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c])

const bullets = (points) => `<ul>${points.map((p) => `<li>${esc(p)}</li>`).join('')}</ul>`

function entry(e) {
  const org = e.url ? `<a href="${esc(e.url)}">${esc(e.org)}</a>` : esc(e.org)
  return `<div class="entry">
    <div class="row"><strong>${esc(e.title)}</strong><span>${esc(e.date)}</span></div>
    <div class="row sub"><em>${org}</em><em>${esc(e.place ?? '')}</em></div>
    ${bullets(e.points)}
  </div>`
}

function render(d) {
  const contact = [
    esc(d.location),
    priv?.phone ? esc(priv.phone) : null,
    `<a href="mailto:${esc(d.email)}">${esc(d.email)}</a>`,
    `<a href="${esc(d.linkedin)}">LinkedIn</a>`,
    `<a href="${esc(d.github)}">GitHub</a>`,
    `<a href="${esc(d.site)}">${esc(d.siteLabel)}</a>`,
  ]
    .filter(Boolean)
    .join(' &nbsp;|&nbsp; ')

  const refs = priv?.references?.length
    ? priv.references
        .map(
          (r) => `<div class="entry"><strong>${esc(r.name)}</strong>
          <div class="sub"><em>${esc(r.role?.[d.lang] ?? r.role)}</em></div>
          <ul>${r.email ? `<li>E-mail: <a href="mailto:${esc(r.email)}">${esc(r.email)}</a></li>` : ''}${
            r.phone ? `<li>${esc(r.phone)}</li>` : ''
          }</ul></div>`,
        )
        .join('')
    : `<p>${esc(d.referencesOnRequest)}</p>`

  const s = d.sections
  return `<!doctype html><html lang="${d.lang}"><head><meta charset="utf-8"><title>${esc(d.name)} CV</title>
  <style>
    @page { size: A4; margin: 13mm 16mm 12mm; }
    * { box-sizing: border-box; }
    body { margin: 0; font-family: 'Times New Roman', 'Liberation Serif', 'Tinos', serif; font-size: 10.5pt; line-height: 1.28; color: #111; }
    a { color: #1f4e9a; text-decoration: underline; }
    h1 { margin: 0; font-size: 21pt; letter-spacing: 0.2px; }
    .role { margin-top: 1px; color: #1f4e9a; font-size: 12.5pt; font-weight: bold; }
    .contact { margin-top: 4px; color: #444; font-size: 9.8pt; }
    h2 { margin: 10px 0 4px; padding-bottom: 2px; border-bottom: 1.2px solid #1f4e9a; color: #1f4e9a; font-size: 11.8pt; text-transform: uppercase; letter-spacing: 0.4px; }
    p { margin: 0; text-align: justify; }
    .entry { margin-bottom: 6px; break-inside: avoid; }
    .row { display: flex; justify-content: space-between; gap: 12px; }
    .sub { color: #555; }
    .tech { color: #555; font-style: italic; font-size: 9.8pt; }
    ul { margin: 2px 0 0; padding-left: 16px; }
    li { margin: 1px 0; }
    .skills div { margin: 1.5px 0; }
    .project-name { font-weight: bold; }
  </style></head><body>
  <h1>${esc(d.name)}</h1>
  <div class="role">${esc(d.title)}</div>
  <div class="contact">${contact}</div>

  <h2>${esc(s.summary)}</h2><p>${esc(d.summary)}</p>
  <h2>${esc(s.work)}</h2>${d.work.map(entry).join('')}
  <h2>${esc(s.education)}</h2>${d.education.map(entry).join('')}
  <h2>${esc(s.skills)}</h2>
  <div class="skills">${d.skills.map(([k, v]) => `<div><strong>${esc(k)}:</strong> ${esc(v)}</div>`).join('')}</div>
  <h2>${esc(s.projects)}</h2>
  ${d.projects
    .map(
      (p) => `<div class="entry">
        <div class="project-name">${p.url ? `<a href="${esc(p.url)}">${esc(p.name)}</a>` : esc(p.name)}</div>
        <div class="tech">${esc(d.techLabel)}: ${esc(p.tech)}</div>${bullets(p.points)}</div>`,
    )
    .join('')}
  <h2>${esc(s.certs)}</h2>
  <div class="skills">${d.certs.map(([k, v]) => `<div><strong>${esc(k)}:</strong> ${esc(v)}</div>`).join('')}</div>
  <h2>${esc(s.publications)}</h2>
  ${d.publications
    .map(
      (p) => `<div class="entry"><div class="project-name"><a href="${esc(p.url)}">${esc(p.name)}</a></div>
      ${p.original ? `<div class="tech">${esc(p.original)}</div>` : ''}
      <div class="sub"><em>${esc(p.meta)}</em></div>${bullets(p.points)}</div>`,
    )
    .join('')}
  <h2>${esc(s.references)}</h2>${refs}
  </body></html>`
}

mkdirSync(outDir, { recursive: true })
const browser = await chromium.launch()
const page = await browser.newPage()
for (const lang of ['tr', 'en']) {
  const d = cv[lang]
  await page.setContent(render(d), { waitUntil: 'load' })
  const file = resolve(outDir, `Melisa_Yalcinkaya_CV${lang === 'en' ? '_EN' : ''}.pdf`)
  await page.pdf({ path: file, format: 'A4', printBackground: true, preferCSSPageSize: true, tagged: true })
  console.log('yazıldı:', file)
}
await browser.close()
